import "server-only";

import { randomUUID } from "node:crypto";

import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const allowedImageTypes = new Map([
  ["image/webp", "webp"],
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
]);

type MediaCollection = "projects" | "design-samples";

type R2Config = {
  bucket: string;
  endpoint: string;
  publicBaseUrl: string;
  keyPrefix: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  maxFileSize: number;
};

let client: S3Client | undefined;

function getConfig(): R2Config {
  const required = [
    "R2_BUCKET",
    "R2_ENDPOINT",
    "R2_PUBLIC_BASE_URL",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
  ] as const;
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Thiếu cấu hình R2: ${missing.join(", ")}.`);
  }

  const configuredLimit = Number(process.env.R2_MAX_FILE_SIZE_BYTES);

  return {
    bucket: process.env.R2_BUCKET!,
    endpoint: process.env.R2_ENDPOINT!,
    publicBaseUrl: process.env.R2_PUBLIC_BASE_URL!.replace(/\/+$/, ""),
    keyPrefix: normalizeKeyPart(process.env.R2_KEY_PREFIX ?? ""),
    region: process.env.R2_REGION ?? "auto",
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    maxFileSize:
      Number.isFinite(configuredLimit) && configuredLimit > 0
        ? configuredLimit
        : 8 * 1024 * 1024,
  };
}

function getClient(config: R2Config) {
  if (!client) {
    client = new S3Client({
      region: config.region,
      endpoint: config.endpoint,
      forcePathStyle: true,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }

  return client;
}

export async function uploadR2Images({
  files,
  collection,
  slug,
  kind,
}: {
  files: File[];
  collection: MediaCollection;
  slug: string;
  kind: string;
}) {
  if (files.length > 30) {
    throw new Error("Mỗi lần chỉ có thể tải tối đa 30 ảnh.");
  }

  const config = getConfig();
  const safeSlug = normalizeKeyPart(slug) || "chua-dat-ten";
  const safeKind = normalizeKeyPart(kind) || "image";

  return Promise.all(
    files.map(async (file, index) => {
      const extension = allowedImageTypes.get(file.type);

      if (!extension) {
        throw new Error("Chỉ hỗ trợ ảnh WebP, JPG hoặc PNG.");
      }

      if (file.size > config.maxFileSize) {
        throw new Error(
          `Mỗi ảnh tải lên không được vượt quá ${formatBytes(config.maxFileSize)}.`,
        );
      }

      const filename = `${safeKind}-${String(index + 1).padStart(2, "0")}-${randomUUID()}.${extension}`;
      const key = [config.keyPrefix, collection, safeSlug, filename]
        .filter(Boolean)
        .join("/");

      await getClient(config).send(
        new PutObjectCommand({
          Bucket: config.bucket,
          Key: key,
          Body: Buffer.from(await file.arrayBuffer()),
          ContentType: file.type,
          CacheControl: "public, max-age=31536000, immutable",
        }),
      );

      return toPublicUrl(config, key);
    }),
  );
}

export async function deleteR2PublicUrls(urls: string[]) {
  const config = getConfig();
  const keys = [
    ...new Set(
      urls
        .map((url) => getObjectKey(url, config))
        .filter((key): key is string => Boolean(key)),
    ),
  ];

  await Promise.allSettled(
    keys.map((key) =>
      getClient(config).send(
        new DeleteObjectCommand({ Bucket: config.bucket, Key: key }),
      ),
    ),
  );
}

function getObjectKey(url: string, config: R2Config) {
  try {
    const publicUrl = new URL(config.publicBaseUrl);
    const imageUrl = new URL(url);

    if (imageUrl.origin !== publicUrl.origin) {
      return null;
    }

    const key = decodeURIComponent(imageUrl.pathname.replace(/^\/+/, ""));
    const requiredPrefix = config.keyPrefix ? `${config.keyPrefix}/` : "";

    return key && (!requiredPrefix || key.startsWith(requiredPrefix)) ? key : null;
  } catch {
    return null;
  }
}

function toPublicUrl(config: R2Config, key: string) {
  return `${config.publicBaseUrl}/${key
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

function normalizeKeyPart(value: string) {
  return value
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-");
}

function formatBytes(bytes: number) {
  return `${Math.round((bytes / (1024 * 1024)) * 10) / 10}MB`;
}
