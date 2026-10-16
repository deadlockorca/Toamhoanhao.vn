import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { RenovationConstructionLanding } from "@/components/renovation-construction/renovation-construction-landing";
import { renovationConstructionCopy } from "@/data/renovation-construction";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "thi-cong-cai-tao",
  {
    title: "Thi công cải tạo nội thất",
    description: renovationConstructionCopy.vi.intro,
  },
);
export default function RenovationConstructionPage() {
  return <RenovationConstructionLanding />;
}
