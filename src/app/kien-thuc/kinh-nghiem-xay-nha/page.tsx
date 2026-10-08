import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../experience-listing.module.css";

export const metadata: Metadata = {
  title: "Kinh nghiệm xây nhà trọn gói | Tổ Ấm Hoàn Hảo",
  description: "Những kinh nghiệm xây nhà thực tế về định hướng thiết kế, ngân sách, thi công và lựa chọn vật liệu.",
};

type Category = "thiet-ke" | "thi-cong" | "phong-thuy";

const categories: { value: Category; label: string }[] = [
  { value: "thiet-ke", label: "Thiết kế" },
  { value: "thi-cong", label: "Thi công" },
  { value: "phong-thuy", label: "Phong thủy" },
];

const readingTopics: {
  slug: string;
  title: string;
  image: string;
  description: string;
  category: Category;
}[] = [
  {
    slug: "kinh-nghiem-chon-huong-nha-15",
    title: "Kinh nghiệm chọn hướng nhà",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/huong-nha.webp",
    description: "Chọn hướng nhà theo tuổi của gia chủ và điều kiện khí hậu để tạo nên không gian sống thuận tiện, hài hòa.",
    category: "phong-thuy",
  },
  {
    slug: "kinh-nghiem-do-be-tong-28",
    title: "Kinh nghiệm đổ bê tông cột, dầm, sàn",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/do-be-tong.webp",
    description: "Những yêu cầu kỹ thuật cần nắm rõ khi triển khai các hạng mục kết cấu quan trọng của công trình.",
    category: "thi-cong",
  },
  {
    slug: "chien-luoc-thiet-ke-nha-co-dien-tich-nho",
    title: "Chiến lược thiết kế nhà có diện tích nhỏ",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-nho.webp",
    description: "Gợi ý để một ngôi nhà diện tích nhỏ vẫn có đủ tiện ích và đáp ứng nhu cầu sử dụng của gia đình.",
    category: "thiet-ke",
  },
  {
    slug: "nhung-luu-y-khi-thi-cong-to-trat-tuong-nha",
    title: "Những lưu ý khi thi công tô trát tường nhà",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/to-trat.webp",
    description: "Các điểm cần kiểm tra trong công tác tô trát và nghiệm thu để tường phẳng, bền, hạn chế nứt hoặc bong tróc.",
    category: "thi-cong",
  },
  {
    slug: "phong-thuy-xay-nha-14",
    title: "Phong thủy xây nhà: 5 điều cần lưu ý khi xây nhà cho hợp phong thủy",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/phong-thuy.webp",
    description: "Những nguyên tắc phong thủy cơ bản giúp gia chủ cân nhắc hướng, bố cục và không gian sống hài hòa.",
    category: "phong-thuy",
  },
  {
    slug: "5-dieu-can-luu-y-khi-thiet-ke-cua-cong-ra-vao",
    title: "5 điều cần lưu ý khi thiết kế cửa cổng ra vào",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/cua-cong.webp",
    description: "Cân đối phong thủy, an toàn, riêng tư, thông thoáng và thẩm mỹ cho lối vào của công trình.",
    category: "thiet-ke",
  },
  {
    slug: "kinh-nghiem-thiet-ke-nha-co-anh-sang-tu-nhien-14-2",
    title: "4 kinh nghiệm thiết kế nhà để tận dụng được ánh sáng tự nhiên nhất",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/anh-sang.webp",
    description: "Gợi ý thiết kế để các không gian trong nhà đón được ánh sáng tự nhiên một cách hiệu quả.",
    category: "thiet-ke",
  },
  {
    slug: "kinh-nghiem-thi-cong-nha-mai-thai-1-tang-14",
    title: "Kinh nghiệm thi công nhà mái Thái 1 tầng siêu chất lượng khiến bạn không còn đắn đo",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-mai-thai.webp",
    description: "Những kinh nghiệm thực tế về giải pháp mái, tiến độ và chất lượng khi triển khai nhà mái Thái một tầng.",
    category: "thi-cong",
  },
  {
    slug: "kinh-nghiem-xay-nha-10",
    title: "6 kinh nghiệm xây nhà - chọn vật liệu xây dựng trong thi công nhà ở",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/vat-lieu.webp",
    description: "Kinh nghiệm lựa chọn vật liệu xây dựng hợp lý, tiết kiệm và phù hợp với nhu cầu sử dụng lâu dài.",
    category: "thi-cong",
  },
];

const basePath = "/kien-thuc/kinh-nghiem-xay-nha";
const categoryLabel = (category: Category) => categories.find((item) => item.value === category)?.label ?? "";
const articleHref = (slug: string) => `${basePath}/${slug}`;

