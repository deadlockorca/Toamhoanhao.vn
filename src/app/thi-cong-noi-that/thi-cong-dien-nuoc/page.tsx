import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { ElectricalPlumbingLanding } from "@/components/electrical-plumbing/electrical-plumbing-landing";
import { electricalPlumbingCopy } from "@/data/electrical-plumbing";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "thi-cong-dien-nuoc",
  {
    title: "Thi công điện nước",
    description: electricalPlumbingCopy.vi.intro,
  },
);
export default function ElectricalPlumbingPage() {
  return <ElectricalPlumbingLanding />;
}
