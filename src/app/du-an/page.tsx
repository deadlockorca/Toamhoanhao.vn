import type { Metadata } from "next";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { FeaturedProjectSection } from "@/components/projects/featured-project-section";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectsListingSection } from "@/components/projects/projects-listing-section";
import { SiteFooter } from "@/components/site-footer";
import { getPublicDesignSamples, getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Dự án | Tổ Ấm Hoàn Hảo",
  description:
    "Khám phá các dự án thiết kế, thi công và hoàn thiện nội thất tiêu biểu của Tổ Ấm Hoàn Hảo.",
};

export default async function ProjectsPage() {
  const [projects, designSamples] = await Promise.all([
    getPublicProjects(),
    getPublicDesignSamples(),
  ]);
  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];

  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <ProjectsHero />
      <ProjectsListingSection projects={projects} designSamples={designSamples} />
      {featuredProject ? <FeaturedProjectSection project={featuredProject} /> : null}
      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
