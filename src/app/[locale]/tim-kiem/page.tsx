import { notFound } from "next/navigation";
import {
  SearchPage,
  type SearchPageProps,
} from "@/components/search/search-page";
import { isSiteLocale } from "@/lib/locale";
import { getSearchCopy } from "@/data/search-copy";
type Props = SearchPageProps & { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return {
    title: getSearchCopy(locale).title,
    robots: { index: false, follow: true },
  };
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <SearchPage locale={locale} searchParams={searchParams} />;
}
