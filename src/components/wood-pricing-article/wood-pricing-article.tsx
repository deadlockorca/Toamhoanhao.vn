import { homePath, type SiteLocale } from "@/lib/locale";
import { localizedPageHref } from "@/lib/localized-pages";
import { type KnowledgeTranslator } from "@/data/knowledge-localized";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsultationButton } from "@/components/consultation-popup";
import {
  beautifulHomeListingHref,
  getBeautifulHomeArticleHref,
  type BeautifulHomeArticle,
  type BeautifulHomeBlock,
} from "@/data/beautiful-home-articles";
import styles from "./wood-pricing-article.module.css";
function Paragraph({ block }: { block: BeautifulHomeBlock }) {
  return block.type !== "image" ? <p>{block.text}</p> : null;
}
function QuoteRequest({ children }: { children: string }) {
  return (
    <ConsultationButton className={styles.resourceRow}>
      {children}
      <ArrowRight size={14} aria-hidden="true" />
    </ConsultationButton>
  );
}
export function WoodPricingArticle({
  article,
  relatedArticles,
  locale = "vi",
  t,
}: {
  article: BeautifulHomeArticle;
  relatedArticles: BeautifulHomeArticle[];
  locale?: SiteLocale;
  t: KnowledgeTranslator;
}) {
  const offices = [
    [
      t("TP. Hồ Chí Minh"),
      t("Số 23, Hoàng Kế Viêm, Phường 13, Quận Tân Bình."),
    ],
    [
      t("ShopHouse – Thủ Đức"),
      t("C00-11 Chung cư Sarina, số 62 Hoàng Thế Thiện, P. An Lợi Đông."),
    ],
    [
      t("Hà Nội"),
      t("Tòa nhà Licogi 13, Số 164 Khuất Duy Tiến, Q. Thanh Xuân."),
    ],
    [
      t("Bình Dương"),
      t("ShopHouse 0112, KĐT Phúc Đạt Connect, P. Phú Lợi, TP. Thủ Dầu Một."),
    ],
  ];
  const intro = article.excerpt.replace(/\s*\[&hellip;\].*$/, "…");
  const final = article.sections[5];
  const conclusionIndex = final.blocks.findIndex(
    (b) => b.type !== "image" && b.text === t("Kết luận"),
  );
  const conclusion = final.blocks[conclusionIndex + 1];
  const secondImage = article.sections[1].blocks.find(
    (b) => b.type === "image",
  );
  return (
    <main lang={locale} className={styles.page}>
      <SiteHeader locale={locale} />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <nav
              className={styles.breadcrumb}
              aria-label={t("Điều hướng trang")}
            >
              <Link href={homePath(locale)}>{t("Trang chủ")}</Link>
              <span>/</span>
              <Link href={localizedPageHref(beautifulHomeListingHref, locale)}>
                {t("Kiến thức nhà đẹp")}
              </Link>
              <span>/</span>
              <span>{t("Báo giá thiết kế nội thất bằng gỗ")}</span>
            </nav>
            <p className={styles.eyebrow}>{t("Kiến thức nhà đẹp")}</p>
            <h1>{article.title}</h1>
            <p className={styles.heroDescription}>{intro}</p>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width:760px) 100vw, 50vw"
          />
        </div>
      </section>
      <div className={`${styles.container} ${styles.info}`}>
        <div>
          <span>{t("Chuyên mục")}</span>
          <strong>{t("Kiến thức nhà đẹp")}</strong>
        </div>
        <div>
          <span>{t("Nội dung")}</span>
          <strong>{t("6 phần nội dung chuyên sâu")}</strong>
        </div>
        <div>
          <span>{t("Ngày xuất bản")}</span>
          <time dateTime="2023-06-01">{article.date}</time>
        </div>
      </div>
      <div className={`${styles.container} ${styles.layout}`}>
        <article className={styles.content}>
          <p className={styles.eyebrow}>{t("Nội dung chính")}</p>
          <h2 className={styles.contentTitle}>
            {t("Góc nhìn thực tế cho không gian sống đẹp")}
          </h2>
          {article.sections.map((section, index) => (
            <section
              id={`section-${index + 1}`}
              key={`section-${index}`}
              className={styles.articleSection}
            >
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{section.title}</h2>
              {index === 0 &&
                section.blocks.map((b, i) =>
                  b.type === "image" ? (
                    <figure className={styles.figure} key={b.src}>
                      <Image
                        src={b.src}
                        alt={b.alt}
                        width={1400}
                        height={787}
                        sizes="(max-width:900px) 92vw, 750px"
                      />
                    </figure>
                  ) : (
                    <Paragraph key={i} block={b} />
                  ),
                )}
              {index === 1 && (
                <>
                  <Paragraph block={section.blocks[0]} />
                  <div className={styles.prices}>
                    <div>
                      <span>{t("Mức giá chuẩn trên thị trường")}</span>
                      <strong>{t("200.000 – 350.000đ/m²")}</strong>
                    </div>
                    <div>
                      <span>
                        {t("Thiết kế ứng dụng công nghệ AI tại Tổ Ấm Hoàn Hảo")}
                      </span>
                      <strong>{t("Chỉ từ 150.000đ/m²")}</strong>
                    </div>
                  </div>
                  <p className={styles.priceNote}>
                    {t("Mức giá tham khảo được nêu trong bài viết ngày")}{" "}
                    {article.date}
                    {t(
                      ". Báo giá hiện tại được xác định theo yêu cầu và phạm vi công việc.",
                    )}
                  </p>
                  <Paragraph block={section.blocks[1]} />
                  <details className={styles.reference}>
                    <summary>
                      {t("Nhà anh Dương ở Linh Đàm – xem để tham khảo")}
                      <span>+</span>
                    </summary>
                    <p>
                      {t(
                        "Tham khảo ý tưởng thiết kế và cách bố trí theo nhu cầu gia đình.",
                      )}
                      <Link href={localizedPageHref("/du-an", locale)}>
                        {t("Xem thư viện dự án")}
                      </Link>
                      {t("hoặc")}{" "}
                      <ConsultationButton>
                        {t("liên hệ để được giới thiệu phương án phù hợp")}
                      </ConsultationButton>
                      .
                    </p>
                  </details>
                  <details className={styles.reference}>
                    <summary>
                      {t("Nhà chị Tâm ở Thanh Hóa – xem để tham khảo")}
                      <span>+</span>
                    </summary>
                    <p>
                      {t("Tham khảo")}
                      <Link href={localizedPageHref("/du-an", locale)}>
                        {t("các dự án nội thất")}
                      </Link>{" "}
                      {t("hoặc")}{" "}
                      <ConsultationButton>
                        {t("yêu cầu tư vấn thiết kế")}
                      </ConsultationButton>{" "}
                      {t("theo nhu cầu của bạn.")}
                    </p>
                  </details>
                  {secondImage?.type === "image" && (
                    <figure className={styles.figure}>
                      <Image
                        src={secondImage.src}
                        alt={secondImage.alt}
                        width={1000}
                        height={717}
                        sizes="(max-width:900px) 92vw, 750px"
                      />
                      <figcaption>
                        {t("Bảng báo giá chi tiết mọi người có thể tham khảo.")}
                      </figcaption>
                    </figure>
                  )}
                  <Paragraph
                    block={section.blocks[section.blocks.length - 1]}
                  />
                </>
              )}
              {index === 2 &&
                section.blocks.map((b, i) => <Paragraph block={b} key={i} />)}
              {index === 3 && (
                <>
                  <p>
                    {t(
                      "Hiện nay để tiết kiệm chi phí thi công, nhiều gia đình lựa chọn gỗ công nghiệp cho căn nhà. Có nhiều mẫu mã, kiểu dáng và bề mặt hoàn thiện để lựa chọn:",
                    )}
                  </p>
                  <p className={styles.miniLabel}>{t("Loại cốt gỗ")}</p>
                  <div className={styles.tags}>
                    {["MDF", t("MDF kháng ẩm"), "MFC", t("MFC kháng ẩm")].map(
                      (t) => (
                        <span key={t}>{t}</span>
                      ),
                    )}
                  </div>
                  <p className={styles.miniLabel}>{t("Bề mặt phủ")}</p>
                  <div className={styles.tags}>
                    {["Acrylic", "Melamine", "Laminate"].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <p>
                    {t(
                      "Mỗi loại sẽ có cấu tạo khác nhau, mang đến vẻ đẹp khác nhau cho gia chủ.",
                    )}
                  </p>
                </>
              )}
              {index === 4 && (
                <>
                  <Paragraph block={section.blocks[0]} />
                  <QuoteRequest>
                    {t("Bảng báo giá thi công nội thất gỗ MFC phòng khách")}
                  </QuoteRequest>
                  <QuoteRequest>
                    {t("Bảng báo giá thi công nội thất gỗ MFC phòng ngủ")}
                  </QuoteRequest>
                  <h3 className={styles.miniLabel}>{t("Với lõi MDF")}</h3>
                  <p>
                    {t(
                      "Ngoài gỗ công nghiệp MFC, MDF cũng là loại vật liệu được sử dụng phổ biến. Vật tính và độ bền phụ thuộc loại tấm, lớp phủ và điều kiện sử dụng.",
                    )}
                  </p>
                  <QuoteRequest>
                    {t("Bảng báo giá thi công nội thất gỗ MDF phòng khách")}
                  </QuoteRequest>
                  <QuoteRequest>
                    {t("Bảng báo giá thi công nội thất gỗ MDF phòng ngủ")}
                  </QuoteRequest>
                </>
              )}
              {index === 5 &&
                final.blocks
                  .slice(0, conclusionIndex)
                  .filter((_, i) => i !== 1)
                  .map((b, i) => <Paragraph key={i} block={b} />)}
            </section>
          ))}
          <section className={styles.conclusion}>
            <p className={styles.eyebrow}>{t("Kết luận")}</p>
            <h2>{t("Chọn đúng nhu cầu, đúng tài chính")}</h2>
            {conclusion && <Paragraph block={conclusion} />}
            <p className={styles.miniLabel}>{t("Xem thêm")}</p>
            <div className={styles.moreLinks}>
              <Link
                href={localizedPageHref(
                  "/thi-cong-noi-that/thi-cong-chung-cu",
                  locale,
                )}
              >
                {t("Thiết kế và thi công nội thất trọn gói")}
                <ArrowRight size={14} />
              </Link>
              <Link
                href={localizedPageHref(
                  "/bao-gia/thiet-ke-thi-cong-noi-that",
                  locale,
                )}
              >
                {t("Báo giá thiết kế và thi công nội thất")}
                <ArrowRight size={14} />
              </Link>
              <Link
                href={localizedPageHref("/thiet-ke-noi-that/biet-thu", locale)}
              >
                {t("Thiết kế biệt thự và nội thất gỗ")}
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className={styles.offices}>
              {offices.map(([city, address]) => (
                <div key={city}>
                  <h3>{city}</h3>
                  <p>{address}</p>
                </div>
              ))}
            </div>
            <div className={styles.contactActions}>
              <a href="tel:0903897555">{t("Hotline 0903.897.555")}</a>
              <a href="mailto:hotro.toamhoanhao@gmail.com">
                {t("hotro.toamhoanhao@gmail.com")}
              </a>
            </div>
          </section>
          <Link
            href={localizedPageHref(beautifulHomeListingHref, locale)}
            className={styles.back}
          >
            <ArrowLeft size={14} />
            {t("Quay lại kiến thức nhà đẹp")}
          </Link>
        </article>
        <aside className={styles.sidebar}>
          <nav className={styles.toc} aria-label={t("Mục lục bài viết")}>
            <p className={styles.eyebrow}>{t("Mục lục")}</p>
            <ol>
              {article.sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#section-${i + 1}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className={styles.advice}>
            <p className={styles.eyebrow}>{t("Cần báo giá chính xác?")}</p>
            <h2>
              {t("Nhận tư vấn miễn phí từ kiến trúc sư của Tổ Ấm Hoàn Hảo.")}
            </h2>
            <a href="tel:0903897555">{t("Gọi 0903.897.555")}</a>
          </div>
        </aside>
      </div>
      <section className={styles.related}>
        <div className={styles.container}>
          <div className={styles.relatedHeading}>
            <h2>{t("Các bài cùng chủ đề")}</h2>
            <Link href={localizedPageHref(beautifulHomeListingHref, locale)}>
              {t("Xem tất cả →")}
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((a) => (
              <article key={a.slug}>
                <Link
                  href={localizedPageHref(
                    getBeautifulHomeArticleHref(a.slug),
                    locale,
                  )}
                  className={styles.relatedImage}
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width:760px) 92vw, 31vw"
                  />
                </Link>
                <p className={styles.eyebrow}>{t("Kiến thức nhà đẹp")}</p>
                <h3>
                  <Link
                    href={localizedPageHref(
                      getBeautifulHomeArticleHref(a.slug),
                      locale,
                    )}
                  >
                    {a.title}
                  </Link>
                </h3>
                <Link
                  className={styles.read}
                  href={localizedPageHref(
                    getBeautifulHomeArticleHref(a.slug),
                    locale,
                  )}
                >
                  {t("Xem bài viết →")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
