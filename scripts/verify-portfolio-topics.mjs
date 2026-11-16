import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = async (file) =>
  JSON.parse(await fs.readFile(path.join(root, file), "utf8"));
const topics = await read("src/data/portfolio-topics.json");
const assignments = await read("src/data/portfolio-topic-memberships.json");
const imports = await read("src/data/portfolio-imports.json");
const references = await read("src/data/portfolio-article-links.json");
const base =
  process.argv.find((a) => a.startsWith("--base-url="))?.slice(11) ||
  "http://127.0.0.1:3000";
const reportPath = process.argv
  .find((a) => a.startsWith("--report="))
  ?.slice(9);
const report = {
  topics: [],
  importedDetails: [],
  referenceDetails: [],
  errors: [],
};
const knownTopics = new Set(topics.map((topic) => topic.slug));
assert.equal(knownTopics.size, topics.length);
for (const values of Object.values(assignments)) {
  assert.equal(new Set(values).size, values.length);
  assert(values.every((value) => knownTopics.has(value)));
}
const referenceByKey = new Map(
  references.map((item) => [`${item.contentType}:${item.slug}`, item.href]),
);
function hrefFor(key) {
  if (referenceByKey.has(key)) return referenceByKey.get(key);
  const split = key.indexOf(":");
  return `/${key.slice(0, split) === "project" ? "du-an" : "mau-thiet-ke"}/${key.slice(split + 1)}`;
}
async function page(route) {
  const response = await fetch(base + route, {
    signal: AbortSignal.timeout(90000),
  });
  const html = await response.text();
  assert.equal(response.status, 200, route);
  assert(!html.includes('id="__next_error__"'), route + ": server error");
  return html;
}
async function parallel(items, fn) {
  let next = 0;
  await Promise.all(
    Array.from({ length: 3 }, async () => {
      while (next < items.length) {
        const item = items[next++];
        try {
          await fn(item);
        } catch (error) {
          report.errors.push({
            item: typeof item === "string" ? item : item.slug,
            error: error.message,
          });
        }
      }
    }),
  );
}
await parallel(topics, async (topic) => {
  const query =
    topic.group === "area"
      ? `/du-an?danh-muc=can-ho&dien-tich=${topic.slug.slice(7)}&trang=100`
      : `/mau-thiet-ke?chu-de=${topic.slug}&trang=100`;
  const html = await page(query);
  const section = html.match(
    /<section id="portfolio-list"[\s\S]*?<\/section>/,
  )?.[0];
  assert(section, query + ": missing listing");
  const cards = [...section.matchAll(/<article\b[\s\S]*?<\/article>/g)].map(
    (m) => m[0],
  );
  const actual = cards.map((card) => card.match(/href="([^"]+)"/)?.[1]);
  const expected = Object.entries(assignments)
    .filter(([, values]) => values.includes(topic.slug))
    .map(([key]) => hrefFor(key));
  assert.equal(
    new Set(actual).size,
    actual.length,
    query + ": duplicate detail links",
  );
  assert.deepEqual(
    [...actual].sort(),
    [...expected].sort(),
    query + ": hidden or wrong-topic records",
  );
  report.topics.push({
    slug: topic.slug,
    entries: actual.length,
    preservedDetailLinks: true,
  });
});
// Independent regression: the four entries in the old Penthouse landing page
// must remain together despite belonging to two different record types.
const penthouse = await page("/mau-thiet-ke?chu-de=penthouse-duplex");
for (const href of [
  "/du-an/thiet-ke-noi-that-penhouse-02",
  "/du-an/cong-trinh-can-ho-penhouse-ecopark-van-giang-hung-yen",
  "/du-an/du-anh-quyen-chung-cu-ecopark-van-giang",
  "/mau-thiet-ke/thiet-ke-noi-that-penhouse-01",
])
  assert(
    penthouse.includes(`href="${href}"`),
    "Penthouse legacy entry missing: " + href,
  );
await parallel(
  [
    ...imports.projects.map((item) => `/du-an/${item.slug}`),
    ...imports.designSamples.map((item) => `/mau-thiet-ke/${item.slug}`),
  ],
  async (route) => {
    const html = await page(route);
    const image = [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
      .map((m) => m[1])
      .find((src) => src.includes("/portfolio-imports/"));
    assert(image, route + ": source images missing");
    const response = await fetch(new URL(image, base), { method: "HEAD" });
    assert.equal(response.status, 200, image);
    assert(response.headers.get("content-type")?.startsWith("image/"));
    report.importedDetails.push({ route, sourceImage: image, status: 200 });
  },
);
await parallel(
  references.map((item) => item.href),
  async (route) => {
    await page(route);
    report.referenceDetails.push({ route, status: 200 });
  },
);
report.completedAt = new Date().toISOString();
if (reportPath)
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(
  JSON.stringify({
    topicsChecked: report.topics.length,
    importedDetailsChecked: report.importedDetails.length,
    referenceDetailsChecked: report.referenceDetails.length,
    errors: report.errors,
  }),
);
assert.equal(report.errors.length, 0, "Portfolio verification failed");
