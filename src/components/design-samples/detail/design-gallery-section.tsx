import Image from "next/image";

import type { DesignSample } from "@/data/design-samples";

type DesignGallerySectionProps = {
  sample: DesignSample;
};

export function DesignGallerySection({ sample }: DesignGallerySectionProps) {
  const gallery = sample.detail?.gallery ?? [
    { title: sample.title, image: sample.thumbnail },
  ];

  return (
    <section id="gallery" className="bg-[#f7f1e9] px-5 pb-10 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.04em] text-[#2d281f]">
          Phối cảnh nổi bật
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/72"
            >
              <div className="relative aspect-[1.35] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="px-4 py-3 text-sm font-semibold text-[#3f372d]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
