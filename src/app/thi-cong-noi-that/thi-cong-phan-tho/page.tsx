import type { Metadata } from "next";
import { ShellConstructionLanding } from "@/components/shell-construction/shell-construction-landing";
import { shellConstructionCopy } from "@/data/shell-construction";
export const metadata: Metadata = {
  title: "Thi công phần thô nội thất",
  description: shellConstructionCopy.vi.intro,
};
export default function ShellConstructionPage() {
  return <ShellConstructionLanding />;
}
