import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Box,
  Building2,
  Check,
  ClipboardCheck,
  Factory,
  Handshake,
  HardHat,
  Layers3,
  Lightbulb,
  MapPinned,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Năng lực thiết kế và thi công | Tổ Ấm Hoàn Hảo",
  description:
    "Năng lực thiết kế, thi công và sản xuất nội thất của Tổ Ấm Hoàn Hảo.",
};

type IconCard = {
  icon: LucideIcon;
  title: string;
  content: string;
};

const overviewMetrics: IconCard[] = [
  { icon: BadgeCheck, title: "15+ năm", content: "Kinh nghiệm triển khai" },
  { icon: Building2, title: "500+", content: "Công trình hoàn thiện" },
  { icon: Factory, title: "5000m²+", content: "Quy mô xưởng sản xuất" },
  { icon: UsersRound, title: "98%", content: "Khách hàng hài lòng" },
  {
    icon: MapPinned,
    title: "Nhiều khu vực",
    content: "Hà Nội, TP. Hồ Chí Minh và các tỉnh thành",
  },
  {
    icon: Layers3,
    title: "Trọn quy trình",
    content: "Thiết kế, thi công, cải tạo và sản xuất nội thất",
  },
];

const pillars: IconCard[] = [
  {
    icon: PencilRuler,
    title: "Năng lực thiết kế",
    content: "Sáng tạo, tối ưu công năng và phát triển phương án phù hợp với từng gia chủ.",
  },
  {
    icon: HardHat,
    title: "Năng lực thi công",
    content: "Quản lý chặt chẽ từ hiện trường đến tiến độ, an toàn và chất lượng hoàn thiện.",
  },
  {
    icon: Factory,
    title: "Sản xuất nội thất",
    content: "Chủ động xưởng, vật liệu và quy trình kiểm soát chất lượng trước lắp đặt.",
  },
  {
    icon: ClipboardCheck,
    title: "Quản lý dự án",
    content: "Thông tin minh bạch, phối hợp nhịp nhàng và đồng hành xuyên suốt công trình.",
  },
];

const designPrinciples = [
  "Nghiên cứu kỹ nhu cầu và thói quen sử dụng",
  "Tối ưu công năng, bố trí không gian hợp lý",
  "Đề xuất phong cách và vật liệu phù hợp",
  "Hồ sơ kỹ thuật và phối cảnh 3D rõ ràng",
];

const constructionPrinciples = [
  "Thi công phần thô và hoàn thiện",
  "Giám sát tiến độ chặt chẽ",
  "Kiểm soát chất lượng toàn diện",
  "Phối hợp đa bộ môn hiệu quả",
  "Đảm bảo an toàn lao động",
  "Minh bạch chi phí, không phát sinh",
];

const factoryMetrics: IconCard[] = [
  { icon: UsersRound, title: "50+", content: "Nhân sự lành nghề" },
  { icon: Factory, title: "Máy móc", content: "Hiện đại, tiên tiến" },
  { icon: Box, title: "Đa dạng", content: "Vật liệu và hoàn thiện" },
  { icon: ShieldCheck, title: "Kiểm tra", content: "Chất lượng trước xuất xưởng" },
];

const processSteps: IconCard[] = [
  { icon: Handshake, title: "Tiếp nhận nhu cầu", content: "Lắng nghe mong muốn và tiếp nhận thông tin ban đầu." },
  { icon: MapPinned, title: "Khảo sát & tư vấn", content: "Đánh giá hiện trạng, tư vấn giải pháp phù hợp." },
  { icon: PencilRuler, title: "Thiết kế & báo giá", content: "Hoàn thiện phương án và dự toán chi tiết." },
  { icon: Factory, title: "Sản xuất & thi công", content: "Triển khai đúng tiến độ, kiểm soát từng hạng mục." },
  { icon: ClipboardCheck, title: "Nghiệm thu & bàn giao", content: "Kiểm tra hoàn thiện trước khi bàn giao." },
  { icon: ShieldCheck, title: "Bảo hành & hậu mãi", content: "Đồng hành, hỗ trợ trong quá trình sử dụng." },
];

