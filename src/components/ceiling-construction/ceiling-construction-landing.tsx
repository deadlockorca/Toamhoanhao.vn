import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { ConstructionProcess } from "@/components/residential-construction/construction-process";
import { ceilingConstructionCopy } from "@/data/ceiling-construction";
import { renovationConstructionCopy } from "@/data/renovation-construction";
import type { SiteLocale } from "@/lib/locale";
const featureImages = [
  "tham-my",
  "chong-nong",
  "cach-am",
  "thao-lap",
  "gia-thanh",
].map((name) => `/images/thi-cong-noi-that/tran-thach-cao/${name}.webp`);
export function CeilingConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = ceilingConstructionCopy[locale];
  const process = renovationConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage="https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thi-cong-noi-that/tran-thach-cao/ad54f56cff19a962.webp"
      featureImages={featureImages}
      sectionId="uu-diem"
      afterTips={
        <ConstructionProcess
          label={process.processLabel}
          title={process.processTitle}
          steps={process.processSteps}
        />
      }
    />
  );
}
