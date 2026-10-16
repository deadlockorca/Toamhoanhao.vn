import { notFound } from "next/navigation";
import { DesignDetailShowcase } from "@/components/design-samples/detail/design-detail-showcase";
import { SiteFooter } from "@/components/site-footer";
import { getPublicDesignSampleBySlug } from "@/lib/public-content";
import {
  hasDesignSampleTranslation,
  localizeDesignSample,
} from "@/data/design-samples-localized";
import type { SiteLocale } from "@/lib/locale";

export async function getTranslatedDesignSample(
  slug: string,
  locale: SiteLocale,
) {
  const sample = await getPublicDesignSampleBySlug(slug);
  if (!sample || !hasDesignSampleTranslation(sample, locale)) notFound();
  return sample;
}
export async function DesignSampleContent({
  slug,
  locale,
}: {
  slug: string;
  locale: SiteLocale;
}) {
  const sample = await getTranslatedDesignSample(slug, locale);
  return (
    <main lang={locale}>
      <DesignDetailShowcase
        sample={localizeDesignSample(sample, locale)}
        locale={locale}
      />
      <SiteFooter locale={locale} />
    </main>
  );
}
