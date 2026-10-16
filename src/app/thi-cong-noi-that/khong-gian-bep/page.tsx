import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { KitchenSpaceLanding } from "@/components/kitchen-space/kitchen-space-landing";
import { kitchenSpaceCopy } from "@/data/kitchen-space";

export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "khong-gian-bep",
  {
    title: "Không gian bếp",
    description: kitchenSpaceCopy.vi.intro,
  },
);
export default function KitchenSpacePage() {
  return <KitchenSpaceLanding />;
}
