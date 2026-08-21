import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  DraftingCompass,
  MapPinned,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { constructionPricingArticles } from "@/data/construction-pricing-articles";

export const metadata: Metadata = {
  title: "Báo giá thiết kế kiến trúc và xây dựng trọn gói | Tổ Ấm Hoàn Hảo",
  description:
    "Tham khảo phạm vi và cách lập báo giá thiết kế kiến trúc, xây dựng trọn gói cho nhà phố và biệt thự.",
};

const pricingPrinciples = [
  {
    icon: Ruler,
    title: "Quy mô thực tế",
    description: "Diện tích xây dựng, số tầng, kết cấu và hiện trạng khu đất.",
  },
  {
    icon: DraftingCompass,
    title: "Hồ sơ thiết kế",
    description: "Kiến trúc, kết cấu, điện nước và mức độ chi tiết cần triển khai.",
  },
  {
    icon: BadgeDollarSign,
    title: "Mức đầu tư",
    description: "Vật liệu hoàn thiện, tiêu chuẩn kỹ thuật và ngân sách dự kiến.",
  },
  {
    icon: ShieldCheck,
    title: "Điều kiện thi công",
    description: "Vị trí, tiến độ, phương án vận chuyển và yêu cầu bàn giao.",
  },
];

const projectTypes = [
  {
    number: "01",
    title: "Nhà phố hiện đại",
    description:
      "Phương án theo mặt tiền, số tầng và nhu cầu sinh hoạt của từng gia đình.",
    image: "/images/bao-gia/xay-dung/nha-pho.webp",
  },
  {
    number: "02",
    title: "Biệt thự gia đình",
    description:
      "Làm rõ quy hoạch không gian, kết cấu, sân vườn và mức độ hoàn thiện.",
    image: "/images/bao-gia/xay-dung/kien-truc.webp",
  },
  {
    number: "03",
    title: "Cải tạo và hoàn thiện",
    description:
      "Khảo sát hiện trạng kỹ hơn để kiểm soát phương án, chi phí và tiến độ.",
    image: "/images/bao-gia/xay-dung/thiet-ke-nha-pho.webp",
  },
];

const process = [
  ["Tiếp nhận nhu cầu", "Loại hình nhà, diện tích đất, công năng và ngân sách dự kiến."],
  ["Khảo sát & đề xuất", "Đánh giá hiện trạng, pháp lý, điều kiện thi công và phương án phù hợp."],
  ["Chốt hồ sơ", "Thống nhất phạm vi thiết kế, vật liệu và tiêu chuẩn hoàn thiện."],
  ["Lập dự toán", "Bóc tách khối lượng, đơn vị tính và giá trị theo từng hạng mục."],
  ["Ký kết triển khai", "Chốt tiến độ, điều khoản thanh toán, bảo hành và trách nhiệm hai bên."],
];

export default function ArchitectureConstructionPricingPage() {
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
                <span>Báo giá kiến trúc & xây dựng</span>
              </nav>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Báo giá xây dựng
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.03] text-[#1f1a13] sm:text-6xl">
                Thiết kế kiến trúc
                <span className="block italic text-[#7f8169]">& xây dựng trọn gói</span>
              </h1>
              <p className="mt-6 max-w-[510px] text-base leading-8 text-[#584f43]">
                Báo giá được xây dựng từ quy mô thực tế, giải pháp kỹ thuật và mức đầu tư
                phù hợp với cách gia đình bạn muốn sống.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/lien-he" className="inline-flex min-h-12 items-center gap-2 bg-[#777b61] px-6 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#62674f]">
                  Nhận tư vấn
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <a href="tel:0903897555" className="inline-flex min-h-12 items-center gap-2 border border-[#b9a689] px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#5b4932] transition hover:bg-[#eee3d5]">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  0903.897.555
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[340px] lg:min-h-full">
            <Image src="/images/bao-gia/xay-dung/nha-pho.webp" alt="Thiết kế nhà phố" fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1d6c7] bg-[#fdfaf6]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {pricingPrinciples.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-[#e1d6c7] px-4 py-7 even:border-l lg:border-l lg:first:border-l-0 lg:px-7">
                <Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
                <h2 className="mt-4 text-sm font-bold text-[#3e352a]">{item.title}</h2>
                <p className="mt-2 text-xs leading-5 text-[#756b5e]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Từ bài viết gốc</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">
              Báo giá không chỉ là một con số,
              <span className="block italic text-[#7f8169]">mà là phương án phù hợp.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#62594d]">
              Tổ Ấm Hoàn Hảo lập dự toán kỹ để công trình đảm bảo thẩm mỹ, kỹ thuật,
              an toàn và phù hợp với bài toán tài chính của gia chủ.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#62594d]">
              Phạm vi tiếp nhận gồm nhà phố, biệt thự và các công trình cần thiết kế,
              xây dựng hoặc hoàn thiện theo yêu cầu.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {projectTypes.map((item) => (
              <article key={item.title} className="overflow-hidden border border-[#ded2c1] bg-[#fcf8f2]">
                <div className="relative aspect-[1.18]">
                  <Image src={item.image} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-[#a0783e]">{item.number}</p>
                  <h3 className="mt-3 font-serif text-2xl text-[#342c22]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b6154]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Báo giá xây dựng năm 2023</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">
              Các nội dung cần làm rõ trước khi chốt dự toán
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#6f6558]">
              Các chủ đề dưới đây được tổng hợp từ trang báo giá cũ. Mức giá và thông số
              theo thời điểm 2023 chỉ có giá trị tham khảo; báo giá chính thức sẽ được
              lập lại theo hiện trạng và vật liệu ở thời điểm triển khai.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {constructionPricingArticles.map((article, index) => (
              <Link key={article.slug} href={`/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi/${article.slug}`} className="group overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1">
                <div className="relative aspect-[1.7] overflow-hidden"><Image src={article.image} alt="" fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
                <div className="p-5">
                <span className="text-xs font-bold text-[#a0783e]">0{index + 1}</span>
                <h3 className="mt-3 text-base font-bold leading-6 text-[#40362b]">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6f6558]">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#70532b]">Xem chi tiết <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình lập báo giá</p>
            <h2 className="mt-3 font-serif text-4xl text-[#30291f]">Rõ từng bước, đúng từng hạng mục</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(([title, description], index) => (
              <article key={title} className="border border-[#ded2c1] bg-[#fcf8f2] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bfa681] text-sm font-serif text-[#855f2d]">{index + 1}</span>
                <h3 className="mt-5 text-sm font-bold text-[#3e352a]">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#756b5e]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e1d6c7] bg-[#3d382d] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <MapPinned aria-hidden="true" className="h-11 w-11 text-[#e0bc7a]" strokeWidth={1.1} />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6c897]">Nhận dự toán theo công trình</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Gửi nhu cầu để nhận tư vấn xây dựng phù hợp</h2>
            <p className="mt-4 max-w-[650px] text-sm leading-7 text-[#e8e0d5]">Đội ngũ sẽ trao đổi về loại hình nhà, diện tích, mức đầu tư và các điều kiện thực tế trước khi lên dự toán.</p>
          </div>
          <Link href="/lien-he" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#858a6c] px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#969c78]">
            Yêu cầu báo giá
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
