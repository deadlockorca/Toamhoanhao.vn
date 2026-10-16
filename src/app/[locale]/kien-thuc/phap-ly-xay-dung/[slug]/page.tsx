import { notFound } from "next/navigation";
import { isSiteLocale, siteLocales } from "@/lib/locale";
import { knowledgeGroups } from "@/data/knowledge";
import {
  KnowledgeArticlePage,
  getKnowledgeArticleMetadata,
} from "@/components/knowledge/knowledge-article-page";
type Props = { params: Promise<{ locale: string; slug: string }> };
// Other translated articles are generated on first visit to keep builds small.
export const dynamicParams = true;
export function generateStaticParams() {
  return siteLocales
    .filter((l) => l !== "vi")
    .flatMap((locale) =>
      knowledgeGroups["phap-ly-xay-dung"].articles
        .slice(0, 1)
        .map(({ slug }) => ({
          locale,
          slug,
        })),
    );
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return getKnowledgeArticleMetadata("phap-ly-xay-dung", slug, locale);
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return (
    <KnowledgeArticlePage
      group="phap-ly-xay-dung"
      slug={slug}
      locale={locale}
    />
  );
}
