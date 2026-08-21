import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  ClipboardCheck,
  Factory,
  FileSignature,
  Gem,
  Handshake,
  Hammer,
  Headphones,
  KeyRound,
  Layers,
  MapPin,
  PaintRoller,
  PenTool,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Timer,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Nhật kí thi công | Tổ Ấm Hoàn Hảo",
  description:
    "Nhật ký thi công nội thất 8 bước: tiếp nhận yêu cầu, khảo sát, báo giá, ký hợp đồng, thi công phần thô, sản xuất lắp đặt, nghiệm thu bàn giao, bảo hành.",
};

type Feature = { icon: LucideIcon; title: string; content: string[]; image?: string };

const steps: Feature[] = [
  {
    icon: Headphones,
    title: "Bước 1: Tiếp nhận yêu cầu của khách hàng",
    content: [
      "Tìm hiểu nhu cầu thực tế của quý khách hàng (phong cách nội thất, yêu cầu vật liệu, hạn mức chi phí…)",
      "Tư vấn về vật liệu, gói dịch vụ của công ty phù hợp với nhu cầu.",
    ],
    image: "/images/thi-cong-noi-that/nhat-ki-thi-cong/buoc-1.webp",
  },
  {
    icon: Search,
    title: "Bước 2: Khảo sát hiện trạng công trình",
    content: [
      "Kiểm tra toàn bộ không gian thực tế của công trình (bao gồm kích thước phòng, cửa sổ, cửa ra vào, cột dầm…)",
    ],
  },
  {
    icon: PenTool,
    title: "Bước 3: Báo giá",
    content: [
      "Sau khi khảo sát, dựa trên nhu cầu của quý khách hàng, chúng tôi sẽ gửi bản thiết kế nội thất 3D. Nếu duyệt bản thiết kế 3D, chúng ta bắt đầu xây dựng Hồ sơ thiết kế (thiết kế 3D, bổ kĩ thuật 2D, chi tiết từng phần nội thất).",
      "Dự toán báo giá được xây dựng dựa trên hồ sơ thiết kế bao gồm toàn bộ các hạng mục và khối lượng cần thi công.",
      "Cùng quý khách hàng thống nhất các hạng mục cần thi công, được tư vấn về chất liệu, vật liệu và phân bổ chi phí thi công để có quyết định hợp lý nhất.",
    ],
  },
  {
    icon: FileSignature,
    title: "Bước 4: Ký kết hợp đồng",
    content: [
      "Sau khi hoàn tất dự toán chi phí, 2 bên bắt đầu sang giai đoạn kí kết hợp đồng thi công chi tiết cho công trình của bạn.",
      "Hợp đồng thi công bao gồm báo giá và các điều khoản hợp đồng đã được bàn trước.",
    ],
    image: "/images/thi-cong-noi-that/nhat-ki-thi-cong/buoc-4.webp",
  },
  {
    icon: Hammer,
    title: "Bước 5: Thi công nội thất phần thô",
    content: [
      "Đập phá, cải tạo bên trong",
      "Xây trát, chống thấm tường",
      "Thi công trần thạch cao",
      "Thi công sơn bả tường",
      "Thi công sàn (ốp lát sàn gỗ, gạch men…)",
    ],
  },
  {
    icon: Factory,
    title: "Bước 6: Sản xuất đồ nội thất và thi công lắp đặt",
    content: [
      "Toàn bộ đồ gỗ nội thất được sản xuất trực tiếp tại xưởng của Tổ Ấm Hoàn Hảo hoặc được mua sẵn trên thị trường theo yêu cầu của quý khách hàng.",
      "Thời gian hoàn thành tùy thuộc vào khối lượng công việc, mức độ hoàn thiện và điều kiện thi công.",
    ],
    image: "/images/thi-cong-noi-that/nhat-ki-thi-cong/buoc-6.webp",
  },
  {
    icon: ClipboardCheck,
    title: "Bước 7: Nghiệm thu và bàn giao công trình",
    content: [
      "Các hạng mục thi công lắp đặt sẽ được bàn giao đúng theo ngày giờ ký kết trong hợp đồng.",
      "Mọi phát sinh và tiến độ công trình sẽ được thông báo trực tiếp với chủ đầu tư.",
    ],
    image: "/images/thi-cong-noi-that/nhat-ki-thi-cong/buoc-7.webp",
  },
  {
    icon: ShieldCheck,
    title: "Bước 8: Thanh lý hợp đồng và bảo hành",
    content: [
      "Sau khi nghiệm thu và bàn giao tất cả các hạng mục, chủ đầu tư và đơn vị thi công tiến hành thanh lý hợp đồng đúng theo các điều khoản đã ký kết.",
      "Tổ Ấm Hoàn Hảo không dừng lại tại đó mà tiếp tục bảo hành và bảo dưỡng cho công trình.",
    ],
    image: "/images/thi-cong-noi-that/nhat-ki-thi-cong/buoc-8.webp",
  },
];

