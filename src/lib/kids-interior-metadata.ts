import type { Metadata } from "next";
import { kidsInteriorCopy } from "@/data/kids-interior";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
export function kidsInteriorMetadata(locale: SiteLocale): Metadata {
  const copy = kidsInteriorCopy[locale];
  const path = "/thiet-ke-noi-that/phong-tre-em";
  const url = siteBaseUrl + localizedPageHref(path, locale);
  return {
    title: copy.heroParts.join(" "),
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
      title: copy.heroParts.join(" "),
      description: copy.intro,
      url,
      images: [
        {
          url: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/phong-tre-em/bd01c102c48666ea.webp",
          alt: copy.heroParts.join(" "),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.heroParts.join(" "),
      description: copy.intro,
      images: ["https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/phong-tre-em/bd01c102c48666ea.webp"],
    },
  };
}
