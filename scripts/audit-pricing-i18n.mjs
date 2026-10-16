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
const load = (file) => require(path.join(root, `src/${file}.ts`));
const { siteLocales } = load("lib/locale");
const { pricingRoutes, pricingPagePaths, pricingArticlePaths } = load(
  "data/pricing-routes",
);
const { pricingArticles } = load("data/pricing-articles");
const { constructionPricingArticles } = load(
  "data/construction-pricing-articles",
);
const {
  getLocalizedPricingArticles,
  getLocalizedConstructionPricingArticles,
  pricingText,
} = load("data/pricing-localized");
const { localizedPageHref, getLocalizedPagePath } = load("lib/localized-pages");
const { getNavigation } = load("data/navigation-english");
const { budgetPackage169Copy } = load("data/budget-package-169");
const { pricingOverviewMetadata, pricingArticleMetadata } = load(
  "lib/pricing-metadata",
);
if (previous) require.extensions[".ts"] = previous;
else delete require.extensions[".ts"];
const dictionaries = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/data/pricing-translations.json"),
    "utf8",
  ),
);
const original = {
  interior: pricingArticles,
  construction: constructionPricingArticles,
};
const localized = (category, locale) =>
  category === "interior"
    ? getLocalizedPricingArticles(locale)
    : getLocalizedConstructionPricingArticles(locale);
const checks = [];
const publicPaths = [...pricingPagePaths, ...pricingArticlePaths];
assert.equal(publicPaths.length, 16);
assert.equal(new Set(publicPaths).size, 16);
for (const [category, group] of Object.entries(pricingRoutes))
  assert.deepEqual(
    group.slugs,
    original[category].map((a) => a.slug),
  );

