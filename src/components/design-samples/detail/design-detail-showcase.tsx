import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CalendarDays,
  ChevronRight,
  Home,
  MessageCircle,
  Palette,
  Phone,
  Ruler,
  UsersRound,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import type { DesignSample } from "@/data/design-samples";
import { testimonials } from "@/data/site";
import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import { designText } from "@/data/design-samples-localized";
import { formatDisplayTitle } from "@/lib/display-title";
import styles from "@/components/projects/detail/project-detail-showcase.module.css";

function imageIdentity(value: string) {
  return value.split("?")[0];
}

function iconForSpecification(label: string): LucideIcon {
  const normalized = label.toLocaleLowerCase("vi");
  if (normalized.includes("diện tích")) return Ruler;
  if (normalized.includes("ngủ")) return BedDouble;
  if (normalized.includes("tắm")) return Bath;
  if (normalized.includes("phong cách")) return Palette;
  if (normalized.includes("đầu tư") || normalized.includes("chi phí"))
    return Wallet;
  if (normalized.includes("phù hợp")) return UsersRound;
  return Home;
}

export function DesignDetailShowcase({
  sample,
  locale = "vi",
}: {
  sample: DesignSample;
  locale?: SiteLocale;
}) {
  const t = (text: string) => designText(text, locale);
  const detail = sample.detail;
  const heroImage = detail?.heroImage || sample.thumbnail;
  const displayTitle =
    detail?.displayTitle && detail.italicTitle
      ? `${formatDisplayTitle(detail.displayTitle, locale)} ${formatDisplayTitle(detail.italicTitle, locale)}`
      : sample.title;
  const overviewParagraphs = detail?.overviewParagraphs?.length
    ? detail.overviewParagraphs
    : [sample.summary];
  const featuresByImage = new Map<
    string,
    NonNullable<typeof detail>["features"]
  >();
  for (const feature of detail?.features ?? []) {
    const key = imageIdentity(feature.image);
    featuresByImage.set(key, [...(featuresByImage.get(key) ?? []), feature]);
  }
  const galleryImages = new Set(
    detail?.gallery.map((item) => imageIdentity(item.image)) ?? [],
  );
  const rooms = [
    ...(detail?.gallery.map((item) => {
      const features = featuresByImage.get(imageIdentity(item.image)) ?? [];
      return {
        title: features[0]?.title ?? item.title,
        image: item.image,
        description: features
          .map((feature) => feature.description)
          .filter(Boolean)
          .join("\n\n"),
      };
    }) ?? []),
    ...(detail?.features
      .filter((feature) => !galleryImages.has(imageIdentity(feature.image)))
      .map((feature) => ({
        title: feature.title,
        image: feature.image,
        description: feature.description,
      })) ?? []),
  ].filter((room) => room.image);
  if (rooms.length === 0)
    rooms.push({ title: sample.title, image: heroImage, description: "" });

  const sourceSpecifications = detail?.infoRows?.length
    ? detail.infoRows
    : [
        { label: "Loại hình", value: detail?.propertyType || sample.type },
        ...(sample.area ? [{ label: "Diện tích", value: sample.area }] : []),
        { label: "Phong cách", value: sample.style },
        ...(detail?.bedrooms
          ? [{ label: "Phòng ngủ", value: detail.bedrooms }]
          : []),
        ...(detail?.suitableFor
          ? [{ label: "Phù hợp", value: detail.suitableFor }]
          : []),
      ];
  const specifications = sourceSpecifications.slice(0, 5);
  const extraInfo = sourceSpecifications.slice(5);
  const specGridStyle = {
    "--spec-columns": specifications.length,
  } as CSSProperties;

  return (
    <div className={styles.page}>
      <SiteHeader locale={locale} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumb}>
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <ChevronRight size={11} />
              <Link href={localizedPageHref("/mau-thiet-ke", locale)}>
                {t("Mẫu thiết kế")}
              </Link>
              <ChevronRight size={11} />
              <span>{formatDisplayTitle(sample.title, locale)}</span>
            </div>
            <p className={styles.eyebrow}>
              {formatDisplayTitle(
                detail?.eyebrow ?? t(sample.category),
                locale,
              )}
            </p>
            <h1
              className={
                displayTitle.length > 60 ? styles.longTitle : undefined
              }
            >
              {detail?.displayTitle && detail.italicTitle ? (
                <>
                  {formatDisplayTitle(detail.displayTitle, locale)}
                  <br />
                  {formatDisplayTitle(detail.italicTitle, locale)}
                </>
              ) : (
                formatDisplayTitle(sample.title, locale)
              )}
            </h1>
            <p className={styles.heroDescription}>
              {detail?.description || sample.summary}
            </p>
            <div className={styles.heroChips}>
              <span>{detail?.propertyType || sample.type}</span>
              {sample.area && <span>{sample.area}</span>}
              {detail?.bedrooms && <span>{detail.bedrooms}</span>}
              <span>{sample.style}</span>
            </div>
            <a className={styles.primaryButton} href="#tong-quan">
              {t("Khám phá mẫu thiết kế")}
              <ArrowRight size={15} />
            </a>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src={heroImage}
              alt={formatDisplayTitle(sample.title, locale)}
              fill
              priority
              sizes="(min-width: 800px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section
        className={styles.specifications}
        id="thong-so"
        aria-labelledby="design-specifications-title"
      >
        <div className={styles.container}>
          <div className={styles.specHeading}>
            <p className={styles.eyebrow}>{t("THÔNG TIN MẪU THIẾT KẾ")}</p>
            <h2 id="design-specifications-title">
              {t("Thông số mẫu thiết kế")}
            </h2>
          </div>
          <div className={styles.specCard}>
            <div className={styles.specRows} style={specGridStyle}>
              {specifications.map(({ label, value }) => {
                const Icon = iconForSpecification(label);
                return (
                  <div className={styles.specRow} key={label}>
                    <span className={styles.specIcon}>
                      <Icon size={22} strokeWidth={1.55} />
                    </span>
                    <span className={styles.specLabel}>{t(label)}</span>
                    <strong>{value}</strong>
                  </div>
                );
              })}
            </div>
            {extraInfo.length > 0 && (
              <div className={styles.extraInfo}>
                {extraInfo.map((row) => (
                  <p key={row.label}>
                    <span>{t(row.label)}</span>
                    <strong>{row.value}</strong>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.overview} id="tong-quan">
        <div className={styles.container}>
          <aside
            className={styles.sidebar}
            aria-label={t("Nội dung mẫu thiết kế")}
          >
            <nav className={styles.sideNav}>
              <a href="#thong-so">{t("Thông số mẫu")}</a>
              <a href="#tong-quan" className={styles.active}>
                {t("Tổng quan")}
              </a>
              {rooms.slice(0, 9).map((room, index) => (
                <a
                  key={`${formatDisplayTitle(room.title, locale)}-${index}`}
                  href={`#phong-${index + 1}`}
                >
                  {formatDisplayTitle(room.title, locale)}
                </a>
              ))}
              {rooms.length > 9 && (
                <a href="#khong-gian">{t("Xem tất cả không gian")}</a>
              )}
            </nav>
            <div className={styles.sideCta}>
              <p>{t("Bạn muốn thiết kế theo phong cách riêng?")}</p>
              <ConsultationButton className={styles.textButton}>
                {t("Liên hệ tư vấn")}
                <ArrowRight size={14} />
              </ConsultationButton>
            </div>
          </aside>

          <div className={styles.mainContent}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>{t("TỔNG QUAN MẪU THIẾT KẾ")}</p>
              <h2>
                {formatDisplayTitle(
                  detail?.overviewTitle ?? sample.title,
                  locale,
                )}
              </h2>
              <div className={styles.introText}>
                {overviewParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <blockquote className={styles.introQuote}>
                <p>
                  {t(
                    "“Chúng tôi luôn đặt mình vào vị trí của khách hàng để tạo nên những không gian sống phù hợp với phong cách và nhu cầu thực tế.”",
                  )}
                </p>
                <footer>{t("— Đội ngũ Tổ Ấm Hoàn Hảo")}</footer>
              </blockquote>
            </div>

            <div className={styles.rooms} id="khong-gian">
              {rooms.map((room, index) => (
                <article
                  id={`phong-${index + 1}`}
                  className={styles.room}
                  key={`${formatDisplayTitle(room.title, locale)}-${index}`}
                >
                  <div className={styles.roomImage}>
                    <Image
                      src={room.image}
                      alt={`${formatDisplayTitle(room.title, locale)} – ${formatDisplayTitle(sample.title, locale)}`}
                      fill
                      sizes="(min-width: 900px) 850px, 100vw"
                    />
                  </div>
                  <div className={styles.roomBody}>
                    <div className={styles.roomHeading}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{formatDisplayTitle(room.title, locale)}</h3>
                    </div>
                    {room.description && (
                      <div className={styles.roomDescription}>
                        {room.description
                          .split("\n\n")
                          .filter(Boolean)
                          .map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>{paragraph}</p>
                          ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.cta}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16,31,22,.86), rgba(16,31,22,.45)), url("${heroImage.replaceAll('"', "%22")}")`,
        }}
      >
        <div className={styles.container}>
          <div className={styles.ctaCopy}>
            <p className={styles.eyebrow}>{t("TỔ ẤM HOÀN HẢO")}</p>
            <h2>{t("Hãy để chúng tôi hiện thực hóa tổ ấm của bạn")}</h2>
            <p>
              {t(
                "Đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm luôn sẵn sàng tư vấn và đồng hành cùng bạn.",
              )}
            </p>
            <ConsultationButton className={styles.ctaButton}>
              {t("Liên hệ tư vấn ngay")}
              <ArrowRight size={15} />
            </ConsultationButton>
          </div>
          <div className={styles.contactCard}>
            <a href="tel:0903897555">
              <Phone size={19} />
              <span>
                {t("Gọi ngay")}
                <strong>0903.897.555</strong>
              </span>
            </a>
            <ConsultationButton>
              <MessageCircle size={19} />
              <span>
                {t("Chat Zalo")}
                <strong>{t("Tư vấn miễn phí")}</strong>
              </span>
            </ConsultationButton>
            <ConsultationButton>
              <CalendarDays size={19} />
              <span>
                {t("Đặt lịch hẹn")}
                <strong>{t("Chúng tôi sẽ liên hệ")}</strong>
              </span>
            </ConsultationButton>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2>{t("Khách hàng nói gì về chúng tôi")}</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <blockquote key={item.name}>
                <p>“{t(item.quote)}”</p>
                <footer>
                  <span>{item.initials}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.project}</small>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
          <Link
            href={localizedPageHref("/mau-thiet-ke", locale)}
            className={styles.allProjects}
          >
            <ArrowLeft size={15} />
            {t("Xem các mẫu thiết kế khác")}
          </Link>
        </div>
      </section>
    </div>
  );
}
