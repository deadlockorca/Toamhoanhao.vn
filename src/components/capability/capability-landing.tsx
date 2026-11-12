import { localizedPageHref } from "@/lib/localized-pages";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  CircleCheck,
  ClipboardCheck,
  House,
  PencilRuler,
  Phone,
  Plus,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { capabilityCopy } from "@/data/capability";
import { workshopCopy, workshopFactories } from "@/data/workshop";
import { homePath, type SiteLocale } from "@/lib/locale";
import styles from "./capability.module.css";

const livingImage = "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/nang-luc/08704159fda97c47.webp";
const pillarImages = [
  livingImage,
  "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/nang-luc/c88b5b340947ba98.webp",
  "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/gioi-thieu/0a5ec0d1a4de0f3e.webp",
];
const qualityIcons = [BadgeCheck, ClipboardCheck, Check];
const teamIcons = [PencilRuler, ShieldCheck, UsersRound, BriefcaseBusiness];
const gallery = [
  {
    image: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/bao-gia/xay-dung/articles/c93f971e3d163463.webp",
    href: "/thiet-ke-noi-that/thiet-ke-chung-cu",
  },
  {
    image: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/nha-pho/f7d99f79601502e2.webp",
    href: "/thiet-ke-noi-that/thiet-ke-nha-pho",
  },
  {
    image: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/biet-thu/a9be0fcea5a96b9f.webp",
    href: "/thiet-ke-noi-that/biet-thu",
  },
  {
    image: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/bao-gia/1f69e87b2c53922f.webp",
    href: "/du-an?danh-muc=van-phong",
  },
  {
    image:
      "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/kien-thuc/kien-thuc-nha-dep/articles/6ce9c501b08fdabd.webp",
    href: "/du-an?danh-muc=nha-hang",
  },
  {
    image: "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/content/thiet-ke-noi-that/khach-san/bf7fb49a8b813c24.webp",
    href: "/thiet-ke-noi-that/thiet-ke-khach-san",
  },
];
const metricValues = ["15+", "500+", "1000+", "98%"];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className={styles.sectionDescription}>{description}</p>
      )}
    </div>
  );
}

