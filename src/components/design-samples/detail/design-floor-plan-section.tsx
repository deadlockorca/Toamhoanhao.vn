import { Lightbulb, Move, PackageCheck, SunMedium } from "lucide-react";
import Image from "next/image";

import type { DesignSample } from "@/data/design-samples";

type DesignFloorPlanSectionProps = {
  sample: DesignSample;
};

const noteIcons = [Move, SunMedium, PackageCheck, Lightbulb];

export function DesignFloorPlanSection({ sample }: DesignFloorPlanSectionProps) {
  const detail = sample.detail;

  if (!detail) {
    return null;
  }

  return (
    <section className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.04em] text-[#2d281f]">
          Mặt bằng tham khảo
        </h2>

        <div className="mt-6 grid gap-3 lg:grid-cols-[52%_48%]">
          <div className="border border-[#ded4c4] bg-[#fbf7f1]/72 p-6">
            <div className="relative aspect-[1.55]">
              {detail.floorPlanImage ? (
                <Image
                  src={detail.floorPlanImage}
                  alt={`Mặt bằng ${sample.title}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full items-center justify-center border border-dashed border-[#d7cbb9] text-sm text-[#867a6b]">
                  Đang cập nhật mặt bằng
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center border border-[#ded4c4] bg-[#fbf7f1]/72 px-8 py-8">
            <div className="space-y-7">
              {detail.floorPlanNotes.map((note, index) => {
                const Icon = noteIcons[index] ?? Lightbulb;

                return (
                  <article key={note.label} className="flex gap-4">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.35}
                      className="mt-1 h-6 w-6 shrink-0 text-[#a47b45]"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#2d281f]">
                        {note.label}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#665d51]">
                        {note.value}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
