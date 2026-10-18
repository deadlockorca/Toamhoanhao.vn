import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { spawn, execFileSync } from "node:child_process";
import readline from "node:readline";
import dotenv from "dotenv";
import mariadb from "mariadb";
import sharp from "sharp";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { classify, groupLabels } from "./media-audit/classify.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: path.join(root, ".env"), quiet: true });
const args = process.argv.slice(2);
const has = (arg) => args.includes(arg);
const option = (name, fallback) =>
  args.find((arg) => arg.startsWith(name + "="))?.slice(name.length + 1) ??
  fallback;
const output = path.resolve(
  option(
    "--output",
    process.env.MEDIA_AUDIT_DIR ||
      path.join(
        os.homedir(),
        "Documents/Toamhoanhao-media/media-watermark-audit",
      ),
  ),
);
async function requireExternalOutput() {
  let existing = output;
  const suffix = [];
  let realParent;
  while (!realParent) {
    try {
      realParent = await fs.realpath(existing);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      suffix.unshift(path.basename(existing));
      existing = path.dirname(existing);
    }
  }
  const destination = path.join(realParent, ...suffix);
  const projectRoot = await fs.realpath(root);
  if (
    destination === projectRoot ||
    destination.startsWith(projectRoot + path.sep)
  ) {
    throw new Error(
      "Media audit files must be stored outside the project. Choose an external --output directory.",
    );
  }
}
const mode = args.find((arg) => !arg.startsWith("--")) ?? "inventory";
const hash = (value) => crypto.createHash("sha256").update(value).digest("hex");
const json = async (file) =>
  JSON.parse(await fs.readFile(path.join(output, file), "utf8"));
