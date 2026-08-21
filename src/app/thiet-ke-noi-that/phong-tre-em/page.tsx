import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  BadgeCheck,
  BedDouble,
  Check,
  Heart,
  Lightbulb,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Smile,
  Sparkles,
  Tv,
  Users,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất phòng trẻ em | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế nội thất phòng ngủ trẻ em gây sốt: phòng bé trai phát triển tư duy, bé gái đáng yêu, giường tầng thông minh, giường đôi công chúa và tiết kiệm không gian.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type DesignFeature = Feature & { image: string };

const designs: DesignFeature[] = [
  {
    icon: Lightbulb,
    title: "Phòng ngủ bé trai phát triển tư duy",
    content:
      "Góc học tập gọn gàng với thiết bị hiện đại, màu xanh dương khỏe khoắn cùng chi tiết trang trí siêu anh hùng, bồi đắp trí tưởng tượng và phát triển tư duy.",
    image: "/images/thiet-ke-noi-that/phong-tre-em/be-trai-1.webp",
  },
  {
    icon: Smile,
    title: "Phòng ngủ đáng yêu cho bé gái",
    content:
      "Gam màu tươi sáng với ga gối xanh lá kết hợp thảm hồng phấn, góc học tập gọn gàng đầu giường, trang trí decal sinh động phù hợp lứa tuổi.",
    image: "/images/thiet-ke-noi-that/phong-tre-em/be-gai.webp",
  },
  {
    icon: BedDouble,
    title: "Giường tầng thông minh cho 2 bé trai",
    content:
      "Giải pháp tối ưu cho gia đình 2 bé trai diện tích hạn chế: không gian học tập, vui chơi chung nhưng vẫn có không gian cá nhân riêng.",
    image: "/images/thiet-ke-noi-that/phong-tre-em/giuong-tang-2-trai.webp",
  },
  {
    icon: Sparkles,
    title: "Giường đôi công chúa cho 2 bé gái",
    content:
      "Sử dụng giường đôi cho bé gái dễ di chuyển, tone hồng ngập tràn từ chăn ga, thảm đến chi tiết trang trí như lạc vào miền cổ tích lung linh.",
    image: "/images/thiet-ke-noi-that/phong-tre-em/giuong-doi-2-gai.webp",
  },
  {
    icon: Ruler,
    title: "Tiết kiệm không gian cho 1 trai 1 gái",
    content:
      "Giường tầng là phương án tối ưu, gam màu trung tính vàng, xanh, trắng phù hợp sở thích cả 2 bé trong không gian chung.",
    image: "/images/thiet-ke-noi-that/phong-tre-em/trai-gai.webp",
  },
];

const notes = [
  "Phù hợp giới tính và độ tuổi của bé",
  "Tôn trọng sở thích của bé về màu sắc, đồ chơi, nhân vật hoạt hình",
  "Quan tâm đến công năng sử dụng thuận tiện nhất",
  "Cân nhắc lắp tivi và thiết bị media trong phòng bé",
  "Tạo dựng không gian riêng phát triển nhân cách và trí tuệ",
];

export default function KidsBedroomDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Nội thất phòng trẻ em</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Nội thất <em className="text-[#74785f]">phòng trẻ em</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Không gian phòng ngủ dành cho các bé được chúng tôi đặc biệt chú trọng, với đội ngũ kiến trúc sư tận tâm, yêu nghề, mến trẻ luôn quan tâm và thấu hiểu thế hệ măng non.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#mau-thiet-ke" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá mẫu thiết kế</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/phong-tre-em/hero.webp" alt="Thiết kế nội thất phòng trẻ em" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="mau-thiet-ke" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Mẫu thiết kế</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Điểm danh 5 mẫu thiết kế phòng trẻ em gây sốt</h2><div className="mt-10 space-y-12">{designs.map((item) => { const Icon = item.icon; return <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2"><Image src={item.image} alt={item.title} width={750} height={500} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Mẫu thiết kế</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thông tin cần lưu ý</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thiết kế nội thất phòng trẻ em hoàn hảo</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Phòng trẻ em là không gian đặc biệt dành cho con trẻ – những thành viên đang ở độ tuổi hình thành và phát triển nhân cách, góp phần định hình một nhân cách tốt trong tương lai.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{notes.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Heart aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tối ưu cùng Tổ Ấm Hoàn Hảo</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Sự tin tưởng và hài lòng tuyệt đối từ phía khách hàng</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Mục tiêu của chúng tôi không phải là số 1, điều chúng tôi hướng đến chính là sự tin tưởng và hài lòng tuyệt đối. Chúng tôi luôn đặt mình vào vị trí khách hàng để thấu hiểu và hiện thực hóa mong muốn về một không gian hoàn hảo nhất.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Baby aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng kiến tạo không gian trong mơ cho bé?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thiết kế nội thất phòng trẻ em, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
