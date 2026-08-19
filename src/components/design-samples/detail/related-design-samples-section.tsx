import { DesignSampleCard } from "@/components/design-samples/design-sample-card";
import {
  getDesignSampleBySlug,
  getRelatedDesignSamples,
  type DesignSample,
} from "@/data/design-samples";

type RelatedDesignSamplesSectionProps = {
  sample: DesignSample;
  samples?: DesignSample[];
};

export function RelatedDesignSamplesSection({
  sample,
  samples,
}: RelatedDesignSamplesSectionProps) {
  const relatedFromSlugs =
    sample.detail?.relatedSampleSlugs
      .map(
        (slug) =>
          samples?.find((item) => item.slug === slug) ??
          getDesignSampleBySlug(slug),
      )
      .filter((item): item is DesignSample => Boolean(item)) ?? [];
  const relatedSamples =
    relatedFromSlugs.length > 0
      ? relatedFromSlugs
      : getRelatedDesignSamples(sample);

  return (
    <section className="bg-[#f7f1e9] px-5 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-xs font-bold uppercase tracking-[0.1em] text-[#7a6d5c]">
          Mẫu thiết kế liên quan
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {relatedSamples.map((relatedSample, index) => (
            <DesignSampleCard
              key={relatedSample.slug}
              sample={relatedSample}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
