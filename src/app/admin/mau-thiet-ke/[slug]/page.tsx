import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DesignSampleFormMock } from "@/components/admin/design-sample-form-mock";
import {
  designSamples,
  getDesignSampleBySlug,
} from "@/data/design-samples";
import { mapDbDesignSampleToDesignSample } from "@/lib/admin-data-mappers";
import { prisma } from "@/lib/prisma";

export function generateStaticParams() {
  return designSamples.map((sample) => ({
    slug: sample.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/admin/mau-thiet-ke/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dbSample = await prisma.designSample.findUnique({
    where: { slug },
  });
  const sample = dbSample ?? getDesignSampleBySlug(slug);

  return {
    title: sample
      ? `Sửa ${sample.title} | Admin`
      : "Mẫu thiết kế không tồn tại | Admin",
  };
}

export default async function EditDesignSamplePage({
  params,
}: PageProps<"/admin/mau-thiet-ke/[slug]">) {
  const { slug } = await params;
  const dbSample = await prisma.designSample.findUnique({
    where: { slug },
    include: {
      detail: true,
      metrics: { orderBy: { sortOrder: "asc" } },
      infoRows: { orderBy: { sortOrder: "asc" } },
      gallery: { orderBy: { sortOrder: "asc" } },
      features: { orderBy: { sortOrder: "asc" } },
      floorPlanNotes: { orderBy: { sortOrder: "asc" } },
      packages: {
        orderBy: { sortOrder: "asc" },
        include: { items: { orderBy: { sortOrder: "asc" } } },
      },
      relatedSamples: {
        orderBy: { sortOrder: "asc" },
        include: { relatedSample: true },
      },
    },
  });
  const sample = dbSample
    ? mapDbDesignSampleToDesignSample(dbSample)
    : getDesignSampleBySlug(slug);

  if (!sample) {
    notFound();
  }

  return <DesignSampleFormMock mode="edit" sample={sample} />;
}
