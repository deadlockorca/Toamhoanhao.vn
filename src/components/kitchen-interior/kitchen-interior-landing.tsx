import Image from "next/image";
import Link from "next/link";
import {
  ChefHat,
  Compass,
  Ruler,
  ShieldCheck,
  Sparkles,
  Palette,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsultationButton } from "@/components/consultation-popup";
import { kitchenInteriorCopy } from "@/data/kitchen-interior";
import { villaInteriorCopy } from "@/data/villa-interior";
import { kitchenSpaceCopy } from "@/data/kitchen-space";
import { townhouseConstructionCopy } from "@/data/townhouse-construction";
import { workshopCopy } from "@/data/workshop";
import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import styles from "@/app/thiet-ke-noi-that/thiet-ke-khach-san/hotel.module.css";
import shared from "../bedroom-interior/bedroom-interior.module.css";
import local from "../smart-interior/smart-interior.module.css";
import kitchen from "./kitchen-interior.module.css";
import { renovationConstructionCopy } from "@/data/renovation-construction";
const base = "/images/thiet-ke-noi-that/phong-bep";
const ids = ["huong-bep", "cong-nang", "chat-lieu", "son-ba", "mau-sac"];
const icons = [Compass, Ruler, ShieldCheck, Sparkles, Palette];
export function KitchenInteriorLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = kitchenInteriorCopy[locale],
    design = villaInteriorCopy[locale],
    common = kitchenSpaceCopy[locale];
  const process = renovationConstructionCopy[locale];
  return (
    <main lang={locale} className={`${styles.page} ${shared.page}`}>
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
              <a href="#luu-y" className={styles.primaryButton}>
                {copy.explore}
              </a>
              <ConsultationButton className={styles.outlineButton}>
                {common.consultation}
              </ConsultationButton>
            </div>
            <div className={`${styles.heroTags} ${shared.heroTags}`}>
              {copy.tips.slice(0, 3).map((b, i) => (
                <a key={ids[i]} href={`#${ids[i]}`}>
                  {b.title}
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
            <div className={`${styles.heroBadge} ${shared.heroBadge}`}>
              <span className={styles.badgeIcon}>
                <ChefHat size={22} aria-hidden="true" />
              </span>
              <span>
                <small>Tổ Ấm Hoàn Hảo</small>
                <strong>{copy.tips[0].title}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="luu-y" className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{design.benefitsLabel}</p>
            <h2>{copy.tipsTitle}</h2>
          </div>
          <div className={styles.showcaseList}>
            {copy.tips.map((b, i) => {
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
                      alt={b.title}
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
                    <h3>{b.title}</h3>
                    <p className={styles.showcaseDescription}>
                      {b.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className={shared.servicesSection}>
        <div className={`${styles.container} ${kitchen.checksLayout}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{design.designLabel}</p>
            <h2>{copy.checksTitle}</h2>
            <p>{copy.intro}</p>
          </div>
          <ul className={kitchen.checks}>
            {copy.checks.map((item) => (
              <li key={item}>
                <Check size={20} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={local.workshopSection}>
        <div className={`${styles.container} ${local.workshopGrid}`}>
          <div className={local.workshopImage}>
            <Image
              src="/images/gioi-thieu/xuong-san-xuat.png"
              alt={copy.workshopTitle}
              fill
              sizes="(max-width:700px) 92vw, 50vw"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.sectionIntro}>
            <span className={styles.smallIcon}>
              <ChefHat size={25} aria-hidden="true" />
            </span>
            <h2>{copy.workshopTitle}</h2>
            <p>{copy.workshopIntro}</p>
            <Link
              href={localizedPageHref(
                "/gioi-thieu/xuong-san-xuat-noi-that",
                locale,
              )}
              className={styles.textLink}
            >
              {copy.workshopTitle} →
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{process.processLabel}</p>
            <h2>{process.processTitle}</h2>
          </div>
          <ol className={`${styles.processGrid} ${shared.process}`}>
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
              <p>{copy.intro}</p>
            </div>
            <ul>
              {design.commitments.map((c) => (
                <li key={c}>
                  <Check size={19} aria-hidden="true" />
                  <span>{c}</span>
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
          <h2>{townhouseConstructionCopy[locale].ctaTitle}</h2>
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
