import { notFound } from "next/navigation";
import {
  DesignSampleContent,
  getTranslatedDesignSample,
} from "@/components/design-samples/design-sample-page";
import { designSampleMetadata } from "@/lib/design-sample-metadata";
import { isSiteLocale } from "@/lib/locale";
type Props = { params: Promise<{ locale: string; slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return designSampleMetadata(
    locale,
    await getTranslatedDesignSample(slug, locale),
  );
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <DesignSampleContent slug={slug} locale={locale} />;
}