// Test every translation used by the templates, including dynamic-count messages.
for (const name of fs
  .readdirSync(path.join(root, "src/components/pricing"))
  .filter((f) => f.endsWith(".tsx"))) {
  const filename = path.join(root, "src/components/pricing", name);
  const ast = ts.createSourceFile(
    filename,
    fs.readFileSync(filename, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "t" &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      for (const locale of siteLocales)
        assert.ok(pricingText(node.arguments[0].text, locale).trim());
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}
const englishKeys = Object.keys(dictionaries.en).sort();
assert.ok(englishKeys.length > 750);
function numericValues(text) {
  return (text.match(/\d+(?:[.,]\d+)*/g) ?? [])
    .map((value) => value.replace(/[.,]/g, ""))
    .sort();
}
function monetaryValues(text) {
  return (text.match(/\d{1,3}(?:[.,]\d{3})+/g) ?? [])
    .map((value) => value.replace(/[.,]/g, ""))
    .sort();
}
for (const [source, text] of Object.entries(dictionaries.en))
  assert.deepEqual(
    monetaryValues(text),
    monetaryValues(source),
    `en: changed monetary amount ${source.slice(0, 70)}`,
  );
for (const locale of siteLocales.filter((l) => l !== "vi")) {
  assert.deepEqual(
    Object.keys(dictionaries[locale]).sort(),
    englishKeys,
    `${locale}: dictionary coverage`,
  );
  for (const [source, text] of Object.entries(dictionaries[locale])) {
    assert.ok(text.trim(), `${locale}: empty translation`);
    assert.deepEqual(
      numericValues(text),
      numericValues(dictionaries.en[source]),
      `${locale}: changed number ${source.slice(0, 70)}`,
    );
    assert.equal(
      (text.match(/\{count\}/g) ?? []).length,
      (source.match(/\{count\}/g) ?? []).length,
      `${locale}: count placeholder`,
    );
    if (source.includes("Tổ Ấm Hoàn Hảo") || source.includes("TỔ ẤM HOÀN HẢO"))
      assert.ok(
        /Tổ Ấm Hoàn Hảo|TỔ ẤM HOÀN HẢO/.test(text),
        `${locale}: brand name changed`,
      );
    if (!source.includes("$"))
      assert.ok(!text.includes("$"), `${locale}: currency changed to dollars`);
  }
}
function verifyShape(base, translated) {
  assert.equal(translated.slug, base.slug);
  assert.equal(translated.image, base.image);
  assert.equal(translated.sections.length, base.sections.length);
  base.sections.forEach((section, i) => {
    const other = translated.sections[i];
    assert.ok(other.title.trim());
    assert.equal(other.paragraphs.length, section.paragraphs.length);
    assert.deepEqual(
      other.images?.map((x) => [x.src, x.width, x.height]),
      section.images?.map((x) => [x.src, x.width, x.height]),
    );
  });
  assert.deepEqual(translated.images, base.images);
  assert.deepEqual(
    translated.contentSections?.map((s) => s.blocks.map((b) => b.type)),
    base.contentSections?.map((s) => s.blocks.map((b) => b.type)),
  );
  assert.deepEqual(
    translated.contentSections?.flatMap((s) =>
      s.blocks.filter((b) => b.type === "image").map((b) => b.src),
    ),
    base.contentSections?.flatMap((s) =>
      s.blocks.filter((b) => b.type === "image").map((b) => b.src),
    ),
  );
}
for (const locale of siteLocales) {
  assert.deepEqual(
    Object.keys(budgetPackage169Copy[locale]).sort(),
    Object.keys(budgetPackage169Copy.vi).sort(),
  );
  for (const value of Object.values(budgetPackage169Copy[locale]))
    assert.ok(value.trim());
  const menu = getNavigation(locale).flatMap((item) => item.children ?? []);
  for (const [category, group] of Object.entries(pricingRoutes)) {
    const articles = localized(category, locale);
    assert.equal(articles.length, original[category].length);
    assert.ok(
      menu.find((item) => item.href === localizedPageHref(group.path, locale)),
    );
    for (const [index, article] of articles.entries())
      verifyShape(original[category][index], article);
    for (const [slug, article] of [
      [null, null],
      ...articles.map((a) => [a.slug, a]),
    ]) {
      const pathname = group.path + (slug ? `/${slug}` : "");
      const href = localizedPageHref(pathname, locale);
      assert.equal(getLocalizedPagePath(href), pathname);
      assert.equal(getLocalizedPagePath(`${href}/`), pathname);
      assert.equal(
        localizedPageHref(`${href}?loai=vat-lieu#bao-gia`, "en"),
        `${localizedPageHref(pathname, "en")}?loai=vat-lieu#bao-gia`,
      );
      const metadata = slug
        ? pricingArticleMetadata(category, slug, locale)
        : pricingOverviewMetadata(category, locale);
      assert.equal(new URL(metadata.alternates.canonical).pathname, href);
      assert.equal(Object.keys(metadata.alternates.languages).length, 10);
      for (const language of siteLocales)
        assert.equal(
          new URL(metadata.alternates.languages[language]).pathname,
          localizedPageHref(pathname, language),
        );
      for (const image of metadata.openGraph.images)
        assert.ok(
          fs.existsSync(path.join(root, "public", image.url)),
          image.url,
        );
      checks.push({ locale, category, pathname, href, article });
    }
  }
}
console.log(
  `Source checks passed: ${checks.length} pages, complete dictionaries and unchanged article/image structure.`,
);

const base = process.argv
  .find((arg) => arg.startsWith("--base-url="))
  ?.slice("--base-url=".length);
if (base) {
  const decode = (s) =>
    s
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#x27;|&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
  const normalize = (s) => decode(s).replace(/\s+/g, " ").trim();
  for (const locale of siteLocales) {
    for (const check of checks.filter((c) => c.locale === locale)) {
      const response = await fetch(new URL(check.href, base), {
        signal: AbortSignal.timeout(60000),
      });
      assert.equal(response.status, 200, check.href);
      const html = await response.text();
      assert.match(html, new RegExp(`<main[^>]*lang="${locale}"`));
      const canonical = html.match(
        /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/,
      );
      assert.equal(new URL(canonical?.[1]).pathname, check.href);
      for (const language of [...siteLocales, "x-default"]) {
        const alternate = html.match(
          new RegExp(
            `<link[^>]*hrefLang="${language}"[^>]*href="([^"]+)"`,
            "i",
          ),
        );
        assert.ok(alternate, `${check.href}: hreflang ${language}`);
        assert.equal(
          new URL(alternate[1]).pathname,
          language === "x-default"
            ? check.pathname
            : localizedPageHref(check.pathname, language),
        );
      }
      const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
      const text = normalize(main.replace(/<[^>]+>/g, " "));
      const { article } = check;
      if (article) {
        assert.ok(
          text.includes(normalize(article.title)),
          `${check.href}: title`,
        );
        const blocks = article.contentSections
          ? article.contentSections.flatMap((s) => [
              s.title,
              ...s.blocks.filter((b) => b.type !== "image").map((b) => b.text),
            ])
          : article.sections.flatMap((s, index) => [
              ...(article.slug === "goi-noi-that-hoan-thien-169-trieu" &&
              index === 1
                ? []
                : [s.title]),
              ...s.paragraphs,
            ]);
        for (const block of blocks)
          assert.ok(
            text.includes(normalize(block.replace(/^[•♦♥Θ»→⇒Δ]\s*/, ""))),
            `${check.href}: missing block ${block.slice(0, 90)}`,
          );
        if (check.category === "interior") {
          const copy = budgetPackage169Copy[locale];
          assert.ok(
            text.includes(copy.toc),
            `${check.href}: table of contents`,
          );
          for (const image of article.sections.flatMap(
            (section) => section.images ?? [],
          )) {
            assert.ok(
              main.includes(encodeURIComponent(image.src)) ||
                main.includes(`src="${image.src}"`),
              `${check.href}: missing article image ${image.src}`,
            );
            assert.ok(
              text.includes(normalize(copy.zoom)),
              `${check.href}: image zoom action`,
            );
          }
          if (article.slug !== "goi-noi-that-hoan-thien-169-trieu") {
            for (const [index] of article.sections.entries()) {
              const id = `noi-dung-${index + 1}`;
              assert.ok(
                main.includes(`id="${id}"`),
                `${check.href}: section anchor ${id}`,
              );
              assert.ok(
                main.includes(`href="#${id}"`),
                `${check.href}: TOC destination ${id}`,
              );
            }
            if (article.archived) {
              const amount = article.slug.match(/-(\d+)-trieu$/)[1];
              assert.ok(
                text.includes(normalize(copy.price.replace("169", amount))),
                `${check.href}: package price`,
              );
            }
          }
        }
        if (check.category === "construction") {
          const copy = budgetPackage169Copy[locale];
          assert.ok(text.includes(copy.toc), `${check.href}: construction TOC`);
          for (const [index, section] of article.contentSections.entries()) {
            const id = `noi-dung-${index + 1}`;
            assert.ok(
              main.includes(`id="${id}"`),
              `${check.href}: section anchor ${id}`,
            );
            assert.ok(
              main.includes(`href="#${id}"`),
              `${check.href}: TOC destination ${id}`,
            );
            for (const block of section.blocks.filter(
              (block) => block.type === "image",
            )) {
              assert.ok(
                main.includes(encodeURIComponent(block.src)) ||
                  main.includes(`src="${block.src}"`),
                `${check.href}: missing construction image ${block.src}`,
              );
              assert.ok(
                text.includes(normalize(copy.zoom)),
                `${check.href}: image zoom action`,
              );
            }
          }
        }
        if (article.slug === "goi-noi-that-hoan-thien-169-trieu") {
          const copy = budgetPackage169Copy[locale];
          for (const label of [
            copy.tableTitle,
            copy.notes,
            copy.zoom,
            copy.price,
          ])
            assert.ok(
              text.includes(normalize(label)),
              `${check.href}: redesigned article label`,
            );
          for (const id of [
            "pham-vi",
            "goi-noi-that",
            "bang-bao-gia",
            "luu-y",
          ]) {
            assert.ok(main.includes(`id="${id}"`));
            assert.ok(main.includes(`href="#${id}"`));
          }
          assert.match(main, /<dialog\b/);
        }
        const relatedSlugs =
          article.relatedSlugs ??
          localized(check.category, locale)
            .filter((item) => item.slug !== article.slug)
            .slice(0, 3)
            .map((item) => item.slug);
        for (const slug of relatedSlugs)
          assert.ok(
            main.includes(
              `href="${localizedPageHref(`${pricingRoutes[check.category].path}/${slug}`, locale)}"`,
            ),
            `${check.href}: related article ${slug}`,
          );
      } else {
        const count = (main.match(/class="[^\"]*articleCard[^\"]*"/g) ?? [])
          .length;
        assert.equal(
          count,
          original[check.category].length,
          `${check.href}: article cards`,
        );
      }
      for (const path of pricingPagePaths) {
        assert.ok(
          main.includes(`href="${localizedPageHref(path, locale)}"`),
          `${check.href}: menu destination`,
        );
        if (locale !== "vi")
          assert.ok(
            !main.includes(`href="${path}"`),
            `${check.href}: Vietnamese fallback link`,
          );
      }
    }
    console.log(`HTTP content and SEO passed: ${locale} (16 pages).`);
  }
  // Exercise all category filters in every locale, including empty/unknown values.
  const filters = {
    interior: {
      "tong-hop": 1,
      "vat-lieu": 1,
      "tu-bep": 1,
      "van-phong": 1,
      "goi-ngan-sach": 4,
      "kinh-nghiem": 1,
    },
    construction: { "nha-pho": 3, "cach-tinh-gia": 1, "quy-trinh": 1 },
  };
  for (const locale of siteLocales)
    for (const [category, values] of Object.entries(filters))
      for (const [filter, expected] of Object.entries(values)) {
        const href = localizedPageHref(pricingRoutes[category].path, locale);
        const response = await fetch(new URL(`${href}?loai=${filter}`, base), {
          signal: AbortSignal.timeout(60000),
        });
        assert.equal(response.status, 200);
        const html = await response.text();
        assert.equal(
          (html.match(/class="[^\"]*articleCard[^\"]*"/g) ?? []).length,
          expected,
          `${href}?loai=${filter}`,
        );
        assert.ok(html.includes(`href="${href}?loai=${filter}#bao-gia"`));
      }
  const response = await fetch(new URL("/sitemap.xml", base), {
    signal: AbortSignal.timeout(60000),
  });
  assert.equal(response.status, 200);
  const xml = await response.text();
  for (const { href } of checks) {
    const entry = xml.match(
      new RegExp(`<url>\\s*<loc>[^<]*${href}</loc>[\\s\\S]*?</url>`),
    );
    assert.ok(entry, `Sitemap ${href}`);
    assert.equal((entry[0].match(/hreflang=/g) ?? []).length, 10);
  }
  for (const href of [
    "/xx/bao-gia/thiet-ke-thi-cong-noi-that",
    "/en/bao-gia/thiet-ke-thi-cong-noi-that/not-a-real-article",
    "/vi/bao-gia/thiet-ke-thi-cong-noi-that",
  ]) {
    const response = await fetch(new URL(href, base), {
      signal: AbortSignal.timeout(60000),
    });
    assert.equal(response.status, 404, href);
  }
  console.log(
    "Filter checks passed: 81 cases. Sitemap has all 144 URLs. Invalid routes return 404.",
  );
}
