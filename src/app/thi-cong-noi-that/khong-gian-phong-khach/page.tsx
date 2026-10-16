import type { Metadata } from "next";
import { LivingRoomSpaceLanding } from "@/components/living-room-space/living-room-space-landing";
import { livingRoomSpaceCopy } from "@/data/living-room-space";
export const metadata: Metadata = {
  title: "Không gian phòng khách",
  description: livingRoomSpaceCopy.vi.intro,
};
export default function LivingRoomSpacePage() {
  return <LivingRoomSpaceLanding />;
}
