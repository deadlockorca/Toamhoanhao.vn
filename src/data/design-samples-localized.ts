import type { DesignSample } from "@/data/design-samples";
import translations from "@/data/design-sample-translations.json";
import uiKeys from "@/data/design-sample-ui-keys.json";
import type { SiteLocale } from "@/lib/locale";

const dictionaries = translations as Record<string, Record<string, string>>;

/** Exact source keys prevent edited Vietnamese content from silently using stale translations. */
export function designText(source: string, locale: SiteLocale): string {
  if (locale === "vi" || !source) return source;
  const translated = dictionaries[locale]?.[source];
  if (translated) return translated;
  // Measurements and proper names do not require a linguistic translation.
  if (/^[\d\s.,+×xXm²m²%–—−/()-]+$/.test(source)) return source;
  if (
    [
      "Scandinavian",
      "Indochine",
      "Penthouse, Duplex",
      "Vinhomes Ocean Park",
      "The Matrix One",
      "Royal City",
    ].includes(source)
  )
    return source;
  throw new Error(`Missing design sample translation (${locale}): ${source}`);
}

export function getDesignUiMessages(locale: SiteLocale) {
  return Object.fromEntries(
    uiKeys.map((source) => [source, designText(source, locale)]),
  );
}

/** Categories remain stable identifiers for filtering; their visible labels use designText. */
export function localizeDesignSample(
  sample: DesignSample,
  locale: SiteLocale,
): DesignSample {
  if (locale === "vi") return sample;
  const t = (source: string) => designText(source, locale);
  const optional = (source?: string) =>
    source === undefined ? undefined : t(source);
  const rows = (items: Array<{ label: string; value: string }>) =>
    items.map((row) => ({ ...row, label: t(row.label), value: t(row.value) }));
  const detail = sample.detail;
  return {
    ...sample,
    title: t(sample.title),
    type: t(sample.type),
    style: t(sample.style),
    summary: t(sample.summary),
    detail: detail
      ? {
          ...detail,
          eyebrow: t(detail.eyebrow),
          displayTitle: t(detail.displayTitle),
          italicTitle: t(detail.italicTitle),
          description: t(detail.description),
          propertyType: t(detail.propertyType),
          bedrooms: optional(detail.bedrooms),
          bathrooms: optional(detail.bathrooms),
          budgetRange: optional(detail.budgetRange),
          suitableFor: t(detail.suitableFor),
          overviewTitle: t(detail.overviewTitle),
          overviewParagraphs: detail.overviewParagraphs.map(t),
          metrics: rows(detail.metrics),
          // Original labels also select specification icons; the component translates their display.
          infoRows: detail.infoRows.map((row) => {
            t(row.label);
            return { ...row, value: t(row.value) };
          }),
          gallery: detail.gallery.map((item) => ({
            ...item,
            title: t(item.title),
          })),
          features: detail.features.map((item) => ({
            ...item,
            title: t(item.title),
            description: t(item.description),
          })),
          floorPlanNotes: rows(detail.floorPlanNotes),
          suggestedPackages: detail.suggestedPackages.map((item) => ({
            ...item,
            title: t(item.title),
            price: t(item.price),
            items: item.items.map(t),
          })),
          seoTitle: t(detail.seoTitle),
          seoDescription: t(detail.seoDescription),
        }
      : undefined,
  };
}

export function hasDesignSampleTranslation(
  sample: DesignSample,
  locale: SiteLocale,
) {
  try {
    localizeDesignSample(sample, locale);
    return true;
  } catch {
    return false;
  }
}
