import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import { getKnowledgeTranslator } from "@/data/knowledge-localized";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "@/app/kien-thuc/experience-listing.module.css";
type Category = "thiet-ke" | "thi-cong" | "phong-thuy";
export async function BuildingExperiencePage({
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
  const categories: { value: Category; label: string }[] = [
    { value: "thiet-ke", label: t("Thiết kế") },
    { value: "thi-cong", label: t("Thi công") },
    { value: "phong-thuy", label: t("Phong thủy") },
  ];
  const readingTopics: {
    slug: string;
    title: string;
    image: string;
    description: string;
    category: Category;
  }[] = [
    {
      slug: "kinh-nghiem-chon-huong-nha-15",
      title: t("Kinh nghiệm chọn hướng nhà"),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/huong-nha.webp",
      description: t(
        "Chọn hướng nhà theo tuổi của gia chủ và điều kiện khí hậu để tạo nên không gian sống thuận tiện, hài hòa.",
      ),
      category: "phong-thuy",
    },
    {
      slug: "kinh-nghiem-do-be-tong-28",
      title: t("Kinh nghiệm đổ bê tông cột, dầm, sàn"),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/do-be-tong.webp",
      description: t(
        "Những yêu cầu kỹ thuật cần nắm rõ khi triển khai các hạng mục kết cấu quan trọng của công trình.",
      ),
      category: "thi-cong",
    },
    {
      slug: "chien-luoc-thiet-ke-nha-co-dien-tich-nho",
      title: t("Chiến lược thiết kế nhà có diện tích nhỏ"),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-nho.webp",
      description: t(
        "Gợi ý để một ngôi nhà diện tích nhỏ vẫn có đủ tiện ích và đáp ứng nhu cầu sử dụng của gia đình.",
      ),
      category: "thiet-ke",
    },
    {
      slug: "nhung-luu-y-khi-thi-cong-to-trat-tuong-nha",
      title: t("Những lưu ý khi thi công tô trát tường nhà"),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/to-trat.webp",
      description: t(
        "Các điểm cần kiểm tra trong công tác tô trát và nghiệm thu để tường phẳng, bền, hạn chế nứt hoặc bong tróc.",
      ),
      category: "thi-cong",
    },
    {
      slug: "phong-thuy-xay-nha-14",
      title: t(
        "Phong thủy xây nhà: 5 điều cần lưu ý khi xây nhà cho hợp phong thủy",
      ),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/phong-thuy.webp",
      description: t(
        "Những nguyên tắc phong thủy cơ bản giúp gia chủ cân nhắc hướng, bố cục và không gian sống hài hòa.",
      ),
      category: "phong-thuy",
    },
    {
      slug: "5-dieu-can-luu-y-khi-thiet-ke-cua-cong-ra-vao",
      title: t("5 điều cần lưu ý khi thiết kế cửa cổng ra vào"),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/cua-cong.webp",
      description: t(
        "Cân đối phong thủy, an toàn, riêng tư, thông thoáng và thẩm mỹ cho lối vào của công trình.",
      ),
      category: "thiet-ke",
    },
    {
      slug: "kinh-nghiem-thiet-ke-nha-co-anh-sang-tu-nhien-14-2",
      title: t(
        "4 kinh nghiệm thiết kế nhà để tận dụng được ánh sáng tự nhiên nhất",
      ),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/anh-sang.webp",
      description: t(
        "Gợi ý thiết kế để các không gian trong nhà đón được ánh sáng tự nhiên một cách hiệu quả.",
      ),
      category: "thiet-ke",
    },
    {
      slug: "kinh-nghiem-thi-cong-nha-mai-thai-1-tang-14",
      title: t(
        "Kinh nghiệm thi công nhà mái Thái 1 tầng siêu chất lượng khiến bạn không còn đắn đo",
      ),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-mai-thai.webp",
      description: t(
        "Những kinh nghiệm thực tế về giải pháp mái, tiến độ và chất lượng khi triển khai nhà mái Thái một tầng.",
      ),
      category: "thi-cong",
    },
    {
      slug: "kinh-nghiem-xay-nha-10",
      title: t(
        "6 kinh nghiệm xây nhà - chọn vật liệu xây dựng trong thi công nhà ở",
      ),
      image: "/images/kien-thuc/kinh-nghiem-xay-nha/vat-lieu.webp",
      description: t(
        "Kinh nghiệm lựa chọn vật liệu xây dựng hợp lý, tiết kiệm và phù hợp với nhu cầu sử dụng lâu dài.",
      ),
      category: "thi-cong",
    },
  ];
  const basePath = "/kien-thuc/kinh-nghiem-xay-nha";
  const categoryLabel = (category: Category) =>
    categories.find((item) => item.value === category)?.label ?? "";
  const articleHref = (slug: string) => `${basePath}/${slug}`;

  const { trang, "chu-de": topic } = await searchParams;
  const topicValue = Array.isArray(topic) ? topic[0] : topic;
  const selectedCategory = categories.find(
    (item) => item.value === topicValue,
  )?.value;
  const filteredTopics = selectedCategory
    ? readingTopics.filter((item) => item.category === selectedCategory)
    : readingTopics;
  const pageCount = Math.max(1, Math.ceil(filteredTopics.length / 6));
  const trangValue = Array.isArray(trang) ? trang[0] : trang;
  const requestedPage = Number.parseInt(trangValue ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), pageCount)
    : 1;
  const visibleTopics = filteredTopics.slice(
    (currentPage - 1) * 6,
    currentPage * 6,
  );
  const featured = currentPage === 1 ? visibleTopics[0] : undefined;
  const cardTopics = featured ? visibleTopics.slice(1) : visibleTopics;
  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("chu-de", selectedCategory);
    if (page > 1) params.set("trang", String(page));
    const query = params.toString();
    return `${basePath}${query ? `?${query}` : ""}#articles`;
  };

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
              <span>{t("Kinh nghiệm xây nhà")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Kiến thức xây dựng")}</p>
            <h1>
              {t("Kinh nghiệm xây nhà")}
              <span>{t("trọn gói")}</span>
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Những kinh nghiệm thực tế về định hướng thiết kế, tổ chức thi công và lựa chọn giải pháp phù hợp cho một ngôi nhà bền vững.",
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
                <strong>9</strong>
                <small>{t("Bài viết")}</small>
              </div>
              <div>
                <strong>3</strong>
                <small>{t("Chủ đề: thiết kế, thi công, phong thủy")}</small>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/kien-thuc/kinh-nghiem-xay-nha/hero.webp"
              alt={t("Mẫu nhà phố của Tổ Ấm Hoàn Hảo")}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 530px"
            />
            <div className={styles.heroNote}>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>{t("Kinh nghiệm thực tế")}</strong>
                <small>{t("Từ các công trình đã triển khai")}</small>
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
              <h2>{t("Chủ đề kinh nghiệm xây nhà")}</h2>
            </div>
            <p>
              {t(
                "9 bài viết được giữ lại từ chuyên mục kinh nghiệm xây nhà trên website cũ của Tổ Ấm Hoàn Hảo.",
              )}
            </p>
          </div>
          <nav
            className={styles.filters}
            aria-label={t("Lọc bài viết theo chủ đề")}
          >
            <Link
              href={localizedPageHref(`${basePath}#articles`, locale)}
              aria-current={!selectedCategory ? "page" : undefined}
              className={!selectedCategory ? styles.activeFilter : ""}
            >
              {t("Tất cả")}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.value}
                href={localizedPageHref(
                  `${basePath}?chu-de=${category.value}#articles`,
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
                href={localizedPageHref(articleHref(featured.slug), locale)}
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
                    {t("Bài viết")}{" "}
                    {String(readingTopics.indexOf(featured) + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>
                  <span>{categoryLabel(featured.category)}</span>
                </div>
                <h3>
                  <Link
                    href={localizedPageHref(articleHref(featured.slug), locale)}
                  >
                    {featured.title}
                  </Link>
                </h3>
                <p>{featured.description}</p>
                <Link
                  className={styles.readMore}
                  href={localizedPageHref(articleHref(featured.slug), locale)}
                >
                  {t("Xem bài viết")}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          )}

          <div className={styles.cardsGrid}>
            {cardTopics.map((topic) => (
              <article key={topic.slug} className={styles.articleCard}>
                <Link
                  href={localizedPageHref(articleHref(topic.slug), locale)}
                  className={styles.cardImage}
                  aria-label={topic.title}
                >
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 370px"
                  />
                </Link>
                <div className={styles.cardCopy}>
                  <div className={styles.cardMeta}>
                    <span>
                      {t("Bài viết")}{" "}
                      {String(readingTopics.indexOf(topic) + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>
                    <span>{categoryLabel(topic.category)}</span>
                  </div>
                  <h3>
                    <Link
                      href={localizedPageHref(articleHref(topic.slug), locale)}
                    >
                      {topic.title}
                    </Link>
                  </h3>
                  <p>{topic.description}</p>
                  <Link
                    className={styles.readMore}
                    href={localizedPageHref(articleHref(topic.slug), locale)}
                  >
                    {t("Xem bài viết")}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
            {currentPage === 1 && (
              <aside className={styles.inlineCta}>
                <h3>{t("Bạn đang chuẩn bị xây nhà?")}</h3>
                <p>
                  {t(
                    "Chia sẻ kế hoạch của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp.",
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
        <Image
          src="/images/kien-thuc/kinh-nghiem-xay-nha/hero.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}>
          <h2>{t("Bạn đang chuẩn bị xây nhà?")}</h2>
          <p>
            {t(
              "Nhận tư vấn miễn phí về thiết kế, thi công và chi phí từ đội ngũ Tổ Ấm Hoàn Hảo.",
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
