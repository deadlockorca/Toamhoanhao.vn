import { constructionArticleGroups } from "@/data/construction-articles";
import {
  ConstructionArticlePage,
  getConstructionArticleMetadata,
} from "@/components/interior-space/construction-article-page";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return constructionArticleGroups["khong-gian-phong-khach"]
    .filter((a) => !("externalHref" in a && a.externalHref))
    .map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getConstructionArticleMetadata("khong-gian-phong-khach", slug, "vi");
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ConstructionArticlePage group="khong-gian-phong-khach" slug={slug} />;
}
