import { ChevronDown } from "lucide-react";
import Link from "next/link";

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
};

export function DesignListingSection({
  designSamples,
  activeCategory,
}: DesignListingSectionProps) {
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

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {designSamples.map((sample, index) => (
            <DesignSampleCard key={sample.slug} sample={sample} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-3 bg-[#6f765b] px-7 text-sm font-semibold text-white transition hover:bg-[#5f654e]"
          >
            Xem thêm mẫu thiết kế
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
