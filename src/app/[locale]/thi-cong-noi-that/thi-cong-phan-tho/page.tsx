import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShellConstructionLanding } from "@/components/shell-construction/shell-construction-landing";
import { shellConstructionCopy } from "@/data/shell-construction";
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
  return constructionPageMetadata(locale, "thi-cong-phan-tho", {
    title: shellConstructionCopy[locale].heroParts.join(" "),
    description: shellConstructionCopy[locale].intro,
  });
}
export default async function LocalizedShellConstructionPage({
  params,
}: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ShellConstructionLanding locale={locale} />;
}
