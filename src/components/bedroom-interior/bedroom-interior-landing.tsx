import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Compass,
  Tv,
  Palette,
  PencilRuler,
  Armchair,
  Factory,
  Ruler,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsultationButton } from "@/components/consultation-popup";
import { bedroomInteriorCopy } from "@/data/bedroom-interior";
import { bedroomSpaceCopy } from "@/data/bedroom-space";
import { villaInteriorCopy } from "@/data/villa-interior";
import { workshopCopy } from "@/data/workshop";
import { renovationConstructionCopy } from "@/data/renovation-construction";
import { townhouseConstructionCopy } from "@/data/townhouse-construction";
import { homePath, type SiteLocale } from "@/lib/locale";
import styles from "@/app/thiet-ke-noi-that/thiet-ke-khach-san/hotel.module.css";
import local from "./bedroom-interior.module.css";

const ids = ["phong-thuy", "thiet-bi", "don-gian", "mau-sac"];
const base = "/images/thiet-ke-noi-that/phong-ngu";
const icons = [Compass, Tv, BedDouble, Palette];
const serviceIcons = [PencilRuler, Armchair, Factory, Ruler];
const swatches = [
  "linear-gradient(135deg,#343d4b 50%,#8c9baa 50%)",
  "#94745e",
  "#879880",
  "#ddbd76",
  "linear-gradient(135deg,#857087 50%,#a66e6e 50%)",
  "linear-gradient(135deg,#d9afa4 50%,#cd946d 50%)",
  "linear-gradient(135deg,#f7f4ee 50%,#c4b6cd 50%)",
  "linear-gradient(135deg,#aeb1ad 50%,#b88b69 50%)",
];
export function BedroomInteriorLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = bedroomInteriorCopy[locale];
  const common = bedroomSpaceCopy[locale];
  const design = villaInteriorCopy[locale];
  const process = renovationConstructionCopy[locale];
  return (
    <main lang={locale} className={`${styles.page} ${local.page}`}>
      <SiteHeader locale={locale} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav
              className={styles.breadcrumb}
              aria-label={copy.heroParts.join(" ")}
            >
              <Link href={homePath(locale)}>{workshopCopy[locale].home}</Link>
              <span>/</span>
              <span>{design.designLabel}</span>
              <span>/</span>
              <span>{copy.heroParts.join(" ")}</span>
            </nav>
            <p className={styles.eyebrow}>{design.designLabel}</p>
            <h1>
              {copy.heroParts[0]} <span>{copy.heroParts[1]}</span>
            </h1>
            <p className={styles.heroDescription}>{copy.intro}</p>
            <div className={styles.heroActions}>
              <a href="#nguyen-tac" className={styles.primaryButton}>
                {copy.explore}
              </a>
              <ConsultationButton className={styles.outlineButton}>
                {common.consultation}
              </ConsultationButton>
            </div>
            <div className={`${styles.heroTags} ${local.heroTags}`}>
              {copy.principles.map((item, i) => (
                <a key={ids[i]} href={`#${ids[i]}`}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src={`${base}/hero.webp`}
                alt={copy.heroParts.join(" ")}
                fill
                priority
                sizes="(max-width:700px) 92vw, 42vw"
                className={styles.coverImage}
              />
            </div>
            <div className={`${styles.heroBadge} ${local.heroBadge}`}>
              <span className={styles.badgeIcon}>
                <BedDouble size={22} aria-hidden="true" />
              </span>
              <span>
                <small>Tổ Ấm Hoàn Hảo</small>
                <strong>{copy.badge}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="nguyen-tac" className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{design.designLabel}</p>
            <h2>{copy.principlesTitle}</h2>
          </div>
          <div className={styles.showcaseList}>
            {copy.principles.map((item, i) => {
              const Icon = icons[i];
              return (
                <article
                  id={ids[i]}
                  key={ids[i]}
                  className={`${styles.showcase} ${i % 2 ? styles.showcaseReverse : ""}`}
                >
                  <div className={styles.showcaseImage}>
                    <Image
                      src={`${base}/${ids[i]}.webp`}
                      alt={item.title}
                      fill
                      sizes="(max-width:700px) 92vw, 52vw"
                      className={styles.coverImage}
                    />
                  </div>
                  <div className={styles.showcaseCard}>
                    <span className={styles.showcaseNumber} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.smallIcon}>
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                    <p className={styles.showcaseDescription}>
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className={local.colorsSection}>
        <div className={`${styles.container} ${local.colorsLayout}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{design.designLabel}</p>
            <h2>{copy.colorsTitle}</h2>
            <p>{copy.colorsIntro}</p>
          </div>
          <div className={local.colorGrid}>
            {copy.colors.map((item, i) => (
              <article key={item.title}>
                <span
                  className={local.swatch}
                  style={{ background: swatches[i] }}
                  aria-hidden="true"
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={local.servicesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{design.designLabel}</p>
            <h2>{copy.servicesTitle}</h2>
          </div>
          <div className={local.services}>
            {common.services.map((item, i) => {
              const Icon = serviceIcons[i];
              return (
                <article key={item.title} className={styles.typeCard}>
                  <span className={styles.smallIcon}>
                    <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{process.processLabel}</p>
            <h2>{process.processTitle}</h2>
          </div>
          <ol className={`${styles.processGrid} ${local.process}`}>
            {process.processSteps.map((step, i) => (
              <li key={step} className={styles.processCard}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={styles.lowerSection}>
        <div className={styles.container}>
          <div className={styles.commitmentBox}>
            <div>
              <p className={styles.eyebrow}>{design.commitmentsLabel}</p>
              <h2>{copy.commitmentsTitle}</h2>
              <p>{copy.commitmentsIntro}</p>
            </div>
            <ul>
              {design.commitments.map((item) => (
                <li key={item}>
                  <Check size={19} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.finalCta}>
        <Image
          src={`${base}/hero.webp`}
          alt=""
          fill
          sizes="100vw"
          className={styles.coverImage}
        />
        <div className={styles.finalOverlay} />
        <div className={styles.finalContent}>
          <h2>{common.cta.title}</h2>
          <p>{copy.intro}</p>
          <div>
            <ConsultationButton className={styles.lightButton}>
              {townhouseConstructionCopy[locale].booking}
            </ConsultationButton>
            <a href="tel:0903897555" className={styles.phoneButton}>
              {common.call}: 0903.897.555
            </a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
