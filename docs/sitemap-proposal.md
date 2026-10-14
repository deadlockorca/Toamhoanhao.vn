# Sitemap đề xuất cho Toamhoanhao.vn

> **Tài liệu lịch sử — không phải cấu trúc đang chạy.**
>
> Đây là bản đề xuất cấu trúc site từ giai đoạn đầu. Cấu trúc thực tế đã khác:
> một số nhánh dưới đây chưa được xây (ví dụ `/xay-nha-tron-goi`, `/cai-tao-nha`,
> `/san-xuat-do-go`, `/tu-bep`, `/thiet-ke-noi-that/van-phong`), và nhiều trang
> đang chạy không có trong bản này.
>
> Nguồn chính xác về URL hiện tại:
>
> - `src/app/**/page.tsx` — route thật
> - [`src/app/sitemap.ts`](../src/app/sitemap.ts) — sitemap.xml sinh tự động
>
> Giữ lại file này như danh sách ý tưởng cho các nhánh chưa triển khai.

```txt
TOAMHOANHAO.VN
├── Trang chủ
│
├── Giới thiệu
│   ├── Về Tổ Ấm Hoàn Hảo
│   ├── Năng lực thiết kế và thi công
│   ├── Đội ngũ kiến trúc sư
│   ├── Xưởng sản xuất nội thất
│   └── Tuyển dụng
│
├── Dịch vụ
│   ├── Thiết kế nội thất
│   │   ├── Thiết kế nội thất chung cư
│   │   ├── Thiết kế nội thất nhà phố
│   │   ├── Thiết kế nội thất biệt thự
│   │   ├── Thiết kế nội thất văn phòng
│   │   └── Thiết kế nội thất showroom, cửa hàng
│   │
│   ├── Thi công nội thất
│   │   ├── Thi công nội thất chung cư
│   │   ├── Thi công nội thất nhà phố
│   │   ├── Thi công nội thất biệt thự
│   │   ├── Thi công nội thất văn phòng
│   │   └── Thi công đồ gỗ nội thất
│   │
│   ├── Xây nhà trọn gói
│   │   ├── Xây nhà phố trọn gói
│   │   ├── Xây biệt thự trọn gói
│   │   ├── Thi công phần thô
│   │   └── Hoàn thiện nhà
│   │
│   ├── Cải tạo nhà
│   │   ├── Cải tạo chung cư
│   │   ├── Cải tạo nhà phố
│   │   ├── Cải tạo biệt thự
│   │   └── Cải tạo văn phòng, cửa hàng
│   │
│   └── Sản xuất đồ gỗ nội thất
│       ├── Tủ bếp
│       ├── Tủ quần áo
│       ├── Kệ tivi
│       ├── Giường ngủ
│       └── Nội thất đặt đóng theo yêu cầu
│
├── Báo giá
│   ├── Báo giá thiết kế nội thất
│   ├── Báo giá thi công nội thất
│   ├── Báo giá xây nhà trọn gói
│   ├── Báo giá thi công phần thô
│   ├── Báo giá hoàn thiện nhà
│   └── Báo giá đồ gỗ nội thất
│
├── Dự án
│   ├── Tất cả dự án
│   ├── Căn hộ
│   ├── Biệt thự
│   ├── Nhà phố
│   ├── Văn phòng
│   └── Không gian kinh doanh
│       ├── Quán cafe
│       ├── Showroom
│       ├── Spa
│       └── Nhà hàng / khách sạn
│
├── Mẫu thiết kế
│   ├── Tất cả mẫu thiết kế
│   ├── Mẫu thiết kế nội thất chung cư
│   ├── Mẫu thiết kế nhà phố
│   ├── Mẫu thiết kế biệt thự
│   ├── Mẫu phòng khách
│   ├── Mẫu phòng ngủ
│   ├── Mẫu phòng bếp
│   ├── Mẫu tủ bếp
│   └── Mẫu phòng trẻ em
│
├── Kiến thức
│   ├── Kinh nghiệm xây nhà
│   ├── Kinh nghiệm thiết kế nội thất
│   ├── Kinh nghiệm thi công nội thất
│   ├── Pháp lý xây dựng
│   ├── Vật liệu nội thất
│   ├── Phong thủy nhà ở
│   └── Chi tiết bài viết
│
├── Công cụ
│   └── Thước lỗ ban
│
└── Liên hệ
    ├── Thông tin liên hệ
    ├── Form tư vấn
    ├── Bản đồ
    └── Kênh mạng xã hội
```

