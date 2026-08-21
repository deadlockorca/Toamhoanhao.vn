import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarClock,
  Check,
  Handshake,
  Lightbulb,
  MessageSquareText,
  Palette,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Trophy,
  Wallet,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Thiết kế showroom | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế showroom ấn tượng, chi phí hiệu quả cho khởi đầu hoàn hảo. Màu sắc, ánh sáng và phong cách chuẩn thương hiệu, giúp showroom hút khách.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const yếuTố: Feature[] = [
  {
    icon: Palette,
    title: "Màu sắc",
    content:
      "Phong cách trang trí nên đi đôi với màu sắc thương hiệu, bổ sung giấy dán tường hoa văn để kích thích người dùng tìm đến showroom.",
  },
  {
    icon: Lightbulb,
    title: "Ánh sáng",
    content:
      "Ánh sáng tạo nên bầu không khí và thiết lập tâm trạng cho showroom, đồng thời là cách nhanh chóng khắc phục khuyết điểm của không gian.",
  },
];

const reasons: Feature[] = [
  {
    icon: Trophy,
    title: "Kinh nghiệm lâu năm",
    content:
      "Bề dày kinh nghiệm thiết kế thi công nội thất, hàng trăm khách hàng đã sử dụng dịch vụ và hoàn toàn hài lòng.",
  },
  {
    icon: Wallet,
    title: "Kế hoạch tài chính rõ ràng",
    content:
      "Kế hoạch tài chính đầu tư rõ ràng, hạn chế rủi ro và phát sinh ngoài ý muốn.",
  },
  {
    icon: CalendarClock,
    title: "Thời gian thi công nhanh",
    content:
      "Công trình thi công hoàn thiện đúng tiến độ, đúng cam kết với khách hàng.",
  },
  {
    icon: PiggyBank,
    title: "Mức giá cạnh tranh",
    content:
      "Báo giá thiết kế showroom hợp lý, cạnh tranh nhưng vẫn đảm bảo chất lượng công trình.",
  },
  {
    icon: Handshake,
    title: "Thanh toán linh hoạt",
    content:
      "Hình thức thanh toán phù hợp, giúp bạn chủ động theo từng giai đoạn.",
  },
];

const benefits = [
  "Sở hữu showroom hoàn hảo và chuyên nghiệp tới từng chi tiết",
  "Không gian nổi bật, phong cách trưng bày khoa học",
  "Tăng tỉ lệ tương tác giữa khách hàng và sản phẩm thực tế",
  "Tạo dấu ấn thương hiệu qua thiết kế",
  "Đánh bật mọi đối thủ cạnh tranh",
];

const commitments = [
  "Giá cả tốt nhất so với thị trường",
  "Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu",
  "Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần",
  "Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp",
];

export default function ShowroomDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Thiết kế showroom</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thiết kế <em className="text-[#74785f]">showroom</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Showroom là nơi trưng bày sản phẩm, quảng bá thương hiệu và là bộ mặt của toàn công ty. Một không gian showroom đẹp, ấn tượng và thu hút thể hiện tầm vóc, sự chuyên nghiệp của doanh nghiệp.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#yeu-to" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá thiết kế</a><a href="#tu-van" className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</a></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/showroom/hero.webp" alt="Thiết kế showroom ấn tượng" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="yeu-to" className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">2 yếu tố không thể bỏ qua</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Showroom hút khách nhờ màu sắc và ánh sáng</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Bằng kiến thức và am hiểu sâu sắc về kiến trúc và hội họa, đội ngũ thiết kế của Tổ Ấm Hoàn Hảo đã thành công trong việc tư vấn và thiết kế nhiều showroom chuẩn phong cách, sáng tạo, bắt mắt và được khách hàng đánh giá cao.</p></div><div className="grid gap-3 sm:grid-cols-2">{yếuTố.map((item) => { const Icon = item.icon; return <article key={item.title} className="min-h-[200px] border border-[#e0d5c6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><p className="mt-6 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</p><p className="mt-4 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="mt-16 grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/showroom/mau-sac.webp" alt="Phong cách trang trí đi đôi với màu sắc thương hiệu" width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Màu sắc thương hiệu</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đồng nhất từ phong cách đến màu sắc</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Để tạo ra một showroom hợp lý và đồng nhất, phong cách trang trí nên đi đôi với màu sắc thương hiệu. Bổ sung các loại giấy dán tường có họa tiết hoa văn sẽ kích thích người dùng, khiến họ tự động tìm đến với showroom của bạn.</p><p className="mt-4 text-sm leading-7 text-[#61584b]">Ánh sáng là yếu tố quan trọng quyết định showroom có hút khách hay không, tạo nên bầu không khí của địa điểm và thiết lập tâm trạng trong không gian, đặc biệt hữu ích với các nhà bán lẻ có ngân sách hạn chế.</p></div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tại sao chọn chúng tôi</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{reasons.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-7 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lợi ích dịch vụ</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Lợi ích khi sử dụng dịch vụ thiết kế showroom</h2></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{benefits.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><ShieldCheck aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Tổ Ấm Hoàn Hảo luôn cam kết với khách hàng</h2><div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Store aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng kiến tạo showroom khởi đầu cho thành công?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất showroom, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><a href="#tu-van" className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</a><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
