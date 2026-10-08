import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Fragment } from "react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  beautifulHomeArticles,
  beautifulHomeListingHref,
  getBeautifulHomeArticleHref,
  type BeautifulHomeArticle,
} from "@/data/beautiful-home-articles";
import styles from "../experience-listing.module.css";

export const metadata: Metadata = {
  title: "Kiến thức nhà đẹp | Tổ Ấm Hoàn Hảo",
  description: "Gợi ý thực tế để kiến tạo không gian sống đẹp, tiện nghi và hài hòa với lối sống của gia đình.",
};

const years = [...new Set(beautifulHomeArticles.map((article) => article.date.slice(-4)))].sort((left, right) => Number(right) - Number(left));
const yearOf = (article: BeautifulHomeArticle) => article.date.slice(-4);
const articleNumber = (article: BeautifulHomeArticle) => String(beautifulHomeArticles.indexOf(article) + 1).padStart(3, "0");
const excerptText = (article: BeautifulHomeArticle) => article.excerpt.replaceAll("[&hellip;]", "…").replaceAll("&hellip;", "…").replaceAll("&gt;", ">");

function getVisiblePages(currentPage: number, pageCount: number) {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  return [...new Set([1, 2, currentPage - 1, currentPage, currentPage + 1, pageCount - 1, pageCount])]
    .filter((page) => page >= 1 && page <= pageCount)
    .sort((left, right) => left - right);
}

