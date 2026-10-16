import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaintConstructionLanding } from "@/components/paint-construction/paint-construction-landing";
import { paintConstructionCopy } from "@/data/paint-construction";
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
  return constructionPageMetadata(locale, "thi-cong-son-ba", {
    title: paintConstructionCopy[locale].heroParts.join(" "),
    description: paintConstructionCopy[locale].intro,
  });
}
export default async function LocalizedPaintConstructionPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <PaintConstructionLanding locale={locale} />;
}
