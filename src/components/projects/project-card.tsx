import { ArrowRight, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/78">
      <Link
        href={`/du-an/${project.slug}`}
        aria-label={`Xem dự án ${project.title}`}
        className="relative block aspect-[1.36] overflow-hidden"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="px-5 py-5">
        <Link
          href={`/du-an/${project.slug}`}
          className="block text-lg font-semibold leading-7 text-[#2a251e] transition hover:text-[#7c5f2c]"
        >
          {project.title}
        </Link>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#7d715f]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#a47b45]" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Ruler aria-hidden="true" className="h-3.5 w-3.5 text-[#a47b45]" />
              {project.area}
            </span>
          </div>

          <Link
            href={`/du-an/${project.slug}`}
            aria-label={`Xem dự án ${project.title}`}
            className="text-[#a47b45] transition group-hover:translate-x-1 group-hover:text-[#70542e]"
          >
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
