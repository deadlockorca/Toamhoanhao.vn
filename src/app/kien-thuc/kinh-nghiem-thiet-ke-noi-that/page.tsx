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
  FilePenLine,
  HandCoins,
  LayoutPanelTop,
  Palette,
  PencilRuler,
  SearchCheck,
  ShieldCheck,
  Sofa,
  SwatchBook,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kinh nghiệm thiết kế nội thất | Tổ Ấm Hoàn Hảo",
  description: "Cẩm nang thiết kế nội thất thực tế: quy trình, chi phí, lưu ý và kinh nghiệm tạo không gian sống phù hợp.",
};

const preparation = [
  { icon: SearchCheck, title: "Xác định nhu cầu", content: "Làm rõ số thành viên, thói quen sinh hoạt, khu vực ưu tiên và ngân sách dự kiến." },
  { icon: SwatchBook, title: "Tìm phong cách phù hợp", content: "Tham khảo phong cách, màu sắc và vật liệu phù hợp với cá tính riêng của gia chủ." },
  { icon: LayoutPanelTop, title: "Lên kế hoạch không gian", content: "Ưu tiên công năng, luồng di chuyển và các nhu cầu lưu trữ trong sinh hoạt hằng ngày." },
  { icon: HandCoins, title: "Chuẩn bị ngân sách", content: "Phân bổ ngân sách hợp lý cho thiết kế, vật liệu, sản xuất và thi công." },
];

const steps = [
  { icon: ClipboardList, title: "Tiếp nhận nhu cầu", content: "Trao đổi lối sống, sở thích, hiện trạng và mong muốn của gia chủ." },
  { icon: SearchCheck, title: "Khảo sát hiện trạng", content: "Đo đạc thực tế, đánh giá ánh sáng, kết cấu và các điều kiện kỹ thuật." },
  { icon: LayoutPanelTop, title: "Bố trí mặt bằng", content: "Sắp xếp công năng, giao thông và vị trí đồ nội thất hợp lý." },
  { icon: Palette, title: "Thiết kế phối cảnh", content: "Thể hiện không gian 3D, màu sắc, vật liệu và cảm xúc tổng thể." },
  { icon: FilePenLine, title: "Triển khai kỹ thuật", content: "Hoàn thiện hồ sơ chi tiết để sản xuất và thi công chính xác." },
  { icon: ShieldCheck, title: "Giám sát hoàn thiện", content: "Kiểm soát chất lượng để không gian hoàn thiện đúng ý tưởng ban đầu." },
];

const budgetItems = [
  { icon: PencilRuler, value: "5-10%", title: "Chi phí thiết kế", content: "Đầu tư cho bản vẽ giúp kiểm soát công năng, vật liệu và chi phí triển khai." },
  { icon: Sofa, value: "45-60%", title: "Sản xuất nội thất", content: "Tập trung vào đồ gỗ, nội thất rời và các hạng mục đặt đóng theo thiết kế." },
  { icon: Building2, value: "20-30%", title: "Thi công hoàn thiện", content: "Bao gồm phần điện nước, trần tường sàn, ánh sáng và lắp đặt." },
  { icon: Calculator, value: "10-15%", title: "Dự phòng linh hoạt", content: "Dự phòng cho thay đổi vật liệu, phụ kiện hoặc nhu cầu phát sinh." },
];

const mistakes = [
  ["Chạy theo xu hướng nhất thời", "Không gian dễ nhanh lỗi mốt và không phản ánh đúng lối sống của gia chủ."],
  ["Bỏ qua nhu cầu lưu trữ", "Thiếu hệ tủ và giải pháp sắp xếp khiến nhà nhanh bừa bộn khi sử dụng."],
  ["Thiếu kế hoạch chiếu sáng", "Ánh sáng không phù hợp làm giảm cảm xúc, thẩm mỹ và sự tiện nghi."],
  ["Chọn vật liệu thiếu cân nhắc", "Màu sắc, độ bền và khả năng bảo trì không phù hợp với thực tế sử dụng."],
  ["Không có hồ sơ kỹ thuật", "Dễ sai lệch khi thi công, phát sinh chi phí và khó đồng bộ các hạng mục."],
];

