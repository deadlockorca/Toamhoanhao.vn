import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecruitmentLanding } from "@/components/introduction/recruitment-landing";
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
  return introductionMetadata("/gioi-thieu/tuyen-dung", locale);
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <RecruitmentLanding locale={locale} />;
}
