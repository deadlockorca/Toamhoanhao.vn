import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Crown,
  DoorOpen,
  Hotel,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./hotel.module.css";
import { interiorDesignText } from "@/data/interior-design-localized";
import { homePath, type SiteLocale } from "@/lib/locale";
type Feature = { icon: LucideIcon; title: string; content: string };
export function HotelInteriorDesignPage({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const t = (text: string) => interiorDesignText(text, locale);
  const hotelTypes: Feature[] = [
    {
      icon: Crown,
      title: t("Khách sạn 5 sao đẳng cấp"),
      content: t(
        "Hướng đến phân khúc khách hàng hạng sang, thiết kế chú trọng sự sang trọng, tiện nghi và đẳng cấp ở từng không gian.",
      ),
    },
    {
      icon: Hotel,
      title: t("Khách sạn 3 sao ấn tượng"),
      content: t(
        "Đảm bảo sự tiện nghi, lịch sự và tính thẩm mỹ cao với quy mô vừa phải, tối ưu không gian cho khách hàng thoải mái.",
      ),
    },
    {
      icon: DoorOpen,
      title: t("Khách sạn mini độc đáo"),
      content: t(
        "Giải pháp tối ưu cho diện tích vừa và nhỏ, giản lược chi tiết thừa để không gian thông thoáng, dễ chịu.",
      ),
    },
  ];
  const hotelStyles = [
    {
      id: "khach-san-5-sao",
      label: t("Khách sạn 5 sao"),
      title: t("Đẳng cấp, hiện đại, sang trọng"),
      image: "/images/thiet-ke-noi-that/khach-san/khach-san-5-sao.webp",
      alt: t("Thiết kế nội thất khách sạn 5 sao sang trọng"),
      description: [
        t(
          "Khách sạn 5 sao phục vụ chủ yếu phân khúc khách hàng hạng sang, tầm cỡ doanh nhân lớn. Vì vậy yêu cầu về tính sang trọng, tiện nghi, đẳng cấp luôn được đặt lên hàng đầu.",
        ),
        t(
          "Từ sảnh lễ tân, phòng ngủ, phòng tập gym, bể bơi, spa đến nhà hàng đều phải được thiết kế ấn tượng, đáp ứng quy mô và tầm cỡ công trình.",
        ),
      ],
      tags: [
        t("Sảnh lễ tân"),
        t("Phòng ngủ"),
        "Gym",
        t("Bể bơi"),
        "Spa",
        t("Nhà hàng"),
      ],
    },
    {
      id: "khach-san-3-sao",
      label: t("Khách sạn 3 sao"),
      title: t("Tiện nghi, lịch sự, thẩm mỹ"),
      image: "/images/thiet-ke-noi-that/khach-san/khach-san-3-sao.webp",
      alt: t("Thiết kế nội thất khách sạn 3 sao"),
      description: [
        t(
          "Không đòi hỏi cầu kỳ, hoành tráng như khách sạn 5 sao nhưng vẫn phải đảm bảo sự tiện nghi, lịch sự và tính thẩm mỹ cao, tạo cảm giác thoải mái khi sử dụng dịch vụ, đồng thời tiết kiệm không gian.",
        ),
      ],
      tags: [
        t("Tiện nghi"),
        t("Lịch sự"),
        t("Thẩm mỹ cao"),
        t("Tiết kiệm không gian"),
      ],
    },
    {
      id: "khach-san-mini",
      label: t("Khách sạn mini"),
      title: t("Đơn giản mà độc đáo"),
      image: "/images/thiet-ke-noi-that/khach-san/khach-san-mini.webp",
      alt: t("Thiết kế nội thất khách sạn mini"),
      description: [
        t(
          "Với mảnh đất vừa hay nhỏ muốn đầu tư kinh doanh, khách sạn mini là phương án tối ưu. Các kiến trúc sư giàu kinh nghiệm sẽ giúp bạn giải quyết trọn vẹn bài toán không gian.",
        ),
        t(
          "Có thể thiết kế theo phong cách hoàng gia, tân cổ điển hoặc hiện đại, giản lược các vật dụng không cần thiết để không gian thông thoáng, dễ chịu nhất.",
        ),
      ],
      tags: [t("Hoàng gia"), t("Tân cổ điển"), t("Hiện đại")],
    },
  ];
  const categories: Feature[] = [
    {
      icon: DoorOpen,
      title: t("Sảnh lễ tân"),
      content: t(
        "Thiết kế sảnh đón tiếp ấn tượng, thể hiện đẳng cấp thương hiệu ngay từ lối vào.",
      ),
    },
    {
      icon: UsersRound,
      title: t("Phòng ngủ"),
      content: t(
        "Phòng nghỉ tiện nghi, ấm cúng và thư giãn, phù hợp từng phân khúc khách hàng.",
      ),
    },
    {
      icon: Sparkles,
      title: t("Nhà tắm – vệ sinh"),
      content: t("Không gian vệ sinh sạch sẽ, sang trọng và công năng tối ưu."),
    },
    {
      icon: BadgeCheck,
      title: t("Khu phục vụ chung"),
      content: t("Nhà hàng, bể bơi, quán cà phê, spa… cho khách sạn 4-5 sao."),
    },
    {
      icon: SwatchBook,
      title: t("Tiểu cảnh, sân vườn"),
      content: t("Thiết kế cảnh quan xanh, điểm nhấn ngoài trời nếu có."),
    },
  ];
  const processSteps = [
    t("Tiếp nhận yêu cầu của khách hàng"),
    t("Khảo sát hiện trạng công trình"),
    t("Báo giá"),
    t("Ký kết hợp đồng"),
    t("Sản xuất và thi công lắp đặt"),
    t("Nghiệm thu và bàn giao công trình"),
    t("Thanh lý hợp đồng và bảo hành"),
  ];
  const commitments = [
    t("Tư vấn tận tâm và hoàn toàn miễn phí từ các chuyên gia hàng đầu"),
    t("Được lắng nghe tâm tư, nguyện vọng một cách cởi mở nhất"),
    t("Được cung cấp các phương án thiết kế sát ý tưởng gia chủ nhất"),
    t("Được lựa chọn thực thi một phương án thiết kế tối ưu nhất"),
    t("Chi phí, giá thành hợp lý nhất"),
  ];
  const faqs = [
    {
      question: t("Khách sạn quy mô nhỏ có thể thiết kế được không?"),
      answer: t(
        "Có. Với diện tích vừa và nhỏ, thiết kế khách sạn mini tập trung tối ưu không gian và giản lược những vật dụng không cần thiết.",
      ),
    },
    {
      question: t("Có nhận thi công trọn gói không?"),
      answer: t(
        "Chúng tôi cung cấp dịch vụ thiết kế và thi công nội thất khách sạn trọn gói, từ khảo sát hiện trạng đến nghiệm thu, bàn giao và bảo hành.",
      ),
    },
    {
      question: t("Chi phí thiết kế được tính như thế nào?"),
      answer: t(
        "Chi phí phụ thuộc vào quy mô, hiện trạng và phương án thiết kế của công trình. Chúng tôi khảo sát và báo giá trước khi ký hợp đồng.",
      ),
    },
    {
      question: t("Tôi cần chuẩn bị gì trước khi liên hệ?"),
      answer: t(
        "Bạn có thể chia sẻ nhu cầu, quy mô và hiện trạng công trình để đội ngũ tư vấn phương án phù hợp.",
      ),
    },
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
              <span>{t("Thiết kế khách sạn")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Thiết kế nội thất")}</p>
            <h1>
              {locale === "vi" ? (
                <>
                  {" "}
                  Thiết kế <span>khách sạn</span>{" "}
                </>
              ) : (
                t("Thiết kế nội thất khách sạn")
              )}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Khách sạn không chỉ là nơi trú chân mà còn là không gian trải nghiệm. Thiết kế nội thất khách sạn sang trọng, tiện nghi sẽ để lại ấn tượng khó quên trong lòng mỗi du khách.",
              )}
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#hinh-thuc">
                {t("Khám phá thiết kế")}
              </a>
              <ConsultationButton className={styles.outlineButton}>
                {t("Nhận tư vấn")}
              </ConsultationButton>
            </div>
            <div
              className={styles.heroTags}
              aria-label={t("Loại hình khách sạn")}
            >
              <a href="#khach-san-5-sao">{t("5 sao")}</a>
              <a href="#khach-san-3-sao">{t("3 sao")}</a>
              <a href="#khach-san-mini">{t("Mini")}</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/images/thiet-ke-noi-that/khach-san/banner.webp"
                alt={t("Không gian nội thất khách sạn")}
                fill
                priority
                sizes="(min-width: 900px) 42vw, 90vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>✦</span>
              <span>
                <small>{t("Thiết kế cho mọi phân khúc")}</small>
                <strong>{t("Từ khách sạn mini đến 5 sao")}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={`${styles.container} ${styles.overviewGrid}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{t("Tổng quan")}</p>
            <h2>{t("Đẳng cấp tạo nên danh tiếng")}</h2>
            <p>
              {t(
                "Thiết kế khách sạn đẹp phải phù hợp với đối tượng khách hàng, vừa thể hiện bản sắc và đẳng cấp thương hiệu, để lại ấn tượng trong lòng mỗi du khách ghé thăm.",
              )}
            </p>
          </div>
          <div className={styles.typeGrid}>
            {hotelTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  href={`#${hotelStyles[index].id}`}
                  className={styles.typeCard}
                  key={item.title}
                >
                  <span className={styles.smallIcon}>
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <span className={styles.textLink}>
                    {t("Xem phong cách")}
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="hinh-thuc" className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{t("Phong cách thiết kế")}</p>
            <h2>{t("Ba hướng thiết kế cho từng quy mô")}</h2>
          </div>
          <div className={styles.showcaseList}>
            {hotelStyles.map((item, index) => (
              <article
                id={item.id}
                key={item.id}
                className={`${styles.showcase} ${index === 1 ? styles.showcaseReverse : ""}`}
              >
                <div className={styles.showcaseImage}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 900px) 52vw, 100vw"
                    className={styles.coverImage}
                  />
                </div>
                <div className={styles.showcaseCard}>
                  <span className={styles.showcaseNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className={styles.eyebrow}>{item.label}</p>
                  <h3>{item.title}</h3>
                  {item.description.map((paragraph) => (
                    <p className={styles.showcaseDescription} key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  <div className={styles.tagList}>
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={`${styles.container} ${styles.categoriesGrid}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{t("Các hạng mục")}</p>
            <h2>{t("Trọn vẹn từng không gian khách sạn")}</h2>
            <p>
              {t(
                "Với năng lực thực tế và tâm huyết nghề nghiệp, chúng tôi cung cấp dịch vụ thiết kế – thi công trọn gói, đảm bảo chất lượng tốt nhất và chi phí hợp lý nhất.",
              )}
            </p>
          </div>
          <div className={styles.categoryCards}>
            {categories.map((item) => {
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

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>{t("Quy trình làm việc")}</p>
            <h2>{t("7 bước từ tiếp nhận đến bảo hành")}</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <article className={styles.processCard} key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.lowerSection}>
        <div className={styles.container}>
          <div className={styles.commitmentBox}>
            <div>
              <p className={styles.eyebrow}>{t("Cam kết của chúng tôi")}</p>
              <h2>{t("Tận tâm trong từng công trình khách sạn")}</h2>
              <p>
                {t(
                  "Chúng tôi tự hào mang đến những không gian lý tưởng nhất. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn như phục vụ những người thân yêu trong chính gia đình mình.",
                )}
              </p>
            </div>
            <ul>
              {commitments.map((item) => (
                <li key={item}>
                  <ShieldCheck size={17} strokeWidth={1.7} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>{t("Giải đáp")}</p>
              <h2>{t("Câu hỏi thường gặp")}</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <Image
          src="/images/thiet-ke-noi-that/khach-san/banner.webp"
          alt={t("Không gian khách sạn")}
          fill
          sizes="100vw"
          className={styles.coverImage}
        />
        <div className={styles.finalOverlay} />
        <div className={styles.finalContent}>
          <h2>{t("Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!")}</h2>
          <p>
            {t(
              "Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất khách sạn, đúng tiến độ và chi phí hợp lý.",
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
