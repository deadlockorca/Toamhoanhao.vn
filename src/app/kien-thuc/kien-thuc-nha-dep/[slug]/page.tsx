import { knowledgeGroups } from "@/data/knowledge";
import {
  KnowledgeArticlePage,
  getKnowledgeArticleMetadata,
} from "@/components/knowledge/knowledge-article-page";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return knowledgeGroups["kien-thuc-nha-dep"].articles.map(({ slug }) => ({
    slug,
  }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getKnowledgeArticleMetadata("kien-thuc-nha-dep", slug, "vi");
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <KnowledgeArticlePage group="kien-thuc-nha-dep" slug={slug} />;
}
