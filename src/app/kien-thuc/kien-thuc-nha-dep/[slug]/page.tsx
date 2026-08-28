import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  beautifulHomeArticles,
  beautifulHomeListingHref,
  getBeautifulHomeArticle,
  getBeautifulHomeArticleHref,
} from "@/data/beautiful-home-articles";

export function generateStaticParams() {
  return beautifulHomeArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/kien-thuc/kien-thuc-nha-dep/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getBeautifulHomeArticle(slug);

  if (!article) return { title: "Bài viết không tồn tại | Tổ Ấm Hoàn Hảo" };
  return { title: `${article.title} | Tổ Ấm Hoàn Hảo`, description: article.excerpt };
}

export default async function BeautifulHomeArticlePage({
  params,
}: PageProps<"/kien-thuc/kien-thuc-nha-dep/[slug]">) {
  const { slug } = await params;
  const article = getBeautifulHomeArticle(slug);
  if (!article) notFound();

  const relatedArticles = beautifulHomeArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2d271f]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[600px] max-w-[1320px] pt-20 lg:grid-cols-[0.92fr_1.08fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-8 lg:py-12">
            <div className="max-w-[600px]">
              <nav aria-label="Điều hướng trang" className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#766d60]">
                <Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span>/</span>
                <Link href={beautifulHomeListingHref} className="transition hover:text-[#9a733e]">Kiến thức nhà đẹp</Link><span>/</span>
                <span className="line-clamp-1">{article.title}</span>
              </nav>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Kiến thức nhà đẹp</p>
              <h1 className="mt-4 font-sans text-4xl leading-[1.08] text-[#1f1a13] sm:text-5xl lg:text-[3.5rem]">{article.title}</h1>
              <p className="mt-6 max-w-[550px] text-base leading-8 text-[#584f43]">{article.excerpt}</p>
            </div>
          </div>
          <div className="relative hidden min-h-[340px] lg:block lg:min-h-full">
            <Image src={article.image} alt={article.title} fill priority sizes="54vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1d6c7] bg-[#fdfaf6]">
        <div className="mx-auto grid max-w-[1320px] sm:grid-cols-3">
          <Info icon={Sparkles} label="Chuyên mục" value="Kiến thức nhà đẹp" />
          <Info icon={ClipboardList} label="Nội dung" value={`${article.sections.length} phần nội dung chuyên sâu`} bordered />
          <Info icon={CalendarDays} label="Ngày xuất bản" value={article.date} bordered />
        </div>
      </section>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:py-24">
        <article className="min-w-0">
          <section className="border-b border-[#ded2c1] pb-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Nội dung chính</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">Góc nhìn thực tế cho không gian sống đẹp</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#62594d]">{article.excerpt}</p>
          </section>

          <div className="divide-y divide-[#ded2c1]">
            {article.sections.map((section, sectionIndex) => (
              <section key={`${section.title}-${sectionIndex}`} id={`section-${sectionIndex + 1}`} className="scroll-mt-32 py-12">
                <p className="text-xs font-bold text-[#a0783e]">{String(sectionIndex + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#30291f] sm:text-4xl">{section.title}</h2>
                <div className="mt-6 space-y-5">
                  {section.blocks.map((block, blockIndex) => {
                    if (block.type === "image") {
                      return <figure key={`${block.src}-${blockIndex}`} className="overflow-hidden border border-[#ded2c1] bg-white"><Image src={block.src} alt={block.alt || `${article.title} - hình minh họa`} width={1400} height={875} sizes="(min-width: 1024px) 62vw, 100vw" className="h-auto w-full object-contain" /></figure>;
                    }
                    if (block.type === "bullet") {
                      return <p key={`${block.text}-${blockIndex}`} className="flex gap-3 text-base leading-8 text-[#62594d]"><Check aria-hidden="true" className="mt-2 h-4 w-4 shrink-0 text-[#9a733e]" strokeWidth={2} /><span>{block.text}</span></p>;
                    }
                    return <p key={`${block.text}-${blockIndex}`} className="text-base leading-8 text-[#62594d]">{block.text}</p>;
                  })}
                </div>
              </section>
            ))}
          </div>
          <Link href={beautifulHomeListingHref} className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#70532b] transition hover:text-[#9a733e]"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Quay lại kiến thức nhà đẹp</Link>
        </article>

        <aside className="h-fit space-y-5 lg:sticky lg:top-28">
          <section className="border border-[#ded2c1] bg-[#fdfaf6] p-6 lg:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a733e]">Mục lục</p>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-[#6b6154]">{article.sections.map((section, index) => <li key={`${section.title}-${index}`} className="flex gap-3"><span className="font-bold text-[#a0783e]">{String(index + 1).padStart(2, "0")}</span><a href={`#section-${index + 1}`} className="transition hover:text-[#8a6330]">{section.title}</a></li>)}</ol>
          </section>
          <section className="border border-[#ded2c1] bg-[#f3eade] p-6 lg:p-7">
            <BookOpenCheck aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.15} />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a733e]">Cùng chuyên mục</p>
            <div className="mt-4 space-y-4">{relatedArticles.map((item) => <Link key={item.slug} href={getBeautifulHomeArticleHref(item.slug)} className="group block border-b border-[#ddcfba] pb-4 last:border-b-0 last:pb-0"><p className="text-sm font-semibold leading-6 text-[#4a3f30] transition group-hover:text-[#8a6330]">{item.title}</p><span className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-[#8a6330]">Đọc bài viết <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></span></Link>)}</div>
          </section>
        </aside>
      </div>

      <section className="border-t border-[#e1d6c7] bg-[#eee5d8] px-5 py-14 sm:px-8"><div className="mx-auto max-w-[1320px]"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Xem thêm</p><h2 className="mt-2 font-serif text-3xl text-[#30291f]">Các bài cùng chủ đề</h2></div><Link href={beautifulHomeListingHref} className="inline-flex items-center gap-2 text-sm font-bold text-[#70532b]">Xem tất cả <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{relatedArticles.map((item) => <Link key={item.slug} href={getBeautifulHomeArticleHref(item.slug)} className="group overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1"><div className="relative aspect-[1.65] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9a733e]">Kiến thức nhà đẹp</p><h3 className="mt-3 text-base font-bold leading-6 text-[#40362b]">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#70532b]">Xem bài viết <ArrowRight aria-hidden="true" className="h-4 w-4" /></span></div></Link>)}</div></div></section>
      <SiteFooter />
    </main>
  );
}

function Info({ icon: Icon, label, value, bordered = false }: { icon: typeof Sparkles; label: string; value: string; bordered?: boolean }) {
  return <article className={`border-b border-[#e1d6c7] px-6 py-7 sm:border-b-0 lg:px-8 ${bordered ? "sm:border-l" : ""}`}><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} /><p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">{label}</p><p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">{value}</p></article>;
}
