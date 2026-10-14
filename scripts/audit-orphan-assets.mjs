#!/usr/bin/env node
/**
 * Phát hiện asset tĩnh trong public/ không được tham chiếu ở đâu.
 *
 * Cách làm: quét mọi file trong src/ (ts, tsx, json) + css tìm chuỗi đường dẫn
 * asset, đối chiếu với file thật trong public/. Có kiểm tra thêm theo "tiền tố
 * thư mục" để tránh xoá nhầm ảnh được tham chiếu gián tiếp (ví dụ đường dẫn
 * được ghép từ nhiều mảnh, hoặc cả thư mục bài viết được trỏ tới).
 *
 * Cách dùng:
 *   node scripts/audit-orphan-assets.mjs            # liệt kê
 *   node scripts/audit-orphan-assets.mjs --json     # JSON
 *   node scripts/audit-orphan-assets.mjs --dir public/images
 *
 * Mã thoát: 0 nếu sạch, 1 nếu có asset mồ côi.
 */

import { readdirSync, statSync, readFileSync } from "node:fs";
import { join, resolve, dirname, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const dirFlagIndex = process.argv.indexOf("--dir");
const assetRoot =
  dirFlagIndex !== -1 && process.argv[dirFlagIndex + 1]
    ? resolve(repoRoot, process.argv[dirFlagIndex + 1])
    : join(repoRoot, "public");

const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".mts", ".js", ".mjs", ".json", ".css"]);

function walk(dir, filter) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) results.push(...walk(fullPath, filter));
    else if (filter(fullPath)) results.push(fullPath);
  }
  return results;
}

const sourceFiles = walk(join(repoRoot, "src"), (file) =>
  SOURCE_EXTENSIONS.has(extname(file)),
);

const assetFiles = walk(assetRoot, () => true);

// Gom toàn bộ văn bản nguồn lại để tra cứu.
const corpus = sourceFiles.map((file) => readFileSync(file, "utf8")).join("\n");

const orphans = [];
const uncertain = [];
for (const assetPath of assetFiles) {
  const publicPath = "/" + relative(join(repoRoot, "public"), assetPath);

  // Tham chiếu trực tiếp: chuỗi đường dẫn đầy đủ xuất hiện trong source.
  if (corpus.includes(publicPath)) continue;

  // Dự phòng: nếu thư mục cha trực tiếp được trỏ tới, có thể đường dẫn đang
  // được ghép động ở đâu đó. Xếp vào nhóm "cần xác minh thủ công" thay vì
  // khẳng định là mồ côi.
  //
  // Lưu ý: KHÔNG dùng heuristic "khớp tên file trần" — những tên như 01.webp,
  // 02.webp xuất hiện ở hàng trăm thư mục khác nhau nên sẽ che mất orphan thật.
  const parentDir = publicPath.slice(0, publicPath.lastIndexOf("/"));
  const parentDepth = parentDir.split("/").filter(Boolean).length;
  if (parentDepth >= 2 && corpus.includes(parentDir)) {
    uncertain.push({ path: publicPath, bytes: statSync(assetPath).size });
    continue;
  }

  orphans.push({
    path: publicPath,
    bytes: statSync(assetPath).size,
  });
}

orphans.sort((a, b) => b.bytes - a.bytes);
const totalBytes = orphans.reduce((sum, file) => sum + file.bytes, 0);
const formatMb = (bytes) => `${Math.round((bytes / (1024 * 1024)) * 10) / 10} MB`;

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ orphans, uncertain, totalBytes }, null, 2));
} else {
  console.log(`Asset đã quét       : ${assetFiles.length}`);
  console.log(`File nguồn đã quét  : ${sourceFiles.length}`);
  console.log(`Asset mồ côi        : ${orphans.length}`);
  console.log(`Dung lượng mồ côi   : ${formatMb(totalBytes)}`);
  console.log(`Cần xác minh        : ${uncertain.length}\n`);

  if (orphans.length === 0) {
    console.log("✅ Không phát hiện asset mồ côi.");
  } else {
    for (const file of orphans) {
      console.log(`  ${String(Math.round(file.bytes / 1024)).padStart(6)} KB  ${file.path}`);
    }
  }

  if (uncertain.length > 0) {
    console.log("\nCần xác minh thủ công (thư mục cha có được tham chiếu):");
    for (const file of uncertain) console.log(`  ${file.path}`);
  }
}

process.exit(orphans.length === 0 ? 0 : 1);
