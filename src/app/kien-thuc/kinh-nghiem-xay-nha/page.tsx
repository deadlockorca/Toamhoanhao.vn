import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ArticlePagination } from "@/components/article-pagination";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kinh nghiệm xây nhà trọn gói | Tổ Ấm Hoàn Hảo",
  description:
    "Những kinh nghiệm xây nhà thực tế về định hướng thiết kế, ngân sách, thi công và lựa chọn vật liệu.",
};

const readingTopics = [
  {
    slug: "kinh-nghiem-chon-huong-nha-15",
    title: "Kinh nghiệm chọn hướng nhà",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/huong-nha.webp",
    description:
      "Chọn hướng nhà theo tuổi của gia chủ và điều kiện khí hậu để tạo nên không gian sống thuận tiện, hài hòa.",
  },
  {
    slug: "kinh-nghiem-do-be-tong-28",
    title: "Kinh nghiệm đổ bê tông cột, dầm, sàn",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/do-be-tong.webp",
    description:
      "Những yêu cầu kỹ thuật cần nắm rõ khi triển khai các hạng mục kết cấu quan trọng của công trình.",
  },
  {
    slug: "chien-luoc-thiet-ke-nha-co-dien-tich-nho",
    title: "Chiến lược thiết kế nhà có diện tích nhỏ",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-nho.webp",
    description:
      "Gợi ý để một ngôi nhà diện tích nhỏ vẫn có đủ tiện ích và đáp ứng nhu cầu sử dụng của gia đình.",
  },
  {
    slug: "nhung-luu-y-khi-thi-cong-to-trat-tuong-nha",
    title: "Những lưu ý khi thi công tô trát tường nhà",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/to-trat.webp",
    description:
      "Các điểm cần kiểm tra trong công tác tô trát và nghiệm thu để tường phẳng, bền, hạn chế nứt hoặc bong tróc.",
  },
  {
    slug: "phong-thuy-xay-nha-14",
    title: "Phong thủy xây nhà: 5 điều cần lưu ý khi xây nhà cho hợp phong thủy",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/phong-thuy.webp",
    description:
      "Những nguyên tắc phong thủy cơ bản giúp gia chủ cân nhắc hướng, bố cục và không gian sống hài hòa.",
  },
  {
    slug: "5-dieu-can-luu-y-khi-thiet-ke-cua-cong-ra-vao",
    title: "5 điều cần lưu ý khi thiết kế cửa cổng ra vào",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/cua-cong.webp",
    description:
      "Cân đối phong thủy, an toàn, riêng tư, thông thoáng và thẩm mỹ cho lối vào của công trình.",
  },
  {
    slug: "kinh-nghiem-thiet-ke-nha-co-anh-sang-tu-nhien-14-2",
    title: "4 kinh nghiệm thiết kế nhà để tận dụng được ánh sáng tự nhiên nhất",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/anh-sang.webp",
    description:
      "Gợi ý thiết kế để các không gian trong nhà đón được ánh sáng tự nhiên một cách hiệu quả.",
  },
  {
    slug: "kinh-nghiem-thi-cong-nha-mai-thai-1-tang-14",
    title:
      "Kinh nghiệm thi công nhà mái Thái 1 tầng siêu chất lượng khiến bạn không còn đắn đo",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-mai-thai.webp",
    description:
      "Những kinh nghiệm thực tế về giải pháp mái, tiến độ và chất lượng khi triển khai nhà mái Thái một tầng.",
  },
  {
    slug: "kinh-nghiem-xay-nha-10",
    title:
      "6 kinh nghiệm xây nhà - chọn vật liệu xây dựng trong thi công nhà ở",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/vat-lieu.webp",
    description:
      "Kinh nghiệm lựa chọn vật liệu xây dựng hợp lý, tiết kiệm và phù hợp với nhu cầu sử dụng lâu dài.",
  },
];

export default async function BuildingExperiencePage({
  searchParams,
}: PageProps<"/kien-thuc/kinh-nghiem-xay-nha">) {
  const { trang } = await searchParams;
  const trangValue = Array.isArray(trang) ? trang[0] : trang;
  const articlesPerPage = 6;
  const pageCount = Math.max(1, Math.ceil(readingTopics.length / articlesPerPage));
  const requestedPage = Number.parseInt(trangValue ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), pageCount)
    : 1;
  const visibleTopics = readingTopics.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2d271f]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7]">
        <SiteHeader />

        <div className="mx-auto grid min-h-[600px] max-w-[1320px] pt-20 lg:grid-cols-[0.92fr_1.08fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-8 lg:py-12">
            <div className="max-w-[590px]">
              <nav
                aria-label="Điều hướng trang"
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#766d60]"
              >
                <Link href="/" className="transition hover:text-[#9a733e]">
                  Trang chủ
                </Link>
                <span>/</span>
                <span>Kinh nghiệm xây nhà</span>
              </nav>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Kiến thức xây dựng
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-[#1f1a13] sm:text-5xl lg:text-[3.5rem]">
                Kinh nghiệm xây nhà trọn gói
              </h1>
              <p className="mt-6 max-w-[550px] text-base leading-8 text-[#584f43]">
                Những kinh nghiệm thực tế về định hướng thiết kế, tổ chức thi công và
                lựa chọn giải pháp phù hợp cho một ngôi nhà bền vững.
              </p>
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <Image
              src="/images/kien-thuc/kinh-nghiem-xay-nha/hero.webp"
              alt="Mẫu thiết kế nhà phố của Tổ Ấm Hoàn Hảo"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section id="articles" className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Đọc thêm</p>
            <h2 className="mt-3 font-serif text-4xl text-[#30291f]">Chủ đề kinh nghiệm xây nhà</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b6154]">
              9 bài viết được giữ lại từ chuyên mục kinh nghiệm xây nhà trên website cũ
              của Tổ Ấm Hoàn Hảo.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {visibleTopics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/kien-thuc/kinh-nghiem-xay-nha/${topic.slug}`}
                className="group overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[1.65] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9a733e]">
                    Bài viết {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#332b21]">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6b6154]">{topic.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#70532b]">
                    Xem bài viết
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <ArticlePagination
            basePath="/kien-thuc/kinh-nghiem-xay-nha"
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
