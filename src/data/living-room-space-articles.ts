import livingRoomSpaceArticleContent from "./living-room-space-article-content.json";

export type LivingRoomSpaceArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type LivingRoomSpaceArticleSection = {
  title: string;
  paragraphs: string[];
  images?: LivingRoomSpaceArticleImage[];
};

export type LivingRoomSpaceArticle = {
  slug: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  highlights: string[];
  sections: LivingRoomSpaceArticleSection[];
  relatedSlugs: string[];
  legacyUrl: string;
  externalHref?: string;
};

const livingRoomSpaceArticleSummaries: LivingRoomSpaceArticle[] = [
  {
    slug: "30-mau-noi-that-phong-khach-biet-thu-nha-pho",
    label: "Phòng khách biệt thự, nhà phố",
    title: "30+ mẫu thiết kế nội thất phòng khách biệt thự, nhà phố đẹp đến xiêu lòng",
    excerpt:
      "Bộ sưu tập hơn 30 mẫu thiết kế nội thất phòng khách biệt thự, nhà phố từ hiện đại, đơn giản đến sang trọng với nhiều diện tích khác nhau.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp",
    highlights: [
      "30+ mẫu phòng khách biệt thự, nhà phố đẹp",
      "Nhiều phong cách: hiện đại, đơn giản, sang trọng",
      "Đa dạng chất liệu: gỗ óc chó, đá cẩm thạch",
    ],
    sections: [],
    relatedSlugs: ["bo-suu-tap-noi-that-phong-khach-chung-cu"],
    legacyUrl: "https://toamhoanhao.vn/30-mau-noi-that-phong-khach-biet-thu-nha-pho-dep-2/",
  },
  {
    slug: "bo-suu-tap-noi-that-phong-khach-chung-cu",
    label: "Phòng khách chung cư",
    title: "Bộ sưu tập nội thất phòng khách đẹp và ấn tượng 2023",
    excerpt:
      "Bộ sưu tập những mẫu thiết kế nội thất phòng khách chung cư đẹp, từ hiện đại, đơn giản đến sang trọng với nhiều diện tích khác nhau.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-khach/bai-2-thumb.webp",
    highlights: [
      "Bộ sưu tập phòng khách chung cư đẹp ấn tượng",
      "Nhiều phong cách và diện tích khác nhau",
      "Thiết kế tối ưu công năng cho chung cư",
    ],
    sections: [],
    relatedSlugs: ["30-mau-noi-that-phong-khach-biet-thu-nha-pho"],
    legacyUrl: "https://toamhoanhao.vn/bo-suu-tap-noi-that-phong-khach-chung-cu-2022/",
  },
  {
    slug: "khac-phuc-han-che-phong-ngu-khong-cua-so",
    label: "Phòng ngủ không cửa sổ",
    title: "Phòng ngủ không có cửa sổ – top cách khắc phục hạn chế của thiết kế hiệu quả nhất",
    excerpt:
      "Phòng ngủ không có cửa sổ gây ngột ngạt, bí bách. Khám phá các cách khắc phục hiệu quả: phối màu đánh lừa thị giác, ánh sáng nhân tạo, không gian mở…",
    image: "/images/thi-cong-noi-that/khong-gian-phong-khach/bai-3-thumb.webp",
    highlights: [
      "Ảnh hưởng sức khỏe khi sử dụng phòng ngủ không cửa sổ",
      "Phối màu sơn, hạn chế nội thất dư thừa",
      "Gương treo tường, ánh sáng nhân tạo, không gian mở",
    ],
    sections: [],
    relatedSlugs: ["30-mau-noi-that-phong-khach-biet-thu-nha-pho"],
    legacyUrl: "https://toamhoanhao.vn/khac-phuc-han-che-phong-ngu-khong-cua-so/",
  },
  {
    slug: "bao-gia-thi-cong-noi-that-tron-goi",
    label: "Báo giá",
    title: "Báo giá thi công nội thất trọn gói mới nhất năm 2023",
    excerpt:
      "Bảng báo giá thiết kế và thi công nội thất trọn gói theo chất liệu gỗ công nghiệp MFC, MDF kháng ẩm và gỗ tự nhiên.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-7.webp",
    highlights: [
      "Chỉ thi công gỗ chống ẩm, bản lề inox SUS304 giảm chấn",
      "Báo giá chi tiết theo từng bộ phận nội thất",
      "Gỗ MFC, MDF kháng ẩm và gỗ tự nhiên",
    ],
    sections: [],
    relatedSlugs: ["30-mau-noi-that-phong-khach-biet-thu-nha-pho"],
    legacyUrl: "https://toamhoanhao.vn/bao-gia-thiet-ke-thi-cong-noi-that-tron-goi-moi-nhat-nam-2023/",
    externalHref: "/thi-cong-noi-that/khong-gian-bep/bao-gia-thi-cong-noi-that-tron-goi",
  },
];

const contentSections = livingRoomSpaceArticleContent as unknown as Record<
  string,
  LivingRoomSpaceArticleSection[]
>;

export const livingRoomSpaceArticles: LivingRoomSpaceArticle[] = livingRoomSpaceArticleSummaries.map(
  (article) => ({
    ...article,
    sections: contentSections[article.slug] ?? article.sections,
  }),
);

export function getLivingRoomSpaceArticleBySlug(slug: string) {
  return livingRoomSpaceArticles.find((article) => article.slug === slug);
}

export function getLivingRoomSpaceArticleHref(slug: string) {
  return `/thi-cong-noi-that/khong-gian-phong-khach/${slug}`;
}
