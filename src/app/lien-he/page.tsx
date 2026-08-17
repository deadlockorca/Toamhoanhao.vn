import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Factory,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Liên hệ | Tổ Ấm Hoàn Hảo",
  description: "Liên hệ Tổ Ấm Hoàn Hảo để được tư vấn thiết kế, thi công và sản xuất nội thất.",
};

const contactCards = [
  { icon: Phone, label: "Hotline", value: "0903.897.555", href: "tel:0903897555" },
  { icon: Mail, label: "Email", value: "hotro.toamhoanhao@gmail.com", href: "mailto:hotro.toamhoanhao@gmail.com" },
  { icon: Globe2, label: "Website", value: "toamhoanhao.vn", href: "https://toamhoanhao.vn" },
  { icon: MapPin, label: "Địa chỉ", value: "Tầng 6, 48 Tố Hữu, Nam Từ Liêm, Hà Nội" },
];

const reasons = [
  { icon: Headphones, title: "Phản hồi nhanh", content: "Tiếp nhận và phản hồi trong vòng 2 giờ làm việc." },
  { icon: CircleHelp, title: "Tư vấn đúng nhu cầu", content: "Đề xuất giải pháp cân bằng giữa công năng và ngân sách." },
  { icon: BadgeCheck, title: "Báo giá minh bạch", content: "Chi tiết rõ ràng, không phát sinh chi phí ẩn." },
  { icon: ShieldCheck, title: "Đồng hành trọn quy trình", content: "Từ tư vấn, thiết kế, thi công đến bảo hành." },
  { icon: Factory, title: "Hỗ trợ hậu mãi", content: "Bảo hành chu đáo, hỗ trợ nhanh chóng khi cần." },
];

const faqs = [
  "Quy trình tư vấn như thế nào?",
  "Chi phí thiết kế tính ra sao?",
  "Có nhận thi công trọn gói không?",
  "Có hỗ trợ khảo sát tận nơi không?",
];

