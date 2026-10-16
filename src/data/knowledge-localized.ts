import type { SiteLocale } from "@/lib/locale";
import type { BeautifulHomeArticle } from "./beautiful-home-articles";
export type KnowledgeTranslator = (text: string) => string;
const dictionaries = {
  en: () => import("./knowledge-translations/en.json"),
  ja: () => import("./knowledge-translations/ja.json"),
  ko: () => import("./knowledge-translations/ko.json"),
  sv: () => import("./knowledge-translations/sv.json"),
  fr: () => import("./knowledge-translations/fr.json"),
  ru: () => import("./knowledge-translations/ru.json"),
  es: () => import("./knowledge-translations/es.json"),
  zh: () => import("./knowledge-translations/zh.json"),
};
export async function getKnowledgeTranslator(
  locale: SiteLocale,
): Promise<KnowledgeTranslator> {
  if (locale === "vi") return (text) => text;
  const { default: dictionary }: { default: Record<string, string> } =
    await dictionaries[locale]();
  return (text) => {
    if (!text.trim()) return text;
    const translated = dictionary[text];
    if (!translated)
      throw new Error(
        `Missing knowledge translation: ${locale}: ${text.slice(0, 100)}`,
      );
    return translated;
  };
}
export function localizeKnowledgeSummary<T extends BeautifulHomeArticle>(
  article: T,
  t: KnowledgeTranslator,
): T {
  return { ...article, title: t(article.title), excerpt: t(article.excerpt) };
}
export function localizeKnowledgeArticle<T extends BeautifulHomeArticle>(
  article: T,
  t: KnowledgeTranslator,
): T {
  return {
    ...localizeKnowledgeSummary(article, t),
    sections: article.sections.map((section) => ({
      ...section,
      sourceTitle: section.title,
      title: t(section.title),
      blocks: section.blocks.map((block) =>
        block.type === "image"
          ? { ...block, alt: t(block.alt) }
          : { ...block, sourceText: block.text, text: t(block.text) },
      ),
    })),
  };
}
