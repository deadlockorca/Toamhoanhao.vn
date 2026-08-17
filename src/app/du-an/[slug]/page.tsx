import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { ProjectDesignStorySection } from "@/components/projects/detail/project-design-story-section";
import { ProjectDetailHero } from "@/components/projects/detail/project-detail-hero";
import { ProjectDetailMetrics } from "@/components/projects/detail/project-detail-metrics";
import { ProjectFloorPlanSection } from "@/components/projects/detail/project-floor-plan-section";
import { ProjectOverviewSection } from "@/components/projects/detail/project-overview-section";
import { RelatedProjectsSection } from "@/components/projects/detail/related-projects-section";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/projects";
import {
  getPublicProjectBySlug,
  getPublicProjects,
} from "@/lib/public-content";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/du-an/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPublicProjectBySlug(slug);

  if (!project) {
    return {
      title: "Dự án không tồn tại | Tổ Ấm Hoàn Hảo",
    };
  }

  return {
    title: project.detail?.seoTitle ?? `${project.title} | Tổ Ấm Hoàn Hảo`,
    description: project.detail?.seoDescription ?? project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/du-an/[slug]">) {
  const { slug } = await params;
  const [project, publicProjects] = await Promise.all([
    getPublicProjectBySlug(slug),
    getPublicProjects(),
  ]);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <ProjectDetailHero project={project} />
      <ProjectDetailMetrics project={project} />
      <ProjectOverviewSection project={project} />
      <ProjectDesignStorySection project={project} />
      <ProjectFloorPlanSection project={project} />
      <RelatedProjectsSection project={project} projects={publicProjects} />
      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
