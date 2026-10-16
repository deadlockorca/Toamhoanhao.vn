import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConstructionDiaryLanding } from "@/components/construction-diary/construction-diary-landing";
import { constructionDiaryCopy } from "@/data/construction-diary";
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
  return constructionPageMetadata(locale, "nhat-ki-thi-cong", {
    title: constructionDiaryCopy[locale].heroParts.join(" "),
    description: constructionDiaryCopy[locale].intro,
  });
}
export default async function LocalizedConstructionDiaryPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ConstructionDiaryLanding locale={locale} />;
}
