import type { Metadata } from "next";
import { PaintConstructionLanding } from "@/components/paint-construction/paint-construction-landing";
import { paintConstructionCopy } from "@/data/paint-construction";
export const metadata: Metadata = {
  title: "Thi công sơn bả chuyên nghiệp",
  description: paintConstructionCopy.vi.intro,
};
export default function PaintConstructionPage() {
  return <PaintConstructionLanding />;
}
