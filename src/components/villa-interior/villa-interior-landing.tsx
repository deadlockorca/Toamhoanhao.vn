import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Lightbulb,
  Wallet,
  ClipboardCheck,
  ShieldCheck,
  Leaf,
  House,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsultationButton } from "@/components/consultation-popup";
import { villaInteriorCopy } from "@/data/villa-interior";
import { workshopCopy } from "@/data/workshop";
import { kitchenSpaceCopy } from "@/data/kitchen-space";
import { townhouseConstructionCopy } from "@/data/townhouse-construction";
import { homePath, type SiteLocale } from "@/lib/locale";
import styles from "@/app/thiet-ke-noi-that/thiet-ke-khach-san/hotel.module.css";
import local from "./villa-interior.module.css";

const ids = ["tan-co-dien", "co-dien", "hien-dai", "duong-dai"];
const images = [
  "/images/thiet-ke-noi-that/tan-co-dien/phong-khach.webp",
  "/images/thiet-ke-noi-that/biet-thu/hero.webp",
  "/images/thiet-ke-noi-that/nha-pho/hien-dai.webp",
  "/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp",
];
const concernIcons = [Lightbulb, Wallet, ClipboardCheck, ShieldCheck];
const heroImage = "/images/thiet-ke-noi-that/biet-thu/hero.webp";
export function VillaInteriorLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = villaInteriorCopy[locale];
  const common = kitchenSpaceCopy[locale];
  return (
    <main lang={locale} className={`${styles.page} ${local.page}`}>
      <SiteHeader locale={locale} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label={copy.title}>
              <Link href={homePath(locale)}>{workshopCopy[locale].home}</Link>
              <span>/</span>
              <span>{copy.designLabel}</span>
              <span>/</span>
              <span>{copy.title}</span>
            </nav>
            <p className={styles.eyebrow}>{copy.designLabel}</p>
            <h1>
              {copy.heroParts[0]} <span>{copy.heroParts[1]}</span>
            </h1>
            <p className={styles.heroDescription}>{copy.intro}</p>
            <div className={styles.heroActions}>
              <a href="#phong-cach" className={styles.primaryButton}>
                {copy.explore}
              </a>
              <ConsultationButton className={styles.outlineButton}>
                {common.consultation}
              </ConsultationButton>
            </div>
            <div className={`${styles.heroTags} ${local.heroTags}`}>
              {copy.styles.map((item, i) => (
                <a key={ids[i]} href={`#${ids[i]}`}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src={heroImage}
                alt={copy.title}
                fill
                priority
                sizes="(max-width:700px) 90vw, 42vw"
                className={styles.coverImage}
              />
            </div>
            <div className={`${styles.heroBadge} ${local.heroBadge}`}>
              <span className={styles.badgeIcon}>
                <House size={22} aria-hidden="true" />
              </span>
              <span>
                <small>Tổ Ấm Hoàn Hảo</small>
                <strong>{copy.badge}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={local.pricingSection}>
        <div className={`${styles.container} ${local.pricingGrid}`}>
          <div className={local.priceCard}>
            <p className={styles.eyebrow}>{copy.pricingLabel}</p>
            <h2>{copy.pricingTitle}</h2>
            <p className={local.price}>
              250.000 <span>{copy.unit}</span>
            </p>
            <p>{copy.pricingNote}</p>
            <ConsultationButton className={styles.primaryButton}>
              {common.request}
            </ConsultationButton>
          </div>
          <div className={styles.sectionIntro}>
            <figure className={local.priceTable}>
              <a
                href="/images/thiet-ke-noi-that/biet-thu/bao-gia.webp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/thiet-ke-noi-that/biet-thu/bao-gia.webp"
                  alt={copy.pricingLabel}
                  width={530}
                  height={278}
                  sizes="(max-width: 700px) 92vw, 530px"
                />
              </a>
            </figure>
            <span className={styles.smallIcon}>
              <Leaf size={24} aria-hidden="true" />
            </span>
            <h2>{copy.natureTitle}</h2>
            <p>{copy.natureIntro}</p>
          </div>
        </div>
      </section>
      <section id="phong-cach" className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{copy.stylesLabel}</p>
            <h2>{copy.stylesTitle}</h2>
          </div>
          <div className={styles.showcaseList}>
            {copy.styles.map((item, i) => (
              <article
                id={ids[i]}
                key={ids[i]}
                className={`${styles.showcase} ${i % 2 ? styles.showcaseReverse : ""}`}
              >
                <div className={styles.showcaseImage}>
                  <Image
                    src={images[i]}
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
                  <p className={styles.eyebrow}>{copy.stylesLabel}</p>
                  <h3>{item.title}</h3>
                  <p className={styles.showcaseDescription}>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={local.concernsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{copy.concernsLabel}</p>
            <h2>{copy.concernsTitle}</h2>
          </div>
          <div className={local.concerns}>
            {copy.concerns.map((item, i) => {
              const Icon = concernIcons[i];
              return (
                <article className={styles.typeCard} key={item.title}>
                  <span className={styles.smallIcon}>
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className={local.benefitsSection}>
        <div className={styles.container}>
          <div className={local.benefits}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>{copy.benefitsLabel}</p>
              <h2>{copy.benefitsTitle}</h2>
            </div>
            <ul>
              {copy.benefits.map((item) => (
                <li key={item}>
                  <BadgeCheck size={20} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.commitmentBox}>
            <div>
              <p className={styles.eyebrow}>{copy.commitmentsLabel}</p>
              <h2>{copy.commitmentsTitle}</h2>
              <p>{copy.intro}</p>
            </div>
            <ul>
              {copy.commitments.map((item) => (
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
          src={heroImage}
          alt=""
          fill
          sizes="100vw"
          className={styles.coverImage}
        />
        <div className={styles.finalOverlay} />
        <div className={styles.finalContent}>
          <h2>{copy.ctaTitle}</h2>
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
