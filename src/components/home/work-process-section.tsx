import { workSteps } from "@/data/site";

export function WorkProcessSection() {
  return (
    <section className="bg-[#f7f1e9] px-5 pt-16 sm:px-8">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17] sm:text-3xl">
          Quy trình làm việc
        </h2>

        <div className="relative mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          <div className="absolute left-8 right-8 top-[38px] hidden border-t border-dashed border-[#c8bca9] lg:block" />

          {workSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-5 flex w-full items-center justify-center gap-4 lg:gap-3">
                  <span className="text-lg font-semibold text-[#8b6733]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#d8cdbb] bg-[#f9f3eb] shadow-[0_0_0_8px_rgba(251,247,241,0.75)]">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.35}
                      className="h-8 w-8 text-[#a27b49]"
                    />
                  </span>
                </div>
                <h3 className="max-w-[150px] text-sm font-bold uppercase leading-6 tracking-[0.03em] text-[#2a251e]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[170px] text-xs leading-6 text-[#6e6558]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
