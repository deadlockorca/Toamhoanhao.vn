import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSearchCopy, searchPath } from "@/data/search-copy";
import { knowledgeGroups } from "@/data/knowledge";
import { getKnowledgeTranslator } from "@/data/knowledge-localized";
import {
  hasProjectTranslation,
  localizeProject,
} from "@/data/projects-localized";
import {
  hasDesignSampleTranslation,
  localizeDesignSample,
} from "@/data/design-samples-localized";
import {
  getPublicProjects,
  getPublicDesignSamples,
} from "@/lib/public-content";
import {
  createPortfolioLibrary,
  portfolioTopics,
} from "@/lib/portfolio-topics";
import { localizedPageHref } from "@/lib/localized-pages";
import { searchEntries, type SearchEntry } from "@/lib/search";
import type { SiteLocale } from "@/lib/locale";
import styles from "./search-page.module.css";

export type SearchPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
  locale?: SiteLocale;
};

export async function SearchPage({
  searchParams,
  locale = "vi",
}: SearchPageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.q) ? params.q[0] : params.q;
  const query = (raw ?? "").trim().slice(0, 120);
  const copy = getSearchCopy(locale);
  let matches: SearchEntry[] = [];
  if (query) {
    const [projects, samples, t] = await Promise.all([
      getPublicProjects(locale !== "vi"),
      getPublicDesignSamples(locale !== "vi"),
      getKnowledgeTranslator(locale),
    ]);
    const portfolio = createPortfolioLibrary(
      projects
        .filter((item) => hasProjectTranslation(item, locale))
        .map((item) => localizeProject(item, locale)),
      samples
        .filter((item) => hasDesignSampleTranslation(item, locale))
        .map((item) => localizeDesignSample(item, locale)),
      locale,
    );
    const entries: SearchEntry[] = portfolio.map((item) => ({
      ...item,
      href: localizedPageHref(item.href, locale),
      keywords: [
        item.category,
        item.style,
        item.area,
        item.location,
        ...(item.topics ?? []).map(
          (slug) => portfolioTopics.find((topic) => topic.slug === slug)?.label,
        ),
      ]
        .filter(Boolean)
        .join(" "),
    }));
    for (const [group, { articles }] of Object.entries(knowledgeGroups)) {
      for (const article of articles)
        entries.push({
          slug: article.slug,
          href: localizedPageHref(
            `/kien-thuc/${group}/${article.slug}`,
            locale,
          ),
          title: t(article.title),
          summary: t(article.excerpt),
          thumbnail: article.image,
          contentType: "article",
        });
    }
    matches = searchEntries(entries, query);
  }
  const pageSize = 12;
  const pages = Math.max(1, Math.ceil(matches.length / pageSize));
  const rawPage = Array.isArray(params.trang) ? params.trang[0] : params.trang;
  const page = Math.min(
    pages,
    Math.max(1, Number.parseInt(rawPage ?? "1", 10) || 1),
  );
  const pageHref = (number: number) =>
    `${searchPath(locale)}?${new URLSearchParams({ q: query, trang: String(number) })}`;
  return (
    <>
      <SiteHeader
        locale={locale}
        languageQuery={new URLSearchParams({ q: query }).toString()}
      />
      <main className={styles.page}>
        <div className={styles.container}>
          <h1>{copy.title}</h1>
          <Form
            action={searchPath(locale)}
            role="search"
            className={styles.form}
          >
            <input
              type="search"
              name="q"
              defaultValue={query}
              maxLength={120}
              placeholder={copy.placeholder}
              aria-label={copy.title}
              required
            />
            <button type="submit">
              <Search size={19} aria-hidden="true" />
              {copy.title}
            </button>
          </Form>
          <p className={styles.status}>
            {!query
              ? copy.prompt
              : `${matches.length} ${copy.results}: “${query}”`}
          </p>
          {query && matches.length === 0 && (
            <p className={styles.empty}>{copy.empty}</p>
          )}
          <div className={styles.grid}>
            {matches
              .slice((page - 1) * pageSize, page * pageSize)
              .map((item) => (
                <Link key={item.href} href={item.href} className={styles.card}>
                  <div className={styles.image}>
                    {item.thumbnail && (
                      <Image
                        src={item.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 620px) 50vw, (max-width: 1000px) 50vw, 400px"
                      />
                    )}
                  </div>
                  <div className={styles.body}>
                    <span>{copy[item.contentType]}</span>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                  </div>
                </Link>
              ))}
          </div>
          {pages > 1 && (
            <nav className={styles.pagination} aria-label={copy.title}>
              {page > 1 && (
                <Link href={pageHref(page - 1)} rel="prev">
                  ← {copy.previous}
                </Link>
              )}
              <span>
                {page} / {pages}
              </span>
              {page < pages && (
                <Link href={pageHref(page + 1)} rel="next">
                  {copy.next} →
                </Link>
              )}
            </nav>
          )}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
