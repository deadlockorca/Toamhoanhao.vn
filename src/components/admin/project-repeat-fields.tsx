"use client";

import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import type { ProjectDetail } from "@/data/projects";

type ProjectRepeatFieldsProps = {
  detail?: ProjectDetail;
};

type SpaceRow = {
  id: string;
  title: string;
  image: string;
};

type StoryRow = {
  id: string;
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

type RelatedRow = {
  slug: string;
};

export function ProjectSpacesFields({ detail }: ProjectRepeatFieldsProps) {
  const [rows, setRows] = useState<SpaceRow[]>(
    detail?.spaces.length
      ? detail.spaces.map((space, index) => ({ ...space, id: `space-${index}` }))
      : [{ id: "space-new", title: "", image: "" }],
  );

  return (
    <RepeatShell
      addLabel="Thêm không gian"
      onAdd={() =>
        setRows((current) => [
          ...current,
          { id: `space-${Date.now()}`, title: "", image: "" },
        ])
      }
    >
      {rows.map((row, index) => (
        <RepeatCard
          key={row.id}
          index={index}
          onMoveUp={() => setRows((current) => moveItem(current, index, index - 1))}
          onMoveDown={() => setRows((current) => moveItem(current, index, index + 1))}
          canMoveUp={index > 0}
          canMoveDown={index < rows.length - 1}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <Field
            label="Tên không gian"
            name="spaceTitle"
            defaultValue={row.title}
          />
          <Field label="Ảnh" name="spaceImage" defaultValue={row.image} />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function ProjectStoryFields({ detail }: ProjectRepeatFieldsProps) {
  const [rows, setRows] = useState<StoryRow[]>(
    detail?.storyBlocks.length
      ? detail.storyBlocks.map((block, index) => ({
          id: `story-${index}`,
          index: block.index,
          title: block.title,
          description: block.description,
          image: block.image,
          imageSide: block.imageSide,
        }))
      : [
          {
            id: "story-new",
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
      addLabel="Thêm block"
      onAdd={() =>
        setRows((current) => [
          ...current,
          {
            id: `story-${Date.now()}`,
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
          key={row.id}
          index={index}
          onMoveUp={() => setRows((current) => moveItem(current, index, index - 1))}
          onMoveDown={() => setRows((current) => moveItem(current, index, index + 1))}
          canMoveUp={index > 0}
          canMoveDown={index < rows.length - 1}
          onRemove={() =>
            setRows((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
        >
          <div className="grid gap-4 md:grid-cols-[96px_1fr_150px]">
            <Field label="Số thứ tự" name="storyIndex" defaultValue={row.index} />
            <Field label="Tiêu đề" name="storyTitle" defaultValue={row.title} />
            <SelectField
              label="Vị trí ảnh"
              name="storyImageSide"
              defaultValue={row.imageSide}
              options={[
                { label: "Ảnh bên trái", value: "left" },
                { label: "Ảnh bên phải", value: "right" },
              ]}
            />
          </div>
          <Field label="Ảnh" name="storyImage" defaultValue={row.image} />
          <TextArea
            label="Mô tả"
            name="storyDescription"
            defaultValue={row.description}
          />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function ProjectFloorPlanNoteFields({ detail }: ProjectRepeatFieldsProps) {
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
          <Field label="Tiêu đề ghi chú" name="floorNoteLabel" defaultValue={row.label} />
          <TextArea label="Nội dung" name="floorNoteValue" defaultValue={row.value} />
        </RepeatCard>
      ))}
    </RepeatShell>
  );
}

export function ProjectRelatedFields({ detail }: ProjectRepeatFieldsProps) {
  const [rows, setRows] = useState<RelatedRow[]>(
    detail?.relatedProjectSlugs.length
      ? detail.relatedProjectSlugs.map((slug) => ({ slug }))
      : [{ slug: "" }],
  );

  return (
    <RepeatShell
      addLabel="Thêm dự án liên quan"
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
            label="Slug dự án liên quan"
            name="relatedProjectSlug"
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
  onMoveUp,
  onMoveDown,
  canMoveUp = false,
  canMoveDown = false,
}: {
  children: React.ReactNode;
  index: number;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
}) {
  return (
    <article className="border border-[#e2d8ca] bg-white p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#a47b45]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {onMoveUp ? (
            <button
              type="button"
              onClick={onMoveUp}
              disabled={!canMoveUp}
              className="inline-flex h-8 w-8 items-center justify-center border border-[#e2d8ca] text-[#8a6f4e] transition hover:border-[#b89765] hover:text-[#5f4423] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Đưa lên trên"
            >
              <ChevronUp aria-hidden="true" className="h-4 w-4" />
            </button>
          ) : null}
          {onMoveDown ? (
            <button
              type="button"
              onClick={onMoveDown}
              disabled={!canMoveDown}
              className="inline-flex h-8 w-8 items-center justify-center border border-[#e2d8ca] text-[#8a6f4e] transition hover:border-[#b89765] hover:text-[#5f4423] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Đưa xuống dưới"
            >
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={onRemove}
            className="inline-flex h-8 w-8 items-center justify-center border border-[#e2d8ca] text-[#8a6f4e] transition hover:border-[#b89765] hover:text-[#5f4423]"
            aria-label="Xóa dòng"
          >
            <Trash2 aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </article>
  );
}

function moveItem<T>(items: T[], from: number, to: number) {
  if (to < 0 || to >= items.length) {
    return items;
  }

  const nextItems = [...items];
  const [item] = nextItems.splice(from, 1);
  nextItems.splice(to, 0, item);
  return nextItems;
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
