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
      { label: "Tuyển dụng", href: "/gioi-thieu/tuyen-dung" },
    ],
  },
  {
    label: "Thiết kế nội thất",
    children: [
      { label: "Thiết kế khách sạn", href: "/thiet-ke-noi-that/thiet-ke-khach-san" },
      { label: "Thiết kế nhà phố", href: "/thiet-ke-noi-that/thiet-ke-nha-pho" },
      { label: "Thiết kế showroom", href: "/thiet-ke-noi-that/thiet-ke-showroom" },
      { label: "Thiết kế chung cư", href: "/thiet-ke-noi-that/thiet-ke-chung-cu" },
      { label: "Thiết kế nội thất tân cổ điển", href: "/thiet-ke-noi-that/tan-co-dien" },
      { label: "Thiết kế nội thất biệt thự", href: "/thiet-ke-noi-that/biet-thu" },
      { label: "Nội thất phòng ngủ", href: "/thiet-ke-noi-that/phong-ngu" },
      { label: "Nội thất thông minh", href: "/thiet-ke-noi-that/thong-minh" },
      { label: "Nội thất phòng bếp", href: "/thiet-ke-noi-that/phong-bep" },
      { label: "Nội thất phòng trẻ em", href: "/thiet-ke-noi-that/phong-tre-em" },
    ],
  },
  {
    label: "Thi công nội thất",
    children: [
      { label: "Không gian bếp", href: "/thi-cong-noi-that/khong-gian-bep" },
      { label: "Không gian phòng khách", href: "/thi-cong-noi-that/khong-gian-phong-khach" },
      { label: "Không gian phòng ngủ", href: "/thi-cong-noi-that/khong-gian-phong-ngu" },
      { label: "Thi công chung cư", href: "/thi-cong-noi-that/thi-cong-chung-cu" },
      { label: "Thi công nhà phố", href: "/thi-cong-noi-that/thi-cong-nha-pho" },
      { label: "Thi công phần thô", href: "/thi-cong-noi-that/thi-cong-phan-tho" },
      { label: "Thi công cải tạo", href: "/thi-cong-noi-that/thi-cong-cai-tao" },
      { label: "Thi công sơn bả", href: "/thi-cong-noi-that/thi-cong-son-ba" },
      { label: "Thi công trần thạch cao", href: "/thi-cong-noi-that/thi-cong-tran-thach-cao" },
      { label: "Thi công đồ gỗ", href: "/thi-cong-noi-that/thi-cong-do-go" },
      { label: "Thi công điện nước", href: "/thi-cong-noi-that/thi-cong-dien-nuoc" },
      { label: "Nhật kí thi công", href: "/thi-cong-noi-that/nhat-ki-thi-cong" },
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
      { label: "Tất cả mẫu thiết kế", href: "/mau-thiet-ke" },
      {
        label: "Mẫu thiết kế nội thất chung cư",
        href: "/mau-thiet-ke?danh-muc=chung-cu#design-list",
      },
      {
        label: "Mẫu thiết kế nhà phố",
        href: "/mau-thiet-ke?danh-muc=nha-pho#design-list",
      },
      {
        label: "Mẫu thiết kế biệt thự",
        href: "/mau-thiet-ke?danh-muc=biet-thu#design-list",
      },
      {
        label: "Mẫu phòng khách",
        href: "/mau-thiet-ke?danh-muc=phong-khach#design-list",
      },
      {
        label: "Mẫu phòng ngủ",
        href: "/mau-thiet-ke?danh-muc=phong-ngu#design-list",
      },
      {
        label: "Mẫu phòng bếp",
        href: "/mau-thiet-ke?danh-muc=phong-bep#design-list",
      },
    ],
  },
  {
    label: "Báo giá",
    children: [
      {
        label: "Báo giá thiết kế thi công nội thất",
        href: "/bao-gia/thiet-ke-thi-cong-noi-that",
      },
      {
        label: "Báo giá thiết kế kiến trúc và xây dựng trọn gói",
        href: "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi",
      },
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
    text: "Hà Nội: Tầng 5, Tòa nhà Zen Tower, Số 12 đường Khuất Duy Tiến, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam",
  },
  {
    icon: MapPin,
    text: "TP. Hồ Chí Minh: Số 63 KDC Hiệp Thành 1, Phường Phú Lợi, Thành Phố Hồ Chí Minh, Việt Nam",
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
