import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedPricingArticles,
  getLocalizedConstructionPricingArticles,
  pricingText,
} from "@/data/pricing-localized";
import { pricingRoutes, type PricingCategory } from "@/data/pricing-routes";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";

const ogLocales: Record<SiteLocale, string> = {
  vi: "vi_VN",
  en: "en_US",
  ja: "ja_JP",
  ko: "ko_KR",
  sv: "sv_SE",
  fr: "fr_FR",
  ru: "ru_RU",
  es: "es_ES",
  zh: "zh_CN",
};
function metadataFor(
  path: string,
  title: string,
  description: string,
  image: string,
  locale: SiteLocale,
): Metadata {
  const url = siteBaseUrl + localizedPageHref(path, locale);
  return {
    title: { absolute: `${title} | Tổ Ấm Hoàn Hảo` },
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          siteLocales.map((language) => [
            language,
            siteBaseUrl + localizedPageHref(path, language),
          ]),
        ),
        "x-default": siteBaseUrl + path,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: siteLocales
        .filter((language) => language !== locale)
        .map((language) => ogLocales[language]),
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
export function pricingOverviewMetadata(
  category: PricingCategory,
  locale: SiteLocale,
) {
  const interior = category === "interior";
  const title = pricingText(
    interior
      ? "Báo giá thiết kế thi công nội thất"
      : "Báo giá thiết kế kiến trúc và xây dựng trọn gói",
    locale,
  );
  const description = pricingText(
    interior
      ? "Phạm vi báo giá thiết kế, thi công và sản xuất nội thất trọn gói theo diện tích, vật liệu và nhu cầu thực tế."
      : "Tham khảo phạm vi và cách lập báo giá thiết kế kiến trúc, xây dựng trọn gói cho nhà phố và biệt thự.",
    locale,
  );
  return metadataFor(
    pricingRoutes[category].path,
    title,
    description,
    interior
      ? "/images/bao-gia/hero.webp"
      : "/images/bao-gia/xay-dung/nha-pho.webp",
    locale,
  );
}
export function pricingArticleMetadata(
  category: PricingCategory,
  slug: string,
  locale: SiteLocale,
) {
  const articles =
    category === "interior"
      ? getLocalizedPricingArticles(locale)
      : getLocalizedConstructionPricingArticles(locale);
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const metadata = metadataFor(
    `${pricingRoutes[category].path}/${slug}`,
    article.title,
    article.excerpt,
    article.image,
    locale,
  );
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article" as const },
  };
}
