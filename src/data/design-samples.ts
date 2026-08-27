import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Building2,
  Home,
  House,
  LampFloor,
  Palette,
  Sofa,
  Trees,
  Trophy,
  Utensils,
} from "lucide-react";

export type DesignSampleCategory =
  | "Tất cả"
  | "Chung cư"
  | "Nhà phố"
  | "Biệt thự"
  | "Phòng khách"
  | "Phòng ngủ"
  | "Phòng bếp"
  | "Tủ bếp"
  | "Phòng trẻ em";

export type DesignSample = {
  title: string;
  slug: string;
  category: Exclude<DesignSampleCategory, "Tất cả">;
  type: string;
  style: string;
  area?: string;
  thumbnail: string;
  summary: string;
  publishedAt: string;
  detail?: DesignSampleDetail;
  featured?: boolean;
  status: "published" | "draft";
};

export type DesignSampleMetric = {
  label: string;
  value: string;
};

export type DesignSampleInfoRow = {
  label: string;
  value: string;
};

export type DesignSampleGalleryItem = {
  title: string;
  image: string;
};

export type DesignFeature = {
  index: string;
  title: string;
  description: string;
  image: string;
  imageSide: "left" | "right";
};

export type SuggestedPackage = {
  title: string;
  price: string;
  featured?: boolean;
  items: string[];
};

export type DesignSampleDetail = {
  eyebrow: string;
  displayTitle: string;
  italicTitle: string;
  heroImage: string;
  description: string;
  propertyType: string;
  bedrooms?: string;
  bathrooms?: string;
  budgetRange?: string;
  suitableFor: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  metrics: DesignSampleMetric[];
  infoRows: DesignSampleInfoRow[];
  gallery: DesignSampleGalleryItem[];
  features: DesignFeature[];
  floorPlanImage: string;
  floorPlanNotes: DesignSampleInfoRow[];
  suggestedPackages: SuggestedPackage[];
  relatedSampleSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};

export type DesignCategoryCard = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const designCategoryCards: DesignCategoryCard[] = [
  {
    title: "Mẫu thiết kế nội thất chung cư",
    href: "/mau-thiet-ke?danh-muc=chung-cu#design-list",
    icon: Building2,
  },
  {
    title: "Mẫu thiết kế nhà phố",
    href: "/mau-thiet-ke?danh-muc=nha-pho#design-list",
    icon: Home,
  },
  {
    title: "Mẫu thiết kế biệt thự",
    href: "/mau-thiet-ke?danh-muc=biet-thu#design-list",
    icon: House,
  },
  {
    title: "Mẫu phòng khách",
    href: "/mau-thiet-ke?danh-muc=phong-khach#design-list",
    icon: Sofa,
  },
  {
    title: "Mẫu phòng ngủ",
    href: "/mau-thiet-ke?danh-muc=phong-ngu#design-list",
    icon: BedDouble,
  },
  {
    title: "Mẫu phòng bếp",
    href: "/mau-thiet-ke?danh-muc=phong-bep#design-list",
    icon: Utensils,
  },
];

export const designFilterCategories: DesignSampleCategory[] = [
  "Tất cả",
  "Chung cư",
  "Nhà phố",
  "Biệt thự",
  "Phòng khách",
  "Phòng ngủ",
  "Phòng bếp",
];

const designCategorySlugs: Record<DesignSampleCategory, string | null> = {
  "Tất cả": null,
  "Chung cư": "chung-cu",
  "Nhà phố": "nha-pho",
  "Biệt thự": "biet-thu",
  "Phòng khách": "phong-khach",
  "Phòng ngủ": "phong-ngu",
  "Phòng bếp": "phong-bep",
  "Tủ bếp": "tu-bep",
  "Phòng trẻ em": "phong-tre-em",
};

export function getDesignCategoryHref(category: DesignSampleCategory) {
  const slug = designCategorySlugs[category];
  return slug
    ? `/mau-thiet-ke?danh-muc=${slug}#design-list`
    : "/mau-thiet-ke#design-list";
}

export function getDesignCategoryFromQuery(
  query?: string,
): DesignSampleCategory {
  const category = Object.entries(designCategorySlugs).find(
    ([, slug]) => slug === query,
  )?.[0];

  return (category as DesignSampleCategory | undefined) ?? "Tất cả";
}

