import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  ChefHat,
  ClipboardCheck,
  Compass,
  Factory,
  Handshake,
  Heart,
  Palette,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wallet,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Thiết kế nội thất phòng bếp | Tổ Ấm Hoàn Hảo",
  description:
    "Thiết kế nội thất phòng bếp hoàn hảo, thắp lửa cho hạnh phúc gia đình: hướng bếp phong thủy, tối ưu công năng, chất liệu bền đẹp và lựa chọn đơn vị thiết kế uy tín.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type TipFeature = Feature & { image: string };

const tips: TipFeature[] = [
  {
    icon: Compass,
    title: "Chọn hướng bếp cho gia đình êm ấm",
    content:
      "Hướng bếp không chỉ liên quan đến sự thông thoáng khi sử dụng mà còn trực tiếp ảnh hưởng đến phong thủy, không gian linh hồn của ngôi nhà.",
    image: "/images/thiet-ke-noi-that/phong-bep/huong-bep.webp",
  },
  {
    icon: Ruler,
    title: "Tối ưu hóa công năng sử dụng",
    content:
      "Lựa chọn thiết bị nội thất phù hợp cả kích thước và công năng, bố trí đường điện nghiên cứu kỹ trước khi thi công để tránh không vừa kích thước.",
    image: "/images/thiet-ke-noi-that/phong-bep/cong-nang.webp",
  },
  {
    icon: ShieldCheck,
    title: "Chất liệu nội thất bền vĩnh cửu",
    content:
      "Phòng bếp thường xuyên ẩm ướt, nên chọn vật liệu chống ẩm, chịu nước, gỗ công nghiệp lõi xanh cao cấp, đảm bảo độ dày, độ bền, tránh cong vênh, hoen gỉ.",
    image: "/images/thiet-ke-noi-that/phong-bep/chat-lieu.webp",
  },
  {
    icon: Sparkles,
    title: "Đầu tư sơn bả tốt nhất",
    content:
      "Phòng bếp chịu tác động nhiệt độ cao và ẩm thấp, cần dùng sơn bả tốt, bền màu như INCHEM, G8, tuyệt đối tránh sơn kém chất lượng gây xỉn màu, bong tróc.",
    image: "/images/thiet-ke-noi-that/phong-bep/son-ba.webp",
  },
  {
    icon: Palette,
    title: "Màu sắc và phong cách độc đáo",
    content:
      "Trao đổi trực tiếp với kiến trúc sư về màu sắc và phong cách hướng đến: hiện đại đơn giản, tân cổ điển sang trọng hay hoàng gia lộng lẫy.",
    image: "/images/thiet-ke-noi-that/phong-bep/mau-sac.webp",
  },
];

const companyChecks = [
  "Địa chỉ công ty rõ ràng, tránh công ty ma, tiền mất tật mang",
  "Đội ngũ chuyên gia giàu kinh nghiệm, có thể xem trực tiếp công trình đã và đang thi công",
  "Dịch vụ thiết kế – thi công phòng bếp trọn gói, tiết kiệm chi phí và đảm bảo đồng bộ",
  "Xưởng sản xuất nội thất trực tiếp, không qua trung gian, giá cả hợp lý",
  "Ký hợp đồng với điều khoản rõ ràng, trách nhiệm ràng buộc cụ thể",
  "Kế hoạch tài chính rõ ràng trong dự trù kinh phí thi công",
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

export default function KitchenInteriorDesignPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thiet-ke-noi-that" className="transition hover:text-[#9a733e]">Thiết kế nội thất</Link><span className="mx-3">/</span><span>Nội thất phòng bếp</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thiết kế nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Nội thất <em className="text-[#74785f]">phòng bếp</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Phòng bếp không chỉ là nơi ăn uống mà còn là không gian đoàn tụ, sum vầy của cả gia đình. Không gian bếp góp phần gắn kết các thành viên, giúp mọi người gần gũi và thấu hiểu nhau hơn.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#luu-y" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá lưu ý</a><a href="#tu-van" className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</a></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thiet-ke-noi-that/phong-bep/hero.webp" alt="Thiết kế nội thất phòng bếp" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="luu-y" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">6 lưu ý quan trọng</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Tuyệt đối không thể bỏ qua khi thiết kế nội thất phòng bếp</h2><div className="mt-10 space-y-12">{tips.map((item) => { const Icon = item.icon; return <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2"><Image src={item.image} alt={item.title} width={750} height={500} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lưu ý</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lựa chọn đơn vị uy tín</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Tối quan trọng: lựa chọn đơn vị thiết kế nội thất phòng bếp</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Phòng bếp không chỉ là nơi ăn uống, nghỉ ngơi mà còn là không gian mang ý nghĩa tâm linh trong lòng mỗi thành viên gia đình Việt.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{companyChecks.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Factory aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Xưởng sản xuất</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Thiết kế nội thất phòng bếp tuyệt vời cùng Tổ Ấm Hoàn Hảo</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Chúng tôi đã thiết kế và thi công trọn gói hàng trăm công trình tại Gamuda, Time City, Golden Place, HH Linh Đàm, Eco Park… với sự tin tưởng và hài lòng tuyệt đối từ phía khách hàng.</p></div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình làm việc</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Heart aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Thắp lửa cho hạnh phúc gia đình luôn trọn vẹn</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Với phương châm hoạt động luôn đặt uy tín và lợi ích khách hàng lên hàng đầu, chúng tôi cam kết mang đến không gian bếp chất lượng tuyệt vời nhất.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><ChefHat aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thiết kế nội thất phòng bếp, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><a href="#tu-van" className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</a><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
