import type { LibraryItem } from "@/lib/content-library";
import topics from "../data/portfolio-topics.json";
import { normalizeSearch } from "@/lib/search";

export const categoryQueries: Record<string, string> = {
  "can-ho": "Căn hộ",
  "biet-thu": "Biệt thự",
  "nha-pho": "Nhà phố",
  "van-phong": "Văn phòng",
  "khong-gian-kinh-doanh": "Không gian kinh doanh",
  "noi-that-tron-goi": "Nội thất trọn gói",
  "phong-khach": "Phòng khách",
  "phong-ngu": "Phòng ngủ",
  "phong-bep": "Phòng bếp",
  "tu-bep": "Tủ bếp",
  "phong-tre-em": "Phòng trẻ em",
};
export const areaRanges = [
  { value: "under-40", label: "< 40m²", min: 0, max: 40, exclusiveMax: true },
  ...Array.from({ length: 16 }, (_, i) => ({
    value: `${40 + i * 5}-${45 + i * 5}`,
    label: `${40 + i * 5}–${45 + i * 5}m²`,
    min: 40 + i * 5,
    max: 45 + i * 5,
  })),
  { value: "120-150", label: "120–150m²", min: 120, max: 150 },
  { value: "150-200", label: "150–200m²", min: 150, max: 200 },
  { value: "200-300", label: "200–300m²", min: 200, max: 300 },
  { value: "300-500", label: "300–500m²", min: 300, max: 500 },
  {
    value: "over-500",
    label: "> 500m²",
    min: 500,
    max: Infinity,
    exclusiveMin: true,
  },
  { value: "under-50", label: "< 50m²", min: 0, max: 50, exclusiveMax: true },
  { value: "50-100", label: "50–100m²", min: 50, max: 100 },
  { value: "100-150", label: "100–150m²", min: 100, max: 150 },
  { value: "100-200", label: "100–200m²", min: 100, max: 200 },
  { value: "over-200", label: "≥ 200m²", min: 200, max: Infinity },
];
export type PortfolioFilters = {
  type: string;
  category: string;
  topic: string;
  area: string;
  style: string;
  bedrooms: string;
  q: string;
  sort: string;
  page: number;
};
export type PortfolioQuery = Record<string, string | string[] | undefined>;
export function parsePortfolioFilters(
  query: PortfolioQuery,
  mode: "projects" | "designs",
): PortfolioFilters {
  const get = (key: string) => {
    const value = query[key];
    return Array.isArray(value) ? value[0] : value;
  };
  const rawTopic = get("chu-de") ?? "";
  const topic = topics.find((t) => t.slug === rawTopic);
  const area =
    get("dien-tich") ??
    (topic?.group === "area" ? rawTopic.replace("can-ho-", "") : "");
  const category = get("danh-muc") === "chung-cu" ? "can-ho" : get("danh-muc");
  const inferredCategory = area && !category ? "can-ho" : "all";
  const defaultType =
    topic || area || (category && category !== "tat-ca")
      ? "all"
      : mode === "designs"
        ? "designSample"
        : "project";
  return {
    type: ["all", "project", "designSample", "article"].includes(
      get("noi-dung") ?? "",
    )
      ? get("noi-dung")!
      : defaultType,
    category:
      category && Object.hasOwn(categoryQueries, category)
        ? category
        : inferredCategory,
    topic: topic && topic.group !== "area" ? topic.slug : "",
    area: areaRanges.some((r) => r.value === area) ? area : "",
    style: (get("phong-cach") ?? "").slice(0, 150),
    bedrooms: ["0", "1", "2", "3", "4+"].includes(get("phong-ngu") ?? "")
      ? get("phong-ngu")!
      : "",
    q: (get("q") ?? "").trim().slice(0, 120),
    sort: ["name", "area-desc", "area-asc"].includes(get("sap-xep") ?? "")
      ? get("sap-xep")!
      : "recommended",
    page: Math.min(
      1000,
      Math.max(1, Number.parseInt(get("trang") ?? "1", 10) || 1),
    ),
  };
}
export function portfolioFilterHref(base: string, filters: PortfolioFilters) {
  const params = new URLSearchParams({
    "noi-dung": filters.type,
    "danh-muc": filters.category === "all" ? "tat-ca" : filters.category,
  });
  for (const [key, value] of Object.entries({
    "chu-de": filters.topic,
    "dien-tich": filters.area,
    "phong-cach": filters.style,
    "phong-ngu": filters.bedrooms,
    q: filters.q,
    "sap-xep": filters.sort === "recommended" ? "" : filters.sort,
    trang: filters.page > 1 ? String(filters.page) : "",
  }))
    if (value) params.set(key, value);
  return `${base}?${params}#portfolio-list`;
}
export function areaNumber(area?: string): number | null {
  if (!area) return null;
  const text = area.replace(/(\d)[.,](\d{3})(?=\D|$)/g, "$1$2");
  if (/\d\s*[–-]\s*\d/.test(text)) return null;
  const match = text.match(/(\d+(?:[.,]\d+)?)\s*(m²|m2|㎡|ha)/i);
  if (!match) return null;
  return (
    Number(match[1].replace(",", ".")) *
    (match[2].toLowerCase() === "ha" ? 10000 : 1)
  );
}
export function bedroomNumber(value?: string): number | null {
  if (!value) return null;
  if (/studio/i.test(value)) return 0;
  if (/\d\s*[–-]\s*\d/.test(value)) return null;
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : null;
}
export function matchesPortfolioFilters(
  item: LibraryItem,
  f: PortfolioFilters,
) {
  if (f.type !== "all" && item.contentType !== f.type) return false;
  if (f.category !== "all" && item.category !== categoryQueries[f.category])
    return false;
  if (f.topic && !item.topics?.includes(f.topic)) return false;
  if (f.style && (item.styleKey ?? item.style) !== f.style) return false;
  if (f.bedrooms) {
    const value = bedroomNumber(item.bedroomsKey ?? item.bedrooms);
    if (
      value === null ||
      (f.bedrooms === "4+" ? value < 4 : value !== Number(f.bedrooms))
    )
      return false;
  }
  if (f.area) {
    const range = areaRanges.find((r) => r.value === f.area);
    const value = areaNumber(item.area);
    if (!range) return false;
    if (value === null) {
      if (!item.topics?.includes(`can-ho-${f.area}`)) return false;
    } else if (
      ("exclusiveMin" in range && range.exclusiveMin
        ? value <= range.min
        : value < range.min) ||
      ("exclusiveMax" in range && range.exclusiveMax
        ? value >= range.max
        : value > range.max)
    )
      return false;
  }
  if (f.q) {
    const text = normalizeSearch(
      [item.title, item.summary, item.location, item.category]
        .filter(Boolean)
        .join(" "),
    );
    if (
      !normalizeSearch(f.q)
        .split(" ")
        .every((word) => text.includes(word))
    )
      return false;
  }
  return true;
}
export function filterPortfolio(
  items: LibraryItem[],
  filters: PortfolioFilters,
  locale = "vi",
) {
  const result = items.filter((item) => matchesPortfolioFilters(item, filters));
  if (filters.sort === "name")
    result.sort((a, b) => a.title.localeCompare(b.title, locale));
  if (filters.sort === "area-asc" || filters.sort === "area-desc")
    result.sort((a, b) => {
      const left = areaNumber(a.area),
        right = areaNumber(b.area);
      if (left === null) return right === null ? 0 : 1;
      if (right === null) return -1;
      return filters.sort === "area-asc" ? left - right : right - left;
    });
  return result;
}
