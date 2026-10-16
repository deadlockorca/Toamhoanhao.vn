import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import { type KnowledgeTranslator } from "@/data/knowledge-localized";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsultationButton } from "@/components/consultation-popup";
import {
  beautifulHomeListingHref,
  type BeautifulHomeArticle,
  type BeautifulHomeBlock,
} from "@/data/beautiful-home-articles";
import styles from "../wood-pricing-article/wood-pricing-article.module.css";
import local from "./beautiful-home-article.module.css";

function ArticleBlock({
  block,
  title,
  t,
}: {
  block: BeautifulHomeBlock;
  title: string;
  t: KnowledgeTranslator;
}) {
  if (block.type === "image")
    return (
      <figure className={styles.figure}>
        <Image
          src={block.src}
          alt={block.alt || `${title} – ${t("Hình minh họa")}`}
          width={1400}
          height={875}
          sizes="(max-width:900px) 92vw, 790px"
        />
        {block.alt && <figcaption>{block.alt}</figcaption>}
      </figure>
    );
  if (block.type === "bullet")
    return (
      <div className={local.bullet}>
        <Check size={16} aria-hidden="true" />
        <p>{block.text}</p>
      </div>
    );
  return <p>{block.text}</p>;
}

export function BeautifulHomeArticleLanding({
  article,
  relatedArticles,
  locale = "vi",
  t,
  category = {
    label: "Kiến thức nhà đẹp",
    listingHref: beautifulHomeListingHref,
    contentTitle: "Góc nhìn thực tế cho không gian sống đẹp",
    backLabel: "Quay lại kiến thức nhà đẹp",
  },
}: {
  article: BeautifulHomeArticle;
  relatedArticles: BeautifulHomeArticle[];
  locale?: SiteLocale;
  t: KnowledgeTranslator;
  category?: {
    label: string;
    listingHref: string;
    contentTitle: string;
    backLabel: string;
  };
}) {
  const excerpt = article.excerpt.replace(/\s*\[&hellip;\].*$/, "…");
  const [day, month, year] = article.date.split("/");
  return (
    <main lang={locale} className={`${styles.page} ${local.page}`}>
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
              <Link href={localizedPageHref(category.listingHref, locale)}>
                {t(category.label)}
              </Link>
              <span>/</span>
              <span>{article.title}</span>
            </nav>
            <p className={styles.eyebrow}>{t(category.label)}</p>
            <h1>{article.title}</h1>
            <p className={styles.heroDescription}>{excerpt}</p>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width:760px) 100vw, 50vw"
          />
        </div>
      </section>
      <div className={`${styles.container} ${styles.info}`}>
        <div>
          <span>{t("Chuyên mục")}</span>
          <strong>{t(category.label)}</strong>
        </div>
        <div>
          <span>{t("Nội dung")}</span>
          <strong>
            {article.sections.length} {t("phần nội dung chuyên sâu")}
          </strong>
        </div>
        <div>
          <span>{t("Ngày xuất bản")}</span>
          <time dateTime={`${year}-${month}-${day}`}>{article.date}</time>
        </div>
      </div>
      <div className={`${styles.container} ${styles.layout}`}>
        <article className={styles.content}>
          <p className={styles.eyebrow}>{t("Nội dung chính")}</p>
          <h2 className={styles.contentTitle}>{t(category.contentTitle)}</h2>
          {article.sections.map((section, index) => {
            const isConclusion =
              /^(kết luận|lời kết|tổng kết)(\s|$|[.:])/i.test(
                (section.sourceTitle ?? section.title).trim(),
              );
            const conclusionIndex = isConclusion
              ? -1
              : section.blocks.findIndex(
                  (b) =>
                    b.type !== "image" &&
                    /^(kết luận|lời kết|tổng kết)\s*[:.]?$/i.test(
                      (b.sourceText ?? b.text).trim(),
                    ),
                );
            const blocks =
              conclusionIndex < 0
                ? section.blocks
                : section.blocks.slice(0, conclusionIndex);
            return (
              <section
                id={`section-${index + 1}`}
                key={`${section.title}-${index}`}
                className={
                  isConclusion
                    ? `${styles.conclusion} ${local.conclusionSection}`
                    : styles.articleSection
                }
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
                {blocks.map((block, i) => (
                  <ArticleBlock
                    key={i}
                    block={block}
                    title={article.title}
                    t={t}
                  />
                ))}
                {conclusionIndex >= 0 && (
                  <div className={styles.conclusion}>
                    <p className={styles.eyebrow}>
                      {section.blocks[conclusionIndex].type !== "image"
                        ? section.blocks[conclusionIndex].text
                        : t("Kết luận")}
                    </p>
                    {section.blocks
                      .slice(conclusionIndex + 1)
                      .map((block, i) => (
                        <ArticleBlock
                          key={i}
                          block={block}
                          title={article.title}
                          t={t}
                        />
                      ))}
                  </div>
                )}
              </section>
            );
          })}
          <div className={local.closing}>
            <p className={styles.eyebrow}>{t("Cùng Tổ Ấm Hoàn Hảo")}</p>
            <h2>{t("Biến ý tưởng thành không gian của bạn")}</h2>
            <p>
              {t(
                "Chia sẻ nhu cầu để được tư vấn về công năng, vật liệu và phương án thiết kế phù hợp.",
              )}
            </p>
            <div>
              <ConsultationButton>
                {t("Nhận tư vấn miễn phí")}
              </ConsultationButton>
              <a href="tel:0903897555">{t("Gọi 0903.897.555")}</a>
            </div>
          </div>
          <Link
            href={localizedPageHref(category.listingHref, locale)}
            className={styles.back}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {t(category.backLabel)}
          </Link>
        </article>
        <aside className={styles.sidebar}>
          <nav
            className={`${styles.toc} ${local.toc}`}
            aria-label={t("Mục lục bài viết")}
          >
            <p className={styles.eyebrow}>{t("Mục lục")}</p>
            <ol>
              {article.sections.map((section, i) => (
                <li key={`${section.title}-${i}`}>
                  <a href={`#section-${i + 1}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className={styles.advice}>
            <p className={styles.eyebrow}>{t("Cùng chuyên gia")}</p>
            <h2>{t("Nhận tư vấn từ kiến trúc sư của Tổ Ấm Hoàn Hảo.")}</h2>
            <a href="tel:0903897555">{t("Gọi 0903.897.555")}</a>
          </div>
        </aside>
      </div>
      <section className={styles.related}>
        <div className={styles.container}>
          <div className={styles.relatedHeading}>
            <h2>{t("Các bài cùng chủ đề")}</h2>
            <Link href={localizedPageHref(category.listingHref, locale)}>
              {t("Xem tất cả →")}
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((item) => (
              <article key={item.slug}>
                <Link
                  href={localizedPageHref(
                    `${category.listingHref}/${item.slug}`,
                    locale,
                  )}
                  className={styles.relatedImage}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:760px) 92vw, 31vw"
                  />
                </Link>
                <p className={styles.eyebrow}>{t(category.label)}</p>
                <h3>
                  <Link
                    href={localizedPageHref(
                      `${category.listingHref}/${item.slug}`,
                      locale,
                    )}
                  >
                    {item.title}
                  </Link>
                </h3>
                <Link
                  href={localizedPageHref(
                    `${category.listingHref}/${item.slug}`,
                    locale,
                  )}
                  className={styles.read}
                >
                  {t("Xem bài viết →")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
