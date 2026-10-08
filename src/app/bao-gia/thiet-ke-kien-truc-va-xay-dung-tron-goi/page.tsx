import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  DraftingCompass,
  Info,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { constructionPricingArticles } from "@/data/construction-pricing-articles";
import styles from "../pricing-overview.module.css";

export const metadata: Metadata = {
  title: "Báo giá thiết kế kiến trúc và xây dựng trọn gói | Tổ Ấm Hoàn Hảo",
  description: "Tham khảo phạm vi và cách lập báo giá thiết kế kiến trúc, xây dựng trọn gói cho nhà phố và biệt thự.",
};

const pricingPrinciples = [
  { icon: Ruler, title: "Quy mô thực tế", content: "Diện tích xây dựng, số tầng, kết cấu và hiện trạng khu đất." },
  { icon: DraftingCompass, title: "Hồ sơ thiết kế", content: "Kiến trúc, kết cấu, điện nước và mức độ chi tiết cần triển khai." },
  { icon: BadgeDollarSign, title: "Mức đầu tư", content: "Vật liệu hoàn thiện, tiêu chuẩn kỹ thuật và ngân sách dự kiến." },
  { icon: ShieldCheck, title: "Điều kiện thi công", content: "Vị trí, tiến độ, phương án vận chuyển và yêu cầu bàn giao." },
];
const process = [
  { title: "Tiếp nhận nhu cầu", content: "Ghi nhận quy mô, diện tích đất, công năng và mức đầu tư dự kiến." },
  { title: "Khảo sát hiện trạng", content: "Kiểm tra khu đất, hiện trạng và điều kiện triển khai thực tế." },
  { title: "Thống nhất thiết kế", content: "Chốt phương án kiến trúc, kết cấu, vật liệu và phạm vi công việc." },
  { title: "Lập dự toán", content: "Bóc tách khối lượng theo hồ sơ và tiêu chuẩn vật liệu đã chọn." },
  { title: "Ký kết triển khai", content: "Thống nhất tiến độ, trách nhiệm, nghiệm thu và bàn giao." },
];
const locations = ["Hà Nội", "TP. Hồ Chí Minh", "TP. Thủ Đức", "Bình Dương", "Thanh Hóa", "Các tỉnh lân cận"];
const filters = [
  { value: "nha-pho", label: "Nhà phố", slugs: constructionPricingArticles.slice(0, 3).map((article) => article.slug) },
  { value: "cach-tinh-gia", label: "Cách tính giá", slugs: ["cach-tinh-gia-xay-dung-tron-goi-va-phan-tho"] },
  { value: "quy-trinh", label: "Quy trình", slugs: ["quy-trinh-xay-nha-tron-goi"] },
];
const basePath = "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi";

