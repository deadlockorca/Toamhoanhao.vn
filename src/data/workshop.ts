import type { SiteLocale } from "@/lib/locale";

// Address names remain in Vietnamese so visitors can find them on local maps.
export const workshopOffices = [
  {
    city: "TP. Hồ Chí Minh",
    title: "Số 23, Hoàng Kế Viêm",
    address: "Phường 13, Quận Tân Bình.",
  },
  {
    city: "TP. Thủ Đức",
    title: "C00-11 Chung cư Sarina số 62 Hoàng Thế Thiện",
    address: "Phường An Lợi Đông, TP. Thủ Đức.",
  },
  { city: "Hà Nội", title: "Số 26, Phố Tư Đình", address: "Quận Long Biên." },
  {
    city: "Bình Dương",
    title: "ShopHouse 0112, Khu Đô Thị Phúc Đạt Connect",
    address: "Phường Phú Lợi, TP. Thủ Dầu Một.",
  },
];
export const workshopFactories = [
  {
    region: "Miền Trung",
    image: "/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp",
    address: null,
  },
  {
    region: "Hà Nội",
    image: "/images/gioi-thieu/xuong-san-xuat.png",
    address: "Số 2, Ngõ 67, Phú Đa, Xã Cấn Kiệm, Huyện Thạch Thất.",
  },
  {
    region: "Bình Dương",
    image: "/images/gioi-thieu/xuong-san-xuat.png",
    address: "569 Đường Bùi Thị Xuân, TP. Dĩ An, Tỉnh Bình Dương.",
  },
];

