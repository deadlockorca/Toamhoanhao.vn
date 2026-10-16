import { ConstructionPricingOverview } from "@/components/pricing/construction-pricing-overview";
import { pricingOverviewMetadata } from "@/lib/pricing-metadata";
export const metadata = pricingOverviewMetadata("construction", "vi");
export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <ConstructionPricingOverview searchParams={searchParams} />;
}
