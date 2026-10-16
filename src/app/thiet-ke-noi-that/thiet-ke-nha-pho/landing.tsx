import Image from "next/image";
import Link from "next/link";
import { Check, Leaf, Lightbulb, Ruler, SwatchBook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./townhouse.module.css";
import { interiorDesignText } from "@/data/interior-design-localized";
import { homePath, type SiteLocale } from "@/lib/locale";
type Feature = { icon: LucideIcon; title: string; content: string };
export function TownhouseInteriorDesignPage({
  locale = "vi",
}: {
  locale?: SiteLocale;
}) {
  const t = (text: string) => interiorDesignText(text, locale);
  const tips: Feature[] = [
    {
      icon: Lightbulb,
      title: t("Thiết kế hiện đại tăng sức hút"),
      content: t(
        "Lựa chọn nội thất hiện đại vừa đáp ứng yếu tố đẹp, độc đáo, vừa tích hợp công năng và phù hợp với nguồn tài chính của gia đình.",
      ),
    },
    {
      icon: SwatchBook,
      title: t("Điểm nhấn từ vật liệu trang trí"),
      content: t(
        "Ngoài gỗ, gạch ốp tường… cần phối hợp màu sắc và đồ dùng trong gia đình để tăng sức hút cho ngôi nhà.",
      ),
    },
    {
      icon: Ruler,
      title: t("Phân bổ diện tích đồng đều"),
      content: t(
        "Diện tích nhà phố phải phù hợp với đồ nội thất, kiến trúc sắp xếp thành đường, mảng, khối tạo không gian thoáng đãng, chú trọng ánh sáng.",
      ),
    },
    {
      icon: Leaf,
      title: t("Hài hòa với thiên nhiên"),
      content: t(
        "Yếu tố chủ chốt giúp điều hòa sinh khí, tăng cường bầu không khí trong lành và cân bằng cuộc sống trong ngôi nhà.",
      ),
    },
  ];
  const designIdeas = [
    {
      id: "hien-dai",
      label: t("Phong cách hiện đại"),
      title: t("Đẹp, độc đáo và tích hợp công năng"),
      image: "/images/thiet-ke-noi-that/nha-pho/hien-dai.webp",
      alt: t("Thiết kế nội thất nhà phố hiện đại"),
      description: t(
        "Bí quyết đầu tiên để một căn nhà phố trở nên bắt mắt chính là lựa chọn thiết kế nội thất hiện đại. Không chỉ đáp ứng yếu tố đẹp, độc đáo, những mẫu thiết kế này còn vừa tích hợp công năng, vừa phù hợp với nguồn tài chính của gia đình.",
      ),
      tags: [t("Hiện đại"), t("Độc đáo"), t("Công năng")],
    },
    {
      id: "vat-lieu",
      label: t("Vật liệu trang trí"),
      title: t("Điểm nhấn hoàn hảo cho không gian"),
      image: "/images/thiet-ke-noi-that/nha-pho/vat-lieu.webp",
      alt: t("Điểm nhấn từ vật liệu trang trí nhà phố"),
      description: t(
        "Với thiết kế nội thất nhà phố, ngoài việc tận dụng những vật liệu chính như gỗ, gạch ốp tường, cần làm tăng sức hút cho ngôi nhà bằng cách phối hợp các màu sắc và đồ dùng trong gia đình với nhau.",
      ),
      tags: [t("Gỗ"), t("Gạch ốp tường"), t("Màu sắc")],
    },
    {
      id: "khong-gian",
      label: t("Không gian"),
      title: t("Phân bổ diện tích đồng đều"),
      image: "/images/thiet-ke-noi-that/nha-pho/phan-bo-dien-tich.webp",
      alt: t("Phân bổ diện tích đồng đều trong thiết kế nhà phố"),
      description: t(
        "Diện tích nhà phố phải phù hợp với đồ nội thất, không nên sử dụng các đồ nội thất quá lớn trong khi diện tích nhà lại nhỏ. Đặc trưng của nhà phố là kiến trúc được sắp xếp thành những đường, mảng, khối tạo không gian thoáng đãng, cùng ánh sáng được chú trọng làm điểm nhấn.",
      ),
      tags: [t("Diện tích"), t("Không gian"), t("Ánh sáng")],
    },
    {
      id: "thien-nhien",
      label: t("Thiên nhiên"),
      title: t("Hài hòa với thiên nhiên"),
      image: "/images/thiet-ke-noi-that/nha-pho/thien-nhien.webp",
      alt: t("Thiết kế nhà phố hài hòa với thiên nhiên"),
      description: t(
        "Đây là yếu tố chủ chốt trong thiết kế nhà phố độc lạ. Nó góp phần điều hòa sinh khí, tăng cường bầu không khí trong lành đồng thời cân bằng cuộc sống trong ngôi nhà của bạn.",
      ),
      tags: [t("Sinh khí"), t("Không khí trong lành"), t("Cân bằng")],
    },
  ];
  const reasons = [
    t("Hợp lý về công năng sử dụng và thẩm mỹ"),
    t("Lấy nhu cầu của khách hàng làm trọng tâm của những sáng tạo"),
    t("Thực hiện đúng tiến độ công trình"),
    t("Đảm bảo chất lượng công trình theo cam kết"),
    t("Đảm bảo quy trình thi công và bảo hành sản phẩm"),
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
              <span>{t("Thiết kế nhà phố")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Thiết kế nội thất")}</p>
            <h1>
              {locale === "vi" ? (
                <>
                  {" "}
                  Thiết kế <span>nhà phố</span>{" "}
                </>
              ) : (
                t("Thiết kế nội thất nhà phố")
              )}
            </h1>
            <p className={styles.heroDescription}>
              {t(
                "Nắm được những bí quyết thiết kế nội thất nhà phố độc lạ, bạn sẽ có một không gian sống mang cá tính và màu sắc riêng biệt khiến bất cứ ai đến tham quan đều ngưỡng mộ.",
              )}
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#bi-quyet">
                {t("Khám phá bí quyết")}
              </a>
              <ConsultationButton className={styles.outlineButton}>
                {t("Nhận tư vấn")}
              </ConsultationButton>
            </div>
            <div
              className={styles.heroTags}
              aria-label={t("Bí quyết thiết kế nhà phố")}
            >
              <a href="#hien-dai">{t("Hiện đại")}</a>
              <a href="#vat-lieu">{t("Vật liệu")}</a>
              <a href="#khong-gian">{t("Không gian")}</a>
              <a href="#thien-nhien">{t("Thiên nhiên")}</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/images/thiet-ke-noi-that/nha-pho/hero.webp"
                alt={t("Thiết kế nội thất nhà phố hiện đại")}
                fill
                priority
                sizes="(min-width: 900px) 42vw, 90vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>✦</span>
              <span>
                <small>{t("Không gian sống riêng biệt")}</small>
                <strong>{t("Thiết kế theo cá tính gia chủ")}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="bi-quyet" className={styles.overview}>
        <div className={`${styles.container} ${styles.overviewGrid}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{t("Bí quyết thiết kế")}</p>
            <h2>{t("Bật mí bí quyết thiết kế nhà phố độc lạ")}</h2>
            <p>
              {t(
                "Không gian nhà phố được tạo nên từ lựa chọn nội thất, vật liệu, cách phân bổ diện tích và sự kết nối với thiên nhiên.",
              )}
            </p>
          </div>
          <div className={`${styles.typeGrid} ${styles.typeGridFour}`}>
            {tips.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  href={`#${designIdeas[index].id}`}
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
            <p className={styles.eyebrow}>{t("Bốn yếu tố tạo nên dấu ấn")}</p>
            <h2>{t("Không gian mang cá tính riêng")}</h2>
          </div>
          <div className={styles.showcaseList}>
            {designIdeas.map((item, index) => (
              <article
                id={item.id}
                className={`${styles.showcase} ${index % 2 ? styles.showcaseReverse : ""}`}
                key={item.id}
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
                  <p className={styles.showcaseDescription}>
                    {item.description}
                  </p>
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
              <p className={styles.eyebrow}>{t("Vì sao chọn chúng tôi")}</p>
              <h2>
                {t("Tổ Ấm Hoàn Hảo – giải pháp cho thiết kế nội thất nhà phố")}
              </h2>
              <p>
                {t(
                  "Với mục đích giúp gia chủ tạo dựng không gian rộng rãi, tiện nghi và hiện đại, chúng tôi cam kết cung cấp dịch vụ có tính khả thi cao.",
                )}
              </p>
            </div>
            <ul>
              {reasons.map((item) => (
                <li key={item}>
                  <Check size={17} strokeWidth={2} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.companionBox}>
            <div>
              <p className={styles.eyebrow}>{t("Người bạn đồng hành")}</p>
              <h2>
                {t(
                  "Tổ Ấm Hoàn Hảo – người bạn đồng hành thân thiết của mọi gia đình",
                )}
              </h2>
              <p>
                {t(
                  "Tư vấn miễn phí mọi vấn đề thiết kế – thi công – nội thất tại nhà. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn với chất lượng tuyệt vời nhất, đáp ứng mọi yêu cầu của khách hàng khó tính nhất.",
                )}
              </p>
            </div>
            <ConsultationButton className={styles.primaryButton}>
              {t("Nhận tư vấn")}
            </ConsultationButton>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <Image
          src="/images/thiet-ke-noi-that/nha-pho/hero.webp"
          alt={t("Không gian nhà phố")}
          fill
          sizes="100vw"
          className={styles.coverImage}
        />
        <div className={styles.finalOverlay} />
        <div className={styles.finalContent}>
          <h2>{t("Sẵn sàng kiến tạo không gian nhà phố của bạn?")}</h2>
          <p>
            {t(
              "Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất nhà phố, đúng tiến độ và chi phí hợp lý.",
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
