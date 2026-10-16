import translations from "./construction-article-translations.json";
import type { ConstructionArticle } from "./construction-articles";
import type { SiteLocale } from "@/lib/locale";

export function constructionArticleText(
  text: string,
  locale: SiteLocale,
): string {
  if (locale === "vi") return text;
  const dictionary: Record<string, string> = translations[locale];
  const result = dictionary[text];
  if (!result)
    throw new Error(
      `Missing construction article translation: ${locale}: ${text}`,
    );
  return result;
}

export function localizeConstructionArticle<T extends ConstructionArticle>(
  article: T,
  locale: SiteLocale,
): T {
  if (locale === "vi") return article;
  const t = (text: string) => constructionArticleText(text, locale);
  return {
    ...article,
    title: t(article.title),
    label: t(article.label),
    excerpt: t(article.excerpt),
    highlights: article.highlights.map(t),
    sections: article.sections.map((section) => ({
      ...section,
      title: t(section.title),
      paragraphs: section.paragraphs.map((paragraph) => {
        const marker = paragraph.match(/^[•♦♥Θ»→⇒Δ]\s*/)?.[0] ?? "";
        return marker + t(paragraph.slice(marker.length));
      }),
      images: section.images?.map((image) => ({ ...image, alt: t(image.alt) })),
    })),
  };
}
