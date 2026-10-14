# Toamhoanhao.vn

Website thiết kế, thi công và sản xuất nội thất trọn gói.

## Stack

| Thành phần | Công nghệ |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4, CSS Modules |
| Ngôn ngữ | TypeScript 5 (strict) |
| Dữ liệu | Prisma 7 + MariaDB |
| Lưu ảnh | Cloudflare R2 (qua AWS S3 SDK) |
| Email | nodemailer (SMTP) |

## Bắt đầu

### 1. Cài phụ thuộc

```bash
npm install
```

`postinstall` sẽ tự chạy `prisma generate`.

### 2. Cấu hình môi trường

```bash
cp .env.example .env
```

Mở `.env` và điền giá trị thật. Xem chú thích trong [.env.example](.env.example)
để biết biến nào bắt buộc:

- `DATABASE_URL` — bắt buộc, thiếu thì ứng dụng thoát ngay khi khởi động.
- `NEXT_PUBLIC_SITE_URL` — dùng cho canonical, hreflang và OpenGraph.
- Nhóm `R2_*` — bắt buộc nếu dùng tính năng tải ảnh trong `/admin`.
- Nhóm `SMTP_*` — bắt buộc nếu dùng form liên hệ.

### 3. Khởi động database local

```bash
npm run db:start   # MariaDB ở cổng 3307
npm run db:migrate # áp dụng migration
npm run db:stop    # dừng khi cần
```

### 4. Chạy dev server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Script

### Phát triển

| Lệnh | Việc |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Build production |
| `npm run start` | Chạy bản production đã build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Kiểm tra TypeScript (`tsc --noEmit`) |

### Kiểm tra chất lượng

| Lệnh | Việc |
| --- | --- |
| `npm run audit:dead-code` | Tìm file không thể tiếp cận từ entry point (phân tích đồ thị import). Thoát mã 1 nếu có file chết. |
| `npm run audit:orphan-assets` | Tìm ảnh trong `public/` không được tham chiếu ở đâu. Thoát mã 1 nếu có. |

Hai lệnh này dùng được làm CI gate. Nên chạy trước khi mở PR để không tái tích tụ
code chết.

### Dữ liệu

| Lệnh | Việc |
| --- | --- |
| `npm run import:old-site` | Nhập asset từ site cũ |
| `npm run import:sample-projects` | Nhập dự án mẫu |
| `npm run import:design-samples` | Nhập mẫu thiết kế |
| `npm run audit:projects` | Kiểm tra mức độ sẵn sàng của dữ liệu dự án |
| `npm run pipeline:projects-r2` | Đẩy ảnh dự án lên R2 |
| `npm run pipeline:design-samples-r2` | Đẩy ảnh mẫu thiết kế lên R2 |
| `npm run transfer:local-to-vps` | Chuyển dữ liệu local lên VPS |

> Các script `import:*`, `reclassify:*`, `scan:webp`, `prune:*` là công cụ nhập
> liệu một lần cho lần di trú site cũ. Giữ lại để tham chiếu, không cần chạy định kỳ.

## Cấu trúc

```
src/
├── app/                     # App Router
│   ├── layout.tsx           # Root layout (tĩnh — xem ghi chú bên dưới)
│   ├── sitemap.ts           # Sinh sitemap.xml
│   ├── robots.ts            # Sinh robots.txt
│   ├── admin/               # Khu vực quản trị + server actions
│   ├── api/contact/         # Endpoint nhận yêu cầu tư vấn
│   ├── [locale]/            # Trang chủ cho ko, sv, fr, ru, es, zh
│   └── <nhóm dịch vụ>/      # Trang dịch vụ, bài viết, báo giá
├── components/
│   ├── home/                # Khối giao diện trang chủ
│   ├── projects/            # Danh sách và chi tiết dự án
│   ├── design-samples/      # Danh sách và chi tiết mẫu thiết kế
│   └── portfolio/           # Component listing dùng chung
├── data/                    # Nội dung tĩnh (bài viết, menu, bản dịch)
├── lib/                     # Prisma, R2, i18n, mapper, truy vấn công khai
└── generated/prisma/        # Prisma client sinh tự động (không commit)
```

### Vì sao root layout phải tĩnh

`src/app/layout.tsx` **không được** dùng `headers()`, `cookies()` hay bất kỳ
dynamic API nào. Những API này khiến Next.js chuyển toàn bộ cây route sang chế
độ render theo yêu cầu — đã từng khiến cả 60 route thành dynamic và không trang
nào được prerender, kể cả hàng trăm trang bài viết tĩnh.

`lang` cho các ngôn ngữ khác được đặt bằng script `beforeInteractive` trong
layout. Nếu cần thêm hành vi phụ thuộc request, hãy đặt nó trong `proxy.ts`
riêng thay vì root layout.

### Bảo mật

- `/admin` hiện **chưa có xác thực** ở tầng ứng dụng. Cần bổ sung trước khi coi
  là an toàn; chặn ở tầng hạ tầng (Vercel/Cloudflare) chỉ là biện pháp tạm thời.
- `robots.txt` chặn `/admin` chỉ để tránh index, **không phải** biện pháp bảo mật.
- Không commit `.env`. `.gitignore` đã chặn `.env*` và chỉ cho phép `.env.example`.
