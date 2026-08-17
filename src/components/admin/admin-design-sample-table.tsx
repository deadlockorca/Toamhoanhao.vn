import {
  ArrowUpRight,
  DatabaseBackup,
  Eye,
  FilePenLine,
  Plus,
  Ruler,
  Search,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  deleteDesignSample,
  seedMockDesignSamples,
  updateDesignSampleStatus,
} from "@/app/admin/actions";
import { ConfirmActionButton } from "@/components/admin/confirm-action-button";
import type { DesignSample } from "@/data/design-samples";
import { ContentStatus } from "@/generated/prisma/client";

type AdminDesignSampleTableProps = {
  designSamples: DesignSample[];
  source: "database" | "mock";
};

export function AdminDesignSampleTable({
  designSamples,
  source,
}: AdminDesignSampleTableProps) {
  const publishedSamples = designSamples.filter(
    (sample) => sample.status === "published",
  );
  const draftSamples = designSamples.filter((sample) => sample.status === "draft");
  const featuredSamples = designSamples.filter((sample) => sample.featured);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Tổng mẫu" value={`${designSamples.length}`} />
        <MetricCard label="Đang hiển thị" value={`${publishedSamples.length}`} />
        <MetricCard label="Mẫu nổi bật" value={`${featuredSamples.length}`} />
      </section>

      <section className="border border-[#ded4c4] bg-[#fbf7f1]">
        <div className="flex flex-col gap-4 border-b border-[#ded4c4] px-5 py-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#211d17]">
              Danh sách mẫu thiết kế
            </h2>
            <p className="mt-1 text-sm text-[#756b5d]">
              {source === "database"
                ? "Đang đọc dữ liệu từ MySQL local qua Prisma."
                : "Database đang trống, tạm hiển thị mock data để duyệt giao diện."}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex h-10 min-w-[280px] items-center gap-2 border border-[#ded4c4] bg-white px-3 text-sm text-[#817363]">
              <Search aria-hidden="true" className="h-4 w-4" />
              <input
                className="w-full bg-transparent outline-none placeholder:text-[#9b907f]"
                placeholder="Tìm theo tên mẫu"
              />
            </label>
            <Link
              href="/admin/mau-thiet-ke/new"
              className="inline-flex h-10 items-center justify-center gap-2 bg-[#6f765b] px-4 text-sm font-semibold text-white transition hover:bg-[#5f654e]"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Thêm mẫu
            </Link>
            <form action={seedMockDesignSamples}>
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-2 border border-[#d2c3ad] px-4 text-sm font-semibold text-[#6a5533] transition hover:border-[#b89765]"
              >
                <DatabaseBackup aria-hidden="true" className="h-4 w-4" />
                Nạp dữ liệu mẫu
              </button>
            </form>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead className="bg-[#f3eadf] text-xs uppercase tracking-[0.08em] text-[#756b5d]">
              <tr>
                <th className="px-5 py-4 font-bold">Mẫu thiết kế</th>
                <th className="px-5 py-4 font-bold">Danh mục</th>
                <th className="px-5 py-4 font-bold">Thông tin</th>
                <th className="px-5 py-4 font-bold">Trạng thái</th>
                <th className="px-5 py-4 font-bold">SEO</th>
                <th className="px-5 py-4 text-right font-bold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {designSamples.map((sample) => (
                <tr
                  key={sample.slug}
                  className="border-t border-[#e2d8ca] align-top"
                >
                  <td className="px-5 py-4">
                    <div className="flex gap-4">
                      <div className="relative h-16 w-24 shrink-0 overflow-hidden border border-[#ded4c4]">
                        <Image
                          src={sample.thumbnail}
                          alt={sample.title}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#2d281f]">
                          {sample.title}
                        </p>
                        <p className="mt-1 text-xs text-[#817363]">
                          /mau-thiet-ke/{sample.slug}
                        </p>
                        {sample.featured ? (
                          <span className="mt-2 inline-flex border border-[#c9b99f] px-2 py-1 text-xs font-semibold text-[#8a6536]">
                            Nổi bật
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4f463b]">
                    {sample.category}
                  </td>
                  <td className="px-5 py-4">
                    <div className="space-y-1 text-sm text-[#62584b]">
                      <p>{sample.type}</p>
                      <p>{sample.style}</p>
                      {sample.area ? (
                        <p className="inline-flex items-center gap-1 text-xs">
                          <Ruler aria-hidden="true" className="h-3.5 w-3.5" />
                          {sample.area}
                        </p>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] ${
                        sample.status === "published"
                          ? "bg-[#e7ecdf] text-[#56613f]"
                          : "bg-[#efe4d4] text-[#876239]"
                      }`}
                    >
                      {sample.status === "published" ? "Đang hiện" : "Bản nháp"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#62584b]">
                    {sample.detail?.seoTitle ? "Đã có SEO" : "Dùng mặc định"}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/mau-thiet-ke/${sample.slug}`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-[#ded4c4] text-[#6a5533] transition hover:border-[#b89765]"
                        aria-label={`Xem ${sample.title}`}
                      >
                        <Eye aria-hidden="true" className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/mau-thiet-ke/${sample.slug}`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-[#ded4c4] text-[#6a5533] transition hover:border-[#b89765]"
                        aria-label={`Sửa ${sample.title}`}
                      >
                        <FilePenLine aria-hidden="true" className="h-4 w-4" />
                      </Link>
                      {source === "database" ? (
                        <>
                          <form
                            action={updateDesignSampleStatus.bind(
                              null,
                              sample.slug,
                              sample.status === "published"
                                ? ContentStatus.draft
                                : ContentStatus.published,
                            )}
                          >
                            <button
                              type="submit"
                              className="inline-flex h-9 items-center justify-center border border-[#ded4c4] px-3 text-xs font-bold text-[#6a5533] transition hover:border-[#b89765]"
                            >
                              {sample.status === "published" ? "Ẩn" : "Hiện"}
                            </button>
                          </form>
                          <form action={deleteDesignSample.bind(null, sample.slug)}>
                            <ConfirmActionButton
                              type="submit"
                              confirmMessage={`Xoá mẫu thiết kế "${sample.title}"?`}
                              className="inline-flex h-9 w-9 items-center justify-center border border-[#ded4c4] text-[#8a3a2b] transition hover:border-[#b89765]"
                              aria-label={`Xoá ${sample.title}`}
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

        {draftSamples.length === 0 ? (
          <div className="border-t border-[#ded4c4] px-5 py-4 text-sm text-[#756b5d]">
            Chưa có bản nháp mẫu thiết kế. Sau này phần này sẽ giúp soạn mẫu mới
            trước khi xuất bản.
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border border-[#ded4c4] bg-[#fbf7f1] p-5">
          <h2 className="text-base font-semibold text-[#211d17]">
            Field dùng cho danh sách
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "title",
              "slug",
              "category",
              "type",
              "style",
              "area",
              "thumbnail",
              "summary",
              "featured",
              "status",
            ].map((field) => (
              <code
                key={field}
                className="border border-[#e2d8ca] bg-white px-3 py-2 text-xs text-[#62584b]"
              >
                {field}
              </code>
            ))}
          </div>
        </div>

        <div className="border border-[#ded4c4] bg-[#fbf7f1] p-5">
          <h2 className="text-base font-semibold text-[#211d17]">
            Sau mục này
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#62584b]">
            Khi form mẫu thiết kế ổn, mình sẽ có đủ căn cứ để viết Prisma schema
            cho cả Dự án và Mẫu thiết kế.
          </p>
          <Link
            href="/admin/mau-thiet-ke/new"
            className="mt-5 inline-flex h-10 items-center gap-2 border border-[#d2c3ad] px-4 text-sm font-semibold text-[#6a5533] transition hover:border-[#b89765]"
          >
            Mở form mẫu
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
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
