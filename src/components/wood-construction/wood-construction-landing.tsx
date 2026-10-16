import { Check } from "lucide-react";
import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { woodConstructionCopy } from "@/data/wood-construction";
import type { SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import residential from "../townhouse-construction/townhouse-construction.module.css";
import styles from "./wood-construction.module.css";
const featureImages = [
  "nguyen-lieu",
  "ky-thuat",
  "chuan-chat-luong",
  "bao-quan",
].map((name) => `/images/thi-cong-noi-that/do-go/${name}.webp`);
export function WoodConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = woodConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage="/images/thi-cong-noi-that/do-go/chuan-chat-luong.webp"
      featureImages={featureImages}
      sectionId="yeu-cau"
      beforeAdvice={
        <section className={styles.materialsSection}>
          <div className={`${shared.container} ${styles.materialsLayout}`}>
            <div className={styles.intro}>
              <p className={residential.eyebrow}>{copy.materialsLabel}</p>
              <h2>{copy.materialsTitle}</h2>
              <p>{copy.materialsIntro}</p>
            </div>
            <ul className={styles.materials}>
              {copy.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
        </section>
      }
      afterTips={
        <section className={styles.commitmentsSection}>
          <div className={styles.heading}>
            <p className={residential.eyebrow}>{copy.commitmentsLabel}</p>
            <h2>{copy.commitmentsTitle}</h2>
          </div>
          <ul className={styles.commitments}>
            {copy.commitments.map((item) => (
              <li key={item}>
                <span className={residential.check}>
                  <Check size={12} aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      }
    />
  );
}
