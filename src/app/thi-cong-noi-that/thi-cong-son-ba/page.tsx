import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Clock,
  Droplets,
  Factory,
  Gem,
  Layers,
  Palette,
  PaintRoller,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Sun,
  WandSparkles,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/home/consultation-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationButton } from "@/components/consultation-popup";

export const metadata: Metadata = {
  title: "Thi công sơn bả chuyên nghiệp | Tổ Ấm Hoàn Hảo",
  description:
    "Thi công sơn bả tường đúng kỹ thuật: tránh 6 sai lầm gây mất thẩm mỹ (rỗ, nhăn, phồng rộp, bong tróc, rêu mốc, mất màu). Tư vấn miễn phí, giá tốt nhất.",
};

type Feature = { icon: LucideIcon; title: string; content: string; image: string };

const mistakes: Feature[] = [
  {
    icon: SprayCan,
    title: "Màng sơn bị rỗ",
    content:
      "Nguyên nhân do vệ sinh bề mặt không kỹ, để lại nhiều bụi hoặc không rửa sạch dụng cụ nên vảy sơn còn sót lại. Một số do pha sơn quá loãng tạo nhiều bọt khí, khi sơn khô vỡ ra tạo thành lỗ.",
    image: "/images/thi-cong-noi-that/son-ba/ro.webp",
  },
  {
    icon: Wind,
    title: "Màng sơn bị nhăn",
    content:
      "Do con lăn có lông quá dài tạo bề mặt vân lớn, sần sùi. Sơn chỗ dày chỗ mỏng, thi công dưới trời nắng gắt hoặc sơn xong gặp trời lạnh cũng khiến lớp sơn bị nhăn lại.",
    image: "/images/thi-cong-noi-that/son-ba/nhan.webp",
  },
  {
    icon: Droplets,
    title: "Màng sơn bị phồng rộp",
    content:
      "Muốn tránh bề mặt sơn bị phồng rộp phải đảm bảo tường sơn không bị ẩm ướt và phân bổ thời gian sơn chồng một cách hợp lý.",
    image: "/images/thi-cong-noi-that/son-ba/phong-rop.webp",
  },
  {
    icon: Layers,
    title: "Màng sơn bị bong tróc",
    content:
      "Cách tốt nhất để tránh bong tróc là xử lý bề mặt kỹ, sử dụng sơn lót, tránh thi công khi nhiệt độ quá cao, quá thấp hoặc có nhiều gió cản trở màng sơn.",
    image: "/images/thi-cong-noi-that/son-ba/bong-troc.webp",
  },
  {
    icon: Sun,
    title: "Màng sơn bị rêu, mốc",
    content:
      "Sau một thời gian sử dụng, bề mặt sơn xuất hiện vệt mốc đen, xanh vừa mất thẩm mỹ vừa ảnh hưởng sức khỏe. Trước khi sơn phải giữ bề mặt khô ráo, tuyệt đối không sơn đè lên bề mặt đã bị mốc.",
    image: "/images/thi-cong-noi-that/son-ba/reu-moc.webp",
  },
  {
    icon: Palette,
    title: "Màng sơn bị mất màu",
    content:
      "Sau một thời gian sơn tự bay mất màu là lỗi trong quá trình thi công. Muốn giữ màu sơn phải sử dụng đúng công năng, tránh đem sơn nội thất sử dụng cho sơn ngoại thất.",
    image: "/images/thi-cong-noi-that/son-ba/mat-mau.webp",
  },
];

const notes = [
  "Thời gian: gián cách giữa các lớp sơn phải đủ cho lớp dưới khô mới thi công đè lớp trên. Nếu yêu cầu cao, sau mỗi lớp lấy giấy nhám đánh nhẵn rồi mới sơn tiếp.",
  "Thứ tự: sơn từ ngoài vào trong, từ trên xuống dưới, từ khu vực khó sơn đến khu vực dễ.",
  "Con lăn: vết chổi sau phải đè lên một phần vết chổi trước cho kín mặt sơn. Lớp sau quét vuông góc với lớp đã sơn để phủ kín mặt tường.",
];

const commitments = [
  "Tư vấn hoàn toàn miễn phí bởi các chuyên gia hàng đầu",
  "Cung cấp vật tư chính hãng, nguồn gốc xuất xứ rõ ràng, đảm bảo tiêu chuẩn chất lượng",
  "Cập nhật mẫu mã hot nhất thị trường",
  "Thi công đúng ý tưởng, chất lượng, đảm bảo tính thẩm mỹ",
  "Bàn giao công trình đúng tiến độ",
  "Giá cả tốt nhất so với thị trường",
  "Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp",
];

