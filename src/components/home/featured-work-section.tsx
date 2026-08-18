"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { DesignSample, DesignSampleCategory } from "@/data/design-samples";
import type { Project, ProjectCategory } from "@/data/projects";

type FeaturedWorkSectionProps = {
  projects: Project[];
  samples: DesignSample[];
};

type GalleryCategory = {
  label: string;
  projectCategories?: Exclude<ProjectCategory, "Tất cả dự án">[];
  sampleCategories?: Exclude<DesignSampleCategory, "Tất cả">[];
};

type GalleryItem = {
  kind: "Dự án" | "Mẫu thiết kế";
  title: string;
  category: string;
  meta: string;
  thumbnail: string;
  href: string;
  featured: boolean;
};

const galleryCategories: GalleryCategory[] = [
  { label: "Chung cư", projectCategories: ["Căn hộ"], sampleCategories: ["Chung cư"] },
  { label: "Biệt thự", projectCategories: ["Biệt thự"], sampleCategories: ["Biệt thự"] },
  { label: "Nhà phố", projectCategories: ["Nhà phố"], sampleCategories: ["Nhà phố"] },
  { label: "Văn phòng", projectCategories: ["Văn phòng"] },
  { label: "Phòng khách", sampleCategories: ["Phòng khách"] },
  { label: "Phòng ngủ", sampleCategories: ["Phòng ngủ"] },
  { label: "Phòng bếp", sampleCategories: ["Phòng bếp"] },
  { label: "Không gian kinh doanh", projectCategories: ["Không gian kinh doanh"] },
  { label: "Nội thất trọn gói", projectCategories: ["Nội thất trọn gói"] },
];

export function FeaturedWorkSection({
  projects,
  samples,
}: FeaturedWorkSectionProps) {
  const items = useMemo<GalleryItem[]>(
    () => [
      ...projects.map((project) => ({
        kind: "Dự án" as const,
        title: project.title,
        category: project.category,
        meta: `${project.location} · ${project.area}`,
        thumbnail: project.thumbnail,
        href: `/du-an/${project.slug}`,
        featured: Boolean(project.featured),
      })),
      ...samples.map((sample) => ({
        kind: "Mẫu thiết kế" as const,
        title: sample.title,
        category: sample.category,
        meta: `${sample.area ? `${sample.area} · ` : ""}${sample.style}`,
        thumbnail: sample.thumbnail,
        href: `/mau-thiet-ke/${sample.slug}`,
        featured: Boolean(sample.featured),
      })),
    ],
    [projects, samples],
  );

  const categories = useMemo(
    () =>
      galleryCategories.filter((category) => {
        const projectMatches = category.projectCategories?.some((projectCategory) =>
          projects.some((project) => project.category === projectCategory),
        );
        const sampleMatches = category.sampleCategories?.some((sampleCategory) =>
          samples.some((sample) => sample.category === sampleCategory),
        );

        return projectMatches || sampleMatches;
      }),
    [projects, samples],
  );
  const [activeCategory, setActiveCategory] = useState(categories[0]?.label ?? "");

  const activeDefinition = categories.find(
    (category) => category.label === activeCategory,
  );
  const visibleItems = items
    .filter((item) => {
      if (item.kind === "Dự án") {
        return activeDefinition?.projectCategories?.includes(
          item.category as Exclude<ProjectCategory, "Tất cả dự án">,
        );
      }

      return activeDefinition?.sampleCategories?.includes(
        item.category as Exclude<DesignSampleCategory, "Tất cả">,
      );
    })
    .sort((left, right) => Number(right.featured) - Number(left.featured))
    .slice(0, 6);

  if (categories.length === 0 || visibleItems.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f7f1e9] px-5 pb-16 pt-16 sm:px-8 lg:pb-20 lg:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a77b3b]">
              Không gian đã hoàn thiện
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#29221a] sm:text-4xl">
              Dự án và mẫu thiết kế nổi bật
            </h2>
          </div>

          <div className="flex items-center gap-5 sm:gap-7">
            <Link
              href="/du-an"
              className="inline-flex items-center gap-2 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:border-[#7c5f2c] hover:text-[#7c5f2c]"
            >
              Tất cả dự án
              <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </Link>
            <Link
              href="/mau-thiet-ke"
              className="inline-flex items-center gap-2 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:border-[#7c5f2c] hover:text-[#7c5f2c]"
            >
              Tất cả mẫu
              <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex overflow-x-auto border-b border-[#d8ccbb] pr-1"
            role="tablist"
            aria-label="Danh mục dự án và mẫu thiết kế nổi bật"
          >
            {categories.map((category) => {
              const isActive = category.label === activeCategory;

              return (
                <button
                  key={category.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.label)}
                  className={`relative shrink-0 border-x border-t px-5 py-4 text-sm font-bold transition sm:px-7 sm:text-base ${
                    isActive
                      ? "-mb-px border-[#d8ccbb] bg-[#fcf9f4] text-[#746536]"
                      : "border-transparent text-[#8d8172] hover:bg-[#f2eadf] hover:text-[#6a5533]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="border border-t-0 border-[#d8ccbb] bg-[#fcf9f4] p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
              {visibleItems.map((item) => (
                <article
                  key={`${item.kind}-${item.href}`}
                  className="group border border-[#dfd3c3] bg-[#fffdf9]"
                >
                  <Link
                    href={item.href}
                    className="block h-full"
                    aria-label={`Xem ${item.kind.toLowerCase()} ${item.title}`}
                  >
                    <div className="relative aspect-[1.42] overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1280px) 27vw, (min-width: 768px) 42vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="flex min-h-[136px] flex-col px-3 py-4 sm:min-h-[146px] sm:px-6 sm:py-5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#aa8550] sm:text-xs sm:tracking-[0.1em]">
                        {item.kind} · {item.category}
                      </p>
                      <h3 className="font-serif text-base leading-snug text-[#30271d] transition group-hover:text-[#80612e] sm:text-2xl">
                        {item.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-[11px] text-[#887257] sm:gap-4 sm:pt-5 sm:text-sm">
                        <span className="line-clamp-1">{item.meta}</span>
                        <ArrowRight
                          aria-hidden="true"
                          size={17}
                          strokeWidth={1.6}
                          className="shrink-0 transition group-hover:translate-x-1 sm:h-[19px] sm:w-[19px]"
                        />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
