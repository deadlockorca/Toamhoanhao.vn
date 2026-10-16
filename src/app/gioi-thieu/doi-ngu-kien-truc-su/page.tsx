import type { Metadata } from "next";
import { ArchitectureTeamLanding } from "@/components/architecture-team/architecture-team-landing";
import { architectureTeamCopy } from "@/data/architecture-team";

export const metadata: Metadata = {
  title: "Đội ngũ kiến trúc sư",
  description: architectureTeamCopy.vi.intro,
};
export default function ArchitectureTeamPage() {
  return <ArchitectureTeamLanding />;
}
