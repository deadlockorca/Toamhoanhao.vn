import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BedDouble,
  Building2,
  Check,
  ChefHat,
  ClipboardCheck,
  Cpu,
  DoorOpen,
  Factory,
  Handshake,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  UsersRound,
  WandSparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thi công chung cư trọn gói | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công nội thất chung cư trọn gói: phòng khách sang trọng, không gian bếp ấm cúng, phòng ngủ êm ái. Cam kết đúng tiến độ, chất lượng và bảo hành tận tâm.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type HạngMụcFeature = Feature & { image: string };

const hạngMục: HạngMụcFeature[] = [
  {
    icon: Sofa,
    title: "Thi công chung cư phòng khách sang trọng, ấn tượng",
    content:
      "Phòng khách là linh hồn của căn nhà – nơi tiếp đãi khách khứa, bạn bè và tụ họp của cả gia đình. Nội thất thường được thiết kế đơn giản với tông màu tươi sáng như xanh, xám, trắng, tạo không gian sang trọng nhưng thanh thoát.",
    image: "/images/thi-cong-noi-that/chung-cu/phong-khach.webp",
  },
  {
    icon: ChefHat,
    title: "Thi công chung cư không gian bếp ấm cúng, thông thoáng",
    content:
      "Không gian bếp thường được thiết kế thông với phòng khách tạo không gian liên hoàn, vừa tiết kiệm diện tích vừa đầm ấm. Sử dụng gỗ công nghiệp lõi xanh chống thấm, nhựa cao cấp, kính cường lực cho độ bền đẹp.",
    image: "/images/thi-cong-noi-that/chung-cu/phong-bep.webp",
  },
  {
    icon: BedDouble,
    title: "Thi công chung cư phòng ngủ êm ái, tiện nghi",
    content:
      "Phòng ngủ là không gian nghỉ ngơi riêng tư, cần phù hợp với lứa tuổi và sở thích của từng cá nhân, bố trí thoáng đãng, sử dụng mành rèm hợp lý để cản nắng và đón nắng khi cần.",
    image: "/images/thi-cong-noi-that/chung-cu/phong-ngu.webp",
  },
];

const clients = [
  "Doanh nhân thành đạt",
  "Chủ showroom ô tô",
  "Chủ tiệm vàng",
  "Nhân viên văn phòng",
  "Tiểu thương",
];

const projects = ["Time City", "Royal City", "Golden Place", "Park Hill", "Eco Park"];

const commitments = [
  "Lựa chọn nguyên vật liệu nội thất phù hợp với không gian, điều kiện khí hậu và khả năng tài chính",
  "Sử dụng 100% vật dụng, thiết bị nội thất chất lượng cao, có nguồn gốc xuất xứ rõ ràng",
  "Đội ngũ thợ thi công lành nghề, đảm bảo hiện trạng ban đầu của thiết bị, không xây xát, sứt mẻ",
  "Kỹ sư giám sát 24/7 khi thi công và thông báo thường xuyên đến khách hàng",
  "Bàn giao công trình đúng tiến độ",
  "Thực thi các chính sách bảo trì tận tâm, chuyên nghiệp, mọi lúc, mọi nơi",
];

export default function ApartmentConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công chung cư</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="not-italic">chung cư</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Cực đơn giản để thi công chung cư đẹp như mơ. Trên một mặt phẳng dưới 100m², chúng tôi giúp bạn thiết kế nội thất tiện nghi, sang trọng và thẩm mỹ nhất.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#hang-muc" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá hạng mục</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/chung-cu/hero.webp" alt="Thi công nội thất chung cư" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="hang-muc" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Hạng mục thi công</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Các hạng mục không thể thiếu trong thi công chung cư</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Thi công nội thất chung cư có thể theo phong cách cổ điển, tân cổ điển, hiện đại hoặc sự pha trộn giữa các phong cách, tuỳ theo sở thích và gu thẩm mỹ của gia chủ.</p><div className="mt-10 space-y-12">{hạngMục.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={553} height={380} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Hạng mục</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Khách hàng của chúng tôi</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Chọn mặt gửi vàng – gửi gắm tổ ấm của bạn</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Với phong cách làm việc chuyên nghiệp, tận tình, hiệu quả, chúng tôi đã và đang thi công hàng trăm công trình lớn nhỏ, trong đó phần lớn là thiết kế – thi công nội thất chung cư, biệt thự, nhà phố.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8c795f]">Khách hàng đa dạng</p><div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{clients.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div><p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-[#8c795f]">Dự án đã thực hiện</p><div className="mt-4 flex flex-wrap gap-2">{projects.map((item) => <span key={item} className="border border-[#d8cbb9] bg-[#fdfaf6] px-4 py-2 text-xs font-semibold text-[#5b523f]">{item}</span>)}</div></div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Chúng tôi cam kết với khách hàng</h2><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{commitments.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a7650]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><WandSparkles aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tự hào của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Mang đến những không gian sống lý tưởng nhất</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Tổ Ấm Hoàn Hảo tự hào mang đến những không gian sống lý tưởng nhất cho cuộc sống của bạn. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn như phục vụ những người thân yêu trong chính gia đình mình.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Building2 aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công nội thất chung cư, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
