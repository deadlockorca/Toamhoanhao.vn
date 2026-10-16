import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const previous = require.extensions[".ts"];
require.extensions[".ts"] = (module, filename) => {
  const source = fs
    .readFileSync(filename, "utf8")
    .replace(/(["'])@\//g, `$1${root}/src/`);
  module._compile(
    ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
      },
    }).outputText,
    filename,
  );
};
const load = (file) => require(path.join(root, `src/${file}.ts`));
const { siteLocales } = load("lib/locale");
const { interiorDesignPagePaths, localizedPageHref } = load(
  "lib/localized-pages",
);
const { getNavigation } = load("data/navigation-english");
const { interiorDesignText } = load("data/interior-design-localized");
const { interiorDesignMetadata } = load("lib/interior-design-metadata");
const pages = require("../src/data/interior-design-pages.json");
const translations = require("../src/data/interior-design-translations.json");
const oldMetadata = {
  "biet-thu": "villa",
  "phong-ngu": "bedroom",
  "thong-minh": "smart",
  "phong-bep": "kitchen",
  "phong-tre-em": "kids",
};
const metadataHelpers = Object.fromEntries(
  Object.entries(oldMetadata).map(([slug, name]) => [
    slug,
    load(`lib/${name}-interior-metadata`)[`${name}InteriorMetadata`],
  ]),
);
require.extensions[".ts"] = previous;
const used = new Set();
const sourceImages = (source) =>
  [...source.matchAll(/\/images\/[^"'`\s]+/g)].map((m) => m[0]).sort();
for (const [slug, page] of Object.entries(pages)) {
  used.add(page.title);
  used.add(page.description);
  const filename = `src/app/thiet-ke-noi-that/${slug}/landing.tsx`;
  const source = fs.readFileSync(path.join(root, filename), "utf8");
  const ast = ts.createSourceFile(
    filename,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(ast) === "t" &&
      ts.isStringLiteral(node.arguments[0])
    )
      used.add(node.arguments[0].text);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  // Optional comparison with the pre-refactor page. Works after commits too.
  if (process.argv.includes("--compare-head")) {
    const before = execFileSync(
      "git",
      ["show", `HEAD:src/app/thiet-ke-noi-that/${slug}/page.tsx`],
      { cwd: root, encoding: "utf8" },
    );
    assert.deepEqual(
      sourceImages(source),
      sourceImages(before),
      `${slug}: images changed`,
    );
  }
  assert.match(source, /<SiteHeader locale=\{locale\}/);
  assert.match(source, /<SiteFooter locale=\{locale\}/);
  assert.match(source, /<main lang=\{locale\}/);
}
assert.equal(interiorDesignPagePaths.length, 10);
for (const locale of siteLocales.filter((l) => l !== "vi")) {
  for (const key of used)
    assert.ok(translations[locale][key]?.trim(), `${locale}: missing ${key}`);
  assert.deepEqual(
    Object.keys(translations[locale]).sort(),
    Object.keys(translations.en).sort(),
  );
  for (const key of used)
    assert.equal(interiorDesignText(key, locale), translations[locale][key]);
}
for (const locale of siteLocales) {
  const menu = getNavigation(locale).flatMap((item) => item.children ?? []);
  for (const page of interiorDesignPagePaths) {
    const href = localizedPageHref(page, locale);
    assert.ok(
      menu.some((item) => item.href === href),
      `${locale}: missing menu ${page}`,
    );
    assert.ok(
      fs.existsSync(
        path.join(
          root,
          locale === "vi"
            ? `src/app${page}/page.tsx`
            : `src/app/[locale]${page}/page.tsx`,
        ),
      ),
    );
    const slug = page.split("/").at(-1);
    const metadata = pages[slug]
      ? interiorDesignMetadata(slug, locale)
      : metadataHelpers[slug](locale);
    assert.equal(new URL(metadata.alternates.canonical).pathname, href);
    assert.equal(Object.keys(metadata.alternates.languages).length, 10);
    for (const language of siteLocales)
      assert.equal(
        new URL(metadata.alternates.languages[language]).pathname,
        localizedPageHref(page, language),
      );
    assert.ok(metadata.title && metadata.description);
  }
}
const result = {
  checkedAt: new Date().toISOString(),
  pages: 10,
  locales: siteLocales,
  sourceRoutesChecked: 90,
  newPages: 5,
  translatedKeysUsed: used.size,
  editorialReview: "pending",
  browserReview: "not_requested",
  errors: [],
};
const base = process.argv
  .find((arg) => arg.startsWith("--base-url="))
  ?.slice(11);
if (base) {
  const jobs = siteLocales.flatMap((locale) =>
    interiorDesignPagePaths.map((page) => ({ locale, page })),
  );
  let checked = 0;
  await Promise.all(
    Array.from({ length: 3 }, async () => {
      for (let job; (job = jobs.shift());) {
        const { locale, page } = job,
          href = localizedPageHref(page, locale);
        const response = await fetch(new URL(href, base), {
          signal: AbortSignal.timeout(45000),
        });
        assert.equal(response.status, 200, href);
        const html = await response.text();
        assert.match(html, new RegExp(`<main[^>]*lang="${locale}"`), href);
        assert.match(html, /<h1[\s>]/, href);
        assert.ok(html.includes(`rel="canonical" href="`), href);
        assert.ok(html.includes(href), href);
        if (locale !== "vi")
          assert.ok(
            !html.includes("Missing interior design translation"),
            href,
          );
        checked++;
      }
    }),
  );
  result.httpPagesChecked = checked;
  const sitemapResponse = await fetch(new URL("/sitemap.xml", base), {
    signal: AbortSignal.timeout(45000),
  });
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const locale of siteLocales)
    for (const page of interiorDesignPagePaths) {
      assert.ok(
        sitemap.includes(localizedPageHref(page, locale) + "</loc>"),
        `Sitemap missing ${locale}: ${page}`,
      );
    }
  result.sitemapPagesChecked = 90;

  for (const href of [
    "/xx/thiet-ke-noi-that/thiet-ke-khach-san",
    "/vi/thiet-ke-noi-that/thiet-ke-khach-san",
  ]) {
    const response = await fetch(new URL(href, base), {
      signal: AbortSignal.timeout(45000),
    });
    assert.equal(response.status, 404, href);
  }
}
fs.mkdirSync(path.join(root, "docs/i18n-inventory"), { recursive: true });
fs.writeFileSync(
  path.join(root, "docs/i18n-inventory/interior-design-verification.json"),
  JSON.stringify(result, null, 2) + "\n",
);
console.log(JSON.stringify(result, null, 2));
