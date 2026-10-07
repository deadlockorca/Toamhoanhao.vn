import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailShowcase } from "@/components/projects/detail/project-detail-showcase";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/projects";
import { getPublicProjectBySlug } from "@/lib/public-content";

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
  const project = await getPublicProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetailShowcase project={project} />
      <SiteFooter />
    </main>
  );
}
