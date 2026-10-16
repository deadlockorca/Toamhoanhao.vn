import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkshopLanding } from "@/components/workshop/workshop-landing";
import { workshopCopy } from "@/data/workshop";
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
    title: workshopCopy[locale].title,
    description: workshopCopy[locale].intro,
  };
}
export default async function LocalizedWorkshopPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <WorkshopLanding locale={locale} />;
}
