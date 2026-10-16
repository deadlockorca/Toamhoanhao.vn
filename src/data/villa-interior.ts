import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
type VillaInteriorCopy = {
  heroParts: string[];
  designLabel: string;
  stylesLabel: string;
  pricingLabel: string;
  concernsLabel: string;
  benefitsLabel: string;
  commitmentsLabel: string;
  badge: string;
  unit: string;
  title: string;
  intro: string;
  explore: string;
  stylesTitle: string;
  pricingTitle: string;
  pricingNote: string;
  natureTitle: string;
  natureIntro: string;
  concernsTitle: string;
  benefitsTitle: string;
  commitmentsTitle: string;
  ctaTitle: string;
  styles: Card[];
  concerns: Card[];
  benefits: string[];
  commitments: string[];
};
export const villaInteriorCopy: Record<SiteLocale, VillaInteriorCopy> = {
  vi: {
    title: "Thiết kế biệt thự",
    intro:
      "Không gian sống mang dấu ấn của bạn. Kết nối phong cách, công năng và thiên nhiên trong giải pháp thiết kế, thi công nội thất biệt thự trọn gói.",
    explore: "Khám phá phong cách",
    stylesTitle: "4 phong cách, một dấu ấn riêng",
    pricingTitle: "Chi phí rõ ràng từ những ý tưởng đầu tiên",
    pricingNote:
      "Mức giá tham khảo. Chi phí cụ thể và ưu đãi được thống nhất theo diện tích, yêu cầu thiết kế và phạm vi công việc.",
    natureTitle: "Hài hòa với thiên nhiên và phong thủy",
    natureIntro:
      "Cân nhắc hướng nắng, hướng gió và cửa chính theo nhu cầu gia chủ. Bố trí không gian hợp lý để tận dụng ánh sáng, đón gió và kết nối sinh hoạt với thiên nhiên.",
    concernsTitle: "Từ những băn khoăn đến giải pháp phù hợp",
    benefitsTitle: "Thiết kế chỉn chu, triển khai đồng bộ",
    commitmentsTitle: "Đồng hành từ ý tưởng đến bàn giao",
    ctaTitle: "Sẵn sàng kiến tạo biệt thự trong mơ?",
    styles: [
      {
        title: "Tân cổ điển",
        description:
          "Đường nét cân đối, phào chỉ tiết chế và bảng màu thanh lịch. Giữ vẻ sang trọng cổ điển trong một không gian tiện nghi, phù hợp nhịp sống hiện đại.",
      },
      {
        title: "Cổ điển",
        description:
          "Chi tiết trang trí cầu kỳ, vật liệu giàu chiều sâu và bố cục trang trọng. Tạo tổng thể đồng bộ từ nội thất, ánh sáng đến từng điểm nhấn.",
      },
      {
        title: "Hiện đại",
        description:
          "Đường nét gọn gàng, bố trí linh hoạt và chú trọng công năng. Ánh sáng tự nhiên cùng vật liệu hài hòa giúp không gian thoáng, dễ sử dụng.",
      },
      {
        title: "Đương đại",
        description:
          "Kết hợp hình khối, chất liệu và điểm nhấn nghệ thuật theo cá tính gia chủ. Không gian linh hoạt, có chiều sâu và kết nối với thiên nhiên.",
      },
    ],
    concerns: [
      {
        title: "Ý tưởng thành không gian",
        description:
          "Cùng kiến trúc sư làm rõ nhu cầu, phong cách và công năng; đối chiếu phương án thiết kế trước khi triển khai.",
      },
      {
        title: "Ngân sách chủ động",
        description:
          "Phân bổ chi phí theo hạng mục, lựa chọn vật liệu phù hợp và thống nhất phạm vi công việc ngay từ đầu.",
      },
      {
        title: "Chất lượng và tiến độ",
        description:
          "Phối hợp hồ sơ thiết kế, vật liệu và thi công; theo dõi tiến độ, kiểm tra từng giai đoạn.",
      },
      {
        title: "Giá trị lâu dài",
        description:
          "Chú trọng vật liệu, chi tiết hoàn thiện và khả năng bảo trì để công trình thuận tiện sử dụng lâu dài.",
      },
    ],
    benefits: [
      "Tối ưu ngân sách từ giai đoạn thiết kế",
      "Hồ sơ chi tiết giúp phối hợp thi công thuận tiện",
      "Giải pháp riêng cho phong cách và nhu cầu gia đình",
    ],
    commitments: [
      "Chi phí minh bạch theo phạm vi đã thống nhất",
      "Thiết kế và hoàn thiện theo phương án được duyệt",
      "Tiến độ, bảo hành và bảo trì theo thỏa thuận",
    ],
    heroParts: ["Thiết kế", "biệt thự"],
    designLabel: "Thiết kế nội thất",
    stylesLabel: "Phong cách thiết kế",
    pricingLabel: "Báo giá tham khảo",
    concernsLabel: "Giải pháp cho gia chủ",
    benefitsLabel: "Lợi ích",
    commitmentsLabel: "Cam kết của chúng tôi",
    badge: "Thiết kế · Thi công · Hoàn thiện",
    unit: "đ/m²",
  },
  en: {
    title: "Villa design",
    intro:
      "A home with your own identity. Bring style, function and nature together with complete villa interior design and construction.",
    explore: "Explore the styles",
    stylesTitle: "4 styles, one personal signature",
    pricingTitle: "Clear costs from the very first ideas",
    pricingNote:
      "Indicative price. Final fees and offers depend on floor area, design requirements and the agreed scope of work.",
    natureTitle: "In harmony with nature and feng shui",
    natureIntro:
      "Consider sun, wind and entrance orientation alongside your preferences. Plan rooms to welcome daylight, airflow and a connection to nature.",
    concernsTitle: "From your concerns to practical solutions",
    benefitsTitle: "Thoughtful design, coordinated delivery",
    commitmentsTitle: "With you from concept to handover",
    ctaTitle: "Ready to create your dream villa?",
    styles: [
      {
        title: "Neoclassical",
        description:
          "Balanced lines, restrained mouldings and elegant colours bring classical refinement into a comfortable home for modern life.",
      },
      {
        title: "Classical",
        description:
          "Rich detailing, layered materials and formal composition create a coordinated interior, from furniture and lighting to decorative accents.",
      },
      {
        title: "Modern",
        description:
          "Clean lines and flexible planning put function first. Daylight and complementary materials create an open, easy-to-use home.",
      },
      {
        title: "Contemporary",
        description:
          "Shapes, textures and artistic accents reflect your personality in a flexible interior with depth and a connection to nature.",
      },
    ],
    concerns: [
      {
        title: "Ideas into space",
        description:
          "Clarify needs, style and function with your architect, then review the proposal before work begins.",
      },
      {
        title: "A planned budget",
        description:
          "Allocate costs by work category, select suitable materials and agree the scope from the start.",
      },
      {
        title: "Quality and timing",
        description:
          "Coordinate design documents, materials and construction, tracking progress and checking each stage.",
      },
      {
        title: "Long-term value",
        description:
          "Consider materials, finishing details and maintenance so the home stays practical over time.",
      },
    ],
    benefits: [
      "Optimise the budget at the design stage",
      "Detailed documents support coordinated construction",
      "A solution tailored to your family’s style and needs",
    ],
    commitments: [
      "Transparent costs for the agreed scope",
      "Design and finishes follow the approved proposal",
      "Schedule, warranty and maintenance as agreed",
    ],
    heroParts: ["Villa", "design"],
    designLabel: "Interior design",
    stylesLabel: "Design styles",
    pricingLabel: "Indicative pricing",
    concernsLabel: "Solutions for homeowners",
    benefitsLabel: "Benefits",
    commitmentsLabel: "Our commitments",
    badge: "Design · Build · Finish",
    unit: "VND/m²",
  },
  ja: {
    title: "ヴィラの設計",
    intro:
      "自分らしさが息づく住まいへ。スタイル、機能、自然を結び、ヴィラの内装設計から施工まで一貫してご提案します。",
    explore: "スタイルを見る",
    stylesTitle: "4つのスタイルで、あなただけの空間へ",
    pricingTitle: "最初の構想から分かりやすい費用",
    pricingNote:
      "参考価格です。実際の費用と特典は面積、設計要件、合意した業務範囲に応じて決まります。",
    natureTitle: "自然と風水との調和",
    natureIntro:
      "日差し、風、玄関の向きをご要望に合わせて検討。自然光と風を取り込み、日常を自然につなぐ間取りを考えます。",
    concernsTitle: "お悩みから、適切な解決策へ",
    benefitsTitle: "丁寧な設計、一貫した実現",
    commitmentsTitle: "構想から引き渡しまでサポート",
    ctaTitle: "理想のヴィラを形にしませんか",
    styles: [
      {
        title: "ネオクラシック",
        description:
          "均整の取れたライン、控えめな装飾、上品な色調。古典的な優雅さと現代の快適さを両立します。",
      },
      {
        title: "クラシック",
        description:
          "繊細な装飾、奥行きのある素材、格式ある構成。家具から照明まで調和した空間をつくります。",
      },
      {
        title: "モダン",
        description:
          "すっきりしたラインと柔軟な配置で機能を重視。自然光と調和する素材で開放的な住まいへ。",
      },
      {
        title: "コンテンポラリー",
        description:
          "形、質感、アートのアクセントで個性を表現。奥行きと自然へのつながりを持つ柔軟な空間です。",
      },
    ],
    concerns: [
      {
        title: "アイデアを空間へ",
        description:
          "建築士と要望・スタイル・機能を整理し、着手前に設計案を確認します。",
      },
      {
        title: "計画的なご予算",
        description:
          "項目別に費用を配分し、適切な素材と業務範囲を初期段階で確認します。",
      },
      {
        title: "品質と工程",
        description:
          "設計図書、素材、施工を連携させ、各段階で進捗と品質を確認します。",
      },
      {
        title: "長く使える価値",
        description:
          "素材、仕上げ、メンテナンス性を考え、長期の使いやすさを重視します。",
      },
    ],
    benefits: [
      "設計段階から予算を最適化",
      "詳細図書で施工の連携を円滑に",
      "ご家族の好みと暮らしに合う提案",
    ],
    commitments: [
      "合意した範囲に応じた明確な費用",
      "承認した設計案に沿う仕上がり",
      "工程・保証・保守は合意条件に準拠",
    ],
    heroParts: ["ヴィラの", "設計"],
    designLabel: "インテリアデザイン",
    stylesLabel: "デザインスタイル",
    pricingLabel: "参考価格",
    concernsLabel: "施主様へのご提案",
    benefitsLabel: "メリット",
    commitmentsLabel: "私たちのお約束",
    badge: "設計・施工・仕上げ",
    unit: "VND/m²",
  },
  ko: {
    title: "빌라 디자인",
    intro:
      "나만의 개성이 담긴 집. 스타일, 기능과 자연을 연결하는 빌라 인테리어 설계 및 시공을 제안합니다.",
    explore: "스타일 살펴보기",
    stylesTitle: "4가지 스타일, 나만의 개성",
    pricingTitle: "첫 구상부터 명확한 비용",
    pricingNote:
      "참고 가격입니다. 실제 비용과 혜택은 면적, 설계 요구 사항 및 합의된 업무 범위에 따라 결정됩니다.",
    natureTitle: "자연과 풍수의 조화",
    natureIntro:
      "고객의 요구와 함께 햇빛, 바람과 출입구 방향을 고려합니다. 자연광과 바람을 들이고 일상을 자연과 연결하도록 공간을 배치합니다.",
    concernsTitle: "고민에서 적합한 해결책으로",
    benefitsTitle: "세심한 설계, 일관된 구현",
    commitmentsTitle: "구상부터 인도까지 함께",
    ctaTitle: "꿈꾸던 빌라를 만들어 볼까요?",
    styles: [
      {
        title: "신고전주의",
        description:
          "균형 잡힌 선, 절제된 몰딩과 우아한 색감으로 고전의 품격과 현대의 편리함을 조화시킵니다.",
      },
      {
        title: "클래식",
        description:
          "섬세한 장식, 깊이 있는 자재와 격식 있는 구성으로 가구와 조명까지 통일된 공간을 만듭니다.",
      },
      {
        title: "모던",
        description:
          "간결한 선과 유연한 배치로 기능을 우선합니다. 자연광과 조화로운 자재로 개방적인 집을 만듭니다.",
      },
      {
        title: "컨템퍼러리",
        description:
          "형태, 질감과 예술적 포인트로 개성을 표현합니다. 깊이와 자연과의 연결을 갖춘 유연한 공간입니다.",
      },
    ],
    concerns: [
      {
        title: "아이디어를 공간으로",
        description:
          "건축가와 요구, 스타일과 기능을 정리하고 시공 전 설계안을 확인합니다.",
      },
      {
        title: "계획적인 예산",
        description:
          "항목별 비용을 배분하고 적절한 자재와 업무 범위를 처음부터 합의합니다.",
      },
      {
        title: "품질과 일정",
        description:
          "설계 도서, 자재와 시공을 조율하고 단계별 진행과 품질을 점검합니다.",
      },
      {
        title: "장기적인 가치",
        description:
          "자재, 마감과 유지 관리를 고려하여 오랫동안 편리한 공간을 만듭니다.",
      },
    ],
    benefits: [
      "설계 단계부터 예산 최적화",
      "상세 도서로 원활한 시공 협업",
      "가족의 스타일과 요구에 맞춘 솔루션",
    ],
    commitments: [
      "합의한 범위에 따른 투명한 비용",
      "승인된 설계안에 따른 설계와 마감",
      "협의된 일정, 보증 및 유지 관리",
    ],
    heroParts: ["빌라", "디자인"],
    designLabel: "인테리어 디자인",
    stylesLabel: "디자인 스타일",
    pricingLabel: "참고 가격",
    concernsLabel: "건축주를 위한 솔루션",
    benefitsLabel: "장점",
    commitmentsLabel: "우리의 약속",
    badge: "설계 · 시공 · 마감",
    unit: "VND/m²",
  },
  sv: {
    title: "Villadesign",
    intro:
      "Ett hem med din egen prägel. Vi förenar stil, funktion och natur genom komplett inredningsdesign och byggnation för villor.",
    explore: "Utforska stilarna",
    stylesTitle: "4 stilar, ett personligt uttryck",
    pricingTitle: "Tydliga kostnader från första idén",
    pricingNote:
      "Riktpris. Slutligt arvode och erbjudanden beror på yta, designkrav och avtalad omfattning.",
    natureTitle: "I harmoni med natur och feng shui",
    natureIntro:
      "Vi tar hänsyn till sol, vind och entréns riktning utifrån dina önskemål. Planeringen ger plats för dagsljus, luft och kontakt med naturen.",
    concernsTitle: "Från dina funderingar till fungerande lösningar",
    benefitsTitle: "Genomtänkt design, samordnat utförande",
    commitmentsTitle: "Med dig från idé till överlämning",
    ctaTitle: "Redo att skapa din drömvilla?",
    styles: [
      {
        title: "Nyklassisk",
        description:
          "Balanserade linjer, återhållsamma lister och eleganta färger förenar klassisk förfining med modern bekvämlighet.",
      },
      {
        title: "Klassisk",
        description:
          "Detaljrik dekor, material med djup och en högtidlig komposition samordnar möbler, ljus och accenter.",
      },
      {
        title: "Modern",
        description:
          "Rena linjer och flexibel planering prioriterar funktionen. Dagsljus och harmoniska material skapar ett öppet hem.",
      },
      {
        title: "Samtida",
        description:
          "Former, texturer och konstnärliga accenter speglar din personlighet i ett flexibelt rum med djup och naturkontakt.",
      },
    ],
    concerns: [
      {
        title: "Från idé till rum",
        description:
          "Klargör behov, stil och funktion med arkitekten och granska förslaget innan arbetet börjar.",
      },
      {
        title: "Planerad budget",
        description:
          "Fördela kostnader per delarbete, välj material och enas om omfattningen tidigt.",
      },
      {
        title: "Kvalitet och tidsplan",
        description:
          "Samordna ritningar, material och utförande med uppföljning i varje etapp.",
      },
      {
        title: "Långsiktigt värde",
        description:
          "Välj material, detaljer och underhållslösningar som fungerar över tid.",
      },
    ],
    benefits: [
      "Optimera budgeten redan i designfasen",
      "Detaljerade underlag förenklar samordningen",
      "En lösning för familjens stil och behov",
    ],
    commitments: [
      "Tydliga kostnader för avtalad omfattning",
      "Design och finish enligt godkänt förslag",
      "Tidsplan, garanti och underhåll enligt avtal",
    ],
    heroParts: ["Villa", "design"],
    designLabel: "Inredningsdesign",
    stylesLabel: "Designstilar",
    pricingLabel: "Riktpris",
    concernsLabel: "Lösningar för husägare",
    benefitsLabel: "Fördelar",
    commitmentsLabel: "Våra åtaganden",
    badge: "Design · Byggnation · Finish",
    unit: "VND/m²",
  },
  fr: {
    title: "Design de villa",
    intro:
      "Un intérieur qui vous ressemble. Nous réunissons style, fonctionnalité et nature dans une offre complète de conception et de réalisation.",
    explore: "Explorer les styles",
    stylesTitle: "4 styles, une signature personnelle",
    pricingTitle: "Des coûts clairs dès les premières idées",
    pricingNote:
      "Tarif indicatif. Les honoraires et offres dépendent de la surface, des besoins de conception et du périmètre convenu.",
    natureTitle: "En harmonie avec la nature et le feng shui",
    natureIntro:
      "Orientation du soleil, du vent et de l’entrée : vos préférences guident un agencement ouvert à la lumière, à l’air et à la nature.",
    concernsTitle: "De vos interrogations aux solutions adaptées",
    benefitsTitle: "Une conception soignée, une réalisation coordonnée",
    commitmentsTitle: "À vos côtés de l’idée à la livraison",
    ctaTitle: "Prêt à créer la villa de vos rêves ?",
    styles: [
      {
        title: "Néoclassique",
        description:
          "Lignes équilibrées, moulures sobres et couleurs élégantes allient raffinement classique et confort contemporain.",
      },
      {
        title: "Classique",
        description:
          "Décors travaillés, matières profondes et composition solennelle coordonnent mobilier, éclairage et accents décoratifs.",
      },
      {
        title: "Moderne",
        description:
          "Lignes épurées et agencement souple privilégient la fonction. Lumière naturelle et matériaux harmonieux ouvrent l’espace.",
      },
      {
        title: "Contemporain",
        description:
          "Formes, textures et touches artistiques expriment votre personnalité dans un intérieur souple, profond et proche de la nature.",
      },
    ],
    concerns: [
      {
        title: "Des idées à l’espace",
        description:
          "Précisez besoins, style et fonction avec l’architecte, puis validez la proposition avant les travaux.",
      },
      {
        title: "Un budget anticipé",
        description:
          "Répartissez les coûts par poste, choisissez les matériaux et définissez le périmètre dès le départ.",
      },
      {
        title: "Qualité et calendrier",
        description:
          "Coordonnez plans, matériaux et chantier, avec suivi et vérification à chaque phase.",
      },
      {
        title: "Une valeur durable",
        description:
          "Matériaux, finitions et entretien sont pensés pour un usage pratique à long terme.",
      },
    ],
    benefits: [
      "Optimiser le budget dès la conception",
      "Des documents détaillés facilitent les travaux",
      "Une solution adaptée au style et aux besoins familiaux",
    ],
    commitments: [
      "Des coûts transparents selon le périmètre convenu",
      "Conception et finitions selon le projet validé",
      "Calendrier, garantie et entretien selon accord",
    ],
    heroParts: ["Design de", "villa"],
    designLabel: "Design intérieur",
    stylesLabel: "Styles de décoration",
    pricingLabel: "Tarif indicatif",
    concernsLabel: "Solutions pour les propriétaires",
    benefitsLabel: "Avantages",
    commitmentsLabel: "Nos engagements",
    badge: "Conception · Travaux · Finitions",
    unit: "VND/m²",
  },
  ru: {
    title: "Дизайн виллы",
    intro:
      "Дом с вашим характером. Объединяем стиль, удобство и природу в комплексном проектировании и реализации интерьера виллы.",
    explore: "Посмотреть стили",
    stylesTitle: "4 стиля, один личный почерк",
    pricingTitle: "Понятные расходы с первых идей",
    pricingNote:
      "Ориентировочная стоимость. Итоговая цена и предложения зависят от площади, требований к проекту и согласованного объёма работ.",
    natureTitle: "Гармония природы и фэншуй",
    natureIntro:
      "Учитываем солнце, ветер и направление входа с учётом ваших пожеланий. Планировка открывает пространство свету, воздуху и природе.",
    concernsTitle: "От ваших вопросов к подходящим решениям",
    benefitsTitle: "Продуманный проект, согласованная реализация",
    commitmentsTitle: "Рядом от идеи до сдачи объекта",
    ctaTitle: "Готовы создать виллу своей мечты?",
    styles: [
      {
        title: "Неоклассика",
        description:
          "Сбалансированные линии, сдержанная лепнина и элегантные цвета сочетают классическую утончённость с современным комфортом.",
      },
      {
        title: "Классика",
        description:
          "Богатые детали, выразительные материалы и торжественная композиция объединяют мебель, освещение и декор.",
      },
      {
        title: "Современный",
        description:
          "Чистые линии и гибкая планировка ставят удобство на первое место. Дневной свет и гармоничные материалы раскрывают пространство.",
      },
      {
        title: "Контемпорари",
        description:
          "Формы, фактуры и художественные акценты отражают индивидуальность в гибком пространстве с глубиной и связью с природой.",
      },
    ],
    concerns: [
      {
        title: "От идеи к пространству",
        description:
          "Вместе с архитектором уточняем потребности, стиль и функции, согласуем проект до начала работ.",
      },
      {
        title: "Планируемый бюджет",
        description:
          "Распределяем расходы по статьям, выбираем материалы и заранее согласуем объём.",
      },
      {
        title: "Качество и сроки",
        description:
          "Координируем документацию, материалы и работы с контролем на каждом этапе.",
      },
      {
        title: "Долговременная ценность",
        description:
          "Материалы, отделка и удобство обслуживания помогают дому оставаться практичным.",
      },
    ],
    benefits: [
      "Оптимизация бюджета на этапе проекта",
      "Подробные документы упрощают реализацию",
      "Решение под стиль и потребности семьи",
    ],
    commitments: [
      "Прозрачные расходы по согласованному объёму",
      "Дизайн и отделка по утверждённому проекту",
      "Сроки, гарантия и обслуживание по соглашению",
    ],
    heroParts: ["Дизайн", "виллы"],
    designLabel: "Дизайн интерьера",
    stylesLabel: "Стили дизайна",
    pricingLabel: "Ориентировочная цена",
    concernsLabel: "Решения для владельцев",
    benefitsLabel: "Преимущества",
    commitmentsLabel: "Наши обязательства",
    badge: "Проектирование · Работы · Отделка",
    unit: "VND/м²",
  },
  es: {
    title: "Diseño de villas",
    intro:
      "Un hogar con tu propia identidad. Combinamos estilo, funcionalidad y naturaleza en un servicio completo de diseño y ejecución de interiores.",
    explore: "Explorar estilos",
    stylesTitle: "4 estilos, una firma personal",
    pricingTitle: "Costes claros desde las primeras ideas",
    pricingNote:
      "Precio orientativo. Los honorarios y ofertas dependen de la superficie, las necesidades de diseño y el alcance acordado.",
    natureTitle: "En armonía con la naturaleza y el feng shui",
    natureIntro:
      "Consideramos el sol, el viento y la orientación de la entrada según tus preferencias. Distribuimos el espacio para aprovechar luz, aire y naturaleza.",
    concernsTitle: "De tus dudas a soluciones adecuadas",
    benefitsTitle: "Diseño cuidado, ejecución coordinada",
    commitmentsTitle: "Contigo desde la idea hasta la entrega",
    ctaTitle: "¿Listo para crear la villa de tus sueños?",
    styles: [
      {
        title: "Neoclásico",
        description:
          "Líneas equilibradas, molduras discretas y colores elegantes combinan refinamiento clásico y comodidad actual.",
      },
      {
        title: "Clásico",
        description:
          "Decoración elaborada, materiales con profundidad y una composición solemne coordinan muebles, iluminación y detalles.",
      },
      {
        title: "Moderno",
        description:
          "Líneas limpias y distribución flexible priorizan la función. La luz natural y los materiales armoniosos abren el espacio.",
      },
      {
        title: "Contemporáneo",
        description:
          "Formas, texturas y acentos artísticos reflejan tu personalidad en un interior flexible, con profundidad y conexión con la naturaleza.",
      },
    ],
    concerns: [
      {
        title: "De las ideas al espacio",
        description:
          "Define necesidades, estilo y función con el arquitecto y revisa la propuesta antes de iniciar la obra.",
      },
      {
        title: "Presupuesto planificado",
        description:
          "Distribuye costes por partida, elige materiales adecuados y acuerda el alcance desde el principio.",
      },
      {
        title: "Calidad y plazos",
        description:
          "Coordina planos, materiales y ejecución, con seguimiento y revisión en cada fase.",
      },
      {
        title: "Valor a largo plazo",
        description:
          "Materiales, acabados y mantenimiento se eligen para un uso práctico y duradero.",
      },
    ],
    benefits: [
      "Optimizar el presupuesto desde el diseño",
      "Documentación detallada para coordinar la obra",
      "Una solución para el estilo y las necesidades familiares",
    ],
    commitments: [
      "Costes transparentes para el alcance acordado",
      "Diseño y acabados según la propuesta aprobada",
      "Plazos, garantía y mantenimiento según acuerdo",
    ],
    heroParts: ["Diseño de", "villas"],
    designLabel: "Diseño de interiores",
    stylesLabel: "Estilos de diseño",
    pricingLabel: "Precio orientativo",
    concernsLabel: "Soluciones para propietarios",
    benefitsLabel: "Ventajas",
    commitmentsLabel: "Nuestros compromisos",
    badge: "Diseño · Obra · Acabados",
    unit: "VND/m²",
  },
  zh: {
    title: "别墅设计",
    intro:
      "打造具有个人印记的家。将风格、功能与自然相连，提供别墅室内设计与施工的一体化方案。",
    explore: "探索设计风格",
    stylesTitle: "四种风格，专属印记",
    pricingTitle: "从最初构想起，费用清晰",
    pricingNote:
      "此为参考价格。具体费用及优惠根据面积、设计要求和双方确认的工作范围确定。",
    natureTitle: "与自然及风水相协调",
    natureIntro:
      "根据业主需求考虑日照、风向及入户朝向。合理布局，引入自然光与通风，让日常生活与自然相连。",
    concernsTitle: "从您的顾虑到合适的方案",
    benefitsTitle: "细致设计，协调落地",
    commitmentsTitle: "从构想到交付，全程陪伴",
    ctaTitle: "准备好打造梦想别墅了吗？",
    styles: [
      {
        title: "新古典",
        description:
          "均衡线条、克制装饰与优雅色彩，在舒适的现代生活中保留古典韵味。",
      },
      {
        title: "古典",
        description:
          "精致装饰、层次丰富的材质及庄重布局，让家具、灯光与细节形成统一整体。",
      },
      {
        title: "现代",
        description:
          "简洁线条、灵活布局并注重功能。自然光与协调材质营造通透、便于使用的家。",
      },
      {
        title: "当代",
        description:
          "通过形体、质感与艺术点缀表达业主个性，打造灵活、有深度且亲近自然的空间。",
      },
    ],
    concerns: [
      {
        title: "让想法成为空间",
        description: "与建筑师明确需求、风格及功能，在施工前确认设计方案。",
      },
      {
        title: "预算心中有数",
        description: "按项目分配费用，选择适合的材料，并从一开始确认工作范围。",
      },
      {
        title: "质量与进度",
        description: "协调设计文件、材料及施工，跟进进度并逐阶段检查。",
      },
      {
        title: "长久的使用价值",
        description: "注重材料、饰面细节与维护便利性，让家长期实用。",
      },
    ],
    benefits: [
      "从设计阶段优化预算",
      "详细图纸便于施工协调",
      "适合家庭风格与需求的专属方案",
    ],
    commitments: [
      "按确认范围透明计费",
      "按批准的方案设计与完成饰面",
      "按约定执行进度、保修及维护",
    ],
    heroParts: ["别墅", "设计"],
    designLabel: "室内设计",
    stylesLabel: "设计风格",
    pricingLabel: "参考报价",
    concernsLabel: "业主解决方案",
    benefitsLabel: "服务优势",
    commitmentsLabel: "我们的承诺",
    badge: "设计 · 施工 · 饰面",
    unit: "VND/平方米",
  },
};
