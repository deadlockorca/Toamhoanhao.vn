"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  ContentStatus,
  DesignSampleCategory,
  ImageSide,
  Prisma,
  ProjectCategory,
} from "@/generated/prisma/client";
import { designSamples as mockDesignSamples } from "@/data/design-samples";
import { projects as mockProjects } from "@/data/projects";
import { prisma } from "@/lib/prisma";
import { deleteR2PublicUrls, uploadR2Images } from "@/lib/r2-storage";

const fallbackImage =
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85";

const projectCategoryMap: Record<string, ProjectCategory> = {
  "Căn hộ": ProjectCategory.apartment,
  "Biệt thự": ProjectCategory.villa,
  "Nhà phố": ProjectCategory.townhouse,
  "Văn phòng": ProjectCategory.office,
  "Không gian kinh doanh": ProjectCategory.businessSpace,
  "Nội thất trọn gói": ProjectCategory.turnkeyInterior,
  apartment: ProjectCategory.apartment,
  villa: ProjectCategory.villa,
  townhouse: ProjectCategory.townhouse,
  office: ProjectCategory.office,
  businessSpace: ProjectCategory.businessSpace,
  turnkeyInterior: ProjectCategory.turnkeyInterior,
};

const designCategoryMap: Record<string, DesignSampleCategory> = {
  "Chung cư": DesignSampleCategory.apartment,
  "Nhà phố": DesignSampleCategory.townhouse,
  "Biệt thự": DesignSampleCategory.villa,
  "Phòng khách": DesignSampleCategory.livingRoom,
  "Phòng ngủ": DesignSampleCategory.bedroom,
  "Phòng bếp": DesignSampleCategory.kitchen,
  "Tủ bếp": DesignSampleCategory.kitchenCabinet,
  "Phòng trẻ em": DesignSampleCategory.childrenRoom,
  apartment: DesignSampleCategory.apartment,
  townhouse: DesignSampleCategory.townhouse,
  villa: DesignSampleCategory.villa,
  livingRoom: DesignSampleCategory.livingRoom,
  bedroom: DesignSampleCategory.bedroom,
  kitchen: DesignSampleCategory.kitchen,
  kitchenCabinet: DesignSampleCategory.kitchenCabinet,
  childrenRoom: DesignSampleCategory.childrenRoom,
};

const projectAdminPath = "/admin/du-an";
const projectPublicPath = "/du-an";
const designAdminPath = "/admin/mau-thiet-ke";
const designPublicPath = "/mau-thiet-ke";

function revalidateProjectPaths(slug: string) {
  revalidatePath(projectAdminPath);
  revalidatePath(projectPublicPath);
  revalidatePath(`${projectAdminPath}/${slug}`);
  revalidatePath(`${projectPublicPath}/${slug}`);
  revalidatePath("/");
}

function revalidateDesignSamplePaths(slug: string) {
  revalidatePath(designAdminPath);
  revalidatePath(designPublicPath);
  revalidatePath(`${designAdminPath}/${slug}`);
  revalidatePath(`${designPublicPath}/${slug}`);
  revalidatePath("/");
}

export async function createProjectDraft(formData: FormData) {
  const title = readString(formData, "title") || "Dự án chưa đặt tên";
  const slug = await uniqueProjectSlug(readString(formData, "slug") || title);
  const status = readStatus(formData);

  const uploadedUrls = await appendUploadedProjectImages(formData, slug);
  let project: { slug: string };

  try {
    project = await prisma.$transaction(async (tx) => {
      const createdProject = await tx.project.create({
        data: {
          ...projectBaseData(formData, title, slug, status),
          detail: {
            create: projectDetailData(formData, title),
          },
        },
      });

      await syncProjectCollections(tx, createdProject.id, formData);

      return createdProject;
    });
  } catch (error) {
    await deleteR2PublicUrls(uploadedUrls);
    throw error;
  }

  revalidateProjectPaths(project.slug);
  redirect(`/admin/du-an/${project.slug}`);
}

export async function saveProjectDraft(currentSlug: string, formData: FormData) {
  const title = readString(formData, "title") || "Dự án chưa đặt tên";
  const currentProject = await prisma.project.findUnique({
    where: { slug: currentSlug },
    select: { id: true },
  });
  const nextSlug = await uniqueProjectSlug(
    readString(formData, "slug") || title,
    currentProject?.id,
  );
  const status = readStatus(formData);

  const uploadedUrls = await appendUploadedProjectImages(formData, nextSlug);
  let project: { slug: string };

  try {
    project = await prisma.$transaction(async (tx) => {
      const savedProject = await tx.project.upsert({
        where: { slug: currentSlug },
        create: {
          ...projectBaseData(
            formData,
            title,
            await uniqueProjectSlug(nextSlug),
            status,
          ),
          detail: {
            create: projectDetailData(formData, title),
          },
        },
        update: {
          ...projectBaseData(formData, title, nextSlug, status),
          detail: {
            upsert: {
              create: projectDetailData(formData, title),
              update: projectDetailData(formData, title),
            },
          },
        },
      });

      await syncProjectCollections(tx, savedProject.id, formData);

      return savedProject;
    });
  } catch (error) {
    await deleteR2PublicUrls(uploadedUrls);
    throw error;
  }

  revalidateProjectPaths(currentSlug);
  revalidateProjectPaths(project.slug);
  redirect(`/admin/du-an/${project.slug}`);
}

export async function updateProjectStatus(
  slug: string,
  status: ContentStatus,
) {
  await prisma.project.update({
    where: { slug },
    data: {
      status,
      publishedAt: status === ContentStatus.published ? new Date() : null,
    },
  });

  revalidateProjectPaths(slug);
}

