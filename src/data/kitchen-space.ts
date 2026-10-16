import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
export type KitchenSpaceCopy = {
  heroParts: string[];
  construction: string;
  intro: string;
  consultation: string;
  read: string;
  all: string;
  filterLabel: string;
  results: string;
  library: Card;
  services: Card[];
  processTitle: string;
  cta: Card;
  request: string;
  call: string;
  categories: string[];
  articles: Card[];
};
export const kitchenSpaceCopy: Record<SiteLocale, KitchenSpaceCopy> = {
  vi: {
    heroParts: ["Không gian", "bếp"],
    construction: "Thi công nội thất",
    intro:
      "Mẫu thiết kế và công trình bếp thực tế, giúp bạn chọn phong cách, kiểu dáng, chất liệu phù hợp cho tổ ấm của mình.",
    consultation: "Nhận tư vấn",
    read: "Xem bài viết",
    all: "Tất cả",
    filterLabel: "Lọc bài viết theo nhóm",
    results: "bài viết",
    library: {
      title: "Thư viện mẫu thiết kế và thi công bếp",
      description:
        "Chọn nhóm bài để xem kiểu dáng, chất liệu và phong cách trước khi quyết định cho công trình của mình.",
    },
    services: [
      {
        title: "Thiết kế tủ bếp",
        description: "Tư vấn theo phong cách và nhu cầu sử dụng.",
      },
      {
        title: "Ốp kính bếp",
        description: "Thi công kính ốp sang trọng, bền đẹp, dễ vệ sinh.",
      },
      {
        title: "Thi công bếp trọn gói",
        description: "Từ phần thô đến hoàn thiện.",
      },
      {
        title: "Sản xuất đồ gỗ",
        description: "Tủ bếp, bàn bếp và đồ gỗ theo yêu cầu.",
      },
    ],
    processTitle: "Từ thiết kế đến hoàn thiện",
    cta: {
      title: "Sẵn sàng kiến tạo không gian bếp cho tổ ấm của bạn?",
      description:
        "Liên hệ để được tư vấn và báo giá thiết kế, thi công phù hợp nhất.",
    },
    request: "Yêu cầu tư vấn",
    call: "Gọi",
    categories: [
      "Kính ốp bếp",
      "Tủ bếp",
      "Công trình",
      "Bếp chung cư",
      "Mẫu bếp",
      "Báo giá",
    ],
    articles: [
      {
        title:
          "3 bảng màu kính ốp bếp sang trọng – tạo sự hài hòa cho mọi không gian",
        description:
          "Tìm hiểu kính ốp bếp là gì, những đặc điểm vượt trội và 3 bảng màu đón đầu xu hướng giúp tăng điểm nhấn, sự sang trọng.",
      },
      {
        title: "Tổng hợp 40+ mẫu tủ bếp tiện nghi “vạn người mê”",
        description:
          "Tuyển tập hơn 40 mẫu tủ bếp chữ I, chữ L, chữ U và bàn đảo hiện đại, sang trọng, phù hợp mọi diện tích.",
      },
      {
        title:
          "Công trình bếp tại dự án The Manor Central Park – Quận Bình Thạnh",
        description:
          "Tham quan công trình bếp khung plywood, tủ cánh kính được thiết kế và thi công trọn gói bởi Tổ Ấm Hoàn Hảo.",
      },
      {
        title: "Top 15 mẫu thiết kế bếp chung cư đẹp, tối ưu diện tích",
        description:
          "Bộ sưu tập 15 mẫu thiết kế bếp chung cư đẹp, tiện nghi, tối ưu diện tích với nhiều phong cách và chất liệu.",
      },
      {
        title: "30+ mẫu bếp xinh dành cho biệt thự, nhà phố, chung cư hiện đại",
        description:
          "Tuyển tập hơn 30 mẫu bếp xinh cho biệt thự, nhà phố, chung cư với nhiều phong cách từ hiện đại đến vintage.",
      },
      {
        title:
          "20+ mẫu tủ bếp chữ I, chữ L, chữ U tiện nghi theo xu hướng mới nhất năm 2023",
        description:
          "Tuyển chọn hơn 20 mẫu tủ bếp chữ I, chữ L, chữ U tiện nghi và sang trọng theo xu hướng mới nhất.",
      },
      {
        title: "Báo giá thi công nội thất trọn gói mới nhất năm 2023",
        description:
          "Bảng báo giá thiết kế và thi công nội thất trọn gói theo chất liệu gỗ công nghiệp MFC, MDF kháng ẩm và gỗ tự nhiên.",
      },
    ],
  },
  en: {
    heroParts: ["Kitchen", "spaces"],
    construction: "Interior construction",
    intro:
      "Real kitchen projects and design ideas to help you choose the right style, layout and materials for your home.",
    consultation: "Get advice",
    read: "Read article",
    all: "All",
    filterLabel: "Filter articles by category",
    results: "articles",
    library: {
      title: "Kitchen design and construction library",
      description:
        "Choose a category to explore layouts, materials and styles before deciding on your project.",
    },
    services: [
      {
        title: "Kitchen cabinet design",
        description: "Advice tailored to your style and everyday needs.",
      },
      {
        title: "Glass splashbacks",
        description: "Elegant, durable glass that is easy to clean.",
      },
      {
        title: "Complete kitchen construction",
        description: "From initial construction to the final finish.",
      },
      {
        title: "Custom woodwork",
        description: "Kitchen cabinets, worktops and made-to-order furniture.",
      },
    ],
    processTitle: "From design to completion",
    cta: {
      title: "Ready to create a kitchen for your home?",
      description:
        "Contact us for design advice and a construction quote suited to your needs.",
    },
    request: "Request advice",
    call: "Call",
    categories: [
      "Glass splashbacks",
      "Kitchen cabinets",
      "Projects",
      "Apartment kitchens",
      "Kitchen ideas",
      "Pricing",
    ],
    articles: [
      {
        title:
          "3 elegant glass splashback colour palettes for a harmonious kitchen",
        description:
          "Discover glass splashbacks, their benefits and three colour palettes that bring character and elegance to your kitchen.",
      },
      {
        title: "40+ practical and inspiring kitchen cabinet designs",
        description:
          "Explore straight, L-shaped and U-shaped cabinets and modern islands for kitchens of different sizes.",
      },
      {
        title:
          "A kitchen project at The Manor Central Park – Binh Thanh District",
        description:
          "Discover a plywood-frame kitchen with glass cabinet doors, designed and built by Tổ Ấm Hoàn Hảo.",
      },
      {
        title:
          "Top 15 beautiful apartment kitchens that make the most of space",
        description:
          "A collection of practical apartment kitchen designs in a range of styles and materials.",
      },
      {
        title: "30+ kitchen ideas for villas, townhouses and modern apartments",
        description:
          "Discover more than 30 kitchen ideas, from contemporary interiors to vintage styles.",
      },
      {
        title:
          "20+ straight, L-shaped and U-shaped cabinet designs: 2023 trends",
        description:
          "Explore practical and elegant kitchen layouts inspired by 2023 design trends.",
      },
      {
        title: "Complete interior construction pricing: 2023 guide",
        description:
          "Design and construction pricing for MFC, moisture-resistant MDF and natural wood interiors.",
      },
    ],
  },
  ja: {
    heroParts: ["キッチンの", "空間"],
    construction: "内装施工",
    intro:
      "キッチンの設計例と施工事例から、住まいに合うスタイル、レイアウト、素材を見つけましょう。",
    consultation: "相談する",
    read: "記事を読む",
    all: "すべて",
    filterLabel: "カテゴリーで記事を絞り込む",
    results: "件の記事",
    library: {
      title: "キッチン設計・施工のアイデア集",
      description:
        "カテゴリーを選び、レイアウト、素材、スタイルを比較して計画に役立ててください。",
    },
    services: [
      {
        title: "キッチン収納の設計",
        description: "お好みと日々の使い方に合わせてご提案。",
      },
      {
        title: "ガラス製キッチンパネル",
        description: "上品で丈夫、お手入れしやすい仕上げ。",
      },
      {
        title: "キッチンの一括施工",
        description: "下地工事から仕上げまで対応。",
      },
      {
        title: "木製家具の製造",
        description: "収納、カウンター、オーダー家具を製作。",
      },
    ],
    processTitle: "設計から完成まで",
    cta: {
      title: "理想のキッチンをつくりませんか？",
      description: "ご要望に合う設計相談と施工のお見積もりをご案内します。",
    },
    request: "相談を依頼",
    call: "電話",
    categories: [
      "ガラスパネル",
      "キッチン収納",
      "施工事例",
      "マンションのキッチン",
      "キッチンのアイデア",
      "料金",
    ],
    articles: [
      {
        title: "調和のあるキッチンをつくるガラスパネルの3つの配色",
        description:
          "ガラスパネルの特徴と、空間に個性と上品さを添える3つの配色をご紹介します。",
      },
      {
        title: "使いやすく魅力的なキッチン収納40選以上",
        description:
          "I型・L型・U型収納やアイランドなど、広さに合わせたデザインをご覧ください。",
      },
      {
        title: "The Manor Central Parkのキッチン施工事例 – ビンタイン区",
        description:
          "合板フレームとガラス扉を用いた、Tổ Ấm Hoàn Hảoの設計・施工事例です。",
      },
      {
        title: "空間を有効に使うマンションのキッチン15選",
        description:
          "さまざまなスタイルと素材で、使いやすいキッチンをご提案します。",
      },
      {
        title: "ヴィラ・都市型住宅・マンション向けキッチン30選以上",
        description:
          "モダンからヴィンテージまで、幅広いアイデアをご紹介します。",
      },
      {
        title: "2023年のI型・L型・U型キッチン収納20選以上",
        description:
          "2023年のトレンドを取り入れた、便利で上品な収納を集めました。",
      },
      {
        title: "2023年版インテリア一括施工の料金案内",
        description:
          "MFC、耐湿MDF、天然木を使う内装設計・施工の価格をご紹介します。",
      },
    ],
  },
  ko: {
    heroParts: ["주방", "공간"],
    construction: "인테리어 시공",
    intro:
      "실제 주방 프로젝트와 설계 사례를 통해 집에 맞는 스타일, 배치 및 자재를 선택하세요.",
    consultation: "상담 문의",
    read: "글 보기",
    all: "전체",
    filterLabel: "카테고리별 글 필터",
    results: "개의 글",
    library: {
      title: "주방 설계 및 시공 자료실",
      description:
        "프로젝트를 결정하기 전에 카테고리별로 배치, 자재 및 스타일을 살펴보세요.",
    },
    services: [
      {
        title: "주방 가구 설계",
        description: "스타일과 사용 요구에 맞춘 상담.",
      },
      {
        title: "유리 주방 벽면",
        description: "고급스럽고 내구성이 좋으며 청소가 편리한 유리.",
      },
      {
        title: "주방 통합 시공",
        description: "기초 공사부터 마감까지.",
      },
      {
        title: "맞춤 목공 제작",
        description: "주방 가구, 조리대 및 주문 제작 가구.",
      },
    ],
    processTitle: "설계부터 완공까지",
    cta: {
      title: "당신의 집에 맞는 주방을 만들어 볼까요?",
      description: "요구에 맞는 설계 상담과 시공 견적을 문의하세요.",
    },
    request: "상담 요청",
    call: "전화",
    categories: [
      "유리 벽면",
      "주방 가구",
      "프로젝트",
      "아파트 주방",
      "주방 아이디어",
      "견적",
    ],
    articles: [
      {
        title: "조화로운 주방을 위한 고급 유리 벽면 색상 3가지",
        description:
          "유리 벽면의 장점과 주방에 개성을 더하는 세 가지 색상 조합을 알아보세요.",
      },
      {
        title: "실용적이고 매력적인 주방 가구 디자인 40가지 이상",
        description:
          "일자형, L자형, U자형 가구와 현대적인 아일랜드를 살펴보세요.",
      },
      {
        title: "The Manor Central Park 주방 시공 사례 – 빈탄군",
        description:
          "합판 프레임과 유리 도어를 활용한 Tổ Ấm Hoàn Hảo의 설계 및 시공 사례입니다.",
      },
      {
        title: "공간을 효율적으로 쓰는 아름다운 아파트 주방 15선",
        description:
          "다양한 스타일과 자재로 실용적인 아파트 주방을 제안합니다.",
      },
      {
        title: "빌라, 타운하우스 및 아파트 주방 아이디어 30가지 이상",
        description:
          "현대적인 스타일부터 빈티지까지 다양한 주방 아이디어를 살펴보세요.",
      },
      {
        title: "일자형, L자형, U자형 주방 가구 20선 이상: 2023년 트렌드",
        description:
          "2023년 디자인 트렌드를 반영한 실용적이고 세련된 주방을 모았습니다.",
      },
      {
        title: "인테리어 통합 시공 가격: 2023년 안내",
        description:
          "MFC, 방습 MDF 및 천연 목재를 이용한 설계 및 시공 가격을 안내합니다.",
      },
    ],
  },
  sv: {
    heroParts: ["Kökets", "utrymme"],
    construction: "Inredningsbyggnation",
    intro:
      "Verkliga köksprojekt och designidéer hjälper dig att välja stil, planlösning och material för ditt hem.",
    consultation: "Få rådgivning",
    read: "Läs artikeln",
    all: "Alla",
    filterLabel: "Filtrera artiklar efter kategori",
    results: "artiklar",
    library: {
      title: "Bibliotek för köksdesign och byggnation",
      description:
        "Välj en kategori för att utforska planlösningar, material och stilar inför ditt projekt.",
    },
    services: [
      {
        title: "Köksskåpsdesign",
        description: "Rådgivning efter din stil och dina behov.",
      },
      {
        title: "Stänkskydd i glas",
        description: "Elegant, hållbart och lätt att rengöra.",
      },
      {
        title: "Komplett köksbyggnation",
        description: "Från grundarbete till färdig yta.",
      },
      {
        title: "Snickerier på beställning",
        description: "Köksskåp, bänkskivor och måttanpassade möbler.",
      },
    ],
    processTitle: "Från design till färdigt kök",
    cta: {
      title: "Redo att skapa ett kök för ditt hem?",
      description:
        "Kontakta oss för designråd och en offert anpassad efter dina behov.",
    },
    request: "Begär rådgivning",
    call: "Ring",
    categories: [
      "Stänkskydd i glas",
      "Köksskåp",
      "Projekt",
      "Lägenhetskök",
      "Köksidéer",
      "Priser",
    ],
    articles: [
      {
        title: "3 eleganta färgpaletter för stänkskydd i glas",
        description:
          "Upptäck fördelarna med glas och färger som skapar harmoni och karaktär i köket.",
      },
      {
        title: "Över 40 praktiska och inspirerande köksskåpsdesigner",
        description:
          "Utforska raka, L-formade och U-formade kök samt moderna köksöar.",
      },
      {
        title: "Köksprojekt på The Manor Central Park – Binh Thanh-distriktet",
        description:
          "Ett kök med plywoodstomme och glasluckor, designat och byggt av Tổ Ấm Hoàn Hảo.",
      },
      {
        title: "15 vackra lägenhetskök som utnyttjar ytan väl",
        description: "Praktiska köksdesigner i varierande stilar och material.",
      },
      {
        title: "Över 30 köksidéer för villor, stadsradhus och lägenheter",
        description: "Utforska allt från modern inredning till vintagestil.",
      },
      {
        title: "Över 20 raka, L-formade och U-formade kök: trender 2023",
        description:
          "Praktiska och eleganta planlösningar inspirerade av 2023 års trender.",
      },
      {
        title: "Priser för komplett inredningsbyggnation: guide 2023",
        description:
          "Design- och byggpriser för MFC, fukttålig MDF och naturträ.",
      },
    ],
  },
  fr: {
    heroParts: ["L’espace", "cuisine"],
    construction: "Réalisation intérieure",
    intro:
      "Des projets et idées de cuisines pour choisir le style, l’agencement et les matériaux adaptés à votre foyer.",
    consultation: "Demander conseil",
    read: "Lire l’article",
    all: "Tout",
    filterLabel: "Filtrer les articles par catégorie",
    results: "articles",
    library: {
      title: "Bibliothèque de conception et réalisation de cuisines",
      description:
        "Choisissez une catégorie pour explorer les agencements, matériaux et styles avant de décider.",
    },
    services: [
      {
        title: "Conception de meubles de cuisine",
        description: "Des conseils adaptés à votre style et à vos besoins.",
      },
      {
        title: "Crédences en verre",
        description: "Un verre élégant, durable et facile à nettoyer.",
      },
      {
        title: "Réalisation complète de cuisines",
        description: "Du gros œuvre aux finitions.",
      },
      {
        title: "Menuiserie sur mesure",
        description:
          "Meubles de cuisine, plans de travail et mobilier personnalisé.",
      },
    ],
    processTitle: "De la conception à la réalisation",
    cta: {
      title: "Prêt à créer la cuisine de votre foyer ?",
      description:
        "Contactez-nous pour des conseils de conception et un devis adapté à vos besoins.",
    },
    request: "Demander un conseil",
    call: "Appeler",
    categories: [
      "Crédences en verre",
      "Meubles de cuisine",
      "Projets",
      "Cuisines d’appartement",
      "Idées de cuisine",
      "Tarifs",
    ],
    articles: [
      {
        title:
          "3 palettes élégantes de crédences en verre pour une cuisine harmonieuse",
        description:
          "Découvrez les atouts du verre et trois palettes qui apportent caractère et élégance.",
      },
      {
        title:
          "Plus de 40 modèles de meubles de cuisine pratiques et inspirants",
        description:
          "Découvrez les agencements en I, L, U et les îlots modernes pour différentes surfaces.",
      },
      {
        title:
          "Projet de cuisine à The Manor Central Park – district de Binh Thanh",
        description:
          "Une cuisine à structure en contreplaqué et portes en verre, conçue et réalisée par Tổ Ấm Hoàn Hảo.",
      },
      {
        title: "15 belles cuisines d’appartement qui optimisent l’espace",
        description:
          "Une collection de cuisines pratiques dans différents styles et matériaux.",
      },
      {
        title:
          "Plus de 30 idées de cuisine pour villas, maisons de ville et appartements",
        description:
          "Des idées allant des intérieurs contemporains au style vintage.",
      },
      {
        title: "Plus de 20 cuisines en I, L et U : tendances 2023",
        description:
          "Des agencements pratiques et élégants inspirés des tendances de 2023.",
      },
      {
        title: "Tarifs de réalisation intérieure complète : guide 2023",
        description:
          "Les prix de conception et de travaux pour le MFC, le MDF hydrofuge et le bois naturel.",
      },
    ],
  },
  ru: {
    heroParts: ["Пространство", "кухни"],
    construction: "Строительство интерьеров",
    intro:
      "Реальные кухонные проекты и идеи помогут выбрать стиль, планировку и материалы для вашего дома.",
    consultation: "Получить совет",
    read: "Читать статью",
    all: "Все",
    filterLabel: "Фильтр статей по категории",
    results: "статей",
    library: {
      title: "Библиотека дизайна и строительства кухонь",
      description:
        "Выберите категорию, чтобы изучить планировки, материалы и стили перед решением.",
    },
    services: [
      {
        title: "Дизайн кухонной мебели",
        description: "Советы с учётом вашего стиля и потребностей.",
      },
      {
        title: "Стеклянные фартуки",
        description: "Элегантное, долговечное и простое в уходе стекло.",
      },
      {
        title: "Кухня под ключ",
        description: "От начальных работ до чистовой отделки.",
      },
      {
        title: "Столярные изделия",
        description: "Кухонные шкафы, столешницы и мебель на заказ.",
      },
    ],
    processTitle: "От дизайна до завершения",
    cta: {
      title: "Готовы создать кухню для вашего дома?",
      description:
        "Обратитесь за советом по дизайну и сметой под ваши потребности.",
    },
    request: "Запросить консультацию",
    call: "Позвонить",
    categories: [
      "Стеклянные фартуки",
      "Кухонная мебель",
      "Проекты",
      "Кухни в квартирах",
      "Идеи для кухни",
      "Цены",
    ],
    articles: [
      {
        title: "3 элегантные палитры стеклянных фартуков для гармоничной кухни",
        description:
          "Узнайте о преимуществах стекла и цветах, добавляющих кухне характер и элегантность.",
      },
      {
        title: "Более 40 удобных и вдохновляющих кухонных гарнитуров",
        description:
          "Прямые, Г-образные, П-образные кухни и современные острова для разных площадей.",
      },
      {
        title: "Кухонный проект в The Manor Central Park – район Биньтхань",
        description:
          "Кухня с фанерным каркасом и стеклянными фасадами от Tổ Ấm Hoàn Hảo.",
      },
      {
        title: "15 красивых кухонь для квартир с оптимальной планировкой",
        description: "Практичные решения в разных стилях и материалах.",
      },
      {
        title: "Более 30 идей кухни для вилл, городских домов и квартир",
        description: "Идеи от современных интерьеров до винтажного стиля.",
      },
      {
        title: "Более 20 прямых, Г-образных и П-образных кухонь: тренды 2023",
        description:
          "Практичные и элегантные планировки по мотивам тенденций 2023 года.",
      },
      {
        title: "Цены на отделку интерьера под ключ: справочник 2023",
        description:
          "Стоимость дизайна и работ с MFC, влагостойкой MDF и натуральным деревом.",
      },
    ],
  },
  es: {
    heroParts: ["Espacios de", "cocina"],
    construction: "Construcción interior",
    intro:
      "Proyectos e ideas de cocina para elegir el estilo, distribución y materiales adecuados para su hogar.",
    consultation: "Pedir asesoramiento",
    read: "Leer artículo",
    all: "Todo",
    filterLabel: "Filtrar artículos por categoría",
    results: "artículos",
    library: {
      title: "Biblioteca de diseño y construcción de cocinas",
      description:
        "Elija una categoría para explorar distribuciones, materiales y estilos antes de decidir.",
    },
    services: [
      {
        title: "Diseño de muebles de cocina",
        description: "Asesoramiento según su estilo y necesidades.",
      },
      {
        title: "Salpicaderos de vidrio",
        description: "Vidrio elegante, duradero y fácil de limpiar.",
      },
      {
        title: "Construcción integral de cocinas",
        description: "Desde la obra inicial hasta los acabados.",
      },
      {
        title: "Carpintería a medida",
        description: "Muebles de cocina, encimeras y mobiliario personalizado.",
      },
    ],
    processTitle: "Del diseño a la finalización",
    cta: {
      title: "¿Listo para crear la cocina de su hogar?",
      description:
        "Contáctenos para recibir asesoramiento de diseño y un presupuesto adecuado.",
    },
    request: "Solicitar asesoramiento",
    call: "Llamar",
    categories: [
      "Salpicaderos de vidrio",
      "Muebles de cocina",
      "Proyectos",
      "Cocinas de apartamento",
      "Ideas de cocina",
      "Precios",
    ],
    articles: [
      {
        title:
          "3 paletas elegantes de salpicaderos de vidrio para una cocina armoniosa",
        description:
          "Descubra las ventajas del vidrio y colores que aportan carácter y elegancia.",
      },
      {
        title:
          "Más de 40 diseños prácticos e inspiradores de muebles de cocina",
        description:
          "Explore cocinas lineales, en L, en U e islas modernas para diferentes superficies.",
      },
      {
        title:
          "Proyecto de cocina en The Manor Central Park – distrito de Binh Thanh",
        description:
          "Una cocina con estructura de contrachapado y puertas de vidrio de Tổ Ấm Hoàn Hảo.",
      },
      {
        title: "15 bonitas cocinas de apartamento que aprovechan el espacio",
        description:
          "Una colección de diseños prácticos con estilos y materiales variados.",
      },
      {
        title:
          "Más de 30 ideas de cocina para villas, casas urbanas y apartamentos",
        description:
          "Descubra propuestas desde interiores contemporáneos hasta estilo vintage.",
      },
      {
        title: "Más de 20 cocinas lineales, en L y en U: tendencias 2023",
        description:
          "Distribuciones prácticas y elegantes inspiradas en las tendencias de 2023.",
      },
      {
        title: "Precios de construcción interior integral: guía 2023",
        description:
          "Precios de diseño y obra para MFC, MDF resistente a la humedad y madera natural.",
      },
    ],
  },
  zh: {
    heroParts: ["厨房", "空间"],
    construction: "室内施工",
    intro: "真实厨房项目与设计案例，帮助您为家选择合适的风格、布局和材料。",
    consultation: "获取咨询",
    read: "阅读文章",
    all: "全部",
    filterLabel: "按类别筛选文章",
    results: "篇文章",
    library: {
      title: "厨房设计与施工资料库",
      description: "选择文章类别，在决定项目前了解布局、材料与风格。",
    },
    services: [
      {
        title: "橱柜设计",
        description: "根据您的风格与使用需求提供建议。",
      },
      {
        title: "玻璃厨房挡板",
        description: "优雅、耐用且易于清洁的玻璃饰面。",
      },
      {
        title: "厨房整体施工",
        description: "从基础工程到最终饰面。",
      },
      {
        title: "定制木作",
        description: "按需制作橱柜、台面与室内木制家具。",
      },
    ],
    processTitle: "从设计到完工",
    cta: {
      title: "准备好为家打造理想厨房了吗？",
      description: "联系我们，获取适合您的设计建议与施工报价。",
    },
    request: "申请咨询",
    call: "致电",
    categories: [
      "玻璃挡板",
      "橱柜",
      "项目案例",
      "公寓厨房",
      "厨房创意",
      "报价",
    ],
    articles: [
      {
        title: "打造和谐厨房的3种优雅玻璃挡板配色",
        description: "了解玻璃挡板的优势，以及为厨房增添个性与优雅的三种配色。",
      },
      {
        title: "40多款实用又受欢迎的橱柜设计",
        description: "探索适合不同空间的一字形、L形、U形橱柜及现代岛台。",
      },
      {
        title: "The Manor Central Park厨房项目 – 平盛郡",
        description: "由Tổ Ấm Hoàn Hảo设计施工的胶合板框架、玻璃柜门厨房。",
      },
      {
        title: "15款美观且节省空间的公寓厨房设计",
        description: "涵盖多种风格和材料的实用公寓厨房案例。",
      },
      {
        title: "适用于别墅、联排住宅和公寓的30多款厨房创意",
        description: "探索从现代到复古的多样厨房风格。",
      },
      {
        title: "20多款一字形、L形和U形橱柜：2023年趋势",
        description: "结合2023年设计趋势的实用精致厨房布局。",
      },
      {
        title: "整体室内施工报价：2023年指南",
        description: "介绍MFC、防潮MDF及天然木材的设计与施工价格。",
      },
    ],
  },
};
