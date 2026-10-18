import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(os.homedir(), "Documents/Toamhoanhao-media");
const audit = path.join(root, "media-watermark-audit");
const args = process.argv.slice(2);
const option = (name, fallback) =>
  args.find((a) => a.startsWith(name + "="))?.slice(name.length + 1) ??
  fallback;
const expectedCount = Number(option("--count", "100"));
const projectCount = Number(option("--projects", String(expectedCount / 2)));
if (
  !Number.isInteger(expectedCount) ||
  expectedCount < 1 ||
  expectedCount > 1000 ||
  !Number.isInteger(projectCount) ||
  projectCount < 0 ||
  projectCount > expectedCount
)
  throw new Error("Invalid batch counts");
const directory = path.resolve(
  option("--batch", path.join(root, "batch-100-2026-10-16-v2")),
);
const repository = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
await fs.mkdir(directory, { recursive: true });
const realDirectory = await fs.realpath(directory);
const realRepository = await fs.realpath(repository);
if (
  realDirectory === realRepository ||
  realDirectory.startsWith(realRepository + path.sep)
)
  throw new Error("Media must stay outside the repository");
try {
  await fs.access(path.join(directory, "manifest.json"));
  throw new Error("Batch already exists; resume it instead of replacing it");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const classification = JSON.parse(
  await fs.readFile(path.join(audit, "classification.json")),
);
const previous = JSON.parse(
  await fs.readFile(path.join(root, "trial-20-2026-10-16/manifest.json")),
);
const used = new Set(previous.jobs.map((job) => job.sourceSha256));
try {
  const index = JSON.parse(
    await fs.readFile(path.join(root, "processing-index.json")),
  );
  for (const r of index.records) used.add(r.sourceSha256);
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
try {
  const rejected = JSON.parse(
    await fs.readFile(
      path.join(root, "batch-100-2026-10-16-v2/reserve/rejected-input-31.json"),
    ),
  );
  const job = rejected.job ?? rejected;
  if (job.sourceSha256) used.add(job.sourceSha256);
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
const excludedSourceHashes = [...used];
const eligible = classification.assets.filter(
  (a) =>
    a.group === "edge_or_corner" &&
    a.sourceSha256 &&
    !used.has(a.sourceSha256) &&
    a.brands.length &&
    a.brands.every((b) => b === "to_am_hoan_hao") &&
    a.candidates.length &&
    a.candidates.every((c) => c.y > 0.8 || c.y + c.height < 0.18) &&
    a.width >= 500 &&
    a.height >= 350 &&
    Math.max(a.width / a.height, a.height / a.width) < 3,
);
const first = JSON.parse(
  await fs.readFile(path.join(root, "batch-100-2026-10-16/manifest.json")),
);
const goodProjects = new Set(
  first.jobs
    .filter(
      (j) =>
        j.kind === "project" &&
        ![
          1, 9, 14, 20, 23, 24, 25, 26, 29, 30, 32, 34, 35, 36, 37, 38, 39, 40,
          41, 45, 46, 47, 48, 49, 50,
        ].includes(j.number),
    )
    .map((j) => j.slug),
);
const rejectedAssets = new Set(
  first.jobs.filter((j) => [59, 64, 72].includes(j.number)).map((j) => j.id),
);
const chosen = [];
for (const kind of ["project", "designSample"]) {
  const records = new Map();
  for (const asset of eligible) {
    const usage = asset.usages.find((u) => u.kind === kind);
    if (
      !usage ||
      (kind === "project" &&
        !args.includes("--all-projects") &&
        !goodProjects.has(usage.slug)) ||
      rejectedAssets.has(asset.id)
    )
      continue;
    if (!records.has(usage.slug)) records.set(usage.slug, []);
    records.get(usage.slug).push(asset);
  }
  for (const assets of records.values())
    assets.sort((a, b) => a.candidates.length - b.candidates.length);
  const target =
    kind === "project" ? projectCount : expectedCount - projectCount;
  if (target === 0) continue;
  let count = 0;
  for (let round = 0; count < target && round < 1000; round++) {
    for (const assets of records.values()) {
      const a = assets[round];
      if (!a || used.has(a.sourceSha256)) continue;
      chosen.push({ asset: a, usage: a.usages.find((u) => u.kind === kind) });
      used.add(a.sourceSha256);
      if (++count === target) break;
    }
  }
  if (count !== target)
    throw new Error(`Not enough distinct eligible ${kind} images`);
}
for (const sub of [
  "before",
  "after",
  "ai-cleaned",
  "prompts",
  "assets",
  "selection",
  "ocr-after",
])
  await fs.mkdir(path.join(directory, sub), { recursive: true });
await fs.copyFile(
  path.join(root, "branding/logo-to-am-hoan-hao-transparent-v1.png"),
  path.join(directory, "assets/logo-approved.png"),
  fs.constants.COPYFILE_EXCL,
);
const jobs = [];
for (const [index, { asset: a, usage: u }] of chosen.entries()) {
  const number = index + 1;
  const stem = `${String(number).padStart(3, "0")}-${u.kind}-${a.id.slice(0, 12)}`;
  const sourceOriginal = path.join(audit, a.original);
  const source = await fs.readFile(sourceOriginal);
  if (
    crypto.createHash("sha256").update(source).digest("hex") !== a.sourceSha256
  )
    throw new Error("Original hash mismatch");
  await sharp(source)
    .rotate()
    .toColourspace("srgb")
    .png()
    .toFile(path.join(directory, `before/${stem}.png`));
  const cleanupZones = [];
  const upper = a.candidates.filter((c) => c.y < 0.5);
  const lower = a.candidates.filter((c) => c.y > 0.5);
  for (const candidates of [upper, lower]) {
    if (!candidates.length) continue;
    const left = Math.min(...candidates.map((c) => c.x));
    const right = Math.max(...candidates.map((c) => c.x + c.width));
    const top = Math.min(...candidates.map((c) => c.y));
    const bottom = Math.max(...candidates.map((c) => c.y + c.height));
    const x = left < 0.35 ? 0 : Math.max(0, left - 0.12);
    const end = right > 0.65 ? 1 : Math.min(1, right + 0.055);
    const y = candidates === upper ? 0 : Math.max(0.76, top - 0.045);
    const endY = candidates === upper ? Math.min(0.24, bottom + 0.06) : 1;
    cleanupZones.push({ x, y, width: end - x, height: endY - y });
  }
  const prompt = `Use case: precise-object-edit. Input image 1 is the edit target: an existing architecture/interior photograph. Remove all superimposed digital branding from this photo: Tổ Ấm Hoàn Hảo logos (including flame symbols and small slogans), repeated website/brand strips, phone numbers and contact credits. Reconstruct only the obscured pixels to match the immediate surroundings. Digital branding was detected near ${upper.length ? "the upper edge/corners" : ""}${upper.length && lower.length ? " and " : ""}${lower.length ? "the lower edge/corners" : ""}. Inspect all corners and edges for additional marks. Keep real venue signage, decorative lettering, artwork and object labels. Preserve the original room/building, furniture, materials, straight lines, perspective, camera position, full framing, original aspect ratio, colors and lighting. Do not redesign, enhance, crop, zoom or reposition anything. Do not add any new logo, text, website or watermark; an approved logo will be stamped separately by script. Output only the cleaned version of the supplied photograph, with the exact same complete composition.`;
  await fs.writeFile(
    path.join(directory, `prompts/${String(number).padStart(3, "0")}.txt`),
    prompt + "\n",
  );
  jobs.push({
    number,
    id: a.id,
    kind: u.kind,
    slug: u.slug,
    title: u.title,
    group: a.group,
    sourceSha256: a.sourceSha256,
    sourceUrl: a.url,
    sourceOriginal,
    width: a.width,
    height: a.height,
    usages: a.usages,
    sameContentUrls: classification.assets
      .filter((b) => b.sourceSha256 === a.sourceSha256)
      .map((b) => b.url),
    before: `before/${stem}.png`,
    after: `after/${stem}.png`,
    aiCleaned: `ai-cleaned/${stem}.png`,
    cleanupZones,
    method: "ai_cleanup_then_script_logo",
    status: "prepared",
    prompt,
    observations: a.observations,
    candidates: a.candidates,
    reviewNote:
      "Chờ duyệt vùng làm sạch ở kích thước lớn trước khi dùng chính thức.",
  });
}
const manifest = {
  createdAt: new Date().toISOString(),
  expectedCount,
  status: "in_progress",
  scope: ["Project", "DesignSample"],
  logo: "assets/logo-approved.png",
  logoPlacement: previous.logoPlacement,
  excludedSourceHashes,
  jobs,
};
await fs.writeFile(
  path.join(directory, "manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
  { flag: "wx" },
);
for (let page = 0; page < Math.ceil(expectedCount / 20); page++) {
  const tiles = [];
  for (let i = 0; i < 20; i++) {
    const job = jobs[page * 20 + i];
    if (!job) break;
    tiles.push({
      input: await sharp(path.join(directory, job.before))
        .resize(320, 220, { fit: "contain", background: "white" })
        .jpeg()
        .toBuffer(),
      left: (i % 4) * 320,
      top: Math.floor(i / 4) * 245,
    });
    tiles.push({
      input: Buffer.from(
        `<svg width="320" height="25"><rect width="320" height="25" fill="white"/><text x="8" y="18" font-size="16">${job.number} — ${job.kind}</text></svg>`,
      ),
      left: (i % 4) * 320,
      top: Math.floor(i / 4) * 245 + 220,
    });
  }
  await sharp({
    create: { width: 1280, height: 1225, channels: 3, background: "white" },
  })
    .composite(tiles)
    .jpeg({ quality: 95 })
    .toFile(path.join(directory, `selection/page-${page + 1}.jpg`));
}
console.log(
  JSON.stringify({
    directory,
    selected: jobs.length,
    projects: projectCount,
    designSamples: expectedCount - projectCount,
    uniqueSourceHashes: used.size - excludedSourceHashes.length,
  }),
);