export async function deleteProject(slug: string) {
  const project = await prisma.project.findUnique({
    where: { slug },
    select: {
      id: true,
      thumbnail: true,
      detail: {
        select: {
          heroImage: true,
          floorPlanImage: true,
        },
      },
      spaces: { select: { image: true } },
      storyBlocks: { select: { image: true } },
    },
  });

  if (!project) {
    revalidatePath(projectAdminPath);
    return;
  }

  await prisma.$transaction([
    prisma.projectRelated.deleteMany({
      where: {
        OR: [{ projectId: project.id }, { relatedProjectId: project.id }],
      },
    }),
    prisma.project.delete({ where: { id: project.id } }),
  ]);

  await deleteR2PublicUrls([
    project.thumbnail,
    project.detail?.heroImage ?? "",
    project.detail?.floorPlanImage ?? "",
    ...project.spaces.map((space) => space.image),
    ...project.storyBlocks.map((block) => block.image),
  ]);

  revalidateProjectPaths(slug);
}

export async function createDesignSampleDraft(formData: FormData) {
  const title = readString(formData, "title") || "Mẫu thiết kế chưa đặt tên";
  const slug = await uniqueDesignSampleSlug(readString(formData, "slug") || title);
  const status = readStatus(formData);
  const uploadedUrls = await appendUploadedDesignSampleImages(formData, slug);
  let sample: { slug: string };

  try {
    sample = await prisma.$transaction(async (tx) => {
      const createdSample = await tx.designSample.create({
        data: {
          ...designSampleBaseData(formData, title, slug, status),
          detail: {
            create: designDetailData(formData, title),
          },
        },
      });

      await syncDesignSampleCollections(tx, createdSample.id, formData);

      return createdSample;
    });
  } catch (error) {
    await deleteR2PublicUrls(uploadedUrls);
    throw error;
  }

  revalidateDesignSamplePaths(sample.slug);
  redirect(`/admin/mau-thiet-ke/${sample.slug}`);
}

export async function saveDesignSampleDraft(
  currentSlug: string,
  formData: FormData,
) {
  const title = readString(formData, "title") || "Mẫu thiết kế chưa đặt tên";
  const currentSample = await prisma.designSample.findUnique({
    where: { slug: currentSlug },
    select: { id: true },
  });
  const nextSlug = await uniqueDesignSampleSlug(
    readString(formData, "slug") || title,
    currentSample?.id,
  );
  const status = readStatus(formData);
  const uploadedUrls = await appendUploadedDesignSampleImages(formData, nextSlug);
  let sample: { slug: string };

  try {
    sample = await prisma.$transaction(async (tx) => {
      const savedSample = await tx.designSample.upsert({
        where: { slug: currentSlug },
        create: {
          ...designSampleBaseData(formData, title, nextSlug, status),
          detail: {
            create: designDetailData(formData, title),
          },
        },
        update: {
          ...designSampleBaseData(formData, title, nextSlug, status),
          detail: {
            upsert: {
              create: designDetailData(formData, title),
              update: designDetailData(formData, title),
            },
          },
        },
      });

      await syncDesignSampleCollections(tx, savedSample.id, formData);

      return savedSample;
    });
  } catch (error) {
    await deleteR2PublicUrls(uploadedUrls);
    throw error;
  }

  revalidateDesignSamplePaths(currentSlug);
  revalidateDesignSamplePaths(sample.slug);
  redirect(`/admin/mau-thiet-ke/${sample.slug}`);
}

export async function updateDesignSampleStatus(
  slug: string,
  status: ContentStatus,
) {
  await prisma.designSample.update({
    where: { slug },
    data: {
      status,
      publishedAt: status === ContentStatus.published ? new Date() : null,
    },
  });

  revalidateDesignSamplePaths(slug);
}

export async function deleteDesignSample(slug: string) {
  const sample = await prisma.designSample.findUnique({
    where: { slug },
    select: {
      id: true,
      thumbnail: true,
      detail: {
        select: {
          heroImage: true,
          floorPlanImage: true,
        },
      },
      gallery: { select: { image: true } },
      features: { select: { image: true } },
    },
  });

  if (!sample) {
    revalidatePath(designAdminPath);
    return;
  }

  await prisma.$transaction([
    prisma.designSampleRelated.deleteMany({
      where: {
        OR: [{ sampleId: sample.id }, { relatedSampleId: sample.id }],
      },
    }),
    prisma.designSample.delete({ where: { id: sample.id } }),
  ]);

  await deleteR2PublicUrls([
    sample.thumbnail,
    sample.detail?.heroImage ?? "",
    sample.detail?.floorPlanImage ?? "",
    ...sample.gallery.map((item) => item.image),
    ...sample.features.map((feature) => feature.image),
  ]);

  revalidateDesignSamplePaths(slug);
}

