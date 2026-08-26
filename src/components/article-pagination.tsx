import Link from "next/link";

type ArticlePaginationProps = {
  anchor?: string;
  basePath: string;
  currentPage: number;
  pageCount: number;
  queryParams?: Record<string, string | undefined>;
};

function getVisiblePages(currentPage: number, pageCount: number) {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages = new Set([
    1,
    2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    pageCount - 1,
    pageCount,
  ]);

  return [...pages]
    .filter((page) => page >= 1 && page <= pageCount)
    .sort((a, b) => a - b);
}

export function ArticlePagination({
  anchor = "articles",
  basePath,
  currentPage,
  pageCount,
  queryParams = {},
}: ArticlePaginationProps) {
  if (pageCount <= 1) {
    return null;
  }

  const pages = getVisiblePages(currentPage, pageCount);

  return (
    <nav
      aria-label="Phân trang bài viết"
      className="mt-9 flex flex-wrap justify-center gap-2"
    >
      {pages.map((page, index) => {
        const previousPage = pages[index - 1];
        const hasGap = previousPage !== undefined && page - previousPage > 1;
        const params = new URLSearchParams();

        Object.entries(queryParams).forEach(([key, value]) => {
          if (value) {
            params.set(key, value);
          }
        });
        if (page > 1) {
          params.set("trang", String(page));
        }

        const query = params.toString();
        const href = `${basePath}${query ? `?${query}` : ""}#${anchor}`;

        return (
          <span key={page} className="contents">
            {hasGap ? (
              <span
                aria-hidden="true"
                className="flex h-10 min-w-7 items-center justify-center text-sm text-[#8d7c66]"
              >
                …
              </span>
            ) : null}
            <Link
              href={href}
              aria-current={page === currentPage ? "page" : undefined}
              className={`flex h-10 min-w-10 items-center justify-center border px-3 text-sm font-bold transition ${
                page === currentPage
                  ? "border-[#7c8061] bg-[#7c8061] text-white"
                  : "border-[#d8cbb9] bg-[#fdfaf6] text-[#655746] hover:border-[#9a733e]"
              }`}
            >
              {page}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
