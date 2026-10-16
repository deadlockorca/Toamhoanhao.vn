import { InteriorDesignExperiencePage } from "@/components/knowledge/kinh-nghiem-thiet-ke-noi-that-listing";
import { knowledgeListingMetadata } from "@/lib/knowledge-metadata";
export async function generateMetadata() {
  return knowledgeListingMetadata("kinh-nghiem-thiet-ke-noi-that", "vi");
}
export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <InteriorDesignExperiencePage searchParams={searchParams} />;
}