export async function seedMockProjects() {
  const seededProjects = await prisma.$transaction(async (tx) => {
    const savedProjects = [];

    for (const [index, project] of mockProjects.entries()) {
      const savedProject = await tx.project.upsert({
        where: { slug: project.slug },
        create: {
          title: project.title,
          slug: project.slug,
          category: projectCategoryMap[project.category],
          location: project.location,
          area: project.area,
          year: project.year,
          style: project.style,
          thumbnail: project.thumbnail,
          summary: project.summary,
          featured: Boolean(project.featured),
          sortOrder: index,
          status:
            project.status === "published"
              ? ContentStatus.published
              : ContentStatus.draft,
          publishedAt:
            project.status === "published" ? new Date() : null,
          detail: {
            create: seedProjectDetail(project),
          },
        },
        update: {
          title: project.title,
          category: projectCategoryMap[project.category],
          location: project.location,
          area: project.area,
          year: project.year,
          style: project.style,
          thumbnail: project.thumbnail,
          summary: project.summary,
          featured: Boolean(project.featured),
          sortOrder: index,
          status:
            project.status === "published"
              ? ContentStatus.published
              : ContentStatus.draft,
          publishedAt:
            project.status === "published" ? new Date() : null,
          detail: {
            upsert: {
              create: seedProjectDetail(project),
              update: seedProjectDetail(project),
            },
          },
        },
      });

      await replaceSeedProjectCollections(tx, savedProject.id, project);
      savedProjects.push(savedProject);
    }

    await replaceSeedProjectRelations(tx);

    return savedProjects;
  });

  revalidatePath(projectAdminPath);
  revalidatePath(projectPublicPath);
  revalidatePath("/");

  for (const project of seededProjects) {
    revalidatePath(`${projectPublicPath}/${project.slug}`);
  }
}

export async function seedMockDesignSamples() {
  const seededSamples = await prisma.$transaction(async (tx) => {
    const savedSamples = [];

    for (const [index, sample] of mockDesignSamples.entries()) {
      const savedSample = await tx.designSample.upsert({
        where: { slug: sample.slug },
        create: {
          title: sample.title,
          slug: sample.slug,
          category: designCategoryMap[sample.category],
          type: sample.type,
          style: sample.style,
          area: sample.area ?? null,
          thumbnail: sample.thumbnail,
          summary: sample.summary,
          featured: Boolean(sample.featured),
          sortOrder: index,
          status:
            sample.status === "published"
              ? ContentStatus.published
              : ContentStatus.draft,
          publishedAt:
            sample.status === "published" ? new Date() : null,
          detail: {
            create: seedDesignDetail(sample),
          },
        },
        update: {
          title: sample.title,
          category: designCategoryMap[sample.category],
          type: sample.type,
          style: sample.style,
          area: sample.area ?? null,
          thumbnail: sample.thumbnail,
          summary: sample.summary,
          featured: Boolean(sample.featured),
          sortOrder: index,
          status:
            sample.status === "published"
              ? ContentStatus.published
              : ContentStatus.draft,
          publishedAt:
            sample.status === "published" ? new Date() : null,
          detail: {
            upsert: {
              create: seedDesignDetail(sample),
              update: seedDesignDetail(sample),
            },
          },
        },
      });

      await replaceSeedDesignCollections(tx, savedSample.id, sample);
      savedSamples.push(savedSample);
    }

    await replaceSeedDesignRelations(tx);

    return savedSamples;
  });

  revalidatePath(designAdminPath);
  revalidatePath(designPublicPath);
  revalidatePath("/");

  for (const sample of seededSamples) {
    revalidatePath(`${designPublicPath}/${sample.slug}`);
  }
}

export async function seedMockContent() {
  await seedMockProjects();
  await seedMockDesignSamples();
}

function projectBaseData(
  formData: FormData,
  title: string,
  slug: string,
  status: ContentStatus,
) {
  return {
    title,
    slug,
    category:
      projectCategoryMap[readString(formData, "category")] ??
      ProjectCategory.apartment,
    location: readString(formData, "location") || "Hà Nội",
    area: readString(formData, "area") || "Đang cập nhật",
    year: readString(formData, "year") || new Date().getFullYear().toString(),
    style: readString(formData, "style") || "Đang cập nhật",
    thumbnail: readString(formData, "thumbnail") || fallbackImage,
    summary:
      readString(formData, "summary") || "Thông tin dự án đang được cập nhật.",
    featured: formData.get("featured") === "on",
    status,
    publishedAt: status === ContentStatus.published ? new Date() : null,
  };
}

function projectDetailData(formData: FormData, title: string) {
  return {
    eyebrow: readString(formData, "eyebrow") || "Dự án nội thất",
    displayTitle: readString(formData, "displayTitle") || title,
    italicTitle: readString(formData, "italicTitle") || "",
    heroImage: readString(formData, "heroImage") || readString(formData, "thumbnail") || fallbackImage,
    description: readString(formData, "description") || "Thông tin chi tiết đang được cập nhật.",
    bedrooms: readString(formData, "bedrooms") || null,
    bathrooms: readString(formData, "bathrooms") || null,
    duration: readString(formData, "duration") || null,
    scope: readString(formData, "scope") || "Thiết kế & thi công nội thất",
    overviewTitle: readString(formData, "overviewTitle") || title,
    overviewParagraphs: splitParagraphs(readString(formData, "overviewParagraphs")),
    floorPlanImage: readString(formData, "floorPlanImage") || null,
    seoTitle: readString(formData, "seoTitle") || null,
    seoDescription: readString(formData, "seoDescription") || null,
  };
}

