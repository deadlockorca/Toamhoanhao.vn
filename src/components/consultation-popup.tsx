"use client";

import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  Phone,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const ConsultationContext = createContext<{ openConsultation: () => void }>({
  openConsultation: () => {},
});

export function useConsultation() {
  return useContext(ConsultationContext);
}

export function ConsultationButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openConsultation } = useConsultation();
  return (
    <button type="button" onClick={openConsultation} className={className}>
      {children}
    </button>
  );
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setSubmitError(null);
    }, 300);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeConsultation();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeConsultation]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
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

  return (
    <ConsultationContext.Provider value={{ openConsultation }}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#241d14]/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Đặt lịch tư vấn"
          onClick={closeConsultation}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto border border-[#d8cbb4] bg-[#fbf7f1] shadow-[0_30px_80px_rgba(30,22,12,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeConsultation}
              aria-label="Đóng"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-[#d8cbb4] bg-[#fbf7f1]/90 text-[#6f6558] transition hover:border-[#9a733e] hover:text-[#8a6536]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center px-8 py-16 text-center">
                <CheckCircle2 aria-hidden="true" className="h-16 w-16 text-[#7a7f63]" strokeWidth={1.25} />
                <h2 className="mt-6 font-serif text-3xl text-[#30291f]">Đã gửi yêu cầu thành công!</h2>
                <p className="mt-4 max-w-[380px] text-sm leading-7 text-[#6b6154]">
                  Cảm ơn bạn đã tin tưởng. Đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
                <button
                  type="button"
                  onClick={closeConsultation}
                  className="mt-8 inline-flex h-11 items-center bg-[#70745d] px-7 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d]"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Đặt lịch tư vấn</p>
                <h2 className="mt-3 font-serif text-3xl text-[#30291f]">Tư vấn miễn phí cùng chuyên gia</h2>
                <p className="mt-3 text-sm leading-6 text-[#6b6154]">
                  Để lại thông tin, đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ tư vấn giải pháp phù hợp nhất cho bạn.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-[#655b4f]">
                    Họ và tên <span className="text-[#a0783e]">*</span>
                    <input
                      required
                      name="name"
                      className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"
                    />
                  </label>
                  <label className="text-xs font-semibold text-[#655b4f]">
                    Số điện thoại <span className="text-[#a0783e]">*</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"
                    />
                  </label>
                  <label className="text-xs font-semibold text-[#655b4f]">
                    Email <span className="text-[#a0783e]">*</span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"
                    />
                  </label>
                  <label className="text-xs font-semibold text-[#655b4f]">
                    Loại dịch vụ <span className="text-[#a0783e]">*</span>
                    <select
                      required
                      name="service"
                      defaultValue=""
                      className="mt-2 h-11 w-full appearance-none border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"
                    >
                      <option value="" disabled>
                        Chọn dịch vụ
                      </option>
                      <option>Thiết kế nội thất</option>
                      <option>Thi công nội thất</option>
                      <option>Sản xuất nội thất</option>
                      <option>Xây dựng trọn gói</option>
                      <option>Cải tạo / nâng cấp</option>
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none -mt-7 ml-auto mr-3 h-4 w-4 text-[#9a8d7c]"
                    />
                  </label>
                  <label className="text-xs font-semibold text-[#655b4f]">
                    Diện tích / Quy mô
                    <input
                      name="scale"
                      className="mt-2 h-11 w-full border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"
                    />
                  </label>
                  <label className="text-xs font-semibold text-[#655b4f]">
                    Khu vực <span className="text-[#a0783e]">*</span>
                    <select
                      required
                      name="area"
                      defaultValue=""
                      className="mt-2 h-11 w-full appearance-none border border-[#ded4c4] bg-[#fffdf9] px-3 text-sm outline-none transition focus:border-[#9a733e]"
                    >
                      <option value="" disabled>
                        Chọn khu vực
                      </option>
                      <option>Hà Nội</option>
                      <option>TP. Hồ Chí Minh</option>
                      <option>Ninh Bình</option>
                      <option>Thanh Hóa</option>
                      <option>Bình Dương</option>
                      <option>Khu vực khác</option>
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none -mt-7 ml-auto mr-3 h-4 w-4 text-[#9a8d7c]"
                    />
                  </label>
                </div>

                <label className="mt-4 block text-xs font-semibold text-[#655b4f]">
                  Nội dung yêu cầu
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..."
                    className="mt-2 w-full resize-y border border-[#ded4c4] bg-[#fffdf9] px-3 py-3 text-sm outline-none transition placeholder:text-[#9a8d7c] focus:border-[#9a733e]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#70745d] px-5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5d614d] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send aria-hidden="true" className="h-4 w-4" />
                      Gửi yêu cầu
                    </>
                  )}
                </button>
                {submitError ? (
                  <p className="mt-4 border border-[#e3b8b8] bg-[#fbeeea] px-4 py-3 text-xs leading-5 text-[#a14a3a]">
                    {submitError}
                  </p>
                ) : null}
                <p className="mt-4 flex items-center gap-2 text-xs leading-5 text-[#827768]">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-[#a0783e]" />
                  Thông tin của bạn được bảo mật và chỉ dùng để hỗ trợ tư vấn.
                </p>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </ConsultationContext.Provider>
  );
}

export function ConsultationHotline() {
  return (
    <a
      href="tel:0903897555"
      className="inline-flex min-h-12 items-center gap-2 border border-[#b9a689] px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#5b4932] transition hover:bg-[#eee3d5]"
    >
      <Phone aria-hidden="true" className="h-4 w-4" />
      0903.897.555
    </a>
  );
}
