import importedArticles from "./interior-design-experience-article-blocks.json";

export type InteriorDesignExperienceBlock =
  | { type: "paragraph" | "bullet"; text: string }
  | { type: "image"; src: string; alt: string };

export type InteriorDesignExperienceSection = {
  title: string;
  blocks: InteriorDesignExperienceBlock[];
};

export type InteriorDesignExperienceArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  legacyUrl: string;
  sections: InteriorDesignExperienceSection[];
};

const articleBySlug = importedArticles as Record<string, InteriorDesignExperienceArticle>;

export const interiorDesignExperienceListingHref = "/kien-thuc/kinh-nghiem-thiet-ke-noi-that";

export const interiorDesignExperienceArticles = Object.values(articleBySlug);

export function getInteriorDesignExperienceArticle(slug: string) {
  return articleBySlug[slug];
}

export function getInteriorDesignExperienceArticleHref(slug: string) {
  return `${interiorDesignExperienceListingHref}/${slug}`;
}
