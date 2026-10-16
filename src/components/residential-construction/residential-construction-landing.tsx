import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { Check, House } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { TownhouseConstructionCopy } from "@/data/townhouse-construction";
import { kitchenSpaceCopy } from "@/data/kitchen-space";
import { workshopCopy } from "@/data/workshop";
import { homePath, type SiteLocale } from "@/lib/locale";
import shared from "../kitchen-space/kitchen-space.module.css";
import styles from "../townhouse-construction/townhouse-construction.module.css";

type Props = {
  locale: SiteLocale;
  copy: TownhouseConstructionCopy;
  heroImage: string;
  featureImages: string[];
  sectionId: string;
  beforeFeatures?: ReactNode;
  beforeAdvice?: ReactNode;
  afterTips?: ReactNode;
};
export function ResidentialConstructionLanding({
  locale,
  copy,
  heroImage,
  featureImages,
  sectionId,
  beforeFeatures,
  beforeAdvice,
  afterTips,
}: Props) {
  const common = kitchenSpaceCopy[locale];
  const title = copy.heroParts.join(" ");
  return (
    <main className={shared.page}>
      <SiteHeader locale={locale} />
      <div className={shared.headerSpacer} />
      <section className={shared.hero}>
        <div className={`${shared.container} ${shared.heroInner}`}>
          <div className={shared.heroCopy}>
            <nav className={shared.breadcrumb} aria-label={title}>
              <Link href={homePath(locale)}>{workshopCopy[locale].home}</Link>
              <span>/</span>
              <Link href="/thi-cong-noi-that">{common.construction}</Link>
              <span>/</span>
              <span>{title}</span>
            </nav>
            <h1>
              {copy.heroParts[0]}
              <span>{copy.heroParts[1]}</span>
            </h1>
            <p>{copy.intro}</p>
            <div className={shared.heroActions}>
              <a className={shared.primaryButton} href={`#${sectionId}`}>
                {copy.explore}
              </a>
              <ConsultationButton className={shared.phoneButton}>
                {common.consultation}
              </ConsultationButton>
            </div>
          </div>
        </div>
        <div className={`${shared.heroImage} ${styles.heroImage}`}>
          <Image
            src={heroImage}
            alt={title}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>

      {beforeFeatures}
      <section
        id={sectionId}
        className={`${shared.container} ${styles.stylesSection}`}
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.stylesLabel}</p>
          <h2>{copy.stylesTitle}</h2>
          <p>{copy.stylesIntro}</p>
        </div>
        <div className={styles.styleList}>
          {copy.styles.map((item, index) => (
            <article
              key={item.title}
              id={`${sectionId}-${index + 1}`}
              className={`${styles.styleRow} ${index % 2 ? styles.reversed : ""}`}
            >
              <div className={styles.styleImage}>
                <Image
                  src={featureImages[index]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 760px) 90vw, 530px"
                />
              </div>
              <div className={styles.styleCopy}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className={styles.eyebrow}>{copy.styleLabel}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {beforeAdvice}
      <section className={styles.adviceSection}>
        <div className={shared.container}>
          <div className={styles.tipsLayout}>
            <div className={styles.tipsIntro}>
              <p className={styles.eyebrow}>{copy.tipsLabel}</p>
              <h2>{copy.tipsTitle}</h2>
              <p>{copy.tipsIntro}</p>
            </div>
            <ul className={styles.tips}>
              {copy.tips.map((tip) => (
                <li key={tip}>
                  <span className={styles.check}>
                    <Check size={12} aria-hidden="true" />
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          {afterTips}
          <div className={styles.ideaCard}>
            <span className={styles.houseIcon}>
              <House size={28} strokeWidth={1.4} aria-hidden="true" />
            </span>
            <div>
              <p className={styles.eyebrow}>Tổ Ấm Hoàn Hảo</p>
              <h2>{copy.ideaTitle}</h2>
              <p>{copy.ideaIntro}</p>
            </div>
            <ConsultationButton className={shared.primaryButton}>
              {copy.advice}
            </ConsultationButton>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <h2>{copy.ctaTitle}</h2>
        <p>{copy.ctaIntro}</p>
        <div className={styles.ctaActions}>
          <ConsultationButton className={styles.booking}>
            {copy.booking}
          </ConsultationButton>
          <a href="tel:0903897555">{common.call}: 0903.897.555</a>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
