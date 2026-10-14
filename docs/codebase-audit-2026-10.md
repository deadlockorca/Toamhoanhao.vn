# Báo cáo Audit Codebase — Toamhoanhao.vn

**Ngày:** 2026-10-13
**Phạm vi:** toàn bộ source code `src/`, `scripts/`, `prisma/`, cấu hình build, assets, git history
**Stack:** Next.js 16.3.0 (App Router, Turbopack) · React 19.2.8 · TypeScript 5.9 · Tailwind v4 · Prisma 7.9.1 + MariaDB · Cloudflare R2 (S3 SDK) · nodemailer
**Trạng thái repo khi audit:** working tree sạch, 48 commits, `HEAD = d45c728`

---

## 0. Tóm tắt điều hành

| Hạng mục | Kết quả đo được |
|---|---|
| Tổng LOC (không tính `src/generated`) | 21.161 |
| **Code chết (unreachable)** | **43 file · 4.324 LOC (~20%)** |
| **Route bị SSR mọi request** | **60/60 (0 trang được prerender)** |
| Lỗi TypeScript | 0 |
| ESLint | 0 error · **142 warning** |
| Production build | ✅ pass, không warning |
| Lỗ hổng bảo mật nghiêm trọng | **1 (P0) + 4 (P1)** |
| Kích thước git tracked | 159 MB / 3.073 file (150 MB là ảnh) |
| Ảnh mồ côi | 104 file · 5,8 MB |

**Ba việc cần làm ngay, theo thứ tự:**
1. Thêm xác thực cho `/admin` (đang mở hoàn toàn ra Internet).
2. Xoá 1 dòng `await headers()` ở root layout → mở khoá static rendering cho toàn site.
3. Xoá 43 file code chết (4.324 LOC) — tàn dư của generation trước lần "redesign".

---

## 1. P0 — BẢO MẬT NGHIÊM TRỌNG

### 1.1 🔴 Toàn bộ khu vực `/admin` KHÔNG có xác thực

**Mức độ:** Critical. Đây là lỗ hổng nặng nhất trong dự án.

Toàn bộ 6 trang admin và 6 server action đều truy cập được công khai, không có bất kỳ kiểm tra đăng nhập / phân quyền nào.

**Bằng chứng:**

```
$ grep -rniE "auth|session|cookie|password|token|login|isAdmin|requireAdmin" src --include=*.ts --include=*.tsx -l | grep -v generated
src/app/api/contact/route.ts          → false positive ("token" trong text)
src/app/gioi-thieu/about-video.tsx    → false positive (youtube-nocookie)
src/components/home/...               → false positive
```

→ **Không có file nào trong `src/app/admin/**` chứa logic xác thực.**