export const designSamples: DesignSample[] = [
  {
    title: "Mẫu Japandi 2PN",
    slug: "mau-japandi-2pn",
    category: "Chung cư",
    type: "Căn hộ",
    style: "Japandi",
    area: "95m²",
    thumbnail:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    summary: "Không gian căn hộ sáng, tối giản và ấm áp với chất liệu gỗ tự nhiên.",
    detail: {
      eyebrow: "Mẫu thiết kế nội thất chung cư",
      displayTitle: "Mẫu thiết kế",
      italicTitle: "Japandi 2PN",
      heroImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      description:
        "Mẫu căn hộ Japandi 2PN mang đến không gian sống thanh tịnh, hiện đại và ấm áp, kết hợp giữa tối giản Nhật Bản và sự mộc mạc của phong cách Bắc Âu.",
      propertyType: "Căn hộ",
      bedrooms: "2 phòng ngủ",
      bathrooms: "2",
      budgetRange: "450-650 triệu",
      suitableFor: "Gia đình trẻ",
      overviewTitle: "Tinh giản, ấm áp và cân bằng",
      overviewParagraphs: [
        "Mẫu thiết kế Japandi 2PN là giải pháp hoàn hảo cho các gia đình trẻ yêu thích sự tối giản, tinh tế và đề cao trải nghiệm sống chất lượng.",
        "Không gian được tổ chức khoa học, tận dụng ánh sáng tự nhiên, chất liệu tự nhiên và tông màu ấm trung tính, mang lại cảm giác thư thái và bền vững theo thời gian.",
      ],
      metrics: [
        { label: "Diện tích", value: "95m²" },
        { label: "Phong cách", value: "Japandi" },
        { label: "Phù hợp", value: "Căn hộ 2PN" },
        { label: "Chi phí dự kiến", value: "450-650 triệu" },
      ],
      infoRows: [
        { label: "Loại hình", value: "Căn hộ" },
        { label: "Diện tích", value: "95m²" },
        { label: "Số phòng ngủ", value: "2" },
        { label: "Số phòng tắm", value: "2" },
        { label: "Phong cách", value: "Japandi" },
        { label: "Đối tượng phù hợp", value: "Gia đình trẻ" },
        { label: "Mức đầu tư", value: "450-650 triệu" },
      ],
      gallery: [
        {
          title: "Phòng khách",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
        },
        {
          title: "Phòng ngủ master",
          image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
        },
        {
          title: "Bếp & bàn ăn",
          image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
        },
        {
          title: "Phòng ngủ nhỏ / góc làm việc",
          image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
        },
      ],
      features: [
        {
          index: "01",
          title: "Bố cục mở",
          description:
            "Thiết kế mở liên thông giữa phòng khách, bếp và ban công giúp không gian rộng rãi, tăng sự kết nối và tối ưu tầm nhìn.",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
          imageSide: "right",
        },
        {
          index: "02",
          title: "Chất liệu tự nhiên",
          description:
            "Ưu tiên gỗ sáng màu, vải linen, đá vân nhẹ và cây xanh, tạo nên không gian gần gũi, ấm áp và tốt cho sức khỏe.",
          image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
          imageSide: "left",
        },
        {
          index: "03",
          title: "Lưu trữ tối ưu",
          description:
            "Hệ tủ âm tường, kệ đa năng và bố trí khoa học giúp tối ưu không gian lưu trữ, giữ cho căn hộ luôn gọn gàng, ngăn nắp.",
          image:
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
          imageSide: "right",
        },
      ],
      floorPlanImage: "/floor-plan-japandi-2pn.svg",
      floorPlanNotes: [
        {
          label: "Tối ưu công năng",
          value: "Bố trí khoa học, tận dụng từng mét diện tích.",
        },
        {
          label: "Đón sáng tự nhiên",
          value: "Phòng khách và phòng ngủ đều có cửa sổ lớn, thoáng sáng.",
        },
        {
          label: "Phân khu hợp lý",
          value: "Khu vực chung và riêng tách biệt, đảm bảo sự riêng tư.",
        },
        {
          label: "Dễ thi công thực tế",
          value: "Chi tiết kỹ thuật rõ ràng, phù hợp thi công tại Việt Nam.",
        },
      ],
      suggestedPackages: [
        {
          title: "Cơ bản",
          price: "350-450 triệu",
          items: [
            "Thiết kế 2D bố trí mặt bằng",
            "Phối cảnh 3D các không gian chính",
            "Hồ sơ kỹ thuật thi công cơ bản",
          ],
        },
        {
          title: "Tiêu chuẩn",
          price: "450-650 triệu",
          featured: true,
          items: [
            "Thiết kế 2D + phối cảnh 3D đầy đủ",
            "Hồ sơ kỹ thuật chi tiết",
            "Tư vấn giải pháp & dự toán chi phí",
          ],
        },
        {
          title: "Cao cấp",
          price: "650-850 triệu",
          items: [
            "Thiết kế 3D cao cấp & video walkthrough",
            "Hồ sơ kỹ thuật hoàn chỉnh",
            "Giám sát thi công & quản lý chất lượng",
          ],
        },
      ],
      relatedSampleSlugs: [
        "mau-modern-minimal-3pn",
        "mau-scandinavian-1pn",
        "mau-can-ho-lumiere",
      ],
      seoTitle: "Mẫu thiết kế Japandi 2PN | Tổ Ấm Hoàn Hảo",
      seoDescription:
        "Mẫu thiết kế nội thất căn hộ Japandi 2PN 95m² với bố cục mở, chất liệu tự nhiên và tông be gỗ sáng.",
    },
    featured: true,
    status: "published",
    publishedAt: "2026-08-27T00:00:00.000Z",
  },
  {
    title: "Mẫu Modern Minimal 3PN",
    slug: "mau-modern-minimal-3pn",
    category: "Chung cư",
    type: "Căn hộ",
    style: "Modern",
    area: "120m²",
    thumbnail:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
    summary: "Căn hộ hiện đại với bố cục gọn, ánh sáng mềm và tông trung tính.",
    status: "published",
    publishedAt: "2026-08-25T00:00:00.000Z",
  },
  {
    title: "Mẫu Biệt thự Riverside",
    slug: "mau-biet-thu-riverside",
    category: "Biệt thự",
    type: "Biệt thự",
    style: "Luxury",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85",
    summary: "Không gian biệt thự mở, sang trọng và kết nối với sân vườn.",
    status: "published",
    publishedAt: "2026-08-23T00:00:00.000Z",
  },
  {
    title: "Mẫu Scandinavian 1PN",
    slug: "mau-scandinavian-1pn",
    category: "Chung cư",
    type: "Căn hộ",
    style: "Scandinavian",
    area: "55m²",
    thumbnail:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
    summary: "Mẫu căn hộ nhỏ nhẹ nhàng, sáng và tối ưu công năng lưu trữ.",
    status: "published",
    publishedAt: "2026-08-21T00:00:00.000Z",
  },
  {
    title: "Mẫu Nhà phố Urban Calm",
    slug: "mau-nha-pho-urban-calm",
    category: "Nhà phố",
    type: "Nhà phố",
    style: "Modern",
    area: "110m²",
    thumbnail:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
    summary: "Không gian nhà phố thanh lịch với phòng khách liền bếp thoáng đãng.",
    status: "published",
    publishedAt: "2026-08-19T00:00:00.000Z",
  },
  {
    title: "Mẫu Phòng khách Cozy Living",
    slug: "mau-phong-khach-cozy-living",
    category: "Phòng khách",
    type: "Phòng khách",
    style: "Warm Modern",
    area: "28m²",
    thumbnail:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    summary: "Phòng khách tone be gỗ ấm, phù hợp căn hộ và nhà phố hiện đại.",
    status: "published",
    publishedAt: "2026-08-17T00:00:00.000Z",
  },
  {
    title: "Mẫu Phòng ngủ Warm Nest",
    slug: "mau-phong-ngu-warm-nest",
    category: "Phòng ngủ",
    type: "Phòng ngủ",
    style: "Modern",
    area: "20m²",
    thumbnail:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    summary: "Phòng ngủ thư giãn với ánh sáng dịu, chất liệu mềm và tủ âm tường.",
    status: "published",
    publishedAt: "2026-08-15T00:00:00.000Z",
  },
  {
    title: "Mẫu Bếp Elegant Kitchen",
    slug: "mau-bep-elegant-kitchen",
    category: "Phòng bếp",
    type: "Phòng bếp",
    style: "Modern",
    area: "22m²",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    summary: "Bếp mở tinh gọn, kết hợp đảo bếp và khu bàn ăn gia đình.",
    status: "published",
    publishedAt: "2026-08-13T00:00:00.000Z",
  },
  {
    title: "Mẫu Tủ bếp Minimal Oak",
    slug: "mau-tu-bep-minimal-oak",
    category: "Tủ bếp",
    type: "Tủ bếp",
    style: "Minimal",
    area: "15m²",
    thumbnail:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
    summary: "Tủ bếp gỗ sáng tối giản, nhiều khoang lưu trữ và thiết bị âm tủ.",
    status: "published",
    publishedAt: "2026-08-11T00:00:00.000Z",
  },
  {
    title: "Mẫu Phòng trẻ em Walnut Line",
    slug: "mau-phong-tre-em-walnut-line",
    category: "Phòng trẻ em",
    type: "Phòng trẻ em",
    style: "Warm Playful",
    thumbnail:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    summary: "Không gian phòng trẻ em ấm áp, nhiều lưu trữ và an toàn khi sử dụng.",
    status: "published",
    publishedAt: "2026-08-09T00:00:00.000Z",
  },
  {
    title: "Mẫu Căn hộ Lumière",
    slug: "mau-can-ho-lumiere",
    category: "Chung cư",
    type: "Căn hộ",
    style: "Modern",
    area: "85m²",
    thumbnail:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    summary: "Mẫu căn hộ sáng, mềm và phù hợp gia đình trẻ yêu phong cách hiện đại.",
    status: "published",
    publishedAt: "2026-08-07T00:00:00.000Z",
  },
  {
    title: "Mẫu Biệt thự Green Villa",
    slug: "mau-biet-thu-green-villa",
    category: "Biệt thự",
    type: "Biệt thự",
    style: "Tropical",
    thumbnail:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=85",
    summary: "Biệt thự nghỉ dưỡng với mảng xanh, hiên rộng và chất liệu tự nhiên.",
    status: "published",
    publishedAt: "2026-08-05T00:00:00.000Z",
  },
];

