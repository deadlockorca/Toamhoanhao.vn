import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryDir = path.join(importRoot, "inventory");
const inventoryPath = path.join(inventoryDir, "old-site-content-inventory.json");
const reportPath = path.join(inventoryDir, "webp-ready-report.md");
const summaryPath = path.join(inventoryDir, "webp-ready-summary.json");

const folderOrder = [
  "du-an/can-ho",
  "du-an/biet-thu",
  "du-an/nha-pho",
  "du-an/van-phong",
  "du-an/noi-that-tron-goi",
  "mau-thiet-ke/noi-that-chung-cu",
  "mau-thiet-ke/nha-pho",
  "mau-thiet-ke/biet-thu",
  "mau-thiet-ke/phong-khach",
  "mau-thiet-ke/phong-ngu",
  "mau-thiet-ke/phong-bep",
  "mau-thiet-ke/tu-bep",
  "mau-thiet-ke/phong-tre-em",
  "khac-luu-tru",
];

async function main() {
  await mkdir(inventoryDir, { recursive: true });

  const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
  const scannedItems = [];

  for (const item of inventory) {
    const itemDir = path.join(importRoot, item.folder, item.slug);
    const webpImages = await findWebpImages(itemDir);
    const groupedByStage = groupByStage(webpImages);
    const readyStage = selectReadyStage(groupedByStage);
    const readyImages = groupedByStage[readyStage] ?? [];
    const readiness = getReadiness(readyImages.length);
    const updatedItem = {
      ...item,
      webp: {
        total: webpImages.length,
        readyStage,
        readyCount: readyImages.length,
        byStage: {
          raw: groupedByStage.raw?.length ?? 0,
          selected: groupedByStage.selected?.length ?? 0,
          edited: groupedByStage.edited?.length ?? 0,
          web: groupedByStage.web?.length ?? 0,
          other: groupedByStage.other?.length ?? 0,
        },
        readyImages,
        readiness,
      },
    };

    scannedItems.push(updatedItem);
    await writeJson(path.join(itemDir, "meta.json"), updatedItem);
  }

  await writeJson(inventoryPath, scannedItems);

  const summary = buildSummary(scannedItems);
  await writeJson(summaryPath, summary);
  await writeFile(reportPath, buildMarkdownReport(scannedItems, summary));

  console.log(JSON.stringify(summary.totals, null, 2));
  console.log(`Report: ${reportPath}`);
}

