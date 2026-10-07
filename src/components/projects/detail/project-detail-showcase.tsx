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
import styles from "./project-detail-showcase.module.css";

function findInfo(project: Project, label: string) {
  return project.detail?.infoRows.find((row) =>
    row.label.toLocaleLowerCase("vi").includes(label),
  )?.value;
}

function imageIdentity(value: string) {
  return value.split("?")[0];
}

export function ProjectDetailShowcase({ project }: { project: Project }) {
  const detail = project.detail;
  const heroImage = detail?.heroImage || project.thumbnail;
  const overviewParagraphs = detail?.overviewParagraphs?.length
    ? detail.overviewParagraphs
    : [project.summary];
  const heroDescription = detail?.description || project.summary;
  const storiesByImage = new Map<string, NonNullable<typeof detail>["storyBlocks"]>();
  for (const block of detail?.storyBlocks ?? []) {
    const key = imageIdentity(block.image);
    storiesByImage.set(key, [...(storiesByImage.get(key) ?? []), block]);
  }
  const spaceImages = new Set(detail?.spaces.map((space) => imageIdentity(space.image)) ?? []);
  const rooms = [
    ...(detail?.spaces.map((space) => {
      const stories = storiesByImage.get(imageIdentity(space.image)) ?? [];
      return {
        title: stories[0]?.title ?? space.title,
        image: space.image,
        description: stories.map((block) => block.description).filter(Boolean).join("\n\n"),
      };
    }) ?? []),
    ...(detail?.storyBlocks.filter((block) => !spaceImages.has(imageIdentity(block.image))).map((block) => ({
      title: block.title,
      image: block.image,
      description: block.description,
    })) ?? []),
  ].filter((room) => room.image);
  const specifications = [
    { label: "Vị trí", value: project.location, icon: MapPin },
    { label: "Diện tích", value: project.area, icon: Ruler },
    {
      label: "Hạng mục",
      value: findInfo(project, "hạng mục") ?? detail?.scope ?? project.category,
      icon: Layers3,
    },
    {
      label: "Phòng ngủ",
      value: findInfo(project, "phòng ngủ") ?? detail?.bedrooms ?? "Chưa cập nhật",
      icon: BedDouble,
    },
    { label: "Phong cách", value: project.style, icon: Palette },
  ];
  const extraInfo = detail?.infoRows.filter(
    (row) => !specifications.some((spec) => spec.label === row.label),
  ) ?? [];

  return (
    <div className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link><ChevronRight size={11} />
              <Link href="/du-an">Dự án</Link><ChevronRight size={11} />
              <span>{project.title}</span>
            </div>
            <p className={styles.eyebrow}>— &nbsp; {detail?.eyebrow ?? project.category}</p>
            <h1>{detail?.displayTitle && detail.italicTitle ? <>{detail.displayTitle}<br />{detail.italicTitle}</> : project.title}</h1>
            <p className={styles.heroDescription}>{heroDescription}</p>
            <div className={styles.heroChips}>
              <span>{project.area}</span>
              {detail?.bedrooms && <span>{detail.bedrooms}</span>}
              {detail?.bathrooms && !/đang cập nhật/i.test(detail.bathrooms) && <span>{detail.bathrooms} phòng tắm</span>}
              <span>{project.style}</span>
              <span>{project.location}</span>
            </div>
            <a className={styles.primaryButton} href="#tong-quan">Khám phá từng phòng <ArrowRight size={15} /></a>
          </div>
          <div className={styles.heroVisual}>
            <Image src={heroImage} alt={`Không gian ${project.title}`} fill priority sizes="(min-width: 800px) 55vw, 100vw" />
          </div>
        </div>
      </section>

      <section className={styles.specifications} id="thong-so" aria-labelledby="project-specifications-title">
        <div className={styles.container}>
          <div className={styles.specHeading}>
            <p className={styles.eyebrow}>— &nbsp; THÔNG TIN CÔNG TRÌNH</p>
            <h2 id="project-specifications-title">Thông số dự án</h2>
          </div>
          <div className={styles.specCard}>
            <div className={styles.specRows}>
              {specifications.map(({ label, value, icon: Icon }) => (
                <div className={styles.specRow} key={label}>
                  <span className={styles.specIcon}><Icon size={22} strokeWidth={1.55} /></span>
                  <span className={styles.specLabel}>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            {extraInfo.length > 0 && <div className={styles.extraInfo}>
              {extraInfo.map((row) => <p key={row.label}><span>{row.label}</span><strong>{row.value}</strong></p>)}
            </div>}
          </div>
        </div>
      </section>

      <section className={styles.overview} id="tong-quan">
        <div className={styles.container}>
          <aside className={styles.sidebar} aria-label="Nội dung dự án">
            <nav className={styles.sideNav}>
              <a href="#thong-so">Thông số dự án</a>
              <a href="#tong-quan" className={styles.active}>Tổng quan</a>
              {rooms.slice(0, 9).map((room, index) => <a key={`${room.title}-${index}`} href={`#phong-${index + 1}`}>{room.title}</a>)}
              {rooms.length > 9 && <a href="#khong-gian">Xem tất cả không gian</a>}
            </nav>
            <div className={styles.sideCta}>
              <p>Bạn muốn thiết kế theo phong cách riêng?</p>
              <ConsultationButton className={styles.textButton}>Liên hệ tư vấn <ArrowRight size={14} /></ConsultationButton>
            </div>
          </aside>

          <div className={styles.mainContent}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>— &nbsp; TỔNG QUAN DỰ ÁN</p>
              <h2>{detail?.overviewTitle ?? project.title}</h2>
              <div className={styles.introText}>{overviewParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
              <blockquote className={styles.introQuote}>
                <p>“Chúng tôi luôn đặt mình vào vị trí của khách hàng để tạo nên những không gian sống phù hợp với phong cách và nhu cầu thực tế.”</p>
                <footer>— Đội ngũ Tổ Ấm Hoàn Hảo</footer>
              </blockquote>
            </div>

            {rooms.length > 0 && <div className={styles.rooms} id="khong-gian">
              {rooms.map((room, index) => (
                <article id={`phong-${index + 1}`} className={styles.room} key={`${room.title}-${index}`}>
                  <div className={styles.roomImage}>
                    <Image src={room.image} alt={`${room.title} – ${project.title}`} fill sizes="(min-width: 900px) 850px, 100vw" />
                  </div>
                  <div className={styles.roomBody}>
                    <div className={styles.roomHeading}><span>{String(index + 1).padStart(2, "0")}</span><h3>{room.title}</h3></div>
                    {room.description && <div className={styles.roomDescription}>
                      {room.description.split("\n\n").filter(Boolean).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                    </div>}
                  </div>
                </article>
              ))}
            </div>}

          </div>
        </div>
      </section>

      <section className={styles.cta} style={{ backgroundImage: `linear-gradient(90deg, rgba(16,31,22,.86), rgba(16,31,22,.45)), url("${heroImage.replaceAll('"', '%22')}")` }}><div className={styles.container}>
        <div className={styles.ctaCopy}><p className={styles.eyebrow}>— &nbsp; TỔ ẤM HOÀN HẢO</p><h2>Hãy để chúng tôi hiện thực hóa tổ ấm của bạn</h2><p>Đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm luôn sẵn sàng tư vấn và đồng hành cùng bạn.</p><ConsultationButton className={styles.ctaButton}>Liên hệ tư vấn ngay <ArrowRight size={15} /></ConsultationButton></div>
        <div className={styles.contactCard}><a href="tel:0903897555"><Phone size={19} /><span>Gọi ngay<strong>0903.897.555</strong></span></a><ConsultationButton><MessageCircle size={19} /><span>Chat Zalo<strong>Tư vấn miễn phí</strong></span></ConsultationButton><ConsultationButton><CalendarDays size={19} /><span>Đặt lịch hẹn<strong>Chúng tôi sẽ liên hệ</strong></span></ConsultationButton></div>
      </div></section>

      <section className={styles.testimonials}><div className={styles.container}><h2>Khách hàng nói gì về chúng tôi</h2><div className={styles.testimonialGrid}>{testimonials.map((item) => <blockquote key={item.name}><p>“{item.quote}”</p><footer><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.project}</small></div></footer></blockquote>)}</div><Link href="/du-an" className={styles.allProjects}><ArrowLeft size={15} /> Xem các dự án khác</Link></div></section>
    </div>
  );
}
