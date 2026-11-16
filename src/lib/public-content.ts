import {
  mapDbDesignSampleToDesignSample,
  mapDbProjectToProject,
} from "@/lib/admin-data-mappers";
import { connection } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  importedPortfolioProjects,
  importedPortfolioSamples,
} from "@/data/portfolio-imports";

/**
 * Include đầy đủ cho trang chi tiết (cần metrics, thư viện ảnh, story, mặt bằng…).
 */
const projectDetailInclude = {
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

const designSampleDetailInclude = {
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

/**
 * Include rút gọn cho trang chủ và trang danh sách.
 *
 * Các trang này chỉ dùng thông tin thẻ (tiêu đề, slug, ảnh bìa, phong cách,
 * diện tích, mô tả) cộng với `detail` cho ảnh hero và thời gian thi công. Nếu
 * dùng include đầy đủ thì mỗi lần tải trang phải kéo thêm metrics, infoRows,
 * spaces, storyBlocks, floorPlanNotes và relatedProjects cho toàn bộ dự án —
 * với dữ liệu hiện tại là 296 dự án và hàng nghìn bản ghi con. Mapper đã xử lý
 * các quan hệ vắng mặt bằng `?? []` nên không cần chúng ở đây.
 */
const projectListingInclude = { detail: true } as const;
const designSampleListingInclude = { detail: true } as const;

/** Translated catalogues request full details to validate content coverage before linking. */
export async function getPublicProjects(fullDetails = false) {
  await connection();
  const dbProjects = await prisma.project.findMany({
    where: {
      OR: [
        { status: "published" },
        { slug: { in: importedPortfolioProjects.map((item) => item.slug) } },
      ],
    },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: fullDetails ? projectDetailInclude : projectListingInclude,
  });

  const existingSlugs = new Set(dbProjects.map((item) => item.slug));
  return [
    ...dbProjects
      .filter((item) => item.status === "published")
      .map(mapDbProjectToProject),
    ...importedPortfolioProjects.filter(
      (item) => !existingSlugs.has(item.slug),
    ),
  ];
}

export async function getPublicProjectBySlug(slug: string) {
  await connection();
  const dbProject = await prisma.project.findFirst({
    where: { slug },
    include: projectDetailInclude,
  });

  return dbProject
    ? dbProject.status === "published"
      ? mapDbProjectToProject(dbProject)
      : undefined
    : importedPortfolioProjects.find((item) => item.slug === slug);
}

export async function getPublicDesignSamples(fullDetails = false) {
  await connection();
  const dbSamples = await prisma.designSample.findMany({
    where: {
      OR: [
        { status: "published" },
        { slug: { in: importedPortfolioSamples.map((item) => item.slug) } },
      ],
    },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: fullDetails
      ? designSampleDetailInclude
      : designSampleListingInclude,
  });

  const existingSlugs = new Set(dbSamples.map((item) => item.slug));
  return [
    ...dbSamples
      .filter((item) => item.status === "published")
      .map(mapDbDesignSampleToDesignSample),
    ...importedPortfolioSamples.filter((item) => !existingSlugs.has(item.slug)),
  ];
}

export async function getPublicDesignSampleBySlug(slug: string) {
  await connection();
  const dbSample = await prisma.designSample.findFirst({
    where: { slug },
    include: designSampleDetailInclude,
  });

  return dbSample
    ? dbSample.status === "published"
      ? mapDbDesignSampleToDesignSample(dbSample)
      : undefined
    : importedPortfolioSamples.find((item) => item.slug === slug);
}
