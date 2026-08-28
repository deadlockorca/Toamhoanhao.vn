import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  Check,
  ClipboardCheck,
  Handshake,
  Heart,
  Lightbulb,
  PiggyBank,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wallet,
  WandSparkles,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất biệt thự | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế biệt thự trọn gói từ A-Z với chi phí tối ưu, tiết kiệm và trung thực. Phong cách tân cổ điển, cổ điển, hiện đại và đương đại.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const difficulties: Feature[] = [
  {
    icon: Lightbulb,
    title: "Mong muốn, ý tưởng",
    content:
      "Khó khăn trong việc thể hiện mong muốn về căn nhà mơ ước, không chắc chắn sau thi công có theo đúng ý tưởng hay chưa tối ưu.",
  },
  {
    icon: Wallet,
    title: "Chi phí và hiệu quả",
    content:
      "Không am hiểu thị trường vật liệu, nội thất dẫn đến lãng phí, khó phân bổ ngân sách và không có thời gian tìm hiểu.",
  },
  {
    icon: ClipboardCheck,
    title: "Giám sát chất lượng và tiến độ",
    content:
      "Không có kĩ năng giám sát đúng thiết kế, quản lý xuất nhập vật liệu khó khăn, lo lắng thi công không đúng tiêu chuẩn.",
  },
  {
    icon: ShieldCheck,
    title: "Độ bền công trình",
    content:
      "Lo lắng vật liệu, chất lượng thi công xuống cấp nhanh, không có đơn vị đảm bảo độ bền và bảo trì sau bàn giao.",
  },
];

const benefits = [
  "Tiết kiệm được chi phí lớn trong quá trình xây dựng thiết kế",
  "Thiết kế đẹp từng góc cạnh giúp thi công dễ dàng, hoàn thành tiến độ nhanh chóng",
  "Sản phẩm thiết kế chuyên nghiệp, độc đáo, luôn có ưu đãi lớn",
];

const commitments = [
  "Giá cả tốt nhất so với thị trường",
  "Sản phẩm đúng ý tưởng, chất lượng và thẩm mỹ",
  "Giao hàng nguyên vẹn, đúng tiến độ",
];

const styles = ["Tân cổ điển", "Cổ điển", "Hiện đại", "Đương đại"];

export default function VillaInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Thiết kế nội thất biệt thự</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thiết kế <em className="not-italic">biệt thự</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Tổ Ấm Hoàn Hảo chuyên thiết kế nội thất biệt thự phong cách tân cổ điển, cổ điển, hiện đại và đương đại, với gói giải pháp thiết kế và thi công trọn gói chất lượng cao cấp và bền bỉ.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#kho-khan" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá dịch vụ</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/biet-thu/hero.webp" alt="Thiết kế nội thất biệt thự cao cấp" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Báo giá thiết kế</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Chi phí minh bạch, ưu đãi theo từng thời điểm</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Chi phí thiết kế nội thất biệt thự thường khoảng 250.000 VNĐ/m². Tổ Ấm Hoàn Hảo luôn có những gói thiết kế nội thất cực kỳ ưu đãi theo từng thời điểm.</p></div><div className="grid gap-3 sm:grid-cols-2">{styles.map((style) => <article key={style} className="flex min-h-[96px] items-center justify-center border border-[#e0d5c6] p-5 text-center"><p className="text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{style}</p></article>)}</div></section>

        <section className="mt-16 grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/biet-thu/bao-gia.webp" alt="Báo giá thiết kế nội thất biệt thự" width={530} height={278} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong thủy và tự nhiên</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Hài hòa với thiên nhiên và phong thủy</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Thiết kế nội thất biệt thự cần chú ý các yếu tố tự nhiên như hướng nắng, hướng gió và hướng cửa chính theo phong thủy, tạo bản thiết kế đẹp, sắp xếp hợp lý công năng mà không phạm yếu tố kiêng kỵ, tránh nắng nóng và đón gió mát tự nhiên cho mỗi căn phòng.</p></div></section>

        <section id="kho-khan" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Bạn đừng lo</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Những khó khăn khách hàng hay gặp khi thiết kế biệt thự</h2><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{difficulties.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-7 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div><p className="mt-10 text-center font-serif text-3xl text-[#30291f]">Bạn đừng lo, chúng tôi sẽ giải quyết tất cả!</p></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lợi ích</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Lợi ích khi sử dụng dịch vụ thiết kế biệt thự</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với đội ngũ kiến trúc sư, kĩ thuật viên nhiệt tình, sáng tạo, đầy chuyên môn và kinh nghiệm, chúng tôi sẽ giúp hoàn thiện hóa, tạo dựng ý tưởng về không gian đẹp mắt và tiện nghi.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{benefits.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Handshake aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Bảo hành, bảo trì tận tâm và chuyên nghiệp</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Lựa chọn dịch vụ thiết kế biệt thự của Tổ Ấm Hoàn Hảo, bạn sẽ được tư vấn chu đáo từ các chuyên gia, có những thiết kế chi tiết nhất về không gian và phương án tối ưu phù hợp hạn mức đầu tư.</p><div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Building2 aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng kiến tạo biệt thự trong mơ của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thiết kế biệt thự, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
