import type { Metadata } from "next";
import { architectureTeamCopy } from "@/data/architecture-team";
import { capabilityCopy } from "@/data/capability";
import { introductionCopy } from "@/data/introduction";
import { getNavigation } from "@/data/navigation-english";
import { workshopCopy } from "@/data/workshop";
import {
  localizedPageHref,
  type IntroductionPagePath,
} from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";

const images: Record<IntroductionPagePath, string> = {
  "/gioi-thieu": "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/gioi-thieu/7846233a5b933695.webp",
  "/gioi-thieu/tuyen-dung": "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/gioi-thieu/7846233a5b933695.webp",
  "/gioi-thieu/doi-ngu-kien-truc-su": "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/doi-ngu/22e4686c98db9806.webp",
  "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong":
    "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/nang-luc/08704159fda97c47.webp",
  "/gioi-thieu/xuong-san-xuat-noi-that":
    "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/gioi-thieu/0a5ec0d1a4de0f3e.webp",
};
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

export function introductionMetadata(
  path: IntroductionPagePath,
  locale: SiteLocale,
): Metadata {
  const copy = introductionCopy[locale];
  const menuTitle = getNavigation(locale)
    .flatMap((item) => item.children ?? [])
    .find((item) => item.href === localizedPageHref(path, locale))?.label;
  const title = menuTitle ?? copy.aboutTitle;
  const descriptions: Record<IntroductionPagePath, string> = {
    "/gioi-thieu": copy.aboutMetaDescription,
    "/gioi-thieu/tuyen-dung": copy.careersDescription,
    "/gioi-thieu/doi-ngu-kien-truc-su": architectureTeamCopy[locale].intro,
    "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong": capabilityCopy[locale].intro,
    "/gioi-thieu/xuong-san-xuat-noi-that": workshopCopy[locale].intro,
  };
  const description = descriptions[path];
  const url = siteBaseUrl + localizedPageHref(path, locale);
  return {
    title: path === "/gioi-thieu" ? { absolute: copy.aboutMetaTitle } : title,
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
      locale: ogLocales[locale],
      alternateLocale: siteLocales
        .filter((language) => language !== locale)
        .map((language) => ogLocales[language]),
      title,
      description,
      url,
      images: [{ url: images[path], alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[path]],
    },
  };
}
