import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const argument = process.argv.find((a) => a.startsWith("--batch="));
if (!argument) throw new Error("Use --batch=/external/batch-directory");
const directory = await fs.realpath(argument.slice(8));
const repository = await fs.realpath(
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.."),
);
if (directory === repository || directory.startsWith(repository + path.sep))
  throw new Error("Keep media outside repository");
const watch = process.argv.includes("--watch");
const failed = new Set();
async function run(args) {
  await new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ["scripts/media-trial.mjs", ...args, `--trial=${directory}`],
      { cwd: repository, stdio: ["ignore", "pipe", "pipe"] },
    );
    let output = "";
    child.stdout.on("data", (data) => (output += data));
    child.stderr.on("data", (data) => (output += data));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(output)),
    );
  });
}
do {
  const manifest = JSON.parse(
    await fs.readFile(path.join(directory, "manifest.json")),
  );
  for (const job of manifest.jobs) {
    if (job.renderedAt || job.cleanedAt || failed.has(job.number)) continue;
    let receipt;
    try {
      receipt = JSON.parse(
        await fs.readFile(
          path.join(directory, "generation-receipts", `${job.number}.json`),
        ),
      );
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }
    try {
      const actual = crypto
        .createHash("sha256")
        .update(await fs.readFile(receipt.source))
        .digest("hex");
      if (receipt.number !== job.number || actual !== receipt.sha256)
        throw new Error("Generated receipt mismatch");
      await run([
        "record",
        `--job=${job.number}`,
        `--source=${receipt.source}`,
      ]);
      await run([
        "render",
        `--job=${job.number}`,
        "--clean-only",
        "--no-report",
      ]);
      console.log(JSON.stringify({ savedAndRendered: job.number }));
    } catch (error) {
      failed.add(job.number);
      await fs.writeFile(
        path.join(directory, "failures", `render-${job.number}.json`),
        JSON.stringify({ number: job.number, error: String(error) }, null, 2),
      );
      console.error(
        JSON.stringify({ failed: job.number, error: String(error) }),
      );
    }
  }
  const latest = JSON.parse(
    await fs.readFile(path.join(directory, "manifest.json")),
  );
  const rendered = latest.jobs.filter(
    (job) => job.renderedAt || job.cleanedAt,
  ).length;
  if (rendered === latest.expectedCount) {
    console.log(JSON.stringify({ rendered, expected: latest.expectedCount }));
    break;
  }
  if (watch) await new Promise((resolve) => setTimeout(resolve, 2000));
} while (watch);
