import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { DesignSample } from "@/data/design-samples";

type DesignSampleCardProps = {
  sample: DesignSample;
  index: number;
};

export function DesignSampleCard({ sample, index }: DesignSampleCardProps) {
  return (
    <article className="group overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/78">
      <div className="relative aspect-[1.62] overflow-hidden">
        <Image
          src={sample.thumbnail}
          alt={sample.title}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold leading-7 text-[#2a251e]">
          {index + 1}. {sample.title}
        </h2>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-xs font-medium text-[#7d715f]">
            {sample.area ? `${sample.area} · ` : ""}
            {sample.style}
          </p>
          <Link
            href={`/mau-thiet-ke/${sample.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6a5533] transition group-hover:text-[#9a732f]"
          >
            Xem chi tiết
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
