import definitions from "@/data/portfolio-topics.json";
import memberships from "@/data/portfolio-topic-memberships.json";
import articleLinks from "@/data/portfolio-article-links.json";
import { designText } from "@/data/design-samples-localized";
import type { Project } from "@/data/projects";
import type { DesignSample } from "@/data/design-samples";
import type { SiteLocale } from "@/lib/locale";
import { createContentLibrary, type LibraryItem } from "@/lib/content-library";

export type PortfolioTopic = {
  slug: string;
  label: string;
  group: string;
  legacyUrl: string;
  min?: number;
  max?: number;
};

export const portfolioTopics: PortfolioTopic[] = definitions;
const topicAssignments = memberships as Record<string, string[]>;

export function getPortfolioTopic(slug?: string) {
  return portfolioTopics.find((topic) => topic.slug === slug);
}

export function portfolioTopicLabel(topic: PortfolioTopic, locale: SiteLocale) {
  if (topic.group === "area") {
    return `${designText("Chung cư", locale)} ${topic.min}–${topic.max}m²`;
  }
  return designText(topic.label, locale);
}

export function createPortfolioLibrary(
  projects: Project[],
  samples: DesignSample[],
  locale: SiteLocale,
  originals?: { projects: Project[]; samples: DesignSample[] },
): LibraryItem[] {
  const primary = createContentLibrary(projects, samples);
  const knownSlugs = new Set(primary.map((item) => item.slug));
  // Reuse the existing article detail page; do not create duplicate records.
  const references =
    locale === "vi"
      ? (articleLinks as LibraryItem[]).filter(
          (item) => !knownSlugs.has(item.slug),
        )
      : [];
  const raw = new Map<string, { style: string; bedrooms?: string }>([
    ...(originals?.projects ?? []).map(
      (item) =>
        [
          `project:${item.slug}`,
          { style: item.style, bedrooms: item.detail?.bedrooms },
        ] as const,
    ),
    ...(originals?.samples ?? []).map(
      (item) =>
        [
          `designSample:${item.slug}`,
          { style: item.style, bedrooms: item.detail?.bedrooms },
        ] as const,
    ),
  ]);
  return [...primary, ...references].map((item) => {
    const source = raw.get(`${item.contentType}:${item.slug}`);
    return {
      ...item,
      styleKey: source?.style ?? item.style,
      bedroomsKey: source?.bedrooms ?? item.bedrooms,
      topics: topicAssignments[`${item.contentType}:${item.slug}`] ?? [],
    };
  });
}

export function matchesPortfolioTopic(
  item: LibraryItem,
  topic: PortfolioTopic,
) {
  return item.topics?.includes(topic.slug) ?? false;
}
