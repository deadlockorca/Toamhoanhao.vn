import Image from "next/image";

import type { DesignSample } from "@/data/design-samples";

type DesignFeaturesSectionProps = {
  sample: DesignSample;
};

export function DesignFeaturesSection({ sample }: DesignFeaturesSectionProps) {
  const features = sample.detail?.features ?? [];

  if (features.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.04em] text-[#2d281f]">
          Đặc điểm thiết kế
        </h2>

        <div className="mt-6 overflow-hidden border border-[#ded4c4]">
          {features.map((feature) => {
            const image = (
              <div className="relative min-h-[250px] lg:min-h-[290px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
            );

            const content = (
              <div className="flex items-center bg-[#fbf7f1]/78 px-8 py-9 lg:px-12">
                <div className="grid gap-5 sm:grid-cols-[72px_1fr]">
                  <p className="font-serif text-4xl leading-none text-[#9b7847]">
                    {feature.index}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2d281f]">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-[#5f574a]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            return (
              <article
                key={`${feature.index}-${feature.title}`}
                className="grid border-b border-[#ded4c4] last:border-b-0 lg:grid-cols-2"
              >
                {feature.imageSide === "left" ? (
                  <>
                    {image}
                    {content}
                  </>
                ) : (
                  <>
                    {content}
                    {image}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
