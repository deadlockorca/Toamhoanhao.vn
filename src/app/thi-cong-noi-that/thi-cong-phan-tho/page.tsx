import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Droplets,
  Gem,
  Grid3x3,
  Hammer,
  KeyRound,
  Layers,
  Paintbrush,
  Phone,
  Plug,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thi công phần thô nội thất | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công phần thô nội thất: đường điện an toàn, hệ thống cấp thoát nước tối ưu, trần thạch cao, sơn bả tường, ốp lát sàn. Đúng nguyên tắc, tiết kiệm, bền đẹp.",
};

type Feature = { icon: LucideIcon; title: string; content: string; image: string };

const requirements: Feature[] = [
  {
    icon: Zap,
    title: "Bố trí đường điện an toàn, tiện dụng",
    content:
      "Sử dụng 100% dây dẫn có vỏ bọc cách điện và tiết diện phù hợp, đặt âm trong tường, luồn trong ống bảo vệ. Phía trước thiết bị đều có thiết bị bảo đảm an toàn, chống chập cháy nổ.",
    image: "/images/thi-cong-noi-that/phan-tho/dien.webp",
  },
  {
    icon: Droplets,
    title: "Đảm bảo tối ưu cho hệ thống cấp thoát nước",
    content:
      "Nước là nguồn mạch sự sống của công trình. Hệ thống cấp thoát nước được nghiên cứu kỹ lưỡng về áp lực, lưu lượng, đảm bảo tính hợp lý và công năng sử dụng, đặc biệt với nhà cao tầng.",
    image: "/images/thi-cong-noi-that/phan-tho/nuoc.webp",
  },
  {
    icon: Layers,
    title: "Sử dụng trần thạch cao tăng tính thẩm mỹ và chống nóng",
    content:
      "Trần thạch cao bao che, cách âm, cách nhiệt, khắc phục khiếm khuyết xây dựng. Hệ thống gồm khung trần, tấm thạch cao, calcium silicate và phụ kiện. Sử dụng trần chìm, trần nổi hoặc kết hợp.",
    image: "/images/thi-cong-noi-that/phan-tho/tran-thach-cao.webp",
  },
  {
    icon: Paintbrush,
    title: "Sơn bả tường hoàn thiện bề mặt và tạo hiệu ứng thẩm mỹ",
    content:
      "Lựa chọn màu sơn và pha phối mảng màu làm phông nền tổng quát, nổi bật nội thất. Sơn bả đúng quy trình kỹ thuật tạo vách tường màu sắc hoàn hảo, chống ẩm mốc, bền vững theo thời gian.",
    image: "/images/thi-cong-noi-that/phan-tho/son-ba.webp",
  },
  {
    icon: Grid3x3,
    title: "Lựa chọn vật liệu phù hợp cho sàn nhà và ốp lát chân tường",
    content:
      "Sàn gỗ kết hợp ốp tường gỗ cho phòng khách, phòng ngủ sang trọng, ấm áp. Gạch men lát nền cho không gian lớn, phòng vệ sinh, khu giặt giũ – dễ vệ sinh, không thấm nước, độ bền cao.",
    image: "/images/thi-cong-noi-that/phan-tho/san-nha.webp",
  },
];

const services = [
  "Thi công lắp đặt hệ thống điện nước",
  "Thi công trần thạch cao",
  "Thi công sơn bả tường",
  "Thi công ốp lát sàn nhà, chân tường",
];

const advantages = [
  "Đội ngũ kiến trúc sư, thợ thi công dày dặn kinh nghiệm chuyên môn",
  "Cung cấp phương án tối ưu và tiết kiệm nhất cho phần thô công trình",
  "Hệ thống đối tác tin cậy cung cấp vật liệu sơn bả, lót sàn, thiết bị điện nước cao cấp",
  "Dự trù kinh phí sát thực tế nhất để chủ động tài chính ngay từ đầu",
  "Cam kết chế độ bảo hành, bảo trì tận tâm, chuyên nghiệp",
];

const electricalRules = [
  "Sử dụng 100% dây dẫn có vỏ bọc cách điện và tiết diện phù hợp",
  "Dây dẫn đặt âm trong tường, luồn trong ống bảo vệ, tránh rò rỉ điện",
  "Phía trước thiết bị điện đều có thiết bị bảo đảm an toàn, chống chập cháy nổ",
  "Cầu dao, công tắc có nắp đậy, bố trí vị trí phù hợp, tiện sử dụng",
  "Không đặt công tắc, ổ điện ở những vị trí ẩm ướt",
  "Các thiết bị điện đều được nối đất, tiếp âm để tránh sự cố",
];

export default function ShellConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công phần thô</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="not-italic">phần thô</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Phần thô nội thất gồm đường điện, đường nước, trần nhà, bề mặt tường, ốp lát và sàn nhà – những yếu tố đầu tiên cần xử lý khi bắt đầu thi công công trình.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#yeu-cau" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá nguyên tắc</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/phan-tho/hero.webp" alt="Thi công phần thô nội thất" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Nguyên tắc cốt tử</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">5 yêu cầu quan trọng nhất khi thi công phần thô</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Cho dù là biệt thự, chung cư, nhà vườn hay nhà phố, phần thô là những yếu tố đầu tiên cần xử lý. Khi thi công nội thất phần thô, cần tuân thủ nghiêm ngặt các nguyên tắc cơ bản sau.</p></div><div className="grid gap-3">{requirements.map((item) => { const Icon = item.icon; return <article key={item.title} className="flex gap-5 border border-[#e0d5c6] p-5"><Icon aria-hidden="true" className="mt-1 h-8 w-8 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><div><h3 className="text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-2 text-xs leading-6 text-[#756b5e]">{item.content}</p></div></article>; })}</div></section>

        <section id="yeu-cau" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chi tiết hạng mục</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Từng hạng mục thi công phần thô</h2><div className="mt-10 space-y-12">{requirements.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={750} height={450} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Hạng mục</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Dịch vụ</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thi công phần thô hiệu quả, tiết kiệm cùng Tổ Ấm Hoàn Hảo</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Dịch vụ thi công phần thô nội thất của Tổ Ấm Hoàn Hảo gồm những hạng mục sau:</p><div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">{services.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8c795f]">Đường điện an toàn</p><div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{electricalRules.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Zap aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#a0783e]" strokeWidth={2} />{item}</div>)}</div></div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ưu điểm vượt trội</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Vì sao chọn Tổ Ấm Hoàn Hảo</h2><div className="mt-10 grid gap-3 sm:grid-cols-2">{advantages.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a7650]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><KeyRound aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Gói Chìa khóa trao tay</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Yên tâm tuyệt đối về chất lượng công trình</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Khi sử dụng gói Chìa khóa trao tay, tất cả hoạt động từ thiết kế đến thi công đều được đảm bảo về chất lượng. Ý tưởng thiết kế được thực hiện tốt nhất, chi phí tiết kiệm nhất, hiệu quả tối ưu nhất.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Hammer aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công phần thô nội thất, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