export default async function BeautifulHomeKnowledgePage({ searchParams }: PageProps<"/kien-thuc/kien-thuc-nha-dep">) {
  const { trang, nam } = await searchParams;
  const yearValue = Array.isArray(nam) ? nam[0] : nam;
  const selectedYear = years.includes(yearValue ?? "") ? yearValue : undefined;
  const filteredArticles = selectedYear
    ? beautifulHomeArticles.filter((article) => yearOf(article) === selectedYear)
    : beautifulHomeArticles;
  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / 6));
  const trangValue = Array.isArray(trang) ? trang[0] : trang;
  const requestedPage = Number.parseInt(trangValue ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), pageCount) : 1;
  const visibleArticles = filteredArticles.slice((currentPage - 1) * 6, currentPage * 6);
  const featured = currentPage === 1 ? visibleArticles[0] : undefined;
  const cardArticles = featured ? visibleArticles.slice(1) : visibleArticles;
  const visiblePages = getVisiblePages(currentPage, pageCount);
  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    if (selectedYear) params.set("nam", selectedYear);
    if (page > 1) params.set("trang", String(page));
    const query = params.toString();
    return `${beautifulHomeListingHref}${query ? `?${query}` : ""}#articles`;
  };

  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Điều hướng trang"><Link href="/">Trang chủ</Link><span>/</span><span>Kiến thức nhà đẹp</span></nav>
            <p className={styles.eyebrow}>Cẩm nang không gian sống</p>
            <h1>Kiến thức <span>nhà đẹp</span></h1>
            <p className={styles.heroDescription}>Những gợi ý gần gũi để kiến tạo một không gian đẹp, tiện nghi và mang dấu ấn riêng của mỗi gia đình.</p>
            <div className={styles.heroActions}><Link className={styles.primaryButton} href="#articles">Đọc bài viết</Link><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
            <div className={styles.heroStats}><div><strong>{beautifulHomeArticles.length}</strong><small>Bài viết</small></div><div><strong>{years.length}</strong><small>Năm có bài viết</small></div></div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/gioi-thieu/banner.png" alt="Không gian nội thất hiện đại" fill priority sizes="(max-width: 700px) 100vw, 530px" style={{ objectPosition: "right center" }} />
            <div className={styles.heroNote}><span aria-hidden="true">✓</span><div><strong>Ý tưởng nhà đẹp</strong><small>Khám phá các bài viết hiện có</small></div></div>
          </div>
        </div>
      </section>
      <section id="articles" className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Đọc thêm</p><h2>Bài viết về kiến thức nhà đẹp</h2></div><p>{beautifulHomeArticles.length} bài viết trong chuyên mục kiến thức nhà đẹp của Tổ Ấm Hoàn Hảo.</p></div>
          <nav className={styles.filters} aria-label="Lọc bài viết theo năm đăng">
            <Link href={`${beautifulHomeListingHref}#articles`} aria-current={!selectedYear ? "page" : undefined} className={!selectedYear ? styles.activeFilter : ""}>Tất cả</Link>
            {years.map((year) => <Link key={year} href={`${beautifulHomeListingHref}?nam=${year}#articles`} aria-current={selectedYear === year ? "page" : undefined} className={selectedYear === year ? styles.activeFilter : ""}>{year}</Link>)}
          </nav>
          {featured && <article className={styles.featuredCard}>
            <Link href={getBeautifulHomeArticleHref(featured.slug)} className={styles.featuredImage} aria-label={featured.title}><Image src={featured.image} alt={featured.title} fill sizes="(max-width: 700px) 100vw, 630px" /></Link>
            <div className={styles.featuredCopy}><div className={styles.cardMeta}><span>Bài viết {articleNumber(featured)}</span><span>{featured.date}</span></div><h3><Link href={getBeautifulHomeArticleHref(featured.slug)}>{featured.title}</Link></h3><p>{excerptText(featured)}</p><Link className={styles.readMore} href={getBeautifulHomeArticleHref(featured.slug)}>Xem bài viết <ArrowRight size={15} aria-hidden="true" /></Link></div>
          </article>}
          {cardArticles.length > 0 && <div className={styles.cardsGrid}>
            {cardArticles.map((article) => <article key={article.slug} className={styles.articleCard}>
              <Link href={getBeautifulHomeArticleHref(article.slug)} className={styles.cardImage} aria-label={article.title}><Image src={article.image} alt={article.title} fill sizes="(max-width: 700px) 100vw, 370px" /></Link>
              <div className={styles.cardCopy}><div className={styles.cardMeta}><span>Bài viết {articleNumber(article)}</span><span>{article.date}</span></div><h3><Link href={getBeautifulHomeArticleHref(article.slug)}>{article.title}</Link></h3><p>{excerptText(article)}</p><Link className={styles.readMore} href={getBeautifulHomeArticleHref(article.slug)}>Xem bài viết <ArrowRight size={15} aria-hidden="true" /></Link></div>
            </article>)}
            {currentPage === 1 && <aside className={styles.inlineCta}><h3>Bạn đang lên ý tưởng cho ngôi nhà?</h3><p>Chia sẻ nhu cầu của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp.</p><ConsultationButton>Nhận tư vấn</ConsultationButton></aside>}
          </div>}
          {pageCount > 1 && <nav className={styles.pagination} aria-label="Phân trang bài viết">
            {currentPage > 1 ? <Link href={pageHref(currentPage - 1)} aria-label="Trang trước"><ArrowLeft size={16} /></Link> : <span aria-hidden="true"><ArrowLeft size={16} /></span>}
            {visiblePages.map((page, index) => <Fragment key={page}>{index > 0 && page - visiblePages[index - 1] > 1 && <span aria-hidden="true">…</span>}<Link href={pageHref(page)} aria-current={page === currentPage ? "page" : undefined} className={page === currentPage ? styles.currentPage : ""}>{page}</Link></Fragment>)}
            {currentPage < pageCount ? <Link href={pageHref(currentPage + 1)} aria-label="Trang sau"><ArrowRight size={16} /></Link> : <span aria-hidden="true"><ArrowRight size={16} /></span>}
          </nav>}
        </div>
      </section>
      <section className={styles.bottomCta}>
        <Image src="/images/gioi-thieu/banner.png" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}><h2>Bạn đang lên ý tưởng cho ngôi nhà?</h2><p>Nhận tư vấn về thiết kế, công năng và chi phí từ đội ngũ Tổ Ấm Hoàn Hảo.</p><div><ConsultationButton>Đặt lịch tư vấn ngay</ConsultationButton><a href="tel:0903387555">Hotline: 0903.897.555</a></div></div>
      </section>
      <SiteFooter />
    </main>
  );
}
