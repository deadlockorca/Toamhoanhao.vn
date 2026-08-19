import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  CircleAlert,
  ClipboardList,
  Coins,
  FilePenLine,
  Hammer,
  HandCoins,
  House,
  ListChecks,
  PencilRuler,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kinh nghiệm xây nhà | Tổ Ấm Hoàn Hảo",
  description: "Cẩm nang xây nhà thực tế: quy trình, chi phí, lưu ý quan trọng và kinh nghiệm triển khai.",
};

const preparation = [
  { icon: SearchCheck, title: "Xác định nhu cầu", content: "Xác định nhu cầu, số lượng thành viên, phong cách và tiện ích mong muốn." },
  { icon: ClipboardList, title: "Tìm hiểu & tham khảo", content: "Tìm hiểu quy trình, chi phí và vật liệu để có lựa chọn phù hợp." },
  { icon: ListChecks, title: "Lập kế hoạch tổng thể", content: "Lập kế hoạch ngân sách, tiến độ và lựa chọn đơn vị thiết kế, thi công." },
  { icon: HandCoins, title: "Chuẩn bị tài chính", content: "Dự toán chi phí và dự phòng khoản phát sinh hợp lý." },
];

const steps = [
  { icon: House, title: "Chuẩn bị nhu cầu", content: "Xác định nhu cầu sử dụng, quy mô, phong cách và tiện ích mong muốn." },
  { icon: Coins, title: "Lập ngân sách", content: "Phân bổ chi phí từng hạng mục, dự phòng cho phát sinh." },
  { icon: PencilRuler, title: "Thiết kế", content: "Lên phương án mặt bằng, thiết kế kiến trúc và hồ sơ kỹ thuật." },
  { icon: FilePenLine, title: "Xin phép xây dựng", content: "Chuẩn bị giấy phép xây dựng theo quy định khu vực." },
  { icon: Hammer, title: "Thi công xây dựng", content: "Quản lý chất lượng theo bản vẽ, giám sát từng công đoạn." },
  { icon: ShieldCheck, title: "Hoàn thiện & nghiệm thu", content: "Hoàn thiện, bàn giao và kiểm tra kỹ trước khi đưa vào sử dụng." },
];

const budgetItems = [
  { icon: Building2, value: "60-70%", title: "Chi phí xây thô", content: "Phần lớn ngân sách tập trung vào kết cấu và hoàn thiện thô." },
  { icon: BriefcaseBusiness, value: "20-30%", title: "Chi phí hoàn thiện", content: "Bao gồm vật liệu hoàn thiện và thiết bị cơ bản." },
  { icon: BadgeDollarSign, value: "10-15%", title: "Dự phòng phát sinh", content: "Dự phòng cho rủi ro và phát sinh trong quá trình." },
  { icon: Calculator, value: "5-10%", title: "Khi có kế hoạch tốt", content: "Kế hoạch chi tiết giúp kiểm soát chi phí và tránh lãng phí." },
];

const mistakes = [
  ["Không có kế hoạch rõ ràng", "Dễ phát sinh chi phí, chậm tiến độ và không đạt thẩm mỹ mong muốn."],
  ["Chọn nhà thầu kém uy tín", "Chất lượng thi công kém, báo giá thiếu rõ ràng và nhiều rủi ro."],
  ["Bỏ qua thiết kế chi tiết", "Thi công sai, phát sinh chi phí và khó tối ưu công năng."],
  ["Không giám sát chặt chẽ", "Chất lượng thi công không bảo đảm, sai lệch so với bản vẽ."],
  ["Chọn vật liệu không phù hợp", "Ảnh hưởng độ bền, thẩm mỹ và làm tăng chi phí bảo trì."],
];

