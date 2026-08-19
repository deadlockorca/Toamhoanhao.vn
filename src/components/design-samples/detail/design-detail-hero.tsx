import { Camera, House, MapPin, Ruler, Sofa } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import type { DesignSample } from "@/data/design-samples";

type DesignDetailHeroProps = {
  sample: DesignSample;
};

export function DesignDetailHero({ sample }: DesignDetailHeroProps) {
  const detail = sample.detail;

  return (
    <section className="relative overflow-hidden bg-[#f7f1e9]">
      <SiteHeader />

      <div className="grid min-h-[660px] pt-20 lg:grid-cols-[46%_54%] xl:pt-[120px]">
        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-0 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-14">
          <div className="max-w-[560px]">
            <div className="mb-10 flex flex-wrap items-center gap-3 text-xs text-[#7d715f]">
              <Link href="/" className="transition hover:text-[#9a732f]">
                Trang chủ
              </Link>
              <span>/</span>
              <Link
                href="/mau-thiet-ke"
                className="transition hover:text-[#9a732f]"
              >
                Mẫu thiết kế
              </Link>
              <span>/</span>
              <span className="text-[#4e463a]">{sample.title}</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a47b45]">
              {detail?.eyebrow ?? sample.category}
            </p>

            <h1 className="mt-5 font-serif text-[48px] leading-[1.02] text-[#15120e] sm:text-[66px]">
              {detail?.displayTitle ?? sample.title}
              {detail ? (
                <span className="block italic text-[#7e8268]">
                  {detail.italicTitle}
                </span>
              ) : null}
            </h1>

            <p className="mt-8 max-w-[430px] text-sm leading-7 text-[#4c453a]">
              {detail?.description ?? sample.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-xs font-medium text-[#62584b]">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                Hà Nội
              </span>
              {sample.area ? (
                <span className="inline-flex items-center gap-2">
                  <Ruler aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                  {sample.area}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-2">
                <House aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                {sample.style}
              </span>
              {detail?.bedrooms ? (
                <span className="inline-flex items-center gap-2">
                  <Sofa aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                  {detail.bedrooms}
                </span>
              ) : null}
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#consultation"
                className="inline-flex h-12 items-center justify-center bg-[#6f765b] px-8 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5f654e]"
              >
                Nhận tư vấn
              </a>
              <a
                href="#gallery"
                className="inline-flex h-12 items-center justify-center gap-3 border border-[#d2c3ad] bg-[#fbf7f1] px-8 text-sm font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:border-[#b89765]"
              >
                <Camera aria-hidden="true" className="h-4 w-4" />
                Xem phối cảnh
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[660px]">
          <Image
            src={detail?.heroImage ?? sample.thumbnail}
            alt={sample.title}
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
