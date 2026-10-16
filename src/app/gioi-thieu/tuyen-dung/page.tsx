import { RecruitmentLanding } from "@/components/introduction/recruitment-landing";
import { introductionMetadata } from "@/lib/introduction-metadata";
export const metadata = introductionMetadata("/gioi-thieu/tuyen-dung", "vi");
export default function Page() {
  return <RecruitmentLanding />;
}
