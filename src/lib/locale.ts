export const siteLocales = [
  "vi",
  "en",
  "ja",
  "ko",
  "sv",
  "fr",
  "ru",
  "es",
  "zh",
] as const;
export type SiteLocale = (typeof siteLocales)[number];
export type AdditionalLocale = Extract<
  SiteLocale,
  "ko" | "sv" | "fr" | "ru" | "es" | "zh"
>;

export const additionalLocales: AdditionalLocale[] = [
  "ko",
  "sv",
  "fr",
  "ru",
  "es",
  "zh",
];

export const localeOptions: Array<{
  code: SiteLocale;
  short: string;
  label: string;
}> = [
  { code: "en", short: "EN", label: "English" },
  { code: "ja", short: "JP", label: "日本語" },
  { code: "vi", short: "VI", label: "Tiếng Việt" },
  { code: "ko", short: "KO", label: "한국어" },
  { code: "sv", short: "SV", label: "Swedish" },
  { code: "fr", short: "FR", label: "Français" },
  { code: "ru", short: "RU", label: "Русский" },
  { code: "es", short: "ES", label: "Español" },
  { code: "zh", short: "ZH", label: "中文" },
];

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.some((locale) => locale === value);
}

export function isAdditionalLocale(value: string): value is AdditionalLocale {
  return additionalLocales.some((locale) => locale === value);
}

export function homePath(locale: SiteLocale) {
  return locale === "vi" ? "/" : `/${locale}`;
}

export const englishHomePath = "/en";
export const japaneseHomePath = "/ja";

/**
 * Domain chính thức. Fallback phải là domain thật của site: trước đây nó trỏ
 * về domain preview `toamhoanhaovn.vercel.app`, nên nếu thiếu biến môi trường
 * thì toàn bộ canonical và hreflang sẽ trỏ sai domain và Google index nhầm.
 */
export const siteBaseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://toamhoanhao.vn"
).replace(/\/+$/, "");

export const homeAlternates = Object.fromEntries(
  siteLocales.map((locale) => [locale, `${siteBaseUrl}${homePath(locale)}`]),
) as Record<SiteLocale, string>;
