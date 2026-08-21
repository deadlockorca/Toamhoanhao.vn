import bedroomSpaceArticleContent from "./bedroom-space-article-content.json";

export type BedroomSpaceArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BedroomSpaceArticleSection = {
  title: string;
  paragraphs: string[];
  images?: BedroomSpaceArticleImage[];
};

export type BedroomSpaceArticle = {
  slug: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  highlights: string[];
  sections: BedroomSpaceArticleSection[];
  relatedSlugs: string[];
  legacyUrl: string;
  externalHref?: string;
};

const bedroomSpaceArticleSummaries: BedroomSpaceArticle[] = [
  {
    slug: "thiet-ke-noi-that-giuong-tang-cho-tre-em",
    label: "Giường tầng trẻ em",
    title: "10+ mẫu thiết kế nội thất giường tầng dành cho phòng ngủ trẻ em đẹp",
    excerpt:
      "Giường tầng là giải pháp tối ưu cho phòng ngủ trẻ em diện tích hạn chế, vừa sáng tạo vừa tiết kiệm không gian và đem lại sự bắt mắt cho căn phòng.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-1/1.webp",
    highlights: [
      "10+ mẫu giường tầng cho bé trai, bé gái",
      "Tối ưu diện tích phòng ngủ trẻ em",
      "Kết hợp học tập, vui chơi và ngủ nghỉ",
    ],
    sections: [],
    relatedSlugs: ["20-mau-thiet-ke-noi-that-phong-ngu-tre-em"],
    legacyUrl: "https://toamhoanhao.vn/thiet-ke-noi-that-giuong-tang-cho-tre-em-8/",
  },
  {
    slug: "10-mau-thiet-ke-noi-that-phong-ngu-luxury",
    label: "Phòng ngủ luxury",
    title: "10+ mẫu thiết kế nội thất phòng ngủ luxury sang chảnh và thời thượng",
    excerpt:
      "Phong cách luxury với gỗ tự nhiên, đá cẩm thạch, pha lê và chi tiết mạ vàng sang trọng – bộ sưu tập phòng ngủ đẳng cấp khó rời mắt.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-3/1.webp",
    highlights: [
      "Chất liệu cao cấp: gỗ tự nhiên, đá cẩm thạch, pha lê",
      "Chi tiết mạ vàng sang trọng, tinh tế",
      "Bộ sưu tập 10+ mẫu phòng ngủ luxury",
    ],
    sections: [],
    relatedSlugs: ["10-mau-thiet-ke-noi-that-phong-ngu-tan-co-dien"],
    legacyUrl: "https://toamhoanhao.vn/10-mau-thiet-ke-noi-that-phong-ngu-luxury-6/",
  },
  {
    slug: "10-mau-thiet-ke-noi-that-phong-ngu-tan-co-dien",
    label: "Phòng ngủ tân cổ điển",
    title: "20+ mẫu thiết kế nội thất phòng ngủ tân cổ điển sang trọng và đẳng cấp",
    excerpt:
      "Phong cách tân cổ điển kết hợp cổ điển và hiện đại với hoa văn nhẹ nhàng, màu sắc Châu Âu kem, trắng, xám – sang trọng và đẳng cấp.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-4/1.webp",
    highlights: [
      "Kết hợp phong cách cổ điển và hiện đại",
      "Hoa văn nhẹ nhàng, mềm mại",
      "Gam màu Châu Âu: kem, trắng, xám",
    ],
    sections: [],
    relatedSlugs: ["10-mau-thiet-ke-noi-that-phong-ngu-luxury"],
    legacyUrl: "https://toamhoanhao.vn/10-mau-thiet-ke-noi-that-phong-ngu-tan-co-dien-5/",
  },
  {
    slug: "50-mau-thiet-ke-tu-quan-ao",
    label: "Tủ quần áo",
    title: "50+ mẫu thiết kế tủ quần áo bền đẹp, sang trọng và chất lượng",
    excerpt:
      "Bộ sưu tập 50+ mẫu tủ quần áo gỗ công nghiệp, gỗ tự nhiên, cánh kính hiện đại – lựa chọn hoàn hảo cho không gian phòng ngủ của bạn.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-5/4.webp",
    highlights: [
      "Tủ gỗ công nghiệp, gỗ tự nhiên, cánh kính",
      "Đa dạng kiểu dáng và chất liệu",
      "Tối ưu lưu trữ cho phòng ngủ",
    ],
    sections: [],
    relatedSlugs: ["kinh-nghiem-thiet-ke-noi-that-phong-ngu-master"],
    legacyUrl: "https://toamhoanhao.vn/50-mau-thiet-ke-tu-quan-ao-ben-dep-sang-trong-4/",
  },
  {
    slug: "20-mau-thiet-ke-noi-that-phong-ngu-tre-em",
    label: "Phòng ngủ trẻ em",
    title: "20+ mẫu thiết kế nội thất phòng ngủ trẻ em đẹp và đáng yêu",
    excerpt:
      "Bộ sưu tập phòng ngủ cho bé trai, bé gái với nhiều phong cách, giúp trẻ thỏa sức sáng tạo, vui chơi và phát triển tư duy.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-6/1.webp",
    highlights: [
      "20+ mẫu phòng ngủ trẻ em đáng yêu",
      "Nhiều phong cách cho bé trai, bé gái",
      "Không gian sáng tạo và phát triển tư duy",
    ],
    sections: [],
    relatedSlugs: ["thiet-ke-noi-that-giuong-tang-cho-tre-em"],
    legacyUrl: "https://toamhoanhao.vn/20-mau-thiet-ke-noi-that-phong-ngu-tre-em-3/",
  },
  {
    slug: "top-30-mau-thiet-ke-noi-that-phong-ngu-hien-dai",
    label: "Phòng ngủ hiện đại",
    title: "Top 60+ mẫu thiết kế nội thất phòng ngủ hiện đại hợp với mọi không gian",
    excerpt:
      "Bộ sưu tập 60+ mẫu phòng ngủ hiện đại với nhiều diện tích và phong cách, giúp bạn dễ dàng lựa chọn không gian thư giãn lý tưởng.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-7/1.webp",
    highlights: [
      "60+ mẫu phòng ngủ hiện đại đa dạng",
      "Phù hợp mọi không gian và diện tích",
      "Kết hợp hài hòa công năng và thẩm mỹ",
    ],
    sections: [],
    relatedSlugs: [],
    legacyUrl: "https://toamhoanhao.vn/top-30-mau-thiet-ke-noi-that-phong-ngu-hien-dai-2/",
  },
  {
    slug: "kinh-nghiem-thiet-ke-noi-that-phong-ngu-master",
    label: "Phòng ngủ master",
    title: "Kinh nghiệm thiết kế nội thất phòng ngủ master xu hướng mới nhất",
    excerpt:
      "Phòng ngủ master là gì, diện tích bao nhiêu, lưu ý ánh sáng, màu sắc, nội thất, phong thủy – kinh nghiệm thiết kế phòng ngủ master đẳng cấp.",
    image: "/images/thi-cong-noi-that/khong-gian-phong-ngu/bai-8/1.webp",
    highlights: [
      "Phòng ngủ master là gì, diện tích chuẩn",
      "Lưu ý ánh sáng, màu sắc, nội thất, phong thủy",
      "Mẫu phòng master nhiều phong cách",
    ],
    sections: [],
    relatedSlugs: ["50-mau-thiet-ke-tu-quan-ao"],
    legacyUrl: "https://toamhoanhao.vn/kinh-nghiem-thiet-ke-noi-that-phong-ngu-master-19/",
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
    relatedSlugs: ["top-30-mau-thiet-ke-noi-that-phong-ngu-hien-dai"],
    legacyUrl: "https://toamhoanhao.vn/bao-gia-thiet-ke-thi-cong-noi-that-tron-goi-moi-nhat-nam-2023/",
    externalHref: "/thi-cong-noi-that/khong-gian-bep/bao-gia-thi-cong-noi-that-tron-goi",
  },
];

const contentSections = bedroomSpaceArticleContent as unknown as Record<
  string,
  BedroomSpaceArticleSection[]
>;

export const bedroomSpaceArticles: BedroomSpaceArticle[] = bedroomSpaceArticleSummaries.map(
  (article) => ({
    ...article,
    sections: contentSections[article.slug] ?? article.sections,
  }),
);

export function getBedroomSpaceArticleBySlug(slug: string) {
  return bedroomSpaceArticles.find((article) => article.slug === slug);
}

export function getBedroomSpaceArticleHref(slug: string) {
  return `/thi-cong-noi-that/khong-gian-phong-ngu/${slug}`;
}
