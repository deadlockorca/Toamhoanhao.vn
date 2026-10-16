import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { budgetPackage169Copy } from "@/data/budget-package-169";
import { getLocalizedPricingArticles } from "@/data/pricing-localized";
import {
  pricingArticles as originalArticles,
  type PricingArticleSection,
} from "@/data/pricing-articles";
import type { SiteLocale } from "@/lib/locale";
import { BudgetPackage169 } from "./budget-package-169";
import { PricingArticleLayout } from "./pricing-article-layout";
import { PricingImageZoom } from "./pricing-image-zoom";
import styles from "./pricing-article.module.css";

const bullet = /^[•♦♥Θ»→⇒Δ]\s*/;
function SectionParagraphs({
  paragraphs,
  notes,
}: {
  paragraphs: string[];
  notes: boolean;
}) {
  if (notes)
    return (
      <ol className={styles.notesList}>
        {paragraphs.map((text, index) => (
          <li key={index}>{text.replace(bullet, "")}</li>
        ))}
      </ol>
    );
  const groups: Array<{ list: boolean; paragraphs: string[] }> = [];
  for (const text of paragraphs) {
    const isList = bullet.test(text);
    const previous = groups.at(-1);
    if (isList && previous?.list) previous.paragraphs.push(text);
    else groups.push({ list: isList, paragraphs: [text] });
  }
  return groups.map((group, index) =>
    group.list ? (
      <div key={index} className={styles.commitments}>
        {group.paragraphs.map((text, i) => (
          <p
            key={i}
            className={/30\s*%/.test(text) ? styles.guarantee : undefined}
          >
            <Check size={13} aria-hidden="true" />
            <span>{text.replace(bullet, "")}</span>
          </p>
        ))}
      </div>
    ) : (
      <p key={index}>{group.paragraphs[0]}</p>
    ),
  );
}

function SectionImages({
  section,
  locale,
}: {
  section: PricingArticleSection;
  locale: SiteLocale;
}) {
  const copy = budgetPackage169Copy[locale];
  return section.images?.map((image, index) => (
    <PricingImageZoom
      key={`${image.src}-${index}`}
      image={image}
      caption={image.alt}
      zoomLabel={copy.zoom}
      closeLabel={copy.close}
    />
  ));
}

export function InteriorPricingArticle({
  slug,
  locale = "vi",
}: {
  slug: string;
  locale?: SiteLocale;
}) {
  const articles = getLocalizedPricingArticles(locale);
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const relatedArticles = article.relatedSlugs
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);
  if (slug === "goi-noi-that-hoan-thien-169-trieu")
    return (
      <BudgetPackage169
        article={article}
        relatedArticles={relatedArticles}
        locale={locale}
      />
    );
  const original = originalArticles.find((item) => item.slug === slug)!;
  const copy = budgetPackage169Copy[locale];
  const toc = [
    { id: "pham-vi", label: copy.scope },
    ...article.sections.map((section, index) => ({
      id: `noi-dung-${index + 1}`,
      label: section.title,
    })),
  ];
  const amount = article.archived
    ? slug.match(/^goi-noi-that-hoan-thien-(\d+)-trieu$/)?.[1]
    : undefined;
  return (
    <PricingArticleLayout
      article={article}
      relatedArticles={relatedArticles}
      locale={locale}
      toc={toc}
    >
      {article.sections.map((section, index) => {
        const notes = /^!\s*Lưu ý/.test(original.sections[index].title);
        return (
          <section
            key={index}
            id={`noi-dung-${index + 1}`}
            className={notes ? styles.notesSection : styles.articleSection}
          >
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2>{section.title}</h2>
            {amount && index === 0 && (
              <div className={styles.priceBand}>
                <div>
                  <p>{article.label}</p>
                  <strong>{copy.price.replace("169", amount)}</strong>
                </div>
                <p>{article.scope}</p>
              </div>
            )}
            <SectionParagraphs paragraphs={section.paragraphs} notes={notes} />
            <SectionImages section={section} locale={locale} />
          </section>
        );
      })}
    </PricingArticleLayout>
  );
}
