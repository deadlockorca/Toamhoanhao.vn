import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calculator,
  Check,
  ClipboardList,
  FileText,
  Phone,
} from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";
import {
  getPricingArticleBySlug,
  getPricingArticleHref,
  pricingArticles,
} from "@/data/pricing-articles";

export function generateStaticParams() {
  return pricingArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/bao-gia/thiet-ke-thi-cong-noi-that/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getPricingArticleBySlug(slug);

  if (!article) {
    return { title: "Bài viết báo giá không tồn tại | Tổ Ấm Hoàn Hảo" };
  }

  return {
    title: `${article.title} | Tổ Ấm Hoàn Hảo`,
    description: article.excerpt,
  };
}

export default async function PricingArticlePage({
  params,
}: PageProps<"/bao-gia/thiet-ke-thi-cong-noi-that/[slug]">) {
  const { slug } = await params;
  const article = getPricingArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map(getPricingArticleBySlug)
    .filter((item) => item !== undefined);

  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2d271f]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[600px] max-w-[1320px] pt-20 lg:grid-cols-[0.92fr_1.08fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-8 lg:py-12">
            <div className="max-w-[600px]">
              <nav
                aria-label="Điều hướng trang"
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#766d60]"
              >
                <Link href="/" className="transition hover:text-[#9a733e]">
                  Trang chủ
                </Link>
                <span>/</span>
                <Link
                  href="/bao-gia/thiet-ke-thi-cong-noi-that"
                  className="transition hover:text-[#9a733e]"
                >
                  Báo giá nội thất
                </Link>
                <span>/</span>
                <span className="line-clamp-1">{article.label}</span>
              </nav>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                {article.label}
              </p>
              <h1 className="mt-4 font-sans text-4xl leading-[1.08] text-[#1f1a13] sm:text-5xl lg:text-[3.5rem]">
                {article.title}
              </h1>
              <p className="mt-6 max-w-[550px] text-base leading-8 text-[#584f43]">
                {article.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ConsultationButton
                  className="inline-flex min-h-12 items-center gap-2 bg-[#777b61] px-6 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#62674f]"
                >
                  Nhận báo giá mới
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </ConsultationButton>
                <a
                  href="tel:0903897555"
                  className="inline-flex min-h-12 items-center gap-2 border border-[#b9a689] px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#5b4932] transition hover:bg-[#eee3d5]"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  0903.897.555
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1d6c7] bg-[#fdfaf6]">
        <div className="mx-auto grid max-w-[1320px] sm:grid-cols-2 lg:grid-cols-3">
          <article className="border-b border-[#e1d6c7] px-6 py-7 sm:border-b-0 sm:border-r lg:px-8">
            <FileText aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">
              Nhóm nội dung
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">{article.label}</p>
          </article>
          <article className="border-b border-[#e1d6c7] px-6 py-7 sm:border-b-0 lg:border-r lg:px-8">
            <ClipboardList aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">
              Phạm vi
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">{article.scope}</p>
          </article>
          <article className="px-6 py-7 lg:px-8">
            <Calculator aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">
              Cơ sở lập giá
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">
              {article.pricingBasis}
            </p>
          </article>
        </div>
      </section>

      {article.archived ? (
        <div className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-8">
          <div className="flex gap-4 border border-[#d8c4a5] bg-[#f3e7d4] p-5 text-sm leading-7 text-[#66533b]">
            <AlertTriangle
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-[#a0783e]"
              strokeWidth={1.5}
            />
            <p>
              Đây là hồ sơ ngân sách được lưu lại từ website cũ, không phải báo
              giá hiện hành. Dự toán mới sẽ được lập theo diện tích, vật liệu và
              thời điểm triển khai thực tế.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:py-24">
        <article className="min-w-0">
          <section className="border-b border-[#ded2c1] pb-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
              Nội dung chính
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">
              Nội dung và phạm vi cần lưu ý
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {article.highlights.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 border border-[#ded2c1] bg-[#fdfaf6] p-4 text-sm leading-6 text-[#62594d]"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8a7650]"
                    strokeWidth={2.4}
                  />
                  {item}
                </p>
              ))}
            </div>
          </section>

          <div className="divide-y divide-[#ded2c1]">
            {article.sections.map((section, index) => (
              <section key={section.title} className="py-12">
                <p className="text-xs font-bold text-[#a0783e]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#30291f] sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph, paragraphIndex) => {
                    const isListItem = /^[•♦♥Θ»→⇒Δ]\s*/.test(paragraph);
                    const content = paragraph.replace(/^[•♦♥Θ»→⇒Δ]\s*/, "");

                    return isListItem ? (
                      <p
                        key={`${section.title}-${paragraphIndex}`}
                        className="flex gap-3 text-base leading-8 text-[#62594d]"
                      >
                        <Check
                          aria-hidden="true"
                          className="mt-2 h-4 w-4 shrink-0 text-[#9a733e]"
                          strokeWidth={2}
                        />
                        <span>{content}</span>
                      </p>
                    ) : (
                      <p
                        key={`${section.title}-${paragraphIndex}`}
                        className="text-base leading-8 text-[#62594d]"
                      >
                        {content}
                      </p>
                    );
                  })}
                </div>

                {section.images?.length ? (
                  <div
                    className={`mt-8 grid gap-4 ${
                      section.images.length > 1 ? "sm:grid-cols-2" : ""
                    }`}
                  >
                    {section.images.map((image) => (
                      <figure
                        key={image.src}
                        className="overflow-hidden border border-[#ded2c1] bg-white"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(min-width: 1024px) 38vw, 100vw"
                          className="h-auto w-full object-contain"
                        />
                      </figure>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <Link
            href="/bao-gia/thiet-ke-thi-cong-noi-that"
            className="inline-flex items-center gap-2 border-b border-[#8a7650] pb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#725a36]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Quay lại bảng báo giá
          </Link>
        </article>

        <aside className="h-fit border border-[#ded2c1] bg-[#fdfaf6] p-6 lg:sticky lg:top-8 lg:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a733e]">
            Báo giá theo công trình
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">
            Cần một dự toán sát nhu cầu của bạn?
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6b6154]">
            Gửi mặt bằng, diện tích và danh sách hạng mục dự kiến. Đội ngũ sẽ trao
            đổi để xác định phạm vi trước khi bóc tách báo giá.
          </p>
          <div className="mt-6 space-y-3 border-y border-[#ded2c1] py-5 text-sm text-[#584f43]">
            <p>
              <span className="block text-xs text-[#8c795f]">Phạm vi tham khảo</span>
              <strong className="mt-1 block">{article.scope}</strong>
            </p>
            <p>
              <span className="block text-xs text-[#8c795f]">Cơ sở lập giá</span>
              <strong className="mt-1 block">{article.pricingBasis}</strong>
            </p>
          </div>
          <ConsultationButton
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#777b61] px-5 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#62674f]"
          >
            Gửi yêu cầu báo giá
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </ConsultationButton>
        </aside>
      </div>

      <section className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Đọc thêm
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[#30291f]">Bài viết báo giá liên quan</h2>
            </div>
            <Link
              href="/bao-gia/thiet-ke-thi-cong-noi-that"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#725a36]"
            >
              Xem tất cả
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={getPricingArticleHref(item.slug)}
                className="group overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed]"
              >
                <div className="relative aspect-[1.65] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9a733e]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#332b21]">{item.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#725a36]">
                    Xem bài viết
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta />
      <SiteFooter />
    </main>
  );
}
