import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApartmentConstructionLanding } from "@/components/apartment-construction/apartment-construction-landing";
import { apartmentConstructionCopy } from "@/data/apartment-construction";
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
    title: apartmentConstructionCopy[locale].heroParts.join(" "),
    description: apartmentConstructionCopy[locale].intro,
  };
}
export default async function LocalizedApartmentConstructionPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ApartmentConstructionLanding locale={locale} />;
}
