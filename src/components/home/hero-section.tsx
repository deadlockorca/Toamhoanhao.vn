import Image from "next/image";

import { SiteHeader } from "@/components/site-header";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f1e9]">
      <SiteHeader />

      <div className="grid min-h-screen lg:grid-cols-[44%_56%]">
        <div className="relative z-10 flex items-center px-6 pb-16 pt-36 sm:px-10 lg:px-0 lg:pb-0 lg:pl-[max(2rem,calc((100vw-1180px)/2))] lg:pr-12">
          <div className="max-w-[560px]">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b3c]">
              Tổ Ấm Hoàn Hảo
            </p>
            <h1 className="font-serif text-[56px] leading-[0.98] tracking-normal text-[#15120e] sm:text-[76px] lg:text-[86px]">
              Một không gian
              <span className="mt-3 block italic text-[#7e8268]">
                để trở về.
              </span>
            </h1>
            <p className="mt-9 max-w-[430px] text-base leading-8 text-[#3d382f]">
              Tổ Ấm Hoàn Hảo kiến tạo những không gian sống hài hòa giữa thẩm
              mỹ, công năng và cảm xúc.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center border border-[#6e735e] bg-[#6e735e] px-8 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#5d624f]"
              >
                Khám phá dự án
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.04em] text-[#5a5144]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b7aa92] bg-[#fbf7f0]/80 text-[#8c6f3e]">
                  ▶
                </span>
                Xem video giới thiệu
              </a>
            </div>

            <div className="mt-20 flex items-center gap-5 text-sm font-semibold text-[#8a7658]">
              <span>01</span>
              <span>/</span>
              <span>04</span>
              <span className="h-px w-20 bg-[#9c8d74]" />
            </div>
          </div>
        </div>

        <div className="relative min-h-[46vh] lg:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Phòng khách sáng với sofa màu kem và cửa kính nhìn ra vườn"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e9] via-[#f7f1e9]/10 to-transparent lg:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#f7f1e9] to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
