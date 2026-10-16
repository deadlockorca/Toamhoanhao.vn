import type { Metadata } from "next";
import { SmartInteriorLanding } from "@/components/smart-interior/smart-interior-landing";
import { smartInteriorMetadata } from "@/lib/smart-interior-metadata";
export const metadata: Metadata = smartInteriorMetadata("vi");
export default function SmartInteriorPage() {
  return <SmartInteriorLanding />;
}