const stats = [
  ["15+", "Năm kinh nghiệm", "Trong lĩnh vực thiết kế và thi công nội thất"],
  ["500+", "Công trình hoàn thiện", "Triển khai tại Hà Nội và các tỉnh thành"],
  ["98%", "Khách hàng hài lòng", "Với chất lượng dịch vụ và sản phẩm"],
  ["100%", "Minh bạch tiến độ", "Cam kết đúng tiến độ đã thỏa thuận"],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2b251d]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7] bg-[#f8f3ec]">
        <SiteHeader />
        <div className="mx-auto grid min-h-[610px] max-w-[1320px] pt-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex items-end bg-[#f8f3ec]/88 px-6 pb-16 pt-24 sm:px-10 lg:items-center lg:px-8 lg:pb-0">
            <div className="max-w-[535px]">
              <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]"><Link href="/" className="transition hover:text-[#9a733e]">Trang chủ</Link><span className="mx-3">/</span><span>Liên hệ</span></nav>
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Liên hệ</p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-[#1f1a13] sm:text-6xl lg:text-7xl">Liên hệ với <em className="text-[#74785f]">chúng tôi</em></h1>
              <p className="mt-7 max-w-[460px] text-base leading-8 text-[#584f43]">Hãy để lại thông tin, đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ và tư vấn giải pháp thiết kế, thi công, sản xuất nội thất phù hợp nhất cho bạn.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#tu-van" className="inline-flex h-11 items-center bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]">Đặt lịch tư vấn</a><a href="tel:0903897555" className="inline-flex h-11 items-center gap-2 border border-[#cdbda8] px-5 text-xs font-bold uppercase tracking-[0.06em] text-[#6b5231] transition hover:border-[#9a733e] hover:text-[#8a6536]"><Phone aria-hidden="true" className="h-4 w-4" />Gọi ngay</a></div>
            </div>
          </div>
          <div className="relative min-h-[380px] lg:min-h-full"><Image src="/images/gioi-thieu/banner.png" alt="Không gian nội thất Tổ Ấm Hoàn Hảo" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-right" /></div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <section className="grid overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6] sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item) => { const Icon = item.icon; const content = <><Icon aria-hidden="true" className="h-9 w-9 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><span><span className="block text-xs font-bold uppercase tracking-[0.07em] text-[#5f5548]">{item.label}</span><span className="mt-2 block text-sm leading-6 text-[#6b5231]">{item.value}</span></span></>; return item.href ? <a key={item.label} href={item.href} className="flex min-h-[118px] items-center gap-4 border-b border-[#e0d5c6] p-6 transition hover:bg-[#f5ede2] sm:nth-[2n]:border-l lg:border-b-0 lg:border-l first:lg:border-l-0"><>{content}</></a> : <div key={item.label} className="flex min-h-[118px] items-center gap-4 border-b border-[#e0d5c6] p-6 sm:nth-[2n]:border-l lg:border-b-0 lg:border-l first:lg:border-l-0">{content}</div>; })}
        </section>

        <section id="tu-van" className="grid gap-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <form className="border border-[#e0d5c6] bg-[#fdfaf6] p-6 sm:p-9"><h2 className="font-serif text-3xl text-[#30291f]">Gửi yêu cầu tư vấn</h2><div className="mt-7 grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold text-[#655b4f]">Họ và tên <span className="text-[#a0783e]">*</span><input required name="name" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label><label className="text-xs font-semibold text-[#655b4f]">Số điện thoại <span className="text-[#a0783e]">*</span><input required name="phone" type="tel" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label><label className="text-xs font-semibold text-[#655b4f]">Email <span className="text-[#a0783e]">*</span><input required name="email" type="email" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label><label className="text-xs font-semibold text-[#655b4f]">Loại dịch vụ <span className="text-[#a0783e]">*</span><select required name="service" defaultValue="" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"><option value="" disabled>Chọn dịch vụ</option><option>Thiết kế nội thất</option><option>Thi công nội thất</option><option>Sản xuất nội thất</option><option>Xây dựng trọn gói</option><option>Cải tạo / nâng cấp</option></select></label><label className="text-xs font-semibold text-[#655b4f]">Diện tích / Quy mô<input name="scale" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label><label className="text-xs font-semibold text-[#655b4f]">Khu vực <span className="text-[#a0783e]">*</span><select required name="area" defaultValue="" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"><option value="" disabled>Chọn khu vực</option><option>Hà Nội</option><option>TP. Hồ Chí Minh</option><option>Ninh Bình</option><option>Thanh Hóa</option><option>Bình Dương</option><option>Khu vực khác</option></select></label></div><fieldset className="mt-6"><legend className="text-xs font-semibold text-[#655b4f]">Dịch vụ bạn quan tâm</legend><div className="mt-3 grid gap-3 text-sm text-[#62594d] sm:grid-cols-3">{["Thiết kế nội thất", "Thi công nội thất", "Xây dựng", "Sản xuất nội thất", "Cải tạo / nâng cấp"].map((service) => <label key={service} className="flex items-center gap-2"><input type="checkbox" name="interests" value={service} className="h-4 w-4 accent-[#70745d]" />{service}</label>)}</div></fieldset><label className="mt-6 block text-xs font-semibold text-[#655b4f]">Nội dung yêu cầu<textarea name="message" rows={5} placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..." className="mt-2 w-full resize-y border border-[#ded4c4] bg-[#fffdf9] px-3 py-3 text-sm outline-none transition placeholder:text-[#9a8d7c] focus:border-[#9a733e]" /></label><button type="submit" className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]"><Send aria-hidden="true" className="h-4 w-4" />Gửi thông tin</button><p className="mt-4 flex items-center gap-2 text-xs leading-5 text-[#827768]"><ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#a0783e]" />Thông tin của bạn được bảo mật và chỉ dùng để hỗ trợ tư vấn.</p></form>

          <div className="space-y-6"><section className="border border-[#e0d5c6] bg-[#fdfaf6] p-6 sm:p-9"><h2 className="font-serif text-3xl leading-tight text-[#30291f]">Vì sao nên liên hệ <em className="text-[#74785f]">Tổ Ấm Hoàn Hảo?</em></h2><div className="mt-7 space-y-5">{reasons.map((reason) => { const Icon = reason.icon; return <div key={reason.title} className="flex gap-4"><Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><div><h3 className="text-sm font-bold text-[#3b3329]">{reason.title}</h3><p className="mt-1 text-xs leading-5 text-[#756b5e]">{reason.content}</p></div></div>; })}</div></section><section className="border border-[#e0d5c6] bg-[#f1e8db] p-6 sm:p-8"><div className="flex gap-4"><Clock3 aria-hidden="true" className="h-8 w-8 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><div><h2 className="font-serif text-2xl text-[#30291f]">Giờ làm việc</h2><div className="mt-5 space-y-2 text-sm text-[#62594d]"><p className="flex justify-between gap-4"><span>Thứ 2 - Thứ 7</span><strong>8:00 - 18:00</strong></p><p className="flex justify-between gap-4"><span>Chủ nhật</span><strong>Hỗ trợ theo lịch hẹn</strong></p></div></div></div></section></div>
        </section>

        <section className="grid overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6] lg:grid-cols-[1fr_0.9fr]"><div className="relative min-h-[330px] overflow-hidden bg-[#eee3d4] p-8"><div className="absolute inset-0 opacity-60 [background-image:linear-gradient(#fff8_1px,transparent_1px),linear-gradient(90deg,#fff8_1px,transparent_1px)] [background-size:36px_36px]" /><div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d3c1a8]" /><div className="absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 border border-[#cdb48f] bg-[#fdfaf6] p-5 shadow-[0_12px_28px_rgba(74,57,39,0.12)]"><div className="flex gap-3"><MapPin aria-hidden="true" className="h-7 w-7 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><span className="text-sm leading-6 text-[#5d5346]"><strong className="block text-[#3e3529]">Tổ Ấm Hoàn Hảo</strong>Tầng 6, 48 Tố Hữu,<br />Nam Từ Liêm, Hà Nội</span></div></div></div><div className="p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Văn phòng & khu vực hoạt động</p><h2 className="mt-4 font-serif text-3xl text-[#30291f]">Đồng hành cùng nhiều tổ ấm Việt</h2><p className="mt-4 text-sm leading-7 text-[#61584b]">Tổ Ấm Hoàn Hảo mang đến dịch vụ thiết kế, thi công và sản xuất nội thất chất lượng đến nhiều tỉnh thành.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Hà Nội", "TP. Hồ Chí Minh", "Ninh Bình", "Thanh Hóa", "Bình Dương"].map((area) => <span key={area} className="flex items-center gap-2 text-sm text-[#5d5346]"><Check aria-hidden="true" className="h-4 w-4 text-[#8b7048]" strokeWidth={2} />{area}</span>)}</div><div className="mt-8 flex gap-4 border border-[#e0d5c6] bg-[#f7f1e9] p-5"><Building2 aria-hidden="true" className="h-9 w-9 shrink-0 text-[#a0783e]" strokeWidth={1.25} /><div><h3 className="text-sm font-bold text-[#3b3329]">Nhà xưởng sản xuất</h3><p className="mt-1 text-xs leading-5 text-[#756b5e]">Xưởng sản xuất nội thất hiện đại, chủ động tiêu chuẩn chất lượng cao.</p></div></div></div></section>

        <section className="grid gap-8 py-16 lg:grid-cols-[0.35fr_1.65fr] lg:py-20"><h2 className="font-serif text-3xl text-[#30291f]">Câu hỏi thường gặp</h2><div className="space-y-2">{faqs.map((question, index) => <details key={question} className="group border border-[#e0d5c6] bg-[#fdfaf6]"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-sm font-semibold text-[#4a4034]"><span>{question}</span><ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-[#9a733e] transition group-open:rotate-180" /></summary><p className="border-t border-[#eadfd1] px-5 py-4 text-sm leading-7 text-[#756b5e]">{index === 0 ? "Đội ngũ sẽ tiếp nhận thông tin, trao đổi nhu cầu và hẹn khảo sát hoặc tư vấn phù hợp." : index === 1 ? "Chi phí được tư vấn theo diện tích, hạng mục và mức độ chi tiết của công trình." : index === 2 ? "Có. Chúng tôi hỗ trợ thiết kế, sản xuất và thi công nội thất trọn gói." : "Có. Tùy khu vực và nhu cầu cụ thể, chúng tôi sẽ sắp xếp lịch khảo sát phù hợp."}</p></details>)}</div></section>

        <section className="grid overflow-hidden border border-[#e0d5c6] bg-[#fdfaf6] sm:grid-cols-2 lg:grid-cols-4">{stats.map(([value, title, content]) => <article key={title} className="border-b border-[#e0d5c6] p-6 last:border-b-0 sm:nth-[2n]:border-l lg:border-b-0 lg:border-l first:lg:border-l-0"><p className="font-serif text-4xl text-[#3a3024]">{value}</p><h2 className="mt-2 text-sm font-bold text-[#3e3529]">{title}</h2><p className="mt-2 text-xs leading-5 text-[#756b5e]">{content}</p></article>)}</section>
      </div>

      <section className="relative isolate overflow-hidden px-5 py-16 text-white sm:px-8"><Image src="/images/gioi-thieu/banner.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-center" /><div className="absolute inset-0 -z-10 bg-[#393a2d]/75" /><div className="mx-auto flex max-w-[1320px] flex-col items-center text-center"><Quote aria-hidden="true" className="h-8 w-8 text-white/70" strokeWidth={1.25} /><h2 className="mt-5 max-w-[700px] font-serif text-4xl leading-tight sm:text-5xl">Sẵn sàng bắt đầu hành trình kiến tạo tổ ấm của bạn?</h2><p className="mt-4 max-w-[570px] text-sm leading-7 text-white/80">Hãy để Tổ Ấm Hoàn Hảo lắng nghe và cùng bạn tìm ra giải pháp phù hợp nhất.</p><a href="#tu-van" className="mt-8 inline-flex h-11 items-center gap-2 bg-white px-6 text-xs font-bold uppercase tracking-[0.06em] text-[#657052] transition hover:bg-[#f0e9df]"><Sparkles aria-hidden="true" className="h-4 w-4" />Đặt lịch tư vấn ngay</a></div></section>
      <SiteFooter />
    </main>
  );
}
