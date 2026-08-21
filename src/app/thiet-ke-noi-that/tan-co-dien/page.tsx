import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  BadgeCheck,
  BedDouble,
  BookOpen,
  Check,
  ChefHat,
  Crown,
  Gem,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thiết kế nội thất tân cổ điển | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế nội thất tân cổ điển cao cấp: sự kết hợp hài hòa giữa cổ điển và hiện đại, sang trọng và đầy tinh tế, thể hiện đẳng cấp và gu thẩm mỹ của gia chủ.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type RoomFeature = Feature & { image: string };

const rooms: RoomFeature[] = [
  {
    icon: Armchair,
    title: "Phòng khách",
    content:
      "Những chi tiết trang trí tỉ mỉ, cầu kỳ làm thủ công, lấy cảm hứng từ hình kỷ hà, cỏ hoa tự nhiên mang tính nghệ thuật cao và đồng bộ về phong cách.",
    image: "/images/thiet-ke-noi-that/tan-co-dien/phong-khach.webp",
  },
  {
    icon: BedDouble,
    title: "Phòng ngủ",
    content:
      "Kế thừa vẻ đẹp cổ điển nhưng đã lược bỏ những chi tiết quá cầu kỳ, phòng ngủ tân cổ điển gợi không gian sang trọng, tráng lệ nhưng vẫn vô cùng tinh tế.",
    image: "/images/thiet-ke-noi-that/tan-co-dien/phong-ngu.webp",
  },
  {
    icon: BookOpen,
    title: "Phòng sách",
    content:
      "Ghế sofa kết hợp hài hòa kệ sách hoàn toàn biến căn phòng đọc sách thành nơi thư giãn tuyệt vời.",
    image: "/images/thiet-ke-noi-that/tan-co-dien/phong-sach.webp",
  },
  {
    icon: ChefHat,
    title: "Phòng ăn",
    content:
      "Chỉ cần thêm đèn chùm trang trí với thảm trải sàn, phòng ăn được khoác lên một ngoại hình mới mà vẫn giữ phong cách cổ điển.",
    image: "/images/thiet-ke-noi-that/tan-co-dien/phong-an.webp",
  },
];

const benefits = [
  "Cảm nhận được sự tâm huyết và đam mê trong từng công việc",
  "Kế hoạch tài chính đầu tư rõ ràng, hạn chế rủi ro và phát sinh ngoài ý muốn",
  "Thiết kế, thi công hoàn thiện đúng tiến độ, đúng cam kết",
  "Báo giá thiết kế nội thất cạnh tranh, hợp lý với khả năng chi trả",
  "Chủ động được nguồn nhập nội thất",
];

const commitments = [
  "Giá cả tốt nhất so với thị trường",
  "Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu",
  "Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần",
  "Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp",
];

export default function NeoclassicalInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Thiết kế nội thất tân cổ điển</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Tân cổ <em className="text-[#74785f]">điển</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Kiến trúc tân cổ điển là sự kết hợp hài hòa giữa phong cách cổ điển và phong cách hiện đại, tạo nên nét kiến trúc sang trọng và đầy tinh tế, thể hiện đẳng cấp và con mắt thẩm mỹ của gia chủ.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#khong-gian" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá thiết kế</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/tan-co-dien/hero.webp" alt="Thiết kế nội thất tân cổ điển cao cấp" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong cách</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Sang trọng, tinh tế và vương giả</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Không gian tân cổ điển làm nổi bật sự vương giả, thể hiện đẳng cấp và con mắt thẩm mỹ của gia chủ, với những chi tiết trang trí tỉ mỉ và đồng bộ về phong cách.</p></div><div className="grid gap-3 sm:grid-cols-3">{[{ icon: Crown, title: "Vương giả", content: "Thể hiện đẳng cấp và sự quý phái trong từng không gian." }, { icon: Gem, title: "Tinh tế", content: "Kế thừa vẻ đẹp cổ điển, lược bỏ chi tiết quá cầu kỳ." }, { icon: Palette, title: "Nghệ thuật", content: "Chi tiết trang trí làm thủ công, mang giá trị nghệ thuật cao." }].map((item) => { const Icon = item.icon; return <article key={item.title} className="min-h-[180px] border border-[#e0d5c6] p-6"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.25} /><p className="mt-6 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

        <section id="khong-gian" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Không gian tiêu biểu</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Những thiết kế tân cổ điển đẹp hút hồn</h2><div className="mt-10 space-y-12">{rooms.map((item) => { const Icon = item.icon; return <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2"><Image src={item.image} alt={item.title} width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Không gian</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lợi ích</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Lợi ích khi lựa chọn thiết kế nội thất tân cổ điển</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Đội ngũ kiến trúc sư và chuyên gia của Tổ Ấm Hoàn Hảo với kinh nghiệm dày dặn, chuyên môn vững vàng sẽ giúp quý khách có được một không gian hoàn mỹ nhất.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{benefits.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><ShieldCheck aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Hãy để chúng tôi thực hiện ước mơ giúp bạn</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Với phương châm hoạt động luôn đặt uy tín và lợi ích khách hàng lên hàng đầu, chúng tôi cam kết mang đến chất lượng tuyệt vời nhất.</p><div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Crown aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng sở hữu không gian tân cổ điển đầy mê mẩn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất tân cổ điển, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
