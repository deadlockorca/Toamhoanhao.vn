import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Check,
  ClipboardCheck,
  Compass,
  Factory,
  Gem,
  Handshake,
  Heart,
  KeyRound,
  PaintRoller,
  Phone,
  RefreshCcw,
  ShieldCheck,
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
  title: "Thi công cải tạo nội thất giá rẻ đẹp | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công cải tạo nội thất giá rẻ đẹp: khi công trình xuống cấp, cần thay đổi tiện nghi, hợp phong thủy hay phù hợp mục đích sử dụng. Thay áo mới cho căn nhà của bạn.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type SituationFeature = Feature & { image: string };

const situations: SituationFeature[] = [
  {
    icon: Wrench,
    title: "Khi nội thất công trình bị xuống cấp",
    content:
      "Nội ngoại thất công trình đều có niên hạn sử dụng nhất định. Công trình cũ kỹ, xuống cấp sau nhiều năm sử dụng là điều dễ hiểu. Muốn tiếp tục sử dụng, bạn phải cải tạo nội thất bên trong.",
    image: "/images/thi-cong-noi-that/cai-tao/xuong-cap.webp",
  },
  {
    icon: RefreshCcw,
    title: "Khi bạn cần một sự thay đổi để đẹp hơn, tiện nghi hơn",
    content:
      "Các thiết bị và cách bài trí nội thất từ lâu vẫn y nguyên, gia đình có thêm thành viên mới… Đã đến lúc bạn refresh lại tổ ấm để không gian trở nên tươi mới, tiện ích và hợp xu thế nội thất.",
    image: "/images/thi-cong-noi-that/cai-tao/dep-hon.webp",
  },
  {
    icon: Compass,
    title: "Khi bạn muốn thay đổi phong thủy để đón may mắn vào nhà",
    content:
      "Sự thay đổi nội thất tạo nên không gian mới tràn trề sức sống. Thay đổi phong thủy phù hợp âm dương, cung mệnh sẽ khiến cuộc sống may mắn hơn, công việc tiến triển tốt.",
    image: "/images/thi-cong-noi-that/cai-tao/phong-thuy.webp",
  },
  {
    icon: Sparkles,
    title: "Khi bạn cần thay đổi không gian để phù hợp với mục đích sử dụng",
    content:
      "Gia đình vừa đón thành viên mới hay ngôi nhà phát sinh thêm mục đích sử dụng? Việc bố trí thêm nội thất, ngăn phòng, thiết kế thêm gác xép là cần thiết để phù hợp công năng, tận dụng tối đa không gian.",
    image: "/images/thi-cong-noi-that/cai-tao/khong-gian.webp",
  },
];

const advantages = [
  "Đội ngũ nhân lực giàu kinh nghiệm, nhiệt huyết và sáng tạo, từ kiến trúc sư, kỹ sư đến thợ thi công lành nghề",
  "Tư vấn tận tâm trong việc lựa chọn nguyên vật liệu nội thất và mọi vấn đề khác",
  "Có khả năng cung cấp dịch vụ thiết kế – thi công trọn gói giúp tiết kiệm chi phí, đồng bộ triển khai",
  "Hệ thống nhà xưởng quy mô hiện đại, cung cấp đồ nội thất theo yêu cầu với chất lượng tốt, giá thành rẻ",
  "Có nhiều gói nội thất tương đương các giá trị khác nhau để khách hàng lựa chọn",
  "Chế độ bảo hành, bảo trì lâu nhất thị trường",
  "Ưu đãi cực lớn khi sử dụng gói nội thất Chìa khóa trao tay",
];

const processSteps = [
  "Tiếp nhận yêu cầu của khách hàng",
  "Khảo sát hiện trạng công trình cần cải tạo",
  "Báo giá",
  "Ký kết hợp đồng",
  "Sản xuất và thi công lắp đặt",
  "Nghiệm thu và bàn giao công trình",
  "Thanh lý hợp đồng và bảo hành",
];

export default function RenovationConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công cải tạo</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="not-italic">cải tạo</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Thay áo mới cho căn nhà của bạn. Thi công cải tạo nội thất giá rẻ đẹp, giúp ngôi nhà trở nên sang trọng, tiện nghi và tràn trề sức sống.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#tinh-huong" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá tình huống</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/cai-tao/hero.webp" alt="Thi công cải tạo nội thất" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="tinh-huong" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Khi nào cần cải tạo</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Khi nào bạn cần tìm đến đơn vị thi công cải tạo nội thất?</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Ngày nay, khi chất lượng cuộc sống được nâng cao, ngôi nhà không chỉ phục vụ nhu cầu tối thiểu mà còn trở thành không gian thư giãn, nghỉ ngơi của mọi thành viên trong gia đình.</p><div className="mt-10 space-y-12">{situations.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={670} height={437} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tình huống</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Vì sao chọn chúng tôi</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Tổ Ấm Hoàn Hảo – đơn vị thi công cải tạo nội thất uy tín</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Mục tiêu của chúng tôi không phải là số 1, điều chúng tôi hướng đến là sự hài lòng và tin tưởng tuyệt đối từ phía khách hàng.</p></div><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{advantages.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình thực hiện</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Cam kết thực hiện hợp đồng theo đúng quy trình</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{processSteps.map((step, index) => <article key={step} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step}</h2></article>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><KeyRound aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chìa khóa trao tay</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Tự hào mang đến những không gian sống lý tưởng nhất</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng phục vụ bạn như phục vụ những người thân yêu trong chính gia đình mình.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><PaintRoller aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công cải tạo nội thất, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
