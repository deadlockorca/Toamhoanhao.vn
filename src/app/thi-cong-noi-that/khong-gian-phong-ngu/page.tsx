import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { BedroomSpaceLanding } from "@/components/bedroom-space/bedroom-space-landing";
import { bedroomSpaceCopy } from "@/data/bedroom-space";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "khong-gian-phong-ngu",
  {
    title: "Không gian phòng ngủ",
    description: bedroomSpaceCopy.vi.intro,
  },
);
export default function BedroomSpacePage() {
  return <BedroomSpaceLanding />;
}
