import {
  townhouseConstructionCopy,
  type TownhouseConstructionCopy,
} from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
export type ApartmentConstructionCopy = TownhouseConstructionCopy & {
  clientsLabel: string;
  clientsTitle: string;
  clientsIntro: string;
  clientsListLabel: string;
  clients: string[];
  projectsLabel: string;
};
export const apartmentConstructionCopy: Record<
  SiteLocale,
  ApartmentConstructionCopy
> = {
  vi: {
    ...townhouseConstructionCopy.vi,
    heroParts: ["Thi công", "chung cư"],
    intro:
      "Thi công nội thất chung cư tiện nghi, sang trọng và hài hòa. Tối ưu từng mét vuông để tạo nên không gian sống phù hợp với gia đình bạn.",
    explore: "Khám phá hạng mục",
    stylesLabel: "Hạng mục thi công",
    stylesTitle: "Hoàn thiện từng không gian trong căn hộ",
    stylesIntro:
      "Từ cổ điển, tân cổ điển đến hiện đại, mỗi không gian được thiết kế và thi công theo sở thích, nhu cầu và gu thẩm mỹ của gia chủ.",
    styleLabel: "Hạng mục",
    styles: [
      {
        title: "Phòng khách sang trọng, ấn tượng",
        description:
          "Phòng khách là linh hồn của căn nhà – nơi tiếp đón bạn bè và tụ họp của cả gia đình. Nội thất gọn gàng cùng tông màu xanh, xám, trắng tạo nên không gian sang trọng nhưng thanh thoát.",
      },
      {
        title: "Không gian bếp ấm cúng, thông thoáng",
        description:
          "Bếp kết nối với phòng khách tạo không gian liên hoàn, tiết kiệm diện tích và gắn kết gia đình. Lựa chọn tủ bếp, mặt bàn và kính ốp phù hợp để đảm bảo độ bền, tính thẩm mỹ và dễ vệ sinh.",
      },
      {
        title: "Phòng ngủ êm ái, tiện nghi",
        description:
          "Không gian nghỉ ngơi riêng tư được bố trí theo độ tuổi và sở thích của từng thành viên. Nội thất thoáng gọn, ánh sáng và rèm cửa hài hòa mang lại sự thư giãn, thoải mái.",
      },
    ],
    clientsLabel: "Khách hàng của chúng tôi",
    clientsTitle: "Chọn mặt gửi vàng – gửi gắm tổ ấm của bạn",
    clientsIntro:
      "Với phong cách làm việc chuyên nghiệp, tận tình và hiệu quả, chúng tôi đã và đang thi công hàng trăm công trình lớn nhỏ, từ chung cư đến biệt thự và nhà phố.",
    clientsListLabel: "Khách hàng đa dạng",
    clients: [
      "Doanh nhân thành đạt",
      "Chủ showroom ô tô",
      "Chủ tiệm vàng",
      "Nhân viên văn phòng",
      "Tiểu thương",
    ],
    projectsLabel: "Dự án đã thực hiện",
    tipsLabel: "Cam kết của chúng tôi",
    tipsTitle: "Đồng hành từ thi công đến bàn giao",
    tipsIntro:
      "Chú trọng vật liệu, tay nghề và tiến độ để hoàn thiện căn hộ đồng bộ, cùng chính sách bảo trì tận tâm sau bàn giao.",
    tips: [
      "Vật liệu phù hợp không gian, điều kiện khí hậu và ngân sách",
      "Nội thất, thiết bị chất lượng cao, có nguồn gốc xuất xứ rõ ràng",
      "Thợ thi công lành nghề, giữ gìn thiết bị và hiện trạng công trình",
      "Giám sát thi công chặt chẽ, cập nhật tiến độ thường xuyên",
      "Bàn giao công trình đúng tiến độ đã thống nhất",
      "Bảo trì tận tâm, chuyên nghiệp sau bàn giao",
    ],
    ideaTitle: "Mang đến những không gian sống lý tưởng",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo chăm chút từng không gian cho cuộc sống của bạn. Đội ngũ chuyên gia luôn sẵn sàng phục vụ tận tâm như với chính gia đình mình.",
    ctaIntro:
      "Miễn phí tư vấn thi công nội thất chung cư, đúng tiến độ và chi phí hợp lý.",
  },
  en: {
    ...townhouseConstructionCopy.en,
    heroParts: ["Apartment", "interiors"],
    intro:
      "Comfortable, elegant apartment interiors planned around your family. Make the most of every square metre with a coordinated design and construction service.",
    explore: "Explore the spaces",
    stylesLabel: "Construction scope",
    stylesTitle: "Thoughtful interiors for every room",
    stylesIntro:
      "From classic and neoclassical to modern, each space is designed and built around your preferences, needs and personal taste.",
    styleLabel: "Space",
    styles: [
      {
        title: "An elegant, welcoming living room",
        description:
          "The living room is the heart of the home, a place to welcome friends and gather as a family. Uncluttered furniture and blue, grey or white tones create an elegant, airy setting.",
      },
      {
        title: "A warm, practical kitchen",
        description:
          "A kitchen connected to the living room makes efficient use of space and brings the family together. Carefully chosen cabinets, worktops and splashbacks balance durability, appearance and easy cleaning.",
      },
      {
        title: "A restful, comfortable bedroom",
        description:
          "A private retreat arranged for each family member’s age and preferences. Clear layouts, considered lighting and suitable curtains help create a comfortable place to unwind.",
      },
    ],
    clientsLabel: "Our clients",
    clientsTitle: "A team to trust with your home",
    clientsIntro:
      "Our professional, attentive approach has supported hundreds of projects, from apartment interiors to villas and townhouses.",
    clientsListLabel: "People we work with",
    clients: [
      "Entrepreneurs",
      "Car showroom owners",
      "Jewellery shop owners",
      "Office professionals",
      "Small business owners",
    ],
    projectsLabel: "Projects completed",
    tipsLabel: "Our commitments",
    tipsTitle: "Support from construction to handover",
    tipsIntro:
      "Careful material selection, skilled workmanship and scheduling bring your apartment together, with attentive maintenance after handover.",
    tips: [
      "Materials suited to your space, climate and budget",
      "Quality furniture and fittings with clear origins",
      "Skilled installers who protect equipment and the existing property",
      "Close site supervision and regular progress updates",
      "Handover according to the agreed schedule",
      "Professional, attentive maintenance after handover",
    ],
    ideaTitle: "Creating a better place to live",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo takes care over every living space. Our specialists are ready to support your home with the attention they would give their own.",
    ctaIntro:
      "Free advice on apartment interiors, scheduling and a suitable budget.",
  },
  ja: {
    ...townhouseConstructionCopy.ja,
    heroParts: ["マンションの", "内装施工"],
    intro:
      "ご家族に合う、快適で上品なマンションの住まい。限られた広さを活かし、設計から施工まで一貫して整えます。",
    explore: "施工内容を見る",
    stylesLabel: "施工内容",
    stylesTitle: "住まいの一室一室を丁寧に",
    stylesIntro:
      "クラシック、ネオクラシック、モダンなど、お好みや暮らし方に合わせて各空間を設計・施工します。",
    styleLabel: "空間",
    styles: [
      {
        title: "上品でくつろげるリビング",
        description:
          "友人を迎え、家族が集うリビングは住まいの中心。すっきりした家具と青、グレー、白の色調で、上品で軽やかな空間に。",
      },
      {
        title: "温かく使いやすいキッチン",
        description:
          "リビングにつながるキッチンで空間を有効に使い、家族のつながりを育みます。収納、天板、壁材を選び、耐久性と美しさ、手入れのしやすさを両立。",
      },
      {
        title: "心地よく休める寝室",
        description:
          "年齢や好みに合わせたプライベートな休息の場。すっきりした配置、照明、カーテンで、くつろげる環境を整えます。",
      },
    ],
    clientsLabel: "お客様について",
    clientsTitle: "大切な住まいを託せるパートナー",
    clientsIntro:
      "丁寧で専門的な対応で、マンションからヴィラ、戸建てまで、数多くの内装工事に携わってきました。",
    clientsListLabel: "幅広いお客様",
    clients: [
      "起業家・経営者",
      "自動車ショールーム経営者",
      "宝飾店経営者",
      "会社員",
      "小規模事業者",
    ],
    projectsLabel: "施工実績",
    tipsLabel: "私たちの約束",
    tipsTitle: "施工からお引き渡しまでサポート",
    tipsIntro:
      "素材、技術、工期に配慮して住まいを整え、お引き渡し後も丁寧なメンテナンスで支えます。",
    tips: [
      "空間、気候、ご予算に合う素材を選定",
      "出所が明確な良質の家具・設備を使用",
      "熟練の施工スタッフが既存設備を保護",
      "現場管理と定期的な進捗報告",
      "合意した工期に沿ってお引き渡し",
      "お引き渡し後も丁寧なメンテナンス",
    ],
    ideaTitle: "心地よい暮らしの空間をつくる",
    ideaIntro:
      "Tổ Ấm Hoàn Hảoは一つひとつの空間を大切にします。自分の家族の住まいと同じ想いで、専門家がお手伝いします。",
    ctaIntro:
      "マンションの内装、工期、ご予算について無料でご相談いただけます。",
  },
  ko: {
    ...townhouseConstructionCopy.ko,
    heroParts: ["아파트", "인테리어 시공"],
    intro:
      "가족에게 맞는 편안하고 세련된 아파트 인테리어. 설계부터 시공까지 일관된 서비스로 공간을 효율적으로 활용합니다.",
    explore: "시공 공간 살펴보기",
    stylesLabel: "시공 범위",
    stylesTitle: "집 안의 모든 공간을 세심하게",
    stylesIntro:
      "클래식, 네오클래식, 모던 등 취향과 생활 방식에 맞춰 각 공간을 설계하고 시공합니다.",
    styleLabel: "공간",
    styles: [
      {
        title: "세련되고 아늑한 거실",
        description:
          "거실은 친구를 맞이하고 가족이 모이는 집의 중심입니다. 간결한 가구와 블루, 그레이, 화이트 색상으로 우아하고 여유로운 분위기를 만듭니다.",
      },
      {
        title: "따뜻하고 실용적인 주방",
        description:
          "거실과 연결된 주방으로 면적을 효율적으로 쓰고 가족이 함께할 수 있도록 합니다. 수납장, 상판, 벽 마감재를 세심하게 골라 내구성과 미관, 관리 편의성을 고려합니다.",
      },
      {
        title: "편안하고 실용적인 침실",
        description:
          "가족 구성원의 나이와 취향에 맞춘 사적인 휴식 공간입니다. 간결한 배치와 적절한 조명, 커튼으로 편안한 분위기를 만듭니다.",
      },
    ],
    clientsLabel: "우리의 고객",
    clientsTitle: "소중한 집을 믿고 맡길 파트너",
    clientsIntro:
      "전문적이고 세심한 서비스로 아파트부터 빌라, 단독주택까지 수많은 인테리어 프로젝트를 진행해 왔습니다.",
    clientsListLabel: "다양한 고객",
    clients: [
      "기업가",
      "자동차 전시장 운영자",
      "귀금속 매장 운영자",
      "직장인",
      "소상공인",
    ],
    projectsLabel: "진행한 프로젝트",
    tipsLabel: "우리의 약속",
    tipsTitle: "시공부터 인도까지 함께합니다",
    tipsIntro:
      "자재, 숙련도, 일정을 세심하게 관리하고 인도 후에도 정성스러운 유지보수로 지원합니다.",
    tips: [
      "공간, 기후, 예산에 적합한 자재 선택",
      "출처가 명확한 고품질 가구와 설비 사용",
      "숙련된 작업자가 기존 설비와 현장을 보호",
      "철저한 현장 감독과 정기적인 진행 상황 안내",
      "합의한 일정에 맞춰 인도",
      "인도 후에도 전문적이고 세심한 유지보수",
    ],
    ideaTitle: "더 나은 일상을 위한 생활 공간",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo는 모든 공간을 소중하게 다룹니다. 전문가들이 자신의 가족을 대하는 마음으로 집을 완성하도록 돕습니다.",
    ctaIntro:
      "아파트 인테리어, 일정, 적절한 예산에 대해 무료로 상담해 드립니다.",
  },
  sv: {
    ...townhouseConstructionCopy.sv,
    heroParts: ["Inredning för", "lägenheter"],
    intro:
      "Bekväma och eleganta lägenheter planerade för din familj. Ta vara på varje kvadratmeter med samordnad design och genomförande.",
    explore: "Utforska rummen",
    stylesLabel: "Arbetets omfattning",
    stylesTitle: "Genomtänkt inredning i varje rum",
    stylesIntro:
      "Klassiskt, nyklassiskt eller modernt – varje rum utformas efter dina önskemål, behov och personliga smak.",
    styleLabel: "Rum",
    styles: [
      {
        title: "Ett elegant och välkomnande vardagsrum",
        description:
          "Vardagsrummet är hemmets hjärta, där vänner välkomnas och familjen samlas. Luftig möblering och blå, grå eller vita toner skapar en elegant helhet.",
      },
      {
        title: "Ett varmt och praktiskt kök",
        description:
          "Ett kök som knyts till vardagsrummet använder ytan effektivt och för familjen samman. Välj skåp, bänkskivor och stänkskydd med omsorg om hållbarhet, utseende och rengöring.",
      },
      {
        title: "Ett rofyllt och bekvämt sovrum",
        description:
          "En privat plats för vila, anpassad till varje familjemedlems ålder och smak. Tydlig planering, genomtänkt ljus och lämpliga gardiner ger en avkopplande miljö.",
      },
    ],
    clientsLabel: "Våra kunder",
    clientsTitle: "En partner att anförtro ditt hem åt",
    clientsIntro:
      "Med ett professionellt och omtänksamt arbetssätt har vi genomfört hundratals projekt, från lägenheter till villor och radhus.",
    clientsListLabel: "Kunder med olika bakgrund",
    clients: [
      "Entreprenörer",
      "Bilhandlare",
      "Juvelerare",
      "Kontorsanställda",
      "Småföretagare",
    ],
    projectsLabel: "Genomförda projekt",
    tipsLabel: "Våra åtaganden",
    tipsTitle: "Stöd från byggstart till överlämning",
    tipsIntro:
      "Omsorg om material, hantverk och tidsplan ger en sammanhållen lägenhet, med uppmärksamt underhåll efter överlämningen.",
    tips: [
      "Material som passar yta, klimat och budget",
      "Möbler och utrustning av god kvalitet med tydligt ursprung",
      "Skickliga montörer som skyddar utrustning och befintlig bostad",
      "Nära arbetsledning och regelbundna lägesrapporter",
      "Överlämning enligt avtalad tidsplan",
      "Professionellt och omtänksamt underhåll efter överlämningen",
    ],
    ideaTitle: "Vi skapar en bättre plats att leva på",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo tar hand om varje bostadsyta. Våra specialister ger ditt hem samma omsorg som de skulle ge sitt eget.",
    ctaIntro:
      "Kostnadsfri rådgivning om lägenhetsinredning, tidsplan och budget.",
  },
  fr: {
    ...townhouseConstructionCopy.fr,
    heroParts: ["Aménagement", "d’appartement"],
    intro:
      "Des intérieurs confortables et élégants pensés pour votre famille. Optimisez chaque mètre carré avec une conception et une réalisation coordonnées.",
    explore: "Découvrir les espaces",
    stylesLabel: "Prestations",
    stylesTitle: "Un intérieur soigné dans chaque pièce",
    stylesIntro:
      "Classique, néoclassique ou moderne : chaque espace est conçu et réalisé selon vos goûts et vos besoins.",
    styleLabel: "Espace",
    styles: [
      {
        title: "Un salon élégant et accueillant",
        description:
          "Cœur du foyer, le salon accueille les amis et réunit la famille. Un mobilier épuré et des tons bleus, gris ou blancs créent un cadre élégant et aéré.",
      },
      {
        title: "Une cuisine chaleureuse et pratique",
        description:
          "Une cuisine reliée au salon optimise la surface et rapproche la famille. Meubles, plans de travail et crédences sont choisis pour leur durabilité, leur esthétique et leur entretien facile.",
      },
      {
        title: "Une chambre confortable et reposante",
        description:
          "Un refuge privé adapté à l’âge et aux préférences de chacun. Un agencement dégagé, un éclairage soigné et des rideaux adaptés favorisent la détente.",
      },
    ],
    clientsLabel: "Nos clients",
    clientsTitle: "Un partenaire de confiance pour votre foyer",
    clientsIntro:
      "Notre approche professionnelle et attentive a accompagné des centaines de projets, des appartements aux villas et maisons de ville.",
    clientsListLabel: "Des profils variés",
    clients: [
      "Entrepreneurs",
      "Propriétaires de concessions automobiles",
      "Bijoutiers",
      "Employés de bureau",
      "Commerçants",
    ],
    projectsLabel: "Projets réalisés",
    tipsLabel: "Nos engagements",
    tipsTitle: "À vos côtés du chantier à la livraison",
    tipsIntro:
      "Matériaux, savoir-faire et calendrier font l’objet de toute notre attention, avec un entretien soigné après la livraison.",
    tips: [
      "Des matériaux adaptés à l’espace, au climat et au budget",
      "Du mobilier et des équipements de qualité à l’origine claire",
      "Des artisans qualifiés qui protègent les équipements et l’existant",
      "Un suivi de chantier rigoureux et des informations régulières",
      "Une livraison selon le calendrier convenu",
      "Un entretien professionnel et attentif après la livraison",
    ],
    ideaTitle: "Créer des espaces où il fait bon vivre",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo prend soin de chaque espace de vie. Nos spécialistes accompagnent votre foyer avec l’attention qu’ils accorderaient au leur.",
    ctaIntro:
      "Conseils gratuits sur l’aménagement, le calendrier et le budget de votre appartement.",
  },
  ru: {
    ...townhouseConstructionCopy.ru,
    heroParts: ["Отделка", "квартир"],
    intro:
      "Удобные и элегантные интерьеры для вашей семьи. Используйте каждый квадратный метр с пользой благодаря согласованному проектированию и отделке.",
    explore: "Посмотреть помещения",
    stylesLabel: "Состав работ",
    stylesTitle: "Продуманный интерьер в каждой комнате",
    stylesIntro:
      "Классика, неоклассика или современный стиль — каждое пространство проектируется и оформляется под ваши вкусы и потребности.",
    styleLabel: "Помещение",
    styles: [
      {
        title: "Элегантная и гостеприимная гостиная",
        description:
          "Гостиная — сердце дома, где встречают друзей и собираются всей семьёй. Лаконичная мебель и синие, серые или белые тона создают лёгкий и изящный интерьер.",
      },
      {
        title: "Тёплая и практичная кухня",
        description:
          "Связанная с гостиной кухня экономит место и объединяет семью. Шкафы, столешницы и фартуки выбираются с учётом долговечности, эстетики и простоты ухода.",
      },
      {
        title: "Уютная спальня для отдыха",
        description:
          "Личное пространство с учётом возраста и предпочтений каждого члена семьи. Свободная планировка, продуманное освещение и подходящие шторы помогают расслабиться.",
      },
    ],
    clientsLabel: "Наши клиенты",
    clientsTitle: "Партнёр, которому можно доверить дом",
    clientsIntro:
      "Профессиональный и внимательный подход помог нам реализовать сотни проектов: от квартир до вилл и таунхаусов.",
    clientsListLabel: "Разные категории клиентов",
    clients: [
      "Предприниматели",
      "Владельцы автосалонов",
      "Владельцы ювелирных магазинов",
      "Офисные сотрудники",
      "Владельцы малого бизнеса",
    ],
    projectsLabel: "Выполненные проекты",
    tipsLabel: "Наши обязательства",
    tipsTitle: "Поддержка от начала работ до сдачи",
    tipsIntro:
      "Внимание к материалам, мастерству и срокам помогает создать цельный интерьер с заботливым обслуживанием после сдачи.",
    tips: [
      "Материалы под пространство, климат и бюджет",
      "Качественная мебель и оборудование с понятным происхождением",
      "Опытные мастера бережно относятся к оборудованию и существующей отделке",
      "Тщательный надзор и регулярные отчёты о ходе работ",
      "Сдача объекта в согласованные сроки",
      "Профессиональное обслуживание после сдачи",
    ],
    ideaTitle: "Создаём пространство для лучшей жизни",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo бережно относится к каждому интерьеру. Наши специалисты заботятся о вашем доме так же внимательно, как о собственном.",
    ctaIntro:
      "Бесплатная консультация по интерьеру квартиры, срокам и бюджету.",
  },
  es: {
    ...townhouseConstructionCopy.es,
    heroParts: ["Interiores de", "apartamentos"],
    intro:
      "Interiores cómodos y elegantes pensados para tu familia. Aprovecha cada metro cuadrado con un diseño y una ejecución coordinados.",
    explore: "Explorar los espacios",
    stylesLabel: "Alcance de los trabajos",
    stylesTitle: "Un interior cuidado en cada estancia",
    stylesIntro:
      "Clásico, neoclásico o moderno: cada espacio se diseña y realiza según tus gustos y necesidades.",
    styleLabel: "Espacio",
    styles: [
      {
        title: "Un salón elegante y acogedor",
        description:
          "El salón es el corazón del hogar, donde se recibe a los amigos y se reúne la familia. Los muebles despejados y los tonos azules, grises o blancos crean un ambiente elegante y ligero.",
      },
      {
        title: "Una cocina cálida y práctica",
        description:
          "Una cocina conectada con el salón aprovecha la superficie y reúne a la familia. Los armarios, encimeras y revestimientos se eligen por su durabilidad, estética y facilidad de limpieza.",
      },
      {
        title: "Un dormitorio cómodo y tranquilo",
        description:
          "Un refugio privado adaptado a la edad y los gustos de cada persona. Una distribución despejada, una iluminación cuidada y cortinas adecuadas ayudan a descansar.",
      },
    ],
    clientsLabel: "Nuestros clientes",
    clientsTitle: "Un equipo al que confiar tu hogar",
    clientsIntro:
      "Nuestro enfoque profesional y atento ha acompañado cientos de proyectos, desde apartamentos hasta villas y casas urbanas.",
    clientsListLabel: "Perfiles diversos",
    clients: [
      "Emprendedores",
      "Propietarios de concesionarios",
      "Propietarios de joyerías",
      "Profesionales de oficina",
      "Pequeños comerciantes",
    ],
    projectsLabel: "Proyectos realizados",
    tipsLabel: "Nuestros compromisos",
    tipsTitle: "A tu lado desde la obra hasta la entrega",
    tipsIntro:
      "Cuidamos los materiales, la mano de obra y los plazos para crear un apartamento coherente, con mantenimiento atento tras la entrega.",
    tips: [
      "Materiales adaptados al espacio, al clima y al presupuesto",
      "Muebles y equipamiento de calidad con origen claro",
      "Instaladores cualificados que protegen los equipos y el inmueble",
      "Supervisión cercana e información periódica sobre el avance",
      "Entrega según el calendario acordado",
      "Mantenimiento profesional y atento tras la entrega",
    ],
    ideaTitle: "Creamos espacios para vivir mejor",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo cuida cada espacio de vida. Nuestros especialistas atienden tu hogar como si fuera el suyo.",
    ctaIntro:
      "Asesoramiento gratuito sobre interiores, plazos y presupuesto para tu apartamento.",
  },
  zh: {
    ...townhouseConstructionCopy.zh,
    heroParts: ["公寓", "室内施工"],
    intro:
      "为家人打造舒适、雅致且协调的公寓空间。通过一体化设计与施工，充分利用每一平方米。",
    explore: "探索施工空间",
    stylesLabel: "施工项目",
    stylesTitle: "用心完善家中的每一个空间",
    stylesIntro:
      "无论古典、新古典还是现代风格，每个空间都根据您的喜好、需求与审美进行设计施工。",
    styleLabel: "空间",
    styles: [
      {
        title: "雅致而温馨的客厅",
        description:
          "客厅是家的中心，是接待朋友与家人相聚的地方。简洁的家具与蓝、灰、白色调，营造雅致而通透的氛围。",
      },
      {
        title: "温暖而实用的厨房",
        description:
          "与客厅相连的厨房节省空间，让家人更加亲近。精心选择橱柜、台面与墙面材料，兼顾耐用、美观和清洁便利。",
      },
      {
        title: "舒适而宁静的卧室",
        description:
          "根据每位家人的年龄和喜好布置私密休憩空间。通畅布局、适宜照明与窗帘，帮助营造放松的环境。",
      },
    ],
    clientsLabel: "我们的客户",
    clientsTitle: "值得托付家的团队",
    clientsIntro:
      "凭借专业、细致的服务，我们参与了众多公寓、别墅和联排住宅室内项目。",
    clientsListLabel: "多元客户群体",
    clients: [
      "企业家",
      "汽车展厅经营者",
      "珠宝店经营者",
      "办公室职员",
      "小型商户",
    ],
    projectsLabel: "已完成项目",
    tipsLabel: "我们的承诺",
    tipsTitle: "从施工到交付，全程相伴",
    tipsIntro:
      "重视材料、工艺与进度，打造协调的公寓空间，并在交付后提供细致维护。",
    tips: [
      "选择适合空间、气候与预算的材料",
      "使用来源清晰的优质家具与设备",
      "熟练工人保护设备和现场原有设施",
      "严密监督施工，定期更新进展",
      "按照约定进度交付",
      "交付后提供专业、细致的维护",
    ],
    ideaTitle: "打造更理想的生活空间",
    ideaIntro:
      "Tổ Ấm Hoàn Hảo用心对待每个居住空间。我们的专家像对待自己的家一样，为您的家提供细致服务。",
    ctaIntro: "免费咨询公寓室内施工、工期与合理预算。",
  },
};
