import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section className="bg-[#f7f1e9] px-5 pt-16 sm:px-8 lg:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17] sm:text-3xl">
          Dịch vụ của chúng tôi
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex min-h-[178px] flex-col items-center justify-center border border-[#ded4c4] bg-[#fbf7f1]/68 px-5 py-7 text-center transition hover:border-[#c8b28d] hover:bg-[#fffaf4]"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.35}
                  className="h-10 w-10 text-[#9f7d4d]"
                />
                <h3 className="mt-5 text-[13px] font-bold uppercase tracking-[0.03em] text-[#2a251e]">
                  {service.title}
                </h3>
                <div className="mt-4 space-y-1.5 text-[12px] leading-5 text-[#6a6257]">
                  {service.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
