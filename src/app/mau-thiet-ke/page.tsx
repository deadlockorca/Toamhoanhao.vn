import type { Metadata } from "next";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { DesignListingSection } from "@/components/design-samples/design-listing-section";
import { DesignSamplesHero } from "@/components/design-samples/design-samples-hero";
import { DesignStatsSection } from "@/components/design-samples/design-stats-section";
import { FeaturedDesignCollection } from "@/components/design-samples/featured-design-collection";
import { PopularDesignStyles } from "@/components/design-samples/popular-design-styles";
import { SiteFooter } from "@/components/site-footer";
import { getDesignCategoryFromQuery } from "@/data/design-samples";
import { getPublicDesignSamples } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Mẫu thiết kế | Tổ Ấm Hoàn Hảo",
  description:
    "Khám phá bộ sưu tập mẫu thiết kế nội thất cho căn hộ chung cư, nhà phố, biệt thự, phòng khách, phòng ngủ, phòng bếp và phòng trẻ em.",
};

type DesignSamplesPageProps = {
  searchParams: Promise<{ "danh-muc"?: string | string[] }>;
};

export default async function DesignSamplesPage({
  searchParams,
}: DesignSamplesPageProps) {
  const query = await searchParams;
  const categoryQuery = Array.isArray(query["danh-muc"])
    ? query["danh-muc"][0]
    : query["danh-muc"];
  const activeCategory = getDesignCategoryFromQuery(categoryQuery);
  const designSamples = await getPublicDesignSamples();
  const filteredDesignSamples =
    activeCategory === "Tất cả"
      ? designSamples
      : designSamples.filter((sample) => sample.category === activeCategory);
  const featuredSample =
    designSamples.find((sample) => sample.featured) ?? designSamples[0];

  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <DesignSamplesHero />
      <DesignListingSection
        designSamples={filteredDesignSamples}
        activeCategory={activeCategory}
      />
      <FeaturedDesignCollection sample={featuredSample} />
      <PopularDesignStyles />
      <DesignStatsSection />
      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
