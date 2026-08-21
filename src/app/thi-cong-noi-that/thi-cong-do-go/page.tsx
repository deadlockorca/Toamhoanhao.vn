import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Boxes,
  Check,
  ClipboardCheck,
  Factory,
  Gem,
  Handshake,
  Leaf,
  Package,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Tag,
  Trees,
  WandSparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Thi công đồ gỗ nội thất | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công đồ gỗ nội thất cao cấp: lựa chọn nguyên liệu kỹ lưỡng, đảm bảo yêu cầu kỹ thuật, sản phẩm đạt chuẩn chất lượng, đóng gói bảo quản đúng quy cách.",
};

type Feature = { icon: LucideIcon; title: string; content: string; image: string };

const requirements: Feature[] = [
  {
    icon: Trees,
    title: "Lựa chọn phôi nguyên liệu đầu vào kỹ lưỡng",
    content:
      "Nguyên liệu đưa vào sản xuất phải được lựa chọn kỹ lưỡng, đảm bảo các yêu cầu về màu sắc, độ rắn chắc, độ co ngót, cong vênh, tật lỗi. Độ tuổi của gỗ cũng cần được lưu ý để có nguyên liệu đầu vào tốt nhất.",
    image: "/images/thi-cong-noi-that/do-go/nguyen-lieu.webp",
  },
  {
    icon: Wrench,
    title: "Đảm bảo tuyệt đối các yêu cầu kỹ thuật trong sản xuất",
    content:
      "Nguyên liệu gỗ trước khi sản xuất phải qua xử lý, tẩm sấy để chống mối mọt, hạn chế cong vênh, giãn nở. Trong gia công cần tuân thủ dung sai cho phép, kỹ thuật lắp ghép chi tiết, làm bóng bề mặt, sơn phủ đúng quy chuẩn.",
    image: "/images/thi-cong-noi-that/do-go/ky-thuat.webp",
  },
  {
    icon: ClipboardCheck,
    title: "Sản phẩm hoàn thiện đạt tiêu chuẩn chất lượng",
    content:
      "Sản phẩm đúng thiết kế về hình dáng, kích thước, màu sắc, đảm bảo tính thẩm mỹ và nằm trong độ dung sai cho phép. Sơn đúng mã màu, đúng chủng loại, tỉ lệ pha trộn. Bề mặt nhẵn mịn, đều màu, không bong tróc, nấm mốc.",
    image: "/images/thi-cong-noi-that/do-go/chuan-chat-luong.webp",
  },
  {
    icon: Package,
    title: "Đóng gói, bảo quản sản phẩm đúng quy cách",
    content:
      "Sản phẩm sau hoàn thiện được dán tem mác nhận diện thương hiệu, tránh làm giả, làm nhái, sau đó đóng thùng, bảo quản đúng cách, tránh trầy xước, sứt góc cho đến khi tới tay người tiêu dùng.",
    image: "/images/thi-cong-noi-that/do-go/bao-quan.webp",
  },
];

const advantages = [
  "Hệ thống nhà xưởng quy mô lớn, trang thiết bị máy móc tiên tiến, hiện đại",
  "Đội ngũ thiết kế am hiểu thị trường, luôn cập nhật xu thế nội thất đồ gỗ hot nhất",
  "Đội ngũ thợ lành nghề, được đào tạo bài bản, giàu kinh nghiệm trong sản xuất, gia công đồ gỗ",
  "Nguồn cung nguyên liệu dồi dào, đảm bảo các tiêu chuẩn khắt khe về chất lượng",
  "Giá thành rẻ nhất thị trường do sản xuất trực tiếp, không qua khâu trung gian",
  "Chế độ bảo hành, bảo trì tận tâm, chuyên nghiệp",
];

const materials = [
  "Veneer",
  "HDF",
  "Melamine",
  "MDF",
  "Lim",
  "Đinh hương",
  "Sến",
  "Óc chó",
  "Sồi Nga",
  "Xoan đào",
];

const commitments = [
  "Tư vấn hoàn toàn miễn phí từ các chuyên gia nội thất hàng đầu",
  "Cung cấp sản phẩm nội thất đồ gỗ với mẫu mã hot nhất thị trường",
  "Đảm bảo các tiêu chuẩn chất lượng, độ bền đẹp vượt thời gian của đồ gỗ nội thất",
  "Vận chuyển miễn phí sản phẩm đến tận chân công trình",
  "Bảo hành lâu nhất thị trường mọi lúc, mọi nơi",
  "Giá cả tốt nhất thị trường",
];

export default function WoodConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công đồ gỗ</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="text-[#74785f]">đồ gỗ</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Đồ gỗ nội thất luôn được ưa chuộng bởi vẻ đẹp sang trọng, đẳng cấp, bền vững với thời gian và thân thiện với môi trường. Thi công đồ gỗ đòi hỏi sự cầu kỳ và kinh nghiệm dày dặn.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#yeu-cau" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá yêu cầu</a><a href="#tu-van" className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</a></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/do-go/hero.webp" alt="Thi công đồ gỗ nội thất" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="yeu-cau" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Yêu cầu bắt buộc</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Những yêu cầu nhất định phải nắm khi thi công đồ gỗ nội thất</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Nội thất gỗ không chỉ mang đến vẻ đẹp sang trọng, đẳng cấp mà còn bền vững với thời gian. Thi công đồ gỗ đòi hỏi sự cầu kỳ, phức tạp và kinh nghiệm dày dặn.</p><div className="mt-10 space-y-12">{requirements.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={750} height={450} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Yêu cầu</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chất liệu</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đa dạng chất liệu đồ gỗ</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Chúng tôi cung cấp đa dạng sản phẩm đồ gỗ từ gỗ công nghiệp đến gỗ tự nhiên, đáp ứng yêu cầu ngày càng khó tính của thị trường với nhiều tiêu chuẩn khắt khe.</p></div><div className="flex flex-wrap content-start gap-2">{materials.map((item) => <span key={item} className="border border-[#d8cbb9] bg-[#fdfaf6] px-4 py-2 text-xs font-semibold text-[#5b523f]">{item}</span>)}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Ưu thế vượt trội</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Thi công đồ gỗ bền đẹp, giá rẻ cùng Tổ Ấm Hoàn Hảo</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Với hệ thống nhà xưởng máy móc hiện đại và đội ngũ thợ lành nghề, chúng tôi cho ra những sản phẩm nội thất chất lượng cao, phù hợp thị hiếu thẩm mỹ.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{advantages.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a7650]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Đem đến sự hài lòng và không gian nội thất đẳng cấp</h2><div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Trees aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công đồ gỗ nội thất, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><a href="#tu-van" className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</a><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}