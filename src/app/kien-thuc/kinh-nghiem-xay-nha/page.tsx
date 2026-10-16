import { BuildingExperiencePage } from "@/components/knowledge/kinh-nghiem-xay-nha-listing";
import { knowledgeListingMetadata } from "@/lib/knowledge-metadata";
export async function generateMetadata() {
  return knowledgeListingMetadata("kinh-nghiem-xay-nha", "vi");
}
export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <BuildingExperiencePage searchParams={searchParams} />;
}
