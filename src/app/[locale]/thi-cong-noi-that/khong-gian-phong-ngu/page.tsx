import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BedroomSpaceLanding } from "@/components/bedroom-space/bedroom-space-landing";
import { bedroomSpaceCopy } from "@/data/bedroom-space";
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
  return constructionPageMetadata(locale, "khong-gian-phong-ngu", {
    title: bedroomSpaceCopy[locale].heroParts.join(" "),
    description: bedroomSpaceCopy[locale].intro,
  });
}
export default async function LocalizedBedroomSpacePage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <BedroomSpaceLanding locale={locale} />;
}
