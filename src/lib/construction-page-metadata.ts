import type { Metadata } from "next";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
import {
  localizedPageHref,
  type ConstructionPageSlug,
} from "@/lib/localized-pages";

const openGraphLocales: Record<SiteLocale, string> = {
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

export function constructionPageMetadata(
  locale: SiteLocale,
  slug: ConstructionPageSlug,
  content: { title: string; description: string },
): Metadata {
  const path = `/thi-cong-noi-that/${slug}`;
  const url = `${siteBaseUrl}${localizedPageHref(path, locale)}`;
  return {
    ...content,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          siteLocales.map((language) => [
            language,
            `${siteBaseUrl}${localizedPageHref(path, language)}`,
          ]),
        ),
        "x-default": `${siteBaseUrl}${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Tổ Ấm Hoàn Hảo",
      ...content,
      url,
      locale: openGraphLocales[locale],
      alternateLocale: siteLocales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
    },
    twitter: { card: "summary_large_image", ...content },
  };
}
