import type { Metadata } from "next";

import { AdminDesignSampleTable } from "@/components/admin/admin-design-sample-table";
import { designSamples as mockDesignSamples } from "@/data/design-samples";
import { mapDbDesignSampleToDesignSample } from "@/lib/admin-data-mappers";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Quản lý mẫu thiết kế | Admin",
};

export default async function AdminDesignSamplesPage() {
  const dbDesignSamples = await prisma.designSample.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: {
      detail: true,
      metrics: { orderBy: { sortOrder: "asc" } },
      infoRows: { orderBy: { sortOrder: "asc" } },
    },
  });
  const designSamples =
    dbDesignSamples.length > 0
      ? dbDesignSamples.map((sample) => mapDbDesignSampleToDesignSample(sample))
      : mockDesignSamples;

  return (
    <AdminDesignSampleTable
      designSamples={designSamples}
      source={dbDesignSamples.length > 0 ? "database" : "mock"}
    />
  );
}
