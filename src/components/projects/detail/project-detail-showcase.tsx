import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CalendarDays,
  ChevronRight,
  Layers3,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import type { Project } from "@/data/projects";
import { testimonials } from "@/data/site";
import { projectText } from "@/data/projects-localized";
import { localizedPageHref } from "@/lib/localized-pages";
import { homePath, type SiteLocale } from "@/lib/locale";
import { formatDisplayTitle } from "@/lib/display-title";
import styles from "./project-detail-showcase.module.css";

function findInfo(project: Project, label: string) {
  return project.detail?.infoRows.find((row) =>
    row.label.toLocaleLowerCase("vi").includes(label),
  )?.value;
}

function imageIdentity(value: string) {
  return value.split("?")[0];
}

export function ProjectDetailShowcase({
  project,
  locale = "vi",
}: {
  project: Project;
  locale?: SiteLocale;
}) {
  const t = (source: string) => projectText(source, locale);
  const detail = project.detail;
  const heroImage = detail?.heroImage || project.thumbnail;
  const splitTitle =
    locale === "vi" && detail?.displayTitle && detail.italicTitle
      ? {
          primary: formatDisplayTitle(detail.displayTitle, locale),
          secondary: formatDisplayTitle(detail.italicTitle, locale),
        }
      : undefined;
  const heroTitle = splitTitle
    ? `${splitTitle.primary} ${splitTitle.secondary}`
    : formatDisplayTitle(project.title, locale);
  const overviewParagraphs = detail?.overviewParagraphs?.length
    ? detail.overviewParagraphs
    : [project.summary];
  const heroDescription = detail?.description || project.summary;
  const storiesByImage = new Map<
    string,
    NonNullable<typeof detail>["storyBlocks"]
  >();
  for (const block of detail?.storyBlocks ?? []) {
    const key = imageIdentity(block.image);
    storiesByImage.set(key, [...(storiesByImage.get(key) ?? []), block]);
  }
  const spaceImages = new Set(
    detail?.spaces.map((space) => imageIdentity(space.image)) ?? [],
  );
  const rooms = [
    ...(detail?.spaces.map((space) => {
      const stories = storiesByImage.get(imageIdentity(space.image)) ?? [];
      return {
        title: stories[0]?.title ?? space.title,
        image: space.image,
        description: stories
          .map((block) => block.description)
          .filter(Boolean)
          .join("\n\n"),
      };
    }) ?? []),
    ...(detail?.storyBlocks
      .filter((block) => !spaceImages.has(imageIdentity(block.image)))
      .map((block) => ({
        title: block.title,
        image: block.image,
        description: block.description,
      })) ?? []),
  ].filter((room) => room.image);
  const specifications = [
    { label: "Vị trí", value: project.location, icon: MapPin },
    { label: "Diện tích", value: t(project.area), icon: Ruler },
    {
      label: "Hạng mục",
      value:
        findInfo(project, "hạng mục") ?? detail?.scope ?? t(project.category),
      icon: Layers3,
    },
    {
      label: "Phòng ngủ",
      value:
        findInfo(project, "phòng ngủ") ??
        detail?.bedrooms ??
        t("Chưa cập nhật"),
      icon: BedDouble,
    },
    { label: "Phong cách", value: project.style, icon: Palette },
  ];
  const extraInfo =
    detail?.infoRows.filter(
      (row) => !specifications.some((spec) => spec.label === row.label),
    ) ?? [];

  return (
    <div className={styles.page}>
      <SiteHeader locale={locale} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumb}>
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <ChevronRight size={11} />
              <Link href={localizedPageHref("/du-an", locale)}>
                {t("Dự án")}
              </Link>
              <ChevronRight size={11} />
              <span>{formatDisplayTitle(project.title, locale)}</span>
            </div>
            <p className={styles.eyebrow}>
              — &nbsp;{" "}
              {formatDisplayTitle(
                detail?.eyebrow ?? t(project.category),
                locale,
              )}
            </p>
            <h1
              className={heroTitle.length > 60 ? styles.longTitle : undefined}
            >
              {splitTitle ? (
                <>
                  {splitTitle.primary}
                  <br />
                  {splitTitle.secondary}
                </>
              ) : (
                heroTitle
              )}
            </h1>
            <p className={styles.heroDescription}>{heroDescription}</p>
            <div className={styles.heroChips}>
              <span>{t(project.area)}</span>
              {detail?.bedrooms && <span>{detail.bedrooms}</span>}
              {detail?.bathrooms && detail.bathrooms !== t("Đang cập nhật") && (
                <span>
                  {detail.bathrooms} {t("phòng tắm")}
                </span>
              )}
              <span>{project.style}</span>
              <span>{project.location}</span>
            </div>
            <a className={styles.primaryButton} href="#tong-quan">
              {t("Khám phá từng phòng")}
              <ArrowRight size={15} />
            </a>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src={heroImage}
              alt={`${t("Không gian")} ${formatDisplayTitle(project.title, locale)}`}
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
        aria-labelledby="project-specifications-title"
      >
        <div className={styles.container}>
          <div className={styles.specHeading}>
            <p className={styles.eyebrow}>
              — &nbsp; {t("THÔNG TIN CÔNG TRÌNH")}
            </p>
            <h2 id="project-specifications-title">{t("Thông số dự án")}</h2>
          </div>
          <div className={styles.specCard}>
            <div className={styles.specRows}>
              {specifications.map(({ label, value, icon: Icon }) => (
                <div className={styles.specRow} key={label}>
                  <span className={styles.specIcon}>
                    <Icon size={22} strokeWidth={1.55} />
                  </span>
                  <span className={styles.specLabel}>{t(label)}</span>
                  <strong>{value}</strong>
                </div>
              ))}
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
          <aside className={styles.sidebar} aria-label={t("Nội dung dự án")}>
            <nav className={styles.sideNav}>
              <a href="#thong-so">{t("Thông số dự án")}</a>
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
              <p className={styles.eyebrow}>— &nbsp; {t("TỔNG QUAN DỰ ÁN")}</p>
              <h2>
                {formatDisplayTitle(
                  detail?.overviewTitle ?? project.title,
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

            {rooms.length > 0 && (
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
                        alt={`${formatDisplayTitle(room.title, locale)} – ${formatDisplayTitle(project.title, locale)}`}
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
            )}
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
            <p className={styles.eyebrow}>— &nbsp; {t("TỔ ẤM HOÀN HẢO")}</p>
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
            href={localizedPageHref("/du-an", locale)}
            className={styles.allProjects}
          >
            <ArrowLeft size={15} />
            {t("Xem các dự án khác")}
          </Link>
        </div>
      </section>
    </div>
  );
}
