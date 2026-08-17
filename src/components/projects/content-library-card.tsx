import { ArrowRight, MapPin, Ruler, SwatchBook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { LibraryItem } from "@/lib/content-library";

type ContentLibraryCardProps = {
  item: LibraryItem;
};

export function ContentLibraryCard({ item }: ContentLibraryCardProps) {
  const isDesignSample = item.contentType === "designSample";

  return (
    <article className="group overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/78">
      <Link
        href={item.href}
        aria-label={`Xem ${isDesignSample ? "mẫu thiết kế" : "dự án"} ${item.title}`}
        className="relative block aspect-[1.36] overflow-hidden"
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 border border-white/70 bg-[#fbf7f1]/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#76572c]">
          {isDesignSample ? "Mẫu thiết kế" : "Công trình"}
        </span>
      </Link>

      <div className="px-5 py-5">
        <Link
          href={item.href}
          className="block text-lg font-semibold leading-7 text-[#2a251e] transition hover:text-[#7c5f2c]"
        >
          {item.title}
        </Link>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#7d715f]">
            {item.location ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#a47b45]" />
                {item.location}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <SwatchBook aria-hidden="true" className="h-3.5 w-3.5 text-[#a47b45]" />
                {item.style}
              </span>
            )}
            {item.area ? (
              <span className="inline-flex items-center gap-1.5">
                <Ruler aria-hidden="true" className="h-3.5 w-3.5 text-[#a47b45]" />
                {item.area}
              </span>
            ) : null}
          </div>

          <Link
            href={item.href}
            aria-label={`Xem chi tiết ${item.title}`}
            className="shrink-0 text-[#a47b45] transition group-hover:translate-x-1 group-hover:text-[#70542e]"
          >
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
