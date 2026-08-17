import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteOrigin = "https://toamhoanhao.vn";
const apiOrigin = `${siteOrigin}/wp-json/wp/v2`;
const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryDir = path.join(importRoot, "inventory");
const crawlDelayMs = 220;
const maxImageConcurrency = 4;

const selectedCategorySlugs = new Set([
  "biet-thu-nha-pho",
  "https-toamhoanhao-com-bo-suu-tap-biet-thu",
  "bo-suu-tap-nha-mai-thai",
  "https-toamhoanhao-com-bo-suu-tap-nha-pho",
  "chung-cu",
  "cong-trinh-da-lam",
  "khong-gian-bep",
  "khong-gian-phong-khach",
  "khong-gian-phong-ngu",
  "noi-that-van-phong",
  "penhouse-douplex",
  "quan-cafe",
  "du-an-tham-khao",
]);

const projectCategorySlugs = new Set([
  "cong-trinh-da-lam",
  "noi-that-van-phong",
  "quan-cafe",
]);

const folderLabels = {
  "du-an/can-ho": "Dự án / Căn hộ",
  "du-an/biet-thu": "Dự án / Biệt thự",
  "du-an/nha-pho": "Dự án / Nhà phố",
  "du-an/van-phong": "Dự án / Văn phòng",
  "du-an/noi-that-tron-goi": "Dự án / Nội thất trọn gói",
  "mau-thiet-ke/noi-that-chung-cu": "Mẫu thiết kế / Nội thất chung cư",
  "mau-thiet-ke/nha-pho": "Mẫu thiết kế / Nhà phố",
  "mau-thiet-ke/biet-thu": "Mẫu thiết kế / Biệt thự",
  "mau-thiet-ke/phong-khach": "Mẫu thiết kế / Phòng khách",
  "mau-thiet-ke/phong-ngu": "Mẫu thiết kế / Phòng ngủ",
  "mau-thiet-ke/phong-bep": "Mẫu thiết kế / Phòng bếp",
  "mau-thiet-ke/tu-bep": "Mẫu thiết kế / Tủ bếp",
  "mau-thiet-ke/phong-tre-em": "Mẫu thiết kế / Phòng trẻ em",
  "khac-luu-tru": "Khác / Lưu trữ",
};

const categoryHints = [
  {
    folder: "du-an/van-phong",
    newType: "project",
    newCategory: "Văn phòng",
    anyCategory: ["noi-that-van-phong", "quan-cafe"],
  },
  {
    folder: "du-an/can-ho",
    newType: "project",
    newCategory: "Căn hộ",
    anyCategory: ["cong-trinh-da-lam"],
    titleIncludes: ["chung cư", "căn hộ", "apartment", "penhouse", "penthouse", "duplex"],
  },
  {
    folder: "du-an/biet-thu",
    newType: "project",
    newCategory: "Biệt thự",
    anyCategory: ["cong-trinh-da-lam"],
    titleIncludes: ["biệt thự", "villa"],
  },
  {
    folder: "du-an/nha-pho",
    newType: "project",
    newCategory: "Nhà phố",
    anyCategory: ["cong-trinh-da-lam"],
    titleIncludes: ["nhà phố", "nhà ống", "shophouse"],
  },
  {
    folder: "du-an/noi-that-tron-goi",
    newType: "project",
    newCategory: "Nội thất trọn gói",
    anyCategory: ["cong-trinh-da-lam"],
  },
  {
    folder: "mau-thiet-ke/phong-khach",
    newType: "designSample",
    newCategory: "Phòng khách",
    anyCategory: ["khong-gian-phong-khach"],
  },
  {
    folder: "mau-thiet-ke/phong-ngu",
    newType: "designSample",
    newCategory: "Phòng ngủ",
    anyCategory: ["khong-gian-phong-ngu"],
  },
  {
    folder: "mau-thiet-ke/phong-bep",
    newType: "designSample",
    newCategory: "Phòng bếp",
    anyCategory: ["khong-gian-bep"],
  },
  {
    folder: "mau-thiet-ke/tu-bep",
    newType: "designSample",
    newCategory: "Tủ bếp",
    titleIncludes: ["tủ bếp"],
  },
  {
    folder: "mau-thiet-ke/noi-that-chung-cu",
    newType: "designSample",
    newCategory: "Chung cư",
    anyCategory: ["chung-cu", "penhouse-douplex"],
  },
  {
    folder: "mau-thiet-ke/biet-thu",
    newType: "designSample",
    newCategory: "Biệt thự",
    anyCategory: [
      "https-toamhoanhao-com-bo-suu-tap-biet-thu",
      "bo-suu-tap-nha-mai-thai",
      "biet-thu-nha-pho",
    ],
    titleIncludes: ["biệt thự", "villa"],
  },
  {
    folder: "mau-thiet-ke/nha-pho",
    newType: "designSample",
    newCategory: "Nhà phố",
    anyCategory: ["https-toamhoanhao-com-bo-suu-tap-nha-pho", "biet-thu-nha-pho"],
  },
  {
    folder: "khac-luu-tru",
    newType: "archive",
    newCategory: "Khác",
  },
];