| Bằng chứng | Vị trí |
|---|---|
| Layout admin không check auth | [src/app/admin/layout.tsx](src/app/admin/layout.tsx) — chỉ render sidebar + children |
| Server actions không check auth | [src/app/admin/actions.ts](src/app/admin/actions.ts) — 1.540 dòng, `"use server"` ở dòng 1, không có 1 dòng auth |
| Proxy không bảo vệ `/admin` | [src/proxy.ts:11](src/proxy.ts#L11) — matcher chỉ có `["/en","/ja","/ko","/sv","/fr","/ru","/es","/zh"]` |
| Không có robots chặn crawl | không tồn tại `src/app/robots.ts` hay `public/robots.txt` |
| Không có config bảo vệ tầng deploy | không có `vercel.json`, không có `.vercel` |

**Các server action đang mở công khai:**

| Action | Dòng | Tác động |
|---|---|---|
| `createProjectDraft` | 76 | Tạo dự án |
| `saveProjectDraft` | 108 | Ghi đè dự án theo slug |
| `updateProjectStatus` | 163 | Publish/unpublish |
| `deleteProject` | 178 | **XOÁ dự án + toàn bộ ảnh R2** |
| `createDesignSampleDraft` | 220 | Tạo mẫu thiết kế |
| `saveDesignSampleDraft` | 251 | Ghi đè mẫu thiết kế |
| `updateDesignSampleStatus` | 303 | Publish/unpublish |
| `deleteDesignSample` | 318 | **XOÁ mẫu + toàn bộ ảnh R2** |
| `seedMockProjects` / `seedMockDesignSamples` / `seedMockContent` | 360 / 433 / 504 | Ghi hàng loạt vào DB |

**Chuỗi tấn công cụ thể:**
1. Kẻ tấn công gọi trực tiếp server action (Next.js server actions là HTTP POST endpoint công khai, không cần UI).
2. `deleteProject(slug)` → xoá bản ghi DB và gọi `deleteR2PublicUrls(...)` xoá vĩnh viễn ảnh trên R2.
3. `createProjectDraft` với `coverImageFile` → `uploadR2Images` đẩy file lên bucket R2 của bạn (tối đa 30 file/lần × 8 MB = 240 MB, body limit 48 MB).
4. `saveProjectDraft(currentSlug, ...)` → upsert theo slug ⇒ có thể **chiếm quyền nội dung** của slug bất kỳ.

**Hệ quả:** mất toàn bộ nội dung + chi phí R2 + có thể dùng bucket làm nơi phát tán file.

**Khắc phục (ưu tiên tuyệt đối):**
1. **Ngay lập tức:** chặn `/admin` ở tầng hạ tầng (Vercel Password Protection / Cloudflare Access / IP allowlist) để giảm thiệt hại trong lúc vá code.
2. Thêm `src/app/admin/layout.tsx` (server component) kiểm tra session trước khi render; `redirect("/dang-nhap")` nếu chưa đăng nhập.
3. Tạo một helper `requireAdmin()` và **gọi ở dòng đầu của MỌI server action** trong `actions.ts`. Không dựa vào layout — server action không đi qua layout.
4. Cấu hình `experimental.serverActions.allowedOrigins` trong `next.config.ts`.
5. Thêm `src/app/robots.ts` với `disallow: ["/admin", "/api"]`.

> ⚠️ **Lưu ý về mức độ ưu tiên:** đây là lỗi duy nhất trong báo cáo mà nếu bị khai thác sẽ gây mất mát không thể phục hồi. Nên xử lý trước cả việc dọn dead code.

---

### 1.2 🟠 `/api/contact` rò rỉ thông tin nội bộ

[src/app/api/contact/route.ts:56-58](src/app/api/contact/route.ts#L56-L58)

```ts
} catch (error) {
  const message = error instanceof Error ? error.message : "Lỗi không xác định";
  console.error("Send mail error:", message);
  return NextResponse.json({ error: message }, { status: 500 });   // ← trả raw error cho client
}
```

`error.message` của nodemailer chứa host SMTP, mã lỗi xác thực, đôi khi cả username. Client hiển thị trực tiếp chuỗi này ([src/components/contact-form.tsx:40](src/components/contact-form.tsx#L40)).

**Khắc phục:** log server-side, trả về thông báo chung cố định cho client.

---

### 1.3 🟠 HTML injection trong email liên hệ

[src/app/api/contact/route.ts:22-34](src/app/api/contact/route.ts#L22-L34)

```ts
const html = `
  ...
  <tr><td>Họ tên</td><td>${name}</td></tr>
  <tr><td>Nội dung</td><td>${message ?? "—"}</td></tr>
```

`name`, `phone`, `email`, `service`, `scale`, `area`, `interests`, `message` được nội suy **nguyên văn** vào HTML email. Không escape, không giới hạn độ dài.

- Chèn HTML giả mạo vào email nội bộ (giả mạo bảng, chèn link lừa đảo, tracking pixel).
- `name` cũng vào `subject` (dòng 50) → nguy cơ header injection (nodemailer có sanitize một phần, nhưng không nên phụ thuộc).
- Không giới hạn độ dài → email khổng lồ.

**Khắc phục:** escape HTML (hoặc dùng text thuần), giới hạn `length` từng field, whitelist `service`/`area`.

---

### 1.4 🟠 Không có rate limiting / chống spam

- `POST /api/contact` không giới hạn tần suất → spam hộp thư, lạm dụng SMTP, có thể bị blacklist domain.
- Server action upload không giới hạn tần suất → lạm dụng dung lượng R2.
- Không có captcha / honeypot / Turnstile.

**Khắc phục:** rate limit theo IP (Vercel KV / Upstash / middleware), thêm Cloudflare Turnstile.

---

### 1.5 🟠 Thiếu toàn bộ security headers

[next.config.ts](next.config.ts) không có `headers()`, không CSP, không HSTS, không `X-Frame-Options`, không `poweredByHeader: false`.

**Khắc phục:** thêm khối `async headers()` trả về các header chuẩn (hoặc cấu hình ở tầng CDN).

---

### 1.6 ✅ Điểm tốt — cần ghi nhận

Kiểm tra chủ động các vector khác, **không phát hiện vấn đề**:

| Kiểm tra | Kết quả |
|---|---|
| `.env` / secret bị commit | ✅ Không. `git log --all -- .env` rỗng. `.gitignore` chặn `.env*` đúng. `.env` có quyền `600`. |
| `dangerouslySetInnerHTML` | ✅ 0 lần sử dụng |
| Raw SQL (`$queryRaw`, `$executeRaw`) | ✅ 0 lần — chỉ dùng Prisma typed API |
| `eval()` / `new Function()` | ✅ 0 lần |
| Secret lộ qua `NEXT_PUBLIC_*` | ✅ Chỉ có `NEXT_PUBLIC_SITE_URL` (không nhạy cảm) |
| SQL dump trong git | ✅ `exports/toamhoanhao-2026-09-24.sql` chỉ chứa bảng `_prisma_migrations` (schema-only), **không có PII** |
| Module upload R2 | ✅ Viết tốt: whitelist MIME, giới hạn size, giới hạn 30 file, `normalizeKeyPart`, xoá có scope theo `keyPrefix` |

---

## 2. P1 — PERFORMANCE

### 2.1 🔴 100% route bị SSR mọi request — 0 trang được prerender

**Đây là phát hiện có giá trị cao nhất về performance, và cách sửa chỉ là 1 dòng.**

**Hiện trạng đo từ build thật:**

```
Route (app)
┌ ƒ /                    ├ ƒ /du-an              ├ ƒ /gioi-thieu/tuyen-dung
├ ƒ /[locale]            ├ ƒ /du-an/[slug]       ├ ƒ /lien-he
├ ƒ /admin               ├ ƒ /mau-thiet-ke       ├ ƒ /kien-thuc/... (mọi trang)
└ ...                    └ ...                   └ ...
ƒ (Dynamic) server-rendered on demand
```

| Chỉ số | Giá trị |
|---|---|
| Route dynamic (ƒ) | **60 / 60** |
| Route static (○) | 2 (chỉ `icon.png`, `apple-icon.png`) |
| Route SSG (●) | 0 |
| File prerender sinh ra | **1 `.html` + 4 `.rsc`** |

Một site marketing với ~500 trang nội dung tĩnh (bài viết, dự án, mẫu thiết kế) đang render lại toàn bộ HTML ở **mọi request**.

**Root cause #1 — [src/app/layout.tsx:37](src/app/layout.tsx#L37)**

```ts
const requestedLocale = (await headers()).get("x-site-locale");
```

`headers()` là dynamic API. Đặt nó ở **root layout** khiến Next.js đánh dấu dynamic cho **toàn bộ cây route**.

**Bằng chứng thực nghiệm có kiểm soát:** tao đã tạm sửa đúng dòng này rồi build lại, sau đó **hoàn nguyên và xác minh repo sạch**.

| | Có `headers()` (hiện tại) | Bỏ `headers()` |
|---|---|---|
| Route dynamic (ƒ) | **60** | **19** |
| Route static (○) | 2 | **34** |
| Route SSG (●) | 0 | **26** |
| File prerender (`.html`) | 1 | **464** |
| File prerender (`.rsc`) | 4 | **1.856** |

→ **41 route / ~460 trang chuyển từ SSR-mọi-request sang phục vụ tĩnh.**

**Root cause #2 — [src/lib/public-content.ts](src/lib/public-content.ts)**

`await connection()` ở 4 hàm (dòng 39, 50, 66, 77) + 6 trang admin. Sau khi sửa root cause #1, các route còn dynamic (`/`, `/[locale]`, `/du-an`, `/mau-thiet-ke`, các trang listing) là do `connection()`.

**Khắc phục đề xuất (theo thứ tự an toàn):**
1. **Bỏ `headers()` khỏi root layout.** Thay bằng: mỗi route segment tự set `<html lang>` qua layout riêng, hoặc để proxy ghi locale vào pathname. Đây là thay đổi cần test kỹ vì ảnh hưởng `lang` attribute + locale của `ConsultationProvider`.
2. Bỏ `await connection()` ở `public-content.ts`.
3. Thêm `export const revalidate = 300` (ISR) cho các trang nội dung, và `revalidateTag` trong admin actions (đã có `revalidatePath`, chỉ cần bổ sung tag).
4. Giữ `connection()` **chỉ** ở các trang admin (đúng, vì cần dữ liệu tươi).

---

### 2.2 🟠 Query không phân trang, include quá nặng

[src/lib/public-content.ts:38-47](src/lib/public-content.ts#L38-L47)

```ts
const dbProjects = await prisma.project.findMany({
  where: { status: "published" },
  orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  include: projectInclude,   // 7 quan hệ lồng nhau
});
```

`projectInclude` kéo `detail`, `metrics`, `infoRows`, `spaces`, `storyBlocks`, `floorPlanNotes`, `relatedProjects` (kèm `relatedProject` lồng trong). Không có `take`/`skip`.

- `getPublicProjects()` được gọi ở trang chủ, `/du-an`, `/mau-thiet-ke` → mỗi lần load **toàn bộ** dự án published + toàn bộ quan hệ.
- Trang listing dùng `PortfolioOverview` vốn chỉ cần ~8 field mỗi item (xem `LibraryItem` trong [src/lib/content-library.ts:41-54](src/lib/content-library.ts#L41-L54)).
- Admin listing ([src/app/admin/du-an/page.tsx:15](src/app/admin/du-an/page.tsx#L15), [mau-thiet-ke/page.tsx](src/app/admin/mau-thiet-ke/page.tsx)) cũng không phân trang.

**Khắc phục:** thêm `select` thu hẹp cho listing, thêm `take`/`skip` + đếm tổng cho listing page và admin.

---

### 2.3 🟡 `getPublicProjectBySlug` filter status trong JS

[src/lib/public-content.ts:49-63](src/lib/public-content.ts#L49-L63) — dùng `findUnique` rồi kiểm tra `status` bằng JS. Nên là `findFirst({ where: { slug, status: "published" } })` để không kéo dữ liệu draft không cần thiết.

---

### 2.4 🟡 Ảnh: 150 MB trong git + 104 file mồ côi

| Chỉ số | Giá trị |
|---|---|
| `public/images` | **150 MB · 2.848 file** (2.804 webp) |
| Git tracked | 159 MB / 3.073 file → **ảnh chiếm 94% repo** |
| Ảnh mồ côi (không tham chiếu) | **104 file · 5,8 MB** |
| `.git` | 281 MB |

Repo hiện tại 150 MB sẽ khiến mọi `git clone` và CI checkout rất chậm.

**Ảnh mồ côi tiêu biểu** (đã verify bằng grep trực tiếp, không phải đoán):
- `/images/bao-gia/xay-dung/cach-tinh-gia.webp`
- Toàn bộ thư mục `/images/kien-thuc/kinh-nghiem-thiet-ke-noi-that/articles/kinh-nghiem-thiet-ke-noi-that-phong-ngu-master-19/` (54 file) — bài viết này đã đổi sang slug khác.

**Khắc phục:**
- Xoá 104 ảnh mồ côi (danh sách đã có, xem mục 5).
- Chuyển ảnh bài viết sang R2 (hạ tầng R2 đã có sẵn và đang dùng cho dự án/mẫu thiết kế) — giảm repo xuống còn vài MB.

---

### 2.5 🟡 Rò rỉ object trên R2 khi upload một phần thất bại

[src/lib/r2-storage.ts:98](src/lib/r2-storage.ts#L98)

```ts
return Promise.all(files.map(async (file, index) => { ... await PutObjectCommand ... }));
```

`Promise.all` reject ngay khi 1 file lỗi, nhưng các upload còn lại **vẫn tiếp tục chạy** và có thể thành công. Những URL đó không bao giờ được trả về caller ⇒ không bao giờ được rollback ⇒ **object mồ côi vĩnh viễn trên R2**.

**Khắc phục:** dùng `Promise.allSettled`, thu thập các URL đã upload thành công, xoá chúng khi có bất kỳ lỗi nào.

---

### 2.6 🟡 Thiếu error/loading boundary

Không tồn tại **bất kỳ** file nào trong số: `loading.tsx`, `error.tsx`, `not-found.tsx`, `global-error.tsx`. Không có `<Suspense>`.

**Hệ quả:** một lỗi DB sẽ hiển thị trang lỗi mặc định của Next.js; 404 dùng trang mặc định; không có skeleton khi tải.

---

### 2.7 🟡 Vài điểm nhỏ khác

| Vấn đề | Vị trí | Ghi chú |
|---|---|---|
| `nodemailer.createTransport` tạo mới mỗi request | [contact/route.ts:36](src/app/api/contact/route.ts#L36) | Nên khởi tạo 1 lần ở module scope |
| `beautiful-home-article-blocks.json` 2,9 MB | [src/data/beautiful-home-article-blocks.json](src/data/beautiful-home-article-blocks.json) | Bundle cứng vào server bundle |
| Root layout dùng `Be_Vietnam_Pro` 5 weight | [src/app/layout.tsx:7](src/app/layout.tsx#L7) | Chấp nhận được, cân nhắc giảm còn 3-4 weight |
| `.next` 2,5 GB ở máy local | — | Đã gitignore, nhưng nên `rm -rf .next` định kỳ |

---

## 3. P1 — CODE CHẾT

### 3.1 43 file không thể tiếp cận từ entry point · 4.324 LOC (~20%)

**Phương pháp:** phân tích đồ thị import (reachability) từ 62 entry point theo convention của Next.js (`page.tsx`, `layout.tsx`, `route.ts`, …), đi theo toàn bộ import chain. Một file là "chết" khi **không có đường đi nào** từ entry point tới nó — phương pháp này xử lý đúng trường hợp file chết import lẫn nhau (mà grep đơn thuần sẽ bỏ sót).

| Nhóm | Số file | LOC |
|---|---|---|
| `src/components/home/*` (thế hệ cũ) | 9 | 986 |
| `src/components/design-samples/**` (thế hệ cũ) | 15 | 1.209 |
| `src/components/projects/**` (thế hệ cũ) | 12 | 1.294 |
| `desktop-navigation.tsx` + `mobile-navigation.tsx` | 2 | 309 |
| `article-pagination.tsx` | 1 | 93 |
| `src/lib/relative-time.ts` | 1 | 38 |
| **Tổng** | **43** | **4.324** |

**Câu chuyện từ git history — đây là tàn dư của một lần redesign:**

```
2026-08-12  c597c6d "thu_gon"    → tạo hero-section.tsx (thế hệ 1)
2026-08-19  80609bb "final"      → lần cuối động vào thế hệ 1
2026-10-07  b6cd5b4 "redesign"   → tạo home-landing.tsx + portfolio-overview.tsx (thế hệ 2)
2026-10-12  994f19f "lg_v2"      → lần cuối động vào home-landing.tsx
```

Lần `redesign` (2026-10-07) đã viết lại mọi thứ **inline** trong component mới nhưng **không xoá** thế hệ cũ. 43 file đó đã mồ côi hơn 5 tháng.

**Bằng chứng thế hệ 2 thay thế hoàn toàn thế hệ 1:**

| Component mới | Thay thế cho |
|---|---|
| [src/components/home/home-landing.tsx](src/components/home/home-landing.tsx) (199 dòng, `"use client"`) implement **inline** toàn bộ homepage. Chỉ import `ConsultationButton`, `SiteFooter`, `SiteHeader`. | 9 component `home/*` |
| [src/components/portfolio/portfolio-overview.tsx](src/components/portfolio/portfolio-overview.tsx) | `design-listing-section.tsx` (214), `projects-listing-section.tsx` (549), `project-card.tsx`, `content-library-card.tsx` |
| [src/components/projects/detail/project-detail-showcase.tsx](src/components/projects/detail/project-detail-showcase.tsx) implement inline, chỉ import `ConsultationButton` + `SiteHeader` | 6 component `projects/detail/*` |
| [src/components/design-samples/detail/design-detail-showcase.tsx](src/components/design-samples/detail/design-detail-showcase.tsx) implement inline | 9 component `design-samples/detail/*` |
| [src/components/site-header.tsx](src/components/site-header.tsx) tự implement menu desktop + mobile | `desktop-navigation.tsx`, `mobile-navigation.tsx` |
| Pagination viết inline trong các trang listing ([kien-thuc/kinh-nghiem-xay-nha/page.tsx:115-214](src/app/kien-thuc/kinh-nghiem-xay-nha/page.tsx#L115-L214)) | `article-pagination.tsx` |

**Danh sách đầy đủ 43 file** (kèm số dòng) — xem mục 5 để có lệnh xoá an toàn.

**Trước khi xoá cần quyết định 1 điều:** thế hệ 2 viết inline nên **khó bảo trì hơn** thế hệ 1 (thế hệ 1 tách component rõ ràng). Có 2 hướng:
- **Hướng A (nhanh, an toàn):** xoá 43 file chết. Chấp nhận inline.
- **Hướng B (tốt hơn về dài hạn):** giữ lại một số component thế hệ 1 làm nguồn tham chiếu, refactor `home-landing.tsx` / `*-showcase.tsx` để tái sử dụng chúng, rồi mới xoá phần còn lại.

Tao khuyến nghị **Hướng A trước** (dọn ngay, giảm 20% codebase), rồi Hướng B như một refactor riêng có test.

### 3.2 ✅ Những thứ KHÔNG phải dead code (đã kiểm tra, tránh xoá nhầm)

| Hạng mục | Kết luận |
|---|---|
| CSS modules | ✅ Cả 15 file đều được import — **không có CSS chết** |
| JSON trong `src/data/` | ✅ Cả 11 file đều được import (bởi `*-articles.ts` cùng thư mục) |
| Script trong `scripts/` | ✅ Cả 16 file đều có entry trong `package.json` — **không có script mồ côi** |
| npm dependencies | ✅ Tất cả đều được dùng (`dotenv` qua `import "dotenv/config"`, `mariadb` trong script transfer, `sharp` trong 2 script, `react-dom`/`typescript` là transitive/tooling) |
| `@prisma/client` | ⚠️ Không được import trực tiếp ở đâu. Prisma 7 generate client self-contained (chỉ cần `@prisma/client-runtime-utils`). **Cần xác minh thủ công** trước khi xoá — có thể `prisma generate` vẫn cần. |

### 3.3 142 ESLint warning — tập trung ở 18 file

Toàn bộ là `@typescript-eslint/no-unused-vars`, không có error:

| File | Warning | Loại |
|---|---|---|
| [src/app/admin/actions.ts](src/app/admin/actions.ts) | ~11 | Icon lucide import thừa |
| 12 trang `thi-cong-noi-that/*` | ~60 | Icon lucide + `ConsultationCta` import thừa |
| 5 trang `thiet-ke-noi-that/*` | ~30 | Icon lucide + `ConsultationCta` import thừa |
| Nhiều trang khác | ~40 | Icon lucide thừa |
| [src/components/home/aspiration-belief-section.tsx:2](src/components/home/aspiration-belief-section.tsx#L2) | 1 | `Link` thừa (file này chết) |

Đây là dấu hiệu rõ của việc AI thêm import icon rồi đổi hướng triển khai mà không dọn. Sửa bằng `eslint --fix` (an toàn) hoặc thủ công.

---

## 4. P2 — TRÙNG LẶP & KHẢ NĂNG BẢO TRÌ

### 4.1 🟠 19 trang copy-paste cùng một template · 2.099 LOC

19 trang chia sẻ chính xác cùng một cấu trúc, nhận diện bằng `type Feature = {`:

```
src/app/thi-cong-noi-that/{thi-cong-son-ba, thi-cong-tran-thach-cao, thi-cong-phan-tho,
  thi-cong-cai-tao, thi-cong-chung-cu, thi-cong-dien-nuoc, thi-cong-do-go,
  thi-cong-nha-pho, nhat-ki-thi-cong}          (9 trang)

src/app/thiet-ke-noi-that/{biet-thu, phong-bep, phong-ngu, phong-tre-em, tan-co-dien,
  thiet-ke-chung-cu, thiet-ke-khach-san, thiet-ke-nha-pho, thiet-ke-showroom,
  thong-minh}                                   (10 trang)
```

**Đo mức trùng lặp** giữa `thi-cong-son-ba` (118 dòng) và `thi-cong-tran-thach-cao` (115 dòng):
- 47/90 dòng unique **giống hệt nhau từng ký tự** (~52%).
- Phần khác biệt chỉ là: text tiêu đề, vài icon, nội dung mảng `Feature[]`.
- **Cấu trúc JSX, thứ tự section, logic, className giống nhau ~95%.**

```
$ diff <(sed 's/[0-9]//g' thi-cong-son-ba/page.tsx) <(sed 's/[0-9]//g' thi-cong-tran-thach-cao/page.tsx)
4a5   >   Award,
8,9c9 <   Droplets,  <   Factory,   ---  >   DollarSign,
...
```

**Đề xuất refactor:** tách 1 component `<ServiceLandingPage data={...} />` + 1 file config/page. Ước tính **2.099 LOC → ~200 LOC component + ~19 object config ngắn**. Rủi ro thấp (thuần presentational, dễ so sánh visual trước/sau).

### 4.2 🟠 `admin/actions.ts` — 1.540 dòng, hai nửa gần song song

File lớn nhất dự án. Phần Project và phần DesignSample gần như là bản sao của nhau:

| Phần Project | Phần DesignSample |
|---|---|
| `seedMockProjects` (360) | `seedMockDesignSamples` (433) |
| `replaceSeedProjectCollections` (647) | `replaceSeedDesignCollections` (1155) |
| `replaceSeedProjectRelations` (729) | `replaceSeedDesignRelations` (1270) |
| `readProjectSpaces` (767) | `readDesignGallery` (1308) |
| `defaultProjectMetrics` (876) | `defaultDesignMetrics` (1322) |
| `defaultProjectInfoRows` (905) | `defaultDesignInfoRows` (1351) |
| `syncProjectCollections` (553) | `syncDesignSampleCollections` (1026) |
| `appendUploadedProjectImages` (781) | `appendUploadedDesignSampleImages` (827) — **gần như identical** |

`appendUploadedProjectImages` và `appendUploadedDesignSampleImages` chỉ khác `collection: "projects"` vs `"design-samples"` và tên key form.

**Đề xuất:** tách thành `src/lib/admin/` với generic helpers (`upsertCollectionRows`, `appendUploadedImages(collection, ...)`). Mục tiêu: 1.540 → ~700 dòng.

### 4.3 🟠 Kiến trúc i18n có 4 pattern khác nhau, chuỗi phụ thuộc ngược

Hệ thống dịch hiện tại dùng khoá là **chuỗi tiếng Việt gốc**, với 4 cách tổ chức khác nhau:

| File | Khoá nguồn | Pattern |
|---|---|---|
| `home-japanese.ts` | Tiếng Việt | object phẳng |
| `home-english.ts` | Tiếng Việt | object phẳng |
| `home-additional.ts` | **Tiếng Việt** | mảng `Row` 7 cột (vi + 6 ngôn ngữ) |
| `navigation-english.ts` | Tiếng Việt | object phẳng |
| `navigation-japanese.ts` | Tiếng Việt | object phẳng |
| `navigation-additional.ts` | **Tiếng Anh** | mảng `Row` 7 cột (en + 6 ngôn ngữ) |
| `site-chrome-additional.ts` | — | object lồng theo locale |
| `consultation-additional.ts` | — | object lồng theo locale |

**Vấn đề 1 — phụ thuộc ngược giữa các ngôn ngữ:**

[src/data/home-english.ts:1-2](src/data/home-english.ts#L1-L2)
```ts
import { japaneseHomeText, ... } from "@/data/home-japanese";     // module tiếng Anh import module tiếng Nhật
import { additionalHomeText, ... } from "@/data/home-additional";
```

**Vấn đề 2 — chuỗi dịch không nhất quán:**
- Home: `vi → ko/sv/fr/ru/es/zh` (trực tiếp)
- Navigation: `vi → en → ko/sv/fr/ru/es/zh` (qua trung gian tiếng Anh)

⇒ Nếu đổi một nhãn tiếng Việt trong `site.ts`, navigation sẽ hỏng ở 6 ngôn ngữ (vì khoá `navigation-additional.ts` là tiếng Anh, phải khớp output của `navigation-english.ts`).

**Vấn đề 3 — hack string-replace làm fallback:**

[src/data/navigation-english.ts:65](src/data/navigation-english.ts#L65)
```ts
label: labels[item.label] ?? item.label.replace("Chung cư", "Apartment").replace("chung cư", "apartment"),
```
Đây là dấu hiệu rõ của việc vá tạm chưa được dọn.

**Đề xuất:** chuẩn hoá về **1 pattern duy nhất** — key là ID ổn định (không phải chuỗi hiển thị), mỗi locale 1 file dictionary, 1 hàm `t(locale, key)`. Đây là refactor lớn, nên làm riêng.

### 4.4 🟡 Coupling CSS chéo domain

[src/components/design-samples/detail/design-detail-showcase.tsx:25](src/components/design-samples/detail/design-detail-showcase.tsx#L25)
```ts
import styles from "@/components/projects/detail/project-detail-showcase.module.css";
```
Component mẫu thiết kế import CSS của module dự án. Nếu xoá/đổi tên file CSS dự án sẽ làm hỏng trang mẫu thiết kế.

### 4.5 🟡 Mock data vừa là fallback vừa là seed source

- [src/data/projects.ts](src/data/projects.ts) (441 dòng) và [src/data/design-samples.ts](src/data/design-samples.ts) (569 dòng).
- Được dùng làm: (a) fallback khi DB rỗng — `projects.length ? projects : sampleProjects`; (b) nguồn seed cho `seedMockProjects()`; (c) nguồn `generateStaticParams()`.

⇒ Sửa "dữ liệu mẫu" sẽ đồng thời đổi seed, đổi fallback, và đổi danh sách route tĩnh. Cần tách vai trò.

### 4.6 🟡 `contact-form.tsx` chỉ có tiếng Việt

[src/components/contact-form.tsx](src/components/contact-form.tsx) hardcode toàn bộ chuỗi tiếng Việt, trong khi `consultation-popup.tsx` hỗ trợ 9 ngôn ngữ. Trang `/lien-he` ở locale `en`/`ja` sẽ hiển thị form tiếng Việt.

### 4.7 🟡 Chất lượng định dạng code

| Chỉ số | Giá trị |
|---|---|
| Dòng dài > 300 ký tự | **320 dòng** |
| File tệ nhất | `src/data/home-additional.ts` (18 dòng), `contact-form.tsx:46` (313 ký tự) |
| Cấu hình Prettier | **Không có** |

Nhiều file viết toàn bộ JSX trên 1 dòng ([contact-form.tsx:46](src/components/contact-form.tsx#L46), dòng 61, 63) — rất khó review và diff.

### 4.8 🟡 Tài liệu lỗi thời

| File | Vấn đề |
|---|---|
| [README.md](README.md) | Vẫn là README mặc định của `create-next-app`. Nói dùng font **Geist**, thực tế dùng **Be Vietnam Pro**. |
| [sitemap.md](sitemap.md) | Bản đề xuất cũ. Ít nhất 8 route đề xuất không tồn tại: `/thiet-ke-noi-that/van-phong`, `/thi-cong-noi-that/van-phong`, `/xay-nha-tron-goi`, `/cai-tao-nha`, `/san-xuat-do-go`, `/tu-bep`, `/tu-quan-ao`, `/ke-tivi` |

---

## 5. P2 — CẤU HÌNH & VẬN HÀNH

### 5.1 🟠 Thiếu `.env.example`, nhiều biến môi trường không được tài liệu hoá

[.gitignore](.gitignore) có dòng `!.env.example` (cho phép commit) nhưng **file đó không tồn tại**. `.env` local chỉ có `DATABASE_URL`.

Các biến được code đọc nhưng không có trong `.env`:

| Nhóm | Biến | Nơi dùng |
|---|---|---|
| R2 | `R2_BUCKET`, `R2_ENDPOINT`, `R2_PUBLIC_BASE_URL`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_REGION`, `R2_KEY_PREFIX`, `R2_MAX_FILE_SIZE_BYTES` | [src/lib/r2-storage.ts](src/lib/r2-storage.ts) |
| SMTP | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_NOTIFICATION_FROM`, `CONTACT_NOTIFICATION_TO` | [src/app/api/contact/route.ts](src/app/api/contact/route.ts) |
| Site | `NEXT_PUBLIC_SITE_URL` | [src/lib/locale.ts:35](src/lib/locale.ts#L35) |

**Hệ quả:** `getConfig()` trong `r2-storage.ts:42` sẽ **throw** ngay khi upload ảnh ở môi trường thiếu biến. Dev mới clone repo sẽ không biết cần set gì.

### 5.2 🟠 `siteBaseUrl` trỏ về domain cũ

[src/lib/locale.ts:34-35](src/lib/locale.ts#L34-L35)
```ts
export const siteBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://toamhoanhaovn.vercel.app";
```

Fallback là domain **Vercel preview** (`toamhoanhaovn.vercel.app`), không phải `toamhoanhao.vn`. Nếu `NEXT_PUBLIC_SITE_URL` không được set trên production, **mọi canonical URL và `hreflang` sẽ trỏ sai domain** → Google index nhầm domain preview, mất SEO.

### 5.3 🟠 SEO: thiếu canonical, thiếu OpenGraph, thiếu sitemap/robots

| Hạng mục | Kết quả |
|---|---|
| Trang thiếu `canonical` | **54 / 58** (chỉ 4 trang chủ locale có) |
| Trang có `openGraph` | **0 / 58** |
| `metadataBase` | **Không có** |
| `src/app/sitemap.ts` | **Không có** |
| `src/app/robots.ts` | **Không có** |
| `public/robots.txt`, `public/sitemap.xml` | **Không có** |

Với một site marketing dựa vào chia sẻ mạng xã hội (Zalo/Facebook), việc **0 trang có OpenGraph** nghĩa là mọi link chia sẻ sẽ không có tiêu đề/mô tả/ảnh preview.

### 5.4 🟡 Cấu hình TypeScript lỗi thời

[tsconfig.json](tsconfig.json)
```json
"target": "ES2017",      // Next.js 16 + Node 20+ → nên là ES2022
"allowJs": true          // không cần thiết, dự án thuần TS
```

### 5.5 🟡 SQL dump trong git

| File | Tracked | Nội dung |
|---|---|---|
| `exports/toamhoanhao-2026-09-24.sql` (3,7 MB) | ⚠️ **CÓ** | Schema-only, chỉ bảng `_prisma_migrations` — không có PII |
| `exports/toamhoanhao-2026-10-08.sql` (3,7 MB) | ✅ Không (đã ignore) | — |

File cũ được commit ở `0f34c40` **trước khi** rule `/exports/*.sql` được thêm vào `.gitignore`. `.gitignore` không có tác dụng với file đã tracked. Không rò rỉ dữ liệu (đã kiểm tra kỹ), nhưng nên `git rm --cached` để dọn.

### 5.6 🟡 Không có CI gate

Dự án có 142 ESLint warning nhưng không có workflow nào (không có `.github/workflows/`) để chặn warning/error khi merge. Nên thêm pipeline chạy `tsc --noEmit`, `eslint`, `next build`.

### 5.7 🟡 Trang `/bao-gia` không tồn tại

`src/app/bao-gia/` có `pricing-overview.module.css` nhưng **không có `page.tsx`** ⇒ truy cập `/bao-gia` trả 404.

Kiểm tra link: **không có link gãy** — mục "Báo giá" trên menu là node cha không có `href`, chỉ có 2 con ([src/data/site.ts:58-69](src/data/site.ts#L58-L69)). Nên vấn đề chỉ là UX (thiếu trang tổng hợp), không phải bug. Cân nhắc thêm `page.tsx` hoặc redirect về `/bao-gia/thiet-ke-thi-cong-noi-that`.

---

## 6. Kế hoạch dọn dẹp an toàn

### Nguyên tắc

1. **Mỗi bước là 1 commit riêng** để revert độc lập.
2. **Gate bắt buộc sau mỗi bước:** `npx tsc --noEmit` (0 lỗi) + `npm run build` (pass) + so sánh `git status`.
3. **Không gộp** thay đổi hành vi với thay đổi dọn dẹp.
4. Với thay đổi ảnh hưởng render: chụp ảnh trước/sau các trang chủ chốt.

### Giai đoạn 1 — Bảo mật (làm ngay, độc lập với mọi thứ khác)

| # | Việc | Rủi ro | Kiểm chứng |
|---|---|---|---|
| 1.1 | Chặn `/admin` ở tầng hạ tầng (Vercel/Cloudflare) | Không (cấu hình ngoài) | Truy cập `/admin` từ ngoài → bị chặn |
| 1.2 | Thêm `requireAdmin()` + gọi ở đầu **mọi** server action | Thấp | Gọi action khi chưa login → throw/redirect |
| 1.3 | Thêm auth check ở `src/app/admin/layout.tsx` | Thấp | Truy cập `/admin` khi chưa login → redirect |
| 1.4 | Sửa rò rỉ lỗi ở `contact/route.ts:58` | Không | Gửi mail lỗi → client nhận thông báo chung |
| 1.5 | Escape HTML input trong email liên hệ | Thấp | Gửi `name=<b>x</b>` → email hiển thị literal |
| 1.6 | Thêm rate limit + Turnstile cho `/api/contact` | Thấp | Gọi 20 lần/phút → bị chặn |
| 1.7 | Thêm `src/app/robots.ts` disallow `/admin`, `/api` | Không | `curl /robots.txt` |

### Giai đoạn 2 — Performance (giá trị cao nhất / công sức thấp nhất)

| # | Việc | Rủi ro | Kiểm chứng |
|---|---|---|---|
| 2.1 | **Bỏ `await headers()` ở `src/app/layout.tsx:37`** | **Trung bình** — ảnh hưởng `lang` + locale popup | Build phải cho thấy route chuyển ○/●. Test `lang` attr + popup ở `/en`, `/ja`, `/ko` |
| 2.2 | Bỏ `await connection()` ở `public-content.ts` | Trung bình | Build + so sánh nội dung trang |
| 2.3 | Thêm `revalidate` (ISR) cho trang nội dung | Thấp | Sửa nội dung trong admin → xuất hiện sau revalidate |
| 2.4 | Thêm `select` + `take/skip` cho query listing | Thấp | So sánh render listing trước/sau |
| 2.5 | Sửa `Promise.all` → `allSettled` trong `uploadR2Images` | Thấp | Upload 3 file, 1 file lỗi → không còn object mồ côi |
| 2.6 | Thêm `loading.tsx` / `error.tsx` / `not-found.tsx` | Thấp | Truy cập URL sai → trang 404 tùy chỉnh |

> ⚠️ **2.1 là thay đổi có đòn bẩy lớn nhất trong toàn bộ báo cáo** (41 route / ~460 trang). Nhưng nó chạm vào cơ chế locale, nên phải test kỹ 9 ngôn ngữ trước khi merge.

### Giai đoạn 3 — Xoá code chết

| # | Việc | Rủi ro | Kiểm chứng |
|---|---|---|---|
| 3.1 | Xoá 43 file unreachable | **Thấp** (đã chứng minh không có đường import) | `tsc` + `build` + so sánh HTML các trang chủ chốt |
| 3.2 | `eslint --fix` dọn 142 warning unused-vars | Thấp | `build` + so sánh render |
| 3.3 | Xoá 104 ảnh mồ côi (5,8 MB) | Thấp | `build` + so sánh ảnh trên các trang |
| 3.4 | `git rm --cached exports/toamhoanhao-2026-09-24.sql` | Không | `git status` |

**Lệnh xoá 43 file chết (chạy từ repo root):**

```bash
# Xem trước danh sách
cat <<'EOF'
src/components/article-pagination.tsx
src/components/design-samples/design-category-section.tsx
src/components/design-samples/design-listing-section.tsx
src/components/design-samples/design-sample-card.tsx
src/components/design-samples/design-samples-hero.tsx
src/components/design-samples/design-stats-section.tsx
src/components/design-samples/detail/design-detail-hero.tsx
src/components/design-samples/detail/design-detail-metrics.tsx
src/components/design-samples/detail/design-features-section.tsx
src/components/design-samples/detail/design-floor-plan-section.tsx
src/components/design-samples/detail/design-gallery-section.tsx
src/components/design-samples/detail/design-overview-section.tsx
src/components/design-samples/detail/design-packages-section.tsx
src/components/design-samples/detail/design-story-section.tsx
src/components/design-samples/detail/related-design-samples-section.tsx
src/components/design-samples/featured-design-collection.tsx
src/components/design-samples/popular-design-styles.tsx
src/components/desktop-navigation.tsx
src/components/home/about-strip.tsx
src/components/home/aspiration-belief-section.tsx
src/components/home/construction-dossier-carousel.tsx
src/components/home/construction-records-section.tsx
src/components/home/customer-video-consultation-section.tsx
src/components/home/featured-work-section.tsx
src/components/home/hero-section.tsx
src/components/home/services-section.tsx
src/components/home/testimonials-section.tsx
src/components/home/work-process-section.tsx
src/components/mobile-navigation.tsx
src/components/projects/content-library-card.tsx
src/components/projects/detail/project-design-story-section.tsx
src/components/projects/detail/project-detail-hero.tsx
src/components/projects/detail/project-detail-metrics.tsx
src/components/projects/detail/project-floor-plan-section.tsx
src/components/projects/detail/project-overview-section.tsx
src/components/projects/detail/related-projects-section.tsx
src/components/projects/featured-project-section.tsx
src/components/projects/project-card.tsx
src/components/projects/project-sidebar.tsx
src/components/projects/project-stats-section.tsx
src/components/projects/projects-hero.tsx
src/components/projects/projects-listing-section.tsx
src/lib/relative-time.ts
EOF
```

> ⚠️ Trước khi xoá, chạy lại kiểm tra reachability để chắc chắn không có thay đổi mới. Nếu bạn chọn **Hướng B** (mục 3.1), giữ lại thế hệ 1 làm nguồn refactor.

### Giai đoạn 4 — Cấu hình & SEO

| # | Việc | Rủi ro | Kiểm chứng |
|---|---|---|---|
| 4.1 | Tạo `.env.example` đầy đủ 16 biến | Không | — |
| 4.2 | Set `NEXT_PUBLIC_SITE_URL=https://toamhoanhao.vn` trên production | Không | `curl` kiểm tra canonical |
| 4.3 | Thêm `metadataBase` + OpenGraph mặc định ở root layout | Thấp | Kiểm tra thẻ `og:*` trong HTML |
| 4.4 | Thêm canonical cho 54 trang còn thiếu | Thấp | Kiểm tra HTML |
| 4.5 | Thêm `src/app/sitemap.ts` | Thấp | `curl /sitemap.xml` |
| 4.6 | Thêm security headers vào `next.config.ts` | Trung bình (CSP dễ gây lỗi) | Test toàn site sau khi deploy |
| 4.7 | `target: ES2022`, bỏ `allowJs` | Thấp | `tsc` |
| 4.8 | Thêm Prettier + format lại | Thấp nhưng diff lớn | Build |
| 4.9 | Cập nhật README, dọn `sitemap.md` | Không | — |
| 4.10 | Thêm CI workflow | Không | Pipeline xanh |

### Giai đoạn 5 — Refactor (giá trị dài hạn, cần thời gian)

| # | Việc | Lợi ích ước tính |
|---|---|---|
| 5.1 | Gom 19 trang template → `<ServiceLandingPage>` + config | −1.900 LOC |
| 5.2 | Tách `admin/actions.ts` thành module generic | 1.540 → ~700 dòng |
| 5.3 | Thống nhất i18n về 1 pattern (key = ID) | Loại bỏ chuỗi phụ thuộc ngược + hack replace |
| 5.4 | Chuyển ảnh bài viết sang R2 | Repo 150 MB → vài MB |
| 5.5 | Tách vai trò mock data (fallback / seed / static params) | Giảm rủi ro sửa nhầm |

---

## 7. Thứ tự ưu tiên đề xuất

```
NGAY LẬP TỨC   ──  1.1 → 1.2 → 1.3      (chặn lỗ hổng admin)
               ──  1.4 → 1.5 → 1.7      (vá rò rỉ + robots)

TUẦN NÀY       ──  2.1                    (mở khoá static rendering — đòn bẩy lớn nhất)
               ──  3.1 → 3.2 → 3.4      (xoá 4.324 LOC chết, dọn warning)

TUẦN SAU       ──  2.2 → 2.6, 4.1 → 4.6  (performance + SEO + config)

KHI CÓ THỜI GIAN ── 5.1 → 5.5             (refactor cấu trúc)
```

---

## 8. Phụ lục — Phương pháp & kiểm chứng

| Phân tích | Cách làm |
|---|---|
| Dead code | Phân tích reachability trên đồ thị import, xuất phát từ 62 entry point theo convention Next.js. Xử lý đúng trường hợp file chết import lẫn nhau. |
| Dynamic rendering | Build production thật (`rm -rf .next && npm run build`), đọc bảng route + đếm file prerender trong `.next/server/app`. |
| Nguyên nhân dynamic | **Thực nghiệm có kiểm soát**: sửa 1 dòng → build → đo → **hoàn nguyên** → build lại → xác minh khớp ban đầu (60 route dynamic) và `git status` sạch. |
| Trùng lặp trang | `diff` + đếm dòng unique chung (`comm`) giữa các cặp trang cùng nhóm. |
| Ảnh mồ côi | Trích toàn bộ chuỗi `/images/...` từ `src/`, `comm -23` với danh sách file thật trong `public/images`. |
| Bảo mật | grep có mục tiêu (`auth\|session\|cookie\|password\|token\|login\|isAdmin`), kiểm tra git history (`git log --all --name-only`), đọc thủ công toàn bộ `actions.ts`, `r2-storage.ts`, `contact/route.ts`, `proxy.ts`. |
| Secrets | `git log --all --diff-filter=A --name-only`, kiểm tra nội dung SQL dump, kiểm tra `NEXT_PUBLIC_*`. |

**Trạng thái repo sau audit:** `git status` sạch, không file nào bị sửa, build cho kết quả khớp chính xác trạng thái ban đầu (60 route dynamic).
