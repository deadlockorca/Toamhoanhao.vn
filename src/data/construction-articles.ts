import { kitchenSpaceArticles } from "./kitchen-space-articles";
import { livingRoomSpaceArticles } from "./living-room-space-articles";
import { bedroomSpaceArticles } from "./bedroom-space-articles";

export const constructionArticleGroups = {
  "khong-gian-bep": kitchenSpaceArticles,
  "khong-gian-phong-khach": livingRoomSpaceArticles,
  "khong-gian-phong-ngu": bedroomSpaceArticles,
};
export type ConstructionArticleGroup = keyof typeof constructionArticleGroups;
export type ConstructionArticle =
  (typeof constructionArticleGroups)[ConstructionArticleGroup][number];
export const constructionArticles = Object.entries(
  constructionArticleGroups,
).flatMap(([group, articles]) =>
  articles.map((article) => ({
    group: group as ConstructionArticleGroup,
    article,
    path: `/thi-cong-noi-that/${group}/${article.slug}`,
    target: "externalHref" in article ? article.externalHref : undefined,
  })),
);
export function findConstructionArticle(
  group: ConstructionArticleGroup,
  slug: string,
) {
  return constructionArticleGroups[group].find(
    (article) => article.slug === slug,
  );
}
