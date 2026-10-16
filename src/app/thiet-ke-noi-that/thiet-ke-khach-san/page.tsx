import { HotelInteriorDesignPage } from "./landing";
import { interiorDesignMetadata } from "@/lib/interior-design-metadata";
export const metadata = interiorDesignMetadata("thiet-ke-khach-san", "vi");
export default function Page() {
  return <HotelInteriorDesignPage />;
}
