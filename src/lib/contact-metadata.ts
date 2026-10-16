import type { Metadata } from "next";
import { getContactMessages } from "@/data/contact";
import { localizedPageHref } from "@/lib/localized-pages";
import { siteBaseUrl, siteLocales, type SiteLocale } from "@/lib/locale";

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

export function contactMetadata(locale: SiteLocale): Metadata {
  const messages = getContactMessages(locale);
  const title = messages["Liên hệ"];
  const description =
    messages[
      "Liên hệ Tổ Ấm Hoàn Hảo để được tư vấn thiết kế, thi công và sản xuất nội thất."
    ];
  const url = siteBaseUrl + localizedPageHref("/lien-he", locale);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          siteLocales.map((language) => [
            language,
            siteBaseUrl + localizedPageHref("/lien-he", language),
          ]),
        ),
        "x-default": siteBaseUrl + "/lien-he",
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: siteLocales
        .filter((language) => language !== locale)
        .map((language) => ogLocales[language]),
      images: [
        {
          url: "/images/gioi-thieu/banner.png",
          alt: messages["Không gian nội thất Tổ Ấm Hoàn Hảo"],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/gioi-thieu/banner.png"],
    },
  };
}
