# Đa ngôn ngữ mẫu thiết kế

Phạm vi: `/mau-thiet-ke`, các bộ lọc/danh mục/chủ đề, và 71 mẫu đang xuất bản trong DB tại thời điểm kiểm tra. Hỗ trợ `vi`, `en`, `ja`, `ko`, `sv`, `fr`, `ru`, `es`, `zh`. Dự án `/du-an` chưa thuộc đợt này.

## Dữ liệu và triển khai

- Tiếng Việt vẫn lấy từ DB; không sửa nội dung, ảnh, thứ tự hay trạng thái xuất bản của bản gốc.
- Bản dịch nằm trong `src/data/design-sample-translations.json`, dùng chuỗi nguồn chính xác làm khóa. Bản dịch được đưa lên VPS cùng Git, không cần migration hoặc ghi lại DB.
- `src/data/design-samples-localized.ts` tạo bản hiển thị theo ngôn ngữ. Slug, mã danh mục, diện tích và địa chỉ ảnh giữ nguyên; nhãn danh mục được dịch khi hiển thị để bộ lọc vẫn hoạt động.
- `design-sample-ui-keys.json` giới hạn các chuỗi gửi sang component danh sách phía client. Nội dung dịch của toàn bộ mẫu không bị gửi vào component danh sách.
- URL gốc dùng tiếng Việt; các bản khác có tiền tố `/en`, `/ja`, v.v. Slug mẫu không đổi. Header giữ query danh mục/chủ đề/phân trang nhận từ URL khi đổi ngôn ngữ.
- Canonical không gồm query; hreflang và sitemap chỉ khai báo các bản có đủ nội dung dịch. Slug không có, bản nháp, locale không hỗ trợ và tiền tố `/vi` trả 404.

## Khi thêm hoặc sửa mẫu trong admin

1. Chạy `npm run audit:i18n:design-samples` với DB tương ứng để tìm chuỗi chưa dịch.
2. Bổ sung đủ tám bản dịch cho những chuỗi nguồn mới hoặc vừa sửa. Giữ nguyên tên riêng, số liệu, đơn vị và ý nghĩa gốc; không thay chuỗi nguồn để khớp bản dịch cũ.
3. Chạy lại audit và TypeScript/ESLint. Có thể kiểm tra HTML bằng `npm run audit:i18n:design-samples -- --base-url=http://localhost:3000`.
4. Commit file dịch cùng thay đổi. Mẫu mới hoặc mẫu đã sửa nhưng chưa đủ bản dịch vẫn hiển thị tiếng Việt; bản dịch thiếu bị loại khỏi danh sách/sitemap ngôn ngữ đó và trang chi tiết tương ứng trả 404, tránh âm thầm hiển thị tiếng Việt dưới URL ngoại ngữ.

## Mức độ rà soát

Bản tiếng Anh đã được biên tập thủ công. Bảy ngôn ngữ còn lại được tạo nháp bằng mô hình dịch cục bộ M2M100; tiêu đề của toàn bộ 71 mẫu, nhãn chính, thông số và chú thích ảnh lặp lại đã được chỉnh riêng. Các đoạn mô tả dài vẫn cần người bản ngữ duyệt; chưa coi đây là chứng nhận biên tập bản ngữ.

Audit kiểm tra độ phủ, tính bất biến của dữ liệu gốc/ảnh, số liệu giữa các bản dịch, điều hướng, SEO, và tùy chọn HTTP. Kết quả được ghi ở `docs/i18n-inventory/design-samples-verification.json`; kiểm tra trên trình duyệt không thực hiện theo yêu cầu. Chữ nằm sẵn trong ảnh gốc giữ nguyên.

Một số nội dung nguồn đã có danh mục hoặc số đo không thống nhất giữa tiêu đề và mô tả (ví dụ mẫu phòng ngủ được gán danh mục phòng khách, hoặc tiêu đề 70m² nhưng mô tả 72m²). Đợt này giữ dữ liệu gốc; cần biên tập nguồn riêng trước khi đồng bộ lại bản dịch.
