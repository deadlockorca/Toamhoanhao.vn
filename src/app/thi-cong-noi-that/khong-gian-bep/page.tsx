import type { Metadata } from "next";
import { KitchenSpaceLanding } from "@/components/kitchen-space/kitchen-space-landing";
import { kitchenSpaceCopy } from "@/data/kitchen-space";

export const metadata: Metadata = {
  title: "Không gian bếp",
  description: kitchenSpaceCopy.vi.intro,
};
export default function KitchenSpacePage() {
  return <KitchenSpaceLanding />;
}
