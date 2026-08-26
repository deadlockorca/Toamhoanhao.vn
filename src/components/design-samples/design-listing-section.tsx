"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";

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
  const samplesPerPage = isDesktop ? 9 : 8;
  const pageCount = Math.max(1, Math.ceil(designSamples.length / samplesPerPage));
  const safePage = Math.min(currentPage, pageCount);
  const firstSampleIndex = (safePage - 1) * samplesPerPage;
  const visibleDesignSamples = designSamples.slice(
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
              {designSamples.length}
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

          <button
            type="button"
            className="inline-flex h-10 w-fit items-center gap-3 border border-[#d7cbb9] bg-[#fbf7f1] px-4 text-sm text-[#62584b]"
          >
            Sắp xếp: Mới nhất
            <ChevronDown aria-hidden="true" className="h-4 w-4" />
          </button>
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
