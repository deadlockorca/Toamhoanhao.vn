import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import dotenv from "dotenv";
import mariadb from "mariadb";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const previous = require.extensions[".ts"];
require.extensions[".ts"] = (module, filename) =>
  module._compile(
    ts.transpileModule(
      fs.readFileSync(filename, "utf8").replace(/(["'])@\//g, `$1${root}/src/`),
      {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          esModuleInterop: true,
        },
      },
    ).outputText,
    filename,
  );
const load = (file) => require(path.join(root, `src/${file}.ts`));
const { siteLocales, siteBaseUrl } = load("lib/locale");
const {
  designText,
  localizeDesignSample,
  hasDesignSampleTranslation,
  getDesignUiMessages,
} = load("data/design-samples-localized");
const { mapDbDesignSampleToDesignSample } = load("lib/admin-data-mappers");
const { designSampleMetadata } = load("lib/design-sample-metadata");
const { localizedPageHref } = load("lib/localized-pages");
const { formatDisplayTitle } = load("lib/display-title");
const { createContentLibrary } = load("lib/content-library");
const { villaMenuItems, matchesVillaMenuTopic } = load("data/villa-menu");
const { getDesignCategoryFromQuery } = load("data/design-samples");
const { getNavigation } = load("data/navigation-english");
const dictionaries = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/data/design-sample-translations.json"),
    "utf8",
  ),
);
if (previous) require.extensions[".ts"] = previous;
else delete require.extensions[".ts"];

// Read published source data and child records in a read-only transaction. No credentials in output.
dotenv.config({ path: path.join(root, ".env"), quiet: true });
let connection;
let samples;
try {
  const url = new URL(process.env.DATABASE_URL);
  connection = await mariadb.createConnection({
    host: url.hostname,
    port: Number(url.port || 3306),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.slice(1),
    allowPublicKeyRetrieval: ["127.0.0.1", "localhost", "::1"].includes(
      url.hostname,
    ),
    connectTimeout: 5000,
    socketTimeout: 20000,
  });
  await connection.query("START TRANSACTION READ ONLY");
  const records = await connection.query(
    'SELECT * FROM DesignSample WHERE status="published" ORDER BY sortOrder,createdAt DESC',
  );
  for (const sample of records) {
    sample.detail =
      (
        await connection.query(
          "SELECT * FROM DesignSampleDetail WHERE sampleId=?",
          [sample.id],
        )
      )[0] ?? null;
    for (const [key, table] of Object.entries({
      metrics: "DesignSampleMetric",
      infoRows: "DesignSampleInfoRow",
      gallery: "DesignSampleGalleryItem",
      features: "DesignFeature",
      floorPlanNotes: "DesignFloorPlanNote",
      packages: "SuggestedPackage",
    }))
      sample[key] = await connection.query(
        `SELECT * FROM ${table} WHERE sampleId=? ORDER BY sortOrder`,
        [sample.id],
      );
    for (const pack of sample.packages)
      pack.items = await connection.query(
        "SELECT * FROM SuggestedPackageItem WHERE packageId=? ORDER BY sortOrder",
        [pack.id],
      );
  }
  samples = records.map(mapDbDesignSampleToDesignSample);
  await connection.rollback();
} catch {
  console.error(
    "Cannot read published design samples. Check DATABASE_URL and database availability; credentials are not logged.",
  );
  process.exitCode = 1;
} finally {
  if (connection) await connection.end();
}
if (!samples) process.exit(1);
assert(samples.length > 0, "No published design samples found");
const originals = JSON.stringify(samples);
const errors = [];
const coverage = {};
function media(sample) {
  return {
    thumbnail: sample.thumbnail,
    hero: sample.detail?.heroImage,
    floor: sample.detail?.floorPlanImage,
    gallery: sample.detail?.gallery.map((x) => x.image),
    features: sample.detail?.features.map((x) => x.image),
  };
}
const numbers = (text) =>
  [...text.replace(/[mм]2/gi, "m²").matchAll(/\d+(?:[.,]\d+)*/g)]
    .map((m) => m[0].replace(/[.,]/g, ""))
    .sort();
