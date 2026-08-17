import type { Metadata } from "next";

import { AdminProjectTable } from "@/components/admin/admin-project-table";
import { projects as mockProjects } from "@/data/projects";
import { mapDbProjectToProject } from "@/lib/admin-data-mappers";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Quản lý dự án | Admin",
};

export default async function AdminProjectsPage() {
  const dbProjects = await prisma.project.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: {
      detail: true,
      metrics: { orderBy: { sortOrder: "asc" } },
      infoRows: { orderBy: { sortOrder: "asc" } },
    },
  });
  const projects =
    dbProjects.length > 0
      ? dbProjects.map((project) => mapDbProjectToProject(project))
      : mockProjects;

  return (
    <AdminProjectTable
      projects={projects}
      source={dbProjects.length > 0 ? "database" : "mock"}
    />
  );
}
