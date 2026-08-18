"use client";

import { ChevronLeft, ChevronRight, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const customerExperienceImages = [
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_5.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_6.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat1.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat2.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat3.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat4.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_zalo_1.jpg",
  "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_zalo_2.jpg",
];

export function TestimonialsSection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  function scrollGallery(direction: "previous" | "next") {
    const gallery = galleryRef.current;

    if (!gallery) {
      return;
    }

    gallery.scrollBy({
      left:
        direction === "next"
          ? gallery.clientWidth * 0.82
          : -gallery.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-[#f7f1e9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a77b3b]">
              <MessageCircleMore aria-hidden="true" size={17} strokeWidth={1.6} />
              Trải nghiệm khách hàng
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#29221a] sm:text-4xl">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#706454] sm:text-base">
              Những khoảnh khắc thực tế trong hành trình kiến tạo không gian sống
              cùng Tổ Ấm Hoàn Hảo.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollGallery("previous")}
              aria-label="Xem trải nghiệm trước"
              title="Xem trải nghiệm trước"
              className="flex h-10 w-10 items-center justify-center border border-[#d8ccbb] bg-[#fcf9f4] text-[#826b48] transition hover:border-[#aa8550] hover:text-[#6a5533]"
            >
              <ChevronLeft aria-hidden="true" size={19} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery("next")}
              aria-label="Xem trải nghiệm tiếp theo"
              title="Xem trải nghiệm tiếp theo"
              className="flex h-10 w-10 items-center justify-center border border-[#d8ccbb] bg-[#fcf9f4] text-[#826b48] transition hover:border-[#aa8550] hover:text-[#6a5533]"
            >
              <ChevronRight aria-hidden="true" size={19} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {customerExperienceImages.map((src, index) => (
            <figure
              key={src}
              className="group relative aspect-[0.76] w-[78%] shrink-0 snap-start overflow-hidden border border-[#dfd3c3] bg-[#e9ded0] sm:w-[42%] lg:w-[calc((100%-40px)/3)]"
            >
              <Image
                src={src}
                alt={`Trải nghiệm khách hàng cùng Tổ Ấm Hoàn Hảo, hình ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 78vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-12 text-xs font-bold uppercase tracking-[0.12em] text-white">
                <span>Khách hàng</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
