import { ShowroomDesignPage } from "./landing";
import { interiorDesignMetadata } from "@/lib/interior-design-metadata";
export const metadata = interiorDesignMetadata("thiet-ke-showroom", "vi");
export default function Page() {
  return <ShowroomDesignPage />;
}