async function syncProjectCollections(
  tx: Prisma.TransactionClient,
  projectId: string,
  formData: FormData,
) {
  await Promise.all([
    tx.projectRelated.deleteMany({ where: { projectId } }),
    tx.projectFloorPlanNote.deleteMany({ where: { projectId } }),
    tx.projectStoryBlock.deleteMany({ where: { projectId } }),
    tx.projectSpace.deleteMany({ where: { projectId } }),
    tx.projectInfoRow.deleteMany({ where: { projectId } }),
    tx.projectMetric.deleteMany({ where: { projectId } }),
  ]);

  await tx.projectMetric.createMany({
    data: defaultProjectMetrics(formData, projectId),
  });
  await tx.projectInfoRow.createMany({
    data: defaultProjectInfoRows(formData, projectId),
  });

  const spaces = readProjectSpaces(formData, projectId);
  if (spaces.length > 0) {
    await tx.projectSpace.createMany({ data: spaces });
  }

  const storyBlocks = readProjectStoryBlocks(formData, projectId);
  if (storyBlocks.length > 0) {
    await tx.projectStoryBlock.createMany({ data: storyBlocks });
  }

  const floorPlanNotes = readProjectFloorPlanNotes(formData, projectId);
  if (floorPlanNotes.length > 0) {
    await tx.projectFloorPlanNote.createMany({ data: floorPlanNotes });
  }

  const relatedSlugs = uniqueValues(readAllStrings(formData, "relatedProjectSlug"));
  if (relatedSlugs.length === 0) {
    return;
  }

  const relatedProjects = await tx.project.findMany({
    where: {
      slug: { in: relatedSlugs },
      id: { not: projectId },
    },
    select: {
      id: true,
      slug: true,
    },
  });
  const relatedBySlug = new Map(
    relatedProjects.map((project) => [project.slug, project.id]),
  );
  const relatedRows = relatedSlugs
    .map((slug, index) => {
      const relatedProjectId = relatedBySlug.get(slug);

      return relatedProjectId
        ? {
            projectId,
            relatedProjectId,
            sortOrder: index,
          }
        : null;
    })
    .filter((row): row is NonNullable<typeof row> => Boolean(row));

  if (relatedRows.length > 0) {
    await tx.projectRelated.createMany({ data: relatedRows });
  }
}

function seedProjectDetail(project: (typeof mockProjects)[number]) {
  const detail = project.detail;

  return {
    eyebrow: detail?.eyebrow ?? project.category,
    displayTitle: detail?.displayTitle ?? project.title,
    italicTitle: detail?.italicTitle ?? "",
    heroImage: detail?.heroImage ?? project.thumbnail,
    description: detail?.description ?? project.summary,
    bedrooms: detail?.bedrooms ?? null,
    bathrooms: detail?.bathrooms ?? null,
    duration: detail?.duration ?? null,
    scope: detail?.scope ?? "Thiết kế & thi công nội thất",
    overviewTitle: detail?.overviewTitle ?? project.title,
    overviewParagraphs: detail?.overviewParagraphs ?? [project.summary],
    floorPlanImage: detail?.floorPlanImage ?? null,
    seoTitle: detail?.seoTitle ?? null,
    seoDescription: detail?.seoDescription ?? null,
  };
}

async function replaceSeedProjectCollections(
  tx: Prisma.TransactionClient,
  projectId: string,
  project: (typeof mockProjects)[number],
) {
  const detail = project.detail;

  await Promise.all([
    tx.projectRelated.deleteMany({ where: { projectId } }),
    tx.projectFloorPlanNote.deleteMany({ where: { projectId } }),
    tx.projectStoryBlock.deleteMany({ where: { projectId } }),
    tx.projectSpace.deleteMany({ where: { projectId } }),
    tx.projectInfoRow.deleteMany({ where: { projectId } }),
    tx.projectMetric.deleteMany({ where: { projectId } }),
  ]);

  const metrics =
    detail?.metrics ?? [
      { label: "Diện tích", value: project.area },
      { label: "Hạng mục", value: project.category },
      { label: "Thời gian", value: detail?.duration ?? "Đang cập nhật" },
      { label: "Phong cách", value: project.style },
    ];
  await tx.projectMetric.createMany({
    data: metrics.map((metric, index) => ({
      projectId,
      ...metric,
      sortOrder: index,
    })),
  });

  const infoRows =
    detail?.infoRows ?? [
      { label: "Vị trí", value: project.location },
      { label: "Diện tích", value: project.area },
      { label: "Hạng mục", value: project.category },
      { label: "Năm hoàn thiện", value: project.year },
    ];
  await tx.projectInfoRow.createMany({
    data: infoRows.map((row, index) => ({
      projectId,
      ...row,
      sortOrder: index,
    })),
  });

  if (detail?.spaces.length) {
    await tx.projectSpace.createMany({
      data: detail.spaces.map((space, index) => ({
        projectId,
        ...space,
        sortOrder: index,
      })),
    });
  }

  if (detail?.storyBlocks.length) {
    await tx.projectStoryBlock.createMany({
      data: detail.storyBlocks.map((block, index) => ({
        projectId,
        index: block.index,
        title: block.title,
        description: block.description,
        image: block.image,
        imageSide:
          block.imageSide === ImageSide.left ? ImageSide.left : ImageSide.right,
        sortOrder: index,
      })),
    });
  }

  if (detail?.floorPlanNotes.length) {
    await tx.projectFloorPlanNote.createMany({
      data: detail.floorPlanNotes.map((note, index) => ({
        projectId,
        ...note,
        sortOrder: index,
      })),
    });
  }
}

async function replaceSeedProjectRelations(tx: Prisma.TransactionClient) {
  const projectsBySlug = await tx.project.findMany({
    where: {
      slug: { in: mockProjects.map((project) => project.slug) },
    },
    select: { id: true, slug: true },
  });
  const idBySlug = new Map(projectsBySlug.map((project) => [project.slug, project.id]));
  const relationRows = mockProjects.flatMap((project) => {
    const projectId = idBySlug.get(project.slug);

    if (!projectId || !project.detail?.relatedProjectSlugs.length) {
      return [];
    }

    return project.detail.relatedProjectSlugs
      .map((slug, index) => {
        const relatedProjectId = idBySlug.get(slug);

        return relatedProjectId
          ? {
              projectId,
              relatedProjectId,
              sortOrder: index,
            }
          : null;
      })
      .filter((row): row is NonNullable<typeof row> => Boolean(row));
  });

  if (relationRows.length > 0) {
    await tx.projectRelated.createMany({
      data: relationRows,
      skipDuplicates: true,
    });
  }
}

