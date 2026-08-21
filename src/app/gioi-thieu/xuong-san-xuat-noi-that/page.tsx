import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Box,
  Building2,
  Check,
  ClipboardCheck,
  Cog,
  HeartHandshake,
  MapPinned,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  WandSparkles,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Xưởng sản xuất nội thất | Tổ Ấm Hoàn Hảo",
  description:
    "Xưởng sản xuất nội thất, hệ thống máy móc và quy trình hoàn thiện của Tổ Ấm Hoàn Hảo.",
};

type IconCard = { icon: LucideIcon; title: string; content: string };

const metrics: IconCard[] = [
  { icon: Building2, title: "500m²+", content: "Diện tích xưởng" },
  { icon: UsersRound, title: "50+", content: "Nhân sự lành nghề" },
  { icon: Box, title: "1000+", content: "Sản phẩm hoàn thiện" },
  { icon: MapPinned, title: "Nhiều", content: "Tỉnh thành hoạt động" },
  { icon: BadgeCheck, title: "98%", content: "Khách hàng hài lòng" },
  { icon: ShieldCheck, title: "Kiểm soát", content: "Chất lượng chặt chẽ" },
];

const capabilities: IconCard[] = [
  { icon: Cog, title: "Gia công gỗ công nghiệp", content: "Cắt, khoan, phay, soi rãnh trên hệ thống máy hiện đại, đảm bảo độ chính xác." },
  { icon: WandSparkles, title: "Sản xuất theo yêu cầu", content: "Thiết kế và sản xuất theo kích thước, kiểu dáng, vật liệu phù hợp với từng không gian." },
  { icon: Palette, title: "Hoàn thiện bề mặt", content: "Đa dạng bề mặt melamine, veneer, sơn PU, acrylic và các lựa chọn theo yêu cầu." },
  { icon: ClipboardCheck, title: "Kiểm soát kỹ thuật", content: "Quy trình kiểm tra nhiều lớp, đảm bảo sản phẩm đạt tiêu chuẩn trước khi xuất xưởng." },
];

const productionSteps: IconCard[] = [
  { icon: ClipboardCheck, title: "Tiếp nhận bản vẽ", content: "Nhận hồ sơ thiết kế, yêu cầu và tư vấn kỹ thuật." },
  { icon: Box, title: "Bóc tách vật liệu", content: "Bóc tách khối lượng, lựa chọn vật liệu phù hợp." },
  { icon: Cog, title: "Gia công sản xuất", content: "Gia công chính xác trên hệ thống máy móc hiện đại." },
  { icon: PackageCheck, title: "Lắp ráp hoàn thiện", content: "Lắp ráp, dán cạnh, hoàn thiện bề mặt theo tiêu chuẩn." },
  { icon: ShieldCheck, title: "Kiểm tra chất lượng", content: "Kiểm tra chất lượng, đảm bảo đúng thiết kế và độ hoàn thiện." },
  { icon: Truck, title: "Vận chuyển & lắp đặt", content: "Đóng gói, vận chuyển và lắp đặt tại công trình đúng tiến độ." },
];

const strengths = [
  "Chủ động tiến độ, kiểm soát quy trình từ bản vẽ đến sản xuất và thi công.",
  "Tối ưu chi phí, lựa chọn giải pháp phù hợp với mức đầu tư.",
  "Đồng bộ chất lượng, kiểm soát nhất quán từ xưởng đến công trình.",
  "Sản xuất theo yêu cầu, linh hoạt kích thước, kiểu dáng và công năng.",
  "Kiểm soát chi tiết tại từng công đoạn, đảm bảo sự chính xác.",
  "Hậu mãi thuận tiện, dễ dàng bảo hành, bảo trì và thay thế khi cần thiết.",
];

function MediaSlot({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`border border-dashed border-[#d7c8b4] bg-[#efe5d7]/55 ${className}`} />;
}

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/gioi-thieu" className="transition hover:text-[#9a733e]">Giới thiệu</Link><span className="mx-3">/</span><span>Xưởng sản xuất nội thất</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Giới thiệu</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Xưởng sản xuất <em className="text-[#74785f]">nội thất</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Xưởng sản xuất nội thất hiện đại giúp chúng tôi chủ động kiểm soát chất lượng trong từng công đoạn, mang đến giải pháp phù hợp, bền đẹp và tối ưu chi phí cho mỗi gia đình.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#nang-luc-xuong" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Tham quan xưởng</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/xuong-san-xuat/banner.png" alt="Không gian xưởng sản xuất nội thất Tổ Ấm Hoàn Hảo" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tổng quan xưởng sản xuất</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Chủ động chất lượng ở từng công đoạn</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Xưởng được đầu tư hệ thống máy móc hiện đại, đội ngũ lành nghề và quy trình kiểm soát chất lượng rõ ràng.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{metrics.map((item) => { const Icon = item.icon; return <article key={item.title} className="min-h-[144px] border border-[#e0d5c6] p-5"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="mt-5 font-serif text-2xl text-[#322b21]">{item.title}</p><p className="mt-1 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section id="nang-luc-xuong" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Năng lực sản xuất</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-8 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-4 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình sản xuất</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{productionSteps.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><Icon aria-hidden="true" className="mt-5 h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Vật liệu & hoàn thiện</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Lựa chọn kỹ để bền đẹp dài lâu</h2><ul className="mt-5 space-y-2 text-sm leading-6 text-[#61584b]"><li>• Vật liệu được chọn lọc từ các thương hiệu uy tín.</li><li>• Đa dạng chủng loại, màu sắc và bề mặt hoàn thiện.</li><li>• Ưu tiên tính thẩm mỹ, độ bền và ứng dụng thực tế.</li></ul></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{["Gỗ công nghiệp", "Melamine", "Laminate", "Acrylic", "Veneer", "Vải bọc", "Đá tự nhiên"].map((material) => <div key={material}><MediaSlot className="aspect-square" /><p className="mt-2 text-center text-[11px] leading-4 text-[#70665a]">{material}</p></div>)}</div></div></section>

        <section className="grid gap-9 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-20"><MediaSlot className="min-h-[380px]" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ưu điểm khi có xưởng riêng</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Chủ động hơn cho từng công trình</h2><div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">{strengths.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><HeartHandshake aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết từ xưởng sản xuất</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Tận tâm trong từng sản phẩm nội thất</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Chúng tôi cam kết mang đến những sản phẩm nội thất chất lượng cao, bền đẹp và an toàn cho sử dụng, được kiểm soát từ bản vẽ đến khi lắp đặt hoàn thiện.</p></div></div></section>
      </div>

      <section id="tu-van" className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Sparkles aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng hiện thực hóa nội thất cho tổ ấm của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Đội ngũ Tổ Ấm Hoàn Hảo luôn sẵn sàng tư vấn và đề xuất giải pháp phù hợp nhất.</p><ConsultationButton className="mt-8 inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton></div></section>
      <SiteFooter />
    </main>
  );
}
