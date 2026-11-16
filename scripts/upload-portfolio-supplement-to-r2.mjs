import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import {
  S3Client,
  HeadObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const root =
  "/Users/bowthoois/Documents/Toamhoanhao-media/Ảnh/07 - Bổ sung 8 hồ sơ từ web cũ - 122 ảnh";
const apply = process.argv.includes("--apply");
const manifestPath = path.join(root, "manifest.json");
const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const reportPath = path.join(root, "r2-upload-report.json");
const sourcePath = "src/data/portfolio-imports.json";
const source = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const photos = manifest.jobs.filter(
  (job) => job.status !== "excluded_decorative_icon",
);
const excluded = new Set(
  manifest.jobs
    .filter((job) => job.status === "excluded_decorative_icon")
    .map((job) => job.file),
);
const sha = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");
const report = {
  createdAt: new Date().toISOString(),
  mode: apply ? "upload" : "check",
  images: [],
  errors: [],
  sourceUpdated: false,
};
const writeReport = () =>
  fs.writeFile(reportPath, JSON.stringify(report, null, 2) + "\n");
if (photos.length !== 120) throw Error("Expected 120 photos");
const keys = new Set();
const logo = await sharp(manifest.logo).trim({ threshold: 8 }).png().toBuffer();
const jobs = [];
for (const job of photos) {
  const file = path.join(root, job.after.replace(/\.png$/i, ".webp"));
  const bytes = await fs.readFile(file);
  const metadata = await sharp(bytes).metadata();
  if (metadata.format !== "webp") throw Error(`Not WebP: ${file}`);
  await sharp(bytes).stats(); // Decode the entire image, including the last rows.
  let reference;
  if (job.method === "reuse_previously_cleaned_and_stamped_image") {
    const directory = path.join(path.dirname(root), job.matchedSource.folder);
    const name = (await fs.readdir(directory)).find((name) =>
      name.startsWith("03 - Đã ghép logo - chờ duyệt."),
    );
    if (!name) throw Error(`Missing reference for ${job.number}`);
    reference = await fs.readFile(path.join(directory, name));
  } else {
    const box = job.logoBox;
    const stamp = await sharp(logo)
      .resize({ width: box.width })
      .png()
      .toBuffer();
    reference = await sharp(path.join(root, job.clean))
      .composite([{ input: stamp, left: box.left, top: box.top }])
      .png()
      .toBuffer();
  }
  const expected = await sharp(reference).metadata();
  if (expected.width !== metadata.width || expected.height !== metadata.height)
    throw Error(`Dimensions changed: ${job.number}`);
  const thumbnail = async (buffer, region) => {
    let image = sharp(buffer);
    if (region) image = image.extract(region);
    // Use identical full-resolution sampling for PNG and WebP. Decoder-side
    // shrinking otherwise aliases fine blinds/railings differently.
    return image
      .resize(64, 64, { fit: "fill", fastShrinkOnLoad: false })
      .removeAlpha()
      .raw()
      .toBuffer();
  };
  const difference = async (region) => {
    const [a, b] = await Promise.all([
      thumbnail(bytes, region),
      thumbnail(reference, region),
    ]);
    return (
      a.reduce((sum, value, i) => sum + Math.abs(value - b[i]), 0) / a.length
    );
  };
  const imageDifference = await difference();
  const box = job.logoBox;
  const logoDifference = box
    ? await difference({
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
      })
    : null;
  if (imageDifference > 8 || (logoDifference !== null && logoDifference > 12))
    throw Error(
      `Converted image differs from stamped reference: ${job.number}`,
    );
  const key = job.r2KeyAfterUserConversion;
  if (
    !key?.startsWith("web-moi/portfolio-imports/") ||
    !key.endsWith(".webp") ||
    key.includes("..") ||
    keys.has(key)
  )
    throw Error(`Invalid/duplicate key: ${key}`);
  keys.add(key);
  jobs.push({
    job,
    bytes,
    key,
    file,
    sha256: sha(bytes),
    width: metadata.width,
    height: metadata.height,
    imageDifference,
    logoDifference,
  });
}
console.log(
  `Verified ${jobs.length} WebPs: dimensions and image/logo content match stamped references.`,
);
if (!apply) process.exit(0);
const endpoint =
  process.env.R2_ENDPOINT ||
  (process.env.R2_ACCOUNT_ID
    ? `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`
    : "");
if (!endpoint) throw Error("Missing R2_ENDPOINT or R2_ACCOUNT_ID");
for (const name of [
  "R2_BUCKET",
  "R2_PUBLIC_BASE_URL",
  "R2_ACCESS_KEY_ID",
  "R2_SECRET_ACCESS_KEY",
])
  if (!process.env[name]) throw Error(`Missing ${name}`);
const bucket = process.env.R2_BUCKET;
const publicBase = process.env.R2_PUBLIC_BASE_URL.replace(/\/+$/, "");
if (
  bucket !== "toamhoanhao-media-v2" ||
  publicBase !== "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev"
)
  throw Error("Unexpected R2 destination");
const r2 = new S3Client({
  region: process.env.R2_REGION || "auto",
  endpoint,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});
let cursor = 0;
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (cursor < jobs.length) {
      const entry = jobs[cursor++];
      try {
        let existing;
        try {
          existing = await r2.send(
            new HeadObjectCommand({ Bucket: bucket, Key: entry.key }),
          );
        } catch (error) {
          if (
            error.$metadata?.httpStatusCode !== 404 &&
            error.name !== "NotFound"
          )
            throw error;
        }
        if (
          existing &&
          (existing.Metadata?.sha256 !== entry.sha256 ||
            existing.ContentLength !== entry.bytes.length)
        )
          throw Error(`Different object already exists: ${entry.key}`);
        if (!existing)
          await r2.send(
            new PutObjectCommand({
              Bucket: bucket,
              Key: entry.key,
              Body: entry.bytes,
              ContentType: "image/webp",
              CacheControl: "public, max-age=31536000, immutable",
              Metadata: { sha256: entry.sha256 },
              IfNoneMatch: "*",
            }),
          );
        const url = `${publicBase}/${entry.key}`;
        const response = await fetch(url, {
          signal: AbortSignal.timeout(30000),
        });
        if (
          !response.ok ||
          !response.headers.get("content-type")?.includes("image/webp")
        )
          throw Error(
            `Public URL unavailable: ${entry.key} (${response.status})`,
          );
        if (sha(Buffer.from(await response.arrayBuffer())) !== entry.sha256)
          throw Error(`Public hash mismatch: ${entry.key}`);
        report.images.push({
          number: entry.job.number,
          source: entry.job.file,
          file: entry.file,
          key: entry.key,
          url,
          sha256: entry.sha256,
          bytes: entry.bytes.length,
          width: entry.width,
          height: entry.height,
          imageDifference: entry.imageDifference,
          logoDifference: entry.logoDifference,
          status: existing ? "already_uploaded_verified" : "uploaded_verified",
        });
      } catch (error) {
        report.errors.push({
          number: entry.job.number,
          key: entry.key,
          error: String(error),
        });
      }
    }
  }),
);
report.images.sort((a, b) => a.number - b.number);
await writeReport();
if (report.errors.length || report.images.length !== 120)
  throw Error(`Upload incomplete; inspect ${reportPath}`);
