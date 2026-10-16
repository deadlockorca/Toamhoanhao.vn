import type { Metadata } from "next";
import { VillaInteriorLanding } from "@/components/villa-interior/villa-interior-landing";
import { villaInteriorMetadata } from "@/lib/villa-interior-metadata";
export const metadata: Metadata = villaInteriorMetadata("vi");
export default function VillaInteriorPage() {
  return <VillaInteriorLanding />;
}
