import type { Metadata } from "next";
import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import { siteBaseUrl } from "@/lib/locale";
import { getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "To Am Hoan Hao | Interior Design & Construction",
  description:
    "Explore interior design and construction projects by To Am Hoan Hao, from the first idea to the finished living space.",
  alternates: {
    canonical: `${siteBaseUrl}/en`,
    languages: { vi: `${siteBaseUrl}/`, en: `${siteBaseUrl}/en` },
  },
};

export default async function EnglishHome() {
  const projects = await getPublicProjects();
  return <HomeLanding projects={projects.length ? projects : sampleProjects} locale="en" />;
}
