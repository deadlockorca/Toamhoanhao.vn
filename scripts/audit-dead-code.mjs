#!/usr/bin/env node
/**
 * Phát hiện code chết bằng phân tích reachability trên đồ thị import.
 *
 * Khác với grep đơn thuần, cách này đi theo toàn bộ chuỗi import xuất phát từ
 * các entry point theo convention của Next.js (page/layout/route/...). Nhờ vậy
 * nó bắt đúng cả trường hợp nhiều file chết import lẫn nhau — thứ mà grep bỏ sót.
 *
 * Cách dùng:
 *   node scripts/audit-dead-code.mjs           # liệt kê file chết
 *   node scripts/audit-dead-code.mjs --json    # xuất JSON cho CI
 *
 * Mã thoát: 0 nếu sạch, 1 nếu có file chết (dùng được làm CI gate).
 */

import { readdirSync, statSync, readFileSync } from "node:fs";
import { join, resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(repoRoot, "src");

const SOURCE_EXTENSIONS = /\.(ts|tsx|mts)$/;
const RESOLVE_SUFFIXES = [
  "",
  ".ts",
  ".tsx",
  ".mts",
  ".css",
  "/index.ts",
  "/index.tsx",
];

/**
 * Các file mà Next.js tự nạp theo convention, không cần ai import.
 * Nếu không loại trừ, chúng sẽ bị báo nhầm là code chết.
 */
const FRAMEWORK_ENTRY =
  /(page|layout|route|template|default|loading|error|not-found|global-error|global-not-found|icon|apple-icon|opengraph-image|twitter-image|sitemap|robots|proxy|middleware|instrumentation)\.(ts|tsx)$/;

function collectSourceFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (fullPath.includes("src/generated")) continue;
    if (statSync(fullPath).isDirectory()) {
      files.push(...collectSourceFiles(fullPath));
    } else if (SOURCE_EXTENSIONS.test(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function createResolver(allFiles) {
  const known = new Set(allFiles);
  return (fromFile, specifier) => {
    let base;
    if (specifier.startsWith("@/")) base = join(srcDir, specifier.slice(2));
    else if (specifier.startsWith("."))
      base = resolve(dirname(fromFile), specifier);
    else return null;

    for (const suffix of RESOLVE_SUFFIXES) {
      if (known.has(base + suffix)) return base + suffix;
    }
    return null;
  };
}

function buildImportGraph(files, resolveSpecifier) {
  const importPattern = /(?:from\s+|import\s*\(\s*)["']([^"']+)["']/g;
  const graph = new Map();

  for (const file of files) {
    const source = readFileSync(file, "utf8");
    const dependencies = new Set();
    let match;
    importPattern.lastIndex = 0;
    while ((match = importPattern.exec(source))) {
      const resolved = resolveSpecifier(file, match[1]);
      if (resolved) dependencies.add(resolved);
    }
    graph.set(file, dependencies);
  }
  return graph;
}

function findReachable(graph, entryPoints) {
  const reachable = new Set();
  const stack = [...entryPoints];
  while (stack.length > 0) {
    const file = stack.pop();
    if (reachable.has(file)) continue;
    reachable.add(file);
    for (const dependency of graph.get(file) ?? []) {
      if (!reachable.has(dependency)) stack.push(dependency);
    }
  }
  return reachable;
}

const files = collectSourceFiles(srcDir);
const graph = buildImportGraph(files, createResolver(files));
const entryPoints = files.filter((file) => FRAMEWORK_ENTRY.test(file));
const reachable = findReachable(graph, entryPoints);

const deadFiles = files
  .filter((file) => !reachable.has(file))
  .map((file) => ({
    path: relative(repoRoot, file),
    lines: readFileSync(file, "utf8").split("\n").length,
  }))
  .sort((a, b) => b.lines - a.lines);

const totalLines = deadFiles.reduce((sum, file) => sum + file.lines, 0);

if (process.argv.includes("--json")) {
  console.log(
    JSON.stringify(
      {
        sourceFiles: files.length,
        entryPoints: entryPoints.length,
        reachable: reachable.size,
        deadFiles,
        totalDeadLines: totalLines,
      },
      null,
      2,
    ),
  );
} else {
  console.log(`File nguồn          : ${files.length}`);
  console.log(`Entry point         : ${entryPoints.length}`);
  console.log(`Reachable           : ${reachable.size}`);
  console.log(`File chết           : ${deadFiles.length}`);
  console.log(`Tổng dòng chết      : ${totalLines}\n`);

  if (deadFiles.length === 0) {
    console.log("✅ Không phát hiện code chết.");
  } else {
    for (const file of deadFiles) {
      console.log(`  ${String(file.lines).padStart(5)}  ${file.path}`);
    }
  }
}

process.exit(deadFiles.length === 0 ? 0 : 1);
