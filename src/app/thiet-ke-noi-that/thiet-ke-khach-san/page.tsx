import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardCheck,
  Crown,
  DoorOpen,
  Hotel,
  MessageSquareText,
  Ruler,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất khách sạn | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế nội thất khách sạn 5 sao, 3 sao, khách sạn mini sang trọng, tiện nghi, đẳng cấp. Tư vấn thiết kế thi công trọn gói, đúng tiến độ và chi phí hợp lý.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const hotelTypes: Feature[] = [
  {
    icon: Crown,
    title: "Khách sạn 5 sao đẳng cấp",
    content:
      "Hướng đến phân khúc khách hàng hạng sang, thiết kế chú trọng sự sang trọng, tiện nghi và đẳng cấp ở từng không gian.",
  },
  {
    icon: Hotel,
    title: "Khách sạn 3 sao ấn tượng",
    content:
      "Đảm bảo sự tiện nghi, lịch sự và tính thẩm mỹ cao với quy mô vừa phải, tối ưu không gian cho khách hàng thoải mái.",
  },
  {
    icon: DoorOpen,
    title: "Khách sạn mini độc đáo",
    content:
      "Giải pháp tối ưu cho diện tích vừa và nhỏ, giản lược chi tiết thừa để không gian thông thoáng, dễ chịu.",
  },
];

const hạngMục: Feature[] = [
  { icon: DoorOpen, title: "Sảnh lễ tân", content: "Thiết kế sảnh đón tiếp ấn tượng, thể hiện đẳng cấp thương hiệu ngay từ lối vào." },
  { icon: UsersRound, title: "Phòng ngủ", content: "Phòng nghỉ tiện nghi, ấm cúng và thư giãn, phù hợp từng phân khúc khách hàng." },
  { icon: Sparkles, title: "Nhà tắm – vệ sinh", content: "Không gian vệ sinh sạch sẽ, sang trọng và công năng tối ưu." },
  { icon: BadgeCheck, title: "Khu phục vụ chung", content: "Nhà hàng, bể bơi, quán cà phê, spa… cho khách sạn 4-5 sao." },
  { icon: SwatchBook, title: "Tiểu cảnh, sân vườn", content: "Thiết kế cảnh quan xanh, điểm nhấn ngoài trời nếu có." },
];

const processSteps = [
  "Tiếp nhận yêu cầu của khách hàng",
  "Khảo sát hiện trạng công trình",
  "Báo giá",
  "Ký kết hợp đồng",
  "Sản xuất và thi công lắp đặt",
  "Nghiệm thu và bàn giao công trình",
  "Thanh lý hợp đồng và bảo hành",
];

const commitments = [
  "Tư vấn tận tâm và hoàn toàn miễn phí từ các chuyên gia hàng đầu",
  "Được lắng nghe tâm tư, nguyện vọng một cách cởi mở nhất",
  "Được cung cấp các phương án thiết kế sát ý tưởng gia chủ nhất",
  "Được lựa chọn thực thi một phương án thiết kế tối ưu nhất",
  "Chi phí, giá thành hợp lý nhất",
];

export default function HotelInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Thiết kế khách sạn</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thiết kế <em className="whitespace-nowrap not-italic">khách sạn</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Khách sạn không chỉ là nơi trú chân mà còn là không gian trải nghiệm. Thiết kế nội thất khách sạn sang trọng, tiện nghi sẽ để lại ấn tượng khó quên trong lòng mỗi du khách.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#hinh-thuc" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá thiết kế</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/khach-san/banner.webp" alt="Thiết kế nội thất khách sạn sang trọng" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tổng quan</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đẳng cấp tạo nên danh tiếng</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Thiết kế khách sạn đẹp phải phù hợp với đối tượng khách hàng, vừa thể hiện bản sắc và đẳng cấp thương hiệu, để lại ấn tượng trong lòng mỗi du khách ghé thăm.</p></div><div className="grid gap-3 sm:grid-cols-3">{hotelTypes.map((item) => { const Icon = item.icon; return <article key={item.title} className="min-h-[190px] border border-[#e0d5c6] p-5"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="mt-5 font-serif text-xl leading-6 text-[#322b21]">{item.title}</p><p className="mt-2 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section id="hinh-thuc" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong cách thiết kế</p><div className="mt-8 space-y-14">
          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/khach-san/khach-san-5-sao.webp" alt="Thiết kế nội thất khách sạn 5 sao sang trọng" width={600} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Khách sạn 5 sao</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đẳng cấp, hiện đại, sang trọng</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Khách sạn 5 sao phục vụ chủ yếu phân khúc khách hàng hạng sang, tầm cỡ doanh nhân lớn. Vì vậy yêu cầu về tính sang trọng, tiện nghi, đẳng cấp luôn được đặt lên hàng đầu.</p><p className="mt-4 text-sm leading-7 text-[#61584b]">Từ sảnh lễ tân, phòng ngủ, phòng tập gym, bể bơi, spa đến nhà hàng đều phải được thiết kế ấn tượng, đáp ứng quy mô và tầm cỡ công trình.</p></div></div>

          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/khach-san/khach-san-3-sao.webp" alt="Thiết kế nội thất khách sạn 3 sao" width={660} height={367} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Khách sạn 3 sao</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Tiện nghi, lịch sự, thẩm mỹ</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Không đòi hỏi cầu kỳ, hoành tráng như khách sạn 5 sao nhưng vẫn phải đảm bảo sự tiện nghi, lịch sự và tính thẩm mỹ cao, tạo cảm giác thoải mái khi sử dụng dịch vụ, đồng thời tiết kiệm không gian.</p></div></div>

          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/khach-san/khach-san-mini.webp" alt="Thiết kế nội thất khách sạn mini" width={1046} height={713} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Khách sạn mini</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đơn giản mà độc đáo</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với mảnh đất vừa hay nhỏ muốn đầu tư kinh doanh, khách sạn mini là phương án tối ưu. Các kiến trúc sư giàu kinh nghiệm sẽ giúp bạn giải quyết trọn vẹn bài toán không gian.</p><p className="mt-4 text-sm leading-7 text-[#61584b]">Có thể thiết kế theo phong cách hoàng gia, tân cổ điển hoặc hiện đại, giản lược các vật dụng không cần thiết để không gian thông thoáng, dễ chịu nhất.</p></div></div>
        </div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Các hạng mục</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Trọn vẹn từng không gian khách sạn</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với năng lực thực tế và tâm huyết nghề nghiệp, chúng tôi cung cấp dịch vụ thiết kế – thi công trọn gói, đảm bảo chất lượng tốt nhất và chi phí hợp lý nhất.</p></div><div className="grid gap-3 sm:grid-cols-2">{hạngMục.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-6 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình làm việc</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Tận tâm trong từng công trình khách sạn</h2><div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div><div className="mt-9 border-t border-[#e0d5c6] pt-7 flex items-center gap-4"><WandSparkles aria-hidden="true" className="h-9 w-9 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><p className="text-sm leading-6 text-[#61584b]">Chúng tôi tự hào mang đến những không gian lý tưởng nhất. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn như phục vụ những người thân yêu trong chính gia đình mình.</p></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><MessageSquareText aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất khách sạn, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
