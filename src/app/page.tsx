import { HomeLanding } from "@/components/home/home-landing";
import { projects as sampleProjects } from "@/data/projects";
import { getPublicProjects } from "@/lib/public-content";
import { siteBaseUrl } from "@/lib/locale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteBaseUrl}/`,
    languages: { vi: `${siteBaseUrl}/`, en: `${siteBaseUrl}/en` },
  },
};

export default async function Home() {
  const projects = await getPublicProjects();

  return <HomeLanding projects={projects.length ? projects : sampleProjects} locale="vi" />;
}
