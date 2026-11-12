import fs from "node:fs/promises";
import { rmdirSync } from "node:fs";
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
// A command may outlive its caller's initial wait. Serialize journal and
// manifest changes even when another save starts before that command exits.
const lockDirectory = runFile + ".save-lock";
const lockDeadline = Date.now() + 300_000;
while (true) {
  try {
    await fs.mkdir(lockDirectory);
    break;
  } catch (error) {
    if (error.code !== "EEXIST" || Date.now() > lockDeadline) throw error;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}
process.on("exit", () => {
  try { rmdirSync(lockDirectory); } catch {}
});
// Different runs also update the same image catalog during library sync.
const libraryLock = path.join(path.dirname(path.dirname(runFile)), ".image-clean-save-lock");
while (true) {
  try {
    await fs.mkdir(libraryLock);
    break;
  } catch (error) {
    if (error.code !== "EEXIST" || Date.now() > lockDeadline) throw error;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}
process.on("exit", () => {
  try { rmdirSync(libraryLock); } catch {}
});
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
const prepared = await read(path.join(run.batch, "manifest.json"));
const preparedJob = prepared.jobs.find((j) => j.number === number);
if (preparedJob?.method === "original_preserved_then_script_logo") {
  if (preparedJob.cleanupZones.length || preparedJob.brandReview?.result !== "no_old_brand_detected")
    throw new Error("Original preservation requires an explicit visual review and no cleanup mask");
} else {
  await execute(process.execPath, [
    "scripts/media-trial.mjs",
    "record",
    ...trialArgs,
    `--source=${source}`,
  ]);
}
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
  // Technical dimensions and dates printed on real artwork are not phone
  // watermarks. Keep the full OCR output, and flag only old brand evidence.
  if (job.preserveTechnicalText)
    return /toam|hoan.?hao|ansl[i1]fe|decox|contact@|090[ .-]?389[ .-]?7555|024[ .-]?8588[ .-]?8247|toamhoanhao\.(com|vn)/i.test(t);
  return /toam|hoan.?hao|ansl[i1]fe|decox|thi cong|tan tam|xay dung|[a-z0-9]\.(com|vn)\b|(?:\d[ .-]?){9,}/i.test(
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
  prompt: job.prompt ?? run.prompt,
  ...(preparedJob.method === "original_preserved_then_script_logo" ? {
    generationMode: "not used; original preserved after visual review",
    originalPixelsPreserved: true,
  } : {}),
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
  `--selection=${runFile}`,
]);
console.log(
  JSON.stringify({
    job: number,
    saved: run.saved,
    flags: flags.map((o) => o.text),
  }),
);
