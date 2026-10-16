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
const { introductionPagePaths, localizedPageHref, getLocalizedPagePath } = load(
  "lib/localized-pages",
);
const { introductionCopy } = load("data/introduction");
const { architectureTeamCopy } = load("data/architecture-team");
const { capabilityCopy } = load("data/capability");
const { workshopCopy } = load("data/workshop");
const { getNavigation } = load("data/navigation-english");
const { introductionMetadata } = load("lib/introduction-metadata");
require.extensions[".ts"] = previous;

function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, shape(item)]),
    );
  assert.equal(typeof value, "string");
  assert.ok(value.trim().length, "Empty translation");
  return "string";
}
for (const data of [
  introductionCopy,
  architectureTeamCopy,
  capabilityCopy,
  workshopCopy,
]) {
  assert.deepEqual(Object.keys(data).sort(), [...siteLocales].sort());
  for (const locale of siteLocales)
    assert.deepEqual(
      shape(data[locale]),
      shape(data.vi),
      `${locale}: inconsistent translation structure`,
    );
}
assert.equal(introductionPagePaths.length, 5);
for (const locale of siteLocales) {
  const menu = getNavigation(locale).flatMap((item) => item.children ?? []);
  for (const page of introductionPagePaths) {
    const href = localizedPageHref(page, locale);
    assert.equal(getLocalizedPagePath(href), page);
    assert.equal(getLocalizedPagePath(`${href}/`), page);
    const item = menu.find((item) => item.href === href);
    assert.ok(item?.label, `${locale}: missing menu destination ${href}`);
    const file =
      locale === "vi"
        ? `src/app${page}/page.tsx`
        : `src/app/[locale]${page}/page.tsx`;
    assert.ok(fs.existsSync(path.join(root, file)), file);
    const metadata = introductionMetadata(page, locale);
    assert.equal(new URL(metadata.alternates.canonical).pathname, href);
    assert.equal(Object.keys(metadata.alternates.languages).length, 10);
    for (const language of siteLocales)
      assert.equal(
        new URL(metadata.alternates.languages[language]).pathname,
        localizedPageHref(page, language),
      );
    assert.equal(
      new URL(metadata.alternates.languages["x-default"]).pathname,
      page,
    );
    assert.equal(metadata.openGraph.title, item.label);
    assert.ok(metadata.description.trim());
    for (const image of metadata.openGraph.images)
      assert.ok(fs.existsSync(path.join(root, "public", image.url)), image.url);
  }
}
console.log(
  "Source checks passed: 5 pages × 9 locales; copy structure, menu, routes, canonical, hreflang and images.",
);

const base = process.argv
  .find((arg) => arg.startsWith("--base-url="))
  ?.slice("--base-url=".length);
if (base) {
  // Fetch server HTML directly; this does not open or automate a browser.
  for (const locale of siteLocales) {
    for (const page of introductionPagePaths) {
      const href = localizedPageHref(page, locale);
      const response = await fetch(new URL(href, base), {
        signal: AbortSignal.timeout(60000),
      });
      assert.equal(response.status, 200, href);
      const html = await response.text();
      assert.match(
        html,
        new RegExp(`<main[^>]*lang="${locale}"`),
        `${href}: content language`,
      );
      assert.match(html, /<h1[\s>]/, `${href}: heading missing`);
      const canonical = html.match(
        /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/,
      );
      assert.ok(canonical, `${href}: canonical missing`);
      assert.equal(new URL(canonical[1]).pathname, href);
      for (const language of [...siteLocales, "x-default"]) {
        const alternate = html.match(
          new RegExp(
            `<link[^>]*hrefLang="${language}"[^>]*href="([^"]+)"`,
            "i",
          ),
        );
        assert.ok(alternate, `${href}: ${language} hreflang missing`);
        assert.equal(
          new URL(alternate[1]).pathname,
          language === "x-default" ? page : localizedPageHref(page, language),
        );
      }
      for (const destination of introductionPagePaths) {
        const link = localizedPageHref(destination, locale);
        assert.ok(
          html.includes(`href="${link}"`),
          `${href}: menu link ${link} missing`,
        );
        if (locale !== "vi")
          assert.ok(
            !html.includes(`href="${destination}"`),
            `${href}: link falls back to Vietnamese ${destination}`,
          );
      }
      if (page.endsWith("/tuyen-dung")) {
        const copy = introductionCopy[locale];
        assert.ok(html.includes(copy.architectTitle), `${href}: job title`);
        assert.ok(
          html.includes(copy.applyPosition),
          `${href}: application button`,
        );
        assert.ok(
          html.includes(
            encodeURIComponent(copy.emailTemplate).split("%20%E2%80%93%20")[0],
          ),
          `${href}: localized application email`,
        );
      }
    }
    console.log(`HTTP checks passed: ${locale} (5 pages).`);
  }
  const response = await fetch(new URL("/sitemap.xml", base), {
    signal: AbortSignal.timeout(60000),
  });
  assert.equal(response.status, 200, "sitemap.xml");
  const xml = await response.text();
  for (const page of introductionPagePaths)
    for (const locale of siteLocales) {
      const href = localizedPageHref(page, locale);
      const entry = xml.match(
        new RegExp(`<url>\\s*<loc>[^<]*${href}</loc>[\\s\\S]*?</url>`),
      );
      assert.ok(entry, `Sitemap missing ${href}`);
      assert.equal(
        (entry[0].match(/hreflang=/g) ?? []).length,
        10,
        `Sitemap alternate links: ${href}`,
      );
    }
  console.log(
    "Sitemap checks passed: all 45 introduction URLs with alternate languages.",
  );
}
