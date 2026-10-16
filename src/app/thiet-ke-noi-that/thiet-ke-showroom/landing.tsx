import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarClock,
  Check,
  Handshake,
  Lightbulb,
  Palette,
  PiggyBank,
  Trophy,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../thiet-ke-khach-san/hotel.module.css";
import local from "./showroom.module.css";
import { interiorDesignText } from "@/data/interior-design-localized";
import { homePath, type SiteLocale } from "@/lib/locale";
type Feature = { icon: LucideIcon; title: string; content: string };
export function ShowroomDesignPage({ locale = "vi" }: { locale?: SiteLocale }) {
  const t = (text: string) => interiorDesignText(text, locale);
  const factors: Feature[] = [
    {
      icon: Palette,
      title: t("Màu sắc"),
      content: t(
        "Phong cách trang trí nên đi đôi với màu sắc thương hiệu, bổ sung giấy dán tường hoa văn để kích thích người dùng tìm đến showroom.",
      ),
    },
    {
      icon: Lightbulb,
      title: t("Ánh sáng"),
      content: t(
        "Ánh sáng tạo nên bầu không khí và thiết lập tâm trạng cho showroom, đồng thời là cách nhanh chóng khắc phục khuyết điểm của không gian.",
      ),
    },
  ];
  const reasons: Feature[] = [
    {
      icon: Trophy,
      title: t("Kinh nghiệm lâu năm"),
      content: t(
        "Bề dày kinh nghiệm thiết kế thi công nội thất, hàng trăm khách hàng đã sử dụng dịch vụ và hoàn toàn hài lòng.",
      ),
    },
    {
      icon: Wallet,
      title: t("Kế hoạch tài chính rõ ràng"),
      content: t(
        "Kế hoạch tài chính đầu tư rõ ràng, hạn chế rủi ro và phát sinh ngoài ý muốn.",
      ),
    },
    {
      icon: CalendarClock,
      title: t("Thời gian thi công nhanh"),
      content: t(
        "Công trình thi công hoàn thiện đúng tiến độ, đúng cam kết với khách hàng.",
      ),
    },
    {
      icon: PiggyBank,
      title: t("Mức giá cạnh tranh"),
      content: t(
        "Báo giá thiết kế showroom hợp lý, cạnh tranh nhưng vẫn đảm bảo chất lượng công trình.",
      ),
    },
    {
      icon: Handshake,
      title: t("Thanh toán linh hoạt"),
      content: t(
        "Hình thức thanh toán phù hợp, giúp bạn chủ động theo từng giai đoạn.",
      ),
    },
  ];
  const benefits = [
    t("Sở hữu showroom hoàn hảo và chuyên nghiệp tới từng chi tiết"),
    t("Không gian nổi bật, phong cách trưng bày khoa học"),
    t("Tăng tỉ lệ tương tác giữa khách hàng và sản phẩm thực tế"),
    t("Tạo dấu ấn thương hiệu qua thiết kế"),
    t("Đánh bật mọi đối thủ cạnh tranh"),
  ];
  const commitments = [
    t("Giá cả tốt nhất so với thị trường"),
    t("Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu"),
    t("Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần"),
    t("Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp"),
  ];

  return (
    <main lang={locale} className={styles.page}>
      <SiteHeader locale={locale} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav
              aria-label={t("Điều hướng trang")}
              className={styles.breadcrumb}
            >
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <span>/</span>
              <span>{t("Thiết kế nội thất")}</span>
              <span>/</span>
              <span>{t("Thiết kế showroom")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Thiết kế nội thất")}</p>
            <h1>
              {locale === "vi" ? (
                <>
                  {" "}
                  Thiết kế <span>showroom</span>{" "}
                </>
              ) : (
                t("Thiết kế showroom")
              )}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Showroom là nơi trưng bày sản phẩm, quảng bá thương hiệu và là bộ mặt của toàn công ty. Một không gian showroom đẹp, ấn tượng và thu hút thể hiện tầm vóc, sự chuyên nghiệp của doanh nghiệp.",
              )}
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#yeu-to">
                {t("Khám phá thiết kế")}
              </a>
              <ConsultationButton className={styles.outlineButton}>
                {t("Nhận tư vấn")}
              </ConsultationButton>
            </div>
            <div
              className={styles.heroTags}
              aria-label={t("Yếu tố thiết kế showroom")}
            >
              <a href="#mau-sac">{t("Màu sắc")}</a>
              <a href="#anh-sang">{t("Ánh sáng")}</a>
              <a href="#loi-ich">{t("Lợi ích")}</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/images/thiet-ke-noi-that/showroom/hero.webp"
                alt={t("Thiết kế showroom ấn tượng")}
                fill
                priority
                sizes="(min-width: 900px) 42vw, 90vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>✦</span>
              <span>
                <small>{t("Thiết kế showroom")}</small>
                <strong>{t("Màu sắc và ánh sáng thương hiệu")}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="yeu-to" className={styles.overview}>
        <div className={`${styles.container} ${styles.overviewGrid}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{t("2 yếu tố không thể bỏ qua")}</p>
            <h2>{t("Showroom hút khách nhờ màu sắc và ánh sáng")}</h2>
            <p>
              {t(
                "Bằng kiến thức và am hiểu sâu sắc về kiến trúc và hội họa, đội ngũ thiết kế của Tổ Ấm Hoàn Hảo đã thành công trong việc tư vấn và thiết kế nhiều showroom chuẩn phong cách, sáng tạo, bắt mắt và được khách hàng đánh giá cao.",
              )}
            </p>
          </div>
          <div className={`${styles.typeGrid} ${local.factorGrid}`}>
            {factors.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  href={index === 0 ? "#mau-sac" : "#anh-sang"}
                  className={styles.typeCard}
                  key={item.title}
                >
                  <span className={styles.smallIcon}>
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <span className={styles.textLink}>
                    {t("Xem chi tiết")}
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{t("Dấu ấn thương hiệu")}</p>
            <h2>{t("Không gian trưng bày nhất quán")}</h2>
          </div>
          <article
            id="mau-sac"
            className={`${styles.showcase} ${local.featureShowcase}`}
          >
            <div className={styles.showcaseImage}>
              <Image
                src="/images/thiet-ke-noi-that/showroom/mau-sac.webp"
                alt={t("Phong cách trang trí đi đôi với màu sắc thương hiệu")}
                fill
                sizes="(min-width: 900px) 52vw, 100vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.showcaseCard}>
              <span className={styles.showcaseNumber}>{t("01")}</span>
              <p className={styles.eyebrow}>{t("Màu sắc thương hiệu")}</p>
              <h3>{t("Đồng nhất từ phong cách đến màu sắc")}</h3>
              <p className={styles.showcaseDescription}>
                {t(
                  "Để tạo ra một showroom hợp lý và đồng nhất, phong cách trang trí nên đi đôi với màu sắc thương hiệu. Bổ sung các loại giấy dán tường có họa tiết hoa văn sẽ kích thích người dùng, khiến họ tự động tìm đến với showroom của bạn.",
                )}
              </p>
              <p id="anh-sang" className={styles.showcaseDescription}>
                {t(
                  "Ánh sáng là yếu tố quan trọng quyết định showroom có hút khách hay không, tạo nên bầu không khí của địa điểm và thiết lập tâm trạng trong không gian, đặc biệt hữu ích với các nhà bán lẻ có ngân sách hạn chế.",
                )}
              </p>
              <div className={styles.tagList}>
                <span>{t("Màu sắc")}</span>
                <span>{t("Ánh sáng")}</span>
                <span>{t("Thương hiệu")}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={local.reasonsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{t("Tại sao chọn chúng tôi")}</p>
            <h2>{t("Đồng hành từ ý tưởng đến hoàn thiện")}</h2>
          </div>
          <div className={local.reasonGrid}>
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <article className={styles.categoryCard} key={item.title}>
                  <span className={styles.smallIcon}>
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="loi-ich" className={local.benefitSection}>
        <div className={styles.container}>
          <div className={styles.commitmentBox}>
            <div>
              <p className={styles.eyebrow}>{t("Lợi ích dịch vụ")}</p>
              <h2>{t("Lợi ích khi sử dụng dịch vụ thiết kế showroom")}</h2>
            </div>
            <ul>
              {benefits.map((item) => (
                <li key={item}>
                  <Check size={17} strokeWidth={2} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={local.commitmentCard}>
            <div>
              <p className={styles.eyebrow}>{t("Cam kết của chúng tôi")}</p>
              <h2>{t("Tổ Ấm Hoàn Hảo luôn cam kết với khách hàng")}</h2>
            </div>
            <ul>
              {commitments.map((item) => (
                <li key={item}>
                  <BadgeCheck size={19} strokeWidth={1.7} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <Image
          src="/images/thiet-ke-noi-that/showroom/hero.webp"
          alt={t("Không gian showroom")}
          fill
          sizes="100vw"
          className={styles.coverImage}
        />
        <div className={styles.finalOverlay} />
        <div className={styles.finalContent}>
          <h2>{t("Sẵn sàng kiến tạo showroom khởi đầu cho thành công?")}</h2>
          <p>
            {t(
              "Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất showroom, đúng tiến độ và chi phí hợp lý.",
            )}
          </p>
          <div>
            <ConsultationButton className={styles.lightButton}>
              {t("Đặt lịch tư vấn ngay")}
            </ConsultationButton>
            <a className={styles.phoneButton} href="tel:0903897555">
              {t("Hotline: 0903.897.555")}
            </a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