const durations = [
  "Thi công nội thất chung cư từ 25 đến 35 ngày",
  "Thi công nội thất biệt thự, nhà phố từ 30 đến 45 ngày",
  "Thi công nội thất văn phòng từ 15 – 25 ngày",
  "Thi công nội thất showroom từ 25 đến 35 ngày",
  "Thi công nội thất khách sạn, nhà hàng tùy thuộc vào hồ sơ thiết kế cụ thể",
];

const warranties = [
  "Đối với sản phẩm đồ gỗ nội thất: bảo hành 12 tháng",
  "Đối với sản phẩm phần hoàn thiện: bảo hành 06 tháng",
  "Đối với sản phẩm là thiết bị – phụ kiện: bảo hành theo hãng",
];

const notes = [
  "Thời gian thực hiện thi công nội thất có thể thay đổi đối với từng công trình, tùy vào khối lượng công việc và các điều kiện khách quan khác",
  "Quy trình thi công nội thất có thể thêm hoặc bớt một số công đoạn, tùy theo yêu cầu từ phía khách hàng",
];

export default function ConstructionDiaryPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Nhật kí thi công</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Nhật kí <em className="text-[#74785f]">thi công</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Quy trình bao gồm các bước và thời gian cụ thể khi thi công nội thất các công trình xây dựng của Tổ Ấm Hoàn Hảo – minh bạch từng giai đoạn.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#quy-trinh" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá quy trình</a><a href="#tu-van" className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</a></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/nhat-ki-thi-cong/hero.webp" alt="Nhật kí thi công nội thất" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">{steps.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><Icon aria-hidden="true" className="mt-4 h-6 w-6 text-[#9a733e]" strokeWidth={1.25} /><h2 className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-[#3d352b]">{step.title.replace(/^Bước \d+: /, "")}</h2></article>; })}</section>

        <section id="quy-trinh" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình chi tiết</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Chi tiết các bước trong nhật ký thi công nội thất</h2><div className="mt-10 space-y-12">{steps.map((step, index) => { const Icon = step.icon; return <article key={step.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><div className="relative min-h-[260px]">{step.image ? <Image src={step.image} alt={step.title} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /> : <div className="flex h-full min-h-[260px] items-center justify-center border border-dashed border-[#d7cbb9] bg-[#fdfaf6]"><Icon aria-hidden="true" className="h-12 w-12 text-[#b7a789]" strokeWidth={1} /></div>}</div><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Nhật ký thi công</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{step.title}</h2><div className="mt-5 space-y-3">{step.content.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thời gian thi công</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Thời gian hoàn thành theo từng loại công trình</h2><div className="mt-6 grid gap-3">{durations.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-5 text-sm leading-6 text-[#61584b]"><Timer aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#a0783e]" strokeWidth={2} />{item}</div>)}</div></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chính sách bảo hành</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Bảo hành và bảo dưỡng công trình</h2><div className="mt-6 grid gap-3">{warranties.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-5 text-sm leading-6 text-[#61584b]"><ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lưu ý</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Những lưu ý về quy trình thi công</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{notes.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a7650]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><KeyRound aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Thi công nội thất theo đúng quy trình 8 bước</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Bạn còn băn khoăn, thắc mắc bất kỳ vấn đề nào, hãy gọi ngay cho chúng tôi để được giải đáp. Chúng tôi luôn sẵn sàng lắng nghe và rất hân hạnh được phục vụ các bạn!</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><ClipboardCheck aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn quy trình thi công nội thất, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><a href="#tu-van" className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</a><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}