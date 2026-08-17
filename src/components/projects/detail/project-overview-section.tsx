import {
  Bath,
  BedDouble,
  CalendarDays,
  Layers3,
  MapPin,
  Ruler,
} from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectOverviewSectionProps = {
  project: Project;
};

const infoIcons = [MapPin, Ruler, Layers3, BedDouble, Bath, CalendarDays];

export function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
  const detail = project.detail;
  const rows = detail?.infoRows ?? [
    { label: "Vị trí", value: project.location },
    { label: "Diện tích", value: project.area },
    { label: "Hạng mục", value: project.category },
    { label: "Năm hoàn thiện", value: project.year },
  ];

  return (
    <section className="bg-[#f7f1e9] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[44%_56%]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#7a6d5c]">
            Tổng quan dự án
          </p>
          <h2 className="mt-7 max-w-[390px] font-serif text-[38px] leading-[1.12] text-[#211d17] sm:text-[48px]">
            {detail?.overviewTitle ?? project.title}
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[#5f574a]">
            {(detail?.overviewParagraphs ?? [project.summary]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="border border-[#ded4c4] bg-[#fbf7f1]/72 px-7 py-6">
          {rows.map((row, index) => {
            const Icon = infoIcons[index] ?? MapPin;

            return (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_1fr] gap-5 border-b border-[#e2d8ca] py-4 last:border-b-0"
              >
                <p className="flex items-center gap-3 text-sm text-[#6a6257]">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.4}
                    className="h-5 w-5 text-[#a47b45]"
                  />
                  {row.label}
                </p>
                <p className="text-sm font-medium text-[#2d281f]">{row.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
