import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DesignDetailHero } from "@/components/design-samples/detail/design-detail-hero";
import { DesignDetailMetrics } from "@/components/design-samples/detail/design-detail-metrics";
import { DesignFloorPlanSection } from "@/components/design-samples/detail/design-floor-plan-section";
import { DesignOverviewSection } from "@/components/design-samples/detail/design-overview-section";
import { DesignStorySection } from "@/components/design-samples/detail/design-story-section";
import { RelatedDesignSamplesSection } from "@/components/design-samples/detail/related-design-samples-section";
import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { designSamples } from "@/data/design-samples";
import {
  getPublicDesignSampleBySlug,
  getPublicDesignSamples,
} from "@/lib/public-content";

export function generateStaticParams() {
  return designSamples.map((sample) => ({
    slug: sample.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/mau-thiet-ke/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const sample = await getPublicDesignSampleBySlug(slug);

  if (!sample) {
    return {
      title: "Mẫu thiết kế không tồn tại | Tổ Ấm Hoàn Hảo",
    };
  }

  return {
    title: sample.detail?.seoTitle ?? `${sample.title} | Tổ Ấm Hoàn Hảo`,
    description: sample.detail?.seoDescription ?? sample.summary,
  };
}

export default async function DesignSampleDetailPage({
  params,
}: PageProps<"/mau-thiet-ke/[slug]">) {
  const { slug } = await params;
  const [sample, publicSamples] = await Promise.all([
    getPublicDesignSampleBySlug(slug),
    getPublicDesignSamples(),
  ]);

  if (!sample) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <DesignDetailHero sample={sample} />
      <DesignDetailMetrics sample={sample} />
      <DesignOverviewSection sample={sample} />
      <DesignStorySection sample={sample} />
      <DesignFloorPlanSection sample={sample} />
      <RelatedDesignSamplesSection sample={sample} samples={publicSamples} />
      <div id="consultation">
        <ConsultationCta />
      </div>
      <SiteFooter />
    </main>
  );
}
