import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const root = "/Users/bowthoois/Documents/Toamhoanhao-media";
const library = path.join(root, "Ảnh");
const catalogFile = path.join(library, "danh-mục.json");
const batch = path.join(root, "batch-1000-2026-10-17");
const manifestFile = path.join(batch, "manifest.json");
const options = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const index = arg.indexOf("=");
    if (!arg.startsWith("--") || index < 0)
      throw new Error("Expected --key=value");
    return [arg.slice(2, index), arg.slice(index + 1)];
  }),
);
const expected = Number(options.expected ?? 120);
if (!Number.isInteger(expected) || expected < 1)
  throw new Error("Invalid expected count");
const runFile =
  options.output ??
  path.join(root, "cleanup-runs/2026-10-17-stamp-category-1-120.json");
const read = async (p) => JSON.parse(await fs.readFile(p, "utf8"));
const hash = (b) => crypto.createHash("sha256").update(b).digest("hex");
const write = async (p, value) => {
  await fs.writeFile(p + ".tmp", JSON.stringify(value, null, 2) + "\n");
  await fs.rename(p + ".tmp", p);
};
const exists = async (p) => {
  try {
    await fs.lstat(p);
    return true;
  } catch (e) {
    if (e.code === "ENOENT") return false;
    throw e;
  }
};
const catalog = await read(catalogFile);
const manifest = await read(manifestFile);
if (await exists(runFile))
  throw new Error("Run already exists; inspect before resuming");
const selection = options.selection ? await read(options.selection) : null;
const sourceHashes = selection
  ? new Set(selection.jobs.map((job) => job.sourceSha256))
  : null;
const selected = [];
for (const row of catalog.images) {
  if (!row.category.startsWith("01 -") || !row.cleanAvailable) continue;
  if (sourceHashes && !sourceHashes.has(row.sourceSha256)) continue;
  const folder = path.join(library, row.folder);
  const names = await fs.readdir(folder);
  if (names.some((n) => n.startsWith("03 -"))) continue;
  const job = manifest.jobs.find((j) => j.sourceSha256 === row.sourceSha256);
  if (!job?.cleanedAt || !job.cleanComposite || job.renderedAt)
    throw new Error("Invalid clean-only source");
  const cleanFile = path.join(batch, job.cleanComposite);
  const cleanBytes = await fs.readFile(cleanFile);
  const libraryClean = path.join(
    folder,
    "02 - Đã xóa dấu - chưa ghép logo.png",
  );
  if (hash(await fs.readFile(libraryClean)) !== hash(cleanBytes))
    throw new Error("Clean source differs");
  if (hash(await fs.readFile(job.sourceOriginal)) !== job.sourceSha256)
    throw new Error("Original changed");
  if (await exists(path.join(batch, job.after)))
    throw new Error("Stamped destination exists");
  selected.push({
    number: job.number,
    sourceSha256: job.sourceSha256,
    folder: row.folder,
    cleanFile,
    cleanSha256: hash(cleanBytes),
    after: path.join(batch, job.after),
  });
}
if (
  selected.length !== expected ||
  new Set(selected.map((j) => j.sourceSha256)).size !== expected
)
  throw new Error(`Expected ${expected}, found ${selected.length}`);
