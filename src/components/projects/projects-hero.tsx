import Image from "next/image";

import { SiteHeader } from "@/components/site-header";

export function ProjectsHero() {
  return (
    <section className="relative overflow-visible bg-[#f7f1e9] lg:overflow-hidden">
      <SiteHeader />

      <div className="h-20 lg:hidden" aria-hidden="true" />

      <div className="hidden min-h-[580px] pt-20 lg:grid lg:grid-cols-[47%_53%] xl:pt-[120px]">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-0 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-16">
          <div className="max-w-[540px]">
            <h1 className="font-sans text-[62px] leading-[0.98] tracking-normal text-[#15120e] sm:text-[86px]">
              Dự án
              <span className="mt-3 block italic text-[#7e8268]">
                của chúng tôi
              </span>
            </h1>
            <p className="mt-9 max-w-[450px] text-base leading-8 text-[#4c453a]">
              Những không gian sống được kiến tạo bằng tâm huyết, tỉ mỉ trong
              từng chi tiết và sự thấu hiểu phong cách sống.
            </p>

            <div className="mt-20 flex items-center gap-4 text-sm text-[#7d715f]">
              <a href="#" className="transition hover:text-[#9a732f]">
                Trang chủ
              </a>
              <span>/</span>
              <span className="font-medium text-[#5b5144]">Dự án</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[580px]">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Không gian phòng khách sáng với sofa màu kem"
            fill
            priority
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#f7f1e9] to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
