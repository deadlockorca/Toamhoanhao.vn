import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BedDouble,
  Check,
  ClipboardCheck,
  Compass,
  Cpu,
  Handshake,
  Moon,
  Palette,
  ShieldCheck,
  Sparkles,
  Tv,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất phòng ngủ | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế nội thất phòng ngủ nâng niu giấc ngủ dịu êm: chuẩn phong thủy, hạn chế thiết bị điện tử, nội thất đơn giản hài hòa và lựa chọn màu sắc phù hợp.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type TipFeature = Feature & { image: string };

const tips: TipFeature[] = [
  {
    icon: Compass,
    title: "Chuẩn phong thủy",
    content:
      "Phòng ngủ không được thiết kế méo mó, nhiều góc nhọn. Chúng sẽ gây ức chế tâm lý, mệt mỏi và gây hại không nhỏ đến sức khỏe.",
    image: "/images/thiet-ke-noi-that/phong-ngu/phong-thuy.webp",
  },
  {
    icon: Tv,
    title: "Hạn chế thiết bị điện tử",
    content:
      "Thiết bị điện tử gây mất tập trung và ảnh hưởng đến sức khỏe bởi sóng điện từ. Nên hạn chế tối đa các thiết bị điện tử trong phòng ngủ.",
    image: "/images/thiet-ke-noi-that/phong-ngu/thiet-bi.webp",
  },
  {
    icon: BedDouble,
    title: "Nội thất đơn giản, hài hòa",
    content:
      "Từ giường, tủ quần áo, bàn trang điểm đến sàn nhà, màu sơn, ánh đèn không cần đồng bộ nhưng phải ăn nhập với nhau.",
    image: "/images/thiet-ke-noi-that/phong-ngu/don-gian.webp",
  },
  {
    icon: Palette,
    title: "Chọn màu sắc theo phong thủy",
    content:
      "Phòng ngủ nên dùng nhiều gam màu năng lượng âm, thúc đẩy giấc ngủ sâu và tạo nguồn năng lượng tích cực.",
    image: "/images/thiet-ke-noi-that/phong-ngu/mau-sac.webp",
  },
];

const colorTips = [
  "Đen, xanh lam, xanh lơ, xám mang lại sự thanh bình, yên tĩnh.",
  "Nâu kết nối nguồn năng lượng thổ với sự cân bằng, nhịp nhàng.",
  "Xanh lục tạo sự mới mẻ và tràn đầy sinh lực.",
  "Vàng đem đến cảm giác sôi nổi, đắm chìm trong ánh nắng.",
  "Tím, đỏ kích thích sự hứng khởi và tràn đầy năng lượng.",
  "Hồng, cam tạo sự sáng tạo và năng lượng tươi mới.",
  "Trắng, tím mang đến những cảm xúc yêu thương.",
  "Bạc, thiếc, đồng tạo cảm giác sinh động, vui tươi.",
];

const services = [
  "Tư vấn thiết kế kiến trúc, phần thô phòng ngủ",
  "Tư vấn thiết kế và chọn lựa nội thất phòng ngủ",
  "Cung cấp sản phẩm nội thất phòng ngủ đa dạng, chất lượng cao",
  "Gia công nội thất phòng ngủ theo kiểu dáng, kích thước yêu cầu",
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

export default function BedroomInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Nội thất phòng ngủ</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Nội thất <em className="text-[#74785f]">phòng ngủ</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Giấc ngủ đóng vai trò quan trọng trong cuộc sống và sức khỏe. Không gian phòng ngủ là yếu tố ảnh hưởng rất lớn đến chất lượng giấc ngủ của bạn.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#nguyen-tac" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá nguyên tắc</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/phong-ngu/hero.webp" alt="Thiết kế nội thất phòng ngủ" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="nguyen-tac" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Những điều bắt buộc phải biết</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Thiết kế phòng ngủ và những điều không thể bỏ qua</h2><div className="mt-10 space-y-12">{tips.map((item) => { const Icon = item.icon; return <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2"><Image src={item.image} alt={item.title} width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Nguyên tắc</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ý nghĩa màu sắc</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Lựa chọn và kết hợp màu sắc theo phong thủy</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Theo các chuyên gia phong thủy, phòng ngủ nên sử dụng nhiều gam màu của năng lượng âm, bởi năng lượng âm có tác dụng thúc đẩy và tạo ra nguồn năng lượng tích cực cho giấc ngủ.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{colorTips.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Sparkles aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Dịch vụ của chúng tôi</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{services.map((item) => <div key={item} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><div className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div></div>)}</div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình làm việc</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Moon aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Thiết kế phòng ngủ hợp gia chủ cùng Tổ Ấm Hoàn Hảo</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Đội ngũ kiến trúc sư và chuyên gia phong thủy của chúng tôi sẽ đưa ra những phương án tối ưu nhất dựa trên khảo sát công trình thực tế, lắng nghe và thấu hiểu yêu cầu của khách hàng.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><WandSparkles aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng nâng niu giấc ngủ của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thiết kế nội thất phòng ngủ, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
