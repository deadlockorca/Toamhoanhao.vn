import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Cpu,
  Expand,
  Factory,
  Handshake,
  Lightbulb,
  Moon,
  Palette,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Sofa,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất thông minh | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế nội thất thông minh sang trọng, tiện nghi: đa chức năng, tiết kiệm không gian tối đa, sử dụng thuận tiện và giảm nhẹ nỗi lo tài chính.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type BenefitFeature = Feature & { image: string };

const benefits: BenefitFeature[] = [
  {
    icon: Sofa,
    title: "Sản phẩm tiện dụng đa chức năng",
    content:
      "Trên cùng một sản phẩm, người dùng khai thác ít nhất 2 chức năng nhờ kéo dài, gấp gọn, thu nhỏ các bộ phận. Bạn có thể ăn, ngủ, giải trí trên cùng một sản phẩm.",
    image: "/images/thiet-ke-noi-that/thong-minh/da-chuc-nang.webp",
  },
  {
    icon: Expand,
    title: "Tiết kiệm không gian tối đa",
    content:
      "Một sản phẩm tích hợp nhiều tính năng thay cho nhiều vật dụng riêng lẻ. Với không gian hạn chế, thiết bị thông minh tạo ra khoảng trống khi cần thiết vô cùng hữu ích.",
    image: "/images/thiet-ke-noi-that/thong-minh/tiet-kiem-khong-gian.webp",
  },
  {
    icon: Cpu,
    title: "Sử dụng vô cùng thuận tiện",
    content:
      "Thiết kế dành cho mọi người với cách sử dụng cực kỳ đơn giản. Chỉ cần hướng dẫn 1 lần, thậm chí cả các bé cũng tự mình nâng hạ, co kéo thiết bị.",
    image: "/images/thiet-ke-noi-that/thong-minh/tien-dung.webp",
  },
  {
    icon: Lightbulb,
    title: "Tạo ấn tượng không gian độc đáo",
    content:
      "Nội thất thông minh không chỉ mang công năng tối ưu mà còn tạo nên tính thẩm mỹ và sự cá tính, khiến bất kỳ ai đến thăm cũng phải thốt lên thán phục.",
    image: "/images/thiet-ke-noi-that/thong-minh/an-tuong.webp",
  },
  {
    icon: PiggyBank,
    title: "Giảm nhẹ nỗi lo tài chính",
    content:
      "Lựa chọn nội thất thông minh là mua một được 2-3. Chất liệu độ bền cao, thoải mái sử dụng, di chuyển mà không lo hỏng hóc.",
    image: "/images/thiet-ke-noi-that/thong-minh/tai-chinh.webp",
  },
];

const services = [
  "Tư vấn chọn lựa, thiết kế và bố trí nội thất thông minh",
  "Cung cấp các sản phẩm nội thất thông minh chất lượng cao",
  "Thi công các sản phẩm nội thất thông minh theo kiểu dáng, kích thước yêu cầu",
];

const commitments = [
  "Tư vấn tận tâm và hoàn toàn miễn phí từ các chuyên gia hàng đầu",
  "Được lắng nghe tâm tư, nguyện vọng một cách cởi mở nhất",
  "Được cung cấp các phương án thiết kế sát ý tưởng gia chủ nhất",
  "Được lựa chọn thực thi một phương án thiết kế tối ưu nhất",
  "Chi phí, giá thành hợp lý nhất",
  "Kế hoạch đầu tư tài chính rõ ràng, minh bạch ngay từ đầu",
  "Ưu đãi cực lớn khi sử dụng dịch vụ",
];

export default function SmartInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Nội thất thông minh</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Nội thất <em className="text-[#74785f]">thông minh</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Nội thất thông minh là sản phẩm của sự sáng tạo đầy ấn tượng, vừa đảm bảo tính thẩm mỹ, vừa tích hợp đa chức năng trong cùng một sản phẩm – giải pháp hoàn hảo cho không gian hạn chế về diện tích.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#loi-ich" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá lợi ích</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/thong-minh/hero.webp" alt="Thiết kế nội thất thông minh" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="loi-ich" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lợi ích</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Lợi ích không thể chối từ của thiết kế nội thất thông minh</h2><div className="mt-10 space-y-12">{benefits.map((item) => { const Icon = item.icon; return <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2"><Image src={item.image} alt={item.title} width={640} height={480} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lợi ích</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Dịch vụ</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thiết kế nội thất thông minh cùng Tổ Ấm Hoàn Hảo</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với phương châm đón đầu xu hướng, am hiểu mong muốn của khách hàng, chúng tôi luôn đưa ra những phương án thiết kế nội thất thông minh tối ưu nhất cho không gian sống hiện đại.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{services.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="py-16 lg:py-20"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Factory aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Xưởng sản xuất</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Chất lượng tốt nhất, giá thành rẻ nhất thị trường</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Với ưu thế về hệ thống xưởng sản xuất quy mô lớn, công nghệ hiện đại, chúng tôi chuyên cung cấp các sản phẩm nội thất thông minh độc đáo không qua trung gian, đảm bảo chất lượng tốt nhất và giá thành rẻ nhất.</p></div></div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Bạn nhận được gì</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đến với chúng tôi, bạn nhận được</h2><div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><WandSparkles aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thiết kế nội thất thông minh, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