async function main() {
  await mkdir(inventoryDir, { recursive: true });

  const categories = await fetchAllPages(
    `${apiOrigin}/categories?per_page=100&_fields=id,count,name,slug,parent,link`,
  );
  const categoryById = new Map(categories.map((category) => [category.id, category]));

  await writeJson(path.join(inventoryDir, "old-site-categories.json"), categories);

  const allPosts = await fetchAllPages(
    `${apiOrigin}/posts?per_page=100&_fields=id,date,modified,slug,link,title,excerpt,content,categories,featured_media`,
  );
  const posts = allPosts.filter((post) => {
    const slugs = post.categories
      .map((id) => categoryById.get(id)?.slug)
      .filter(Boolean);

    return slugs.some((slug) => selectedCategorySlugs.has(slug));
  });

  const sitemapImagesByUrl = await readSitemapImages();
  const inventory = [];

  for (const [index, post] of posts.entries()) {
    const postCategories = post.categories
      .map((id) => categoryById.get(id))
      .filter(Boolean);
    const classification = classifyPost(post, postCategories);
    const postDir = path.join(importRoot, classification.folder, post.slug);
    const rawDir = path.join(postDir, "00-raw");
    const selectedDir = path.join(postDir, "01-selected");
    const editedDir = path.join(postDir, "02-edited");
    const webDir = path.join(postDir, "03-web");

    await Promise.all([
      mkdir(rawDir, { recursive: true }),
      mkdir(selectedDir, { recursive: true }),
      mkdir(editedDir, { recursive: true }),
      mkdir(webDir, { recursive: true }),
    ]);

    const contentImages = extractImageUrls(
      `${post.content?.rendered ?? ""}\n${post.excerpt?.rendered ?? ""}`,
    );
    const sitemapImages = sitemapImagesByUrl.get(normalizeUrl(post.link)) ?? [];
    const imageUrls = uniqueUrls([...contentImages, ...sitemapImages]).filter(
      isToAmImage,
    );

    const downloadedImages = await downloadImages(imageUrls, rawDir);
    const meta = {
      oldId: post.id,
      oldUrl: post.link,
      title: decodeHtml(stripHtml(post.title?.rendered ?? "")),
      slug: post.slug,
      oldCategories: postCategories.map((category) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
      })),
      folder: classification.folder,
      folderLabel: folderLabels[classification.folder],
      newType: classification.newType,
      newCategory: classification.newCategory,
      status: "needs-review",
      date: post.date,
      modified: post.modified,
      excerpt: decodeHtml(stripHtml(post.excerpt?.rendered ?? "")),
      imageCount: downloadedImages.length,
      images: downloadedImages,
      notes: [
        "Ảnh trong 00-raw là ảnh tải thô từ web cũ.",
        "Sau khi chọn ảnh, copy ảnh phù hợp sang 01-selected.",
        "Sau khi chỉnh ảnh, đặt ảnh chỉnh vào 02-edited.",
        "Ảnh đã resize/nén cho web mới sẽ nằm ở 03-web.",
      ],
    };

    await writeJson(path.join(postDir, "meta.json"), meta);
    inventory.push(meta);

    console.log(
      `[${index + 1}/${posts.length}] ${classification.folder}/${post.slug} - ${downloadedImages.length} ảnh`,
    );

    await wait(crawlDelayMs);
  }

  await writeJson(path.join(inventoryDir, "old-site-content-inventory.json"), inventory);
  await writeTree(path.join(inventoryDir, "folder-tree.txt"), inventory);

  console.log(`Done. Imported ${inventory.length} posts into ${importRoot}`);
}

