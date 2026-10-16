import { knowledgeGroups } from "@/data/knowledge";
import {
  KnowledgeArticlePage,
  getKnowledgeArticleMetadata,
} from "@/components/knowledge/knowledge-article-page";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return knowledgeGroups["kinh-nghiem-thiet-ke-noi-that"].articles.map(
    ({ slug }) => ({ slug }),
  );
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getKnowledgeArticleMetadata(
    "kinh-nghiem-thiet-ke-noi-that",
    slug,
    "vi",
  );
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <KnowledgeArticlePage group="kinh-nghiem-thiet-ke-noi-that" slug={slug} />
  );
}
