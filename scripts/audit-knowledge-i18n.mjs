import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url),
  previous = require.extensions[".ts"];
require.extensions[".ts"] = (m, f) =>
  m._compile(
    ts.transpileModule(
      fs.readFileSync(f, "utf8").replace(/(["'])@\//g, `$1${root}/src/`),
      {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          esModuleInterop: true,
        },
      },
    ).outputText,
    f,
  );
const load = (f) => require(path.join(root, `src/${f}.ts`));
const { knowledgeGroups } = load("data/knowledge");
const { getKnowledgeTranslator, localizeKnowledgeArticle } = load(
  "data/knowledge-localized",
);
const { knowledgeArticleMetadata, knowledgeListingMetadata } = load(
  "lib/knowledge-metadata",
);
const { siteLocales } = load("lib/locale");
const { localizedPageHref } = load("lib/localized-pages");
const { getNavigation } = load("data/navigation-english");
const only = process.argv
  .find((a) => a.startsWith("--locales="))
  ?.slice(10)
  .split(",");
const locales = only ?? siteLocales;
for (const l of locales) assert.ok(siteLocales.includes(l));
const groups = Object.entries(knowledgeGroups);
const records = groups.flatMap(([group, g]) =>
  g.articles.map((article) => ({
    group,
    article,
    path: `/kien-thuc/${group}/${article.slug}`,
  })),
);
const before = JSON.stringify(knowledgeGroups);
const uiKeys = new Set();
for (const file of [
  ...fs
    .readdirSync(path.join(root, "src/components/knowledge"))
    .filter((f) => f.endsWith("-listing.tsx"))
    .map((f) => `src/components/knowledge/${f}`),
  "src/components/beautiful-home-article/beautiful-home-article.tsx",
  "src/components/wood-pricing-article/wood-pricing-article.tsx",
]) {
  const source = fs.readFileSync(path.join(root, file), "utf8"),
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
for (const [, g] of groups)
  for (const key of ["label", "contentTitle", "backLabel"]) uiKeys.add(g[key]);
let sourceParagraphs = 0,
  sourceImages = 0;
const missingImages = new Set();
for (const { article: a } of records) {
  if (
    a.image.startsWith("/") &&
    !fs.existsSync(path.join(root, "public", a.image))
  )
    missingImages.add(a.image);
  for (const s of a.sections)
    for (const b of s.blocks) {
      if (b.type === "image") {
        sourceImages++;
        if (
          b.src.startsWith("/") &&
          !fs.existsSync(path.join(root, "public", b.src))
        )
          missingImages.add(b.src);
      } else sourceParagraphs++;
    }
}
assert.equal(
  missingImages.size,
  0,
  `Missing source images: ${[...missingImages].slice(0, 5)}`,
);
const metadataCheck = (m, p, l) => {
  assert.equal(
    new URL(m.alternates.canonical).pathname,
    localizedPageHref(p, l),
  );
  assert.equal(Object.keys(m.alternates.languages).length, 10);
  for (const lang of siteLocales)
    assert.equal(
      new URL(m.alternates.languages[lang]).pathname,
      localizedPageHref(p, lang),
    );
};
const translators = {};
for (const locale of locales) {
  const t = await getKnowledgeTranslator(locale);
  translators[locale] = t;
  for (const key of uiKeys) assert.ok(t(key).trim(), `${locale}: ${key}`);
  const menu = getNavigation(locale).flatMap((x) => x.children ?? []);
  for (const [group] of groups) {
    const p = `/kien-thuc/${group}`;
    assert.ok(
      menu.some((x) => x.href === localizedPageHref(p, locale)),
      `${locale}: menu ${p}`,
    );
    metadataCheck(await knowledgeListingMetadata(group, locale), p, locale);
  }
  for (const { group, article: a, path: p } of records) {
    const copy = localizeKnowledgeArticle(a, t);
    assert.equal(copy.slug, a.slug);
    assert.equal(copy.date, a.date);
    assert.equal(copy.image, a.image);
    assert.equal(copy.legacyUrl, a.legacyUrl);
    assert.equal(copy.sections.length, a.sections.length);
    for (let i = 0; i < a.sections.length; i++) {
      const x = a.sections[i],
        y = copy.sections[i];
      assert.equal(y.blocks.length, x.blocks.length);
      assert.equal(y.sourceTitle, x.title);
      for (let j = 0; j < x.blocks.length; j++) {
        assert.equal(y.blocks[j].type, x.blocks[j].type);
        if (x.blocks[j].type === "image")
          assert.equal(y.blocks[j].src, x.blocks[j].src);
        else assert.equal(y.blocks[j].sourceText, x.blocks[j].text);
      }
    }
    metadataCheck(knowledgeArticleMetadata(a, group, locale, t), p, locale);
    assert.equal(
      localizedPageHref(p + "?test=1#section-1", locale),
      localizedPageHref(p, locale) + "?test=1#section-1",
    );
  }
  if (locale !== "vi") {
    const dictionary = require(
      `../src/data/knowledge-translations/${locale}.json`,
    );
    assert.ok(
      Object.values(dictionary).every((x) => typeof x === "string" && x.trim()),
    );
  }
}
assert.equal(JSON.stringify(knowledgeGroups), before, "Source data changed");
const report = {
  checkedAt: new Date().toISOString(),
  groups: groups.length,
  articles: records.length,
  locales,
  sourcePagesChecked: (records.length + groups.length) * locales.length,
  sourceParagraphs,
  sourceImages,
  sourceDataUnchanged: true,
  metadataVerified: true,
  editorialReview: "pending",
  browserReview: "not_requested",
  errors: [],
};
const base = process.argv.find((a) => a.startsWith("--base-url="))?.slice(11),
  escape = (s) =>
    s
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#x27;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
if (base) {
  const representatives = new Map();
  for (const [group, g] of groups) {
    const sorted = [...g.articles].sort(
      (a, b) =>
        b.sections.reduce((n, s) => n + s.blocks.length, 0) -
        a.sections.reduce((n, s) => n + s.blocks.length, 0),
    );
    for (const a of [
      g.articles[0],
      g.articles.at(-1),
      ...sorted.slice(0, 2),
      g.articles.find((a) => a.sections.some((s) => !s.blocks.length)),
      g.articles.find(
        (a) => a.slug === "bao-gia-thiet-ke-noi-that-bang-go-2023-toamhoanhao",
      ),
    ].filter(Boolean))
      representatives.set(`/kien-thuc/${group}/${a.slug}`, a);
  }
  const selected = process.argv.includes("--all-pages")
    ? new Map(records.map((r) => [r.path, r.article]))
    : representatives;
  const jobs = locales.flatMap((locale) => [
    ...groups.map(([g]) => ({ locale, path: `/kien-thuc/${g}` })),
    ...[...selected].map(([path, article]) => ({ locale, path, article })),
  ]);
  let checked = 0;
  await Promise.all(
    Array.from({ length: 3 }, async () => {
      for (let job; (job = jobs.shift());) {
        const { locale, path: p, article: a } = job,
          href = localizedPageHref(p, locale);
        const response = await fetch(new URL(href, base), {
          signal: AbortSignal.timeout(60000),
        });
        assert.equal(response.status, 200, href);
        const html = (await response.text()).replace(/<!--.*?-->/g, "");
        assert.match(html, new RegExp(`<main[^>]*lang="${locale}"`), href);
        const canon = html.match(/<link rel="canonical" href="([^"]+)"/);
        assert.ok(canon, href);
        assert.equal(new URL(canon[1]).pathname, href);
        assert.match(html, /<h1[\s>]/, href);
        if (a) {
          const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
          assert.ok(h1?.includes(escape(translators[locale](a.title))), href);
          assert.ok(
            html.includes(
              localizedPageHref(p.slice(0, p.lastIndexOf("/")), locale),
            ),
            `${href}: listing link`,
          );
        }
        checked++;
      }
    }),
  );
  report.httpPagesChecked = checked;
  const filterJobs = locales.flatMap((locale) =>
    groups.flatMap(([group]) =>
      (group === "kien-thuc-nha-dep"
        ? ["nam=2023", "nam=2024&trang=2", "trang=9999", "nam=invalid"]
        : group === "phap-ly-xay-dung"
          ? ["chu-de=giay-phep", "chu-de=quy-trinh", "chu-de=invalid"]
          : [
              "chu-de=thi-cong&trang=2",
              "chu-de=phong-thuy",
              "chu-de=invalid",
              "trang=2",
            ]
      ).map((query) => ({ locale, group, query })),
    ),
  );
  for (const { locale, group, query } of filterJobs) {
    const p = `/kien-thuc/${group}`,
      href = localizedPageHref(p, locale) + "?" + query;
    const response = await fetch(new URL(href, base), {
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(response.status, 200, href);
    const html = await response.text();
    const canon = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(canon, href);
    assert.equal(new URL(canon[1]).pathname, localizedPageHref(p, locale));
    assert.equal(new URL(canon[1]).search, "");
    assert.ok(
      html.includes("languageQuery"),
      `${href}: language query not passed`,
    );
  }
  report.filteredListingsChecked = filterJobs.length;
  const response = await fetch(new URL("/sitemap.xml", base), {
    signal: AbortSignal.timeout(60000),
  });
  assert.equal(response.status, 200);
  const xml = await response.text();
  for (const l of siteLocales)
    for (const p of [
      ...groups.map(([g]) => `/kien-thuc/${g}`),
      ...records.map((r) => r.path),
    ])
      assert.ok(
        xml.includes(localizedPageHref(p, l) + "</loc>"),
        `Sitemap: ${l} ${p}`,
      );
  report.sitemapPagesChecked =
    (records.length + groups.length) * siteLocales.length;
  for (const p of [
    "/xx/kien-thuc/kien-thuc-nha-dep/not-found",
    "/vi/kien-thuc/kien-thuc-nha-dep/not-found",
    "/en/kien-thuc/kinh-nghiem-xay-nha/not-found",
  ]) {
    const r = await fetch(new URL(p, base), {
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(r.status, 404, p);
  }
}
require.extensions[".ts"] = previous;
fs.writeFileSync(
  path.join(root, "docs/i18n-inventory/knowledge-verification.json"),
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
