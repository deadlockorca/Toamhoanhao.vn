import "dotenv/config";

import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../src/generated/prisma/client.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryPath = path.join(
  importRoot,
  "inventory",
  "old-site-content-inventory.json",
);
const reportPath = path.join(
  importRoot,
  "inventory",
  "design-sample-import-report.json",
);
const publicUploadRoot = path.join(rootDir, "public", "uploads", "mau-thiet-ke");
const requestedSlugs = process.argv
  .filter((argument) => argument.startsWith("--slug="))
  .map((argument) => argument.slice("--slug=".length))
  .filter(Boolean);
const importStatus = process.argv.includes("--draft") ? "draft" : "published";
const replaceMock = process.argv.includes("--replace-mock");

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL ?? ""),
});

const categoryMeta = {
  "mau-thiet-ke/noi-that-chung-cu": {
    category: "apartment",
    type: "Căn hộ",
    eyebrow: "Mẫu thiết kế nội thất chung cư",
  },
  "mau-thiet-ke/nha-pho": {
    category: "townhouse",
    type: "Nhà phố",
    eyebrow: "Mẫu thiết kế nhà phố",
  },
  "mau-thiet-ke/biet-thu": {
    category: "villa",
    type: "Biệt thự",
    eyebrow: "Mẫu thiết kế biệt thự",
  },
  "mau-thiet-ke/phong-khach": {
    category: "livingRoom",
    type: "Phòng khách",
    eyebrow: "Mẫu thiết kế phòng khách",
  },
  "mau-thiet-ke/phong-ngu": {
    category: "bedroom",
    type: "Phòng ngủ",
    eyebrow: "Mẫu thiết kế phòng ngủ",
  },
  "mau-thiet-ke/phong-bep": {
    category: "kitchen",
    type: "Phòng bếp",
    eyebrow: "Mẫu thiết kế phòng bếp",
  },
};

