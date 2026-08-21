import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Check,
  Clock,
  DollarSign,
  Gem,
  Handshake,
  KeyRound,
  Layers,
  Move,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Thermometer,
  VolumeX,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thi công trần thạch cao | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công trần thạch cao chuyên nghiệp: thẩm mỹ cao, chống nóng, chống ẩm, cách âm hiệu quả, tháo lắp dễ dàng, giá thành hợp lý. Đối tác Vĩnh Tường.",
};

type Feature = { icon: LucideIcon; title: string; content: string; image: string };

const advantages: Feature[] = [
  {
    icon: Layers,
    title: "Đem lại giá trị thẩm mỹ cao",
    content:
      "Thị trường cung cấp nhiều loại trần thạch cao với mẫu mã đa dạng. Màu sắc tươi sáng, kiểu dáng biến tấu độc đáo mang đến sự sang trọng, cá tính cho không gian sống của bạn.",
    image: "/images/thi-cong-noi-that/tran-thach-cao/tham-my.webp",
  },
  {
    icon: Sun,
    title: "Giải pháp chống nóng, chống ẩm hoàn hảo",
    content:
      "Sản xuất trên công nghệ tạo bọt hiện đại, chống nóng hiệu quả, không bắt lửa, không sinh khói bụi. Rất bền, mát, tạo hoa văn theo ý thích và không lo nấm mốc.",
    image: "/images/thi-cong-noi-that/tran-thach-cao/chong-nong.webp",
  },
  {
    icon: VolumeX,
    title: "Công dụng cách âm hiệu quả",
    content:
      "Giải pháp tối ưu cho phòng ngủ, phòng hát, phòng Media yêu cầu sự yên tĩnh. Hạn chế khuếch tán âm thanh ra bên ngoài.",
    image: "/images/thi-cong-noi-that/tran-thach-cao/cach-am.webp",
  },
  {
    icon: Move,
    title: "Tháo lắp, di chuyển dễ dàng",
    content:
      "Vật liệu nhẹ, dễ lắp đặt, tháo rời, di chuyển mà không ảnh hưởng đến kết cấu bên trong công trình. Sử dụng trần dạng tấm cho văn phòng, công trình công cộng.",
    image: "/images/thi-cong-noi-that/tran-thach-cao/thao-lap.webp",
  },
  {
    icon: Award,
    title: "Giá thành hợp lý, độ bền vượt trội",
    content:
      "Nhiều loại thạch cao từ Việt Nam, Singapore, Thái Lan, Nhật… giá cả không chênh lệch nhiều, phù hợp tài chính đa số khách hàng. Tuổi thọ cao nếu sử dụng trong điều kiện khô ráo.",
    image: "/images/thi-cong-noi-that/tran-thach-cao/gia-thanh.webp",
  },
];

const commitments = [
  "Tư vấn hoàn toàn miễn phí bởi các chuyên gia hàng đầu",
  "Cung cấp vật tư chính hãng, nguồn gốc xuất xứ rõ ràng",
  "Cập nhật mẫu mã hot nhất thị trường",
  "Thi công đúng ý tưởng, chất lượng, đảm bảo tính thẩm mỹ",
  "Bàn giao công trình đúng tiến độ",
  "Giá cả tốt nhất so với thị trường",
  "Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp",
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

export default function CeilingConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công trần thạch cao</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="text-[#74785f]">trần thạch cao</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Trần thạch cao là xu hướng nội thất phổ biến, được sử dụng trong nhà dân, văn phòng và các công trình công cộng – giải pháp tối ưu cho công trình của bạn.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#uu-diem" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá ưu điểm</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/tran-thach-cao/hero.webp" alt="Thi công trần thạch cao" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="uu-diem" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ưu điểm vượt trội</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Thi công trần thạch cao – giải pháp tối ưu cho công trình của bạn</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Trần thạch cao không chỉ được sử dụng trong nội thất nhà dân mà còn cho văn phòng, các công trình công cộng, phúc lợi xã hội.</p><div className="mt-10 space-y-12">{advantages.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={750} height={450} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ưu điểm</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Đối tác tin cậy</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thiết kế – thi công trần thạch cao độc lạ cùng Tổ Ấm Hoàn Hảo</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Đối tác tin cậy của chúng tôi là Công ty sản xuất Trần thạch cao Vĩnh Tường – đơn vị cung cấp khung xương, trần thạch cao chất lượng số 1 tại Việt Nam.</p></div><div className="grid gap-4">{commitments.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-5 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình thực hiện</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Cam kết thực hiện hợp đồng theo đúng quy trình</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><PaintRoller aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tổ Ấm Hoàn Hảo</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Mang đến những không gian sống lý tưởng nhất</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng phục vụ bạn như phục vụ những người thân yêu trong chính gia đình mình.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Layers aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công trần thạch cao, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}