export const homeDesignCategories = [
  "Chung cư",
  "Nhà phố",
  "Phòng khách",
  "Phòng bếp",
];

export const featuredHomeDesignSamples = designSamples
  .filter((sample) => sample.featured)
  .concat(designSamples)
  .filter(
    (sample, index, collection) =>
      collection.findIndex((item) => item.slug === sample.slug) === index,
  )
  .slice(0, 3);

export const featuredDesignCollection = {
  title: "Bộ sưu tập Japandi",
  subtitle: "Bộ sưu tập nổi bật",
  description:
    "Những mẫu thiết kế mang tinh thần tối giản, cân bằng và ấm áp, kết hợp vẻ thanh lịch của Nhật Bản với sự gần gũi của Bắc Âu.",
  image:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  facts: [
    { icon: Building2, label: "Phù hợp", value: "Căn hộ 1-3PN" },
    { icon: Palette, label: "Tông màu", value: "Be - gỗ sáng" },
    { icon: LampFloor, label: "Phong cách", value: "Tinh giản" },
    { icon: Home, label: "Ứng dụng", value: "Không gian sống hiện đại" },
  ],
};

export const popularDesignStyles = [
  {
    title: "Japandi",
    count: "12 mẫu",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Modern Luxury",
    count: "10 mẫu",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Scandinavian",
    count: "8 mẫu",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
  },
];

