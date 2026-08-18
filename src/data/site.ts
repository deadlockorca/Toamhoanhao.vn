import type { LucideIcon } from "lucide-react";
import {
  CircleCheck,
  ClipboardList,
  DraftingCompass,
  Factory,
  Globe2,
  Hammer,
  Headphones,
  Mail,
  MapPin,
  MessageSquareText,
  PackageCheck,
  PenLine,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    href?: string;
    children?: Array<{
      label: string;
      href?: string;
    }>;
  }>;
};

export const navigation: NavigationItem[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { label: "Về Tổ Ấm Hoàn Hảo", href: "/gioi-thieu" },
      {
        label: "Năng lực thiết kế và thi công",
        href: "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
      },
      {
        label: "Đội ngũ kiến trúc sư",
        href: "/gioi-thieu/doi-ngu-kien-truc-su",
      },
      {
        label: "Xưởng sản xuất nội thất",
        href: "/gioi-thieu/xuong-san-xuat-noi-that",
      },
      { label: "Tuyển dụng" },
    ],
  },
  {
    label: "Dịch vụ",
    children: [
      {
        label: "Thiết kế nội thất",
        children: [
          { label: "Thiết kế nội thất chung cư" },
          { label: "Thiết kế nội thất nhà phố" },
          { label: "Thiết kế nội thất biệt thự" },
          { label: "Thiết kế nội thất văn phòng" },
          { label: "Thiết kế nội thất showroom, cửa hàng" },
        ],
      },
      {
        label: "Thi công nội thất",
        children: [
          { label: "Thi công nội thất chung cư" },
          { label: "Thi công nội thất nhà phố" },
          { label: "Thi công nội thất biệt thự" },
          { label: "Thi công nội thất văn phòng" },
          { label: "Thi công đồ gỗ nội thất" },
        ],
      },
      {
        label: "Xây nhà trọn gói",
        children: [
          { label: "Xây nhà phố trọn gói" },
          { label: "Xây biệt thự trọn gói" },
          { label: "Thi công phần thô" },
          { label: "Hoàn thiện nhà" },
        ],
      },
      {
        label: "Cải tạo nhà",
        children: [
          { label: "Cải tạo chung cư" },
          { label: "Cải tạo nhà phố" },
          { label: "Cải tạo biệt thự" },
          { label: "Cải tạo văn phòng, cửa hàng" },
        ],
      },
      {
        label: "Sản xuất đồ gỗ nội thất",
        children: [
          { label: "Tủ bếp" },
          { label: "Tủ quần áo" },
          { label: "Kệ tivi" },
          { label: "Giường ngủ" },
          { label: "Nội thất đặt đóng theo yêu cầu" },
        ],
      },
    ],
  },
  {
    label: "Dự án",
    href: "/du-an",
    children: [
      { label: "Tất cả dự án", href: "/du-an" },
      { label: "Căn hộ", href: "/du-an?danh-muc=can-ho" },
      { label: "Biệt thự", href: "/du-an?danh-muc=biet-thu" },
      { label: "Nhà phố", href: "/du-an?danh-muc=nha-pho" },
      { label: "Văn phòng", href: "/du-an?danh-muc=van-phong" },
      {
        label: "Không gian kinh doanh",
        href: "/du-an?danh-muc=khong-gian-kinh-doanh",
      },
      {
        label: "Nội thất trọn gói",
        href: "/du-an?danh-muc=noi-that-tron-goi",
      },
    ],
  },
  {
    label: "Mẫu thiết kế",
    children: [
      { label: "Tất cả mẫu thiết kế" },
      { label: "Mẫu thiết kế nội thất chung cư" },
      { label: "Mẫu thiết kế nhà phố" },
      { label: "Mẫu thiết kế biệt thự" },
      { label: "Mẫu phòng khách" },
      { label: "Mẫu phòng ngủ" },
      { label: "Mẫu phòng bếp" },
    ],
  },
  {
    label: "Báo giá",
    children: [
      { label: "Báo giá thiết kế thi công nội thất" },
      { label: "Báo giá thiết kế kiến trúc và xây dựng trọn gói" },
    ],
  },
  {
    label: "Kiến thức",
    children: [
      { label: "Kinh nghiệm xây nhà", href: "/kien-thuc/kinh-nghiem-xay-nha" },
      {
        label: "Kinh nghiệm thi công, thiết kế nội thất",
        href: "/kien-thuc/kinh-nghiem-thiet-ke-noi-that",
      },
      { label: "Pháp lý xây dựng", href: "/kien-thuc/phap-ly-xay-dung" },
      { label: "Kiến thức nhà đẹp", href: "/kien-thuc/kien-thuc-nha-dep" },
    ],
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
  },
];

export const projectCategories = [
  "Căn hộ",
  "Biệt thự",
  "Nhà phố",
  "Văn phòng",
  "Không gian kinh doanh",
  "Nội thất trọn gói",
];

