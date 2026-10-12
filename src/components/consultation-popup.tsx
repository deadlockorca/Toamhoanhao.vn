"use client";

import { ArrowLeftRight, ArrowRight, Check, CheckCircle2, Loader2, Phone, ShieldCheck, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  createContext, useCallback, useContext, useEffect, useRef, useState,
  type ChangeEvent, type FormEvent, type ReactNode,
} from "react";
import { additionalPopupCopy, additionalServiceLabels } from "@/data/consultation-additional";
import { isAdditionalLocale, isSiteLocale, type SiteLocale } from "@/lib/locale";
import styles from "./consultation-popup.module.css";

const ConsultationContext = createContext<{ openConsultation: () => void }>({ openConsultation: () => {} });

const copyByLocale = {
  vi: {
    dialog: "Đặt lịch tư vấn",
    close: "Đóng",
    eyebrow: "ĐẶT LỊCH TƯ VẤN",
    heading: "Tư vấn miễn phí cùng chuyên gia",
    introduction: "Để lại thông tin, đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ tư vấn giải pháp phù hợp nhất cho bạn.",
    benefits: [
      "Phản hồi trong vòng 2 giờ làm việc",
      "Báo giá minh bạch, không phát sinh chi phí ẩn",
      "Đồng hành từ tư vấn, thiết kế, thi công đến bảo hành",
    ],
    urgent: "Cần gấp? Gọi ngay",
    formHeading: "Thông tin của bạn",
    requiredNote: "Các trường có dấu * là bắt buộc.",
    name: "Họ và tên",
    namePlaceholder: "Nguyễn Văn A",
    phone: "Số điện thoại",
    phonePlaceholder: "09xx xxx xxx",
    emailPlaceholder: "ban@email.com",
    service: "Loại dịch vụ",
    selectService: "Chọn dịch vụ",
    scale: "Diện tích / Quy mô",
    scalePlaceholder: "Ví dụ: 78m², nhà 3 tầng",
    area: "Khu vực",
    areaOptions: ["Hà Nội", "TP.HCM", "Khác"],
    message: "Nội dung yêu cầu",
    messagePlaceholder: "Vui lòng mô tả chi tiết nhu cầu của bạn...",
    submit: "Gửi yêu cầu",
    sending: "Đang gửi...",
    privacy: "Thông tin của bạn được bảo mật và chỉ dùng để hỗ trợ tư vấn.",
    successHeading: "Đã gửi yêu cầu thành công!",
    successMessage: "Cảm ơn bạn đã tin tưởng. Đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ với bạn trong thời gian sớm nhất.",
    sendError: "Không thể gửi yêu cầu. Vui lòng thử lại hoặc gọi 0903 897 555.",
    errors: {
      name: "Vui lòng nhập họ và tên.",
      phone: "Vui lòng nhập số điện thoại hợp lệ.",
      email: "Vui lòng nhập email hợp lệ.",
      service: "Vui lòng chọn loại dịch vụ.",
      area: "Vui lòng chọn khu vực.",
    },
  },
  en: {
    dialog: "Book a consultation",
    close: "Close",
    eyebrow: "BOOK A CONSULTATION",
    heading: "Free advice from our experts",
    introduction: "Leave your details and the To Am Hoan Hao team will contact you to discuss a solution that fits your needs.",
    benefits: [
      "A reply within two business hours",
      "Clear quotes with no hidden costs",
      "Support from consultation and design through construction and warranty",
    ],
    urgent: "Need help now? Call us",
    formHeading: "Your information",
    requiredNote: "Fields marked * are required.",
    name: "Full name",
    namePlaceholder: "Your full name",
    phone: "Phone number",
    phonePlaceholder: "09xx xxx xxx",
    emailPlaceholder: "you@example.com",
    service: "Service",
    selectService: "Select a service",
    scale: "Area / project size",
    scalePlaceholder: "For example: 78m², three-storey house",
    area: "Location",
    areaOptions: ["Hanoi", "Ho Chi Minh City", "Other"],
    message: "Project details",
    messagePlaceholder: "Tell us more about your project...",
    submit: "Send request",
    sending: "Sending...",
    privacy: "Your information is kept private and used only to assist with your consultation.",
    successHeading: "Your request has been sent!",
    successMessage: "Thank you for contacting us. The To Am Hoan Hao team will be in touch soon.",
    sendError: "Unable to send your request. Please try again or call 0903 897 555.",
    errors: {
      name: "Please enter your full name.",
      phone: "Please enter a valid phone number.",
      email: "Please enter a valid email address.",
      service: "Please select a service.",
      area: "Please select a location.",
    },
  },
  ja: {
    dialog: "無料相談を予約",
    close: "閉じる",
    eyebrow: "無料相談を予約",
    heading: "専門スタッフに無料で相談",
    introduction: "ご連絡先をご入力ください。Tổ Ấm Hoàn Hảoのスタッフが、ご希望に合ったプランをご案内します。",
    benefits: [
      "営業時間内に2時間を目安にご返信",
      "追加費用がわかる明確なお見積もり",
      "相談から設計・施工・保証までサポート",
    ],
    urgent: "お急ぎの方はこちら",
    formHeading: "お客様情報",
    requiredNote: "* 印の項目は必須です。",
    name: "お名前",
    namePlaceholder: "お名前を入力",
    phone: "電話番号",
    phonePlaceholder: "09xx xxx xxx",
    emailPlaceholder: "you@example.com",
    service: "ご希望のサービス",
    selectService: "サービスを選択",
    scale: "面積・規模",
    scalePlaceholder: "例：78㎡、3階建て",
    area: "地域",
    areaOptions: ["ハノイ", "ホーチミン市", "その他"],
    message: "ご相談内容",
    messagePlaceholder: "ご希望や計画についてお聞かせください...",
    submit: "相談を送信",
    sending: "送信中...",
    privacy: "お預かりした情報は、ご相談への対応にのみ使用します。",
    successHeading: "送信しました",
    successMessage: "お問い合わせありがとうございます。担当者より近日中にご連絡します。",
    sendError: "送信できませんでした。もう一度お試しいただくか、0903 897 555までお電話ください。",
    errors: {
      name: "お名前を入力してください。",
      phone: "有効な電話番号を入力してください。",
      email: "有効なメールアドレスを入力してください。",
      service: "サービスを選択してください。",
      area: "地域を選択してください。",
    },
  },
  ...additionalPopupCopy,
} as const;

