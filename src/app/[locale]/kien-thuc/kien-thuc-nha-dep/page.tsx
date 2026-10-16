import { notFound } from "next/navigation";
import { isSiteLocale, siteLocales } from "@/lib/locale";
import { BeautifulHomeKnowledgePage } from "@/components/knowledge/kien-thuc-nha-dep-listing";
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
  return knowledgeListingMetadata("kien-thuc-nha-dep", locale);
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return (
    <BeautifulHomeKnowledgePage locale={locale} searchParams={searchParams} />
  );
}
