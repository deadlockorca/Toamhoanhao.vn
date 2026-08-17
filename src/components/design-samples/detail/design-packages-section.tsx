import { CheckCircle2 } from "lucide-react";

import type { DesignSample } from "@/data/design-samples";

type DesignPackagesSectionProps = {
  sample: DesignSample;
};

export function DesignPackagesSection({ sample }: DesignPackagesSectionProps) {
  const packages = sample.detail?.suggestedPackages ?? [];

  if (packages.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.04em] text-[#2d281f]">
          Gói triển khai gợi ý
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.title}
              className={`relative border bg-[#fbf7f1]/78 px-7 py-7 ${
                item.featured
                  ? "border-[#a47b45] shadow-sm"
                  : "border-[#ded4c4]"
              }`}
            >
              {item.featured ? (
                <span className="absolute left-0 top-0 bg-[#9b7847] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white">
                  Phổ biến
                </span>
              ) : null}
              <div className={item.featured ? "pt-8" : ""}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl text-[#2d281f]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#7d715f]">
                    {item.price}
                  </p>
                </div>

                <ul className="mt-7 space-y-3">
                  {item.items.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-[#5f574a]"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#a47b45]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#consultation"
                  className={`mt-8 inline-flex h-11 items-center justify-center px-6 text-xs font-bold uppercase tracking-[0.06em] transition ${
                    item.featured
                      ? "bg-[#6f765b] text-white hover:bg-[#5f654e]"
                      : "border border-[#d2c3ad] text-[#6a5533] hover:border-[#b89765]"
                  }`}
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