async function save(file, data) {
  const target = path.join(output, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target + ".tmp", JSON.stringify(data, null, 2) + "\n");
  await fs.rename(target + ".tmp", target);
}
async function inventory() {
  let connection;
  try {
    const url = new URL(process.env.DATABASE_URL);
    connection = await mariadb.createConnection({
      host: url.hostname,
      port: Number(url.port || 3306),
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname.slice(1),
      allowPublicKeyRetrieval: ["localhost", "127.0.0.1", "::1"].includes(
        url.hostname,
      ),
      connectTimeout: 5000,
    });
    await connection.query("START TRANSACTION READ ONLY");
    const assets = new Map(),
      counts = {},
      statusCounts = {};
    for (const kind of ["project", "designSample"]) {
      const project = kind === "project",
        table = project ? "Project" : "DesignSample",
        foreign = project ? "projectId" : "sampleId";
      const parents = await connection.query(
        `SELECT id, slug, title, status, thumbnail FROM ${table} ORDER BY slug`,
      );
      counts[kind] = parents.length;
      statusCounts[kind] = {};
      const add = (url, usage) => {
        if (!url?.trim()) return;
        const value = url.trim();
        if (!assets.has(value))
          assets.set(value, { id: hash(value), url: value, usages: [] });
        assets.get(value).usages.push(usage);
      };
      for (const parent of parents) {
        statusCounts[kind][parent.status] =
          (statusCounts[kind][parent.status] ?? 0) + 1;
        const base = {
          kind,
          recordId: parent.id,
          slug: parent.slug,
          title: parent.title,
          status: parent.status,
        };
        add(parent.thumbnail, {
          ...base,
          table,
          rowId: parent.id,
          field: "thumbnail",
        });
        const detailTable = project ? "ProjectDetail" : "DesignSampleDetail";
        for (const detail of await connection.query(
          `SELECT id, heroImage, floorPlanImage FROM ${detailTable} WHERE ${foreign}=?`,
          [parent.id],
        )) {
          for (const field of ["heroImage", "floorPlanImage"])
            add(detail[field], {
              ...base,
              table: detailTable,
              rowId: detail.id,
              field,
            });
        }
        for (const childTable of project
          ? ["ProjectSpace", "ProjectStoryBlock"]
          : ["DesignSampleGalleryItem", "DesignFeature"]) {
          for (const child of await connection.query(
            `SELECT id, image, title FROM ${childTable} WHERE ${foreign}=? ORDER BY sortOrder`,
            [parent.id],
          ))
            add(child.image, {
              ...base,
              table: childTable,
              rowId: child.id,
              field: "image",
              caption: child.title,
            });
        }
      }
    }
    await connection.rollback();
    const rows = [...assets.values()];
    const result = {
      version: 1,
      createdAt: new Date().toISOString(),
      scope:
        "Only Project and DesignSample media, all statuses; no other website sections",
      databaseAccess: "read_only",
      counts,
      statusCounts,
      uniqueUrls: rows.length,
      references: rows.reduce((sum, asset) => sum + asset.usages.length, 0),
      assets: rows,
    };
    await save("inventory.json", result);
    console.log(JSON.stringify({ ...result, assets: undefined }, null, 2));
  } catch (error) {
    throw new Error(
      `Cannot inventory media (${error.code ?? error.name}); no database changes made.`,
    );
  } finally {
    await connection?.end();
  }
}
function ocrWorker(binary) {
  const process = spawn(binary, [], { stdio: ["pipe", "pipe", "pipe"] });
  const lines = readline.createInterface({ input: process.stdout });
  let pending;
  lines.on("line", (line) => {
    const request = pending;
    pending = undefined;
    if (request) {
      try {
        request.resolve(JSON.parse(line));
      } catch {
        request.reject(new Error("Invalid OCR output"));
      }
    }
  });
  process.on("error", (error) => {
    pending?.reject(error);
    pending = undefined;
  });
  process.on("exit", () => {
    pending?.reject(new Error("OCR worker exited"));
    pending = undefined;
  });
  let stderr = "";
  process.stderr.on("data", (data) => {
    stderr = (stderr + data).slice(-2000);
  });
  return {
    read(file) {
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          pending = undefined;
          process.kill();
          reject(new Error("OCR timed out"));
        }, 120_000);
        pending = {
          resolve: (value) => {
            clearTimeout(timer);
            resolve(value);
          },
          reject: (error) => {
            clearTimeout(timer);
            reject(error);
          },
        };
        process.stdin.write(JSON.stringify({ path: file }) + "\n");
      });
    },
    close() {
      process.stdin.end();
    },
    stop() {
      process.kill();
    },
    diagnostics() {
      return stderr;
    },
  };
}
let r2;
function r2Client() {
  if (!r2)
    r2 = new S3Client({
      region: process.env.R2_REGION || "auto",
      endpoint: process.env.R2_ENDPOINT,
      forcePathStyle: true,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });
  return r2;
}
async function fetchSource(url) {
  if (url.startsWith("/")) {
    const file = path.resolve(root, "public", "." + url);
    if (!file.startsWith(path.join(root, "public") + path.sep))
      throw new Error("Invalid local image path");
    return fs.readFile(file);
  }
  const prefix = process.env.R2_PUBLIC_BASE_URL?.replace(/\/+$/, "");
  if (prefix && url.startsWith(prefix + "/") && process.env.R2_ACCESS_KEY_ID) {
    const key = decodeURIComponent(
      new URL(url).pathname
        .slice(new URL(prefix).pathname.length)
        .replace(/^\/+/, ""),
    );
    const response = await r2Client().send(
      new GetObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key }),
      { abortSignal: AbortSignal.timeout(45000) },
    );
    return Buffer.from(await response.Body.transformToByteArray());
  }
  const response = await fetch(url, {
    headers: { "User-Agent": "ToAmHoanHao-MediaAudit/1.0" },
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}
async function scan() {
  if (process.platform !== "darwin")
    throw new Error(
      "OCR scan requires macOS Vision and Swift. Inventory/report work on other platforms.",
    );
  const manifest = await json("inventory.json");
  const binary = path.join(output, "bin/recognize-text");
  await fs.mkdir(path.dirname(binary), { recursive: true });
  const source = path.join(root, "scripts/media-audit/recognize-text.swift");
  let rebuild = false;
  try {
    rebuild = (await fs.stat(source)).mtimeMs > (await fs.stat(binary)).mtimeMs;
  } catch {
    rebuild = true;
  }
  if (rebuild)
    execFileSync("swiftc", ["-O", source, "-o", binary], { stdio: "inherit" });
  const workers = Math.max(1, Math.min(4, Number(option("--workers", "3"))));
  const limit = Number(option("--limit", "Infinity"));
  const sampleSize = Number(option("--sample", "0"));
  const selected =
    sampleSize > 0
      ? manifest.assets
          .filter(
            (_, index) =>
              index % Math.ceil(manifest.assets.length / sampleSize) === 0,
          )
          .slice(0, sampleSize)
      : manifest.assets;
  const jobs = selected.slice(0, limit);
  let next = 0,
    completed = 0,
    cached = 0,
    errors = 0;
  const started = Date.now();
  let stopped = false;
  const stop = () => {
    stopped = true;
  };
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);
  async function run() {
    let ocr = ocrWorker(binary);
    try {
      while (next < jobs.length && !stopped) {
        const asset = jobs[next++];
        const relative = `results/${asset.id}.json`;
        let previous;
        try {
          const result = await json(relative);
          if (result.status === "analyzed" && !has("--rescan")) {
            const classification = classify(result.observations, asset.usages);
            const needsRefinement =
              has("--refine-unconfirmed") &&
              !result.regionalOcr &&
              !classification.candidates.length &&
              classification.group !== "floor_plan";
            if (!needsRefinement) {
              cached++;
              continue;
            }
            previous = result;
          }
          if (result.status === "unavailable" && !has("--retry-errors")) {
            errors++;
            continue;
          }
        } catch {
          /* No checkpoint yet. */
        }
        try {
          const original = path.join(output, "originals", asset.id);
          let bytes;
          try {
            bytes = await fs.readFile(original);
          } catch {
            for (let attempt = 0; attempt < 3; attempt++) {
              try {
                bytes = await fetchSource(asset.url);
                break;
              } catch (error) {
                if (attempt === 2) throw error;
              }
            }
            await fs.mkdir(path.dirname(original), { recursive: true });
            await fs.writeFile(original + ".tmp", bytes);
            await fs.rename(original + ".tmp", original);
          }
          const metadata = await sharp(bytes, {
            limitInputPixels: 100_000_000,
          }).metadata();
          const preview = path.join(output, "previews", asset.id + ".jpg");
          await fs.mkdir(path.dirname(preview), { recursive: true });
          await sharp(bytes)
            .rotate()
            .resize({
              width: 1800,
              height: 1800,
              fit: "inside",
              withoutEnlargement: true,
            })
            .flatten({ background: "white" })
            .jpeg({ quality: 90 })
            .toFile(preview);
          let result;
          try {
            if (previous) {
              const dimensions = await sharp(preview).metadata();
              const width = dimensions.width,
                height = dimensions.height;
              const observations = [...previous.observations];
              const cropPath = path.join(
                output,
                "previews",
                asset.id + "-ocr.jpg",
              );
              try {
                for (const [start, span] of [
                  [0, 0.22],
                  [0.32, 0.4],
                  [0.75, 0.25],
                ]) {
                  const top = Math.floor(height * start);
                  const cropHeight = Math.min(
                    height - top,
                    Math.ceil(height * span),
                  );
                  await sharp(preview)
                    .extract({ left: 0, top, width, height: cropHeight })
                    .resize({ width: Math.min(width * 2, 3600) })
                    .jpeg({ quality: 95 })
                    .toFile(cropPath);
                  const cropResult = await ocr.read(cropPath);
                  if (cropResult.error) throw new Error(cropResult.error);
                  observations.push(
                    ...cropResult.observations.map((box) => ({
                      ...box,
                      y: (top + box.y * cropHeight) / height,
                      height: (box.height * cropHeight) / height,
                      pass: "regional",
                    })),
                  );
                }
              } finally {
                await fs.rm(cropPath, { force: true });
              }
              result = { observations };
            } else result = await ocr.read(preview);
          } catch (error) {
            ocr.stop();
            ocr = ocrWorker(binary);
            throw error;
          }
          if (result.error) throw new Error(result.error);
          await save(relative, {
            id: asset.id,
            status: "analyzed",
            analyzedAt: new Date().toISOString(),
            sourceSha256: hash(bytes),
            bytes: bytes.length,
            width: metadata.width,
            height: metadata.height,
            format: metadata.format,
            sourceOrientation: metadata.orientation ?? 1,
            regionalOcr: Boolean(previous),
            preview: `previews/${asset.id}.jpg`,
            original: `originals/${asset.id}`,
            observations: result.observations,
            ...classify(result.observations, asset.usages),
          });
          completed++;
        } catch (error) {
          errors++;
          await save(
            relative,
            previous
              ? { ...previous, refinementError: error.code ?? error.name }
              : {
                  id: asset.id,
                  status: "unavailable",
                  group: "unavailable",
                  reviewStatus: "pending_visual_review",
                  error: error.code ?? error.name,
                  message: String(error.message)
                    .replace(/https?:\/\/\S+/g, "[source]")
                    .slice(0, 200),
                },
          );
        }
        if ((completed + errors) % 25 === 0)
          console.log(
            JSON.stringify({
              completed,
              cached,
              errors,
              total: jobs.length,
              elapsedSeconds: Math.round((Date.now() - started) / 1000),
            }),
          );
      }
    } finally {
      ocr.close();
    }
  }
  await Promise.all(Array.from({ length: workers }, run));
  process.removeListener("SIGINT", stop);
  process.removeListener("SIGTERM", stop);
  console.log(
    JSON.stringify({
      completed,
      cached,
      errors,
      total: jobs.length,
      stopped,
      elapsedSeconds: Math.round((Date.now() - started) / 1000),
    }),
  );
}
const htmlEscape = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
async function report() {
  const manifest = await json("inventory.json"),
    assets = [],
    groups = {},
    fingerprints = new Map();
  for (const asset of manifest.assets) {
    let result;
    try {
      result = await json(`results/${asset.id}.json`);
    } catch {
      result = { status: "pending", group: "pending" };
    }
    // Recompute classification from source observations when heuristics improve.
    if (result.status === "analyzed")
      result = { ...result, ...classify(result.observations, asset.usages) };
    const item = { ...asset, ...result };
    if (item.sourceSha256) {
      if (fingerprints.has(item.sourceSha256))
        item.duplicateOf = fingerprints.get(item.sourceSha256);
      else fingerprints.set(item.sourceSha256, item.id);
    }
    assets.push(item);
    groups[item.group] = (groups[item.group] ?? 0) + 1;
  }
  const unique = new Map();
  const priority = [
    "floor_plan",
    "center_or_mixed",
    "edge_or_corner",
    "text_unconfirmed",
    "no_text_detected",
    "unavailable",
    "pending",
  ];
  for (const asset of assets) {
    const key = asset.sourceSha256 ?? asset.id;
    if (!unique.has(key))
      unique.set(key, {
        ...asset,
        aliases: [asset.url],
        usages: [...asset.usages],
      });
    else {
      const primary = unique.get(key);
      primary.aliases.push(asset.url);
      primary.usages.push(...asset.usages);
      if (priority.indexOf(asset.group) < priority.indexOf(primary.group))
        primary.group = asset.group;
    }
  }
  const uniqueContentGroups = {};
  for (const item of unique.values())
    uniqueContentGroups[item.group] =
      (uniqueContentGroups[item.group] ?? 0) + 1;
  for (const group of Object.keys(groupLabels))
    await save(
      `queues/${group}.json`,
      [...unique.values()].filter((item) => item.group === group),
    );
  const summary = {
    createdAt: new Date().toISOString(),
    scope: manifest.scope,
    counts: manifest.counts,
    statusCounts: manifest.statusCounts,
    uniqueUrls: assets.length,
    analyzed: assets.filter((asset) => asset.status === "analyzed").length,
    regionalOcrImages: assets.filter((asset) => asset.regionalOcr).length,
    ocrEngine: "macOS Vision — local text recognition",
    uniqueContentHashes: fingerprints.size,
    exactDuplicateUrls: assets.filter((asset) => asset.duplicateOf).length,
    groups,
    uniqueContentGroups,
    review:
      "Machine classification only; every asset is pending visual review. Edge location does not imply easy removal.",
    databaseAndR2Writes: 0,
  };
  await save("classification.json", { ...summary, assets });
  await save("summary.json", summary);
  const columns = [
    "id",
    "group",
    "complexity",
    "reviewStatus",
    "brands",
    "duplicateOf",
    "width",
    "height",
    "url",
    "references",
    "pages",
  ];
  const csv = [
    columns.join(","),
    ...assets.map((asset) =>
      [
        asset.id,
        asset.group,
        asset.complexity,
        asset.reviewStatus ?? "pending_visual_review",
        asset.brands?.join(";"),
        asset.duplicateOf,
        asset.width,
        asset.height,
        asset.url,
        asset.usages.length,
        [...new Set(asset.usages.map((use) => `${use.kind}/${use.slug}`))].join(
          ";",
        ),
      ]
        .map((value) => '"' + String(value ?? "").replaceAll('"', '""') + '"')
        .join(","),
    ),
  ].join("\n");
  await fs.writeFile(
    path.join(output, "classification.csv"),
    "\ufeff" + csv + "\n",
  );
  const safeAssets = assets.map(
    ({
      id,
      group,
      brands,
      preview,
      candidates,
      usages,
      duplicateOf,
      status,
    }) => ({
      id,
      group,
      brands,
      preview,
      candidates,
      usages: usages.map(({ kind, slug, title }) => ({ kind, slug, title })),
      duplicateOf,
      status,
    }),
  );
  const scriptData = JSON.stringify(safeAssets).replaceAll("<", "\\u003c");
  const html = `<!doctype html><html lang="vi"><meta charset="utf-8"><title>Phân loại ảnh dự án và mẫu</title><style>body{font:15px system-ui;margin:24px;background:#f7f3ed;color:#28241f}header{position:sticky;top:0;background:#f7f3ed;padding:12px 0;z-index:2}select,input,button{font:inherit;padding:8px;margin:4px}#grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:18px}.card{background:white;border-radius:12px;padding:12px}.photo{position:relative}.photo img{display:block;width:100%;height:auto}.box{position:absolute;border:1px solid red;pointer-events:none}small{display:block;color:#685e52}a{color:#8b4e21}#pager{padding:20px}</style><h1>Phân loại ảnh Dự án và Mẫu thiết kế</h1><p>Nhận diện tự động để sàng lọc. Khung đỏ chỉ là vùng nghi có dấu, chưa được duyệt để xóa. Ảnh gốc, SQL và R2 giữ nguyên.</p><header><select id="group"><option value="">Tất cả nhóm</option>${Object.entries(
    groupLabels,
  )
    .map(
      ([key, label]) => `<option value="${key}">${htmlEscape(label)}</option>`,
    )
    .join(
      "",
    )}</select><select id="kind"><option value="">Dự án và mẫu</option><option value="project">Dự án</option><option value="designSample">Mẫu thiết kế</option></select><input id="search" placeholder="Tên hoặc slug"><label><input id="duplicates" type="checkbox">Ẩn ảnh trùng nội dung</label><span id="count"></span></header><div id="grid"></div><div id="pager"></div><script>const assets=${scriptData};const labels=${JSON.stringify(groupLabels)};let page=0;const size=36;const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');function draw(){const chosen=assets.filter(a=>(!group.value||a.group===group.value)&&(!kind.value||a.usages.some(u=>u.kind===kind.value))&&(!duplicates.checked||!a.duplicateOf)&&(!search.value||a.usages.some(u=>(u.title+' '+u.slug).toLowerCase().includes(search.value.toLowerCase()))));const pages=Math.ceil(chosen.length/size);page=Math.min(page,Math.max(0,pages-1));count.textContent=chosen.length+' ảnh';grid.innerHTML=chosen.slice(page*size,(page+1)*size).map(a=>'<article class="card"><div class="photo">'+(a.preview?'<a href="'+esc(a.preview)+'" target="_blank"><img loading="lazy" src="'+esc(a.preview)+'"></a>':'<p>Chưa đọc được ảnh</p>')+(a.candidates??[]).map(b=>'<span class="box" style="left:'+b.x*100+'%;top:'+b.y*100+'%;width:'+b.width*100+'%;height:'+b.height*100+'%" title="'+esc(b.text)+'"></span>').join('')+'</div><p>'+esc(labels[a.group]??a.group)+'</p><small>'+esc(a.brands?.join(', '))+(a.duplicateOf?' · Trùng nội dung':'')+'</small><p>'+esc(a.usages[0]?.title)+'</p><small>'+esc(a.usages[0]?.kind)+' / '+esc(a.usages[0]?.slug)+'</small><small>'+esc(a.id.slice(0,12))+' · '+a.usages.length+' vị trí sử dụng</small></article>').join('');pager.innerHTML='<button id="prev">Trước</button> '+(page+1)+' / '+Math.max(1,pages)+' <button id="next">Sau</button>';prev.onclick=()=>{page=Math.max(0,page-1);draw()};next.onclick=()=>{page=Math.min(pages-1,page+1);draw()}}for(const id of ['group','kind','search','duplicates'])document.getElementById(id).addEventListener('input',()=>{page=0;draw()});draw();</script></html>`;
  await fs.writeFile(path.join(output, "review.html"), html);
  console.log(JSON.stringify(summary, null, 2));
}
try {
  await requireExternalOutput();
  await fs.mkdir(output, { recursive: true });
  if (mode === "inventory") await inventory();
  else if (mode === "scan") await scan();
  else if (mode !== "report")
    throw new Error(
      "Use inventory, scan [--sample=N --limit=N --workers=3 --retry-errors --rescan --refine-unconfirmed], or report",
    );
  if (mode !== "inventory") await report();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
