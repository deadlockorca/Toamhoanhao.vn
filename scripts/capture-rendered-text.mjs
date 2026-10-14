#!/usr/bin/env node
/**
 * Trích phần text hiển thị của một tập trang để so sánh trước/sau khi refactor.
 * Dùng để chứng minh việc format lại code không làm đổi nội dung render.
 *
 *   node scripts/capture-rendered-text.mjs <base-url> <output-dir>
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const baseUrl = process.argv[2] ?? "http://127.0.0.1:3999";
const outDir = process.argv[3] ?? "/tmp/render-capture";

const paths = [
  "/",
  "/en",
  "/ja",
  "/ko",
  "/sv",
  "/zh",
  "/gioi-thieu",
  "/gioi-thieu/doi-ngu-kien-truc-su",
  "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
  "/gioi-thieu/tuyen-dung",
  "/gioi-thieu/xuong-san-xuat-noi-that",
  "/lien-he",
  "/du-an",
  "/mau-thiet-ke",
  "/bao-gia/thiet-ke-thi-cong-noi-that",
  "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi",
  "/kien-thuc/kien-thuc-nha-dep",
  "/kien-thuc/kinh-nghiem-xay-nha",
  "/kien-thuc/kinh-nghiem-thiet-ke-noi-that",
  "/kien-thuc/phap-ly-xay-dung",
  "/thi-cong-noi-that/khong-gian-bep",
  "/thi-cong-noi-that/khong-gian-phong-ngu",
  "/thi-cong-noi-that/thi-cong-son-ba",
  "/thi-cong-noi-that/thi-cong-tran-thach-cao",
  "/thi-cong-noi-that/thi-cong-phan-tho",
  "/thiet-ke-noi-that/thiet-ke-chung-cu",
  "/thiet-ke-noi-that/biet-thu",
  "/thiet-ke-noi-that/tan-co-dien",
  "/thiet-ke-noi-that/phong-tre-em",
  "/khong-ton-tai-xyz",
];

/** Bỏ script/style rồi bỏ thẻ, chỉ giữ text hiển thị. */
function extractText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

mkdirSync(outDir, { recursive: true });

let failures = 0;
for (const path of paths) {
  const url = `${baseUrl}${path}`;
  try {
    const response = await fetch(url);
    const html = await response.text();
    const text = extractText(html);
    const name =
      path === "/" ? "root" : path.replace(/^\//, "").replace(/\//g, "__");
    writeFileSync(join(outDir, `${name}.txt`), `${response.status}\n${text}\n`);
  } catch (error) {
    failures += 1;
    console.error(`LỖI ${path}: ${error.message}`);
  }
}

console.log(
  `Đã ghi ${paths.length - failures}/${paths.length} trang vào ${outDir}`,
);
