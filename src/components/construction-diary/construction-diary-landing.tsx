import {
  Clock3,
  ShieldCheck,
  Headphones,
  Search,
  PenTool,
  FileSignature,
  Hammer,
  Factory,
  ClipboardCheck,
  KeyRound,
} from "lucide-react";
import { ResidentialConstructionLanding } from "@/components/residential-construction/residential-construction-landing";
import { constructionDiaryCopy } from "@/data/construction-diary";
import { shellConstructionCopy } from "@/data/shell-construction";
import type { SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import residential from "../townhouse-construction/townhouse-construction.module.css";
import styles from "./construction-diary.module.css";

const base = "/images/thi-cong-noi-that/nhat-ki-thi-cong";
const images = [
  `${base}/buoc-1.webp`,
  "/images/nang-luc/site-inspection-v2.webp",
  "/images/doi-ngu/banner.png",
  `${base}/buoc-4.webp`,
  "/images/thi-cong-noi-that/phan-tho/tran-thach-cao.webp",
  "/images/gioi-thieu/xuong-san-xuat.png",
  `${base}/buoc-7.webp`,
  `${base}/buoc-8.webp`,
];
const icons = [
  Headphones,
  Search,
  PenTool,
  FileSignature,
  Hammer,
  Factory,
  ClipboardCheck,
  KeyRound,
];

export function ConstructionDiaryLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = constructionDiaryCopy[locale];
  const common = shellConstructionCopy[locale];
  return (
    <ResidentialConstructionLanding
      locale={locale}
      copy={{
        ...common,
        heroParts: copy.heroParts,
        intro: copy.intro,
        explore: copy.explore,
        stylesLabel: copy.label,
        stylesTitle: copy.title,
        stylesIntro: copy.description,
        styleLabel: copy.step,
        styles: copy.steps,
        tipsLabel: copy.label,
        tipsTitle: copy.notesTitle,
        tipsIntro: copy.description,
        tips: copy.notes,
        ctaTitle: copy.ctaTitle,
        ctaIntro: copy.ctaIntro,
      }}
      heroImage={`${base}/hero.webp`}
      featureImages={images}
      sectionId="quy-trinh"
      beforeFeatures={
        <nav
          className={`${shared.container} ${styles.overview}`}
          aria-label={copy.label}
        >
          <ol>
            {copy.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <li key={step.title}>
                  <a href={`#quy-trinh-${index + 1}`}>
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                    <span>{step.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      }
      beforeAdvice={
        <section className={styles.details}>
          <div className={`${shared.container} ${styles.detailsGrid}`}>
            <div>
              <p className={residential.eyebrow}>{copy.label}</p>
              <h2>{copy.durationTitle}</h2>
              <ul>
                {copy.durations.map((item) => (
                  <li key={item}>
                    <Clock3 size={20} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.note}>{copy.notes[0]}</p>
            </div>
            <div className={styles.warranty}>
              <span className={styles.warrantyIcon}>
                <ShieldCheck size={30} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h2>{copy.warrantyTitle}</h2>
              <ul>
                {copy.warranties.map((item) => (
                  <li key={item}>
                    <ShieldCheck size={20} aria-hidden="true" />
                    <span>{item}</span>
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
