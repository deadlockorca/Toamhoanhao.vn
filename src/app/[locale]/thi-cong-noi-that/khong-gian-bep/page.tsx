import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KitchenSpaceLanding } from "@/components/kitchen-space/kitchen-space-landing";
import { kitchenSpaceCopy } from "@/data/kitchen-space";
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
    title: kitchenSpaceCopy[locale].heroParts.join(" "),
    description: kitchenSpaceCopy[locale].intro,
  };
}
export default async function LocalizedKitchenSpacePage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <KitchenSpaceLanding locale={locale} />;
}