export default function PaintConstructionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#28221a]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]"><SiteHeader /><div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr] xl:pt-[120px]"><div className="flex items-end px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0"><div className="max-w-[540px]"><nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><Link href="/thi-cong-noi-that" className="transition hover:text-[#9a733e]">Thi công nội thất</Link><span className="mx-3">/</span><span>Thi công sơn bả</span></nav><p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Thi công nội thất</p><h1 className="mt-4 font-sans text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Thi công <em className="not-italic">sơn bả</em></h1><p className="mt-7 max-w-[470px] text-base leading-8 text-[#584f43]">Thi công sơn bả tường giống như khoác cho ngôi nhà bộ trang phục mới tinh. Sơn bả hoàn thiện kết cấu công trình, tăng tính thẩm mỹ và tạo hiệu ứng không gian rộng rãi.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#sai-lam" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Khám phá sai lầm</a><ConsultationButton className="inline-flex h-11 items-center border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]">Nhận tư vấn</ConsultationButton></div></div></div><div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/thi-cong-noi-that/son-ba/hero.webp" alt="Thi công sơn bả tường" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section id="sai-lam" className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">6 sai lầm nên tránh</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Những hậu quả khó lòng cứu vãn khi thi công sơn bả sai kỹ thuật</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Việc thi công sơn bả phải hết sức cẩn thận nếu không sẽ để lại những hậu quả gây mất thẩm mỹ cho ngôi nhà của bạn.</p><div className="mt-10 space-y-12">{mistakes.map((item, index) => { const Icon = item.icon; return <article key={item.title} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}><Image src={item.image} alt={item.title} width={750} height={400} sizes="(min-width: 1024px) 46vw, 100vw" className="h-auto w-full object-cover" /><div><div className="flex items-center gap-3"><Icon aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.25} /><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Sai lầm</p></div><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">{item.title}</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">{item.content}</p></div></article>; })}</div></section>

        <section className="border-y border-[#dfd3c3] py-16 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Lưu ý khi sơn</p><h2 className="mt-4 font-serif text-3xl leading-tight text-[#30291f]">Một số lưu ý trong quá trình sơn</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Để có được bề mặt sơn hoàn hảo, cần tuân thủ đúng thời gian, thứ tự thi công và kỹ thuật con lăn.</p></div><div className="grid gap-4">{notes.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#74785f]" strokeWidth={2} />{item}</div>)}</div></div></section>

        <section className="py-16 lg:py-20"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Bí quyết sơn bả đẹp</p><h2 className="mx-auto mt-4 max-w-[680px] text-center font-serif text-3xl leading-tight text-[#30291f]">Tân trang lại ngôi nhà cùng Tổ Ấm Hoàn Hảo</h2><p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-[#6f6558]">Đội ngũ thợ thi công với kinh nghiệm, chuyên môn vững vàng cùng sự nhiệt huyết, sáng tạo sẽ giúp bạn lựa chọn màu sơn phù hợp, mang đến tổng thể hài hòa và những điểm nhấn bắt mắt.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{commitments.map((item) => <div key={item} className="flex gap-3 border border-[#e0d5c6] bg-[#fdfaf6] p-6 text-sm leading-6 text-[#61584b]"><BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a7650]" strokeWidth={2} />{item}</div>)}</div></section>

        <section className="border border-[#e0d5c6] bg-[#fdfaf6] p-7 sm:p-10"><div className="flex flex-col gap-7 lg:flex-row lg:items-center"><PaintRoller aria-hidden="true" className="h-12 w-12 shrink-0 text-[#a0783e]" strokeWidth={1.2} /><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Cam kết của chúng tôi</p><h2 className="mt-3 font-serif text-3xl text-[#30291f]">Mang đến không gian hoàn toàn như ý</h2><p className="mt-3 max-w-[800px] text-sm leading-7 text-[#61584b]">Chúng tôi sẽ giúp bạn lựa chọn màu sơn phù hợp, tạo nên những điểm nhấn bắt mắt, đầy thú vị cho ngôi nhà của bạn.</p></div></div></section>
      </div>

      <section className="bg-[#6f745e] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><SprayCan aria-hidden="true" className="h-9 w-9 text-white/80" strokeWidth={1.25} /><h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-tight sm:text-5xl">Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Miễn phí tư vấn thi công sơn bả, đúng tiến độ và chi phí hợp lý.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><ConsultationButton className="inline-flex h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]">Đặt lịch tư vấn ngay</ConsultationButton><span className="text-sm font-semibold text-white/90">Hotline: 0903.897.555</span></div></div></section>
      <SiteFooter />
    </main>
  );
}
