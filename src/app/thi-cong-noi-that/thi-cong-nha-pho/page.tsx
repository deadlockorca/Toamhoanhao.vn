import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { TownhouseConstructionLanding } from "@/components/townhouse-construction/townhouse-construction-landing";
import { townhouseConstructionCopy } from "@/data/townhouse-construction";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "thi-cong-nha-pho",
  {
    title: "Thi công nhà phố đẹp",
    description: townhouseConstructionCopy.vi.intro,
  },
);
export default function TownhouseConstructionPage() {
  return <TownhouseConstructionLanding />;
}
