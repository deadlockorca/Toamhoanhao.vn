import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { renovationConstructionCopy } from "@/data/renovation-construction";
import type { SiteLocale } from "@/lib/locale";
import { ConstructionProcess } from "../residential-construction/construction-process";

const featureImages = ["xuong-cap", "dep-hon", "phong-thuy", "khong-gian"].map(
  (name) => `/images/thi-cong-noi-that/cai-tao/${name}.webp`,
);
export function RenovationConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = renovationConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage="https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thi-cong-noi-that/cai-tao/39b018d31f593220.webp"
      featureImages={featureImages}
      sectionId="tinh-huong"
      afterTips={
        <ConstructionProcess
          label={copy.processLabel}
          title={copy.processTitle}
          steps={copy.processSteps}
        />
      }
    />
  );
}
