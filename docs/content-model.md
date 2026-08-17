# Content Model

Tài liệu này chuẩn hóa dữ liệu cho các phần sẽ quản trị bằng admin sau này. Mục tiêu là frontend, form admin và Prisma schema cùng bám một cấu trúc.

## Nguyên tắc chung

- `slug` là định danh trên URL, duy nhất trong từng loại nội dung.
- `status` dùng để ẩn/hiện nội dung: `draft` hoặc `published`.
- Ảnh nên lưu thành URL/path trong giai đoạn đầu; sau này có thể nối với bảng `Media`.
- Các nhóm lặp như gallery, gói triển khai, block câu chuyện nên tách thành bảng riêng khi làm Prisma.
- Các field hiển thị nhanh trên card/listing nên nằm ở bảng chính để load danh sách nhẹ hơn.

## Dự Án

Route frontend:

```txt
/du-an
/du-an/[slug]
```

### Bảng Chính: Project

| Field | Kiểu | Bắt buộc | Dùng ở đâu | Ghi chú |
| --- | --- | --- | --- | --- |
| `id` | string/int | Có | Admin, database | Khóa chính |
| `title` | string | Có | Card, detail, SEO | Ví dụ: `Căn hộ The Matrix One` |
| `slug` | string | Có | URL | Ví dụ: `can-ho-the-matrix-one` |
| `category` | enum | Có | Filter, card, detail | `Căn hộ`, `Biệt thự`, `Nhà phố`, `Văn phòng`, `Nội thất trọn gói` |
| `location` | string | Có | Card, detail | Ví dụ: `Hà Nội` |
| `area` | string | Có | Card, detail | Giữ dạng text: `120m²` |
| `year` | string | Có | Detail | Năm hoàn thiện hoặc năm triển khai |
| `style` | string | Có | Card, detail | Ví dụ: `Modern Luxury` |
| `thumbnail` | string | Có | Card/listing | Ảnh đại diện |
| `summary` | text | Có | Card, featured, metadata fallback | Mô tả ngắn |
| `featured` | boolean | Không | Trang chủ, dự án tiêu biểu | Mặc định `false` |
| `sortOrder` | int | Không | Admin/listing | Dùng để sắp xếp thủ công |
| `status` | enum | Có | Public/admin | `draft`, `published` |
| `publishedAt` | datetime | Không | SEO/sắp xếp | Có thể null nếu draft |
| `createdAt` | datetime | Có | Admin | Tự sinh |
| `updatedAt` | datetime | Có | Admin | Tự cập nhật |

### Chi Tiết: ProjectDetail

| Field | Kiểu | Bắt buộc | Dùng ở đâu | Ghi chú |
| --- | --- | --- | --- | --- |
| `projectId` | relation | Có | Database | Liên kết `Project` |
| `eyebrow` | string | Có | Hero detail | Ví dụ: `Dự án căn hộ` |
| `displayTitle` | string | Có | Hero detail | Dòng chính: `Căn hộ` |
| `italicTitle` | string | Có | Hero detail | Dòng nghiêng: `The Matrix One` |
| `heroImage` | string | Có | Hero detail | Ảnh banner |
| `description` | text | Có | Hero detail | Mô tả mở đầu |
| `bedrooms` | string | Không | Hero/info | Ví dụ: `2 phòng ngủ` |
| `bathrooms` | string | Không | Info | Ví dụ: `2` |
| `duration` | string | Không | Metric | Ví dụ: `8 tuần` |
| `scope` | string | Có | Metric/info | Ví dụ: `Thiết kế & thi công nội thất` |
| `overviewTitle` | string | Có | Tổng quan | Tiêu đề lớn |
| `overviewParagraphs` | string[] | Có | Tổng quan | Nhiều đoạn mô tả |
| `floorPlanImage` | string | Không | Mặt bằng | Có thể null nếu chưa có |
| `seoTitle` | string | Không | Metadata | Nếu trống dùng title |
| `seoDescription` | text | Không | Metadata | Nếu trống dùng summary |

### Nhóm Lặp Cho Dự Án

