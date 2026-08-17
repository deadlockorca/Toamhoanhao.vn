import Image from "next/image";
import Link from "next/link";

import {
  featuredHomeDesignSamples,
  homeDesignCategories,
} from "@/data/design-samples";

export function FeaturedDesignSamplesSection() {
  return (
    <section className="bg-[#f7f1e9] px-5 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
        <aside className="flex flex-col justify-between gap-10">
          <div>
            <h2 className="mb-10 text-sm font-bold uppercase tracking-[0.12em] text-[#211d17]">
              Mẫu thiết kế nổi bật
            </h2>

            <div className="space-y-7">
              {homeDesignCategories.map((category, index) => {
                const isActive = index === 0;

                return (
                  <a
                    key={category}
                    href="#"
                    className="group grid grid-cols-[32px_1fr] items-center gap-5"
                  >
                    <span
                      className={`text-lg font-semibold ${
                        isActive ? "text-[#7c5f2c]" : "text-[#b8ad9e]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`whitespace-nowrap text-sm font-bold uppercase tracking-[0.04em] transition group-hover:text-[#7c5f2c] ${
                        isActive ? "text-[#5a4c36]" : "text-[#b1a79a]"
                      }`}
                    >
                      {category}
                    </span>
                    {isActive ? (
                      <span className="col-start-2 h-px w-full bg-[#c8bca9]" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>

          <Link
            href="/mau-thiet-ke"
            className="inline-flex w-fit items-center gap-4 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:text-[#9a732f]"
          >
            Xem tất cả mẫu thiết kế
            <span aria-hidden="true">→</span>
          </Link>
        </aside>

        <div className="grid gap-3 md:grid-cols-3">
          {featuredHomeDesignSamples.map((sample) => (
            <article
              key={sample.slug}
              className="group border border-[#ded4c4] bg-[#fbf7f1]/72"
            >
              <div className="relative aspect-[1.32] overflow-hidden">
                <Image
                  src={sample.thumbnail}
                  alt={sample.title}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex min-h-[132px] flex-col justify-between px-6 py-5">
                <div>
                  <p className="text-base font-semibold leading-7 text-[#27231c]">
                    {sample.category}
                  </p>
                  <h3 className="text-base font-semibold leading-7 text-[#27231c]">
                    {sample.title}
                  </h3>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <p className="text-xs font-semibold text-[#96784c]">
                    {sample.area ? `${sample.area} · ` : ""}
                    {sample.style}
                  </p>
                  <a
                    href="#"
                    aria-label={`Xem mẫu thiết kế ${sample.title}`}
                    className="text-2xl leading-none text-[#b19060] transition group-hover:translate-x-1 group-hover:text-[#7c5f2c]"
                  >
                    →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
