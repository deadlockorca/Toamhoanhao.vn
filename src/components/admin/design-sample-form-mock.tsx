import {
  ArrowLeft,
  Eye,
  ImagePlus,
  Layers3,
  ListPlus,
  Save,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  createDesignSampleDraft,
  saveDesignSampleDraft,
} from "@/app/admin/actions";
import {
  DesignFeatureFields,
  DesignFloorPlanNoteFields,
  DesignGalleryFields,
  DesignPackageFields,
  DesignRelatedFields,
} from "@/components/admin/design-sample-repeat-fields";
import type { DesignSample } from "@/data/design-samples";

type DesignSampleFormMockProps = {
  mode: "create" | "edit";
  sample?: DesignSample;
};

const emptySample: DesignSample = {
  title: "",
  slug: "",
  category: "Chung cư",
  type: "",
  style: "",
  area: "",
  thumbnail: "",
  summary: "",
  featured: false,
  status: "draft",
};

const categories = [
  "Chung cư",
  "Nhà phố",
  "Biệt thự",
  "Phòng khách",
  "Phòng ngủ",
  "Phòng bếp",
  "Tủ bếp",
  "Phòng trẻ em",
];

export function DesignSampleFormMock({
  mode,
  sample,
}: DesignSampleFormMockProps) {
  const value = sample ?? emptySample;
  const detail = sample?.detail;
  const title =
    mode === "create" ? "Thêm mẫu thiết kế mới" : `Chỉnh sửa: ${value.title}`;
  const formAction = sample
    ? saveDesignSampleDraft.bind(null, sample.slug)
    : createDesignSampleDraft;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            href="/admin/mau-thiet-ke"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6a5533] transition hover:text-[#9a732f]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Quay lại danh sách
          </Link>
          <h2 className="mt-4 text-2xl font-semibold text-[#211d17]">{title}</h2>
          <p className="mt-2 text-sm text-[#756b5d]">
            Lưu nội dung vào database local, ảnh tải lên vào R2.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {sample ? (
            <Link
              href={`/mau-thiet-ke/${sample.slug}`}
              className="inline-flex h-10 items-center justify-center gap-2 border border-[#d2c3ad] px-4 text-sm font-semibold text-[#6a5533] transition hover:border-[#b89765]"
            >
              <Eye aria-hidden="true" className="h-4 w-4" />
              Xem ngoài web
            </Link>
          ) : null}
          <button
            type="submit"
            form="design-sample-form"
            className="inline-flex h-10 items-center justify-center gap-2 bg-[#6f765b] px-4 text-sm font-semibold text-white transition hover:bg-[#5f654e]"
          >
            <Save aria-hidden="true" className="h-4 w-4" />
            Lưu thay đổi
          </button>
        </div>
      </div>

      <form
        id="design-sample-form"
        action={formAction}
        className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"
      >
        <div className="space-y-6">
          <Panel title="Thông tin chung">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Tên mẫu" name="title" defaultValue={value.title} required />
              <Field label="Slug" name="slug" defaultValue={value.slug} />
              <SelectField
                label="Danh mục"
                name="category"
                defaultValue={value.category}
                options={categories}
              />
              <Field label="Loại hình" name="type" defaultValue={value.type} />
              <Field label="Phong cách" name="style" defaultValue={value.style} />
              <Field label="Diện tích" name="area" defaultValue={value.area} />
            </div>

            <TextArea
              label="Mô tả ngắn"
              name="summary"
              defaultValue={value.summary}
              className="mt-5"
            />
          </Panel>

          <Panel title="Hero & SEO">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Eyebrow" name="eyebrow" defaultValue={detail?.eyebrow} />
              <Field label="Tiêu đề dòng 1" name="displayTitle" defaultValue={detail?.displayTitle} />
              <Field label="Tiêu đề dòng 2" name="italicTitle" defaultValue={detail?.italicTitle} />
              <Field label="Ảnh banner" name="heroImage" defaultValue={detail?.heroImage} />
            </div>
            <TextArea
              label="Mô tả hero"
              name="description"
              defaultValue={detail?.description}
              className="mt-5"
            />
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label="SEO title" name="seoTitle" defaultValue={detail?.seoTitle} />
              <Field label="SEO description" name="seoDescription" defaultValue={detail?.seoDescription} />
            </div>
          </Panel>

          <Panel title="Thông số & tổng quan">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Loại hình chi tiết" name="propertyType" defaultValue={detail?.propertyType} />
              <Field label="Số phòng ngủ" name="bedrooms" defaultValue={detail?.bedrooms} />
              <Field label="Số phòng tắm" name="bathrooms" defaultValue={detail?.bathrooms} />
              <Field label="Khoảng chi phí" name="budgetRange" defaultValue={detail?.budgetRange} />
              <Field label="Phù hợp với" name="suitableFor" defaultValue={detail?.suitableFor} />
            </div>
            <Field
              label="Tiêu đề tổng quan"
              name="overviewTitle"
              defaultValue={detail?.overviewTitle}
              className="mt-5"
            />
            <TextArea
              label="Nội dung tổng quan"
              name="overviewParagraphs"
              defaultValue={detail?.overviewParagraphs?.join("\n\n")}
              className="mt-5"
              rows={6}
            />
          </Panel>

          <Panel title="Phối cảnh nổi bật">
            <DesignGalleryFields detail={detail} />
          </Panel>

          <Panel title="Đặc điểm thiết kế">
            <DesignFeatureFields detail={detail} />
          </Panel>

          <Panel title="Mặt bằng tham khảo">
            <Field
              label="Ảnh mặt bằng"
              name="floorPlanImage"
              defaultValue={detail?.floorPlanImage}
            />
            <div className="mt-5">
              <DesignFloorPlanNoteFields detail={detail} />
            </div>
          </Panel>

          <Panel title="Gói triển khai gợi ý">
            <DesignPackageFields detail={detail} />
          </Panel>

          <Panel title="Mẫu liên quan">
            <DesignRelatedFields detail={detail} />
          </Panel>
        </div>

        <aside className="space-y-6">
          <Panel title="Xuất bản">
            <div className="space-y-3 text-sm text-[#62584b]">
              <label className="flex items-center justify-between gap-4">
                <span>Hiển thị ngoài web</span>
                <input
                  name="status"
                  value="published"
                  type="checkbox"
                  defaultChecked={value.status === "published"}
                  className="h-4 w-4 accent-[#6f765b]"
                />
              </label>
              <label className="flex items-center justify-between gap-4">
                <span>Mẫu nổi bật</span>
                <input
                  name="featured"
                  type="checkbox"
                  defaultChecked={Boolean(value.featured)}
                  className="h-4 w-4 accent-[#6f765b]"
                />
              </label>
            </div>
          </Panel>

          <Panel title="Ảnh đại diện">
            <div className="relative aspect-[1.62] overflow-hidden border border-[#ded4c4] bg-white">
              {value.thumbnail ? (
                <Image
                  src={value.thumbnail}
                  alt={value.title || "Ảnh mẫu thiết kế"}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-[#9b907f]">
                  <ImagePlus aria-hidden="true" className="h-8 w-8" />
                </div>
              )}
            </div>
            <Field
              label="Thumbnail URL"
              name="thumbnail"
              defaultValue={value.thumbnail}
              className="mt-4"
            />
            <FileField
              label="Tải ảnh đại diện"
              name="coverImageFile"
              className="mt-4"
            />
          </Panel>

          <Panel title="Thư viện ảnh">
            <FileField
              label="Tải phối cảnh"
              name="galleryImageFiles"
              multiple
            />
          </Panel>

          <Panel title="Cấu trúc detail">
            <div className="space-y-3 text-sm text-[#62584b]">
              {[
                { icon: Layers3, text: "Hero & SEO" },
                { icon: ListPlus, text: "Phối cảnh nổi bật" },
                { icon: ListPlus, text: "Đặc điểm thiết kế" },
                { icon: ListPlus, text: "Mặt bằng tham khảo" },
                { icon: ListPlus, text: "Gói triển khai gợi ý" },
                { icon: ListPlus, text: "Mẫu liên quan" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <p key={item.text} className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="h-4 w-4 text-[#a47b45]" />
                    {item.text}
                  </p>
                );
              })}
            </div>
          </Panel>
        </aside>
      </form>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-[#ded4c4] bg-[#fbf7f1] p-5">
      <h3 className="text-base font-semibold text-[#211d17]">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  name,
  defaultValue,
  className = "",
  required = false,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#756b5d]">
        {label}
      </span>
      <input
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="mt-2 h-11 w-full border border-[#ded4c4] bg-white px-3 text-sm text-[#2d281f] outline-none transition focus:border-[#a47b45]"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#756b5d]">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="mt-2 h-11 w-full border border-[#ded4c4] bg-white px-3 text-sm text-[#2d281f] outline-none transition focus:border-[#a47b45]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  defaultValue,
  className = "",
  rows = 4,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  className?: string;
  rows?: number;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#756b5d]">
        {label}
      </span>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        className="mt-2 w-full resize-y border border-[#ded4c4] bg-white px-3 py-3 text-sm leading-6 text-[#2d281f] outline-none transition focus:border-[#a47b45]"
      />
    </label>
  );
}

function FileField({
  label,
  name,
  className = "",
  multiple = false,
}: {
  label: string;
  name: string;
  className?: string;
  multiple?: boolean;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#756b5d]">
        {label}
      </span>
      <input
        name={name}
        type="file"
        accept="image/webp,image/jpeg,image/png"
        multiple={multiple}
        className="mt-2 block w-full border border-[#ded4c4] bg-white px-3 py-2 text-sm text-[#62584b] file:mr-3 file:border-0 file:bg-[#efe7db] file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-[#6a5533]"
      />
      <span className="mt-2 block text-xs leading-5 text-[#8a7d6d]">
        WebP, JPG hoặc PNG. Tối đa 8MB mỗi ảnh.
      </span>
    </label>
  );
}
