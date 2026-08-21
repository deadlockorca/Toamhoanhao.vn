import importedArticleSections from "./construction-pricing-article-content.json";
import importedArticleBlocks from "./construction-pricing-article-blocks.json";
import importedArticleImages from "./construction-pricing-article-images.json";

export type ConstructionPricingBlock =
  | { type: "paragraph" | "bullet"; text: string }
  | { type: "image"; src: string };

export type ConstructionPricingContentSection = {
  title: string;
  blocks: ConstructionPricingBlock[];
};

export type ConstructionPricingArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  images: string[];
  sections: Array<{ title: string; paragraphs: string[] }>;
  contentSections?: ConstructionPricingContentSection[];
};

const articleSummaries: ConstructionPricingArticle[] = [
  {
    slug: "chi-phi-nha-pho-1-tret-2-lau-5x20m",
    title: "Chi phí xây nhà phố 1 trệt 2 lầu 5m x 20m",
    excerpt: "Cách dự trù chi phí theo diện tích xây dựng, phần móng, sàn, mái và các hạng mục hoàn thiện.",
    image: "/images/bao-gia/xay-dung/nha-pho.webp",
    images: [],
    sections: [
      { title: "Cách xác định tổng diện tích xây dựng", paragraphs: ["Dự toán cần tính cả phần móng, sàn trệt, các tầng lầu, mái, sân và các hạng mục phụ theo hệ số quy đổi phù hợp. Tổng diện tích xây dựng là cơ sở để ước tính chi phí ban đầu.", "Công thức tham khảo là tổng diện tích xây dựng nhân với đơn giá tương ứng. Đơn giá thực tế thay đổi theo kết cấu, điều kiện khu đất và mức hoàn thiện."] },
      { title: "Những khoản chi cần chuẩn bị", paragraphs: ["Ngoài phần thi công, gia chủ cần dự trù chi phí thiết kế, hồ sơ pháp lý, vật tư hoàn thiện, hệ thống điện nước và các công việc phát sinh tại hiện trường.", "Hồ sơ thiết kế rõ ràng giúp giảm thay đổi trong quá trình thi công và kiểm soát ngân sách chủ động hơn."] },
    ],
  },
  {
    slug: "chi-phi-nha-pho-1-tret-1-lau-5x20m",
    title: "Chi phí xây nhà phố 1 trệt 1 lầu 5m x 20m",
    excerpt: "Các nhóm chi phí thiết kế, thi công phần thô, hoàn thiện và những khoản cần dự phòng.",
    image: "/images/bao-gia/xay-dung/kien-truc.webp",
    images: [],
    sections: [
      { title: "Các hạng mục chi phí chính", paragraphs: ["Một dự toán nhà phố thường gồm thiết kế, pháp lý, phần thô, vật tư hoàn thiện và các chi phí phụ trợ như sân vườn, cổng rào hoặc dọn dẹp mặt bằng.", "Thiết kế chiếm tỷ trọng nhỏ nhưng là cơ sở để thống nhất công năng, kết cấu và hạn chế phát sinh khi triển khai."] },
      { title: "Dự toán cần bám sát phương án thực tế", paragraphs: ["Móng, sàn và mái có hệ số quy đổi khác nhau. Loại móng, dạng mái và hiện trạng khu đất đều ảnh hưởng trực tiếp đến tổng khối lượng thi công."] },
    ],
  },
  {
    slug: "chi-phi-nha-pho-1-tret-1-lau-5x15m",
    title: "Chi phí xây nhà phố 1 trệt 1 lầu 5m x 15m",
    excerpt: "Hướng dẫn tham khảo cách tính diện tích móng, mái, các tầng và những lưu ý khi dự trù kinh phí.",
    image: "/images/bao-gia/xay-dung/thiet-ke-nha-pho.webp",
    images: [],
    sections: [
      { title: "Tính diện tích theo từng bộ phận", paragraphs: ["Diện tích xây dựng không chỉ là diện tích sàn. Phần móng, các tầng, mái và những khu vực có mái che cần được quy đổi theo giải pháp kỹ thuật thực tế.", "Việc xác định đúng khối lượng trước khi so sánh đơn giá giúp gia chủ có một dự toán sát thực tế hơn."] },
      { title: "Kiểm soát chi phí phát sinh", paragraphs: ["Nên thống nhất phương án thiết kế, danh mục vật liệu và phạm vi công việc trước khi thi công. Các điều chỉnh muộn thường làm thay đổi khối lượng, tiến độ và ngân sách."] },
    ],
  },
  {
    slug: "cach-tinh-gia-xay-dung-tron-goi-va-phan-tho",
    title: "Cách tính giá xây dựng trọn gói và phần thô",
    excerpt: "Phân biệt cách ước tính theo mét vuông với phương pháp bóc tách khối lượng theo hồ sơ thiết kế.",
    image: "/images/bao-gia/xay-dung/nha-pho.webp",
    images: [],
    sections: [
      { title: "Hai cách lập dự toán phổ biến", paragraphs: ["Ước tính theo mét vuông giúp gia chủ hình dung nhanh mức đầu tư ban đầu. Báo giá bóc tách khối lượng dựa trên hồ sơ thiết kế sẽ chi tiết và phù hợp hơn khi chuẩn bị triển khai.", "Mỗi cách có mục đích khác nhau; con số tham khảo không thay thế cho dự toán chính thức của một công trình cụ thể."] },
      { title: "Cần so sánh trên cùng phạm vi", paragraphs: ["Khi xem báo giá, cần làm rõ vật liệu, biện pháp thi công, phần việc đã bao gồm và những hạng mục chủ đầu tư tự cung cấp. Đây là nền tảng để so sánh minh bạch."] },
    ],
  },
  {
    slug: "quy-trinh-xay-nha-tron-goi",
    title: "Quy trình xây nhà trọn gói",
    excerpt: "Các bước từ tiếp nhận nhu cầu, khảo sát, thiết kế, báo giá, pháp lý đến triển khai và bàn giao.",
    image: "/images/bao-gia/xay-dung/kien-truc.webp",
    images: [],
    sections: [
      { title: "Chuẩn bị trước khi triển khai", paragraphs: ["Đội ngũ tiếp nhận nhu cầu về quy mô, diện tích đất, công năng và phong cách; sau đó khảo sát vị trí thực tế để tư vấn phương án phù hợp.", "Hồ sơ thiết kế là cơ sở để hai bên chốt phương án, ngân sách và các điều kiện thực hiện công trình."] },
      { title: "Từ dự toán đến bàn giao", paragraphs: ["Sau khi thống nhất hồ sơ, dự toán được lập theo khối lượng và tiêu chuẩn vật liệu. Công trình được tổ chức thi công, giám sát, nghiệm thu từng giai đoạn trước khi bàn giao."] },
    ],
  },
];

const legacyArticleSections = importedArticleSections as Record<
  string,
  ConstructionPricingArticle["sections"]
>;
const legacyArticleImages = importedArticleImages as Record<string, string[]>;
const legacyArticleBlocks = importedArticleBlocks as Record<
  string,
  ConstructionPricingContentSection[]
>;

export const constructionPricingArticles: ConstructionPricingArticle[] = articleSummaries.map(
  (article) => ({
    ...article,
    images: legacyArticleImages[article.slug] ?? [],
    contentSections: legacyArticleBlocks[article.slug],
    sections: legacyArticleSections[article.slug] ?? article.sections,
  }),
);

export function getConstructionPricingArticle(slug: string) {
  return constructionPricingArticles.find((article) => article.slug === slug);
}
