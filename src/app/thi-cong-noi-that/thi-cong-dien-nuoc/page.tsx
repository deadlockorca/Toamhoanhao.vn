import type { Metadata } from "next";
import { ElectricalPlumbingLanding } from "@/components/electrical-plumbing/electrical-plumbing-landing";
import { electricalPlumbingCopy } from "@/data/electrical-plumbing";
export const metadata: Metadata = {
  title: "Thi công điện nước",
  description: electricalPlumbingCopy.vi.intro,
};
export default function ElectricalPlumbingPage() {
  return <ElectricalPlumbingLanding />;
}
