import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
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
const load = (f) => require(path.join(root, `src/${f}.ts`));
const { siteLocales } = load("lib/locale");
const { constructionPageSlugs, localizedPageHref, getLocalizedPagePath } = load(
  "lib/localized-pages",
);
const { constructionArticles: records } = load("data/construction-articles");
const { localizeConstructionArticle, constructionArticleText: t } = load(
  "data/construction-articles-localized",
);
const { constructionArticleMetadata } = load(
  "lib/construction-article-metadata",
);
const { constructionPageMetadata } = load("lib/construction-page-metadata");
const { getNavigation } = load("data/navigation-english");
const dictionaries = require("../src/data/construction-article-translations.json");
const paths = require("../src/data/construction-article-paths.json");
const copyFiles = {
  "khong-gian-bep": ["kitchen-space", "kitchenSpaceCopy"],
  "khong-gian-phong-khach": ["living-room-space", "livingRoomSpaceCopy"],
  "khong-gian-phong-ngu": ["bedroom-space", "bedroomSpaceCopy"],
  "thi-cong-chung-cu": ["apartment-construction", "apartmentConstructionCopy"],
  "thi-cong-nha-pho": ["townhouse-construction", "townhouseConstructionCopy"],
  "thi-cong-phan-tho": ["shell-construction", "shellConstructionCopy"],
  "thi-cong-cai-tao": ["renovation-construction", "renovationConstructionCopy"],
  "thi-cong-son-ba": ["paint-construction", "paintConstructionCopy"],
  "thi-cong-tran-thach-cao": [
    "ceiling-construction",
    "ceilingConstructionCopy",
  ],
  "thi-cong-do-go": ["wood-construction", "woodConstructionCopy"],
  "thi-cong-dien-nuoc": ["electrical-plumbing", "electricalPlumbingCopy"],
  "nhat-ki-thi-cong": ["construction-diary", "constructionDiaryCopy"],
};
const copy = Object.fromEntries(
  Object.entries(copyFiles).map(([slug, [file, key]]) => [
    slug,
    load(`data/${file}`)[key],
  ]),
);
require.extensions[".ts"] = previous;
function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, shape(v)]),
    );
  assert.equal(typeof value, "string");
  assert.ok(value.trim());
  return "string";
}
function metadataCheck(meta, basePath, locale) {
  assert.equal(
    new URL(meta.alternates.canonical).pathname,
    localizedPageHref(basePath, locale),
  );
  for (const language of siteLocales)
    assert.equal(
      new URL(meta.alternates.languages[language]).pathname,
      localizedPageHref(basePath, language),
    );
  assert.ok(meta.title && meta.description);
}
for (const locale of siteLocales) {
  const menu = getNavigation(locale).flatMap((item) => item.children ?? []);
  for (const slug of constructionPageSlugs) {
    const basePath = `/thi-cong-noi-that/${slug}`,
      href = localizedPageHref(basePath, locale);
    assert.ok(
      menu.some((item) => item.href === href),
      href,
    );
    assert.deepEqual(
      shape(copy[slug][locale]),
      shape(copy[slug].vi),
      `${locale}: ${slug} copy shape`,
    );
    metadataCheck(
      constructionPageMetadata(locale, slug, {
        title: copy[slug][locale].heroParts.join(" "),
        description: copy[slug][locale].intro,
      }),
      basePath,
      locale,
    );
    assert.ok(
      fs.existsSync(
        path.join(
          root,
          locale === "vi"
            ? `src/app${basePath}/page.tsx`
            : `src/app/[locale]${basePath}/page.tsx`,
        ),
      ),
    );
  }
}
let sourceImages = 0,
  sourceParagraphs = 0;
