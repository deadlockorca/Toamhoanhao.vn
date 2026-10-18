import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import sharp from "sharp";

const option = (name) =>
  process.argv.find((a) => a.startsWith(name + "="))?.slice(name.length + 1);
const runFile = option("--run");
const number = Number(option("--job"));
const source = option("--source");
if (!runFile || !number || !source)
  throw new Error("Use --run, --job, --source");
const read = async (file) => JSON.parse(await fs.readFile(file, "utf8"));
const run = await read(runFile);
const selected = run.jobs.find((j) => j.number === number);
if (!selected) throw new Error("Outside requested selection");
async function execute(command, args, stdin) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["pipe", "pipe", "pipe"] });
    let output = "",
      error = "";
    child.stdout.on("data", (b) => (output += b));
    child.stderr.on("data", (b) => (error += b));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve(output) : reject(new Error(error || output)),
    );
    child.stdin.end(stdin);
  });
}
const trialArgs = [`--trial=${run.batch}`, `--job=${number}`];
await execute(process.execPath, [
  "scripts/media-trial.mjs",
  "record",
  ...trialArgs,
  `--source=${source}`,
]);
await execute(process.execPath, [
  "scripts/media-trial.mjs",
  "render",
  ...trialArgs,
  "--clean-only",
  "--no-report",
]);
const manifest = await read(path.join(run.batch, "manifest.json"));
const job = manifest.jobs.find((j) => j.number === number);
if (
  !job.cleanedAt ||
  !job.cleanComposite ||
  job.verification?.logoAdded !== false
)
  throw new Error(
    "Clean export incomplete; inspect aspect ratio or rendering state",
  );
const cleanFile = path.join(run.batch, job.cleanComposite);
const bytes = await fs.readFile(cleanFile);
const meta = await sharp(bytes).metadata();
if (meta.width !== job.width || meta.height !== job.height)
  throw new Error("Dimensions changed");
const root = path.dirname(run.batch);
const output = await execute(
  path.join(root, "media-watermark-audit/bin/recognize-text"),
  [],
  JSON.stringify({ path: cleanFile }) + "\n",
);
const ocr = JSON.parse(output.trim());
if (ocr.error) throw new Error("OCR failed");
const flags = (ocr.observations ?? []).filter((o) => {
  const t = o.text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  return /toam|hoan.?hao|thi cong|tan tam|xay dung|[a-z0-9]\.(com|vn)\b|(?:\d[ .-]?){9,}/i.test(
    t,
  );
});
await fs.mkdir(path.join(run.batch, "ocr-clean"), { recursive: true });
await fs.writeFile(
  path.join(run.batch, "ocr-clean", `${number}.json`),
  JSON.stringify({ ...ocr, flags }, null, 2) + "\n",
);
const receipt = {
  number,
  source,
  sourceSha256: job.sourceSha256,
  generatedSha256: job.aiSourceSha256,
  cleanSha256: crypto.createHash("sha256").update(bytes).digest("hex"),
  cleanFile,
  cleanedAt: job.cleanedAt,
  width: meta.width,
  height: meta.height,
  residualFlags: flags,
  status: flags.length
    ? "needs_residual_review"
    : "saved_pending_visual_review",
  prompt: run.prompt,
};
await fs.mkdir(path.join(run.batch, "clean-only-receipts"), {
  recursive: true,
});
await fs.writeFile(
  path.join(run.batch, "clean-only-receipts", `${number}.json`),
  JSON.stringify(receipt, null, 2) + "\n",
);
run.results = { ...run.results, [number]: receipt };
run.saved = Object.keys(run.results).length;
run.updatedAt = new Date().toISOString();
await fs.writeFile(runFile + ".tmp", JSON.stringify(run, null, 2) + "\n");
await fs.rename(runFile + ".tmp", runFile);
await execute(process.execPath, [
  "scripts/media-audit/sync-cleaned-library.mjs",
]);
console.log(
  JSON.stringify({
    job: number,
    saved: run.saved,
    flags: flags.map((o) => o.text),
  }),
);
