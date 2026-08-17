import type { DesignSample } from "@/data/design-samples";
import type { Project } from "@/data/projects";

type DbProject = {
  title: string;
  slug: string;
  category: string;
  location: string;
  area: string;
  year: string;
  style: string;
  thumbnail: string;
  summary: string;
  featured: boolean;
  status: string;
  detail: DbProjectDetail | null;
  metrics?: Array<{ label: string; value: string }>;
  infoRows?: Array<{ label: string; value: string }>;
  spaces?: Array<{ title: string; image: string }>;
  storyBlocks?: Array<{
    index: string;
    title: string;
    description: string;
    image: string;
    imageSide: "left" | "right";
  }>;
  floorPlanNotes?: Array<{ label: string; value: string }>;
  relatedProjects?: Array<{
    relatedProject: {
      slug: string;
    };
  }>;
};

type DbProjectDetail = {
  eyebrow: string;
  displayTitle: string;
  italicTitle: string;
  heroImage: string;
  description: string;
  bedrooms: string | null;
  bathrooms: string | null;
  duration: string | null;
  scope: string;
  overviewTitle: string;
  overviewParagraphs: unknown;
  floorPlanImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

type DbDesignSample = {
  title: string;
  slug: string;
  category: string;
  type: string;
  style: string;
  area: string | null;
  thumbnail: string;
  summary: string;
  featured: boolean;
  status: string;
  detail: DbDesignSampleDetail | null;
  metrics?: Array<{ label: string; value: string }>;
  infoRows?: Array<{ label: string; value: string }>;
  gallery?: Array<{ title: string; image: string }>;
  features?: Array<{
    index: string;
    title: string;
    description: string;
    image: string;
    imageSide: "left" | "right";
  }>;
  floorPlanNotes?: Array<{ label: string; value: string }>;
  packages?: Array<{
    title: string;
    price: string;
    featured: boolean;
    items: Array<{ content: string }>;
  }>;
  relatedSamples?: Array<{
    relatedSample: {
      slug: string;
    };
  }>;
};

type DbDesignSampleDetail = {
  eyebrow: string;
  displayTitle: string;
  italicTitle: string;
  heroImage: string;
  description: string;
  propertyType: string;
  bedrooms: string | null;
  bathrooms: string | null;
  budgetRange: string | null;
  suitableFor: string | null;
  overviewTitle: string;
  overviewParagraphs: unknown;
  floorPlanImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

const projectCategoryLabels: Record<string, Project["category"]> = {
  apartment: "Căn hộ",
  villa: "Biệt thự",
  townhouse: "Nhà phố",
  office: "Văn phòng",
  businessSpace: "Không gian kinh doanh",
  turnkeyInterior: "Nội thất trọn gói",
};

const designCategoryLabels: Record<string, DesignSample["category"]> = {
  apartment: "Chung cư",
  townhouse: "Nhà phố",
  villa: "Biệt thự",
  livingRoom: "Phòng khách",
  bedroom: "Phòng ngủ",
  kitchen: "Phòng bếp",
  kitchenCabinet: "Tủ bếp",
  childrenRoom: "Phòng trẻ em",
};

export function mapDbProjectToProject(project: DbProject): Project {
  return {
    title: project.title,
    slug: project.slug,
    category: projectCategoryLabels[project.category] ?? "Căn hộ",
    location: project.location,
    area: project.area,
    year: project.year,
    style: project.style,
    thumbnail: project.thumbnail,
    summary: project.summary,
    featured: project.featured,
    status: project.status === "published" ? "published" : "draft",
    detail: project.detail
      ? {
          eyebrow: project.detail.eyebrow,
          displayTitle: project.detail.displayTitle,
          italicTitle: project.detail.italicTitle,
          heroImage: project.detail.heroImage,
          description: project.detail.description,
          bedrooms: project.detail.bedrooms ?? "",
          bathrooms: project.detail.bathrooms ?? "",
          duration: project.detail.duration ?? "",
          scope: project.detail.scope,
          metrics: project.metrics ?? [],
          overviewTitle: project.detail.overviewTitle,
          overviewParagraphs: readJsonStringArray(
            project.detail.overviewParagraphs,
          ),
          infoRows: project.infoRows ?? [],
          spaces: project.spaces ?? [],
          storyBlocks:
            project.storyBlocks?.map((block, index, collection) => ({
              ...block,
              total: String(collection.length).padStart(2, "0"),
              index: block.index || String(index + 1).padStart(2, "0"),
            })) ?? [],
          floorPlanImage: project.detail.floorPlanImage ?? "",
          floorPlanNotes: project.floorPlanNotes ?? [],
          relatedProjectSlugs:
            project.relatedProjects?.map((item) => item.relatedProject.slug) ?? [],
          seoTitle: project.detail.seoTitle ?? "",
          seoDescription: project.detail.seoDescription ?? "",
        }
      : undefined,
  };
}

export function mapDbDesignSampleToDesignSample(
  sample: DbDesignSample,
): DesignSample {
  return {
    title: sample.title,
    slug: sample.slug,
    category: designCategoryLabels[sample.category] ?? "Chung cư",
    type: sample.type,
    style: sample.style,
    area: sample.area ?? undefined,
    thumbnail: sample.thumbnail,
    summary: sample.summary,
    featured: sample.featured,
    status: sample.status === "published" ? "published" : "draft",
    detail: sample.detail
      ? {
          eyebrow: sample.detail.eyebrow,
          displayTitle: sample.detail.displayTitle,
          italicTitle: sample.detail.italicTitle,
          heroImage: sample.detail.heroImage,
          description: sample.detail.description,
          propertyType: sample.detail.propertyType,
          bedrooms: sample.detail.bedrooms ?? undefined,
          bathrooms: sample.detail.bathrooms ?? undefined,
          budgetRange: sample.detail.budgetRange ?? undefined,
          suitableFor: sample.detail.suitableFor ?? "",
          overviewTitle: sample.detail.overviewTitle,
          overviewParagraphs: readJsonStringArray(
            sample.detail.overviewParagraphs,
          ),
          metrics: sample.metrics ?? [],
          infoRows: sample.infoRows ?? [],
          gallery: sample.gallery ?? [],
          features: sample.features ?? [],
          floorPlanImage: sample.detail.floorPlanImage ?? "",
          floorPlanNotes: sample.floorPlanNotes ?? [],
          suggestedPackages:
            sample.packages?.map((item) => ({
              title: item.title,
              price: item.price,
              featured: item.featured,
              items: item.items.map((packageItem) => packageItem.content),
            })) ?? [],
          relatedSampleSlugs:
            sample.relatedSamples?.map((item) => item.relatedSample.slug) ?? [],
          seoTitle: sample.detail.seoTitle ?? "",
          seoDescription: sample.detail.seoDescription ?? "",
        }
      : undefined,
  };
}

function readJsonStringArray(value: unknown) {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value
    : [];
}
