import type { Metadata } from "next";
import { ConstructionDiaryLanding } from "@/components/construction-diary/construction-diary-landing";
import { constructionDiaryCopy } from "@/data/construction-diary";
export const metadata: Metadata = {
  title: constructionDiaryCopy.vi.heroParts.join(" "),
  description: constructionDiaryCopy.vi.intro,
};
export default function ConstructionDiaryPage() {
  return <ConstructionDiaryLanding />;
}
