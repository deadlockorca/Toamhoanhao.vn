import "dotenv/config";

import { readFile } from "node:fs/promises";
import path from "node:path";

import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../src/generated/prisma/client.js";

const slug = process.argv[2];

if (!slug) {
  throw new Error("Cách dùng: npm run upload:design-sample-r2 -- <slug-mau-thiet-ke>");
}

const required = ["DATABASE_URL", "R2_BUCKET", "R2_ENDPOINT", "R2_PUBLIC_BASE_URL", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length > 0) {
  throw new Error(`Thiếu cấu hình: ${missing.join(", ")}`);
}

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(process.env.DATABASE_URL) });
const r2 = new S3Client({
  region: process.env.R2_REGION || "auto",
  endpoint: process.env.R2_ENDPOINT,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});
const publicRoot = path.resolve("public");
const publicBaseUrl = process.env.R2_PUBLIC_BASE_URL.replace(/\/+$/, "");
const keyPrefix = (process.env.R2_KEY_PREFIX || "web-moi")
  .replace(/^\/+|\/+$/g, "")
  .replace(/[^a-zA-Z0-9._-]+/g, "-");

try {
  const sample = await prisma.designSample.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      thumbnail: true,
      detail: { select: { id: true, heroImage: true, floorPlanImage: true } },
      gallery: { select: { id: true, image: true } },
      features: { select: { id: true, image: true } },
    },
  });
  if (!sample) {
    throw new Error(`Không tìm thấy Mẫu thiết kế: ${slug}`);
  }

  const sources = uniqueLocalUrls([
    sample.thumbnail,
    sample.detail?.heroImage,
    sample.detail?.floorPlanImage,
    ...sample.gallery.map((item) => item.image),
    ...sample.features.map((item) => item.image),
  ]);
  const uploaded = [];
  const urlMap = new Map();

  try {
    for (const [index, sourceUrl] of sources.entries()) {
      const sourcePath = resolvePublicPath(sourceUrl);
      const extension = path.extname(sourcePath).toLowerCase() || ".webp";
      const originalName = path.basename(sourcePath, extension).replace(/[^a-zA-Z0-9._-]+/g, "-");
      const kind = index === 0 ? "cover" : "gallery";
      const key = [keyPrefix, "design-samples", slug, `${kind}-${String(index + 1).padStart(3, "0")}-${originalName}${extension}`]
        .filter(Boolean)
        .join("/");

      await r2.send(new PutObjectCommand({
        Bucket: process.env.R2_BUCKET,
        Key: key,
        Body: await readFile(sourcePath),
        ContentType: contentType(extension),
        CacheControl: "public, max-age=31536000, immutable",
      }));
      uploaded.push(key);
      urlMap.set(sourceUrl, toPublicUrl(key));
    }

    await prisma.$transaction(async (tx) => {
      await tx.designSample.update({
        where: { id: sample.id },
        data: { thumbnail: mappedUrl(sample.thumbnail, urlMap) },
      });
      if (sample.detail) {
        await tx.designSampleDetail.update({
          where: { id: sample.detail.id },
          data: {
            heroImage: mappedUrl(sample.detail.heroImage, urlMap),
            floorPlanImage: sample.detail.floorPlanImage ? mappedUrl(sample.detail.floorPlanImage, urlMap) : null,
          },
        });
      }
      await Promise.all([
        ...sample.gallery.map((item) => tx.designSampleGalleryItem.update({ where: { id: item.id }, data: { image: mappedUrl(item.image, urlMap) } })),
        ...sample.features.map((item) => tx.designFeature.update({ where: { id: item.id }, data: { image: mappedUrl(item.image, urlMap) } })),
      ]);
    });
  } catch (error) {
    await Promise.allSettled(uploaded.map((key) => r2.send(new DeleteObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key }))));
    throw error;
  }

  console.log(JSON.stringify({ slug, sample: sample.title, imagesUploaded: uploaded.length, folder: `${publicBaseUrl}/${[keyPrefix, "design-samples", slug].filter(Boolean).join("/")}/` }, null, 2));
} finally {
  await prisma.$disconnect();
}

function uniqueLocalUrls(urls) {
  return [...new Set(urls.filter((url) => url?.startsWith("/uploads/")))];
}

function resolvePublicPath(url) {
  const filePath = path.resolve(publicRoot, `.${url}`);
  if (!filePath.startsWith(`${publicRoot}${path.sep}`)) {
    throw new Error(`Đường dẫn ảnh không hợp lệ: ${url}`);
  }
  return filePath;
}

function mappedUrl(url, urlMap) {
  return urlMap.get(url) || url;
}

function toPublicUrl(key) {
  return `${publicBaseUrl}/${key.split("/").map((part) => encodeURIComponent(part)).join("/")}`;
}

function contentType(extension) {
  return { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" }[extension] || "application/octet-stream";
}
