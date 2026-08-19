import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Handshake,
  HardHat,
  HeartHandshake,
  House,
  Lightbulb,
  PenTool,
  Ruler,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Đội ngũ kiến trúc sư | Tổ Ấm Hoàn Hảo",
  description:
    "Đội ngũ kiến trúc sư, kỹ sư và chuyên gia triển khai của Tổ Ấm Hoàn Hảo.",
};

type IconCard = {
  icon: LucideIcon;
  title: string;
  content: string;
};

const teamMembers = [
  {
    prefix: "Thạc sĩ, Kiến trúc sư",
    name: "Nguyễn Quốc Dũng",
    role: "Giám đốc thiết kế",
    description:
      "Hơn 15 năm kinh nghiệm trong lĩnh vực kiến trúc và nội thất. Định hướng thiết kế cân bằng giữa thẩm mỹ, công năng và trải nghiệm sử dụng dài lâu.",
  },
  {
    prefix: "Kỹ sư",
    name: "Nguyễn Đức Cảnh",
    role: "Trưởng phòng kỹ thuật",
    description:
      "Chuyên gia triển khai hồ sơ kỹ thuật, kết cấu và chi tiết thi công. Đảm bảo bản vẽ chính xác, đồng bộ và khả thi tại công trình.",
  },
  {
    prefix: "Thạc sĩ, Kiến trúc sư",
    name: "Đinh Tuấn Anh",
    role: "Trưởng phòng thiết kế",
    description:
      "Tư duy sáng tạo, cập nhật xu hướng và phân tích nhu cầu khách hàng để tạo ra giải pháp thiết kế tối ưu, có chiều sâu và khác biệt.",
  },
  {
    prefix: "Kỹ sư",
    name: "Võ Sơn Thạch",
    role: "Trưởng phòng thi công",
    description:
      "Giàu kinh nghiệm hiện trường và quản lý thi công. Đảm bảo tiến độ, chất lượng và an toàn trong suốt quá trình triển khai.",
  },
];

const expertise: IconCard[] = [
  {
    icon: Building2,
    title: "Thiết kế kiến trúc",
    content: "Tạo nên không gian kiến trúc có cá tính, bền vững và phù hợp với môi trường sống.",
  },
  {
    icon: House,
    title: "Thiết kế nội thất",
    content: "Phát triển không gian tinh tế, mang đậm trải nghiệm và cảm xúc riêng.",
  },
  {
    icon: PenTool,
    title: "Triển khai hồ sơ kỹ thuật",
    content: "Hồ sơ chi tiết, chính xác và đồng bộ để thi công hiệu quả, minh bạch.",
  },
  {
    icon: HardHat,
    title: "Giám sát thi công",
    content: "Theo dõi chất lượng, tiến độ và tính đồng bộ từ bản vẽ đến hiện trường.",
  },
  {
    icon: Ruler,
    title: "Tối ưu công năng",
    content: "Phân tích nhu cầu để tổ chức không gian phù hợp với nhịp sống sử dụng.",
  },
  {
    icon: Sparkles,
    title: "Giải pháp vật liệu",
    content: "Tư vấn vật liệu phù hợp, bền đẹp, thân thiện và phù hợp mức đầu tư.",
  },
];

const process: IconCard[] = [
  { icon: Handshake, title: "Tiếp nhận nhu cầu", content: "Lắng nghe, trao đổi và hiểu rõ nhu cầu, phong cách của khách hàng." },
  { icon: Lightbulb, title: "Khảo sát & ý tưởng", content: "Khảo sát hiện trạng, phát triển ý tưởng và đề xuất phương án." },
  { icon: DraftingCompass, title: "Thiết kế chi tiết", content: "Phát triển phương án 2D/3D, phối cảnh và hồ sơ cần thiết." },
  { icon: ClipboardCheck, title: "Triển khai kỹ thuật", content: "Lập hồ sơ thi công chi tiết, đồng bộ giữa các bộ môn." },
  { icon: HardHat, title: "Giám sát thi công", content: "Giám sát chất lượng, tiến độ và an toàn tại công trình." },
  { icon: House, title: "Bàn giao & hậu mãi", content: "Bàn giao công trình, hướng dẫn sử dụng và bảo hành chu đáo." },
];

const metrics: IconCard[] = [
  { icon: BadgeCheck, title: "15+", content: "Năm kinh nghiệm" },
  { icon: Building2, title: "500+", content: "Công trình hoàn thiện" },
  { icon: UsersRound, title: "98%", content: "Khách hàng hài lòng" },
  { icon: ShieldCheck, title: "100%", content: "Minh bạch tiến độ" },
];

