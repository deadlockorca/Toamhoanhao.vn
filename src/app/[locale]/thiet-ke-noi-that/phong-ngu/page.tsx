import { notFound } from "next/navigation";
import { BedroomInteriorLanding } from "@/components/bedroom-interior/bedroom-interior-landing";
import { bedroomInteriorMetadata } from "@/lib/bedroom-interior-metadata";
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
  return bedroomInteriorMetadata(locale);
}
export default async function LocalizedBedroomInteriorPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <BedroomInteriorLanding locale={locale} />;
}
