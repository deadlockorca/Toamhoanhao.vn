import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const argument = process.argv.find((a) => a.startsWith("--batch="));
if (!argument) throw new Error("Use --batch=/external/batch-directory");
const directory = await fs.realpath(argument.slice(8));
const repo = await fs.realpath(
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.."),
);
if (directory === repo || directory.startsWith(repo + path.sep))
  throw new Error("Keep media outside repository");
const manifest = JSON.parse(
  await fs.readFile(path.join(directory, "manifest.json")),
);
const sourceMode = process.argv.includes("--source");
const evidence = path.join(
  directory,
  sourceMode ? "deep-ocr-source" : "deep-ocr",
);
await fs.mkdir(evidence, { recursive: true });
const pending = [],
  reports = [];
for (const job of manifest.jobs.filter((j) => sourceMode || j.renderedAt)) {
  const source = await fs.readFile(
    path.join(directory, sourceMode ? job.before : job.after),
  );
  const afterSha256 = crypto.createHash("sha256").update(source).digest("hex");
  const reportFile = path.join(evidence, `${job.number}.json`);
  let cached;
  try {
    cached = JSON.parse(await fs.readFile(reportFile));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  if (cached?.afterSha256 === afterSha256) {
    reports.push(cached);
    continue;
  }
  const item = { number: job.number, afterSha256, observations: [], flags: [] };
  reports.push(item);
  for (let region = 0; region < 5; region++) {
    const top = Math.round(job.height * region * 0.2);
    const height = Math.min(job.height - top, Math.ceil(job.height * 0.25));
    const file = path.join(evidence, `${job.number}-${region}.jpg`);
    await sharp(source)
      .extract({ left: 0, top, width: job.width, height })
      .resize({ width: Math.min(2400, job.width * 2) })
      .linear(1.25, -16)
      .sharpen()
      .jpeg({ quality: 95 })
      .toFile(file);
    pending.push({ job, item, file, top, height });
  }
}
if (pending.length) {
  const results = await new Promise((resolve, reject) => {
    const child = spawn(
      path.join(directory, "../media-watermark-audit/bin/recognize-text"),
      [],
      { stdio: ["pipe", "pipe", "pipe"] },
    );
    let output = "",
      error = "";
    const timeout = setTimeout(
      () => {
        child.kill();
        reject(new Error("Regional OCR timed out"));
      },
      Math.max(60000, pending.length * 5000),
    );
    child.stdout.on("data", (b) => (output += b));
    child.stderr.on("data", (b) => (error += b));
    child.on("error", reject);
    child.on("close", (code) => {
      clearTimeout(timeout);
      if (code) reject(new Error(error || "OCR failed"));
      else resolve(output.trim().split("\n").map(JSON.parse));
    });
    child.stdin.end(
      pending.map((p) => JSON.stringify({ path: p.file })).join("\n") + "\n",
    );
  });
  if (results.length !== pending.length)
    throw new Error("Incomplete regional OCR output");
  for (const [index, result] of results.entries()) {
    const p = pending[index],
      b = p.job.logoBox;
    if (result.error) throw new Error(`OCR failed: ${p.job.number}`);
    for (const regionObservation of result.observations) {
      const o = {
        ...regionObservation,
        y:
          p.top / p.job.height +
          (regionObservation.y * p.height) / p.job.height,
        height: (regionObservation.height * p.height) / p.job.height,
      };
      p.item.observations.push(o);
      const x = (o.x + o.width / 2) * p.job.width,
        y = (o.y + o.height / 2) * p.job.height;
      if (
        !sourceMode &&
        x >= b.left - 4 &&
        x <= b.left + b.width + 4 &&
        y >= b.top - 4 &&
        y <= b.top + b.height + 4
      )
        continue;
      const text = o.text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const compact = text.replace(/[^a-z0-9]/g, "");
      if (
        /toamhoan|toamhao|anslife|amhoan|hoanhao|toamtoan/.test(compact) ||
        /[a-z0-9]\.(com|vn)\b|@|(?:\d[ .-]?){9,}/i.test(text)
      )
        p.item.flags.push(o);
    }
  }
  const changed = new Set(pending.map((p) => p.item));
  for (const item of changed)
    await fs.writeFile(
      path.join(evidence, `${item.number}.json`),
      JSON.stringify(item, null, 2) + "\n",
    );
}
const summary = {
  checkedAt: new Date().toISOString(),
  images: reports.length,
  newlyScannedRegions: pending.length,
  note: "Regional OCR is supplementary; flags require visual review before changing cleanup regions.",
  flagged: reports
    .filter((r) => r.flags.length)
    .map((r) => ({ number: r.number, flags: r.flags })),
};
await fs.writeFile(
  path.join(
    directory,
    sourceMode ? "deep-ocr-source-summary.json" : "deep-ocr-summary.json",
  ),
  JSON.stringify(summary, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    images: reports.length,
    newlyScannedRegions: pending.length,
    flagged: summary.flagged.map((f) => ({
      number: f.number,
      text: f.flags.map((o) => o.text),
    })),
  }),
);