function readProjectSpaces(formData: FormData, projectId: string) {
  const titles = readAllStrings(formData, "spaceTitle");
  const images = readAllStrings(formData, "spaceImage");

  return titles
    .map((title, index) => ({
      projectId,
      title,
      image: images[index] || fallbackImage,
      sortOrder: index,
    }))
    .filter((space) => space.title || space.image !== fallbackImage);
}

async function appendUploadedProjectImages(formData: FormData, slug: string) {
  const coverFiles = readUploadedFiles(formData, "coverImageFile");
  const galleryFiles = readUploadedFiles(formData, "galleryImageFiles");
  let coverImage: string | undefined;
  let galleryImages: string[] = [];

  try {
    [coverImage] = await uploadR2Images({
      files: coverFiles.slice(0, 1),
      collection: "projects",
      slug,
      kind: "cover",
    });
    galleryImages = await uploadR2Images({
      files: galleryFiles,
      collection: "projects",
      slug,
      kind: "gallery",
    });
  } catch (error) {
    await deleteR2PublicUrls([
      ...(coverImage ? [coverImage] : []),
      ...galleryImages,
    ]);
    throw error;
  }

  if (coverImage) {
    formData.set("thumbnail", coverImage);
    formData.set("heroImage", coverImage);
  }

  const existingStoryCount = readAllStrings(formData, "storyImage").length;

  for (const [index, image] of galleryImages.entries()) {
    const order = existingStoryCount + index + 1;
    formData.append("storyIndex", String(order).padStart(2, "0"));
    formData.append("storyTitle", `Hình ảnh ${String(order).padStart(2, "0")}`);
    formData.append("storyDescription", "");
    formData.append("storyImage", image);
    formData.append("storyImageSide", "right");
  }

  return [...(coverImage ? [coverImage] : []), ...galleryImages];
}

async function appendUploadedDesignSampleImages(formData: FormData, slug: string) {
  const coverFiles = readUploadedFiles(formData, "coverImageFile");
  const galleryFiles = readUploadedFiles(formData, "galleryImageFiles");
  let coverImage: string | undefined;
  let galleryImages: string[] = [];

  try {
    [coverImage] = await uploadR2Images({
      files: coverFiles.slice(0, 1),
      collection: "design-samples",
      slug,
      kind: "cover",
    });
    galleryImages = await uploadR2Images({
      files: galleryFiles,
      collection: "design-samples",
      slug,
      kind: "gallery",
    });
  } catch (error) {
    await deleteR2PublicUrls([
      ...(coverImage ? [coverImage] : []),
      ...galleryImages,
    ]);
    throw error;
  }

  if (coverImage) {
    formData.set("thumbnail", coverImage);
    formData.set("heroImage", coverImage);
  }

  const existingGalleryCount = readAllStrings(formData, "galleryImage").length;

  for (const [index, image] of galleryImages.entries()) {
    const order = existingGalleryCount + index + 1;
    formData.append("galleryTitle", `Phối cảnh ${String(order).padStart(2, "0")}`);
    formData.append("galleryImage", image);
  }

  return [...(coverImage ? [coverImage] : []), ...galleryImages];
}

function readUploadedFiles(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .filter((value): value is File => value instanceof File && value.size > 0);
}

function defaultProjectMetrics(formData: FormData, projectId: string) {
  return [
    {
      projectId,
      label: "Diện tích",
      value: readString(formData, "area") || "Đang cập nhật",
      sortOrder: 0,
    },
    {
      projectId,
      label: "Hạng mục",
      value: readString(formData, "scope") || readString(formData, "category"),
      sortOrder: 1,
    },
    {
      projectId,
      label: "Thời gian",
      value: readString(formData, "duration") || "Đang cập nhật",
      sortOrder: 2,
    },
    {
      projectId,
      label: "Phong cách",
      value: readString(formData, "style") || "Đang cập nhật",
      sortOrder: 3,
    },
  ];
}

function defaultProjectInfoRows(formData: FormData, projectId: string) {
  return [
    {
      projectId,
      label: "Vị trí",
      value: readString(formData, "location") || "Hà Nội",
      sortOrder: 0,
    },
    {
      projectId,
      label: "Diện tích",
      value: readString(formData, "area") || "Đang cập nhật",
      sortOrder: 1,
    },
    {
      projectId,
      label: "Hạng mục",
      value: readString(formData, "scope") || readString(formData, "category"),
      sortOrder: 2,
    },
    {
      projectId,
      label: "Phòng ngủ",
      value: readString(formData, "bedrooms") || "Đang cập nhật",
      sortOrder: 3,
    },
    {
      projectId,
      label: "Phòng tắm",
      value: readString(formData, "bathrooms") || "Đang cập nhật",
      sortOrder: 4,
    },
    {
      projectId,
      label: "Năm hoàn thiện",
      value: readString(formData, "year") || new Date().getFullYear().toString(),
      sortOrder: 5,
    },
  ];
}

function readProjectStoryBlocks(formData: FormData, projectId: string) {
  const indexes = readAllStrings(formData, "storyIndex");
  const titles = readAllStrings(formData, "storyTitle");
  const descriptions = readAllStrings(formData, "storyDescription");
  const images = readAllStrings(formData, "storyImage");
  const imageSides = readAllStrings(formData, "storyImageSide");

  return titles
    .map((title, index) => ({
      projectId,
      index: indexes[index] || String(index + 1).padStart(2, "0"),
      title,
      description: descriptions[index] || "Thông tin đang được cập nhật.",
      image: images[index] || fallbackImage,
      imageSide:
        imageSides[index] === ImageSide.left ? ImageSide.left : ImageSide.right,
      sortOrder: index,
    }))
    .filter((block) => block.title || block.image !== fallbackImage);
}

