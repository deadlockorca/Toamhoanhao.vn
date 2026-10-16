import type { Metadata } from "next";
import { CeilingConstructionLanding } from "@/components/ceiling-construction/ceiling-construction-landing";
import { ceilingConstructionCopy } from "@/data/ceiling-construction";
export const metadata: Metadata = {
  title: "Thi công trần thạch cao",
  description: ceilingConstructionCopy.vi.intro,
};
export default function CeilingConstructionPage() {
  return <CeilingConstructionLanding />;
}
