import {
  parsePortfolioFilters,
  type PortfolioQuery,
} from "@/lib/portfolio-filters";
import {
  getProjectUiMessages,
  hasProjectTranslation,
  localizeProject,
} from "@/data/projects-localized";
import {
  hasDesignSampleTranslation,
  localizeDesignSample,
} from "@/data/design-samples-localized";
import { localizedPageHref } from "@/lib/localized-pages";

import { PortfolioOverview } from "@/components/portfolio/portfolio-overview";
import { SiteFooter } from "@/components/site-footer";
import {
  createPortfolioLibrary,
  getPortfolioTopic,
  portfolioTopicLabel,
} from "@/lib/portfolio-topics";
import {
  getPublicDesignSamples,
  getPublicProjects,
} from "@/lib/public-content";
import type { SiteLocale } from "@/lib/locale";

export type ProjectsPageProps = {
  searchParams: Promise<PortfolioQuery>;
};

export async function ProjectsContent({
  searchParams,
  locale = "vi",
}: ProjectsPageProps & { locale?: SiteLocale }) {
  const query = await searchParams;
  const initialFilters = parsePortfolioFilters(query, "projects");
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(locale !== "vi"),
    getPublicDesignSamples(locale !== "vi"),
  ]);
  const activeTopic = getPortfolioTopic(initialFilters.topic);
  const library = createPortfolioLibrary(
    projects
      .filter((project) => hasProjectTranslation(project, locale))
      .map((project) => localizeProject(project, locale)),
    designSamples
      .filter((sample) => hasDesignSampleTranslation(sample, locale))
      .map((sample) => localizeDesignSample(sample, locale)),
    locale,
    { projects, samples: designSamples },
  );
  const visibleItems = library;
  return (
    <>
      <PortfolioOverview
        key={JSON.stringify([locale, initialFilters])}
        mode="projects"
        locale={locale}
        messages={getProjectUiMessages(locale)}
        languageQuery={new URLSearchParams(
          Object.entries(query).flatMap(([key, value]) =>
            value === undefined
              ? []
              : (Array.isArray(value) ? value : [value]).map(
                  (item) => [key, item] as [string, string],
                ),
          ),
        ).toString()}
        items={visibleItems.map((item) => ({
          ...item,
          href: localizedPageHref(item.href, locale),
        }))}
        initialFilters={initialFilters}
        initialTopicLabel={
          activeTopic ? portfolioTopicLabel(activeTopic, locale) : undefined
        }
      />
      <SiteFooter locale={locale} />
    </>
  );
}
