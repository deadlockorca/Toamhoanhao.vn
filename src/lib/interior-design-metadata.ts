import type { Metadata } from "next";
import pages from "@/data/interior-design-pages.json";
import { interiorDesignText } from "@/data/interior-design-localized";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";

export function interiorDesignMetadata(
  slug: keyof typeof pages,
  locale: SiteLocale,
): Metadata {
  const page = pages[slug];
  const title = interiorDesignText(page.title, locale);
  const description = interiorDesignText(page.description, locale);
  const path = `/thiet-ke-noi-that/${slug}`;
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
      locale: {
        vi: "vi_VN",
        en: "en_US",
        ja: "ja_JP",
        ko: "ko_KR",
        sv: "sv_SE",
        fr: "fr_FR",
        ru: "ru_RU",
        es: "es_ES",
        zh: "zh_CN",
      }[locale],
      images: [{ url: page.image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [page.image],
    },
  };
}
