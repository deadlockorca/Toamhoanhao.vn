"use client";

import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import type { DesignSampleDetail } from "@/data/design-samples";

type DesignSampleRepeatFieldsProps = {
  detail?: DesignSampleDetail;
};

type GalleryRow = {
  title: string;
  image: string;
};

type FeatureRow = {
  index: string;
  title: string;
  description: string;
  image: string;
  imageSide: "left" | "right";
};

type NoteRow = {
  label: string;
  value: string;
};

type PackageRow = {
  title: string;
  price: string;
  featured: boolean;
  items: string[];
};

type RelatedRow = {
  slug: string;
};

export function DesignGalleryFields({ detail }: DesignSampleRepeatFieldsProps) {
  const [rows, setRows] = useState<GalleryRow[]>(
    detail?.gallery.length ? detail.gallery : [{ title: "", image: "" }],
  );

  return (
    <RepeatShell
      addLabel="Thêm phối cảnh"
      onAdd={() => setRows((current) => [...current, { title: "", image: "" }])}
    >
      {rows.map((row, index) => (
        <RepeatCard
          key={index}
          index={index}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <Field label="Tên phối cảnh" name="galleryTitle" defaultValue={row.title} />
          <Field label="Ảnh" name="galleryImage" defaultValue={row.image} />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function DesignFeatureFields({ detail }: DesignSampleRepeatFieldsProps) {
  const [rows, setRows] = useState<FeatureRow[]>(
    detail?.features.length
      ? detail.features
      : [
          {
            index: "01",
            title: "",
            description: "",
            image: "",
            imageSide: "right",
          },
        ],
  );

  return (
    <RepeatShell
      addLabel="Thêm đặc điểm"
      onAdd={() =>
        setRows((current) => [
          ...current,
          {
            index: String(current.length + 1).padStart(2, "0"),
            title: "",
            description: "",
            image: "",
            imageSide: current.length % 2 === 0 ? "left" : "right",
          },
        ])
      }
    >
      {rows.map((row, index) => (
        <RepeatCard
          key={index}
          index={index}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <div className="grid gap-4 md:grid-cols-[96px_1fr_150px]">
            <Field label="Số thứ tự" name="featureIndex" defaultValue={row.index} />
            <Field label="Tiêu đề" name="featureTitle" defaultValue={row.title} />
            <SelectField
              label="Vị trí ảnh"
              name="featureImageSide"
              defaultValue={row.imageSide}
              options={[
                { label: "Ảnh bên trái", value: "left" },
                { label: "Ảnh bên phải", value: "right" },
              ]}
            />
          </div>
          <Field label="Ảnh" name="featureImage" defaultValue={row.image} />
          <TextArea
            label="Mô tả"
            name="featureDescription"
            defaultValue={row.description}
          />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function DesignFloorPlanNoteFields({
  detail,
}: DesignSampleRepeatFieldsProps) {
  const [rows, setRows] = useState<NoteRow[]>(
    detail?.floorPlanNotes.length
      ? detail.floorPlanNotes
      : [{ label: "", value: "" }],
  );

  return (
    <RepeatShell
      addLabel="Thêm ghi chú"
      onAdd={() => setRows((current) => [...current, { label: "", value: "" }])}
    >
      {rows.map((row, index) => (
        <RepeatCard
          key={index}
          index={index}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <Field
            label="Tiêu đề ghi chú"
            name="designFloorNoteLabel"
            defaultValue={row.label}
          />
          <TextArea
            label="Nội dung"
            name="designFloorNoteValue"
            defaultValue={row.value}
          />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function DesignPackageFields({ detail }: DesignSampleRepeatFieldsProps) {
  const [rows, setRows] = useState<PackageRow[]>(
    detail?.suggestedPackages.length
      ? detail.suggestedPackages.map((item) => ({
          title: item.title,
          price: item.price,
          featured: Boolean(item.featured),
          items: item.items,
        }))
      : [{ title: "", price: "", featured: false, items: [] }],
  );

  return (
    <RepeatShell
      addLabel="Thêm gói"
      onAdd={() =>
        setRows((current) => [
          ...current,
          { title: "", price: "", featured: false, items: [] },
        ])
      }
    >
      {rows.map((row, index) => (
        <RepeatCard
          key={index}
          index={index}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Tên gói" name="packageTitle" defaultValue={row.title} />
            <Field label="Khoảng giá" name="packagePrice" defaultValue={row.price} />
          </div>
          <label className="flex items-center gap-3 text-sm font-medium text-[#62584b]">
            <input
              name="packageFeatured"
              type="checkbox"
              value={String(index)}
              defaultChecked={row.featured}
              className="h-4 w-4 accent-[#6f765b]"
            />
            Gói nổi bật
          </label>
          <TextArea
            label="Nội dung gói, mỗi dòng là một ý"
            name="packageItems"
            defaultValue={row.items.join("\n")}
          />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function DesignRelatedFields({ detail }: DesignSampleRepeatFieldsProps) {
  const [rows, setRows] = useState<RelatedRow[]>(
    detail?.relatedSampleSlugs.length
      ? detail.relatedSampleSlugs.map((slug) => ({ slug }))
      : [{ slug: "" }],
  );

  return (
    <RepeatShell
      addLabel="Thêm mẫu liên quan"
      onAdd={() => setRows((current) => [...current, { slug: "" }])}
    >
      {rows.map((row, index) => (
        <RepeatCard
          key={index}
          index={index}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <Field
            label="Slug mẫu liên quan"
            name="relatedSampleSlug"
            defaultValue={row.slug}
          />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

function RepeatShell({
  children,
  addLabel,
  onAdd,
}: {
  children: React.ReactNode;
  addLabel: string;
  onAdd: () => void;
}) {
  return (
    <div className="space-y-3">
      {children}
      <button
        type="button"
        onClick={onAdd}
        className="inline-flex h-10 items-center gap-2 border border-dashed border-[#c9b99f] px-4 text-sm font-semibold text-[#6a5533] transition hover:border-[#a47b45] hover:text-[#8a622d]"
      >
        <Plus aria-hidden="true" className="h-4 w-4" />
        {addLabel}
      </button>
    </div>
  );
}

function RepeatCard({
  children,
  index,
  onRemove,
}: {
  children: React.ReactNode;
  index: number;
  onRemove: () => void;
}) {
  return (
    <article className="border border-[#e2d8ca] bg-white p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#a47b45]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex h-8 w-8 items-center justify-center border border-[#e2d8ca] text-[#8a6f4e] transition hover:border-[#b89765] hover:text-[#5f4423]"
          aria-label="Xóa dòng"
        >
          <Trash2 aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </article>
  );
}

function Field({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#756b5d]">
        {label}
      </span>
      <input
        name={name}
        defaultValue={defaultValue}
        className="mt-2 h-11 w-full border border-[#ded4c4] bg-white px-3 text-sm text-[#2d281f] outline-none transition focus:border-[#a47b45]"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#756b5d]">
        {label}
      </span>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={4}
        className="mt-2 w-full resize-y border border-[#ded4c4] bg-white px-3 py-3 text-sm leading-6 text-[#2d281f] outline-none transition focus:border-[#a47b45]"
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
  options: Array<{ label: string; value: string }>;
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
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
