import { notFound } from "next/navigation";
import { InteriorPricingArticle } from "@/components/pricing/interior-pricing-article";
import { pricingArticleMetadata } from "@/lib/pricing-metadata";
import { pricingRoutes } from "@/data/pricing-routes";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "vi")
    .flatMap((locale) =>
      pricingRoutes.interior.slugs.map((slug) => ({ locale, slug })),
    );
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return pricingArticleMetadata("interior", slug, locale);
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <InteriorPricingArticle locale={locale} slug={slug} />;
}
