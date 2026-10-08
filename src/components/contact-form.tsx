"use client";

import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import styles from "@/app/lien-he/contact.module.css";

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
      setSubmitError(error instanceof Error && error.message ? error.message : "Không thể gửi yêu cầu, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) return <div className={`${styles.form} ${styles.formSuccess}`}><CheckCircle2 size={58} aria-hidden="true" /><h2>Đã gửi yêu cầu thành công!</h2><p>Cảm ơn bạn đã tin tưởng. Đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ với bạn trong thời gian sớm nhất.</p></div>;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.eyebrow}>Đặt lịch tư vấn</p>
      <h2>Gửi yêu cầu tư vấn</h2>
      <p className={styles.formIntro}>Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại sớm nhất.</p>
      <div className={styles.formFields}>
        <label className={styles.formLabel}><span>Họ và tên <b>*</b></span><input required name="name" autoComplete="name" className={styles.formInput} /></label>
        <label className={styles.formLabel}><span>Số điện thoại <b>*</b></span><input required name="phone" type="tel" autoComplete="tel" className={styles.formInput} /></label>
        <label className={styles.formLabel}><span>Email <b>*</b></span><input required name="email" type="email" autoComplete="email" className={styles.formInput} /></label>
        <label className={styles.formLabel}><span>Loại dịch vụ <b>*</b></span><select required name="service" defaultValue="" className={styles.formInput}><option value="" disabled>Chọn dịch vụ</option><option>Thiết kế nội thất</option><option>Thi công nội thất</option><option>Sản xuất nội thất</option><option>Xây dựng trọn gói</option><option>Cải tạo / nâng cấp</option></select></label>
        <label className={styles.formLabel}>Diện tích / Quy mô<input name="scale" className={styles.formInput} /></label>
        <label className={styles.formLabel}><span>Khu vực <b>*</b></span><select required name="area" defaultValue="" className={styles.formInput}><option value="" disabled>Chọn khu vực</option><option>Hà Nội</option><option>TP. Hồ Chí Minh</option><option>Ninh Bình</option><option>Thanh Hóa</option><option>Bình Dương</option><option>Khu vực khác</option></select></label>
      </div>
      <fieldset className={styles.formFieldset}><legend>Dịch vụ bạn quan tâm</legend><div className={styles.interestList}>{["Thiết kế nội thất", "Thi công nội thất", "Xây dựng", "Sản xuất nội thất", "Cải tạo / nâng cấp"].map((service) => <label key={service} className={styles.interest}><input type="checkbox" name="interests" value={service} /><span>{service}</span></label>)}</div></fieldset>
      <label className={`${styles.formLabel} ${styles.messageLabel}`}>Nội dung yêu cầu<textarea name="message" rows={5} placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..." className={styles.formTextarea} /></label>
      <button type="submit" disabled={isSubmitting} className={styles.submitButton}>{isSubmitting ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" />Đang gửi...</> : <>Gửi thông tin <span aria-hidden="true">→</span></>}</button>
      {submitError && <p role="alert" className={styles.formError}>{submitError}</p>}
      <p className={styles.formNote}><ShieldCheck size={14} aria-hidden="true" />Thông tin của bạn được bảo mật và chỉ dùng để hỗ trợ tư vấn.</p>
    </form>
  );
}
