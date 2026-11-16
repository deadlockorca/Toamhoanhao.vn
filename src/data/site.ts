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
  image?: string;
  layout?: "portfolio" | "services";
  uppercaseChildren?: boolean;
  children?: NavigationItem[];
};

export const navigation: NavigationItem[] = [
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
        label: "Hệ thống nhà xưởng sản xuất nội thất",
        href: "/gioi-thieu/xuong-san-xuat-noi-that",
      },
      { label: "Tuyển dụng", href: "/gioi-thieu/tuyen-dung" },
    ],
  },
  {
    label: "Dự án & mẫu",
    layout: "portfolio",
    children: [
      {
        label: "Chung cư",
        href: "/du-an?noi-dung=all&danh-muc=can-ho#portfolio-list",
        image:
          "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/portfolio-imports/thiet-ke-noi-that-chung-cu-72m2-xuan-mai-complex-anh-nhan/01.webp",
      },
      {
        label: "Biệt thự",
        href: "/du-an?noi-dung=all&danh-muc=biet-thu#portfolio-list",
        image:
          "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/portfolio-imports/thiet-ke-noi-that-indochine/01.webp",
      },
      {
        label: "Nhà phố",
        href: "/du-an?noi-dung=all&danh-muc=nha-pho#portfolio-list",
        image:
          "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/projects/noi-that-nha-pho-binh-duong-chi-quyen/cover-01-01-01-thiet-ke-noi-that-5-scaled-4d3f758a.webp",
      },
      {
        label: "PENTHOUSE, DUPLEX",
        href: "/mau-thiet-ke?chu-de=penthouse-duplex#portfolio-list",
        image:
          "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/portfolio-imports/thiet-ke-noi-that-penhouse-01/01.webp",
      },
      {
        label: "Văn phòng",
        href: "/du-an?noi-dung=all&danh-muc=van-phong#portfolio-list",
        image:
          "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/projects/thiet-ke-noi-that-van-phong-6/cover-01-01-01-1-13-b0226b82.webp",
      },
      {
        label: "Không gian kinh doanh",
        href: "/du-an?noi-dung=all&danh-muc=khong-gian-kinh-doanh#portfolio-list",
        image:
          "https://pub-60e849316d5f4103a68fd38bd1f50344.r2.dev/web-moi/projects/bali-coffee-thiet-ke-quan-ca-phe-diatrunghai-04/cover-01-01-01-1-4-b61b0601.webp",
      },
      { label: "Xem tất cả dự án", href: "/du-an#portfolio-list" },
      {
        label: "Xem tất cả mẫu thiết kế",
        href: "/mau-thiet-ke#portfolio-list",
      },
    ],
  },
  {
    label: "Dịch vụ",
    layout: "services",
    children: [
      {
        label: "Thiết kế nội thất",
        children: [
          {
            label: "Thiết kế khách sạn",
            href: "/thiet-ke-noi-that/thiet-ke-khach-san",
          },
          {
            label: "Thiết kế nhà phố",
            href: "/thiet-ke-noi-that/thiet-ke-nha-pho",
          },
          {
            label: "Thiết kế showroom",
            href: "/thiet-ke-noi-that/thiet-ke-showroom",
          },
          {
            label: "Thiết kế chung cư",
            href: "/thiet-ke-noi-that/thiet-ke-chung-cu",
          },
          {
            label: "Thiết kế nội thất tân cổ điển",
            href: "/thiet-ke-noi-that/tan-co-dien",
          },
          {
            label: "Thiết kế nội thất biệt thự",
            href: "/thiet-ke-noi-that/biet-thu",
          },
          { label: "Nội thất phòng ngủ", href: "/thiet-ke-noi-that/phong-ngu" },
          {
            label: "Nội thất thông minh",
            href: "/thiet-ke-noi-that/thong-minh",
          },
          { label: "Nội thất phòng bếp", href: "/thiet-ke-noi-that/phong-bep" },
          {
            label: "Nội thất phòng trẻ em",
            href: "/thiet-ke-noi-that/phong-tre-em",
          },
        ],
      },
      {
        label: "Thi công nội thất",
        children: [
          {
            label: "Không gian bếp",
            href: "/thi-cong-noi-that/khong-gian-bep",
          },
          {
            label: "Không gian phòng khách",
            href: "/thi-cong-noi-that/khong-gian-phong-khach",
          },
          {
            label: "Không gian phòng ngủ",
            href: "/thi-cong-noi-that/khong-gian-phong-ngu",
          },
          {
            label: "Thi công chung cư",
            href: "/thi-cong-noi-that/thi-cong-chung-cu",
          },
          {
            label: "Thi công nhà phố",
            href: "/thi-cong-noi-that/thi-cong-nha-pho",
          },
          {
            label: "Thi công phần thô",
            href: "/thi-cong-noi-that/thi-cong-phan-tho",
          },
          {
            label: "Thi công cải tạo",
            href: "/thi-cong-noi-that/thi-cong-cai-tao",
          },
          {
            label: "Thi công sơn bả",
            href: "/thi-cong-noi-that/thi-cong-son-ba",
          },
          {
            label: "Thi công trần thạch cao",
            href: "/thi-cong-noi-that/thi-cong-tran-thach-cao",
          },
          {
            label: "Thi công đồ gỗ",
            href: "/thi-cong-noi-that/thi-cong-do-go",
          },
          {
            label: "Thi công điện nước",
            href: "/thi-cong-noi-that/thi-cong-dien-nuoc",
          },
          {
            label: "Nhật kí thi công",
            href: "/thi-cong-noi-that/nhat-ki-thi-cong",
          },
        ],
      },
      {
        label: "Thiết kế & xây dựng trọn gói",
        href: "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
        children: [
          {
            label: "Năng lực thiết kế và thi công",
            href: "/gioi-thieu/nang-luc-thiet-ke-va-thi-cong",
          },
          {
            label: "Hệ thống nhà xưởng sản xuất nội thất",
            href: "/gioi-thieu/xuong-san-xuat-noi-that",
          },
          {
            label: "Báo giá thiết kế kiến trúc và xây dựng trọn gói",
            href: "/bao-gia/thiet-ke-kien-truc-va-xay-dung-tron-goi",
          },
        ],
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
    label: "Kinh nghiệm",
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
  { label: "Liên hệ", href: "/lien-he" },
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

export const officeAddresses = [
  "Hà Nội: Tầng 5, Tòa nhà Zen Tower, Số 12 đường Khuất Duy Tiến, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam",
  "TP. Hồ Chí Minh: Số 63 KDC Hiệp Thành 1, Phường Phú Lợi, Thành Phố Hồ Chí Minh, Việt Nam",
];

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    text: officeAddresses[0],
  },
  {
    icon: MapPin,
    text: officeAddresses[1],
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
