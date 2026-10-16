import { constructionPageMetadata } from "@/lib/construction-page-metadata";
import type { Metadata } from "next";
import { LivingRoomSpaceLanding } from "@/components/living-room-space/living-room-space-landing";
import { livingRoomSpaceCopy } from "@/data/living-room-space";
export const metadata: Metadata = constructionPageMetadata(
  "vi",
  "khong-gian-phong-khach",
  {
    title: "Không gian phòng khách",
    description: livingRoomSpaceCopy.vi.intro,
  },
);
export default function LivingRoomSpacePage() {
  return <LivingRoomSpaceLanding />;
}
