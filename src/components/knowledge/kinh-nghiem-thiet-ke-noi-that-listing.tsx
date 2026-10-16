import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import {
  getKnowledgeTranslator,
  localizeKnowledgeSummary,
} from "@/data/knowledge-localized";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getInteriorDesignExperienceArticleHref,
  interiorDesignExperienceArticles as sourceArticles,
  interiorDesignExperienceListingHref,
  type InteriorDesignExperienceArticle,
} from "@/data/interior-design-experience-articles";
import styles from "@/app/kien-thuc/experience-listing.module.css";
type Category = "khong-gian" | "ky-thuat" | "phong-thuy" | "khac";
export async function InteriorDesignExperiencePage({
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
  const interiorDesignExperienceArticles = sourceArticles.map((a) =>
    localizeKnowledgeSummary(a, t),
  );
  const categories: { value: Category; label: string }[] = [
    { value: "khong-gian", label: t("Không gian sống") },
    { value: "ky-thuat", label: t("Kỹ thuật & vật liệu") },
    { value: "phong-thuy", label: t("Phong thủy") },
    { value: "khac", label: t("Về Tổ Ấm") },
  ];
  const technicalSlugs = new Set([
    "thang-may-gia-dinh-voi-cong-nghe-chan-khong-2023",
    "bao-tri-thang-may-gia-dinh-dieu-ma-ban-can-luu-y",
    "thi-cong-xay-dung-nha-tron-goi-mien-phi-thiet-ke",
    "kinh-nghiem-thi-cong-cua-go-tu-nhien-noi-that-20",
    "6-loai-vat-lieu-go-cong-nghiep-pho-bien-nhat",
    "5-luu-y-trong-sua-chua-va-cai-tao-can-ho-chung-cu",
    "kinh-nghiem-thi-cong-noi-that-tron-goi-nam-2022",
    "kinh-nghiem-thi-cong-noi-that-tron-goi-biet-thu-22",
    "quy-trinh-lam-noi-that",
  ]);
  const fengShuiSlugs = new Set([
    "20-mau-thiet-ke-phong-tho-chuan-phong-thuy-2023",
    "kinh-nghiem-ve-phong-thuy-khi-treo-guong-toilet-14",
    "kinh-nghiem-thiet-ke-phong-bep-hop-phong-thuy-12",
  ]);
  const companySlugs = new Set([
    "to-am-hoan-hao-duoc-tin-cay",
    "to-am-hoan-hao-xay-dung-va-lam-noi-that-tron-goi",
  ]);
  function getCategory(article: InteriorDesignExperienceArticle): Category {
    if (companySlugs.has(article.slug)) return "khac";
    if (fengShuiSlugs.has(article.slug)) return "phong-thuy";
    if (technicalSlugs.has(article.slug)) return "ky-thuat";
    return "khong-gian";
  }
  function getCategoryLabel(article: InteriorDesignExperienceArticle) {
    return categories.find(
      (category) => category.value === getCategory(article),
    )?.label;
  }

  const { trang, "chu-de": topic } = await searchParams;
  const topicValue = Array.isArray(topic) ? topic[0] : topic;
  const selectedCategory = categories.find(
    (category) => category.value === topicValue,
  )?.value;
  const filteredArticles = selectedCategory
    ? interiorDesignExperienceArticles.filter(
        (article) => getCategory(article) === selectedCategory,
      )
    : interiorDesignExperienceArticles;
  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / 6));
  const trangValue = Array.isArray(trang) ? trang[0] : trang;
  const requestedPage = Number.parseInt(trangValue ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), pageCount)
    : 1;
  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * 6,
    currentPage * 6,
  );
  const featured = currentPage === 1 ? visibleArticles[0] : undefined;
  const cardArticles = featured ? visibleArticles.slice(1) : visibleArticles;
  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("chu-de", selectedCategory);
    if (page > 1) params.set("trang", String(page));
    const query = params.toString();
    return `${interiorDesignExperienceListingHref}${query ? `?${query}` : ""}#articles`;
  };
  const articleNumber = (article: InteriorDesignExperienceArticle) =>
    String(interiorDesignExperienceArticles.indexOf(article) + 1).padStart(
      2,
      "0",
    );

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
              <span>{t("Kinh nghiệm thiết kế nội thất")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Kiến thức nội thất")}</p>
            <h1>
              {t("Kinh nghiệm thiết kế")}
              <span>{t("nội thất")}</span>
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Cẩm nang thiết kế nội thất thực tế, giúp bạn kiến tạo không gian đẹp, tiện nghi và phù hợp với lối sống, ngân sách của gia đình.",
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
                <strong>{interiorDesignExperienceArticles.length}</strong>
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
              src="/images/gioi-thieu/banner.png"
              alt={t("Không gian phòng khách sáng và ấm áp")}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 530px"
              style={{ objectPosition: "right center" }}
            />
            <div className={styles.heroNote}>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>{t("Kinh nghiệm thực tế")}</strong>
                <small>{t("Khám phá các bài viết nội thất")}</small>
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
              <h2>{t("Bài viết về thiết kế nội thất")}</h2>
            </div>
            <p>
              {interiorDesignExperienceArticles.length}
              {t(
                "bài viết trong chuyên mục kinh nghiệm thiết kế nội thất của Tổ Ấm Hoàn Hảo.",
              )}
            </p>
          </div>
          <nav
            className={styles.filters}
            aria-label={t("Lọc bài viết theo chủ đề")}
          >
            <Link
              href={localizedPageHref(
                `${interiorDesignExperienceListingHref}#articles`,
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
                  `${interiorDesignExperienceListingHref}?chu-de=${category.value}#articles`,
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
                  getInteriorDesignExperienceArticleHref(featured.slug),
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
                    {articleNumber(featured)}
                  </span>
                  <span>{getCategoryLabel(featured)}</span>
                </div>
                <h3>
                  <Link
                    href={localizedPageHref(
                      getInteriorDesignExperienceArticleHref(featured.slug),
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
                    getInteriorDesignExperienceArticleHref(featured.slug),
                    locale,
                  )}
                >
                  {t("Xem bài viết")}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          )}
          <div className={styles.cardsGrid}>
            {cardArticles.map((article) => (
              <article key={article.slug} className={styles.articleCard}>
                <Link
                  href={localizedPageHref(
                    getInteriorDesignExperienceArticleHref(article.slug),
                    locale,
                  )}
                  className={styles.cardImage}
                  aria-label={article.title}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 370px"
                  />
                </Link>
                <div className={styles.cardCopy}>
                  <div className={styles.cardMeta}>
                    <span>
                      {t("Bài viết")}
                      {articleNumber(article)}
                    </span>
                    <span>{getCategoryLabel(article)}</span>
                  </div>
                  <h3>
                    <Link
                      href={localizedPageHref(
                        getInteriorDesignExperienceArticleHref(article.slug),
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
                      getInteriorDesignExperienceArticleHref(article.slug),
                      locale,
                    )}
                  >
                    {t("Xem bài viết")}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
            {currentPage === 1 && (
              <aside className={styles.inlineCta}>
                <h3>{t("Bạn đang lên ý tưởng cho không gian sống?")}</h3>
                <p>
                  {t(
                    "Chia sẻ nhu cầu của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp.",
                  )}
                </p>
                <ConsultationButton>{t("Nhận tư vấn")}</ConsultationButton>
              </aside>
            )}
          </div>
          {pageCount > 1 && (
            <nav
              className={styles.pagination}
              aria-label={t("Phân trang bài viết")}
            >
              {currentPage > 1 ? (
                <Link
                  href={localizedPageHref(pageHref(currentPage - 1), locale)}
                  aria-label={t("Trang trước")}
                >
                  <ArrowLeft size={16} />
                </Link>
              ) : (
                <span aria-hidden="true">
                  <ArrowLeft size={16} />
                </span>
              )}
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={localizedPageHref(pageHref(page), locale)}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={page === currentPage ? styles.currentPage : ""}
                  >
                    {page}
                  </Link>
                ),
              )}
              {currentPage < pageCount ? (
                <Link
                  href={localizedPageHref(pageHref(currentPage + 1), locale)}
                  aria-label="Trang sau"
                >
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <span aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              )}
            </nav>
          )}
        </div>
      </section>
      <section className={styles.bottomCta}>
        <Image src="/images/gioi-thieu/banner.png" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}>
          <h2>{t("Bạn đang lên ý tưởng thiết kế nội thất?")}</h2>
          <p>
            {t(
              "Nhận tư vấn về không gian, công năng và chi phí từ đội ngũ Tổ Ấm Hoàn Hảo.",
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
