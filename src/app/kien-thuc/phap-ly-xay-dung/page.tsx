import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  Calculator,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  FilePenLine,
  FileSearch,
  Files,
  Gavel,
  Landmark,
  MapPinned,
  PencilRuler,
  Scale,
  SearchCheck,
  ShieldCheck,
  Stamp,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Pháp lý xây dựng | Tổ Ấm Hoàn Hảo",
  description: "Cẩm nang các thủ tục pháp lý, giấy phép và hồ sơ cần chuẩn bị trước khi xây dựng.",
};

const preparation = [
  { icon: FileSearch, title: "Kiểm tra pháp lý đất", content: "Rà soát thông tin quyền sử dụng đất và các giấy tờ liên quan trước khi triển khai." },
  { icon: MapPinned, title: "Tìm hiểu quy hoạch", content: "Kiểm tra chỉ giới, mật độ, chiều cao và quy định xây dựng theo khu vực." },
  { icon: Files, title: "Chuẩn bị hồ sơ", content: "Sắp xếp các giấy tờ cần thiết để việc xin phép diễn ra đầy đủ và thuận lợi." },
  { icon: SearchCheck, title: "Tham vấn chuyên môn", content: "Làm việc với đơn vị có chuyên môn để xác định hồ sơ phù hợp hiện trạng thực tế." },
];

const steps = [
  { icon: FileCheck2, title: "Rà soát hiện trạng", content: "Đối chiếu thông tin lô đất, giấy tờ sở hữu và các điều kiện xây dựng." },
  { icon: MapPinned, title: "Kiểm tra quy hoạch", content: "Xác định các chỉ tiêu quy hoạch, lộ giới và yêu cầu quản lý kiến trúc." },
  { icon: PencilRuler, title: "Lập hồ sơ thiết kế", content: "Chuẩn bị bản vẽ, thuyết minh và hồ sơ kỹ thuật theo yêu cầu của cơ quan quản lý." },
  { icon: Stamp, title: "Nộp hồ sơ cấp phép", content: "Hoàn thiện thủ tục và nộp hồ sơ tại cơ quan có thẩm quyền theo địa phương." },
  { icon: ClipboardCheck, title: "Triển khai đúng giấy phép", content: "Thi công phù hợp hồ sơ đã được phê duyệt, hạn chế thay đổi tùy tiện." },
  { icon: ShieldCheck, title: "Nghiệm thu & hoàn công", content: "Lưu trữ hồ sơ, nghiệm thu và thực hiện các thủ tục sau xây dựng khi cần." },
];

const budgetItems = [
  { icon: FilePenLine, value: "Hồ sơ", title: "Chuẩn bị đầy đủ", content: "Hồ sơ rõ ràng giúp giảm thời gian bổ sung, điều chỉnh trong quá trình xử lý." },
  { icon: Landmark, value: "Quy hoạch", title: "Kiểm tra sớm", content: "Nắm thông tin quy hoạch từ đầu giúp định hướng phương án thiết kế phù hợp." },
  { icon: BadgeDollarSign, value: "Chi phí", title: "Dự trù hợp lý", content: "Dự trù chi phí liên quan đến hồ sơ, tư vấn và thủ tục theo từng trường hợp." },
  { icon: Calculator, value: "Tiến độ", title: "Chủ động kế hoạch", content: "Dành thời gian cho khâu pháp lý để không ảnh hưởng kế hoạch triển khai công trình." },
];

const mistakes = [
  ["Không kiểm tra quy hoạch sớm", "Phương án thiết kế có thể phải điều chỉnh nhiều lần, ảnh hưởng tiến độ chung."],
  ["Hồ sơ thiếu hoặc sai thông tin", "Dễ phát sinh yêu cầu bổ sung, khiến quá trình xử lý kéo dài hơn dự kiến."],
  ["Thi công khác giấy phép", "Có thể dẫn đến rủi ro khi kiểm tra, nghiệm thu và hoàn thiện hồ sơ sau này."],
  ["Không lưu trữ hồ sơ", "Thiếu tài liệu đối chiếu khi cần sửa chữa, chuyển nhượng hoặc thực hiện thủ tục khác."],
  ["Áp dụng thông tin chung chung", "Quy định có thể khác theo địa phương và thời điểm, cần kiểm tra cho từng trường hợp."],
];

