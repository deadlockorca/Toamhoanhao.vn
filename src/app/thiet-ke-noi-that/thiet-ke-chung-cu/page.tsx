import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Box,
  Building2,
  CalendarClock,
  Check,
  ClipboardCheck,
  Handshake,
  Leaf,
  Lightbulb,
  MessagesSquare,
  PenTool,
  Ruler,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  UsersRound,
  Wallet,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất chung cư | Tổ Ấm Hoàn Hảo",
  description:
    "Tư vấn thiết kế nội thất chung cư tối ưu, tiết kiệm chi phí và chuẩn đúng nhu cầu. Nhiều phong cách: Nhật Bản, Hàn Quốc, Âu Mỹ, Pháp, cổ điển, tân cổ điển, hiện đại.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type StyleFeature = { icon: LucideIcon; title: string; content: string; image: string };

const benefits: Feature[] = [
  {
    icon: UsersRound,
    title: "Dễ dàng thể hiện ý tưởng",
    content:
      "Với đội ngũ KTS dày dạn kinh nghiệm, bạn dễ dàng thể hiện ý tưởng cho tổ ấm của mình.",
  },
  {
    icon: WandSparkles,
    title: "Chuẩn như thiết kế",
    content:
      "Tự tin có một không gian đúng như trong mơ, chuẩn như thiết kế, tối ưu cho tinh thần và sức khỏe.",
  },
  {
    icon: PenTool,
    title: "Diễn họa 3D sinh động",
    content:
      "Mô tả không gian bằng 3D và thi công chuẩn như thiết kế, dễ dàng hình dung màu sắc, ánh sáng, chất liệu.",
  },
  {
    icon: CalendarClock,
    title: "Bền đẹp nhiều năm",
    content:
      "Với kinh nghiệm tích lũy 15 năm, tổ ấm của bạn luôn mới, đẹp và đáp ứng nhu cầu trong nhiều năm.",
  },
];

const styles: StyleFeature[] = [
  {
    icon: Leaf,
    title: "Phong cách Nhật Bản",
    content:
      "Tối giản, tinh tế, hòa hợp với thiên nhiên, màu sắc nhẹ nhàng. Giải pháp tiết kiệm chi phí mà vẫn cao cấp.",
    image: "/images/thiet-ke-noi-that/chung-cu/nhat-ban-1.webp",
  },
  {
    icon: Sparkles,
    title: "Phong cách Hàn Quốc",
    content:
      "Hiệu ứng tương phản với gam nền trắng, vàng nhạt và tông màu điểm nhấn đỏ, nâu, hồng, phá cách và tiện nghi.",
    image: "/images/thiet-ke-noi-that/chung-cu/han-quoc.webp",
  },
  {
    icon: Lightbulb,
    title: "Phong cách Âu Mỹ",
    content:
      "Ánh sáng và sự thoải mái là điểm nhấn xuyên suốt, cửa sổ lớn, phòng tràn ngập ánh sáng, nội thất bày trí tự do.",
    image: "/images/thiet-ke-noi-that/chung-cu/au-my.webp",
  },
  {
    icon: SwatchBook,
    title: "Phong cách Pháp",
    content:
      "Chất Gothic cổ Châu Âu với gam màu trung tính, vàng, nâu đậm, nổi bật khi dùng đồ cổ hoặc giả cổ trang trí.",
    image: "/images/thiet-ke-noi-that/chung-cu/phap.webp",
  },
  {
    icon: Building2,
    title: "Phong cách cổ điển",
    content:
      "Sang trọng, giàu có với gam màu trắng kết hợp nhiều họa tiết vàng kim, chất liệu tự nhiên và hoa văn cầu kỳ.",
    image: "/images/thiet-ke-noi-that/chung-cu/co-dien.webp",
  },
  {
    icon: Box,
    title: "Phong cách tân cổ điển",
    content:
      "Sự pha trộn giữa cổ điển và hiện đại, ít hoa văn hơn, chú trọng hài hòa, đối xứng và màu sắc nhã nhặn.",
    image: "/images/thiet-ke-noi-that/chung-cu/tan-co-dien.webp",
  },
  {
    icon: Ruler,
    title: "Phong cách hiện đại, đương đại",
    content:
      "Phổ biến nhất tại Việt Nam, tiện dụng, thông minh, tối ưu không gian sống vốn hạn chế của chung cư.",
    image: "/images/thiet-ke-noi-that/chung-cu/hien-dai.webp",
  },
];

