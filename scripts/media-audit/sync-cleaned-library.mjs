import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const root = path.join(os.homedir(), "Documents/Toamhoanhao-media");
const library = path.join(root, "Ảnh");
const read = async (file) => JSON.parse(await fs.readFile(file, "utf8"));
const write = async (file, value) => {
  await fs.writeFile(file + ".tmp", JSON.stringify(value, null, 2) + "\n");
  await fs.rename(file + ".tmp", file);
};
const catalogFile = path.join(library, "danh-mục.json");
const catalog = await read(catalogFile);
const rows = new Map(catalog.images.map((row) => [row.sourceSha256, row]));
let updated = 0;
for (const entry of await fs.readdir(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  let manifest;
  try {
    manifest = await read(path.join(root, entry.name, "manifest.json"));
  } catch (error) {
    if (error.code === "ENOENT") continue;
    throw error;
  }
  for (const job of manifest.jobs ?? []) {
    if (!job.cleanedAt || !job.cleanComposite) continue;
    const row = rows.get(job.sourceSha256);
    if (!row) throw new Error("Cleaned image not in library");
    if (row.cleanAvailable) continue;
    if (!row.category.startsWith("01"))
      throw new Error("Outside requested category");
    const source = path.join(root, entry.name, job.cleanComposite);
    await fs.access(source);
    const oldFolder = path.join(library, row.folder);
    const newState = "02 - Đã làm sạch - chờ duyệt";
    const newFolder = path.join(
      row.category,
      newState,
      ...row.folder.split(path.sep).slice(2),
    );
    const destination = path.join(library, newFolder);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.rename(oldFolder, destination);
    const cleanFile = path.join(
      destination,
      "02 - Đã xóa dấu - chưa ghép logo.png",
    );
    await fs.symlink(path.relative(destination, source), cleanFile);
    row.folder = newFolder;
    row.state = newState;
    row.cleanAvailable = true;
    row.blocker = null;
    row.provenance = {
      batch: entry.name,
      job: job.number,
      cleanedAt: job.cleanedAt,
    };
    await write(path.join(destination, "Thông tin.json"), row);
    updated++;
  }
}
const categoryKeys = ["branding", "uncertain", "drawing", "undetected"];
for (const [index, key] of categoryKeys.entries()) {
  const selected = catalog.images.filter((r) =>
    r.category.startsWith(String(index + 1).padStart(2, "0")),
  );
  catalog.summary.categories[key] = {
    total: selected.length,
    pending: selected.filter((r) => r.state.startsWith("01")).length,
    cleaned: selected.filter((r) => r.state.startsWith("02")).length,
    blocked: selected.filter((r) => r.state.startsWith("03")).length,
  };
}
catalog.summary.cleaned = catalog.images.filter((r) => r.cleanAvailable).length;
catalog.summary.updatedAt = new Date().toISOString();
await write(catalogFile, catalog);
await write(path.join(library, ".library-generated.json"), catalog.summary);
const csv = (v) => '"' + String(v ?? "").replaceAll('"', '""') + '"';
await fs.writeFile(
  path.join(library, "danh-mục.csv"),
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
      ...catalog.images.map((r) => [
        r.category,
        r.state,
        r.kind === "project" ? "Dự án" : "Mẫu thiết kế",
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
const readmeFile = path.join(library, "00 - Đọc trước.txt");
let readme = await fs.readFile(readmeFile, "utf8");
readme = readme.replace(
  /\d+ ảnh có bản sạch, chưa xác nhận duyệt cuối\./,
  `${catalog.summary.cleaned} ảnh có bản sạch, chưa xác nhận duyệt cuối.`,
);
let index = 0;
readme = readme.replace(
  /  Chưa xử lý: \d+ · Đã làm sạch, chờ duyệt: \d+ · Cần xử lý riêng: \d+/g,
  () => {
    const c = catalog.summary.categories[categoryKeys[index++]];
    return `  Chưa xử lý: ${c.pending} · Đã làm sạch, chờ duyệt: ${c.cleaned} · Cần xử lý riêng: ${c.blocked}`;
  },
);
await fs.writeFile(readmeFile, readme);
console.log(
  JSON.stringify({
    updated,
    cleaned: catalog.summary.cleaned,
    branding: catalog.summary.categories.branding,
  }),
);
