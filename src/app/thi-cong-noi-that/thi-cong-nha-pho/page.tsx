import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Compass,
  Feather,
  Gem,
  Home,
  Leaf,
  Palette,
  Phone,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thi công nhà phố đẹp | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công nhà phố với 5 phong cách nội thất đình đám: Retro hiện đại, Mix-Match, Wabi-Sabi, Ethnic, Zen Japanese. Đẳng cấp, tiết kiệm cùng Tổ Ấm Hoàn Hảo.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type StyleFeature = Feature & { image: string };

const styles: StyleFeature[] = [
  {
    icon: Palette,
    title: "Phong cách Retro hiện đại",
    content:
      "Vẫn giữ đường nét của thập niên 50-60 nhưng khoác lên họa tiết và vật liệu mới như da màu, kim loại, vải dệt, len dạ ánh nhũ. Cổ điển sang trọng nhưng tươi mới, hiện đại, thanh thoát.",
    image: "/images/thi-cong-noi-that/nha-pho/retro.webp",
  },
  {
    icon: Zap,
    title: "Phong cách Mix-Match ngẫu hứng",
    content:
      "Sự hòa quyện tinh tế giữa các phong cách nội thất, tạo nên sự hài hòa nhưng vô cùng độc đáo. Các món đồ mang nhiều phong cách Tân cổ điển, Hiện đại, Indochine kết hợp không lạc lõng mà cuốn hút.",
    image: "/images/thi-cong-noi-that/nha-pho/mix-match.webp",
  },
  {
    icon: Feather,
    title: "Phong cách Wabi-Sabi trầm cổ",
    content:
      "Phong cách Nhật Bản với cốt lõi là sự đơn giản, trống rỗng nhưng hòa hợp với thiên nhiên. Chất liệu gỗ tự nhiên và đá ở hình thái sơ khai nhất, không qua đẽo gọt, mang con người đến gần với thiên nhiên.",
    image: "/images/thi-cong-noi-that/nha-pho/wabi-sabi.webp",
  },
  {
    icon: Compass,
    title: "Phong cách Ethnic độc lạ",
    content:
      "Dành cho tín đồ du lịch, khám phá. Rực rỡ sắc màu, hình khối, hoa văn kỳ quái, phức tạp, không tuân theo chuẩn mực nào. Tạo không gian khác biệt hoàn toàn so với các không gian khác.",
    image: "/images/thi-cong-noi-that/nha-pho/ethnic.webp",
  },
  {
    icon: Leaf,
    title: "Zen Japanese – phong cách Nhật Bản",
    content:
      "Liên hệ mật thiết với Thiền, lấy sự tối giản trong bố cục và hài hòa, tinh tế, thư giãn trong bầu không khí làm cứu cánh. Tìm ra điểm nhấn mang hiệu ứng thẩm mỹ cao – linh hồn của không gian.",
    image: "/images/thi-cong-noi-that/nha-pho/zen.webp",
  },
];

const tips = [
  "Lựa chọn đơn vị thiết kế có địa chỉ công ty rõ ràng, tránh công ty ma",
  "Đội ngũ chuyên gia giàu kinh nghiệm, có thể xem trực tiếp công trình đã và đang thi công",
  "Dịch vụ thiết kế – thi công trọn gói, tiết kiệm chi phí và đảm bảo đồng bộ",
  "Xưởng sản xuất nội thất trực tiếp, không qua trung gian, giá cả hợp lý",
  "Ký hợp đồng điều khoản rõ ràng, trách nhiệm ràng buộc cụ thể",
  "Kế hoạch tài chính rõ ràng trong dự trù kinh phí thi công",
];

export default function TownhouseConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công nhà phố</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="text-[#74785f]">nhà phố</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Bật mí các phong cách nội thất nhà phố ấn tượng và bí quyết để biến ngôi nhà trong mơ của bạn thành hiện thực.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#phong-cach" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá phong cách</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/nha-pho/retro.webp" alt="Thi công nội thất nhà phố" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="phong-cach" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong cách thiết kế</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">5 phong cách nội thất nhà phố nổi đình nổi đám</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Từ xưa đến nay, đối với người Việt, việc thi công nhà phố luôn là một điều hệ trọng. Ngôi nhà không chỉ là tài sản lớn mà còn là tâm huyết của gia chủ.</p><div className="mt-10 space-y-12">{styles.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={670} height={430} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Phong cách</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lưu ý quan trọng</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thi công nhà phố đẹp đẳng cấp, tiết kiệm</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Thiết kế – thi công nhà phố là công việc tối quan trọng, quyết định đến sự thành bại trong việc tạo dựng ngôi nhà mơ ước của bạn và gia đình.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{tips.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><Home aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tổ Ấm Hoàn Hảo</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Bạn đã có ý tưởng gì cho thiết kế nội thất căn nhà mình?</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Hãy gọi ngay cho chúng tôi để được tư vấn bởi các chuyên gia nội thất hàng đầu. Chúng tôi tự tin mang đến cho bạn dịch vụ chuyên nghiệp nhất với mức chi phí hợp lý nhất.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Gem aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công nội thất nhà phố, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}