import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  ClipboardCheck,
  FileSearch,
  House,
  Layers3,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";
import {
  getPricingArticleHref,
  pricingArticles,
} from "@/data/pricing-articles";

export const metadata: Metadata = {
  title: "Báo giá thiết kế thi công nội thất | Tổ Ấm Hoàn Hảo",
  description:
    "Phạm vi báo giá thiết kế, thi công và sản xuất nội thất trọn gói theo diện tích, vật liệu và nhu cầu thực tế.",
};

const pricingFactors = [
  {
    icon: Building2,
    title: "Quy mô công trình",
    content: "Diện tích, loại hình và số lượng không gian cần triển khai.",
  },
  {
    icon: Layers3,
    title: "Cấp độ vật liệu",
    content: "Cốt gỗ, bề mặt, đá, kim loại, vải và hệ phụ kiện lựa chọn.",
  },
  {
    icon: Sparkles,
    title: "Mức độ hoàn thiện",
    content: "Độ phức tạp của thiết kế, chi tiết gia công và yêu cầu thẩm mỹ.",
  },
  {
    icon: ClipboardCheck,
    title: "Điều kiện triển khai",
    content: "Hiện trạng, tiến độ, vận chuyển và điều kiện thi công thực tế.",
  },
];

const process = [
  {
    icon: FileSearch,
    title: "Tiếp nhận nhu cầu",
    content: "Ghi nhận loại hình, diện tích, phong cách và ngân sách dự kiến.",
  },
  {
    icon: House,
    title: "Khảo sát hiện trạng",
    content: "Đo đạc, kiểm tra kỹ thuật và điều kiện thi công thực tế.",
  },
  {
    icon: Ruler,
    title: "Chốt phương án",
    content: "Thống nhất công năng, vật liệu, khối lượng và tiêu chuẩn bàn giao.",
  },
  {
    icon: Banknote,
    title: "Lập báo giá",
    content: "Bóc tách từng hạng mục, đơn vị tính và giá trị dự toán rõ ràng.",
  },
  {
    icon: ShieldCheck,
    title: "Ký kết triển khai",
    content: "Chốt tiến độ, thanh toán, bảo hành và trách nhiệm hai bên.",
  },
];

const locations = [
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "TP. Thủ Đức",
  "Bình Dương",
  "Thanh Hóa",
  "Các tỉnh lân cận",
];

