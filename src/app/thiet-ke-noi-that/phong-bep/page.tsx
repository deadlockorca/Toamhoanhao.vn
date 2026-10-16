import type { Metadata } from "next";
import { KitchenInteriorLanding } from "@/components/kitchen-interior/kitchen-interior-landing";
import { kitchenInteriorMetadata } from "@/lib/kitchen-interior-metadata";
export const metadata: Metadata = kitchenInteriorMetadata("vi");
export default function KitchenInteriorPage() {
  return <KitchenInteriorLanding />;
}
