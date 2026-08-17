import { Lightbulb, Move, PackageCheck, SunMedium } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectFloorPlanSectionProps = {
  project: Project;
};

const noteIcons = [Move, SunMedium, PackageCheck, Lightbulb];

export function ProjectFloorPlanSection({ project }: ProjectFloorPlanSectionProps) {
  const detail = project.detail;

  if (!detail) {
    return null;
  }

  return (
    <section className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {detail.floorPlanNotes.map((note, index) => {
            const Icon = noteIcons[index] ?? Lightbulb;

            return (
              <article
                key={note.label}
                className="border border-[#ded4c4] bg-[#fbf7f1]/72 px-6 py-7"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.35}
                  className="h-7 w-7 text-[#a47b45]"
                />
                <h3 className="mt-5 text-sm font-bold text-[#2d281f]">
                  {note.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#665d51]">
                  {note.value}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
