import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryDir = path.join(importRoot, "inventory");
const inventoryPath = path.join(inventoryDir, "old-site-content-inventory.json");
const jsonReportPath = path.join(
  inventoryDir,
  "design-sample-image-duplicate-report.json",
);
const markdownReportPath = path.join(
  inventoryDir,
  "design-sample-image-duplicate-report.md",
);
const visualSimilarityThreshold = 4;
const minimumVisualWidth = 320;
const minimumVisualHeight = 180;

const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
const samples = inventory.filter((item) =>
  item.folder?.startsWith("mau-thiet-ke/"),
);
const allFiles = [];
const samplesWithDuplicates = [];

for (const sample of samples) {
  const sourceUrlByFilename = new Map(
    (sample.images ?? [])
      .filter((image) => image.rawPath && image.sourceUrl)
      .map((image) => [
        path.basename(image.rawPath, path.extname(image.rawPath)),
        image.sourceUrl,
      ]),
  );
  const files = await Promise.all(
    (sample.webp?.readyImages ?? []).map(async (relativePath) => {
      const filename = path.basename(relativePath, path.extname(relativePath));
      const sourceUrl = sourceUrlByFilename.get(filename);
      const fullPath = path.join(importRoot, sample.folder, sample.slug, relativePath);

      return {
        slug: sample.slug,
        title: sample.title,
        group: sample.folder.split("/")[1] ?? "khac",
        relativePath,
        sourceUrl,
        sourceKey: sourceUrl ? sourceImageKey(sourceUrl) : filename.toLowerCase(),
        hash: await fileHash(fullPath),
        ...(await visualSignature(fullPath)),
      };
    }),
  );
  const sourceDuplicates = duplicateGroups(files, (file) => file.sourceKey);
  const exactDuplicates = duplicateGroups(files, (file) => file.hash);
  const visualDuplicates = visualDuplicateGroups(files);

  if (
    sourceDuplicates.length > 0 ||
    exactDuplicates.length > 0 ||
    visualDuplicates.length > 0
  ) {
    samplesWithDuplicates.push({
      slug: sample.slug,
      title: sample.title,
      group: sample.folder.split("/")[1] ?? "khac",
      readyImages: files.length,
      sourceDuplicateGroups: sourceDuplicates,
      exactDuplicateGroups: exactDuplicates,
      visualDuplicateGroups: visualDuplicates,
    });
  }

  allFiles.push(...files);
}

const crossSampleExactGroups = duplicateGroups(allFiles, (file) => file.hash)
  .filter((group) => new Set(group.files.map((file) => file.slug)).size > 1);
const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    samples: samples.length,
    readyImages: allFiles.length,
    samplesWithDuplicates: samplesWithDuplicates.length,
    resizeOrSourceDuplicateCandidates: samplesWithDuplicates.reduce(
      (total, sample) =>
        total + sample.sourceDuplicateGroups.reduce(
          (sum, group) => sum + group.files.length - 1,
          0,
        ),
      0,
    ),
    exactDuplicateCandidates: samplesWithDuplicates.reduce(
      (total, sample) =>
        total + sample.exactDuplicateGroups.reduce(
          (sum, group) => sum + group.files.length - 1,
          0,
        ),
      0,
    ),
    visualDuplicateCandidates: samplesWithDuplicates.reduce(
      (total, sample) =>
        total + sample.visualDuplicateGroups.reduce(
          (sum, group) => sum + group.files.length - 1,
          0,
        ),
      0,
    ),
    crossSampleExactGroups: crossSampleExactGroups.length,
  },
  samplesWithDuplicates,
  crossSampleExactGroups,
};

await Promise.all([
  writeFile(jsonReportPath, `${JSON.stringify(report, null, 2)}\n`),
  writeFile(markdownReportPath, buildMarkdownReport(report)),
]);

console.log(JSON.stringify(report.summary, null, 2));
console.log(`Report: ${markdownReportPath}`);

async function fileHash(filePath) {
  return createHash("sha256").update(await readFile(filePath)).digest("hex");
}