export default function InteriorPricingPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2d271f]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[560px] max-w-[1320px] pt-20 lg:grid-cols-[0.88fr_1.12fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-8 lg:py-12">
            <div className="max-w-[560px]">
              <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]">
                <Link href="/" className="transition hover:text-[#9a733e]">
                  Trang chủ
                </Link>
                <span className="mx-3">/</span>
                <span>Báo giá thiết kế thi công nội thất</span>
              </nav>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Báo giá nội thất
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.03] text-[#1f1a13] sm:text-6xl">
                Thiết kế & thi công
                <span className="block italic text-[#7f8169]">nội thất trọn gói</span>
              </h1>
              <p className="mt-6 max-w-[510px] text-base leading-8 text-[#584f43]">
                Báo giá được lập theo đúng diện tích, vật liệu và nhu cầu thực tế,
                giúp bạn nhìn rõ từng hạng mục trước khi triển khai.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ConsultationButton
                  className="inline-flex min-h-12 items-center gap-2 bg-[#777b61] px-6 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#62674f]"
                >
                  Nhận báo giá
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
              src="/images/bao-gia/hero.webp"
              alt="Không gian nội thất hoàn thiện"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1d6c7] bg-[#fdfaf6]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {pricingFactors.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="border-[#e1d6c7] px-4 py-7 even:border-l lg:border-l lg:first:border-l-0 lg:px-7"
              >
                <Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
                <h2 className="mt-4 text-sm font-bold text-[#3e352a]">{item.title}</h2>
                <p className="mt-2 text-xs leading-5 text-[#756b5e]">{item.content}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[930px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
              Thư viện báo giá
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">
              Bảng báo giá thiết kế và thi công trọn gói nội thất của Tổ Ấm Hoàn Hảo
            </h2>
            <p className="mt-5 max-w-[760px] text-sm leading-7 text-[#6f6558]">
              Tổng hợp 9 bài viết báo giá và gói hoàn thiện từ website cũ, giúp bạn
              tham khảo cách phân chia hạng mục, vật liệu và mức đầu tư trước khi
              nhận dự toán theo công trình thực tế.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pricingArticles.map((item, index) => (
              <Link
                key={item.slug}
                href={getPricingArticleHref(item.slug)}
                className="group flex min-h-full flex-col overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1 hover:border-[#b89a70] hover:shadow-[0_18px_45px_rgba(77,61,39,0.09)]"
              >
                <div className="relative aspect-[1.6] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 bg-[#f9f4ed]/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#805f32]">
                    {item.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold text-[#a0783e]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#332b21] sm:text-2xl">
                    {item.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.08em] text-[#725a36]">
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

          <div className="mt-8 border-l-2 border-[#a0783e] bg-[#f8f1e7] px-5 py-4 text-xs leading-6 text-[#6f6558]">
            Các gói 169, 250, 300 và 400 triệu là hồ sơ tham khảo từ website cũ,
            không phải báo giá hiện hành. Báo giá mới được bóc tách theo diện tích,
            vật liệu và thời điểm triển khai thực tế.
          </div>
        </div>
      </section>

      <section className="border-y border-[#e1d6c7] bg-[#fdfaf6] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
              Quy trình làm việc
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#30291f]">Từ nhu cầu đến báo giá chính thức</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="relative border border-[#ded2c1] p-5">
                  <span className="text-xs font-bold text-[#a0783e]">0{index + 1}</span>
                  <Icon aria-hidden="true" className="mt-5 h-8 w-8 text-[#9a733e]" strokeWidth={1.2} />
                  <h3 className="mt-5 text-sm font-bold text-[#3e352a]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-8 border border-[#ded2c1] bg-[#f3eade] p-7 lg:grid-cols-[1fr_1.25fr] lg:p-10">
          <div>
            <MapPin aria-hidden="true" className="h-9 w-9 text-[#9a733e]" strokeWidth={1.2} />
            <h2 className="mt-5 font-serif text-3xl text-[#30291f]">Khu vực tiếp nhận công trình</h2>
            <p className="mt-4 max-w-[500px] text-sm leading-7 text-[#695f52]">
              Nội dung website cũ ghi nhận hệ thống văn phòng và xưởng tại nhiều khu vực.
              Phạm vi triển khai cụ thể sẽ được xác nhận theo địa điểm và quy mô công trình.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px border border-[#d7c9b6] bg-[#d7c9b6] sm:grid-cols-3">
            {locations.map((location) => (
              <div key={location} className="flex min-h-20 items-center gap-3 bg-[#fbf7f1] px-4 py-3">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-[#9a733e]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#574b3d]">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#3d382d] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/bao-gia/tu-bep.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#302b22]/75" />
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6c897]">Nhận dự toán theo nhu cầu</p>
          <h2 className="mt-4 max-w-[760px] font-serif text-4xl leading-tight sm:text-5xl">
            Gửi mặt bằng để nhận phạm vi báo giá phù hợp
          </h2>
          <p className="mt-5 max-w-[680px] text-sm leading-7 text-[#e8e0d5]">
            Đội ngũ sẽ trao đổi nhu cầu, vật liệu và tiến độ dự kiến trước khi lập
            bảng khối lượng chi tiết cho công trình của bạn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ConsultationButton
              className="inline-flex min-h-12 items-center gap-2 bg-[#858a6c] px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#969c78]"
            >
              Yêu cầu báo giá
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ConsultationButton>
            <a
              href="tel:0903897555"
              className="inline-flex min-h-12 items-center gap-2 border border-white/50 px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
            >
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