function readProjectFloorPlanNotes(formData: FormData, projectId: string) {
  const labels = readAllStrings(formData, "floorNoteLabel");
  const values = readAllStrings(formData, "floorNoteValue");

  return labels
    .map((label, index) => ({
      projectId,
      label,
      value: values[index] || "Thông tin đang được cập nhật.",
      sortOrder: index,
    }))
    .filter((note) => note.label || note.value !== "Thông tin đang được cập nhật.");
}

function designSampleBaseData(
  formData: FormData,
  title: string,
  slug: string,
  status: ContentStatus,
) {
  return {
    title,
    slug,
    category:
      designCategoryMap[readString(formData, "category")] ??
      DesignSampleCategory.apartment,
    type: readString(formData, "type") || "Đang cập nhật",
    style: readString(formData, "style") || "Đang cập nhật",
    area: readString(formData, "area") || null,
    thumbnail: readString(formData, "thumbnail") || fallbackImage,
    summary:
      readString(formData, "summary") ||
      "Thông tin mẫu thiết kế đang được cập nhật.",
    featured: formData.get("featured") === "on",
    status,
    publishedAt: status === ContentStatus.published ? new Date() : null,
  };
}

function designDetailData(formData: FormData, title: string) {
  return {
    eyebrow: readString(formData, "eyebrow") || "Mẫu thiết kế nội thất",
    displayTitle: readString(formData, "displayTitle") || "Mẫu thiết kế",
    italicTitle: readString(formData, "italicTitle") || title,
    heroImage: readString(formData, "heroImage") || readString(formData, "thumbnail") || fallbackImage,
    description: readString(formData, "description") || "Thông tin chi tiết đang được cập nhật.",
    propertyType: readString(formData, "propertyType") || readString(formData, "type") || "Đang cập nhật",
    bedrooms: readString(formData, "bedrooms") || null,
    bathrooms: readString(formData, "bathrooms") || null,
    budgetRange: readString(formData, "budgetRange") || null,
    suitableFor: readString(formData, "suitableFor") || null,
    overviewTitle: readString(formData, "overviewTitle") || title,
    overviewParagraphs: splitParagraphs(readString(formData, "overviewParagraphs")),
    floorPlanImage: readString(formData, "floorPlanImage") || null,
    seoTitle: readString(formData, "seoTitle") || null,
    seoDescription: readString(formData, "seoDescription") || null,
  };
}

async function syncDesignSampleCollections(
  tx: Prisma.TransactionClient,
  sampleId: string,
  formData: FormData,
) {
  const packages = await tx.suggestedPackage.findMany({
    where: { sampleId },
    select: { id: true },
  });

  await Promise.all([
    packages.length > 0
      ? tx.suggestedPackageItem.deleteMany({
          where: { packageId: { in: packages.map((item) => item.id) } },
        })
      : Promise.resolve(),
    tx.designSampleRelated.deleteMany({ where: { sampleId } }),
    tx.designFloorPlanNote.deleteMany({ where: { sampleId } }),
    tx.designFeature.deleteMany({ where: { sampleId } }),
    tx.designSampleGalleryItem.deleteMany({ where: { sampleId } }),
    tx.designSampleInfoRow.deleteMany({ where: { sampleId } }),
    tx.designSampleMetric.deleteMany({ where: { sampleId } }),
  ]);
  await tx.suggestedPackage.deleteMany({ where: { sampleId } });

  await tx.designSampleMetric.createMany({
    data: defaultDesignMetrics(formData, sampleId),
  });
  await tx.designSampleInfoRow.createMany({
    data: defaultDesignInfoRows(formData, sampleId),
  });

  const gallery = readDesignGallery(formData, sampleId);
  if (gallery.length > 0) {
    await tx.designSampleGalleryItem.createMany({ data: gallery });
  }

  const features = readDesignFeatures(formData, sampleId);
  if (features.length > 0) {
    await tx.designFeature.createMany({ data: features });
  }

  const floorPlanNotes = readDesignFloorPlanNotes(formData, sampleId);
  if (floorPlanNotes.length > 0) {
    await tx.designFloorPlanNote.createMany({ data: floorPlanNotes });
  }

  const packageRows = readDesignPackages(formData, sampleId);
  for (const packageRow of packageRows) {
    const createdPackage = await tx.suggestedPackage.create({
      data: {
        sampleId,
        title: packageRow.title,
        price: packageRow.price,
        featured: packageRow.featured,
        sortOrder: packageRow.sortOrder,
      },
    });

    if (packageRow.items.length > 0) {
      await tx.suggestedPackageItem.createMany({
        data: packageRow.items.map((content, index) => ({
          packageId: createdPackage.id,
          content,
          sortOrder: index,
        })),
      });
    }
  }

  const relatedSlugs = uniqueValues(readAllStrings(formData, "relatedSampleSlug"));
  if (relatedSlugs.length === 0) {
    return;
  }

  const relatedSamples = await tx.designSample.findMany({
    where: {
      slug: { in: relatedSlugs },
      id: { not: sampleId },
    },
    select: {
      id: true,
      slug: true,
    },
  });
  const relatedBySlug = new Map(
    relatedSamples.map((sample) => [sample.slug, sample.id]),
  );
  const relatedRows = relatedSlugs
    .map((slug, index) => {
      const relatedSampleId = relatedBySlug.get(slug);

      return relatedSampleId
        ? {
            sampleId,
            relatedSampleId,
            sortOrder: index,
          }
        : null;
    })
    .filter((row): row is NonNullable<typeof row> => Boolean(row));

  if (relatedRows.length > 0) {
    await tx.designSampleRelated.createMany({ data: relatedRows });
  }
}

