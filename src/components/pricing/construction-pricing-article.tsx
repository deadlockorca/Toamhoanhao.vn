import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import {
  pricingText,
  getLocalizedConstructionPricingArticles,
} from "@/data/pricing-localized";
import { budgetPackage169Copy } from "@/data/budget-package-169";
import dimensions from "@/data/construction-pricing-image-dimensions.json";
import type { SiteLocale } from "@/lib/locale";
import { PricingArticleLayout } from "./pricing-article-layout";
import { PricingImageZoom } from "./pricing-image-zoom";
import styles from "./pricing-article.module.css";

const imageDimensions: Record<string, { width: number; height: number }> =
  dimensions;

export function ConstructionPricingArticle({
  slug,
  locale = "vi",
}: {
  slug: string;
  locale?: SiteLocale;
}) {
  const t = (text: string) => pricingText(text, locale);
  const copy = budgetPackage169Copy[locale];
  const articles = getLocalizedConstructionPricingArticles(locale);
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const label = t("Báo giá xây dựng");
  const presentation = {
    ...article,
    label,
    archived: true,
    scope: t("Nhà phố, phần thô và xây dựng trọn gói"),
    pricingBasis: t("Hồ sơ thiết kế, điều kiện khu đất và vật liệu thực tế"),
    highlights: [
      "Cách tính và hạng mục cần chuẩn bị theo nội dung bài viết gốc.",
      "Số liệu cũ chỉ dùng để tham khảo, không thay cho dự toán hiện tại.",
      "Cần có hồ sơ thiết kế và khảo sát thực tế trước khi chốt ngân sách.",
      "Vật liệu, kết cấu và điều kiện thi công quyết định chi phí cuối cùng.",
    ].map(t),
  };
  const related = articles
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => ({ ...item, label }));
  const sections =
    article.contentSections ??
    article.sections.map((section) => ({
      title: section.title,
      blocks: section.paragraphs.map((text) => ({
        type: text.startsWith("• ")
          ? ("bullet" as const)
          : ("paragraph" as const),
        text: text.replace(/^• /, ""),
      })),
    }));
  const toc = [
    { id: "pham-vi", label: copy.scope },
    ...sections.map((section, index) => ({
      id: `noi-dung-${index + 1}`,
      label: section.title,
    })),
  ];
  return (
    <PricingArticleLayout
      article={presentation}
      relatedArticles={related}
      locale={locale}
      category="construction"
      toc={toc}
    >
      {sections.map((section, index) => (
        <section
          id={`noi-dung-${index + 1}`}
          key={index}
          className={styles.articleSection}
        >
          <span className={styles.number}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2>{section.title}</h2>
          {section.blocks.map((block, blockIndex) => {
            if (block.type === "image") {
              const image = {
                src: block.src,
                alt: `${article.title} — ${t("Hình ảnh minh họa")} ${blockIndex + 1}`,
                ...imageDimensions[block.src],
              };
              return (
                <PricingImageZoom
                  key={blockIndex}
                  image={image}
                  caption={image.alt}
                  zoomLabel={copy.zoom}
                  closeLabel={copy.close}
                />
              );
            }
            return block.type === "bullet" ? (
              <p key={blockIndex} className={styles.bulletRow}>
                <Check size={13} aria-hidden="true" />
                <span>{block.text}</span>
              </p>
            ) : (
              <p key={blockIndex}>{block.text}</p>
            );
          })}
        </section>
      ))}
    </PricingArticleLayout>
  );
}
