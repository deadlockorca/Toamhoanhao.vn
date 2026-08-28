import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChefHat, Clock, Cpu, Factory, FileSearch, Hammer, House, Phone, Ruler, ShieldCheck, Sparkles, Wrench } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { kitchenSpaceArticles, getKitchenSpaceArticleHref } from "@/data/kitchen-space-articles";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Không gian bếp | Tổ Ấm Hoàn Hảo",
  description:
    "Tổng hợp các bài viết về thiết kế, thi công không gian bếp: tủ bếp, kính ốp bếp, bếp chung cư, biệt thự, nhà phố.",
};

const services = [
  { icon: Wrench, title: "Thiết kế tủ bếp", content: "Tư vấn thiết kế tủ bếp theo phong cách và nhu cầu sử dụng." },
  { icon: Cpu, title: "Ốp kính bếp", content: "Thi công kính ốp bếp sang trọng, bền đẹp, dễ vệ sinh." },
  { icon: Hammer, title: "Thi công bếp trọn gói", content: "Thi công không gian bếp từ phần thô đến hoàn thiện." },
  { icon: Factory, title: "Sản xuất đồ gỗ", content: "Tủ bếp, bàn bếp và đồ gỗ nội thất gia công theo yêu cầu." },
];

export default function KitchenSpacePage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2d271f]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[560px] max-w-[1320px] pt-20 lg:grid-cols-[0.88fr_1.12fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-8 lg:py-12">
            <div className="max-w-[560px]">
              <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]">
                <Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link>
                <span className="mx-3">/</span>
                <Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link>
                <span className="mx-3">/</span>
                <span>Không gian bếp</span>
              </nav>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p>
              <h1 className="mt-4 font-sans text-5xl leading-[1.03] text-[#1f1a13] sm:text-6xl">
                Không gian <span className="block not-italic">bếp</span>
              </h1>
              <p className="mt-6 max-w-[510px] text-base leading-8 text-[#584f43]">
                Tổng hợp các bài viết, mẫu thiết kế và công trình thi công không gian bếp tiêu biểu, giúp
                bạn có ý tưởng và lựa chọn phù hợp cho tổ ấm của mình.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ConsultationButton className="inline-flex min-h-12 items-center gap-2 bg-[#777b61] px-6 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#62674f]">
                  Nhận tư vấn
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </ConsultationButton>
                <a href="tel:0903897555" className="inline-flex min-h-12 items-center gap-2 border border-[#b9a689] px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#5b4932] transition hover:bg-[#eee3d5]">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  0903.897.555
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[340px] lg:min-h-full">
            <Image src="/images/thi-cong-noi-that/khong-gian-bep/hero.webp" alt="Không gian bếp" fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1d6c7] bg-[#fdfaf6]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;
            return <article key={item.title} className="border-[#e1d6c7] px-4 py-7 even:border-l lg:border-l lg:first:border-l-0 lg:px-7">
              <Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
              <h2 className="mt-4 text-sm font-bold text-[#3e352a]">{item.title}</h2>
              <p className="mt-2 text-xs leading-5 text-[#756b5e]">{item.content}</p>
            </article>;
          })}
        </div>
      </section>

      <section className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[930px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Bài viết</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">
              Thư viện mẫu thiết kế và thi công không gian bếp
            </h2>
            <p className="mt-5 max-w-[760px] text-sm leading-7 text-[#6f6558]">
              Tổng hợp các bài viết về không gian bếp từ website cũ, giúp bạn tham khảo kiểu dáng, chất liệu
              và phong cách trước khi đưa ra quyết định cho công trình của mình.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitchenSpaceArticles.map((item, index) => (
              <Link
                key={item.slug}
                href={getKitchenSpaceArticleHref(item.slug)}
                className="group flex min-h-full flex-col overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1 hover:border-[#b89a70] hover:shadow-[0_18px_45px_rgba(77,61,39,0.09)]"
              >
                <div className="relative aspect-[1.6] overflow-hidden">
                  <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 bg-[#f9f4ed]/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#805f32]">
                    {item.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#332b21] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#756b5e] line-clamp-3">{item.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.08em] text-[#725a36]">
                    Xem bài viết
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
                </Link>
              ))}
            </div>
        </div>
      </section>

      <section className="border-y border-[#e1d6c7] bg-[#fdfaf6] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Dịch vụ thi công bếp</p>
            <h2 className="mt-3 font-serif text-4xl text-[#30291f]">Từ thiết kế đến hoàn thiện không gian bếp</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => {
              const Icon = item.icon;
              return <article key={item.title} className="relative border border-[#ded2c1] p-5">
                <span className="text-xs font-bold text-[#a0783e]">0{index + 1}</span>
                <Icon aria-hidden="true" className="mt-5 h-8 w-8 text-[#9a733e]" strokeWidth={1.2} />
                <h3 className="mt-5 text-sm font-bold text-[#3e352a]">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#3d382d] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <ChefHat aria-hidden="true" className="h-9 w-9 text-[#e6c897]" strokeWidth={1.25} />
          <h2 className="mt-4 max-w-[760px] font-serif text-4xl leading-tight sm:text-5xl">
            Sẵn sàng kiến tạo không gian bếp cho tổ ấm của bạn?
          </h2>
          <p className="mt-5 max-w-[680px] text-sm leading-7 text-[#e8e0d5]">
            Liên hệ ngay để được tư vấn và báo giá thiết kế, thi công không gian bếp phù hợp nhất.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ConsultationButton className="inline-flex min-h-12 items-center gap-2 bg-[#858a6c] px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#969c78]">
              Yêu cầu tư vấn
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ConsultationButton>
            <a href="tel:0903897555" className="inline-flex min-h-12 items-center gap-2 border border-white/50 px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white/10">
              <Phone aria-hidden="true" className="h-4 w-4" />
              Gọi 0903.897.555
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
