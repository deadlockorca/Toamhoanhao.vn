import Image from "next/image";

export function AboutStrip() {
  return (
    <section className="bg-[#f4eee6]">
      <div className="grid min-h-[360px] lg:grid-cols-[36%_64%]">
        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-0 lg:py-16 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-14">
          <div className="max-w-[390px]">
            <h2 className="font-serif text-[38px] leading-[1.12] tracking-normal text-[#252019] sm:text-[46px]">
              Tổ ấm không chỉ
              <span className="block">là nơi để ở.</span>
              <span className="block">Mà là nơi để yêu thương.</span>
            </h2>
            <p className="mt-6 max-w-[320px] text-sm leading-7 text-[#5f574a]">
              Chúng tôi lắng nghe câu chuyện của bạn, để mỗi thiết kế đều mang
              dấu ấn riêng và chạm đến cảm xúc.
            </p>
            <a
              href="#"
              className="mt-9 inline-flex items-center gap-4 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#5c4b30] transition hover:text-[#9a732f]"
            >
              Về chúng tôi
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1500&q=85"
            alt="Gia đình cùng đọc sách trong không gian phòng khách ấm áp"
            fill
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#f4eee6] to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
