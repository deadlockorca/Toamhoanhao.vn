import { paintConstructionCopy } from "./paint-construction";
import type { TownhouseConstructionCopy } from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
export const ceilingConstructionCopy: Record<
  SiteLocale,
  TownhouseConstructionCopy
> = {
  vi: {
    ...paintConstructionCopy.vi,
    heroParts: ["Thi công", "trần thạch cao"],
    intro:
      "Hoàn thiện trần nhà hài hòa với nội thất, ánh sáng và nhu cầu sử dụng. Tư vấn hệ trần, vật liệu và phương án thi công phù hợp cho nhà ở, văn phòng và không gian dịch vụ.",
    explore: "Khám phá ưu điểm",
    stylesLabel: "Ưu điểm trần thạch cao",
    stylesTitle: "Giải pháp trần cho không gian sống của bạn",
    stylesIntro:
      "Từ trần phẳng đến giật cấp, mỗi phương án được cân nhắc theo chiều cao, công năng và phong cách của công trình.",
    styleLabel: "Ưu điểm",
    styles: [
      {
        title: "Linh hoạt về thẩm mỹ",
        description:
          "Nhiều kiểu dáng và cách phối màu giúp trần nhà hài hòa với tổng thể nội thất. Kết hợp chiếu sáng và đường nét để tạo điểm nhấn phù hợp cho từng không gian.",
      },
      {
        title: "Giải pháp về nhiệt và độ ẩm",
        description:
          "Lựa chọn loại tấm và cấu tạo hệ trần theo điều kiện sử dụng. Khả năng cách nhiệt và chịu ẩm phụ thuộc vào vật liệu, lớp bổ sung và việc xử lý nguồn ẩm của công trình.",
      },
      {
        title: "Hỗ trợ kiểm soát âm thanh",
        description:
          "Hệ trần có thể kết hợp vật liệu tiêu âm, cách âm cho phòng ngủ, phòng làm việc hoặc phòng giải trí. Hiệu quả cần được xem xét theo cấu tạo và đặc điểm của cả căn phòng.",
      },
      {
        title: "Thuận tiện lắp đặt và bảo trì",
        description:
          "Khung, tấm và vị trí cửa thăm được bố trí đồng bộ với hệ thống kỹ thuật. Trần thả giúp tiếp cận không gian phía trên thuận tiện, còn trần chìm cần kế hoạch kiểm tra phù hợp.",
      },
      {
        title: "Lựa chọn phù hợp ngân sách",
        description:
          "Có nhiều loại khung và tấm trần cho từng yêu cầu hoàn thiện. Cân nhắc chất lượng vật liệu, điều kiện sử dụng và chi phí bảo trì để chọn phương án phù hợp lâu dài.",
      },
    ],
    tipsTitle: "Thi công đồng bộ, vật liệu rõ nguồn gốc",
    tipsIntro:
      "Tư vấn lựa chọn khung xương, tấm trần Vĩnh Tường và vật liệu phù hợp với công trình. Kết hợp yêu cầu thẩm mỹ với phương án lắp đặt, kiểm tra và hoàn thiện.",
    ideaTitle: "Trần đẹp, không gian hài hòa",
    ideaIntro:
      "Trao đổi nhu cầu với đội ngũ để lựa chọn kiểu trần, ánh sáng và màu sắc phù hợp. Chúng tôi theo sát từng hạng mục từ thiết kế đến bàn giao.",
    ctaIntro:
      "Miễn phí tư vấn thi công trần thạch cao, với phương án phù hợp tiến độ và ngân sách.",
  },
  en: {
    ...paintConstructionCopy.en,
    heroParts: ["Plasterboard", "ceilings"],
    intro:
      "Complete your ceiling in harmony with the interior, lighting and everyday use. Explore suitable systems, materials and installation plans for homes, offices and service spaces.",
    explore: "Explore the benefits",
    stylesLabel: "Ceiling benefits",
    stylesTitle: "A ceiling solution for your space",
    stylesIntro:
      "From flat to stepped ceilings, each option considers room height, function and the style of the property.",
    styleLabel: "Benefit",
    styles: [
      {
        title: "Flexible design",
        description:
          "Different shapes and colour combinations help the ceiling fit the interior. Coordinate lighting and lines to create an appropriate focal point for each room.",
      },
      {
        title: "Thermal and moisture considerations",
        description:
          "Select boards and ceiling assemblies for the conditions of use. Thermal and moisture performance depends on materials, additional layers and managing moisture sources in the building.",
      },
      {
        title: "Support for acoustic comfort",
        description:
          "Ceiling systems can incorporate sound-absorbing or insulating materials for bedrooms, workspaces and entertainment rooms. Performance depends on the assembly and the room as a whole.",
      },
      {
        title: "Installation and maintenance access",
        description:
          "Coordinate framing, boards and access panels with building services. Exposed-grid ceilings can offer convenient access above, while concealed systems need a suitable inspection plan.",
      },
      {
        title: "Options for different budgets",
        description:
          "Choose from framing and boards for different finish requirements. Consider material quality, conditions of use and maintenance costs for a suitable long-term choice.",
      },
    ],
    tipsTitle: "Coordinated installation, traceable materials",
    tipsIntro:
      "We advise on Vĩnh Tường framing, boards and materials suited to your project, balancing design with installation, inspection and finishing requirements.",
    ideaTitle: "A considered ceiling, a harmonious room",
    ideaIntro:
      "Discuss your needs with the team to choose suitable ceiling designs, lighting and colours. We follow each stage from design to handover.",
    ctaIntro:
      "Free advice on plasterboard ceilings, with a plan suited to your schedule and budget.",
  },
  ja: {
    ...paintConstructionCopy.ja,
    heroParts: ["石膏ボード", "天井施工"],
    intro:
      "内装、照明、使い方と調和する天井へ。住宅、オフィス、サービス空間に適した天井構成、素材、施工計画をご提案します。",
    explore: "特長を見る",
    stylesLabel: "石膏ボード天井の特長",
    stylesTitle: "空間に合う天井のかたち",
    stylesIntro:
      "フラットな天井から段差のある構成まで、高さ、機能、建物のスタイルに合わせて検討します。",
    styleLabel: "特長",
    styles: [
      {
        title: "柔軟なデザイン",
        description:
          "多様な形と配色で、内装と調和する天井に。照明やラインを組み合わせ、部屋に合うアクセントをつくります。",
      },
      {
        title: "熱と湿気への配慮",
        description:
          "使用環境に合うボードと構成を選びます。断熱・耐湿性能は素材や追加層、建物の湿気対策によって異なります。",
      },
      {
        title: "音環境を整える工夫",
        description:
          "寝室、仕事場、娯楽室に合わせて吸音材や遮音材を組み合わせられます。性能は天井構成と部屋全体を踏まえて検討します。",
      },
      {
        title: "施工と点検への配慮",
        description:
          "下地、ボード、点検口を設備と合わせて配置。露出グリッド式は上部にアクセスしやすく、隠蔽式には適切な点検計画が必要です。",
      },
      {
        title: "予算に合う選択肢",
        description:
          "仕上げに合わせて下地とボードを選べます。素材の品質、使用環境、メンテナンス費用も考慮し、長く使える方法を検討します。",
      },
    ],
    tipsTitle: "一貫した施工と出所の明確な素材",
    tipsIntro:
      "Vĩnh Tườngの下地、ボードと建物に合う材料選びをご案内。美しさに加え、施工、点検、仕上げを考えます。",
    ideaTitle: "天井から空間を調和させる",
    ideaIntro:
      "ご希望を伺い、天井の形、照明、色を選びます。設計からお引き渡しまで各工程を見守ります。",
    ctaIntro:
      "石膏ボード天井について、工期とご予算に合う計画を無料でご相談いただけます。",
  },
  ko: {
    ...paintConstructionCopy.ko,
    heroParts: ["석고보드", "천장 시공"],
    intro:
      "인테리어, 조명, 생활 방식과 조화를 이루는 천장. 주택, 사무실, 서비스 공간에 맞는 구조와 자재, 시공 계획을 제안합니다.",
    explore: "장점 살펴보기",
    stylesLabel: "석고보드 천장의 장점",
    stylesTitle: "공간에 맞는 천장 솔루션",
    stylesIntro:
      "평천장부터 단차 천장까지 높이, 용도, 건물 스타일에 맞춰 검토합니다.",
    styleLabel: "장점",
    styles: [
      {
        title: "유연한 디자인",
        description:
          "다양한 형태와 색상 조합으로 인테리어와 조화를 이룹니다. 조명과 선을 조율해 공간에 맞는 포인트를 만듭니다.",
      },
      {
        title: "열과 습기 고려",
        description:
          "사용 조건에 맞는 보드와 구조를 선택합니다. 단열과 내습 성능은 자재, 추가 구성, 건물의 습기 관리에 따라 달라집니다.",
      },
      {
        title: "쾌적한 음환경 지원",
        description:
          "침실, 작업실, 엔터테인먼트 공간에 흡음·차음 자재를 조합할 수 있습니다. 효과는 구조와 방 전체의 특성을 고려해 검토합니다.",
      },
      {
        title: "설치와 유지관리 편의",
        description:
          "프레임, 보드, 점검구를 기술 설비와 조율합니다. 노출형 천장은 상부 접근이 편리하며 매립형은 적절한 점검 계획이 필요합니다.",
      },
      {
        title: "예산에 맞는 선택",
        description:
          "마감 요구에 따라 다양한 프레임과 보드를 선택할 수 있습니다. 자재 품질, 사용 조건, 유지관리 비용을 함께 고려합니다.",
      },
    ],
    tipsTitle: "일관된 시공과 출처가 명확한 자재",
    tipsIntro:
      "Vĩnh Tường 프레임과 보드, 현장에 맞는 자재를 제안합니다. 디자인과 함께 설치, 점검, 마감을 고려합니다.",
    ideaTitle: "아름다운 천장, 조화로운 공간",
    ideaIntro:
      "팀과 함께 천장 디자인, 조명, 색상을 선택하세요. 설계부터 인도까지 각 공정을 세심하게 살핍니다.",
    ctaIntro:
      "일정과 예산에 맞는 석고보드 천장 시공 방안을 무료로 상담해 드립니다.",
  },
  sv: {
    ...paintConstructionCopy.sv,
    heroParts: ["Gipstak och", "takmontage"],
    intro:
      "Utforma taket i harmoni med inredning, belysning och användning. Vi ger råd om system, material och montage för bostäder, kontor och verksamhetslokaler.",
    explore: "Utforska fördelarna",
    stylesLabel: "Gipstakets fördelar",
    stylesTitle: "En taklösning för ditt rum",
    stylesIntro:
      "Från plana tak till nivåskillnader – varje lösning tar hänsyn till höjd, funktion och byggnadens stil.",
    styleLabel: "Fördel",
    styles: [
      {
        title: "Flexibel formgivning",
        description:
          "Olika former och kulörer hjälper taket att passa in i helheten. Samordna ljus och linjer för att skapa en lämplig fokuspunkt i rummet.",
      },
      {
        title: "Hänsyn till värme och fukt",
        description:
          "Välj skivor och konstruktion efter användningsmiljön. Värme- och fuktegenskaper beror på material, kompletterande skikt och hantering av byggnadens fuktkällor.",
      },
      {
        title: "Stöd för god ljudmiljö",
        description:
          "Taksystem kan kombineras med ljudabsorberande eller isolerande material för sovrum, arbetsrum och mediarum. Effekten beror på konstruktionen och hela rummet.",
      },
      {
        title: "Montage och tillgång för underhåll",
        description:
          "Samordna stomme, skivor och inspektionsluckor med installationerna. Tak med synligt bärverk kan ge enkel åtkomst, medan dolda system behöver en lämplig kontrollplan.",
      },
      {
        title: "Alternativ för olika budgetar",
        description:
          "Välj stomme och skivor efter önskat utförande. Väg in materialkvalitet, användningsförhållanden och underhållskostnader för ett långsiktigt val.",
      },
    ],
    tipsTitle: "Samordnat montage och spårbara material",
    tipsIntro:
      "Vi ger råd om Vĩnh Tường-stommar, skivor och material för ditt projekt, med hänsyn till design, montage, inspektion och slutfinish.",
    ideaTitle: "Ett genomtänkt tak ger ett harmoniskt rum",
    ideaIntro:
      "Prata med teamet om takets form, ljus och färger. Vi följer varje steg från design till överlämning.",
    ctaIntro:
      "Kostnadsfri rådgivning om gipstak efter din tidsplan och budget.",
  },
  fr: {
    ...paintConstructionCopy.fr,
    heroParts: ["Plafonds en", "plaques de plâtre"],
    intro:
      "Un plafond en harmonie avec l’intérieur, la lumière et les usages. Nous conseillons systèmes, matériaux et pose pour logements, bureaux et espaces de service.",
    explore: "Découvrir les atouts",
    stylesLabel: "Les atouts des plafonds en plâtre",
    stylesTitle: "Une solution de plafond pour votre espace",
    stylesIntro:
      "Du plafond plat aux jeux de niveaux, chaque option tient compte de la hauteur, de la fonction et du style du bâtiment.",
    styleLabel: "Atout",
    styles: [
      {
        title: "Une grande liberté esthétique",
        description:
          "Formes et couleurs permettent d’intégrer le plafond à l’intérieur. L’éclairage et les lignes créent des points d’intérêt adaptés à chaque pièce.",
      },
      {
        title: "Prise en compte de la chaleur et de l’humidité",
        description:
          "Les plaques et la composition sont choisies selon l’usage. Les performances dépendent des matériaux, des couches complémentaires et de la gestion des sources d’humidité.",
      },
      {
        title: "Un soutien au confort acoustique",
        description:
          "Le plafond peut intégrer des matériaux absorbants ou isolants pour chambres, bureaux ou pièces de loisirs. Les résultats dépendent du système et de l’ensemble de la pièce.",
      },
      {
        title: "Pose et accès pour l’entretien",
        description:
          "Ossatures, plaques et trappes sont coordonnées avec les réseaux. Les plafonds à ossature apparente facilitent l’accès supérieur ; les systèmes cachés demandent un plan d’inspection adapté.",
      },
      {
        title: "Des options pour différents budgets",
        description:
          "Plusieurs ossatures et plaques répondent aux finitions souhaitées. Qualité, conditions d’usage et entretien sont à considérer pour un choix durable.",
      },
    ],
    tipsTitle: "Une pose coordonnée, des matériaux traçables",
    tipsIntro:
      "Nous conseillons les ossatures, plaques Vĩnh Tường et matériaux adaptés au projet, en conciliant esthétique, pose, inspection et finition.",
    ideaTitle: "Un plafond soigné pour une pièce harmonieuse",
    ideaIntro:
      "Échangez avec l’équipe sur les formes, la lumière et les couleurs. Nous suivons chaque étape, de la conception à la livraison.",
    ctaIntro:
      "Conseils gratuits sur les plafonds en plaques de plâtre, selon votre calendrier et votre budget.",
  },
  ru: {
    ...paintConstructionCopy.ru,
    heroParts: ["Потолки из", "гипсокартона"],
    intro:
      "Потолок в гармонии с интерьером, освещением и использованием комнаты. Подбираем системы, материалы и монтаж для жилья, офисов и сервисных пространств.",
    explore: "Посмотреть преимущества",
    stylesLabel: "Преимущества гипсокартонных потолков",
    stylesTitle: "Потолочное решение для вашего пространства",
    stylesIntro:
      "От ровной поверхности до перепадов уровней — решение учитывает высоту, назначение и стиль здания.",
    styleLabel: "Преимущество",
    styles: [
      {
        title: "Гибкость дизайна",
        description:
          "Разные формы и цвета помогают вписать потолок в интерьер. Освещение и линии создают подходящие акценты в каждом помещении.",
      },
      {
        title: "Учёт тепла и влажности",
        description:
          "Листы и конструкция подбираются под условия использования. Тепловые и влагостойкие свойства зависят от материалов, дополнительных слоёв и устранения источников влаги.",
      },
      {
        title: "Поддержка акустического комфорта",
        description:
          "Потолки можно сочетать с поглощающими или изолирующими материалами для спален, кабинетов и комнат отдыха. Результат зависит от конструкции и помещения в целом.",
      },
      {
        title: "Монтаж и доступ для обслуживания",
        description:
          "Каркасы, листы и люки согласуются с инженерными системами. Открытые каркасы облегчают доступ сверху, скрытые требуют подходящего плана осмотра.",
      },
      {
        title: "Варианты под разный бюджет",
        description:
          "Разные каркасы и листы подходят для разных требований к отделке. Учитывайте качество, условия эксплуатации и стоимость обслуживания для долгосрочного выбора.",
      },
    ],
    tipsTitle: "Согласованный монтаж и проверяемые материалы",
    tipsIntro:
      "Помогаем выбрать каркасы, листы Vĩnh Tường и материалы под проект, сочетая дизайн с требованиями монтажа, проверки и отделки.",
    ideaTitle: "Продуманный потолок для гармоничного интерьера",
    ideaIntro:
      "Обсудите с командой форму потолка, освещение и цвета. Мы следим за каждым этапом от проекта до сдачи.",
    ctaIntro:
      "Бесплатная консультация по гипсокартонным потолкам с учётом сроков и бюджета.",
  },
  es: {
    ...paintConstructionCopy.es,
    heroParts: ["Techos de", "yeso laminado"],
    intro:
      "Un techo en armonía con el interior, la iluminación y el uso diario. Asesoramos sobre sistemas, materiales y montaje para viviendas, oficinas y espacios de servicios.",
    explore: "Explorar las ventajas",
    stylesLabel: "Ventajas del yeso laminado",
    stylesTitle: "Una solución de techo para tu espacio",
    stylesIntro:
      "Desde techos planos hasta distintos niveles, cada opción considera la altura, la función y el estilo del inmueble.",
    styleLabel: "Ventaja",
    styles: [
      {
        title: "Diseño flexible",
        description:
          "Diferentes formas y colores ayudan a integrar el techo en el interior. La luz y las líneas crean puntos de interés adecuados para cada estancia.",
      },
      {
        title: "Consideraciones térmicas y de humedad",
        description:
          "Las placas y la composición se eligen según el uso. El rendimiento depende de materiales, capas adicionales y gestión de las fuentes de humedad del edificio.",
      },
      {
        title: "Apoyo al confort acústico",
        description:
          "Los techos pueden incorporar materiales absorbentes o aislantes en dormitorios, despachos y salas de ocio. El resultado depende del sistema y de toda la estancia.",
      },
      {
        title: "Montaje y acceso para mantenimiento",
        description:
          "Estructuras, placas y registros se coordinan con las instalaciones. Los techos con perfilería vista facilitan el acceso superior; los ocultos necesitan un plan de inspección adecuado.",
      },
      {
        title: "Opciones para distintos presupuestos",
        description:
          "Hay estructuras y placas para diferentes acabados. Considera calidad, condiciones de uso y mantenimiento para una elección a largo plazo.",
      },
    ],
    tipsTitle: "Montaje coordinado y materiales trazables",
    tipsIntro:
      "Asesoramos sobre perfilería, placas Vĩnh Tường y materiales para tu proyecto, equilibrando diseño, montaje, inspección y acabado.",
    ideaTitle: "Un techo cuidado, una estancia armoniosa",
    ideaIntro:
      "Habla con el equipo sobre formas, iluminación y colores. Seguimos cada etapa desde el diseño hasta la entrega.",
    ctaIntro:
      "Asesoramiento gratuito sobre techos de yeso laminado según tus plazos y presupuesto.",
  },
  zh: {
    ...paintConstructionCopy.zh,
    heroParts: ["石膏板", "吊顶施工"],
    intro:
      "让吊顶与室内、灯光及日常使用协调一致。为住宅、办公室及服务空间提供适合的系统、材料与施工建议。",
    explore: "探索优势",
    stylesLabel: "石膏板吊顶优势",
    stylesTitle: "适合您空间的吊顶方案",
    stylesIntro: "从平顶到错层设计，每个方案都考虑层高、功能与建筑风格。",
    styleLabel: "优势",
    styles: [
      {
        title: "灵活的美学设计",
        description:
          "丰富造型与配色让吊顶融入室内整体。结合灯光与线条，为不同空间设置合适的视觉亮点。",
      },
      {
        title: "兼顾隔热与湿度条件",
        description:
          "根据使用环境选择板材与系统构造。隔热、耐湿表现取决于材料、附加层以及建筑潮湿来源的处理。",
      },
      {
        title: "辅助改善声环境",
        description:
          "吊顶可结合吸音或隔音材料，用于卧室、工作区与娱乐空间。效果需要结合构造与整个房间的特点评估。",
      },
      {
        title: "便于安装与维护规划",
        description:
          "龙骨、板材和检修口与技术设备统筹安排。明架系统便于进入上方空间，暗架系统需要适合的检查规划。",
      },
      {
        title: "适合不同预算的选择",
        description:
          "多种龙骨与板材可满足不同饰面需求。综合考虑材料品质、使用条件与维护费用，选择适合长期使用的方案。",
      },
    ],
    tipsTitle: "协调施工，材料来源清晰",
    tipsIntro:
      "提供Vĩnh Tường龙骨、板材及项目适用材料的选择建议，兼顾美观、安装、检查与饰面要求。",
    ideaTitle: "精心设计吊顶，打造协调空间",
    ideaIntro: "与团队讨论吊顶造型、灯光和配色。我们从设计到交付跟进每个环节。",
    ctaIntro: "免费咨询石膏板吊顶施工，提供符合工期与预算的方案。",
  },
};
