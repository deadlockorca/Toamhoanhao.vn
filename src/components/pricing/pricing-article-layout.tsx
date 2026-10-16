import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Check } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { budgetPackage169Copy } from "@/data/budget-package-169";
import { pricingText } from "@/data/pricing-localized";
import type { PricingArticle } from "@/data/pricing-articles";
import { pricingRoutes, type PricingCategory } from "@/data/pricing-routes";
import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import type { ReactNode } from "react";
import styles from "./pricing-article.module.css";

type ArticlePresentation = Pick<
  PricingArticle,
  | "slug"
  | "label"
  | "title"
  | "excerpt"
  | "image"
  | "scope"
  | "pricingBasis"
  | "highlights"
  | "archived"
>;
type RelatedPresentation = Pick<
  PricingArticle,
  "slug" | "label" | "title" | "image"
>;

export function PricingArticleLayout({
  article,
  relatedArticles,
  locale,
  toc,
  children,
  category = "interior",
}: {
  article: ArticlePresentation;
  relatedArticles: RelatedPresentation[];
  locale: SiteLocale;
  toc: Array<{ id: string; label: string }>;
  children: ReactNode;
  category?: PricingCategory;
}) {
  const t = (text: string) => pricingText(text, locale);
  const copy = budgetPackage169Copy[locale];
  const listingHref = localizedPageHref(pricingRoutes[category].path, locale);
  const isConstruction = category === "construction";
  const articleHref = (slug: string) =>
    localizedPageHref(`${pricingRoutes[category].path}/${slug}`, locale);

  return (
    <main lang={locale} className={styles.page}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <nav
              className={styles.breadcrumb}
              aria-label={t("Điều hướng trang")}
            >
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <span>/</span>
              <Link href={listingHref}>
                {t(isConstruction ? "Báo giá xây dựng" : "Báo giá nội thất")}
              </Link>
              <span>/</span>
              <span>{isConstruction ? article.title : article.label}</span>
            </nav>
            <p className={styles.eyebrow}>{article.label}</p>
            <h1>{article.title}</h1>
            <p className={styles.heroDescription}>{article.excerpt}</p>
            <div className={styles.heroActions}>
              <ConsultationButton className={styles.primaryButton}>
                {t(isConstruction ? "Nhận dự toán mới" : "Nhận báo giá mới")}
              </ConsultationButton>
              <a className={styles.phoneButton} href="tel:0903897555">
                0903.897.555
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <dl className={`${styles.container} ${styles.info}`}>
        {[
          [t("Nhóm nội dung"), article.label],
          [t("Phạm vi"), article.scope],
          [t("Cơ sở lập giá"), article.pricingBasis],
        ].map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      {article.archived && (
        <div className={`${styles.container} ${styles.archiveNote}`}>
          <AlertTriangle size={22} aria-hidden="true" />
          <p>
            {t(
              isConstruction
                ? "Nội dung được lưu từ website cũ, gồm các mốc giá và ví dụ theo thời điểm xuất bản. Đây không phải báo giá hiện hành; dự toán mới cần được khảo sát và lập theo vật liệu, điều kiện thực tế."
                : "Đây là hồ sơ ngân sách được lưu lại từ website cũ, không phải báo giá hiện hành. Dự toán mới sẽ được lập theo diện tích, vật liệu và thời điểm triển khai thực tế.",
            )}
          </p>
        </div>
      )}
      <div className={`${styles.container} ${styles.layout}`}>
        <article className={styles.content}>
          <section id="pham-vi" className={styles.scopeSection}>
            <p className={styles.eyebrow}>{t("Nội dung chính")}</p>
            <h2>{t("Nội dung và phạm vi cần lưu ý")}</h2>
            <div className={styles.highlights}>
              {article.highlights.map((text) => (
                <p key={text}>
                  <Check aria-hidden="true" size={13} />
                  <span>{text}</span>
                </p>
              ))}
            </div>
          </section>
          {children}
          <Link className={styles.back} href={listingHref}>
            <ArrowLeft size={13} aria-hidden="true" />
            {t(
              isConstruction
                ? "Quay lại báo giá xây dựng"
                : "Quay lại bảng báo giá",
            )}
          </Link>
        </article>
        <aside className={styles.sidebar}>
          <nav className={styles.toc} aria-label={copy.toc}>
            <p className={styles.eyebrow}>{copy.toc}</p>
            <ol>
              {toc.map(({ id, label }, index) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className={styles.advice}>
            <p className={styles.eyebrow}>{t("Báo giá theo công trình")}</p>
            <h2>{t("Cần một dự toán sát nhu cầu của bạn?")}</h2>
            <p>
              {t(
                "Gửi mặt bằng, diện tích và danh sách hạng mục dự kiến. Đội ngũ sẽ trao đổi để xác định phạm vi trước khi bóc tách báo giá.",
              )}
            </p>
            <dl>
              {[
                [t("Phạm vi tham khảo"), article.scope],
                [t("Cơ sở lập giá"), article.pricingBasis],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <ConsultationButton className={styles.adviceButton}>
              {t("Gửi yêu cầu báo giá")}
            </ConsultationButton>
          </div>
        </aside>
      </div>
      <section className={styles.related}>
        <div className={styles.container}>
          <div className={styles.relatedHeading}>
            <div>
              <p className={styles.eyebrow}>{t("Đọc thêm")}</p>
              <h2>{t("Bài viết báo giá liên quan")}</h2>
            </div>
            <Link href={listingHref}>{t("Xem tất cả")} →</Link>
          </div>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((item) => (
              <article key={item.slug}>
                <Link
                  className={styles.relatedImage}
                  href={articleHref(item.slug)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </Link>
                <p className={styles.eyebrow}>{item.label}</p>
                <h3>
                  <Link href={articleHref(item.slug)}>{item.title}</Link>
                </h3>
                <Link className={styles.readMore} href={articleHref(item.slug)}>
                  {t("Xem bài viết")} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.closing}>
        <h2>
          {t("Hãy kể chúng tôi nghe")} {t("về ngôi nhà của bạn.")}
        </h2>
        <ConsultationButton className={styles.adviceButton}>
          {t("Đặt lịch tư vấn ngay")}
        </ConsultationButton>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
