import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { townhouseConstructionCopy } from "@/data/townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
const featureImages = ["retro", "mix-match", "wabi-sabi", "ethnic", "zen"].map(
  (name) => `/images/thi-cong-noi-that/nha-pho/${name}.webp`,
);
export function TownhouseConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={townhouseConstructionCopy[locale]}
      heroImage={featureImages[0]}
      featureImages={featureImages}
      sectionId="phong-cach"
    />
  );
}
