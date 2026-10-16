import { localizedPageHref } from "@/lib/localized-pages";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  HardHat,
  House,
  PencilRuler,
  Ruler,
  Sparkles,
} from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  architectureTeamCopy,
  architectureTeamMembers,
} from "@/data/architecture-team";
import { capabilityCopy } from "@/data/capability";
import { workshopCopy } from "@/data/workshop";
import { homePath, type SiteLocale } from "@/lib/locale";
import styles from "./architecture-team.module.css";

const teamImage = "/images/doi-ngu/banner.png";
const expertiseIcons = [
  Building2,
  House,
  PencilRuler,
  HardHat,
  Ruler,
  Sparkles,
];
const benefitIcons = [
  ArrowLeftRight,
  Building2,
  Sparkles,
  CircleDollarSign,
  BadgeCheck,
];
const metricValues = ["15+", "500+", "98%", "100%"];

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function ArchitectureTeamLanding({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const copy = architectureTeamCopy[locale];
  const common = workshopCopy[locale];
  const about = capabilityCopy[locale].about;
  const title = copy.heroParts.join(" ");
  return (
    <main className={styles.page} lang={locale}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label={title}>
              <Link href={homePath(locale)}>{common.home}</Link>
              <span>/</span>
              <Link href={localizedPageHref("/gioi-thieu", locale)}>
                {about}
              </Link>
              <span>/</span>
              <span>{title}</span>
            </nav>
            <p className={styles.eyebrow}>{about}</p>
            <h1>
              {copy.heroParts[0]} <span>{copy.heroParts[1]}</span>
            </h1>
            <p className={styles.intro}>{copy.intro}</p>
            <div className={styles.heroActions}>
              <ConsultationButton className={styles.primaryButton}>
                {copy.contact}
              </ConsultationButton>
              <a href="#doi-ngu" className={styles.outlineButton}>
                {copy.meet}
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src={teamImage}
                alt={title}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 760px) 90vw, 560px"
              />
            </div>
            <a href="#doi-ngu" className={styles.heroBadge}>
              <span className={styles.badgeNumber}>30+</span>
              <span>
                <small>{copy.badge.title}</small>
                <strong>{copy.badge.description}</strong>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.overview}`}>
        <div className={styles.countCard}>
          <p className={styles.bigCount}>
            30<sup>+</sup>
          </p>
          <p>
            {copy.badge.title}
            <br />
            {copy.badge.description}
          </p>
        </div>
        <div className={styles.overviewCopy}>
          <p className={styles.eyebrow}>{copy.overview.eyebrow}</p>
          <h2>{copy.overview.title}</h2>
          {copy.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section id="doi-ngu" className={styles.tintedSection}>
        <div className={styles.container}>
          <SectionHeading {...copy.leadership} />
          <div className={styles.members}>
            {architectureTeamMembers.map((member, i) => (
              <article key={member.name} className={styles.memberCard}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.initials}
                </div>
                <p className={styles.prefix}>{copy.members[i].prefix}</p>
                <h3>{member.name}</h3>
                <p className={styles.role}>{copy.members[i].role}</p>
                <p className={styles.memberDescription}>
                  {copy.members[i].description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeading {...copy.expertise} />
        <div className={styles.expertise}>
          {copy.expertise.cards.map((card, i) => {
            const Icon = expertiseIcons[i];
            return (
              <article key={card.title} className={styles.expertiseCard}>
                <span className={styles.icon}>
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className={styles.tintedSection}>
        <div className={styles.container}>
          <SectionHeading {...copy.process} />
          <ol className={styles.process}>
            {copy.process.cards.map((card, i) => (
              <li key={card.title}>
                <span className={styles.stepNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeading {...copy.benefits} />
        <div className={styles.benefits}>
          {copy.benefits.cards.map((card, i) => {
            const Icon = benefitIcons[i];
            return (
              <article
                key={card.title}
                className={
                  i === 0 ? styles.featuredBenefit : styles.benefitCard
                }
              >
                <span className={styles.icon}>
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className={styles.metricsBand}>
        <dl className={`${styles.container} ${styles.metrics}`}>
          {copy.metrics.map((label, i) => (
            <div key={label}>
              <dt>{metricValues[i]}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className={styles.cta}>
        <Image
          src={teamImage}
          alt=""
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />
        <div className={styles.ctaCopy}>
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.description}</p>
          <ConsultationButton className={styles.ctaButton}>
            {copy.book}
          </ConsultationButton>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