type WorkshopCopy = {
  home: string;
  title: string;
  eyebrow: string;
  heading: string;
  accent: string;
  intro: string;
  years: string;
  branches: string;
  factories: string;
  nationwide: string;
  services: [string, string, string, string];
  serviceCaption: string;
  addressesLabel: string;
  addressesHeading: string;
  directions: string;
  call: string;
  production: string;
  productionHeading: string;
  factoryTitles: [string, string, string];
  pending: string;
  contact: string;
  contactHeading: string;
  contactIntro: string;
  consultation: string;
};
export const workshopCopy: Record<SiteLocale, WorkshopCopy> = {
  vi: {
    home: "Trang chủ",
    title: "Hệ thống nhà xưởng sản xuất nội thất",
    eyebrow: "Hệ thống chi nhánh",
    heading: "Tập thể con người của Tổ Ấm Hoàn Hảo",
    accent: "tại các chi nhánh",
    intro:
      "Với kinh nghiệm 12 năm làm việc trong lĩnh vực kiến trúc, xây dựng và nội thất, đội ngũ của chúng tôi đáp ứng được mọi yêu cầu của quý khách hàng trong hoạt động thiết kế cho các dự án từ chung cư, nhà phố, biệt thự, lâu đài.",
    years: "Năm kinh nghiệm",
    branches: "Chi nhánh",
    factories: "Cơ sở sản xuất",
    nationwide: "Hệ thống trên cả nước",
    services: ["Chung cư", "Nhà phố", "Biệt thự", "Lâu đài"],
    serviceCaption: "Thiết kế và thi công",
    addressesLabel: "Địa chỉ các cơ sở",
    addressesHeading: "Thông tin địa chỉ Tổ Ấm Hoàn Hảo tại tất cả các cơ sở",
    directions: "Chỉ đường",
    call: "Gọi",
    production: "Sản xuất",
    productionHeading: "Hệ thống cơ sở sản xuất khắp cả nước",
    factoryTitles: [
      "Nhà xưởng tại Miền Trung",
      "Nhà xưởng tại Hà Nội",
      "Nhà máy tại Bình Dương",
    ],
    pending: "Thông tin địa chỉ đang được cập nhật.",
    contact: "Liên hệ",
    contactHeading: "Ghé thăm chi nhánh gần bạn",
    contactIntro:
      "Đội ngũ Tổ Ấm Hoàn Hảo sẵn sàng tư vấn thiết kế, thi công và sản xuất nội thất cho công trình của bạn.",
    consultation: "Đặt lịch tư vấn",
  },
  en: {
    home: "Home",
    title: "Furniture manufacturing network",
    eyebrow: "Our branch network",
    heading: "The people of Tổ Ấm Hoàn Hảo",
    accent: "across our branches",
    intro:
      "With 12 years of experience in architecture, construction and interiors, our team meets your design needs for apartments, townhouses, villas and castles.",
    years: "Years of experience",
    branches: "Branches",
    factories: "Production facilities",
    nationwide: "Our nationwide network",
    services: ["Apartments", "Townhouses", "Villas", "Castles"],
    serviceCaption: "Design and construction",
    addressesLabel: "Our locations",
    addressesHeading: "Find Tổ Ấm Hoàn Hảo at all our locations",
    directions: "Directions",
    call: "Call",
    production: "Manufacturing",
    productionHeading: "Production facilities across the country",
    factoryTitles: [
      "Central Vietnam workshop",
      "Hanoi workshop",
      "Binh Duong factory",
    ],
    pending: "Address information is being updated.",
    contact: "Contact",
    contactHeading: "Visit a branch near you",
    contactIntro:
      "The Tổ Ấm Hoàn Hảo team is ready to advise on interior design, construction and manufacturing for your project.",
    consultation: "Book a consultation",
  },
  ja: {
    home: "ホーム",
    title: "家具製造工場ネットワーク",
    eyebrow: "支店ネットワーク",
    heading: "Tổ Ấm Hoàn Hảoのチーム",
    accent: "各支店のご紹介",
    intro:
      "建築・施工・インテリア分野で12年の経験を持つ私たちのチームが、マンション、都市型住宅、ヴィラ、城館などの設計ニーズにお応えします。",
    years: "年の経験",
    branches: "支店",
    factories: "生産拠点",
    nationwide: "全国のネットワーク",
    services: ["マンション", "都市型住宅", "ヴィラ", "城館"],
    serviceCaption: "設計・施工",
    addressesLabel: "拠点の所在地",
    addressesHeading: "Tổ Ấm Hoàn Hảoの各拠点をご案内",
    directions: "経路案内",
    call: "電話",
    production: "製造",
    productionHeading: "全国に広がる生産拠点",
    factoryTitles: ["ベトナム中部の工房", "ハノイの工房", "ビンズオンの工場"],
    pending: "所在地情報は更新中です。",
    contact: "お問い合わせ",
    contactHeading: "お近くの支店へお越しください",
    contactIntro:
      "Tổ Ấm Hoàn Hảoのチームが、インテリアの設計・施工・製造についてご相談を承ります。",
    consultation: "相談を予約",
  },
  ko: {
    home: "홈",
    title: "가구 제조 공장 네트워크",
    eyebrow: "지점 네트워크",
    heading: "Tổ Ấm Hoàn Hảo의 팀",
    accent: "각 지점에서 만나는 사람들",
    intro:
      "건축, 시공 및 인테리어 분야에서 12년의 경험을 쌓은 저희 팀은 아파트, 타운하우스, 빌라와 성곽형 주택의 다양한 설계 요구에 응합니다.",
    years: "년의 경험",
    branches: "지점",
    factories: "생산 시설",
    nationwide: "전국 네트워크",
    services: ["아파트", "타운하우스", "빌라", "성곽형 주택"],
    serviceCaption: "설계 및 시공",
    addressesLabel: "지점 주소",
    addressesHeading: "Tổ Ấm Hoàn Hảo의 모든 지점 안내",
    directions: "길찾기",
    call: "전화",
    production: "생산",
    productionHeading: "전국의 생산 시설",
    factoryTitles: ["베트남 중부 작업장", "하노이 작업장", "빈즈엉 공장"],
    pending: "주소 정보를 업데이트하고 있습니다.",
    contact: "문의",
    contactHeading: "가까운 지점을 방문하세요",
    contactIntro:
      "Tổ Ấm Hoàn Hảo 팀이 프로젝트의 인테리어 설계, 시공 및 제작을 상담해 드립니다.",
    consultation: "상담 예약",
  },
  sv: {
    home: "Hem",
    title: "Nätverk av möbelfabriker",
    eyebrow: "Vårt kontorsnätverk",
    heading: "Teamet på Tổ Ấm Hoàn Hảo",
    accent: "på våra kontor",
    intro:
      "Med 12 års erfarenhet inom arkitektur, byggnation och inredning möter vårt team dina designbehov för lägenheter, stadsradhus, villor och slott.",
    years: "Års erfarenhet",
    branches: "Kontor",
    factories: "Produktionsanläggningar",
    nationwide: "Vårt rikstäckande nätverk",
    services: ["Lägenheter", "Stadsradhus", "Villor", "Slott"],
    serviceCaption: "Design och byggnation",
    addressesLabel: "Våra adresser",
    addressesHeading: "Hitta alla Tổ Ấm Hoàn Hảos kontor",
    directions: "Vägbeskrivning",
    call: "Ring",
    production: "Tillverkning",
    productionHeading: "Produktionsanläggningar i hela landet",
    factoryTitles: [
      "Verkstad i centrala Vietnam",
      "Verkstad i Hanoi",
      "Fabrik i Binh Duong",
    ],
    pending: "Adressinformationen uppdateras.",
    contact: "Kontakt",
    contactHeading: "Besök ett kontor nära dig",
    contactIntro:
      "Tổ Ấm Hoàn Hảos team hjälper dig med inredningsdesign, byggnation och möbeltillverkning för ditt projekt.",
    consultation: "Boka rådgivning",
  },
  fr: {
    home: "Accueil",
    title: "Réseau d’usines de fabrication de mobilier",
    eyebrow: "Notre réseau d’agences",
    heading: "Les équipes de Tổ Ấm Hoàn Hảo",
    accent: "dans nos agences",
    intro:
      "Forte de 12 ans d’expérience en architecture, construction et aménagement intérieur, notre équipe répond à vos besoins de conception pour les appartements, maisons de ville, villas et châteaux.",
    years: "Années d’expérience",
    branches: "Agences",
    factories: "Sites de production",
    nationwide: "Notre réseau national",
    services: ["Appartements", "Maisons de ville", "Villas", "Châteaux"],
    serviceCaption: "Conception et réalisation",
    addressesLabel: "Nos adresses",
    addressesHeading: "Retrouvez toutes les agences Tổ Ấm Hoàn Hảo",
    directions: "Itinéraire",
    call: "Appeler",
    production: "Production",
    productionHeading: "Des sites de production dans tout le pays",
    factoryTitles: [
      "Atelier au centre du Vietnam",
      "Atelier à Hanoï",
      "Usine à Binh Duong",
    ],
    pending: "L’adresse est en cours de mise à jour.",
    contact: "Contact",
    contactHeading: "Visitez l’agence la plus proche",
    contactIntro:
      "L’équipe Tổ Ấm Hoàn Hảo vous conseille en conception, réalisation et fabrication de mobilier pour votre projet.",
    consultation: "Prendre rendez-vous",
  },
  ru: {
    home: "Главная",
    title: "Сеть мебельных фабрик",
    eyebrow: "Сеть филиалов",
    heading: "Команда Tổ Ấm Hoàn Hảo",
    accent: "в наших филиалах",
    intro:
      "Имея 12-летний опыт в архитектуре, строительстве и интерьерах, наша команда решает задачи проектирования квартир, городских домов, вилл и замков.",
    years: "Лет опыта",
    branches: "Филиала",
    factories: "Производства",
    nationwide: "Наша сеть по всей стране",
    services: ["Квартиры", "Городские дома", "Виллы", "Замки"],
    serviceCaption: "Проектирование и строительство",
    addressesLabel: "Адреса филиалов",
    addressesHeading: "Адреса всех филиалов Tổ Ấm Hoàn Hảo",
    directions: "Маршрут",
    call: "Позвонить",
    production: "Производство",
    productionHeading: "Производственные площадки по всей стране",
    factoryTitles: [
      "Цех в центральном Вьетнаме",
      "Цех в Ханое",
      "Фабрика в Биньзыонге",
    ],
    pending: "Информация об адресе обновляется.",
    contact: "Контакты",
    contactHeading: "Посетите ближайший филиал",
    contactIntro:
      "Команда Tổ Ấm Hoàn Hảo готова проконсультировать вас по дизайну, строительству и изготовлению мебели для вашего проекта.",
    consultation: "Записаться на консультацию",
  },
  es: {
    home: "Inicio",
    title: "Red de fábricas de muebles",
    eyebrow: "Nuestra red de sucursales",
    heading: "El equipo de Tổ Ấm Hoàn Hảo",
    accent: "en nuestras sucursales",
    intro:
      "Con 12 años de experiencia en arquitectura, construcción e interiores, nuestro equipo responde a sus necesidades de diseño para apartamentos, casas urbanas, villas y castillos.",
    years: "Años de experiencia",
    branches: "Sucursales",
    factories: "Centros de producción",
    nationwide: "Nuestra red nacional",
    services: ["Apartamentos", "Casas urbanas", "Villas", "Castillos"],
    serviceCaption: "Diseño y construcción",
    addressesLabel: "Nuestras direcciones",
    addressesHeading: "Encuentre todas las sedes de Tổ Ấm Hoàn Hảo",
    directions: "Cómo llegar",
    call: "Llamar",
    production: "Producción",
    productionHeading: "Centros de producción en todo el país",
    factoryTitles: [
      "Taller en Vietnam central",
      "Taller en Hanói",
      "Fábrica en Binh Duong",
    ],
    pending: "La dirección se está actualizando.",
    contact: "Contacto",
    contactHeading: "Visite su sucursal más cercana",
    contactIntro:
      "El equipo de Tổ Ấm Hoàn Hảo le asesora sobre diseño, construcción y fabricación de muebles para su proyecto.",
    consultation: "Reservar una consulta",
  },
  zh: {
    home: "首页",
    title: "家具生产工厂网络",
    eyebrow: "分支机构网络",
    heading: "Tổ Ấm Hoàn Hảo团队",
    accent: "遍布各地的分支机构",
    intro:
      "凭借12年的建筑、施工和室内设计经验，我们的团队满足客户在公寓、联排住宅、别墅和城堡等项目中的各种设计需求。",
    years: "年经验",
    branches: "家分支机构",
    factories: "处生产基地",
    nationwide: "全国服务网络",
    services: ["公寓", "联排住宅", "别墅", "城堡"],
    serviceCaption: "设计与施工",
    addressesLabel: "各地地址",
    addressesHeading: "Tổ Ấm Hoàn Hảo各分支机构地址",
    directions: "路线",
    call: "致电",
    production: "生产",
    productionHeading: "遍布全国的生产基地",
    factoryTitles: ["越南中部工厂", "河内工厂", "平阳工厂"],
    pending: "地址信息正在更新中。",
    contact: "联系我们",
    contactHeading: "欢迎到访您附近的分支机构",
    contactIntro:
      "Tổ Ấm Hoàn Hảo团队随时为您的项目提供室内设计、施工和家具生产咨询。",
    consultation: "预约咨询",
  },
};
