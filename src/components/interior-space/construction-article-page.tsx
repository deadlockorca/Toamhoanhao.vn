import { notFound, redirect } from "next/navigation";
import {
  findConstructionArticle,
  constructionArticleGroups,
  type ConstructionArticleGroup,
} from "@/data/construction-articles";
import { localizeConstructionArticle } from "@/data/construction-articles-localized";
import { localizedPageHref } from "@/lib/localized-pages";
import type { SiteLocale } from "@/lib/locale";
import { constructionArticleMetadata } from "@/lib/construction-article-metadata";
import { KitchenSpaceArticle } from "@/components/kitchen-space/kitchen-space-article";
import { LivingRoomSpaceArticle } from "@/components/living-room-space/living-room-space-article";
import { BedroomSpaceArticle } from "@/components/bedroom-space/bedroom-space-article";

export function getConstructionArticleMetadata(
  group: ConstructionArticleGroup,
  slug: string,
  locale: SiteLocale,
) {
  const article = findConstructionArticle(group, slug);
  if (!article) notFound();
  return constructionArticleMetadata(article, group, locale);
}
export function ConstructionArticlePage({
  group,
  slug,
  locale = "vi",
}: {
  group: ConstructionArticleGroup;
  slug: string;
  locale?: SiteLocale;
}) {
  const original = findConstructionArticle(group, slug);
  if (!original) notFound();
  if ("externalHref" in original && typeof original.externalHref === "string")
    redirect(localizedPageHref(original.externalHref, locale));
  const article = localizeConstructionArticle(original, locale);
  const relatedArticles = original.relatedSlugs
    .map((slug) =>
      constructionArticleGroups[group].find((a) => a.slug === slug),
    )
    .filter((a) => a !== undefined)
    .map((a) => localizeConstructionArticle(a, locale));
  if (group === "khong-gian-bep")
    return (
      <KitchenSpaceArticle
        article={article}
        relatedArticles={relatedArticles}
        locale={locale}
      />
    );
  if (group === "khong-gian-phong-khach")
    return (
      <LivingRoomSpaceArticle
        article={article}
        relatedArticles={relatedArticles}
        locale={locale}
      />
    );
  return (
    <BedroomSpaceArticle
      article={article}
      relatedArticles={relatedArticles}
      locale={locale}
    />
  );
}
