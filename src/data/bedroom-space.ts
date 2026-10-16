import { kitchenSpaceCopy, type KitchenSpaceCopy } from "./kitchen-space";
import type { SiteLocale } from "@/lib/locale";
export const bedroomSpaceCopy: Record<SiteLocale, KitchenSpaceCopy> = {
  vi: {
    ...kitchenSpaceCopy.vi,
    heroParts: ["Không gian", "phòng ngủ"],
    intro:
      "Mẫu thiết kế và công trình phòng ngủ thực tế, giúp bạn chọn phong cách, nội thất và vật liệu cho không gian nghỉ ngơi của mình.",
    library: {
      ...kitchenSpaceCopy.vi.library,
      title: "Thư viện mẫu thiết kế và thi công phòng ngủ",
    },
    services: [
      {
        title: "Thiết kế phòng ngủ",
        description: "Tư vấn theo phong cách và nhu cầu nghỉ ngơi.",
      },
      {
        title: "Giường ngủ, tủ áo",
        description: "Bố trí tiện nghi, tối ưu diện tích và lưu trữ.",
      },
      {
        title: "Thi công trọn gói",
        description: "Từ phần thô đến hoàn thiện phòng ngủ.",
      },
      {
        title: "Sản xuất đồ gỗ",
        description: "Giường, tủ, bàn trang điểm theo yêu cầu.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.vi.cta,
      title: "Sẵn sàng kiến tạo không gian phòng ngủ cho tổ ấm của bạn?",
    },
    categories: [
      "Trẻ em",
      "Luxury",
      "Tân cổ điển",
      "Tủ quần áo",
      "Hiện đại",
      "Master",
      "Báo giá",
    ],
    articles: [
      {
        title: "10+ mẫu thiết kế giường tầng cho phòng ngủ trẻ em",
        description:
          "Giải pháp giường tầng tiết kiệm diện tích, kết hợp không gian học tập, vui chơi và nghỉ ngơi.",
      },
      {
        title: "10+ mẫu phòng ngủ luxury sang trọng và thời thượng",
        description:
          "Khám phá phòng ngủ với gỗ tự nhiên, đá cẩm thạch và những chi tiết trang trí tinh tế.",
      },
      {
        title: "20+ mẫu phòng ngủ tân cổ điển sang trọng",
        description:
          "Kết hợp đường nét cổ điển và tiện nghi hiện đại với gam màu kem, trắng và xám.",
      },
      {
        title: "50+ mẫu tủ quần áo bền đẹp và tiện nghi",
        description:
          "Tham khảo tủ gỗ công nghiệp, gỗ tự nhiên và cánh kính cho nhiều nhu cầu lưu trữ.",
      },
      {
        title: "20+ mẫu thiết kế phòng ngủ trẻ em đáng yêu",
        description:
          "Gợi ý màu sắc, nội thất và cách bố trí để trẻ học tập, vui chơi và nghỉ ngơi.",
      },
      {
        title: "60+ mẫu thiết kế phòng ngủ hiện đại",
        description:
          "Những ý tưởng phòng ngủ hài hòa công năng và thẩm mỹ, phù hợp nhiều diện tích.",
      },
      {
        title: "Kinh nghiệm thiết kế nội thất phòng ngủ master",
        description:
          "Tham khảo cách lựa chọn ánh sáng, màu sắc và nội thất cho phòng ngủ chính.",
      },
      {
        title: "Báo giá thi công nội thất trọn gói năm 2023",
        description:
          "Tham khảo báo giá nội thất theo chất liệu MFC, MDF kháng ẩm và gỗ tự nhiên.",
      },
    ],
  },
  en: {
    ...kitchenSpaceCopy.en,
    heroParts: ["Bedroom", "spaces"],
    intro:
      "Explore bedroom designs and completed interiors to choose the style, furniture and materials for your own restful retreat.",
    library: {
      ...kitchenSpaceCopy.en.library,
      title: "Bedroom design and construction gallery",
    },
    services: [
      {
        title: "Bedroom design",
        description: "Advice tailored to your style and resting needs.",
      },
      {
        title: "Beds & wardrobes",
        description: "Comfortable layouts with efficient storage.",
      },
      {
        title: "Complete construction",
        description: "From initial work to a finished bedroom.",
      },
      {
        title: "Custom woodwork",
        description: "Made-to-order beds, wardrobes and dressing tables.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.en.cta,
      title: "Ready to create a restful bedroom for your home?",
    },
    categories: [
      "Children",
      "Luxury",
      "Neoclassical",
      "Wardrobes",
      "Modern",
      "Primary bedrooms",
      "Pricing",
    ],
    articles: [
      {
        title: "10+ bunk bed designs for children’s bedrooms",
        description:
          "Space-saving bunk beds that leave room for study, play and rest.",
      },
      {
        title: "10+ luxurious and stylish bedroom designs",
        description:
          "Explore natural wood, marble and carefully considered decorative details.",
      },
      {
        title: "20+ elegant neoclassical bedrooms",
        description:
          "Classic lines meet modern comfort in cream, white and grey palettes.",
      },
      {
        title: "50+ durable and practical wardrobe designs",
        description:
          "Explore engineered wood, natural wood and glass-front wardrobes for different storage needs.",
      },
      {
        title: "20+ delightful children’s bedroom designs",
        description:
          "Colour, furniture and layout ideas for learning, play and rest.",
      },
      {
        title: "60+ modern bedroom designs",
        description:
          "Bedroom ideas that balance function and aesthetics across different floor plans.",
      },
      {
        title: "A guide to designing a primary bedroom",
        description:
          "Consider lighting, colours and furniture for your main bedroom.",
      },
      {
        title: "Complete interior construction pricing for 2023",
        description:
          "Reference prices for MFC, moisture-resistant MDF and natural wood interiors.",
      },
    ],
  },
  ja: {
    ...kitchenSpaceCopy.ja,
    heroParts: ["安らぎの", "寝室"],
    intro:
      "寝室のデザインと施工事例から、心地よい休息のためのスタイル、家具、素材を見つけてください。",
    library: {
      ...kitchenSpaceCopy.ja.library,
      title: "寝室のデザイン・施工事例",
    },
    services: [
      {
        title: "寝室設計",
        description: "好みや休息のニーズに合わせてご提案。",
      },
      {
        title: "ベッド・収納",
        description: "使いやすい配置で収納と広さを確保。",
      },
      { title: "一括施工", description: "下地工事から寝室の仕上げまで対応。" },
      {
        title: "オーダー木製家具",
        description: "ベッド、収納、ドレッサーを製作。",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.ja.cta,
      title: "住まいに安らぎの寝室をつくりませんか？",
    },
    categories: [
      "子ども部屋",
      "ラグジュアリー",
      "ネオクラシック",
      "ワードローブ",
      "モダン",
      "主寝室",
      "価格",
    ],
    articles: [
      {
        title: "子ども部屋の二段ベッドデザイン10選以上",
        description: "勉強、遊び、休息の場所を確保する省スペースの二段ベッド。",
      },
      {
        title: "上質なラグジュアリー寝室10選以上",
        description: "天然木や大理石、繊細な装飾を取り入れた寝室をご紹介。",
      },
      {
        title: "優雅なネオクラシック寝室20選以上",
        description:
          "クラシックなラインと現代の快適さを、クリーム、白、グレーで表現。",
      },
      {
        title: "美しく使いやすいワードローブ50選以上",
        description: "収納のニーズに合わせた木質材、天然木、ガラス扉の収納。",
      },
      {
        title: "かわいい子ども部屋の寝室デザイン20選以上",
        description:
          "学習、遊び、休息を支える配色、家具、レイアウトのアイデア。",
      },
      {
        title: "モダンな寝室デザイン60選以上",
        description: "さまざまな広さで機能と美しさを両立する寝室のアイデア。",
      },
      {
        title: "主寝室のインテリア設計ガイド",
        description: "主寝室の照明、配色、家具選びを考えるヒント。",
      },
      {
        title: "内装一括施工の参考価格：2023年",
        description: "MFC、耐湿MDF、天然木を使った内装の参考価格。",
      },
    ],
  },
  ko: {
    ...kitchenSpaceCopy.ko,
    heroParts: ["편안한", "침실"],
    intro:
      "침실 디자인과 시공 사례를 살펴보고 편안한 휴식에 어울리는 스타일, 가구, 소재를 찾아보세요.",
    library: {
      ...kitchenSpaceCopy.ko.library,
      title: "침실 디자인 및 시공 갤러리",
    },
    services: [
      { title: "침실 디자인", description: "취향과 휴식 방식에 맞춘 제안." },
      {
        title: "침대·옷장",
        description: "공간과 수납을 효율적으로 활용하는 배치.",
      },
      { title: "통합 시공", description: "기초 작업부터 침실 마감까지." },
      {
        title: "맞춤 목가구",
        description: "침대, 옷장, 화장대를 맞춤 제작합니다.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.ko.cta,
      title: "우리 집에 편안한 침실을 만들어 볼까요?",
    },
    categories: [
      "어린이",
      "럭셔리",
      "네오클래식",
      "옷장",
      "모던",
      "안방",
      "견적",
    ],
    articles: [
      {
        title: "어린이 침실을 위한 이층 침대 디자인 10선 이상",
        description: "공부, 놀이, 휴식 공간을 확보하는 공간 절약형 이층 침대.",
      },
      {
        title: "고급스럽고 세련된 럭셔리 침실 10선 이상",
        description: "원목, 대리석, 섬세한 장식으로 완성한 침실을 만나보세요.",
      },
      {
        title: "우아한 네오클래식 침실 20선 이상",
        description:
          "크림, 화이트, 그레이 색상으로 고전적인 선과 현대적인 편안함을 조화시킵니다.",
      },
      {
        title: "아름답고 실용적인 옷장 디자인 50선 이상",
        description: "다양한 수납 요구에 맞춘 가공목, 원목, 유리 도어 옷장.",
      },
      {
        title: "사랑스러운 어린이 침실 디자인 20선 이상",
        description: "공부, 놀이, 휴식을 위한 색상, 가구, 배치 아이디어.",
      },
      {
        title: "모던 침실 디자인 60선 이상",
        description: "다양한 면적에 맞춰 기능과 미적 감각을 조화시킨 침실.",
      },
      {
        title: "안방 인테리어 디자인 가이드",
        description: "주 침실의 조명, 색상, 가구 선택을 위한 아이디어.",
      },
      {
        title: "2023년 인테리어 통합 시공 참고 견적",
        description: "MFC, 방습 MDF, 원목 인테리어의 참고 가격.",
      },
    ],
  },
  sv: {
    ...kitchenSpaceCopy.sv,
    heroParts: ["Rum för", "vila"],
    intro:
      "Utforska sovrumsdesign och färdiga interiörer för att välja stil, möbler och material för din egen plats för vila.",
    library: {
      ...kitchenSpaceCopy.sv.library,
      title: "Inspiration för design och inredning av sovrum",
    },
    services: [
      {
        title: "Sovrumsdesign",
        description: "Rådgivning efter din stil och dina behov av vila.",
      },
      {
        title: "Sängar och garderober",
        description: "Bekväma planlösningar med smart förvaring.",
      },
      {
        title: "Komplett utförande",
        description: "Från grundarbete till färdigt sovrum.",
      },
      {
        title: "Måttanpassat träarbete",
        description: "Sängar, garderober och sminkbord efter dina önskemål.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.sv.cta,
      title: "Redo att skapa ett rofyllt sovrum i ditt hem?",
    },
    categories: [
      "Barnrum",
      "Lyx",
      "Nyklassicism",
      "Garderober",
      "Modernt",
      "Huvudsovrum",
      "Priser",
    ],
    articles: [
      {
        title: "Över 10 våningssängar för barnrum",
        description:
          "Platsbesparande våningssängar med utrymme för studier, lek och vila.",
      },
      {
        title: "Över 10 lyxiga och stilfulla sovrum",
        description:
          "Upptäck naturligt trä, marmor och omsorgsfullt utformade detaljer.",
      },
      {
        title: "Över 20 eleganta nyklassiska sovrum",
        description:
          "Klassiska linjer möter modern komfort i gräddvitt, vitt och grått.",
      },
      {
        title: "Över 50 hållbara och praktiska garderober",
        description:
          "Garderober i träbaserade material, massivt trä och glas för olika förvaringsbehov.",
      },
      {
        title: "Över 20 charmiga barnrum",
        description:
          "Idéer för färger, möbler och planering som ger plats för studier, lek och vila.",
      },
      {
        title: "Över 60 moderna sovrum",
        description:
          "Sovrumsidéer som förenar funktion och estetik på olika ytor.",
      },
      {
        title: "En guide till att inreda huvudsovrummet",
        description:
          "Inspiration för belysning, färger och möbler i ditt huvudsovrum.",
      },
      {
        title: "Referenspriser för komplett inredningsarbete 2023",
        description: "Prisöversikt för MFC, fuktbeständig MDF och massivt trä.",
      },
    ],
  },
  fr: {
    ...kitchenSpaceCopy.fr,
    heroParts: ["Un espace", "chambre"],
    intro:
      "Découvrez des chambres et des réalisations pour choisir le style, le mobilier et les matériaux de votre espace de repos.",
    library: {
      ...kitchenSpaceCopy.fr.library,
      title: "Galerie de conception et de réalisation de chambres",
    },
    services: [
      {
        title: "Conception de chambre",
        description: "Des conseils selon votre style et vos besoins de repos.",
      },
      {
        title: "Lits et armoires",
        description: "Un agencement confortable et des rangements optimisés.",
      },
      {
        title: "Réalisation complète",
        description: "Des travaux initiaux aux finitions de la chambre.",
      },
      {
        title: "Menuiserie sur mesure",
        description: "Lits, armoires et coiffeuses selon vos envies.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.fr.cta,
      title: "Prêt à créer une chambre propice au repos ?",
    },
    categories: [
      "Enfants",
      "Luxe",
      "Néoclassique",
      "Armoires",
      "Moderne",
      "Suite parentale",
      "Tarifs",
    ],
    articles: [
      {
        title: "Plus de 10 lits superposés pour chambres d’enfants",
        description:
          "Des lits peu encombrants pour laisser de la place à l’étude, au jeu et au repos.",
      },
      {
        title: "Plus de 10 chambres luxueuses et élégantes",
        description:
          "Découvrez le bois naturel, le marbre et des détails décoratifs soignés.",
      },
      {
        title: "Plus de 20 chambres néoclassiques raffinées",
        description:
          "Des lignes classiques et un confort moderne dans les tons crème, blanc et gris.",
      },
      {
        title: "Plus de 50 armoires durables et pratiques",
        description:
          "Des armoires en panneaux de bois, bois naturel ou à portes vitrées selon vos besoins.",
      },
      {
        title: "Plus de 20 jolies chambres d’enfants",
        description:
          "Des idées de couleurs, de mobilier et d’agencement pour apprendre, jouer et se reposer.",
      },
      {
        title: "Plus de 60 chambres modernes",
        description:
          "Des chambres qui conjuguent fonctionnalité et esthétique sur différentes surfaces.",
      },
      {
        title: "Guide de conception de la chambre parentale",
        description:
          "Des pistes pour choisir l’éclairage, les couleurs et le mobilier de la chambre principale.",
      },
      {
        title: "Tarifs indicatifs de réalisation intérieure complète en 2023",
        description:
          "Repères tarifaires pour le MFC, le MDF hydrofuge et le bois naturel.",
      },
    ],
  },
  ru: {
    ...kitchenSpaceCopy.ru,
    heroParts: ["Пространство", "спальни"],
    intro:
      "Изучите дизайн и готовые интерьеры спален, чтобы выбрать стиль, мебель и материалы для комфортного отдыха.",
    library: {
      ...kitchenSpaceCopy.ru.library,
      title: "Галерея дизайна и отделки спален",
    },
    services: [
      {
        title: "Дизайн спальни",
        description: "Решения с учётом вашего стиля и потребностей в отдыхе.",
      },
      {
        title: "Кровати и шкафы",
        description: "Удобная планировка и продуманное хранение.",
      },
      {
        title: "Отделка под ключ",
        description: "От черновых работ до готовой спальни.",
      },
      {
        title: "Мебель на заказ",
        description: "Кровати, шкафы и туалетные столики по вашим пожеланиям.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.ru.cta,
      title: "Готовы создать уютную спальню для вашего дома?",
    },
    categories: [
      "Детские",
      "Люкс",
      "Неоклассика",
      "Шкафы",
      "Современные",
      "Главная спальня",
      "Цены",
    ],
    articles: [
      {
        title: "Более 10 двухъярусных кроватей для детских спален",
        description:
          "Компактные кровати оставляют место для учёбы, игр и отдыха.",
      },
      {
        title: "Более 10 роскошных и стильных спален",
        description:
          "Натуральное дерево, мрамор и тщательно продуманные декоративные детали.",
      },
      {
        title: "Более 20 элегантных спален в стиле неоклассики",
        description:
          "Классические линии и современный комфорт в кремовых, белых и серых тонах.",
      },
      {
        title: "Более 50 красивых и практичных шкафов",
        description:
          "Шкафы из древесных плит, натурального дерева и со стеклянными дверями для разных задач хранения.",
      },
      {
        title: "Более 20 уютных детских спален",
        description: "Идеи цвета, мебели и планировки для учёбы, игр и отдыха.",
      },
      {
        title: "Более 60 современных спален",
        description:
          "Решения, сочетающие функциональность и эстетику на разных площадях.",
      },
      {
        title: "Руководство по дизайну главной спальни",
        description: "Советы по выбору освещения, цветовой гаммы и мебели.",
      },
      {
        title: "Ориентировочные цены на отделку интерьера под ключ за 2023 год",
        description:
          "Обзор цен для мебели из MFC, влагостойкого MDF и натурального дерева.",
      },
    ],
  },
  es: {
    ...kitchenSpaceCopy.es,
    heroParts: ["Espacios", "de descanso"],
    intro:
      "Explora diseños y proyectos de dormitorios para elegir el estilo, los muebles y los materiales de tu espacio de descanso.",
    library: {
      ...kitchenSpaceCopy.es.library,
      title: "Galería de diseño y ejecución de dormitorios",
    },
    services: [
      {
        title: "Diseño del dormitorio",
        description:
          "Asesoramiento según tu estilo y tus necesidades de descanso.",
      },
      {
        title: "Camas y armarios",
        description: "Distribución cómoda y almacenamiento optimizado.",
      },
      {
        title: "Ejecución integral",
        description: "Desde los trabajos iniciales hasta los acabados.",
      },
      {
        title: "Carpintería a medida",
        description: "Camas, armarios y tocadores según tus preferencias.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.es.cta,
      title: "¿Listo para crear un dormitorio acogedor en tu hogar?",
    },
    categories: [
      "Infantil",
      "Lujo",
      "Neoclásico",
      "Armarios",
      "Moderno",
      "Dormitorio principal",
      "Precios",
    ],
    articles: [
      {
        title: "Más de 10 diseños de literas para dormitorios infantiles",
        description:
          "Literas que ahorran espacio para estudiar, jugar y descansar.",
      },
      {
        title: "Más de 10 dormitorios lujosos y elegantes",
        description:
          "Descubre madera natural, mármol y detalles decorativos cuidados.",
      },
      {
        title: "Más de 20 dormitorios neoclásicos elegantes",
        description:
          "Líneas clásicas y comodidad moderna en tonos crema, blanco y gris.",
      },
      {
        title: "Más de 50 armarios resistentes y prácticos",
        description:
          "Armarios de tableros de madera, madera natural y puertas de cristal para distintas necesidades.",
      },
      {
        title: "Más de 20 encantadores dormitorios infantiles",
        description:
          "Ideas de color, muebles y distribución para estudiar, jugar y descansar.",
      },
      {
        title: "Más de 60 dormitorios modernos",
        description:
          "Ideas que equilibran funcionalidad y estética en distintas superficies.",
      },
      {
        title: "Guía de diseño del dormitorio principal",
        description: "Consejos para elegir iluminación, colores y muebles.",
      },
      {
        title:
          "Precios orientativos de ejecución integral de interiores en 2023",
        description:
          "Precios de referencia para MFC, MDF resistente a la humedad y madera natural.",
      },
    ],
  },
  zh: {
    ...kitchenSpaceCopy.zh,
    heroParts: ["舒适休憩", "卧室空间"],
    intro: "浏览卧室设计与施工案例，为您的休憩空间选择合适的风格、家具和材料。",
    library: { ...kitchenSpaceCopy.zh.library, title: "卧室设计与施工案例库" },
    services: [
      { title: "卧室设计", description: "根据您的风格与休憩需求提供建议。" },
      { title: "床具与衣柜", description: "舒适布局，优化空间与收纳。" },
      { title: "一站式施工", description: "从基础施工到卧室完工。" },
      { title: "定制木作", description: "按需制作床、衣柜与梳妆台。" },
    ],
    cta: { ...kitchenSpaceCopy.zh.cta, title: "准备好打造舒适的卧室了吗？" },
    categories: ["儿童房", "轻奢", "新古典", "衣柜", "现代", "主卧", "报价"],
    articles: [
      {
        title: "10余款儿童卧室双层床设计",
        description: "节省空间的双层床，为学习、玩耍与休息留出空间。",
      },
      {
        title: "10余款优雅奢华的卧室设计",
        description: "探索天然木材、大理石与精致装饰细节。",
      },
      {
        title: "20余款典雅的新古典卧室",
        description: "以奶油色、白色和灰色融合古典线条与现代舒适感。",
      },
      {
        title: "50余款美观实用的衣柜设计",
        description: "人造板、天然木材与玻璃柜门，满足不同收纳需求。",
      },
      {
        title: "20余款可爱的儿童卧室设计",
        description: "为学习、玩耍与休息提供配色、家具及布局灵感。",
      },
      {
        title: "60余款现代卧室设计",
        description: "兼顾功能与美观，适应不同面积的卧室方案。",
      },
      {
        title: "主卧室内设计指南",
        description: "了解主卧照明、配色与家具的选择方法。",
      },
      {
        title: "2023年全屋室内施工参考报价",
        description: "参考MFC、防潮MDF及天然木材的室内施工价格。",
      },
    ],
  },
};
