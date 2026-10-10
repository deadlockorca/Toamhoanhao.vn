"use client";

import {
  ArrowLeft, ArrowRight, BadgeCheck, Building2, ChevronDown, ClipboardList,
  DraftingCompass, Gem, Hammer, Play, Ruler, ShieldCheck, UsersRound, X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { homeProjectSummary, homeProjectTitle, homeText } from "@/data/home-english";
import type { Project } from "@/data/projects";
import type { SiteLocale } from "@/lib/locale";
import styles from "./home-landing.module.css";

const categories = ["Tất cả", "Căn hộ", "Nhà phố", "Biệt thự", "Văn phòng", "Kinh doanh"];
const steps = [
  ["Tư vấn", "Tiếp nhận nhu cầu & định hướng phong cách"],
  ["Khảo sát", "Khảo sát hiện trạng & đo đạc chi tiết"],
  ["Thiết kế", "Lên phương án 2D, 3D & dự toán"],
  ["Thi công", "Sản xuất & thi công tại công trình"],
  ["Bàn giao", "Nghiệm thu & bàn giao đưa vào sử dụng"],
];
const customerFeedbackImages = [
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_5.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat1.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_6.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat2.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat3.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat4.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_zalo_1.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_zalo_2.jpg",
];
const heroImages = [
  { src: "/images/trang-chu/nha-pho-dep-1.jpg", label: "Thiết kế nhà phố" },
  { src: "/images/trang-chu/thiet-ke-noi-that-go-oc-cho.jpg", label: "Nội thất gỗ óc chó" },
  { src: "/images/trang-chu/thiet-ke-thi-cong-nha-pho.jpg", label: "Thiết kế thi công nhà phố" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}><span aria-hidden="true">▶</span>{children}</p>;
}

function imageFor(project: Project) {
  return project.detail?.heroImage || project.thumbnail;
}

export function HomeLanding({ projects, locale = "vi" }: { projects: Project[]; locale?: SiteLocale }) {
  const t = (source: string) => homeText(locale, source);
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState("Tất cả");
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [selectedFeedback, setSelectedFeedback] = useState<{ src: string; number: number } | null>(null);
  const [feedbackClosing, setFeedbackClosing] = useState(false);
  const feedbackDialogRef = useRef<HTMLDialogElement>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const caseProject = projects.find((project) => project.featured) || projects[0];

  useEffect(() => {
    if (heroImages.length < 2) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % heroImages.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedFeedback) feedbackDialogRef.current?.showModal();
  }, [selectedFeedback]);

  const visibleProjects = useMemo(() => {
    const filtered = category === "Tất cả" ? projects : projects.filter((project) =>
      category === "Kinh doanh" ? project.category === "Không gian kinh doanh" : project.category === category,
    );
    return filtered.slice(0, 6);
  }, [category, projects]);
  const visibleFeedback = Array.from({ length: 3 }, (_, offset) => ({
    src: customerFeedbackImages[(feedbackIndex + offset) % customerFeedbackImages.length],
    number: (feedbackIndex + offset) % customerFeedbackImages.length + 1,
  }));

  function moveSlide(direction: number) {
    setSlide((current) => (current + direction + heroImages.length) % heroImages.length);
  }

  function closeFeedbackDialog() {
    const dialog = feedbackDialogRef.current;
    if (!dialog?.open || feedbackClosing) return;
    setFeedbackClosing(true);
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 240;
    window.setTimeout(() => dialog.close(), duration);
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"), phone: data.get("phone"), email: data.get("email"),
          service: data.get("service"), message: t("Yêu cầu tư vấn từ trang chủ"),
        }),
      });
      if (!response.ok) throw new Error("Không thể gửi yêu cầu");
      setFormState("done");
    } catch {
      setFormState("error");
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.headerSpacer}><SiteHeader locale={locale} /></div>

      <section className={styles.hero} aria-label={locale === "en" ? "Homepage banner" : "Banner trang chủ"}>
        {heroImages.map((image, index) => <Image key={image.src} src={image.src} alt={index === slide ? t(image.label) : ""} fill priority={index === 0} sizes="100vw" className={`${styles.heroImage} ${index === slide ? styles.heroImageActive : ""}`} />)}
        <div className={styles.heroShade} />
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Eyebrow>{t("PORTFOLIO NỘI THẤT")}</Eyebrow>
            <h1>{t("Những công trình")}<br />{t("kể câu chuyện sống")}</h1>
            <p>{t("Khám phá các dự án thực tế được Tổ Ấm Hoàn Hảo thiết kế và thi công – từ ý tưởng đến hoàn thiện, kiến tạo nên những không gian sống trọn vẹn.")}</p>
            <div className={styles.heroActions}><Link className={styles.buttonPrimary} href="/du-an">{t("Xem dự án")} <ArrowRight size={16} /></Link><ConsultationButton className={styles.buttonOutline}>{t("Nhận báo giá")}</ConsultationButton></div>
          </div>
          {heroImages.length > 1 && <div className={styles.heroAside}>
            <div className={styles.heroThumbs}>{heroImages.map((image, index) => <button type="button" key={image.src} onClick={() => setSlide(index)} className={index === slide ? styles.thumbActive : ""} aria-label={`${locale === "en" ? "View banner" : "Xem banner"} ${t(image.label)}`} aria-pressed={index === slide}><Image src={image.src} alt="" fill sizes="120px" /></button>)}</div>
            <div className={styles.heroControls}><button type="button" onClick={() => moveSlide(-1)} aria-label={t("Ảnh trước")}><ArrowLeft size={15} /></button><button type="button" onClick={() => moveSlide(1)} aria-label={t("Ảnh tiếp theo")}><ArrowRight size={15} /></button><span>{String(slide + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}</span></div>
          </div>}
        </div>
      </section>

      <section className={styles.projectsSection} id="du-an">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><Eyebrow>{t("DỰ ÁN TIÊU BIỂU")}</Eyebrow><h2>{t("Khám phá theo loại công trình")}</h2></div><div className={styles.filters} role="group" aria-label={t("Lọc dự án")}>{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? styles.filterActive : ""} aria-pressed={category === item}>{t(item)}</button>)}</div></div>
          {visibleProjects.length ? <div className={styles.projectGrid}>{visibleProjects.map((project) => <Link href={`/du-an/${project.slug}`} className={styles.projectCard} key={project.slug}><div className={styles.projectPhoto}><Image src={project.thumbnail} alt={homeProjectTitle(locale, project.slug, project.title)} fill sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><div className={styles.cardDetails}><div><h3>{homeProjectTitle(locale, project.slug, project.title)}</h3><p><Building2 size={13} /> {t(project.category)}<i /> <Ruler size={13} /> {project.area}<i /> <BadgeCheck size={13} /> {t(project.style)}</p></div><span className={styles.circleArrow}><ArrowRight size={17} /></span></div></Link>)}</div> : <p className={styles.empty}>{t("Chưa có dự án thuộc danh mục này.")}</p>}
        </div>
      </section>

      {caseProject && <section className={styles.caseSection}>
        <div className={`${styles.container} ${styles.caseGrid}`}>
          <div className={styles.caseImage}><Image src={imageFor(caseProject)} alt={homeProjectTitle(locale, caseProject.slug, caseProject.title)} fill sizes="(max-width: 800px) 100vw, 55vw" /><Link href={`/du-an/${caseProject.slug}`} className={styles.videoPill}><Play size={16} fill="currentColor" /> {t("Xem công trình")}</Link></div>
          <div className={styles.caseCopy}><Eyebrow>{t("CASE STUDY NỔI BẬT")}</Eyebrow><h2>{t("Từ mặt bằng thô đến")}<br />{t("không gian sống hoàn thiện")}</h2><p>{homeProjectSummary(locale, caseProject.slug, caseProject.summary)}</p><div className={styles.caseStages}><div><span><UsersRound size={17} /></span><strong>{t("Khảo sát")}</strong><small>{t("Hiểu rõ nhu cầu")}</small></div><div><span><DraftingCompass size={17} /></span><strong>{t("Thiết kế")}</strong><small>{t("Cá nhân hóa giải pháp")}</small></div><div><span><Hammer size={17} /></span><strong>{t("Thi công")}</strong><small>{t("Đảm bảo chất lượng")}</small></div></div><div className={styles.caseStats}><div><b>{caseProject.area}</b><small>{t("Diện tích")}</small></div><div><b>{t(caseProject.detail?.duration || "Trọn gói")}</b><small>{t("Thời gian thi công")}</small></div><div><b>{t(caseProject.style)}</b><small>{t("Phong cách")}</small></div></div><Link className={styles.buttonPrimary} href={`/du-an/${caseProject.slug}`}>{t("Xem chi tiết case study")} <ArrowRight size={16} /></Link></div>
        </div>
      </section>}

      <section className={styles.beforeSection}><div className={`${styles.container} ${styles.beforeGrid}`}><div className={styles.beforeCopy}><Eyebrow>{t("TRƯỚC & SAU THI CÔNG")}</Eyebrow><h2>{t("Thay đổi có thể")}<br />{t("nhìn thấy")}</h2><p>{t("Cùng xem sự thay đổi của không gian qua từng giai đoạn thiết kế và hoàn thiện.")}</p></div><figure><div className={`${styles.comparisonPhoto} ${styles.beforePhoto}`}><Image src="/images/kien-thuc/kinh-nghiem-xay-nha/to-trat.webp" alt={t("Không gian trong giai đoạn thi công phần thô")} fill sizes="(max-width: 800px) 100vw, 34vw" /><span>{t("Trước thi công")}</span></div><figcaption>{t("Minh họa giai đoạn thi công phần thô")}</figcaption></figure><figure><div className={styles.comparisonPhoto}><Image src="/images/trang-chu/thiet-ke-noi-that-go-oc-cho.jpg" alt={t("Không gian nội thất sau khi hoàn thiện")} fill sizes="(max-width: 800px) 100vw, 34vw" /><span>{t("Sau thi công")}</span></div><figcaption>{t("Minh họa không gian hoàn thiện")}</figcaption></figure></div></section>

      <section className={styles.reasonsSection}><div className={styles.container}><Eyebrow>{t("VÌ SAO KHÁCH HÀNG CHỌN TỔ ẤM HOÀN HẢO")}</Eyebrow><div className={styles.reasonsGrid}><div><Gem /><strong>{t("10+ năm")}<br />{t("kinh nghiệm")}</strong><p>{t("Kiến tạo hàng trăm không gian sống chất lượng")}</p></div><div><UsersRound /><strong>150+<br />{t("công trình")}</strong><p>{t("Được khách hàng tin tưởng trên toàn quốc")}</p></div><div><ClipboardList /><strong>{t("Xưởng sản xuất")}<br />{t("trực tiếp")}</strong><p>{t("Chủ động chất lượng và tiến độ")}</p></div><div><ShieldCheck /><strong>{t("Quy trình minh bạch")}</strong><p>{t("Rõ ràng, chuyên nghiệp ở mọi giai đoạn")}</p></div></div></div></section>

      <section className={styles.processSection} id="quy-trinh"><div className={`${styles.container} ${styles.processGrid}`}><div><Eyebrow>{t("QUY TRÌNH LÀM VIỆC")}</Eyebrow><h2>{t("5 bước kiến tạo tổ ấm")}</h2></div><ol>{steps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{t(title)}</strong><small>{t(description)}</small></div>{index < steps.length - 1 && <ArrowRight className={styles.stepArrow} size={17} />}</li>)}</ol></div></section>

      <section className={styles.testimonialSection} aria-labelledby="customer-feedback-title">
        <div className={styles.container}>
          <div className={styles.feedbackHeader}>
            <div>
              <Eyebrow>{t("KHÁCH HÀNG NÓI VỀ CHÚNG TÔI")}</Eyebrow>
              <h2 id="customer-feedback-title">{t("Những chia sẻ chân thực")}</h2>
              <p>{t("Hình ảnh phản hồi từ khách hàng, lưu lại trong hành trình cùng Tổ Ấm Hoàn Hảo.")}</p>
            </div>
            <div className={styles.feedbackControls}>
              <span>{String(feedbackIndex + 1).padStart(2, "0")} / {String(customerFeedbackImages.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => setFeedbackIndex((index) => (index - 1 + customerFeedbackImages.length) % customerFeedbackImages.length)} aria-label={t("Xem phản hồi trước")}><ArrowLeft size={17} /></button>
              <button type="button" onClick={() => setFeedbackIndex((index) => (index + 1) % customerFeedbackImages.length)} aria-label={t("Xem phản hồi tiếp theo")}><ArrowRight size={17} /></button>
            </div>
          </div>
          <div className={styles.testimonialGrid}>
            {visibleFeedback.map(({ src, number }, index) => (
              <button type="button" className={`${styles.feedbackCard} ${index > 0 ? styles.feedbackCardExtra : ""}`} onClick={() => setSelectedFeedback({ src, number })} key={src} aria-label={locale === "en" ? `Enlarge client feedback photo ${number}` : `Xem lớn ảnh phản hồi khách hàng ${number}`} aria-haspopup="dialog">
                <div className={styles.feedbackPhoto}>
                  <span className={styles.feedbackNumber}>{String(number).padStart(2, "0")}</span>
                  <div className={styles.feedbackImage}><Image src={src} alt={locale === "en" ? `Client feedback photo ${number}` : `Ảnh phản hồi khách hàng ${number}`} fill sizes="(max-width: 620px) 70vw, (max-width: 850px) 34vw, 230px" /></div>
                </div>
                <div className={styles.feedbackCaption}><div><span>{t("PHẢN HỒI THỰC TẾ")}</span><strong>{t("Chia sẻ từ khách hàng")}</strong></div><ArrowRight size={18} aria-hidden="true" /></div>
              </button>
            ))}
          </div>
          <p className={styles.feedbackHint}>{t("Chọn một ảnh để xem lớn ngay trên trang.")}</p>
        </div>
      </section>

      {selectedFeedback && <dialog ref={feedbackDialogRef} className={`${styles.feedbackDialog} ${feedbackClosing ? styles.feedbackDialogClosing : ""}`} aria-label={locale === "en" ? `Client feedback photo ${selectedFeedback.number}` : `Ảnh phản hồi khách hàng ${selectedFeedback.number}`} onClose={() => { setSelectedFeedback(null); setFeedbackClosing(false); }} onCancel={(event) => { event.preventDefault(); closeFeedbackDialog(); }} onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); closeFeedbackDialog(); } }} onClick={(event) => { if (event.target === event.currentTarget) closeFeedbackDialog(); }}>
        <div className={styles.feedbackDialogHeader}>
          <span>{t("PHẢN HỒI KHÁCH HÀNG")} &nbsp; {String(selectedFeedback.number).padStart(2, "0")}</span>
          <button type="button" onClick={closeFeedbackDialog} aria-label={t("Đóng ảnh phản hồi")}><X size={20} /></button>
        </div>
        <Image src={selectedFeedback.src} alt={locale === "en" ? `Enlarged client feedback photo ${selectedFeedback.number}` : `Ảnh phản hồi khách hàng ${selectedFeedback.number} ở kích thước lớn`} width={720} height={1280} unoptimized className={styles.feedbackDialogImage} />
      </dialog>}

      <section className={styles.leadSection} id="tu-van"><Image src="/images/trang-chu/thiet-ke-thi-cong-nha-pho.jpg" alt="" fill sizes="100vw" /><div className={`${styles.container} ${styles.leadGrid}`}><div><Eyebrow>{t("TƯ VẤN DỰ ÁN")}</Eyebrow><h2>{t("Bạn đang có dự án cần triển khai?")}</h2><p>{t("Hãy để chúng tôi đồng hành cùng bạn kiến tạo không gian sống lý tưởng. Nhận tư vấn miễn phí từ đội ngũ chuyên gia của Tổ Ấm Hoàn Hảo.")}</p></div>{formState === "done" ? <p className={styles.formSuccess}>{t("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.")}</p> : <form onSubmit={submitLead} className={styles.leadForm}><input name="name" required placeholder={t("Họ và tên *")} aria-label={t("Họ và tên")} /><input name="phone" required type="tel" placeholder={t("Số điện thoại *")} aria-label={t("Số điện thoại")} /><input name="email" required type="email" placeholder={t("Email *")} aria-label="Email" /><label><select name="service" defaultValue="" required aria-label={t("Nhu cầu của bạn")}><option value="" disabled>{t("Nhu cầu của bạn")}</option><option value="Thiết kế nội thất">{t("Thiết kế nội thất")}</option><option value="Thi công nội thất">{t("Thi công nội thất")}</option><option value="Xây dựng trọn gói">{t("Xây dựng trọn gói")}</option><option value="Sản xuất nội thất">{t("Sản xuất nội thất")}</option></select><ChevronDown size={15} /></label><button type="submit" disabled={formState === "sending"}>{formState === "sending" ? t("Đang gửi...") : t("Tiếp nhận dự án")} <ArrowRight size={16} /></button>{formState === "error" && <p role="alert">{t("Gửi thất bại. Vui lòng thử lại hoặc gọi 0903 897 555.")}</p>}</form>}</div></section>

      <SiteFooter locale={locale} />
    </main>
  );
}
