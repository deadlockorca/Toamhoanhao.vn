import type { Metadata } from "next";
import { CapabilityLanding } from "@/components/capability/capability-landing";
import { capabilityCopy } from "@/data/capability";

export const metadata: Metadata = {
  title: "Năng lực thiết kế và thi công",
  description: capabilityCopy.vi.intro,
};
export default function CapabilityPage() {
  return <CapabilityLanding />;
}
