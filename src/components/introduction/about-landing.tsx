import { introTranslator } from "@/data/introduction";
import { homePath, type SiteLocale } from "@/lib/locale";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Binoculars, Factory, Gem, Target } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutVideo } from "@/app/gioi-thieu/about-video";
import styles from "@/app/gioi-thieu/about-page.module.css";

export function AboutLanding({ locale = "vi" }: { locale?: SiteLocale }) {
  const t = introTranslator(locale);
  const aboutValues = [
    {
      icon: Binoculars,
      title: t("visionTitle"),
      content: t("visionDescription"),
    },
    {
      icon: Target,
      title: t("missionTitle"),
      content: t("missionDescription"),
    },
    {
      icon: Gem,
      title: t("valuesTitle"),
      content: t("valuesDescription"),
    },
  ];

  const operatingPrinciples = [
    { value: "15+", label: t("years") },
    { value: "500+", label: t("completedProjects") },
    { value: "1000+", label: t("customers") },
    { value: "98%", label: t("satisfaction") },
  ];

  return (
    <main className={styles.page} lang={locale}>
      <div className={styles.headerSpacer}>
        <SiteHeader locale={locale} />
      </div>

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label={t("breadcrumb")}>
              <Link href={homePath(locale)}>{t("home")}</Link>
              <span aria-hidden="true">/</span>
              <span>{t("about")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("aboutEyebrow")}</p>
            <h1>{t("aboutTitle")}</h1>
            <p className={styles.heroDescription}>{t("aboutIntro")} </p>
            <div className={styles.heroActions}>
              <Link href="#cau-chuyen" className={styles.primaryButton}>
                {t("storyAction")} <ArrowRight size={16} />
              </Link>
              <ConsultationButton className={styles.outlineButton}>
                {t("consultation")}{" "}
              </ConsultationButton>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/gioi-thieu/banner.png"
              alt={t("warmSpace")}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.storySection} id="cau-chuyen">
        <div className={styles.container}>
          <div className={styles.leadershipCard}>
            <span className={styles.quoteIcon} aria-hidden="true">
              “
            </span>
            <div>
              <h2>{t("leadershipTitle")}</h2>
              <p>{t("leadershipMessage")} </p>
            </div>
          </div>

          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>{t("storyEyebrow")}</p>
              <h2>{t("storyTitle")}</h2>
              <p>
                <strong>Tổ Ấm Hoàn Hảo</strong> {t("storyIntro")}{" "}
              </p>
              <p>{t("storyProcess")} </p>
              <p>{t("storyPurpose")} </p>
            </div>
            <div className={styles.storyVisual}>
              <Image
                src="/images/gioi-thieu/thuong-hieu.png"
                alt={t("villaAlt")}
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
              />
              <span className={styles.experienceBadge}>
                <strong>15+</strong>
                <small>{t("years")}</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={`${styles.container} ${styles.valuesGrid}`}>
          {aboutValues.map(({ icon: Icon, title, content }) => (
            <article className={styles.valueCard} key={title}>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{content}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.videoSection}
        aria-labelledby="about-video-title"
      >
        <div className={`${styles.container} ${styles.videoGrid}`}>
          <div className={styles.videoCopy}>
            <span className={styles.factoryIcon}>
              <Factory size={23} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h2 id="about-video-title">{t("workshopTitle")}</h2>
            <p>{t("workshopDescription")} </p>
          </div>
          <AboutVideo locale={locale} />
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={`${styles.container} ${styles.capabilityGrid}`}>
          <div className={styles.capabilityVisual}>
            <Image
              src="/images/gioi-thieu/xuong-san-xuat.png"
              alt={t("workshopAlt")}
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className={styles.capabilityCopy}>
            <p className={styles.eyebrow}>{t("capabilityEyebrow")}</p>
            <h2>{t("capabilityTitle")}</h2>
            <p>{t("capabilityDescription")} </p>
            <div className={styles.metricsGrid}>
              {operatingPrinciples.map(({ value, label }) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <div className={`${styles.container} ${styles.closingGrid}`}>
          <div className={styles.closingQuote}>
            <span aria-hidden="true">“</span>
            <p>{t("closingQuote")} </p>
          </div>
          <div className={styles.closingVisual}>
            <Image
              src="/images/gioi-thieu/banner.png"
              alt={t("warmSpace")}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
