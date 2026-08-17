import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectFormMock } from "@/components/admin/project-form-mock";
import { getProjectBySlug, projects } from "@/data/projects";
import { mapDbProjectToProject } from "@/lib/admin-data-mappers";
import { prisma } from "@/lib/prisma";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/admin/du-an/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dbProject = await prisma.project.findUnique({
    where: { slug },
  });
  const project = dbProject ?? getProjectBySlug(slug);

  return {
    title: project ? `Sửa ${project.title} | Admin` : "Dự án không tồn tại | Admin",
  };
}

export default async function EditProjectPage({
  params,
}: PageProps<"/admin/du-an/[slug]">) {
  const { slug } = await params;
  const dbProject = await prisma.project.findUnique({
    where: { slug },
    include: {
      detail: true,
      metrics: { orderBy: { sortOrder: "asc" } },
      infoRows: { orderBy: { sortOrder: "asc" } },
      spaces: { orderBy: { sortOrder: "asc" } },
      storyBlocks: { orderBy: { sortOrder: "asc" } },
      floorPlanNotes: { orderBy: { sortOrder: "asc" } },
      relatedProjects: {
        orderBy: { sortOrder: "asc" },
        include: { relatedProject: true },
      },
    },
  });
  const project = dbProject
    ? mapDbProjectToProject(dbProject)
    : getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectFormMock mode="edit" project={project} />;
}
