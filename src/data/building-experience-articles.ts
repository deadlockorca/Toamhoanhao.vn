import importedArticles from "./building-experience-article-blocks.json";

export type BuildingExperienceBlock =
  | { type: "paragraph" | "bullet"; text: string }
  | { type: "image"; src: string; alt: string };

export type BuildingExperienceContentSection = {
  title: string;
  blocks: BuildingExperienceBlock[];
};

export type BuildingExperienceArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  legacyUrl: string;
  sections: BuildingExperienceContentSection[];
};

const articleOrder = [
  "kinh-nghiem-chon-huong-nha-15",
  "kinh-nghiem-do-be-tong-28",
  "chien-luoc-thiet-ke-nha-co-dien-tich-nho",
  "nhung-luu-y-khi-thi-cong-to-trat-tuong-nha",
  "phong-thuy-xay-nha-14",
  "5-dieu-can-luu-y-khi-thiet-ke-cua-cong-ra-vao",
  "kinh-nghiem-thiet-ke-nha-co-anh-sang-tu-nhien-14-2",
  "kinh-nghiem-thi-cong-nha-mai-thai-1-tang-14",
  "kinh-nghiem-xay-nha-10",
] as const;

const articleBySlug = importedArticles as Record<string, BuildingExperienceArticle>;

export const buildingExperienceListingHref = "/kien-thuc/kinh-nghiem-xay-nha";

export const buildingExperienceArticles = articleOrder
  .map((slug) => articleBySlug[slug])
  .filter((article): article is BuildingExperienceArticle => Boolean(article));

export function getBuildingExperienceArticle(slug: string) {
  return articleBySlug[slug];
}

export function getBuildingExperienceArticleHref(slug: string) {
  return `${buildingExperienceListingHref}/${slug}`;
}
