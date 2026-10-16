import { kitchenSpaceCopy, type KitchenSpaceCopy } from "./kitchen-space";
import type { SiteLocale } from "@/lib/locale";
export const livingRoomSpaceCopy: Record<SiteLocale, KitchenSpaceCopy> = {
  vi: {
    ...kitchenSpaceCopy.vi,
    heroParts: ["Không gian", "phòng khách"],
    intro:
      "Mẫu thiết kế và công trình phòng khách thực tế, giúp bạn chọn phong cách, nội thất và vật liệu phù hợp cho tổ ấm của mình.",
    library: {
      ...kitchenSpaceCopy.vi.library,
      title: "Thư viện mẫu thiết kế và thi công phòng khách",
    },
    services: [
      {
        title: "Thiết kế phòng khách",
        description: "Tư vấn theo phong cách và nhu cầu sử dụng.",
      },
      {
        title: "Bố trí nội thất",
        description: "Sofa, bàn trà và kệ tivi hài hòa, tối ưu không gian.",
      },
      {
        title: "Thi công trọn gói",
        description: "Từ phần thô đến hoàn thiện phòng khách.",
      },
      {
        title: "Sản xuất đồ gỗ",
        description: "Tủ kệ và đồ gỗ nội thất theo yêu cầu.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.vi.cta,
      title: "Sẵn sàng kiến tạo không gian phòng khách cho tổ ấm của bạn?",
    },
    categories: [
      "Biệt thự, nhà phố",
      "Chung cư",
      "Giải pháp không gian",
      "Báo giá",
    ],
    articles: [
      {
        title:
          "30+ mẫu thiết kế nội thất phòng khách biệt thự, nhà phố đẹp đến xiêu lòng",
        description:
          "Tham khảo hơn 30 mẫu phòng khách từ hiện đại, đơn giản đến sang trọng với nhiều diện tích và chất liệu.",
      },
      {
        title: "Bộ sưu tập nội thất phòng khách đẹp và ấn tượng 2023",
        description:
          "Những mẫu phòng khách chung cư hài hòa giữa thẩm mỹ và công năng, phù hợp nhiều diện tích.",
      },
      {
        title:
          "Phòng ngủ không có cửa sổ – cách khắc phục hạn chế của thiết kế",
        description:
          "Tham khảo cách phối màu, bố trí ánh sáng và nội thất cho phòng ngủ không có cửa sổ.",
      },
      {
        title: "Báo giá thi công nội thất trọn gói năm 2023",
        description:
          "Tham khảo báo giá theo chất liệu gỗ MFC, MDF kháng ẩm và gỗ tự nhiên.",
      },
    ],
  },
  en: {
    ...kitchenSpaceCopy.en,
    heroParts: ["Living", "spaces"],
    intro:
      "Explore living room designs and completed interiors to find the style, furniture and materials that suit your home.",
    library: {
      ...kitchenSpaceCopy.en.library,
      title: "Living room design and construction gallery",
    },
    services: [
      {
        title: "Living room design",
        description: "Advice tailored to your style and everyday needs.",
      },
      {
        title: "Furniture planning",
        description:
          "Arrange sofas, coffee tables and TV units for a balanced space.",
      },
      {
        title: "Complete construction",
        description: "From initial work to a finished living room.",
      },
      {
        title: "Custom woodwork",
        description: "Made-to-order cabinets and wooden furniture.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.en.cta,
      title: "Ready to create the living room your home deserves?",
    },
    categories: [
      "Villas & townhouses",
      "Apartments",
      "Space solutions",
      "Pricing",
    ],
    articles: [
      {
        title: "30+ inspiring living room designs for villas and townhouses",
        description:
          "Discover modern, simple and luxurious living rooms in a range of sizes and materials.",
      },
      {
        title:
          "Beautiful and distinctive living room interiors: 2023 collection",
        description:
          "Apartment living rooms that balance style and function across different floor plans.",
      },
      {
        title: "Windowless bedrooms: ways to improve the space",
        description:
          "Explore colour, lighting and furniture ideas for bedrooms without windows.",
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
    heroParts: ["くつろぎの", "リビング"],
    intro:
      "リビングのデザインと施工事例から、住まいに合うスタイル、家具、素材を見つけてください。",
    library: {
      ...kitchenSpaceCopy.ja.library,
      title: "リビングのデザイン・施工事例",
    },
    services: [
      {
        title: "リビング設計",
        description: "好みや暮らし方に合わせてご提案。",
      },
      {
        title: "家具のレイアウト",
        description: "ソファ、テーブル、テレビボードを調和させます。",
      },
      { title: "一括施工", description: "下地工事から仕上げまで対応。" },
      {
        title: "オーダー木製家具",
        description: "収納や木製家具をご要望に合わせて製作。",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.ja.cta,
      title: "理想のリビングを一緒につくりませんか？",
    },
    categories: ["ヴィラ・戸建て", "マンション", "空間の工夫", "価格"],
    articles: [
      {
        title: "ヴィラ・戸建てのリビングデザイン30選以上",
        description:
          "モダンからシンプル、上質な空間まで、多様な広さと素材の事例をご紹介。",
      },
      {
        title: "美しく印象的なリビング：2023年コレクション",
        description:
          "さまざまな間取りに合わせ、美しさと使いやすさを両立したマンションのリビング。",
      },
      {
        title: "窓のない寝室を快適にする工夫",
        description: "窓のない寝室の配色、照明、家具の配置をご紹介。",
      },
      {
        title: "内装一括施工の参考価格：2023年",
        description: "MFC、耐湿MDF、天然木を使った内装の参考価格。",
      },
    ],
  },
  ko: {
    ...kitchenSpaceCopy.ko,
    heroParts: ["일상을 담는", "거실"],
    intro:
      "거실 디자인과 시공 사례를 살펴보고 집에 어울리는 스타일, 가구, 소재를 찾아보세요.",
    library: {
      ...kitchenSpaceCopy.ko.library,
      title: "거실 디자인 및 시공 갤러리",
    },
    services: [
      { title: "거실 디자인", description: "취향과 생활 방식에 맞춘 제안." },
      {
        title: "가구 배치",
        description: "소파, 테이블, TV 수납장을 조화롭게 배치합니다.",
      },
      { title: "통합 시공", description: "기초 작업부터 거실 마감까지." },
      {
        title: "맞춤 목가구",
        description: "요청에 맞춰 수납장과 목가구를 제작합니다.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.ko.cta,
      title: "우리 집에 어울리는 거실을 만들어 볼까요?",
    },
    categories: ["빌라·단독주택", "아파트", "공간 솔루션", "견적"],
    articles: [
      {
        title: "빌라와 단독주택을 위한 거실 디자인 30선 이상",
        description:
          "다양한 크기와 소재로 완성한 모던하고 간결하며 고급스러운 거실을 만나보세요.",
      },
      {
        title: "아름답고 인상적인 거실 인테리어: 2023 컬렉션",
        description:
          "다양한 평면에 맞춰 미적 감각과 실용성을 조화시킨 아파트 거실.",
      },
      {
        title: "창문 없는 침실의 공간 개선 방법",
        description: "창문 없는 침실을 위한 색상, 조명, 가구 배치 아이디어.",
      },
      {
        title: "2023년 인테리어 통합 시공 참고 견적",
        description: "MFC, 방습 MDF, 원목 인테리어의 참고 가격을 확인하세요.",
      },
    ],
  },
  sv: {
    ...kitchenSpaceCopy.sv,
    heroParts: ["Rum för", "umgänge"],
    intro:
      "Utforska vardagsrumsdesign och färdiga interiörer för att hitta stil, möbler och material som passar ditt hem.",
    library: {
      ...kitchenSpaceCopy.sv.library,
      title: "Inspiration för design och inredning av vardagsrum",
    },
    services: [
      {
        title: "Vardagsrumsdesign",
        description: "Rådgivning efter din stil och vardagens behov.",
      },
      {
        title: "Möblering",
        description: "Soffor, soffbord och TV-möbler i en balanserad helhet.",
      },
      {
        title: "Komplett utförande",
        description: "Från grundarbete till färdigt vardagsrum.",
      },
      {
        title: "Måttanpassat träarbete",
        description: "Skåp och trämöbler tillverkade efter dina önskemål.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.sv.cta,
      title: "Redo att skapa ett vardagsrum för ditt hem?",
    },
    categories: ["Villor och radhus", "Lägenheter", "Rumslösningar", "Priser"],
    articles: [
      {
        title: "Över 30 vardagsrumsidéer för villor och radhus",
        description:
          "Upptäck moderna, enkla och eleganta vardagsrum i olika storlekar och material.",
      },
      {
        title: "Vackra och uttrycksfulla vardagsrum: kollektion 2023",
        description:
          "Vardagsrum för lägenheter som förenar stil och funktion i olika planlösningar.",
      },
      {
        title: "Sovrum utan fönster: så förbättrar du rummet",
        description:
          "Idéer för färgsättning, belysning och möblering i sovrum utan fönster.",
      },
      {
        title: "Referenspriser för komplett inredningsarbete 2023",
        description: "Prisöversikt för MFC, fuktbeständig MDF och massivt trä.",
      },
    ],
  },
  fr: {
    ...kitchenSpaceCopy.fr,
    heroParts: ["Un espace", "salon"],
    intro:
      "Découvrez nos idées de salons et nos réalisations pour choisir le style, le mobilier et les matériaux adaptés à votre intérieur.",
    library: {
      ...kitchenSpaceCopy.fr.library,
      title: "Galerie de conception et de réalisation de salons",
    },
    services: [
      {
        title: "Conception du salon",
        description: "Des conseils selon votre style et vos besoins.",
      },
      {
        title: "Agencement du mobilier",
        description: "Canapés, tables basses et meubles TV en harmonie.",
      },
      {
        title: "Réalisation complète",
        description: "Du gros œuvre aux finitions du salon.",
      },
      {
        title: "Menuiserie sur mesure",
        description: "Rangements et meubles en bois selon vos envies.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.fr.cta,
      title: "Prêt à créer le salon qui vous ressemble ?",
    },
    categories: [
      "Villas et maisons",
      "Appartements",
      "Solutions d’espace",
      "Tarifs",
    ],
    articles: [
      {
        title: "Plus de 30 idées de salons pour villas et maisons",
        description:
          "Des salons modernes, épurés et élégants, dans différentes dimensions et matières.",
      },
      {
        title: "Des salons beaux et singuliers : collection 2023",
        description:
          "Des salons d’appartements qui allient esthétique et fonctionnalité pour divers agencements.",
      },
      {
        title: "Chambre sans fenêtre : comment améliorer l’espace",
        description:
          "Des idées de couleurs, d’éclairage et de mobilier pour une chambre sans fenêtre.",
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
    heroParts: ["Пространство", "гостиной"],
    intro:
      "Изучите дизайн и готовые интерьеры гостиных, чтобы подобрать стиль, мебель и материалы для вашего дома.",
    library: {
      ...kitchenSpaceCopy.ru.library,
      title: "Галерея дизайна и отделки гостиных",
    },
    services: [
      {
        title: "Дизайн гостиной",
        description: "Решения с учётом вашего стиля и повседневных задач.",
      },
      {
        title: "Расстановка мебели",
        description: "Гармоничное размещение диванов, столиков и ТВ-тумб.",
      },
      {
        title: "Отделка под ключ",
        description: "От черновых работ до готовой гостиной.",
      },
      {
        title: "Мебель на заказ",
        description: "Шкафы и деревянная мебель по вашим пожеланиям.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.ru.cta,
      title: "Готовы создать гостиную для вашего дома?",
    },
    categories: [
      "Виллы и дома",
      "Квартиры",
      "Решения для пространства",
      "Цены",
    ],
    articles: [
      {
        title: "Более 30 идей гостиных для вилл и частных домов",
        description:
          "Современные, лаконичные и изысканные гостиные разных размеров и материалов.",
      },
      {
        title: "Красивые и выразительные гостиные: коллекция 2023",
        description:
          "Гостиные в квартирах, сочетающие эстетику и удобство при разных планировках.",
      },
      {
        title: "Спальня без окон: как улучшить пространство",
        description:
          "Идеи цвета, освещения и расстановки мебели для спальни без окон.",
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
    heroParts: ["Espacios", "de salón"],
    intro:
      "Explora diseños y proyectos de salones para encontrar el estilo, los muebles y los materiales adecuados para tu hogar.",
    library: {
      ...kitchenSpaceCopy.es.library,
      title: "Galería de diseño y ejecución de salones",
    },
    services: [
      {
        title: "Diseño del salón",
        description: "Asesoramiento según tu estilo y tus necesidades.",
      },
      {
        title: "Distribución del mobiliario",
        description: "Sofás, mesas de centro y muebles de TV en armonía.",
      },
      {
        title: "Ejecución integral",
        description: "Desde los trabajos iniciales hasta los acabados.",
      },
      {
        title: "Carpintería a medida",
        description: "Armarios y muebles de madera según tus preferencias.",
      },
    ],
    cta: {
      ...kitchenSpaceCopy.es.cta,
      title: "¿Listo para crear el salón de tu hogar?",
    },
    categories: [
      "Villas y casas",
      "Apartamentos",
      "Soluciones de espacio",
      "Precios",
    ],
    articles: [
      {
        title: "Más de 30 ideas de salones para villas y casas",
        description:
          "Descubre salones modernos, sencillos y elegantes de distintos tamaños y materiales.",
      },
      {
        title: "Salones bonitos y con personalidad: colección 2023",
        description:
          "Salones de apartamentos que combinan estética y funcionalidad en distintas distribuciones.",
      },
      {
        title: "Dormitorios sin ventanas: cómo mejorar el espacio",
        description:
          "Ideas de color, iluminación y mobiliario para dormitorios sin ventanas.",
      },
      {
        title:
          "Precios orientativos de ejecución integral de interiores en 2023",
        description:
          "Consulta precios de referencia para MFC, MDF resistente a la humedad y madera natural.",
      },
    ],
  },
  zh: {
    ...kitchenSpaceCopy.zh,
    heroParts: ["舒适生活", "客厅空间"],
    intro: "浏览客厅设计与施工案例，寻找适合您家的风格、家具与材料。",
    library: { ...kitchenSpaceCopy.zh.library, title: "客厅设计与施工案例库" },
    services: [
      { title: "客厅设计", description: "根据您的风格与日常需求提供建议。" },
      { title: "家具布局", description: "协调沙发、茶几与电视柜，优化空间。" },
      { title: "一站式施工", description: "从基础施工到客厅完工。" },
      { title: "定制木作", description: "按需制作收纳柜与木制家具。" },
    ],
    cta: {
      ...kitchenSpaceCopy.zh.cta,
      title: "准备好打造属于您家的客厅了吗？",
    },
    categories: ["别墅与联排住宅", "公寓", "空间解决方案", "报价"],
    articles: [
      {
        title: "30余款别墅与住宅客厅设计",
        description: "探索不同面积与材料的现代、简约和雅致客厅。",
      },
      {
        title: "美观且独具特色的客厅：2023年精选",
        description: "兼顾美观与实用，适应不同户型的公寓客厅设计。",
      },
      {
        title: "无窗卧室：改善空间的方法",
        description: "了解无窗卧室的配色、照明与家具布局思路。",
      },
      {
        title: "2023年全屋室内施工参考报价",
        description: "参考MFC、防潮MDF及天然木材的室内施工价格。",
      },
    ],
  },
};
