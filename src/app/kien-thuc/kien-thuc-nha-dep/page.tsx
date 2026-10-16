import { BeautifulHomeKnowledgePage } from "@/components/knowledge/kien-thuc-nha-dep-listing";
import { knowledgeListingMetadata } from "@/lib/knowledge-metadata";
export async function generateMetadata() {
  return knowledgeListingMetadata("kien-thuc-nha-dep", "vi");
}
export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <BeautifulHomeKnowledgePage searchParams={searchParams} />;
}
