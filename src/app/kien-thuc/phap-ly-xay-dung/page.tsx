import { BuildingLegalPage } from "@/components/knowledge/phap-ly-xay-dung-listing";
import { knowledgeListingMetadata } from "@/lib/knowledge-metadata";
export async function generateMetadata() {
  return knowledgeListingMetadata("phap-ly-xay-dung", "vi");
}
export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <BuildingLegalPage searchParams={searchParams} />;
}
