import { notFound } from "next/navigation";
import { ContactPage } from "@/components/contact/contact-page";
import { contactMetadata } from "@/lib/contact-metadata";
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
  return contactMetadata(locale);
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <ContactPage locale={locale} />;
}
