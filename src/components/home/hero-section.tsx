"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SiteHeader } from "@/components/site-header";

const slides = [
  {
    image: "/images/trang-chu/nha-pho-dep-1.jpg",
    alt: "Khoảng sân xanh trong thiết kế nhà phố",
    title: "Tận tâm - Minh bạch - Đúng giờ",
    description: "Làm chân thành - Nhận nhà ngon lành.",
    cta: "Khám phá dự án",
    href: "/du-an",
  },
  {
    image: "/images/trang-chu/thiet-ke-noi-that-go-oc-cho.jpg",
    alt: "Phòng ngủ sử dụng nội thất gỗ óc chó",
    title: "Thiết kế của bạn là duy nhất",
    description:
      "Mỗi giải pháp được phát triển riêng cho nhu cầu, lối sống và không gian của bạn.",
    cta: "Khám phá dự án",
    href: "/du-an",
  },
  {
    image: "/images/trang-chu/thiet-ke-thi-cong-nha-pho.jpg",
    alt: "Phối cảnh thiết kế và thi công nhà phố hiện đại",
    title: "Minh bạch mọi thông tin",
    description:
      "Dự toán rõ ràng trước khi triển khai, đồng hành xuyên suốt công trình.",
    cta: "Xem quy trình làm việc",
    href: "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
  },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  const slide = slides[activeSlide];

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#17140f] sm:min-h-[680px] lg:min-h-[720px]">
      <SiteHeader />

      {slides.map((item, index) => (
        <Image
          key={item.image}
          src={item.image}
          alt={index === activeSlide ? item.alt : ""}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-black/35" />

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1180px] items-center justify-center px-6 pb-16 pt-32 text-center sm:min-h-[680px] sm:px-10 lg:min-h-[720px]">
        <div className="max-w-[720px] text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ead2aa]">
            Tổ Ấm Hoàn Hảo
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            {slide.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[580px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {slide.description}
          </p>
          <Link
            href={slide.href}
            className="mt-9 inline-flex h-12 items-center justify-center border border-[#d7ad6e] bg-[#b88642] px-7 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#976d34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-3" aria-label="Chọn banner">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              aria-label={`Hiển thị banner ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                index === activeSlide
                  ? "w-10 bg-[#e5c48f]"
                  : "w-2.5 bg-white/65 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={showPreviousSlide}
            aria-label="Banner trước"
            className="flex h-11 w-11 items-center justify-center border border-white/70 bg-black/20 text-white transition hover:bg-white hover:text-[#211b12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNextSlide}
            aria-label="Banner tiếp theo"
            className="flex h-11 w-11 items-center justify-center border border-white/70 bg-black/20 text-white transition hover:bg-white hover:text-[#211b12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