## URL đề xuất

```txt
/
/gioi-thieu
/gioi-thieu/doi-ngu
/gioi-thieu/xuong-san-xuat
/gioi-thieu/tuyen-dung

/dich-vu
/dich-vu/thiet-ke-noi-that
/dich-vu/thiet-ke-noi-that/chung-cu
/dich-vu/thiet-ke-noi-that/nha-pho
/dich-vu/thiet-ke-noi-that/biet-thu
/dich-vu/thiet-ke-noi-that/van-phong
/dich-vu/thiet-ke-noi-that/showroom-cua-hang
/dich-vu/thi-cong-noi-that
/dich-vu/thi-cong-noi-that/chung-cu
/dich-vu/thi-cong-noi-that/nha-pho
/dich-vu/thi-cong-noi-that/biet-thu
/dich-vu/thi-cong-noi-that/van-phong
/dich-vu/thi-cong-do-go-noi-that
/dich-vu/xay-nha-tron-goi
/dich-vu/xay-nha-tron-goi/nha-pho
/dich-vu/xay-nha-tron-goi/biet-thu
/dich-vu/thi-cong-phan-tho
/dich-vu/hoan-thien-nha
/dich-vu/cai-tao-nha
/dich-vu/cai-tao-nha/chung-cu
/dich-vu/cai-tao-nha/nha-pho
/dich-vu/cai-tao-nha/biet-thu
/dich-vu/cai-tao-nha/van-phong-cua-hang
/dich-vu/san-xuat-do-go-noi-that

/bao-gia
/bao-gia/thiet-ke-noi-that
/bao-gia/thi-cong-noi-that
/bao-gia/xay-nha-tron-goi
/bao-gia/thi-cong-phan-tho
/bao-gia/hoan-thien-nha
/bao-gia/do-go-noi-that

/du-an
/du-an/can-ho
/du-an/biet-thu
/du-an/nha-pho
/du-an/van-phong
/du-an/khong-gian-kinh-doanh
/du-an/khong-gian-kinh-doanh/quan-cafe
/du-an/khong-gian-kinh-doanh/showroom
/du-an/khong-gian-kinh-doanh/spa
/du-an/khong-gian-kinh-doanh/nha-hang-khach-san
/du-an/[slug]

/mau-thiet-ke
/mau-thiet-ke/noi-that-chung-cu
/mau-thiet-ke/nha-pho
/mau-thiet-ke/biet-thu
/mau-thiet-ke/phong-khach
/mau-thiet-ke/phong-ngu
/mau-thiet-ke/phong-bep
/mau-thiet-ke/tu-bep
/mau-thiet-ke/phong-tre-em

/kien-thuc
/kien-thuc/kinh-nghiem-xay-nha
/kien-thuc/kinh-nghiem-thiet-ke-noi-that
/kien-thuc/kinh-nghiem-thi-cong-noi-that
/kien-thuc/phap-ly-xay-dung
/kien-thuc/vat-lieu-noi-that
/kien-thuc/phong-thuy-nha-o
/kien-thuc/[slug]

/cong-cu/thuoc-lo-ban
/lien-he
```

## Ghi chú triển khai

- Tên trang trong giao diện dùng tiếng Việt có dấu.
- URL thực tế nên dùng tiếng Việt không dấu, chữ thường, ngăn cách bằng dấu gạch ngang.
- Không đưa trang test, trang cảm ơn form, tag mỏng nội dung, category rác vào sitemap XML.
- Các URL cũ còn traffic hoặc backlink cần redirect 301 sang trang mới tương ứng.
- Các khối nội dung trong Trang chủ như Dịch vụ chính, Dự án tiêu biểu, Mẫu thiết kế nổi bật, Quy trình làm việc, Xưởng sản xuất, Báo giá nhanh, Liên hệ tư vấn là section của homepage, không tính là page con trong sitemap.
