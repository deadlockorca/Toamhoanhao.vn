import {
  mapDbDesignSampleToDesignSample,
  mapDbProjectToProject,
} from "@/lib/admin-data-mappers";
import { connection } from "next/server";
import { prisma } from "@/lib/prisma";

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

export async function getPublicProjects() {
  await connection();
  const dbProjects = await prisma.project.findMany({
    where: { status: "published" },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: projectListingInclude,
  });

  return dbProjects.map(mapDbProjectToProject);
}

export async function getPublicProjectBySlug(slug: string) {
  await connection();
  const dbProject = await prisma.project.findFirst({
    where: { slug, status: "published" },
    include: projectDetailInclude,
  });

  return dbProject ? mapDbProjectToProject(dbProject) : undefined;
}

export async function getPublicDesignSamples() {
  await connection();
  const dbSamples = await prisma.designSample.findMany({
    where: { status: "published" },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: designSampleListingInclude,
  });

  return dbSamples.map(mapDbDesignSampleToDesignSample);
}

export async function getPublicDesignSampleBySlug(slug: string) {
  await connection();
  const dbSample = await prisma.designSample.findFirst({
    where: { slug, status: "published" },
    include: designSampleDetailInclude,
  });

  return dbSample ? mapDbDesignSampleToDesignSample(dbSample) : undefined;
}
