import type { Metadata } from "next";
import { villaInteriorCopy } from "@/data/villa-interior";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
export function villaInteriorMetadata(locale: SiteLocale): Metadata {
  const copy = villaInteriorCopy[locale];
  const path = "/thiet-ke-noi-that/biet-thu";
  const url = siteBaseUrl + localizedPageHref(path, locale);
  return {
    title: copy.title,
    description: copy.intro,
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
      title: copy.title,
      description: copy.intro,
      url,
      images: [
        {
          url: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/biet-thu/a9be0fcea5a96b9f.webp",
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.intro,
      images: ["https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/biet-thu/a9be0fcea5a96b9f.webp"],
    },
  };
}
