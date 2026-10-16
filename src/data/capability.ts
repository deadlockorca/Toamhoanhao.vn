import type { SiteLocale } from "@/lib/locale";

type Card = { title: string; description: string };
type Section = { eyebrow: string; title: string };
export type CapabilityCopy = {
  heroParts: string[];
  about: string;
  viewProcess: string;
  intro: string;
  metrics: Card[];
  core: Section & { description: string };
  pillars: Array<
    Card & { eyebrow: string; checks: string[]; outputs: string[] }
  >;
  deliverables: string;
  quality: Section & { cards: Card[] };
  gallery: Section & { labels: string[] };
  process: Section & { steps: string[] };
  team: Section & { cards: Card[] };
  factories: Section & { areas: string; nearby: string };
  faq: Section & { items: Card[] };
  cta: Card;
};
export const capabilityCopy: Record<SiteLocale, CapabilityCopy> = {
  vi: {
    heroParts: ["Năng lực", "thiết kế", "và thi công"],
    about: "Giới thiệu",
    viewProcess: "Xem quy trình",
    intro:
      "Từ ý tưởng đến không gian hoàn thiện, đội ngũ thiết kế, kỹ thuật và sản xuất của Tổ Ấm Hoàn Hảo cùng làm việc trong một quy trình thống nhất.",
    metrics: [
      {
        title: "Năm kinh nghiệm",
        description: "Thiết kế và thi công nội thất",
      },
      {
        title: "Công trình hoàn thiện",
        description: "Hà Nội và các tỉnh thành",
      },
      {
        title: "Khách hàng đồng hành",
        description: "Tư vấn đến bàn giao",
      },
      {
        title: "Khách hàng hài lòng",
        description: "Với dịch vụ và sản phẩm",
      },
    ],
    core: {
      eyebrow: "Năng lực cốt lõi",
      title: "Ba mảng việc, một quy trình khép kín",
      description:
        "Mỗi mảng có đội ngũ chuyên môn riêng nhưng làm việc cùng một bản vẽ, một kế hoạch và một cam kết với khách hàng.",
    },
    pillars: [
      {
        eyebrow: "Thiết kế",
        title: "Từ nhu cầu của gia chủ đến phương án rõ ràng",
        description:
          "Đội ngũ kiến trúc sư phụ trách lắng nghe thói quen sinh hoạt, ngân sách và phong cách mong muốn, rồi biến chúng thành phương án có thể triển khai ngoài công trình.",
        checks: [
          "Khảo sát, đo đạc và đánh giá hiện trạng",
          "Bố trí mặt bằng, tối ưu công năng sử dụng",
          "Phối cảnh 3D trực quan để xem trước không gian",
          "Chọn vật liệu, màu sắc và chi tiết phù hợp",
        ],
        outputs: [
          "Mặt bằng 2D",
          "Phối cảnh 3D",
          "Hồ sơ kỹ thuật",
          "Bảng vật liệu",
        ],
      },
      {
        eyebrow: "Thi công",
        title: "Kiểm soát tiến độ và chất lượng tại công trình",
        description:
          "Đội ngũ kỹ thuật bám sát bản vẽ, giám sát từng hạng mục và phối hợp các đội thợ để công trình hoàn thiện đúng kế hoạch.",
        checks: [
          "Giám sát thi công thường xuyên tại công trình",
          "Quản lý tiến độ theo kế hoạch đã thống nhất",
          "Chấp hành quy trình an toàn lao động",
          "Nghiệm thu từng hạng mục trước khi bàn giao",
        ],
        outputs: [
          "Biên bản nghiệm thu",
          "Công trình hoàn thiện",
          "Thông tin sử dụng",
          "Phiếu bảo hành",
        ],
      },
      {
        eyebrow: "Sản xuất",
        title: "Xưởng riêng, chủ động chất lượng và thời gian",
        description:
          "Nội thất được sản xuất trực tiếp trên hệ thống xưởng của Tổ Ấm Hoàn Hảo, kiểm tra chất lượng trước khi vận chuyển và lắp đặt đồng bộ tại công trình.",
        checks: [
          "Sản xuất theo đúng bản vẽ thiết kế",
          "Chủ động vật tư và tiến độ sản xuất",
          "Kiểm tra chất lượng trước khi lắp đặt",
          "Đồng bộ tiến độ với đội thi công",
        ],
        outputs: [
          "Nội thất theo yêu cầu",
          "Hạng mục lắp đặt",
          "Kiểm tra chất lượng",
        ],
      },
    ],
    deliverables: "Sản phẩm bàn giao",
    quality: {
      eyebrow: "Kiểm soát chất lượng",
      title: "Chất lượng được kiểm soát ở từng bước",
      cards: [
        {
          title: "Kiểm tra vật tư đầu vào",
          description:
            "Vật liệu được kiểm tra nguồn gốc và chất lượng trước khi đưa vào sản xuất và thi công.",
        },
        {
          title: "Theo dõi tiến độ",
          description:
            "Kế hoạch thi công chia theo hạng mục, được cập nhật rõ ràng để cùng khách hàng theo dõi.",
        },
        {
          title: "Nghiệm thu từng giai đoạn",
          description:
            "Mỗi hạng mục được kiểm tra, nghiệm thu trước khi chuyển sang bước tiếp theo.",
        },
      ],
    },
    gallery: {
      eyebrow: "Loại công trình",
      title: "Không gian chúng tôi đã thực hiện",
      labels: [
        "Căn hộ",
        "Nhà phố",
        "Biệt thự",
        "Văn phòng",
        "Nhà hàng",
        "Khách sạn",
      ],
    },
    process: {
      eyebrow: "Quy trình làm việc",
      title: "7 bước từ tiếp nhận đến bảo hành",
      steps: [
        "Tiếp nhận yêu cầu của khách hàng",
        "Khảo sát hiện trạng công trình",
        "Báo giá",
        "Ký kết hợp đồng",
        "Sản xuất và thi công lắp đặt",
        "Nghiệm thu và bàn giao công trình",
        "Thanh lý hợp đồng và bảo hành",
      ],
    },
    team: {
      eyebrow: "Đội ngũ",
      title: "Những người đứng sau mỗi công trình",
      cards: [
        {
          title: "Kiến trúc sư nội thất",
          description:
            "Phát triển phương án 2D/3D, phối cảnh và hồ sơ kỹ thuật.",
        },
        {
          title: "Kỹ sư / Giám sát thi công",
          description:
            "Giám sát tiến độ, chất lượng và an toàn tại công trình.",
        },
        {
          title: "Đội thi công, lắp đặt",
          description: "Thi công, lắp đặt đúng bản vẽ và đồng bộ tiến độ.",
        },
        {
          title: "Tư vấn khách hàng",
          description:
            "Tiếp nhận nhu cầu, báo giá và đồng hành đến khi bàn giao.",
        },
      ],
    },
    factories: {
      eyebrow: "Cơ sở sản xuất",
      title: "Năng lực sản xuất tại hai khu vực",
      areas: "Khu vực tiếp nhận công trình:",
      nearby: "Các tỉnh lân cận",
    },
    faq: {
      eyebrow: "Giải đáp",
      title: "Câu hỏi thường gặp",
      items: [
        {
          title: "Tổ Ấm Hoàn Hảo nhận những loại công trình nào?",
          description:
            "Chúng tôi thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự, văn phòng, nhà hàng và khách sạn.",
        },
        {
          title: "Tôi có thể chỉ thuê thiết kế mà không thi công không?",
          description:
            "Có. Bạn có thể chọn dịch vụ thiết kế riêng hoặc gói thiết kế, sản xuất và thi công theo nhu cầu.",
        },
        {
          title: "Chi phí được báo như thế nào?",
          description:
            "Báo giá dựa trên diện tích, phạm vi công việc, vật liệu và yêu cầu hoàn thiện sau khi trao đổi nhu cầu hoặc khảo sát.",
        },
        {
          title: "Sau khi bàn giao có được bảo hành không?",
          description:
            "Có. Phạm vi và thời hạn bảo hành được thống nhất trong hợp đồng; đội ngũ tiếp tục hỗ trợ sau bàn giao.",
        },
      ],
    },
    cta: {
      title: "Bạn có dự án cần triển khai?",
      description:
        "Chia sẻ nhu cầu của bạn, đội ngũ Tổ Ấm Hoàn Hảo sẽ tư vấn phương án phù hợp với thiết kế, thi công và chi phí.",
    },
  },
  en: {
    heroParts: ["Our capabilities in", "design", "and construction"],
    about: "About us",
    viewProcess: "View our process",
    intro:
      "From the first idea to a finished space, Tổ Ấm Hoàn Hảo’s design, engineering and production teams work together through one coordinated process.",
    metrics: [
      {
        title: "Years of experience",
        description: "Interior design and construction",
      },
      {
        title: "Completed projects",
        description: "Hanoi and other provinces",
      },
      {
        title: "Customers served",
        description: "Advice through handover",
      },
      {
        title: "Satisfied customers",
        description: "With our services and products",
      },
    ],
    core: {
      eyebrow: "Core capabilities",
      title: "Three disciplines, one complete process",
      description:
        "Specialist teams work from the same drawings, schedule and commitment to our customers.",
    },
    pillars: [
      {
        eyebrow: "Design",
        title: "From your needs to a clear plan",
        description:
          "Our architects listen to your lifestyle, budget and preferred style, then develop a plan that can be built on site.",
        checks: [
          "Survey and assess the existing space",
          "Plan the layout and optimise functionality",
          "Preview your space with 3D visualisations",
          "Select suitable materials, colours and details",
        ],
        outputs: [
          "2D layouts",
          "3D visualisations",
          "Technical drawings",
          "Material schedule",
        ],
      },
      {
        eyebrow: "Construction",
        title: "Manage progress and quality on site",
        description:
          "Our technical team follows the drawings, supervises each work package and coordinates trades to keep the project on schedule.",
        checks: [
          "Regular site supervision",
          "Manage progress against the agreed schedule",
          "Follow workplace safety procedures",
          "Inspect each work package before handover",
        ],
        outputs: [
          "Inspection records",
          "Finished project",
          "User information",
          "Warranty documentation",
        ],
      },
      {
        eyebrow: "Manufacturing",
        title: "Our own workshops, control over quality and timing",
        description:
          "Furniture is made in Tổ Ấm Hoàn Hảo’s workshops, checked before delivery and installed as part of the coordinated project.",
        checks: [
          "Manufacture to the design drawings",
          "Manage materials and production schedules",
          "Check quality before installation",
          "Coordinate with the construction team",
        ],
        outputs: [
          "Custom furniture",
          "Installed furniture",
          "Quality inspection",
        ],
      },
    ],
    deliverables: "Project deliverables",
    quality: {
      eyebrow: "Quality control",
      title: "Quality checked at every step",
      cards: [
        {
          title: "Incoming material checks",
          description:
            "Check material origins and quality before production and construction.",
        },
        {
          title: "Progress tracking",
          description:
            "Schedules are broken down by work package and updated clearly for customers.",
        },
        {
          title: "Stage inspections",
          description:
            "Each work package is checked and approved before the next stage.",
        },
      ],
    },
    gallery: {
      eyebrow: "Project types",
      title: "Spaces we have created",
      labels: [
        "Apartments",
        "Townhouses",
        "Villas",
        "Offices",
        "Restaurants",
        "Hotels",
      ],
    },
    process: {
      eyebrow: "Our process",
      title: "7 steps from first contact to warranty",
      steps: [
        "Receive your requirements",
        "Survey the site",
        "Provide a quote",
        "Sign the contract",
        "Manufacture and install",
        "Inspect and hand over",
        "Close the contract and provide warranty",
      ],
    },
    team: {
      eyebrow: "Our team",
      title: "The people behind every project",
      cards: [
        {
          title: "Interior architects",
          description:
            "Develop 2D/3D designs, visualisations and technical drawings.",
        },
        {
          title: "Engineers / Site supervisors",
          description: "Oversee progress, quality and safety on site.",
        },
        {
          title: "Construction and installation teams",
          description: "Build and install to the drawings and agreed schedule.",
        },
        {
          title: "Customer advisers",
          description:
            "Discuss needs, prepare quotes and support you through handover.",
        },
      ],
    },
    factories: {
      eyebrow: "Production facilities",
      title: "Manufacturing in two regions",
      areas: "Project service areas:",
      nearby: "Nearby provinces",
    },
    faq: {
      eyebrow: "Questions answered",
      title: "Frequently asked questions",
      items: [
        {
          title: "What types of projects do you accept?",
          description:
            "We design and build interiors for apartments, townhouses, villas, offices, restaurants and hotels.",
        },
        {
          title: "Can I book design without construction?",
          description:
            "Yes. Choose a design-only service or a combined design, manufacturing and construction package.",
        },
        {
          title: "How is the price calculated?",
          description:
            "Quotes depend on area, scope, materials and finish requirements after a discussion or site survey.",
        },
        {
          title: "Is there a warranty after handover?",
          description:
            "Yes. Warranty scope and duration are agreed in the contract, with continued support after handover.",
        },
      ],
    },
    cta: {
      title: "Have a project in mind?",
      description:
        "Tell us what you need. Tổ Ấm Hoàn Hảo will advise on a suitable design, construction plan and budget.",
    },
  },
  ja: {
    heroParts: ["私たちの", "設計", "・施工力"],
    about: "会社紹介",
    viewProcess: "工程を見る",
    intro:
      "構想から完成まで、Tổ Ấm Hoàn Hảoの設計・技術・製造チームが一つの工程で連携します。",
    metrics: [
      {
        title: "年の経験",
        description: "インテリア設計・施工",
      },
      {
        title: "完成したプロジェクト",
        description: "ハノイと各地域",
      },
      {
        title: "お客様との実績",
        description: "相談から引き渡しまで",
      },
      {
        title: "お客様満足度",
        description: "サービスと製品への評価",
      },
    ],
    core: {
      eyebrow: "中核となる力",
      title: "三つの専門分野、一つの工程",
      description:
        "各専門チームが同じ図面、計画、お客様への約束を共有して進めます。",
    },
    pillars: [
      {
        eyebrow: "設計",
        title: "暮らしのご希望を明確なプランへ",
        description:
          "建築家が生活習慣、ご予算、お好みを伺い、現場で実現できる設計をまとめます。",
        checks: [
          "現地調査・採寸・現状確認",
          "使いやすさを考えた間取り",
          "3Dパースで空間を確認",
          "素材・色・細部の選定",
        ],
        outputs: ["2D間取り", "3Dパース", "施工図面", "材料表"],
      },
      {
        eyebrow: "施工",
        title: "現場で工程と品質を管理",
        description:
          "図面に沿って各工事を監督し、職人と連携して計画どおりに進めます。",
        checks: [
          "定期的な現場監督",
          "合意した計画に沿う工程管理",
          "安全手順の遵守",
          "引き渡し前の各工事検査",
        ],
        outputs: ["検査記録", "完成した空間", "使用案内", "保証書"],
      },
      {
        eyebrow: "製造",
        title: "自社工房で品質と納期を管理",
        description:
          "自社工房で製造し、出荷前に品質を確認して現場で設置します。",
        checks: [
          "設計図に沿った製造",
          "資材と生産工程の管理",
          "設置前の品質確認",
          "施工チームとの工程調整",
        ],
        outputs: ["オーダー家具", "設置済み家具", "品質検査"],
      },
    ],
    deliverables: "お引き渡し内容",
    quality: {
      eyebrow: "品質管理",
      title: "各工程で品質を確認",
      cards: [
        {
          title: "資材の受入検査",
          description: "製造・施工前に資材の出所と品質を確認します。",
        },
        {
          title: "工程の追跡",
          description: "工事項目別に計画し、お客様に進捗を共有します。",
        },
        {
          title: "段階ごとの検査",
          description: "各工事を確認してから次の段階に進みます。",
        },
      ],
    },
    gallery: {
      eyebrow: "プロジェクトの種類",
      title: "私たちが手がけた空間",
      labels: [
        "マンション",
        "都市型住宅",
        "ヴィラ",
        "オフィス",
        "レストラン",
        "ホテル",
      ],
    },
    process: {
      eyebrow: "仕事の流れ",
      title: "受付から保証までの7ステップ",
      steps: [
        "ご要望の受付",
        "現地調査",
        "お見積もり",
        "ご契約",
        "製造・施工・設置",
        "検査・引き渡し",
        "契約の精算・保証",
      ],
    },
    team: {
      eyebrow: "チーム",
      title: "プロジェクトを支える人々",
      cards: [
        {
          title: "インテリア建築家",
          description: "2D・3D設計、パース、施工図を作成します。",
        },
        {
          title: "技術者・現場監督",
          description: "工程、品質、安全を監督します。",
        },
        {
          title: "施工・設置スタッフ",
          description: "図面と計画に沿って施工・設置します。",
        },
        {
          title: "お客様相談担当",
          description: "ご要望の受付から見積もり、引き渡しまで対応します。",
        },
      ],
    },
    factories: {
      eyebrow: "生産拠点",
      title: "二つの地域での製造体制",
      areas: "プロジェクト対応地域：",
      nearby: "周辺地域",
    },
    faq: {
      eyebrow: "ご案内",
      title: "よくあるご質問",
      items: [
        {
          title: "どのような物件に対応していますか？",
          description:
            "マンション、都市型住宅、ヴィラ、オフィス、レストラン、ホテルの内装に対応します。",
        },
        {
          title: "設計のみ依頼できますか？",
          description:
            "はい。設計のみ、または設計・製造・施工の一括サービスをお選びいただけます。",
        },
        {
          title: "費用はどのように決まりますか？",
          description:
            "ご相談や現地調査後、面積、業務範囲、素材、仕上げに基づいて見積もります。",
        },
        {
          title: "引き渡し後の保証はありますか？",
          description:
            "はい。保証範囲と期間は契約で合意し、引き渡し後もサポートします。",
        },
      ],
    },
    cta: {
      title: "計画中のプロジェクトはありますか？",
      description:
        "ご希望をお聞かせください。設計・施工・費用に合ったプランをご提案します。",
    },
  },
  ko: {
    heroParts: ["우리의", "설계", "및 시공 역량"],
    about: "회사 소개",
    viewProcess: "진행 과정 보기",
    intro:
      "아이디어부터 완성된 공간까지 Tổ Ấm Hoàn Hảo의 설계, 기술 및 생산 팀이 하나의 과정으로 협업합니다.",
    metrics: [
      {
        title: "년의 경험",
        description: "인테리어 설계 및 시공",
      },
      {
        title: "완공 프로젝트",
        description: "하노이 및 여러 지역",
      },
      {
        title: "함께한 고객",
        description: "상담부터 인도까지",
      },
      {
        title: "고객 만족도",
        description: "서비스 및 제품 평가",
      },
    ],
    core: {
      eyebrow: "핵심 역량",
      title: "세 분야, 하나의 통합 과정",
      description:
        "각 전문 팀이 동일한 도면, 일정 및 고객과의 약속을 공유합니다.",
    },
    pillars: [
      {
        eyebrow: "설계",
        title: "고객의 요구를 명확한 계획으로",
        description:
          "건축가가 생활 습관, 예산과 원하는 스타일을 듣고 현장에서 구현할 설계를 만듭니다.",
        checks: [
          "현장 조사 및 실측",
          "동선과 기능을 고려한 배치",
          "3D 이미지로 공간 미리 보기",
          "자재, 색상 및 세부 요소 선택",
        ],
        outputs: ["2D 배치도", "3D 이미지", "기술 도면", "자재 목록"],
      },
      {
        eyebrow: "시공",
        title: "현장의 일정과 품질 관리",
        description:
          "기술 팀이 도면에 따라 공사를 감독하고 작업자와 협업하여 일정을 관리합니다.",
        checks: [
          "정기적인 현장 감독",
          "합의한 일정에 따른 관리",
          "작업 안전 절차 준수",
          "인도 전 공정별 검사",
        ],
        outputs: ["검사 기록", "완성된 공간", "사용 안내", "보증 문서"],
      },
      {
        eyebrow: "생산",
        title: "자체 공장으로 품질과 일정 관리",
        description:
          "자체 공장에서 가구를 제작하고 출하 전 검사한 뒤 현장에 설치합니다.",
        checks: [
          "설계 도면에 맞춘 제작",
          "자재 및 생산 일정 관리",
          "설치 전 품질 검사",
          "시공 팀과 일정 조율",
        ],
        outputs: ["맞춤 가구", "설치된 가구", "품질 검사"],
      },
    ],
    deliverables: "제공 결과물",
    quality: {
      eyebrow: "품질 관리",
      title: "각 단계에서 확인하는 품질",
      cards: [
        {
          title: "입고 자재 검사",
          description: "생산과 시공 전에 자재의 출처 및 품질을 확인합니다.",
        },
        {
          title: "진행 상황 관리",
          description: "공종별 계획과 진행 상황을 고객에게 공유합니다.",
        },
        {
          title: "단계별 검사",
          description: "각 작업을 확인한 뒤 다음 단계로 진행합니다.",
        },
      ],
    },
    gallery: {
      eyebrow: "프로젝트 유형",
      title: "우리가 만든 공간",
      labels: ["아파트", "타운하우스", "빌라", "사무실", "레스토랑", "호텔"],
    },
    process: {
      eyebrow: "업무 과정",
      title: "접수부터 보증까지 7단계",
      steps: [
        "요구 사항 접수",
        "현장 조사",
        "견적 제공",
        "계약 체결",
        "제작 및 설치",
        "검수 및 인도",
        "계약 정산 및 보증",
      ],
    },
    team: {
      eyebrow: "우리 팀",
      title: "프로젝트를 만드는 사람들",
      cards: [
        {
          title: "인테리어 건축가",
          description: "2D/3D 설계와 기술 도면을 개발합니다.",
        },
        {
          title: "엔지니어 / 현장 감독",
          description: "현장 일정, 품질 및 안전을 감독합니다.",
        },
        {
          title: "시공 및 설치 팀",
          description: "도면과 일정에 맞춰 시공하고 설치합니다.",
        },
        {
          title: "고객 상담 담당",
          description: "요구 파악, 견적 및 인도까지 지원합니다.",
        },
      ],
    },
    factories: {
      eyebrow: "생산 시설",
      title: "두 지역의 생산 역량",
      areas: "프로젝트 서비스 지역:",
      nearby: "인근 지역",
    },
    faq: {
      eyebrow: "안내",
      title: "자주 묻는 질문",
      items: [
        {
          title: "어떤 프로젝트를 진행하나요?",
          description:
            "아파트, 타운하우스, 빌라, 사무실, 레스토랑 및 호텔 인테리어를 설계하고 시공합니다.",
        },
        {
          title: "시공 없이 설계만 의뢰할 수 있나요?",
          description:
            "네. 설계만 또는 설계, 제작 및 시공 통합 서비스를 선택할 수 있습니다.",
        },
        {
          title: "비용은 어떻게 산정하나요?",
          description:
            "상담 또는 현장 조사 후 면적, 업무 범위, 자재 및 마감 요구에 따라 견적을 제공합니다.",
        },
        {
          title: "인도 후 보증이 있나요?",
          description:
            "네. 보증 범위와 기간을 계약에서 합의하고 인도 후에도 지원합니다.",
        },
      ],
    },
    cta: {
      title: "진행할 프로젝트가 있나요?",
      description:
        "요구 사항을 알려주세요. 적합한 설계, 시공 계획 및 예산을 상담해 드립니다.",
    },
  },
  sv: {
    heroParts: ["Vår kompetens inom", "design", "och byggnation"],
    about: "Om oss",
    viewProcess: "Se processen",
    intro:
      "Från idé till färdigt rum arbetar Tổ Ấm Hoàn Hảos design-, teknik- och produktionsteam i en gemensam process.",
    metrics: [
      {
        title: "Års erfarenhet",
        description: "Inredningsdesign och byggnation",
      },
      {
        title: "Slutförda projekt",
        description: "Hanoi och andra regioner",
      },
      {
        title: "Kunder vi hjälpt",
        description: "Från rådgivning till överlämning",
      },
      {
        title: "Nöjda kunder",
        description: "Med våra tjänster och produkter",
      },
    ],
    core: {
      eyebrow: "Kärnkompetens",
      title: "Tre områden, en sammanhängande process",
      description:
        "Specialistteamen arbetar med samma ritningar, tidsplan och kundåtagande.",
    },
    pillars: [
      {
        eyebrow: "Design",
        title: "Från dina behov till en tydlig plan",
        description:
          "Arkitekterna lyssnar på dina vanor, din budget och stil och tar fram en genomförbar plan.",
        checks: [
          "Undersökning och uppmätning",
          "Planera ytor och funktioner",
          "Förhandsvisa rummet i 3D",
          "Välja material, färger och detaljer",
        ],
        outputs: [
          "2D-planer",
          "3D-visualiseringar",
          "Tekniska ritningar",
          "Materiallista",
        ],
      },
      {
        eyebrow: "Byggnation",
        title: "Kontroll över tid och kvalitet på plats",
        description:
          "Teknikteamet följer ritningarna och samordnar hantverkarna enligt tidsplanen.",
        checks: [
          "Regelbunden tillsyn på plats",
          "Följa den överenskomna tidsplanen",
          "Följa säkerhetsrutiner",
          "Kontrollera varje moment före överlämning",
        ],
        outputs: [
          "Kontrollprotokoll",
          "Färdigt projekt",
          "Användarinformation",
          "Garantidokument",
        ],
      },
      {
        eyebrow: "Tillverkning",
        title: "Egna verkstäder för kvalitet och leveranstid",
        description:
          "Möbler tillverkas i våra verkstäder, kontrolleras före leverans och monteras på plats.",
        checks: [
          "Tillverka enligt ritningarna",
          "Hantera material och produktionstid",
          "Kontrollera kvalitet före montering",
          "Samordna med byggteamet",
        ],
        outputs: [
          "Måttanpassade möbler",
          "Monterade möbler",
          "Kvalitetskontroll",
        ],
      },
    ],
    deliverables: "Leveranser",
    quality: {
      eyebrow: "Kvalitetskontroll",
      title: "Kvalitet i varje steg",
      cards: [
        {
          title: "Kontroll av inkommande material",
          description:
            "Materialens ursprung och kvalitet kontrolleras före arbetet.",
        },
        {
          title: "Uppföljning av tidsplan",
          description:
            "Tidsplanen delas upp i moment och uppdateras för kunden.",
        },
        {
          title: "Etappkontroller",
          description: "Varje moment kontrolleras innan nästa steg.",
        },
      ],
    },
    gallery: {
      eyebrow: "Projekttyper",
      title: "Rum vi har skapat",
      labels: [
        "Lägenheter",
        "Stadsradhus",
        "Villor",
        "Kontor",
        "Restauranger",
        "Hotell",
      ],
    },
    process: {
      eyebrow: "Arbetsprocess",
      title: "7 steg från kontakt till garanti",
      steps: [
        "Ta emot dina önskemål",
        "Undersöka platsen",
        "Lämna offert",
        "Teckna avtal",
        "Tillverka och montera",
        "Kontrollera och överlämna",
        "Avsluta avtalet och ge garanti",
      ],
    },
    team: {
      eyebrow: "Vårt team",
      title: "Människorna bakom varje projekt",
      cards: [
        {
          title: "Inredningsarkitekter",
          description: "Tar fram 2D/3D-design och tekniska ritningar.",
        },
        {
          title: "Ingenjörer / Arbetsledare",
          description: "Följer upp tid, kvalitet och säkerhet.",
        },
        {
          title: "Bygg- och monteringsteam",
          description: "Arbetar enligt ritningar och tidsplan.",
        },
        {
          title: "Kundrådgivare",
          description: "Hjälper med behov, offert och överlämning.",
        },
      ],
    },
    factories: {
      eyebrow: "Produktionsanläggningar",
      title: "Tillverkning i två regioner",
      areas: "Områden vi arbetar i:",
      nearby: "Närliggande regioner",
    },
    faq: {
      eyebrow: "Svar på frågor",
      title: "Vanliga frågor",
      items: [
        {
          title: "Vilka projekt tar ni emot?",
          description:
            "Vi arbetar med lägenheter, stadsradhus, villor, kontor, restauranger och hotell.",
        },
        {
          title: "Kan jag beställa enbart design?",
          description:
            "Ja. Välj enbart design eller ett paket med design, tillverkning och byggnation.",
        },
        {
          title: "Hur beräknas priset?",
          description:
            "Priset beror på yta, omfattning, material och utförande efter samtal eller platsbesök.",
        },
        {
          title: "Finns garanti efter överlämningen?",
          description:
            "Ja. Garantins omfattning och längd regleras i avtalet, med fortsatt stöd efter överlämningen.",
        },
      ],
    },
    cta: {
      title: "Har du ett projekt på gång?",
      description:
        "Berätta om dina behov så hjälper vi dig med design, byggplan och budget.",
    },
  },
  fr: {
    heroParts: ["Nos compétences en", "conception", "et réalisation"],
    about: "À propos",
    viewProcess: "Voir les étapes",
    intro:
      "De l’idée à l’espace terminé, les équipes de conception, de technique et de production de Tổ Ấm Hoàn Hảo travaillent ensemble.",
    metrics: [
      {
        title: "Années d’expérience",
        description: "Conception et réalisation intérieure",
      },
      {
        title: "Projets terminés",
        description: "Hanoï et autres régions",
      },
      {
        title: "Clients accompagnés",
        description: "Du conseil à la livraison",
      },
      {
        title: "Clients satisfaits",
        description: "De nos services et produits",
      },
    ],
    core: {
      eyebrow: "Nos compétences",
      title: "Trois métiers, un processus complet",
      description:
        "Nos équipes spécialisées partagent les mêmes plans, le même calendrier et le même engagement client.",
    },
    pillars: [
      {
        eyebrow: "Conception",
        title: "De vos besoins à un projet clair",
        description:
          "Nos architectes écoutent vos habitudes, votre budget et vos goûts pour concevoir un projet réalisable.",
        checks: [
          "Relevés et analyse des lieux",
          "Optimisation du plan et des usages",
          "Visualisation de l’espace en 3D",
          "Choix des matériaux, couleurs et détails",
        ],
        outputs: [
          "Plans 2D",
          "Perspectives 3D",
          "Plans techniques",
          "Liste des matériaux",
        ],
      },
      {
        eyebrow: "Réalisation",
        title: "Maîtriser les délais et la qualité du chantier",
        description:
          "L’équipe technique suit les plans, supervise les travaux et coordonne les artisans selon le calendrier.",
        checks: [
          "Suivi régulier du chantier",
          "Gestion du calendrier convenu",
          "Respect des règles de sécurité",
          "Contrôle de chaque lot avant livraison",
        ],
        outputs: [
          "Procès-verbaux de réception",
          "Projet terminé",
          "Informations d’utilisation",
          "Documents de garantie",
        ],
      },
      {
        eyebrow: "Production",
        title: "Nos ateliers pour maîtriser qualité et délais",
        description:
          "Le mobilier est fabriqué dans nos ateliers, contrôlé avant livraison et installé sur place.",
        checks: [
          "Fabrication conforme aux plans",
          "Gestion des matériaux et des délais",
          "Contrôle avant installation",
          "Coordination avec l’équipe de chantier",
        ],
        outputs: [
          "Mobilier sur mesure",
          "Mobilier installé",
          "Contrôle qualité",
        ],
      },
    ],
    deliverables: "Livrables",
    quality: {
      eyebrow: "Contrôle qualité",
      title: "La qualité vérifiée à chaque étape",
      cards: [
        {
          title: "Contrôle des matériaux reçus",
          description:
            "Origine et qualité des matériaux vérifiées avant les travaux.",
        },
        {
          title: "Suivi du calendrier",
          description:
            "Planning par lot, régulièrement partagé avec le client.",
        },
        {
          title: "Réception par étape",
          description: "Chaque lot est contrôlé avant de passer à la suite.",
        },
      ],
    },
    gallery: {
      eyebrow: "Types de projets",
      title: "Les espaces que nous avons réalisés",
      labels: [
        "Appartements",
        "Maisons de ville",
        "Villas",
        "Bureaux",
        "Restaurants",
        "Hôtels",
      ],
    },
    process: {
      eyebrow: "Notre méthode",
      title: "7 étapes du premier contact à la garantie",
      steps: [
        "Recueil de vos besoins",
        "Visite du site",
        "Devis",
        "Signature du contrat",
        "Fabrication et installation",
        "Réception et livraison",
        "Clôture du contrat et garantie",
      ],
    },
    team: {
      eyebrow: "Notre équipe",
      title: "Les personnes derrière chaque projet",
      cards: [
        {
          title: "Architectes d’intérieur",
          description: "Conception 2D/3D et plans techniques.",
        },
        {
          title: "Ingénieurs / Chefs de chantier",
          description: "Suivi des délais, de la qualité et de la sécurité.",
        },
        {
          title: "Équipes de travaux et de pose",
          description: "Réalisation conforme aux plans et au calendrier.",
        },
        {
          title: "Conseillers clientèle",
          description: "Besoins, devis et accompagnement jusqu’à la livraison.",
        },
      ],
    },
    factories: {
      eyebrow: "Sites de production",
      title: "La production dans deux régions",
      areas: "Zones d’intervention :",
      nearby: "Régions voisines",
    },
    faq: {
      eyebrow: "Vos questions",
      title: "Questions fréquentes",
      items: [
        {
          title: "Quels types de projets acceptez-vous ?",
          description:
            "Appartements, maisons de ville, villas, bureaux, restaurants et hôtels.",
        },
        {
          title: "Puis-je commander uniquement la conception ?",
          description:
            "Oui. Choisissez la conception seule ou une prestation complète avec fabrication et travaux.",
        },
        {
          title: "Comment le prix est-il calculé ?",
          description:
            "Après échange ou visite, selon la surface, les prestations, les matériaux et les finitions.",
        },
        {
          title: "Y a-t-il une garantie après livraison ?",
          description:
            "Oui. Son périmètre et sa durée sont définis au contrat, avec un suivi après livraison.",
        },
      ],
    },
    cta: {
      title: "Vous avez un projet à réaliser ?",
      description:
        "Parlez-nous de vos besoins pour une solution adaptée en conception, travaux et budget.",
    },
  },
  ru: {
    heroParts: ["Наши возможности в", "дизайне", "и строительстве"],
    about: "О нас",
    viewProcess: "Посмотреть этапы",
    intro:
      "От идеи до готового пространства команды дизайна, техники и производства Tổ Ấm Hoàn Hảo работают вместе.",
    metrics: [
      {
        title: "Лет опыта",
        description: "Дизайн и строительство интерьеров",
      },
      {
        title: "Завершённых проектов",
        description: "Ханой и другие регионы",
      },
      {
        title: "Клиентов",
        description: "От консультации до передачи",
      },
      {
        title: "Довольных клиентов",
        description: "Нашими услугами и продукцией",
      },
    ],
    core: {
      eyebrow: "Основные возможности",
      title: "Три направления, единый процесс",
      description:
        "Специалисты работают по одним чертежам, графику и обязательствам перед клиентом.",
    },
    pillars: [
      {
        eyebrow: "Дизайн",
        title: "От ваших потребностей к ясному плану",
        description:
          "Архитекторы учитывают привычки, бюджет и стиль, создавая реализуемый проект.",
        checks: [
          "Обмеры и оценка объекта",
          "Планировка и функциональность",
          "Просмотр пространства в 3D",
          "Выбор материалов, цветов и деталей",
        ],
        outputs: [
          "Планы 2D",
          "Визуализации 3D",
          "Рабочие чертежи",
          "Ведомость материалов",
        ],
      },
      {
        eyebrow: "Строительство",
        title: "Контроль сроков и качества на объекте",
        description:
          "Техническая команда следует чертежам, контролирует работы и координирует мастеров.",
        checks: [
          "Регулярный надзор на объекте",
          "Контроль согласованного графика",
          "Соблюдение правил безопасности",
          "Проверка каждого этапа до передачи",
        ],
        outputs: [
          "Акты приёмки",
          "Готовый проект",
          "Рекомендации по использованию",
          "Гарантийные документы",
        ],
      },
      {
        eyebrow: "Производство",
        title: "Собственные цеха для качества и сроков",
        description:
          "Мебель изготавливается в наших цехах, проверяется перед доставкой и устанавливается на объекте.",
        checks: [
          "Производство по чертежам",
          "Управление материалами и сроками",
          "Проверка перед установкой",
          "Координация со строителями",
        ],
        outputs: [
          "Мебель на заказ",
          "Установленная мебель",
          "Контроль качества",
        ],
      },
    ],
    deliverables: "Результаты работ",
    quality: {
      eyebrow: "Контроль качества",
      title: "Проверка качества на каждом шаге",
      cards: [
        {
          title: "Входной контроль материалов",
          description: "Проверяем происхождение и качество до начала работ.",
        },
        {
          title: "Отслеживание графика",
          description: "План по видам работ с обновлениями для клиента.",
        },
        {
          title: "Поэтапная приёмка",
          description: "Каждый этап проверяется перед переходом к следующему.",
        },
      ],
    },
    gallery: {
      eyebrow: "Типы проектов",
      title: "Пространства, которые мы создали",
      labels: [
        "Квартиры",
        "Городские дома",
        "Виллы",
        "Офисы",
        "Рестораны",
        "Отели",
      ],
    },
    process: {
      eyebrow: "Рабочий процесс",
      title: "7 шагов от обращения до гарантии",
      steps: [
        "Получение требований",
        "Обследование объекта",
        "Смета",
        "Подписание договора",
        "Производство и монтаж",
        "Приёмка и передача",
        "Закрытие договора и гарантия",
      ],
    },
    team: {
      eyebrow: "Наша команда",
      title: "Люди за каждым проектом",
      cards: [
        {
          title: "Дизайнеры интерьера",
          description: "Разработка 2D/3D-проектов и рабочих чертежей.",
        },
        {
          title: "Инженеры / Прорабы",
          description: "Надзор за сроками, качеством и безопасностью.",
        },
        {
          title: "Строители и монтажники",
          description: "Работа по чертежам и согласованному графику.",
        },
        {
          title: "Консультанты",
          description: "Требования, смета и поддержка до передачи.",
        },
      ],
    },
    factories: {
      eyebrow: "Производства",
      title: "Производство в двух регионах",
      areas: "Регионы обслуживания:",
      nearby: "Соседние регионы",
    },
    faq: {
      eyebrow: "Ответы",
      title: "Частые вопросы",
      items: [
        {
          title: "Какие проекты вы принимаете?",
          description:
            "Интерьеры квартир, городских домов, вилл, офисов, ресторанов и отелей.",
        },
        {
          title: "Можно заказать только дизайн?",
          description:
            "Да. Выберите дизайн отдельно или полный пакет с производством и строительством.",
        },
        {
          title: "Как рассчитывается стоимость?",
          description:
            "После обсуждения или обследования, по площади, объёму работ, материалам и отделке.",
        },
        {
          title: "Есть ли гарантия после передачи?",
          description:
            "Да. Объём и срок гарантии определяются договором; поддержка продолжается после передачи.",
        },
      ],
    },
    cta: {
      title: "Планируете проект?",
      description:
        "Расскажите о потребностях, и мы предложим подходящие дизайн, план работ и бюджет.",
    },
  },
  es: {
    heroParts: ["Nuestra capacidad de", "diseño", "y construcción"],
    about: "Nosotros",
    viewProcess: "Ver el proceso",
    intro:
      "Desde la idea hasta el espacio terminado, los equipos de diseño, ingeniería y producción de Tổ Ấm Hoàn Hảo trabajan juntos.",
    metrics: [
      {
        title: "Años de experiencia",
        description: "Diseño y construcción interior",
      },
      {
        title: "Proyectos terminados",
        description: "Hanói y otras regiones",
      },
      {
        title: "Clientes acompañados",
        description: "Del asesoramiento a la entrega",
      },
      {
        title: "Clientes satisfechos",
        description: "Con servicios y productos",
      },
    ],
    core: {
      eyebrow: "Capacidades clave",
      title: "Tres disciplinas, un proceso completo",
      description:
        "Los equipos comparten los mismos planos, calendario y compromiso con el cliente.",
    },
    pillars: [
      {
        eyebrow: "Diseño",
        title: "De sus necesidades a un plan claro",
        description:
          "Los arquitectos escuchan sus hábitos, presupuesto y estilo para crear un proyecto realizable.",
        checks: [
          "Medición y evaluación del espacio",
          "Optimizar la distribución y el uso",
          "Visualizar el espacio en 3D",
          "Elegir materiales, colores y detalles",
        ],
        outputs: [
          "Planos 2D",
          "Visualizaciones 3D",
          "Planos técnicos",
          "Lista de materiales",
        ],
      },
      {
        eyebrow: "Construcción",
        title: "Controlar los plazos y la calidad en obra",
        description:
          "El equipo técnico sigue los planos, supervisa cada trabajo y coordina a los profesionales.",
        checks: [
          "Supervisión habitual en obra",
          "Gestionar el calendario acordado",
          "Cumplir las normas de seguridad",
          "Inspeccionar cada fase antes de entregar",
        ],
        outputs: [
          "Actas de recepción",
          "Proyecto terminado",
          "Información de uso",
          "Documentación de garantía",
        ],
      },
      {
        eyebrow: "Producción",
        title: "Talleres propios para controlar calidad y plazos",
        description:
          "Los muebles se fabrican en nuestros talleres, se revisan antes del envío y se instalan en obra.",
        checks: [
          "Fabricar según los planos",
          "Gestionar materiales y plazos",
          "Revisar la calidad antes de instalar",
          "Coordinar con el equipo de obra",
        ],
        outputs: [
          "Muebles a medida",
          "Muebles instalados",
          "Control de calidad",
        ],
      },
    ],
    deliverables: "Entregables",
    quality: {
      eyebrow: "Control de calidad",
      title: "Calidad comprobada en cada paso",
      cards: [
        {
          title: "Revisión de materiales",
          description:
            "Comprobamos el origen y la calidad antes de los trabajos.",
        },
        {
          title: "Seguimiento del calendario",
          description: "Plan por partidas con actualizaciones para el cliente.",
        },
        {
          title: "Recepción por fases",
          description: "Cada partida se revisa antes de la siguiente fase.",
        },
      ],
    },
    gallery: {
      eyebrow: "Tipos de proyectos",
      title: "Espacios que hemos creado",
      labels: [
        "Apartamentos",
        "Casas urbanas",
        "Villas",
        "Oficinas",
        "Restaurantes",
        "Hoteles",
      ],
    },
    process: {
      eyebrow: "Nuestro proceso",
      title: "7 pasos del primer contacto a la garantía",
      steps: [
        "Recibir sus requisitos",
        "Visitar el lugar",
        "Presupuesto",
        "Firmar el contrato",
        "Fabricar e instalar",
        "Inspeccionar y entregar",
        "Cerrar el contrato y dar garantía",
      ],
    },
    team: {
      eyebrow: "Nuestro equipo",
      title: "Las personas detrás de cada proyecto",
      cards: [
        {
          title: "Arquitectos de interiores",
          description: "Diseños 2D/3D y planos técnicos.",
        },
        {
          title: "Ingenieros / Supervisores",
          description: "Supervisan plazos, calidad y seguridad.",
        },
        {
          title: "Equipos de obra e instalación",
          description: "Trabajan según los planos y el calendario.",
        },
        {
          title: "Asesores de clientes",
          description: "Necesidades, presupuesto y apoyo hasta la entrega.",
        },
      ],
    },
    factories: {
      eyebrow: "Centros de producción",
      title: "Producción en dos regiones",
      areas: "Zonas de servicio:",
      nearby: "Provincias cercanas",
    },
    faq: {
      eyebrow: "Respuestas",
      title: "Preguntas frecuentes",
      items: [
        {
          title: "¿Qué proyectos aceptan?",
          description:
            "Interiores de apartamentos, casas urbanas, villas, oficinas, restaurantes y hoteles.",
        },
        {
          title: "¿Puedo contratar solo el diseño?",
          description:
            "Sí. Puede elegir solo diseño o un servicio completo con fabricación y construcción.",
        },
        {
          title: "¿Cómo se calcula el precio?",
          description:
            "Tras una consulta o visita, según superficie, alcance, materiales y acabados.",
        },
        {
          title: "¿Hay garantía tras la entrega?",
          description:
            "Sí. El alcance y plazo se acuerdan en el contrato, con apoyo después de la entrega.",
        },
      ],
    },
    cta: {
      title: "¿Tiene un proyecto en mente?",
      description:
        "Cuéntenos sus necesidades para asesorarle sobre diseño, construcción y presupuesto.",
    },
  },
  zh: {
    heroParts: ["我们的", "设计", "与施工能力"],
    about: "关于我们",
    viewProcess: "查看流程",
    intro:
      "从创意到空间完工，Tổ Ấm Hoàn Hảo的设计、技术和生产团队遵循统一流程协作。",
    metrics: [
      {
        title: "年经验",
        description: "室内设计与施工",
      },
      {
        title: "已完工项目",
        description: "河内及其他地区",
      },
      {
        title: "服务客户",
        description: "从咨询到交付",
      },
      {
        title: "客户满意度",
        description: "对服务和产品的评价",
      },
    ],
    core: {
      eyebrow: "核心能力",
      title: "三个专业领域，一套完整流程",
      description: "专业团队共享图纸、计划和对客户的承诺。",
    },
    pillars: [
      {
        eyebrow: "设计",
        title: "从业主需求到清晰方案",
        description:
          "建筑师了解您的生活习惯、预算和风格偏好，制定可在现场实施的方案。",
        checks: [
          "现场勘察、测量和评估",
          "优化布局和使用功能",
          "通过3D效果图预览空间",
          "选择材料、色彩和细节",
        ],
        outputs: ["2D平面图", "3D效果图", "技术图纸", "材料清单"],
      },
      {
        eyebrow: "施工",
        title: "现场进度与质量管理",
        description:
          "技术团队遵循图纸、监督各项工程并协调工人，按计划推进项目。",
        checks: [
          "定期现场监督",
          "管理约定的工程进度",
          "遵守劳动安全流程",
          "交付前验收各项工程",
        ],
        outputs: ["验收记录", "完工项目", "使用说明", "保修文件"],
      },
      {
        eyebrow: "生产",
        title: "自有工厂，掌控品质与时间",
        description:
          "家具在自有工厂生产，发货前检查品质，并与现场工程同步安装。",
        checks: [
          "按照设计图纸生产",
          "管理材料和生产计划",
          "安装前检查质量",
          "与施工团队协调进度",
        ],
        outputs: ["定制家具", "已安装家具", "质量检查"],
      },
    ],
    deliverables: "交付成果",
    quality: {
      eyebrow: "质量控制",
      title: "每一步都把控品质",
      cards: [
        {
          title: "入库材料检查",
          description: "在生产和施工前检查材料来源及质量。",
        },
        {
          title: "进度跟踪",
          description: "按工程项目制定计划并向客户更新进度。",
        },
        {
          title: "分阶段验收",
          description: "各项工程检查通过后进入下一阶段。",
        },
      ],
    },
    gallery: {
      eyebrow: "项目类型",
      title: "我们打造的空间",
      labels: ["公寓", "联排住宅", "别墅", "办公室", "餐厅", "酒店"],
    },
    process: {
      eyebrow: "工作流程",
      title: "从接待到保修的7个步骤",
      steps: [
        "接收客户需求",
        "现场勘察",
        "报价",
        "签订合同",
        "生产与施工安装",
        "验收与交付",
        "合同结算与保修",
      ],
    },
    team: {
      eyebrow: "我们的团队",
      title: "每个项目背后的专业人员",
      cards: [
        {
          title: "室内建筑师",
          description: "制定2D/3D方案、效果图和技术图纸。",
        },
        {
          title: "工程师 / 施工监督",
          description: "监督现场进度、质量和安全。",
        },
        {
          title: "施工及安装团队",
          description: "按照图纸和计划施工安装。",
        },
        {
          title: "客户顾问",
          description: "了解需求、报价并陪伴客户直到交付。",
        },
      ],
    },
    factories: {
      eyebrow: "生产基地",
      title: "两大区域的生产能力",
      areas: "项目服务区域：",
      nearby: "周边省份",
    },
    faq: {
      eyebrow: "解答",
      title: "常见问题",
      items: [
        {
          title: "你们承接哪些类型的项目？",
          description:
            "我们为公寓、联排住宅、别墅、办公室、餐厅和酒店提供室内设计与施工。",
        },
        {
          title: "可以只委托设计而不施工吗？",
          description: "可以。您可选择单独设计或设计、生产和施工一体化服务。",
        },
        {
          title: "费用如何计算？",
          description: "咨询或勘察后，根据面积、工作范围、材料和饰面要求报价。",
        },
        {
          title: "交付后有保修吗？",
          description: "有。保修范围和期限在合同中约定，交付后继续提供支持。",
        },
      ],
    },
    cta: {
      title: "您有需要实施的项目吗？",
      description: "请分享您的需求，我们将为您提供适合的设计、施工和预算建议。",
    },
  },
};