const articles = [
  { date: "15/05/2024", title: "Hồ sơ xin giấy phép xây dựng gồm những gì?", content: "Các nhóm giấy tờ cần chuẩn bị để bắt đầu thủ tục xin phép xây dựng.", image: "/images/gioi-thieu/thuong-hieu.png" },
  { date: "10/05/2024", title: "Cách kiểm tra thông tin quy hoạch", content: "Những thông tin cần rà soát trước khi lập phương án xây dựng nhà ở.", image: "/images/nang-luc/banner.png" },
  { date: "05/05/2024", title: "Những trường hợp cần lưu ý khi sửa nhà", content: "Phân biệt các hạng mục cải tạo và những việc nên kiểm tra trước khi thi công.", image: "/images/gioi-thieu/banner.png" },
  { date: "30/04/2024", title: "Kinh nghiệm chuẩn bị hồ sơ xây dựng", content: "Cách sắp xếp giấy tờ khoa học để việc trao đổi và xử lý hồ sơ thuận lợi hơn.", image: "/images/doi-ngu/banner.png" },
  { date: "25/04/2024", title: "Lưu ý khi nghiệm thu công trình", content: "Các điểm cần đối chiếu để bảo đảm công trình bám sát hồ sơ và yêu cầu đã thống nhất.", image: "/images/xuong-san-xuat/banner.png" },
  { date: "20/04/2024", title: "Quy hoạch ảnh hưởng gì đến thiết kế nhà?", content: "Hiểu vai trò của chỉ giới, mật độ và các yêu cầu quản lý kiến trúc.", image: "/images/gioi-thieu/thuong-hieu.png" },
  { date: "18/04/2024", title: "Các giấy tờ nên lưu sau khi xây nhà", content: "Danh mục hồ sơ nên lưu trữ để tiện đối chiếu và sử dụng về sau.", image: "/images/nang-luc/banner.png" },
  { date: "15/04/2024", title: "Khi nào nên tham vấn đơn vị chuyên môn?", content: "Những thời điểm cần trao đổi chuyên môn để tránh thiếu sót trong quá trình chuẩn bị.", image: "/images/doi-ngu/banner.png" },
  { date: "12/04/2024", title: "Lưu ý pháp lý khi cải tạo nhà ở", content: "Những đầu việc cần xác định trước khi thay đổi công năng hoặc kết cấu công trình.", image: "/images/gioi-thieu/banner.png" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-3xl text-[#30291f]">{children}</h2>;
}

export default function BuildingLegalPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2c261e]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[520px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="relative z-10 flex items-end bg-[#f8f3ec]/90 px-6 pb-14 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[525px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><span>Pháp lý xây dựng</span></nav><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Kiến thức</p><h1 className="mt-4 font-serif text-5xl leading-[1.04] text-[#1f1a13] sm:text-6xl">Pháp lý <em className="text-[#74785f]">xây dựng</em></h1><p className="mt-6 max-w-[455px] text-base leading-8 text-[#584f43]">Cẩm nang tổng hợp các đầu việc pháp lý thường gặp trước, trong và sau khi xây dựng, giúp bạn chuẩn bị hồ sơ chủ động hơn.</p></div></div><div className="relative min-h-[320px] lg:min-h-full"><Image src="/images/gioi-thieu/thuong-hieu.png" alt="Công trình nhà ở hiện đại" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center" /></div></div></section>

      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-20"><div className="min-w-0 space-y-16">
        <section><div className="flex gap-5"><Scale aria-hidden="true" className="hidden h-14 w-14 shrink-0 text-[#a0783e] sm:block" strokeWidth={1.1} /><div><SectionTitle>Pháp lý xây dựng bắt đầu từ đâu?</SectionTitle><p className="mt-3 max-w-[780px] text-sm leading-7 text-[#62594d]">Phần pháp lý cần được chuẩn bị trước khi chốt phương án và khởi công. Việc hiểu đúng hiện trạng, quy hoạch và hồ sơ liên quan giúp quá trình triển khai bớt gián đoạn, chủ động hơn về tiến độ.</p></div></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{preparation.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Các đầu việc pháp lý quan trọng</SectionTitle><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{steps.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="relative border border-[#e0d5c6] bg-[#fdfaf6] p-5"><span className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a7650] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" className="mt-4 h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Những lưu ý khi chuẩn bị thủ tục</SectionTitle><div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Kiểm tra thông tin quy hoạch tại cơ quan hoặc nguồn chính thức của địa phương", "Chuẩn bị giấy tờ theo đúng hiện trạng và thông tin chủ sở hữu", "Làm rõ đầu việc, thời gian xử lý và yêu cầu bổ sung hồ sơ", "Giữ phương án thiết kế bám sát quy hoạch và hồ sơ đã chuẩn bị", "Lưu trữ bản sao giấy tờ, biên nhận và các văn bản liên quan", "Tham vấn chuyên môn khi công trình có tình huống đặc thù"].map((item) => <p key={item} className="flex gap-3 text-sm leading-6 text-[#62594d]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#82714d]" strokeWidth={2.5} />{item}</p>)}</div></section>
        <section><SectionTitle>Chuẩn bị chi phí và tiến độ hợp lý</SectionTitle><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{budgetItems.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><p className="mt-5 font-serif text-2xl text-[#3b3329]">{item.value}</p><h3 className="mt-1 text-sm font-bold text-[#4b4033]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Sai lầm thường gặp về pháp lý xây dựng</SectionTitle><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{mistakes.map(([title, content]) => <article key={title} className="border border-[#ead8d0] bg-[#fdf8f4] p-4"><CircleAlert aria-hidden="true" className="h-6 w-6 text-[#c97261]" strokeWidth={1.2} /><h3 className="mt-4 text-xs font-bold leading-5 text-[#514337]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#806e62]">{content}</p></article>)}</div></section>
        <section><div className="flex flex-wrap items-end justify-between gap-4"><div><SectionTitle>Bài viết về pháp lý xây dựng</SectionTitle><p className="mt-2 text-sm text-[#756b5e]">Các nội dung tổng quan giúp bạn chuẩn bị tốt hơn trước khi làm việc với đơn vị chuyên môn và cơ quan quản lý.</p></div><span className="text-xs font-bold uppercase tracking-[0.05em] text-[#7b623d]">Xem tất cả bài viết</span></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article key={article.title} className="overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6]"><div className="relative aspect-[1.55]"><Image src={article.image} alt="" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" /></div><div className="p-5"><p className="text-xs text-[#8d7c66]">{article.date}</p><h3 className="mt-2 font-serif text-xl leading-tight text-[#332b21]">{article.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{article.content}</p></div></article>)}</div></section>
      </div><aside className="h-fit space-y-5 lg:sticky lg:top-8"><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Mục lục</h2><ol className="mt-5 space-y-3 text-xs leading-5 text-[#74695c]">{["Pháp lý bắt đầu từ đâu?", "Các đầu việc quan trọng", "Lưu ý khi chuẩn bị thủ tục", "Chi phí và tiến độ", "Sai lầm thường gặp"].map((item, index) => <li key={item} className="flex gap-2"><span>{index + 1}.</span><span>{item}</span></li>)}</ol></section><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Bài viết mới</h2><div className="mt-5 space-y-4">{articles.slice(0, 5).map((article) => <article key={article.title} className="flex gap-3"><div className="relative h-14 w-16 shrink-0 overflow-hidden"><Image src={article.image} alt="" fill sizes="64px" className="object-cover" /></div><div><h3 className="text-xs font-bold leading-5 text-[#4b4033]">{article.title}</h3><p className="mt-1 text-[11px] text-[#8d7c66]">{article.date}</p></div></article>)}</div></section><section className="border border-[#e0d5c6] bg-[#f3eade] p-6"><Gavel aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.2} /><h2 className="mt-5 font-serif text-2xl text-[#3b3024]">Lưu ý quan trọng</h2><p className="mt-3 text-xs leading-6 text-[#74695c]">Thông tin trên trang mang tính tổng quan. Quy định và thủ tục cụ thể cần được kiểm tra theo từng địa phương, thời điểm và hiện trạng công trình.</p></section></aside></div>
      <SiteFooter />
    </main>
  );
}
