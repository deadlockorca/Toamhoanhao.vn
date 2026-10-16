import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitectureTeamLanding } from "@/components/architecture-team/architecture-team-landing";
import { architectureTeamCopy } from "@/data/architecture-team";
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
  return {
    title: architectureTeamCopy[locale].heroParts.join(" "),
    description: architectureTeamCopy[locale].intro,
  };
}
export default async function LocalizedArchitectureTeamPage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ArchitectureTeamLanding locale={locale} />;
}