async function fetchAllPages(url) {
  const firstResponse = await fetchWithRetry(`${url}&page=1`);
  const totalPages = Number(firstResponse.headers.get("x-wp-totalpages") ?? 1);
  const firstPage = await firstResponse.json();
  const pages = [firstPage];

  for (let page = 2; page <= totalPages; page += 1) {
    const response = await fetchWithRetry(`${url}&page=${page}`);
    pages.push(await response.json());
    await wait(crawlDelayMs);
  }

  return pages.flat();
}

async function readSitemapImages() {
  const sitemapIndexText = await fetchText(`${siteOrigin}/sitemap.xml`);
  const sitemapUrls = [...sitemapIndexText.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => decodeXml(match[1]))
    .filter((url) => url.includes("post-sitemap"));
  const imagesByUrl = new Map();

  for (const sitemapUrl of sitemapUrls) {
    const sitemapText = await fetchText(sitemapUrl);
    const urlBlocks = sitemapText.match(/<url>[\s\S]*?<\/url>/g) ?? [];

    for (const block of urlBlocks) {
      const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];

      if (!loc) {
        continue;
      }

      const imageUrls = [...block.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(
        (match) => decodeXml(match[1]),
      );

      if (imageUrls.length > 0) {
        imagesByUrl.set(normalizeUrl(decodeXml(loc)), imageUrls);
      }
    }

    await wait(crawlDelayMs);
  }

  return imagesByUrl;
}

function classifyPost(post, categories) {
  const categorySlugs = new Set(categories.map((category) => category.slug));
  const title = decodeHtml(stripHtml(post.title?.rendered ?? "")).toLowerCase();
  const isProject = [...categorySlugs].some((slug) => projectCategorySlugs.has(slug));

  for (const hint of categoryHints) {
    if (hint.newType === "project" && !isProject) {
      continue;
    }

    if (hint.anyCategory?.some((slug) => categorySlugs.has(slug))) {
      if (
        !hint.titleIncludes ||
        hint.titleIncludes.some((keyword) => title.includes(keyword))
      ) {
        return hint;
      }
    }

    if (hint.titleIncludes?.some((keyword) => title.includes(keyword))) {
      return hint;
    }
  }

  return categoryHints.at(-1);
}

async function downloadImages(urls, rawDir) {
  const results = [];
  let cursor = 0;

  async function worker() {
    while (cursor < urls.length) {
      const index = cursor;
      cursor += 1;
      const url = normalizeImageUrl(urls[index]);
      const downloaded = await downloadImage(url, rawDir, index);

      if (downloaded) {
        results[index] = downloaded;
      }

      await wait(80);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(maxImageConcurrency, urls.length) }, worker),
  );

  return results.filter(Boolean);
}

