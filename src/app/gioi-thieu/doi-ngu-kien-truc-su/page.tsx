import { ArchitectureTeamLanding } from "@/components/architecture-team/architecture-team-landing";
import { introductionMetadata } from "@/lib/introduction-metadata";
export const metadata = introductionMetadata(
  "/gioi-thieu/doi-ngu-kien-truc-su",
  "vi",
);
export default function Page() {
  return <ArchitectureTeamLanding />;
}