function MediaSlot({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`border border-dashed border-[#d7c8b4] bg-[#efe5d7]/55 ${className}`}
    />
  );
}

export default function ArchitectureTeamPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[590px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]">
          <div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0">
            <div className="max-w-[540px]">
              <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]">
                <Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link>
                <span className="mx-3">/</span>
                <Link href="/gioi-thieu" className="transition hover:text-[#9a733e]">Giới thiệu</Link>
                <span className="mx-3">/</span>
                <span>Đội ngũ kiến trúc sư</span>
              </nav>
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Giới thiệu</p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">
                Đội ngũ <em className="text-[#74785f]">kiến trúc sư</em>
              </h1>
              <p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">
                Những kiến trúc sư và kỹ sư giàu kinh nghiệm, đồng hành cùng bạn từ ý tưởng đến khi tổ ấm hoàn thiện.
              </p>
              <a href="#tu-van" className="mt-9 inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Liên hệ tư vấn</a>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden lg:min-h-full">
            <Image
              src="/images/doi-ngu/banner.png"
              alt="Đội ngũ kiến trúc sư Tổ Ấm Hoàn Hảo cùng trao đổi phương án thiết kế"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid gap-8 border-b border-[#dfd3c3] pb-16 lg:grid-cols-[0.48fr_1.2fr_0.18fr] lg:items-center">
          <MediaSlot className="aspect-square max-h-[230px]" />
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cách chúng tôi làm nghề</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Tư duy sáng tạo, giải pháp thực tiễn và sự đồng hành tận tâm</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Mỗi dự án là một câu chuyện riêng. Đội ngũ của Tổ Ấm Hoàn Hảo lắng nghe nhu cầu, phát triển giải pháp phù hợp với hiện trạng, ngân sách và nhịp sống của từng gia chủ.</p><p className="mt-4 text-sm leading-7 text-[#61584b]">Chúng tôi kết nối thiết kế, kỹ thuật và thi công trong một quy trình nhất quán để tạo nên không gian đẹp, bền vững và dễ sử dụng.</p></div>
          <HeartHandshake aria-hidden="true" className="hidden h-16 w-16 text-[#a0783e] lg:block" strokeWidth={1.15} />
        </section>

        <section className="py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Đội ngũ chủ chốt</p>
          <h2 className="mt-4 text-center font-serif text-4xl text-[#30291f]">Những người dẫn dắt từng công trình</h2>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="min-h-[290px] border border-[#e0d5c6] bg-[#fdfaf6] p-6">
                <UsersRound aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} />
                <p className="mt-10 text-xs text-[#776d5f]">{member.prefix}</p>
                <h3 className="mt-1 font-serif text-2xl text-[#322b21]">{member.name}</h3>
                <p className="mt-3 text-sm font-semibold text-[#755d3c]">{member.role}</p>
                <p className="mt-5 text-xs leading-6 text-[#71675a]">{member.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#dfd3c3] py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chuyên môn nổi bật</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {expertise.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-7 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>;
            })}
          </div>
        </section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình phối hợp</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><Icon aria-hidden="true" className="mt-5 h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><h2 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>;
            })}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Dấu ấn trong từng thiết kế</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1.5fr_0.8fr_0.8fr]">
            <MediaSlot className="aspect-[0.78]" />
            <MediaSlot className="aspect-[0.78]" />
            <MediaSlot className="aspect-[1.18] lg:aspect-auto" />
            <MediaSlot className="aspect-[0.78]" />
            <MediaSlot className="aspect-[0.78]" />
          </div>
        </section>
      </div>

      <section className="border-y border-[#dfd3c3] bg-[#fdfaf6] px-5 py-10 sm:px-8"><div className="mx-auto grid max-w-[1320px] gap-7 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((metric) => { const Icon = metric.icon; return <div key={metric.title} className="flex items-center gap-4 lg:justify-center"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.25} /><div><p className="font-serif text-3xl text-[#30291f]">{metric.title}</p><p className="text-xs leading-5 text-[#756b5e]">{metric.content}</p></div></div>; })}</div></section>

      <section id="tu-van" className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Sparkles aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Gặp gỡ đội ngũ đồng hành cùng tổ ấm của bạn</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Chia sẻ mong muốn của bạn để chúng tôi tư vấn hướng đi phù hợp cho không gian sắp tới.</p><a href="#" className="mt-8 inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</a></div></section>
      <SiteFooter />
    </main>
  );
}
