import { access, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryDir = path.join(importRoot, "inventory");
const inventoryPath = path.join(inventoryDir, "old-site-content-inventory.json");
const reportPath = path.join(inventoryDir, "reclassified-assets-report.md");

const sourceFolder = "khac-luu-tru";
const apartmentProjectFolder = "du-an/can-ho";
const apartmentPattern =
  /chung[- ]?cu|chung cư|can[- ]?ho|căn hộ|apartment|vinhomes|penhouse|penthouse/i;

async function main() {
  const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
  const movedItems = [];

  for (const item of inventory) {
    if (!shouldMoveToApartmentProjects(item)) {
      continue;
    }

    const fromDir = path.join(importRoot, item.folder, item.slug);
    const toDir = path.join(importRoot, apartmentProjectFolder, item.slug);

    if (await exists(toDir)) {
      throw new Error(`Không thể chuyển vì thư mục đích đã tồn tại: ${toDir}`);
    }

    await mkdir(path.dirname(toDir), { recursive: true });
    await rename(fromDir, toDir);

    const previousFolder = item.folder;

    item.folder = apartmentProjectFolder;
    item.folderLabel = "Dự án / Căn hộ";
    item.newType = "project";
    item.newCategory = "Căn hộ";
    item.reclassifiedFrom = previousFolder;

    await writeJson(path.join(toDir, "meta.json"), item);
    movedItems.push(item);
  }

  await writeJson(inventoryPath, inventory);
  await writeFile(reportPath, buildReport(movedItems));

  console.log(
    JSON.stringify(
      {
        moved: movedItems.length,
        target: apartmentProjectFolder,
        report: reportPath,
      },
      null,
      2,
    ),
  );
}

function shouldMoveToApartmentProjects(item) {
  if (item.folder !== sourceFolder) {
    return false;
  }

  return apartmentPattern.test(`${item.title ?? ""} ${item.slug ?? ""}`);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function buildReport(items) {
  const lines = [
    "# Báo cáo tái phân loại asset",
    "",
    `- Đã chuyển: ${items.length} bài`,
    `- Từ: \`${sourceFolder}\``,
    `- Sang: \`${apartmentProjectFolder}\``,
    "",
    "| Slug | Tiêu đề | Ảnh WebP |",
    "|---|---|---:|",
  ];

  for (const item of items.sort((a, b) => a.slug.localeCompare(b.slug))) {
    lines.push(
      `| ${item.slug} | ${escapeTable(item.title)} | ${
        item.webp?.readyCount ?? item.imageCount ?? 0
      } |`,
    );
  }

  return `${lines.join("\n")}\n`;
}

function escapeTable(value) {
  return String(value ?? "").replace(/\|/g, "\\|");
}

async function writeJson(filePath, data) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
