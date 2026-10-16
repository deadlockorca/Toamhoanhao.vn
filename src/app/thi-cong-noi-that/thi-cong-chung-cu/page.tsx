import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { ApartmentConstructionLanding } from "@/components/apartment-construction/apartment-construction-landing";
import { apartmentConstructionCopy } from "@/data/apartment-construction";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "thi-cong-chung-cu",
  {
    title: "Thi công chung cư trọn gói",
    description: apartmentConstructionCopy.vi.intro,
  },
);
export default function ApartmentConstructionPage() {
  return <ApartmentConstructionLanding />;
}
