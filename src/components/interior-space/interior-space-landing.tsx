import Image from "next/image";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  KitchenArticleLibrary,
  type KitchenArticleCard,
} from "../kitchen-space/kitchen-article-library";
import type { KitchenSpaceCopy } from "@/data/kitchen-space";
import { workshopCopy } from "@/data/workshop";
import { homePath, type SiteLocale } from "@/lib/locale";
import styles from "../kitchen-space/kitchen-space.module.css";

type Props = {
  locale: SiteLocale;
  copy: KitchenSpaceCopy;
  articles: KitchenArticleCard[];
  heroImage: string;
  libraryId: string;
  serviceIcons: LucideIcon[];
};

export function InteriorSpaceLanding({
  locale,
  copy,
  articles,
  heroImage,
  libraryId,
  serviceIcons,
}: Props) {
  return (
    <main className={styles.page}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <nav
              className={styles.breadcrumb}
              aria-label={copy.heroParts.join(" ")}
            >
              <Link href={homePath(locale)}>{workshopCopy[locale].home}</Link>
              <span>/</span>
              <Link href="/thi-cong-noi-that">{copy.construction}</Link>
              <span>/</span>
              <span>{copy.heroParts.join(" ")}</span>
            </nav>
            <h1>
              {copy.heroParts[0]}
              <span>{copy.heroParts[1]}</span>
            </h1>
            <p>{copy.intro}</p>
            <div className={styles.heroActions}>
              <ConsultationButton className={styles.primaryButton}>
                {copy.consultation}
              </ConsultationButton>
              <a href="tel:0903897555" className={styles.phoneButton}>
                0903.897.555
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={heroImage}
            alt={copy.heroParts.join(" ")}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className={styles.services} aria-label={copy.processTitle}>
        {copy.services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <article key={service.title}>
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          );
        })}
      </section>
      <section
        id={libraryId}
        className={`${styles.container} ${styles.library}`}
      >
        <div className={styles.libraryHeading}>
          <h2>{copy.library.title}</h2>
          <p>{copy.library.description}</p>
        </div>
        <KitchenArticleLibrary
          articles={articles}
          categories={copy.categories}
          all={copy.all}
          read={copy.read}
          filterLabel={copy.filterLabel}
          results={copy.results}
        />
      </section>
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2>{copy.processTitle}</h2>
          <ol className={styles.process}>
            {copy.services.map((service, index) => (
              <li key={service.title}>
                <span>{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className={styles.closing}>
        <section className={styles.cta}>
          <div className={styles.ctaCopy}>
            <h2>{copy.cta.title}</h2>
            <p>{copy.cta.description}</p>
            <div>
              <ConsultationButton className={styles.primaryButton}>
                {copy.request}
              </ConsultationButton>
              <a href="tel:0903897555" className={styles.ctaPhone}>
                {copy.call} 0903.897.555
              </a>
            </div>
          </div>
        </section>
        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
