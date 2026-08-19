import { ArrowRight, BadgeCheck, ClipboardCheck, Clock3, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConstructionDossierCarousel } from "@/components/home/construction-dossier-carousel";
import type { Project } from "@/data/projects";

type ConstructionRecordsSectionProps = {
  projects: Project[];
};

const dossierSteps = [
  {
    icon: ClipboardCheck,
    title: "Khái toán rõ ràng",
    description: "Làm rõ phạm vi, hạng mục và ngân sách dự kiến trước khi triển khai.",
  },
  {
    icon: WalletCards,
    title: "Chủ động tài chính",
    description: "Theo dõi chi phí theo từng giai đoạn, hạn chế tối đa các khoản phát sinh.",
  },
  {
    icon: Clock3,
    title: "Bám sát tiến độ",
    description: "Cập nhật công việc thường xuyên để khách hàng luôn nắm được hành trình công trình.",
  },
];

export function ConstructionRecordsSection({
  projects,
}: ConstructionRecordsSectionProps) {
  const records = projects.filter((project) => project.featured).slice(0, 3);
  const displayedRecords = records.length > 0 ? records : projects.slice(0, 3);

  return (
    <section className="bg-[#fcf9f4] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 border-b border-[#dfd3c3] pb-10 lg:grid-cols-[0.83fr_1.17fr] lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a77b3b]">
              <BadgeCheck aria-hidden="true" size={17} strokeWidth={1.6} />
              Minh bạch trong từng bước
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#29221a] sm:text-4xl">
              Hồ sơ công trình
            </h2>
          </div>

          <div className="max-w-3xl lg:justify-self-end">
            <p className="font-serif text-xl leading-relaxed text-[#524735] sm:text-2xl">
              Mỗi công trình bắt đầu bằng một kế hoạch đủ rõ để bạn chủ động
              về tài chính, thời gian và chất lượng mong muốn.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#756a5c] sm:text-base">
              Tổ Ấm Hoàn Hảo chuẩn bị khái toán và phạm vi công việc từ sớm,
              giúp việc ra quyết định gọn gàng hơn trước khi bước vào thi công.
            </p>
          </div>
        </div>

        <div className="grid gap-px border-b border-[#dfd3c3] bg-[#dfd3c3] sm:grid-cols-3">
          {dossierSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="bg-[#fcf9f4] px-5 py-6 sm:px-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5c4aa] text-[#a77b3b]">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.45} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#a77b3b]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-[#31291e]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#756a5c]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-b border-[#dfd3c3] py-10">
          <ConstructionDossierCarousel />
        </div>

        {displayedRecords.length > 0 ? (
          <div className="pt-10">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="font-serif text-2xl text-[#332b20]">Công trình tiêu biểu</h3>
              <Link
                href="/du-an"
                className="inline-flex items-center gap-2 border-b border-[#b7a98f] pb-1 text-xs font-bold uppercase tracking-[0.08em] text-[#6a5533] transition hover:border-[#80612e] hover:text-[#80612e]"
              >
                Xem tất cả
                <ArrowRight aria-hidden="true" size={15} strokeWidth={1.8} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayedRecords.map((project) => (
                <Link
                  key={project.slug}
                  href={`/du-an/${project.slug}`}
                  className="group grid grid-cols-[118px_1fr] overflow-hidden border border-[#dfd3c3] bg-[#fffdf9] transition hover:border-[#b89c6c] sm:grid-cols-1"
                >
                  <div className="relative min-h-[112px] overflow-hidden sm:aspect-[1.6] sm:min-h-0">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 31vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col px-4 py-4 sm:min-h-[126px] sm:px-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#a77b3b]">
                      {project.category}
                    </p>
                    <h4 className="mt-1 line-clamp-2 font-serif text-lg leading-snug text-[#30271d] transition group-hover:text-[#80612e]">
                      {project.title}
                    </h4>
                    <span className="mt-auto flex items-center justify-between pt-3 text-xs text-[#806d53]">
                      {project.location} · {project.area}
                      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.7} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
