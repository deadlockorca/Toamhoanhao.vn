import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const directory = path.resolve(
  process.argv.find((a) => a.startsWith("--batch="))?.slice(8) ?? "",
);
const repository = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const realDirectory = await fs.realpath(directory);
const realRepository = await fs.realpath(repository);
if (
  realDirectory === realRepository ||
  realDirectory.startsWith(realRepository + path.sep)
)
  throw new Error("Review output must stay outside the repository");
const manifest = JSON.parse(
  await fs.readFile(path.join(directory, "manifest.json")),
);
const jobs = manifest.jobs.filter((j) => j.renderedAt);
const hash = (b) => crypto.createHash("sha256").update(b).digest("hex");
const logoHash = hash(await fs.readFile(path.join(directory, manifest.logo)));
const files = [];
for (const job of jobs) {
  if (hash(await fs.readFile(job.sourceOriginal)) !== job.sourceSha256)
    throw new Error(`Source changed: ${job.number}`);
  if (job.verification.logoSourceSha256 !== logoHash)
    throw new Error(`Logo mismatch: ${job.number}`);
  const before = await sharp(path.join(directory, job.before))
    .ensureAlpha()
    .raw()
    .toBuffer();
  const output = await fs.readFile(path.join(directory, job.after));
  const after = await sharp(output)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  if (after.info.width !== job.width || after.info.height !== job.height)
    throw new Error(`Dimensions changed: ${job.number}`);
  const mask = await sharp(
    path.join(directory, "masks", String(job.number).padStart(2, "0") + ".png"),
  )
    .greyscale()
    .raw()
    .toBuffer();
  const box = job.logoBox;
  let checked = 0;
  for (let i = 0; i < mask.length; i++) {
    const x = i % job.width,
      y = Math.floor(i / job.width);
    if (
      mask[i] ||
      (x >= box.left &&
        x < box.left + box.width &&
        y >= box.top &&
        y < box.top + box.height)
    )
      continue;
    for (let c = 0; c < 4; c++)
      if (before[i * 4 + c] !== after.data[i * 4 + c])
        throw new Error(`Protected pixel changed: ${job.number}`);
    checked++;
  }
  files.push({
    number: job.number,
    file: job.after,
    sha256: hash(output),
    width: job.width,
    height: job.height,
    bytes: output.length,
    sourceHashUnchanged: true,
    protectedPixelsChecked: checked,
  });
}
const ocrDirectory = path.join(directory, "ocr-after");
await fs.mkdir(ocrDirectory, { recursive: true });
const ocrWorker = path.join(
  directory,
  "../media-watermark-audit/bin/recognize-text",
);
const ocr = await new Promise((resolve, reject) => {
  const child = spawn(ocrWorker, [], { stdio: ["pipe", "pipe", "pipe"] });
  let output = "",
    error = "";
  const timer = setTimeout(
    () => {
      child.kill();
      reject(new Error("OCR timed out"));
    },
    Math.max(60000, jobs.length * 4000),
  );
  child.stdout.on("data", (b) => (output += b));
  child.stderr.on("data", (b) => (error += b));
  child.on("error", reject);
  child.on("close", (code) => {
    clearTimeout(timer);
    if (code) reject(new Error(error || "OCR failed"));
    else
      resolve(output.trim() ? output.trim().split("\n").map(JSON.parse) : []);
  });
  child.stdin.end(
    jobs
      .map((j) => JSON.stringify({ path: path.join(directory, j.after) }))
      .join("\n") + "\n",
  );
});
if (ocr.length !== jobs.length) throw new Error("Incomplete OCR results");
const flags = [];
for (let i = 0; i < jobs.length; i++) {
  const job = jobs[i],
    result = ocr[i];
  if (result.error) throw new Error(`OCR failed on ${job.number}`);
  await fs.writeFile(
    path.join(ocrDirectory, String(job.number).padStart(3, "0") + ".json"),
    JSON.stringify(result, null, 2) + "\n",
  );
  const b = job.logoBox;
  for (const o of result.observations ?? []) {
    const x = (o.x + o.width / 2) * job.width,
      y = (o.y + o.height / 2) * job.height;
    if (
      x >= b.left - 4 &&
      x <= b.left + b.width + 4 &&
      y >= b.top - 4 &&
      y <= b.top + b.height + 4
    )
      continue;
    const t = o.text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const compact = t.replace(/[^a-z0-9]/g, "");
    if (
      /toamhoan|toamhao|anslife/.test(compact) ||
      /[a-z0-9]\.(com|vn)\b|@|(?:\d[ .-]?){9,}/i.test(t)
    )
      flags.push({ number: job.number, text: o.text, box: o });
  }
}
await fs.mkdir(path.join(directory, "comparison-pages"), { recursive: true });
const pages = [];
for (let page = 0; page < Math.ceil(manifest.jobs.length / 20); page++) {
  const list = manifest.jobs.slice(page * 20, (page + 1) * 20),
    tiles = [];
  for (const [i, job] of list.entries()) {
    const x = (i % 2) * 600,
      y = Math.floor(i / 2) * 265;
    for (const [side, file] of [
      [0, job.before],
      [1, job.renderedAt ? job.after : job.before],
    ])
      tiles.push({
        input: await sharp(path.join(directory, file))
          .resize(300, 225, { fit: "contain", background: "white" })
          .jpeg()
          .toBuffer(),
        left: x + side * 300,
        top: y,
      });
    tiles.push({
      input: Buffer.from(
        `<svg width="600" height="40"><rect width="600" height="40" fill="white"/><text x="8" y="16" font-size="14">${job.number}. TRƯỚC</text><text x="308" y="16" font-size="14" fill="#4b6540">SAU</text><text x="8" y="33" font-size="12">${job.renderedAt ? "Exported — pending review" : "Pending"}</text></svg>`,
      ),
      left: x,
      top: y + 225,
    });
  }
  const name = `comparison-pages/page-${page + 1}.jpg`;
  pages.push(name);
  await sharp({
    create: {
      width: 1200,
      height: Math.ceil(list.length / 2) * 265,
      channels: 3,
      background: "white",
    },
  })
    .composite(tiles)
    .jpeg({ quality: 93 })
    .toFile(path.join(directory, name));
}
const summary = {
  checkedAt: new Date().toISOString(),
  selected: manifest.jobs.length,
  rendered: jobs.length,
  pending: manifest.jobs.filter((j) => !j.renderedAt).map((j) => j.number),
  allOriginalHashesUnchanged: true,
  allOutputDimensionsPreserved: true,
  allProtectedPixelsUnchanged: true,
  logoSourceSha256: logoHash,
  ocrIsSupplementary: true,
  possibleResidualBranding: flags,
  userReviewPending: true,
  sourceAndR2Changes: 0,
  files,
  comparisonPages: pages,
};
await fs.writeFile(
  path.join(directory, "verification.json"),
  JSON.stringify(summary, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    rendered: jobs.length,
    pending: summary.pending,
    possibleResidualBranding: flags.map((f) => ({
      number: f.number,
      text: f.text,
    })),
    outputMB: Math.round(files.reduce((n, f) => n + f.bytes, 0) / 1048576),
  }),
);
