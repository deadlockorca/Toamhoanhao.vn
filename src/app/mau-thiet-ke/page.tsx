import type { Metadata } from "next";

import { PortfolioOverview } from "@/components/portfolio/portfolio-overview";
import { SiteFooter } from "@/components/site-footer";
import { getDesignCategoryFromQuery } from "@/data/design-samples";
import { getVillaMenuTopic, matchesVillaMenuTopic } from "@/data/villa-menu";
import { createContentLibrary, type LibraryCategory } from "@/lib/content-library";
import { getPublicDesignSamples } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Mẫu thiết kế | Tổ Ấm Hoàn Hảo",
  description:
    "Khám phá bộ sưu tập mẫu thiết kế nội thất cho căn hộ chung cư, nhà phố, biệt thự, phòng khách, phòng ngủ, phòng bếp và phòng trẻ em.",
};

type DesignSamplesPageProps = {
  searchParams: Promise<{
    "danh-muc"?: string | string[];
    "chu-de"?: string | string[];
    trang?: string | string[];
  }>;
};

export default async function DesignSamplesPage({
  searchParams,
}: DesignSamplesPageProps) {
  const query = await searchParams;
  const categoryQuery = Array.isArray(query["danh-muc"])
    ? query["danh-muc"][0]
    : query["danh-muc"];
  const pageQuery = Array.isArray(query.trang) ? query.trang[0] : query.trang;
  const topicQuery = Array.isArray(query["chu-de"]) ? query["chu-de"][0] : query["chu-de"];
  const activeTopic = getVillaMenuTopic(topicQuery);
  const isPenthouseTopic = topicQuery === "penthouse-duplex";
  const activeCategory = isPenthouseTopic
    ? "Chung cư"
    : activeTopic && activeTopic.slug !== "resort-khach-san-nha-hang"
    ? "Biệt thự"
    : getDesignCategoryFromQuery(categoryQuery);
  const designSamples = await getPublicDesignSamples();
  const visibleSamples = isPenthouseTopic
    ? designSamples.filter((sample) => sample.category === "Chung cư" && /penthouse|duplex/i.test(sample.title))
    : activeTopic
    ? designSamples.filter((sample) => matchesVillaMenuTopic(sample, activeTopic))
    : designSamples;
  const requestedPage = Number.parseInt(pageQuery ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.max(requestedPage, 1)
    : 1;
  const initialCategory = activeCategory === "Tất cả"
    ? undefined
    : (activeCategory === "Chung cư" ? "Căn hộ" : activeCategory) as LibraryCategory;
  return <>
    <PortfolioOverview mode="designs" items={createContentLibrary([], visibleSamples)} initialCategory={initialCategory} initialPage={currentPage} initialTopicLabel={isPenthouseTopic ? "Penthouse, Duplex" : activeTopic?.label} />
    <SiteFooter />
  </>;
}
