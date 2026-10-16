import type { SiteLocale } from "@/lib/locale";
type KitchenInteriorCopy = {
  heroParts: string[];
  intro: string;
  explore: string;
  tipsTitle: string;
  checksTitle: string;
  workshopTitle: string;
  workshopIntro: string;
  commitmentsTitle: string;
  tips: { title: string; description: string }[];
  checks: string[];
};
export const kitchenInteriorCopy: Record<SiteLocale, KitchenInteriorCopy> = {
  vi: {
    heroParts: ["Nội thất", "phòng bếp"],
    intro:
      "Một căn bếp để nấu nướng, sẻ chia và sum vầy. Kết nối công năng, chất liệu và phong cách để không gian phù hợp với nhịp sống gia đình.",
    explore: "Khám phá lưu ý",
    tipsTitle: "5 điểm cần chăm chút khi thiết kế phòng bếp",
    checksTitle: "Chọn đúng đơn vị, an tâm từ đầu",
    workshopTitle: "Từ thiết kế đến sản xuất và lắp đặt",
    workshopIntro:
      "Phối hợp kiến trúc sư, nhà xưởng và đội ngũ thi công để triển khai căn bếp đồng bộ. Các công trình tại Gamuda, Time City, Golden Place, HH Linh Đàm, Eco Park là một phần hành trình của chúng tôi.",
    commitmentsTitle: "Giữ lửa cho những khoảnh khắc sum vầy",
    tips: [
      {
        title: "Hướng bếp và sự thông thoáng",
        description:
          "Cân nhắc vị trí bếp, hướng cửa, ánh sáng và thông gió theo hiện trạng. Kết hợp mong muốn về phong thủy với mặt bằng, sự thuận tiện và giải pháp hút mùi.",
      },
      {
        title: "Công năng theo thói quen sử dụng",
        description:
          "Chọn kích thước tủ và thiết bị trước khi bố trí điện nước. Kết nối các khu vực lưu trữ, sơ chế, rửa và nấu với lối đi phù hợp.",
      },
      {
        title: "Vật liệu phù hợp môi trường bếp",
        description:
          "Ưu tiên bề mặt dễ vệ sinh, vật liệu và phụ kiện phù hợp độ ẩm, nhiệt độ sử dụng. Chọn cấu tạo, xử lý cạnh và mối nối để hạn chế tác động của nước.",
      },
      {
        title: "Lớp sơn và bề mặt hoàn thiện",
        description:
          "Chọn hệ sơn, lớp phủ và cách xử lý bề mặt theo vật liệu nền. Thống nhất mẫu màu, độ bóng và yêu cầu bảo dưỡng trước khi thi công.",
      },
      {
        title: "Màu sắc và phong cách riêng",
        description:
          "Trao đổi cùng kiến trúc sư về phong cách hiện đại, tân cổ điển hoặc cổ điển. Phối màu tủ, mặt bếp, tường và ánh sáng thành một tổng thể hài hòa.",
      },
    ],
    checks: [
      "Địa chỉ và thông tin doanh nghiệp rõ ràng",
      "Đội ngũ có kinh nghiệm, có công trình để tham khảo",
      "Dịch vụ thiết kế và thi công phối hợp đồng bộ",
      "Nhà xưởng sản xuất trực tiếp, báo giá rõ ràng",
      "Hợp đồng nêu cụ thể phạm vi và trách nhiệm",
      "Kế hoạch tài chính và dự toán theo hạng mục",
    ],
  },
  en: {
    heroParts: ["Kitchen", "interiors"],
    intro:
      "A kitchen for cooking, sharing and gathering. Bring function, materials and style together around your family’s daily life.",
    explore: "Explore the essentials",
    tipsTitle: "5 details that make a considered kitchen",
    checksTitle: "Choose the right team from the start",
    workshopTitle: "From design to production and installation",
    workshopIntro:
      "Architects, workshops and site teams coordinate a complete kitchen. Work at Gamuda, Time City, Golden Place, HH Linh Dam and Eco Park forms part of our experience.",
    commitmentsTitle: "A place for moments together",
    tips: [
      {
        title: "Orientation and ventilation",
        description:
          "Consider the hob, entrance, daylight and airflow within the actual layout. Balance feng shui preferences with practical circulation and extraction.",
      },
      {
        title: "Function around your routines",
        description:
          "Choose cabinet and appliance dimensions before planning utilities. Connect storage, preparation, washing and cooking areas with clear circulation.",
      },
      {
        title: "Materials suited to a kitchen",
        description:
          "Choose easy-clean surfaces and materials and hardware suited to moisture and operating temperatures. Detail edges and joints to limit water exposure.",
      },
      {
        title: "Coatings and surface finishes",
        description:
          "Select paint, coatings and preparation for the underlying material. Agree colour samples, sheen and maintenance requirements before work.",
      },
      {
        title: "Your colours and style",
        description:
          "Discuss modern, neoclassical or classical preferences with the architect. Coordinate cabinets, worktops, walls and lighting.",
      },
    ],
    checks: [
      "Clear business address and company details",
      "Experienced team with projects to review",
      "Coordinated design and construction services",
      "Direct production and clear quotations",
      "Contract with defined scope and responsibilities",
      "Financial planning and itemised estimates",
    ],
  },
  ja: {
    heroParts: ["キッチンの", "インテリア"],
    intro:
      "料理し、語らい、集うためのキッチン。機能、素材、スタイルを家族の日常に合わせて調和させます。",
    explore: "設計のポイントを見る",
    tipsTitle: "キッチン設計で大切な5つのポイント",
    checksTitle: "最初から信頼できるパートナーを",
    workshopTitle: "設計から製作・設置まで",
    workshopIntro:
      "建築士、工場、現場チームが一体となりキッチンを実現。Gamuda、Time City、Golden Place、HH Linh Dam、Eco Parkでの工事も経験の一部です。",
    commitmentsTitle: "家族で過ごす時間を温かく",
    tips: [
      {
        title: "向きと通風",
        description:
          "コンロ、出入口、光、通風を現況に合わせて検討。風水の希望と動線、換気を調整します。",
      },
      {
        title: "暮らしに合う機能",
        description:
          "電気・給排水計画の前に収納と設備寸法を確認。収納、下準備、洗浄、調理を使いやすい動線で結びます。",
      },
      {
        title: "キッチンに合う素材",
        description:
          "掃除しやすい面材、湿気や使用温度に合う素材と金具を選び、端部と接合部の水対策を考えます。",
      },
      {
        title: "塗装と表面仕上げ",
        description:
          "下地に合わせた塗装、コーティング、処理を選択。色見本、艶、手入れを施工前に確認します。",
      },
      {
        title: "自分らしい色とスタイル",
        description:
          "モダン、ネオクラシック、クラシックの好みを建築士と相談。収納、天板、壁、照明を調和させます。",
      },
    ],
    checks: [
      "明確な所在地と企業情報",
      "実績を確認できる経験豊富なチーム",
      "設計と施工の一貫した連携",
      "直接製作と明確な見積もり",
      "範囲と責任を定めた契約",
      "項目別の資金計画と積算",
    ],
  },
  ko: {
    heroParts: ["주방", "인테리어"],
    intro:
      "요리하고 나누며 함께 모이는 주방. 가족의 일상에 맞춰 기능, 자재와 스타일을 조화롭게 연결합니다.",
    explore: "디자인 포인트 보기",
    tipsTitle: "주방 설계의 5가지 핵심",
    checksTitle: "처음부터 믿을 수 있는 업체 선택",
    workshopTitle: "설계에서 제작과 설치까지",
    workshopIntro:
      "건축가, 공장과 현장팀이 협력해 주방을 완성합니다. Gamuda, Time City, Golden Place, HH Linh Dam, Eco Park 프로젝트도 경험의 일부입니다.",
    commitmentsTitle: "함께하는 시간을 따뜻하게",
    tips: [
      {
        title: "방향과 환기",
        description:
          "현장에 맞춰 조리대, 출입구, 채광과 통풍을 검토합니다. 풍수 선호와 동선, 배기 계획을 조율합니다.",
      },
      {
        title: "생활 습관에 맞춘 기능",
        description:
          "전기와 배관 계획 전 수납장과 기기 치수를 정합니다. 보관, 준비, 세척과 조리 구역을 편리하게 연결합니다.",
      },
      {
        title: "주방에 적합한 자재",
        description:
          "청소하기 쉬운 표면과 습도, 사용 온도에 맞는 자재와 부속품을 선택합니다. 모서리와 이음부의 물 영향을 줄입니다.",
      },
      {
        title: "도장과 표면 마감",
        description:
          "바탕 자재에 맞는 도장과 코팅을 선택하고 색상 견본, 광택과 관리 방법을 시공 전 협의합니다.",
      },
      {
        title: "나만의 색과 스타일",
        description:
          "모던, 신고전주의, 클래식 취향을 건축가와 상담합니다. 수납장, 상판, 벽과 조명을 조화시킵니다.",
      },
    ],
    checks: [
      "명확한 주소와 기업 정보",
      "참고 프로젝트를 갖춘 경험 있는 팀",
      "설계와 시공의 일관된 협업",
      "직접 생산과 명확한 견적",
      "범위와 책임이 구체적인 계약",
      "항목별 재무 계획과 견적",
    ],
  },
  sv: {
    heroParts: ["Köks", "inredning"],
    intro:
      "Ett kök för matlagning, samtal och gemenskap. Funktion, material och stil möter familjens vardag.",
    explore: "Utforska detaljerna",
    tipsTitle: "5 viktiga delar i köksdesign",
    checksTitle: "Välj rätt team från början",
    workshopTitle: "Från design till tillverkning och montering",
    workshopIntro:
      "Arkitekter, verkstäder och byggteam samordnar köket. Projekt i Gamuda, Time City, Golden Place, HH Linh Dam och Eco Park är en del av vår erfarenhet.",
    commitmentsTitle: "Plats för stunder tillsammans",
    tips: [
      {
        title: "Riktning och ventilation",
        description:
          "Planera spis, entré, dagsljus och luftflöde efter rummet. Balansera feng shui med gångstråk och utsug.",
      },
      {
        title: "Funktion efter dina vanor",
        description:
          "Bestäm skåp- och apparatmått före el och vatten. Knyt ihop förvaring, förberedelse, disk och matlagning.",
      },
      {
        title: "Material för köksmiljön",
        description:
          "Välj lättstädade ytor och material och beslag för fukt och temperatur. Utforma kanter och fogar för att begränsa vattenpåverkan.",
      },
      {
        title: "Färg och ytbehandling",
        description:
          "Välj färg, beläggning och förarbete efter underlaget. Enas om färgprov, glans och skötsel före arbetet.",
      },
      {
        title: "Din färg och stil",
        description:
          "Diskutera modern, nyklassisk eller klassisk stil. Samordna skåp, bänkskivor, väggar och ljus.",
      },
    ],
    checks: [
      "Tydlig företagsadress och information",
      "Erfaret team med referensprojekt",
      "Samordnad design och byggnation",
      "Direkt tillverkning och tydliga offerter",
      "Avtal med omfattning och ansvar",
      "Finansiell plan och specificerad kalkyl",
    ],
  },
  fr: {
    heroParts: ["Intérieur de", "cuisine"],
    intro:
      "Une cuisine pour préparer, partager et se retrouver. Fonction, matériaux et style s’accordent à la vie de famille.",
    explore: "Explorer les points clés",
    tipsTitle: "5 points à soigner dans votre cuisine",
    checksTitle: "Choisir la bonne équipe dès le départ",
    workshopTitle: "De la conception à la fabrication et la pose",
    workshopIntro:
      "Architectes, ateliers et équipes de chantier coordonnent la cuisine. Gamuda, Time City, Golden Place, HH Linh Dam et Eco Park font partie de notre expérience.",
    commitmentsTitle: "Un lieu pour les moments partagés",
    tips: [
      {
        title: "Orientation et ventilation",
        description:
          "Étudiez cuisson, entrée, lumière et aération selon l’existant. Conciliez feng shui, circulation et extraction.",
      },
      {
        title: "La fonction selon vos habitudes",
        description:
          "Définissez dimensions des meubles et appareils avant les réseaux. Reliez rangement, préparation, lavage et cuisson.",
      },
      {
        title: "Des matériaux pour la cuisine",
        description:
          "Choisissez des surfaces faciles à nettoyer et des matériaux et accessoires adaptés à l’humidité et à la chaleur. Soignez chants et joints face à l’eau.",
      },
      {
        title: "Peintures et finitions",
        description:
          "Adaptez peinture, revêtement et préparation au support. Validez échantillons, brillance et entretien avant travaux.",
      },
      {
        title: "Vos couleurs et votre style",
        description:
          "Discutez styles moderne, néoclassique ou classique. Coordonnez meubles, plans de travail, murs et éclairages.",
      },
    ],
    checks: [
      "Adresse et informations d’entreprise claires",
      "Équipe expérimentée avec références",
      "Conception et réalisation coordonnées",
      "Production directe et devis transparents",
      "Contrat précisant périmètre et responsabilités",
      "Plan financier et estimation par poste",
    ],
  },
  ru: {
    heroParts: ["Интерьер", "кухни"],
    intro:
      "Кухня для готовки, общения и встреч. Объединяем функции, материалы и стиль под повседневную жизнь семьи.",
    explore: "Посмотреть рекомендации",
    tipsTitle: "5 важных деталей дизайна кухни",
    checksTitle: "Надёжная команда с самого начала",
    workshopTitle: "От проекта до производства и монтажа",
    workshopIntro:
      "Архитекторы, мастерские и монтажники координируют создание кухни. Gamuda, Time City, Golden Place, HH Linh Dam и Eco Park — часть нашего опыта.",
    commitmentsTitle: "Место для тёплых семейных моментов",
    tips: [
      {
        title: "Ориентация и вентиляция",
        description:
          "Учитывайте плиту, вход, свет и проветривание по условиям помещения. Сочетайте фэншуй с удобством и вытяжкой.",
      },
      {
        title: "Функции под ваши привычки",
        description:
          "Определите размеры шкафов и техники до планирования сетей. Соедините хранение, подготовку, мойку и готовку удобными проходами.",
      },
      {
        title: "Материалы для кухни",
        description:
          "Выбирайте легко очищаемые поверхности, материалы и фурнитуру под влажность и температуру. Продумайте защиту кромок и стыков от воды.",
      },
      {
        title: "Покрытия и отделка",
        description:
          "Подберите краски, покрытия и подготовку под материал основы. Заранее согласуйте образцы, блеск и уход.",
      },
      {
        title: "Ваши цвета и стиль",
        description:
          "Обсудите современный стиль, неоклассику или классику. Согласуйте шкафы, столешницы, стены и освещение.",
      },
    ],
    checks: [
      "Понятный адрес и сведения о компании",
      "Опытная команда с примерами проектов",
      "Согласованные проектирование и работы",
      "Прямое производство и ясная смета",
      "Договор с объёмом и ответственностью",
      "Финансовый план и смета по статьям",
    ],
  },
  es: {
    heroParts: ["Interiores de", "cocina"],
    intro:
      "Una cocina para preparar, compartir y reunirse. Función, materiales y estilo se adaptan a la vida familiar.",
    explore: "Explorar las claves",
    tipsTitle: "5 puntos para cuidar el diseño de cocina",
    checksTitle: "Elegir al equipo adecuado desde el inicio",
    workshopTitle: "Del diseño a la fabricación y la instalación",
    workshopIntro:
      "Arquitectos, talleres y equipos de obra coordinan la cocina. Gamuda, Time City, Golden Place, HH Linh Dam y Eco Park forman parte de nuestra experiencia.",
    commitmentsTitle: "Un lugar para momentos compartidos",
    tips: [
      {
        title: "Orientación y ventilación",
        description:
          "Estudia placa, entrada, luz y aire según el espacio. Equilibra feng shui, circulación y extracción.",
      },
      {
        title: "Función según tus hábitos",
        description:
          "Define dimensiones de muebles y aparatos antes de las instalaciones. Conecta almacenamiento, preparación, lavado y cocción.",
      },
      {
        title: "Materiales para la cocina",
        description:
          "Elige superficies fáciles de limpiar y materiales y herrajes adecuados a humedad y temperatura. Cuida cantos y uniones frente al agua.",
      },
      {
        title: "Pinturas y acabados",
        description:
          "Adapta pintura, recubrimientos y preparación al soporte. Acuerda muestras, brillo y mantenimiento antes de la obra.",
      },
      {
        title: "Tus colores y estilo",
        description:
          "Consulta estilos moderno, neoclásico o clásico. Coordina muebles, encimeras, paredes e iluminación.",
      },
    ],
    checks: [
      "Dirección e información empresarial claras",
      "Equipo con experiencia y referencias",
      "Diseño y ejecución coordinados",
      "Producción directa y presupuestos claros",
      "Contrato con alcance y responsabilidades",
      "Plan financiero y estimación por partidas",
    ],
  },
  zh: {
    heroParts: ["厨房", "设计"],
    intro: "一处烹饪、分享与团聚的空间。让功能、材质与风格契合家庭的日常生活。",
    explore: "了解设计要点",
    tipsTitle: "厨房设计的五个用心之处",
    checksTitle: "从一开始选择合适的团队",
    workshopTitle: "从设计到生产与安装",
    workshopIntro:
      "建筑师、工厂与施工团队共同完成厨房。Gamuda、Time City、Golden Place、HH Linh Dam及Eco Park项目也是我们经验的一部分。",
    commitmentsTitle: "为团聚时刻留住温暖",
    tips: [
      {
        title: "朝向与通风",
        description:
          "结合现状考虑灶位、入口、采光与通风，兼顾风水偏好、通行便利及排烟方案。",
      },
      {
        title: "符合使用习惯的功能",
        description:
          "在规划水电前确定橱柜及设备尺寸，合理连接储藏、备餐、清洗与烹饪区域。",
      },
      {
        title: "适应厨房环境的材料",
        description:
          "选择易清洁表面及适合湿度、使用温度的材料和五金，重视封边与接缝以减少水的影响。",
      },
      {
        title: "涂装与表面饰面",
        description:
          "按基材选择涂料、涂层及表面处理，施工前确认色样、光泽和维护要求。",
      },
      {
        title: "专属色彩与风格",
        description:
          "与建筑师沟通现代、新古典或古典偏好，协调橱柜、台面、墙面与灯光。",
      },
    ],
    checks: [
      "明确的地址及企业信息",
      "有经验并可提供案例的团队",
      "设计与施工协调配合",
      "直接生产，清晰报价",
      "合同明确范围及责任",
      "按项目编制资金计划和预算",
    ],
  },
};