export const designStats = [
  {
    icon: Building2,
    value: "200+",
    title: "Mẫu thiết kế sẵn có",
    description: "Đa dạng phong cách, phù hợp mọi không gian sống",
  },
  {
    icon: House,
    value: "500+",
    title: "Công trình thực tế",
    description: "Kinh nghiệm thực chiến, đảm bảo chất lượng",
  },
  {
    icon: Trophy,
    value: "98%",
    title: "Khách hàng hài lòng",
    description: "Cam kết đồng hành và chăm sóc tận tâm",
  },
  {
    icon: Trees,
    value: "100%",
    title: "Tư vấn phù hợp nhu cầu",
    description: "Giải pháp cá nhân hóa, hiệu quả tối ưu",
  },
];

export function getDesignSampleBySlug(slug: string) {
  return designSamples.find((sample) => sample.slug === slug);
}

export function getRelatedDesignSamples(sample: DesignSample) {
  const relatedSlugs = sample.detail?.relatedSampleSlugs ?? [];
  const relatedBySlug = relatedSlugs
    .map((slug) => getDesignSampleBySlug(slug))
    .filter((item): item is DesignSample => Boolean(item));

  if (relatedBySlug.length > 0) {
    return relatedBySlug;
  }

  return designSamples
    .filter((item) => item.slug !== sample.slug && item.status === "published")
    .slice(0, 3);
}