function seedDesignDetail(sample: (typeof mockDesignSamples)[number]) {
  const detail = sample.detail;

  return {
    eyebrow: detail?.eyebrow ?? "Mẫu thiết kế nội thất",
    displayTitle: detail?.displayTitle ?? "Mẫu thiết kế",
    italicTitle: detail?.italicTitle ?? sample.title,
    heroImage: detail?.heroImage ?? sample.thumbnail,
    description: detail?.description ?? sample.summary,
    propertyType: detail?.propertyType ?? sample.type,
    bedrooms: detail?.bedrooms ?? null,
    bathrooms: detail?.bathrooms ?? null,
    budgetRange: detail?.budgetRange ?? null,
    suitableFor: detail?.suitableFor ?? null,
    overviewTitle: detail?.overviewTitle ?? sample.title,
    overviewParagraphs: detail?.overviewParagraphs ?? [sample.summary],
    floorPlanImage: detail?.floorPlanImage ?? null,
    seoTitle: detail?.seoTitle ?? null,
    seoDescription: detail?.seoDescription ?? null,
  };
}

async function replaceSeedDesignCollections(
  tx: Prisma.TransactionClient,
  sampleId: string,
  sample: (typeof mockDesignSamples)[number],
) {
  const detail = sample.detail;
  const packages = await tx.suggestedPackage.findMany({
    where: { sampleId },
    select: { id: true },
  });

  await Promise.all([
    packages.length > 0
      ? tx.suggestedPackageItem.deleteMany({
          where: { packageId: { in: packages.map((item) => item.id) } },
        })
      : Promise.resolve(),
    tx.designSampleRelated.deleteMany({ where: { sampleId } }),
    tx.designFloorPlanNote.deleteMany({ where: { sampleId } }),
    tx.designFeature.deleteMany({ where: { sampleId } }),
    tx.designSampleGalleryItem.deleteMany({ where: { sampleId } }),
    tx.designSampleInfoRow.deleteMany({ where: { sampleId } }),
    tx.designSampleMetric.deleteMany({ where: { sampleId } }),
  ]);
  await tx.suggestedPackage.deleteMany({ where: { sampleId } });

  const metrics =
    detail?.metrics ?? [
      { label: "Diện tích", value: sample.area ?? "Theo hiện trạng" },
      { label: "Phong cách", value: sample.style },
      { label: "Phù hợp", value: sample.type },
      { label: "Mức đầu tư", value: detail?.budgetRange ?? "Theo nhu cầu" },
    ];
  await tx.designSampleMetric.createMany({
    data: metrics.map((metric, index) => ({
      sampleId,
      ...metric,
      sortOrder: index,
    })),
  });

  const infoRows =
    detail?.infoRows ?? [
      { label: "Loại hình", value: sample.type },
      { label: "Diện tích", value: sample.area ?? "Theo hiện trạng" },
      { label: "Phong cách", value: sample.style },
    ];
  await tx.designSampleInfoRow.createMany({
    data: infoRows.map((row, index) => ({
      sampleId,
      ...row,
      sortOrder: index,
    })),
  });

  if (detail?.gallery.length) {
    await tx.designSampleGalleryItem.createMany({
      data: detail.gallery.map((item, index) => ({
        sampleId,
        ...item,
        sortOrder: index,
      })),
    });
  }

  if (detail?.features.length) {
    await tx.designFeature.createMany({
      data: detail.features.map((feature, index) => ({
        sampleId,
        index: feature.index,
        title: feature.title,
        description: feature.description,
        image: feature.image,
        imageSide:
          feature.imageSide === ImageSide.left ? ImageSide.left : ImageSide.right,
        sortOrder: index,
      })),
    });
  }

  if (detail?.floorPlanNotes.length) {
    await tx.designFloorPlanNote.createMany({
      data: detail.floorPlanNotes.map((note, index) => ({
        sampleId,
        ...note,
        sortOrder: index,
      })),
    });
  }

  for (const [index, packageRow] of (
    detail?.suggestedPackages ?? []
  ).entries()) {
    const createdPackage = await tx.suggestedPackage.create({
      data: {
        sampleId,
        title: packageRow.title,
        price: packageRow.price,
        featured: Boolean(packageRow.featured),
        sortOrder: index,
      },
    });

    if (packageRow.items.length > 0) {
      await tx.suggestedPackageItem.createMany({
        data: packageRow.items.map((content, itemIndex) => ({
          packageId: createdPackage.id,
          content,
          sortOrder: itemIndex,
        })),
      });
    }
  }
}

async function replaceSeedDesignRelations(tx: Prisma.TransactionClient) {
  const samplesBySlug = await tx.designSample.findMany({
    where: {
      slug: { in: mockDesignSamples.map((sample) => sample.slug) },
    },
    select: { id: true, slug: true },
  });
  const idBySlug = new Map(samplesBySlug.map((sample) => [sample.slug, sample.id]));
  const relationRows = mockDesignSamples.flatMap((sample) => {
    const sampleId = idBySlug.get(sample.slug);

    if (!sampleId || !sample.detail?.relatedSampleSlugs.length) {
      return [];
    }

    return sample.detail.relatedSampleSlugs
      .map((slug, index) => {
        const relatedSampleId = idBySlug.get(slug);

        return relatedSampleId
          ? {
              sampleId,
              relatedSampleId,
              sortOrder: index,
            }
          : null;
      })
      .filter((row): row is NonNullable<typeof row> => Boolean(row));
  });

  if (relationRows.length > 0) {
    await tx.designSampleRelated.createMany({
      data: relationRows,
      skipDuplicates: true,
    });
  }
}

