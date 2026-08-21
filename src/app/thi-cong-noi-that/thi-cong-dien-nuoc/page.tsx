import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BadgeCheck,
  Check,
  CircuitBoard,
  ClipboardCheck,
  Droplets,
  Factory,
  Gem,
  Handshake,
  KeyRound,
  Layers,
  MapPin,
  Phone,
  Plug,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thi công điện nước | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công điện nước an toàn, tiết kiệm, bảo hành lâu: bố trí âm tường, dây dẫn đúng tiết diện, thiết bị chống rò rỉ RCCB/ELCB. Báo giá 180.000-220.000đ/m².",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const notes: Feature[] = [
  {
    icon: Layers,
    title: "Hệ thống điện nước phải được bố trí âm tường",
    content:
      "Đường dây điện và ống nước dẫn đến thiết bị phải đặt trong tường, sử dụng 100% dây điện bọc cách điện, tuyệt đối không dùng dây trần. Âm tường đảm bảo thẩm mỹ và an toàn, đòi hỏi bố trí chính xác tuyệt đối ngay từ đầu.",
  },
  {
    icon: Ruler,
    title: "Sử dụng dây dẫn điện, ống nước đúng tiết diện",
    content:
      "Sử dụng dây dẫn, ống cấp thoát nước đúng quy chuẩn và tiết diện vô cùng quan trọng. Dây dẫn quá nhỏ không phù hợp hiệu điện thế có thể gây chập, cháy nổ. Ống nước phải tính toán phù hợp công năng sử dụng.",
  },
  {
    icon: ClipboardCheck,
    title: "Tính toán lắp đặt thiết bị điện nước ngay từ thiết kế",
    content:
      "Việc tính toán đặt thiết bị như đèn chiếu sáng, điều hòa, tủ lạnh, máy giặt, khu vực rửa phải lưu ý ngay từ đầu, tránh khi đưa thiết bị vào không phù hợp. Độ cao ổ cắm thiết kế hợp lý, an toàn cho trẻ nhỏ.",
  },
  {
    icon: AlertTriangle,
    title: "Bố trí thiết bị phát hiện rò rỉ điện",
    content:
      "Sau cầu dao điện tổng nên lắp thêm RCCB hoặc ELCB – thiết bị phát hiện rò rỉ điện và tự động ngắt khi phát hiện dòng rò lớn hơn dòng rò định mức, bảo vệ an toàn cho gia đình.",
  },
];

const pricingItems = [
  "Thi công dán dây âm sàn, âm tường",
  "Lắp đặt đế âm, đấu nối tủ điện và attomat",
  "Lắp đặt thiết bị điện và chiếu sáng (không tính đèn chùm)",
  "Thi công đi ống ghen mềm, ghen cứng âm sàn, âm tường",
  "Thi công kéo dây, đầu nối, lắp đặt đế âm, tủ điện",
  "Lắp đặt thiết bị vệ sinh: lavabo, bồn cầu, vòi tắm",
  "Lắp đặt ống cấp thoát nước trong nhà vệ sinh",
  "Lắp đặt đi âm đường ống nước, thiết bị phòng bếp: bếp từ, bồn rửa",
];

const services = [
  "Đi đường điện âm tường ở tất cả các khu vực nội thất",
  "Đi đường ống dẫn nước cho các thiết bị nội thất, thi công hệ thống thoát nước cho cả công trình",
  "Bố trí, lắp đặt các thiết bị điện, nước phục vụ nhu cầu sinh hoạt của khách hàng",
];

const advantages = [
  "Đội ngũ kiến trúc sư, thợ thi công dày dặn kinh nghiệm chuyên môn",
  "Cung cấp phương án tối ưu nhất và tiết kiệm nhất cho quý khách hàng",
  "Hệ thống đối tác tin cậy cung cấp vật liệu, thiết bị điện nước cao cấp",
  "Đảm bảo mức dự trù kinh phí sát thực tế nhất để chủ động tài chính ngay từ đầu",
  "Cam kết chế độ bảo hành, bảo trì tận tâm, chuyên nghiệp nhất",
];

export default function ElectricalPlumbingPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công điện nước</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="text-[#74785f]">điện nước</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Điện và nước là hai yếu tố cấp thiết phục vụ nhu cầu sinh hoạt của gia đình. Thi công điện nước an toàn, tiết kiệm, bảo hành lâu cùng Tổ Ấm Hoàn Hảo.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#luu-y" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá lưu ý</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/dien-nuoc/hero.webp" alt="Thi công điện nước" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cảnh báo</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Những sai lầm khiến bạn ân hận cả đời</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Nếu thi công điện nước không tốt, khi có bất kỳ vấn đề hỏng hóc nào xảy ra sẽ ảnh hưởng vô cùng nghiêm trọng đến cuộc sống và vô cùng phức tạp để khắc phục.</p></div><div className="grid gap-3">{notes.map((item) => { const Icon = item.icon; return <article key={item.title} className="flex gap-5 border border-[#e0d5c6] p-5"><Icon aria-hidden="true" className="mt-1 h-8 w-8 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><div><h3 className="text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-2 text-xs leading-6 text-[#756b5e]">{item.content}</p></div></article>; })}</div></section>

        <section id="luu-y" className="py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-2 lg:items-center"><Image src="/images/thi-cong-noi-that/dien-nuoc/doi-tho.webp" alt="Đội thợ thi công điện nước chuyên nghiệp" width={960} height={720} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Đội thợ chuyên nghiệp</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thi công điện nước an toàn, tiết kiệm, bảo hành lâu</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với nhiều năm kinh nghiệm trong nghề, chúng tôi hiểu rằng thi công điện nước là hạng mục đòi hỏi độ chính xác tuyệt đối, đảm bảo chất lượng, độ bền cũng như tính thẩm mỹ cho tổng thể công trình về lâu về dài.</p><div className="mt-6 grid gap-4">{services.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-4 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Báo giá</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Cách tính m² thi công điện nước</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Báo giá thi công điện nước tại Hà Nội và TP.Hồ Chí Minh dao động từ 180.000 – 220.000đ/m² tùy độ phức tạp và tiêu chuẩn của mỗi loại hình công trình.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{pricingItems.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Zap aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#a0783e]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ưu điểm vượt trội</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Vì sao chọn Tổ Ấm Hoàn Hảo</h2><div className="mt-10 grid gap-3 sm:grid-cols-2">{advantages.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a7650]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><KeyRound aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Gói Chìa khóa trao tay</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Yên tâm tuyệt đối về chất lượng công trình</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Tất cả hoạt động từ thiết kế đến thi công đều được đảm bảo về chất lượng. Ý tưởng thiết kế được thực hiện tốt nhất, chi phí tiết kiệm nhất, hiệu quả tối ưu nhất.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Zap aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công điện nước, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}