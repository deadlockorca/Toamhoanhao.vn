import {
  projectText,
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
  createContentLibrary,
  getProjectCategoryFromQuery,
} from "@/lib/content-library";
import {
  getApartmentAreaTopic,
  matchesApartmentArea,
} from "@/data/apartment-menu";
import {
  getPublicDesignSamples,
  getPublicProjects,
} from "@/lib/public-content";
import type { SiteLocale } from "@/lib/locale";

export type ProjectsPageProps = {
  searchParams: Promise<{
    "danh-muc"?: string | string[];
    "dien-tich"?: string | string[];
    trang?: string | string[];
  }>;
};

export async function ProjectsContent({
  searchParams,
  locale = "vi",
}: ProjectsPageProps & { locale?: SiteLocale }) {
  const query = await searchParams;
  const categoryQuery = Array.isArray(query["danh-muc"])
    ? query["danh-muc"][0]
    : query["danh-muc"];
  const initialCategory = getProjectCategoryFromQuery(categoryQuery);
  const areaQuery = Array.isArray(query["dien-tich"])
    ? query["dien-tich"][0]
    : query["dien-tich"];
  const activeArea = getApartmentAreaTopic(areaQuery);
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(true),
    getPublicDesignSamples(true),
  ]);
  const visibleProjects = activeArea
    ? projects.filter(
        (project) =>
          project.category === "Căn hộ" &&
          matchesApartmentArea(project.area, activeArea),
      )
    : projects;
  const visibleSamples = activeArea
    ? designSamples.filter(
        (sample) =>
          sample.category === "Chung cư" &&
          matchesApartmentArea(sample.area, activeArea),
      )
    : designSamples;
  const pageQuery = Array.isArray(query.trang) ? query.trang[0] : query.trang;
  const requestedPage = Number.parseInt(pageQuery ?? "1", 10);
  return (
    <>
      <PortfolioOverview
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
        initialPage={
          Number.isFinite(requestedPage) ? Math.max(1, requestedPage) : 1
        }
        items={createContentLibrary(
          visibleProjects
            .filter((project) => hasProjectTranslation(project, locale))
            .map((project) => localizeProject(project, locale)),
          visibleSamples
            .filter((sample) => hasDesignSampleTranslation(sample, locale))
            .map((sample) => localizeDesignSample(sample, locale)),
        ).map((item) => ({
          ...item,
          href: localizedPageHref(item.href, locale),
        }))}
        initialCategory={activeArea ? "Căn hộ" : initialCategory}
        initialTopicLabel={
          activeArea ? projectText(activeArea.label, locale) : undefined
        }
      />
      <SiteFooter locale={locale} />
    </>
  );
}
