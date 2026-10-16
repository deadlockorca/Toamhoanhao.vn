"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./kitchen-space.module.css";

export type KitchenArticleCard = {
  slug: string;
  href: string;
  image: string;
  title: string;
  excerpt: string;
  category: number;
};
type Props = {
  articles: KitchenArticleCard[];
  categories: string[];
  all: string;
  read: string;
  filterLabel: string;
  results: string;
};
export function KitchenArticleLibrary({
  articles,
  categories,
  all,
  read,
  filterLabel,
  results,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const filtered =
    selected === null
      ? articles
      : articles.filter((article) => article.category === selected);
  const featured = selected === null ? filtered[0] : undefined;
  const cards = featured ? filtered.slice(1) : filtered;
  return (
    <>
      <div className={styles.filters} role="group" aria-label={filterLabel}>
        <button
          type="button"
          aria-pressed={selected === null}
          onClick={() => setSelected(null)}
        >
          {all}
        </button>
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className={styles.srOnly} aria-live="polite" aria-atomic="true">
        {filtered.length} {results}
      </p>
      <div id="kitchen-article-results">
        {featured && (
          <article className={styles.featured}>
            <Link
              href={featured.href}
              className={styles.featuredImage}
              aria-label={featured.title}
            >
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(max-width: 760px) 90vw, 650px"
              />
            </Link>
            <div className={styles.featuredCopy}>
              <p className={styles.category}>{categories[featured.category]}</p>
              <h3>
                <Link href={featured.href}>{featured.title}</Link>
              </h3>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <Link
                className={styles.readLink}
                href={featured.href}
                aria-label={`${read}: ${featured.title}`}
              >
                {read}
              </Link>
            </div>
          </article>
        )}
        <div className={styles.articleGrid}>
          {cards.map((article) => (
            <article key={article.slug} className={styles.articleCard}>
              <Link
                href={article.href}
                className={styles.articleImage}
                aria-label={article.title}
              >
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 540px) 90vw, (max-width: 900px) 45vw, 370px"
                />
              </Link>
              <p className={styles.category}>{categories[article.category]}</p>
              <h3>
                <Link href={article.href}>{article.title}</Link>
              </h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <Link
                href={article.href}
                className={styles.readLink}
                aria-label={`${read}: ${article.title}`}
              >
                {read}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
