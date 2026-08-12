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

export const navigation = [
  "Trang chủ",
  "Giới thiệu",
  "Dịch vụ",
  "Dự án",
  "Mẫu thiết kế",
  "Báo giá",
  "Kiến thức",
  "Liên hệ",
];

export const projectCategories = ["Căn hộ", "Biệt thự", "Nhà phố", "Văn phòng"];

export const featuredProjects = [
  {
    category: "Căn hộ chung cư",
    title: "The Matrix One",
    meta: "Hà Nội · 120m²",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Căn hộ chung cư",
    title: "Vinhomes Ocean Park",
    meta: "Hà Nội · 90m²",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Biệt thự",
    title: "Vinhomes Riverside",
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
      "Giới thiệu",
      "Tầm nhìn · Sứ mệnh",
      "Đội ngũ nhân sự",
      "Quy trình làm việc",
    ],
  },
  {
    title: "Dịch vụ",
    links: [
      "Thiết kế nội thất",
      "Thi công nội thất",
      "Sản xuất nội thất",
      "Nội thất trọn gói",
      "Tư vấn phong thủy",
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      "Câu hỏi thường gặp",
      "Chính sách bảo hành",
      "Chính sách bảo mật",
      "Điều khoản sử dụng",
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
