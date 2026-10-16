import { notFound } from "next/navigation";
import { isSiteLocale, siteLocales } from "@/lib/locale";
import { BuildingLegalPage } from "@/components/knowledge/phap-ly-xay-dung-listing";
import { knowledgeListingMetadata } from "@/lib/knowledge-metadata";
type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
export function generateStaticParams() {
  return siteLocales.filter((l) => l !== "vi").map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return knowledgeListingMetadata("phap-ly-xay-dung", locale);
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <BuildingLegalPage locale={locale} searchParams={searchParams} />;
}
