import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
const runFile = process.argv.find((a) => a.startsWith("--run="))?.slice(6);
if (!runFile) throw Error("Missing --run");
const read = async (p) => JSON.parse(await fs.readFile(p, "utf8"));
const run = await read(runFile),
  batch = run.batch;
const library = path.join(path.dirname(batch), "Ảnh");
const catalog = await read(path.join(library, "danh-mục.json"));
const manifest = await read(path.join(batch, "manifest.json"));
const hash = (b) => crypto.createHash("sha256").update(b).digest("hex");
const logoHash = hash(await fs.readFile(path.join(batch, manifest.logo)));
const rows = [];
for (const selected of run.jobs) {
  const j = manifest.jobs.find(
    (j) =>
      j.number === selected.number && j.sourceSha256 === selected.sourceSha256,
  );
  const receipt = run.results[j.number];
  if (
    !receipt ||
    !j.cleanedAt ||
    !j.renderedAt ||
    !j.logoVerification?.logoAdded
  )
    throw Error(`Incomplete ${j.number}`);
  if (hash(await fs.readFile(j.sourceOriginal)) !== j.sourceSha256)
    throw Error(`Original changed ${j.number}`);
  const cleanBytes = await fs.readFile(path.join(batch, j.cleanComposite));
  if (hash(cleanBytes) !== receipt.cleanSha256)
    throw Error(`Clean hash changed ${j.number}`);
  if (receipt.residualFlags.length) throw Error(`OCR flags ${j.number}`);
  const before = await sharp(path.join(batch, j.before))
    .ensureAlpha()
    .raw()
    .toBuffer();
  const clean = await sharp(cleanBytes)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const afterBytes = await fs.readFile(path.join(batch, j.after));
  const after = await sharp(afterBytes)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const mask = await sharp(
    path.join(batch, "masks", String(j.number).padStart(2, "0") + ".png"),
  )
    .greyscale()
    .raw()
    .toBuffer();
  if (
    clean.info.width !== j.width ||
    clean.info.height !== j.height ||
    after.info.width !== j.width ||
    after.info.height !== j.height
  )
    throw Error(`Dimensions changed ${j.number}`);
  const box = j.logoBox;
  let checked = 0;
  for (let i = 0; i < j.width * j.height; i++) {
    const x = i % j.width,
      y = Math.floor(i / j.width),
      outsideLogo =
        x < box.left ||
        x >= box.left + box.width ||
        y < box.top ||
        y >= box.top + box.height;
    for (let c = 0; c < 4; c++) {
      if (mask[i] === 0 && before[i * 4 + c] !== clean.data[i * 4 + c])
        throw Error(`Protected cleanup pixel changed ${j.number}`);
      if (outsideLogo && clean.data[i * 4 + c] !== after.data[i * 4 + c])
        throw Error(`Protected stamp pixel changed ${j.number}`);
    }
    if (!mask[i]) checked++;
  }
  const row = catalog.images.find((r) => r.sourceSha256 === j.sourceSha256);
  if (
    !row?.category.startsWith("01 -") ||
    !row.state.startsWith("02 -") ||
    !row.cleanAvailable ||
    !row.logoAvailable
  )
    throw Error(`Wrong library state ${j.number}`);
  const folder = path.join(library, row.folder),
    names = await fs.readdir(folder);
  const original = names.find((n) => n.startsWith("01 - Ảnh gốc."));
  if (
    !original ||
    !(await fs.lstat(path.join(folder, original))).isFile() ||
    hash(await fs.readFile(path.join(folder, original))) !== j.sourceSha256
  )
    throw Error(`Library original invalid ${j.number}`);
  if (
    hash(
      await fs.readFile(
        path.join(folder, "02 - Đã xóa dấu - chưa ghép logo.png"),
      ),
    ) !== receipt.cleanSha256
  )
    throw Error(`Library clean invalid ${j.number}`);
  if (
    hash(
      await fs.readFile(path.join(folder, "03 - Đã ghép logo - chờ duyệt.png")),
    ) !== hash(afterBytes)
  )
    throw Error(`Library logo invalid ${j.number}`);
  if (
    j.logoVerification.logoSourceSha256 !== logoHash ||
    row.logoOutput.sha256 !== hash(afterBytes)
  )
    throw Error(`Logo identity mismatch ${j.number}`);
  const info = await read(path.join(folder, "Thông tin.json"));
  if (!info.logoAvailable || info.logoOutput.sha256 !== row.logoOutput.sha256)
    throw Error(`Info mismatch ${j.number}`);
  rows.push({
    number: j.number,
    originalHashUnchanged: true,
    cleanHash: receipt.cleanSha256,
    logoHash: hash(afterBytes),
    dimensionsPreserved: true,
    protectedPixelsChecked: checked,
    libraryState: row.state,
  });
}
const review = path.join(
  path.dirname(runFile),
  path.basename(runFile, ".json") + "-review",
);
await fs.mkdir(review, { recursive: true });
for (const kind of ["clean", "logo"])
  for (let page = 0; page < Math.ceil(run.jobs.length / 10); page++) {
    const tiles = [],
      list = run.jobs.slice(page * 10, page * 10 + 10);
    for (const [i, s] of list.entries()) {
      const j = manifest.jobs.find((j) => j.number === s.number),
        left = (i % 2) * 480,
        top = Math.floor(i / 2) * 315;
      tiles.push({
        input: await sharp(
          path.join(batch, kind === "clean" ? j.cleanComposite : j.after),
        )
          .resize(480, 285, { fit: "contain", background: "white" })
          .jpeg()
          .toBuffer(),
        left,
        top,
      });
      tiles.push({
        input: Buffer.from(
          `<svg width="480" height="30"><rect width="480" height="30" fill="white"/><text x="8" y="20" font-size="18">${j.number} — ${kind}</text></svg>`,
        ),
        left,
        top: top + 285,
      });
    }
    await sharp({
      create: {
        width: 960,
        height: Math.ceil(list.length / 2) * 315,
        channels: 3,
        background: "white",
      },
    })
      .composite(tiles)
      .jpeg({ quality: 93 })
      .toFile(path.join(review, `${kind}-${page + 1}.jpg`));
  }
const verification = {
  checkedAt: new Date().toISOString(),
  count: rows.length,
  unique: new Set(run.jobs.map((j) => j.sourceSha256)).size,
  allOriginalHashesUnchanged: true,
  allDimensionsPreserved: true,
  allProtectedPixelsUnchanged: true,
  allLibraryLinksValid: true,
  residualOcrFlags: [],
  userReviewPending: true,
  files: rows,
};
await fs.writeFile(
  path.join(review, "verification.json"),
  JSON.stringify(verification, null, 2) + "\n",
);
console.log(
  JSON.stringify({ verified: rows.length, summary: catalog.summary, review }),
);
