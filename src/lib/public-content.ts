import {
  mapDbDesignSampleToDesignSample,
  mapDbProjectToProject,
} from "@/lib/admin-data-mappers";
import { prisma } from "@/lib/prisma";

const projectInclude = {
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
} as const;

const designSampleInclude = {
  detail: true,
  metrics: { orderBy: { sortOrder: "asc" } },
  infoRows: { orderBy: { sortOrder: "asc" } },
  gallery: { orderBy: { sortOrder: "asc" } },
  features: { orderBy: { sortOrder: "asc" } },
  floorPlanNotes: { orderBy: { sortOrder: "asc" } },
  packages: {
    orderBy: { sortOrder: "asc" },
    include: { items: { orderBy: { sortOrder: "asc" } } },
  },
  relatedSamples: {
    orderBy: { sortOrder: "asc" },
    include: { relatedSample: true },
  },
} as const;

export async function getPublicProjects() {
  const dbProjects = await prisma.project.findMany({
    where: { status: "published" },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: projectInclude,
  });

  return dbProjects.map(mapDbProjectToProject);
}

export async function getPublicProjectBySlug(slug: string) {
  const dbProject = await prisma.project.findUnique({
    where: { slug },
    include: projectInclude,
  });

  if (dbProject) {
    return dbProject.status === "published"
      ? mapDbProjectToProject(dbProject)
      : undefined;
  }

  return undefined;
}

export async function getPublicDesignSamples() {
  const dbSamples = await prisma.designSample.findMany({
    where: { status: "published" },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: designSampleInclude,
  });

  return dbSamples.map(mapDbDesignSampleToDesignSample);
}

export async function getPublicDesignSampleBySlug(slug: string) {
  const dbSample = await prisma.designSample.findUnique({
    where: { slug },
    include: designSampleInclude,
  });

  if (dbSample) {
    return dbSample.status === "published"
      ? mapDbDesignSampleToDesignSample(dbSample)
      : undefined;
  }

  return undefined;
}
