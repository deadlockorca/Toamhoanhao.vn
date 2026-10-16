import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RenovationConstructionLanding } from "@/components/renovation-construction/renovation-construction-landing";
import { renovationConstructionCopy } from "@/data/renovation-construction";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "vi")
    .map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return {
    title: renovationConstructionCopy[locale].heroParts.join(" "),
    description: renovationConstructionCopy[locale].intro,
  };
}
export default async function LocalizedRenovationConstructionPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <RenovationConstructionLanding locale={locale} />;
}
