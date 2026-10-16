import type { Project } from "@/data/projects";
import {
  designText,
  getDesignUiMessages,
} from "@/data/design-samples-localized";
import translations from "@/data/project-translations.json";
import uiKeys from "@/data/project-ui-keys.json";
import type { SiteLocale } from "@/lib/locale";

const dictionaries = translations as Record<string, Record<string, string>>;
export function projectText(source: string, locale: SiteLocale): string {
  if (locale === "vi" || !source) return source;
  const areaTopic = source.match(/^Chung c\u01b0 (\d+)m2-(\d+)m2$/);
  if (areaTopic)
    return `${projectText("Căn hộ", locale)} ${areaTopic[1]}–${areaTopic[2]}m²`;
  const translated = dictionaries[locale]?.[source];
  if (translated) return translated;
  try {
    return designText(source, locale);
  } catch {
    throw new Error(`Missing project translation (${locale}): ${source}`);
  }
}
export function getProjectUiMessages(locale: SiteLocale) {
  return {
    ...getDesignUiMessages(locale),
    ...Object.fromEntries(
      uiKeys.map((source) => [source, projectText(source, locale)]),
    ),
  };
}

/** Keep category IDs, area, dates, slugs and media stable across translations. */
export function localizeProject(project: Project, locale: SiteLocale): Project {
  if (locale === "vi") return project;
  const t = (source: string) => projectText(source, locale);
  const detail = project.detail;
  // Validate the area even though it stays canonical for numeric filtering.
  t(project.area);
  return {
    ...project,
    title: t(project.title),
    location: t(project.location),
    style: t(project.style),
    summary: t(project.summary),
    detail: detail
      ? {
          ...detail,
          eyebrow: t(detail.eyebrow),
          displayTitle: t(detail.displayTitle),
          italicTitle: t(detail.italicTitle),
          description: t(detail.description),
          bedrooms: t(detail.bedrooms),
          bathrooms: t(detail.bathrooms),
          duration: t(detail.duration),
          scope: t(detail.scope),
          overviewTitle: t(detail.overviewTitle),
          overviewParagraphs: detail.overviewParagraphs.map(t),
          metrics: detail.metrics.map((row) => ({
            ...row,
            label: t(row.label),
            value: t(row.value),
          })),
          // Source labels also drive specification lookups; translate them when rendering.
          infoRows: detail.infoRows.map((row) => {
            t(row.label);
            return { ...row, value: t(row.value) };
          }),
          spaces: detail.spaces.map((space) => ({
            ...space,
            title: t(space.title),
          })),
          storyBlocks: detail.storyBlocks.map((block) => ({
            ...block,
            title: t(block.title),
            description: t(block.description),
          })),
          floorPlanNotes: detail.floorPlanNotes.map((row) => ({
            ...row,
            label: t(row.label),
            value: t(row.value),
          })),
          seoTitle: t(detail.seoTitle),
          seoDescription: t(detail.seoDescription),
        }
      : undefined,
  };
}
export function hasProjectTranslation(project: Project, locale: SiteLocale) {
  try {
    localizeProject(project, locale);
    return true;
  } catch {
    return false;
  }
}
