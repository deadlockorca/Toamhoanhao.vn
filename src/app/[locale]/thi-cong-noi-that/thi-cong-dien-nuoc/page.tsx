import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ElectricalPlumbingLanding } from "@/components/electrical-plumbing/electrical-plumbing-landing";
import { electricalPlumbingCopy } from "@/data/electrical-plumbing";
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
    title: electricalPlumbingCopy[locale].heroParts.join(" "),
    description: electricalPlumbingCopy[locale].intro,
  };
}
export default async function LocalizedElectricalPlumbingPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ElectricalPlumbingLanding locale={locale} />;
}
