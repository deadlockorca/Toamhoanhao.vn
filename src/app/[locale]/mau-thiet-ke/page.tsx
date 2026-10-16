import { notFound } from "next/navigation";
import {
  DesignSamplesContent,
  type DesignSamplesPageProps,
} from "@/components/design-samples/design-samples-page";
import { designSampleMetadata } from "@/lib/design-sample-metadata";
import { isSiteLocale } from "@/lib/locale";
type Props = DesignSamplesPageProps & { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return designSampleMetadata(locale);
}
export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "vi") notFound();
  return <DesignSamplesContent locale={locale} searchParams={searchParams} />;
}
