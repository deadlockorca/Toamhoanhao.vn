import { constructionArticleText } from "@/data/construction-articles-localized";
import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import shared from "@/components/pricing/pricing-article.module.css";
import styles from "./space-article.module.css";

type SpaceArticleData = {
  label: string;
  title: string;
  excerpt: string;
  image: string;
  highlights: string[];
  sections: {
    title: string;
    paragraphs: string[];
    images?: { src: string; alt: string; width?: number; height?: number }[];
  }[];
};

type SpaceArticleCategory = {
  label: string;
  href: string;
  sectionPrefix: string;
  consultationLabel: string;
  consultationTitle: string;
  relatedTitle: string;
  backLabel: string;
};

export function SpaceArticle({
  article,
  relatedArticles,
  category,
  locale = "vi",
}: {
  article: SpaceArticleData;
  relatedArticles: {
    slug: string;
    label: string;
    title: string;
    image: string;
    href: string;
  }[];
  category: SpaceArticleCategory;
  locale?: SiteLocale;
}) {
  const t = (text: string) => constructionArticleText(text, locale);
  const listingHref = localizedPageHref(category.href, locale);
  const isPricing = article.label === t("Báo giá");
  const toc = [
    { id: "diem-noi-bat", label: t("Điểm nổi bật của bài viết") },
    ...article.sections.map((section, index) => ({
      id: `${category.sectionPrefix}-${index + 1}`,
      label: section.title,
    })),
  ];

  return (
    <main lang={locale} className={`${shared.page} ${styles.page}`}>
      <SiteHeader locale={locale} />
      <div className={shared.headerSpacer} />
      <section className={shared.hero}>
        <div className={`${shared.container} ${shared.heroInner}`}>
          <div className={shared.heroCopy}>
            <nav
              className={shared.breadcrumb}
              aria-label={t("Điều hướng trang")}
            >
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <span>/</span>
              <Link href={listingHref}>{t(category.label)}</Link>
              <span>/</span>
              <span>{article.label}</span>
            </nav>
            <p className={shared.eyebrow}>{article.label}</p>
            <h1>{article.title}</h1>
            <p className={shared.heroDescription}>{article.excerpt}</p>
            <div className={shared.heroActions}>
              <ConsultationButton className={shared.primaryButton}>
                {t("Nhận tư vấn")}
              </ConsultationButton>
              <a href="tel:0903897555" className={shared.phoneButton}>
                0903.897.555
              </a>
            </div>
          </div>
        </div>
        <div className={shared.heroImage}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            preload
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <dl className={`${shared.container} ${shared.info}`}>
        {[
          ["content-group", t("Nhóm nội dung"), article.label],
          ["category", t("Chuyên mục"), t(category.label)],
          ["provider", t("Đơn vị thực hiện"), t("Tổ Ấm Hoàn Hảo")],
        ].map(([id, label, value]) => (
          <div key={id}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className={`${shared.container} ${shared.layout}`}>
        <article className={shared.content}>
          <section id="diem-noi-bat" className={shared.scopeSection}>
            <p className={shared.eyebrow}>{t("Nội dung chính")}</p>
            <h2>{t("Những điểm nổi bật của bài viết")}</h2>
            <ul className={styles.highlights}>
              {article.highlights.map((text) => (
                <li key={text}>
                  <Check size={15} aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>
          {article.sections.map((section, index) => (
            <section
              id={`${category.sectionPrefix}-${index + 1}`}
              key={section.title}
              className={shared.articleSection}
            >
              <span className={shared.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.sectionHeading}>
                <h2>{section.title}</h2>
                {(section.images?.length ?? 0) > 1 && (
                  <span className={styles.count}>
                    {section.images?.length} {t("ảnh")}
                  </span>
                )}
              </div>
              {section.paragraphs.map((paragraph, paragraphIndex) => {
                const isListItem = /^[•♦♥Θ»→⇒Δ]\s*/.test(paragraph);
                return (
                  <p
                    key={paragraphIndex}
                    className={isListItem ? styles.bullet : undefined}
                  >
                    {isListItem && <Check size={16} aria-hidden="true" />}
                    <span>{paragraph.replace(/^[•♦♥Θ»→⇒Δ]\s*/, "")}</span>
                  </p>
                );
              })}
              {!!section.images?.length && (
                <div
                  className={`${styles.gallery} ${isPricing || section.images.length === 1 ? styles.fullImages : section.images.length <= 4 ? styles.smallGallery : section.images.length === 5 ? styles.fiveImages : styles.manyImages}`}
                >
                  {section.images.map((image, imageIndex) => (
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      key={image.src}
                      className={styles.galleryImage}
                      aria-label={`${t("Xem ảnh lớn")}: ${image.alt} (${imageIndex + 1})`}
                    >
                      {isPricing || section.images?.length === 1 ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 1200}
                          height={image.height ?? 900}
                          sizes="(max-width: 760px) 90vw, 60vw"
                          className={styles.fullImage}
                        />
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes={
                            imageIndex === 0
                              ? "(max-width: 760px) 90vw, 40vw"
                              : "(max-width: 760px) 45vw, 20vw"
                          }
                        />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}
          <Link href={listingHref} className={shared.back}>
            <ArrowLeft size={13} aria-hidden="true" />
            {t(category.backLabel)}
          </Link>
        </article>

        <aside className={shared.sidebar}>
          <nav className={shared.toc} aria-label={t("Mục lục bài viết")}>
            <p className={shared.eyebrow}>{t("Trong bài này")}</p>
            <ol>
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className={shared.advice}>
            <p className={shared.eyebrow}>{t(category.consultationLabel)}</p>
            <h2>{t(category.consultationTitle)}</h2>
            <p>
              {t(
                "Gửi diện tích, phong cách và nhu cầu sử dụng. Đội ngũ Tổ Ấm Hoàn Hảo sẽ trao đổi để tư vấn phương án tối ưu nhất.",
              )}
            </p>
            <dl>
              <div>
                <dt>{t("Chuyên mục")}</dt>
                <dd>{t(category.label)}</dd>
              </div>
              <div>
                <dt>{t("Dịch vụ")}</dt>
                <dd>{t("Thiết kế, sản xuất và thi công")}</dd>
              </div>
            </dl>
            <ConsultationButton className={shared.adviceButton}>
              {t("Gửi yêu cầu tư vấn")}
            </ConsultationButton>
          </div>
        </aside>
      </div>

      {!!relatedArticles.length && (
        <section className={shared.related}>
          <div className={shared.container}>
            <div className={shared.relatedHeading}>
              <div>
                <p className={shared.eyebrow}>{t("Đọc thêm")}</p>
                <h2>{t(category.relatedTitle)}</h2>
              </div>
              <Link href={listingHref}>{t("Xem tất cả →")}</Link>
            </div>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((item) => (
                <article key={item.slug}>
                  <Link
                    href={localizedPageHref(item.href, locale)}
                    className={shared.relatedImage}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 760px) 90vw, 42vw"
                    />
                  </Link>
                  <p className={shared.eyebrow}>{item.label}</p>
                  <h3>
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <Link href={item.href} className={shared.readMore}>
                    {t("Xem bài viết →")}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className={shared.closing}>
        <h2>
          {t("Hãy kể chúng tôi nghe về")}
          <br />
          {t("ngôi nhà của bạn.")}
        </h2>
        <ConsultationButton className={shared.adviceButton}>
          {t("Đặt lịch tư vấn ngay")}
        </ConsultationButton>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
