import { designCategoryCards } from "@/data/design-samples";

export function DesignCategorySection() {
  return (
    <section className="border-t border-[#ded4c4] bg-[#f7f1e9] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17]">
          Danh mục mẫu thiết kế
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designCategoryCards.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.title}
                href={category.href}
                className="group flex min-h-[150px] flex-col items-center justify-center border border-[#ded4c4] bg-[#fbf7f1]/72 px-5 py-6 text-center transition hover:border-[#b99c6c] hover:bg-[#fffaf4]"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.35}
                  className="h-10 w-10 text-[#a47b45]"
                />
                <h3 className="mt-5 font-serif text-xl text-[#2d281f]">
                  {category.title}
                </h3>
                <span className="mt-4 text-xs font-medium text-[#7b6f60] transition group-hover:text-[#9a732f]">
                  Xem bộ sưu tập <span aria-hidden="true">→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
