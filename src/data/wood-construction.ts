import {
  townhouseConstructionCopy,
  type TownhouseConstructionCopy,
} from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
export type WoodConstructionCopy = TownhouseConstructionCopy & {
  materialsLabel: string;
  materialsTitle: string;
  materialsIntro: string;
  materials: string[];
  commitmentsLabel: string;
  commitmentsTitle: string;
  commitments: string[];
};
export const woodConstructionCopy: Record<SiteLocale, WoodConstructionCopy> = {
  vi: {
    ...townhouseConstructionCopy.vi,
    heroParts: ["Thi công", "đồ gỗ"],
    intro:
      "Nội thất gỗ được thiết kế và sản xuất theo không gian của bạn. Chăm chút từ vật liệu, gia công đến lắp đặt để tạo nên tổng thể hài hòa và tiện dụng.",
    explore: "Khám phá yêu cầu",
    stylesLabel: "Yêu cầu sản xuất",
    stylesTitle: "4 yếu tố làm nên sản phẩm đồ gỗ hoàn thiện",
    stylesIntro:
      "Mỗi sản phẩm cần được kiểm soát từ nguyên liệu đầu vào đến khi lắp đặt. Sự phối hợp giữa thiết kế và tay nghề giúp ý tưởng trở thành nội thất thực tế.",
    styleLabel: "Yêu cầu",
    styles: [
      {
        title: "Lựa chọn nguyên liệu kỹ lưỡng",
        description:
          "Kiểm tra màu sắc, bề mặt, độ ổn định và khuyết tật của nguyên liệu. Lựa chọn gỗ và tấm phù hợp với công năng, điều kiện sử dụng và yêu cầu thiết kế.",
      },
      {
        title: "Gia công theo yêu cầu kỹ thuật",
        description:
          "Chuẩn bị nguyên liệu và xử lý phù hợp trước khi gia công. Kiểm soát kích thước, mối ghép, bề mặt và lớp phủ để các chi tiết lắp ráp đồng bộ.",
      },
      {
        title: "Kiểm tra sản phẩm hoàn thiện",
        description:
          "Đối chiếu hình dáng, kích thước, màu sắc với thiết kế đã thống nhất. Kiểm tra bề mặt, phụ kiện và khả năng sử dụng trước khi đưa sản phẩm đến công trình.",
      },
      {
        title: "Đóng gói, bảo quản và vận chuyển",
        description:
          "Bảo vệ bề mặt và các góc cạnh, nhận diện từng chi tiết để thuận tiện lắp đặt. Đóng gói và lưu giữ phù hợp nhằm hạn chế trầy xước, va đập trong quá trình vận chuyển.",
      },
    ],
    materialsLabel: "Chất liệu",
    materialsTitle: "Vật liệu phù hợp cho từng không gian",
    materialsIntro:
      "Từ gỗ công nghiệp đến gỗ tự nhiên, lựa chọn được cân nhắc theo màu sắc, bề mặt, công năng và ngân sách của gia chủ.",
    materials: [
      "Veneer",
      "HDF",
      "Melamine",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "Óc chó",
      "Sồi Nga",
      "Xoan đào",
    ],
    tipsLabel: "Ưu thế của chúng tôi",
    tipsTitle: "Sản xuất trực tiếp, phối hợp đồng bộ",
    tipsIntro:
      "Nhà xưởng, đội ngũ thiết kế và thợ gia công cùng phối hợp để kiểm soát từng chi tiết, từ ý tưởng đến hoàn thiện tại công trình.",
    tips: [
      "Nhà xưởng với hệ thống máy móc phục vụ sản xuất",
      "Đội ngũ thiết kế cập nhật phong cách nội thất",
      "Thợ gia công lành nghề, có kinh nghiệm",
      "Nguồn nguyên liệu được lựa chọn theo yêu cầu",
      "Sản xuất trực tiếp, báo giá minh bạch",
      "Bảo hành và bảo trì tận tâm, chuyên nghiệp",
    ],
    commitmentsLabel: "Cam kết dịch vụ",
    commitmentsTitle: "Đồng hành trước và sau bàn giao",
    commitments: [
      "Tư vấn miễn phí về đồ gỗ và phương án nội thất",
      "Tư vấn mẫu mã phù hợp phong cách của công trình",
      "Kiểm tra chất lượng và công năng trước bàn giao",
      "Thống nhất phương án vận chuyển đến công trình",
      "Bảo hành, bảo trì theo thỏa thuận",
      "Báo giá rõ hạng mục, phù hợp ngân sách",
    ],
    ideaTitle: "Đồ gỗ vừa vặn với tổ ấm của bạn",
    ideaIntro:
      "Chia sẻ nhu cầu sử dụng và ý tưởng với đội ngũ. Chúng tôi tư vấn vật liệu, kiểu dáng và cách bố trí để đồ gỗ hòa hợp với toàn bộ không gian.",
    ctaIntro:
      "Miễn phí tư vấn thi công đồ gỗ nội thất, với phương án phù hợp tiến độ và ngân sách.",
  },
  en: {
    ...townhouseConstructionCopy.en,
    heroParts: ["Custom", "wood interiors"],
    intro:
      "Wooden furniture designed and produced for your space. Careful material selection, crafting and installation bring together a practical, harmonious interior.",
    explore: "Explore the requirements",
    stylesLabel: "Production requirements",
    stylesTitle: "4 essentials of well-finished woodwork",
    stylesIntro:
      "Each piece is checked from incoming materials to installation. Design and craftsmanship work together to turn ideas into furniture.",
    styleLabel: "Requirement",
    styles: [
      {
        title: "Careful material selection",
        description:
          "Check colour, surfaces, stability and defects. Choose timber and boards for the function, conditions of use and design requirements.",
      },
      {
        title: "Controlled manufacturing",
        description:
          "Prepare and treat materials as appropriate before machining. Control dimensions, joints, surfaces and coatings so the parts fit together consistently.",
      },
      {
        title: "Finished product checks",
        description:
          "Compare shapes, dimensions and colours with the agreed design. Inspect surfaces, fittings and usability before delivery to the site.",
      },
      {
        title: "Packing, storage and transport",
        description:
          "Protect surfaces and edges and identify parts for installation. Appropriate packing and storage help reduce scratches and impact damage in transit.",
      },
    ],
    materialsLabel: "Materials",
    materialsTitle: "Materials to suit each space",
    materialsIntro:
      "From engineered boards to natural wood, choices consider colour, surface, function and budget.",
    materials: [
      "Veneer",
      "HDF",
      "Melamine",
      "MDF",
      "Lim wood",
      "Đinh hương wood",
      "Sến wood",
      "Walnut",
      "Russian oak",
      "Xoan đào wood",
    ],
    tipsLabel: "Our strengths",
    tipsTitle: "Direct production, coordinated delivery",
    tipsIntro:
      "Our workshops, designers and craftspeople coordinate each detail, from the idea to the final installation.",
    tips: [
      "Workshops equipped for furniture production",
      "Designers who follow interior styles",
      "Experienced, skilled craftspeople",
      "Materials selected to meet project requirements",
      "Direct production and transparent quotations",
      "Attentive, professional warranty and maintenance",
    ],
    commitmentsLabel: "Service commitments",
    commitmentsTitle: "Support before and after handover",
    commitments: [
      "Free advice on woodwork and interior plans",
      "Furniture styles suited to the project",
      "Quality and function checks before handover",
      "An agreed transport plan to the site",
      "Warranty and maintenance as agreed",
      "Clear itemised quotes suited to your budget",
    ],
    ideaTitle: "Woodwork that fits your home",
    ideaIntro:
      "Share your needs and ideas with the team. We advise on materials, shapes and layouts to bring the furniture into harmony with the whole interior.",
    ctaIntro:
      "Free advice on wooden interiors, with a plan suited to your schedule and budget.",
  },
  ja: {
    ...townhouseConstructionCopy.ja,
    heroParts: ["オーダー", "木製家具"],
    intro:
      "空間に合わせて設計・製作する木製家具。素材選び、加工、設置を丁寧につなぎ、調和した使いやすい内装へ。",
    explore: "製作のポイントを見る",
    stylesLabel: "製作の要件",
    stylesTitle: "木製家具を仕上げる4つのポイント",
    stylesIntro:
      "素材の受け入れから設置まで確認。設計と技術を連携させ、アイデアを家具にします。",
    styleLabel: "要件",
    styles: [
      {
        title: "丁寧な素材選び",
        description:
          "色、表面、安定性、欠点を確認。用途、使用環境、デザインに合う木材と板材を選びます。",
      },
      {
        title: "加工の管理",
        description:
          "加工前に適切な準備と処理を実施。寸法、接合、表面、塗装を管理し、各部をそろえます。",
      },
      {
        title: "完成品の確認",
        description:
          "合意した設計と形、寸法、色を照合。搬入前に表面、金物、使いやすさを確認します。",
      },
      {
        title: "梱包・保管・運搬",
        description:
          "表面や角を保護し、設置しやすいよう各部材を識別。適切な梱包・保管で運搬時の傷や衝撃を抑えます。",
      },
    ],
    materialsLabel: "素材",
    materialsTitle: "空間に合う素材を",
    materialsIntro:
      "木質ボードから天然木まで、色、表面、機能、予算を考えて選びます。",
    materials: [
      "突板",
      "HDF",
      "メラミン",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "ウォールナット",
      "ロシア産オーク",
      "Xoan đào",
    ],
    tipsLabel: "私たちの強み",
    tipsTitle: "直接製作と一貫した連携",
    tipsIntro:
      "工房、設計者、職人が、アイデアから現場での設置まで細部を連携させます。",
    tips: [
      "家具製作用の設備を備えた工房",
      "内装スタイルを研究する設計チーム",
      "経験豊富な熟練職人",
      "案件の要件に合わせた素材選定",
      "直接製作と明確なお見積もり",
      "丁寧な保証とメンテナンス",
    ],
    commitmentsLabel: "サービスの約束",
    commitmentsTitle: "お引き渡し前後もサポート",
    commitments: [
      "木製家具と内装の無料相談",
      "空間に合うデザインをご提案",
      "お引き渡し前に品質と機能を確認",
      "現場への搬入方法を事前に合意",
      "合意内容に沿った保証と保守",
      "予算に合う明細のある見積もり",
    ],
    ideaTitle: "住まいにぴったりの木製家具",
    ideaIntro:
      "使い方やアイデアをお聞かせください。素材、形、配置を考え、内装全体に調和させます。",
    ctaIntro:
      "木製家具について、工期とご予算に合う計画を無料でご相談いただけます。",
  },
  ko: {
    ...townhouseConstructionCopy.ko,
    heroParts: ["맞춤", "목가구 시공"],
    intro:
      "공간에 맞춰 설계하고 제작하는 목가구. 자재 선택부터 가공, 설치까지 세심하게 조율해 실용적이고 조화로운 인테리어를 만듭니다.",
    explore: "제작 요건 살펴보기",
    stylesLabel: "제작 요건",
    stylesTitle: "완성도 높은 목가구를 위한 네 가지",
    stylesIntro:
      "자재 입고부터 설치까지 제품을 확인합니다. 설계와 기술을 연결해 아이디어를 가구로 만듭니다.",
    styleLabel: "요건",
    styles: [
      {
        title: "세심한 자재 선택",
        description:
          "색상, 표면, 안정성, 결함을 확인합니다. 용도, 사용 조건, 디자인에 맞는 목재와 판재를 고릅니다.",
      },
      {
        title: "제조 공정 관리",
        description:
          "가공 전 자재를 적절히 준비하고 처리합니다. 치수, 접합, 표면, 도장을 관리해 부품이 일관되게 맞도록 합니다.",
      },
      {
        title: "완제품 점검",
        description:
          "합의한 디자인과 형태, 크기, 색상을 비교합니다. 현장 반입 전 표면, 부속품, 사용성을 점검합니다.",
      },
      {
        title: "포장·보관·운송",
        description:
          "표면과 모서리를 보호하고 설치를 위해 부품을 구분합니다. 적절한 포장과 보관으로 운송 중 흠집과 충격을 줄입니다.",
      },
    ],
    materialsLabel: "자재",
    materialsTitle: "공간에 어울리는 자재",
    materialsIntro:
      "가공 목재부터 원목까지 색상, 표면, 기능, 예산을 고려합니다.",
    materials: [
      "무늬목",
      "HDF",
      "멜라민",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "월넛",
      "러시아산 오크",
      "Xoan đào",
    ],
    tipsLabel: "우리의 강점",
    tipsTitle: "직접 생산과 일관된 조율",
    tipsIntro:
      "공장, 설계자, 기술자가 아이디어부터 현장 설치까지 세부 사항을 함께 조율합니다.",
    tips: [
      "가구 생산 설비를 갖춘 공장",
      "인테리어 스타일을 연구하는 설계 팀",
      "경험 많은 숙련 기술자",
      "프로젝트 요건에 맞춘 자재 선택",
      "직접 생산과 투명한 견적",
      "세심하고 전문적인 보증과 유지보수",
    ],
    commitmentsLabel: "서비스 약속",
    commitmentsTitle: "인도 전후에도 함께합니다",
    commitments: [
      "목가구와 인테리어 무료 상담",
      "프로젝트에 어울리는 디자인 제안",
      "인도 전 품질과 기능 점검",
      "현장 운송 방안 사전 합의",
      "합의에 따른 보증과 유지보수",
      "예산에 맞는 명확한 항목별 견적",
    ],
    ideaTitle: "우리 집에 맞는 목가구",
    ideaIntro:
      "팀과 필요와 아이디어를 나누세요. 자재, 형태, 배치를 제안해 전체 공간과 조화를 이룹니다.",
    ctaIntro: "일정과 예산에 맞는 목가구 시공 방안을 무료로 상담해 드립니다.",
  },
  sv: {
    ...townhouseConstructionCopy.sv,
    heroParts: ["Måttanpassad", "träinredning"],
    intro:
      "Trämöbler utformade och tillverkade för ditt rum. Omsorg om material, bearbetning och montage ger en praktisk och harmonisk helhet.",
    explore: "Utforska kraven",
    stylesLabel: "Produktionskrav",
    stylesTitle: "4 grunder för välgjord träinredning",
    stylesIntro:
      "Varje möbel kontrolleras från inkommande material till montage. Design och hantverk förvandlar idéer till inredning.",
    styleLabel: "Krav",
    styles: [
      {
        title: "Omsorgsfullt materialval",
        description:
          "Kontrollera färg, ytor, stabilitet och fel. Välj trä och skivor efter funktion, användningsförhållanden och designkrav.",
      },
      {
        title: "Kontrollerad tillverkning",
        description:
          "Förbered och behandla material före bearbetning. Kontrollera mått, fogar, ytor och ytbehandling så att delarna passar ihop.",
      },
      {
        title: "Kontroll av färdig produkt",
        description:
          "Jämför form, mått och färg med överenskommen design. Inspektera ytor, beslag och funktion före leverans.",
      },
      {
        title: "Packning, lagring och transport",
        description:
          "Skydda ytor och kanter och märk delarna för montage. Lämplig packning och lagring minskar risken för repor och stötar under transport.",
      },
    ],
    materialsLabel: "Material",
    materialsTitle: "Material som passar varje rum",
    materialsIntro:
      "Från träbaserade skivor till massivt trä – valet tar hänsyn till färg, yta, funktion och budget.",
    materials: [
      "Faner",
      "HDF",
      "Melamin",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "Valnöt",
      "Rysk ek",
      "Xoan đào",
    ],
    tipsLabel: "Våra styrkor",
    tipsTitle: "Egen produktion och samordnat montage",
    tipsIntro:
      "Verkstäder, formgivare och hantverkare samordnar detaljerna från idé till färdig installation.",
    tips: [
      "Verkstäder utrustade för möbelproduktion",
      "Formgivare som följer inredningsstilar",
      "Erfarna och skickliga hantverkare",
      "Materialval efter projektets krav",
      "Egen produktion och tydliga offerter",
      "Omtänksam garanti och professionellt underhåll",
    ],
    commitmentsLabel: "Serviceåtaganden",
    commitmentsTitle: "Stöd före och efter överlämning",
    commitments: [
      "Kostnadsfria råd om träinredning",
      "Möbelstilar som passar projektet",
      "Kvalitets- och funktionskontroll före överlämning",
      "Överenskommen transportplan till platsen",
      "Garanti och underhåll enligt avtal",
      "Tydliga specificerade offerter efter budget",
    ],
    ideaTitle: "Träinredning som passar ditt hem",
    ideaIntro:
      "Dela behov och idéer med teamet. Vi ger råd om material, former och placering för en harmonisk helhet.",
    ctaIntro:
      "Kostnadsfri rådgivning om träinredning efter din tidsplan och budget.",
  },
  fr: {
    ...townhouseConstructionCopy.fr,
    heroParts: ["Menuiserie", "intérieure"],
    intro:
      "Du mobilier en bois conçu et fabriqué pour votre espace. Le soin des matériaux, de la fabrication et de la pose crée un intérieur pratique et harmonieux.",
    explore: "Découvrir les exigences",
    stylesLabel: "Exigences de fabrication",
    stylesTitle: "4 bases pour un mobilier en bois bien fini",
    stylesIntro:
      "Chaque pièce est contrôlée des matériaux à la pose. La conception et le savoir-faire transforment les idées en mobilier.",
    styleLabel: "Exigence",
    styles: [
      {
        title: "Choisir les matériaux avec soin",
        description:
          "Vérifier couleur, surface, stabilité et défauts. Choisir bois et panneaux selon les usages, les conditions et le projet.",
      },
      {
        title: "Maîtriser la fabrication",
        description:
          "Préparer et traiter les matériaux avant usinage. Contrôler dimensions, assemblages, surfaces et finitions pour une bonne cohérence des pièces.",
      },
      {
        title: "Contrôler le produit fini",
        description:
          "Comparer formes, dimensions et couleurs au projet convenu. Vérifier surfaces, quincaillerie et fonctionnalité avant livraison.",
      },
      {
        title: "Emballer, stocker et transporter",
        description:
          "Protéger les surfaces et les angles, puis identifier les pièces pour la pose. Un emballage et un stockage adaptés limitent rayures et chocs.",
      },
    ],
    materialsLabel: "Matériaux",
    materialsTitle: "Des matériaux pour chaque espace",
    materialsIntro:
      "Des panneaux dérivés au bois naturel, le choix prend en compte couleur, surface, fonction et budget.",
    materials: [
      "Placage",
      "HDF",
      "Mélaminé",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "Noyer",
      "Chêne russe",
      "Xoan đào",
    ],
    tipsLabel: "Nos atouts",
    tipsTitle: "Fabrication directe et réalisation coordonnée",
    tipsIntro:
      "Ateliers, concepteurs et artisans coordonnent chaque détail, de l’idée à la pose sur place.",
    tips: [
      "Ateliers équipés pour la fabrication de meubles",
      "Concepteurs attentifs aux styles d’intérieur",
      "Artisans expérimentés et qualifiés",
      "Matériaux sélectionnés selon le projet",
      "Fabrication directe et devis transparents",
      "Garantie et entretien attentifs et professionnels",
    ],
    commitmentsLabel: "Nos engagements",
    commitmentsTitle: "À vos côtés avant et après livraison",
    commitments: [
      "Conseils gratuits sur le mobilier et l’intérieur",
      "Des modèles adaptés au projet",
      "Contrôles de qualité et de fonction avant livraison",
      "Un transport sur chantier convenu à l’avance",
      "Garantie et entretien selon accord",
      "Devis détaillés adaptés au budget",
    ],
    ideaTitle: "Du bois à la mesure de votre foyer",
    ideaIntro:
      "Partagez vos besoins et vos idées. Nous conseillons matériaux, formes et agencement pour intégrer le mobilier à l’ensemble de l’intérieur.",
    ctaIntro:
      "Conseils gratuits sur la menuiserie intérieure, selon votre calendrier et votre budget.",
  },
  ru: {
    ...townhouseConstructionCopy.ru,
    heroParts: ["Деревянная", "мебель на заказ"],
    intro:
      "Мебель из дерева проектируется и производится под ваше пространство. Внимание к материалам, обработке и монтажу создаёт удобный и гармоничный интерьер.",
    explore: "Посмотреть требования",
    stylesLabel: "Требования к производству",
    stylesTitle: "4 основы качественно выполненной мебели",
    stylesIntro:
      "Каждое изделие проверяется от поступления материалов до монтажа. Проектирование и мастерство превращают идеи в мебель.",
    styleLabel: "Требование",
    styles: [
      {
        title: "Тщательный выбор материалов",
        description:
          "Проверка цвета, поверхности, стабильности и дефектов. Дерево и плиты выбираются под функцию, условия использования и проект.",
      },
      {
        title: "Контроль изготовления",
        description:
          "Подготовка и обработка материалов до изготовления. Контроль размеров, соединений, поверхностей и покрытий обеспечивает согласованность деталей.",
      },
      {
        title: "Проверка готового изделия",
        description:
          "Сопоставление формы, размеров и цвета с согласованным проектом. Осмотр поверхностей, фурнитуры и функций до доставки.",
      },
      {
        title: "Упаковка, хранение и перевозка",
        description:
          "Защита поверхностей и углов, маркировка деталей для монтажа. Подходящие упаковка и хранение снижают риск царапин и ударов.",
      },
    ],
    materialsLabel: "Материалы",
    materialsTitle: "Материалы под каждое пространство",
    materialsIntro:
      "От древесных плит до натурального дерева — выбор учитывает цвет, поверхность, функцию и бюджет.",
    materials: [
      "Шпон",
      "HDF",
      "Меламин",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "Орех",
      "Российский дуб",
      "Xoan đào",
    ],
    tipsLabel: "Наши преимущества",
    tipsTitle: "Собственное производство и координация",
    tipsIntro:
      "Мастерские, проектировщики и мастера согласуют каждую деталь от идеи до монтажа на объекте.",
    tips: [
      "Мастерские с оборудованием для мебели",
      "Дизайнеры, следящие за стилями интерьера",
      "Опытные квалифицированные мастера",
      "Выбор материалов под требования проекта",
      "Прямое производство и прозрачные сметы",
      "Внимательная гарантия и профессиональное обслуживание",
    ],
    commitmentsLabel: "Наши обязательства",
    commitmentsTitle: "Поддержка до и после передачи",
    commitments: [
      "Бесплатные консультации по мебели и интерьеру",
      "Модели под стиль проекта",
      "Контроль качества и функций до передачи",
      "Согласованный план доставки на объект",
      "Гарантия и обслуживание по договорённости",
      "Понятные сметы с разбивкой по бюджету",
    ],
    ideaTitle: "Мебель, подходящая вашему дому",
    ideaIntro:
      "Расскажите команде о задачах и идеях. Мы подберём материалы, формы и размещение для гармоничного интерьера.",
    ctaIntro:
      "Бесплатная консультация по деревянной мебели с учётом сроков и бюджета.",
  },
  es: {
    ...townhouseConstructionCopy.es,
    heroParts: ["Carpintería", "interior"],
    intro:
      "Muebles de madera diseñados y fabricados para tu espacio. Cuidamos materiales, elaboración y montaje para crear un interior práctico y armonioso.",
    explore: "Explorar los requisitos",
    stylesLabel: "Requisitos de producción",
    stylesTitle: "4 claves de una carpintería bien acabada",
    stylesIntro:
      "Cada pieza se revisa desde los materiales hasta el montaje. Diseño y oficio convierten las ideas en muebles.",
    styleLabel: "Requisito",
    styles: [
      {
        title: "Selección cuidada de materiales",
        description:
          "Revisamos color, superficie, estabilidad y defectos. Elegimos madera y tableros según la función, las condiciones de uso y el diseño.",
      },
      {
        title: "Fabricación controlada",
        description:
          "Preparamos y tratamos los materiales antes del mecanizado. Controlamos dimensiones, uniones, superficies y revestimientos para que las piezas encajen.",
      },
      {
        title: "Revisión del producto terminado",
        description:
          "Comparamos formas, medidas y colores con el diseño acordado. Revisamos superficies, herrajes y funcionamiento antes de entregar.",
      },
      {
        title: "Embalaje, almacenamiento y transporte",
        description:
          "Protegemos superficies y esquinas e identificamos las piezas para instalar. El embalaje y almacenamiento adecuados reducen arañazos y golpes.",
      },
    ],
    materialsLabel: "Materiales",
    materialsTitle: "Materiales para cada espacio",
    materialsIntro:
      "Desde tableros técnicos hasta madera natural, consideramos color, superficie, función y presupuesto.",
    materials: [
      "Chapa de madera",
      "HDF",
      "Melamina",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "Nogal",
      "Roble ruso",
      "Xoan đào",
    ],
    tipsLabel: "Nuestras ventajas",
    tipsTitle: "Producción directa y montaje coordinado",
    tipsIntro:
      "Talleres, diseñadores y artesanos coordinan cada detalle, desde la idea hasta la instalación final.",
    tips: [
      "Talleres equipados para fabricar muebles",
      "Diseñadores atentos a los estilos de interior",
      "Artesanos experimentados y cualificados",
      "Materiales seleccionados según el proyecto",
      "Producción directa y presupuestos transparentes",
      "Garantía y mantenimiento atentos y profesionales",
    ],
    commitmentsLabel: "Nuestros compromisos",
    commitmentsTitle: "Apoyo antes y después de la entrega",
    commitments: [
      "Asesoramiento gratuito sobre muebles e interiores",
      "Diseños adecuados al estilo del proyecto",
      "Revisión de calidad y función antes de entregar",
      "Transporte a obra acordado previamente",
      "Garantía y mantenimiento según lo acordado",
      "Presupuestos claros y desglosados",
    ],
    ideaTitle: "Madera a la medida de tu hogar",
    ideaIntro:
      "Comparte necesidades e ideas con el equipo. Asesoramos sobre materiales, formas y distribución para integrar los muebles en todo el interior.",
    ctaIntro:
      "Asesoramiento gratuito sobre carpintería interior según tus plazos y presupuesto.",
  },
  zh: {
    ...townhouseConstructionCopy.zh,
    heroParts: ["定制", "木作施工"],
    intro:
      "根据您的空间设计和制作木家具。从材料、加工到安装，细致协调，打造实用而和谐的室内整体。",
    explore: "了解制作要求",
    stylesLabel: "制作要求",
    stylesTitle: "完善木作的4个关键环节",
    stylesIntro:
      "每件产品从原料入厂到安装都需要检查。设计与工艺相结合，让想法成为实际家具。",
    styleLabel: "要求",
    styles: [
      {
        title: "细致选择原材料",
        description:
          "检查色泽、表面、稳定性与缺陷。根据功能、使用环境与设计要求选择木材及板材。",
      },
      {
        title: "按技术要求加工",
        description:
          "加工前适当准备和处理原料。控制尺寸、接合、表面与涂层，让各部件协调装配。",
      },
      {
        title: "检查成品质量",
        description:
          "将造型、尺寸、颜色与约定设计核对。送往现场前检查表面、五金与使用功能。",
      },
      {
        title: "包装、保管与运输",
        description:
          "保护表面及边角，标识各部件以方便安装。适当包装与存放，减少运输中的刮伤和碰撞。",
      },
    ],
    materialsLabel: "材料",
    materialsTitle: "适合不同空间的材料",
    materialsIntro: "从人造板到天然木材，根据颜色、表面、功能与预算综合选择。",
    materials: [
      "木皮",
      "HDF",
      "三聚氰胺饰面",
      "MDF",
      "Lim",
      "Đinh hương",
      "Sến",
      "胡桃木",
      "俄罗斯橡木",
      "Xoan đào",
    ],
    tipsLabel: "我们的优势",
    tipsTitle: "直接生产，统筹协调",
    tipsIntro: "工厂、设计师与工匠共同协调，从创意到现场安装关注每个细节。",
    tips: [
      "配备家具生产设备的工厂",
      "关注室内风格的设计团队",
      "经验丰富的熟练工匠",
      "按项目要求选择原料",
      "直接生产，报价透明",
      "专业、细致的保修与维护",
    ],
    commitmentsLabel: "服务承诺",
    commitmentsTitle: "交付前后，持续相伴",
    commitments: [
      "免费咨询木作与室内方案",
      "提供符合项目风格的款式建议",
      "交付前检查品质与功能",
      "事先约定运送到现场的方案",
      "按约定提供保修与维护",
      "项目明细清晰，符合预算",
    ],
    ideaTitle: "适合您家的木作",
    ideaIntro:
      "与团队分享需求和想法。我们提供材料、造型与布局建议，让家具融入整个空间。",
    ctaIntro: "免费咨询室内木作施工，提供符合工期与预算的方案。",
  },
};
