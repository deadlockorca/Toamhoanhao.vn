import { Check } from "lucide-react";
import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { apartmentConstructionCopy } from "@/data/apartment-construction";
import type { SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import residential from "../townhouse-construction/townhouse-construction.module.css";
import styles from "./apartment-construction.module.css";
const featureImages = ["phong-khach", "phong-bep", "phong-ngu"].map(
  (name) => `/images/thi-cong-noi-that/chung-cu/${name}.webp`,
);
const projects = [
  "Time City",
  "Royal City",
  "Golden Place",
  "Park Hill",
  "Eco Park",
];
export function ApartmentConstructionLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = apartmentConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={copy}
      heroImage="/images/thi-cong-noi-that/chung-cu/hero.webp"
      featureImages={featureImages}
      sectionId="hang-muc"
      beforeAdvice={
        <section className={styles.clientsSection}>
          <div className={`${shared.container} ${styles.clientsLayout}`}>
            <div className={styles.intro}>
              <p className={residential.eyebrow}>{copy.clientsLabel}</p>
              <h2>{copy.clientsTitle}</h2>
              <p>{copy.clientsIntro}</p>
            </div>
            <div>
              <h3 className={residential.eyebrow}>{copy.clientsListLabel}</h3>
              <ul className={styles.clients}>
                {copy.clients.map((client) => (
                  <li key={client}>
                    <span className={residential.check}>
                      <Check size={12} aria-hidden="true" />
                    </span>
                    {client}
                  </li>
                ))}
              </ul>
              <h3 className={residential.eyebrow}>{copy.projectsLabel}</h3>
              <ul className={styles.projects}>
                {projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      }
    />
  );
}
