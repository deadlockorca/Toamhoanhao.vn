import type { Metadata } from "next";
import { RenovationConstructionLanding } from "@/components/renovation-construction/renovation-construction-landing";
import { renovationConstructionCopy } from "@/data/renovation-construction";
export const metadata: Metadata = {
  title: "Thi công cải tạo nội thất",
  description: renovationConstructionCopy.vi.intro,
};
export default function RenovationConstructionPage() {
  return <RenovationConstructionLanding />;
}
