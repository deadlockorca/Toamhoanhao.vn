"use client";

import {
  BedDouble,
  BriefcaseBusiness,
  Building2,
  ChefHat,
  ChevronDown,
  Grid2X2,
  Home,
  House,
  Layers3,
  RotateCcw,
  SlidersHorizontal,
  Sofa,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { ContentLibraryCard } from "@/components/projects/content-library-card";
import {
  projectSupport,
  type Project,
} from "@/data/projects";
import type { DesignSample } from "@/data/design-samples";
import {
  contentTypeFilters,
  createContentLibrary,
  type LibraryCategory,
  type LibraryContentType,
} from "@/lib/content-library";

type ProjectsListingSectionProps = {
  projects: Project[];
  designSamples: DesignSample[];
  initialCategory?: LibraryCategory;
};

type AreaRange = {
  label: string;
  min?: number;
  max?: number;
};

const allValue = "Tất cả";
const allCategoriesValue = "Tất cả danh mục";

const categoryFilters: Array<{
  label: LibraryCategory | typeof allCategoriesValue;
  icon: LucideIcon;
}> = [
  { label: allCategoriesValue, icon: Grid2X2 },
  { label: "Căn hộ", icon: Building2 },
  { label: "Biệt thự", icon: House },
  { label: "Nhà phố", icon: Home },
  { label: "Văn phòng", icon: BriefcaseBusiness },
  { label: "Không gian kinh doanh", icon: Store },
  { label: "Nội thất trọn gói", icon: Layers3 },
  { label: "Phòng khách", icon: Sofa },
  { label: "Phòng ngủ", icon: BedDouble },
  { label: "Phòng bếp", icon: ChefHat },
];

const areaRanges: AreaRange[] = [
  { label: "Tất cả diện tích" },
  { label: "Dưới 50m²", max: 50 },
  { label: "50m² - 55m²", min: 50, max: 55 },
  { label: "55m² - 60m²", min: 55, max: 60 },
  { label: "60m² - 65m²", min: 60, max: 65 },
  { label: "65m² - 70m²", min: 65, max: 70 },
  { label: "70m² - 75m²", min: 70, max: 75 },
  { label: "75m² - 80m²", min: 75, max: 80 },
  { label: "80m² - 85m²", min: 80, max: 85 },
  { label: "85m² - 90m²", min: 85, max: 90 },
  { label: "90m² - 95m²", min: 90, max: 95 },
  { label: "95m² - 100m²", min: 95, max: 100 },
  { label: "100m² - 105m²", min: 100, max: 105 },
  { label: "105m² - 110m²", min: 105, max: 110 },
  { label: "110m² - 115m²", min: 110, max: 115 },
  { label: "115m² - 120m²", min: 115, max: 120 },
  { label: "Trên 120m²", min: 120 },
];

export function ProjectsListingSection({
  projects,
  designSamples,
  initialCategory,
}: ProjectsListingSectionProps) {
  const [contentType, setContentType] = useState<"all" | LibraryContentType>("all");
  const [category, setCategory] = useState<LibraryCategory | typeof allCategoriesValue>(
    initialCategory ?? allCategoriesValue,
  );
  const [areaRange, setAreaRange] = useState(areaRanges[0].label);
  const [style, setStyle] = useState(allValue);
  const [bedrooms, setBedrooms] = useState(allValue);

  const libraryItems = useMemo(
    () => createContentLibrary(projects, designSamples),
    [designSamples, projects],
  );
  const styleOptions = useMemo(() => uniqueValues(libraryItems.map((item) => item.style)), [libraryItems]);
  const bedroomOptions = useMemo(
    () => uniqueValues(libraryItems.map((item) => item.bedrooms ?? "")),
    [libraryItems],
  );

  const filteredItems = useMemo(
    () =>
      libraryItems.filter((item) => {
        if (contentType !== "all" && item.contentType !== contentType) {
          return false;
        }

        if (category !== allCategoriesValue && item.category !== category) {
          return false;
        }

        if (!matchesAreaRange(item.area ?? "", areaRange)) {
          return false;
        }

        if (style !== allValue && item.style !== style) {
          return false;
        }

        if (bedrooms !== allValue && item.bedrooms !== bedrooms) {
          return false;
        }

        return true;
      }),
    [areaRange, bedrooms, category, contentType, libraryItems, style],
  );

  const hasActiveFilters =
    contentType !== "all" ||
    category !== allCategoriesValue ||
    areaRange !== areaRanges[0].label ||
    style !== allValue ||
    bedrooms !== allValue;
  const SupportIcon = projectSupport.icon;

  function resetFilters() {
    setContentType("all");
    setCategory(allCategoriesValue);
    setAreaRange(areaRanges[0].label);
    setStyle(allValue);
    setBedrooms(allValue);
  }

  return (
    <section className="border-t border-[#ded4c4] bg-[#f7f1e9] px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
        <aside className="border-r border-[#ded4c4] pr-0 lg:pr-8">
          <div className="flex items-center gap-3">
            <SlidersHorizontal
              aria-hidden="true"
              className="h-4 w-4 text-[#a47b45]"
            />
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[#2d281f]">
              Bộ lọc thư viện
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2">
            {contentTypeFilters.map((item) => {
              const isActive = contentType === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setContentType(item.value)}
                  className={`h-10 border px-3 text-left text-xs font-bold uppercase tracking-[0.06em] transition ${
                    isActive
                      ? "border-[#6f765b] bg-[#6f765b] text-white"
                      : "border-[#d7cbb9] bg-[#fbf7f1] text-[#685e52] hover:border-[#b89765] hover:text-[#7b5a2f]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-3">
            {categoryFilters.map((item) => {
              const Icon = item.icon;
              const isActive = category === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setCategory(item.label)}
                  className={`flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-[#e7dccb] text-[#7b5a2f]"
                      : "text-[#746b60] hover:bg-[#efe7dc] hover:text-[#7b5a2f]"
                  }`}
                >
                  <Icon aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-4">
            <FilterSelect
              label="Diện tích"
              value={areaRange}
              options={areaRanges.map((range) => range.label)}
              onChange={setAreaRange}
            />
            <FilterSelect
              label="Phong cách"
              value={style}
              options={[allValue, ...styleOptions]}
              onChange={setStyle}
            />
            <FilterSelect
              label="Số phòng ngủ"
              value={bedrooms}
              options={[allValue, ...bedroomOptions]}
              onChange={setBedrooms}
            />
          </div>

          {hasActiveFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 border border-[#d7cbb9] bg-[#fbf7f1] text-sm font-semibold text-[#6a5533] transition hover:border-[#b89765]"
            >
              <RotateCcw aria-hidden="true" className="h-4 w-4" />
              Xoá bộ lọc
            </button>
          ) : null}

          <div className="mt-10 border border-[#ded4c4] bg-[#fbf7f1]/72 px-6 py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d5c7b2] text-[#9f7a45]">
              <SupportIcon
                aria-hidden="true"
                strokeWidth={1.35}
                className="h-7 w-7"
              />
            </div>
            <p className="mt-6 text-sm font-medium leading-6 text-[#62584b]">
              {projectSupport.title}
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#7b5a2f] transition hover:text-[#9a732f]"
            >
              {projectSupport.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>

        <div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base font-medium text-[#5d5448]">
              Hiển thị{" "}
              <span className="text-[#2d281f]">{filteredItems.length}</span>{" "}
              nội dung
            </p>

            <button
              type="button"
              className="inline-flex h-10 w-fit items-center gap-3 border border-[#d7cbb9] bg-[#fbf7f1] px-4 text-sm text-[#62584b]"
            >
              Sắp xếp: Mới nhất
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <ContentLibraryCard key={`${item.contentType}-${item.slug}`} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="mt-7 border border-dashed border-[#d7cbb9] bg-[#fbf7f1]/70 px-6 py-12 text-center text-sm text-[#6f665a]">
              Chưa có nội dung phù hợp với bộ lọc hiện tại.
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#7a6d5c]">
        {label}
      </span>
      <span className="relative mt-2 block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 w-full appearance-none border border-[#d7cbb9] bg-[#fbf7f1] px-4 pr-10 text-sm font-medium text-[#5f5448] outline-none transition focus:border-[#b89765]"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a47b45]"
        />
      </span>
    </label>
  );
}

function uniqueValues(values: string[]) {
  return Array.from(
    new Set(values.map((value) => value.trim()).filter(Boolean)),
  ).sort((first, second) => first.localeCompare(second, "vi"));
}

function matchesAreaRange(area: string, selectedRange: string) {
  if (selectedRange === areaRanges[0].label) {
    return true;
  }

  const range = areaRanges.find((item) => item.label === selectedRange);
  const areaValue = parseAreaValue(area);

  if (!range || areaValue === undefined) {
    return false;
  }

  if (typeof range.min === "number" && areaValue < range.min) {
    return false;
  }

  if (typeof range.max === "number" && areaValue >= range.max) {
    return false;
  }

  return true;
}

function parseAreaValue(area: string) {
  const match = area.match(/(\d+(?:[,.]\d+)?)/);

  return match ? Number(match[1].replace(",", ".")) : undefined;
}
