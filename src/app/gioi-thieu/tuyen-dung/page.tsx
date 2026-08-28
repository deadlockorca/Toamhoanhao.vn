import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon, LucideProps } from "lucide-react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Check,
  Clock3,
  Compass,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Leaf,
  Mail,
  MapPinned,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Wallet,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Tuyển dụng | Tổ Ấm Hoàn Hảo",
  description:
    "Cơ hội nghề nghiệp tại Tổ Ấm Hoàn Hảo: kiến trúc sư, kỹ sư nội thất, nhân viên kinh doanh và nhiều vị trí khác. Môi trường làm việc chuyên nghiệp, chế độ đãi ngộ hấp dẫn.",
};

type IconCard = { icon: LucideIcon; title: string; content: string };

const values: IconCard[] = [
  {
    icon: HeartHandshake,
    title: "Tận tâm",
    content: "Đặt lợi ích khách hàng lên hàng đầu, phục vụ như người thân trong gia đình.",
  },
  {
    icon: Target,
    title: "Chính trực",
    content: "Minh bạch trong chi phí, cam kết đúng tiến độ và chất lượng đã thống nhất.",
  },
  {
    icon: Sparkles,
    title: "Sáng tạo",
    content: "Không ngừng cập nhật xu hướng, đưa ra những giải pháp mới mẻ và khác biệt.",
  },
  {
    icon: TrendingUp,
    title: "Phát triển",
    content: "Tạo môi trường để mỗi cá nhân học hỏi, thăng tiến cùng sự lớn mạnh của công ty.",
  },
];

const positions = [
  {
    icon: GraduationCap,
    title: "Kiến trúc sư nội thất",
    department: "Phòng thiết kế",
    count: "02 vị trí",
    salary: "10 – 20 triệu/tháng",
    description:
      "Phát triển phương án thiết kế 2D/3D, phối cảnh và hồ sơ kỹ thuật cho các công trình nội thất.",
    requirements: [
      "Tốt nghiệp chuyên ngành kiến trúc, nội thất hoặc tương đương",
      "Thành thạo AutoCAD, SketchUp, 3ds Max hoặc tương đương",
      "Kinh nghiệm 1 – 3 năm trong lĩnh vực thiết kế nội thất",
      "Tư duy thẩm mỹ tốt, chủ động và trách nhiệm với công việc",
    ],
  },
  {
    icon: HardHatIcon,
    title: "Kỹ sư / Giám sát thi công",
    department: "Phòng thi công",
    count: "02 vị trí",
    salary: "12 – 20 triệu/tháng",
    description:
      "Giám sát tiến độ, chất lượng và an toàn tại công trình; phối hợp giữa xưởng sản xuất và hiện trường.",
    requirements: [
      "Tốt nghiệp chuyên ngành xây dựng, kiến trúc hoặc tương đương",
      "Kinh nghiệm tối thiểu 2 năm giám sát thi công nội thất",
      "Hiểu biết về vật liệu và quy trình thi công nội thất",
      "Kỹ năng quản lý công việc, giao tiếp và xử lý tình huống",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Nhân viên kinh doanh",
    department: "Phòng kinh doanh",
    count: "03 vị trí",
    salary: "10 – 25 triệu/tháng (lương + hoa hồng)",
    description:
      "Tư vấn khách hàng, chăm sóc quan hệ, tiếp nhận yêu cầu và phối hợp các bộ phận để chốt hợp đồng.",
    requirements: [
      "Kỹ năng giao tiếp, đàm phán và xây dựng quan hệ tốt",
      "Ưu tiên ứng viên có kinh nghiệm trong ngành nội thất, xây dựng",
      "Năng động, nhiệt tình, chịu được áp lực công việc",
    ],
  },
  {
    icon: Compass,
    title: "Thợ thi công / Thợ lắp đặt",
    department: "Phòng thi công",
    count: "05 vị trí",
    salary: "Thỏa thuận theo tay nghề",
    description:
      "Thi công, lắp đặt nội thất tại công trình; đảm bảo chất lượng, đúng bản vẽ và tiến độ.",
    requirements: [
      "Tay nghề vững, có kinh nghiệm thi công nội thất 1 năm trở lên",
      "Cẩn thận, tỉ mỉ và chấp hành tốt quy trình an toàn lao động",
      "Sẵn sàng đi công trình ngoại tỉnh khi được phân công",
    ],
  },
];

const benefits: IconCard[] = [
  { icon: Wallet, title: "Thu nhập cạnh tranh", content: "Lương thỏa đáng theo năng lực, thưởng theo hiệu quả công việc và dự án." },
  { icon: Building2, title: "Bảo hiểm đầy đủ", content: "Bảo hiểm xã hội, y tế và chế độ phúc lợi theo quy định của công ty." },
  { icon: GraduationCap, title: "Đào tạo chuyên môn", content: "Cơ hội học hỏi từ đội ngũ giàu kinh nghiệm và các khóa đào tạo nội bộ." },
  { icon: TrendingUp, title: "Lộ trình thăng tiến", content: "Đánh giá định kỳ, cơ hội thăng tiến rõ ràng theo năng lực và đóng góp." },
  { icon: UsersRound, title: "Môi trường trẻ trung", content: "Văn hóa cởi mở, hỗ trợ lẫn nhau giữa các phòng ban." },
  { icon: CalendarClock, title: "Hoạt động tập thể", content: "Team building, sự kiện liên hoan và các hoạt động gắn kết thường niên." },
];

const processSteps = [
  { icon: Send, title: "Nộp hồ sơ", content: "Gửi CV và hồ sơ ứng tuyển qua email hoặc liên hệ trực tiếp." },
  { icon: Handshake, title: "Phỏng vấn", content: "Trao đổi trực tiếp với phòng nhân sự và phòng ban chuyên môn." },
  { icon: ClipboardCheckIcon, title: "Đánh giá", content: "Làm bài test năng lực hoặc thử việc tùy theo vị trí." },
  { icon: Rocket, title: "Nhận việc", content: "Thông báo kết quả và hướng dẫn nhận việc, hội nhập đội ngũ." },
];

function HardHatIcon(props: LucideProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
    </svg>
  );
}

