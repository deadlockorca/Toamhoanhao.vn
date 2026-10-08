import type { DesignSample } from "@/data/design-samples";

export const villaMenuItems = [
  { label: "Mẫu biệt thự đẹp", slug: "mau-biet-thu-dep" },
  { label: "Mẫu biệt thự 2 tầng", slug: "mau-biet-thu-2-tang" },
  { label: "Mẫu biệt thự 3 tầng", slug: "mau-biet-thu-3-tang" },
  { label: "Mẫu biệt thự cổ điển", slug: "mau-biet-thu-co-dien" },
  { label: "Mẫu nhà vườn đẹp", slug: "mau-nha-vuon-dep" },
  { label: "Mẫu biệt thự mái Thái, mái Nhật", slug: "mau-biet-thu-mai-thai-mai-nhat" },
  { label: "Resort, khách sạn, nhà hàng", slug: "resort-khach-san-nha-hang" },
] as const;

export type VillaMenuTopic = (typeof villaMenuItems)[number];

export function getVillaMenuTopic(slug?: string) {
  return villaMenuItems.find((item) => item.slug === slug);
}

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d");
}

export function matchesVillaMenuTopic(sample: DesignSample, topic: VillaMenuTopic) {
  const title = normalizeText(sample.title);
  if (topic.slug === "resort-khach-san-nha-hang") {
    return /resort|khach san|nha hang|restaurant/.test(title);
  }
  if (sample.category !== "Biệt thự") return false;
  switch (topic.slug) {
    case "mau-biet-thu-2-tang": return /2 tang/.test(title);
    case "mau-biet-thu-3-tang": return /3 tang/.test(title);
    case "mau-biet-thu-co-dien": return /co dien/.test(title);
    case "mau-nha-vuon-dep": return /nha vuon/.test(title);
    case "mau-biet-thu-mai-thai-mai-nhat": return /mai thai|mai nhat/.test(title);
    default: return true;
  }
}
