import { Building2, Clock3, Gem, Ruler } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectDetailMetricsProps = {
  project: Project;
};

const metricIcons = [Ruler, Building2, Clock3, Gem];

export function ProjectDetailMetrics({ project }: ProjectDetailMetricsProps) {
  const metrics = project.detail?.metrics ?? [
    { label: "Diện tích", value: project.area },
    { label: "Hạng mục", value: project.category },
    { label: "Thời gian", value: "8 tuần" },
    { label: "Phong cách", value: project.style },
  ];

  return (
    <section className="bg-[#f7f1e9] px-5 pt-10 sm:px-8">
      <div className="mx-auto grid max-w-[1120px] gap-0 border border-[#ded4c4] bg-[#fbf7f1]/92 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metricIcons[index] ?? Ruler;

          return (
            <article
              key={metric.label}
              className={`flex items-center gap-5 px-8 py-8 ${
                index > 0 ? "lg:border-l lg:border-[#ded4c4]" : ""
              }`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.35}
                className="h-10 w-10 shrink-0 text-[#a47b45]"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.06em] text-[#756b5d]">
                  {metric.label}
                </p>
                <p className="mt-1 text-base font-semibold leading-6 text-[#2d281f]">
                  {metric.value}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
