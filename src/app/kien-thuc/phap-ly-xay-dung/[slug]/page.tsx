import { knowledgeGroups } from "@/data/knowledge";
import {
  KnowledgeArticlePage,
  getKnowledgeArticleMetadata,
} from "@/components/knowledge/knowledge-article-page";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return knowledgeGroups["phap-ly-xay-dung"].articles.map(({ slug }) => ({
    slug,
  }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getKnowledgeArticleMetadata("phap-ly-xay-dung", slug, "vi");
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <KnowledgeArticlePage group="phap-ly-xay-dung" slug={slug} />;
}
