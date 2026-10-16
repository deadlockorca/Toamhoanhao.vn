import { pricingArticles, type PricingArticle } from "@/data/pricing-articles";
import {
  constructionPricingArticles,
  type ConstructionPricingArticle,
} from "@/data/construction-pricing-articles";
import translations from "@/data/pricing-translations.json";
import type { SiteLocale } from "@/lib/locale";

const dictionaries: Record<
  Exclude<SiteLocale, "vi">,
  Record<string, string>
> = translations;

/** Static translations only. A missing entry must not silently render Vietnamese. */
export function pricingText(source: string, locale: SiteLocale) {
  if (locale === "vi" || !/[À-ỹ]/.test(source) || unchanged.has(source))
    return source;
  const value = dictionaries[locale][source];
  if (!value)
    throw new Error(
      `Missing pricing translation (${locale}): ${source.slice(0, 80)}`,
    );
  return value;
}
const unchanged = new Set([
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "TP. Thủ Đức",
  "Bình Dương",
  "Thanh Hóa",
  "Tổ Ấm Hoàn Hảo",
]);

export function getLocalizedPricingArticles(
  locale: SiteLocale,
): PricingArticle[] {
  if (locale === "vi") return pricingArticles;
  const t = (text: string) => pricingText(text, locale);
  return pricingArticles.map((article) => ({
    ...article,
    label: t(article.label),
    title: t(article.title),
    excerpt: t(article.excerpt),
    scope: t(article.scope),
    pricingBasis: t(article.pricingBasis),
    highlights: article.highlights.map(t),
    sections: article.sections.map((section) => ({
      ...section,
      title: t(section.title),
      paragraphs: section.paragraphs.map(t),
      images: section.images?.map((image) => ({ ...image, alt: t(image.alt) })),
    })),
  }));
}

export function getLocalizedConstructionPricingArticles(
  locale: SiteLocale,
): ConstructionPricingArticle[] {
  if (locale === "vi") return constructionPricingArticles;
  const t = (text: string) => pricingText(text, locale);
  return constructionPricingArticles.map((article) => ({
    ...article,
    title: t(article.title),
    excerpt: t(article.excerpt),
    sections: article.sections.map((section) => ({
      ...section,
      title: t(section.title),
      paragraphs: section.paragraphs.map(t),
    })),
    contentSections: article.contentSections?.map((section) => ({
      ...section,
      title: t(section.title),
      blocks: section.blocks.map((block) =>
        block.type === "image" ? block : { ...block, text: t(block.text) },
      ),
    })),
  }));
}
