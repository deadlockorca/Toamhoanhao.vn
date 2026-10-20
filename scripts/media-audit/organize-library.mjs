import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const argument = process.argv.find((a) => a.startsWith("--root="));
const root = await fs.realpath(
  argument?.slice(7) ?? path.join(os.homedir(), "Documents/Toamhoanhao-media"),
);
const repo = await fs.realpath(
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.."),
);
if (root === repo || root.startsWith(repo + path.sep))
  throw new Error("Keep media outside repository");
const read = async (file) => JSON.parse(await fs.readFile(file, "utf8"));
const audit = path.join(root, "media-watermark-audit");
const inventory = await read(path.join(audit, "classification.json"));
const destination = path.join(root, "Ảnh");
try {
  await fs.access(destination);
  throw new Error("Ảnh already exists; preserve the user's library");
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
const groups = {
  branding: "01 - Phát hiện dấu thương hiệu cũ, cần làm sạch",
  uncertain: "02 - Có chữ nghi vấn, cần kiểm tra thêm",
  drawing: "03 - Bản vẽ cần kiểm tra riêng",
  undetected: "04 - Chưa phát hiện chữ, logo cũ",
};
const states = {
  pending: "01 - Chưa xử lý",
  cleaned: "02 - Đã làm sạch - chờ duyệt",
  blocked: "03 - Cần xử lý riêng",
};
const kinds = { project: "Dự án", designSample: "Mẫu thiết kế" };
const completed = new Map(),
  blocked = new Map(),
  byHash = new Map(),
  drawings = new Set();
for (const a of inventory.assets) {
  if (!a.sourceSha256) throw new Error("Missing content hash");
  if (!byHash.has(a.sourceSha256)) byHash.set(a.sourceSha256, []);
  byHash.get(a.sourceSha256).push(a);
}
// Discover actual completed files; aggregate counters in old manifests are stale.
for (const entry of await fs.readdir(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  let manifest;
  try {
    manifest = await read(path.join(root, entry.name, "manifest.json"));
  } catch (e) {
    if (e.code === "ENOENT") continue;
    throw e;
  }
  if (!Array.isArray(manifest.jobs)) continue;
  // These drawings were individually inspected in the current review.
  if (entry.name === "batch-1000-2026-10-17")
    for (const n of [
      222, 249, 276, 305, 329, 354, 377, 402, 439, 443, 480, 517, 594, 626, 660, 688, 689, 709, 715, 733,
    ]) {
      const job = manifest.jobs.find((j) => j.number === n);
      if (job) drawings.add(job.sourceSha256);
    }
  for (const j of manifest.jobs) {
    if (!j.renderedAt && !j.cleanedAt) continue;
    if (!j.cleanComposite) throw new Error("Missing clean composite");
    const clean = path.join(root, entry.name, j.cleanComposite);
    const stamped = j.renderedAt ? path.join(root, entry.name, j.after) : null;
    await fs.access(clean);
    if (stamped) await fs.access(stamped);
    const previous = completed.get(j.sourceSha256);
    if (
      !previous ||
      (j.cleanedAt ?? j.renderedAt) >
        (previous.job.cleanedAt ?? previous.job.renderedAt)
    )
      completed.set(j.sourceSha256, {
        job: j,
        batch: entry.name,
        clean,
        stamped,
      });
  }
  let failures = [];
  try {
    failures = await fs.readdir(path.join(root, entry.name, "failures"));
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  for (const f of failures.filter((f) => f.endsWith(".json"))) {
    const failure = await read(path.join(root, entry.name, "failures", f));
    if (
      failure.code !== "moderation_blocked" &&
      !String(failure.error).includes("moderation_blocked")
    )
      continue;
    const job = manifest.jobs.find((j) => j.number === failure.number);
    if (job)
      blocked.set(
        job.sourceSha256,
        "Công cụ ảnh từ chối xử lý; cần kiểm tra riêng.",
      );
  }
}
const stage = await fs.mkdtemp(path.join(root, ".anh-phan-loai-"));
const rows = [],
  counts = Object.fromEntries(
    Object.keys(groups).map((g) => [
      g,
      { total: 0, pending: 0, cleaned: 0, blocked: 0 },
    ]),
  );
const slug = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);
async function link(source, relative, hard = false) {
  await fs.access(source);
  const target = path.join(stage, relative);
  if (hard) await fs.link(source, target);
  else await fs.symlink(path.relative(path.dirname(target), source), target);
}
for (const g of Object.keys(groups))
  for (const s of Object.keys(states))
    for (const k of Object.keys(kinds))
      await fs.mkdir(path.join(stage, groups[g], states[s], kinds[k]), {
        recursive: true,
      });
for (const [hash, aliases] of byHash) {
  const a = aliases[0],
    done = completed.get(hash);
  const held = !done && blocked.get(hash);
  const drawing =
    aliases.some((a) => a.group === "floor_plan") || drawings.has(hash);
  const group = drawing
    ? "drawing"
    : ["edge_or_corner", "center_or_mixed"].includes(a.group)
      ? "branding"
      : a.group === "text_unconfirmed"
        ? "uncertain"
        : a.group === "no_text_detected"
          ? "undetected"
          : null;
  if (!group) throw new Error("Unmapped classification: " + a.group);
  const state = done ? "cleaned" : held ? "blocked" : "pending";
  const usages = [
    ...new Map(
      aliases.flatMap((a) => a.usages).map((u) => [JSON.stringify(u), u]),
    ).values(),
  ];
  const primary = usages.find((u) => u.kind === done?.job.kind) ?? usages[0];
  if (!kinds[primary.kind]) throw new Error("Unknown content kind");
  const folder = path.join(
    groups[group],
    states[state],
    kinds[primary.kind],
    slug(primary.slug || primary.title) + "--" + hash.slice(0, 16),
  );
  await fs.mkdir(path.join(stage, folder));
  const extension = a.format === "jpeg" ? "jpg" : a.format;
  if (!/^[a-z0-9]+$/.test(extension)) throw new Error("Invalid format");
  await link(
    path.join(audit, a.original),
    path.join(folder, "01 - Ảnh gốc." + extension),
    true,
  );
  if (done) {
    await link(
      done.clean,
      path.join(folder, "02 - Đã xóa dấu - chưa ghép logo.png"),
    );
    if (done.stamped)
      await link(
        done.stamped,
        path.join(folder, "03 - Tham khảo - bản đã ghép logo trước đây.png"),
      );
  }
  const row = {
    sourceSha256: hash,
    title: primary.title,
    slug: primary.slug,
    kind: primary.kind,
    category: groups[group],
    state: states[state],
    folder,
    originalClassification: a.group,
    detail:
      a.group === "edge_or_corner"
        ? "Dấu ở mép, góc ảnh"
        : a.group === "center_or_mixed"
          ? "Dấu giữa ảnh hoặc nhiều vị trí"
          : null,
    classificationNote: drawings.has(hash)
      ? "Đã xem trực tiếp: bản vẽ mặt bằng hoặc mặt cắt."
      : "Phân loại tự động; cần duyệt trực tiếp.",
    cleanAvailable: Boolean(done),
    visualApproval: "Chưa xác nhận duyệt cuối",
    published: false,
    blocker: held || null,
    sourceUrls: aliases.map((a) => a.url),
    usages,
    provenance: done
      ? {
          batch: done.batch,
          job: done.job.number,
          renderedAt: done.job.renderedAt,
          cleanedAt: done.job.cleanedAt,
        }
      : null,
  };
  await fs.writeFile(
    path.join(stage, folder, "Thông tin.json"),
    JSON.stringify(row, null, 2) + "\n",
  );
  rows.push(row);
  counts[group].total++;
  counts[group][state]++;
}
if (
  rows.length !== inventory.uniqueContentHashes ||
  rows.filter((r) => r.cleanAvailable).length !== completed.size
)
  throw new Error("Counts do not reconcile");
const summary = {
  generatedAt: new Date().toISOString(),
  uniqueImages: rows.length,
  originalUrls: inventory.assets.length,
  duplicateUrlsCollapsed: inventory.assets.length - rows.length,
  cleaned: completed.size,
  categories: counts,
  classificationOverrides: drawings.size,
  linkPolicy:
    "Originals use hard links with image extensions; outputs use relative symbolic links",
  generationStarted: false,
  databaseAndR2Writes: 0,
};
await fs.writeFile(
  path.join(stage, "danh-mục.json"),
  JSON.stringify({ summary, images: rows }, null, 2) + "\n",
);
const csv = (v) => '"' + String(v ?? "").replaceAll('"', '""') + '"';
await fs.writeFile(
  path.join(stage, "danh-mục.csv"),
  "\uFEFF" +
    [
      [
        "Nhóm",
        "Trạng thái",
        "Loại",
        "Tên",
        "Chi tiết",
        "Có bản sạch",
        "Thư mục",
        "SHA256",
      ],
      ...rows.map((r) => [
        r.category,
        r.state,
        kinds[r.kind],
        r.title,
        r.detail,
        r.cleanAvailable ? "Có" : "Không",
        r.folder,
        r.sourceSha256,
      ]),
    ]
      .map((r) => r.map(csv).join(","))
      .join("\n") +
    "\n",
);
const lines = [
  "THƯ VIỆN ẢNH — TỔ ẤM HOÀN HẢO",
  "",
  summary.uniqueImages +
    " ảnh khác nhau / " +
    summary.originalUrls +
    " URL nguồn; đã gộp " +
    summary.duplicateUrlsCollapsed +
    " URL trùng.",
  summary.cleaned + " ảnh có bản sạch, chưa xác nhận duyệt cuối.",
  "",
];
for (const [key, label] of Object.entries(groups)) {
  const c = counts[key];
  lines.push(
    label + ": " + c.total,
    "  Chưa xử lý: " +
      c.pending +
      " · Đã làm sạch, chờ duyệt: " +
      c.cleaned +
      " · Cần xử lý riêng: " +
      c.blocked,
    "",
  );
}
lines.push(
  "Trong mỗi nhóm: Trạng thái → Dự án / Mẫu thiết kế → Tên nội dung và mã ảnh.",
  "01 là ảnh gốc; 02 là bản đã xóa dấu, CHƯA GHÉP LOGO; 03 chỉ là bản có logo đã xuất trước đây để tham khảo.",
  "Mỗi ảnh chỉ nằm ở một nhóm. Thông tin.json ghi tất cả vị trí sử dụng của ảnh.",
  `Có ${drawings.size} bản vẽ đã xem trực tiếp được chuyển từ nhóm dấu thương hiệu sang nhóm bản vẽ; các phân loại khác theo dữ liệu sàng lọc hiện có.`,
  "",
  "Ảnh gốc dùng liên kết cứng có đuôi ảnh để Finder mở đúng ứng dụng; bản xử lý dùng liên kết tương đối. Không nhân đôi dung lượng. Giữ các thư mục lưu trữ cũ để bản xử lý không mất đích.",
  "Xóa liên kết không xóa ảnh gốc. Sửa nội dung qua liên kết sẽ sửa file đích.",
  "Chỉ tạo bản làm sạch từ ảnh gốc, chưa ghép logo mới; không thay đổi website, SQL hay R2.",
);
await fs.writeFile(
  path.join(stage, "00 - Đọc trước.txt"),
  lines.join("\n") + "\n",
);
await fs.writeFile(
  path.join(stage, ".library-generated.json"),
  JSON.stringify(summary, null, 2) + "\n",
);
await fs.rename(stage, destination);
console.log(JSON.stringify({ destination, ...summary }, null, 2));
