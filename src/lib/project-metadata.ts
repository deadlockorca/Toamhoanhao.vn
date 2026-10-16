import type { Metadata } from "next";
import {
  projectText,
  hasProjectTranslation,
  localizeProject,
} from "@/data/projects-localized";
import type { Project } from "@/data/projects";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";

export function projectMetadata(
  locale: SiteLocale,
  sample?: Project,
): Metadata {
  const localized = sample && localizeProject(sample, locale);
  const path = sample ? `/du-an/${sample.slug}` : "/du-an";
  const url = siteBaseUrl + localizedPageHref(path, locale);
  const title = (
    localized?.detail?.seoTitle ||
    localized?.title ||
    projectText("Dự án", locale)
  ).replace(/\s*\|\s*Tổ Ấm Hoàn Hảo$/i, "");
  const description =
    localized?.detail?.seoDescription ||
    localized?.summary ||
    projectText(
      "Khám phá các dự án thiết kế, thi công và hoàn thiện nội thất tiêu biểu của Tổ Ấm Hoàn Hảo.",
      locale,
    );
  const languages = siteLocales.filter(
    (language) => !sample || hasProjectTranslation(sample, language),
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
