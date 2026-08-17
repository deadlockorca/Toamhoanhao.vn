import Image from "next/image";

import { popularDesignStyles } from "@/data/design-samples";

export function PopularDesignStyles() {
  return (
    <section className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17]">
          Phong cách được yêu thích
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {popularDesignStyles.map((style) => (
            <article
              key={style.title}
              className="group relative aspect-[2.15] overflow-hidden"
            >
              <Image
                src={style.image}
                alt={style.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute bottom-5 left-6 text-white">
                <h3 className="font-serif text-3xl">{style.title}</h3>
                <p className="mt-1 text-sm">{style.count}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
