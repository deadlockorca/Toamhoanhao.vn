import { designSamples } from "@/data/design-samples";
import {
  designText,
  hasDesignSampleTranslation,
} from "@/data/design-samples-localized";
import type { SiteLocale } from "@/lib/locale";
import { getPublicDesignSamples } from "@/lib/public-content";

export async function getHomeDesignSamples(locale: SiteLocale) {
  const samples = await getPublicDesignSamples();
  return (samples.length ? samples : designSamples)
    .filter(
      (sample) =>
        sample.status === "published" &&
        hasDesignSampleTranslation(sample, locale),
    )
    .map((sample) => ({
      slug: sample.slug,
      title: designText(sample.title, locale),
      category: sample.category,
      thumbnail: sample.thumbnail,
    }));
}
