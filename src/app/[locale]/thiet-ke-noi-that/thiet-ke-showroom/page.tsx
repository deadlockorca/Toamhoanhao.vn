import { notFound } from "next/navigation";
import { ShowroomDesignPage } from "@/app/thiet-ke-noi-that/thiet-ke-showroom/landing";
import { interiorDesignMetadata } from "@/lib/interior-design-metadata";
import { isSiteLocale, siteLocales } from "@/lib/locale";
type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "vi")
    .map((locale) => ({ locale }));
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return interiorDesignMetadata("thiet-ke-showroom", locale);
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ShowroomDesignPage locale={locale} />;
}
