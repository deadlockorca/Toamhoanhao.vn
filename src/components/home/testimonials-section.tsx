import { BadgeCheck } from "lucide-react";

import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-[#f7f1e9] px-5 py-16 sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17] sm:text-3xl">
          Khách hàng nói gì về chúng tôi
        </h2>

        <div className="relative mt-8">
          <button
            type="button"
            aria-label="Xem nhận xét trước"
            className="absolute -left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded4c4] bg-[#fbf7f1] text-2xl text-[#b19060] lg:flex"
          >
            ‹
          </button>

          <div className="grid gap-6 lg:grid-cols-3 lg:px-8">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="min-h-[220px] border border-[#ded4c4] bg-[#fbf7f1]/70 px-8 py-7"
              >
                <BadgeCheck
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="h-7 w-7 text-[#b19060]"
                />
                <p className="mt-4 text-sm leading-7 text-[#4c453a]">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7c5ab] text-sm font-bold text-[#5b4324]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2b261f]">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#7c7266]">
                      {testimonial.project}
                    </p>
                    <p className="mt-1 text-sm tracking-[0.18em] text-[#b4843d]">
                      ★★★★★
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Xem nhận xét tiếp theo"
            className="absolute -right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded4c4] bg-[#fbf7f1] text-2xl text-[#b19060] lg:flex"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
