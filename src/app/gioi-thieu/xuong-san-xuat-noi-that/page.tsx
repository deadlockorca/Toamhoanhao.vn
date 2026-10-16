import { WorkshopLanding } from "@/components/workshop/workshop-landing";
import { introductionMetadata } from "@/lib/introduction-metadata";
export const metadata = introductionMetadata(
  "/gioi-thieu/xuong-san-xuat-noi-that",
  "vi",
);
export default function Page() {
  return <WorkshopLanding />;
}
