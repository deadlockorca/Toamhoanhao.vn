import { InteriorPricingOverview } from "@/components/pricing/interior-pricing-overview";
import { pricingOverviewMetadata } from "@/lib/pricing-metadata";
export const metadata = pricingOverviewMetadata("interior", "vi");
export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <InteriorPricingOverview searchParams={searchParams} />;
}