export const featuredProjects = [
  {
    category: "Căn hộ chung cư",
    title: "The Matrix One",
    slug: "can-ho-the-matrix-one",
    meta: "Hà Nội · 120m²",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Căn hộ chung cư",
    title: "Vinhomes Ocean Park",
    slug: "vinhomes-ocean-park",
    meta: "Hà Nội · 90m²",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Biệt thự",
    title: "Vinhomes Riverside",
    slug: "biet-thu-riverside",
    meta: "Hà Nội · 250m²",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  lines: string[];
};

export const services: Service[] = [
  {
    icon: DraftingCompass,
    title: "Thiết kế nội thất",
    lines: ["Sáng tạo · Tối ưu công năng", "Thể hiện phong cách riêng"],
  },
  {
    icon: Hammer,
    title: "Thi công nội thất",
    lines: ["Đội ngũ chuyên nghiệp", "Thi công chuẩn kỹ thuật"],
  },
  {
    icon: Factory,
    title: "Sản xuất nội thất",
    lines: ["Xưởng sản xuất hiện đại", "Chất lượng kiểm soát chặt chẽ"],
  },
  {
    icon: PackageCheck,
    title: "Nội thất trọn gói",
    lines: ["Giải pháp toàn diện", "Tiết kiệm thời gian, chi phí"],
  },
  {
    icon: Sparkles,
    title: "Tư vấn phong thủy",
    lines: ["Cân bằng năng lượng", "Mang lại tài lộc, bình an"],
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành & hậu mãi",
    lines: ["Bảo hành dài hạn", "Hỗ trợ nhanh chóng, tận tâm"],
  },
];

export type WorkStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const workSteps: WorkStep[] = [
  {
    icon: MessageSquareText,
    title: "Tiếp nhận & tư vấn",
    description: "Lắng nghe nhu cầu và khảo sát thực tế",
  },
  {
    icon: PenLine,
    title: "Thiết kế & báo giá",
    description: "Lên ý tưởng thiết kế và báo giá chi tiết",
  },
  {
    icon: ClipboardList,
    title: "Ký hợp đồng & triển khai",
    description: "Thống nhất hợp đồng và triển khai thi công",
  },
  {
    icon: Hammer,
    title: "Thi công & giám sát",
    description: "Thi công đúng tiến độ, giám sát chặt chẽ",
  },
  {
    icon: CircleCheck,
    title: "Nghiệm thu & bàn giao",
    description: "Nghiệm thu chất lượng, bàn giao công trình",
  },
  {
    icon: Headphones,
    title: "Bảo hành & hậu mãi",
    description: "Đồng hành và hỗ trợ sau khi bàn giao",
  },
];

export const testimonials = [
  {
    quote:
      "Đội ngũ thiết kế rất sáng tạo, luôn lắng nghe và đưa ra những giải pháp tối ưu nhất. Chúng tôi rất hài lòng với không gian sống hiện tại.",
    name: "Anh Tuấn",
    project: "Vinhomes Ocean Park",
    initials: "AT",
  },
  {
    quote:
      "Thi công đúng tiến độ, chất lượng hoàn thiện rất tốt. Tổ Ấm Hoàn Hảo là đơn vị uy tín, chúng tôi sẽ tiếp tục hợp tác trong các dự án sau.",
    name: "Chị Hương",
    project: "The Matrix One",
    initials: "CH",
  },
  {
    quote:
      "Minh bạch trong báo giá, không phát sinh chi phí. Đội ngũ làm việc chuyên nghiệp, tận tâm từ đầu đến cuối.",
    name: "Anh Nam",
    project: "Royal City",
    initials: "AN",
  },
];

export const footerColumns = [
  {
    title: "Về chúng tôi",
    links: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      {
        label: "Năng lực thiết kế & thi công",
        href: "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
      },
      {
        label: "Xưởng sản xuất nội thất",
        href: "/gioi-thieu/xuong-san-xuat-noi-that",
      },
      { label: "Tầm nhìn · Sứ mệnh" },
      { label: "Đội ngũ nhân sự", href: "/gioi-thieu/doi-ngu-kien-truc-su" },
      { label: "Quy trình làm việc" },
    ],
  },
  {
    title: "Dịch vụ",
    links: [
      { label: "Thiết kế nội thất" },
      { label: "Thi công nội thất" },
      { label: "Sản xuất nội thất" },
      { label: "Nội thất trọn gói" },
      { label: "Tư vấn phong thủy" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Câu hỏi thường gặp" },
      { label: "Chính sách bảo hành" },
      { label: "Chính sách bảo mật" },
      { label: "Điều khoản sử dụng" },
    ],
  },
];

export type ContactInfo = {
  icon: LucideIcon;
  text: string;
};

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    text: "Tầng 6, 48 Tố Hữu, Nam Từ Liêm, Hà Nội",
  },
  {
    icon: Phone,
    text: "0903.897.555",
  },
  {
    icon: Mail,
    text: "hotro.toamhoanhao@gmail.com",
  },
  {
    icon: Globe2,
    text: "toamhoanhao.vn",
  },
];

export const socialLinks = ["f", "◎", "▶", "in"];
