import { notFound } from "next/navigation";
import { SmartInteriorLanding } from "@/components/smart-interior/smart-interior-landing";
import { smartInteriorMetadata } from "@/lib/smart-interior-metadata";
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
  return smartInteriorMetadata(locale);
}
export default async function LocalizedSmartInteriorPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <SmartInteriorLanding locale={locale} />;
}
