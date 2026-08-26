import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";

export function DesignSamplesHero() {
  return (
    <section className="relative overflow-visible bg-[#f7f1e9] lg:overflow-hidden">
      <SiteHeader />

      <div className="h-20 lg:hidden" aria-hidden="true" />

      <div className="hidden min-h-[580px] pt-20 lg:grid lg:grid-cols-[46%_54%] xl:pt-[120px]">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-0 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-14">
          <div className="max-w-[560px]">
            <div className="mb-10 flex items-center gap-3 text-xs text-[#7d715f]">
              <Link href="/" className="transition hover:text-[#9a732f]">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="font-medium text-[#5b5144]">Mẫu thiết kế</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a47b45]">
              Bộ sưu tập mẫu thiết kế
            </p>
            <h1 className="mt-5 font-serif text-[56px] leading-[0.98] text-[#15120e] sm:text-[76px]">
              Mẫu thiết kế
              <span className="block italic text-[#7e8268]">
                cho mọi không gian
              </span>
            </h1>
            <p className="mt-8 max-w-[470px] text-sm leading-7 text-[#4c453a]">
              Khám phá các mẫu thiết kế nội thất được tuyển chọn kỹ lưỡng, phù
              hợp với nhiều loại hình nhà ở và nhu cầu sử dụng.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#design-list"
                className="inline-flex h-12 items-center justify-center bg-[#6f765b] px-8 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5f654e]"
              >
                Khám phá mẫu
              </a>
              <ConsultationButton className="inline-flex h-12 items-center justify-center gap-3 border border-[#d2c3ad] bg-[#fbf7f1] px-8 text-sm font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:border-[#b89765]">
                <CirclePlay aria-hidden="true" className="h-4 w-4" />
                Nhận tư vấn
              </ConsultationButton>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[580px]">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Không gian phòng khách sáng với sofa màu kem"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#f7f1e9] to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
