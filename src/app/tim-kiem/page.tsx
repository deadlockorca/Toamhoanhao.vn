import type { Metadata } from "next";
import { SearchPage } from "@/components/search/search-page";
export const metadata: Metadata = {
  title: "Tìm kiếm",
  robots: { index: false, follow: true },
};
export default SearchPage;
