import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpenCheck,
  Building2,
  Calculator,
  Check,
  CircleAlert,
  ClipboardList,
  HandCoins,
  LampDesk,
  LayoutPanelTop,
  Palette,
  PencilRuler,
  SearchCheck,
  Sofa,
  Sparkles,
  SwatchBook,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kiến thức nhà đẹp | Tổ Ấm Hoàn Hảo",
  description: "Gợi ý thực tế để kiến tạo không gian sống đẹp, tiện nghi và hài hòa với lối sống của gia đình.",
};

const preparation = [
  { icon: SearchCheck, title: "Hiểu lối sống", content: "Nhìn lại thói quen sinh hoạt, số thành viên và điều gia đình thực sự cần mỗi ngày." },
  { icon: SwatchBook, title: "Chọn cảm hứng", content: "Xác định phong cách, bảng màu và cảm xúc bạn muốn không gian mang lại." },
  { icon: LayoutPanelTop, title: "Ưu tiên công năng", content: "Sắp xếp luồng di chuyển, khu vực sử dụng và giải pháp lưu trữ thật hợp lý." },
  { icon: HandCoins, title: "Phân bổ đầu tư", content: "Chọn hạng mục nên đầu tư trước để không gian đẹp bền vững mà vẫn phù hợp ngân sách." },
];

const steps = [
  { icon: ClipboardList, title: "Xác định nhu cầu", content: "Liệt kê những khu vực cần cải thiện và trải nghiệm mong muốn trong ngôi nhà." },
  { icon: Sofa, title: "Định hình phong cách", content: "Chọn phong cách chủ đạo phù hợp với kiến trúc, gu thẩm mỹ và nhịp sống." },
  { icon: LayoutPanelTop, title: "Tối ưu bố cục", content: "Sắp xếp nội thất cân đối, tạo khoảng thở và luồng di chuyển thông thoáng." },
  { icon: Palette, title: "Chọn màu & vật liệu", content: "Kết hợp màu sắc, bề mặt và chất liệu để tổng thể có chiều sâu, nhất quán." },
  { icon: LampDesk, title: "Thiết kế ánh sáng", content: "Khai thác ánh sáng tự nhiên và bố trí đèn theo đúng chức năng từng khu vực." },
  { icon: Sparkles, title: "Hoàn thiện điểm nhấn", content: "Thêm tranh, cây xanh, phụ kiện và chi tiết riêng để không gian có cá tính." },
];

const budgetItems = [
  { icon: PencilRuler, value: "10-15%", title: "Bố cục & thiết kế", content: "Lên phương án từ đầu giúp tổng thể thống nhất và tránh mua sắm thiếu kiểm soát." },
  { icon: Sofa, value: "40-50%", title: "Nội thất chính", content: "Ưu tiên những món dùng thường xuyên như sofa, giường, tủ và bàn ăn." },
  { icon: Building2, value: "20-30%", title: "Hoàn thiện không gian", content: "Bao gồm phần sơn, sàn, rèm, đèn và các hạng mục tác động lớn đến cảm xúc." },
  { icon: Calculator, value: "10-15%", title: "Trang trí & dự phòng", content: "Dành cho phụ kiện, cây xanh, tranh ảnh và các điều chỉnh khi hoàn thiện." },
];

const mistakes = [
  ["Chọn quá nhiều phong cách", "Tổng thể dễ rời rạc, thiếu điểm nhấn và nhanh gây cảm giác rối mắt."],
  ["Chỉ ưu tiên vẻ đẹp", "Không gian có thể đẹp khi chụp ảnh nhưng bất tiện trong sinh hoạt hằng ngày."],
  ["Thiếu kế hoạch ánh sáng", "Không đủ lớp sáng khiến căn nhà thiếu chiều sâu và giảm sự thoải mái."],
  ["Dùng màu sắc thiếu kiểm soát", "Quá nhiều gam màu hoặc tương phản mạnh dễ làm không gian mất sự cân bằng."],
  ["Bỏ qua tỷ lệ nội thất", "Đồ quá lớn hoặc quá nhỏ khiến căn phòng chật chội hay trống trải không cần thiết."],
];

