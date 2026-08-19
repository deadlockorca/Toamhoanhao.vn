"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const dossierImages = [
  "Bản vẽ và phối cảnh 3D",
  "Hồ sơ công trình",
  "Hồ sơ công trình",
  "Hồ sơ công trình",
  "Hợp đồng thiết kế",
  "Hợp đồng thi công nội thất",
  "Hồ sơ cam kết",
  "Hồ sơ công trình",
  "Hợp đồng thi công nội thất",
  "Hợp đồng thi công nội thất",
  "Hợp đồng thi công nội thất",
  "Hợp đồng thi công nội thất",
  "Hợp đồng thi công nội thất",
  "Hợp đồng kinh tế",
  "Dự toán chi phí",
  "Điều khoản hợp đồng",
  "Biên bản thanh lý",
  "Nghiệm thu khối lượng",
  "Biên bản nghiệm thu",
  "Báo giá thi công",
  "Báo giá thi công",
  "Báo giá phụ kiện",
  "Hồ sơ công trình",
  "Hồ sơ công trình",
  "Hồ sơ công trình",
  "Hồ sơ công trình",
].map((label, index) => ({
  src: `/images/trang-chu/ho-so-cong-trinh/ho-so-${String(index + 1).padStart(2, "0")}.jpg`,
  label,
  number: index + 1,
}));

export function ConstructionDossierCarousel() {
  const galleryRef = useRef<HTMLDivElement>(null);

  function scrollGallery(direction: "previous" | "next") {
    const gallery = galleryRef.current;
    const firstCard = gallery?.querySelector<HTMLElement>("[data-dossier-card]");

    if (!gallery || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 12;
    const distance = firstCard.offsetWidth + gap;

    gallery.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a77b3b]">
            Hồ sơ minh bạch
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-tight text-[#332b20] sm:text-3xl">
            Rõ ràng từ bản vẽ đến bàn giao
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756a5c]">
            Mỗi mốc công việc đều được chuẩn bị thành hồ sơ để hai bên dễ theo
            dõi, đối chiếu và thống nhất.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="mr-2 hidden text-xs font-bold uppercase tracking-[0.1em] text-[#8b7a62] sm:inline">
            26 hồ sơ
          </span>
          <button
            type="button"
            onClick={() => scrollGallery("previous")}
            aria-label="Xem hồ sơ trước"
            title="Xem hồ sơ trước"
            className="flex h-10 w-10 items-center justify-center border border-[#d5c4aa] bg-[#fffdf9] text-[#826b48] transition hover:border-[#aa8550] hover:text-[#6a5533]"
          >
            <ChevronLeft aria-hidden="true" size={19} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={() => scrollGallery("next")}
            aria-label="Xem hồ sơ tiếp theo"
            title="Xem hồ sơ tiếp theo"
            className="flex h-10 w-10 items-center justify-center border border-[#d5c4aa] bg-[#fffdf9] text-[#826b48] transition hover:border-[#aa8550] hover:text-[#6a5533]"
          >
            <ChevronRight aria-hidden="true" size={19} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div
        ref={galleryRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {dossierImages.map((item) => (
          <figure
            key={item.src}
            data-dossier-card
            className="group w-[82%] shrink-0 snap-start overflow-hidden bg-[#e9dfd1] sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-36px)/4)]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.src}
                alt={`${item.label} của Tổ Ấm Hoàn Hảo`}
                fill
                sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 82vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-3 top-3 bg-[#fcf9f4]/92 px-2 py-1 text-[10px] font-bold tracking-[0.1em] text-[#7a5c2c] backdrop-blur-sm">
                {String(item.number).padStart(2, "0")} / 26
              </span>
            </div>
            <figcaption className="border-x border-b border-[#dfd3c3] bg-[#fffdf9] px-3 py-3 text-xs font-bold uppercase tracking-[0.07em] text-[#69593f]">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
