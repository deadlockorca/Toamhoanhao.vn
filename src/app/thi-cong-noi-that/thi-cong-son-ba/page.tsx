import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { PaintConstructionLanding } from "@/components/paint-construction/paint-construction-landing";
import { paintConstructionCopy } from "@/data/paint-construction";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "thi-cong-son-ba",
  {
    title: "Thi công sơn bả chuyên nghiệp",
    description: paintConstructionCopy.vi.intro,
  },
);
export default function PaintConstructionPage() {
  return <PaintConstructionLanding />;
}
