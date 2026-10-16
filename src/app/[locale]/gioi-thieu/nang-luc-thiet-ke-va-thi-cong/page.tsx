import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityLanding } from "@/components/capability/capability-landing";
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
  return introductionMetadata(
    "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
    locale,
  );
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <CapabilityLanding locale={locale} />;
}