const articles = [
  { date: "15/05/2024", title: "Quy trình xây nhà trọn gói từ A-Z", content: "Tìm hiểu chi tiết quy trình xây nhà trọn gói gồm những bước nào, cần lưu ý điều gì.", image: "/images/gioi-thieu/thuong-hieu.png" },
  { date: "10/05/2024", title: "Dự toán chi phí xây nhà năm 2024", content: "Cập nhật bảng giá xây dựng mới nhất và cách dự toán chi phí hợp lý.", image: "/images/gioi-thieu/banner.png" },
  { date: "05/05/2024", title: "Những lưu ý khi giám sát thi công", content: "Kinh nghiệm giám sát thi công hiệu quả để đảm bảo chất lượng và tiến độ.", image: "/images/nang-luc/banner.png" },
  { date: "30/04/2024", title: "Kinh nghiệm chọn vật liệu xây dựng", content: "Cách chọn vật liệu phù hợp chất lượng, thẩm mỹ và tối ưu chi phí.", image: "/images/xuong-san-xuat/banner.png" },
  { date: "25/04/2024", title: "Các bước nghiệm thu nhà ở đúng chuẩn", content: "Hướng dẫn những bước chi tiết từng hạng mục trước khi bàn giao ngôi nhà.", image: "/images/doi-ngu/banner.png" },
  { date: "20/04/2024", title: "Xây nhà lần đầu cần chuẩn bị gì?", content: "Checklist những việc cần chuẩn bị trước khi xây nhà lần đầu để không bỡ ngỡ.", image: "/images/gioi-thieu/thuong-hieu.png" },
  { date: "18/04/2024", title: "Kinh nghiệm làm việc với nhà thầu", content: "Cách lựa chọn, ký kết và làm việc hiệu quả với nhà thầu xây dựng uy tín.", image: "/images/nang-luc/banner.png" },
  { date: "15/04/2024", title: "Mẹo tối ưu công năng khi xây nhà", content: "Các giải pháp thiết kế thông minh, tối ưu công năng và không gian sống.", image: "/images/gioi-thieu/banner.png" },
  { date: "12/04/2024", title: "Cách hạn chế phát sinh chi phí", content: "Những nguyên nhân gây phát sinh chi phí và cách kiểm soát hiệu quả.", image: "/images/xuong-san-xuat/banner.png" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-3xl text-[#30291f]">{children}</h2>;
}

export default function BuildingExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2c261e]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[520px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-end bg-[#f8f3ec]/90 px-6 pb-14 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[525px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><span>Kinh nghiệm xây nhà</span></nav><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Kiến thức</p><h1 className="mt-4 font-serif text-5xl leading-[1.04] text-[#1f1a13] sm:text-6xl">Kinh nghiệm xây nhà</h1><p className="mt-6 max-w-[455px] text-base leading-8 text-[#584f43]">Cẩm nang xây nhà thực tế và dễ hiểu từ Tổ Ấm Hoàn Hảo. Chia sẻ quy trình, chi phí, lưu ý quan trọng giúp bạn xây nhà đúng kế hoạch, tiết kiệm và bền vững.</p></div></div>
          <div className="relative min-h-[320px] lg:min-h-full"><Image src="/images/gioi-thieu/thuong-hieu.png" alt="Công trình nhà ở hiện đại" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center" /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-20">
        <div className="min-w-0 space-y-16">
          <section><div className="flex gap-5"><House aria-hidden="true" className="hidden h-14 w-14 shrink-0 text-[#a0783e] sm:block" strokeWidth={1.1} /><div><SectionTitle>Xây nhà bắt đầu từ đâu?</SectionTitle><p className="mt-3 max-w-[780px] text-sm leading-7 text-[#62594d]">Xây nhà là một hành trình lớn và quan trọng. Bắt đầu đúng ngay từ bước đầu tiên sẽ giúp bạn chủ động về thời gian, kiểm soát chi phí và đạt được ngôi nhà như mong muốn.</p></div></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{preparation.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

          <section><SectionTitle>Các giai đoạn quan trọng khi xây nhà</SectionTitle><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{steps.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="relative border border-[#e0d5c6] bg-[#fdfaf6] p-5"><span className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a7650] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" className="mt-4 h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

          <section><SectionTitle>Những lưu ý giúp xây nhà hiệu quả</SectionTitle><div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Xác định rõ nhu cầu và ưu tiên các không gian quan trọng", "Giám sát thi công thường xuyên, theo dõi tiến độ sát sao", "Lựa chọn đơn vị thiết kế - thi công uy tín, có kinh nghiệm", "Ưu tiên vật liệu chất lượng, phù hợp ngân sách", "Lập kế hoạch ngân sách chi tiết, dự phòng 10-15% chi phí", "Nghiệm thu từng hạng mục, đảm bảo đúng tiêu chuẩn"].map((item) => <p key={item} className="flex gap-3 text-sm leading-6 text-[#62594d]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#82714d]" strokeWidth={2.5} />{item}</p>)}</div></section>

          <section><SectionTitle>Chi phí và cách tối ưu ngân sách</SectionTitle><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{budgetItems.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><p className="mt-5 font-serif text-2xl text-[#3b3329]">{item.value}</p><h3 className="mt-1 text-sm font-bold text-[#4b4033]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>

          <section><SectionTitle>Sai lầm thường gặp khi xây nhà</SectionTitle><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{mistakes.map(([title, content]) => <article key={title} className="border border-[#ead8d0] bg-[#fdf8f4] p-4"><CircleAlert aria-hidden="true" className="h-6 w-6 text-[#c97261]" strokeWidth={1.2} /><h3 className="mt-4 text-xs font-bold leading-5 text-[#514337]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#806e62]">{content}</p></article>)}</div></section>

          <section><div className="flex flex-wrap items-end justify-between gap-4"><div><SectionTitle>Bài viết về kinh nghiệm xây nhà</SectionTitle><p className="mt-2 text-sm text-[#756b5e]">Những chia sẻ thực tế giúp bạn xây nhà dễ dàng, đúng kế hoạch và tiết kiệm chi phí.</p></div><span className="text-xs font-bold uppercase tracking-[0.05em] text-[#7b623d]">Xem tất cả bài viết</span></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article key={article.title} className="overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6]"><div className="relative aspect-[1.55]"><Image src={article.image} alt="" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" /></div><div className="p-5"><p className="text-xs text-[#8d7c66]">{article.date}</p><h3 className="mt-2 font-serif text-xl leading-tight text-[#332b21]">{article.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{article.content}</p></div></article>)}</div></section>
        </div>

        <aside className="h-fit space-y-5 lg:sticky lg:top-8"><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Mục lục</h2><ol className="mt-5 space-y-3 text-xs leading-5 text-[#74695c]">{["Xây nhà bắt đầu từ đâu?", "Các giai đoạn khi xây nhà", "Những lưu ý quan trọng", "Chi phí và tối ưu ngân sách", "Sai lầm thường gặp"].map((item, index) => <li key={item} className="flex gap-2"><span>{index + 1}.</span><span>{item}</span></li>)}</ol></section><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Bài viết mới</h2><div className="mt-5 space-y-4">{articles.slice(0, 5).map((article) => <article key={article.title} className="flex gap-3"><div className="relative h-14 w-16 shrink-0 overflow-hidden"><Image src={article.image} alt="" fill sizes="64px" className="object-cover" /></div><div><h3 className="text-xs font-bold leading-5 text-[#4b4033]">{article.title}</h3><p className="mt-1 text-[11px] text-[#8d7c66]">{article.date}</p></div></article>)}</div></section><section className="border border-[#e0d5c6] bg-[#f3eade] p-6"><BookOpenCheck aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.2} /><h2 className="mt-5 font-serif text-2xl text-[#3b3024]">Cẩm nang xây nhà</h2><p className="mt-3 text-xs leading-6 text-[#74695c]">Các kiến thức thực tế về quy trình, chi phí, vật liệu và kinh nghiệm triển khai công trình.</p></section></aside>
      </div>
      <SiteFooter />
    </main>
  );
}
