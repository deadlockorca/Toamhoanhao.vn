import type { Metadata } from "next";
import { kitchenInteriorCopy } from "@/data/kitchen-interior";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
export function kitchenInteriorMetadata(locale: SiteLocale): Metadata {
  const copy = kitchenInteriorCopy[locale];
  const path = "/thiet-ke-noi-that/phong-bep";
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
          url: "/images/thiet-ke-noi-that/phong-bep/hero.webp",
          alt: copy.heroParts.join(" "),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.heroParts.join(" "),
      description: copy.intro,
      images: ["/images/thiet-ke-noi-that/phong-bep/hero.webp"],
    },
  };
}