export default async function ArchitectureConstructionPricingPage({ searchParams }: PageProps<"/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi">) {
  const { loai } = await searchParams;
  const filterValue = Array.isArray(loai) ? loai[0] : loai;
  const selectedFilter = filters.find((filter) => filter.value === filterValue);
  const visibleArticles = selectedFilter
    ? constructionPricingArticles.filter((article) => selectedFilter.slugs.includes(article.slug))
    : constructionPricingArticles;

  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Điều hướng trang"><Link href="/">Trang chủ</Link><span>/</span><span>Báo giá kiến trúc & xây dựng</span></nav>
            <p className={styles.eyebrow}>Báo giá xây dựng</p>
            <h1>Thiết kế kiến trúc <span>& xây dựng trọn gói</span></h1>
            <p className={styles.heroDescription}>Báo giá được xây dựng từ quy mô thực tế, giải pháp kỹ thuật và mức đầu tư phù hợp với cách gia đình bạn muốn sống.</p>
            <div className={styles.heroActions}><ConsultationButton className={styles.primaryButton}>Nhận tư vấn <ArrowRight size={15} aria-hidden="true" /></ConsultationButton><a href="tel:0903897555" className={styles.outlineButton}><Phone size={15} aria-hidden="true" />0903.897.555</a></div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/bao-gia/xay-dung/nha-pho.webp" alt="Thiết kế nhà phố" fill priority sizes="(max-width: 700px) 100vw, 530px" />
            <div className={styles.heroNote}><span className={styles.heroNoteIcon}><Ruler size={17} aria-hidden="true" /></span><span><small>Dự toán theo công trình</small><strong>Rõ phạm vi thực hiện</strong></span></div>
          </div>
        </div>
      </section>
      <div className={`${styles.container} ${styles.factorWrap}`}><section className={styles.factors} aria-label="Các yếu tố quyết định báo giá">
        {pricingPrinciples.map((principle) => { const Icon = principle.icon; return <article key={principle.title} className={styles.factor}><span className={styles.factorIcon}><Icon size={17} aria-hidden="true" /></span><h2>{principle.title}</h2><p>{principle.content}</p></article>; })}
      </section></div>

      <section id="bao-gia" className={styles.library}>
        <div className={styles.container}>
          <div className={styles.libraryHeading}><div><p className={styles.eyebrow}>Thư viện báo giá</p><h2>Báo giá thiết kế kiến trúc và xây dựng trọn gói</h2></div><p>{constructionPricingArticles.length} bài viết từ chuyên mục báo giá cũ giúp bạn tham khảo cách tính diện tích, phân chia hạng mục và quy trình trước khi nhận dự toán theo công trình thực tế.</p></div>
          <div className={styles.packages} aria-label="Chủ đề tham khảo">
            {constructionPricingArticles.slice(0, 4).map((article, index) => <Link key={article.slug} href={`${basePath}/${article.slug}`} className={`${styles.package} ${styles.topicCard} ${index === 3 ? styles.packageFeatured : ""}`}><small>Bài tham khảo 0{index + 1}</small><strong>{article.title}</strong></Link>)}
          </div>
          <nav className={styles.filters} aria-label="Lọc bài viết báo giá">
            <Link href={`${basePath}#bao-gia`} aria-current={!selectedFilter ? "page" : undefined} className={!selectedFilter ? styles.activeFilter : ""}>Tất cả</Link>
            {filters.map((filter) => <Link key={filter.value} href={`${basePath}?loai=${filter.value}#bao-gia`} aria-current={selectedFilter?.value === filter.value ? "page" : undefined} className={selectedFilter?.value === filter.value ? styles.activeFilter : ""}>{filter.label}</Link>)}
          </nav>
          <div className={styles.articleGrid}>{visibleArticles.map((article) => <article key={article.slug} className={styles.articleCard}>
            <Link href={`${basePath}/${article.slug}`} className={styles.cardImage} aria-label={article.title}><Image src={article.image} alt={article.title} fill sizes="(max-width: 700px) 100vw, 370px" /></Link>
            <div className={styles.cardCopy}><div className={styles.cardMeta}><span>{String(constructionPricingArticles.indexOf(article) + 1).padStart(2, "0")}</span><span>Báo giá xây dựng</span></div><h3><Link href={`${basePath}/${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className={styles.readMore} href={`${basePath}/${article.slug}`}>Xem chi tiết <ArrowRight size={15} aria-hidden="true" /></Link></div>
          </article>)}
            {!selectedFilter && <aside className={styles.articleCta}><h3>Bạn đang chuẩn bị xây nhà?</h3><p>Chia sẻ mặt bằng và nhu cầu để đội ngũ Tổ Ấm Hoàn Hảo tư vấn phạm vi phù hợp.</p><ConsultationButton>Nhận tư vấn</ConsultationButton></aside>}
          </div>
          <p className={styles.archiveNote}><Info size={17} aria-hidden="true" />Các số liệu trong bài viết cũ chỉ mang tính tham khảo theo thời điểm đăng. Báo giá chính thức cần được lập lại theo hiện trạng, vật liệu và thời điểm triển khai.</p>
        </div>
      </section>
      <section className={styles.processSection}>
        <div className={styles.container}><div className={styles.centerHeading}><p className={styles.eyebrow}>Quy trình làm việc</p><h2>Từ nhu cầu đến dự toán chính thức</h2></div><div className={styles.processGrid}>{process.map((step, index) => <article key={step.title} className={styles.processCard}><span className={styles.processNumber}>0{index + 1}</span><h3>{step.title}</h3><p>{step.content}</p></article>)}</div></div>
      </section>
      <section className={styles.locationsSection}>
        <div className={`${styles.container} ${styles.locationsBox}`}><div className={styles.locationsIntro}><p className={styles.eyebrow}>Khu vực tiếp nhận</p><h2>Khu vực tiếp nhận công trình</h2><p>Phạm vi triển khai cụ thể được xác nhận theo địa điểm, điều kiện khu đất và quy mô công trình.</p></div><div className={styles.locationGrid}>{locations.map((location) => <span key={location}><MapPin size={14} aria-hidden="true" />{location}</span>)}</div></div>
      </section>
      <section className={styles.bottomCta}>
        <Image src="/images/bao-gia/xay-dung/nha-pho.webp" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}><p className={styles.eyebrow}>Nhận dự toán theo công trình</p><h2>Gửi nhu cầu để nhận tư vấn xây dựng phù hợp</h2><p>Đội ngũ sẽ trao đổi về loại hình nhà, diện tích, mức đầu tư và các điều kiện thực tế trước khi lên dự toán.</p><div className={styles.bottomActions}><ConsultationButton>Yêu cầu báo giá</ConsultationButton><a href="tel:0903897555">Gọi 0903.897.555</a></div></div>
      </section>
      <SiteFooter />
    </main>
  );
}
