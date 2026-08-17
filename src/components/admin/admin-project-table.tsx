"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Eye,
  FilePenLine,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  deleteProject,
  updateProjectStatus,
} from "@/app/admin/actions";
import { ConfirmActionButton } from "@/components/admin/confirm-action-button";
import type { Project } from "@/data/projects";
import { ContentStatus } from "@/generated/prisma/client";

type AdminProjectTableProps = {
  projects: Project[];
  source: "database" | "mock";
};

export function AdminProjectTable({
  projects,
  source,
}: AdminProjectTableProps) {
  const [query, setQuery] = useState("");
  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("vi-VN");

    if (!normalizedQuery) {
      return projects;
    }

    return projects.filter((project) =>
      [project.title, project.category, project.location, project.style]
        .join(" ")
        .toLocaleLowerCase("vi-VN")
        .includes(normalizedQuery),
    );
  }, [projects, query]);
  const publishedProjects = projects.filter(
    (project) => project.status === "published",
  );
  const draftProjects = projects.filter((project) => project.status === "draft");
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Tổng dự án" value={`${projects.length}`} />
        <MetricCard label="Đang hiển thị" value={`${publishedProjects.length}`} />
        <MetricCard label="Dự án nổi bật" value={`${featuredProjects.length}`} />
      </section>

      <section className="border border-[#ded4c4] bg-[#fbf7f1]">
        <div className="flex flex-col gap-4 border-b border-[#ded4c4] px-5 py-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#211d17]">
              Danh sách dự án
            </h2>
            <p className="mt-1 text-sm text-[#756b5d]">
              {source === "database"
                ? "Đang đọc dữ liệu từ MySQL local qua Prisma."
                : "Database đang trống, tạm hiển thị mock data để duyệt giao diện."}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex h-10 min-w-[260px] items-center gap-2 border border-[#ded4c4] bg-white px-3 text-sm text-[#817363]">
              <Search aria-hidden="true" className="h-4 w-4" />
              <input
                className="w-full bg-transparent outline-none placeholder:text-[#9b907f]"
                placeholder="Tìm theo tên dự án"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <Link
              href="/admin/du-an/new"
              className="inline-flex h-10 items-center justify-center gap-2 bg-[#6f765b] px-4 text-sm font-semibold text-white transition hover:bg-[#5f654e]"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Thêm dự án
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead className="bg-[#f3eadf] text-xs uppercase tracking-[0.08em] text-[#756b5d]">
              <tr>
                <th className="px-5 py-4 font-bold">Dự án</th>
                <th className="px-5 py-4 font-bold">Danh mục</th>
                <th className="px-5 py-4 font-bold">Thông tin</th>
                <th className="px-5 py-4 font-bold">Trạng thái</th>
                <th className="px-5 py-4 font-bold">SEO</th>
                <th className="px-5 py-4 text-right font-bold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {visibleProjects.map((project) => (
                <tr
                  key={project.slug}
                  className="border-t border-[#e2d8ca] align-top"
                >
                  <td className="px-5 py-4">
                    <div className="flex gap-4">
                      <div className="relative h-16 w-24 shrink-0 overflow-hidden border border-[#ded4c4]">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#2d281f]">
                          {project.title}
                        </p>
                        <p className="mt-1 text-xs text-[#817363]">
                          /du-an/{project.slug}
                        </p>
                        {project.featured ? (
                          <span className="mt-2 inline-flex border border-[#c9b99f] px-2 py-1 text-xs font-semibold text-[#8a6536]">
                            Nổi bật
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4f463b]">
                    {project.category}
                  </td>
                  <td className="px-5 py-4">
                    <div className="space-y-1 text-sm text-[#62584b]">
                      <p>{project.location}</p>
                      <p>
                        {project.area} · {project.style}
                      </p>
                      <p className="inline-flex items-center gap-1 text-xs">
                        <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
                        {project.year}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] ${
                        project.status === "published"
                          ? "bg-[#e7ecdf] text-[#56613f]"
                          : "bg-[#efe4d4] text-[#876239]"
                      }`}
                    >
                      {project.status === "published" ? "Đang hiện" : "Bản nháp"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#62584b]">
                    {project.detail?.seoTitle ? "Đã có SEO" : "Dùng mặc định"}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/du-an/${project.slug}`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-[#ded4c4] text-[#6a5533] transition hover:border-[#b89765]"
                        aria-label={`Xem ${project.title}`}
                      >
                        <Eye aria-hidden="true" className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/du-an/${project.slug}`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-[#ded4c4] text-[#6a5533] transition hover:border-[#b89765]"
                        aria-label={`Sửa ${project.title}`}
                      >
                        <FilePenLine aria-hidden="true" className="h-4 w-4" />
                      </Link>
                      {source === "database" ? (
                        <>
                          <form
                            action={updateProjectStatus.bind(
                              null,
                              project.slug,
                              project.status === "published"
                                ? ContentStatus.draft
                                : ContentStatus.published,
                            )}
                          >
                            <button
                              type="submit"
                              className="inline-flex h-9 items-center justify-center border border-[#ded4c4] px-3 text-xs font-bold text-[#6a5533] transition hover:border-[#b89765]"
                            >
                              {project.status === "published" ? "Ẩn" : "Hiện"}
                            </button>
                          </form>
                          <form action={deleteProject.bind(null, project.slug)}>
                            <ConfirmActionButton
                              type="submit"
                              confirmMessage={`Xoá dự án "${project.title}"?`}
                              className="inline-flex h-9 w-9 items-center justify-center border border-[#ded4c4] text-[#8a3a2b] transition hover:border-[#b89765]"
                              aria-label={`Xoá ${project.title}`}
                            >
                              <Trash2 aria-hidden="true" className="h-4 w-4" />
                            </ConfirmActionButton>
                          </form>
                        </>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {visibleProjects.length === 0 ? (
          <div className="border-t border-[#ded4c4] px-5 py-8 text-center text-sm text-[#756b5d]">
            Không có dự án phù hợp.
          </div>
        ) : null}

        {draftProjects.length === 0 ? (
          <div className="border-t border-[#ded4c4] px-5 py-4 text-sm text-[#756b5d]">
            Chưa có bản nháp. Sau này khi nối database, bản nháp sẽ nằm ở đây để
            duyệt trước khi xuất bản.
          </div>
        ) : null}
      </section>

      <Link
        href="/admin/du-an/new"
        className="inline-flex h-10 items-center gap-2 border border-[#d2c3ad] px-4 text-sm font-semibold text-[#6a5533] transition hover:border-[#b89765]"
      >
        Thêm dự án mới
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="border border-[#ded4c4] bg-[#fbf7f1] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a6536]">
        {label}
      </p>
      <p className="mt-3 text-4xl font-semibold text-[#211d17]">{value}</p>
    </article>
  );
}
