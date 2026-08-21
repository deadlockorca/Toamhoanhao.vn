import kitchenSpaceArticleContent from "./kitchen-space-article-content.json";

export type KitchenSpaceArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type KitchenSpaceArticleSection = {
  title: string;
  paragraphs: string[];
  images?: KitchenSpaceArticleImage[];
};

export type KitchenSpaceArticle = {
  slug: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  highlights: string[];
  sections: KitchenSpaceArticleSection[];
  relatedSlugs: string[];
  legacyUrl: string;
};

const kitchenSpaceArticleSummaries: KitchenSpaceArticle[] = [
  {
    slug: "3-bang-mau-kinh-op-bep",
    label: "Kính ốp bếp",
    title: "3 bảng màu kính ốp bếp sang trọng – tạo sự hài hòa cho mọi thiết kế tủ bếp",
    excerpt:
      "Tìm hiểu kính ốp bếp là gì, những đặc điểm vượt trội và 3 bảng màu đón đầu xu hướng giúp tăng điểm nhấn, sự sang trọng cho không gian bếp.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-1.webp",
    highlights: [
      "Kính cường lực nguyên khối chống va đập, chịu nhiệt hơn 200°C",
      "Dễ vệ sinh, lau chùi, chống ẩm mốc",
      "Bảng màu kim sa, trơn tối giản, vân gỗ vân đá",
    ],
    sections: [],
    relatedSlugs: [
      "tong-hop-40-mau-tu-bep-tien-nghi",
      "top-15-mau-thiet-ke-bep-chung-cu",
    ],
    legacyUrl: "https://toamhoanhao.vn/3-bang-mau-kinh-op-bep-cho-moi-thiet-ke-tu-bep/",
  },
  {
    slug: "tong-hop-40-mau-tu-bep-tien-nghi",
    label: "Tủ bếp",
    title: "Tổng hợp 40+ mẫu tủ bếp tiện nghi “vạn người mê” – đừng bỏ lỡ xu hướng mới nhất năm 2023",
    excerpt:
      "Tuyển tập hơn 40 mẫu tủ bếp chữ I, chữ L, chữ U và bàn đảo hiện đại, sang trọng, phù hợp với mọi diện tích không gian bếp.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-2.webp",
    highlights: [
      "Tủ bếp chữ I tối ưu diện tích cho căn hộ nhỏ",
      "Tủ bếp chữ L phổ biến nhất cho căn bếp tiện nghi",
      "Tủ bếp bàn đảo và chữ U sang trọng cho không gian lớn",
    ],
    sections: [],
    relatedSlugs: [
      "20-mau-tu-bep-tien-nghi-xu-huong",
      "30-mau-bep-xinh-biet-thu-nha-pho",
    ],
    legacyUrl: "https://toamhoanhao.vn/tong-hop-40-mau-tu-bep-tien-nghi-2023/",
  },
  {
    slug: "cong-trinh-bep-the-manor-central-park",
    label: "Công trình",
    title: "Công trình bếp tại dự án The Manor Central Park – Quận Bình Thạnh",
    excerpt:
      "Tham quan công trình bếp khung plywood, tủ cánh kính được thiết kế và thi công trọn gói bởi Tổ Ấm Hoàn Hảo tại The Manor Central Park.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-3.webp",
    highlights: [
      "Chất liệu khung plywood, tủ bếp cánh kính",
      "Gam màu trắng chủ đạo, tối ưu diện tích",
      "Không gian ngập tràn ánh sáng tự nhiên",
    ],
    sections: [],
    relatedSlugs: [
      "top-15-mau-thiet-ke-bep-chung-cu",
      "3-bang-mau-kinh-op-bep",
    ],
    legacyUrl: "https://toamhoanhao.vn/cong-trinh-bep-tai-du-an-the-manor-cenltral-park-quan-binh-thanh/",
  },
  {
    slug: "top-15-mau-thiet-ke-bep-chung-cu",
    label: "Bếp chung cư",
    title: "Top 15 mẫu thiết kế bếp chung cư đẹp tối ưu diện tích",
    excerpt:
      "Bộ sưu tập 15 mẫu thiết kế bếp chung cư đẹp, tiện nghi, tối ưu diện tích với nhiều phong cách và chất liệu đa dạng.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-4.webp",
    highlights: [
      "15 mẫu bếp chung cư đẹp, hiện đại",
      "Tối ưu diện tích và công năng sử dụng",
      "Nhiều chất liệu: gỗ tự nhiên, gỗ công nghiệp, acrylic",
    ],
    sections: [],
    relatedSlugs: [
      "tong-hop-40-mau-tu-bep-tien-nghi",
      "cong-trinh-bep-the-manor-central-park",
    ],
    legacyUrl: "https://toamhoanhao.vn/top-15-mau-thiet-ke-bep-chung-cu-dep/",
  },
  {
    slug: "30-mau-bep-xinh-biet-thu-nha-pho",
    label: "Mẫu bếp",
    title: "30+ mẫu bếp xinh dành cho biệt thự, nhà phố, chung cư hiện đại",
    excerpt:
      "Tuyển tập hơn 30 mẫu bếp xinh cho biệt thự, nhà phố, chung cư với nhiều phong cách từ hiện đại, tân cổ điển đến vintage.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-5.webp",
    highlights: [
      "30+ mẫu bếp cho biệt thự, nhà phố, chung cư",
      "Phong cách hiện đại, tân cổ điển, vintage",
      "Gỗ óc chó, đá cẩm thạch, acrylic cao cấp",
    ],
    sections: [],
    relatedSlugs: [
      "tong-hop-40-mau-tu-bep-tien-nghi",
      "20-mau-tu-bep-tien-nghi-xu-huong",
    ],
    legacyUrl: "https://toamhoanhao.vn/30-mau-bep-xinh-danh-cho-biet-thu-nha-pho-2/",
  },
  {
    slug: "20-mau-tu-bep-tien-nghi-xu-huong",
    label: "Tủ bếp",
    title: "20+ mẫu tủ bếp tiện nghi “vạn người mê” – đừng bỏ lỡ xu hướng mới nhất năm 2023",
    excerpt:
      "Tuyển chọn hơn 20 mẫu tủ bếp chữ I, chữ L, chữ U tiện nghi và sang trọng theo xu hướng mới nhất, phù hợp mọi không gian.",
    image: "/images/thi-cong-noi-that/khong-gian-bep/bai-6.webp",
    highlights: [
      "Mẫu tủ bếp chữ I tối ưu diện tích",
      "Mẫu tủ bếp chữ L phổ biến và tiện nghi",
      "Mẫu tủ bếp chữ U cho không gian bếp lớn",
    ],
    sections: [],
    relatedSlugs: [
      "tong-hop-40-mau-tu-bep-tien-nghi",
      "30-mau-bep-xinh-biet-thu-nha-pho",
    ],
    legacyUrl: "https://toamhoanhao.vn/20-mau-tu-bep-tien-nghi-xu-huong-moi-nhat-2023/",
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
    relatedSlugs: [
      "tong-hop-40-mau-tu-bep-tien-nghi",
      "30-mau-bep-xinh-biet-thu-nha-pho",
    ],
    legacyUrl: "https://toamhoanhao.vn/bao-gia-thiet-ke-thi-cong-noi-that-tron-goi-moi-nhat-nam-2023/",
  },
];

const contentSections = kitchenSpaceArticleContent as unknown as Record<
  string,
  KitchenSpaceArticleSection[]
>;

export const kitchenSpaceArticles: KitchenSpaceArticle[] = kitchenSpaceArticleSummaries.map(
  (article) => ({
    ...article,
    sections: contentSections[article.slug] ?? article.sections,
  }),
);

export function getKitchenSpaceArticleBySlug(slug: string) {
  return kitchenSpaceArticles.find((article) => article.slug === slug);
}

export function getKitchenSpaceArticleHref(slug: string) {
  return `/thi-cong-noi-that/khong-gian-bep/${slug}`;
}
