import { notFound } from "next/navigation";
import { VillaInteriorLanding } from "@/components/villa-interior/villa-interior-landing";
import { villaInteriorMetadata } from "@/lib/villa-interior-metadata";
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
  return villaInteriorMetadata(locale);
}
export default async function LocalizedVillaInteriorPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <VillaInteriorLanding locale={locale} />;
}