const serviceOptions = [
  { value: "Thiết kế nội thất", vi: "Thiết kế nội thất", en: "Interior design", ja: "インテリアデザイン" },
  { value: "Thi công nội thất", vi: "Thi công nội thất", en: "Interior construction", ja: "内装施工" },
  { value: "Sản xuất nội thất", vi: "Sản xuất nội thất", en: "Furniture production", ja: "家具製作" },
  { value: "Xây dựng trọn gói", vi: "Xây dựng trọn gói", en: "Turnkey construction", ja: "建築一式" },
  { value: "Cải tạo / nâng cấp", vi: "Cải tạo / nâng cấp", en: "Renovation / upgrade", ja: "リノベーション" },
] as const;
const areaOptions = ["Hà Nội", "TP. Hồ Chí Minh", "Khu vực khác"] as const;
type RequiredField = "name" | "phone" | "email" | "service" | "area";
type FormErrors = Partial<Record<RequiredField, string>>;

export function useConsultation() {
  return useContext(ConsultationContext);
}

export function ConsultationButton({ children, className }: { children: ReactNode; className?: string }) {
  const { openConsultation } = useConsultation();
  return <button type="button" onClick={openConsultation} className={className}>{children}</button>;
}

export function ConsultationProvider({ children, locale = "vi" }: { children: ReactNode; locale?: SiteLocale }) {
  const pathname = usePathname();
  const pathLocale = pathname?.slice(1) ?? "";
  const currentLocale: SiteLocale = isSiteLocale(pathLocale) ? pathLocale : pathname ? "vi" : locale;
  const copy = copyByLocale[currentLocale];
  const serviceLabel = (index: number) => isAdditionalLocale(currentLocale)
    ? additionalServiceLabels[currentLocale][index]
    : serviceOptions[index][currentLocale];
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedArea, setSelectedArea] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const formPanelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => {
    setIsOpen(false);
    setIsSubmitted(false);
    setSubmitError(null);
    setErrors({});
    setSelectedArea("");
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const frame = requestAnimationFrame(() => firstFieldRef.current?.focus());
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { closeConsultation(); return; }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen, closeConsultation]);

  function clearFieldError(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const field = event.currentTarget.name as RequiredField;
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (submitError) setSubmitError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").replace(/[\s().-]/g, "");
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "");
    const area = String(formData.get("area") ?? "");
    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = copy.errors.name;
    if (!/^\+?\d{8,15}$/.test(phone)) nextErrors.phone = copy.errors.phone;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = copy.errors.email;
    if (!service) nextErrors.service = copy.errors.service;
    if (!area) nextErrors.area = copy.errors.area;
    setErrors(nextErrors);
    const firstError = (Object.keys(nextErrors) as RequiredField[])[0];
    if (firstError) {
      const field = form.querySelector<HTMLElement>(`[name="${firstError}"]`);
      field?.focus({ preventScroll: true });
      if (firstError === "name") formPanelRef.current?.scrollTo({ top: 0 });
      else field?.scrollIntoView({ block: "center" });
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone, email, service,
          scale: String(formData.get("scale") ?? "").trim(),
          area,
          message: String(formData.get("message") ?? "").trim(),
        }),
      });
      if (!response.ok) throw new Error(copy.sendError);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Send contact failed:", error);
      setSubmitError(copy.sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass = (field: RequiredField) => `${styles.fieldControl} ${errors[field] ? styles.fieldError : ""}`;

  return (
    <ConsultationContext.Provider value={{ openConsultation }}>
      {children}
      {isOpen && (
        <div className={styles.backdrop} onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeConsultation();
        }}>
          <div ref={dialogRef} className={styles.dialog} role="dialog" aria-modal="true" aria-label={copy.dialog}>
            <button type="button" onClick={closeConsultation} aria-label={copy.close} className={styles.closeButton}><X size={23} aria-hidden="true" /></button>
            <aside className={styles.visualPanel}>
              <div className={styles.visualContent}>
                <p className={styles.eyebrow}>{copy.eyebrow}</p>
                <h2 className={styles.visualHeading}>{copy.heading}</h2>
                <p className={styles.visualIntroduction}>{copy.introduction}</p>
                <ul className={styles.benefits}>
                  {copy.benefits.map((benefit, index) => {
                    const Icon = [Zap, Check, ArrowLeftRight][index];
                    return <li key={benefit}><span className={styles.benefitIcon}><Icon size={19} aria-hidden="true" /></span>{benefit}</li>;
                  })}
                </ul>
              </div>
              <a href="tel:0903897555" className={styles.hotline}>
                <span className={styles.hotlineIcon}><Phone size={25} aria-hidden="true" /></span>
                <span><small>{copy.urgent}</small><strong>0903.897.555</strong></span>
              </a>
            </aside>

            <div ref={formPanelRef} className={styles.formPanel}>
              {isSubmitted ? (
                <div className={styles.success}>
                  <CheckCircle2 size={66} strokeWidth={1.5} aria-hidden="true" />
                  <h2>{copy.successHeading}</h2>
                  <p>{copy.successMessage}</p>
                  <button type="button" onClick={closeConsultation} className={styles.submitButton}>{copy.close}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formHeading}>
                    <h2>{copy.formHeading}</h2>
                    <p>{copy.requiredNote.split("*")[0]}<b>*</b>{copy.requiredNote.split("*")[1]}</p>
                  </div>
                  <div className={styles.fieldsGrid}>
                    <label className={styles.field} htmlFor="consult-name">
                      <span>{copy.name} <b>*</b></span>
                      <input ref={firstFieldRef} id="consult-name" name="name" type="text" autoComplete="name" placeholder={copy.namePlaceholder} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "consult-name-error" : undefined} className={fieldClass("name")} onChange={clearFieldError} />
                      {errors.name && <small id="consult-name-error" className={styles.errorMessage}>{errors.name}</small>}
                    </label>
                    <label className={styles.field} htmlFor="consult-phone">
                      <span>{copy.phone} <b>*</b></span>
                      <input id="consult-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={copy.phonePlaceholder} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "consult-phone-error" : undefined} className={fieldClass("phone")} onChange={clearFieldError} />
                      {errors.phone && <small id="consult-phone-error" className={styles.errorMessage}>{errors.phone}</small>}
                    </label>
                    <label className={styles.field} htmlFor="consult-email">
                      <span>Email <b>*</b></span>
                      <input id="consult-email" name="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "consult-email-error" : undefined} className={fieldClass("email")} onChange={clearFieldError} />
                      {errors.email && <small id="consult-email-error" className={styles.errorMessage}>{errors.email}</small>}
                    </label>
                    <label className={styles.field} htmlFor="consult-service">
                      <span>{copy.service} <b>*</b></span>
                      <span className={styles.selectWrap}>
                        <select id="consult-service" name="service" defaultValue="" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "consult-service-error" : undefined} className={fieldClass("service")} onChange={clearFieldError}>
                          <option value="" disabled>{copy.selectService}</option>
                          {serviceOptions.map((option, index) => <option key={option.value} value={option.value}>{serviceLabel(index)}</option>)}
                        </select>
                      </span>
                      {errors.service && <small id="consult-service-error" className={styles.errorMessage}>{errors.service}</small>}
                    </label>
                    <label className={styles.field} htmlFor="consult-scale">
                      <span>{copy.scale}</span>
                      <input id="consult-scale" name="scale" type="text" placeholder={copy.scalePlaceholder} className={styles.fieldControl} />
                    </label>
                    <fieldset className={styles.areaField} aria-describedby={errors.area ? "consult-area-error" : undefined}>
                      <legend>{copy.area} <b>*</b></legend>
                      <div className={styles.areaOptions}>
                        {areaOptions.map((value, index) => (
                          <label key={value} className={`${styles.areaOption} ${selectedArea === value ? styles.areaSelected : ""} ${errors.area ? styles.areaError : ""}`}>
                            <input type="radio" name="area" value={value} checked={selectedArea === value} onChange={(event) => {
                              setSelectedArea(event.currentTarget.value);
                              clearFieldError(event);
                            }} />
                            {copy.areaOptions[index]}
                          </label>
                        ))}
                      </div>
                      {errors.area && <small id="consult-area-error" className={styles.errorMessage}>{errors.area}</small>}
                    </fieldset>
                    <label className={`${styles.field} ${styles.messageField}`} htmlFor="consult-message">
                      <span>{copy.message}</span>
                      <textarea id="consult-message" name="message" rows={4} placeholder={copy.messagePlaceholder} className={styles.fieldControl} />
                    </label>
                  </div>
                  <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                    {isSubmitting ? <><Loader2 size={20} className={styles.spinner} aria-hidden="true" />{copy.sending}</> : <>{copy.submit} <ArrowRight size={20} aria-hidden="true" /></>}
                  </button>
                  {submitError && <p className={styles.submitError} role="alert">{submitError}</p>}
                  <p className={styles.privacy}><ShieldCheck size={19} aria-hidden="true" /> {copy.privacy}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </ConsultationContext.Provider>
  );
}

export function ConsultationHotline() {
  return (
    <a href="tel:0903897555" className="inline-flex min-h-12 items-center gap-2 border border-[#b9a689] px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#5b4932] transition hover:bg-[#eee3d5]">
      <Phone aria-hidden="true" className="h-4 w-4" />
      0903.897.555
    </a>
  );
}
