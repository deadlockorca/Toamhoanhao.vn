import type { Metadata } from "next";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { DesignCategorySection } from "@/components/design-samples/design-category-section";
import { DesignListingSection } from "@/components/design-samples/design-listing-section";
import { DesignSamplesHero } from "@/components/design-samples/design-samples-hero";
import { DesignStatsSection } from "@/components/design-samples/design-stats-section";
import { FeaturedDesignCollection } from "@/components/design-samples/featured-design-collection";
import { PopularDesignStyles } from "@/components/design-samples/popular-design-styles";
import { SiteFooter } from "@/components/site-footer";
import { getPublicDesignSamples } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Mẫu thiết kế | Tổ Ấm Hoàn Hảo",
  description:
    "Khám phá bộ sưu tập mẫu thiết kế nội thất cho căn hộ chung cư, nhà phố, biệt thự, phòng khách, phòng ngủ, phòng bếp và phòng trẻ em.",
};

export default async function DesignSamplesPage() {
  const designSamples = await getPublicDesignSamples();
  const featuredSample =
    designSamples.find((sample) => sample.featured) ?? designSamples[0];

  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <DesignSamplesHero />
      <DesignCategorySection />
      <DesignListingSection designSamples={designSamples} />
      <FeaturedDesignCollection sample={featuredSample} />
      <PopularDesignStyles />
      <DesignStatsSection />
      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
