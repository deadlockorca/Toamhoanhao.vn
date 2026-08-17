import "dotenv/config";

import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../src/generated/prisma/client.js";

const slug = process.argv[2];

if (!slug) {
  throw new Error("Cách dùng: npm run upload:project-r2 -- <slug-du-an>");
}

const required = [
  "DATABASE_URL",
  "R2_BUCKET",
  "R2_ENDPOINT",
  "R2_PUBLIC_BASE_URL",
  "R2_ACCESS_KEY_ID",
  "R2_SECRET_ACCESS_KEY",
];
const missing = required.filter((name) => !process.env[name]);

if (missing.length > 0) {
  throw new Error(`Thiếu cấu hình: ${missing.join(", ")}`);
}

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL),
});
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
  const project = await prisma.project.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      thumbnail: true,
      detail: {
        select: {
          id: true,
          heroImage: true,
          floorPlanImage: true,
        },
      },
      spaces: { select: { id: true, image: true } },
      storyBlocks: { select: { id: true, image: true } },
    },
  });

  if (!project) {
    throw new Error(`Không tìm thấy dự án: ${slug}`);
  }

  const sources = uniqueLocalUrls([
    project.thumbnail,
    project.detail?.heroImage,
    project.detail?.floorPlanImage,
    ...project.spaces.map((space) => space.image),
    ...project.storyBlocks.map((block) => block.image),
  ]);

  if (sources.length === 0) {
    throw new Error("Dự án này không có ảnh local để tải lên R2.");
  }

  const uploaded = [];
  const urlMap = new Map();

  try {
    for (const [index, sourceUrl] of sources.entries()) {
      const sourcePath = resolvePublicPath(sourceUrl);
      const extension = path.extname(sourcePath).toLowerCase() || ".webp";
      const originalName = path.basename(sourcePath, extension);
      const safeName = originalName.replace(/[^a-zA-Z0-9._-]+/g, "-");
      const kind = index === 0 ? "cover" : "gallery";
      const key = [
        keyPrefix,
        "projects",
        slug,
        `${kind}-${String(index + 1).padStart(2, "0")}-${safeName}${extension}`,
      ]
        .filter(Boolean)
        .join("/");

      await r2.send(
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET,
          Key: key,
          Body: await readFile(sourcePath),
          ContentType: contentType(extension),
          CacheControl: "public, max-age=31536000, immutable",
        }),
      );

      uploaded.push(key);
      urlMap.set(sourceUrl, toPublicUrl(key));
    }

    await prisma.$transaction(async (tx) => {
      await tx.project.update({
        where: { id: project.id },
        data: { thumbnail: mappedUrl(project.thumbnail, urlMap) },
      });

      if (project.detail) {
        await tx.projectDetail.update({
          where: { id: project.detail.id },
          data: {
            heroImage: mappedUrl(project.detail.heroImage, urlMap),
            floorPlanImage: project.detail.floorPlanImage
              ? mappedUrl(project.detail.floorPlanImage, urlMap)
              : null,
          },
        });
      }

      await Promise.all([
        ...project.spaces.map((space) =>
          tx.projectSpace.update({
            where: { id: space.id },
            data: { image: mappedUrl(space.image, urlMap) },
          }),
        ),
        ...project.storyBlocks.map((block) =>
          tx.projectStoryBlock.update({
            where: { id: block.id },
            data: { image: mappedUrl(block.image, urlMap) },
          }),
        ),
      ]);
    });
  } catch (error) {
    await Promise.allSettled(
      uploaded.map((key) =>
        r2.send(
          new DeleteObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: key,
          }),
        ),
      ),
    );
    throw error;
  }

  console.log(
    JSON.stringify({
      project: project.title,
      slug,
      imagesUploaded: uploaded.length,
      folder: `${publicBaseUrl}/${[keyPrefix, "projects", slug]
        .filter(Boolean)
        .join("/")}/`,
    }),
  );
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
  return `${publicBaseUrl}/${key
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

function contentType(extension) {
  return {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
  }[extension] || "application/octet-stream";
}