async function visualSignature(filePath) {
  const image = sharp(filePath, { animated: false });
  const metadata = await image.metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;

  if (width < minimumVisualWidth || height < minimumVisualHeight) {
    return { width, height, visualHash: null };
  }

  const pixels = await image
    .resize(9, 8, { fit: "fill" })
    .grayscale()
    .raw()
    .toBuffer();
  let hash = 0n;

  for (let row = 0; row < 8; row += 1) {
    for (let column = 0; column < 8; column += 1) {
      const left = pixels[row * 9 + column];
      const right = pixels[row * 9 + column + 1];
      hash = (hash << 1n) | BigInt(left > right ? 1 : 0);
    }
  }

  return { width, height, visualHash: hash.toString(16).padStart(16, "0") };
}

function sourceImageKey(value) {
  return decodeURIComponent(path.basename(new URL(value).pathname))
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/-\d+x\d+$/i, "")
    .toLowerCase();
}

function duplicateGroups(files, keySelector) {
  const groups = new Map();

  for (const file of files) {
    const key = keySelector(file);
    const groupedFiles = groups.get(key) ?? [];
    groupedFiles.push(file);
    groups.set(key, groupedFiles);
  }

  return [...groups.entries()]
    .filter(([, groupedFiles]) => groupedFiles.length > 1)
    .map(([key, groupedFiles]) => ({ key, files: groupedFiles }));
}

function visualDuplicateGroups(files) {
  const candidates = files.filter((file) => file.visualHash);
  const parents = candidates.map((_, index) => index);

  for (let left = 0; left < candidates.length; left += 1) {
    for (let right = left + 1; right < candidates.length; right += 1) {
      if (
        hammingDistance(candidates[left].visualHash, candidates[right].visualHash) <=
        visualSimilarityThreshold
      ) {
        union(parents, left, right);
      }
    }
  }

  const groups = new Map();

  for (const [index, file] of candidates.entries()) {
    const root = find(parents, index);
    const groupedFiles = groups.get(root) ?? [];
    groupedFiles.push(file);
    groups.set(root, groupedFiles);
  }

  return [...groups.values()]
    .filter((groupedFiles) => groupedFiles.length > 1)
    .map((groupedFiles) => ({ files: groupedFiles }));
}

function hammingDistance(leftHash, rightHash) {
  let value = BigInt(`0x${leftHash}`) ^ BigInt(`0x${rightHash}`);
  let distance = 0;

  while (value > 0n) {
    distance += 1;
    value &= value - 1n;
  }

  return distance;
}

function find(parents, index) {
  if (parents[index] !== index) {
    parents[index] = find(parents, parents[index]);
  }

  return parents[index];
}

function union(parents, left, right) {
  const leftRoot = find(parents, left);
  const rightRoot = find(parents, right);

  if (leftRoot !== rightRoot) {
    parents[rightRoot] = leftRoot;
  }
}

function buildMarkdownReport(data) {
  const lines = [
    "# Bao cao anh trung Mau thiet ke",
    "",
    `- So mau: ${data.summary.samples}`,
    `- Anh WebP san sang: ${data.summary.readyImages}`,
    `- Mau co anh trung: ${data.summary.samplesWithDuplicates}`,
    `- Ung vien trung do resize/ten anh: ${data.summary.resizeOrSourceDuplicateCandidates}`,
    `- Ung vien trung byte hoan toan: ${data.summary.exactDuplicateCandidates}`,
    `- Ung vien giong nhau theo hinh anh: ${data.summary.visualDuplicateCandidates}`,
    `- Nhom anh trung giua nhieu mau: ${data.summary.crossSampleExactGroups}`,
    "",
    "Bao cao chi de ra soat, khong tu dong xoa anh.",
    "",
    "## Trung trong cung mot mau",
    "",
    "| Mau | Nhom | Anh san sang | Trung theo nguon | Trung byte | Trung hinh anh |",
    "|---|---|---:|---:|---:|---:|",
  ];

  for (const sample of data.samplesWithDuplicates) {
    lines.push(
      `| ${escapeTable(sample.title)} | ${sample.group} | ${sample.readyImages} | ${sample.sourceDuplicateGroups.length} | ${sample.exactDuplicateGroups.length} | ${sample.visualDuplicateGroups.length} |`,
    );
  }

  return `${lines.join("\n")}\n`;
}

function escapeTable(value) {
  return String(value ?? "").replace(/\|/g, "\\|");
}
