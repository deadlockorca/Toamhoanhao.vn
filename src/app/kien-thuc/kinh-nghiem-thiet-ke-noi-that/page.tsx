import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArticlePagination } from "@/components/article-pagination";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getInteriorDesignExperienceArticleHref,
  interiorDesignExperienceArticles,
} from "@/data/interior-design-experience-articles";

export const metadata: Metadata = {
  title: "Kinh nghiệm thiết kế nội thất | Tổ Ấm Hoàn Hảo",
  description:
    "Cẩm nang thiết kế nội thất thực tế: quy trình, chi phí, lưu ý và kinh nghiệm tạo không gian sống phù hợp.",
};

export default async function InteriorDesignExperiencePage({
  searchParams,
}: PageProps<"/kien-thuc/kinh-nghiem-thiet-ke-noi-that">) {
  const { trang } = await searchParams;
  const trangValue = Array.isArray(trang) ? trang[0] : trang;
  const articlesPerPage = 6;
  const pageCount = Math.max(
    1,
    Math.ceil(interiorDesignExperienceArticles.length / articlesPerPage),
  );
  const requestedPage = Number.parseInt(trangValue ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), pageCount)
    : 1;
  const visibleArticles = interiorDesignExperienceArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2c261e]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[520px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-end bg-[#f8f3ec]/90 px-6 pb-14 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0">
            <div className="max-w-[525px]">
              <nav
                aria-label="Điều hướng trang"
                className="text-xs text-[#766d60]"
              >
                <Link href="/" className="transition hover:text-[#9a733e]">
                  Trang chủ
                </Link>
                <span className="mx-3">/</span>
                <span>Kinh nghiệm thiết kế nội thất</span>
              </nav>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Kiến thức
              </p>
              <h1 className="mt-4 font-sans text-5xl leading-[1.04] text-[#1f1a13] sm:text-6xl">
                Kinh nghiệm thiết kế <em className="not-italic">nội thất</em>
              </h1>
              <p className="mt-6 max-w-[455px] text-base leading-8 text-[#584f43]">
                Cẩm nang thiết kế nội thất thực tế, giúp bạn kiến tạo không gian
                đẹp, tiện nghi và phù hợp với lối sống, ngân sách của gia đình.
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/gioi-thieu/banner.png"
              alt="Không gian nội thất hiện đại"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-right"
            />
          </div>
        </div>
      </section>

      <section id="articles" className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Đọc thêm
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[#30291f]">
                Bài viết về thiết kế nội thất
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#7b623d]">
              {interiorDesignExperienceArticles.length} bài viết
            </span>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                href={getInteriorDesignExperienceArticleHref(article.slug)}
                className="group overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[1.55] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#8d7c66]">{article.date}</p>
                  <h3 className="mt-2 font-serif text-xl leading-tight text-[#332b21]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-[#756b5e]">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#8a6330]">
                    Đọc bài viết
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <ArticlePagination
            basePath="/kien-thuc/kinh-nghiem-thiet-ke-noi-that"
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
