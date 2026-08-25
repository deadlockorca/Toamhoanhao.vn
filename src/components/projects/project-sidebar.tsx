import { projectCategoryFilters } from "@/data/projects";

export function ProjectSidebar() {
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
    </aside>
  );
}
