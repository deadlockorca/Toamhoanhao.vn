import type { SiteLocale } from "@/lib/locale";

// Imported headlines may be all caps. Format them for display after translation
// so source strings, translation keys and database records stay stable.
const preservedTerms = [
  "Tổ Ấm Hoàn Hảo",
  "To Am Hoan Hao",
  "Kaba Coffee",
  "Jungle Coffee",
  "Break Coffee",
  "Ocean Coffee",
  "Dream Bean Coffee",
  "Shoha Coffee",
  "Bali Coffee",
  "Daily Dose",
  "The Matrix One",
  "Vinhomes Central Park",
  "Vinhomes Ocean Park",
  "Vinhome Ocean Park",
  "Vinhomes Grandpark",
  "Vinhomes Grand Park",
  "Sunshine Sky City",
  "Royal City",
  "Vinhomes",
  "Stela",
  "Hà Đô",
  "Hồ Chí Minh",
  "Hà Nội",
  "Việt Nam",
  "Hàn Quốc",
  "Nhật Bản",
  "Quảng Bình",
  "Bình Dương",
  "Đà Nẵng",
  "Hải Phòng",
  "Bắc Ninh",
  "Hưng Yên",
  "Thanh Hóa",
  "Ninh Bình",
  "Long Biên",
  "Thanh Xuân",
  "Địa Trung Hải",
  "Châu Âu",
  "Hanoi",
  "Ho Chi Minh",
  "Industrial",
  "Scandinavian",
  "Indochine",
  "Rustic",
  "Coastal",
  "Tropical",
  "Luxury",
  "Wabi-Sabi",
  "Japanese",
  "Zen",
  "MDF",
  "MFC",
  "HDF",
  "HPL",
  "PVC",
  "CNC",
  "LED",
  "BIM",
  "2D",
  "3D",
].sort((a, b) => b.length - a.length);
const terms = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${preservedTerms.join("|")})(?![\\p{L}\\p{N}])`,
  "giu",
);
const spelling = new Map(
  preservedTerms.map((term) => [term.toLowerCase(), term]),
);

export function formatDisplayTitle(title: string, locale: SiteLocale = "vi") {
  // Ignore lowercase measurement units when detecting an uppercase headline.
  const letters = title
    .replace(/\d+(?:[.,]\d+)?\s*(?:mm|cm|km|m[23²³]?|ha)\b/giu, "")
    .replace(/[^\p{L}]/gu, "");
  if (
    !letters ||
    letters === letters.toLocaleLowerCase(locale) ||
    letters !== letters.toLocaleUpperCase(locale)
  )
    return title;

  return title
    .toLocaleLowerCase(locale)
    .replace(terms, (term) => spelling.get(term.toLowerCase()) ?? term)
    .replace(
      /\b(\d+)(pn|wc)\b/giu,
      (_, count, unit) => count + unit.toUpperCase(),
    )
    .replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase(locale));
}
