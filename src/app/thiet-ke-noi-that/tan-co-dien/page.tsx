import { NeoclassicalInteriorDesignPage } from "./landing";
import { interiorDesignMetadata } from "@/lib/interior-design-metadata";
export const metadata = interiorDesignMetadata("tan-co-dien", "vi");
export default function Page() {
  return <NeoclassicalInteriorDesignPage />;
}
