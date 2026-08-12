import Image from "next/image";

export function ConsultationCta() {
  return (
    <section className="relative min-h-[180px] overflow-hidden px-5 py-9 sm:px-8">
      <Image
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
        alt="Không gian bếp và bàn ăn ấm áp"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#3d2c1d]/45" />

      <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-center justify-center text-center">
        <h2 className="max-w-[620px] font-serif text-[34px] leading-[1.08] text-white sm:text-[48px]">
          Hãy kể chúng tôi nghe
          <span className="block">về ngôi nhà của bạn.</span>
        </h2>
        <a
          href="#"
          className="mt-7 inline-flex h-12 items-center justify-center bg-[#7a7f63] px-8 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#686d55]"
        >
          Đặt lịch tư vấn ngay
        </a>
      </div>
    </section>
  );
}
