import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DesignDetailShowcase } from "@/components/design-samples/detail/design-detail-showcase";
import { SiteFooter } from "@/components/site-footer";
import { designSamples } from "@/data/design-samples";
import { getPublicDesignSampleBySlug } from "@/lib/public-content";

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
  const sample = await getPublicDesignSampleBySlug(slug);

  if (!sample) {
    notFound();
  }

  return (
    <main>
      <DesignDetailShowcase sample={sample} />
      <SiteFooter />
    </main>
  );
}
