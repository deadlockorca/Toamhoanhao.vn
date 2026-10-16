import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
type BedroomInteriorCopy = {
  heroParts: string[];
  intro: string;
  explore: string;
  principlesTitle: string;
  colorsTitle: string;
  colorsIntro: string;
  servicesTitle: string;
  commitmentsTitle: string;
  commitmentsIntro: string;
  badge: string;
  principles: Card[];
  colors: Card[];
};
export const bedroomInteriorCopy: Record<SiteLocale, BedroomInteriorCopy> = {
  vi: {
    heroParts: ["Nội thất", "phòng ngủ"],
    intro:
      "Một khoảng riêng để trở về và nghỉ ngơi. Thiết kế phòng ngủ kết hợp công năng, ánh sáng, màu sắc và nội thất theo thói quen sinh hoạt của bạn.",
    explore: "Khám phá nguyên tắc",
    principlesTitle: "4 nguyên tắc cho không gian nghỉ ngơi hài hòa",
    colorsTitle: "Bảng màu cho một không gian mang cá tính riêng",
    colorsIntro:
      "Chọn màu theo sở thích, ánh sáng và chất liệu thực tế. Các gợi ý về cảm xúc và phong thủy là nguồn tham khảo để phối màu phù hợp với gia chủ.",
    servicesTitle: "Từ bố trí không gian đến nội thất hoàn thiện",
    commitmentsTitle: "Phòng ngủ phù hợp với cách bạn sống",
    commitmentsIntro:
      "Khảo sát hiện trạng, lắng nghe nhu cầu và phối hợp từng chi tiết thiết kế. Đội ngũ đồng hành từ phương án ban đầu đến sản xuất, lắp đặt và bảo hành theo thỏa thuận.",
    badge: "Riêng tư · Tiện nghi · Hài hòa",
    principles: [
      {
        title: "Bố trí hợp lý, cân nhắc phong thủy",
        description:
          "Ưu tiên mặt bằng gọn gàng, lối đi thông thoáng và vị trí giường thuận tiện. Kết hợp mong muốn về phong thủy với điều kiện thực tế để tạo không gian phù hợp với gia chủ.",
      },
      {
        title: "Tiết chế thiết bị điện tử",
        description:
          "Bố trí thiết bị theo nhu cầu sử dụng, giấu dây gọn và hạn chế ánh sáng màn hình khi nghỉ ngơi. Dành sự ưu tiên cho cảm giác yên tĩnh, riêng tư của phòng ngủ.",
      },
      {
        title: "Nội thất đơn giản, hài hòa",
        description:
          "Kết nối giường, tủ áo và bàn trang điểm với sàn, màu tường và ánh sáng. Chọn kích thước vừa vặn, đủ lưu trữ và thuận tiện sử dụng mỗi ngày.",
      },
      {
        title: "Màu sắc phù hợp với gia chủ",
        description:
          "Cân bằng màu nền, màu nhấn và sắc độ vật liệu. Cân nhắc sở thích và phong thủy, đồng thời thử màu dưới ánh sáng thực tế trước khi quyết định.",
      },
    ],
    colors: [
      {
        title: "Đen, xanh lam, xám",
        description: "Trầm tĩnh và thanh lịch",
      },
      {
        title: "Nâu",
        description: "Ấm áp, gần gũi với chất liệu tự nhiên",
      },
      {
        title: "Xanh lục",
        description: "Tươi mới, kết nối với thiên nhiên",
      },
      {
        title: "Vàng",
        description: "Ấm sáng và sinh động",
      },
      {
        title: "Tím, đỏ",
        description: "Điểm nhấn giàu cá tính",
      },
      {
        title: "Hồng, cam",
        description: "Mềm mại hoặc rạng rỡ tùy sắc độ",
      },
      {
        title: "Trắng, tím nhạt",
        description: "Nhẹ nhàng, tinh tế",
      },
      {
        title: "Bạc, thiếc, đồng",
        description: "Ánh kim tạo điểm nhấn trang trí",
      },
    ],
  },
  en: {
    heroParts: ["Bedroom", "interiors"],
    intro:
      "A private place to return to and unwind. Bedroom design brings function, light, colour and furniture together around your daily routines.",
    explore: "Explore the principles",
    principlesTitle: "4 principles for a harmonious bedroom",
    colorsTitle: "A palette with your own personality",
    colorsIntro:
      "Choose colours for your preferences, daylight and materials. Mood and feng shui associations offer inspiration for a palette that suits you.",
    servicesTitle: "From room planning to finished furniture",
    commitmentsTitle: "A bedroom that fits the way you live",
    commitmentsIntro:
      "We survey the space, listen to your needs and coordinate the design details, supporting you through production, installation and warranty as agreed.",
    badge: "Privacy · Comfort · Harmony",
    principles: [
      {
        title: "Thoughtful layout and feng shui",
        description:
          "Keep the plan organised, circulation clear and the bed easy to access. Balance feng shui preferences with the actual space and your needs.",
      },
      {
        title: "Keep electronics discreet",
        description:
          "Plan devices for your needs, conceal cables and limit screen light when resting. Preserve the bedroom’s sense of calm and privacy.",
      },
      {
        title: "Simple, coordinated furniture",
        description:
          "Connect the bed, wardrobe and dressing table with flooring, wall colours and lighting. Choose well-sized pieces with useful storage.",
      },
      {
        title: "Colours that suit you",
        description:
          "Balance base colours, accents and material tones. Consider personal taste and feng shui, and test colours under the room’s actual lighting.",
      },
    ],
    colors: [
      {
        title: "Black, blue, grey",
        description: "Calm and elegant",
      },
      {
        title: "Brown",
        description: "Warm, with a natural material feel",
      },
      {
        title: "Green",
        description: "Fresh and connected to nature",
      },
      {
        title: "Yellow",
        description: "Warm and lively",
      },
      {
        title: "Purple, red",
        description: "Accents with personality",
      },
      {
        title: "Pink, orange",
        description: "Soft or vibrant, depending on tone",
      },
      {
        title: "White, pale purple",
        description: "Light and refined",
      },
      {
        title: "Silver, pewter, copper",
        description: "Metallic decorative accents",
      },
    ],
  },
  ja: {
    heroParts: ["寝室の", "インテリア"],
    intro:
      "自分に戻り、くつろぐためのプライベート空間。暮らしの習慣に合わせ、機能・光・色・家具を調和させます。",
    explore: "設計のポイントを見る",
    principlesTitle: "心地よい寝室のための4つのポイント",
    colorsTitle: "自分らしい空間をつくるカラーパレット",
    colorsIntro:
      "好み、自然光、素材に合わせて色を選びます。印象や風水の考え方は、自分に合う配色の参考として取り入れましょう。",
    servicesTitle: "間取りから家具の仕上がりまで",
    commitmentsTitle: "暮らし方に合う寝室へ",
    commitmentsIntro:
      "現況調査と丁寧なヒアリングをもとに細部を調整。設計から製作、設置、合意した保証までサポートします。",
    badge: "プライバシー・快適さ・調和",
    principles: [
      {
        title: "間取りと風水のバランス",
        description:
          "整った配置と通りやすい動線、使いやすいベッド位置を優先。風水の希望と現実の空間条件を調整します。",
      },
      {
        title: "電子機器は控えめに",
        description:
          "必要に応じて機器を配置し、配線を整理。休憩時の画面光を控え、静けさとプライバシーを重視します。",
      },
      {
        title: "シンプルで調和する家具",
        description:
          "ベッド、収納、ドレッサーを床・壁・照明と調和。適切なサイズと日常に必要な収納を選びます。",
      },
      {
        title: "自分に合う色選び",
        description:
          "ベースカラー、アクセント、素材の色を調整。好みと風水を考慮し、実際の光で確認してから決めます。",
      },
    ],
    colors: [
      {
        title: "黒・青・グレー",
        description: "落ち着きと上品さ",
      },
      {
        title: "ブラウン",
        description: "自然素材を感じる温かさ",
      },
      {
        title: "グリーン",
        description: "自然につながる爽やかさ",
      },
      {
        title: "イエロー",
        description: "明るく温かな印象",
      },
      {
        title: "紫・赤",
        description: "個性的なアクセント",
      },
      {
        title: "ピンク・オレンジ",
        description: "色調により柔らかく鮮やかに",
      },
      {
        title: "白・淡い紫",
        description: "軽やかで繊細",
      },
      {
        title: "銀・錫・銅",
        description: "金属の輝きを装飾に",
      },
    ],
  },
  ko: {
    heroParts: ["침실", "인테리어"],
    intro:
      "나만의 일상으로 돌아와 쉬는 공간. 생활 습관에 맞춰 기능, 빛, 색채와 가구를 조화롭게 설계합니다.",
    explore: "디자인 원칙 보기",
    principlesTitle: "조화로운 침실을 위한 4가지 원칙",
    colorsTitle: "나만의 개성을 담은 색상 팔레트",
    colorsIntro:
      "취향, 자연광과 실제 자재에 맞춰 색을 선택하세요. 분위기와 풍수에 관한 해석은 자신에게 맞는 배색을 위한 참고 자료입니다.",
    servicesTitle: "공간 배치부터 가구 완성까지",
    commitmentsTitle: "나의 생활 방식에 맞는 침실",
    commitmentsIntro:
      "현장을 조사하고 요구를 듣고 설계 세부 사항을 조율합니다. 제작, 설치와 협의된 보증까지 함께합니다.",
    badge: "프라이버시 · 편안함 · 조화",
    principles: [
      {
        title: "합리적인 배치와 풍수",
        description:
          "정돈된 배치, 편리한 동선과 침대 위치를 우선합니다. 풍수에 대한 선호와 실제 공간 조건을 조율합니다.",
      },
      {
        title: "전자기기는 절제해서",
        description:
          "필요에 따라 기기를 배치하고 배선을 정리하며 쉴 때는 화면 빛을 줄입니다. 침실의 차분함과 사생활을 우선합니다.",
      },
      {
        title: "간결하고 조화로운 가구",
        description:
          "침대, 옷장과 화장대를 바닥, 벽 색과 조명에 맞춥니다. 알맞은 크기와 필요한 수납을 고려합니다.",
      },
      {
        title: "나에게 맞는 색상",
        description:
          "기본색, 강조색과 자재 색조를 조율합니다. 취향과 풍수를 고려하고 실제 조명에서 색을 확인합니다.",
      },
    ],
    colors: [
      {
        title: "검정, 파랑, 회색",
        description: "차분하고 우아한 분위기",
      },
      {
        title: "갈색",
        description: "자연 소재의 따뜻함",
      },
      {
        title: "초록",
        description: "자연과 연결되는 산뜻함",
      },
      {
        title: "노랑",
        description: "따뜻하고 생동감 있는 느낌",
      },
      {
        title: "보라, 빨강",
        description: "개성 있는 포인트",
      },
      {
        title: "분홍, 주황",
        description: "색조에 따라 부드럽거나 화사하게",
      },
      {
        title: "흰색, 연보라",
        description: "가볍고 섬세한 느낌",
      },
      {
        title: "은, 주석, 구리",
        description: "금속 광택의 장식 포인트",
      },
    ],
  },
  sv: {
    heroParts: ["Sovrums", "inredning"],
    intro:
      "En privat plats att återvända till och koppla av i. Funktion, ljus, färg och möbler samspelar med dina dagliga vanor.",
    explore: "Utforska principerna",
    principlesTitle: "4 principer för ett harmoniskt sovrum",
    colorsTitle: "En färgpalett med din personlighet",
    colorsIntro:
      "Välj färger efter smak, dagsljus och material. Stämningar och feng shui kan ge inspiration till en palett som passar dig.",
    servicesTitle: "Från rumsplanering till färdiga möbler",
    commitmentsTitle: "Ett sovrum för ditt sätt att leva",
    commitmentsIntro:
      "Vi undersöker rummet, lyssnar på behoven och samordnar detaljerna, från design till tillverkning, montering och avtalad garanti.",
    badge: "Avskildhet · Komfort · Harmoni",
    principles: [
      {
        title: "Planering och feng shui i balans",
        description:
          "Prioritera ordning, fria gångstråk och en lättillgänglig säng. Anpassa feng shui-önskemål till rummets förutsättningar.",
      },
      {
        title: "Diskret elektronik",
        description:
          "Placera apparater efter behov, dölj kablar och begränsa skärmljus vid vila. Bevara lugnet och avskildheten.",
      },
      {
        title: "Enkla, samordnade möbler",
        description:
          "Låt säng, garderob och toalettbord samspela med golv, väggfärger och ljus. Välj rätt storlek och användbar förvaring.",
      },
      {
        title: "Färger som passar dig",
        description:
          "Balansera grundfärger, accenter och materialtoner. Väg in smak och feng shui och prova färger i rummets ljus.",
      },
    ],
    colors: [
      {
        title: "Svart, blått, grått",
        description: "Lugnt och elegant",
      },
      {
        title: "Brunt",
        description: "Varm känsla av naturmaterial",
      },
      {
        title: "Grönt",
        description: "Fräscht med naturkontakt",
      },
      {
        title: "Gult",
        description: "Varmt och livfullt",
      },
      {
        title: "Lila, rött",
        description: "Accenter med karaktär",
      },
      {
        title: "Rosa, orange",
        description: "Mjukt eller livligt beroende på ton",
      },
      {
        title: "Vitt, ljuslila",
        description: "Lätt och förfinat",
      },
      {
        title: "Silver, tenn, koppar",
        description: "Metalliska dekorativa accenter",
      },
    ],
  },
  fr: {
    heroParts: ["Intérieur de", "chambre"],
    intro:
      "Un espace privé où revenir et se détendre. Fonction, lumière, couleurs et mobilier s’accordent à vos habitudes quotidiennes.",
    explore: "Explorer les principes",
    principlesTitle: "4 principes pour une chambre harmonieuse",
    colorsTitle: "Une palette à votre image",
    colorsIntro:
      "Choisissez selon vos goûts, la lumière et les matériaux. Les ambiances et le feng shui peuvent inspirer une palette qui vous correspond.",
    servicesTitle: "De l’agencement au mobilier fini",
    commitmentsTitle: "Une chambre adaptée à votre mode de vie",
    commitmentsIntro:
      "Nous relevons l’existant, écoutons vos besoins et coordonnons les détails, de la conception à la fabrication, la pose et la garantie convenue.",
    badge: "Intimité · Confort · Harmonie",
    principles: [
      {
        title: "Agencement et feng shui",
        description:
          "Privilégiez un plan ordonné, une circulation fluide et un lit accessible. Conciliez les préférences feng shui et les contraintes réelles.",
      },
      {
        title: "Une électronique discrète",
        description:
          "Placez les appareils selon vos besoins, cachez les câbles et limitez la lumière des écrans au repos. Préservez calme et intimité.",
      },
      {
        title: "Un mobilier simple et cohérent",
        description:
          "Accordez lit, armoire et coiffeuse aux sols, murs et éclairages. Choisissez des dimensions adaptées et du rangement utile.",
      },
      {
        title: "Des couleurs qui vous conviennent",
        description:
          "Équilibrez bases, accents et tons des matériaux. Tenez compte des goûts et du feng shui, puis testez sous la lumière réelle.",
      },
    ],
    colors: [
      {
        title: "Noir, bleu, gris",
        description: "Calme et élégance",
      },
      {
        title: "Brun",
        description: "Chaleur des matières naturelles",
      },
      {
        title: "Vert",
        description: "Fraîcheur et lien à la nature",
      },
      {
        title: "Jaune",
        description: "Chaleur et vitalité",
      },
      {
        title: "Violet, rouge",
        description: "Des accents de caractère",
      },
      {
        title: "Rose, orange",
        description: "Douceur ou éclat selon la nuance",
      },
      {
        title: "Blanc, violet clair",
        description: "Légèreté et finesse",
      },
      {
        title: "Argent, étain, cuivre",
        description: "Des accents métalliques décoratifs",
      },
    ],
  },
  ru: {
    heroParts: ["Интерьер", "спальни"],
    intro:
      "Личное пространство для возвращения домой и отдыха. Функции, свет, цвет и мебель сочетаются с вашими повседневными привычками.",
    explore: "Посмотреть принципы",
    principlesTitle: "4 принципа гармоничной спальни",
    colorsTitle: "Палитра с вашим характером",
    colorsIntro:
      "Выбирайте цвета по вкусу, освещению и материалам. Ассоциации настроения и фэншуй могут стать источником идей для вашей палитры.",
    servicesTitle: "От планировки до готовой мебели",
    commitmentsTitle: "Спальня под ваш образ жизни",
    commitmentsIntro:
      "Изучаем помещение, выслушиваем пожелания и согласуем детали — от проекта до изготовления, монтажа и гарантии по договорённости.",
    badge: "Приватность · Комфорт · Гармония",
    principles: [
      {
        title: "Планировка и фэншуй",
        description:
          "Приоритет — порядок, свободные проходы и удобное расположение кровати. Сочетаем пожелания фэншуй с условиями помещения.",
      },
      {
        title: "Сдержанное размещение техники",
        description:
          "Размещайте устройства по потребности, скрывайте провода и уменьшайте свет экранов во время отдыха. Сохраняйте тишину и приватность.",
      },
      {
        title: "Простая и согласованная мебель",
        description:
          "Сочетайте кровать, шкаф и туалетный столик с полом, стенами и светом. Выбирайте подходящие размеры и удобное хранение.",
      },
      {
        title: "Цвета под ваш вкус",
        description:
          "Уравновешивайте основу, акценты и оттенки материалов. Учитывайте вкус и фэншуй, проверяя цвета при реальном освещении.",
      },
    ],
    colors: [
      {
        title: "Чёрный, синий, серый",
        description: "Спокойствие и элегантность",
      },
      {
        title: "Коричневый",
        description: "Тепло натуральных материалов",
      },
      {
        title: "Зелёный",
        description: "Свежесть и связь с природой",
      },
      {
        title: "Жёлтый",
        description: "Теплота и живость",
      },
      {
        title: "Фиолетовый, красный",
        description: "Выразительные акценты",
      },
      {
        title: "Розовый, оранжевый",
        description: "Мягкость или яркость в зависимости от тона",
      },
      {
        title: "Белый, светло-лиловый",
        description: "Лёгкость и утончённость",
      },
      {
        title: "Серебро, олово, медь",
        description: "Металлические декоративные акценты",
      },
    ],
  },
  es: {
    heroParts: ["Interiores de", "dormitorio"],
    intro:
      "Un espacio privado al que volver y desconectar. Función, luz, color y mobiliario se unen en torno a tus hábitos cotidianos.",
    explore: "Explorar los principios",
    principlesTitle: "4 principios para un dormitorio armonioso",
    colorsTitle: "Una paleta con tu personalidad",
    colorsIntro:
      "Elige colores según tus gustos, la luz y los materiales. Las sensaciones y el feng shui pueden inspirar una paleta adecuada para ti.",
    servicesTitle: "De la distribución al mobiliario terminado",
    commitmentsTitle: "Un dormitorio para tu forma de vivir",
    commitmentsIntro:
      "Estudiamos el espacio, escuchamos tus necesidades y coordinamos los detalles, desde el diseño hasta la fabricación, instalación y garantía acordada.",
    badge: "Privacidad · Comodidad · Armonía",
    principles: [
      {
        title: "Distribución y feng shui",
        description:
          "Prioriza orden, circulación despejada y una cama accesible. Equilibra las preferencias de feng shui con las condiciones reales.",
      },
      {
        title: "Electrónica discreta",
        description:
          "Distribuye los dispositivos según tus necesidades, oculta cables y limita la luz de pantallas al descansar. Conserva calma e intimidad.",
      },
      {
        title: "Muebles sencillos y coordinados",
        description:
          "Combina cama, armario y tocador con suelos, paredes e iluminación. Elige tamaños adecuados y almacenamiento útil.",
      },
      {
        title: "Colores adecuados para ti",
        description:
          "Equilibra bases, acentos y tonos de materiales. Considera tus gustos y el feng shui y prueba los colores con la luz real.",
      },
    ],
    colors: [
      {
        title: "Negro, azul, gris",
        description: "Calma y elegancia",
      },
      {
        title: "Marrón",
        description: "Calidez de materiales naturales",
      },
      {
        title: "Verde",
        description: "Frescura y conexión con la naturaleza",
      },
      {
        title: "Amarillo",
        description: "Calidez y vitalidad",
      },
      {
        title: "Morado, rojo",
        description: "Acentos con personalidad",
      },
      {
        title: "Rosa, naranja",
        description: "Suavidad o viveza según el tono",
      },
      {
        title: "Blanco, lila claro",
        description: "Ligereza y refinamiento",
      },
      {
        title: "Plata, estaño, cobre",
        description: "Acentos metálicos decorativos",
      },
    ],
  },
  zh: {
    heroParts: ["卧室", "设计"],
    intro:
      "一处回归自我、放松休憩的私密空间。根据您的日常习惯，将功能、光线、色彩与家具协调融合。",
    explore: "了解设计原则",
    principlesTitle: "营造和谐卧室的四个原则",
    colorsTitle: "展现个人风格的色彩搭配",
    colorsIntro:
      "根据喜好、自然光与实际材质选择颜色。情绪联想及风水理念可作为适合业主的配色灵感。",
    servicesTitle: "从空间布局到家具完成",
    commitmentsTitle: "适合您生活方式的卧室",
    commitmentsIntro:
      "勘察现状、倾听需求并协调设计细节，从方案到生产、安装及约定的保修全程陪伴。",
    badge: "私密 · 舒适 · 和谐",
    principles: [
      {
        title: "合理布局，兼顾风水",
        description:
          "优先考虑整洁布局、顺畅动线和便利的床位。将风水偏好与实际空间条件相结合。",
      },
      {
        title: "适度配置电子设备",
        description:
          "按需求摆放设备，整理隐藏线路，休息时减少屏幕光线，保留卧室的安静与私密。",
      },
      {
        title: "简洁协调的家具",
        description:
          "将床、衣柜及梳妆台与地板、墙色和灯光协调，选择合适尺寸与实用收纳。",
      },
      {
        title: "适合业主的色彩",
        description:
          "平衡底色、点缀色与材质色调，兼顾喜好与风水，在实际光线下试色后再决定。",
      },
    ],
    colors: [
      {
        title: "黑、蓝、灰",
        description: "沉静而优雅",
      },
      {
        title: "棕色",
        description: "自然材质的温暖感",
      },
      {
        title: "绿色",
        description: "清新，亲近自然",
      },
      {
        title: "黄色",
        description: "温暖而活泼",
      },
      {
        title: "紫、红",
        description: "富有个性的点缀",
      },
      {
        title: "粉、橙",
        description: "随色调展现柔和或明亮",
      },
      {
        title: "白、浅紫",
        description: "轻盈而精致",
      },
      {
        title: "银、锡、铜",
        description: "金属光泽的装饰点缀",
      },
    ],
  },
};
