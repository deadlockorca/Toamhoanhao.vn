import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const inventoryDir = path.join(rootDir, "content-import", "to-am-hoan-hao", "inventory");
const manifestPath = path.join(inventoryDir, "project-r2-import-manifest.json");
const reportPath = path.join(inventoryDir, "project-r2-pipeline-report.json");
const argumentsByName = new Map(
  process.argv.slice(2).flatMap((argument) => {
    const [name, value] = argument.split("=", 2);
    return name.startsWith("--") ? [[name, value ?? "true"]] : [];
  }),
);
const selectedSlugs = (
  argumentsByName.get("--slugs") ?? argumentsByName.get("--slug") ?? ""
)
  .split(",")
  .map((slug) => slug.trim())
  .filter(Boolean);
const requestedBatchSize = Number(argumentsByName.get("--batch") ?? 10);
const batchSize = Number.isInteger(requestedBatchSize) && requestedBatchSize > 0
  ? requestedBatchSize
  : 10;
const execute = process.argv.includes("--execute");
const includeReview = process.argv.includes("--include-review");
const publish = process.argv.includes("--publish");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const selected = chooseProjects(manifest.projects);

if (selected.length === 0) {
  throw new Error("Không có dự án phù hợp với điều kiện đã chọn.");
}

console.table(
  selected.map((project) => ({
    slug: project.slug,
    category: project.category,
    images: project.imageCount,
    megabytes: project.totalMegabytes,
    review: project.needsReview ? "Có" : "Không",
  })),
);

if (!execute) {
  console.log(
    "Dry-run: chưa ghi database hoặc upload R2. Thêm --execute để chạy batch này.",
  );
  process.exit(0);
}

const results = [];

for (const project of selected) {
  try {
    await run("scripts/import-sample-projects-from-assets.mjs", [
      `--slug=${project.slug}`,
      ...(publish ? [] : ["--draft"]),
    ]);
    await run("scripts/upload-project-media-to-r2.mjs", [project.slug]);
    results.push({ slug: project.slug, status: "success" });
  } catch (error) {
    results.push({
      slug: project.slug,
      status: "failed",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

await writeFile(
  reportPath,
  `${JSON.stringify(
    {
      executedAt: new Date().toISOString(),
      published: publish,
      requested: selected.length,
      succeeded: results.filter((result) => result.status === "success").length,
      failed: results.filter((result) => result.status === "failed").length,
      results,
    },
    null,
    2,
  )}\n`,
);

console.log(`Report: ${reportPath}`);

if (results.some((result) => result.status === "failed")) {
  process.exitCode = 1;
}

function chooseProjects(projects) {
  if (selectedSlugs.length > 0) {
    const bySlug = new Map(projects.map((project) => [project.slug, project]));
    return selectedSlugs.map((slug) => {
      const project = bySlug.get(slug);

      if (!project) {
        throw new Error(`Không tìm thấy slug trong manifest: ${slug}`);
      }
      if (!project.importReady) {
        throw new Error(`Dự án chưa sẵn sàng import: ${slug}`);
      }

      return project;
    });
  }

  return projects
    .filter((project) => project.importReady)
    .filter((project) => includeReview || !project.needsReview)
    .sort((left, right) => left.slug.localeCompare(right.slug, "vi"))
    .slice(0, batchSize);
}

function run(script, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd: rootDir,
      stdio: "inherit",
      env: process.env,
    });

    child.once("error", reject);
    child.once("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${path.basename(script)} kết thúc với mã ${code}.`));
      }
    });
  });
}
