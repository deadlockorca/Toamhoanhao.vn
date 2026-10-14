import type { NavigationItem } from "@/data/site";

const labels: Record<string, string> = {
  "Giới thiệu": "会社紹介",
  "Về Tổ Ấm Hoàn Hảo": "私たちについて",
  "Năng lực thiết kế và thi công": "設計・施工力",
  "Đội ngũ kiến trúc sư": "建築家チーム",
  "Xưởng sản xuất nội thất": "家具製作工場",
  "Tuyển dụng": "採用情報",
  "Báo giá": "料金案内",
  "Báo giá thiết kế thi công nội thất": "インテリア設計・施工の料金",
  "Báo giá thiết kế kiến trúc và xây dựng trọn gói": "建築設計・一括施工の料金",
  "Biệt thự": "ヴィラ",
  "Mẫu biệt thự đẹp": "ヴィラのデザイン例",
  "Mẫu biệt thự 2 tầng": "2階建てヴィラ",
  "Mẫu biệt thự 3 tầng": "3階建てヴィラ",
  "Mẫu biệt thự cổ điển": "クラシックなヴィラ",
  "Mẫu nhà vườn đẹp": "ガーデンハウス",
  "Mẫu biệt thự mái Thái, mái Nhật": "タイ・日本式屋根のヴィラ",
  "Resort, khách sạn, nhà hàng": "リゾート・ホテル・レストラン",
  "Nhà phố": "都市型住宅",
  "Dự án nhà phố": "都市型住宅の施工事例",
  "Mẫu thiết kế nhà phố": "都市型住宅のデザイン例",
  "Thiết kế nội thất nhà phố": "都市型住宅のインテリア設計",
  "Thi công nhà phố": "都市型住宅の施工",
  "Nội thất chung cư": "マンションのインテリア",
  "PENTHOUSE, DUPLEX": "ペントハウス・メゾネット",
  "Thiết kế nội thất": "インテリアデザイン",
  "Thiết kế khách sạn": "ホテルのデザイン",
  "Thiết kế nhà phố": "都市型住宅の設計",
  "Thiết kế showroom": "ショールームのデザイン",
  "Thiết kế chung cư": "マンションの設計",
  "Thiết kế nội thất tân cổ điển": "ネオクラシックのインテリア",
  "Thiết kế nội thất biệt thự": "ヴィラのインテリア",
  "Nội thất phòng ngủ": "寝室のインテリア",
  "Nội thất thông minh": "スマートインテリア",
  "Nội thất phòng bếp": "キッチンのインテリア",
  "Nội thất phòng trẻ em": "子ども部屋のインテリア",
  "Thi công nội thất": "内装施工",
  "Không gian bếp": "キッチン",
  "Không gian phòng khách": "リビング",
  "Không gian phòng ngủ": "寝室",
  "Thi công chung cư": "マンションの施工",
  "Thi công phần thô": "躯体工事",
  "Thi công cải tạo": "リノベーション",
  "Thi công sơn bả": "塗装・仕上げ",
  "Thi công trần thạch cao": "石こうボード天井",
  "Thi công đồ gỗ": "木工工事",
  "Thi công điện nước": "電気・給排水工事",
  "Nhật kí thi công": "施工日誌",
  "Kinh nghiệm làm nhà, nội thất": "住まいとインテリアの知識",
  "Kinh nghiệm xây nhà": "家づくりのヒント",
  "Kinh nghiệm thi công, thiết kế nội thất": "インテリア設計・施工のヒント",
  "Pháp lý xây dựng": "建築に関する法規",
  "Kiến thức nhà đẹp": "住まいのアイデア",
  "Liên hệ": "お問い合わせ",
};

function translateLabel(label: string) {
  return (
    labels[label] ??
    label
      .replace(/^Chung cư /, "マンション ")
      .replace(/^chung cư /, "マンション ")
  );
}

export function translateJapaneseNavigation(
  item: NavigationItem,
): NavigationItem {
  return {
    ...item,
    label: translateLabel(item.label),
    children: item.children?.map((child) => ({
      ...child,
      label: translateLabel(child.label),
      children: child.children?.map((grandchild) => ({
        ...grandchild,
        label: translateLabel(grandchild.label),
      })),
    })),
  };
}
