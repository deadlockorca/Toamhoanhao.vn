import importedArticles from "./beautiful-home-article-blocks.json";

export type BeautifulHomeBlock =
  | { type: "paragraph" | "bullet"; text: string }
  | { type: "image"; src: string; alt: string };

export type BeautifulHomeSection = {
  title: string;
  blocks: BeautifulHomeBlock[];
};

export type BeautifulHomeArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  legacyUrl: string;
  sections: BeautifulHomeSection[];
};

const articleBySlug = importedArticles as Record<string, BeautifulHomeArticle>;

export const beautifulHomeListingHref = "/kien-thuc/kien-thuc-nha-dep";

export const beautifulHomeArticles = Object.values(articleBySlug).sort((left, right) => {
  const toTime = (value: string) => {
    const [day, month, year] = value.split("/").map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  return toTime(right.date) - toTime(left.date);
});

export function getBeautifulHomeArticle(slug: string) {
  return articleBySlug[slug];
}

export function getBeautifulHomeArticleHref(slug: string) {
  return `${beautifulHomeListingHref}/${slug}`;
}
