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

const livingImage = "/images/nang-luc/living-room-v2.webp";
const pillarImages = [
  livingImage,
  "/images/nang-luc/site-inspection-v2.webp",
  "/images/gioi-thieu/xuong-san-xuat.png",
];
const qualityIcons = [BadgeCheck, ClipboardCheck, Check];
const teamIcons = [PencilRuler, ShieldCheck, UsersRound, BriefcaseBusiness];
const gallery = [
  {
    image: "/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp",
    href: "/thiet-ke-noi-that/thiet-ke-chung-cu",
  },
  {
    image: "/images/thiet-ke-noi-that/nha-pho/hero.webp",
    href: "/thiet-ke-noi-that/thiet-ke-nha-pho",
  },
  {
    image: "/images/thiet-ke-noi-that/biet-thu/hero.webp",
    href: "/thiet-ke-noi-that/biet-thu",
  },
  {
    image: "/images/bao-gia/van-phong.webp",
    href: "/du-an?danh-muc=van-phong",
  },
  {
    image:
      "/images/kien-thuc/kien-thuc-nha-dep/articles/7-phong-cach-thi-cong-noi-nha-hang-dang-cap-gioi.webp",
    href: "/du-an?danh-muc=nha-hang",
  },
  {
    image: "/images/thiet-ke-noi-that/khach-san/khach-san-5-sao.webp",
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
    <main className={styles.page}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label={title}>
                <Link href={homePath(locale)}>{common.home}</Link>
                <span>/</span>
                <Link href="/gioi-thieu">{copy.about}</Link>
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
              href={item.href}
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
                href={`${locale === "vi" ? "" : `/${locale}`}/gioi-thieu/xuong-san-xuat-noi-that`}
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
