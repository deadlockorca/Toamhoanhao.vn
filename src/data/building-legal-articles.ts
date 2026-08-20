import importedArticles from "./building-legal-article-blocks.json";

export type BuildingLegalArticleBlock =
  | { type: "paragraph" | "bullet"; text: string }
  | { type: "image"; src: string; alt: string };

export type BuildingLegalArticleSection = {
  title: string;
  blocks: BuildingLegalArticleBlock[];
};

export type BuildingLegalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  legacyUrl: string;
  sections: BuildingLegalArticleSection[];
};

const articleBySlug = importedArticles as Record<string, BuildingLegalArticle>;

export const buildingLegalListingHref = "/kien-thuc/phap-ly-xay-dung";
export const buildingLegalArticles = Object.values(articleBySlug);

export function getBuildingLegalArticle(slug: string) {
  return articleBySlug[slug];
}

export function getBuildingLegalArticleHref(slug: string) {
  return `${buildingLegalListingHref}/${slug}`;
}
