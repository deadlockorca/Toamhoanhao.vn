import { ApartmentInteriorDesignPage } from "./landing";
import { interiorDesignMetadata } from "@/lib/interior-design-metadata";
export const metadata = interiorDesignMetadata("thiet-ke-chung-cu", "vi");
export default function Page() {
  return <ApartmentInteriorDesignPage />;
}
