import { ArrowRight, Layers3, MapPin, Palette, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

type FeaturedProjectSectionProps = {
  project: Project;
};

export function FeaturedProjectSection({ project }: FeaturedProjectSectionProps) {
  return (
    <section className="bg-[#f7f1e9] px-5 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-[1320px] overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/82 lg:grid-cols-[52%_48%]">
        <div className="relative min-h-[360px]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-8 py-10 lg:px-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a47b45]">
              Dự án tiêu biểu
            </p>
            <h2 className="mt-5 font-serif text-[40px] leading-tight text-[#211d17] sm:text-[52px]">
              {project.title}
            </h2>
            <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#62584b]">
              {project.summary}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: MapPin, label: "Vị trí", value: project.location },
                { icon: Ruler, label: "Diện tích", value: project.area },
                {
                  icon: Layers3,
                  label: "Hạng mục",
                  value: "Thiết kế & Thi công trọn gói",
                },
                { icon: Palette, label: "Phong cách", value: project.style },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label}>
                    <p className="flex items-center gap-2 text-xs text-[#867a6b]">
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.4}
                        className="h-4 w-4 text-[#a47b45]"
                      />
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#3f372d]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              href={`/du-an/${project.slug}`}
              className="mt-8 inline-flex h-12 items-center gap-3 bg-[#6f765b] px-7 text-sm font-bold text-white transition hover:bg-[#5f654e]"
            >
              Xem chi tiết dự án
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
