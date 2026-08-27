"use client";

import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

import { ArticlePagination } from "@/components/article-pagination";
import { DesignSampleCard } from "@/components/design-samples/design-sample-card";
import {
  designFilterCategories,
  getDesignCategoryHref,
  type DesignSample,
  type DesignSampleCategory,
} from "@/data/design-samples";

type DesignListingSectionProps = {
  designSamples: DesignSample[];
  activeCategory: DesignSampleCategory;
  categoryQuery?: string;
  currentPage: number;
};

const desktopMediaQuery = "(min-width: 1280px)";

const sortOptions = [
  { value: "newest", label: "Mới nhất" },
  { value: "oldest", label: "Cũ nhất" },
  { value: "area-desc", label: "Diện tích lớn nhất" },
  { value: "area-asc", label: "Diện tích nhỏ nhất" },
  { value: "name-asc", label: "Tên A-Z" },
  { value: "name-desc", label: "Tên Z-A" },
];

function parseArea(area: string): number | null {
  const match = area.match(/([\d.,]+)\s*m/);
  if (!match) return null;
  return Number.parseFloat(match[1].replace(/\./g, "").replace(",", "."));
}

function sortSamples(samples: DesignSample[], sortBy: string): DesignSample[] {
  const sorted = [...samples];
  switch (sortBy) {
    case "oldest":
      return sorted.sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
      );
    case "area-desc":
      return sorted.sort(
        (a, b) =>
          (parseArea(b.area ?? "") ?? 0) - (parseArea(a.area ?? "") ?? 0),
      );
    case "area-asc":
      return sorted.sort(
        (a, b) =>
          (parseArea(a.area ?? "") ?? 0) - (parseArea(b.area ?? "") ?? 0),
      );
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title, "vi"));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title, "vi"));
    default:
      return sorted.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  }
}

function subscribeToDesktopBreakpoint(onChange: () => void) {
  const mediaQuery = window.matchMedia(desktopMediaQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getDesktopSnapshot() {
  return window.matchMedia(desktopMediaQuery).matches;
}

function getDesktopServerSnapshot() {
  return true;
}

export function DesignListingSection({
  designSamples,
  activeCategory,
  categoryQuery,
  currentPage,
}: DesignListingSectionProps) {
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopBreakpoint,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortedSamples = useMemo(
    () => sortSamples(designSamples, sortBy),
    [designSamples, sortBy],
  );
  const samplesPerPage = isDesktop ? 9 : 8;
  const pageCount = Math.max(1, Math.ceil(sortedSamples.length / samplesPerPage));
  const safePage = Math.min(currentPage, pageCount);
  const firstSampleIndex = (safePage - 1) * samplesPerPage;
  const visibleDesignSamples = sortedSamples.slice(
    firstSampleIndex,
    firstSampleIndex + samplesPerPage,
  );

  return (
    <section id="design-list" className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-4 border border-[#ded4c4] bg-[#fbf7f1]/70 p-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-[#62584b]">
            Tổng số{" "}
            <span className="font-semibold text-[#2d281f]">
              {sortedSamples.length}
            </span>{" "}
            mẫu thiết kế
          </p>

          <div className="flex flex-wrap gap-2">
            {designFilterCategories.map((category) => (
              <Link
                key={category}
                href={getDesignCategoryHref(category)}
                className={`inline-flex h-9 items-center rounded-full border px-5 text-xs font-medium transition ${
                  category === activeCategory
                    ? "border-[#6f765b] bg-[#6f765b] text-white"
                    : "border-[#d7cbb9] bg-[#fbf7f1] text-[#62584b] hover:border-[#a47b45] hover:text-[#8a6536]"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          <div ref={sortRef} className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((open) => !open)}
              className="inline-flex h-10 w-fit items-center gap-3 border border-[#d7cbb9] bg-[#fbf7f1] px-4 text-sm text-[#62584b]"
            >
              Sắp xếp:{" "}
              <span className="font-semibold text-[#4a4034]">
                {sortOptions.find((option) => option.value === sortBy)?.label}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition ${sortOpen ? "rotate-180" : ""}`}
              />
            </button>

            {sortOpen ? (
              <div className="absolute right-0 top-full z-20 mt-1 w-56 border border-[#d7cbb9] bg-[#fbf7f1] shadow-[0_14px_40px_rgba(70,55,35,0.14)]">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSortBy(option.value);
                      setSortOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-[#f0e6d8] ${
                      sortBy === option.value
                        ? "font-semibold text-[#7b5a2f]"
                        : "text-[#62584b]"
                    }`}
                  >
                    {option.label}
                    {sortBy === option.value ? (
                      <Check aria-hidden="true" className="h-4 w-4 text-[#a0783e]" />
                    ) : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
          {visibleDesignSamples.map((sample, index) => (
            <DesignSampleCard
              key={sample.slug}
              sample={sample}
              index={firstSampleIndex + index}
            />
          ))}
        </div>

        <ArticlePagination
          anchor="design-list"
          basePath="/mau-thiet-ke"
          currentPage={safePage}
          pageCount={pageCount}
          queryParams={{ "danh-muc": categoryQuery }}
        />
      </div>
    </section>
  );
}
