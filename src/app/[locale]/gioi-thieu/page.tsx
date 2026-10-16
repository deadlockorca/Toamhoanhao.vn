import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutLanding } from "@/components/introduction/about-landing";
import { introductionMetadata } from "@/lib/introduction-metadata";
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
  return introductionMetadata("/gioi-thieu", locale);
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <AboutLanding locale={locale} />;
}
