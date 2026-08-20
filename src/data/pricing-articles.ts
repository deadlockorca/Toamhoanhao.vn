import pricingArticleContent from "./pricing-article-content.json";

export type PricingArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PricingArticleSection = {
  title: string;
  paragraphs: string[];
  images?: PricingArticleImage[];
};

export type PricingArticle = {
  slug: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  scope: string;
  pricingBasis: string;
  archived?: boolean;
  highlights: string[];
  sections: PricingArticleSection[];
  relatedSlugs: string[];
  legacyUrl: string;
};

const pricingArticleSummaries: PricingArticle[] = [
  {
    slug: "bao-gia-thiet-ke-va-thi-cong-noi-that",
    label: "Báo giá tổng hợp",
    title: "Báo giá thiết kế và thi công nội thất",
    excerpt:
      "Tổng quan các hạng mục thiết kế, sản xuất và thi công nội thất cần có trong một hồ sơ báo giá trọn gói.",
    image: "/images/nang-luc/banner.png",
    scope: "Thiết kế, sản xuất và thi công nội thất",
    pricingBasis: "Diện tích, khối lượng và vật liệu",
    highlights: [
      "Khảo sát và xác định nhu cầu sử dụng",
      "Thiết kế mặt bằng, phối cảnh và hồ sơ kỹ thuật",
      "Bóc tách khối lượng thi công, đồ gỗ và phụ kiện",
      "Nghiệm thu, bàn giao và bảo hành",
    ],
    sections: [
      {
        title: "Một bảng báo giá trọn gói gồm những gì?",
        paragraphs: [
          "Báo giá nội thất trọn gói cần thể hiện rõ phạm vi thiết kế, phần hoàn thiện, đồ nội thất sản xuất theo yêu cầu và các thiết bị mua sẵn. Mỗi hạng mục nên có đơn vị tính, khối lượng, quy cách vật liệu và giá trị tương ứng.",
          "Việc tách rõ từng nhóm công việc giúp gia chủ dễ kiểm soát ngân sách, đồng thời hạn chế chồng chéo trách nhiệm giữa thiết kế, xưởng sản xuất và đội thi công tại công trình.",
        ],
      },
      {
        title: "Cách Tổ Ấm Hoàn Hảo lập dự toán",
        paragraphs: [
          "Đội ngũ tiếp nhận mặt bằng, nhu cầu và mức đầu tư dự kiến trước khi khảo sát hiện trạng. Sau khi phương án công năng và vật liệu được thống nhất, khối lượng mới được bóc tách thành báo giá chính thức.",
          "Giá trị cuối cùng phụ thuộc vào diện tích thực tế, mức độ phức tạp của thiết kế, chủng loại vật liệu, phụ kiện và điều kiện thi công tại công trình.",
        ],
      },
    ],
    relatedSlugs: [
      "bao-gia-noi-that-go-oc-cho",
      "bao-gia-thiet-ke-thi-cong-tu-bep",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
    legacyUrl:
      "https://toamhoanhao.vn/bao-gia-thiet-ke-noi-that-bang-go-2023-toamhoanhao/",
  },
  {
    slug: "bao-gia-noi-that-go-oc-cho",
    label: "Vật liệu",
    title: "Báo giá nội thất gỗ walnut (gỗ óc chó)",
    excerpt:
      "Những yếu tố cần làm rõ khi dự toán nội thất gỗ óc chó, từ chất lượng gỗ đến kết cấu, bề mặt và phụ kiện.",
    image: "/images/bao-gia/hero.webp",
    scope: "Đồ gỗ nội thất theo yêu cầu",
    pricingBasis: "Khối lượng, loại gỗ và quy cách hoàn thiện",
    highlights: [
      "Phân biệt gỗ tự nhiên, veneer và vật liệu kết hợp",
      "Thống nhất màu sắc, vân gỗ và lớp phủ bề mặt",
      "Bóc tách phụ kiện, vận chuyển và lắp đặt",
      "Kiểm tra mẫu vật liệu trước khi sản xuất",
    ],
    sections: [
      {
        title: "Điều gì quyết định giá nội thất gỗ óc chó?",
        paragraphs: [
          "Chi phí phụ thuộc vào tỷ lệ gỗ tự nhiên sử dụng, quy cách lựa chọn phôi, độ dày chi tiết và kết cấu của từng sản phẩm. Những thiết kế bo cong, ghép vân hoặc cần xử lý bề mặt phức tạp sẽ có chi phí gia công cao hơn.",
          "Báo giá cũng cần ghi rõ loại phụ kiện, lớp sơn phủ, phần vận chuyển và lắp đặt để người dùng có thể so sánh trên cùng một tiêu chuẩn.",
        ],
      },
      {
        title: "Lựa chọn vật liệu phù hợp ngân sách",
        paragraphs: [
          "Không nhất thiết mọi chi tiết đều phải dùng gỗ tự nhiên. Việc kết hợp gỗ óc chó với veneer, plywood hoặc vật liệu ổn định khác tại vị trí phù hợp có thể giữ được thẩm mỹ mà vẫn tối ưu chi phí.",
        ],
      },
    ],
    relatedSlugs: [
      "bao-gia-thiet-ke-va-thi-cong-noi-that",
      "goi-noi-that-hoan-thien-400-trieu",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
    legacyUrl: "https://toamhoanhao.vn/bao-gia-noi-that-go-oc-cho-moi-nhat-2023/",
  },
  {
    slug: "bao-gia-thiet-ke-thi-cong-tu-bep",
    label: "Tủ bếp",
    title: "Báo giá thiết kế thi công tủ bếp của Tổ Ấm Hoàn Hảo",
    excerpt:
      "Cách tính chi phí tủ bếp theo kích thước, vật liệu thùng, cánh, mặt đá và hệ phụ kiện sử dụng.",
    image: "/images/bao-gia/tu-bep.webp",
    scope: "Thiết kế, sản xuất và lắp đặt tủ bếp",
    pricingBasis: "Mét dài, vật liệu và phụ kiện",
    highlights: [
      "Đo đạc hiện trạng và bố trí tam giác công năng",
      "Lựa chọn vật liệu thùng và cánh tủ",
      "Tách riêng mặt đá, kính bếp và phụ kiện",
      "Lắp đặt, căn chỉnh và nghiệm thu tại công trình",
    ],
    sections: [
      {
        title: "Báo giá tủ bếp được tính như thế nào?",
        paragraphs: [
          "Tủ bếp thường được tính theo mét dài nhưng đơn giá chỉ có ý nghĩa khi đi cùng quy cách vật liệu. Phần tủ trên, tủ dưới, tủ cao và đảo bếp cần được bóc tách riêng do có kết cấu và lượng vật tư khác nhau.",
          "Mặt đá, kính ốp, chậu vòi, thiết bị và hệ phụ kiện thông minh nên được thể hiện thành từng dòng độc lập để tránh phát sinh sau khi chốt thiết kế.",
        ],
      },
      {
        title: "Những thông tin cần chuẩn bị",
        paragraphs: [
          "Gia chủ nên cung cấp kích thước mặt bằng, vị trí cấp thoát nước, nguồn điện và danh sách thiết bị dự kiến. Các thông tin này giúp phương án tủ bếp sát thực tế và báo giá chính xác hơn.",
        ],
      },
    ],
    relatedSlugs: [
      "bao-gia-thiet-ke-va-thi-cong-noi-that",
      "goi-noi-that-hoan-thien-250-trieu",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
    legacyUrl:
      "https://toamhoanhao.vn/bao-gia-thi-cong-tu-bep-go-cong-nghiep-2022/",
  },
  {
    slug: "thiet-ke-noi-that-van-phong-ha-noi-220m2",
    label: "Văn phòng",
    title: "Thiết kế nội thất văn phòng hiện đại, tiện nghi - Hà Nội 220m²",
    excerpt:
      "Tham khảo cách xác định phạm vi và ngân sách cho văn phòng dựa trên mật độ nhân sự, công năng và tiêu chuẩn kỹ thuật.",
    image: "/images/bao-gia/van-phong.webp",
    scope: "Thiết kế và hoàn thiện văn phòng",
    pricingBasis: "Diện tích, công năng và tiêu chuẩn vận hành",
    highlights: [
      "Phân khu làm việc và luồng di chuyển",
      "Hệ thống điện, mạng, chiếu sáng và điều hòa",
      "Bàn ghế, tủ hồ sơ và khu vực dùng chung",
      "Tiến độ thi công phù hợp kế hoạch vận hành",
    ],
    sections: [
      {
        title: "Dự toán văn phòng cần bắt đầu từ công năng",
        paragraphs: [
          "Số lượng nhân sự, phòng họp, khu tiếp khách, pantry và yêu cầu lưu trữ là cơ sở để bố trí mặt bằng. Khi công năng được chốt, hệ thống kỹ thuật và đồ nội thất mới có thể bóc tách chính xác.",
          "Với văn phòng đang hoạt động, tiến độ và phương án thi công theo giai đoạn cũng ảnh hưởng đáng kể đến chi phí triển khai.",
        ],
      },
      {
        title: "Các nhóm chi phí chính",
        paragraphs: [
          "Chi phí thường gồm phần hoàn thiện, cơ điện, chiếu sáng, đồ gỗ sản xuất, bàn ghế mua sẵn, biển hiệu và các yêu cầu an toàn. Báo giá cần chỉ rõ hạng mục nào đã bao gồm và hạng mục nào do chủ đầu tư cung cấp.",
        ],
      },
    ],
    relatedSlugs: [
      "bao-gia-thiet-ke-va-thi-cong-noi-that",
      "goi-noi-that-hoan-thien-300-trieu",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
    legacyUrl: "https://toamhoanhao.vn/thiet-ke-noi-that-van-phong-tien-nghi-3/",
  },
  {
    slug: "goi-noi-that-hoan-thien-400-trieu",
    label: "Gói ngân sách cũ",
    title: "Gói nội thất hoàn thiện 400 triệu đồng - Không gian đẳng cấp, giá cả phải chăng",
    excerpt:
      "Hồ sơ tham khảo cũ về cách phân bổ một gói hoàn thiện nội thất ở mức đầu tư 400 triệu đồng.",
    image: "/images/bao-gia/goi-400.webp",
    scope: "Gói hoàn thiện nội thất tham khảo",
    pricingBasis: "Ngân sách mục tiêu 400 triệu đồng",
    archived: true,
    highlights: [
      "Ưu tiên không gian sinh hoạt chính",
      "Đồng bộ thiết kế và đồ nội thất đặt đóng",
      "Lựa chọn vật liệu theo mức độ sử dụng",
      "Dự phòng cho thiết bị và chi phí phát sinh",
    ],
    sections: [
      {
        title: "Cách phân bổ ngân sách tham khảo",
        paragraphs: [
          "Với mức đầu tư mục tiêu, ngân sách nên ưu tiên phần đồ gỗ sử dụng thường xuyên như tủ bếp, tủ áo, giường và hệ lưu trữ. Các chi tiết trang trí có thể điều chỉnh theo nhu cầu sau khi công năng chính đã được bảo đảm.",
          "Mức 400 triệu là nội dung lưu trữ từ website cũ, không đại diện cho đơn giá hiện hành và không áp dụng đồng loạt cho mọi diện tích.",
        ],
      },
      {
        title: "Muốn có báo giá sát thực tế cần gì?",
        paragraphs: [
          "Cần có mặt bằng, danh sách không gian, yêu cầu vật liệu và thời gian triển khai. Từ đó đội ngũ mới có thể cân đối thiết kế, khối lượng và ngân sách phù hợp.",
        ],
      },
    ],
    relatedSlugs: [
      "goi-noi-that-hoan-thien-300-trieu",
      "bao-gia-noi-that-go-oc-cho",
      "bao-gia-thiet-ke-va-thi-cong-noi-that",
    ],
    legacyUrl:
      "https://toamhoanhao.vn/goi-noi-that-hoan-thien-400-trieu-dong-khong-gian-dang-cap-gia-ca-phai-chang/",
  },
  {
    slug: "goi-noi-that-hoan-thien-300-trieu",
    label: "Gói ngân sách cũ",
    title: "Gói nội thất hoàn thiện 300 triệu đồng - Đẹp từng chi tiết, giá hợp lý",
    excerpt:
      "Hồ sơ tham khảo cũ về giải pháp cân đối công năng, vật liệu và thẩm mỹ trong ngân sách 300 triệu đồng.",
    image: "/images/bao-gia/goi-300.webp",
    scope: "Gói hoàn thiện nội thất tham khảo",
    pricingBasis: "Ngân sách mục tiêu 300 triệu đồng",
    archived: true,
    highlights: [
      "Tập trung phòng khách, bếp và phòng ngủ chính",
      "Giảm chi tiết trang trí khó thi công",
      "Dùng vật liệu bền ở vị trí sử dụng nhiều",
      "Bóc tách thiết bị mua sẵn khỏi đồ đặt đóng",
    ],
    sections: [
      {
        title: "Tối ưu thiết kế trong một mức đầu tư xác định",
        paragraphs: [
          "Khi ngân sách có giới hạn, thiết kế cần ưu tiên công năng và những hạng mục ảnh hưởng trực tiếp đến trải nghiệm sử dụng. Việc thống nhất kích thước module, vật liệu và màu sắc giúp sản xuất hiệu quả hơn.",
          "Con số 300 triệu thuộc hồ sơ cũ và chỉ mang tính tham khảo. Giá thực tế thay đổi theo diện tích, vật liệu và khối lượng tại thời điểm báo giá.",
        ],
      },
      {
        title: "Các khoản nên dự phòng",
        paragraphs: [
          "Ngoài đồ nội thất, gia chủ nên dự phòng cho vận chuyển, thay đổi hiện trạng, thiết bị rời và các yêu cầu phát sinh sau khảo sát.",
        ],
      },
    ],
    relatedSlugs: [
      "goi-noi-that-hoan-thien-250-trieu",
      "goi-noi-that-hoan-thien-400-trieu",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
    legacyUrl:
      "https://toamhoanhao.vn/goi-noi-that-hoan-thien-300-trieu-dong-dep-tung-chi-tiet-gia-khong-hop-ly-hon/",
  },
  {
    slug: "goi-noi-that-hoan-thien-250-trieu",
    label: "Gói ngân sách cũ",
    title: "Gói nội thất hoàn thiện 250 triệu đồng - Giải pháp cho không gian chất lượng",
    excerpt:
      "Hồ sơ tham khảo cũ về cách lựa chọn hạng mục thiết yếu cho một gói nội thất mức đầu tư 250 triệu đồng.",
    image: "/images/bao-gia/goi-250.webp",
    scope: "Gói hoàn thiện nội thất tham khảo",
    pricingBasis: "Ngân sách mục tiêu 250 triệu đồng",
    archived: true,
    highlights: [
      "Giữ thiết kế gọn và dễ sản xuất",
      "Ưu tiên hệ tủ có giá trị sử dụng lâu dài",
      "Lựa chọn phụ kiện theo tần suất sử dụng",
      "Hoàn thiện theo từng giai đoạn nếu cần",
    ],
    sections: [
      {
        title: "Chọn đúng hạng mục thay vì dàn trải",
        paragraphs: [
          "Ngân sách nên được phân bổ cho các hạng mục thiết yếu trước, sau đó mới đến đồ trang trí hoặc thiết bị có thể bổ sung. Cách làm này giúp không gian hoàn thiện đồng bộ mà không phải giảm chất lượng ở mọi hạng mục.",
          "Mức 250 triệu là hồ sơ tham khảo cũ, không phải cam kết giá cho công trình mới.",
        ],
      },
      {
        title: "Giải pháp kiểm soát phát sinh",
        paragraphs: [
          "Chốt bản vẽ, mẫu vật liệu và danh mục phụ kiện trước khi sản xuất là cách hiệu quả nhất để kiểm soát phát sinh trong quá trình thi công.",
        ],
      },
    ],
    relatedSlugs: [
      "goi-noi-that-hoan-thien-169-trieu",
      "goi-noi-that-hoan-thien-300-trieu",
      "bao-gia-thiet-ke-thi-cong-tu-bep",
    ],
    legacyUrl:
      "https://toamhoanhao.vn/goi-noi-that-hoan-thien-250-trieu-dong-giai-phap-gia-re-cho-khong-gian-noi-chat-luong/",
  },
  {
    slug: "goi-noi-that-hoan-thien-169-trieu",
    label: "Gói ngân sách cũ",
    title: "Gói nội thất hoàn thiện 169 triệu đồng - Giá tốt, chất lượng không giảm",
    excerpt:
      "Hồ sơ tham khảo cũ về phương án hoàn thiện những hạng mục cơ bản trong ngân sách 169 triệu đồng.",
    image: "/images/bao-gia/goi-169.webp",
    scope: "Gói hoàn thiện nội thất tham khảo",
    pricingBasis: "Ngân sách mục tiêu 169 triệu đồng",
    archived: true,
    highlights: [
      "Ưu tiên nhu cầu cơ bản và hệ lưu trữ",
      "Hạn chế chi tiết cầu kỳ, khó sản xuất",
      "Dùng vật liệu phổ biến, dễ bảo trì",
      "Tách hạng mục có thể đầu tư ở giai đoạn sau",
    ],
    sections: [
      {
        title: "Hoàn thiện cơ bản với ngân sách có giới hạn",
        paragraphs: [
          "Phương án nên tập trung vào những món đồ cần thiết cho sinh hoạt và lựa chọn thiết kế đơn giản, kích thước hợp lý. Các hạng mục trang trí hoặc thiết bị nâng cấp có thể được chuẩn bị chờ để bổ sung sau.",
          "Mức 169 triệu được lưu từ nội dung cũ và không còn là báo giá hiện hành.",
        ],
      },
      {
        title: "Không giảm chất lượng ở vị trí quan trọng",
        paragraphs: [
          "Những bộ phận chịu tải, bản lề, ray trượt và bề mặt sử dụng thường xuyên vẫn cần đạt tiêu chuẩn phù hợp. Tối ưu ngân sách nên đến từ thiết kế và phạm vi, không phải cắt giảm thiếu kiểm soát.",
        ],
      },
    ],
    relatedSlugs: [
      "goi-noi-that-hoan-thien-250-trieu",
      "bao-gia-thiet-ke-thi-cong-tu-bep",
      "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    ],
    legacyUrl: "https://toamhoanhao.vn/goi-noi-that-hoan-thien-169-trieu-dong/",
  },
  {
    slug: "bao-gia-thiet-ke-noi-that-chi-phi-hop-ly",
    label: "Kinh nghiệm báo giá",
    title: "Báo giá thiết kế nội thất: Chi phí nào hợp lý với bạn?",
    excerpt:
      "Cách đọc báo giá thiết kế nội thất và lựa chọn phạm vi hồ sơ phù hợp với nhu cầu triển khai thực tế.",
    image: "/images/bao-gia/thiet-ke.webp",
    scope: "Thiết kế nội thất",
    pricingBasis: "Diện tích và mức độ chi tiết hồ sơ",
    highlights: [
      "Xác định rõ phạm vi bản vẽ được bàn giao",
      "So sánh trên cùng tiêu chuẩn và số lần chỉnh sửa",
      "Kiểm tra phần khảo sát và giám sát tác giả",
      "Đánh giá khả năng triển khai của hồ sơ kỹ thuật",
    ],
    sections: [
      {
        title: "Không nên chỉ so sánh đơn giá theo mét vuông",
        paragraphs: [
          "Hai báo giá có cùng đơn vị tính nhưng có thể khác rất nhiều về phạm vi. Một hồ sơ chỉ có phối cảnh sẽ không tương đương với hồ sơ bao gồm mặt bằng, chi tiết kỹ thuật, vật liệu và khối lượng phục vụ thi công.",
          "Chi phí hợp lý là mức chi phí tương xứng với độ đầy đủ của hồ sơ và khả năng hỗ trợ công trình đi từ ý tưởng đến thi công thực tế.",
        ],
      },
      {
        title: "Những câu hỏi cần làm rõ trước khi ký hợp đồng",
        paragraphs: [
          "Hãy làm rõ số phương án, số lần chỉnh sửa, danh mục bản vẽ, thời gian thực hiện, trách nhiệm khảo sát và hỗ trợ trong quá trình thi công. Đây là cơ sở để đánh giá báo giá minh bạch hơn.",
        ],
      },
    ],
    relatedSlugs: [
      "bao-gia-thiet-ke-va-thi-cong-noi-that",
      "bao-gia-noi-that-go-oc-cho",
      "thiet-ke-noi-that-van-phong-ha-noi-220m2",
    ],
    legacyUrl: "https://toamhoanhao.vn/bao-gia-thiet-ke-noi-that/",
  },
];

const legacySections = pricingArticleContent as Record<
  string,
  PricingArticleSection[]
>;

export const pricingArticles: PricingArticle[] = pricingArticleSummaries.map(
  (article) => ({
    ...article,
    sections: legacySections[article.slug] ?? article.sections,
  }),
);

export function getPricingArticleBySlug(slug: string) {
  return pricingArticles.find((article) => article.slug === slug);
}

export function getPricingArticleHref(slug: string) {
  return `/bao-gia/thiet-ke-thi-cong-noi-that/${slug}`;
}
