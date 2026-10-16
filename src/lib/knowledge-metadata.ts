import type { Metadata } from "next";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import {
  getKnowledgeTranslator,
  type KnowledgeTranslator,
} from "@/data/knowledge-localized";
import type { KnowledgeGroup } from "@/data/knowledge";
import type { BeautifulHomeArticle } from "@/data/beautiful-home-articles";
import listings from "@/data/knowledge-listings.json";
const ogLocales = {
  vi: "vi_VN",
  en: "en_US",
  ja: "ja_JP",
  ko: "ko_KR",
  sv: "sv_SE",
  fr: "fr_FR",
  ru: "ru_RU",
  es: "es_ES",
  zh: "zh_CN",
} as const;
function metadata(
  path: string,
  locale: SiteLocale,
  title: string,
  description: string,
  image?: string,
): Metadata {
  const url = siteBaseUrl + localizedPageHref(path, locale);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          siteLocales.map((l) => [l, siteBaseUrl + localizedPageHref(path, l)]),
        ),
        "x-default": siteBaseUrl + path,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: image ? "article" : "website",
      locale: ogLocales[locale],
      alternateLocale: siteLocales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      ...(image ? { images: [{ url: image, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
export async function knowledgeListingMetadata(
  group: KnowledgeGroup,
  locale: SiteLocale,
) {
  const t = await getKnowledgeTranslator(locale),
    copy = listings[group];
  return metadata(
    `/kien-thuc/${group}`,
    locale,
    t(copy.title),
    t(copy.description),
  );
}
export function knowledgeArticleMetadata(
  article: BeautifulHomeArticle,
  group: KnowledgeGroup,
  locale: SiteLocale,
  t: KnowledgeTranslator,
) {
  return metadata(
    `/kien-thuc/${group}/${article.slug}`,
    locale,
    t(article.title),
    t(article.excerpt).replace(/\s*\[&hellip;\].*$/, "…"),
    article.image,
  );
}
