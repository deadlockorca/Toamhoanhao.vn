import {
  parsePortfolioFilters,
  type PortfolioQuery,
} from "@/lib/portfolio-filters";
import {
  getDesignUiMessages,
  hasDesignSampleTranslation,
  localizeDesignSample,
} from "@/data/design-samples-localized";
import { localizedPageHref } from "@/lib/localized-pages";

import { PortfolioOverview } from "@/components/portfolio/portfolio-overview";
import { SiteFooter } from "@/components/site-footer";
import {
  getPublicDesignSamples,
  getPublicProjects,
} from "@/lib/public-content";
import {
  hasProjectTranslation,
  localizeProject,
} from "@/data/projects-localized";
import {
  createPortfolioLibrary,
  getPortfolioTopic,
  portfolioTopicLabel,
} from "@/lib/portfolio-topics";
import type { SiteLocale } from "@/lib/locale";

export type DesignSamplesPageProps = {
  searchParams: Promise<PortfolioQuery>;
};

export async function DesignSamplesContent({
  searchParams,
  locale = "vi",
}: DesignSamplesPageProps & { locale?: SiteLocale }) {
  const query = await searchParams;
  const initialFilters = parsePortfolioFilters(query, "designs");
  const activeTopic = getPortfolioTopic(initialFilters.topic);
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(locale !== "vi"),
    getPublicDesignSamples(locale !== "vi"),
  ]);
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
        mode="designs"
        locale={locale}
        messages={getDesignUiMessages(locale)}
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
