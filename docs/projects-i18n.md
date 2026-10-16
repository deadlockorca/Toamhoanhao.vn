# Đa ngôn ngữ Dự án

Phạm vi: `/du-an`, bộ lọc nội dung/danh mục/phong cách/diện tích/phòng ngủ, danh mục diện tích từ menu, và 296 dự án có trạng thái `published` trong DB tại thời điểm kiểm tra. Các ngôn ngữ: `vi`, `en`, `ja`, `ko`, `sv`, `fr`, `ru`, `es`, `zh`.

## Dữ liệu

Tiếng Việt tiếp tục lấy từ DB. Bản dịch nằm trong `src/data/project-translations.json`; lớp hiển thị là `src/data/projects-localized.ts`. Các chuỗi giao diện dùng chung với Mẫu thiết kế được tái sử dụng, còn nhãn riêng của Dự án được giới hạn trong `project-ui-keys.json` trước khi gửi sang component danh sách phía client.

Slug, danh mục dùng cho lọc, diện tích, năm, trạng thái, thứ tự và địa chỉ ảnh gốc giữ nguyên. Nhãn hiển thị được dịch riêng; việc lọc danh mục diện tích vẫn chạy trên dữ liệu gốc. Danh sách Dự án còn cho phép chuyển sang Mẫu thiết kế nên các thẻ mẫu cũng dùng bản dịch đã có và liên kết theo locale.

Bản dịch đi cùng Git, không cần migration DB. Không có thay đổi VPS/deploy trong công việc này.

## URL và SEO

- Tiếng Việt dùng `/du-an` và `/du-an/[slug]`; các bản khác có tiền tố locale.
- Header giữ đường dẫn dự án hiện tại. Ở danh sách, query danh mục, khoảng diện tích và trang được truyền sang bộ đổi ngôn ngữ.
- Canonical bỏ query. Hreflang và sitemap chỉ khai báo ngôn ngữ có đủ nội dung dịch.
- Mẫu mới/sửa nhưng thiếu bản dịch vẫn có ở tiếng Việt; danh sách/sitemap ngoại ngữ loại bản thiếu và URL chi tiết ngoại ngữ trả 404. Không tự động dùng tiếng Việt dưới URL ngoại ngữ.
- Bản nháp, slug không có, locale không hỗ trợ và `/vi/du-an` trả 404.

## Quy trình cập nhật

1. Sửa dữ liệu tiếng Việt trong admin.
2. Chạy `npm run audit:i18n:projects` để tìm các chuỗi mới hoặc vừa đổi.
3. Bổ sung đủ tám bản dịch. Giữ tên riêng, địa chỉ, số liệu, ngày tháng, giá trị còn che bằng `x` và đơn vị tiền gốc; không quy đổi tiền tệ.
4. Chạy TypeScript/ESLint và audit. Có thể kiểm tra HTML bằng `npm run audit:i18n:projects -- --base-url=http://localhost:3000`. Mặc định HTTP dùng các dự án đại diện cho mọi danh mục và các cấu trúc nội dung khác nhau; thêm `--all-pages` để quét toàn bộ URL.
5. Commit file dịch cùng thay đổi rồi triển khai theo quy trình hiện tại.

## Giới hạn biên tập

Các nhãn chính, tiêu đề dự án, tên riêng và các đoạn dùng chung được chuẩn hóa riêng. Mô tả dài được tạo bản nháp bằng mô hình dịch M2M100 chạy cục bộ, cần người bản ngữ duyệt trước khi coi là hoàn tất biên tập. Kiểm tra kỹ thuật không thay thế duyệt câu chữ. Chữ nằm sẵn trong ảnh gốc giữ nguyên.

Dữ liệu nguồn nhập từ website cũ có các trường lẫn phong cách/chi phí/mô tả và có cả nội dung thử nghiệm đang mang trạng thái published. Đợt này không sửa trạng thái hoặc biên tập lại dữ liệu gốc. Việc dịch giữ nội dung nguồn; các mục nguồn này cần được duyệt riêng trong admin.

Kết quả kiểm tra: `docs/i18n-inventory/projects-verification.json`. Không kiểm tra tương tác hoặc bố cục bằng trình duyệt theo yêu cầu trước đó.