const logoFile = path.join(batch, manifest.logo);
const logoBytes = await fs.readFile(logoFile);
const logo = await sharp(logoBytes).trim({ threshold: 8 }).png().toBuffer();
const run = {
  createdAt: new Date().toISOString(),
  requested: expected,
  scope: "category-1",
  logoFile,
  logoSha256: hash(logoBytes),
  placement: manifest.logoPlacement,
  jobs: selected,
  results: [],
  status: "stamping",
};
await write(runFile, run);
for (const selectedJob of selected) {
  const job = manifest.jobs.find((j) => j.number === selectedJob.number);
  const source = await sharp(selectedJob.cleanFile)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = source.info;
  const stamp = await sharp(logo)
    .resize({
      width: Math.round(width * manifest.logoPlacement.visibleWidthRatio),
    })
    .png()
    .toBuffer({ resolveWithObject: true });
  const margin = Math.max(
    12,
    Math.round(height * manifest.logoPlacement.bottomMarginRatio),
  );
  const box = {
    left: Math.round((width - stamp.info.width) / 2),
    top: height - margin - stamp.info.height,
    width: stamp.info.width,
    height: stamp.info.height,
    bottomMargin: margin,
  };
  if (box.top < 0) throw new Error("Logo does not fit");
  await sharp(source.data, { raw: source.info })
    .composite([{ input: stamp.data, left: box.left, top: box.top }])
    .png()
    .toFile(selectedJob.after);
  const resultBytes = await fs.readFile(selectedJob.after);
  const output = await sharp(resultBytes)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  if (output.info.width !== width || output.info.height !== height)
    throw new Error("Dimensions changed");
  let changedPixels = 0;
  for (let i = 0; i < width * height; i++) {
    const x = i % width,
      y = Math.floor(i / width);
    const differs = source.data
      .subarray(i * 4, i * 4 + 4)
      .some((v, c) => output.data[i * 4 + c] !== v);
    if (!differs) continue;
    if (
      x < box.left ||
      x >= box.left + box.width ||
      y < box.top ||
      y >= box.top + box.height
    )
      throw new Error("Changed outside logo box");
    changedPixels++;
  }
  if (!changedPixels) throw new Error("No logo pixels changed");
  if (
    hash(await fs.readFile(selectedJob.cleanFile)) !== selectedJob.cleanSha256
  )
    throw new Error("Clean source changed");
  const renderedAt = new Date().toISOString();
  const logoVerification = {
    dimensionsPreserved: true,
    cleanSourceUnchanged: true,
    outsideLogoBoxUnchanged: true,
    logoAdded: true,
    logoSourceSha256: run.logoSha256,
    changedPixels,
  };
  job.renderedAt = renderedAt;
  job.logoBox = box;
  job.logoVerification = logoVerification;
  job.status = "rendered_pending_visual_review";
  const folder = path.join(library, selectedJob.folder);
  const libraryName = "03 - Đã ghép logo - chờ duyệt.png";
  await fs.symlink(
    path.relative(folder, selectedJob.after),
    path.join(folder, libraryName),
  );
  const receipt = {
    number: job.number,
    sourceSha256: job.sourceSha256,
    cleanSha256: selectedJob.cleanSha256,
    outputSha256: hash(resultBytes),
    outputFile: selectedJob.after,
    libraryFile: path.join(folder, libraryName),
    renderedAt,
    logoBox: box,
    verification: logoVerification,
  };
  run.results.push(receipt);
  await write(runFile, run);
  if (run.results.length % 20 === 0)
    console.log(JSON.stringify({ stamped: run.results.length }));
}
// Reload current shared data and patch only the selected jobs/rows.
const currentManifest = await read(manifestFile);
for (const result of run.results) {
  const target = currentManifest.jobs.find(
    (j) => j.number === result.number && j.sourceSha256 === result.sourceSha256,
  );
  if (!target) throw new Error("Manifest identity changed");
  Object.assign(target, {
    renderedAt: result.renderedAt,
    logoBox: result.logoBox,
    logoVerification: result.verification,
    status: "rendered_pending_visual_review",
  });
}
await write(manifestFile, currentManifest);
const currentCatalog = await read(catalogFile);
for (const result of run.results) {
  const row = currentCatalog.images.find(
    (r) => r.sourceSha256 === result.sourceSha256,
  );
  if (!row?.category.startsWith("01 -"))
    throw new Error("Library category changed");
  row.logoAvailable = true;
  row.logoOutput = {
    file: path.basename(result.libraryFile),
    renderedAt: result.renderedAt,
    sha256: result.outputSha256,
    logoSha256: run.logoSha256,
    sourceCleanSha256: result.cleanSha256,
    reviewStatus: "Chưa xác nhận duyệt cuối",
  };
  row.provenance = { ...row.provenance, renderedAt: result.renderedAt };
  const infoFile = path.join(library, row.folder, "Thông tin.json");
  const info = await read(infoFile);
  Object.assign(info, {
    logoAvailable: row.logoAvailable,
    logoOutput: row.logoOutput,
    provenance: row.provenance,
  });
  await write(infoFile, info);
}
currentCatalog.summary.updatedAt = new Date().toISOString();
await write(catalogFile, currentCatalog);
await write(
  path.join(library, ".library-generated.json"),
  currentCatalog.summary,
);
const readmeFile = path.join(library, "00 - Đọc trước.txt");
let readme = await fs.readFile(readmeFile, "utf8");
readme = readme.replace(
  "03 chỉ là bản có logo đã xuất trước đây để tham khảo.",
  "03 là bản đã ghép logo; bản ghi ‘Tham khảo’ là kết quả từ các đợt trước.",
);
readme = readme.replace(
  "Chỉ tạo bản làm sạch từ ảnh gốc, chưa ghép logo mới; không thay đổi website, SQL hay R2.",
  "Giữ riêng bản sạch chưa logo và bản đã ghép logo; không thay đổi website, SQL hay R2.",
);
readme += `\nMục 01: đã ghép logo cho ${expected} bản sạch bổ sung ngày ${new Date().toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}; giữ bản 02 chưa logo, bản 03 có logo đang chờ duyệt.\n`;
await fs.writeFile(readmeFile, readme);
run.status = "complete_pending_user_review";
run.completedAt = new Date().toISOString();
await write(runFile, run);
console.log(JSON.stringify({ completed: run.results.length, runFile }));
