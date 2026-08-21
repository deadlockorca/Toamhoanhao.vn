"use client";

import {
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    const formData = new FormData(event.currentTarget);
    const interests = formData.getAll("interests");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          scale: formData.get("scale"),
          area: formData.get("area"),
          message: formData.get("message"),
          interests: interests.length ? interests.join(", ") : undefined,
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Gửi thất bại");
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Send contact failed:", error);
      setSubmitError(
        error instanceof Error && error.message
          ? error.message
          : "Không thể gửi yêu cầu, vui lòng thử lại sau.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center border border-[#e0d5c6] bg-[#fdfaf6] p-9 text-center sm:p-14">
        <CheckCircle2 aria-hidden="true" className="h-16 w-16 text-[#7a7f63]" strokeWidth={1.25} />
        <h2 className="mt-6 font-serif text-3xl text-[#30291f]">Đã gửi yêu cầu thành công!</h2>
        <p className="mt-4 max-w-[420px] text-sm leading-7 text-[#6b6154]">
          Cảm ơn bạn đã tin tưởng. Đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ với bạn trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#e0d5c6] bg-[#fdfaf6] p-6 sm:p-9">
      <h2 className="font-serif text-3xl text-[#30291f]">Gửi yêu cầu tư vấn</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-[#655b4f]">Họ và tên <span className="text-[#a0783e]">*</span><input required name="name" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label>
        <label className="text-xs font-semibold text-[#655b4f]">Số điện thoại <span className="text-[#a0783e]">*</span><input required name="phone" type="tel" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label>
        <label className="text-xs font-semibold text-[#655b4f]">Email <span className="text-[#a0783e]">*</span><input required name="email" type="email" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label>
        <label className="text-xs font-semibold text-[#655b4f]">Loại dịch vụ <span className="text-[#a0783e]">*</span><select required name="service" defaultValue="" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"><option value="" disabled>Chọn dịch vụ</option><option>Thiết kế nội thất</option><option>Thi công nội thất</option><option>Sản xuất nội thất</option><option>Xây dựng trọn gói</option><option>Cải tạo / nâng cấp</option></select></label>
        <label className="text-xs font-semibold text-[#655b4f]">Diện tích / Quy mô<input name="scale" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]" /></label>
        <label className="text-xs font-semibold text-[#655b4f]">Khu vực <span className="text-[#a0783e]">*</span><select required name="area" defaultValue="" className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"><option value="" disabled>Chọn khu vực</option><option>Hà Nội</option><option>TP. Hồ Chí Minh</option><option>Ninh Bình</option><option>Thanh Hóa</option><option>Bình Dương</option><option>Khu vực khác</option></select></label>
      </div>
      <fieldset className="mt-6">
        <legend className="text-xs font-semibold text-[#655b4f]">Dịch vụ bạn quan tâm</legend>
        <div className="mt-3 grid gap-3 text-sm text-[#62594d] sm:grid-cols-3">
          {["Thiết kế nội thất", "Thi công nội thất", "Xây dựng", "Sản xuất nội thất", "Cải tạo / nâng cấp"].map((service) => (
            <label key={service} className="flex items-center gap-2"><input type="checkbox" name="interests" value={service} className="h-4 w-4 accent-[#70745d]" />{service}</label>
          ))}
        </div>
      </fieldset>
      <label className="mt-6 block text-xs font-semibold text-[#655b4f]">Nội dung yêu cầu<textarea name="message" rows={5} placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..." className="mt-2 w-full resize-y border border-[#ded4c4] bg-[#fffdf9] px-3 py-3 text-sm outline-none transition placeholder:text-[#9a8d7c] focus:border-[#9a733e]" /></label>
      <button type="submit" disabled={isSubmitting} className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d] disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? <><Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />Đang gửi...</> : <><Send aria-hidden="true" className="h-4 w-4" />Gửi thông tin</>}
      </button>
      {submitError ? (
        <p className="mt-4 border border-[#e3b8b8] bg-[#fbeeea] px-4 py-3 text-xs leading-5 text-[#a14a3a]">{submitError}</p>
      ) : null}
      <p className="mt-4 flex items-center gap-2 text-xs leading-5 text-[#827768]"><ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#a0783e]" />Thông tin của bạn được bảo mật và chỉ dùng để hỗ trợ tư vấn.</p>
    </form>
  );
}
