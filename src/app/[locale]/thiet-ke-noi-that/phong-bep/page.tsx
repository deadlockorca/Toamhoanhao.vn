import { notFound } from "next/navigation";
import { KitchenInteriorLanding } from "@/components/kitchen-interior/kitchen-interior-landing";
import { kitchenInteriorMetadata } from "@/lib/kitchen-interior-metadata";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "vi")
    .map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return kitchenInteriorMetadata(locale);
}
export default async function LocalizedKitchenInteriorPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <KitchenInteriorLanding locale={locale} />;
}