export function CapabilityLanding({ locale = "vi" }: { locale?: SiteLocale }) {
  const copy = capabilityCopy[locale];
  const common = workshopCopy[locale];
  const title = copy.heroParts.join(" ");
  return (
    <main className={styles.page} lang={locale}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label={title}>
                <Link href={homePath(locale)}>{common.home}</Link>
                <span>/</span>
                <Link href={localizedPageHref("/gioi-thieu", locale)}>
                  {copy.about}
                </Link>
                <span>/</span>
                <span>{title}</span>
              </nav>
              <p className={styles.eyebrow}>{copy.about}</p>
              <h1>
                {copy.heroParts[0]} <span>{copy.heroParts[1]}</span>{" "}
                {copy.heroParts[2]}
              </h1>
              <p className={styles.intro}>{copy.intro}</p>
              <div className={styles.heroActions}>
                <ConsultationButton className={styles.primaryButton}>
                  {common.consultation}
                </ConsultationButton>
                <a href="#quy-trinh" className={styles.outlineButton}>
                  {copy.viewProcess}
                </a>
              </div>
              <div className={styles.heroTags}>
                {copy.pillars.map((pillar, i) => (
                  <a key={pillar.eyebrow} href={`#nang-luc-${i + 1}`}>
                    {pillar.eyebrow}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroImage}>
                <Image
                  src={livingImage}
                  alt={copy.gallery.labels[0]}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 760px) 90vw, 530px"
                />
              </div>
              <a href="#nang-luc" className={styles.heroBadge}>
                <span>
                  <House size={20} aria-hidden="true" />
                </span>
                <div>
                  <small>{common.nationwide}</small>
                  <strong>
                    {copy.pillars.map((p) => p.eyebrow).join(" · ")}
                  </strong>
                </div>
              </a>
            </div>
          </div>
          <dl className={styles.metrics}>
            {copy.metrics.map((metric, i) => (
              <div key={metric.title}>
                <dt>{metricValues[i]}</dt>
                <dd>
                  <strong>{metric.title}</strong>
                  <span>{metric.description}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section id="nang-luc" className={`${styles.container} ${styles.core}`}>
        <SectionHeading {...copy.core} />
        <div className={styles.pillars}>
          {copy.pillars.map((pillar, i) => (
            <article
              key={pillar.eyebrow}
              id={`nang-luc-${i + 1}`}
              className={styles.pillar}
            >
              <div className={styles.pillarVisual}>
                <div className={styles.pillarImage}>
                  <Image
                    src={pillarImages[i]}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 760px) 90vw, 560px"
                  />
                </div>
                <span className={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.pillarCopy}>
                <p className={styles.eyebrow}>{pillar.eyebrow}</p>
                <h3>{pillar.title}</h3>
                <p className={styles.bodyCopy}>{pillar.description}</p>
                <ul className={styles.checkList}>
                  {pillar.checks.map((check) => (
                    <li key={check}>
                      <CircleCheck size={17} aria-hidden="true" />
                      {check}
                    </li>
                  ))}
                </ul>
                <div className={styles.deliverables}>
                  <p>{copy.deliverables}</p>
                  <div>
                    {pillar.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.tintedSection}>
        <div className={styles.container}>
          <SectionHeading {...copy.quality} />
          <div className={styles.qualityGrid}>
            {copy.quality.cards.map((card, i) => {
              const Icon = qualityIcons[i];
              return (
                <article key={card.title} className={styles.qualityCard}>
                  <span className={styles.icon}>
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
          <div className={styles.tools} aria-label="AutoCAD, SketchUp, 3ds Max">
            {["AutoCAD", "SketchUp", "3ds Max"].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeading {...copy.gallery} />
        <div className={styles.gallery}>
          {gallery.map((item, i) => (
            <Link
              key={item.href}
              href={localizedPageHref(item.href, locale)}
              className={styles.galleryCard}
            >
              <Image
                src={item.image}
                alt={copy.gallery.labels[i]}
                fill
                sizes="(max-width: 540px) 90vw, (max-width: 760px) 45vw, 370px"
              />
              <span>
                {copy.gallery.labels[i]}
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section id="quy-trinh" className={styles.tintedSection}>
        <div className={styles.container}>
          <SectionHeading {...copy.process} />
          <ol className={styles.process}>
            {copy.process.steps.map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={`${styles.container} ${styles.section}`}>
        <SectionHeading {...copy.team} />
        <div className={styles.teamGrid}>
          {copy.team.cards.map((card, i) => {
            const Icon = teamIcons[i];
            return (
              <article key={card.title} className={styles.teamCard}>
                <span className={styles.icon}>
                  <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
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
          <SectionHeading {...copy.factories} />
          <div className={styles.factoryGrid}>
            {workshopFactories.slice(1).map((factory, i) => (
              <Link
                key={factory.region}
                href={localizedPageHref(
                  "/gioi-thieu/xuong-san-xuat-noi-that",
                  locale,
                )}
                className={styles.factoryCard}
              >
                <span>{factory.region}</span>
                <h3>{common.factoryTitles[i + 1]}</h3>
                <p>{factory.address}</p>
              </Link>
            ))}
          </div>
          <div className={styles.areas}>
            <strong>{copy.factories.areas}</strong>
            {[
              "Hà Nội",
              "TP. Hồ Chí Minh",
              "TP. Thủ Đức",
              "Bình Dương",
              copy.factories.nearby,
            ].map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.faq}`}>
        <div>
          <p className={styles.eyebrow}>{copy.faq.eyebrow}</p>
          <h2>{copy.faq.title}</h2>
        </div>
        <div className={styles.questions}>
          {copy.faq.items.map((item) => (
            <details key={item.title}>
              <summary>
                {item.title}
                <Plus size={16} aria-hidden="true" />
              </summary>
              <p>{item.description}</p>
            </details>
          ))}
        </div>
      </section>
      <section className={styles.cta}>
        <Image
          src={livingImage}
          alt=""
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />
        <div className={styles.ctaCopy}>
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.description}</p>
          <div>
            <ConsultationButton className={styles.ctaButton}>
              {common.consultation}
            </ConsultationButton>
            <a href="tel:0903897555" className={styles.phoneButton}>
              <Phone size={16} aria-hidden="true" />
              0903.897.555
            </a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
