"use client";

import { CheckCircle2, Play, Send } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const videos = [
  {
    id: "RjcKROhN-EM",
    title: "Giới thiệu nhà máy sản xuất nội thất của Tổ Ấm Hoàn Hảo",
    duration: "5:15",
  },
  {
    id: "uipCCDgNK-c",
    title: "Khách hàng nói gì về Tổ Ấm Hoàn Hảo",
    duration: "4:21",
  },
  {
    id: "YXUkYCeCuEY",
    title: "Review căn hộ Penthouse khu Rừng Cọ Ecopark",
    duration: "2:17",
  },
  {
    id: "ofIStS7My1c",
    title: "Thiết kế quán Tịnh Cafe 178 Quan Nhân",
    duration: "2:20",
  },
] as const;

export function CustomerVideoConsultationSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-y border-[#e5dacb] bg-[#fffdf9] py-12 sm:py-16 lg:py-[4.5rem]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a0783e]">
            Câu chuyện từ công trình thực tế
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-[#282116] sm:text-5xl">
            Khách hàng nói gì về Tổ Ấm Hoàn Hảo
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#716759] sm:text-base">
            Lắng nghe những chia sẻ chân thực và theo dõi hành trình triển khai
            tại xưởng, trên từng công trình.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] xl:gap-6">
          <div className="flex h-full flex-col overflow-hidden border border-[#dfd2c0] bg-[#211b12]">
            <div className="aspect-video">
              <iframe
                key={videos[activeVideo].id}
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videos[activeVideo].id}?rel=0`}
                title={videos[activeVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-1 flex-col border-t border-white/10 px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e8c88f]">
                Video nổi bật
              </p>
              <h3 className="mt-1 text-base font-semibold leading-6">
                {videos[activeVideo].title}
              </h3>
              <p className="mt-1 text-sm leading-5 text-white/70">
                Hành trình từ tư vấn, thiết kế đến hoàn thiện công trình.
              </p>
              <div className="mt-auto grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
                <div>
                  <p className="font-serif text-xl text-[#efd29c]">500m²+</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/55">
                    Xưởng sản xuất
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl text-[#efd29c]">50+</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/55">
                    Nhân sự lành nghề
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl text-[#efd29c]">1000+</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/55">
                    Sản phẩm hoàn thiện
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col border border-[#dfd2c0] bg-[#fbf7f1] p-3 sm:p-4">
            <div className="flex items-center justify-between border-b border-[#e1d6c6] px-2 pb-3">
              <h3 className="font-serif text-2xl text-[#30291f]">Công trình tiêu biểu</h3>
              <span className="text-xs font-semibold text-[#8b7963]">
                {activeVideo + 1}/{videos.length}
              </span>
            </div>
            <div className="mt-2 flex flex-1 flex-col">
              {videos.map((video, index) => {
                const isActive = index === activeVideo;

                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideo(index)}
                    aria-pressed={isActive}
                    className={`flex flex-1 items-center gap-3 border-b border-[#e9dfd2] px-2 py-3 text-left transition last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a0783e] ${
                      isActive ? "bg-[#ece2d3]" : "hover:bg-[#f2eadf]"
                    }`}
                  >
                    <span className="relative block h-14 w-20 shrink-0 overflow-hidden bg-[#d9c7af]">
                      <Image
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt=""
                        fill
                        sizes="80px"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/25 text-white">
                        <Play aria-hidden="true" className="h-5 w-5 fill-current" />
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block line-clamp-2 text-sm font-semibold leading-5 text-[#41382c]">
                        {video.title}
                      </span>
                      <span className="mt-1 block text-xs text-[#8b7963]">
                        {video.duration}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col border border-[#dfd2c0] bg-[#f7f1e9] p-5 sm:p-6"
          >
            <h3 className="font-serif text-3xl leading-tight text-[#30291f]">
              Đăng ký khảo sát và tư vấn
            </h3>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <label className="text-xs font-semibold text-[#655b4f]">
                Họ và tên <span className="text-[#a0783e]">*</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-10 w-full border border-[#d7c8b5] bg-[#fffdf9] px-3 text-sm text-[#30291f] outline-none transition placeholder:text-[#9a8d7c] focus:border-[#9a733e]"
                  placeholder="Tên của bạn"
                />
              </label>
              <label className="text-xs font-semibold text-[#655b4f]">
                Số điện thoại <span className="text-[#a0783e]">*</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 h-10 w-full border border-[#d7c8b5] bg-[#fffdf9] px-3 text-sm text-[#30291f] outline-none transition placeholder:text-[#9a8d7c] focus:border-[#9a733e]"
                  placeholder="Số điện thoại"
                />
              </label>
              <label className="text-xs font-semibold text-[#655b4f] sm:col-span-2">
                Địa chỉ công trình
                <input
                  name="address"
                  autoComplete="street-address"
                  className="mt-2 h-10 w-full border border-[#d7c8b5] bg-[#fffdf9] px-3 text-sm text-[#30291f] outline-none transition placeholder:text-[#9a8d7c] focus:border-[#9a733e]"
                  placeholder="Khu vực dự kiến triển khai"
                />
              </label>
            </div>

            <fieldset className="mt-4">
              <legend className="text-xs font-semibold text-[#655b4f]">
                Nhu cầu của bạn
              </legend>
              <div className="mt-2 grid grid-cols-2 gap-2.5 text-sm text-[#62594d]">
                {["Thiết kế nội thất", "Thi công nội thất", "Cải tạo", "Xây mới"].map(
                  (service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="interests"
                        value={service}
                        className="h-4 w-4 accent-[#77795f]"
                      />
                      {service}
                    </label>
                  ),
                )}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 bg-[#73765f] px-5 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#5d604d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a0783e] focus-visible:ring-offset-2"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
              Gửi yêu cầu
            </button>
            {submitted && (
              <p className="mt-4 flex gap-2 text-sm leading-6 text-[#596043]" role="status">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                Đã nhận yêu cầu. Đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ sớm.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