function ClipboardCheckIcon(props: LucideProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]">
          <div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0">
            <div className="max-w-[540px]">
              <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]">
                <Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link>
                <span className="mx-3">/</span>
                <Link href="/gioi-thieu" className="transition hover:text-[#9a733e]">Giới thiệu</Link>
                <span className="mx-3">/</span>
                <span>Tuyển dụng</span>
              </nav>
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Giới thiệu</p>
              <h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">
                Tuyển <em className="not-italic">dụng</em>
              </h1>
              <p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">
                Cùng chung tay kiến tạo những không gian sống lý tưởng. Tổ Ấm Hoàn Hảo luôn chào đón những
                con người đam mê, sáng tạo và trách nhiệm.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#vi-tri" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Xem vị trí tuyển dụng</a>
                <a href="mailto:hotro.toamhoanhao@gmail.com" className="inline-flex h-11 items-center gap-2 border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]"><Mail aria-hidden="true" className="h-4 w-4" />Gửi hồ sơ</a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px] lg:min-h-full">
            <Image src="/images/gioi-thieu/tuyen-dung.png" alt="Tuyển dụng Tổ Ấm Hoàn Hảo" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="border-b border-[#dfd3c3] pb-16 lg:pb-20">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Văn hóa công ty</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Giá trị chúng tôi theo đuổi</h2>
            <p className="mt-5 text-sm leading-7 text-[#61584b]">
              Chúng tôi tin rằng một tập thể vững mạnh được xây dựng từ những cá nhân có chung giá trị.
              Đó là nền tảng để Tổ Ấm Hoàn Hảo phát triển bền vững.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.3} /><h2 className="mt-7 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{item.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{item.content}</p></article>;
            })}
          </div>
        </section>

        <section id="vi-tri" className="py-16 lg:py-20">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cơ hội nghề nghiệp</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f]">Các vị trí đang tuyển dụng</h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {positions.map((position) => {
              const Icon = position.icon;
              return <article key={position.title} className="flex flex-col border border-[#e0d5c6] bg-[#fdfaf6] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4"><Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-[#a0783e]" strokeWidth={1.3} /><div><h3 className="font-serif text-2xl text-[#322b21]">{position.title}</h3><p className="mt-1 text-xs font-semibold text-[#755d3c]">{position.department}</p></div></div>
                  <span className="shrink-0 border border-[#d8cbb4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#755d3c]">{position.count}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#61584b]">{position.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#4a4034]"><Wallet aria-hidden="true" className="h-4 w-4 text-[#a0783e]" />{position.salary}</div>
                <div className="mt-6 border-t border-[#e8dccb] pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8c795f]">Yêu cầu</p>
                  <ul className="mt-3 space-y-2">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-xs leading-5 text-[#71675a]"><Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8b7048]" strokeWidth={2.2} />{req}</li>
                    ))}
                  </ul>
                </div>
                <a href="mailto:hotro.toamhoanhao@gmail.com?subject=Ứng tuyển" className="mt-7 inline-flex h-11 items-center justify-center gap-2 bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]"><Send aria-hidden="true" className="h-4 w-4" />Ứng tuyển vị trí này</a>
              </article>;
            })}
          </div>
        </section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Chế độ đãi ngộ</p>
          <h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-4xl leading-tight text-[#30291f]">Quyền lợi khi làm việc tại Tổ Ấm Hoàn Hảo</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="flex gap-5 border border-[#e0d5c6] bg-[#fdfaf6] p-6"><Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-[#a0783e]" strokeWidth={1.3} /><div><h3 className="text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-2 text-xs leading-6 text-[#756b5e]">{item.content}</p></div></article>;
            })}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Quy trình ứng tuyển</p>
          <h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-4xl leading-tight text-[#30291f]">Bốn bước trở thành thành viên Tổ Ấm</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return <article key={step.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><p className="font-serif text-2xl text-[#a0783e]">{String(index + 1).padStart(2, "0")}</p><Icon aria-hidden="true" className="mt-5 h-7 w-7 text-[#a0783e]" strokeWidth={1.3} /><h2 className="mt-5 text-sm font-bold uppercase tracking-[0.05em] text-[#3d352b]">{step.title}</h2><p className="mt-3 text-xs leading-6 text-[#756b5e]">{step.content}</p></article>;
            })}
          </div>
          <div className="mx-auto mt-10 flex max-w-[760px] flex-col items-center gap-4 border border-[#e0d5c6] bg-[#fdfaf6] p-7 text-center sm:p-9">
            <Mail aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.3} />
            <h2 className="font-serif text-3xl text-[#30291f]">Gửi hồ sơ ứng tuyển</h2>
            <p className="text-sm leading-7 text-[#61584b]">Hãy gửi CV kèm portfolio (nếu có) về địa chỉ email bên dưới, tiêu đề: <strong>[Tuyển dụng] – Vị trí – Họ tên</strong>.</p>
            <a href="mailto:hotro.toamhoanhao@gmail.com" className="mt-2 inline-flex h-11 items-center gap-2 bg-[#70745d] px-6 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]"><Send aria-hidden="true" className="h-4 w-4" />hotro.toamhoanhao@gmail.com</a>
            <p className="mt-3 flex items-center gap-2 text-xs text-[#827768]"><Clock3 aria-hidden="true" className="h-4 w-4 text-[#a0783e]" />Chúng tôi sẽ liên hệ với ứng viên phù hợp trong vòng 5 ngày làm việc.</p>
          </div>
        </section>
      </div>

      <section id="tu-van" className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><ShieldCheck aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng gia nhập đội ngũ Tổ Ấm Hoàn Hảo?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Liên hệ với chúng tôi để biết thêm thông tin chi tiết về các vị trí tuyển dụng.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><a href="mailto:hotro.toamhoanhao@gmail.com" className="inline-flex h-11 items-center gap-2 bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]"><Mail aria-hidden="true" className="h-4 w-4" />Gửi hồ sơ ngay</a><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
