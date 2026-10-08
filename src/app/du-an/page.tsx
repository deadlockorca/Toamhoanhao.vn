import type { Metadata } from "next";

import { PortfolioOverview } from "@/components/portfolio/portfolio-overview";
import { SiteFooter } from "@/components/site-footer";
import { createContentLibrary, getProjectCategoryFromQuery } from "@/lib/content-library";
import { getApartmentAreaTopic, matchesApartmentArea } from "@/data/apartment-menu";
import { getPublicDesignSamples, getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Dự án | Tổ Ấm Hoàn Hảo",
  description:
    "Khám phá các dự án thiết kế, thi công và hoàn thiện nội thất tiêu biểu của Tổ Ấm Hoàn Hảo.",
};

type ProjectsPageProps = {
  searchParams: Promise<{ "danh-muc"?: string | string[]; "dien-tich"?: string | string[] }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const query = await searchParams;
  const categoryQuery = Array.isArray(query["danh-muc"])
    ? query["danh-muc"][0]
    : query["danh-muc"];
  const initialCategory = getProjectCategoryFromQuery(categoryQuery);
  const areaQuery = Array.isArray(query["dien-tich"]) ? query["dien-tich"][0] : query["dien-tich"];
  const activeArea = getApartmentAreaTopic(areaQuery);
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(),
    getPublicDesignSamples(),
  ]);
  const visibleProjects = activeArea
    ? projects.filter((project) => project.category === "Căn hộ" && matchesApartmentArea(project.area, activeArea))
    : projects;
  const visibleSamples = activeArea
    ? designSamples.filter((sample) => sample.category === "Chung cư" && matchesApartmentArea(sample.area, activeArea))
    : designSamples;
  return <>
    <PortfolioOverview mode="projects" items={createContentLibrary(visibleProjects, visibleSamples)} initialCategory={activeArea ? "Căn hộ" : initialCategory} initialTopicLabel={activeArea?.label} />
    <SiteFooter />
  </>;
}