const customerReasons: IconCard[] = [
  { icon: UsersRound, title: "Đội ngũ kinh nghiệm", content: "Kiến trúc sư, kỹ sư và thợ lành nghề phối hợp đồng bộ." },
  { icon: Lightbulb, title: "Giải pháp tối ưu", content: "Cân bằng thẩm mỹ, công năng, ngân sách và độ bền." },
  { icon: ClipboardCheck, title: "Quy trình rõ ràng", content: "Quản trị theo từng giai đoạn, cập nhật minh bạch." },
  { icon: Factory, title: "Chủ động sản xuất", content: "Kiểm soát tiến độ và chất lượng từng hạng mục nội thất." },
  { icon: ShieldCheck, title: "Bảo hành tận tâm", content: "Hỗ trợ nhanh chóng sau khi công trình hoàn thiện." },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-7 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#5d5447]">
          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#a0783e]" strokeWidth={2} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CapabilityPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative min-h-[620px] overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]">
        <SiteHeader />
        <Image
          src="/images/nang-luc/banner.png"
          alt="Đội ngũ Tổ Ấm Hoàn Hảo trao đổi phương án thiết kế"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-[#f8f3ec]/86 sm:w-[68%] lg:w-[52%]" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1320px] items-end px-6 pb-16 pt-32 sm:px-10 lg:items-center lg:px-8">
          <div className="max-w-[540px]">
            <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]">
              <Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link>
              <span className="mx-3">/</span>
              <Link href="/gioi-thieu" className="transition hover:text-[#9a733e]">Giới thiệu</Link>
              <span className="mx-3">/</span>
              <span>Năng lực thiết kế & thi công</span>
            </nav>
            <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Giới thiệu</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">
              Năng lực <em className="text-[#74785f]">thiết kế & thi công</em>
            </h1>
            <p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">
              Từ tư vấn, thiết kế đến thi công và sản xuất nội thất, mọi hạng mục được kết nối trong một quy trình thống nhất để đáp ứng đúng nhu cầu của từng khách hàng.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#nang-luc-thiet-ke" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Xem hồ sơ năng lực</a>
              <ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Liên hệ tư vấn</ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-10 border-b border-[#dfd3c3] pb-16 lg:grid-cols-[0.7fr_1.3fr] lg:pb-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Tổng quan năng lực</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Nền tảng cho những không gian bền vững</h2>
            <p className="mt-5 text-sm leading-7 text-[#61584b]">Với đội ngũ kiến trúc sư, kỹ sư và hệ thống sản xuất chủ động, chúng tôi xây dựng giải pháp phù hợp từ bản vẽ đến lúc công trình đi vào sử dụng.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {overviewMetrics.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="min-h-[154px] border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.35} /><p className="mt-5 font-serif text-2xl text-[#322b21]">{item.title}</p><p className="mt-1 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>;
            })}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Bốn trụ cột năng lực</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return <article key={pillar.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.3} /><h2 className="mt-8 text-sm font-bold uppercase tracking-[0.06em] text-[#342d23]">{pillar.title}</h2><p className="mt-4 text-xs leading-6 text-[#71675a]">{pillar.content}</p></article>;
            })}
          </div>
        </section>

        <section id="nang-luc-thiet-ke" className="grid gap-9 border-t border-[#dfd3c3] py-16 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Năng lực thiết kế</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Bắt đầu từ cách mỗi gia đình sống</h2>
            <p className="mt-5 text-sm leading-7 text-[#61584b]">Mỗi phương án thiết kế được phát triển từ hiện trạng, nhu cầu sử dụng, gu thẩm mỹ và mức đầu tư thực tế của gia chủ.</p>
            <div className="mt-7"><CheckList items={designPrinciples} /></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <article className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><PencilRuler aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><p className="mt-6 text-sm font-bold text-[#3a3126]">Kiến trúc & nội thất</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">Phát triển phương án kiến trúc và nội thất đồng bộ, tối ưu công năng và thẩm mỹ.</p></article>
            <article className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><BadgeCheck aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><p className="mt-6 text-sm font-bold text-[#3a3126]">Hồ sơ kỹ thuật</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">Bản vẽ 2D, phối cảnh 3D và hồ sơ chi tiết từng hạng mục nội thất.</p></article>
            <article className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Lightbulb aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><p className="mt-6 text-sm font-bold text-[#3a3126]">Tư vấn vật liệu</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">Đề xuất chất liệu phù hợp với ngân sách, phong cách và điều kiện sử dụng thực tế.</p></article>
          </div>
        </section>

        <section className="border-t border-[#dfd3c3] py-16 lg:py-20">
          <div className="lg:py-4"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Năng lực thi công</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Kiểm soát chất lượng ở từng hạng mục</h2><p className="mt-5 max-w-[760px] text-sm leading-7 text-[#61584b]">Quy trình thi công chuyên nghiệp kết nối từ vật tư, nhân công, giám sát đến nghiệm thu, giúp công trình đạt đúng cam kết đã thống nhất.</p><div className="mt-7"><CheckList items={constructionPrinciples} /></div><div className="mt-9 grid max-w-[760px] grid-cols-3 gap-3">{["Đúng tiến độ", "Đúng bản vẽ", "Đúng chất lượng"].map((item) => <div key={item} className="border border-[#e0d5c6] bg-[#fdfaf6] px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.06em] text-[#755d3c]">{item}</div>)}</div></div>
        </section>

        <section className="border-t border-[#dfd3c3] py-16 lg:py-20">
          <div className="grid gap-9 lg:grid-cols-[0.76fr_1.24fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Nhà máy & sản xuất nội thất</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Chủ động từ xưởng đến công trình</h2><p className="mt-5 text-sm leading-7 text-[#61584b]">Xưởng sản xuất giúp chúng tôi kiểm soát tiến độ, chất lượng hoàn thiện và sự đồng bộ giữa phương án thiết kế với sản phẩm thực tế.</p><Link href="/gioi-thieu/xuong-san-xuat-noi-that" className="mt-7 inline-flex h-10 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Tham quan xưởng sản xuất</Link></div><div className="grid gap-3 sm:grid-cols-3">
            <article className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Factory aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><p className="mt-6 text-sm font-bold text-[#3a3126]">Dây chuyền hiện đại</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">Máy móc tiên tiến, vận hành bởi đội ngũ thợ lành nghề qua đào tạo bài bản.</p></article>
            <article className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Box aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><p className="mt-6 text-sm font-bold text-[#3a3126]">Đa dạng vật liệu</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">Gỗ công nghiệp, gỗ tự nhiên và nhiều phương án hoàn thiện bề mặt.</p></article>
            <article className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><ShieldCheck aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><p className="mt-6 text-sm font-bold text-[#3a3126]">Kiểm soát chất lượng</p><p className="mt-3 text-xs leading-6 text-[#756b5e]">Kiểm tra từng công đoạn và nghiệm thu trước khi xuất xưởng lắp đặt.</p></article>
          </div></div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{factoryMetrics.map((metric) => { const Icon = metric.icon; return <article key={metric.title} className="flex items-center gap-4 border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-[#a0783e]" strokeWidth={1.3} /><div><p className="font-serif text-xl text-[#332c22]">{metric.title}</p><p className="text-xs leading-5 text-[#756b5e]">{metric.content}</p></div></article>; })}</div>
        </section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình triển khai</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{processSteps.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><Icon aria-hidden="true" className="mt-5 h-7 w-7 text-[#a0783e]" strokeWidth={1.3} /><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{step.title}</h2><p className="mt-3 text-xs leading-5 text-[#756b5e]">{step.content}</p></article>; })}</div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lý do khách hàng tin chọn</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{customerReasons.map((reason) => { const Icon = reason.icon; return <article key={reason.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} /><h2 className="mt-6 text-sm font-bold text-[#3a3126]">{reason.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{reason.content}</p></article>; })}</div></section>

      </div>

      <section id="tu-van" className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Sparkles aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng đồng hành cùng công trình của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Chia sẻ nhu cầu của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn lộ trình phù hợp cho không gian sắp tới.</p><ConsultationButton className="mt-8 inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton></div></section>
      <SiteFooter />
    </main>
  );
}