`ProjectMetric`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `projectId` | relation | Liên kết dự án |
| `label` | string | Ví dụ: `Diện tích` |
| `value` | string | Ví dụ: `120m²` |
| `sortOrder` | int | Thứ tự hiển thị |

`ProjectInfoRow`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `projectId` | relation | Liên kết dự án |
| `label` | string | Ví dụ: `Vị trí` |
| `value` | string | Ví dụ: `Hà Nội` |
| `sortOrder` | int | Thứ tự hiển thị |

`ProjectSpace`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `projectId` | relation | Liên kết dự án |
| `title` | string | Ví dụ: `Phòng khách` |
| `image` | string | Ảnh phối cảnh |
| `sortOrder` | int | Thứ tự hiển thị |

`ProjectStoryBlock`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `projectId` | relation | Liên kết dự án |
| `index` | string | Ví dụ: `01` |
| `title` | string | Tên không gian |
| `description` | text | Nội dung thiết kế |
| `image` | string | Ảnh minh họa |
| `imageSide` | enum | `left`, `right` |
| `sortOrder` | int | Thứ tự hiển thị |

`ProjectFloorPlanNote`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `projectId` | relation | Liên kết dự án |
| `label` | string | Ví dụ: `Tối ưu giao thông` |
| `value` | text | Nội dung |
| `sortOrder` | int | Thứ tự hiển thị |

`ProjectRelated`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `projectId` | relation | Dự án hiện tại |
| `relatedProjectId` | relation | Dự án liên quan |
| `sortOrder` | int | Thứ tự hiển thị |

## Mẫu Thiết Kế

Route frontend:

```txt
/mau-thiet-ke
/mau-thiet-ke/[slug]
```

### Bảng Chính: DesignSample

| Field | Kiểu | Bắt buộc | Dùng ở đâu | Ghi chú |
| --- | --- | --- | --- | --- |
| `id` | string/int | Có | Admin, database | Khóa chính |
| `title` | string | Có | Card, detail, SEO | Ví dụ: `Mẫu Japandi 2PN` |
| `slug` | string | Có | URL | Ví dụ: `mau-japandi-2pn` |
| `category` | enum | Có | Filter, card | `Chung cư`, `Nhà phố`, `Biệt thự`, `Phòng khách`, `Phòng ngủ`, `Phòng bếp`, `Tủ bếp`, `Phòng trẻ em` |
| `type` | string | Có | Card/detail | Ví dụ: `Căn hộ`, `Phòng khách` |
| `style` | string | Có | Card/detail | Ví dụ: `Japandi` |
| `area` | string | Không | Card/detail | Ví dụ: `95m²`; có thể null với mẫu không theo diện tích |
| `thumbnail` | string | Có | Listing/card | Ảnh đại diện |
| `summary` | text | Có | Card, metadata fallback | Mô tả ngắn |
| `featured` | boolean | Không | Trang chủ | Mặc định `false` |
| `sortOrder` | int | Không | Admin/listing | Dùng để sắp xếp thủ công |
| `status` | enum | Có | Public/admin | `draft`, `published` |
| `publishedAt` | datetime | Không | SEO/sắp xếp | Có thể null nếu draft |
| `createdAt` | datetime | Có | Admin | Tự sinh |
| `updatedAt` | datetime | Có | Admin | Tự cập nhật |

### Chi Tiết: DesignSampleDetail

| Field | Kiểu | Bắt buộc | Dùng ở đâu | Ghi chú |
| --- | --- | --- | --- | --- |
| `sampleId` | relation | Có | Database | Liên kết `DesignSample` |
| `eyebrow` | string | Có | Hero detail | Ví dụ: `Mẫu thiết kế nội thất chung cư` |
| `displayTitle` | string | Có | Hero detail | Dòng chính: `Mẫu thiết kế` |
| `italicTitle` | string | Có | Hero detail | Dòng nghiêng: `Japandi 2PN` |
| `heroImage` | string | Có | Hero detail | Ảnh banner |
| `description` | text | Có | Hero detail | Mô tả mở đầu |
| `propertyType` | string | Có | Info | Ví dụ: `Căn hộ` |
| `bedrooms` | string | Không | Hero/info | Ví dụ: `2 phòng ngủ` |
| `bathrooms` | string | Không | Info | Ví dụ: `2` |
| `budgetRange` | string | Không | Metric/info | Ví dụ: `450-650 triệu` |
| `suitableFor` | string | Không | Info | Ví dụ: `Gia đình trẻ` |
| `overviewTitle` | string | Có | Tổng quan | Tiêu đề lớn |
| `overviewParagraphs` | string[] | Có | Tổng quan | Nhiều đoạn mô tả |
| `floorPlanImage` | string | Không | Mặt bằng | Có thể null nếu không có mặt bằng |
| `seoTitle` | string | Không | Metadata | Nếu trống dùng title |
| `seoDescription` | text | Không | Metadata | Nếu trống dùng summary |

