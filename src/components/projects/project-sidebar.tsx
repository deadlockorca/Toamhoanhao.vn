import { projectCategoryFilters, projectSupport } from "@/data/projects";

export function ProjectSidebar() {
  const SupportIcon = projectSupport.icon;

  return (
    <aside className="border-r border-[#ded4c4] pr-0 lg:pr-8">
      <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[#2d281f]">
        Danh mục dự án
      </h2>

      <div className="mt-8 space-y-3">
        {projectCategoryFilters.map((category, index) => {
          const Icon = category.icon;
          const isActive = index === 0;

          return (
            <a
              key={category.label}
              href="#"
              className={`flex items-center gap-3 px-4 py-4 text-sm font-medium transition ${
                isActive
                  ? "bg-[#e7dccb] text-[#7b5a2f]"
                  : "text-[#746b60] hover:bg-[#efe7dc] hover:text-[#7b5a2f]"
              }`}
            >
              <Icon aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
              {category.label}
            </a>
          );
        })}
      </div>

      <div className="mt-10 border border-[#ded4c4] bg-[#fbf7f1]/72 px-6 py-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d5c7b2] text-[#9f7a45]">
          <SupportIcon aria-hidden="true" strokeWidth={1.35} className="h-7 w-7" />
        </div>
        <p className="mt-6 text-sm font-medium leading-6 text-[#62584b]">
          {projectSupport.title}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#7b5a2f] transition hover:text-[#9a732f]"
        >
          {projectSupport.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </aside>
  );
}
