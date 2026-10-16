"use client";

import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { ContactMessages } from "@/data/contact";
import styles from "@/app/lien-he/contact.module.css";

export function ContactForm({ messages }: { messages: ContactMessages }) {
  const t = (text: string) => messages[text as keyof ContactMessages];
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
        const key =
          data?.code === "invalid_email"
            ? "Địa chỉ email không hợp lệ"
            : data?.code === "required_fields"
              ? "Vui lòng điền họ tên, số điện thoại và email"
              : response.status === 429
                ? "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút."
                : "Không thể gửi yêu cầu, vui lòng thử lại sau.";
        setSubmitError(t(key));
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError(t("Không thể gửi yêu cầu, vui lòng thử lại sau."));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted)
    return (
      <div className={`${styles.form} ${styles.formSuccess}`}>
        <CheckCircle2 size={58} aria-hidden="true" />
        <h2>{t("Đã gửi yêu cầu thành công!")}</h2>
        <p>
          {t(
            "Cảm ơn bạn đã tin tưởng. Đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ với bạn trong thời gian sớm nhất.",
          )}
        </p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.eyebrow}>{t("Đặt lịch tư vấn")}</p>
      <h2>{t("Gửi yêu cầu tư vấn")}</h2>
      <p className={styles.formIntro}>
        {t("Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại sớm nhất.")}
      </p>
      <div className={styles.formFields}>
        <label className={styles.formLabel}>
          <span>
            {t("Họ và tên")}
            <b>*</b>
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          <span>
            {t("Số điện thoại")}
            <b>*</b>
          </span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          <span>
            {t("Email")}
            <b>*</b>
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          <span>
            {t("Loại dịch vụ")}
            <b>*</b>
          </span>
          <select
            required
            name="service"
            defaultValue=""
            className={styles.formInput}
          >
            <option value="" disabled>
              {t("Chọn dịch vụ")}
            </option>
            <option value={"Thiết kế nội thất"}>
              {t("Thiết kế nội thất")}
            </option>
            <option value={"Thi công nội thất"}>
              {t("Thi công nội thất")}
            </option>
            <option value={"Sản xuất nội thất"}>
              {t("Sản xuất nội thất")}
            </option>
            <option value={"Xây dựng trọn gói"}>
              {t("Xây dựng trọn gói")}
            </option>
            <option value={"Cải tạo / nâng cấp"}>
              {t("Cải tạo / nâng cấp")}
            </option>
          </select>
        </label>
        <label className={styles.formLabel}>
          {t("Diện tích / Quy mô")}
          <input name="scale" className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          <span>
            {t("Khu vực")}
            <b>*</b>
          </span>
          <select
            required
            name="area"
            defaultValue=""
            className={styles.formInput}
          >
            <option value="" disabled>
              {t("Chọn khu vực")}
            </option>
            <option value={"Hà Nội"}>{t("Hà Nội")}</option>
            <option value={"TP. Hồ Chí Minh"}>{t("TP. Hồ Chí Minh")}</option>
            <option value={"Ninh Bình"}>{t("Ninh Bình")}</option>
            <option value={"Thanh Hóa"}>{t("Thanh Hóa")}</option>
            <option value={"Bình Dương"}>{t("Bình Dương")}</option>
            <option value={"Khu vực khác"}>{t("Khu vực khác")}</option>
          </select>
        </label>
      </div>
      <fieldset className={styles.formFieldset}>
        <legend>{t("Dịch vụ bạn quan tâm")}</legend>
        <div className={styles.interestList}>
          {[
            "Thiết kế nội thất",
            "Thi công nội thất",
            "Xây dựng",
            "Sản xuất nội thất",
            "Cải tạo / nâng cấp",
          ].map((service) => (
            <label key={service} className={styles.interest}>
              <input type="checkbox" name="interests" value={service} />
              <span>{t(service)}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className={`${styles.formLabel} ${styles.messageLabel}`}>
        {t("Nội dung yêu cầu")}
        <textarea
          name="message"
          rows={5}
          placeholder={t("Vui lòng mô tả chi tiết nhu cầu của bạn...")}
          className={styles.formTextarea}
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            {t("Đang gửi...")}
          </>
        ) : (
          <>
            {t("Gửi thông tin")}
            <span aria-hidden="true">→</span>
          </>
        )}
      </button>
      {submitError && (
        <p role="alert" className={styles.formError}>
          {submitError}
        </p>
      )}
      <p className={styles.formNote}>
        <ShieldCheck size={14} aria-hidden="true" />
        {t("Thông tin của bạn được bảo mật và chỉ dùng để hỗ trợ tư vấn.")}
      </p>
    </form>
  );
}
