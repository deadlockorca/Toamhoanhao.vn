import { introTranslator } from "@/data/introduction";
import { type SiteLocale } from "@/lib/locale";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JobBoard } from "@/app/gioi-thieu/tuyen-dung/job-board";
import styles from "@/app/gioi-thieu/tuyen-dung/recruitment.module.css";

export function RecruitmentLanding({ locale = "vi" }: { locale?: SiteLocale }) {
  const t = introTranslator(locale);
  const values = [
    {
      title: t("dedicationTitle"),
      content: t("dedicationDescription"),
    },
    {
      title: t("integrityTitle"),
      content: t("integrityDescription"),
    },
    {
      title: t("creativityTitle"),
      content: t("creativityDescription"),
    },
    {
      title: t("growthTitle"),
      content: t("growthDescription"),
    },
  ];

  const benefits = [
    {
      icon: "◕",
      title: t("payTitle"),
      content: t("payDescription"),
    },
    {
      icon: "♡",
      title: t("insuranceTitle"),
      content: t("insuranceDescription"),
    },
    {
      icon: "✎",
      title: t("trainingTitle"),
      content: t("trainingDescription"),
    },
    {
      icon: "↗",
      title: t("careerTitle"),
      content: t("careerDescription"),
    },
    {
      icon: "☻",
      title: t("workplaceTitle"),
      content: t("workplaceDescription"),
    },
    {
      icon: "★",
      title: t("activitiesTitle"),
      content: t("activitiesDescription"),
    },
  ];

  const steps = [
    {
      title: t("applyStepTitle"),
      content: t("applyStepDescription"),
    },
    {
      title: t("interviewTitle"),
      content: t("interviewDescription"),
    },
    {
      title: t("assessmentTitle"),
      content: t("assessmentDescription"),
    },
    {
      title: t("joinTitle"),
      content: t("joinDescription"),
    },
  ];

  return (
    <main className={styles.page} lang={locale}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.openBadge}>
                <span /> {t("openBadge")}{" "}
              </span>
              <h1>{t("recruitHero")}</h1>
              <p>{t("recruitIntro")} </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#vi-tri">
                  {t("viewOpenings")}{" "}
                </a>
                <a className={styles.outlineButton} href="#gui-ho-so">
                  {t("sendCv")}{" "}
                </a>
              </div>
              <div className={styles.heroStats}>
                <div>
                  <strong>12</strong>
                  <span>{t("openPositions")}</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>{t("departments")}</span>
                </div>
                <div>
                  <strong>{t("fiveDays")}</strong>
                  <span>{t("responseLabel")}</span>
                </div>
              </div>
            </div>
            <div className={styles.heroCollage}>
              <div className={styles.heroFactory}>
                <Image
                  src="/images/gioi-thieu/xuong-san-xuat.png"
                  alt={t("factoryAlt")}
                  fill
                  priority
                  sizes="(max-width: 700px) 50vw, 350px"
                />
              </div>
              <div className={styles.heroTop}>
                <Image
                  src="/images/gioi-thieu/banner.png"
                  alt={t("interiorAlt")}
                  fill
                  priority
                  sizes="(max-width: 700px) 42vw, 275px"
                />
              </div>
              <div className={styles.heroBottom}>
                <Image
                  src="/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp"
                  alt={t("livingRoomAlt")}
                  fill
                  priority
                  sizes="(max-width: 700px) 42vw, 275px"
                />
              </div>
              <div className={styles.heroNote}>
                <b>↗</b>
                <span>
                  <strong>{t("growTogether")}</strong>
                  <small>{t("growCaption")}</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>{t("cultureEyebrow")}</p>
              <h2>{t("cultureTitle")}</h2>
            </div>
            <p>{t("cultureDescription")} </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <article key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vi-tri" className={styles.jobsSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{t("opportunities")}</p>
          <h2>{t("jobsTitle")}</h2>
          <JobBoard key={locale} locale={locale} />
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{t("benefitsEyebrow")}</p>
          <h2>{t("benefitsTitle")}</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitPhoto}>
              <Image
                src="/images/gioi-thieu/xuong-san-xuat.png"
                alt={t("workshopTitle")}
                fill
                sizes="(max-width: 700px) 100vw, 340px"
              />
              <div>
                <strong>{t("teamTitle")} </strong>
                <span>{t("teamDescription")} </span>
              </div>
            </div>
            <div className={styles.benefitCards}>
              {benefits.map((benefit) => (
                <article key={benefit.title}>
                  <span className={styles.benefitIcon}>{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeading}>
            <p className={styles.eyebrow}>{t("processEyebrow")}</p>
            <h2>{t("processTitle")}</h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </article>
            ))}
          </div>
          <div id="gui-ho-so" className={styles.applyPanel}>
            <div>
              <p className={styles.eyebrow}>{t("applyEyebrow")}</p>
              <h2>{t("applyTitle")}</h2>
              <p>
                {t("emailSubject")} <strong>{t("emailTemplate")}</strong>
                <br />
                {t("portfolioNote")}{" "}
              </p>
            </div>
            <div className={styles.applyContact}>
              <a
                href={`mailto:hotro.toamhoanhao@gmail.com?subject=${encodeURIComponent(t("emailTemplate"))}`}
              >
                hotro.toamhoanhao@gmail.com
              </a>
              <span>{t("emailHint")}</span>
              <small>{t("responseNote")} </small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <Image
          src="/images/gioi-thieu/tuyen-dung.png"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.bottomCtaShade} />
        <div className={styles.bottomCtaContent}>
          <h2>{t("recruitCtaTitle")}</h2>
          <p>{t("recruitCtaDescription")} </p>
          <div>
            <a href="mailto:hotro.toamhoanhao@gmail.com">{t("applyNow")}</a>
            <a href="tel:0903897555">{t("hotline")}: 0903.897.555</a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
