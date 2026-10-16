import knowledgePaths from "@/data/knowledge-paths.json";
import constructionArticlePaths from "@/data/construction-article-paths.json";
import {
  constructionPageSlugs,
  introductionPagePaths,
  interiorDesignPagePaths,
  localizedPageHref,
} from "@/lib/localized-pages";
import { hasDesignSampleTranslation } from "@/data/design-samples-localized";
import { hasProjectTranslation } from "@/data/projects-localized";
import type { MetadataRoute } from "next";
import { pricingArticlePaths, pricingPagePaths } from "@/data/pricing-routes";

import { beautifulHomeArticles } from "@/data/beautiful-home-articles";
import { buildingExperienceArticles } from "@/data/building-experience-articles";
import { buildingLegalArticles } from "@/data/building-legal-articles";
import { constructionPricingArticles } from "@/data/construction-pricing-articles";
import { interiorDesignExperienceArticles } from "@/data/interior-design-experience-articles";
import {
  getKitchenSpaceArticleHref,
  kitchenSpaceArticles,
} from "@/data/kitchen-space-articles";
import {
  bedroomSpaceArticles,
  getBedroomSpaceArticleHref,
} from "@/data/bedroom-space-articles";
import {
  getLivingRoomSpaceArticleHref,
  livingRoomSpaceArticles,
} from "@/data/living-room-space-articles";
import {
  getPricingArticleHref,
  pricingArticles,
} from "@/data/pricing-articles";
import { siteBaseUrl, siteLocales } from "@/lib/locale";
import {
  getPublicDesignSamples,
  getPublicProjects,
} from "@/lib/public-content";

/**
 * Trang tĩnh cố định. Các trang bài viết, dự án và mẫu thiết kế được sinh
 * tự động ở dưới nên không liệt kê tay tại đây.
 */
const staticRoutes = [
  "/gioi-thieu",
  "/gioi-thieu/doi-ngu-kien-truc-su",
  "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
  "/gioi-thieu/tuyen-dung",
  "/gioi-thieu/xuong-san-xuat-noi-that",
  "/lien-he",
  "/du-an",
  "/mau-thiet-ke",
  "/bao-gia/thiet-ke-thi-cong-noi-that",
  "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi",
  "/kien-thuc/kien-thuc-nha-dep",
  "/kien-thuc/kinh-nghiem-thiet-ke-noi-that",
  "/kien-thuc/kinh-nghiem-xay-nha",
  "/kien-thuc/phap-ly-xay-dung",
  "/thi-cong-noi-that/khong-gian-bep",
  "/thi-cong-noi-that/khong-gian-phong-khach",
  "/thi-cong-noi-that/khong-gian-phong-ngu",
  "/thi-cong-noi-that/nhat-ki-thi-cong",
  "/thi-cong-noi-that/thi-cong-cai-tao",
  "/thi-cong-noi-that/thi-cong-chung-cu",
  "/thi-cong-noi-that/thi-cong-dien-nuoc",
  "/thi-cong-noi-that/thi-cong-do-go",
  "/thi-cong-noi-that/thi-cong-nha-pho",
  "/thi-cong-noi-that/thi-cong-phan-tho",
  "/thi-cong-noi-that/thi-cong-son-ba",
  "/thi-cong-noi-that/thi-cong-tran-thach-cao",
  "/thiet-ke-noi-that/biet-thu",
  "/thiet-ke-noi-that/phong-bep",
  "/thiet-ke-noi-that/phong-ngu",
  "/thiet-ke-noi-that/phong-tre-em",
  "/thiet-ke-noi-that/tan-co-dien",
  "/thiet-ke-noi-that/thiet-ke-chung-cu",
  "/thiet-ke-noi-that/thiet-ke-khach-san",
  "/thiet-ke-noi-that/thiet-ke-nha-pho",
  "/thiet-ke-noi-that/thiet-ke-showroom",
  "/thiet-ke-noi-that/thong-minh",
] as const;

/** Trang chủ của từng ngôn ngữ: "/" cho tiếng Việt, "/en", "/ja", … */
const homeRoutes = siteLocales.map((locale) =>
  locale === "vi" ? "/" : `/${locale}`,
);

