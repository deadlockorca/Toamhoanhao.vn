export const apartmentMenuItems = [
  { label: "PENTHOUSE, DUPLEX", slug: "penthouse-duplex" },
  { label: "Chung cư 115m2-120m2", slug: "115-120", min: 115, max: 120 },
  { label: "Chung cư 110m2-115m2", slug: "110-115", min: 110, max: 115 },
  { label: "Chung cư 105m2-110m2", slug: "105-110", min: 105, max: 110 },
  { label: "Chung cư 95m2-100m2", slug: "95-100", min: 95, max: 100 },
  { label: "Chung cư 90m2-95m2", slug: "90-95", min: 90, max: 95 },
  { label: "Chung cư 85m2-90m2", slug: "85-90", min: 85, max: 90 },
  { label: "Chung cư 80m2-85m2", slug: "80-85", min: 80, max: 85 },
  { label: "Chung cư 75m2-80m2", slug: "75-80", min: 75, max: 80 },
  { label: "Chung cư 70m2-75m2", slug: "70-75", min: 70, max: 75 },
  { label: "Chung cư 65m2-70m2", slug: "65-70", min: 65, max: 70 },
  { label: "Chung cư 55m2-60m2", slug: "55-60", min: 55, max: 60 },
  { label: "Chung cư 50m2-55m2", slug: "50-55", min: 50, max: 55 },
  { label: "Chung cư 45m2-50m2", slug: "45-50", min: 45, max: 50 },
  { label: "Chung cư 40m2-45m2", slug: "40-45", min: 40, max: 45 },
] as const;

type ApartmentAreaTopic = Extract<(typeof apartmentMenuItems)[number], { readonly min: number }>;

export function getApartmentAreaTopic(slug?: string) {
  return apartmentMenuItems.find((item): item is ApartmentAreaTopic => item.slug === slug && "min" in item);
}

export function matchesApartmentArea(area: string | undefined, topic: ApartmentAreaTopic) {
  const match = area?.match(/\d+(?:[.,]\d+)?/);
  if (!match) return false;
  const value = Number(match[0].replace(",", "."));
  return value >= topic.min && value <= topic.max;
}
