import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { CeilingConstructionLanding } from "@/components/ceiling-construction/ceiling-construction-landing";
import { ceilingConstructionCopy } from "@/data/ceiling-construction";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "thi-cong-tran-thach-cao",
  {
    title: "Thi công trần thạch cao",
    description: ceilingConstructionCopy.vi.intro,
  },
);
export default function CeilingConstructionPage() {
  return <CeilingConstructionLanding />;
}
