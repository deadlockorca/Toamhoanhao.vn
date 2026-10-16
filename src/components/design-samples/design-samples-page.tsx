import {
  designText,
  getDesignUiMessages,
  hasDesignSampleTranslation,
  localizeDesignSample,
} from "@/data/design-samples-localized";
import { localizedPageHref } from "@/lib/localized-pages";

import { PortfolioOverview } from "@/components/portfolio/portfolio-overview";
import { SiteFooter } from "@/components/site-footer";
import { getDesignCategoryFromQuery } from "@/data/design-samples";
import { getVillaMenuTopic, matchesVillaMenuTopic } from "@/data/villa-menu";
import {
  createContentLibrary,
  type LibraryCategory,
} from "@/lib/content-library";
import { getPublicDesignSamples } from "@/lib/public-content";
import type { SiteLocale } from "@/lib/locale";

export type DesignSamplesPageProps = {
  searchParams: Promise<{
    "danh-muc"?: string | string[];
    "chu-de"?: string | string[];
    trang?: string | string[];
  }>;
};

export async function DesignSamplesContent({
  searchParams,
  locale = "vi",
}: DesignSamplesPageProps & { locale?: SiteLocale }) {
  const query = await searchParams;
  const categoryQuery = Array.isArray(query["danh-muc"])
    ? query["danh-muc"][0]
    : query["danh-muc"];
  const pageQuery = Array.isArray(query.trang) ? query.trang[0] : query.trang;
  const topicQuery = Array.isArray(query["chu-de"])
    ? query["chu-de"][0]
    : query["chu-de"];
  const activeTopic = getVillaMenuTopic(topicQuery);
  const isPenthouseTopic = topicQuery === "penthouse-duplex";
  const activeCategory = isPenthouseTopic
    ? "Chung cư"
    : activeTopic && activeTopic.slug !== "resort-khach-san-nha-hang"
      ? "Biệt thự"
      : getDesignCategoryFromQuery(categoryQuery);
  const designSamples = await getPublicDesignSamples(true);
  const visibleSamples = isPenthouseTopic
    ? designSamples.filter(
        (sample) =>
          sample.category === "Chung cư" &&
          /penthouse|duplex/i.test(sample.title),
      )
    : activeTopic
      ? designSamples.filter((sample) =>
          matchesVillaMenuTopic(sample, activeTopic),
        )
      : designSamples;
  const requestedPage = Number.parseInt(pageQuery ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.max(requestedPage, 1)
    : 1;
  const initialCategory =
    activeCategory === "Tất cả"
      ? undefined
      : ((activeCategory === "Chung cư"
          ? "Căn hộ"
          : activeCategory) as LibraryCategory);
  return (
    <>
      <PortfolioOverview
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
        items={createContentLibrary(
          [],
          visibleSamples
            .filter((sample) => hasDesignSampleTranslation(sample, locale))
            .map((sample) => localizeDesignSample(sample, locale)),
        ).map((item) => ({
          ...item,
          href: localizedPageHref(item.href, locale),
        }))}
        initialCategory={initialCategory}
        initialPage={currentPage}
        initialTopicLabel={
          isPenthouseTopic
            ? "Penthouse, Duplex"
            : activeTopic
              ? designText(activeTopic.label, locale)
              : undefined
        }
      />
      <SiteFooter locale={locale} />
    </>
  );
}
