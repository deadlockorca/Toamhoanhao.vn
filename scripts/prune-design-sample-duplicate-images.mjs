import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const applyChanges = process.argv.includes("--apply");
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const inventoryPath = path.join(
  importRoot,
  "inventory",
  "old-site-content-inventory.json",
);

const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
const samples = inventory.filter((item) =>
  item.folder?.startsWith("mau-thiet-ke/"),
);
const summary = {
  mode: applyChanges ? "apply" : "dry-run",
  samples: samples.length,
  imagesBefore: 0,
  imagesKept: 0,
  imagesRemoved: 0,
  duplicateGroups: 0,
  removedPaths: [],
};

for (const sample of samples) {
  const files = await Promise.all(
    (sample.webp?.readyImages ?? []).map(async (relativePath) => {
      const fullPath = path.join(importRoot, sample.folder, sample.slug, relativePath);
      const metadata = await sharp(fullPath, { animated: false }).metadata();
      const filename = path.basename(relativePath, path.extname(relativePath));
      const sourceUrl = sourceUrlByFilename(sample).get(filename);

      return {
        relativePath,
        fullPath,
        filename,
        sourceKey: sourceImageKey(sourceUrl ?? filename),
        width: metadata.width ?? 0,
        height: metadata.height ?? 0,
        visualHash: await differenceHash(fullPath),
        normalizedPixels: await normalizedPixels(fullPath),
      };
    }),
  );
  const groups = duplicateGroups(files);
  const removedPaths = new Set();

  for (const group of groups) {
    const [keep, ...duplicates] = group.sort(comparePreferredImage);
    void keep;

    for (const duplicate of duplicates) {
      removedPaths.add(duplicate.relativePath);
    }
  }

  const keptPaths = files
    .filter((file) => !removedPaths.has(file.relativePath))
    .map((file) => file.relativePath);

  summary.imagesBefore += files.length;
  summary.imagesKept += keptPaths.length;
  summary.imagesRemoved += removedPaths.size;
  summary.duplicateGroups += groups.length;
  summary.removedPaths.push(
    ...[...removedPaths].map((relativePath) => `${sample.folder}/${sample.slug}/${relativePath}`),
  );

  if (applyChanges && removedPaths.size > 0) {
    await Promise.all(
      [...removedPaths].map((relativePath) =>
        rm(path.join(importRoot, sample.folder, sample.slug, relativePath)),
      ),
    );
    sample.webp.readyImages = keptPaths;
    sample.webp.total = keptPaths.length;
    sample.webp.readyCount = keptPaths.length;
    sample.webp.byStage = {
      ...(sample.webp.byStage ?? {}),
      [sample.webp.readyStage ?? "raw"]: keptPaths.length,
    };
  }
}

if (applyChanges) {
  await writeFile(inventoryPath, `${JSON.stringify(inventory, null, 2)}\n`);
}

console.log(
  JSON.stringify(
    {
      ...summary,
      removedPaths: process.argv.includes("--verbose") ? summary.removedPaths : undefined,
    },
    null,
    2,
  ),
);

async function differenceHash(filePath) {
  const pixels = await sharp(filePath, { animated: false })
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

  return hash.toString(16).padStart(16, "0");
}

async function normalizedPixels(filePath) {
  return sharp(filePath, { animated: false })
    .resize(64, 64, { fit: "fill" })
    .grayscale()
    .raw()
    .toBuffer();
}

function duplicateGroups(files) {
  const parents = files.map((_, index) => index);
  const sourceGroups = new Map();
  const visualGroups = new Map();

  for (const [index, file] of files.entries()) {
    addToGroup(sourceGroups, file.sourceKey, index);
    addToGroup(visualGroups, file.visualHash, index);
  }

  for (const group of [...sourceGroups.values(), ...visualGroups.values()]) {
    for (let index = 1; index < group.length; index += 1) {
      union(parents, group[0], group[index]);
    }
  }

  for (let left = 0; left < files.length; left += 1) {
    for (let right = left + 1; right < files.length; right += 1) {
      if (
        hammingDistance(files[left].visualHash, files[right].visualHash) <= 4 &&
        meanAbsoluteDifference(files[left].normalizedPixels, files[right].normalizedPixels) <=
          6
      ) {
        union(parents, left, right);
      }
    }
  }

  const groups = new Map();
  for (const [index, file] of files.entries()) {
    const root = find(parents, index);
    const groupedFiles = groups.get(root) ?? [];
    groupedFiles.push(file);
    groups.set(root, groupedFiles);
  }

  return [...groups.values()].filter((group) => group.length > 1);
}

function addToGroup(groups, key, index) {
  const entries = groups.get(key) ?? [];
  entries.push(index);
  groups.set(key, entries);
}

function sourceUrlByFilename(sample) {
  return new Map(
    (sample.images ?? [])
      .filter((image) => image.rawPath && image.sourceUrl)
      .map((image) => [
        path.basename(image.rawPath, path.extname(image.rawPath)),
        image.sourceUrl,
      ]),
  );
}

function sourceImageKey(value) {
  const filename = value.startsWith("http")
    ? path.basename(new URL(value).pathname, path.extname(new URL(value).pathname))
    : value;

  return filename
    .replace(/-[a-f0-9]{8}$/i, "")
    .replace(/-\d+x\d+$/i, "")
    .replace(/^\d+-/, "")
    .toLowerCase();
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

function meanAbsoluteDifference(leftPixels, rightPixels) {
  let total = 0;

  for (let index = 0; index < leftPixels.length; index += 1) {
    total += Math.abs(leftPixels[index] - rightPixels[index]);
  }

  return total / leftPixels.length;
}

function comparePreferredImage(left, right) {
  const areaDifference = right.width * right.height - left.width * left.height;
  if (areaDifference !== 0) {
    return areaDifference;
  }

  const leftIsResize = /-\d+x\d+-[a-f0-9]{8}$/i.test(left.filename);
  const rightIsResize = /-\d+x\d+-[a-f0-9]{8}$/i.test(right.filename);
  if (leftIsResize !== rightIsResize) {
    return Number(leftIsResize) - Number(rightIsResize);
  }

  return left.relativePath.localeCompare(right.relativePath);
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
