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
  "/gioi-thieu": "/images/gioi-thieu/banner.png",
  "/gioi-thieu/tuyen-dung": "/images/gioi-thieu/tuyen-dung.png",
  "/gioi-thieu/doi-ngu-kien-truc-su": "/images/doi-ngu/banner.png",
  "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong":
    "/images/nang-luc/living-room-v2.webp",
  "/gioi-thieu/xuong-san-xuat-noi-that":
    "/images/gioi-thieu/xuong-san-xuat.png",
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
