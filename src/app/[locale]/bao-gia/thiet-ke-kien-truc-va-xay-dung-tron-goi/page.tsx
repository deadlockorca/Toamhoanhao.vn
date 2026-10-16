import { notFound } from "next/navigation";
import { ConstructionPricingOverview } from "@/components/pricing/construction-pricing-overview";
import { pricingOverviewMetadata } from "@/lib/pricing-metadata";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "vi")
    .map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return pricingOverviewMetadata("construction", locale);
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return (
    <ConstructionPricingOverview locale={locale} searchParams={searchParams} />
  );
}