export default async function BuildingExperiencePage({
  searchParams,
}: PageProps<"/kien-thuc/kinh-nghiem-xay-nha">) {
  const { trang, "chu-de": topic } = await searchParams;
  const topicValue = Array.isArray(topic) ? topic[0] : topic;
  const selectedCategory = categories.find((item) => item.value === topicValue)?.value;
  const filteredTopics = selectedCategory
    ? readingTopics.filter((item) => item.category === selectedCategory)
    : readingTopics;
  const pageCount = Math.max(1, Math.ceil(filteredTopics.length / 6));
  const trangValue = Array.isArray(trang) ? trang[0] : trang;
  const requestedPage = Number.parseInt(trangValue ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), pageCount)
    : 1;
  const visibleTopics = filteredTopics.slice((currentPage - 1) * 6, currentPage * 6);
  const featured = currentPage === 1 ? visibleTopics[0] : undefined;
  const cardTopics = featured ? visibleTopics.slice(1) : visibleTopics;
  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("chu-de", selectedCategory);
    if (page > 1) params.set("trang", String(page));
    const query = params.toString();
    return `${basePath}${query ? `?${query}` : ""}#articles`;
  };

  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.headerSpacer} />

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Điều hướng trang">
              <Link href="/">Trang chủ</Link><span>/</span><span>Kinh nghiệm xây nhà</span>
            </nav>
            <p className={styles.eyebrow}>Kiến thức xây dựng</p>
            <h1>Kinh nghiệm xây nhà <span>trọn gói</span></h1>
            <p className={styles.heroDescription}>Những kinh nghiệm thực tế về định hướng thiết kế, tổ chức thi công và lựa chọn giải pháp phù hợp cho một ngôi nhà bền vững.</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#articles">Đọc bài viết</Link>
              <ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton>
            </div>
            <div className={styles.heroStats}>
              <div><strong>9</strong><small>Bài viết</small></div>
              <div><strong>3</strong><small>Chủ đề: thiết kế, thi công, phong thủy</small></div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/kien-thuc/kinh-nghiem-xay-nha/hero.webp" alt="Mẫu nhà phố của Tổ Ấm Hoàn Hảo" fill priority sizes="(max-width: 700px) 100vw, 530px" />
            <div className={styles.heroNote}><span aria-hidden="true">✓</span><div><strong>Kinh nghiệm thực tế</strong><small>Từ các công trình đã triển khai</small></div></div>
          </div>
        </div>
      </section>

      <section id="articles" className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Đọc thêm</p><h2>Chủ đề kinh nghiệm xây nhà</h2></div>
            <p>9 bài viết được giữ lại từ chuyên mục kinh nghiệm xây nhà trên website cũ của Tổ Ấm Hoàn Hảo.</p>
          </div>
          <nav className={styles.filters} aria-label="Lọc bài viết theo chủ đề">
            <Link href={`${basePath}#articles`} aria-current={!selectedCategory ? "page" : undefined} className={!selectedCategory ? styles.activeFilter : ""}>Tất cả</Link>
            {categories.map((category) => (
              <Link
                key={category.value}
                href={`${basePath}?chu-de=${category.value}#articles`}
                aria-current={selectedCategory === category.value ? "page" : undefined}
                className={selectedCategory === category.value ? styles.activeFilter : ""}
              >{category.label}</Link>
            ))}
          </nav>

          {featured && (
            <article className={styles.featuredCard}>
              <Link href={articleHref(featured.slug)} className={styles.featuredImage} aria-label={featured.title}>
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 700px) 100vw, 630px" />
              </Link>
              <div className={styles.featuredCopy}>
                <div className={styles.cardMeta}><span>Bài viết {String(readingTopics.indexOf(featured) + 1).padStart(2, "0")}</span><span>{categoryLabel(featured.category)}</span></div>
                <h3><Link href={articleHref(featured.slug)}>{featured.title}</Link></h3>
                <p>{featured.description}</p>
                <Link className={styles.readMore} href={articleHref(featured.slug)}>Xem bài viết <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </article>
          )}

          <div className={styles.cardsGrid}>
            {cardTopics.map((topic) => (
              <article key={topic.slug} className={styles.articleCard}>
                <Link href={articleHref(topic.slug)} className={styles.cardImage} aria-label={topic.title}>
                  <Image src={topic.image} alt={topic.title} fill sizes="(max-width: 700px) 100vw, 370px" />
                </Link>
                <div className={styles.cardCopy}>
                  <div className={styles.cardMeta}><span>Bài viết {String(readingTopics.indexOf(topic) + 1).padStart(2, "0")}</span><span>{categoryLabel(topic.category)}</span></div>
                  <h3><Link href={articleHref(topic.slug)}>{topic.title}</Link></h3>
                  <p>{topic.description}</p>
                  <Link className={styles.readMore} href={articleHref(topic.slug)}>Xem bài viết <ArrowRight size={15} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
            {currentPage === 1 && (
              <aside className={styles.inlineCta}>
                <h3>Bạn đang chuẩn bị xây nhà?</h3>
                <p>Chia sẻ kế hoạch của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp.</p>
                <ConsultationButton>Nhận tư vấn</ConsultationButton>
              </aside>
            )}
          </div>

          {pageCount > 1 && (
            <nav className={styles.pagination} aria-label="Phân trang bài viết">
              {currentPage > 1 ? <Link href={pageHref(currentPage - 1)} aria-label="Trang trước"><ArrowLeft size={16} /></Link> : <span aria-hidden="true"><ArrowLeft size={16} /></span>}
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => <Link key={page} href={pageHref(page)} aria-current={page === currentPage ? "page" : undefined} className={page === currentPage ? styles.currentPage : ""}>{page}</Link>)}
              {currentPage < pageCount ? <Link href={pageHref(currentPage + 1)} aria-label="Trang sau"><ArrowRight size={16} /></Link> : <span aria-hidden="true"><ArrowRight size={16} /></span>}
            </nav>
          )}
        </div>
      </section>

      <section className={styles.bottomCta}>
        <Image src="/images/kien-thuc/kinh-nghiem-xay-nha/hero.webp" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}>
          <h2>Bạn đang chuẩn bị xây nhà?</h2>
          <p>Nhận tư vấn miễn phí về thiết kế, thi công và chi phí từ đội ngũ Tổ Ấm Hoàn Hảo.</p>
          <div><ConsultationButton>Đặt lịch tư vấn ngay</ConsultationButton><a href="tel:0903387555">Hotline: 0903.897.555</a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
