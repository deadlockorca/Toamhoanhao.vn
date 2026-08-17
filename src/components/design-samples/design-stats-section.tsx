import { designStats } from "@/data/design-samples";

export function DesignStatsSection() {
  return (
    <section className="bg-[#f7f1e9] px-5 pb-14 sm:px-8">
      <div className="mx-auto grid max-w-[1320px] gap-6 border-y border-[#ded4c4] py-10 sm:grid-cols-2 lg:grid-cols-4">
        {designStats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className={`flex gap-5 ${
                index > 0 ? "lg:border-l lg:border-[#ded4c4] lg:pl-8" : ""
              }`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.35}
                className="mt-1 h-10 w-10 shrink-0 text-[#a47b45]"
              />
              <div>
                <p className="font-serif text-4xl leading-none text-[#211d17]">
                  {stat.value}
                </p>
                <h2 className="mt-2 text-base font-semibold text-[#2d281f]">
                  {stat.title}
                </h2>
                <p className="mt-3 max-w-[190px] text-xs leading-6 text-[#756b5d]">
                  {stat.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
