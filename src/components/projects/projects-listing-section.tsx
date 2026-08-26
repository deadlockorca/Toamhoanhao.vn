"use client";

import {
  BedDouble,
  BriefcaseBusiness,
  Building2,
  Check,
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
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { ContentLibraryCard } from "@/components/projects/content-library-card";
import {
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
const threeColumnMediaQuery = "(min-width: 1024px)";

function subscribeToThreeColumnBreakpoint(onChange: () => void) {
  const mediaQuery = window.matchMedia(threeColumnMediaQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getThreeColumnSnapshot() {
  return window.matchMedia(threeColumnMediaQuery).matches;
}

function getThreeColumnServerSnapshot() {
  return true;
}

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

function sortLibraryItems<T extends { title: string; area?: string }>(
  items: T[],
  sortBy: string,
): T[] {
  const sorted = [...items];
  switch (sortBy) {
    case "oldest":
      return sorted.reverse();
    case "area-desc":
      return sorted.sort((a, b) => (parseArea(b.area ?? "") ?? 0) - (parseArea(a.area ?? "") ?? 0));
    case "area-asc":
      return sorted.sort((a, b) => (parseArea(a.area ?? "") ?? 0) - (parseArea(b.area ?? "") ?? 0));
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title, "vi"));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title, "vi"));
    default:
      return sorted;
  }
}

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
  const hasThreeColumns = useSyncExternalStore(
    subscribeToThreeColumnBreakpoint,
    getThreeColumnSnapshot,
    getThreeColumnServerSnapshot,
  );
  const [contentType, setContentType] = useState<"all" | LibraryContentType>("all");
  const [category, setCategory] = useState<LibraryCategory | typeof allCategoriesValue>(
    initialCategory ?? allCategoriesValue,
  );
  const [areaRange, setAreaRange] = useState(areaRanges[0].label);
  const [style, setStyle] = useState(allValue);
  const [bedrooms, setBedrooms] = useState(allValue);
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = hasThreeColumns ? 9 : 8;
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

  const sortedItems = useMemo(
    () => sortLibraryItems(filteredItems, sortBy),
    [filteredItems, sortBy],
  );

  const pageCount = Math.max(1, Math.ceil(sortedItems.length / itemsPerPage));
  const safePage = Math.min(currentPage, pageCount);
  const visibleItems = sortedItems.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage,
  );
  const pageNumbers = getPageNumbers(pageCount, safePage);

  function updateFilter(update: () => void) {
    update();
    setCurrentPage(1);
  }

  function resetFilters() {
    setContentType("all");
    setCategory(allCategoriesValue);
    setAreaRange(areaRanges[0].label);
    setStyle(allValue);
    setBedrooms(allValue);
    setSortBy("newest");
    setCurrentPage(1);
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
                  onClick={() => updateFilter(() => setContentType(item.value))}
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
                  onClick={() => updateFilter(() => setCategory(item.label))}
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
              onChange={(value) => updateFilter(() => setAreaRange(value))}
            />
            <FilterSelect
              label="Phong cách"
              value={style}
              options={[allValue, ...styleOptions]}
              onChange={(value) => updateFilter(() => setStyle(value))}
            />
            <FilterSelect
              label="Số phòng ngủ"
              value={bedrooms}
              options={[allValue, ...bedroomOptions]}
              onChange={(value) => updateFilter(() => setBedrooms(value))}
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

          </aside>

        <div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base font-medium text-[#5d5448]">
              Hiển thị{" "}
              <span className="text-[#2d281f]">{sortedItems.length}</span>{" "}
              nội dung
            </p>

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
                        setCurrentPage(1);
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

          <div className="mt-7 grid gap-5 min-w-0 grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <ContentLibraryCard key={`${item.contentType}-${item.slug}`} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="mt-7 border border-dashed border-[#d7cbb9] bg-[#fbf7f1]/70 px-6 py-12 text-center text-sm text-[#6f665a]">
              Chưa có nội dung phù hợp với bộ lọc hiện tại.
            </div>
          ) : null}

          {pageCount > 1 ? (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={safePage === 1}
                className="inline-flex h-10 w-10 items-center justify-center border border-[#d7cbb9] bg-[#fbf7f1] text-sm font-semibold text-[#62584b] transition hover:border-[#b89765] hover:text-[#7b5a2f] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Trang trước"
              >
                ←
              </button>
              {pageNumbers.map((page, index) =>
                page === "ellipsis" ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="inline-flex h-10 w-10 items-center justify-center text-sm text-[#62584b]"
                    aria-hidden="true"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    aria-current={page === safePage ? "page" : undefined}
                    className={`inline-flex h-10 w-10 items-center justify-center border text-sm font-semibold transition ${
                      page === safePage
                        ? "border-[#6f765b] bg-[#6f765b] text-white"
                        : "border-[#d7cbb9] bg-[#fbf7f1] text-[#62584b] hover:border-[#b89765] hover:text-[#7b5a2f]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                disabled={safePage === pageCount}
                className="inline-flex h-10 w-10 items-center justify-center border border-[#d7cbb9] bg-[#fbf7f1] text-sm font-semibold text-[#62584b] transition hover:border-[#b89765] hover:text-[#7b5a2f] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Trang sau"
              >
                →
              </button>
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

function getPageNumbers(pageCount: number, currentPage: number): Array<number | "ellipsis"> {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, pageCount, currentPage - 1, currentPage, currentPage + 1]);
  const sorted = Array.from(pages)
    .filter((page) => page >= 1 && page <= pageCount)
    .sort((first, second) => first - second);

  const result: Array<number | "ellipsis"> = [];
  let previous = 0;

  for (const page of sorted) {
    if (page - previous > 1) {
      result.push("ellipsis");
    }
    result.push(page);
    previous = page;
  }

  return result;
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
