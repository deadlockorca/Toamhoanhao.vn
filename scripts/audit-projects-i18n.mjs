import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import dotenv from "dotenv";
import mariadb from "mariadb";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: path.join(root, ".env"), quiet: true });
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
  projectText,
  localizeProject,
  hasProjectTranslation,
  getProjectUiMessages,
} = load("data/projects-localized");
const { mapDbProjectToProject } = load("lib/admin-data-mappers");
const { projectMetadata } = load("lib/project-metadata");
const { localizedPageHref } = load("lib/localized-pages");
const { formatDisplayTitle } = load("lib/display-title");
const { createContentLibrary } = load("lib/content-library");
const { apartmentMenuItems, matchesApartmentArea } = load(
  "data/apartment-menu",
);
const { getProjectCategoryFromQuery } = load("lib/content-library");
const { getNavigation } = load("data/navigation-english");
const dictionaries = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/data/project-translations.json"),
    "utf8",
  ),
);
if (previous) require.extensions[".ts"] = previous;
else delete require.extensions[".ts"];

// Read published source data and child records in a read-only transaction. No credentials in output.
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
    'SELECT * FROM Project WHERE status="published" ORDER BY sortOrder,createdAt DESC',
  );
  for (const sample of records) {
    sample.detail =
      (
        await connection.query(
          "SELECT * FROM ProjectDetail WHERE projectId=?",
          [sample.id],
        )
      )[0] ?? null;
    for (const [key, table] of Object.entries({
      metrics: "ProjectMetric",
      infoRows: "ProjectInfoRow",
      spaces: "ProjectSpace",
      storyBlocks: "ProjectStoryBlock",
      floorPlanNotes: "ProjectFloorPlanNote",
    }))
      sample[key] = await connection.query(
        `SELECT * FROM ${table} WHERE projectId=? ORDER BY sortOrder`,
        [sample.id],
      );
  }
  samples = records.map(mapDbProjectToProject);
  await connection.rollback();
} catch {
  console.error(
    "Cannot read published projects. Check DATABASE_URL and database availability; credentials are not logged.",
  );
  process.exitCode = 1;
} finally {
  if (connection) await connection.end();
}
if (!samples) process.exit(1);
assert(samples.length > 0, "No published projects found");
const originals = JSON.stringify(samples);
const errors = [];
const coverage = {};
function media(sample) {
  return {
    thumbnail: sample.thumbnail,
    hero: sample.detail?.heroImage,
    floor: sample.detail?.floorPlanImage,
    spaces: sample.detail?.spaces.map((x) => x.image),
    storyBlocks: sample.detail?.storyBlocks.map((x) => x.image),
  };
}
const numbers = (text) =>
  [
    ...text
      .replace(/(?<=\d)\s*(?:mm|m|м)\s*2/gi, "m²")
      // Japanese/Chinese may write the word “million” as 100万.
      .replace(/100\s*万/g, "百万")
      .matchAll(/\d+(?:[.,]\d+)*/g),
  ]
    .map((match) => match[0].replace(/[.,]/g, ""))
    .sort();
