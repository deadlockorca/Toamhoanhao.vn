import "dotenv/config";

import { access } from "node:fs/promises";
import path from "node:path";

import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../src/generated/prisma/client.js";

const slug = process.argv[2];

if (!slug) {
  throw new Error("Cách dùng: npm run restore:project-r2 -- <slug-du-an>");
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

const publicBaseUrl = process.env.R2_PUBLIC_BASE_URL.replace(/\/+$/, "");
const keyPrefix = (process.env.R2_KEY_PREFIX || "web-moi")
  .replace(/^\/+|\/+$/g, "")
  .replace(/[^a-zA-Z0-9._-]+/g, "-");
const projectPrefix = [keyPrefix, "projects", slug].filter(Boolean).join("/");
const r2Prefix = `${publicBaseUrl}/${projectPrefix}/`;
const publicRoot = path.resolve("public");
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

  const r2Urls = unique([
    project.thumbnail,
    project.detail?.heroImage,
    project.detail?.floorPlanImage,
    ...project.spaces.map((space) => space.image),
    ...project.storyBlocks.map((block) => block.image),
  ].filter((url) => url?.startsWith(r2Prefix)));

  if (r2Urls.length === 0) {
    throw new Error("Dự án này không có ảnh R2 thuộc đợt upload thử nghiệm.");
  }

  const localUrlMap = new Map(
    await Promise.all(
      r2Urls.map(async (url) => [url, await localUrlFromR2Url(url)]),
    ),
  );

  await prisma.$transaction(async (tx) => {
    await tx.project.update({
      where: { id: project.id },
      data: { thumbnail: restoredUrl(project.thumbnail, localUrlMap) },
    });

    if (project.detail) {
      await tx.projectDetail.update({
        where: { id: project.detail.id },
        data: {
          heroImage: restoredUrl(project.detail.heroImage, localUrlMap),
          floorPlanImage: project.detail.floorPlanImage
            ? restoredUrl(project.detail.floorPlanImage, localUrlMap)
            : null,
        },
      });
    }

    await Promise.all([
      ...project.spaces.map((space) =>
        tx.projectSpace.update({
          where: { id: space.id },
          data: { image: restoredUrl(space.image, localUrlMap) },
        }),
      ),
      ...project.storyBlocks.map((block) =>
        tx.projectStoryBlock.update({
          where: { id: block.id },
          data: { image: restoredUrl(block.image, localUrlMap) },
        }),
      ),
    ]);
  });

  const keys = r2Urls.map((url) => decodeURIComponent(new URL(url).pathname.slice(1)));
  const deleted = await Promise.allSettled(
    keys.map((key) =>
      r2.send(
        new DeleteObjectCommand({
          Bucket: process.env.R2_BUCKET,
          Key: key,
        }),
      ),
    ),
  );
  const failedDeletes = deleted.filter((result) => result.status === "rejected").length;

  console.log(
    JSON.stringify({
      project: project.title,
      restoredImages: r2Urls.length,
      deletedFromR2: r2Urls.length - failedDeletes,
      failedDeletes,
    }),
  );
} finally {
  await prisma.$disconnect();
}

function unique(values) {
  return [...new Set(values)];
}

async function localUrlFromR2Url(url) {
  const fileName = path.basename(decodeURIComponent(new URL(url).pathname));
  const originalFileName = fileName.replace(/^(?:cover|gallery)-\d{2}-/, "");
  const localUrl = `/uploads/du-an/${slug}/${originalFileName}`;
  const localPath = path.resolve(publicRoot, `.${localUrl}`);

  if (!localPath.startsWith(`${publicRoot}${path.sep}`)) {
    throw new Error(`Đường dẫn ảnh không hợp lệ: ${url}`);
  }

  try {
    await access(localPath);
  } catch {
    throw new Error(`Không tìm thấy ảnh local để khôi phục: ${localUrl}`);
  }

  return localUrl;
}

function restoredUrl(url, localUrlMap) {
  return localUrlMap.get(url) || url;
}
