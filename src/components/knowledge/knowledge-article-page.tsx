import { notFound } from "next/navigation";
import { knowledgeGroups, type KnowledgeGroup } from "@/data/knowledge";
import {
  getKnowledgeTranslator,
  localizeKnowledgeArticle,
  localizeKnowledgeSummary,
} from "@/data/knowledge-localized";
import type { SiteLocale } from "@/lib/locale";
import { knowledgeArticleMetadata } from "@/lib/knowledge-metadata";
import { BeautifulHomeArticleLanding } from "@/components/beautiful-home-article/beautiful-home-article";
import { WoodPricingArticle } from "@/components/wood-pricing-article/wood-pricing-article";
export async function getKnowledgeArticleMetadata(
  group: KnowledgeGroup,
  slug: string,
  locale: SiteLocale,
) {
  const article = knowledgeGroups[group].articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const t = await getKnowledgeTranslator(locale);
  return knowledgeArticleMetadata(article, group, locale, t);
}
export async function KnowledgeArticlePage({
  group,
  slug,
  locale = "vi",
}: {
  group: KnowledgeGroup;
  slug: string;
  locale?: SiteLocale;
}) {
  const source = knowledgeGroups[group];
  const original = source.articles.find((a) => a.slug === slug);
  if (!original) notFound();
  const t = await getKnowledgeTranslator(locale);
  const article = localizeKnowledgeArticle(original, t);
  const relatedArticles = source.articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3)
    .map((a) => localizeKnowledgeSummary(a, t));
  if (
    group === "kien-thuc-nha-dep" &&
    slug === "bao-gia-thiet-ke-noi-that-bang-go-2023-toamhoanhao"
  )
    return (
      <WoodPricingArticle
        article={article}
        relatedArticles={relatedArticles}
        locale={locale}
        t={t}
      />
    );
  return (
    <BeautifulHomeArticleLanding
      article={article}
      relatedArticles={relatedArticles}
      locale={locale}
      t={t}
      category={{
        label: source.label,
        contentTitle: source.contentTitle,
        backLabel: source.backLabel,
        listingHref: `/kien-thuc/${group}`,
      }}
    />
  );
}
