import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventoryPath = path.join(rootDir, "content-import", "to-am-hoan-hao", "inventory", "old-site-content-inventory.json");
const reportPath = path.join(rootDir, "content-import", "to-am-hoan-hao", "inventory", "design-sample-r2-pipeline-report.json");
const publish = !process.argv.includes("--draft");

const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
const samples = inventory
  .filter((item) => item.folder?.startsWith("mau-thiet-ke/"))
  .filter((item) => (item.webp?.readyImages?.length ?? 0) > 0)
  .sort((left, right) => new Date(right.date) - new Date(left.date));

await run("scripts/import-design-samples-from-assets.mjs", [
  ...(publish ? [] : ["--draft"]),
  "--replace-mock",
]);

const results = [];
for (const item of samples) {
  try {
    await run("scripts/upload-design-sample-media-to-r2.mjs", [item.slug]);
    results.push({ slug: item.slug, status: "success", images: item.webp.readyImages.length });
  } catch (error) {
    results.push({ slug: item.slug, status: "failed", error: error instanceof Error ? error.message : String(error) });
  }
}

await writeFile(reportPath, `${JSON.stringify({ executedAt: new Date().toISOString(), published: publish, requested: samples.length, succeeded: results.filter((result) => result.status === "success").length, failed: results.filter((result) => result.status === "failed").length, results }, null, 2)}\n`);
console.log(`Report: ${reportPath}`);

if (results.some((result) => result.status === "failed")) {
  process.exitCode = 1;
}

function run(script, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], { cwd: rootDir, stdio: "inherit", env: process.env });
    child.once("error", reject);
    child.once("close", (code) => code === 0 ? resolve() : reject(new Error(`${path.basename(script)} kết thúc với mã ${code}.`)));
  });
}
