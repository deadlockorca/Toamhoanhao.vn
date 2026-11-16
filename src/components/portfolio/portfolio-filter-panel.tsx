"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { LibraryItem } from "@/lib/content-library";
import {
  areaRanges,
  categoryQueries,
  type PortfolioFilters,
  portfolioFilterHref,
} from "@/lib/portfolio-filters";
import { portfolioTopics, portfolioTopicLabel } from "@/lib/portfolio-topics";
import { getPortfolioFilterCopy } from "@/data/portfolio-filter-copy";
import type { SiteLocale } from "@/lib/locale";
import styles from "./portfolio-overview.module.css";

export function PortfolioFilterPanel({
  items,
  filters,
  base,
  locale,
  messages,
  mode,
}: {
  items: LibraryItem[];
  filters: PortfolioFilters;
  base: string;
  locale: SiteLocale;
  messages: Record<string, string>;
  mode: "projects" | "designs";
}) {
  const copy = getPortfolioFilterCopy(locale),
    t = (s: string) => (locale === "vi" ? s : (messages[s] ?? s));
  const [draft, setDraft] = useState(filters),
    [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const wide = window.matchMedia("(min-width: 901px)");
    const close = () => {
      if (wide.matches) dialog.current?.close();
    };
    wide.addEventListener("change", close);
    return () => {
      document.body.style.overflow = previous;
      wide.removeEventListener("change", close);
    };
  }, [open]);
  const scoped = items.filter(
    (item) =>
      (draft.type === "all" || item.contentType === draft.type) &&
      (draft.category === "all" ||
        item.category === categoryQueries[draft.category]) &&
      (!draft.topic || item.topics?.includes(draft.topic)),
  );
  const stylesList = [
    ...new Map(
      scoped
        .filter((item) => item.style)
        .map((item) => [item.styleKey ?? item.style, item.style]),
    ).entries(),
  ].sort((a, b) => a[1].localeCompare(b[1], locale));
  if (draft.style && !stylesList.some(([value]) => value === draft.style))
    stylesList.unshift([
      draft.style,
      items.find((item) => (item.styleKey ?? item.style) === draft.style)
        ?.style ?? draft.style,
    ]);
  const allowedTopics = portfolioTopics.filter(
    (topic) =>
      topic.group !== "area" &&
      (draft.category === "all" ||
        (draft.category === "can-ho"
          ? topic.slug === "penthouse-duplex"
          : draft.category === "biet-thu"
            ? topic.group === "villa"
            : draft.category === "nha-pho"
              ? topic.group === "townhouse"
              : false) ||
        topic.slug === draft.topic),
  );
  const count = Object.entries(filters).filter(
    ([k, v]) =>
      ["category", "topic", "area", "style", "bedrooms", "q"].includes(k) &&
      v &&
      v !== "all",
  ).length;
  const router = useRouter();
  const form = (mobile: boolean) => (
    <Form
      action={`${base}#portfolio-list`}
      className={styles.filterPanel}
      onSubmit={(event) => {
        event.preventDefault();
        router.push(
          portfolioFilterHref(base, { ...draft, page: 1, sort: filters.sort }),
        );
        if (mobile) dialog.current?.close();
      }}
      aria-label={copy.title}
    >
      <input type="hidden" name="sap-xep" value={filters.sort} />
      <label>
        {copy.keyword}
        <input
          name="q"
          type="search"
          maxLength={120}
          placeholder={copy.placeholder}
          value={draft.q}
          onChange={(e) => setDraft({ ...draft, q: e.target.value })}
        />
      </label>
      <label>
        {t("Loại nội dung")}
        <select
          name="noi-dung"
          value={draft.type}
          onChange={(e) =>
            setDraft({
              ...draft,
              type: e.target.value,
              style: "",
              bedrooms: "",
            })
          }
        >
          <option value="all">{t("Tất cả")}</option>
          <option value="project">{t("Công trình thực tế")}</option>
          <option value="designSample">{t("Mẫu thiết kế")}</option>
          <option value="article">{t("Bài tham khảo")}</option>
        </select>
      </label>
      <label>
        {t("Loại công trình")}
        <select
          name="danh-muc"
          value={draft.category === "all" ? "tat-ca" : draft.category}
          onChange={(e) =>
            setDraft({
              ...draft,
              category: e.target.value === "tat-ca" ? "all" : e.target.value,
              topic: "",
              style: "",
              bedrooms: "",
              area: "",
            })
          }
        >
          <option value="tat-ca">{t("Tất cả")}</option>
          {Object.entries(categoryQueries)
            .filter(
              ([key, label]) =>
                key === draft.category ||
                items.some((item) => item.category === label),
            )
            .map(([key, label]) => (
              <option key={key} value={key}>
                {t(
                  mode === "designs" && label === "Căn hộ" ? "Chung cư" : label,
                )}
              </option>
            ))}
        </select>
      </label>
      <label>
        {copy.topic}
        <select
          name="chu-de"
          value={draft.topic}
          onChange={(e) =>
            setDraft({
              ...draft,
              topic: e.target.value,
              style: "",
              bedrooms: "",
            })
          }
        >
          <option value="">{copy.allTopics}</option>
          {allowedTopics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>
              {portfolioTopicLabel(topic, locale)}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t("Diện tích")}
        <select
          name="dien-tich"
          value={draft.area}
          onChange={(e) => setDraft({ ...draft, area: e.target.value })}
        >
          <option value="">{t("Tất cả")}</option>
          {(draft.category === "all" ||
            draft.category === "can-ho" ||
            areaRanges
              .slice(0, 17)
              .some((range) => range.value === draft.area)) && (
            <optgroup label={copy.fineArea}>
              {areaRanges.slice(0, 17).map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </optgroup>
          )}
          <optgroup label={copy.otherArea}>
            {areaRanges.slice(17).map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </optgroup>
        </select>
      </label>
      <label>
        {t("Phong cách")}
        <select
          name="phong-cach"
          value={draft.style}
          onChange={(e) => setDraft({ ...draft, style: e.target.value })}
        >
          <option value="">{t("Tất cả")}</option>
          {stylesList.map(([value, label]) => (
            <option key={value} value={value}>
              {t(label)}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t("Số phòng ngủ")}
        <select
          name="phong-ngu"
          value={draft.bedrooms}
          onChange={(e) => setDraft({ ...draft, bedrooms: e.target.value })}
        >
          <option value="">{t("Tất cả")}</option>
          {["0", "1", "2", "3", "4+"].map((value) => (
            <option key={value} value={value}>
              {value === "0" ? "Studio" : value === "4+" ? "≥ 4" : value}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className={styles.searchButton}>
        <Search size={16} aria-hidden="true" />
        {copy.apply}
      </button>
      <Link
        href={`${base}#portfolio-list`}
        className={styles.resetFilters}
        onClick={() => dialog.current?.close()}
      >
        {copy.clear}
      </Link>
    </Form>
  );
  return (
    <>
      <div className={styles.desktopFilters}>{form(false)}</div>
      <button
        ref={trigger}
        type="button"
        className={styles.mobileFilterTrigger}
        onClick={() => {
          setDraft(filters);
          dialog.current?.showModal();
          setOpen(true);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="portfolio-filter-dialog"
      >
        <SlidersHorizontal size={18} aria-hidden="true" />
        {copy.title}
        {count > 0 && <span>{count}</span>}
      </button>
      <dialog
        id="portfolio-filter-dialog"
        ref={dialog}
        className={styles.filterDialog}
        aria-labelledby="portfolio-filter-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.dialogHeading}>
          <h2 id="portfolio-filter-title">{copy.title}</h2>
          <button
            type="button"
            aria-label={copy.close}
            onClick={() => dialog.current?.close()}
          >
            <X size={23} />
          </button>
        </div>
        {form(true)}
      </dialog>
    </>
  );
}
