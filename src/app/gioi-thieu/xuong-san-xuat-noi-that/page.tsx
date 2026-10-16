import type { Metadata } from "next";
import { WorkshopLanding } from "@/components/workshop/workshop-landing";
import { workshopCopy } from "@/data/workshop";

export const metadata: Metadata = {
  title: workshopCopy.vi.title,
  description: workshopCopy.vi.intro,
};

export default function WorkshopPage() {
  return <WorkshopLanding />;
}