const reasons: Feature[] = [
  {
    icon: Handshake,
    title: "Kinh nghiệm lâu năm",
    content:
      "KTS giàu kinh nghiệm luôn lắng nghe và tư vấn phương án thiết kế tối ưu, phù hợp nhu cầu trong dài hạn.",
  },
  {
    icon: ClipboardCheck,
    title: "Quy trình chuyên nghiệp",
    content:
      "Quy trình thiết kế khoa học, bạn ngồi cùng KTS đưa ý tưởng, trao đổi và thống nhất từ bản 2D đến diễn họa 3D.",
  },
  {
    icon: MessagesSquare,
    title: "Hiểu chính xác bạn cần gì",
    content:
      "Trải nghiệm hàng trăm công trình cùng tinh thần phục vụ chuyên nghiệp, chúng tôi hiểu sâu sắc nhu cầu của bạn.",
  },
  {
    icon: WandSparkles,
    title: "Diễn họa 3D xuất sắc",
    content:
      "100% khách hàng hài lòng khi tận mắt nhìn thấy bản thiết kế. Không ưng ý, bạn không phải trả phí.",
  },
];

const commitments = [
  "Giá thiết kế từ tốt đến miễn phí, chất lượng thiết kế không đổi",
  "Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu",
  "Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần là đủ",
  "Hầu như không phải bảo hành vì làm chuẩn ngay từ đầu",
];

const processSteps = [
  "Nhận yêu cầu tư vấn",
  "Hẹn gặp trao đổi nhu cầu",
  "Ký hợp đồng thiết kế",
  "Đo thực trạng, dựng 3D",
  "Bóc tách khối lượng",
  "Sản xuất tại xưởng",
  "Vận chuyển, lắp đặt",
];

export default function ApartmentInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Thiết kế chung cư</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thiết kế <em className="text-[#74785f]">chung cư</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Tư vấn thiết kế nội thất chung cư tối ưu, tiết kiệm và chuẩn đúng nhu cầu. Mọi khách hàng đều được miễn phí tư vấn và báo giá thiết kế với giá tốt nhất.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#phong-cach" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá phong cách</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/chung-cu/hero.webp" alt="Thiết kế nội thất chung cư hiện đại" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chúng tôi giải quyết mọi lo lắng của bạn</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đồng hành cùng tổ ấm của bạn</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Bạn đang tìm kiếm một đối tác có thể hoàn thiện ý tưởng căn hộ của mình hay một đơn vị tư vấn thiết kế nội thất chung cư chuyên nghiệp. Tổ Ấm Hoàn Hảo sẵn sàng đồng hành.</p></div><div className="grid gap-3 sm:grid-cols-2">{benefits.map((item) => { const Icon = item.icon; return <article key={item.title} className="min-h-[180px] border border-[#e0d5c6] p-6"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.25} /><p className="mt-6 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="mt-16 grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/chung-cu/uu-dai.webp" alt="Chìa khóa trao tay miễn phí phí thiết kế" width={493} height={142} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Sự kiện đặc biệt</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Gói Chìa khóa trao tay tiết kiệm</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Căn hộ chung cư 100m² phải chi từ 15 – 25 triệu tiền thiết kế. Sử dụng gói Thiết kế và Thi công nội thất trọn gói – Chìa khóa trao tay, bạn sẽ được miễn phí 100% phí thiết kế và tiết kiệm một số tiền không hề nhỏ.</p><p className="mt-4 text-sm leading-7 text-[#61584b]">Sản xuất nội thất tại xưởng 15-20 ngày, lắp đặt 1-2 ngày là hoàn thiện, giám sát thi công chặt chẽ, hầu như không có sai sót.</p></div></section>

        <section id="phong-cach" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Xu hướng phong cách</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Những phong cách thiết kế nên cân nhắc cho chung cư</h2><div className="mt-10 space-y-12">{styles.map((item) => { const Icon = item.icon; return <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2"><Image src={item.image} alt={item.title} width={918} height={610} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong cách</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lý do lựa chọn</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{reasons.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-7 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình làm việc</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><ShieldCheck aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Lắng nghe và thấu hiểu</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Khác với các đơn vị thiết kế – thi công nội thất khác, điều đầu tiên chúng tôi hướng tới chính là phương châm lắng nghe và thấu hiểu, giúp bạn có kế hoạch tài chính rõ ràng, hạn chế rủi ro và hoàn thiện đúng tiến độ.</p><div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Building2 aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng kiến tạo tổ ấm chung cư của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thiết kế và báo giá với giá tốt nhất, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
