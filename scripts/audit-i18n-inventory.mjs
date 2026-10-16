import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import dotenv from "dotenv";
import mariadb from "mariadb";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const output = path.join(root, "docs/i18n-inventory");
const locales = ["vi", "en", "ja", "ko", "sv", "fr", "ru", "es", "zh"];
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
function walk(directory) {
  return fs
    .readdirSync(path.join(root, directory), { withFileTypes: true })
    .flatMap((entry) => {
      const file = `${directory}/${entry.name}`;
      return entry.isDirectory() ? walk(file) : [file];
    });
}
// Load data-only TypeScript modules without booting Next or changing app source.
const originalTs = require.extensions[".ts"];
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
const load = (file) => require(path.join(root, file));
const pageFiles = walk("src/app").filter((file) => /\/page\.tsx$/.test(file));
const toRoute = (file) =>
  "/" +
  file
    .replace(/^src\/app\//, "")
    .replace(/\/?page\.tsx$/, "")
    .split("/")
    .filter((part) => part && !/^\(.*\)$/.test(part))
    .join("/");
const publicFiles = pageFiles.filter(
  (file) => !file.startsWith("src/app/admin/"),
);
const viFiles = publicFiles.filter(
  (file) => !file.includes("/[locale]/") && !/^src\/app\/(en|ja)\//.test(file),
);
const rows = new Map();
function add(url, fields) {
  const old = rows.get(url);
  rows.set(url, { ...(old ?? {}), path: url, ...fields });
}
for (const file of viFiles) {
  const url = toRoute(file);
  if (!url.includes("["))
    add(url, {
      kind: "static",
      source: file,
      template: file,
      sourceState: "available",
    });
}
const collections = [
  [
    "beautiful-home-articles",
    "beautifulHomeArticles",
    "/kien-thuc/kien-thuc-nha-dep",
  ],
  [
    "building-experience-articles",
    "buildingExperienceArticles",
    "/kien-thuc/kinh-nghiem-xay-nha",
  ],
  [
    "interior-design-experience-articles",
    "interiorDesignExperienceArticles",
    "/kien-thuc/kinh-nghiem-thiet-ke-noi-that",
  ],
  [
    "building-legal-articles",
    "buildingLegalArticles",
    "/kien-thuc/phap-ly-xay-dung",
  ],
  [
    "pricing-articles",
    "pricingArticles",
    "/bao-gia/thiet-ke-thi-cong-noi-that",
  ],
  [
    "construction-pricing-articles",
    "constructionPricingArticles",
    "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi",
  ],
  [
    "kitchen-space-articles",
    "kitchenSpaceArticles",
    "/thi-cong-noi-that/khong-gian-bep",
  ],
  [
    "living-room-space-articles",
    "livingRoomSpaceArticles",
    "/thi-cong-noi-that/khong-gian-phong-khach",
  ],
  [
    "bedroom-space-articles",
    "bedroomSpaceArticles",
    "/thi-cong-noi-that/khong-gian-phong-ngu",
  ],
];
const collectionSummary = [];
const aliases = [];
for (const [name, exported, prefix] of collections) {
  const articles = load(`src/data/${name}.ts`)[exported];
  let count = 0;
  for (const article of articles) {
    if (article.externalHref) {
      aliases.push({
        source: `${prefix}/${article.slug}`,
        destination: article.externalHref,
        evidence: `src/data/${name}.ts`,
      });
      continue;
    }
    add(`${prefix}/${article.slug}`, {
      kind: "article",
      title: article.title,
      source: `src/data/${name}.ts`,
      template: `src/app${prefix}/[slug]/page.tsx`,
      sourceState: "available",
    });
    count++;
  }
  collectionSummary.push({
    prefix,
    records: articles.length,
    ownArticleRoutes: count,
  });
}
const database = {
  status: "not_checked",
  models: {},
  translationSchema:
    "No locale or translation model/field found in current Prisma schema.",
};
const dbSlugs = {};
let connection;
try {
  dotenv.config({ path: path.join(root, ".env"), quiet: true });
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL_MISSING");
  const url = new URL(process.env.DATABASE_URL);
  connection = await mariadb.createConnection({
    host: url.hostname,
    port: Number(url.port || 3306),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.slice(1),
    connectTimeout: 5000,
    socketTimeout: 10000,
  });
  await connection.query("START TRANSACTION READ ONLY");
  for (const [model, prefix, dataFile, exported] of [
    ["Project", "/du-an", "projects", "projects"],
    ["DesignSample", "/mau-thiet-ke", "design-samples", "designSamples"],
  ]) {
    const records = await connection.query(
      `SELECT slug, title, status FROM \`${model}\``,
    );
    const published = records.filter((row) => row.status === "published");
    dbSlugs[model] = new Set(published.map((row) => row.slug));
    database.models[model] = {
      total: records.length,
      published: published.length,
      draftsExcluded: records.length - published.length,
    };
    const seed = load(`src/data/${dataFile}.ts`)[exported];
    database.models[model].seedRecords = seed.length;
    database.models[model].seedOnlySlugs = seed
      .filter((row) => !dbSlugs[model].has(row.slug))
      .map((row) => row.slug);
    database.models[model].databaseOnlySlugs = published
      .filter((row) => !seed.some((s) => s.slug === row.slug))
      .map((row) => row.slug);
    for (const row of published)
      add(`${prefix}/${row.slug}`, {
        kind: "database",
        title: row.title,
        source: `database:${model}`,
        template: `src/app${prefix}/[slug]/page.tsx`,
        sourceState: "published",
      });
  }
  await connection.rollback();
  database.status = "read_only_verified";
} catch {
  // Never serialize database exception messages: drivers may include credentials.
  database.status = "unavailable";
  database.note =
    "Could not complete read-only database inventory. Seed records below are candidates, not verified published pages. Re-run with database access.";
} finally {
  if (connection) await connection.end();
}
if (database.status !== "read_only_verified") {
  for (const [name, exported, prefix] of [
    ["projects", "projects", "/du-an"],
    ["design-samples", "designSamples", "/mau-thiet-ke"],
  ]) {
    for (const row of load(`src/data/${name}.ts`)[exported])
      add(`${prefix}/${row.slug}`, {
        kind: "database_candidate",
        title: row.title,
        source: `src/data/${name}.ts`,
        template: `src/app${prefix}/[slug]/page.tsx`,
        sourceState: "database_unverified",
      });
  }
}
const localized = load("src/lib/localized-pages.ts");
const pricingRoutes = load("src/data/pricing-routes.ts");
const navigation = load("src/data/navigation-english.ts").getNavigation;
const menuLinks = [];
function visit(items, locale) {
  for (const item of items) {
    if (item.href)
      menuLinks.push({ locale, label: item.label, href: item.href });
    if (item.children) visit(item.children, locale);
  }
}
for (const locale of locales) visit(navigation(locale), locale);
function matchingFile(url, locale) {
  if (locale === "vi") return rows.get(url)?.template;
  if (url === "/")
    return locale === "en" || locale === "ja"
      ? `src/app/${locale}/page.tsx`
      : "src/app/[locale]/page.tsx";
  const file = `src/app/[locale]${url}/page.tsx`;
  if (fs.existsSync(path.join(root, file))) return file;
  // Localized articles share a [slug] template rather than a file per article.
  const template = rows.get(url)?.template;
  const localizedTemplate = template?.replace("src/app/", "src/app/[locale]/");
  return localizedTemplate && fs.existsSync(path.join(root, localizedTemplate))
    ? localizedTemplate
    : undefined;
}
const inventory = [...rows.values()]
  .sort((a, b) => a.path.localeCompare(b.path))
  .map((row) => {
    const languageEvidence = {};
    for (const locale of locales) {
      const file = matchingFile(row.path, locale);
      const source = file ? read(file) : "";
      languageEvidence[locale] = {
        expectedPath:
          locale === "vi"
            ? row.path
            : `/${locale}${row.path === "/" ? "" : row.path}`,
        route: file ? "source_route_exists" : "missing_route",
        file: file ?? null,
        content:
          locale === "vi"
            ? row.sourceState
            : file
              ? "needs_translation_review"
              : "missing",
        languageSwitcher:
          locale === "vi" ||
          row.path === "/" ||
          localized.getLocalizedPagePath(row.path)
            ? "registered_or_base"
            : "not_registered",
        seo: /alternates|(?:[A-Za-z]+Metadata)\(/.test(source)
          ? "metadata_source_found_review_needed"
          : "needs_locale_seo",
        ui: "not_reviewed",
        links: "not_reviewed",
        verifiedComplete: false,
      };
    }
    return { ...row, languages: languageEvidence };
  });
const knownTemplates = new Set(inventory.map((r) => r.template));
const uncoveredDynamicTemplates = viFiles.filter(
  (f) => toRoute(f).includes("[") && !knownTemplates.has(f),
);
const sitemapFile = read("src/app/sitemap.ts");
const sitemapStatic = [...sitemapFile.matchAll(/^  "(\/[^"\n]+)",?$/gm)].map(
  (m) => m[1],
);
const sitemap = {
  source: "src/app/sitemap.ts",
  staticEntriesWithoutInventory: sitemapStatic.filter((p) => !rows.has(p)),
  translatedStaticPathsMissingFromSource: inventory
    .filter(
      (r) =>
        r.path !== "/" &&
        r.kind === "static" &&
        r.languages.en.file &&
        !(
          sitemapFile.includes("introductionPagePaths") &&
          localized.introductionPagePaths.includes(r.path)
        ) &&
        !(
          sitemapFile.includes("pricingPagePaths") &&
          pricingRoutes.pricingPagePaths.includes(r.path)
        ) &&
        r.path !== "/mau-thiet-ke" &&
        r.path !== "/du-an",
    )
    .map((r) => r.path),
  note: "Source review: homepages, five introduction pages, two pricing overview pages, fourteen pricing articles and the design sample/project listings and published details expand across locales. Other translated static pages still need sitemap expansion. This command does not fetch the runtime sitemap; use the group audit commands with --base-url for server verification.",
};
const missingMenuPaths = menuLinks.filter(
  (row) =>
    row.locale === "vi" &&
    row.href.startsWith("/") &&
    !rows.has(row.href.split(/[?#]/)[0]),
);
const shared = [
  [
    "Header/menu/language switcher",
    "src/components/site-header.tsx",
    "src/data/navigation-english.ts",
    "src/data/navigation-japanese.ts",
    "src/data/navigation-additional.ts",
    "src/data/site-chrome-additional.ts",
  ],
  [
    "Footer",
    "src/components/site-footer.tsx",
    "src/data/site-chrome-additional.ts",
  ],
  [
    "Consultation popup, validation and success states",
    "src/components/consultation-popup.tsx",
    "src/data/consultation-additional.ts",
  ],
  [
    "Contact page and form",
    "src/app/lien-he/page.tsx",
    "src/app/api/contact/route.ts",
  ],
  ["Content form and API errors", "src/app/api"],
  ["404 and errors", "src/app/not-found.tsx", "src/app/global-error.tsx"],
  [
    "Home content",
    "src/components/home/home-landing.tsx",
    "src/data/home-english.ts",
    "src/data/home-japanese.ts",
    "src/data/home-additional.ts",
  ],
  [
    "HTML language",
    "src/app/layout.tsx",
    ...walk("src/components").filter((f) => /language|locale/i.test(f)),
  ],
  [
    "SEO and sitemap",
    "src/app/sitemap.ts",
    "src/lib/locale.ts",
    "src/lib/localized-pages.ts",
  ],
  ["Image text, PDFs, captions and alt text", "public/images", "public"],
].map(([area, ...files]) => ({
  area,
  files: files.filter((f) => fs.existsSync(path.join(root, f))),
  status: "needs_review_all_locales",
}));
const excluded = pageFiles
  .filter((f) => f.startsWith("src/app/admin/"))
  .map((file) => ({
    file,
    path: toRoute(file),
    reason:
      "Internal administration; tracked separately from public website. Confirm admin localization scope in later implementation.",
  }));
const queryPages = publicFiles
  .filter((f) => /searchParams/.test(read(f)))
  .map((file) => ({
    file,
    path: toRoute(file),
    status: "Filter/search/pagination strings and locale retention need review",
  }));
const summary = {
  generatedAt: new Date().toISOString(),
  locales,
  scope:
    "Read-only inventory, not translation implementation or completion certification.",
  totalBasePages: inventory.length,
  routeModules: pageFiles.length,
  byKind: Object.fromEntries(
    [...new Set(inventory.map((r) => r.kind))].map((k) => [
      k,
      inventory.filter((r) => r.kind === k).length,
    ]),
  ),
  byLocale: Object.fromEntries(
    locales.map((l) => [
      l,
      {
        sourceRoutes: inventory.filter((r) => r.languages[l].file).length,
        missingRoutes: inventory.filter((r) => !r.languages[l].file).length,
        verifiedComplete: 0,
      },
    ]),
  ),
  database,
  collections: collectionSummary,
  aliases,
  sitemap,
  missingMenuPaths,
  uncoveredDynamicTemplates,
  sharedComponents: shared,
  queryPages,
  excluded,
  limitations: [
    "Route existence is not proof of translated content or correct rendering.",
    "No browser checks, translations, database writes or deployment performed.",
    "Public database content only is included in page rows; drafts are counted and excluded.",
    "Byte-identical source text, embedded image text, PDFs, runtime language tags, menu interactions and SEO remain review tasks.",
    "Dynamic DB routes use published DB records; seed-vs-DB differences are recorded separately.",
  ],
};
summary.suspectedTestPages = inventory
  .filter((row) => /(?:^|\/)test[-/]/i.test(row.path))
  .map((row) => row.path);
summary.tracking = {
  command: "npm run audit:i18n",
  generatedFiles: [
    "pages.csv",
    "inventory.json",
    "summary.json",
    "shared-components.csv",
  ],
  manualProgressFile: "progress.json",
  rule: "Generated files are refreshed on every run. Existing progress rows are preserved by base path. Complete only after content, UI, links and SEO have been verified in every locale.",
  nextSteps: [
    "Rà soát các đường dẫn hiện có ở mỗi ngôn ngữ theo progress.json: nội dung, liên kết, SEO.",
    "Bổ sung các trang tĩnh còn thiếu và hoàn thiện thành phần dùng chung.",
    "Thiết kế dữ liệu bản dịch cho dự án và mẫu thiết kế trong database.",
    "Dịch các nhóm bài viết; kiểm tra chữ trong ảnh và tài liệu tải xuống.",
    "Hoàn thiện sitemap, hreflang và kiểm tra tổng thể.",
  ],
};
const progressPath = path.join(output, "progress.json");
const previousProgress = fs.existsSync(progressPath)
  ? JSON.parse(fs.readFileSync(progressPath, "utf8"))
  : { pages: {} };
for (const row of inventory) {
  previousProgress.pages[row.path] ??= Object.fromEntries(
    locales.map((locale) => [
      locale,
      {
        content: "not_reviewed",
        ui: "not_reviewed",
        links: "not_reviewed",
        seo: "not_reviewed",
        complete: false,
      },
    ]),
  );
}
const csvValue = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const columns = [
  "path",
  "kind",
  "title",
  "source",
  "template",
  ...locales,
  "ui",
  "links",
  "seo",
  "complete",
];
const csv =
  [
    columns,
    ...inventory.map((r) => [
      r.path,
      r.kind,
      r.title,
      r.source,
      r.template,
      ...locales.map(
        (l) => `${r.languages[l].route};${r.languages[l].content}`,
      ),
      "not_reviewed",
      "not_reviewed",
      "not_reviewed",
      "no",
    ]),
  ]
    .map((row) => row.map(csvValue).join(","))
    .join("\n") + "\n";
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(
  progressPath,
  JSON.stringify(previousProgress, null, 2) + "\n",
);
fs.writeFileSync(
  path.join(output, "summary.json"),
  JSON.stringify(summary, null, 2) + "\n",
);
fs.writeFileSync(path.join(output, "pages.csv"), "\ufeff" + csv);
fs.writeFileSync(
  path.join(output, "inventory.json"),
  JSON.stringify({ summary, pages: inventory }, null, 2) + "\n",
);
fs.writeFileSync(
  path.join(output, "shared-components.csv"),
  "\ufeff" +
    [
      ["area", "files", "status"],
      ...shared.map((r) => [r.area, r.files.join("; "), r.status]),
    ]
      .map((r) => r.map(csvValue).join(","))
      .join("\n") +
    "\n",
);
if (originalTs) require.extensions[".ts"] = originalTs;
else delete require.extensions[".ts"];
console.log(
  JSON.stringify(
    {
      pages: summary.totalBasePages,
      byKind: summary.byKind,
      byLocale: summary.byLocale,
      database: database.status,
      uncoveredDynamicTemplates,
      missingMenuPaths,
      output: "docs/i18n-inventory",
    },
    null,
    2,
  ),
);
