import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const out = {};
  cache.set(file, out);
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const require = createRequire(file);
  new Function("require", "exports", source)(
    (request) =>
      request === "@/lib/search" ? load("src/lib/search.ts") : require(request),
    out,
  );
  return out;
}
const {
  parsePortfolioFilters: parse,
  portfolioFilterHref: href,
  areaNumber,
  bedroomNumber,
  matchesPortfolioFilters: matches,
  filterPortfolio: filter,
} = load("src/lib/portfolio-filters.ts");
const all = parse({ "noi-dung": "all" }, "projects");
const item = {
  contentType: "project",
  category: "Căn hộ",
  title: "Chung cư Xuân Mai 72m²",
  slug: "xuan-mai",
  href: "/du-an/xuan-mai",
  thumbnail: "",
  style: "Modern",
  styleKey: "Hiện đại",
  area: "72m²",
  bedrooms: "2 bedrooms",
  bedroomsKey: "2 phòng ngủ",
  summary: "Căn hộ tại Hà Nội",
  topics: ["can-ho-70-75", "penthouse-duplex"],
};
assert.equal(parse({ "dien-tich": "70-75" }, "projects").type, "all");
assert.equal(parse({ "dien-tich": "70-75" }, "projects").category, "can-ho");
assert.equal(parse({ "chu-de": "penthouse-duplex" }, "designs").type, "all");
assert.equal(parse({ "danh-muc": "chung-cu" }, "designs").category, "can-ho");
assert.equal(parse({ "danh-muc": "constructor" }, "projects").category, "all");
assert.equal(
  parse(
    {
      "dien-tich": "invalid",
      "chu-de": "invalid",
      "noi-dung": "invalid",
      trang: "-3",
    },
    "projects",
  ).page,
  1,
);
for (const [value, number] of [
  ["1.200 m²", 1200],
  ["115,5m²", 115.5],
  ["10ha", 100000],
  ["5x20m (100m²)", 100],
  ["5x20m", null],
  ["70–75m²", null],
  ["Chưa rõ", null],
])
  assert.equal(areaNumber(value), number, value);
assert.equal(bedroomNumber("Studio"), 0);
assert.equal(bedroomNumber("3–4 phòng"), null);
assert(
  matches(item, {
    ...all,
    area: "70-75",
    bedrooms: "2",
    style: "Hiện đại",
    q: "chung cu ha noi",
  }),
);
assert(!matches(item, { ...all, bedrooms: "4+" }));
assert(!matches(item, { ...all, q: "da nang" }));
assert(!matches(item, { ...all, area: "85-90" }));
assert(matches({ ...item, area: undefined }, { ...all, area: "70-75" }));
assert(!matches({ ...item, area: "150m²" }, { ...all, area: "70-75" }));
assert(matches({ ...item, area: "75m²" }, { ...all, area: "70-75" }));
assert(matches({ ...item, area: "200m²" }, { ...all, area: "over-200" }));
assert(!matches({ ...item, area: "40m²" }, { ...all, area: "under-40" }));
const state = {
  ...all,
  category: "can-ho",
  area: "70-75",
  style: "Hiện đại",
  bedrooms: "2",
  q: "Hà Nội & phòng ngủ",
  sort: "area-desc",
  page: 3,
};
assert.deepEqual(
  parse(
    Object.fromEntries(
      new URL(href("/du-an", state), "http://localhost").searchParams,
    ),
    "projects",
  ),
  state,
);
assert.deepEqual(
  filter(
    [
      { ...item, area: undefined, slug: "unknown" },
      { ...item, area: "90m²", slug: "larger" },
      item,
    ],
    { ...all, sort: "area-asc" },
  ).map((x) => x.slug),
  ["xuan-mai", "larger", "unknown"],
);
const base = "http://localhost:3000";
for (const route of [
  "/du-an?danh-muc=can-ho&dien-tich=70-75&phong-ngu=2",
  "/mau-thiet-ke?chu-de=penthouse-duplex&sap-xep=name",
  "/du-an?noi-dung=all&q=zzzz-no-match-9876",
  "/en/du-an?dien-tich=70-75",
  "/ja/mau-thiet-ke?chu-de=mau-nha-pho-2-tang",
]) {
  const r = await fetch(base + route);
  const text = await r.text();
  assert.equal(r.status, 200, route);
  assert(text.includes("portfolio-filter-dialog"), route);
  if (route.includes("zzzz-no-match"))
    assert(
      !/<article\b/.test(
        text.match(
          /<section[^>]*id="portfolio-list"[^>]*>([\s\S]*?)<\/section>/,
        )?.[1] ?? "",
      ),
    );
  console.log("200", route);
}
console.log(
  "Filter boundaries, missing metadata, legacy links, combined filters, URL round-trip, sorting and localized routes passed.",
);
