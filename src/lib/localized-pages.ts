import knowledgePaths from "@/data/knowledge-paths.json";
import constructionArticlePaths from "@/data/construction-article-paths.json";
import { pricingPagePaths, pricingArticlePaths } from "@/data/pricing-routes";
import { isSiteLocale, type SiteLocale } from "@/lib/locale";

export const constructionPageSlugs = [
  "khong-gian-bep",
  "khong-gian-phong-khach",
  "khong-gian-phong-ngu",
  "thi-cong-chung-cu",
  "thi-cong-nha-pho",
  "thi-cong-phan-tho",
  "thi-cong-cai-tao",
  "thi-cong-son-ba",
  "thi-cong-tran-thach-cao",
  "thi-cong-do-go",
  "thi-cong-dien-nuoc",
  "nhat-ki-thi-cong",
] as const;
export type ConstructionPageSlug = (typeof constructionPageSlugs)[number];

export const introductionPagePaths = [
  "/gioi-thieu",
  "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
  "/gioi-thieu/doi-ngu-kien-truc-su",
  "/gioi-thieu/xuong-san-xuat-noi-that",
  "/gioi-thieu/tuyen-dung",
] as const;
export type IntroductionPagePath = (typeof introductionPagePaths)[number];

export const interiorDesignPagePaths = [
  "/thiet-ke-noi-that/thiet-ke-khach-san",
  "/thiet-ke-noi-that/thiet-ke-nha-pho",
  "/thiet-ke-noi-that/thiet-ke-showroom",
  "/thiet-ke-noi-that/thiet-ke-chung-cu",
  "/thiet-ke-noi-that/tan-co-dien",
  "/thiet-ke-noi-that/biet-thu",
  "/thiet-ke-noi-that/phong-ngu",
  "/thiet-ke-noi-that/thong-minh",
  "/thiet-ke-noi-that/phong-bep",
  "/thiet-ke-noi-that/phong-tre-em",
] as const;

const localizedPagePaths: readonly string[] = [
  "/lien-he",
  ...interiorDesignPagePaths,
  ...introductionPagePaths,
  ...pricingPagePaths,
  ...pricingArticlePaths,
  ...constructionPageSlugs.map((slug) => `/thi-cong-noi-that/${slug}`),
];

/** Return the Vietnamese base path only for pages with translated routes. */
export function getLocalizedPagePath(pathname: string) {
  const parts = pathname.split(/[?#]/)[0].replace(/\/$/, "").split("/");
  if (isSiteLocale(parts[1])) parts.splice(1, 1);
  const basePath = parts.join("/");
  if (Object.hasOwn(constructionArticlePaths, basePath))
    return (constructionArticlePaths as Record<string, string>)[basePath];
  return knowledgePaths.includes(basePath) ||
    localizedPagePaths.includes(basePath) ||
    /^\/(?:mau-thiet-ke|du-an)(?:\/[^/]+)?$/.test(basePath)
    ? basePath
    : undefined;
}

/** Keep links to pages without translations at their existing destination. */
export function localizedPageHref(pathname: string, locale: SiteLocale) {
  const basePath = getLocalizedPagePath(pathname);
  return basePath
    ? `${locale === "vi" ? "" : `/${locale}`}${basePath}${pathname.slice(pathname.split(/[?#]/)[0].length)}`
    : pathname;
}
