import { TownhouseInteriorDesignPage } from "./landing";
import { interiorDesignMetadata } from "@/lib/interior-design-metadata";
export const metadata = interiorDesignMetadata("thiet-ke-nha-pho", "vi");
export default function Page() {
  return <TownhouseInteriorDesignPage />;
}
