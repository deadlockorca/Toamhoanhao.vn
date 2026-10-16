import type { Metadata } from "next";
import { BedroomInteriorLanding } from "@/components/bedroom-interior/bedroom-interior-landing";
import { bedroomInteriorMetadata } from "@/lib/bedroom-interior-metadata";
export const metadata: Metadata = bedroomInteriorMetadata("vi");
export default function BedroomInteriorPage() {
  return <BedroomInteriorLanding />;
}