try {
  const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
  const allSamples = inventory
    .filter((item) => item.folder?.startsWith("mau-thiet-ke/"))
    .filter((item) => (item.webp?.readyImages?.length ?? 0) > 0)
    .sort((left, right) => new Date(right.date) - new Date(left.date));
  const samples = requestedSlugs.length
    ? requestedSlugs.map((slug) => {
        const item = allSamples.find((sample) => sample.slug === slug);
        if (!item) {
          throw new Error(`Không tìm thấy Mẫu thiết kế có ảnh: ${slug}`);
        }
        return item;
      })
    : allSamples;

  const records = [];

  if (replaceMock) {
    await prisma.designSample.deleteMany({
      where: { thumbnail: { contains: "images.unsplash.com" } },
    });
  }

  for (const [index, item] of samples.entries()) {
    const images = await copyImagesToPublic(item);
    const meta = categoryMeta[item.folder];

    if (!meta || images.length === 0) {
      continue;
    }

    const title = normalizeTitle(item.title || item.slug);
    const summary = normalizeText(item.excerpt) || `Bộ sưu tập ${title.toLocaleLowerCase("vi-VN")}.`;
    const area = parseArea(`${title}\n${summary}`);
    const style = detectStyle(`${title}\n${summary}`);
    const overview = [summary, "Hình ảnh được chọn lọc từ thư viện website cũ và sẽ tiếp tục được biên tập theo nhu cầu triển khai thực tế."];

    await prisma.$transaction(async (tx) => {
      await tx.designSample.deleteMany({ where: { slug: item.slug } });
      await tx.designSample.create({
        data: {
          title,
          slug: item.slug,
          category: meta.category,
          type: meta.type,
          style,
          area,
          thumbnail: images[0],
          summary,
          featured: index < 3,
          sortOrder: index,
          status: importStatus,
          publishedAt: importStatus === "published" ? new Date() : null,
          detail: {
            create: {
              eyebrow: meta.eyebrow,
              displayTitle: "Mẫu thiết kế",
              italicTitle: title,
              heroImage: images[0],
              description: summary,
              propertyType: meta.type,
              suitableFor: "Tham khảo theo nhu cầu thực tế",
              overviewTitle: "Không gian được gợi mở từ nhu cầu sử dụng",
              overviewParagraphs: overview,
              seoTitle: `${title} | Tổ Ấm Hoàn Hảo`,
              seoDescription: summary,
            },
          },
          metrics: {
            create: [
              { label: "Diện tích", value: area ?? "Theo hiện trạng", sortOrder: 0 },
              { label: "Phong cách", value: style, sortOrder: 1 },
              { label: "Phù hợp", value: meta.type, sortOrder: 2 },
              { label: "Hình ảnh", value: `${images.length} phối cảnh`, sortOrder: 3 },
            ],
          },
          infoRows: {
            create: [
              { label: "Loại mẫu", value: meta.type, sortOrder: 0 },
              { label: "Diện tích", value: area ?? "Theo hiện trạng", sortOrder: 1 },
              { label: "Phong cách", value: style, sortOrder: 2 },
              { label: "Nguồn", value: "Thư viện Tổ Ấm Hoàn Hảo", sortOrder: 3 },
            ],
          },
          gallery: {
            create: images.map((image, imageIndex) => ({
              title: `Phối cảnh ${String(imageIndex + 1).padStart(2, "0")}`,
              image,
              sortOrder: imageIndex,
            })),
          },
          floorPlanNotes: {
            create: [
              { label: "Tối ưu giao thông", value: "Bố trí lối di chuyển thông thoáng giữa các khu vực.", sortOrder: 0 },
              { label: "Tăng sáng tự nhiên", value: "Ưu tiên mảng sáng và vật liệu giúp không gian rộng hơn.", sortOrder: 1 },
              { label: "Lưu trữ hợp lý", value: "Tận dụng hệ tủ để không gian gọn gàng trong sử dụng hằng ngày.", sortOrder: 2 },
              { label: "Đồng nhất vật liệu", value: "Giữ bảng màu và vật liệu xuyên suốt để tổng thể hài hòa.", sortOrder: 3 },
            ],
          },
        },
      });
    });

    records.push({
      slug: item.slug,
      title,
      category: meta.type,
      images: images.length,
      oldUrl: item.oldUrl,
    });
  }

  await writeFile(
    reportPath,
    `${JSON.stringify(
      {
        importedAt: new Date().toISOString(),
        status: importStatus,
        replaceMock,
        imported: records.length,
        imageCount: records.reduce((total, record) => total + record.images, 0),
        records,
      },
      null,
      2,
    )}\n`,
  );
  console.log(JSON.stringify({ imported: records.length, images: records.reduce((total, record) => total + record.images, 0), reportPath }, null, 2));
} finally {
  await prisma.$disconnect();
}

async function copyImagesToPublic(item) {
  const sourceDir = path.join(importRoot, item.folder, item.slug);
  const targetDir = path.join(publicUploadRoot, item.slug);
  const selectedImages = item.webp?.readyImages ?? [];

  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });

  const copied = [];
  for (const [index, relativePath] of selectedImages.entries()) {
    const targetName = `${String(index + 1).padStart(3, "0")}-${path.basename(relativePath)}`;
    await copyFile(path.join(sourceDir, relativePath), path.join(targetDir, targetName));
    copied.push(`/uploads/mau-thiet-ke/${item.slug}/${targetName}`);
  }

  return copied;
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTitle(value) {
  const title = normalizeText(value).replace(/^top\s+\d+\s+/i, "");
  return title.slice(0, 191);
}

function parseArea(value) {
  const match = value.match(/(\d+(?:[,.]\d+)?)\s*(?:m2|m²)\b/i);
  if (!match) {
    return null;
  }

  const number = Number(match[1].replace(",", "."));
  return `${Number.isInteger(number) ? number : String(number).replace(".", ",")}m²`;
}

function detectStyle(value) {
  const styles = [
    ["Tân cổ điển", /tân cổ điển|tan co dien/i],
    ["Indochine", /indochine/i],
    ["Scandinavian", /scandinavian|bắc âu|bac au/i],
    ["Japandi", /japandi/i],
    ["Hiện đại", /hiện đại|hien dai|modern/i],
  ];

  return styles.find(([, pattern]) => pattern.test(value))?.[0] ?? "Đa phong cách";
}
