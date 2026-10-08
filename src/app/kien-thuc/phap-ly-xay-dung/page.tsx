import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildingLegalArticles,
  buildingLegalListingHref,
  getBuildingLegalArticleHref,
  type BuildingLegalArticle,
} from "@/data/building-legal-articles";
import styles from "../experience-listing.module.css";

export const metadata: Metadata = {
  title: "Pháp lý xây dựng | Tổ Ấm Hoàn Hảo",
  description: "Cẩm nang các thủ tục pháp lý, giấy phép và hồ sơ cần chuẩn bị trước khi xây dựng.",
};

type Category = "giay-phep" | "quy-trinh";
const categories: { value: Category; label: string }[] = [
  { value: "giay-phep", label: "Giấy phép xây dựng" },
  { value: "quy-trinh", label: "Quy trình xây nhà" },
];
function getCategory(article: BuildingLegalArticle): Category {
  return article.slug === "thu-tuc-xin-giay-phep-xay-dung" ? "giay-phep" : "quy-trinh";
}
function getCategoryLabel(article: BuildingLegalArticle) {
  return categories.find((category) => category.value === getCategory(article))?.label;
}

export default async function BuildingLegalPage({ searchParams }: PageProps<"/kien-thuc/phap-ly-xay-dung">) {
  const { "chu-de": topic } = await searchParams;
  const topicValue = Array.isArray(topic) ? topic[0] : topic;
  const selectedCategory = categories.find((category) => category.value === topicValue)?.value;
  const visibleArticles = selectedCategory
    ? buildingLegalArticles.filter((article) => getCategory(article) === selectedCategory)
    : buildingLegalArticles;
  const featured = visibleArticles[0];
  const cardArticles = visibleArticles.slice(1);
  const articleNumber = (article: BuildingLegalArticle) => String(buildingLegalArticles.indexOf(article) + 1).padStart(2, "0");

  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Điều hướng trang"><Link href="/">Trang chủ</Link><span>/</span><span>Pháp lý xây dựng</span></nav>
            <p className={styles.eyebrow}>Kiến thức xây dựng</p>
            <h1>Pháp lý <span>xây dựng</span></h1>
            <p className={styles.heroDescription}>Cẩm nang tổng hợp các đầu việc pháp lý thường gặp trước, trong và sau khi xây dựng, giúp bạn chuẩn bị hồ sơ chủ động hơn.</p>
            <div className={styles.heroActions}><Link className={styles.primaryButton} href="#articles">Đọc bài viết</Link><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
            <div className={styles.heroStats}><div><strong>{buildingLegalArticles.length}</strong><small>Bài viết</small></div><div><strong>{categories.length}</strong><small>Chủ đề để khám phá</small></div></div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/gioi-thieu/thuong-hieu.png" alt="Công trình nhà ở hiện đại" fill priority sizes="(max-width: 700px) 100vw, 530px" />
            <div className={styles.heroNote}><span aria-hidden="true">✓</span><div><strong>Cẩm nang xây dựng</strong><small>Tìm hiểu trước khi triển khai</small></div></div>
          </div>
        </div>
      </section>
      <section id="articles" className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Đọc thêm</p><h2>Bài viết về pháp lý xây dựng</h2></div><p>{buildingLegalArticles.length} bài viết hiện có trong chuyên mục pháp lý xây dựng của Tổ Ấm Hoàn Hảo.</p></div>
          <nav className={styles.filters} aria-label="Lọc bài viết theo chủ đề">
            <Link href={`${buildingLegalListingHref}#articles`} aria-current={!selectedCategory ? "page" : undefined} className={!selectedCategory ? styles.activeFilter : ""}>Tất cả</Link>
            {categories.map((category) => <Link key={category.value} href={`${buildingLegalListingHref}?chu-de=${category.value}#articles`} aria-current={selectedCategory === category.value ? "page" : undefined} className={selectedCategory === category.value ? styles.activeFilter : ""}>{category.label}</Link>)}
          </nav>
          {featured && <article className={styles.featuredCard}>
            <Link href={getBuildingLegalArticleHref(featured.slug)} className={styles.featuredImage} aria-label={featured.title}><Image src={featured.image} alt={featured.title} fill sizes="(max-width: 700px) 100vw, 630px" /></Link>
            <div className={styles.featuredCopy}><div className={styles.cardMeta}><span>Bài viết {articleNumber(featured)} · {featured.date}</span><span>{getCategoryLabel(featured)}</span></div><h3><Link href={getBuildingLegalArticleHref(featured.slug)}>{featured.title}</Link></h3><p>{featured.excerpt}</p><Link className={styles.readMore} href={getBuildingLegalArticleHref(featured.slug)}>Xem bài viết <ArrowRight size={15} aria-hidden="true" /></Link></div>
          </article>}
          {!selectedCategory && <div className={`${styles.cardsGrid} ${styles.twoColumnCards}`}>
            {cardArticles.map((article) => <article key={article.slug} className={styles.articleCard}>
              <Link href={getBuildingLegalArticleHref(article.slug)} className={styles.cardImage} aria-label={article.title}><Image src={article.image} alt={article.title} fill sizes="(max-width: 700px) 100vw, 560px" /></Link>
              <div className={styles.cardCopy}><div className={styles.cardMeta}><span>Bài viết {articleNumber(article)} · {article.date}</span><span>{getCategoryLabel(article)}</span></div><h3><Link href={getBuildingLegalArticleHref(article.slug)}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className={styles.readMore} href={getBuildingLegalArticleHref(article.slug)}>Xem bài viết <ArrowRight size={15} aria-hidden="true" /></Link></div>
            </article>)}
            <aside className={styles.inlineCta}><h3>Bạn đang chuẩn bị xây nhà?</h3><p>Chia sẻ kế hoạch của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp.</p><ConsultationButton>Nhận tư vấn</ConsultationButton></aside>
          </div>}
        </div>
      </section>
      <section className={styles.bottomCta}>
        <Image src="/images/gioi-thieu/thuong-hieu.png" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}><h2>Bạn đang chuẩn bị xây nhà?</h2><p>Nhận tư vấn về thiết kế, thi công và các bước chuẩn bị từ đội ngũ Tổ Ấm Hoàn Hảo.</p><div><ConsultationButton>Đặt lịch tư vấn ngay</ConsultationButton><a href="tel:0903387555">Hotline: 0903.897.555</a></div></div>
      </section>
      <SiteFooter />
    </main>
  );
}
