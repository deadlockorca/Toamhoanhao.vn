import type { Metadata } from "next";
import { ApartmentConstructionLanding } from "@/components/apartment-construction/apartment-construction-landing";
import { apartmentConstructionCopy } from "@/data/apartment-construction";
export const metadata: Metadata = {
  title: "Thi công chung cư trọn gói",
  description: apartmentConstructionCopy.vi.intro,
};
export default function ApartmentConstructionPage() {
  return <ApartmentConstructionLanding />;
}
