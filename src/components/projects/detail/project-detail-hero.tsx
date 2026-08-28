import { MapPin, Ruler, Sofa, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import type { Project } from "@/data/projects";

type ProjectDetailHeroProps = {
  project: Project;
};

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const detail = project.detail;

  return (
    <section className="relative overflow-hidden bg-[#f7f1e9]">
      <SiteHeader />

      <div className="grid pt-20 lg:min-h-[660px] lg:grid-cols-[46%_54%] xl:pt-[120px]">
        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-0 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-14">
          <div className="max-w-[560px]">
            <div className="mb-10 flex flex-wrap items-center gap-3 text-xs text-[#7d715f]">
              <a href="#" className="transition hover:text-[#9a732f]">
                Trang chủ
              </a>
              <span>/</span>
              <Link href="/du-an" className="transition hover:text-[#9a732f]">
                Dự án
              </Link>
              <span>/</span>
              <span className="text-[#4e463a]">{project.title}</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a47b45]">
              {detail?.eyebrow ?? project.category}
            </p>

            <h1 className="mt-5 font-sans text-[48px] leading-[1.02] text-[#15120e] sm:text-[66px]">
              {detail?.displayTitle ?? project.title}
              {detail ? (
                <span className="block italic text-[#7e8268]">
                  {detail.italicTitle}
                </span>
              ) : null}
            </h1>

            <p className="mt-8 max-w-[430px] text-sm leading-7 text-[#4c453a]">
              {detail?.description ?? project.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-xs font-medium text-[#62584b]">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Ruler aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                {project.area}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                {project.style}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sofa aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                {detail?.bedrooms ?? "2 phòng ngủ"}
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <ConsultationButton className="inline-flex h-12 items-center justify-center bg-[#6f765b] px-8 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#5f654e]">
                Đặt lịch tư vấn
              </ConsultationButton>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] md:block lg:min-h-[660px]">
          <Image
            src={detail?.heroImage ?? project.thumbnail}
            alt={project.title}
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#f7f1e9] to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