const projectArticleRoutes = [
  ...buildingExperienceArticles.map(
    (article) => `/kien-thuc/kinh-nghiem-xay-nha/${article.slug}`,
  ),
  ...interiorDesignExperienceArticles.map(
    (article) => `/kien-thuc/kinh-nghiem-thiet-ke-noi-that/${article.slug}`,
  ),
  ...beautifulHomeArticles.map(
    (article) => `/kien-thuc/kien-thuc-nha-dep/${article.slug}`,
  ),
  ...buildingLegalArticles.map(
    (article) => `/kien-thuc/phap-ly-xay-dung/${article.slug}`,
  ),
  ...pricingArticles.map((article) => getPricingArticleHref(article.slug)),
  ...constructionPricingArticles.map(
    (article) =>
      `/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi/${article.slug}`,
  ),
  ...kitchenSpaceArticles.map((article) =>
    getKitchenSpaceArticleHref(article.slug),
  ),
  ...bedroomSpaceArticles.map((article) =>
    getBedroomSpaceArticleHref(article.slug),
  ),
  ...livingRoomSpaceArticles.map((article) =>
    getLivingRoomSpaceArticleHref(article.slug),
  ),
];

function toEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  lastModified: Date,
): MetadataRoute.Sitemap[number] {
  return {
    // `siteBaseUrl` đã bỏ dấu "/" ở cuối nên không bị "//" khi path là "/".
    url: path === "/" ? `${siteBaseUrl}/` : `${siteBaseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

function translatedEntries(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  lastModified: Date,
): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(
      siteLocales.map((locale) => [
        locale,
        siteBaseUrl + localizedPageHref(path, locale),
      ]),
    ),
    "x-default": siteBaseUrl + path,
  };
  return siteLocales.map((locale) => ({
    ...toEntry(
      localizedPageHref(path, locale),
      priority,
      changeFrequency,
      lastModified,
    ),
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // Dự án và mẫu thiết kế nằm trong DB nên sitemap được render theo yêu cầu
  // (các hàm này gọi `connection()`), nhờ đó phản ánh nội dung mới publish.
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(true),
    getPublicDesignSamples(true),
  ]);

  return [
    ...homeRoutes.map((path) => toEntry(path, 1, "weekly", lastModified)),
    ...staticRoutes.flatMap((path) => {
      if (
        !(
          [
            ...introductionPagePaths,
            ...knowledgePaths,
            ...interiorDesignPagePaths,
            ...constructionPageSlugs.map(
              (slug) => `/thi-cong-noi-that/${slug}`,
            ),
            ...pricingPagePaths,
            "/mau-thiet-ke",
            "/du-an",
            "/lien-he",
          ] as readonly string[]
        ).includes(path)
      )
        return [toEntry(path, 0.8, "weekly", lastModified)];
      return translatedEntries(path, 0.8, "weekly", lastModified);
    }),
    ...projectArticleRoutes.flatMap((path) => {
      if (Object.hasOwn(constructionArticlePaths, path)) {
        if ((constructionArticlePaths as Record<string, string>)[path] !== path)
          return [];
        return translatedEntries(path, 0.7, "monthly", lastModified);
      }
      return knowledgePaths.includes(path) || pricingArticlePaths.includes(path)
        ? translatedEntries(path, 0.7, "monthly", lastModified)
        : [toEntry(path, 0.7, "monthly", lastModified)];
    }),
    ...projects.flatMap((project) => {
      const path = "/du-an/" + project.slug;
      const locales = siteLocales.filter((locale) =>
        hasProjectTranslation(project, locale),
      );
      const languages = {
        ...Object.fromEntries(
          locales.map((locale) => [
            locale,
            siteBaseUrl + localizedPageHref(path, locale),
          ]),
        ),
        "x-default": siteBaseUrl + path,
      };
      return locales.map((locale) => ({
        ...toEntry(
          localizedPageHref(path, locale),
          0.7,
          "monthly",
          lastModified,
        ),
        alternates: { languages },
      }));
    }),
    ...designSamples.flatMap((sample) => {
      const path = `/mau-thiet-ke/${sample.slug}`;
      const locales = siteLocales.filter((locale) =>
        hasDesignSampleTranslation(sample, locale),
      );
      const languages = {
        ...Object.fromEntries(
          locales.map((locale) => [
            locale,
            siteBaseUrl + localizedPageHref(path, locale),
          ]),
        ),
        "x-default": siteBaseUrl + path,
      };
      return locales.map((locale) => ({
        ...toEntry(
          localizedPageHref(path, locale),
          0.7,
          "monthly",
          lastModified,
        ),
        alternates: { languages },
      }));
    }),
  ];
}
