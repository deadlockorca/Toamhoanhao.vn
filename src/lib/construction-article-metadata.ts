import type { Metadata } from "next";
import { localizeConstructionArticle } from "@/data/construction-articles-localized";
import type {
  ConstructionArticle,
  ConstructionArticleGroup,
} from "@/data/construction-articles";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
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
export function constructionArticleMetadata(
  article: ConstructionArticle,
  group: ConstructionArticleGroup,
  locale: SiteLocale,
): Metadata {
  const copy = localizeConstructionArticle(article, locale);
  const path = `/thi-cong-noi-that/${group}/${article.slug}`;
  const url = siteBaseUrl + localizedPageHref(path, locale);
  return {
    title: copy.title,
    description: copy.excerpt,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          siteLocales.map((l) => [l, siteBaseUrl + localizedPageHref(path, l)]),
        ),
        "x-default": siteBaseUrl + localizedPageHref(path, "vi"),
      },
    },
    openGraph: {
      type: "article",
      siteName: "Tổ Ấm Hoàn Hảo",
      title: copy.title,
      description: copy.excerpt,
      url,
      locale: ogLocales[locale],
      alternateLocale: siteLocales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      images: [{ url: article.image, alt: copy.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.excerpt,
      images: [article.image],
    },
  };
}
