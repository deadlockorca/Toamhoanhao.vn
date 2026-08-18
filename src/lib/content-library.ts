import type { DesignSample } from "@/data/design-samples";
import type { Project } from "@/data/projects";

export type LibraryContentType = "project" | "designSample";

export type LibraryCategory =
  | "Căn hộ"
  | "Biệt thự"
  | "Nhà phố"
  | "Văn phòng"
  | "Không gian kinh doanh"
  | "Nội thất trọn gói"
  | "Phòng khách"
  | "Phòng ngủ"
  | "Phòng bếp"
  | "Tủ bếp"
  | "Phòng trẻ em";

const projectCategoryQueryMap = {
  "can-ho": "Căn hộ",
  "biet-thu": "Biệt thự",
  "nha-pho": "Nhà phố",
  "van-phong": "Văn phòng",
  "khong-gian-kinh-doanh": "Không gian kinh doanh",
  "noi-that-tron-goi": "Nội thất trọn gói",
  "phong-khach": "Phòng khách",
  "phong-ngu": "Phòng ngủ",
  "phong-bep": "Phòng bếp",
} as const satisfies Record<string, LibraryCategory>;

export function getProjectCategoryFromQuery(
  value: string | undefined,
): LibraryCategory | undefined {
  if (!value) {
    return undefined;
  }

  return projectCategoryQueryMap[value as keyof typeof projectCategoryQueryMap];
}

export type LibraryItem = {
  contentType: LibraryContentType;
  category: LibraryCategory;
  title: string;
  slug: string;
  href: string;
  thumbnail: string;
  style: string;
  area?: string;
  bedrooms?: string;
  location?: string;
  summary: string;
  featured?: boolean;
};

export const contentTypeFilters = [
  { value: "all", label: "Tất cả" },
  { value: "project", label: "Công trình thực tế" },
  { value: "designSample", label: "Mẫu thiết kế" },
] as const;

export function createContentLibrary(
  projects: Project[],
  designSamples: DesignSample[],
): LibraryItem[] {
  return [
    ...projects.map((project) => ({
      contentType: "project" as const,
      category: project.category,
      title: project.title,
      slug: project.slug,
      href: `/du-an/${project.slug}`,
      thumbnail: project.thumbnail,
      style: project.style,
      area: project.area,
      bedrooms: project.detail?.bedrooms,
      location: project.location,
      summary: project.summary,
      featured: project.featured,
    })),
    ...designSamples.map((sample) => ({
      contentType: "designSample" as const,
      category: designSampleCategoryToLibraryCategory(sample.category),
      title: sample.title,
      slug: sample.slug,
      href: `/mau-thiet-ke/${sample.slug}`,
      thumbnail: sample.thumbnail,
      style: sample.style,
      area: sample.area,
      bedrooms: sample.detail?.bedrooms,
      summary: sample.summary,
      featured: sample.featured,
    })),
  ];
}

function designSampleCategoryToLibraryCategory(
  category: DesignSample["category"],
): LibraryCategory {
  const categories: Record<DesignSample["category"], LibraryCategory> = {
    "Chung cư": "Căn hộ",
    "Nhà phố": "Nhà phố",
    "Biệt thự": "Biệt thự",
    "Phòng khách": "Phòng khách",
    "Phòng ngủ": "Phòng ngủ",
    "Phòng bếp": "Phòng bếp",
    "Tủ bếp": "Tủ bếp",
    "Phòng trẻ em": "Phòng trẻ em",
  };

  return categories[category];
}
