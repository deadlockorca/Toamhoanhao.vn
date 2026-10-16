import type { Metadata } from "next";
import { KidsInteriorLanding } from "@/components/kids-interior/kids-interior-landing";
import { kidsInteriorMetadata } from "@/lib/kids-interior-metadata";
export const metadata: Metadata = kidsInteriorMetadata("vi");
export default function KidsInteriorPage() {
  return <KidsInteriorLanding />;
}
