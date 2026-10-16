import { Clock3, ListOrdered, PaintRoller } from "lucide-react";
import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { paintConstructionCopy } from "@/data/paint-construction";
import type { SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import styles from "./paint-construction.module.css";
const featureImages = [
  "ro",
  "nhan",
  "phong-rop",
  "bong-troc",
  "reu-moc",
  "mat-mau",
].map((name) => `/images/thi-cong-noi-that/son-ba/${name}.webp`);
const noteIcons = [Clock3, ListOrdered, PaintRoller];
export function PaintConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = paintConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage="/images/thi-cong-noi-that/son-ba/hero.webp"
      featureImages={featureImages}
      sectionId="sai-lam"
      beforeAdvice={
        <section className={styles.notesSection}>
          <div className={shared.container}>
            <div className={styles.heading}>
              <h2>{copy.notesTitle}</h2>
              <p>{copy.notesIntro}</p>
            </div>
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
      }
    />
  );
}
