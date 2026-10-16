import { notFound } from "next/navigation";
import { ConstructionPricingArticle } from "@/components/pricing/construction-pricing-article";
import { pricingArticleMetadata } from "@/lib/pricing-metadata";
import { pricingRoutes } from "@/data/pricing-routes";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "vi")
    .flatMap((locale) =>
      pricingRoutes.construction.slugs.map((slug) => ({ locale, slug })),
    );
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return pricingArticleMetadata("construction", slug, locale);
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ConstructionPricingArticle locale={locale} slug={slug} />;
}