const mapping = new Map(
  report.images.map((image) => [image.source, image.url]),
);
const omitted = (value) =>
  typeof value === "string"
    ? excluded.has(value)
    : value && typeof value === "object" && excluded.has(value.image);
let replacements = 0,
  removedDecorations = 0;
function rewrite(value) {
  if (typeof value === "string") {
    if (mapping.has(value)) {
      replacements++;
      return mapping.get(value);
    }
    return value;
  }
  if (Array.isArray(value))
    return value
      .filter((item) => {
        if (omitted(item)) {
          removedDecorations++;
          return false;
        }
        return true;
      })
      .map(rewrite);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, rewrite(item)]),
    );
  return value;
}
await fs
  .copyFile(
    sourcePath,
    path.join(
      root,
      "04 - Nguồn AI và kiểm tra/portfolio-imports-before-r2.json",
    ),
    fs.constants.COPYFILE_EXCL,
  )
  .catch((error) => {
    if (error.code !== "EEXIST") throw error;
  });
const updated = {
  ...source,
  projects: rewrite(source.projects),
  designSamples: rewrite(source.designSamples),
};
if (
  JSON.stringify([updated.projects, updated.designSamples]).includes(
    "/images/portfolio-imports/",
  )
)
  throw Error("Unmapped local image references remain");
await fs.writeFile(sourcePath, JSON.stringify(updated, null, 2) + "\n");
report.sourceUpdated = true;
report.replacements = replacements;
report.removedDecorations = removedDecorations;
report.completedAt = new Date().toISOString();
await writeReport();
manifest.webpConversionPerformed = true;
manifest.webpConvertedBy = "user";
manifest.r2Uploaded = true;
manifest.status = "uploaded_verified";
manifest.r2UploadedAt = report.completedAt;
manifest.websiteAssetsReplaced = "local_source_updated";
for (const image of report.images)
  Object.assign(
    manifest.jobs.find((job) => job.number === image.number),
    {
      webpFile: path.relative(root, image.file),
      webpSha256: image.sha256,
      r2Key: image.key,
      r2Url: image.url,
      r2VerifiedAt: report.completedAt,
    },
  );
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(
  `Uploaded and publicly verified ${report.images.length} images; updated ${replacements} source references; excluded ${removedDecorations} decorative gallery entries.`,
);
