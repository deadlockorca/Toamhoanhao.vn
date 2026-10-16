import { Check } from "lucide-react";
import { budgetPackage169Copy } from "@/data/budget-package-169";
import type { PricingArticle } from "@/data/pricing-articles";
import type { SiteLocale } from "@/lib/locale";
import { PricingArticleLayout } from "./pricing-article-layout";
import { PricingImageZoom } from "./pricing-image-zoom";
import styles from "./pricing-article.module.css";
const clean = (text: string) => text.replace(/^[•♦♥Θ»→⇒Δ]\s*/, "");
export function BudgetPackage169({
  article,
  relatedArticles,
  locale,
}: {
  article: PricingArticle;
  relatedArticles: PricingArticle[];
  locale: SiteLocale;
}) {
  const copy = budgetPackage169Copy[locale];
  const [packageSection, notes] = article.sections;
  const paragraphs = packageSection.paragraphs;
  const toc = [
    { id: "pham-vi", label: copy.scope },
    { id: "goi-noi-that", label: copy.package },
    { id: "bang-bao-gia", label: copy.table },
    { id: "luu-y", label: copy.notes },
  ];
  return (
    <PricingArticleLayout
      article={article}
      relatedArticles={relatedArticles}
      locale={locale}
      toc={toc}
    >
      <section id="goi-noi-that" className={styles.articleSection}>
        <span className={styles.number}>01</span>
        <h2 className={locale === "vi" ? styles.sentenceTitle : undefined}>
          {packageSection.title}
        </h2>
        <div className={styles.questions}>
          {paragraphs.slice(0, 3).map((text) => (
            <p key={text}>{clean(text)}</p>
          ))}
        </div>
        <p>{paragraphs[3]}</p>
        <div className={styles.priceBand}>
          <div>
            <p>{clean(paragraphs[4])}</p>
            <strong>{copy.price}</strong>
          </div>
          <p>{paragraphs[5]}</p>
        </div>
        <p>{paragraphs[6]}</p>
        <h3 className={styles.commitmentTitle}>{paragraphs[7]}</h3>
        <div className={styles.commitments}>
          {paragraphs.slice(8).map((text, index) => (
            <p
              key={text}
              className={index === 3 ? styles.guarantee : undefined}
            >
              <Check size={13} aria-hidden="true" />
              <span>{clean(text)}</span>
            </p>
          ))}
        </div>
      </section>
      <section id="bang-bao-gia" className={styles.articleSection}>
        <p className={styles.eyebrow}>{copy.tableEyebrow}</p>
        <h2>{copy.tableTitle}</h2>
        {packageSection.images?.map((image) => (
          <PricingImageZoom
            key={image.src}
            image={image}
            caption={copy.tableCaption}
            zoomLabel={copy.zoom}
            closeLabel={copy.close}
          />
        ))}
      </section>
      <section id="luu-y" className={styles.notesSection}>
        <span className={styles.number}>02</span>
        <h2>{copy.notes}</h2>
        <ol>
          {notes.paragraphs.map((text) => (
            <li key={text}>{clean(text)}</li>
          ))}
        </ol>
      </section>
    </PricingArticleLayout>
  );
}