const snapshots = JSON.stringify(records);
for (const record of records) {
  const { article, group, path: basePath, target } = record;
  assert.equal(paths[basePath], target ?? basePath);
  if (!target) {
    assert.ok(
      fs.existsSync(path.join(root, "public", article.image)),
      article.image,
    );
    sourceImages += article.sections.flatMap((s) => s.images ?? []).length;
    sourceParagraphs += article.sections.flatMap((s) => s.paragraphs).length;
  }
  for (const locale of siteLocales) {
    const translated = localizeConstructionArticle(article, locale);
    assert.equal(translated.slug, article.slug);
    assert.equal(translated.image, article.image);
    assert.deepEqual(translated.relatedSlugs, article.relatedSlugs);
    assert.deepEqual(
      translated.sections.map((s) => s.images?.map((i) => i.src)),
      article.sections.map((s) => s.images?.map((i) => i.src)),
    );
    assert.deepEqual(
      translated.sections.map((s) => s.paragraphs.length),
      article.sections.map((s) => s.paragraphs.length),
    );
    assert.equal(translated.sections.length, article.sections.length);
    assert.equal(translated.highlights.length, article.highlights.length);
    for (const image of article.sections.flatMap((s) => s.images ?? []))
      assert.ok(fs.existsSync(path.join(root, "public", image.src)), image.src);
    metadataCheck(
      constructionArticleMetadata(article, group, locale),
      basePath,
      locale,
    );
    assert.equal(
      getLocalizedPagePath(localizedPageHref(basePath, locale)),
      target ?? basePath,
    );
    assert.equal(
      localizedPageHref(basePath + "?x=1#section", locale),
      localizedPageHref(target ?? basePath, locale) + "?x=1#section",
    );
  }
}
assert.equal(JSON.stringify(records), snapshots, "Source content mutated");
const uiFiles = [
  "components/interior-space/space-article.tsx",
  "components/bedroom-space/bedroom-space-article.tsx",
  "components/home/consultation-cta.tsx",
];
const uiKeys = new Set();
for (const file of uiFiles) {
  const source = fs.readFileSync(path.join(root, "src", file), "utf8"),
    ast = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
  function visit(n) {
    if (
      ts.isCallExpression(n) &&
      n.expression.getText(ast) === "t" &&
      ts.isStringLiteral(n.arguments[0])
    )
      uiKeys.add(n.arguments[0].text);
    ts.forEachChild(n, visit);
  }
  visit(ast);
}
for (const locale of siteLocales.filter((l) => l !== "vi")) {
  assert.deepEqual(
    Object.keys(dictionaries[locale]).sort(),
    Object.keys(dictionaries.en).sort(),
  );
  for (const key of uiKeys)
    assert.ok(t(key, locale).trim(), `${locale}: ${key}`);
}
const result = {
  checkedAt: new Date().toISOString(),
  listingPages: 12,
  articles: records.filter((r) => !r.target).length,
  aliases: records.filter((r) => r.target).length,
  locales: siteLocales,
  sourcePagesChecked: (12 + records.filter((r) => !r.target).length) * 9,
  sourceParagraphs,
  sourceImages,
  sourceDataUnchanged: true,
  metadataVerified: true,
  editorialReview: "pending",
  browserReview: "not_requested",
  errors: [],
};
const base = process.argv.find((a) => a.startsWith("--base-url="))?.slice(11);
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
if (base) {
  const jobs = siteLocales.flatMap((locale) => [
    ...constructionPageSlugs.map((slug) => ({
      locale,
      path: `/thi-cong-noi-that/${slug}`,
    })),
    ...records
      .filter((r) => !r.target)
      .map((record) => ({ locale, path: record.path, record })),
  ]);
  let checked = 0;
  await Promise.all(
    Array.from({ length: 3 }, async () => {
      for (let job; (job = jobs.shift());) {
        const { locale, path: basePath, record } = job,
          href = localizedPageHref(basePath, locale);
        const response = await fetch(new URL(href, base), {
          signal: AbortSignal.timeout(45000),
        });
        assert.equal(response.status, 200, href);
        const html = (await response.text()).replace(/<!--.*?-->/g, "");
        assert.match(html, new RegExp(`<main[^>]*lang="${locale}"`), href);
        assert.match(html, /<h1[\s>]/, href);
        const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
        assert.ok(canonical, href);
        assert.equal(new URL(canonical[1]).pathname, href);
        if (record) {
          const a = localizeConstructionArticle(record.article, locale);
          const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
          assert.ok(h1?.includes(escape(a.title)), href);
          for (const section of a.sections) {
            for (const p of section.paragraphs)
              assert.ok(
                html.includes(escape(p.replace(/^[•♦♥Θ»→⇒Δ]\s*/, ""))),
                `${href}: paragraph missing`,
              );
            for (const i of section.images ?? [])
              assert.ok(
                html.includes(i.src) ||
                  html.includes(encodeURIComponent(i.src)),
                `${href}: image missing`,
              );
          }
        }
        const group = basePath.split("/").at(-1);
        if (
          [
            "khong-gian-bep",
            "khong-gian-phong-khach",
            "khong-gian-phong-ngu",
          ].includes(group)
        )
          for (const r of records.filter((r) => r.group === group))
            assert.ok(
              html.includes(localizedPageHref(r.target ?? r.path, locale)),
              `${href}: unlocalized article card ${r.path}`,
            );
        checked++;
      }
    }),
  );
  result.httpPagesChecked = checked;
  for (const locale of siteLocales)
    for (const r of records.filter((r) => r.target)) {
      const href = (locale === "vi" ? "" : `/${locale}`) + r.path;
      const response = await fetch(new URL(href, base), {
        redirect: "manual",
        signal: AbortSignal.timeout(45000),
      });
      assert.equal(response.status, 307, href);
      assert.equal(
        response.headers.get("location"),
        localizedPageHref(r.target, locale),
      );
    }
  result.redirectsChecked = records.filter((r) => r.target).length * 9;
  const sitemapResponse = await fetch(new URL("/sitemap.xml", base), {
    signal: AbortSignal.timeout(45000),
  });
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const locale of siteLocales)
    for (const basePath of [
      ...constructionPageSlugs.map((s) => `/thi-cong-noi-that/${s}`),
      ...records.filter((r) => !r.target).map((r) => r.path),
    ])
      assert.ok(
        sitemap.includes(localizedPageHref(basePath, locale) + "</loc>"),
        `Sitemap: ${locale}: ${basePath}`,
      );
  result.sitemapPagesChecked = result.sourcePagesChecked;
  for (const href of [
    "/xx/thi-cong-noi-that/khong-gian-bep/3-bang-mau-kinh-op-bep",
    "/vi/thi-cong-noi-that/khong-gian-bep/3-bang-mau-kinh-op-bep",
    "/en/thi-cong-noi-that/khong-gian-phong-ngu/khong-co-bai-viet-nay",
  ]) {
    const response = await fetch(new URL(href, base), {
      signal: AbortSignal.timeout(45000),
    });
    assert.equal(response.status, 404, href);
  }
}
fs.writeFileSync(
  path.join(root, "docs/i18n-inventory/construction-verification.json"),
  JSON.stringify(result, null, 2) + "\n",
);
console.log(JSON.stringify(result, null, 2));
