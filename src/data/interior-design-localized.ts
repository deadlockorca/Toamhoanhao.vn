import translations from "./interior-design-translations.json";
import type { SiteLocale } from "@/lib/locale";

/** Exact source keys make omissions visible when the Vietnamese copy changes. */
export function interiorDesignText(text: string, locale: SiteLocale): string {
  if (locale === "vi") return text;
  const dictionary: Record<string, string> = translations[locale];
  const translated = dictionary[text];
  if (!translated)
    throw new Error(`Missing interior design translation: ${locale}: ${text}`);
  return translated;
}
