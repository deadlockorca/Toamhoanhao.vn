import { CapabilityLanding } from "@/components/capability/capability-landing";
import { introductionMetadata } from "@/lib/introduction-metadata";
export const metadata = introductionMetadata(
  "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
  "vi",
);
export default function Page() {
  return <CapabilityLanding />;
}
