import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TownhouseConstructionLanding } from "@/components/townhouse-construction/townhouse-construction-landing";
import { townhouseConstructionCopy } from "@/data/townhouse-construction";
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
    title: townhouseConstructionCopy[locale].heroParts.join(" "),
    description: townhouseConstructionCopy[locale].intro,
  };
}
export default async function LocalizedTownhouseConstructionPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <TownhouseConstructionLanding locale={locale} />;
}