const articles = [
  { date: "15/05/2024", title: "Cách chọn phong cách nội thất cho ngôi nhà", content: "Gợi ý nhận diện phong cách phù hợp với kiến trúc, lối sống và gu thẩm mỹ riêng.", image: "/images/gioi-thieu/banner.png" },
  { date: "10/05/2024", title: "Bí quyết phối màu cho không gian sống", content: "Cách xây dựng bảng màu chủ đạo để căn nhà hài hòa, có điểm nhấn mà không đơn điệu.", image: "/images/doi-ngu/banner.png" },
  { date: "05/05/2024", title: "Tối ưu ánh sáng tự nhiên trong nhà", content: "Các giải pháp bố trí cửa, rèm và gương để tận dụng ánh sáng hiệu quả hơn.", image: "/images/gioi-thieu/thuong-hieu.png" },
  { date: "30/04/2024", title: "Gợi ý thiết kế phòng khách đẹp", content: "Những nguyên tắc cơ bản về bố cục, tỷ lệ nội thất và điểm nhấn cho phòng khách.", image: "/images/nang-luc/banner.png" },
  { date: "25/04/2024", title: "Cách chọn vật liệu cho nhà ở", content: "Cân bằng thẩm mỹ, độ bền và sự tiện dụng khi lựa chọn vật liệu hoàn thiện.", image: "/images/xuong-san-xuat/banner.png" },
  { date: "20/04/2024", title: "Mẹo tạo cảm giác rộng rãi cho căn hộ", content: "Áp dụng màu sắc, ánh sáng và nội thất đa năng để không gian nhỏ dễ thở hơn.", image: "/images/gioi-thieu/banner.png" },
  { date: "18/04/2024", title: "Những món nội thất đáng đầu tư", content: "Xác định các hạng mục cần ưu tiên để trải nghiệm sống bền vững và tiện nghi hơn.", image: "/images/doi-ngu/banner.png" },
  { date: "15/04/2024", title: "Cây xanh trong không gian sống", content: "Gợi ý đưa cây xanh vào nhà vừa phải để tăng sức sống mà vẫn giữ được sự gọn gàng.", image: "/images/nang-luc/banner.png" },
  { date: "12/04/2024", title: "Cách tạo điểm nhấn trong phòng ngủ", content: "Sử dụng đầu giường, đèn, tranh và vật liệu để phòng ngủ có cảm xúc riêng.", image: "/images/xuong-san-xuat/banner.png" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-3xl text-[#30291f]">{children}</h2>;
}

export default function BeautifulHomeKnowledgePage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2c261e]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[520px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="relative z-10 flex items-end bg-[#f8f3ec]/90 px-6 pb-14 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[525px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><span>Kiến thức nhà đẹp</span></nav><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Kiến thức</p><h1 className="mt-4 font-serif text-5xl leading-[1.04] text-[#1f1a13] sm:text-6xl">Kiến thức <em className="text-[#74785f]">nhà đẹp</em></h1><p className="mt-6 max-w-[455px] text-base leading-8 text-[#584f43]">Những gợi ý gần gũi để kiến tạo một không gian đẹp, tiện nghi và mang dấu ấn riêng của mỗi gia đình.</p></div></div><div className="relative min-h-[320px] lg:min-h-full"><Image src="/images/gioi-thieu/banner.png" alt="Không gian nội thất hiện đại" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-right" /></div></div></section>
      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-20"><div className="min-w-0 space-y-16">
        <section><div className="flex gap-5"><Sparkles aria-hidden="true" className="hidden h-14 w-14 shrink-0 text-[#a0783e] sm:block" strokeWidth={1.1} /><div><SectionTitle>Nhà đẹp bắt đầu từ sự thấu hiểu</SectionTitle><p className="mt-3 max-w-[780px] text-sm leading-7 text-[#62594d]">Một ngôi nhà đẹp không chỉ là tập hợp của những món đồ nội thất. Đó là không gian phản ánh lối sống, tạo cảm giác dễ chịu và hỗ trợ tốt cho từng khoảnh khắc của gia đình.</p></div></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{preparation.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Các yếu tố tạo nên một không gian đẹp</SectionTitle><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{steps.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="relative border border-[#e0d5c6] bg-[#fdfaf6] p-5"><span className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a7650] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" className="mt-4 h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Những lưu ý để giữ tổng thể hài hòa</SectionTitle><div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Ưu tiên không gian sống phù hợp nhịp sinh hoạt thay vì chạy theo xu hướng", "Chọn một phong cách chủ đạo và chỉ điểm xuyết các yếu tố khác", "Giữ tỷ lệ nội thất phù hợp diện tích thực tế của từng căn phòng", "Dùng bảng màu giới hạn để tổng thể có sự liên kết", "Bố trí ánh sáng theo lớp: tổng thể, chức năng và điểm nhấn", "Dành khoảng trống cần thiết để căn nhà luôn có cảm giác nhẹ nhàng"].map((item) => <p key={item} className="flex gap-3 text-sm leading-6 text-[#62594d]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#82714d]" strokeWidth={2.5} />{item}</p>)}</div></section>
        <section><SectionTitle>Phân bổ ngân sách cho không gian sống</SectionTitle><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{budgetItems.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><p className="mt-5 font-serif text-2xl text-[#3b3329]">{item.value}</p><h3 className="mt-1 text-sm font-bold text-[#4b4033]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Sai lầm thường gặp khi làm đẹp nhà</SectionTitle><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{mistakes.map(([title, content]) => <article key={title} className="border border-[#ead8d0] bg-[#fdf8f4] p-4"><CircleAlert aria-hidden="true" className="h-6 w-6 text-[#c97261]" strokeWidth={1.2} /><h3 className="mt-4 text-xs font-bold leading-5 text-[#514337]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#806e62]">{content}</p></article>)}</div></section>
        <section><div className="flex flex-wrap items-end justify-between gap-4"><div><SectionTitle>Bài viết về kiến thức nhà đẹp</SectionTitle><p className="mt-2 text-sm text-[#756b5e]">Những chia sẻ giúp bạn tìm được ý tưởng phù hợp và áp dụng vào chính không gian sống của mình.</p></div><span className="text-xs font-bold uppercase tracking-[0.05em] text-[#7b623d]">Xem tất cả bài viết</span></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article key={article.title} className="overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6]"><div className="relative aspect-[1.55]"><Image src={article.image} alt="" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" /></div><div className="p-5"><p className="text-xs text-[#8d7c66]">{article.date}</p><h3 className="mt-2 font-serif text-xl leading-tight text-[#332b21]">{article.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{article.content}</p></div></article>)}</div></section>
      </div><aside className="h-fit space-y-5 lg:sticky lg:top-8"><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Mục lục</h2><ol className="mt-5 space-y-3 text-xs leading-5 text-[#74695c]">{["Nhà đẹp bắt đầu từ đâu?", "Các yếu tố quan trọng", "Lưu ý khi hoàn thiện", "Phân bổ ngân sách", "Sai lầm thường gặp"].map((item, index) => <li key={item} className="flex gap-2"><span>{index + 1}.</span><span>{item}</span></li>)}</ol></section><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Bài viết mới</h2><div className="mt-5 space-y-4">{articles.slice(0, 5).map((article) => <article key={article.title} className="flex gap-3"><div className="relative h-14 w-16 shrink-0 overflow-hidden"><Image src={article.image} alt="" fill sizes="64px" className="object-cover" /></div><div><h3 className="text-xs font-bold leading-5 text-[#4b4033]">{article.title}</h3><p className="mt-1 text-[11px] text-[#8d7c66]">{article.date}</p></div></article>)}</div></section><section className="border border-[#e0d5c6] bg-[#f3eade] p-6"><BookOpenCheck aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.2} /><h2 className="mt-5 font-serif text-2xl text-[#3b3024]">Góc cảm hứng</h2><p className="mt-3 text-xs leading-6 text-[#74695c]">Lưu lại những ý tưởng phù hợp với ngôi nhà và lối sống của riêng bạn.</p></section></aside></div>
      <SiteFooter />
    </main>
  );
}
