import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LivingRoomSpaceLanding } from "@/components/living-room-space/living-room-space-landing";
import { livingRoomSpaceCopy } from "@/data/living-room-space";
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
    title: livingRoomSpaceCopy[locale].heroParts.join(" "),
    description: livingRoomSpaceCopy[locale].intro,
  };
}
export default async function LocalizedLivingRoomSpacePage({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <LivingRoomSpaceLanding locale={locale} />;
}
