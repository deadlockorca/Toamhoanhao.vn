import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityLanding } from "@/components/capability/capability-landing";
import { capabilityCopy } from "@/data/capability";
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
    title: capabilityCopy[locale].heroParts.join(" "),
    description: capabilityCopy[locale].intro,
  };
}
export default async function LocalizedCapabilityPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <CapabilityLanding locale={locale} />;
}
