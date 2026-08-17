import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  Grid2X2,
  Home,
  House,
  Layers3,
  MessageCircle,
  Store,
  ShieldCheck,
  Smile,
  Trophy,
} from "lucide-react";

export type ProjectCategory =
  | "Tất cả dự án"
  | "Căn hộ"
  | "Biệt thự"
  | "Nhà phố"
  | "Văn phòng"
  | "Không gian kinh doanh"
  | "Nội thất trọn gói";

export type Project = {
  title: string;
  slug: string;
  category: Exclude<ProjectCategory, "Tất cả dự án">;
  location: string;
  area: string;
  year: string;
  style: string;
  thumbnail: string;
  summary: string;
  detail?: ProjectDetail;
  featured?: boolean;
  status: "published" | "draft";
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectInfoRow = {
  label: string;
  value: string;
};

export type ProjectSpace = {
  title: string;
  image: string;
};

export type ProjectStoryBlock = {
  index: string;
  total: string;
  title: string;
  description: string;
  image: string;
  imageSide: "left" | "right";
};

export type ProjectDetail = {
  eyebrow: string;
  displayTitle: string;
  italicTitle: string;
  heroImage: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  duration: string;
  scope: string;
  metrics: ProjectMetric[];
  overviewTitle: string;
  overviewParagraphs: string[];
  infoRows: ProjectInfoRow[];
  spaces: ProjectSpace[];
  storyBlocks: ProjectStoryBlock[];
  floorPlanImage: string;
  floorPlanNotes: ProjectInfoRow[];
  relatedProjectSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};

export type ProjectCategoryFilter = {
  label: ProjectCategory;
  icon: LucideIcon;
};

export const projectCategoryFilters: ProjectCategoryFilter[] = [
  { label: "Tất cả dự án", icon: Grid2X2 },
  { label: "Căn hộ", icon: Building2 },
  { label: "Biệt thự", icon: House },
  { label: "Nhà phố", icon: Home },
  { label: "Văn phòng", icon: BriefcaseBusiness },
  { label: "Không gian kinh doanh", icon: Store },
  { label: "Nội thất trọn gói", icon: Layers3 },
];

export const projects: Project[] = [
  {
    title: "Căn hộ The Matrix One",
    slug: "can-ho-the-matrix-one",
    category: "Căn hộ",
    location: "Hà Nội",
    area: "120m²",
    year: "2025",
    style: "Modern Luxury",
    thumbnail:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
    summary:
      "Không gian căn hộ ấm áp, tối ưu công năng cho gia đình trẻ tại Hà Nội.",
    detail: {
      eyebrow: "Dự án căn hộ",
      displayTitle: "Căn hộ",
      italicTitle: "The Matrix One",
      heroImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      description:
        "Không gian sống hiện đại, tinh tế và ấm áp, được thiết kế dành riêng cho gia đình trẻ yêu thích sự tối giản và tiện nghi.",
      bedrooms: "2 phòng ngủ",
      bathrooms: "2",
      duration: "8 tuần",
      scope: "Thiết kế & thi công nội thất",
      metrics: [
        { label: "Diện tích", value: "120m²" },
        { label: "Hạng mục", value: "Thiết kế & thi công nội thất" },
        { label: "Thời gian", value: "8 tuần" },
        { label: "Phong cách", value: "Modern Luxury" },
      ],
      overviewTitle: "Không gian sống đủ đầy và kết nối",
      overviewParagraphs: [
        "Gia chủ là một cặp vợ chồng trẻ cùng con nhỏ, mong muốn một tổ ấm hiện đại, ấm áp và thật nghỉ để cân bằng giữa công việc và cuộc sống.",
        "Thiết kế hướng đến sự tinh giản về hình thức, tối ưu công năng, khai thác ánh sáng tự nhiên và sử dụng chất liệu bền vững để mang lại cảm giác thư thái, gắn kết cho cả gia đình.",
      ],
      infoRows: [
        { label: "Vị trí", value: "Hà Nội" },
        { label: "Diện tích", value: "120m²" },
        { label: "Hạng mục", value: "Thiết kế & thi công trọn gói" },
        { label: "Phòng ngủ", value: "2" },
        { label: "Phòng tắm", value: "2" },
        { label: "Năm hoàn thiện", value: "2024" },
      ],
      spaces: [
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
          title: "Bếp & khu vực ăn",
          image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
        },
        {
          title: "Góc làm việc & ban công",
          image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
        },
      ],
      storyBlocks: [
        {
          index: "01",
          total: "01",
          title: "Phòng khách",
          description:
            "Ánh sáng tự nhiên tràn ngập qua hệ cửa kính lớn, kết hợp cùng tông màu be ấm và chất liệu gỗ tự nhiên, mang đến không gian mở, thư thái và gắn kết.",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
          imageSide: "right",
        },
        {
          index: "03",
          total: "02",
          title: "Phòng ngủ master",
          description:
            "Dấu giường ốp gỗ kết hợp vải nỉ, ánh sáng dịu nhẹ và tủ âm tường tối ưu lưu trữ, tạo nên không gian nghỉ ngơi yên tĩnh và thư giãn tuyệt đối.",
          image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
          imageSide: "left",
        },
        {
          index: "02",
          total: "03",
          title: "Bếp & khu vực ăn",
          description:
            "Tủ bếp gọn gàng, thiết bị hiện đại và bàn ăn ấm cúng giúp mọi bữa cơm trở thành khoảnh khắc sum vầy, kết nối yêu thương.",
          image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
          imageSide: "right",
        },
      ],
      floorPlanImage: "/floor-plan-matrix-one.svg",
      floorPlanNotes: [
        {
          label: "Tối ưu giao thông",
          value: "Lối đi thông thoáng, kết nối mạch lạc giữa các không gian.",
        },
        {
          label: "Tăng sáng tự nhiên",
          value: "Bố trí cửa kính lớn và logia giúp đón ánh sáng vào giờ trời.",
        },
        {
          label: "Lưu trữ thông minh",
          value: "Hệ tủ âm tường và khu lưu trữ tối ưu diện tích sử dụng.",
        },
        {
          label: "Đồng nhất hoàn thiện",
          value: "Sử dụng gỗ, đá và vải tự nhiên tạo nên tổng thể hài hòa.",
        },
      ],
      relatedProjectSlugs: [
        "penthouse-west-lake",
        "can-ho-sun-grand-city",
        "biet-thu-riverside",
      ],
      seoTitle: "Căn hộ The Matrix One | Tổ Ấm Hoàn Hảo",
      seoDescription:
        "Dự án thiết kế và thi công nội thất căn hộ The Matrix One 120m² theo phong cách Modern Luxury.",
    },
    featured: true,
    status: "published",
  },
  {
    title: "Vinhomes Ocean Park",
    slug: "vinhomes-ocean-park",
    category: "Căn hộ",
    location: "Hà Nội",
    area: "90m²",
    year: "2025",
    style: "Japandi",
    thumbnail:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    summary:
      "Thiết kế căn hộ gọn gàng với chất liệu sáng, mềm và nhiều ánh sáng tự nhiên.",
    status: "published",
  },
  {
    title: "Biệt thự Riverside",
    slug: "biet-thu-riverside",
    category: "Biệt thự",
    location: "Hà Nội",
    area: "250m²",
    year: "2024",
    style: "Contemporary",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85",
    summary:
      "Biệt thự với không gian sinh hoạt mở, kết nối phòng khách, bếp và sân vườn.",
    status: "published",
  },
  {
    title: "Nhà phố Modern Garden",
    slug: "nha-pho-modern-garden",
    category: "Nhà phố",
    location: "Hà Nội",
    area: "150m²",
    year: "2024",
    style: "Modern Tropical",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    summary:
      "Nhà phố hiện đại với mảng xanh và khoảng thông tầng tạo cảm giác thoáng đãng.",
    status: "published",
  },
  {
    title: "Penthouse West Lake",
    slug: "penthouse-west-lake",
    category: "Nội thất trọn gói",
    location: "Hà Nội",
    area: "280m²",
    year: "2025",
    style: "Modern Luxury",
    thumbnail:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    summary:
      "Không gian penthouse sang trọng với tầm nhìn panorama hồ Tây, kết hợp chất liệu cao cấp và nghệ thuật ánh sáng.",
    featured: true,
    status: "published",
  },
  {
    title: "Văn phòng Elegant Hub",
    slug: "van-phong-elegant-hub",
    category: "Văn phòng",
    location: "Hà Nội",
    area: "300m²",
    year: "2024",
    style: "Minimal Office",
    thumbnail:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    summary:
      "Văn phòng sáng, linh hoạt, tối ưu khu làm việc nhóm và phòng họp riêng.",
    status: "published",
  },
  {
    title: "Căn hộ Sun Grand City",
    slug: "can-ho-sun-grand-city",
    category: "Căn hộ",
    location: "Hà Nội",
    area: "110m²",
    year: "2024",
    style: "Warm Modern",
    thumbnail:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
    summary:
      "Căn hộ tông gỗ ấm, xử lý lưu trữ thông minh và bếp mở thân thiện.",
    status: "published",
  },
  {
    title: "Biệt thự Green Villa",
    slug: "biet-thu-green-villa",
    category: "Biệt thự",
    location: "Hà Nội",
    area: "380m²",
    year: "2023",
    style: "Resort Living",
    thumbnail:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=85",
    summary:
      "Không gian biệt thự nghỉ dưỡng tại gia, cân bằng giữa riêng tư và kết nối.",
    status: "published",
  },
  {
    title: "Nhà phố Harmony House",
    slug: "nha-pho-harmony-house",
    category: "Nhà phố",
    location: "Hà Nội",
    area: "160m²",
    year: "2024",
    style: "Scandinavian",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    summary:
      "Nhà phố nhẹ nhàng với màu trung tính, ánh sáng tự nhiên và nội thất tinh gọn.",
    status: "published",
  },
  {
    title: "Văn phòng Creative Space",
    slug: "van-phong-creative-space",
    category: "Văn phòng",
    location: "Hà Nội",
    area: "220m²",
    year: "2023",
    style: "Creative Office",
    thumbnail:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    summary:
      "Không gian làm việc mở cho đội ngũ sáng tạo, có lounge và khu brainstorm.",
    status: "published",
  },
  {
    title: "Căn hộ Lumière Riverside",
    slug: "can-ho-lumiere-riverside",
    category: "Căn hộ",
    location: "Hà Nội",
    area: "95m²",
    year: "2025",
    style: "Soft Contemporary",
    thumbnail:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    summary:
      "Căn hộ sáng và mềm, tập trung trải nghiệm sinh hoạt gia đình hằng ngày.",
    status: "published",
  },
  {
    title: "Biệt thự Lakeview",
    slug: "biet-thu-lakeview",
    category: "Biệt thự",
    location: "Hà Nội",
    area: "320m²",
    year: "2025",
    style: "Modern Luxury",
    thumbnail:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    summary:
      "Biệt thự view hồ với mặt đứng hiện đại, nội thất tinh tế và nhiều khoảng mở.",
    status: "published",
  },
];

export const featuredProject =
  projects.find((project) => project.slug === "penthouse-west-lake") ?? projects[0];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project) {
  const relatedSlugs = project.detail?.relatedProjectSlugs ?? [];
  const relatedBySlug = relatedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((item): item is Project => Boolean(item));

  if (relatedBySlug.length > 0) {
    return relatedBySlug;
  }

  return projects
    .filter((item) => item.slug !== project.slug && item.status === "published")
    .slice(0, 3);
}

export const projectStats = [
  {
    icon: Trophy,
    value: "15+",
    title: "Năm kinh nghiệm",
    description: "Trong lĩnh vực thiết kế và thi công nội thất",
  },
  {
    icon: Building2,
    value: "500+",
    title: "Công trình hoàn thiện",
    description: "Trên khắp Hà Nội và các tỉnh thành",
  },
  {
    icon: Smile,
    value: "98%",
    title: "Khách hàng hài lòng",
    description: "Với chất lượng dịch vụ và sản phẩm",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Cam kết đúng tiến độ",
    description: "Minh bạch trong báo giá và không phát sinh",
  },
];

export const projectSupport = {
  icon: MessageCircle,
  title: "Bạn cần tư vấn dự án phù hợp?",
  cta: "Liên hệ chúng tôi",
};
