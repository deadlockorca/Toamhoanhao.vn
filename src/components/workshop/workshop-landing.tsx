import { introTranslator } from "@/data/introduction";
import { localizedPageHref } from "@/lib/localized-pages";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Castle,
  House,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  workshopCopy,
  workshopFactories,
  workshopOffices,
} from "@/data/workshop";
import { homePath, type SiteLocale } from "@/lib/locale";
import styles from "./workshop.module.css";

const serviceIcons = [Building2, House, Sparkles, Castle];
const serviceLinks = [
  "/thiet-ke-noi-that/thiet-ke-chung-cu",
  "/thiet-ke-noi-that/thiet-ke-nha-pho",
  "/thiet-ke-noi-that/biet-thu",
  "/mau-thiet-ke?chu-de=biet-thu-co-dien#portfolio-list",
];
const contacts = [
  {
    icon: Phone,
    label: "Hotline",
    value: "0903.897.555",
    href: "tel:0903897555",
  },
  {
    icon: Phone,
    label: "Hotline",
    value: "0972.596.544",
    href: "tel:0972596544",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hotro.toamhoanhao@gmail.com",
    href: "mailto:hotro.toamhoanhao@gmail.com",
  },
];
function mapHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function WorkshopLanding({ locale = "vi" }: { locale?: SiteLocale }) {
  const copy = workshopCopy[locale];
  const t = introTranslator(locale);
  return (
    <main className={styles.page} lang={locale}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label={copy.title}>
                <Link href={homePath(locale)}>{copy.home}</Link>
                <span>/</span>
                <span>{copy.title}</span>
              </nav>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h1>
                {copy.heading} <span>{copy.accent}</span>
              </h1>
              <p className={styles.intro}>
                {locale === "vi" ? (
                  <>
                    {copy.intro.split("12 năm")[0]}
                    <strong>12 năm</strong>
                    {copy.intro.split("12 năm")[1]}
                  </>
                ) : (
                  copy.intro
                )}
              </p>
              <dl className={styles.metrics}>
                {[
                  ["12", copy.years],
                  ["4", copy.branches],
                  ["3", copy.factories],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt>{value}</dt>
                    <dd>{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroImage}>
                <Image
                  src="/images/gioi-thieu/xuong-san-xuat.png"
                  alt={copy.title}
                  fill
                  priority
                  sizes="(max-width: 760px) 90vw, 520px"
                />
              </div>
              <a href="#dia-chi" className={styles.locationBadge}>
                <span className={styles.badgeIcon}>
                  <House size={20} aria-hidden="true" />
                </span>
                <span>
                  <small>{copy.nationwide}</small>
                  <strong>Hà Nội · TP.HCM · Bình Dương</strong>
                </span>
              </a>
            </div>
          </div>
          <div className={styles.services}>
            {copy.services.map((label, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link
                  key={label}
                  href={localizedPageHref(serviceLinks[i], locale)}
                  className={styles.service}
                >
                  <span className={styles.serviceIcon}>
                    <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{label}</strong>
                    <small>{copy.serviceCaption}</small>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section id="dia-chi" className={`${styles.container} ${styles.offices}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.addressesLabel}</p>
          <h2>{copy.addressesHeading}</h2>
        </div>
        <div className={styles.officeGrid}>
          {workshopOffices.map((office) => (
            <article key={office.city} className={styles.officeCard}>
              <span className={styles.city}>{office.city}</span>
              <h3>{office.title}</h3>
              <p>{office.address}</p>
              <div className={styles.officeActions}>
                <a
                  href={mapHref(
                    `${office.title}, ${office.address}, ${office.city}, Việt Nam`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.directions}: ${office.city}`}
                >
                  {copy.directions}
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
                <a
                  href="tel:0903897555"
                  aria-label={`${copy.call}: ${office.city}`}
                >
                  <Phone size={13} aria-hidden="true" />
                  {copy.call}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.production}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{copy.production}</p>
            <h2>{copy.productionHeading}</h2>
          </div>
          <div className={styles.factoryGrid}>
            {workshopFactories.map((factory, i) => (
              <article key={factory.region} className={styles.factoryCard}>
                <div className={styles.factoryImage}>
                  <Image
                    src={factory.image}
                    alt={copy.factoryTitles[i]}
                    fill
                    sizes="(max-width: 760px) 90vw, (max-width: 1024px) 45vw, 370px"
                    className={i === 1 ? styles.hanoiImage : undefined}
                  />
                  <span>{i === 0 ? t("centralRegion") : factory.region}</span>
                </div>
                <div className={styles.factoryCopy}>
                  <h3>{copy.factoryTitles[i]}</h3>
                  <p>{factory.address ?? copy.pending}</p>
                  {factory.address && (
                    <a
                      href={mapHref(`${factory.address}, Việt Nam`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.directions}
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.contactSection}`}>
        <div className={styles.contactPanel}>
          <div className={styles.contactCopy}>
            <p className={styles.eyebrow}>{copy.contact}</p>
            <h2>{copy.contactHeading}</h2>
            <p>{copy.contactIntro}</p>
          </div>
          <div className={styles.contactActions}>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a key={contact.value} href={contact.href}>
                  <Icon size={18} aria-hidden="true" />
                  <span>
                    <small>
                      {contact.icon === Mail ? t("email") : t("hotline")}
                    </small>
                    <strong>{contact.value}</strong>
                  </span>
                </a>
              );
            })}
            <ConsultationButton className={styles.consultation}>
              {copy.consultation}
            </ConsultationButton>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