async function findWebpImages(itemDir) {
  const files = await walk(itemDir);

  return files
    .filter((filePath) => /\.webp$/i.test(filePath))
    .map((filePath) => path.relative(itemDir, filePath).split(path.sep).join("/"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

async function walk(dir) {
  let entries;

  try {
    entries = await import("node:fs/promises").then((fs) =>
      fs.readdir(dir, { withFileTypes: true }),
    );
  } catch {
    return [];
  }

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function groupByStage(images) {
  return images.reduce(
    (groups, image) => {
      if (image.startsWith("03-web/")) {
        groups.web.push(image);
      } else if (image.startsWith("02-edited/")) {
        groups.edited.push(image);
      } else if (image.startsWith("01-selected/")) {
        groups.selected.push(image);
      } else if (image.startsWith("00-raw/")) {
        groups.raw.push(image);
      } else {
        groups.other.push(image);
      }

      return groups;
    },
    {
      raw: [],
      selected: [],
      edited: [],
      web: [],
      other: [],
    },
  );
}

function selectReadyStage(groups) {
  if (groups.web.length > 0) return "web";
  if (groups.edited.length > 0) return "edited";
  if (groups.selected.length > 0) return "selected";
  if (groups.raw.length > 0) return "raw";
  return "other";
}

function getReadiness(count) {
  if (count >= 12) return "du-anh-giau-hinh";
  if (count >= 6) return "du-anh-du-hinh";
  if (count >= 3) return "du-anh-it-hinh";
  if (count > 0) return "can-bo-sung-anh";
  return "chua-co-anh-webp";
}

function buildSummary(items) {
  const folders = {};
  const readiness = {};

  for (const item of items) {
    folders[item.folder] ??= {
      items: 0,
      webpImages: 0,
      readyImages: 0,
      rich: 0,
      enough: 0,
      few: 0,
      low: 0,
      empty: 0,
    };
    readiness[item.webp.readiness] ??= 0;
    readiness[item.webp.readiness] += 1;

    const folder = folders[item.folder];
    folder.items += 1;
    folder.webpImages += item.webp.total;
    folder.readyImages += item.webp.readyCount;

    if (item.webp.readiness === "du-anh-giau-hinh") folder.rich += 1;
    if (item.webp.readiness === "du-anh-du-hinh") folder.enough += 1;
    if (item.webp.readiness === "du-anh-it-hinh") folder.few += 1;
    if (item.webp.readiness === "can-bo-sung-anh") folder.low += 1;
    if (item.webp.readiness === "chua-co-anh-webp") folder.empty += 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    totals: {
      items: items.length,
      webpImages: items.reduce((sum, item) => sum + item.webp.total, 0),
      readyImages: items.reduce((sum, item) => sum + item.webp.readyCount, 0),
      readiness,
    },
    folders,
  };
}

function buildMarkdownReport(items, summary) {
  const lines = [
    "# Báo cáo ảnh WebP đã sẵn sàng",
    "",
    `- Tổng bài/thư mục: ${summary.totals.items}`,
    `- Tổng ảnh WebP: ${summary.totals.webpImages}`,
    `- Ảnh đang dùng làm nguồn sẵn sàng: ${summary.totals.readyImages}`,
    "",
    "## Ngưỡng đánh giá",
    "",
    "- `du-anh-giau-hinh`: từ 12 ảnh trở lên",
    "- `du-anh-du-hinh`: 6-11 ảnh",
    "- `du-anh-it-hinh`: 3-5 ảnh",
    "- `can-bo-sung-anh`: 1-2 ảnh",
    "- `chua-co-anh-webp`: chưa có ảnh WebP",
    "",
    "## Tổng hợp theo thư mục",
    "",
    "| Thư mục | Bài | Ảnh WebP | Giàu ảnh | Đủ ảnh | Ít ảnh | Thiếu | Trống |",
    "|---|---:|---:|---:|---:|---:|---:|---:|",
  ];

  for (const folder of folderOrder) {
    const data = summary.folders[folder];

    if (!data) {
      continue;
    }

    lines.push(
      `| ${folder} | ${data.items} | ${data.webpImages} | ${data.rich} | ${data.enough} | ${data.few} | ${data.low} | ${data.empty} |`,
    );
  }

  lines.push("", "## Chi tiết theo thư mục", "");

  for (const folder of folderOrder) {
    const folderItems = items.filter((item) => item.folder === folder);

    if (folderItems.length === 0) {
      continue;
    }

    lines.push(`### ${folder}`, "");
    lines.push("| Slug | Ảnh WebP | Nguồn | Đánh giá |");
    lines.push("|---|---:|---|---|");

    for (const item of folderItems.sort(
      (a, b) => b.webp.readyCount - a.webp.readyCount,
    )) {
      lines.push(
        `| ${item.slug} | ${item.webp.readyCount} | ${stageLabel(
          item.webp.readyStage,
        )} | ${item.webp.readiness} |`,
      );
    }

    lines.push("");
  }

  lines.push(
    "## Gợi ý giao diện",
    "",
    "- Dự án từ 12 ảnh trở lên: dùng hero lớn, gallery 4 ảnh nổi bật, story blocks 3-4 khu vực, related phía dưới.",
    "- Dự án 6-11 ảnh: dùng detail chuẩn hiện tại, gallery 3-4 ảnh, story blocks tối đa 2-3 khu vực.",
    "- Dự án 3-5 ảnh: detail rút gọn, không ép mặt bằng/câu chuyện dài.",
    "- Dự án 1-2 ảnh: chỉ nên import nháp, cần bổ sung ảnh trước khi xuất bản.",
  );

  return `${lines.join("\n")}\n`;
}

function stageLabel(stage) {
  return {
    raw: "00-raw",
    selected: "01-selected",
    edited: "02-edited",
    web: "03-web",
    other: "khác",
  }[stage];
}

async function writeJson(filePath, data) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
