import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const require = createRequire(file);
  new Function("require", "exports", source)((request) => {
    if (request.endsWith(".json"))
      return require(
        request.startsWith("@/")
          ? path.resolve("src", request.slice(2))
          : request,
      );
    if (request.startsWith("@/"))
      return load("src/" + request.slice(2) + ".ts");
    if (
      request.startsWith(".") &&
      fs.existsSync(path.resolve(path.dirname(file), request + ".ts"))
    )
      return load(path.resolve(path.dirname(file), request + ".ts"));
    return require(request);
  }, exports);
  return exports;
}
const { getNavigation } = load("src/data/navigation-english.ts");
const locales = ["vi", "en", "ja", "ko", "sv", "fr", "ru", "es", "zh"];
const flatten = (items) =>
  items.flatMap((item) => [item, ...flatten(item.children ?? [])]);
for (const locale of locales) {
  const menu = getNavigation(locale);
  assert.equal(menu.length, 6);
  assert.equal(menu[1].layout, "portfolio");
  assert.equal(menu[2].layout, "services");
  assert.equal(menu[1].children.filter((x) => x.image).length, 6);
  assert.equal(menu[1].children[0].href.includes("danh-muc=can-ho"), true);
  assert.equal(menu[2].children[0].children.length, 10);
  assert.equal(menu[2].children[1].children.length, 12);
  for (const item of flatten(menu)) {
    assert(item.label);
    if (item.href) {
      assert(
        item.href.startsWith(locale === "vi" ? "/" : `/${locale}/`),
        `${locale}: ${item.href}`,
      );
      assert(!item.href.includes("undefined"));
    }
  }
  console.log(locale, menu.map((x) => x.label).join(" | "));
}
assert.deepEqual(
  getNavigation("vi").map((x) => x.label),
  ["Giới thiệu", "Dự án & mẫu", "Dịch vụ", "Báo giá", "Kinh nghiệm", "Liên hệ"],
);
const vi = getNavigation("vi");
const links = [
  ...new Set(flatten(vi).flatMap((x) => (x.href ? [x.href] : []))),
];
let cursor = 0;
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (cursor < links.length) {
      const href = links[cursor++];
      const r = await fetch(new URL(href, "http://localhost:3000"));
      assert.equal(r.status, 200, href);
    }
  }),
);
for (const item of vi[1].children.filter((x) => x.image)) {
  const r = await fetch(item.image, { method: "HEAD" });
  assert.equal(r.status, 200, item.image);
  assert(r.headers.get("content-type")?.startsWith("image/"));
}
for (const locale of ["en", "ja", "fr", "ru", "zh"]) {
  const r = await fetch(`http://localhost:3000/${locale}`);
  assert.equal(r.status, 200, locale);
}
console.log(
  `Verified ${links.length} unique menu links, 6 R2 images and 9 language trees, including nested service links.`,
);
