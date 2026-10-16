import { notFound } from "next/navigation";
import { isSiteLocale, siteLocales } from "@/lib/locale";
import { InteriorDesignExperiencePage } from "@/components/knowledge/kinh-nghiem-thiet-ke-noi-that-listing";
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
  return knowledgeListingMetadata("kinh-nghiem-thiet-ke-noi-that", locale);
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return (
    <InteriorDesignExperiencePage locale={locale} searchParams={searchParams} />
  );
}
