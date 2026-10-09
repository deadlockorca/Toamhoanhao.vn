import { navigation, type NavigationItem } from "@/data/site";

const labels: Record<string, string> = {
  "Giới thiệu": "About us",
  "Về Tổ Ấm Hoàn Hảo": "About To Am Hoan Hao",
  "Năng lực thiết kế và thi công": "Design and construction capabilities",
  "Đội ngũ kiến trúc sư": "Our architects",
  "Xưởng sản xuất nội thất": "Furniture workshop",
  "Tuyển dụng": "Careers",
  "Báo giá": "Pricing",
  "Báo giá thiết kế thi công nội thất": "Interior design and construction pricing",
  "Báo giá thiết kế kiến trúc và xây dựng trọn gói": "Architecture and turnkey construction pricing",
  "Biệt thự": "Villas",
  "Nhà phố": "Townhouses",
  "Dự án nhà phố": "Townhouse projects",
  "Mẫu thiết kế nhà phố": "Townhouse designs",
  "Thiết kế nội thất nhà phố": "Townhouse interior design",
  "Thi công nhà phố": "Townhouse construction",
  "Nội thất chung cư": "Apartment interiors",
  "Thiết kế nội thất": "Interior design",
  "Thiết kế khách sạn": "Hotel design",
  "Thiết kế nhà phố": "Townhouse design",
  "Thiết kế showroom": "Showroom design",
  "Thiết kế chung cư": "Apartment design",
  "Thiết kế nội thất tân cổ điển": "Neoclassical interiors",
  "Thiết kế nội thất biệt thự": "Villa interiors",
  "Nội thất phòng ngủ": "Bedroom interiors",
  "Nội thất thông minh": "Smart interiors",
  "Nội thất phòng bếp": "Kitchen interiors",
  "Nội thất phòng trẻ em": "Children's rooms",
  "Thi công nội thất": "Interior construction",
  "Không gian bếp": "Kitchen spaces",
  "Không gian phòng khách": "Living room spaces",
  "Không gian phòng ngủ": "Bedroom spaces",
  "Thi công chung cư": "Apartment construction",
  "Thi công phần thô": "Shell construction",
  "Thi công cải tạo": "Renovation",
  "Thi công sơn bả": "Painting and finishing",
  "Thi công trần thạch cao": "Gypsum ceilings",
  "Thi công đồ gỗ": "Woodwork",
  "Thi công điện nước": "Electrical and plumbing",
  "Nhật kí thi công": "Construction journal",
  "Kinh nghiệm làm nhà, nội thất": "Home and interior guides",
  "Kinh nghiệm xây nhà": "Home building guides",
  "Kinh nghiệm thi công, thiết kế nội thất": "Interior design and construction guides",
  "Pháp lý xây dựng": "Construction regulations",
  "Kiến thức nhà đẹp": "Home design ideas",
  "Liên hệ": "Contact",
  "Mẫu biệt thự đẹp": "Beautiful villas",
  "Mẫu biệt thự 2 tầng": "Two-storey villas",
  "Mẫu biệt thự 3 tầng": "Three-storey villas",
  "Mẫu biệt thự cổ điển": "Classical villas",
  "Mẫu nhà vườn đẹp": "Garden houses",
  "Mẫu biệt thự mái Thái, mái Nhật": "Thai and Japanese roof villas",
  "Resort, khách sạn, nhà hàng": "Resorts, hotels and restaurants",
  "PENTHOUSE, DUPLEX": "Penthouses and duplexes",
};

function translateItem(item: NavigationItem): NavigationItem {
  return {
    ...item,
    label: labels[item.label] ?? item.label.replace("Chung cư", "Apartment").replace("chung cư", "apartment"),
    children: item.children?.map(translateItem),
  };
}

export function getNavigation(locale: "vi" | "en") {
  return locale === "en" ? navigation.map(translateItem) : navigation;
}