function readDesignGallery(formData: FormData, sampleId: string) {
  const titles = readAllStrings(formData, "galleryTitle");
  const images = readAllStrings(formData, "galleryImage");

  return titles
    .map((title, index) => ({
      sampleId,
      title,
      image: images[index] || fallbackImage,
      sortOrder: index,
    }))
    .filter((item) => item.title || item.image !== fallbackImage);
}

function defaultDesignMetrics(formData: FormData, sampleId: string) {
  return [
    {
      sampleId,
      label: "Diện tích",
      value: readString(formData, "area") || "Theo hiện trạng",
      sortOrder: 0,
    },
    {
      sampleId,
      label: "Phong cách",
      value: readString(formData, "style") || "Đang cập nhật",
      sortOrder: 1,
    },
    {
      sampleId,
      label: "Phù hợp",
      value: readString(formData, "suitableFor") || readString(formData, "type"),
      sortOrder: 2,
    },
    {
      sampleId,
      label: "Mức đầu tư",
      value: readString(formData, "budgetRange") || "Theo nhu cầu",
      sortOrder: 3,
    },
  ];
}

function defaultDesignInfoRows(formData: FormData, sampleId: string) {
  return [
    {
      sampleId,
      label: "Loại hình",
      value: readString(formData, "propertyType") || readString(formData, "type"),
      sortOrder: 0,
    },
    {
      sampleId,
      label: "Diện tích",
      value: readString(formData, "area") || "Theo hiện trạng",
      sortOrder: 1,
    },
    {
      sampleId,
      label: "Số phòng ngủ",
      value: readString(formData, "bedrooms") || "Đang cập nhật",
      sortOrder: 2,
    },
    {
      sampleId,
      label: "Số phòng tắm",
      value: readString(formData, "bathrooms") || "Đang cập nhật",
      sortOrder: 3,
    },
    {
      sampleId,
      label: "Phong cách",
      value: readString(formData, "style") || "Đang cập nhật",
      sortOrder: 4,
    },
    {
      sampleId,
      label: "Đối tượng phù hợp",
      value: readString(formData, "suitableFor") || "Đang cập nhật",
      sortOrder: 5,
    },
    {
      sampleId,
      label: "Mức đầu tư",
      value: readString(formData, "budgetRange") || "Theo nhu cầu",
      sortOrder: 6,
    },
  ];
}

function readDesignFeatures(formData: FormData, sampleId: string) {
  const indexes = readAllStrings(formData, "featureIndex");
  const titles = readAllStrings(formData, "featureTitle");
  const descriptions = readAllStrings(formData, "featureDescription");
  const images = readAllStrings(formData, "featureImage");
  const imageSides = readAllStrings(formData, "featureImageSide");

  return titles
    .map((title, index) => ({
      sampleId,
      index: indexes[index] || String(index + 1).padStart(2, "0"),
      title,
      description: descriptions[index] || "Thông tin đang được cập nhật.",
      image: images[index] || fallbackImage,
      imageSide:
        imageSides[index] === ImageSide.left ? ImageSide.left : ImageSide.right,
      sortOrder: index,
    }))
    .filter((feature) => feature.title || feature.image !== fallbackImage);
}

function readDesignFloorPlanNotes(formData: FormData, sampleId: string) {
  const labels = readAllStrings(formData, "designFloorNoteLabel");
  const values = readAllStrings(formData, "designFloorNoteValue");

  return labels
    .map((label, index) => ({
      sampleId,
      label,
      value: values[index] || "Thông tin đang được cập nhật.",
      sortOrder: index,
    }))
    .filter((note) => note.label || note.value !== "Thông tin đang được cập nhật.");
}

function readDesignPackages(formData: FormData, sampleId: string) {
  const titles = readAllStrings(formData, "packageTitle");
  const prices = readAllStrings(formData, "packagePrice");
  const itemGroups = readAllStrings(formData, "packageItems");
  const featuredIndexes = new Set(readAllStrings(formData, "packageFeatured"));

  return titles
    .map((title, index) => ({
      sampleId,
      title,
      price: prices[index] || "Đang cập nhật",
      featured: featuredIndexes.has(String(index)),
      items: splitLines(itemGroups[index] ?? ""),
      sortOrder: index,
    }))
    .filter((packageRow) => packageRow.title);
}

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readAllStrings(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .map((value) => (typeof value === "string" ? value.trim() : ""))
    .filter(Boolean);
}

function uniqueValues(values: string[]) {
  return Array.from(new Set(values));
}

function readStatus(formData: FormData) {
  return readString(formData, "status") === ContentStatus.published
    ? ContentStatus.published
    : ContentStatus.draft;
}

function splitParagraphs(value: string) {
  const paragraphs = value
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  return paragraphs.length > 0 ? paragraphs : ["Thông tin đang được cập nhật."];
}

function splitLines(value: string) {
  return value
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugify(value: string) {
  const slug = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "noi-dung-moi";
}

async function uniqueProjectSlug(value: string, ignoreProjectId?: string) {
  const baseSlug = slugify(value);
  let slug = baseSlug;
  let index = 2;

  while (true) {
    const matchingProject = await prisma.project.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!matchingProject || matchingProject.id === ignoreProjectId) {
      return slug;
    }

    slug = `${baseSlug}-${index}`;
    index += 1;
  }
}

async function uniqueDesignSampleSlug(value: string, ignoreSampleId?: string) {
  const baseSlug = slugify(value);
  let slug = baseSlug;
  let index = 2;

  while (true) {
    const matchingSample = await prisma.designSample.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!matchingSample || matchingSample.id === ignoreSampleId) {
      return slug;
    }

    slug = `${baseSlug}-${index}`;
    index += 1;
  }
}
