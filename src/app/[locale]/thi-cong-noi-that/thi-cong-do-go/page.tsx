import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WoodConstructionLanding } from "@/components/wood-construction/wood-construction-landing";
import { woodConstructionCopy } from "@/data/wood-construction";
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
  return constructionPageMetadata(locale, "thi-cong-do-go", {
    title: woodConstructionCopy[locale].heroParts.join(" "),
    description: woodConstructionCopy[locale].intro,
  });
}
export default async function LocalizedWoodConstructionPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <WoodConstructionLanding locale={locale} />;
}
