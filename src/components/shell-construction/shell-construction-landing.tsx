import { Check, Zap } from "lucide-react";
import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { shellConstructionCopy } from "@/data/shell-construction";
import type { SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import residential from "../townhouse-construction/townhouse-construction.module.css";
import styles from "./shell-construction.module.css";

const featureImages = [
  "dien",
  "nuoc",
  "tran-thach-cao",
  "son-ba",
  "san-nha",
].map((name) => `/images/thi-cong-noi-that/phan-tho/${name}.webp`);
export function ShellConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = shellConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage="/images/thi-cong-noi-that/phan-tho/hero.webp"
      featureImages={featureImages}
      sectionId="yeu-cau"
      beforeAdvice={
        <section className={styles.scopeSection}>
          <div className={`${shared.container} ${styles.scopeLayout}`}>
            <div className={styles.serviceCard}>
              <h2 className={residential.eyebrow}>{copy.servicesLabel}</h2>
              <ul className={styles.services}>
                {copy.styles.map((item) => (
                  <li key={item.title}>
                    <span className={residential.check}>
                      <Check size={12} aria-hidden="true" />
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.rulesTitle}>{copy.electricalLabel}</h2>
              <ul className={styles.rules}>
                {copy.electricalRules.map((rule) => (
                  <li key={rule}>
                    <Zap size={18} strokeWidth={1.5} aria-hidden="true" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      }
    />
  );
}
