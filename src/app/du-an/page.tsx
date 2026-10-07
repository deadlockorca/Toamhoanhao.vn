import type { Metadata } from "next";

import { PortfolioOverview } from "@/components/portfolio/portfolio-overview";
import { SiteFooter } from "@/components/site-footer";
import { createContentLibrary, getProjectCategoryFromQuery } from "@/lib/content-library";
import { getPublicDesignSamples, getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Dự án | Tổ Ấm Hoàn Hảo",
  description:
    "Khám phá các dự án thiết kế, thi công và hoàn thiện nội thất tiêu biểu của Tổ Ấm Hoàn Hảo.",
};

type ProjectsPageProps = {
  searchParams: Promise<{ "danh-muc"?: string | string[] }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const query = await searchParams;
  const categoryQuery = Array.isArray(query["danh-muc"])
    ? query["danh-muc"][0]
    : query["danh-muc"];
  const initialCategory = getProjectCategoryFromQuery(categoryQuery);
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(),
    getPublicDesignSamples(),
  ]);
  return <>
    <PortfolioOverview mode="projects" items={createContentLibrary(projects, designSamples)} initialCategory={initialCategory} />
    <SiteFooter />
  </>;
}
