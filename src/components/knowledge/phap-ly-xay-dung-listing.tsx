import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import {
  getKnowledgeTranslator,
  localizeKnowledgeSummary,
} from "@/data/knowledge-localized";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildingLegalArticles as sourceArticles,
  buildingLegalListingHref,
  getBuildingLegalArticleHref,
  type BuildingLegalArticle,
} from "@/data/building-legal-articles";
import styles from "@/app/kien-thuc/experience-listing.module.css";
type Category = "giay-phep" | "quy-trinh";
export async function BuildingLegalPage({
  searchParams,
  locale = "vi",
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
  locale?: SiteLocale;
}) {
  const t = await getKnowledgeTranslator(locale);
  const languageQuery = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams))
    for (const part of Array.isArray(value)
      ? value
      : value === undefined
        ? []
        : [value])
      languageQuery.append(key, part);
  const buildingLegalArticles = sourceArticles.map((a) =>
    localizeKnowledgeSummary(a, t),
  );
  const categories: { value: Category; label: string }[] = [
    { value: "giay-phep", label: t("Giấy phép xây dựng") },
    { value: "quy-trinh", label: t("Quy trình xây nhà") },
  ];
  function getCategory(article: BuildingLegalArticle): Category {
    return article.slug === "thu-tuc-xin-giay-phep-xay-dung"
      ? "giay-phep"
      : "quy-trinh";
  }
  function getCategoryLabel(article: BuildingLegalArticle) {
    return categories.find(
      (category) => category.value === getCategory(article),
    )?.label;
  }

  const { "chu-de": topic } = await searchParams;
  const topicValue = Array.isArray(topic) ? topic[0] : topic;
  const selectedCategory = categories.find(
    (category) => category.value === topicValue,
  )?.value;
  const visibleArticles = selectedCategory
    ? buildingLegalArticles.filter(
        (article) => getCategory(article) === selectedCategory,
      )
    : buildingLegalArticles;
  const featured = visibleArticles[0];
  const cardArticles = visibleArticles.slice(1);
  const articleNumber = (article: BuildingLegalArticle) =>
    String(buildingLegalArticles.indexOf(article) + 1).padStart(2, "0");

  return (
    <main lang={locale} className={styles.page}>
      <SiteHeader locale={locale} languageQuery={languageQuery.toString()} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav
              className={styles.breadcrumb}
              aria-label={t("Điều hướng trang")}
            >
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <span>/</span>
              <span>{t("Pháp lý xây dựng")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Kiến thức xây dựng")}</p>
            <h1>
              {t("Pháp lý")}
              <span>{t("xây dựng")}</span>
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Cẩm nang tổng hợp các đầu việc pháp lý thường gặp trước, trong và sau khi xây dựng, giúp bạn chuẩn bị hồ sơ chủ động hơn.",
              )}
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#articles">
                {t("Đọc bài viết")}
              </Link>
              <ConsultationButton className={styles.outlineButton}>
                {t("Nhận tư vấn")}
              </ConsultationButton>
            </div>
            <div className={styles.heroStats}>
              <div>
                <strong>{buildingLegalArticles.length}</strong>
                <small>{t("Bài viết")}</small>
              </div>
              <div>
                <strong>{categories.length}</strong>
                <small>{t("Chủ đề để khám phá")}</small>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/gioi-thieu/thuong-hieu.png"
              alt={t("Công trình nhà ở hiện đại")}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 530px"
            />
            <div className={styles.heroNote}>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>{t("Cẩm nang xây dựng")}</strong>
                <small>{t("Tìm hiểu trước khi triển khai")}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="articles" className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>{t("Đọc thêm")}</p>
              <h2>{t("Bài viết về pháp lý xây dựng")}</h2>
            </div>
            <p>
              {buildingLegalArticles.length}
              {t(
                "bài viết hiện có trong chuyên mục pháp lý xây dựng của Tổ Ấm Hoàn Hảo.",
              )}
            </p>
          </div>
          <nav
            className={styles.filters}
            aria-label={t("Lọc bài viết theo chủ đề")}
          >
            <Link
              href={localizedPageHref(
                `${buildingLegalListingHref}#articles`,
                locale,
              )}
              aria-current={!selectedCategory ? "page" : undefined}
              className={!selectedCategory ? styles.activeFilter : ""}
            >
              {t("Tất cả")}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.value}
                href={localizedPageHref(
                  `${buildingLegalListingHref}?chu-de=${category.value}#articles`,
                  locale,
                )}
                aria-current={
                  selectedCategory === category.value ? "page" : undefined
                }
                className={
                  selectedCategory === category.value ? styles.activeFilter : ""
                }
              >
                {category.label}
              </Link>
            ))}
          </nav>
          {featured && (
            <article className={styles.featuredCard}>
              <Link
                href={localizedPageHref(
                  getBuildingLegalArticleHref(featured.slug),
                  locale,
                )}
                className={styles.featuredImage}
                aria-label={featured.title}
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 630px"
                />
              </Link>
              <div className={styles.featuredCopy}>
                <div className={styles.cardMeta}>
                  <span>
                    {t("Bài viết")}
                    {articleNumber(featured)} · {featured.date}
                  </span>
                  <span>{getCategoryLabel(featured)}</span>
                </div>
                <h3>
                  <Link
                    href={localizedPageHref(
                      getBuildingLegalArticleHref(featured.slug),
                      locale,
                    )}
                  >
                    {featured.title}
                  </Link>
                </h3>
                <p>{featured.excerpt}</p>
                <Link
                  className={styles.readMore}
                  href={localizedPageHref(
                    getBuildingLegalArticleHref(featured.slug),
                    locale,
                  )}
                >
                  {t("Xem bài viết")}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          )}
          {!selectedCategory && (
            <div className={`${styles.cardsGrid} ${styles.twoColumnCards}`}>
              {cardArticles.map((article) => (
                <article key={article.slug} className={styles.articleCard}>
                  <Link
                    href={localizedPageHref(
                      getBuildingLegalArticleHref(article.slug),
                      locale,
                    )}
                    className={styles.cardImage}
                    aria-label={article.title}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 560px"
                    />
                  </Link>
                  <div className={styles.cardCopy}>
                    <div className={styles.cardMeta}>
                      <span>
                        {t("Bài viết")}
                        {articleNumber(article)} · {article.date}
                      </span>
                      <span>{getCategoryLabel(article)}</span>
                    </div>
                    <h3>
                      <Link
                        href={localizedPageHref(
                          getBuildingLegalArticleHref(article.slug),
                          locale,
                        )}
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.excerpt}</p>
                    <Link
                      className={styles.readMore}
                      href={localizedPageHref(
                        getBuildingLegalArticleHref(article.slug),
                        locale,
                      )}
                    >
                      {t("Xem bài viết")}
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
              <aside className={styles.inlineCta}>
                <h3>{t("Bạn đang chuẩn bị xây nhà?")}</h3>
                <p>
                  {t(
                    "Chia sẻ kế hoạch của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp.",
                  )}
                </p>
                <ConsultationButton>{t("Nhận tư vấn")}</ConsultationButton>
              </aside>
            </div>
          )}
        </div>
      </section>
      <section className={styles.bottomCta}>
        <Image
          src="/images/gioi-thieu/thuong-hieu.png"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}>
          <h2>{t("Bạn đang chuẩn bị xây nhà?")}</h2>
          <p>
            {t(
              "Nhận tư vấn về thiết kế, thi công và các bước chuẩn bị từ đội ngũ Tổ Ấm Hoàn Hảo.",
            )}
          </p>
          <div>
            <ConsultationButton>{t("Đặt lịch tư vấn ngay")}</ConsultationButton>
            <a href="tel:0903897555">{t("Hotline: 0903.897.555")}</a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
