import type { Metadata } from "next";
import { WoodConstructionLanding } from "@/components/wood-construction/wood-construction-landing";
import { woodConstructionCopy } from "@/data/wood-construction";
export const metadata: Metadata = {
  title: "Thi công đồ gỗ nội thất",
  description: woodConstructionCopy.vi.intro,
};
export default function WoodConstructionPage() {
  return <WoodConstructionLanding />;
}