for (const locale of siteLocales) {
  getDesignUiMessages(locale);
  coverage[locale] = 0;
  for (const sample of samples) {
    try {
      const translated = localizeDesignSample(sample, locale);
      assert.deepEqual(media(translated), media(sample));
      assert.equal(translated.slug, sample.slug);
      assert.equal(translated.category, sample.category);
      assert.equal(translated.area, sample.area);
      assert.equal(
        translated.detail?.gallery.length,
        sample.detail?.gallery.length,
      );
      assert.equal(
        translated.detail?.overviewParagraphs.length,
        sample.detail?.overviewParagraphs.length,
      );
      const path = `/mau-thiet-ke/${sample.slug}`;
      const metadata = designSampleMetadata(locale, sample);
      assert.equal(
        metadata.alternates.canonical,
        siteBaseUrl + localizedPageHref(path, locale),
      );
      assert.equal(Object.keys(metadata.alternates.languages).length, 10);
      coverage[locale]++;
    } catch (error) {
      errors.push({ locale, slug: sample.slug, message: error.message });
    }
  }
  // Category/topic predicates always run against the original source before localization.
  for (const category of new Set(samples.map((s) => s.category))) {
    const source = samples.filter((s) => s.category === category);
    const localized = source
      .filter((s) => hasDesignSampleTranslation(s, locale))
      .map((s) => localizeDesignSample(s, locale));
    assert.equal(
      localized.length,
      source.length,
      `${locale}: category ${category} loses translated records`,
    );
    assert(
      createContentLibrary([], localized).every((item) =>
        localizedPageHref(item.href, locale).startsWith(
          locale === "vi" ? "/mau-thiet-ke" : `/${locale}/mau-thiet-ke`,
        ),
      ),
    );
  }
  for (const topic of villaMenuItems) {
    designText(topic.label, locale);
    assert.deepEqual(
      samples.filter((s) => matchesVillaMenuTopic(s, topic)).map((s) => s.slug),
      samples
        .filter((s) => matchesVillaMenuTopic(s, topic))
        .filter((s) => hasDesignSampleTranslation(s, locale))
        .map((s) => s.slug),
    );
  }
  function checkLinks(items) {
    for (const item of items) {
      if (item.href?.includes("/mau-thiet-ke"))
        assert(
          item.href.startsWith(
            locale === "vi" ? "/mau-thiet-ke" : `/${locale}/mau-thiet-ke`,
          ),
          `${locale} navigation escapes locale`,
        );
      if (item.children) checkLinks(item.children);
    }
  }
  checkLinks(getNavigation(locale));
}
assert.equal(
  JSON.stringify(samples),
  originals,
  "Localization mutated Vietnamese source",
);
for (const [locale, dictionary] of Object.entries(dictionaries)) {
  assert.deepEqual(
    Object.keys(dictionary).sort(),
    Object.keys(dictionaries.en).sort(),
    `${locale} dictionary keys differ`,
  );
  for (const [source, translated] of Object.entries(dictionary)) {
    assert(translated.trim(), `${locale}: blank translation`);
    if (
      locale === "en" &&
      JSON.stringify(numbers(translated)) !== JSON.stringify(numbers(source))
    )
      errors.push({
        locale,
        source,
        message: "Numbers differ from Vietnamese source",
        translated,
      });
    if (
      locale !== "en" &&
      JSON.stringify(numbers(translated)) !==
        JSON.stringify(numbers(dictionaries.en[source]))
    )
      errors.push({
        locale,
        source,
        message: "Numbers differ from reviewed English",
        translated,
      });
  }
}
// Missing or edited content never silently falls back to Vietnamese on translated pages.
assert.equal(
  hasDesignSampleTranslation(
    { ...samples[0], title: "Untranslated newly edited source title" },
    "en",
  ),
  false,
);
const result = {
  checkedAt: new Date().toISOString(),
  publishedSamples: samples.length,
  coverage,
  sourceDataUnchanged: true,
  imagesPreserved: true,
  uiAndNavigationChecked: true,
  nativeEditorialReview: "pending",
  browserReview: "not_requested",
  http: "not_run",
  errors,
};
const baseArg = process.argv.find((a) => a.startsWith("--base-url="));
if (baseArg && errors.length === 0) {
  const base = baseArg.slice(11).replace(/\/$/, "");
  const filtersOnly = process.argv.includes("--filters-only");
  const jobs = filtersOnly
    ? []
    : siteLocales.flatMap((locale) => [
        { locale, path: localizedPageHref("/mau-thiet-ke", locale) },
        ...samples.map((sample) => ({
          locale,
          sample,
          path: localizedPageHref(`/mau-thiet-ke/${sample.slug}`, locale),
        })),
      ]);
  let checked = 0;
  function decode(s) {
    return s
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;|&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }
  const failed = [];
  async function check(job) {
    const response = await fetch(base + job.path, {
      signal: AbortSignal.timeout(90000),
    });
    assert.equal(response.status, 200, job.path);
    const html = await response.text();
    assert(
      !html.includes('id="__next_error__"'),
      `${job.path}: Next error page`,
    );
    assert(html.includes(`lang="${job.locale}"`), `${job.path}: missing lang`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.equal(decode(canonical?.[1] ?? ""), siteBaseUrl + job.path);
    assert.equal(
      (html.match(/<link rel="alternate" hrefLang=/g) || []).length,
      10,
      `${job.path}: hreflang count`,
    );
    if (job.sample) {
      const sample = localizeDesignSample(job.sample, job.locale);
      assert(
        decode(html).includes(formatDisplayTitle(sample.title, job.locale)),
        `${job.path}: missing translated title`,
      );
      for (const paragraph of sample.detail?.overviewParagraphs ?? [])
        assert(
          decode(html).includes(paragraph),
          `${job.path}: missing overview paragraph`,
        );
      assert(
        html.includes(
          `href="${localizedPageHref("/mau-thiet-ke", job.locale)}"`,
        ),
        `${job.path}: back link leaves locale`,
      );
    } else
      assert(
        decode(html).includes(
          designText("Mẫu thiết kế của chúng tôi", job.locale),
        ),
        `${job.path}: listing title`,
      );
  }
  async function worker() {
    while (jobs.length) {
      const job = jobs.shift();
      try {
        await check(job);
      } catch (error) {
        failed.push({ path: job.path, message: error.message });
      }
      checked++;
      if (checked % 72 === 0) console.log(`HTTP checked ${checked} pages`);
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  let filtersChecked = 0;
  const categorySlugs = [
    "chung-cu",
    "nha-pho",
    "biet-thu",
    "phong-khach",
    "phong-ngu",
    "phong-bep",
    "tu-bep",
    "phong-tre-em",
  ];
  for (const locale of siteLocales) {
    const cases = [
      ...categorySlugs.map((slug) => ({
        query: `danh-muc=${slug}`,
        expected: samples.filter(
          (sample) => sample.category === getDesignCategoryFromQuery(slug),
        ),
      })),
      ...villaMenuItems.map((topic) => ({
        query: `chu-de=${topic.slug}`,
        expected: samples.filter((sample) =>
          matchesVillaMenuTopic(sample, topic),
        ),
      })),
      {
        query: "chu-de=penthouse-duplex",
        expected: samples.filter(
          (sample) =>
            sample.category === "Chung cư" &&
            /penthouse|duplex/i.test(sample.title),
        ),
      },
      { query: "trang=2", expected: samples },
    ];
    for (const test of cases) {
      const pagePath = localizedPageHref("/mau-thiet-ke", locale);
      const response = await fetch(`${base}${pagePath}?${test.query}`, {
        signal: AbortSignal.timeout(90000),
      });
      assert.equal(response.status, 200, `${locale} ${test.query}`);
      const html = decode(await response.text());
      assert(
        !html.includes('id="__next_error__"'),
        `${locale} ${test.query}: error page`,
      );
      assert(html.includes(`rel="canonical" href="${siteBaseUrl}${pagePath}"`));
      const visibleTitles = [...html.matchAll(/<h3[^>]*>(.*?)<\/h3>/gs)].map(
        (match) => match[1].replace(/<[^>]*>/g, ""),
      );
      const allTitles = samples.map((sample) =>
        formatDisplayTitle(localizeDesignSample(sample, locale).title, locale),
      );
      const sampleTitles = visibleTitles.filter((title) =>
        allTitles.includes(title),
      );
      const expectedTitles = test.expected
        .map((sample) =>
          formatDisplayTitle(
            localizeDesignSample(sample, locale).title,
            locale,
          ),
        )
        .slice(0, test.query === "trang=2" ? 18 : 9);
      assert.deepEqual(
        sampleTitles,
        expectedTitles,
        `${locale} ${test.query}: filtered sample order`,
      );
      // Language options are mounted only when the dropdown is opened; verify
      // the server passes the original query to that client component instead.
      assert(
        html
          .replaceAll(String.fromCharCode(92), "")
          .includes(`"languageQuery":"${test.query}"`),
        `${locale} ${test.query}: query missing from switcher props`,
      );
      filtersChecked++;
    }
  }
  const sitemap = await (await fetch(base + "/sitemap.xml")).text();
  for (const sample of samples)
    for (const locale of siteLocales)
      assert(
        sitemap.includes(
          `<loc>${siteBaseUrl + localizedPageHref(`/mau-thiet-ke/${sample.slug}`, locale)}</loc>`,
        ),
        `Sitemap missing ${locale}/${sample.slug}`,
      );
  for (const missing of [
    "/en/mau-thiet-ke/does-not-exist",
    "/xx/mau-thiet-ke",
    "/vi/mau-thiet-ke",
    "/xx/mau-thiet-ke/does-not-exist",
  ])
    assert.equal((await fetch(base + missing)).status, 404, missing);
  const previous = filtersOnly
    ? JSON.parse(
        fs.readFileSync(
          path.join(
            root,
            "docs/i18n-inventory/design-samples-verification.json",
          ),
          "utf8",
        ),
      ).http
    : undefined;
  result.http = {
    checked: filtersOnly ? previous.checked : checked,
    failed: filtersOnly ? [...previous.failed, ...failed] : failed,
    filtersChecked,
    sitemap: true,
    invalidRoutes404: true,
  };
  errors.push(...failed);
}
const out = path.join(
  root,
  "docs/i18n-inventory/design-samples-verification.json",
);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(result, null, 2) + "\n");
console.log(
  JSON.stringify(
    {
      published: samples.length,
      coverage,
      http: result.http,
      errors: errors.length,
    },
    null,
    2,
  ),
);
if (errors.length) {
  console.error(errors.slice(0, 12));
  process.exitCode = 1;
}
