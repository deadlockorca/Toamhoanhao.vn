import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CeilingConstructionLanding } from "@/components/ceiling-construction/ceiling-construction-landing";
import { ceilingConstructionCopy } from "@/data/ceiling-construction";
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
  return constructionPageMetadata(locale, "thi-cong-tran-thach-cao", {
    title: ceilingConstructionCopy[locale].heroParts.join(" "),
    description: ceilingConstructionCopy[locale].intro,
  });
}
export default async function LocalizedCeilingConstructionPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <CeilingConstructionLanding locale={locale} />;
}
