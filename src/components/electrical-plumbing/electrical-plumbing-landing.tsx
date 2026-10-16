import {
  Check,
  Layers,
  Ruler,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { electricalPlumbingCopy } from "@/data/electrical-plumbing";
import type { SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import residential from "../townhouse-construction/townhouse-construction.module.css";
import styles from "./electrical-plumbing.module.css";
const featureImages = ["hero", "doi-tho"].map(
  (name) => `/images/thi-cong-noi-that/dien-nuoc/${name}.webp`,
);
const noteIcons = [Layers, Ruler, ClipboardCheck, ShieldCheck];
export function ElectricalPlumbingLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = electricalPlumbingCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage={featureImages[1]}
      featureImages={featureImages}
      sectionId="luu-y"
      beforeAdvice={
        <>
          <section className={styles.notesSection}>
            <div className={shared.container}>
              <h2 className={styles.notesTitle}>{copy.notesTitle}</h2>
              <div className={styles.notes}>
                {copy.notes.map((note, index) => {
                  const Icon = noteIcons[index];
                  return (
                    <article key={note.title}>
                      <span className={styles.icon}>
                        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3>{note.title}</h3>
                      <p>{note.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
          <section className={`${shared.container} ${styles.pricing}`}>
            <div className={styles.priceCard}>
              <p className={residential.eyebrow}>{copy.pricingLabel}</p>
              <h2>{copy.pricingTitle}</h2>
              <p className={styles.price}>
                180.000 – 220.000<span>{copy.unit}</span>
              </p>
              <p>{copy.pricingIntro}</p>
            </div>
            <ul className={styles.items}>
              {copy.pricingItems.map((item) => (
                <li key={item}>
                  <span className={residential.check}>
                    <Check size={12} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      }
    />
  );
}
