import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  BadgeCheck,
  Blocks,
  CalendarClock,
  Check,
  ClipboardCheck,
  Handshake,
  Leaf,
  Lightbulb,
  Ruler,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất nhà phố | Tổ Ấm Hoàn Hảo",
  description:
    "Bí quyết thiết kế nội thất nhà phố độc lạ: hiện đại tăng sức hút, điểm nhấn vật liệu trang trí, phân bổ diện tích đồng đều và hài hòa với thiên nhiên.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const bíQuyết: Feature[] = [
  {
    icon: Lightbulb,
    title: "Thiết kế hiện đại tăng sức hút",
    content:
      "Lựa chọn nội thất hiện đại vừa đáp ứng yếu tố đẹp, độc đáo, vừa tích hợp công năng và phù hợp với nguồn tài chính của gia đình.",
  },
  {
    icon: SwatchBook,
    title: "Điểm nhấn từ vật liệu trang trí",
    content:
      "Ngoài gỗ, gạch ốp tường… cần phối hợp màu sắc và đồ dùng trong gia đình để tăng sức hút cho ngôi nhà.",
  },
  {
    icon: Ruler,
    title: "Phân bổ diện tích đồng đều",
    content:
      "Diện tích nhà phố phải phù hợp với đồ nội thất, kiến trúc sắp xếp thành đường, mảng, khối tạo không gian thoáng đãng, chú trọng ánh sáng.",
  },
  {
    icon: Leaf,
    title: "Hài hòa với thiên nhiên",
    content:
      "Yếu tố chủ chốt giúp điều hòa sinh khí, tăng cường bầu không khí trong lành và cân bằng cuộc sống trong ngôi nhà.",
  },
];

const reasons = [
  "Hợp lý về công năng sử dụng và thẩm mỹ",
  "Lấy nhu cầu của khách hàng làm trọng tâm của những sáng tạo",
  "Thực hiện đúng tiến độ công trình",
  "Đảm bảo chất lượng công trình theo cam kết",
  "Đảm bảo quy trình thi công và bảo hành sản phẩm",
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

export default function TownhouseInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Thiết kế nhà phố</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thiết kế <em className="not-italic">nhà phố</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Nắm được những bí quyết thiết kế nội thất nhà phố độc lạ, bạn sẽ có một không gian sống mang cá tính và màu sắc riêng biệt khiến bất cứ ai đến tham quan đều ngưỡng mộ.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#bi-quyet" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá bí quyết</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/nha-pho/hero.webp" alt="Thiết kế nội thất nhà phố hiện đại" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="bi-quyet" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Bí quyết thiết kế</p><h2 className="mx-auto mt-4 max-w-[620px] text-center font-serif text-3xl leading-tight text-[#30291f]">Bật mí bí quyết thiết kế nhà phố độc lạ</h2><div className="mt-10 grid gap-3 sm:grid-cols-2">{bíQuyết.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-6 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-4 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section className="space-y-14">
          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/nha-pho/hien-dai.webp" alt="Thiết kế nội thất nhà phố hiện đại" width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong cách hiện đại</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đẹp, độc đáo và tích hợp công năng</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Bí quyết đầu tiên để một căn nhà phố trở nên bắt mắt chính là lựa chọn thiết kế nội thất hiện đại. Không chỉ đáp ứng yếu tố đẹp, độc đáo, những mẫu thiết kế này còn vừa tích hợp công năng, vừa phù hợp với nguồn tài chính của gia đình.</p></div></div>

          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/nha-pho/vat-lieu.webp" alt="Điểm nhấn từ vật liệu trang trí nhà phố" width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Vật liệu trang trí</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Điểm nhấn hoàn hảo cho không gian</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với thiết kế nội thất nhà phố, ngoài việc tận dụng những vật liệu chính như gỗ, gạch ốp tường, cần làm tăng sức hút cho ngôi nhà bằng cách phối hợp các màu sắc và đồ dùng trong gia đình với nhau.</p></div></div>

          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/nha-pho/phan-bo-dien-tich.webp" alt="Phân bổ diện tích đồng đều trong thiết kế nhà phố" width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Không gian</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Phân bổ diện tích đồng đều</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Diện tích nhà phố phải phù hợp với đồ nội thất, không nên sử dụng các đồ nội thất quá lớn trong khi diện tích nhà lại nhỏ. Đặc trưng của nhà phố là kiến trúc được sắp xếp thành những đường, mảng, khối tạo không gian thoáng đãng, cùng ánh sáng được chú trọng làm điểm nhấn.</p></div></div>

          <div className="grid items-center gap-8 lg:grid-cols-2"><Image src="/images/thiet-ke-noi-that/nha-pho/thien-nhien.webp" alt="Thiết kế nhà phố hài hòa với thiên nhiên" width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiên nhiên</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Hài hòa với thiên nhiên</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Đây là yếu tố chủ chốt trong thiết kế nhà phố độc lạ. Nó góp phần điều hòa sinh khí, tăng cường bầu không khí trong lành đồng thời cân bằng cuộc sống trong ngôi nhà của bạn.</p></div></div>
        </section>

        <section className="mt-16 border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Vì sao chọn chúng tôi</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Tổ Ấm Hoàn Hảo – giải pháp cho thiết kế nội thất nhà phố</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với mục đích giúp gia chủ tạo dựng không gian rộng rãi, tiện nghi và hiện đại, chúng tôi cam kết cung cấp dịch vụ có tính khả thi cao.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{reasons.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình làm việc</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Handshake aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Người bạn đồng hành</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Tổ Ấm Hoàn Hảo – người bạn đồng hành thân thiết của mọi gia đình</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Tư vấn miễn phí mọi vấn đề thiết kế – thi công – nội thất tại nhà. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn với chất lượng tuyệt vời nhất, đáp ứng mọi yêu cầu của khách hàng khó tính nhất.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><WandSparkles aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng kiến tạo không gian nhà phố của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất nhà phố, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