async function downloadImage(url, rawDir, index) {
  const extension = imageExtension(url);
  const filename = `${String(index + 1).padStart(2, "0")}-${slugify(
    path.basename(new URL(url).pathname, path.extname(new URL(url).pathname)),
  ).slice(0, 80)}-${hashUrl(url)}${extension}`;
  const filePath = path.join(rawDir, filename);
  const relativePath = path.relative(importRoot, filePath);

  try {
    await readFile(filePath);

    return {
      sourceUrl: url,
      rawPath: relativePath,
      skipped: true,
    };
  } catch {}

  try {
    const response = await fetchWithRetry(url);

    if (!response.ok) {
      return {
        sourceUrl: url,
        rawPath: relativePath,
        error: `HTTP ${response.status}`,
      };
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(filePath, buffer);

    return {
      sourceUrl: url,
      rawPath: relativePath,
      bytes: buffer.byteLength,
    };
  } catch (error) {
    return {
      sourceUrl: url,
      rawPath: relativePath,
      error: error instanceof Error ? error.message : "Download failed",
    };
  }
}

async function fetchText(url) {
  const response = await fetchWithRetry(url);
  return response.text();
}

async function fetchWithRetry(url, retries = 2) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "user-agent":
            "ToAmHoanHaoImporter/1.0 (+https://toamhoanhao.vn)",
        },
      });

      if (response.ok || response.status === 404) {
        return response;
      }

      lastError = new Error(`HTTP ${response.status} for ${url}`);
    } catch (error) {
      lastError = error;
    }

    await wait(600 * (attempt + 1));
  }

  throw lastError;
}

async function writeTree(filePath, inventory) {
  const grouped = new Map();

  for (const item of inventory) {
    const items = grouped.get(item.folder) ?? [];
    items.push(item);
    grouped.set(item.folder, items);
  }

  const lines = ["to-am-hoan-hao"];

  for (const folder of Object.keys(folderLabels)) {
    const items = grouped.get(folder) ?? [];
    lines.push(`├── ${folder} (${items.length})`);

    for (const item of items) {
      lines.push(`│   ├── ${item.slug} (${item.imageCount} ảnh)`);
    }
  }

  await writeFile(filePath, `${lines.join("\n")}\n`);
}

function extractImageUrls(html) {
  const urls = [];
  const srcMatches = html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
  const srcsetMatches = html.matchAll(/<img[^>]+srcset=["']([^"']+)["']/gi);

  for (const match of srcMatches) {
    urls.push(match[1]);
  }

  for (const match of srcsetMatches) {
    for (const srcsetItem of match[1].split(",")) {
      const candidate = srcsetItem.trim().split(/\s+/)[0];

      if (candidate) {
        urls.push(candidate);
      }
    }
  }

  return urls;
}

function isToAmImage(url) {
  try {
    const parsedUrl = new URL(normalizeImageUrl(url));

    return (
      parsedUrl.hostname === "toamhoanhao.vn" &&
      parsedUrl.pathname.includes("/wp-content/uploads/")
    );
  } catch {
    return false;
  }
}

function normalizeImageUrl(url) {
  const withoutQuery = decodeHtml(url).split("?")[0];

  if (withoutQuery.startsWith("//")) {
    return `https:${withoutQuery}`;
  }

  if (withoutQuery.startsWith("http://toamhoanhao.vn")) {
    return withoutQuery.replace("http://", "https://");
  }

  if (withoutQuery.startsWith("/")) {
    return `${siteOrigin}${withoutQuery}`;
  }

  return withoutQuery;
}

function normalizeUrl(url) {
  return decodeHtml(url).replace(/^http:/, "https:").replace(/\/$/, "");
}

function uniqueUrls(urls) {
  return Array.from(
    new Set(
      urls
        .map((url) => normalizeImageUrl(url))
        .filter((url) => /^https?:\/\//.test(url)),
    ),
  );
}

function imageExtension(url) {
  const extension = path.extname(new URL(url).pathname).toLowerCase();

  return [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"].includes(extension)
    ? extension
    : ".jpg";
}

function slugify(value) {
  const slug = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "image";
}

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function hashUrl(url) {
  return createHash("sha1").update(url).digest("hex").slice(0, 8);
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function writeJson(filePath, data) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
