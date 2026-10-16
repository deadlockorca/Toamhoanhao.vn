import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import {
  pricingText,
  getLocalizedPricingArticles,
} from "@/data/pricing-localized";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  ClipboardCheck,
  FileSearch,
  House,
  Info,
  Layers3,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPricingArticleHref } from "@/data/pricing-articles";
import styles from "@/app/bao-gia/pricing-overview.module.css";

export async function InteriorPricingOverview({
  searchParams,
  locale = "vi",
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
  locale?: SiteLocale;
}) {
  const t = (text: string) => pricingText(text, locale);
  const pricingArticles = getLocalizedPricingArticles(locale);
  const pricingFactors = [
    {
      icon: Building2,
      title: t("Quy mô công trình"),
      content: t("Diện tích, loại hình và số lượng không gian cần triển khai."),
    },
    {
      icon: Layers3,
      title: t("Cấp độ vật liệu"),
      content: t("Cốt gỗ, bề mặt, đá, kim loại, vải và hệ phụ kiện lựa chọn."),
    },
    {
      icon: Sparkles,
      title: t("Mức độ hoàn thiện"),
      content: t(
        "Độ phức tạp của thiết kế, chi tiết gia công và yêu cầu thẩm mỹ.",
      ),
    },
    {
      icon: ClipboardCheck,
      title: t("Điều kiện triển khai"),
      content: t(
        "Hiện trạng, tiến độ, vận chuyển và điều kiện thi công thực tế.",
      ),
    },
  ];
  const process = [
    {
      icon: FileSearch,
      title: t("Tiếp nhận nhu cầu"),
      content: t(
        "Ghi nhận loại hình, diện tích, phong cách và ngân sách dự kiến.",
      ),
    },
    {
      icon: House,
      title: t("Khảo sát hiện trạng"),
      content: t("Đo đạc, kiểm tra kỹ thuật và điều kiện thi công thực tế."),
    },
    {
      icon: Ruler,
      title: t("Chốt phương án"),
      content: t(
        "Thống nhất công năng, vật liệu, khối lượng và tiêu chuẩn bàn giao.",
      ),
    },
    {
      icon: Banknote,
      title: t("Lập báo giá"),
      content: t(
        "Bóc tách từng hạng mục, đơn vị tính và giá trị dự toán rõ ràng.",
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Ký kết triển khai"),
      content: t("Chốt tiến độ, thanh toán, bảo hành và trách nhiệm hai bên."),
    },
  ];
  const locations = [
    "Hà Nội",
    "TP. Hồ Chí Minh",
    "TP. Thủ Đức",
    "Bình Dương",
    "Thanh Hóa",
    t("Các tỉnh lân cận"),
  ];
  const filters = [
    {
      value: "tong-hop",
      label: t("Tổng hợp"),
      matches: [t("Báo giá tổng hợp")],
    },
    { value: "vat-lieu", label: t("Vật liệu"), matches: [t("Vật liệu")] },
    { value: "tu-bep", label: t("Tủ bếp"), matches: [t("Tủ bếp")] },
    { value: "van-phong", label: t("Văn phòng"), matches: [t("Văn phòng")] },
    {
      value: "goi-ngan-sach",
      label: t("Gói ngân sách"),
      matches: [t("Gói ngân sách cũ")],
    },
    {
      value: "kinh-nghiem",
      label: t("Kinh nghiệm"),
      matches: [t("Kinh nghiệm báo giá")],
    },
  ];
  const packageCards = [169, 250, 300, 400].map((amount) => ({
    amount,
    article: pricingArticles.find(
      (article) => article.slug === `goi-noi-that-hoan-thien-${amount}-trieu`,
    ),
  }));
  const basePath = localizedPageHref(
    "/bao-gia/thiet-ke-thi-cong-noi-that",
    locale,
  );

  const { loai } = await searchParams;
  const filterValue = Array.isArray(loai) ? loai[0] : loai;
  const selectedFilter = filters.find((filter) => filter.value === filterValue);
  const visibleArticles = selectedFilter
    ? pricingArticles.filter((article) =>
        selectedFilter.matches.includes(article.label),
      )
    : pricingArticles;

  return (
    <main lang={locale} className={styles.page}>
      <SiteHeader locale={locale} />
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
              <span>{t("Báo giá thiết kế thi công nội thất")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Báo giá nội thất")}</p>
            <h1>
              {t("Thiết kế & thi công nội thất")} <span>{t("trọn gói")}</span>
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Báo giá được lập theo đúng diện tích, vật liệu và nhu cầu thực tế, giúp bạn nhìn rõ từng hạng mục trước khi triển khai.",
              )}{" "}
            </p>
            <div className={styles.heroActions}>
              <ConsultationButton className={styles.primaryButton}>
                {t("Nhận báo giá")} <ArrowRight size={15} aria-hidden="true" />
              </ConsultationButton>
              <a href="tel:0903897555" className={styles.outlineButton}>
                <Phone size={15} aria-hidden="true" />
                0903.897.555
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/bao-gia/hero.webp"
              alt={t("Không gian nội thất hoàn thiện")}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 530px"
            />
            <div className={styles.heroNote}>
              <span className={styles.heroNoteIcon}>
                <Ruler size={17} aria-hidden="true" />
              </span>
              <span>
                <small>{t("Báo giá bóc tách")}</small>
                <strong>{t("Rõ từng hạng mục")}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className={`${styles.container} ${styles.factorWrap}`}>
        <section
          className={styles.factors}
          aria-label={t("Các yếu tố quyết định báo giá")}
        >
          {pricingFactors.map((factor) => {
            const Icon = factor.icon;
            return (
              <article key={factor.title} className={styles.factor}>
                <span className={styles.factorIcon}>
                  <Icon size={17} aria-hidden="true" />
                </span>
                <h2>{factor.title}</h2>
                <p>{factor.content}</p>
              </article>
            );
          })}
        </section>
      </div>

      <section id="bao-gia" className={styles.library}>
        <div className={styles.container}>
          <div className={styles.libraryHeading}>
            <div>
              <p className={styles.eyebrow}>{t("Thư viện báo giá")}</p>
              <h2>
                {t(
                  "Bảng báo giá thiết kế và thi công trọn gói nội thất của Tổ Ấm Hoàn Hảo",
                )}{" "}
              </h2>
            </div>
            <p>
              {t(
                "Tổng hợp {count} bài viết báo giá và gói hoàn thiện từ website cũ, giúp bạn tham khảo cách phân chia hạng mục, vật liệu và mức đầu tư trước khi nhận dự toán theo công trình thực tế.",
              ).replace("{count}", String(pricingArticles.length))}
            </p>
          </div>
          <div
            className={styles.packages}
            aria-label={t("Gói nội thất tham khảo từ website cũ")}
          >
            {packageCards.map(
              ({ amount, article }) =>
                article && (
                  <Link
                    key={amount}
                    href={localizedPageHref(
                      getPricingArticleHref(article.slug),
                      locale,
                    )}
                    className={`${styles.package} ${amount === 300 ? styles.packageFeatured : ""}`}
                  >
                    <small>{t("Gói tham khảo")}</small>
                    <strong>
                      {amount}
                      <span> {t("triệu")}</span>
                    </strong>
                    <p>{article.excerpt}</p>
                  </Link>
                ),
            )}
          </div>
          <nav
            className={styles.filters}
            aria-label={t("Lọc bài viết báo giá")}
          >
            <Link
              href={`${basePath}#bao-gia`}
              aria-current={!selectedFilter ? "page" : undefined}
              className={!selectedFilter ? styles.activeFilter : ""}
            >
              {t("Tất cả")}{" "}
            </Link>
            {filters.map((filter) => (
              <Link
                key={filter.value}
                href={`${basePath}?loai=${filter.value}#bao-gia`}
                aria-current={
                  selectedFilter?.value === filter.value ? "page" : undefined
                }
                className={
                  selectedFilter?.value === filter.value
                    ? styles.activeFilter
                    : ""
                }
              >
                {filter.label}
              </Link>
            ))}
          </nav>
          <div className={styles.articleGrid}>
            {visibleArticles.map((article) => (
              <article key={article.slug} className={styles.articleCard}>
                <Link
                  href={localizedPageHref(
                    getPricingArticleHref(article.slug),
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
                      {String(pricingArticles.indexOf(article) + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>
                    <span>{article.label}</span>
                  </div>
                  <h3>
                    <Link
                      href={localizedPageHref(
                        getPricingArticleHref(article.slug),
                        locale,
                      )}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <Link
                    className={styles.readMore}
                    href={localizedPageHref(
                      getPricingArticleHref(article.slug),
                      locale,
                    )}
                  >
                    {t("Xem bài viết")}{" "}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.archiveNote}>
            <Info size={17} aria-hidden="true" />
            {t(
              "Các gói 169, 250, 300 và 400 triệu là hồ sơ tham khảo từ website cũ, không phải báo giá hiện hành. Báo giá mới được bóc tách theo diện tích, vật liệu và thời điểm triển khai thực tế.",
            )}{" "}
          </p>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{t("Quy trình làm việc")}</p>
            <h2>{t("Từ nhu cầu đến báo giá chính thức")}</h2>
          </div>
          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <article key={step.title} className={styles.processCard}>
                <span className={styles.processNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.locationsSection}>
        <div className={`${styles.container} ${styles.locationsBox}`}>
          <div className={styles.locationsIntro}>
            <p className={styles.eyebrow}>{t("Khu vực tiếp nhận")}</p>
            <h2>{t("Khu vực tiếp nhận công trình")}</h2>
            <p>
              {t(
                "Nội dung website cũ ghi nhận hệ thống văn phòng và xưởng tại nhiều khu vực. Phạm vi triển khai cụ thể sẽ được xác nhận theo địa điểm và quy mô công trình.",
              )}{" "}
            </p>
          </div>
          <div className={styles.locationGrid}>
            {locations.map((location) => (
              <span key={location}>
                <MapPin size={14} aria-hidden="true" />
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.bottomCta}>
        <Image src="/images/bao-gia/hero.webp" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}>
          <p className={styles.eyebrow}>{t("Nhận dự toán theo nhu cầu")}</p>
          <h2>{t("Gửi mặt bằng để nhận phạm vi báo giá phù hợp")}</h2>
          <p>
            {t(
              "Đội ngũ sẽ trao đổi nhu cầu, vật liệu và tiến độ dự kiến trước khi lập bảng khối lượng chi tiết cho công trình của bạn.",
            )}{" "}
          </p>
          <div className={styles.bottomActions}>
            <ConsultationButton>{t("Yêu cầu báo giá")}</ConsultationButton>
            <a href="tel:0903897555">{t("Gọi 0903.897.555")}</a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
