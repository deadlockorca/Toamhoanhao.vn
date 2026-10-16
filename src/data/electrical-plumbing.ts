import { shellConstructionCopy } from "./shell-construction";
import type { TownhouseConstructionCopy } from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
export type ElectricalPlumbingCopy = TownhouseConstructionCopy & {
  notesTitle: string;
  notes: Card[];
  pricingLabel: string;
  pricingTitle: string;
  pricingIntro: string;
  unit: string;
  pricingItems: string[];
};
export const electricalPlumbingCopy: Record<
  SiteLocale,
  ElectricalPlumbingCopy
> = {
  vi: {
    ...shellConstructionCopy.vi,
    tipsTitle: "Thi công điện nước cùng Tổ Ấm Hoàn Hảo",
    heroParts: ["Thi công", "điện nước"],
    intro:
      "Hệ thống điện nước được bố trí theo nhu cầu sử dụng và mặt bằng nội thất. Phối hợp thiết kế, vật liệu và lắp đặt để công trình vận hành thuận tiện, dễ kiểm tra và bảo trì.",
    explore: "Khám phá hạng mục",
    stylesLabel: "Hạng mục thi công",
    stylesTitle: "Điện nước đồng bộ cho từng không gian",
    stylesIntro:
      "Lên kế hoạch vị trí đường dây, đường ống và thiết bị từ đầu để các công đoạn phối hợp nhịp nhàng, hạn chế sửa đổi khi hoàn thiện.",
    styleLabel: "Hạng mục",
    styles: [
      {
        title: "Hệ thống điện và thiết bị",
        description:
          "Bố trí tuyến dây, vị trí ổ cắm, công tắc và thiết bị theo mặt bằng đã thống nhất. Lựa chọn dây dẫn, ống bảo vệ, tủ điện và phụ kiện phù hợp; kiểm tra hệ thống trước khi bàn giao.",
      },
      {
        title: "Hệ thống cấp thoát nước",
        description:
          "Khảo sát vị trí sử dụng, bố trí đường ống cấp thoát nước và đấu nối các thiết bị bếp, vệ sinh. Chú trọng mối nối, khả năng tiếp cận để kiểm tra và sự phối hợp với các hạng mục nội thất.",
      },
    ],
    notesTitle: "4 điểm cần tính toán từ thiết kế",
    notes: [
      {
        title: "Tuyến dây và đường ống",
        description:
          "Thống nhất đường đi, vị trí hộp kỹ thuật và cách bảo vệ theo hiện trạng công trình, trước khi thi công các lớp hoàn thiện.",
      },
      {
        title: "Lựa chọn dây dẫn, ống nước",
        description:
          "Kích thước và vật liệu cần được lựa chọn theo tải sử dụng, nhu cầu cấp thoát nước và thiết kế kỹ thuật.",
      },
      {
        title: "Vị trí lắp đặt thiết bị",
        description:
          "Cân nhắc đèn, điều hòa, tủ lạnh, máy giặt và khu vực rửa ngay từ đầu để bố trí nguồn điện, nước phù hợp.",
      },
      {
        title: "Thiết bị bảo vệ và kiểm tra",
        description:
          "Lựa chọn thiết bị bảo vệ, chống dòng rò phù hợp và kiểm tra hệ thống theo phương án kỹ thuật trước bàn giao.",
      },
    ],
    pricingLabel: "Báo giá tham khảo",
    pricingTitle: "Chi phí thi công theo diện tích",
    pricingIntro:
      "Mức giá phụ thuộc khối lượng, độ phức tạp và phạm vi vật tư, thiết bị. Báo giá cụ thể được thống nhất sau khảo sát và xác định hạng mục.",
    unit: "đ/m²",
    pricingItems: [
      "Đi tuyến điện âm sàn, âm tường theo thiết kế",
      "Lắp đặt đế âm, đấu nối tủ điện và aptomat",
      "Lắp thiết bị điện, chiếu sáng; chưa gồm đèn chùm",
      "Lắp ống luồn dây mềm, cứng",
      "Kéo dây, đấu nối và hoàn thiện các điểm điện",
      "Lắp lavabo, bồn cầu và vòi tắm",
      "Lắp ống cấp thoát nước khu vệ sinh",
      "Đấu nối đường nước và thiết bị khu bếp",
    ],
    ctaIntro:
      "Miễn phí tư vấn thi công điện nước, với phương án phù hợp tiến độ và ngân sách.",
  },
  en: {
    ...shellConstructionCopy.en,
    tipsTitle: "Why choose our electrical and plumbing team",
    heroParts: ["Electrical &", "plumbing works"],
    intro:
      "Electrical and plumbing systems planned around your needs and interior layout. Coordinate design, materials and installation for convenient use, inspection and maintenance.",
    explore: "Explore the work",
    stylesLabel: "Construction scope",
    stylesTitle: "Coordinated systems for every room",
    stylesIntro:
      "Plan cables, pipes and equipment locations early so the work comes together smoothly and limits changes during finishing.",
    styleLabel: "Work category",
    styles: [
      {
        title: "Electrical systems and equipment",
        description:
          "Plan cable routes, sockets, switches and equipment around the agreed layout. Select suitable wiring, conduits, distribution boards and fittings, and check the system before handover.",
      },
      {
        title: "Water supply and drainage",
        description:
          "Survey points of use, plan water and drainage pipes and connect kitchen and bathroom fixtures. Pay attention to joints, inspection access and coordination with the interior work.",
      },
    ],
    notesTitle: "4 points to plan at the design stage",
    notes: [
      {
        title: "Cable and pipe routes",
        description:
          "Agree routes, service boxes and protection to suit the property before applying finishes.",
      },
      {
        title: "Cables and pipes",
        description:
          "Choose sizes and materials for the electrical load, water requirements and technical design.",
      },
      {
        title: "Equipment positions",
        description:
          "Consider lighting, air conditioning, refrigerators, washing machines and sinks early when locating supplies.",
      },
      {
        title: "Protection and testing",
        description:
          "Select suitable protective and residual-current devices and check the system against the technical plan before handover.",
      },
    ],
    pricingLabel: "Indicative pricing",
    pricingTitle: "Construction cost by floor area",
    pricingIntro:
      "The price depends on quantities, complexity and the scope of materials and equipment. A project quote is agreed after a survey and scope review.",
    unit: "VND/m²",
    pricingItems: [
      "Concealed floor and wall cable routes as designed",
      "Flush boxes, distribution boards and circuit breakers",
      "Electrical and lighting installation, excluding chandeliers",
      "Flexible and rigid cable conduits",
      "Cable pulling, connections and electrical points",
      "Washbasin, toilet and shower installation",
      "Bathroom water supply and drainage pipes",
      "Kitchen water and equipment connections",
    ],
    ctaIntro:
      "Free advice on electrical and plumbing works, with a plan suited to your schedule and budget.",
  },
  ja: {
    ...shellConstructionCopy.ja,
    tipsTitle: "電気・給排水工事のパートナーに",
    heroParts: ["電気・", "給排水工事"],
    intro:
      "使い方と家具配置に合わせて電気・給排水を計画。設計、素材、施工を連携し、使用や点検、保守のしやすさを考えます。",
    explore: "施工内容を見る",
    stylesLabel: "施工内容",
    stylesTitle: "各空間に調和する設備計画",
    stylesIntro:
      "配線、配管、設備位置を早い段階で計画し、施工の連携を整え、仕上げ時の変更を抑えます。",
    styleLabel: "工事項目",
    styles: [
      {
        title: "電気配線と設備",
        description:
          "合意した配置に合わせて電線、コンセント、スイッチ、設備を計画。適切な配線、保護管、分電盤、部材を選び、引き渡し前に確認します。",
      },
      {
        title: "給水・排水設備",
        description:
          "使用箇所を調査して配管を計画し、キッチンや衛生器具を接続。接合部、点検のしやすさ、内装との連携を重視します。",
      },
    ],
    notesTitle: "設計時に考える4つのポイント",
    notes: [
      {
        title: "配線と配管の経路",
        description:
          "仕上げ前に、建物の状況に合う経路、設備ボックス、保護方法を確認します。",
      },
      {
        title: "電線と配管選び",
        description:
          "電力負荷、給排水の需要、技術設計に合う寸法と素材を選びます。",
      },
      {
        title: "設備の位置",
        description:
          "照明、空調、冷蔵庫、洗濯機、水回りを早めに検討し、供給箇所を整えます。",
      },
      {
        title: "保護と試験",
        description:
          "適切な保護・漏電保護装置を選び、引き渡し前に技術計画に沿って確認します。",
      },
    ],
    pricingLabel: "参考価格",
    pricingTitle: "面積に応じた施工費",
    pricingIntro:
      "費用は数量、複雑さ、素材・設備の範囲で変わります。現地調査と項目確認後に見積もりを合意します。",
    unit: "VND/m²",
    pricingItems: [
      "設計に沿った床・壁内配線",
      "埋込ボックス、分電盤、遮断器の設置",
      "電気・照明設備の設置（シャンデリアを除く）",
      "可とう・硬質保護管の設置",
      "配線、接続、電源箇所の仕上げ",
      "洗面台・便器・シャワーの設置",
      "水回りの給排水管",
      "キッチンの給水・設備接続",
    ],
    ctaIntro:
      "電気・給排水工事について、工期とご予算に合う計画を無料でご相談いただけます。",
  },
  ko: {
    ...shellConstructionCopy.ko,
    tipsTitle: "전기·급배수 시공 파트너",
    heroParts: ["전기·", "급배수 시공"],
    intro:
      "사용 목적과 인테리어 배치에 맞춰 전기·급배수 시스템을 계획합니다. 설계, 자재, 설치를 조율해 사용과 점검, 유지관리를 고려합니다.",
    explore: "시공 항목 살펴보기",
    stylesLabel: "시공 범위",
    stylesTitle: "모든 공간을 위한 일관된 설비",
    stylesIntro:
      "배선, 배관, 설비 위치를 초기에 계획해 공정을 조율하고 마감 단계의 변경을 줄입니다.",
    styleLabel: "시공 항목",
    styles: [
      {
        title: "전기 시스템과 설비",
        description:
          "합의한 배치에 맞춰 배선, 콘센트, 스위치, 설비를 계획합니다. 적합한 전선, 보호관, 분전반, 부속품을 선택하고 인도 전에 점검합니다.",
      },
      {
        title: "급수와 배수 시스템",
        description:
          "사용 지점을 조사하고 배관을 계획해 주방·위생 설비를 연결합니다. 이음부, 점검 접근성, 인테리어 공정과의 조율을 중시합니다.",
      },
    ],
    notesTitle: "설계 단계에서 고려할 네 가지",
    notes: [
      {
        title: "배선과 배관 경로",
        description:
          "마감 전에 건물 상태에 맞는 경로, 설비함, 보호 방법을 정합니다.",
      },
      {
        title: "전선과 배관 선택",
        description:
          "전기 부하, 급배수 수요, 기술 설계에 맞는 규격과 자재를 선택합니다.",
      },
      {
        title: "설비 위치",
        description:
          "조명, 에어컨, 냉장고, 세탁기, 싱크대 위치를 일찍 고려해 공급 지점을 배치합니다.",
      },
      {
        title: "보호 장치와 점검",
        description:
          "적합한 보호·누전 보호 장치를 선택하고 인도 전 기술 계획에 따라 점검합니다.",
      },
    ],
    pricingLabel: "참고 견적",
    pricingTitle: "면적 기준 시공 비용",
    pricingIntro:
      "비용은 물량, 복잡성, 자재와 설비의 범위에 따라 달라집니다. 현장 조사와 항목 확인 후 견적을 합의합니다.",
    unit: "VND/m²",
    pricingItems: [
      "설계에 따른 바닥·벽 매립 배선",
      "매립 박스, 분전반, 차단기 설치",
      "전기·조명 설비 설치, 샹들리에 제외",
      "유연·경질 배선 보호관 설치",
      "전선 인입, 연결, 전기 지점 마감",
      "세면대, 변기, 샤워 설비 설치",
      "욕실 급배수관 설치",
      "주방 급수와 설비 연결",
    ],
    ctaIntro:
      "일정과 예산에 맞는 전기·급배수 시공 방안을 무료로 상담해 드립니다.",
  },
  sv: {
    ...shellConstructionCopy.sv,
    tipsTitle: "En partner för el och VVS",
    heroParts: ["El- och", "VVS-arbeten"],
    intro:
      "El och VVS planeras efter dina behov och inredningens utformning. Samordna design, material och montage för enkel användning, kontroll och service.",
    explore: "Utforska arbetena",
    stylesLabel: "Arbetets omfattning",
    stylesTitle: "Samordnade installationer i varje rum",
    stylesIntro:
      "Planera kablar, rör och utrustning tidigt så att arbetena flyter på och ändringar i slutskedet minskar.",
    styleLabel: "Arbetsmoment",
    styles: [
      {
        title: "Elsystem och utrustning",
        description:
          "Planera kabelvägar, uttag, brytare och utrustning efter överenskommen layout. Välj kablar, skyddsrör, elcentraler och tillbehör samt kontrollera systemet före överlämning.",
      },
      {
        title: "Vattenförsörjning och avlopp",
        description:
          "Undersök användningspunkter, planera vatten- och avloppsrör och anslut köks- och badrumsutrustning. Beakta fogar, inspektionsåtkomst och övrig inredning.",
      },
    ],
    notesTitle: "4 punkter att planera från början",
    notes: [
      {
        title: "Kabel- och rörvägar",
        description:
          "Bestäm dragning, installationsboxar och skydd efter fastighetens förutsättningar innan ytskikten färdigställs.",
      },
      {
        title: "Kablar och rör",
        description:
          "Välj dimensioner och material efter belastning, vattenbehov och teknisk projektering.",
      },
      {
        title: "Utrustningens placering",
        description:
          "Planera ljus, luftkonditionering, kylskåp, tvättmaskin och diskplatser tidigt.",
      },
      {
        title: "Skydd och kontroll",
        description:
          "Välj lämpliga skydds- och jordfelsanordningar och kontrollera installationen enligt planen före överlämning.",
      },
    ],
    pricingLabel: "Vägledande pris",
    pricingTitle: "Kostnad efter golvyta",
    pricingIntro:
      "Priset beror på mängd, komplexitet och omfattningen av material och utrustning. Offert fastställs efter platsbesök och genomgång.",
    unit: "VND/m²",
    pricingItems: [
      "Dold kabeldragning i golv och vägg enligt plan",
      "Infällda dosor, elcentraler och brytare",
      "El och belysning, exklusive ljuskronor",
      "Flexibla och styva kabelrör",
      "Kabeldragning, anslutningar och elpunkter",
      "Handfat, toalett och dusch",
      "Vatten- och avloppsrör i badrum",
      "Vatten- och utrustningsanslutningar i kök",
    ],
    ctaIntro:
      "Kostnadsfri rådgivning om el och VVS efter din tidsplan och budget.",
  },
  fr: {
    ...shellConstructionCopy.fr,
    tipsTitle: "Votre partenaire en électricité et plomberie",
    heroParts: ["Électricité et", "plomberie"],
    intro:
      "Des réseaux prévus selon vos usages et votre intérieur. Nous coordonnons conception, matériaux et pose pour faciliter utilisation, inspection et entretien.",
    explore: "Découvrir les travaux",
    stylesLabel: "Prestations",
    stylesTitle: "Des réseaux coordonnés dans chaque espace",
    stylesIntro:
      "Prévoir tôt câbles, canalisations et équipements permet de coordonner les étapes et de limiter les changements lors des finitions.",
    styleLabel: "Travaux",
    styles: [
      {
        title: "Électricité et équipements",
        description:
          "Les câbles, prises, interrupteurs et appareils suivent l’agencement convenu. Câblage, gaines, tableaux et accessoires sont choisis puis contrôlés avant livraison.",
      },
      {
        title: "Alimentation en eau et évacuation",
        description:
          "Nous examinons les points d’usage, planifions les conduites et raccordons les équipements de cuisine et sanitaires. Les jonctions, accès de contrôle et finitions sont coordonnés.",
      },
    ],
    notesTitle: "4 points à prévoir dès la conception",
    notes: [
      {
        title: "Tracé des câbles et tuyaux",
        description:
          "Définir les parcours, boîtiers techniques et protections selon l’existant avant les finitions.",
      },
      {
        title: "Choix des câbles et conduites",
        description:
          "Choisir dimensions et matériaux selon les charges, besoins en eau et études techniques.",
      },
      {
        title: "Position des équipements",
        description:
          "Prévoir tôt éclairage, climatisation, réfrigérateur, lave-linge et points d’eau.",
      },
      {
        title: "Protection et contrôles",
        description:
          "Choisir les protections adaptées, notamment différentielles, et contrôler selon le plan technique avant livraison.",
      },
    ],
    pricingLabel: "Prix indicatif",
    pricingTitle: "Un coût selon la surface",
    pricingIntro:
      "Le prix varie selon les quantités, la complexité et le périmètre des matériaux et équipements. Le devis est convenu après visite et définition des travaux.",
    unit: "VND/m²",
    pricingItems: [
      "Câblage encastré au sol et aux murs selon le projet",
      "Boîtiers, tableaux et disjoncteurs",
      "Pose électrique et éclairage, hors lustres",
      "Gaines souples et rigides",
      "Tirage de câbles, raccordements et points électriques",
      "Pose de lavabo, toilettes et douche",
      "Alimentation et évacuation de salle de bains",
      "Raccordements d’eau et équipements de cuisine",
    ],
    ctaIntro:
      "Conseils gratuits sur l’électricité et la plomberie, selon votre calendrier et votre budget.",
  },
  ru: {
    ...shellConstructionCopy.ru,
    tipsTitle: "Ваш партнёр по электрике и сантехнике",
    heroParts: ["Электрика и", "сантехника"],
    intro:
      "Инженерные системы под ваши задачи и планировку. Координируем проектирование, материалы и монтаж для удобного использования, проверки и обслуживания.",
    explore: "Посмотреть работы",
    stylesLabel: "Состав работ",
    stylesTitle: "Согласованные системы в каждом помещении",
    stylesIntro:
      "Планируйте кабели, трубы и оборудование заранее, чтобы работы шли согласованно и требовали меньше изменений при отделке.",
    styleLabel: "Вид работ",
    styles: [
      {
        title: "Электросистемы и оборудование",
        description:
          "Трассы, розетки, выключатели и оборудование планируются по согласованной схеме. Подбираем проводку, защитные трубы, щиты и комплектующие, проверяем перед сдачей.",
      },
      {
        title: "Водоснабжение и канализация",
        description:
          "Обследуем точки использования, планируем трубопроводы и подключаем кухонные и сантехнические приборы. Учитываем соединения, доступ для проверки и интерьер.",
      },
    ],
    notesTitle: "4 пункта для стадии проекта",
    notes: [
      {
        title: "Трассы кабелей и труб",
        description:
          "Определите маршруты, технические коробки и защиту под условия объекта до отделки.",
      },
      {
        title: "Кабели и трубы",
        description:
          "Размеры и материалы выбираются под нагрузку, потребности водоснабжения и технический проект.",
      },
      {
        title: "Место оборудования",
        description:
          "Заранее учитывайте освещение, кондиционеры, холодильник, стиральную машину и мойки.",
      },
      {
        title: "Защита и проверка",
        description:
          "Подберите защитные устройства, включая защиту от токов утечки, и проверьте систему по проекту до сдачи.",
      },
    ],
    pricingLabel: "Ориентировочная цена",
    pricingTitle: "Стоимость по площади",
    pricingIntro:
      "Цена зависит от объёмов, сложности и состава материалов и оборудования. Смета согласуется после обследования и определения работ.",
    unit: "VND/м²",
    pricingItems: [
      "Скрытые кабельные трассы в стенах и полу по проекту",
      "Подрозетники, щиты и автоматические выключатели",
      "Монтаж электрики и освещения, кроме люстр",
      "Гибкие и жёсткие кабельные трубы",
      "Протяжка кабеля, соединения и электроточки",
      "Монтаж раковин, унитазов и душей",
      "Водоснабжение и канализация санузлов",
      "Подключение воды и оборудования кухни",
    ],
    ctaIntro:
      "Бесплатная консультация по электрике и сантехнике с учётом сроков и бюджета.",
  },
  es: {
    ...shellConstructionCopy.es,
    tipsTitle: "Tu equipo de electricidad y fontanería",
    heroParts: ["Electricidad y", "fontanería"],
    intro:
      "Sistemas previstos según tus necesidades y la distribución interior. Coordinamos diseño, materiales y montaje para facilitar el uso, la inspección y el mantenimiento.",
    explore: "Explorar los trabajos",
    stylesLabel: "Alcance de los trabajos",
    stylesTitle: "Instalaciones coordinadas para cada estancia",
    stylesIntro:
      "Planificar cables, tuberías y equipos desde el inicio coordina las fases y limita los cambios durante los acabados.",
    styleLabel: "Trabajo",
    styles: [
      {
        title: "Sistema eléctrico y equipos",
        description:
          "Planificamos rutas, enchufes, interruptores y equipos según la distribución acordada. Elegimos cables, tubos, cuadros y accesorios adecuados y revisamos antes de entregar.",
      },
      {
        title: "Suministro de agua y desagües",
        description:
          "Revisamos puntos de uso, planificamos tuberías y conectamos equipos de cocina y baño. Cuidamos juntas, accesos de inspección y coordinación con el interior.",
      },
    ],
    notesTitle: "4 puntos que prever desde el diseño",
    notes: [
      {
        title: "Recorridos de cables y tubos",
        description:
          "Define recorridos, cajas técnicas y protecciones según el inmueble antes de los acabados.",
      },
      {
        title: "Elección de cables y tubos",
        description:
          "Escoge medidas y materiales según las cargas, las necesidades de agua y el diseño técnico.",
      },
      {
        title: "Posición de los equipos",
        description:
          "Prever iluminación, aire acondicionado, frigorífico, lavadora y fregaderos desde el principio.",
      },
      {
        title: "Protección y revisión",
        description:
          "Elige protecciones adecuadas, incluidas las diferenciales, y revisa según el plan técnico antes de entregar.",
      },
    ],
    pricingLabel: "Precio orientativo",
    pricingTitle: "Coste según la superficie",
    pricingIntro:
      "El precio depende de cantidades, complejidad y alcance de materiales y equipos. El presupuesto se acuerda tras la visita y la definición de trabajos.",
    unit: "VND/m²",
    pricingItems: [
      "Cableado oculto en suelos y paredes según diseño",
      "Cajas empotradas, cuadros e interruptores automáticos",
      "Montaje eléctrico e iluminación, sin lámparas de araña",
      "Tubos flexibles y rígidos para cables",
      "Tendido, conexiones y puntos eléctricos",
      "Instalación de lavabo, inodoro y ducha",
      "Suministro y desagües de baño",
      "Conexiones de agua y equipos de cocina",
    ],
    ctaIntro:
      "Asesoramiento gratuito sobre electricidad y fontanería según tus plazos y presupuesto.",
  },
  zh: {
    ...shellConstructionCopy.zh,
    tipsTitle: "值得信赖的水电施工团队",
    heroParts: ["电路与", "给排水施工"],
    intro:
      "根据日常需求与室内布局规划水电系统。统筹设计、材料和安装，方便使用、检查与维护。",
    explore: "探索施工项目",
    stylesLabel: "施工项目",
    stylesTitle: "为各空间统筹水电系统",
    stylesIntro:
      "提前规划电线、管道与设备位置，协调施工环节，减少饰面阶段的改动。",
    styleLabel: "项目",
    styles: [
      {
        title: "电路系统与设备",
        description:
          "根据约定布局规划线路、插座、开关和设备。选择合适的电线、保护管、配电箱与配件，并在交付前检查。",
      },
      {
        title: "给水与排水系统",
        description:
          "勘察使用位置，规划给排水管道，连接厨房和卫浴设备。关注接头、检修通道及与室内工程的配合。",
      },
    ],
    notesTitle: "设计阶段需要考虑的4点",
    notes: [
      {
        title: "线路与管道路径",
        description: "饰面施工前，根据建筑现状确定路径、技术箱位置及保护方式。",
      },
      {
        title: "电线与管材选择",
        description: "根据电力负荷、给排水需求与技术设计选择尺寸和材料。",
      },
      {
        title: "设备安装位置",
        description:
          "提前考虑照明、空调、冰箱、洗衣机与水槽，合理安排供电供水。",
      },
      {
        title: "保护设备与检查",
        description: "选择合适的保护及漏电保护装置，交付前按技术方案检查系统。",
      },
    ],
    pricingLabel: "参考报价",
    pricingTitle: "按面积估算施工费用",
    pricingIntro:
      "价格取决于工程量、复杂程度以及材料和设备范围。现场勘察并明确项目后协商具体报价。",
    unit: "VND/平方米",
    pricingItems: [
      "按设计敷设地面、墙内线路",
      "安装暗盒、配电箱与断路器",
      "电气与照明安装，不含吊灯",
      "安装软、硬穿线管",
      "穿线、接线及电气点位收尾",
      "安装洗手盆、马桶与淋浴设备",
      "安装卫浴给排水管道",
      "连接厨房水路与设备",
    ],
    ctaIntro: "免费咨询电路与给排水施工，提供符合工期与预算的方案。",
  },
};
