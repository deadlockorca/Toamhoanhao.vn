import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { matchPatchColour } from "./media-audit/match-patch-colour.mjs";

const repository = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const args = process.argv.slice(2);
const option = (name, fallback) =>
  args.find((arg) => arg.startsWith(name + "="))?.slice(name.length + 1) ??
  fallback;
const directory = path.resolve(
  option(
    "--trial",
    path.join(os.homedir(), "Documents/Toamhoanhao-media/trial-20-2026-10-16"),
  ),
);
const realDirectory = await fs.realpath(directory);
const realRepository = await fs.realpath(repository);
if (
  realDirectory === realRepository ||
  realDirectory.startsWith(realRepository + path.sep)
)
  throw new Error("Trial images must stay outside the repository.");
const resolve = (file) => {
  const result = path.resolve(directory, file);
  if (!result.startsWith(directory + path.sep))
    throw new Error("Invalid trial-relative path");
  return result;
};
const manifest = JSON.parse(
  await fs.readFile(resolve("manifest.json"), "utf8"),
);
const expectedCount = manifest.expectedCount ?? 20;
try {
  const overrides = JSON.parse(
    await fs.readFile(resolve("cleanup-overrides.json"), "utf8"),
  );
  for (const job of manifest.jobs)
    if (overrides[job.number]) job.cleanupZones = overrides[job.number];
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
if (
  !Number.isInteger(expectedCount) ||
  expectedCount < 1 ||
  expectedCount > 1000 ||
  manifest.jobs.length !== expectedCount ||
  new Set(manifest.jobs.map((job) => job.number)).size !== expectedCount ||
  manifest.jobs.some((job) => !["project", "designSample"].includes(job.kind))
)
  throw new Error("Invalid project/design image batch manifest.");
const sha256 = (buffer) =>
  crypto.createHash("sha256").update(buffer).digest("hex");
async function save() {
  await fs.writeFile(
    resolve("manifest.json.tmp"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
  await fs.rename(resolve("manifest.json.tmp"), resolve("manifest.json"));
}
const selected = option("--job");
const jobs = selected
  ? manifest.jobs.filter((job) => job.number === Number(selected))
  : manifest.jobs;
if (!jobs.length) throw new Error("Unknown trial job");
const mode = args.find((arg) => !arg.startsWith("--")) ?? "status";

async function record(job, source) {
  const bytes = await fs.readFile(source);
  const metadata = await sharp(bytes).metadata();
  if (metadata.format !== "png")
    throw new Error("Expected a PNG from image_gen");
  if (job.aiSourceSha256 === sha256(bytes)) return;
  if (job.aiSourceSha256) {
    const version = (job.aiHistory?.length ?? 0) + 2;
    job.aiHistory = [
      ...(job.aiHistory ?? []),
      { path: job.aiCleaned, sourceSha256: job.aiSourceSha256 },
    ];
    job.aiCleaned = job.aiCleaned.replace(
      /(?:-v\d+)?\.png$/,
      `-v${version}.png`,
    );
  }
  await fs.copyFile(source, resolve(job.aiCleaned), fs.constants.COPYFILE_EXCL);
  job.aiSourceSha256 = sha256(bytes);
  job.generatedSource = source;
  job.aiDimensions = { width: metadata.width, height: metadata.height };
  job.aiAspectRatioError = Math.abs(
    metadata.width / metadata.height / (job.width / job.height) - 1,
  );
  job.status = "ai_ready";
  await save();
}
async function render(job) {
  const sourceBytes = await fs.readFile(job.sourceOriginal);
  if (sha256(sourceBytes) !== job.sourceSha256)
    throw new Error(`Original source hash mismatch: ${job.number}`);
  const original = await sharp(resolve(job.before))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = original.info;
  let pixels = Buffer.from(original.data),
    maskData = Buffer.alloc(width * height);
  if (job.method === "ai_cleanup_then_script_logo") {
    if (!job.aiSourceSha256) return false;
    if (job.aiAspectRatioError > 0.03) {
      job.status = "needs_aspect_ratio_review";
      await save();
      return false;
    }
    let cleaned = await sharp(resolve(job.aiCleaned))
      .resize(width, height, { fit: "fill" })
      .ensureAlpha()
      .raw()
      .toBuffer();
    const rectangles = job.cleanupZones
      .map((zone) => {
        if (
          [zone.x, zone.y, zone.width, zone.height].some(
            (value) => !Number.isFinite(value),
          ) ||
          zone.x < 0 ||
          zone.y < 0 ||
          zone.width <= 0 ||
          zone.height <= 0 ||
          zone.x + zone.width > 1.000001 ||
          zone.y + zone.height > 1.000001
        )
          throw new Error("Invalid cleanup zone");
        return `<rect x="${zone.x * width}" y="${zone.y * height}" width="${zone.width * width}" height="${zone.height * height}" fill="white"/>`;
      })
      .join("");
    const svg = Buffer.from(
      `<svg width="${width}" height="${height}"><rect width="100%" height="100%" fill="black"/>${rectangles}</svg>`,
    );
    const mask = await sharp(svg)
      .removeAlpha()
      .greyscale()
      .blur(2)
      .raw()
      .toBuffer({ resolveWithObject: true });
    maskData = mask.data;
    if (mask.info.channels !== 1)
      throw new Error("Expected a one-channel mask");
    cleaned = await matchPatchColour(
      original.data,
      cleaned,
      maskData,
      width,
      height,
    );
    for (let i = 0; i < width * height; i++) {
      const alpha = maskData[i];
      if (!alpha) continue;
      for (let channel = 0; channel < 3; channel++)
        pixels[i * 4 + channel] = Math.round(
          (cleaned[i * 4 + channel] * alpha +
            original.data[i * 4 + channel] * (255 - alpha)) /
            255,
        );
    }
  }
  let protectedPixels = 0,
    cleanupPixels = 0;
  for (let i = 0; i < maskData.length; i++) {
    if (maskData[i]) {
      cleanupPixels++;
      continue;
    }
    protectedPixels++;
    for (let channel = 0; channel < 4; channel++)
      if (pixels[i * 4 + channel] !== original.data[i * 4 + channel])
        throw new Error("Pixels outside cleanup mask changed");
  }
  await fs.mkdir(resolve("clean-composite"), { recursive: true });
  await fs.mkdir(resolve("masks"), { recursive: true });
  const intermediate = `clean-composite/${String(job.number).padStart(2, "0")}.png`;
  await sharp(pixels, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(resolve(intermediate));
  await sharp(maskData, { raw: { width, height, channels: 1 } })
    .png()
    .toFile(resolve(`masks/${String(job.number).padStart(2, "0")}.png`));
  if (args.includes("--clean-only")) {
    job.cleanComposite = intermediate;
    job.cleanedAt = new Date().toISOString();
    job.status = "cleaned_pending_visual_review";
    job.verification = {
      boundaryColourMatched: true,
      originalHashVerified: true,
      dimensionsPreserved: true,
      outsideCleanupMaskUnchanged: true,
      protectedPixels,
      cleanupAreaPercent: Number(
        ((cleanupPixels / (width * height)) * 100).toFixed(2),
      ),
      logoAdded: false,
    };
    await save();
    return true;
  }
  // Only trim transparent padding; the approved logo's artwork is not regenerated.
  const logo = await sharp(resolve(manifest.logo))
    .trim({ threshold: 8 })
    .png()
    .toBuffer();
  const logoWidth = Math.round(
    width * manifest.logoPlacement.visibleWidthRatio,
  );
  const resized = await sharp(logo)
    .resize({ width: logoWidth })
    .png()
    .toBuffer({ resolveWithObject: true });
  const margin = Math.max(
    12,
    Math.round(height * manifest.logoPlacement.bottomMarginRatio),
  );
  const left = Math.round((width - resized.info.width) / 2);
  const top = height - margin - resized.info.height;
  if (top < 0) throw new Error("Logo does not fit in source image");
  await sharp(pixels, { raw: { width, height, channels: 4 } })
    .composite([{ input: resized.data, left, top }])
    .png()
    .toFile(resolve(job.after));
  const after = await sharp(resolve(job.after))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  if (after.info.width !== width || after.info.height !== height)
    throw new Error("Output dimensions changed");
  let unchangedOutsideEdits = 0;
  for (let i = 0; i < width * height; i++) {
    const x = i % width,
      y = Math.floor(i / width);
    if (
      maskData[i] ||
      (x >= left &&
        x < left + resized.info.width &&
        y >= top &&
        y < top + resized.info.height)
    )
      continue;
    for (let channel = 0; channel < 4; channel++)
      if (after.data[i * 4 + channel] !== original.data[i * 4 + channel])
        throw new Error(`Unexpected output change at ${x},${y}`);
    unchangedOutsideEdits++;
  }
  job.status = "rendered_pending_visual_review";
  job.cleanComposite = intermediate;
  job.logoBox = {
    left,
    top,
    width: resized.info.width,
    height: resized.info.height,
    bottomMargin: margin,
  };
  job.verification = {
    boundaryColourMatched: true,
    originalHashVerified: true,
    dimensionsPreserved: true,
    outsideCleanupMaskUnchanged: true,
    outsideCleanupAndLogoUnchanged: true,
    protectedPixels,
    unchangedOutsideEdits,
    cleanupAreaPercent: Number(
      ((cleanupPixels / (width * height)) * 100).toFixed(2),
    ),
    logoSourceSha256: sha256(await fs.readFile(resolve(manifest.logo))),
  };
  job.renderedAt = new Date().toISOString();
  await save();
  return true;
}
const escape = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
async function report() {
  const completed = manifest.jobs.filter(
    (job) => job.status === "rendered_pending_visual_review",
  );
  const cards = manifest.jobs
    .map(
      (job) =>
        `<article id="image-${job.number}"><h2>${job.number}. ${escape(job.title)}</h2><p>${escape(job.kind)} · ${escape(job.method)} · ${escape(job.status)}</p><div class="pair"><figure><a href="${escape(job.before)}" target="_blank"><img loading="lazy" src="${escape(job.before)}"></a><figcaption>Trước</figcaption></figure><figure>${job.renderedAt ? `<a href="${escape(job.after)}" target="_blank"><img loading="lazy" src="${escape(job.after)}"></a>` : "<p>Đang xử lý</p>"}<figcaption>Sau</figcaption></figure></div>${job.verification ? `<p>Vùng làm sạch: ${job.verification.cleanupAreaPercent}% ảnh. Pixel ngoài vùng làm sạch và logo được giữ nguyên. Kích thước: ${job.width} × ${job.height}.</p>` : ""}<p>${escape(job.reviewNote ?? "Cần duyệt chi tiết vùng xóa dấu cũ trước khi dùng chính thức.")}</p></article>`,
    )
    .join("");
  const navigation = Array.from(
    { length: Math.ceil(expectedCount / 20) },
    (_, index) =>
      `<a href="comparison-pages/page-${index + 1}.jpg">Ảnh ${index * 20 + 1}–${Math.min(expectedCount, (index + 1) * 20)}</a>`,
  ).join(" · ");
  const html = `<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Lô ${expectedCount} ảnh — Tổ Ấm Hoàn Hảo</title><style>body{font:15px/1.6 system-ui;margin:24px;background:#f7f3ed;color:#29251f}header{padding:24px;border-radius:16px;background:white}article{margin:28px 0;padding:24px;border:1px solid #e1d7cb;border-radius:16px;background:white}h2{font-size:20px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:16px}figure{margin:0;min-width:0}img{display:block;width:100%;height:auto;border-radius:8px}figcaption{text-align:center;font-weight:700;margin-top:8px}a{color:#9c581f}@media(max-width:700px){body{margin:12px}article{padding:12px}.pair{grid-template-columns:1fr}}</style><header><h1>Lô ${expectedCount} ảnh</h1><p>${completed.length}/${expectedCount} ảnh đã xuất. Logo dùng chung một file, căn giữa phía dưới. Các ảnh đang chờ duyệt, chưa đưa lên website hay R2.</p><a href="comparison.jpg">${expectedCount > 200 ? "Xem tổng hợp 200 ảnh đầu" : "Xem bảng tổng hợp"}</a> · <a href="manifest.json">Thông tin xử lý</a>${expectedCount > 20 ? `<p>${navigation}</p>` : ""}</header>${cards}</html>`;
  await fs.writeFile(resolve("review.html"), html);
  // Larger batches use the paginated comparison sheets to avoid JPEG's height limit.
  const overviewJobs = manifest.jobs.slice(0, 200);
  const composites = [],
    cellW = 600,
    cellH = 265;
  for (let index = 0; index < overviewJobs.length; index++) {
    const job = overviewJobs[index],
      left = (index % 2) * cellW,
      top = Math.floor(index / 2) * cellH;
    for (const [side, file] of [
      [0, job.before],
      [1, job.renderedAt ? job.after : job.before],
    ]) {
      const thumb = await sharp(resolve(file))
        .resize({
          width: 300,
          height: 225,
          fit: "contain",
          background: "white",
        })
        .jpeg()
        .toBuffer();
      composites.push({ input: thumb, left: left + side * 300, top });
    }
    const label = Buffer.from(
      `<svg width="600" height="40"><rect width="600" height="40" fill="white"/><text x="8" y="16" font-size="13">${job.number}. ${job.kind} — BEFORE / AFTER</text><text x="8" y="33" font-size="11">${escape(job.status)}</text></svg>`,
    );
    composites.push({ input: label, left, top: top + 225 });
  }
  await sharp({
    create: {
      width: 1200,
      height: Math.ceil(overviewJobs.length / 2) * cellH,
      channels: 3,
      background: "white",
    },
  })
    .composite(composites)
    .jpeg({ quality: 90 })
    .toFile(resolve("comparison.jpg"));
  console.log(
    JSON.stringify({
      directory,
      selected: expectedCount,
      rendered: completed.length,
      pending: manifest.jobs
        .filter((job) => !job.renderedAt)
        .map((job) => job.number),
      sourceAndR2Changes: 0,
    }),
  );
}
if (mode === "record") {
  if (jobs.length !== 1 || !option("--source"))
    throw new Error("record requires --job=N --source=/absolute/file.png");
  await record(jobs[0], path.resolve(option("--source")));
  console.log(
    JSON.stringify({
      recorded: jobs[0].number,
      aiCleaned: resolve(jobs[0].aiCleaned),
    }),
  );
} else if (mode === "render") {
  for (const job of jobs) await render(job);
  if (!args.includes("--no-report")) await report();
} else if (mode === "report") await report();
else if (mode === "status")
  console.log(
    JSON.stringify(
      manifest.jobs.map(({ number, method, status, generatedSource }) => ({
        number,
        method,
        status,
        generatedSource,
      })),
      null,
      2,
    ),
  );
else
  throw new Error(
    "Use status, record --job=N --source=..., render [--job=N], or report.",
  );