### Nhóm Lặp Cho Mẫu Thiết Kế

`DesignSampleMetric`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Liên kết mẫu |
| `label` | string | Ví dụ: `Diện tích` |
| `value` | string | Ví dụ: `95m²` |
| `sortOrder` | int | Thứ tự hiển thị |

`DesignSampleInfoRow`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Liên kết mẫu |
| `label` | string | Ví dụ: `Phong cách` |
| `value` | string | Ví dụ: `Japandi` |
| `sortOrder` | int | Thứ tự hiển thị |

`DesignSampleGalleryItem`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Liên kết mẫu |
| `title` | string | Ví dụ: `Phòng khách` |
| `image` | string | Ảnh phối cảnh |
| `sortOrder` | int | Thứ tự hiển thị |

`DesignFeature`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Liên kết mẫu |
| `index` | string | Ví dụ: `01` |
| `title` | string | Ví dụ: `Bố cục mở` |
| `description` | text | Nội dung |
| `image` | string | Ảnh minh họa |
| `imageSide` | enum | `left`, `right` |
| `sortOrder` | int | Thứ tự hiển thị |

`DesignFloorPlanNote`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Liên kết mẫu |
| `label` | string | Ví dụ: `Tối ưu công năng` |
| `value` | text | Nội dung |
| `sortOrder` | int | Thứ tự hiển thị |

`SuggestedPackage`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Liên kết mẫu |
| `title` | string | Ví dụ: `Tiêu chuẩn` |
| `price` | string | Ví dụ: `450-650 triệu` |
| `featured` | boolean | Đánh dấu gói nổi bật |
| `sortOrder` | int | Thứ tự hiển thị |

`SuggestedPackageItem`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `packageId` | relation | Liên kết gói |
| `content` | string | Một dòng quyền lợi |
| `sortOrder` | int | Thứ tự hiển thị |

`DesignSampleRelated`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `sampleId` | relation | Mẫu hiện tại |
| `relatedSampleId` | relation | Mẫu liên quan |
| `sortOrder` | int | Thứ tự hiển thị |

## Admin Form Đề Xuất

### Form Dự Án

Các tab nên có:

1. Thông tin chung
2. Hero & SEO
3. Tổng quan
4. Không gian nổi bật
5. Câu chuyện thiết kế
6. Mặt bằng
7. Dự án liên quan

### Form Mẫu Thiết Kế

Các tab nên có:

1. Thông tin chung
2. Hero & SEO
3. Tổng quan
4. Phối cảnh nổi bật
5. Đặc điểm thiết kế
6. Mặt bằng tham khảo
7. Gói triển khai gợi ý
8. Mẫu liên quan

## Gợi Ý Prisma Sau Này

Nên tách `Project` và `DesignSample` thành hai model riêng, không gộp thành một bảng `Content`, vì:

- Dự án là công trình thực tế, có `year`, `location`, `scope`, `duration`.
- Mẫu thiết kế là mẫu tham khảo, có `budgetRange`, `suitableFor`, `suggestedPackages`.
- Admin form của hai loại giống nhau một phần nhưng nghiệp vụ khác nhau.

Những bảng có thể dùng chung về sau:

- `Media`
- `SeoMeta`

Nhưng ở giai đoạn đầu, tách rõ theo từng loại nội dung sẽ dễ làm admin hơn.