function numericDifference(source, translated, english = source) {
  const original = numbers(source),
    actual = numbers(translated);
  const remaining = [...actual];
  for (const value of original) {
    const index = remaining.indexOf(value);
    if (index < 0) return `Missing or changed numeric value: ${value}`;
    remaining.splice(index, 1);
  }
  const words = `${source} ${english}`.toLowerCase();
  const spelled = {
    1: /\b(one|a|an|một|mỗi)\b/u,
    2: /\b(two|hai)\b/u,
    3: /\b(three|ba)\b/u,
  };
  const unexpected = remaining.filter((value) => !spelled[value]?.test(words));
  return unexpected.length
    ? `Unexpected numeric values: ${unexpected.join(", ")}`
    : undefined;
}
// Validate every literal UI message used in both the catalogue and detail template.
for (const file of [
  "src/components/projects/detail/project-detail-showcase.tsx",
  "src/components/portfolio/portfolio-overview.tsx",
]) {
  const ast = ts.createSourceFile(
    file,
    fs.readFileSync(path.join(root, file), "utf8"),
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
        projectText(node.arguments[0].text, locale);
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}
for (const locale of siteLocales) {
  getProjectUiMessages(locale);
  coverage[locale] = 0;
  for (const sample of samples) {
    try {
      const translated = localizeProject(sample, locale);
      assert.deepEqual(media(translated), media(sample));
      assert.equal(translated.slug, sample.slug);
      assert.equal(translated.category, sample.category);
      assert.equal(translated.area, sample.area);
      assert.equal(
        translated.detail?.spaces.length,
        sample.detail?.spaces.length,
      );
      assert.equal(
        translated.detail?.overviewParagraphs.length,
        sample.detail?.overviewParagraphs.length,
      );
      assert.equal(
        translated.detail?.storyBlocks.length,
        sample.detail?.storyBlocks.length,
      );
      for (const [index, block] of (
        sample.detail?.storyBlocks ?? []
      ).entries()) {
        const originalParagraphs = block.description
          .split(/\n\s*\n/)
          .filter(Boolean);
        const paragraphs = translated.detail.storyBlocks[index].description
          .split(/\n\s*\n/)
          .filter(Boolean);
        assert.equal(
          paragraphs.length,
          originalParagraphs.length,
          `${locale}/${sample.slug}: story paragraph boundaries changed`,
        );
      }
      const path = `/du-an/${sample.slug}`;
      const metadata = projectMetadata(locale, sample);
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
      .filter((s) => hasProjectTranslation(s, locale))
      .map((s) => localizeProject(s, locale));
    assert.equal(
      localized.length,
      source.length,
      `${locale}: category ${category} loses translated records`,
    );
    assert(
      createContentLibrary(localized, []).every((item) =>
        localizedPageHref(item.href, locale).startsWith(
          locale === "vi" ? "/du-an" : `/${locale}/du-an`,
        ),
      ),
    );
  }
  for (const topic of apartmentMenuItems.filter((topic) => "min" in topic)) {
    projectText(topic.label, locale);
    const filtered = samples.filter(
      (sample) =>
        sample.category === "Căn hộ" &&
        matchesApartmentArea(sample.area, topic),
    );
    assert(filtered.every((sample) => hasProjectTranslation(sample, locale)));
  }
  function checkLinks(items) {
    for (const item of items) {
      if (item.href?.includes("/du-an"))
        assert(
          item.href.startsWith(locale === "vi" ? "/du-an" : `/${locale}/du-an`),
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
    // Customer names following Vietnamese honorifics are identifiers.
    for (const match of source.matchAll(
      /\b(?:Anh|anh|Chị|chị|Chú|chú|Bác|bác|Bà|bà|Cô|cô)\s+([A-ZĐÀ-Ỹ][a-zA-Zđà-ỹĐÀ-Ỹ]+)/gu,
    )) {
      if (!translated.includes(match[1]))
        errors.push({
          locale,
          source,
          message: `Customer name changed: ${match[1]}`,
          translated,
        });
    }
    const issue = numericDifference(
      source,
      translated,
      dictionaries.en[source],
    );
    if (issue) errors.push({ locale, source, message: issue, translated });
    if (
      /triệu|tỷ|tỉ|VNĐ|VND/i.test(source) &&
      !/USD|đô la|dollar/i.test(source)
    )
      assert(
        !/\$|\bUSD\b|dollars?|доллар|dólar|(?<![ァ-ヶー])ドル(?![ァ-ヶー])|달러|美元|美金/i.test(
          translated,
        ),
        `${locale}: currency changed`,
      );
    const masked = source.match(/\d+[.,]?[xX]+/g) ?? [];
    for (const amount of masked)
      if (
        !translated
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(amount.toLowerCase())
      )
        errors.push({
          locale,
          source,
          message: `Masked price changed: ${amount}`,
          translated,
        });
  }
}
// Missing or edited content never silently falls back to Vietnamese on translated pages.
assert.equal(
  hasProjectTranslation(
    { ...samples[0], title: "Untranslated newly edited source title" },
    "en",
  ),
  false,
);
const result = {
  checkedAt: new Date().toISOString(),
  publishedProjects: samples.length,
  coverage,
  sourcePagesChecked: (samples.length + 1) * siteLocales.length,
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
  const representative = [
    ...new Map(
      [
        ...[...new Set(samples.map((sample) => sample.category))].map(
          (category) => samples.find((sample) => sample.category === category),
        ),
        samples[0],
        samples.find((sample) => !sample.detail),
        samples.find(
          (sample) =>
            sample.detail?.bathrooms &&
            !/đang cập nhật/i.test(sample.detail.bathrooms),
        ),
        samples.find((sample) =>
          sample.detail?.storyBlocks.some(
            (block) => block.description.length > 800,
          ),
        ),
      ]
        .filter(Boolean)
        .map((sample) => [sample.slug, sample]),
    ).values(),
  ];
  const httpSamples = process.argv.includes("--all-pages")
    ? samples
    : representative;
  const jobs = filtersOnly
    ? []
    : siteLocales.flatMap((locale) => [
        { locale, path: localizedPageHref("/du-an", locale) },
        ...httpSamples.map((sample) => ({
          locale,
          sample,
          path: localizedPageHref(`/du-an/${sample.slug}`, locale),
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
      const sample = localizeProject(job.sample, job.locale);
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
        html.includes(`href="${localizedPageHref("/du-an", job.locale)}"`),
        `${job.path}: back link leaves locale`,
      );
    } else
      assert(
        decode(html).includes(projectText("Dự án của chúng tôi", job.locale)),
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
    "can-ho",
    "nha-pho",
    "biet-thu",
    "van-phong",
    "khong-gian-kinh-doanh",
    "noi-that-tron-goi",
  ];
  for (const locale of siteLocales) {
    const cases = [
      ...categorySlugs.map((slug) => ({
        query: `danh-muc=${slug}`,
        expected: samples.filter(
          (sample) => sample.category === getProjectCategoryFromQuery(slug),
        ),
      })),
      ...apartmentMenuItems
        .filter((topic) => "min" in topic)
        .map((topic) => ({
          query: `danh-muc=can-ho&dien-tich=${topic.slug}`,
          expected: samples.filter(
            (sample) =>
              sample.category === "Căn hộ" &&
              matchesApartmentArea(sample.area, topic),
          ),
        })),
      { query: "trang=2", expected: samples },
    ];
    for (const test of cases) {
      const pagePath = localizedPageHref("/du-an", locale);
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
        formatDisplayTitle(localizeProject(sample, locale).title, locale),
      );
      const sampleTitles = visibleTitles.filter((title) =>
        allTitles.includes(title),
      );
      const expectedTitles = test.expected
        .map((sample) =>
          formatDisplayTitle(localizeProject(sample, locale).title, locale),
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
          .replaceAll(String.fromCharCode(92) + "u0026", "&")
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
          `<loc>${siteBaseUrl + localizedPageHref(`/du-an/${sample.slug}`, locale)}</loc>`,
        ),
        `Sitemap missing ${locale}/${sample.slug}`,
      );
  for (const missing of [
    "/en/du-an/does-not-exist",
    "/xx/du-an",
    "/vi/du-an",
    "/xx/du-an/does-not-exist",
  ])
    assert.equal((await fetch(base + missing)).status, 404, missing);
  const previous = filtersOnly
    ? JSON.parse(
        fs.readFileSync(
          path.join(root, "docs/i18n-inventory/projects-verification.json"),
          "utf8",
        ),
      ).http
    : undefined;
  result.http = {
    checked: filtersOnly ? previous.checked : checked,
    sourcePagesChecked: (samples.length + 1) * siteLocales.length,
    failed: filtersOnly ? [...previous.failed, ...failed] : failed,
    filtersChecked,
    sitemap: true,
    invalidRoutes404: true,
  };
  errors.push(...failed);
}
const out = path.join(root, "docs/i18n-inventory/projects-verification.json");
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
