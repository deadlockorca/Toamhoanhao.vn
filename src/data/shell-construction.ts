import {
  townhouseConstructionCopy,
  type TownhouseConstructionCopy,
} from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
export type ShellConstructionCopy = TownhouseConstructionCopy & {
  servicesLabel: string;
  electricalLabel: string;
  electricalRules: string[];
};
export const shellConstructionCopy: Record<SiteLocale, ShellConstructionCopy> =
  {
    vi: {
      ...townhouseConstructionCopy.vi,
      heroParts: ["Thi công", "phần thô"],
      intro:
        "Hoàn thiện nền tảng cho không gian sống: hệ thống điện nước, trần, tường và sàn được thi công đồng bộ, phù hợp công năng và ngân sách.",
      explore: "Khám phá hạng mục",
      stylesLabel: "Hạng mục thi công",
      stylesTitle: "5 hạng mục tạo nền tảng cho nội thất",
      stylesIntro:
        "Từ biệt thự, chung cư đến nhà phố, phần thô cần được xử lý kỹ lưỡng để các bước hoàn thiện phía sau diễn ra đồng bộ và hiệu quả.",
      styleLabel: "Hạng mục",
      styles: [
        {
          title: "Hệ thống điện an toàn, tiện dụng",
          description:
            "Bố trí đường điện theo nhu cầu sử dụng và mặt bằng nội thất. Dây dẫn, ống bảo vệ và thiết bị bảo vệ được lựa chọn phù hợp, giúp hệ thống vận hành ổn định và thuận tiện bảo trì.",
        },
        {
          title: "Hệ thống cấp thoát nước hợp lý",
          description:
            "Tính toán vị trí đường ống, áp lực và lưu lượng phù hợp với công trình. Phối hợp hệ thống cấp thoát nước với các không gian chức năng để thuận tiện sử dụng và kiểm tra.",
        },
        {
          title: "Trần thạch cao gọn đẹp, hài hòa",
          description:
            "Lựa chọn hệ khung, tấm trần và phụ kiện phù hợp với từng không gian. Trần chìm, trần nổi hoặc kết hợp được bố trí đồng bộ với chiếu sáng và hệ thống kỹ thuật.",
        },
        {
          title: "Sơn bả tường, hoàn thiện bề mặt",
          description:
            "Xử lý bề mặt và thi công sơn bả theo quy trình phù hợp với nền tường. Phối màu hài hòa để làm nổi bật nội thất và tạo diện mạo thống nhất cho không gian.",
        },
        {
          title: "Ốp lát và sàn nhà phù hợp công năng",
          description:
            "Lựa chọn gỗ, gạch và vật liệu hoàn thiện theo đặc điểm sử dụng. Chú trọng bề mặt, mối nối và sự chuyển tiếp giữa các khu vực để tạo tổng thể bền đẹp, dễ vệ sinh.",
        },
      ],
      servicesLabel: "Phạm vi thi công",
      electricalLabel: "Lưu ý về hệ thống điện",
      electricalRules: [
        "Dây dẫn có lớp cách điện và tiết diện phù hợp",
        "Đường dây được luồn trong ống bảo vệ",
        "Bố trí thiết bị bảo vệ phù hợp cho hệ thống",
        "Công tắc, cầu dao ở vị trí thuận tiện sử dụng",
        "Thiết bị tại khu vực ẩm ướt cần giải pháp bảo vệ phù hợp",
        "Nối đất và kiểm tra hệ thống trước khi bàn giao",
      ],
      tipsLabel: "Ưu điểm của chúng tôi",
      tipsTitle: "Thi công phần thô hiệu quả, tiết kiệm",
      tipsIntro:
        "Phối hợp thiết kế, vật liệu và đội ngũ thi công để chủ động tiến độ, kiểm soát chi phí và chất lượng ngay từ đầu.",
      tips: [
        "Kiến trúc sư và thợ thi công có kinh nghiệm chuyên môn",
        "Phương án phù hợp công năng, tối ưu ngân sách",
        "Đối tác cung cấp vật liệu và thiết bị đáng tin cậy",
        "Dự trù kinh phí sát thực tế để chủ động tài chính",
        "Bảo hành và bảo trì tận tâm, chuyên nghiệp",
      ],
      ideaTitle: "Đồng bộ từ thiết kế đến thi công",
      ideaIntro:
        "Gói Chìa khóa trao tay giúp kết nối ý tưởng thiết kế với từng hạng mục thực tế. Đội ngũ theo sát quá trình triển khai để kiểm soát chất lượng, chi phí và tiến độ.",
      ctaIntro:
        "Miễn phí tư vấn thi công phần thô nội thất, với phương án phù hợp tiến độ và ngân sách.",
    },
    en: {
      ...townhouseConstructionCopy.en,
      heroParts: ["Interior", "preparation"],
      intro:
        "Build the foundation for your interior with coordinated electrical, plumbing, ceiling, wall and floor works suited to your needs and budget.",
      explore: "Explore the work",
      stylesLabel: "Construction scope",
      stylesTitle: "5 essentials behind a finished interior",
      stylesIntro:
        "Whether a villa, apartment or townhouse, carefully prepared base works help the finishing stages come together smoothly.",
      styleLabel: "Work category",
      styles: [
        {
          title: "Practical electrical installations",
          description:
            "Plan electrical routes around everyday needs and the furniture layout. Select suitable wiring, conduits and protective devices for reliable operation and convenient maintenance.",
        },
        {
          title: "Coordinated water supply and drainage",
          description:
            "Plan pipe locations, pressure and flow to suit the building. Coordinate plumbing with each functional area for convenient use and inspection.",
        },
        {
          title: "Neat, coordinated plasterboard ceilings",
          description:
            "Choose framing, boards and accessories for each room. Suspended or exposed-grid ceiling layouts are coordinated with lighting and building services.",
        },
        {
          title: "Wall preparation and painting",
          description:
            "Prepare surfaces and apply fillers and paint using methods suited to the wall substrate. A balanced colour palette supports the furniture and brings the interior together.",
        },
        {
          title: "Flooring and tiling for everyday use",
          description:
            "Choose wood, tiles and finishes for the way each space is used. Careful surfaces, joints and transitions create a durable, attractive and easy-to-clean result.",
        },
      ],
      servicesLabel: "Our scope of work",
      electricalLabel: "Electrical considerations",
      electricalRules: [
        "Insulated wiring with suitable conductor sizes",
        "Wiring routed through protective conduits",
        "Appropriate protective devices for the installation",
        "Accessible positions for switches and isolators",
        "Suitable protection for equipment in damp areas",
        "Earthing and system checks before handover",
      ],
      tipsLabel: "Our strengths",
      tipsTitle: "Efficient work with a considered budget",
      tipsIntro:
        "Coordinate design, materials and installers to manage quality, costs and the schedule from the outset.",
      tips: [
        "Experienced architects and skilled installers",
        "Solutions suited to your needs and budget",
        "Reliable material and equipment suppliers",
        "Realistic estimates for early financial planning",
        "Attentive, professional warranty and maintenance support",
      ],
      ideaTitle: "Consistency from design to construction",
      ideaIntro:
        "Our turnkey service connects design ideas with the work on site. The team follows implementation closely to manage quality, costs and progress.",
      ctaIntro:
        "Free advice on interior preparation works, with a plan suited to your schedule and budget.",
    },
    ja: {
      ...townhouseConstructionCopy.ja,
      heroParts: ["内装の", "下地工事"],
      intro:
        "電気、給排水、天井、壁、床を一体的に施工し、用途とご予算に合う住まいの基盤を整えます。",
      explore: "施工内容を見る",
      stylesLabel: "施工内容",
      stylesTitle: "内装の基盤をつくる5つの工事",
      stylesIntro:
        "ヴィラ、マンション、戸建てのいずれも、丁寧な下地工事が、その後の仕上げを円滑につなぎます。",
      styleLabel: "工事項目",
      styles: [
        {
          title: "使いやすい電気設備",
          description:
            "暮らし方と家具の配置に合わせて配線を計画。適切な電線、保護管、保護装置を選び、安定した使用と点検のしやすさを考えます。",
        },
        {
          title: "合理的な給排水設備",
          description:
            "建物に合わせて配管位置、水圧、流量を計画。各空間との関係を調整し、使用と点検のしやすさに配慮します。",
        },
        {
          title: "調和のとれた石膏ボード天井",
          description:
            "部屋に適した下地、ボード、付属材を選定。天井の構成を照明や設備と合わせて整えます。",
        },
        {
          title: "壁の下地処理と塗装",
          description:
            "壁の状態に合わせた方法で表面を整え、パテと塗装を施工。家具を引き立てる配色で、空間に統一感を生みます。",
        },
        {
          title: "用途に合う床材とタイル",
          description:
            "使い方に合わせて木材、タイル、仕上げ材を選びます。表面、継ぎ目、空間のつながりを丁寧に整えます。",
        },
      ],
      servicesLabel: "対応工事",
      electricalLabel: "電気設備の確認事項",
      electricalRules: [
        "適切な太さの絶縁電線を使用",
        "配線を保護管に通す",
        "設備に適した保護装置を設置",
        "スイッチや開閉器を使いやすい位置に配置",
        "湿気のある場所の設備に適切な保護を実施",
        "お引き渡し前に接地と設備を確認",
      ],
      tipsLabel: "私たちの強み",
      tipsTitle: "効率と予算に配慮した下地工事",
      tipsIntro:
        "設計、素材、施工チームを連携させ、最初から品質、費用、工期を管理します。",
      tips: [
        "経験豊富な建築士と熟練スタッフ",
        "用途と予算に合う施工計画",
        "信頼できる素材・設備の取引先",
        "資金計画に役立つ現実的な見積もり",
        "丁寧な保証とメンテナンス対応",
      ],
      ideaTitle: "設計から施工まで一貫して",
      ideaIntro:
        "一括サービスで設計のアイデアを現場につなぎます。施工を見守り、品質、費用、進捗を管理します。",
      ctaIntro:
        "内装の下地工事について、工期とご予算に合う計画を無料でご相談いただけます。",
    },
    ko: {
      ...townhouseConstructionCopy.ko,
      heroParts: ["인테리어", "기초 시공"],
      intro:
        "전기, 급배수, 천장, 벽, 바닥을 조화롭게 시공해 용도와 예산에 맞는 생활 공간의 기반을 만듭니다.",
      explore: "시공 항목 살펴보기",
      stylesLabel: "시공 범위",
      stylesTitle: "인테리어의 기반이 되는 다섯 가지 공사",
      stylesIntro:
        "빌라, 아파트, 단독주택 모두 세심한 기초 작업이 이후 마감 공사를 원활하게 연결합니다.",
      styleLabel: "시공 항목",
      styles: [
        {
          title: "편리한 전기 설비",
          description:
            "생활 방식과 가구 배치에 맞춰 배선을 계획합니다. 적합한 전선, 보호관, 보호 장치를 선택해 안정적인 사용과 유지관리를 고려합니다.",
        },
        {
          title: "합리적인 급배수 설비",
          description:
            "건물에 맞춰 배관 위치, 압력, 유량을 계획합니다. 각 공간과 배관을 조율해 사용과 점검 편의성을 높입니다.",
        },
        {
          title: "조화로운 석고보드 천장",
          description:
            "공간에 맞는 프레임, 보드, 부속재를 고릅니다. 천장 구성을 조명 및 기술 설비와 조율합니다.",
        },
        {
          title: "벽면 정리와 도장",
          description:
            "벽 바탕에 적합한 방법으로 표면을 처리하고 퍼티와 도장을 시공합니다. 조화로운 색상으로 가구를 돋보이게 하고 통일감을 만듭니다.",
        },
        {
          title: "용도에 맞는 바닥과 타일",
          description:
            "공간의 쓰임에 맞춰 목재, 타일, 마감재를 선택합니다. 표면, 이음부, 공간 간 연결을 세심하게 마무리합니다.",
        },
      ],
      servicesLabel: "제공하는 시공",
      electricalLabel: "전기 설비 확인 사항",
      electricalRules: [
        "적절한 굵기의 절연 전선 사용",
        "전선을 보호관 안으로 배선",
        "설비에 맞는 보호 장치 설치",
        "스위치와 차단기를 편리한 위치에 배치",
        "습한 구역의 설비에 적절한 보호 적용",
        "인도 전 접지와 시스템 점검",
      ],
      tipsLabel: "우리의 강점",
      tipsTitle: "효율적이고 합리적인 기초 시공",
      tipsIntro:
        "설계, 자재, 시공 팀을 조율해 초기부터 품질, 비용, 일정을 관리합니다.",
      tips: [
        "경험 많은 건축가와 숙련된 시공자",
        "용도와 예산에 맞는 시공 방안",
        "신뢰할 수 있는 자재 및 설비 공급사",
        "자금 계획을 위한 현실적인 견적",
        "세심하고 전문적인 보증 및 유지보수",
      ],
      ideaTitle: "설계부터 시공까지 일관되게",
      ideaIntro:
        "통합 서비스로 설계 아이디어를 실제 시공에 연결합니다. 팀이 현장 진행을 세심하게 살피며 품질, 비용, 일정을 관리합니다.",
      ctaIntro:
        "인테리어 기초 공사와 일정, 예산에 맞는 방안을 무료로 상담해 드립니다.",
    },
    sv: {
      ...townhouseConstructionCopy.sv,
      heroParts: ["Förberedande", "inredningsarbeten"],
      intro:
        "Skapa en grund för ditt hem med samordnade el-, VVS-, tak-, vägg- och golvarbeten efter dina behov och din budget.",
      explore: "Utforska arbetena",
      stylesLabel: "Arbetets omfattning",
      stylesTitle: "5 grunder för en färdig interiör",
      stylesIntro:
        "Noggranna förberedelser i villor, lägenheter och radhus hjälper de följande momenten att löpa smidigt.",
      styleLabel: "Arbetsmoment",
      styles: [
        {
          title: "Praktiska elinstallationer",
          description:
            "Planera ledningar efter vardagens behov och möbleringen. Välj lämpliga kablar, skyddsrör och skyddsanordningar för tillförlitlig drift och enkelt underhåll.",
        },
        {
          title: "Samordnad vattenförsörjning och avlopp",
          description:
            "Planera rördragning, tryck och flöde efter byggnaden. Samordna VVS med rummens funktioner för enkel användning och kontroll.",
        },
        {
          title: "Välplanerade gipstak",
          description:
            "Välj stomme, skivor och tillbehör för varje rum. Takets utformning samordnas med belysning och tekniska installationer.",
        },
        {
          title: "Väggförberedelse och målning",
          description:
            "Förbered ytor och applicera spackel och färg med metoder som passar underlaget. En harmonisk färgskala lyfter möblerna och skapar en helhet.",
        },
        {
          title: "Golv och plattor efter användning",
          description:
            "Välj trä, plattor och ytskikt efter rummets funktion. Omsorg om ytor, fogar och övergångar ger ett hållbart och lättstädat resultat.",
        },
      ],
      servicesLabel: "Våra arbeten",
      electricalLabel: "Att tänka på för elsystemet",
      electricalRules: [
        "Isolerade ledningar med lämplig dimension",
        "Ledningar dragna i skyddsrör",
        "Lämpliga skyddsanordningar för installationen",
        "Tillgängliga placeringar av brytare",
        "Lämpligt skydd för utrustning i fuktiga utrymmen",
        "Jordning och systemkontroll före överlämning",
      ],
      tipsLabel: "Våra styrkor",
      tipsTitle: "Effektivt arbete med genomtänkt budget",
      tipsIntro:
        "Samordna design, material och montörer för att styra kvalitet, kostnader och tidsplan från början.",
      tips: [
        "Erfarna arkitekter och skickliga montörer",
        "Lösningar som passar behov och budget",
        "Pålitliga material- och utrustningsleverantörer",
        "Realistiska uppskattningar för tidig ekonomisk planering",
        "Omtänksam och professionell garanti- och underhållsservice",
      ],
      ideaTitle: "Enhetlighet från design till utförande",
      ideaIntro:
        "Vår helhetslösning kopplar idéerna till arbetet på plats. Teamet följer genomförandet för att kontrollera kvalitet, kostnader och framsteg.",
      ctaIntro:
        "Kostnadsfri rådgivning om förberedande inredningsarbete anpassat till tidsplan och budget.",
    },
    fr: {
      ...townhouseConstructionCopy.fr,
      heroParts: ["Travaux", "préparatoires"],
      intro:
        "Préparez votre intérieur avec des travaux coordonnés d’électricité, de plomberie, de plafonds, de murs et de sols, adaptés à vos besoins et à votre budget.",
      explore: "Découvrir les travaux",
      stylesLabel: "Prestations",
      stylesTitle: "5 bases pour un intérieur abouti",
      stylesIntro:
        "Dans une villa, un appartement ou une maison de ville, une préparation soignée facilite les étapes de finition.",
      styleLabel: "Travaux",
      styles: [
        {
          title: "Des installations électriques pratiques",
          description:
            "Les réseaux sont prévus selon vos usages et le mobilier. Câbles, gaines et protections sont choisis pour un fonctionnement fiable et un entretien accessible.",
        },
        {
          title: "Une plomberie bien coordonnée",
          description:
            "Le tracé des canalisations, la pression et le débit sont étudiés pour le bâtiment. Les réseaux sont coordonnés avec chaque espace pour faciliter utilisation et contrôle.",
        },
        {
          title: "Des plafonds en plaques de plâtre harmonieux",
          description:
            "Ossatures, plaques et accessoires sont adaptés à chaque pièce. L’agencement du plafond est coordonné avec l’éclairage et les réseaux techniques.",
        },
        {
          title: "Préparation et peinture des murs",
          description:
            "Les surfaces sont préparées, enduites et peintes avec des méthodes adaptées au support. Une palette équilibrée met en valeur le mobilier et unifie l’espace.",
        },
        {
          title: "Des sols adaptés aux usages",
          description:
            "Bois, carrelages et revêtements sont choisis selon la fonction des espaces. Le soin des surfaces, joints et transitions donne un résultat durable et facile à entretenir.",
        },
      ],
      servicesLabel: "Notre périmètre d’intervention",
      electricalLabel: "Points de vigilance électriques",
      electricalRules: [
        "Des conducteurs isolés de section adaptée",
        "Des câbles sous gaines de protection",
        "Des dispositifs de protection adaptés",
        "Des interrupteurs et organes de coupure accessibles",
        "Une protection adaptée dans les zones humides",
        "Une mise à la terre et des contrôles avant livraison",
      ],
      tipsLabel: "Nos atouts",
      tipsTitle: "Des travaux efficaces et un budget réfléchi",
      tipsIntro:
        "Nous coordonnons conception, matériaux et artisans pour suivre qualité, coûts et calendrier dès le départ.",
      tips: [
        "Des architectes expérimentés et des artisans qualifiés",
        "Des solutions adaptées aux usages et au budget",
        "Des fournisseurs de matériaux et d’équipements fiables",
        "Des estimations réalistes pour anticiper le financement",
        "Un accompagnement attentif pour la garantie et l’entretien",
      ],
      ideaTitle: "Une cohérence du projet au chantier",
      ideaIntro:
        "Notre offre clé en main relie les idées de conception aux travaux. L’équipe suit la réalisation pour maîtriser qualité, coûts et avancement.",
      ctaIntro:
        "Conseils gratuits sur les travaux préparatoires intérieurs, selon votre calendrier et votre budget.",
    },
    ru: {
      ...townhouseConstructionCopy.ru,
      heroParts: ["Подготовка", "интерьера"],
      intro:
        "Создаём основу интерьера: согласованные работы по электрике, водоснабжению, потолкам, стенам и полам с учётом ваших задач и бюджета.",
      explore: "Посмотреть работы",
      stylesLabel: "Состав работ",
      stylesTitle: "5 основ будущего интерьера",
      stylesIntro:
        "Тщательная подготовка виллы, квартиры или таунхауса помогает последующим отделочным работам проходить согласованно.",
      styleLabel: "Вид работ",
      styles: [
        {
          title: "Удобные электрические системы",
          description:
            "Разводка планируется с учётом повседневных задач и расстановки мебели. Подходящие провода, защитные трубы и устройства обеспечивают надёжную работу и удобство обслуживания.",
        },
        {
          title: "Согласованные системы водоснабжения и канализации",
          description:
            "Расположение труб, давление и расход планируются под особенности здания. Системы согласуются с назначением помещений для удобного использования и осмотра.",
        },
        {
          title: "Аккуратные гипсокартонные потолки",
          description:
            "Каркасы, листы и комплектующие выбираются под каждое помещение. Конструкция потолка согласуется с освещением и инженерными системами.",
        },
        {
          title: "Подготовка и покраска стен",
          description:
            "Поверхности готовят, шпаклюют и красят подходящими для основания методами. Согласованная палитра подчёркивает мебель и объединяет интерьер.",
        },
        {
          title: "Напольные покрытия под задачи помещения",
          description:
            "Дерево, плитка и другие покрытия подбираются с учётом использования. Внимание к поверхностям, стыкам и переходам даёт долговечный и удобный в уходе результат.",
        },
      ],
      servicesLabel: "Наши работы",
      electricalLabel: "Проверка электрической системы",
      electricalRules: [
        "Изолированные провода подходящего сечения",
        "Прокладка проводов в защитных трубах",
        "Подходящие защитные устройства",
        "Удобное расположение выключателей и отключающих устройств",
        "Подходящая защита оборудования во влажных зонах",
        "Заземление и проверка систем до сдачи",
      ],
      tipsLabel: "Наши преимущества",
      tipsTitle: "Эффективные работы с продуманным бюджетом",
      tipsIntro:
        "Координируем проектирование, материалы и мастеров, чтобы управлять качеством, расходами и сроками с самого начала.",
      tips: [
        "Опытные архитекторы и квалифицированные мастера",
        "Решения под ваши задачи и бюджет",
        "Надёжные поставщики материалов и оборудования",
        "Реалистичные сметы для финансового планирования",
        "Внимательная гарантийная поддержка и обслуживание",
      ],
      ideaTitle: "Единство от проекта до реализации",
      ideaIntro:
        "Услуга под ключ связывает проектные идеи с работой на объекте. Команда следит за реализацией, качеством, затратами и сроками.",
      ctaIntro:
        "Бесплатная консультация по подготовительным работам с учётом графика и бюджета.",
    },
    es: {
      ...townhouseConstructionCopy.es,
      heroParts: ["Trabajos", "preparatorios"],
      intro:
        "Prepara la base de tu interior con electricidad, fontanería, techos, paredes y suelos coordinados según tus necesidades y presupuesto.",
      explore: "Explorar los trabajos",
      stylesLabel: "Alcance de los trabajos",
      stylesTitle: "5 bases para un interior completo",
      stylesIntro:
        "En villas, apartamentos y casas urbanas, una preparación cuidada facilita las siguientes etapas de acabado.",
      styleLabel: "Trabajo",
      styles: [
        {
          title: "Instalaciones eléctricas prácticas",
          description:
            "Planificamos el cableado según el uso cotidiano y la distribución del mobiliario. Elegimos cables, tubos y protecciones adecuados para un funcionamiento fiable y un mantenimiento cómodo.",
        },
        {
          title: "Agua y desagües coordinados",
          description:
            "Planificamos el recorrido de tuberías, la presión y el caudal según el edificio. Coordinamos la fontanería con cada zona para facilitar el uso y la inspección.",
        },
        {
          title: "Techos de yeso laminado armoniosos",
          description:
            "Elegimos estructuras, placas y accesorios para cada estancia. La disposición del techo se coordina con la iluminación y las instalaciones técnicas.",
        },
        {
          title: "Preparación y pintura de paredes",
          description:
            "Preparamos las superficies y aplicamos masillas y pintura con métodos adecuados al soporte. Una paleta equilibrada realza los muebles y unifica el espacio.",
        },
        {
          title: "Suelos y revestimientos según el uso",
          description:
            "Elegimos madera, baldosas y acabados según la función del espacio. Cuidamos superficies, juntas y transiciones para un resultado duradero y fácil de limpiar.",
        },
      ],
      servicesLabel: "Nuestros trabajos",
      electricalLabel: "Aspectos de la instalación eléctrica",
      electricalRules: [
        "Conductores aislados de sección adecuada",
        "Cableado dentro de tubos de protección",
        "Dispositivos de protección adecuados",
        "Interruptores y dispositivos de corte accesibles",
        "Protección adecuada en zonas húmedas",
        "Puesta a tierra y revisión antes de la entrega",
      ],
      tipsLabel: "Nuestras ventajas",
      tipsTitle: "Eficiencia y un presupuesto cuidado",
      tipsIntro:
        "Coordinamos diseño, materiales e instaladores para gestionar calidad, costes y plazos desde el inicio.",
      tips: [
        "Arquitectos experimentados e instaladores cualificados",
        "Soluciones adaptadas a las necesidades y al presupuesto",
        "Proveedores fiables de materiales y equipos",
        "Estimaciones realistas para planificar la financiación",
        "Atención profesional en garantía y mantenimiento",
      ],
      ideaTitle: "Coherencia desde el diseño hasta la obra",
      ideaIntro:
        "Nuestro servicio llave en mano conecta las ideas con el trabajo en obra. El equipo sigue la ejecución para controlar calidad, costes y avances.",
      ctaIntro:
        "Asesoramiento gratuito sobre trabajos preparatorios interiores según tus plazos y presupuesto.",
    },
    zh: {
      ...townhouseConstructionCopy.zh,
      heroParts: ["室内", "基础施工"],
      intro:
        "统筹电路、给排水、天花、墙面与地面施工，为符合功能和预算的生活空间打好基础。",
      explore: "探索施工项目",
      stylesLabel: "施工项目",
      stylesTitle: "构建室内基础的5个项目",
      stylesIntro:
        "无论别墅、公寓还是联排住宅，细致的基础处理都能让后续装修更加协调、高效。",
      styleLabel: "项目",
      styles: [
        {
          title: "实用的电路系统",
          description:
            "根据日常需求与家具布局规划线路。选择适合的电线、保护管和保护装置，兼顾稳定运行与检修便利。",
        },
        {
          title: "合理的给排水系统",
          description:
            "根据建筑情况规划管道位置、水压与流量。协调各功能区域的给排水，方便使用和检查。",
        },
        {
          title: "整洁协调的石膏板天花",
          description:
            "为不同空间选择适合的龙骨、板材与配件。天花布局与照明、技术设备统筹安排。",
        },
        {
          title: "墙面基层处理与涂装",
          description:
            "根据墙体基层选择合适的方法处理表面、批刮与涂装。协调配色，衬托家具并统一空间视觉。",
        },
        {
          title: "符合功能的地板与铺贴",
          description:
            "根据使用特点选择木材、瓷砖与饰面材料。关注表面、接缝和区域过渡，打造耐用且易清洁的整体效果。",
        },
      ],
      servicesLabel: "我们的施工范围",
      electricalLabel: "电路系统注意事项",
      electricalRules: [
        "使用具有绝缘层且线径合适的导线",
        "线路穿入保护管",
        "配置适合系统的保护装置",
        "开关与断电装置布置在便利位置",
        "潮湿区域设备采取适当保护",
        "交付前完成接地与系统检查",
      ],
      tipsLabel: "我们的优势",
      tipsTitle: "高效施工，合理控制预算",
      tipsIntro: "协调设计、材料与施工团队，从一开始就管理品质、费用与进度。",
      tips: [
        "经验丰富的建筑师与熟练施工人员",
        "适合功能与预算的方案",
        "可靠的材料与设备供应伙伴",
        "切合实际的预算，便于提前规划资金",
        "专业、细致的保修与维护支持",
      ],
      ideaTitle: "从设计到施工，保持协调一致",
      ideaIntro:
        "交钥匙服务连接设计构想与现场施工。团队跟进实施，管理品质、费用与进度。",
      ctaIntro: "免费咨询室内基础施工，提供符合工期与预算的方案。",
    },
  };
