import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { projectCategories } from "@/data/site";

type FeaturedProjectsSectionProps = {
  projects: Project[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f7f1e9] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
        <aside className="flex flex-col justify-between gap-10">
          <div>
            <h2 className="mb-10 text-sm font-bold uppercase tracking-[0.12em] text-[#211d17]">
              Dự án nổi bật
            </h2>

            <div className="space-y-7">
              {projectCategories.map((category, index) => {
                const isActive = index === 0;

                return (
                  <a
                    key={category}
                    href="#"
                    className="group grid grid-cols-[32px_1fr] items-center gap-5"
                  >
                    <span
                      className={`text-lg font-semibold ${
                        isActive ? "text-[#7c5f2c]" : "text-[#b8ad9e]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`whitespace-nowrap text-sm font-bold uppercase tracking-[0.04em] transition group-hover:text-[#7c5f2c] ${
                        isActive ? "text-[#5a4c36]" : "text-[#b1a79a]"
                      }`}
                    >
                      {category}
                    </span>
                    {isActive ? (
                      <span className="col-start-2 h-px w-full bg-[#c8bca9]" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>

          <Link
            href="/du-an"
            className="inline-flex w-fit items-center gap-4 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:text-[#9a732f]"
          >
            Xem tất cả dự án
            <span aria-hidden="true">→</span>
          </Link>
        </aside>

        <div className="grid gap-3 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="group border border-[#ded4c4] bg-[#fbf7f1]/72"
            >
              <Link
                href={`/du-an/${project.slug}`}
                aria-label={`Xem dự án ${project.title}`}
                className="relative block aspect-[1.32] overflow-hidden"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </Link>
              <div className="flex min-h-[132px] flex-col justify-between px-6 py-5">
                <div>
                  <p className="text-base font-semibold leading-7 text-[#27231c]">
                    {project.category}
                  </p>
                  <Link
                    href={`/du-an/${project.slug}`}
                    className="block text-base font-semibold leading-7 text-[#27231c] transition hover:text-[#7c5f2c]"
                  >
                    {project.title}
                  </Link>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <p className="text-xs font-semibold text-[#96784c]">
                    {project.location} · {project.area}
                  </p>
                  <Link
                    href={`/du-an/${project.slug}`}
                    aria-label={`Xem dự án ${project.title}`}
                    className="text-2xl leading-none text-[#b19060] transition group-hover:translate-x-1 group-hover:text-[#7c5f2c]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
