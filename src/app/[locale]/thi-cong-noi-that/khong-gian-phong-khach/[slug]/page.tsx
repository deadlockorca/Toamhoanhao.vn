import { notFound } from "next/navigation";
import { constructionArticleGroups } from "@/data/construction-articles";
import {
  ConstructionArticlePage,
  getConstructionArticleMetadata,
} from "@/components/interior-space/construction-article-page";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return siteLocales
    .filter((l) => l !== "vi")
    .flatMap((locale) =>
      constructionArticleGroups["khong-gian-phong-khach"]
        .filter((a) => !("externalHref" in a && a.externalHref))
        .map((a) => ({ locale, slug: a.slug })),
    );
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return getConstructionArticleMetadata("khong-gian-phong-khach", slug, locale);
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return (
    <ConstructionArticlePage
      group="khong-gian-phong-khach"
      slug={slug}
      locale={locale}
    />
  );
}
