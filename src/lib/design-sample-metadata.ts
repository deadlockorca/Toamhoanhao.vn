import type { Metadata } from "next";
import {
  designText,
  hasDesignSampleTranslation,
  localizeDesignSample,
} from "@/data/design-samples-localized";
import type { DesignSample } from "@/data/design-samples";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";

export function designSampleMetadata(
  locale: SiteLocale,
  sample?: DesignSample,
): Metadata {
  const localized = sample && localizeDesignSample(sample, locale);
  const path = sample ? `/mau-thiet-ke/${sample.slug}` : "/mau-thiet-ke";
  const url = siteBaseUrl + localizedPageHref(path, locale);
  const title = (
    localized?.detail?.seoTitle ||
    localized?.title ||
    designText("Mẫu thiết kế", locale)
  ).replace(/\s*\|\s*Tổ Ấm Hoàn Hảo$/i, "");
  const description =
    localized?.detail?.seoDescription ||
    localized?.summary ||
    designText(
      "Khám phá bộ sưu tập mẫu thiết kế nội thất cho căn hộ chung cư, nhà phố, biệt thự, phòng khách, phòng ngủ, phòng bếp và phòng trẻ em.",
      locale,
    );
  const languages = siteLocales.filter(
    (language) => !sample || hasDesignSampleTranslation(sample, language),
  );
  const image = localized?.detail?.heroImage || localized?.thumbnail;
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
  return {
    title: { absolute: `${title} | Tổ Ấm Hoàn Hảo` },
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          languages.map((language) => [
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
      alternateLocale: languages
        .filter((language) => language !== locale)
        .map((language) => ogLocales[language]),
      title,
      description,
      url,
      ...(image ? { images: [{ url: image, alt: localized?.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