const articles = [
  { date: "15/05/2024", title: "Quy trình thiết kế nội thất từ A-Z", content: "Các bước từ tiếp nhận nhu cầu đến khi hoàn thiện không gian sống.", image: "/images/gioi-thieu/banner.png" },
  { date: "10/05/2024", title: "Cách xác định phong cách nội thất phù hợp", content: "Gợi ý chọn phong cách dựa trên lối sống, diện tích và cá tính gia chủ.", image: "/images/doi-ngu/banner.png" },
  { date: "05/05/2024", title: "Bố trí công năng cho căn hộ nhỏ", content: "Các giải pháp tối ưu lưu trữ và luồng di chuyển trong không gian hạn chế.", image: "/images/nang-luc/banner.png" },
  { date: "30/04/2024", title: "Kinh nghiệm chọn vật liệu nội thất", content: "Những tiêu chí quan trọng về độ bền, thẩm mỹ và ngân sách đầu tư.", image: "/images/xuong-san-xuat/banner.png" },
  { date: "25/04/2024", title: "Bí quyết thiết kế ánh sáng trong nhà", content: "Kết hợp ánh sáng tự nhiên và nhân tạo để không gian ấm áp, dễ chịu.", image: "/images/gioi-thieu/thuong-hieu.png" },
  { date: "20/04/2024", title: "Thiết kế phòng khách tiện nghi", content: "Gợi ý sắp xếp nội thất phòng khách hài hòa, phù hợp cho sinh hoạt gia đình.", image: "/images/gioi-thieu/banner.png" },
  { date: "18/04/2024", title: "Cách làm việc hiệu quả với kiến trúc sư", content: "Chuẩn bị thông tin và phản hồi thế nào để quá trình thiết kế thuận lợi.", image: "/images/doi-ngu/banner.png" },
  { date: "15/04/2024", title: "Mẹo tối ưu chi phí nội thất", content: "Phân bổ ngân sách theo mức độ ưu tiên mà vẫn giữ được chất lượng tổng thể.", image: "/images/nang-luc/banner.png" },
  { date: "12/04/2024", title: "Những chi tiết làm không gian đẹp hơn", content: "Vật liệu, tỷ lệ, ánh sáng và điểm nhấn quyết định cảm xúc của ngôi nhà.", image: "/images/xuong-san-xuat/banner.png" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-3xl text-[#30291f]">{children}</h2>;
}

export default function InteriorDesignExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2c261e]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[520px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="relative z-10 flex items-end bg-[#f8f3ec]/90 px-6 pb-14 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[525px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><span>Kinh nghiệm thiết kế nội thất</span></nav><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Kiến thức</p><h1 className="mt-4 font-serif text-5xl leading-[1.04] text-[#1f1a13] sm:text-6xl">Kinh nghiệm thiết kế <em className="text-[#74785f]">nội thất</em></h1><p className="mt-6 max-w-[455px] text-base leading-8 text-[#584f43]">Cẩm nang thiết kế nội thất thực tế, giúp bạn kiến tạo không gian đẹp, tiện nghi và phù hợp với lối sống, ngân sách của gia đình.</p></div></div><div className="relative min-h-[320px] lg:min-h-full"><Image src="/images/gioi-thieu/banner.png" alt="Không gian nội thất hiện đại" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-right" /></div></div></section>

      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-20"><div className="min-w-0 space-y-16">
        <section><div className="flex gap-5"><Sofa aria-hidden="true" className="hidden h-14 w-14 shrink-0 text-[#a0783e] sm:block" strokeWidth={1.1} /><div><SectionTitle>Thiết kế nội thất bắt đầu từ đâu?</SectionTitle><p className="mt-3 max-w-[780px] text-sm leading-7 text-[#62594d]">Một không gian đẹp cần bắt đầu từ việc hiểu rõ con người sống trong đó. Chuẩn bị kỹ nhu cầu, công năng và ngân sách sẽ giúp quá trình thiết kế diễn ra mạch lạc, hạn chế thay đổi về sau.</p></div></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{preparation.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-sm font-bold text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Các giai đoạn quan trọng khi thiết kế nội thất</SectionTitle><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{steps.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="relative border border-[#e0d5c6] bg-[#fdfaf6] p-5"><span className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a7650] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" className="mt-4 h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><h3 className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-[#3d352b]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Những lưu ý để không gian đẹp và dễ sống</SectionTitle><div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Ưu tiên công năng thực tế, phản ánh đúng lối sống của gia đình", "Bố trí luồng di chuyển thông thoáng giữa các khu vực", "Kết hợp ánh sáng tự nhiên và nhân tạo theo từng thời điểm", "Lựa chọn vật liệu phù hợp mức độ sử dụng và khả năng bảo trì", "Đầu tư giải pháp lưu trữ để không gian luôn gọn gàng", "Giữ bảng màu nhất quán để tổng thể hài hòa, có điểm nhấn"].map((item) => <p key={item} className="flex gap-3 text-sm leading-6 text-[#62594d]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#82714d]" strokeWidth={2.5} />{item}</p>)}</div></section>
        <section><SectionTitle>Chi phí và cách phân bổ ngân sách</SectionTitle><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{budgetItems.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#e0d5c6] bg-[#fdfaf6] p-5"><Icon aria-hidden="true" className="h-8 w-8 text-[#a0783e]" strokeWidth={1.2} /><p className="mt-5 font-serif text-2xl text-[#3b3329]">{item.value}</p><h3 className="mt-1 text-sm font-bold text-[#4b4033]">{item.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{item.content}</p></article>; })}</div></section>
        <section><SectionTitle>Sai lầm thường gặp khi thiết kế nội thất</SectionTitle><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{mistakes.map(([title, content]) => <article key={title} className="border border-[#ead8d0] bg-[#fdf8f4] p-4"><CircleAlert aria-hidden="true" className="h-6 w-6 text-[#c97261]" strokeWidth={1.2} /><h3 className="mt-4 text-xs font-bold leading-5 text-[#514337]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#806e62]">{content}</p></article>)}</div></section>
        <section><div className="flex flex-wrap items-end justify-between gap-4"><div><SectionTitle>Bài viết về thiết kế nội thất</SectionTitle><p className="mt-2 text-sm text-[#756b5e]">Những chia sẻ thực tế giúp bạn chuẩn bị tốt hơn trước khi kiến tạo không gian sống.</p></div><span className="text-xs font-bold uppercase tracking-[0.05em] text-[#7b623d]">Xem tất cả bài viết</span></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article key={article.title} className="overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6]"><div className="relative aspect-[1.55]"><Image src={article.image} alt="" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" /></div><div className="p-5"><p className="text-xs text-[#8d7c66]">{article.date}</p><h3 className="mt-2 font-serif text-xl leading-tight text-[#332b21]">{article.title}</h3><p className="mt-3 text-xs leading-5 text-[#756b5e]">{article.content}</p></div></article>)}</div></section>
      </div><aside className="h-fit space-y-5 lg:sticky lg:top-8"><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Mục lục</h2><ol className="mt-5 space-y-3 text-xs leading-5 text-[#74695c]">{["Thiết kế bắt đầu từ đâu?", "Các giai đoạn thiết kế", "Lưu ý quan trọng", "Chi phí và ngân sách", "Sai lầm thường gặp"].map((item, index) => <li key={item} className="flex gap-2"><span>{index + 1}.</span><span>{item}</span></li>)}</ol></section><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5143]">Bài viết mới</h2><div className="mt-5 space-y-4">{articles.slice(0, 5).map((article) => <article key={article.title} className="flex gap-3"><div className="relative h-14 w-16 shrink-0 overflow-hidden"><Image src={article.image} alt="" fill sizes="64px" className="object-cover" /></div><div><h3 className="text-xs font-bold leading-5 text-[#4b4033]">{article.title}</h3><p className="mt-1 text-[11px] text-[#8d7c66]">{article.date}</p></div></article>)}</div></section><section className="border border-[#e0d5c6] bg-[#f3eade] p-6"><BookOpenCheck aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.2} /><h2 className="mt-5 font-serif text-2xl text-[#3b3024]">Cẩm nang nội thất</h2><p className="mt-3 text-xs leading-6 text-[#74695c]">Các kiến thức thực tế về phong cách, công năng, vật liệu và quy trình thiết kế nội thất.</p></section></aside></div>
      <SiteFooter />
    </main>
  );
}
