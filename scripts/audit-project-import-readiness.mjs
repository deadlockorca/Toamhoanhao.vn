import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryDir = path.join(importRoot, "inventory");
const inventoryPath = path.join(inventoryDir, "old-site-content-inventory.json");
const manifestPath = path.join(inventoryDir, "project-r2-import-manifest.json");
const reportPath = path.join(inventoryDir, "project-r2-import-audit.md");

const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
const projects = inventory.filter((item) => item.newType === "project");
const entries = await Promise.all(projects.map(auditProject));
const summary = buildSummary(entries);

await mkdir(inventoryDir, { recursive: true });
await writeFile(
  manifestPath,
  `${JSON.stringify({ generatedAt: new Date().toISOString(), summary, projects: entries }, null, 2)}\n`,
);
await writeFile(reportPath, buildReport(summary, entries));

console.table(
  Object.entries(summary.byCategory).map(([category, values]) => ({
    category,
    total: values.total,
    ready: values.ready,
    needsReview: values.needsReview,
    missingFiles: values.missingFiles,
  })),
);
console.log(`Manifest: ${manifestPath}`);
console.log(`Report: ${reportPath}`);

async function auditProject(item) {
  const imageStage = item.webp?.readyStage ?? "none";
  const imagePaths = item.webp?.readyImages ?? [];
  const projectDir = path.join(importRoot, item.folder, item.slug);
  const checkedImages = await Promise.all(
    imagePaths.map(async (relativePath) => {
      const absolutePath = path.join(projectDir, relativePath);

      try {
        const info = await stat(absolutePath);
        return { relativePath, bytes: info.size, exists: true };
      } catch {
        return { relativePath, bytes: 0, exists: false };
      }
    }),
  );
  const missingImages = checkedImages
    .filter((image) => !image.exists)
    .map((image) => image.relativePath);
  const totalBytes = checkedImages.reduce((total, image) => total + image.bytes, 0);
  const warnings = [];

  if (checkedImages.length === 0) warnings.push("Không có ảnh WebP sẵn sàng.");
  if (missingImages.length > 0) warnings.push(`Thiếu ${missingImages.length} file ảnh.`);
  if (checkedImages.length > 0 && checkedImages.length < 3) {
    warnings.push("Ít hơn 3 ảnh, cần rà lại trước khi xuất bản.");
  }
  if (item.webp?.readiness === "du-anh-giau-hinh") {
    warnings.push("Có khả năng ảnh trùng hoặc ảnh kích thước nhỏ từ web cũ.");
  }

  return {
    slug: item.slug,
    title: item.title,
    category: item.newCategory,
    folder: item.folder,
    oldUrl: item.oldUrl,
    sourceStage: imageStage,
    imageCount: checkedImages.length,
    totalBytes,
    totalMegabytes: Math.round((totalBytes / 1024 / 1024) * 100) / 100,
    missingImages,
    importReady: missingImages.length === 0 && checkedImages.length > 0,
    needsReview: warnings.length > 0,
    warnings,
  };
}

function buildSummary(entries) {
  const byCategory = {};
  const byStage = {};

  for (const entry of entries) {
    const category = (byCategory[entry.category] ??= emptySummary());
    updateSummary(category, entry);
    const stage = (byStage[entry.sourceStage] ??= emptySummary());
    updateSummary(stage, entry);
  }

  const total = emptySummary();
  for (const entry of entries) updateSummary(total, entry);

  return { total, byCategory, byStage };
}

function emptySummary() {
  return {
    total: 0,
    ready: 0,
    needsReview: 0,
    missingFiles: 0,
    images: 0,
    totalBytes: 0,
  };
}

function updateSummary(summary, entry) {
  summary.total += 1;
  summary.ready += Number(entry.importReady);
  summary.needsReview += Number(entry.needsReview);
  summary.missingFiles += entry.missingImages.length;
  summary.images += entry.imageCount;
  summary.totalBytes += entry.totalBytes;
}

function buildReport(summary, entries) {
  const lines = [
    "# Báo cáo sẵn sàng import dự án lên R2",
    "",
    `Tạo lúc: ${new Date().toLocaleString("vi-VN")}`,
    "",
    "## Tổng quan",
    "",
    `- Dự án: ${summary.total.total}`,
    `- Sẵn sàng về mặt file: ${summary.total.ready}`,
    `- Có cảnh báo cần rà: ${summary.total.needsReview}`,
    `- File ảnh thiếu: ${summary.total.missingFiles}`,
    `- Tổng số ảnh: ${summary.total.images}`,
    `- Tổng dung lượng: ${formatMegabytes(summary.total.totalBytes)}`,
    "",
    "## Theo danh mục",
    "",
    "| Danh mục | Dự án | Sẵn sàng | Cần rà | File thiếu |",
    "| --- | ---: | ---: | ---: | ---: |",
    ...Object.entries(summary.byCategory)
      .sort(([left], [right]) => left.localeCompare(right, "vi"))
      .map(
        ([category, values]) =>
          `| ${category} | ${values.total} | ${values.ready} | ${values.needsReview} | ${values.missingFiles} |`,
      ),
    "",
    "## Cần rà trước import",
    "",
  ];

  const flagged = entries.filter((entry) => entry.needsReview);
  if (flagged.length === 0) {
    lines.push("Không có cảnh báo.");
  } else {
    lines.push("| Dự án | Danh mục | Ảnh | Cảnh báo |");
    lines.push("| --- | --- | ---: | --- |");
    lines.push(
      ...flagged.map(
        (entry) =>
          `| ${entry.title} | ${entry.category} | ${entry.imageCount} | ${entry.warnings.join(" ")} |`,
      ),
    );
  }

  return `${lines.join("\n")}\n`;
}

function formatMegabytes(bytes) {
  return `${Math.round((bytes / 1024 / 1024) * 100) / 100} MB`;
}
