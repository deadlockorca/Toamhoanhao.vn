import { AboutLanding } from "@/components/introduction/about-landing";
import { introductionMetadata } from "@/lib/introduction-metadata";
export const metadata = introductionMetadata("/gioi-thieu", "vi");
export default function Page() {
  return <AboutLanding />;
}
