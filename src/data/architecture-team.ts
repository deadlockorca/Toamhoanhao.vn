import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
type Section = { eyebrow: string; title: string };
export type ArchitectureTeamCopy = {
  heroParts: string[];
  intro: string;
  contact: string;
  meet: string;
  book: string;
  badge: Card;
  overview: Section & { paragraphs: string[] };
  leadership: Section;
  members: Array<{ prefix: string; role: string; description: string }>;
  expertise: Section & { cards: Card[] };
  process: Section & { cards: Card[] };
  benefits: Section & { cards: Card[] };
  metrics: string[];
  cta: Card;
};
export const architectureTeamMembers = [
  { name: "Nguyễn Quốc Dũng", initials: "NQ" },
  { name: "Nguyễn Đức Cảnh", initials: "NC" },
  { name: "Đinh Tuấn Anh", initials: "ĐA" },
  { name: "Võ Sơn Thạch", initials: "VT" },
];
export const architectureTeamCopy: Record<SiteLocale, ArchitectureTeamCopy> = {
  vi: {
    heroParts: ["Đội ngũ", "kiến trúc sư"],
    intro:
      "Những kiến trúc sư và kỹ sư giàu kinh nghiệm, đồng hành cùng bạn từ ý tưởng đến khi tổ ấm hoàn thiện.",
    contact: "Liên hệ tư vấn",
    meet: "Gặp đội ngũ",
    book: "Đặt lịch tư vấn ngay",
    badge: {
      title: "Kiến trúc sư, kỹ sư, chuyên gia",
      description: "Cùng phối hợp trong từng dự án",
    },
    overview: {
      eyebrow: "Cách chúng tôi làm nghề",
      title: "Tư duy sáng tạo, giải pháp thực tiễn và sự đồng hành tận tâm",
      paragraphs: [
        "Mỗi dự án là một câu chuyện riêng. Đội ngũ của Tổ Ấm Hoàn Hảo lắng nghe nhu cầu, phát triển giải pháp phù hợp với hiện trạng, ngân sách và nhịp sống của từng gia chủ.",
        "Chúng tôi kết nối thiết kế, kỹ thuật và thi công trong một quy trình nhất quán để tạo nên không gian đẹp, bền vững và dễ sử dụng.",
      ],
    },
    leadership: {
      eyebrow: "Đội ngũ chủ chốt",
      title: "Những người dẫn dắt từng công trình",
    },
    members: [
      {
        prefix: "Thạc sĩ, Kiến trúc sư",
        role: "Giám đốc thiết kế",
        description:
          "Hơn 15 năm kinh nghiệm trong lĩnh vực kiến trúc và nội thất. Định hướng thiết kế cân bằng giữa thẩm mỹ, công năng và trải nghiệm sử dụng dài lâu.",
      },
      {
        prefix: "Kỹ sư",
        role: "Trưởng phòng kỹ thuật",
        description:
          "Chuyên gia triển khai hồ sơ kỹ thuật, kết cấu và chi tiết thi công. Đảm bảo bản vẽ chính xác, đồng bộ và khả thi tại công trình.",
      },
      {
        prefix: "Thạc sĩ, Kiến trúc sư",
        role: "Trưởng phòng thiết kế",
        description:
          "Tư duy sáng tạo, cập nhật xu hướng và phân tích nhu cầu khách hàng để tạo ra giải pháp thiết kế tối ưu, có chiều sâu và khác biệt.",
      },
      {
        prefix: "Kỹ sư",
        role: "Trưởng phòng thi công",
        description:
          "Giàu kinh nghiệm hiện trường và quản lý thi công. Đảm bảo tiến độ, chất lượng và an toàn trong suốt quá trình triển khai.",
      },
    ],
    expertise: {
      eyebrow: "Chuyên môn nổi bật",
      title: "Sáu mảng chuyên môn của đội ngũ",
      cards: [
        {
          title: "Thiết kế kiến trúc",
          description:
            "Tạo nên không gian kiến trúc có cá tính, bền vững và phù hợp với môi trường sống.",
        },
        {
          title: "Thiết kế nội thất",
          description:
            "Phát triển không gian tinh tế, mang đậm trải nghiệm và cảm xúc riêng.",
        },
        {
          title: "Triển khai hồ sơ kỹ thuật",
          description:
            "Hồ sơ chi tiết, chính xác và đồng bộ để thi công hiệu quả, minh bạch.",
        },
        {
          title: "Giám sát thi công",
          description:
            "Theo dõi chất lượng, tiến độ và tính đồng bộ từ bản vẽ đến hiện trường.",
        },
        {
          title: "Tối ưu công năng",
          description:
            "Phân tích nhu cầu để tổ chức không gian phù hợp với nhịp sống sử dụng.",
        },
        {
          title: "Giải pháp vật liệu",
          description:
            "Tư vấn vật liệu phù hợp, bền đẹp, thân thiện và phù hợp mức đầu tư.",
        },
      ],
    },
    process: {
      eyebrow: "Quy trình phối hợp",
      title: "Cùng làm việc từ ý tưởng đến bàn giao",
      cards: [
        {
          title: "Tiếp nhận nhu cầu",
          description:
            "Lắng nghe, trao đổi và hiểu rõ nhu cầu, phong cách của khách hàng.",
        },
        {
          title: "Khảo sát & ý tưởng",
          description:
            "Khảo sát hiện trạng, phát triển ý tưởng và đề xuất phương án.",
        },
        {
          title: "Thiết kế chi tiết",
          description:
            "Phát triển phương án 2D/3D, phối cảnh và hồ sơ cần thiết.",
        },
        {
          title: "Triển khai kỹ thuật",
          description: "Lập hồ sơ thi công chi tiết, đồng bộ giữa các bộ môn.",
        },
        {
          title: "Giám sát thi công",
          description:
            "Giám sát chất lượng, tiến độ và an toàn tại công trình.",
        },
        {
          title: "Bàn giao & hậu mãi",
          description:
            "Bàn giao công trình, hướng dẫn sử dụng và bảo hành chu đáo.",
        },
      ],
    },
    benefits: {
      eyebrow: "Dấu ấn trong từng thiết kế",
      title: "Điều khách hàng nhận được",
      cards: [
        {
          title: "Đồng bộ từ thiết kế đến thi công",
          description:
            "Sự phối hợp chặt chẽ giữa các bộ môn giúp công trình đạt kết quả chuẩn xác, đúng tiến độ và minh bạch chi phí.",
        },
        {
          title: "Kiến trúc cá tính",
          description:
            "Mỗi công trình mang dấu ấn riêng, phong cách phù hợp với cách sống của gia chủ.",
        },
        {
          title: "Nội thất tinh tế",
          description:
            "Không gian sống được chăm chút từ chất liệu, ánh sáng đến từng chi tiết.",
        },
        {
          title: "Tối ưu ngân sách",
          description:
            "Dự toán chi tiết, đề xuất giải pháp tiết kiệm mà vẫn đảm bảo thẩm mỹ.",
        },
        {
          title: "Cam kết bảo hành",
          description:
            "Đồng hành dài lâu, hỗ trợ nhanh chóng sau khi bàn giao công trình.",
        },
      ],
    },
    metrics: [
      "Năm kinh nghiệm",
      "Công trình hoàn thiện",
      "Khách hàng hài lòng",
      "Minh bạch tiến độ",
    ],
    cta: {
      title: "Gặp gỡ đội ngũ đồng hành cùng tổ ấm của bạn",
      description:
        "Chia sẻ mong muốn của bạn để chúng tôi tư vấn hướng đi phù hợp cho không gian sắp tới.",
    },
  },
  en: {
    heroParts: ["Our team of", "architects"],
    intro:
      "Experienced architects and engineers supporting you from the first idea to your finished home.",
    contact: "Get advice",
    meet: "Meet the team",
    book: "Book a consultation",
    badge: {
      title: "Architects, engineers and specialists",
      description: "Working together on every project",
    },
    overview: {
      eyebrow: "Our approach",
      title: "Creative thinking, practical solutions and dedicated support",
      paragraphs: [
        "Every project has its own story. Tổ Ấm Hoàn Hảo listens to your needs and develops solutions for your space, budget and lifestyle.",
        "We connect design, engineering and construction through a consistent process to create beautiful, lasting and easy-to-use spaces.",
      ],
    },
    leadership: {
      eyebrow: "Our core team",
      title: "The people leading every project",
    },
    members: [
      {
        prefix: "Master’s degree, Architect",
        role: "Design Director",
        description:
          "Over 15 years of experience in architecture and interiors, balancing aesthetics, functionality and lasting comfort.",
      },
      {
        prefix: "Engineer",
        role: "Head of Engineering",
        description:
          "Specialist in technical documentation, structures and construction details, ensuring accurate, coordinated and buildable drawings.",
      },
      {
        prefix: "Master’s degree, Architect",
        role: "Head of Design",
        description:
          "Creative thinking, current trends and customer insights inform thoughtful, distinctive design solutions.",
      },
      {
        prefix: "Engineer",
        role: "Head of Construction",
        description:
          "Extensive experience in site management, overseeing schedules, quality and safety throughout delivery.",
      },
    ],
    expertise: {
      eyebrow: "Our expertise",
      title: "Six areas of specialist knowledge",
      cards: [
        {
          title: "Architectural design",
          description:
            "Distinctive, lasting architecture that suits its surroundings.",
        },
        {
          title: "Interior design",
          description:
            "Refined spaces with individual character and a thoughtful living experience.",
        },
        {
          title: "Technical documentation",
          description:
            "Detailed, accurate and coordinated drawings for clear, efficient construction.",
        },
        {
          title: "Site supervision",
          description:
            "Track quality, progress and consistency from drawings to the site.",
        },
        {
          title: "Functional planning",
          description: "Organise space around your needs and daily routines.",
        },
        {
          title: "Material solutions",
          description:
            "Recommend suitable, durable and considered materials within your budget.",
        },
      ],
    },
    process: {
      eyebrow: "Our collaboration process",
      title: "Working together from idea to handover",
      cards: [
        {
          title: "Understand your needs",
          description:
            "Listen and discuss your requirements and preferred style.",
        },
        {
          title: "Site survey & concepts",
          description:
            "Assess the existing space, develop ideas and propose a plan.",
        },
        {
          title: "Detailed design",
          description:
            "Develop 2D/3D plans, visualisations and the required documentation.",
        },
        {
          title: "Technical coordination",
          description:
            "Prepare detailed construction drawings across disciplines.",
        },
        {
          title: "Site supervision",
          description: "Monitor quality, progress and safety on site.",
        },
        {
          title: "Handover & aftercare",
          description:
            "Hand over the project with user guidance and warranty support.",
        },
      ],
    },
    benefits: {
      eyebrow: "The difference in every design",
      title: "What our customers receive",
      cards: [
        {
          title: "Coordinated design and construction",
          description:
            "Close collaboration helps deliver accurate results, an agreed schedule and transparent costs.",
        },
        {
          title: "Distinctive architecture",
          description:
            "Each project reflects its owner’s individual style and way of living.",
        },
        {
          title: "Refined interiors",
          description:
            "Careful attention to materials, lighting and every detail.",
        },
        {
          title: "Budget optimisation",
          description:
            "Detailed estimates and cost-saving solutions that preserve aesthetics.",
        },
        {
          title: "Warranty commitment",
          description:
            "Continued support and prompt assistance after handover.",
        },
      ],
    },
    metrics: [
      "Years of experience",
      "Completed projects",
      "Satisfied customers",
      "Transparent progress",
    ],
    cta: {
      title: "Meet the team behind your future home",
      description:
        "Share your vision and let us help find the right direction for your space.",
    },
  },
  ja: {
    heroParts: ["私たちの", "建築家チーム"],
    intro: "経験豊富な建築家と技術者が、構想から住まいの完成まで寄り添います。",
    contact: "相談する",
    meet: "チームを見る",
    book: "相談を予約",
    badge: {
      title: "建築家・技術者・専門家",
      description: "各プロジェクトで連携",
    },
    overview: {
      eyebrow: "私たちの取り組み",
      title: "創造的な発想、実用的な解決策、心を込めたサポート",
      paragraphs: [
        "一つひとつのプロジェクトには物語があります。ご要望を伺い、現状、ご予算、暮らしに合う提案をします。",
        "設計・技術・施工を一つの工程でつなぎ、美しく長く使いやすい空間をつくります。",
      ],
    },
    leadership: {
      eyebrow: "主要メンバー",
      title: "各プロジェクトを率いる人々",
    },
    members: [
      {
        prefix: "修士・建築家",
        role: "設計ディレクター",
        description:
          "建築・インテリア分野で15年以上の経験。美しさ、機能性、長期的な使い心地を両立します。",
      },
      {
        prefix: "技術者",
        role: "技術部長",
        description:
          "技術図書、構造、施工詳細の専門家。正確で整合性のある、実現可能な図面をまとめます。",
      },
      {
        prefix: "修士・建築家",
        role: "設計部長",
        description:
          "創造力とトレンド、お客様のニーズを踏まえ、深みのある独自の設計を提案します。",
      },
      {
        prefix: "技術者",
        role: "施工部長",
        description:
          "現場と施工管理の豊富な経験を生かし、工程、品質、安全を管理します。",
      },
    ],
    expertise: {
      eyebrow: "専門分野",
      title: "チームの六つの専門分野",
      cards: [
        {
          title: "建築設計",
          description:
            "個性があり、長く愛され、周囲の環境に調和する建築をつくります。",
        },
        {
          title: "インテリア設計",
          description:
            "暮らしの体験と個性を大切にした洗練された空間を提案します。",
        },
        {
          title: "技術図書の作成",
          description: "円滑な施工のために、正確で詳細な図書を整えます。",
        },
        {
          title: "施工監督",
          description: "図面から現場まで品質、工程、整合性を確認します。",
        },
        {
          title: "機能の最適化",
          description: "生活習慣とご要望に合わせて空間を構成します。",
        },
        {
          title: "素材の提案",
          description:
            "ご予算に合わせ、耐久性と美しさに配慮した素材を選びます。",
        },
      ],
    },
    process: {
      eyebrow: "連携の流れ",
      title: "構想から引き渡しまで共に進める",
      cards: [
        {
          title: "ご要望の確認",
          description: "お客様のご希望やお好みを伺います。",
        },
        {
          title: "現地調査と構想",
          description: "現状を確認し、アイデアと方針を提案します。",
        },
        {
          title: "詳細設計",
          description: "2D・3D図面、パース、必要な図書を作成します。",
        },
        {
          title: "技術調整",
          description: "各分野で整合性のある施工図をまとめます。",
        },
        {
          title: "施工監督",
          description: "現場の品質、工程、安全を監督します。",
        },
        {
          title: "引き渡しとサポート",
          description: "使用案内と保証対応を含めて引き渡します。",
        },
      ],
    },
    benefits: {
      eyebrow: "設計に込める思い",
      title: "お客様にお届けする価値",
      cards: [
        {
          title: "設計から施工までの一貫性",
          description:
            "各分野の連携により、正確な仕上がり、計画的な工程、明確な費用を目指します。",
        },
        {
          title: "個性ある建築",
          description: "住まい手の暮らし方とスタイルを反映します。",
        },
        {
          title: "洗練された内装",
          description: "素材、照明、細部まで丁寧に整えます。",
        },
        {
          title: "予算の最適化",
          description: "美しさを保ちながら費用を抑える方法を提案します。",
        },
        {
          title: "保証への取り組み",
          description: "引き渡し後も迅速なサポートを続けます。",
        },
      ],
    },
    metrics: [
      "年の経験",
      "完成したプロジェクト",
      "お客様満足度",
      "明確な工程管理",
    ],
    cta: {
      title: "あなたの住まいを支えるチームに会いませんか",
      description: "ご希望をお聞かせください。空間に合う方向性をご提案します。",
    },
  },
  ko: {
    heroParts: ["우리의", "건축가 팀"],
    intro:
      "풍부한 경험의 건축가와 엔지니어가 아이디어부터 집의 완성까지 함께합니다.",
    contact: "상담 문의",
    meet: "팀 만나기",
    book: "상담 예약",
    badge: {
      title: "건축가, 엔지니어, 전문가",
      description: "모든 프로젝트에서 협업",
    },
    overview: {
      eyebrow: "우리가 일하는 방식",
      title: "창의적인 생각, 실용적인 해법, 세심한 지원",
      paragraphs: [
        "모든 프로젝트에는 이야기가 있습니다. 고객의 요구를 듣고 현황, 예산 및 생활 방식에 맞는 해법을 제안합니다.",
        "설계, 기술 및 시공을 일관된 과정으로 연결하여 아름답고 오래 사용하기 편한 공간을 만듭니다.",
      ],
    },
    leadership: {
      eyebrow: "핵심 팀",
      title: "각 프로젝트를 이끄는 사람들",
    },
    members: [
      {
        prefix: "석사, 건축가",
        role: "설계 총괄",
        description:
          "건축과 인테리어 분야에서 15년 이상 경험을 쌓아 미관, 기능 및 오랜 사용의 편안함을 조화시킵니다.",
      },
      {
        prefix: "엔지니어",
        role: "기술 부서장",
        description:
          "기술 문서, 구조 및 시공 상세 전문가로 정확하고 일관되며 구현 가능한 도면을 만듭니다.",
      },
      {
        prefix: "석사, 건축가",
        role: "설계 부서장",
        description:
          "창의적인 사고와 최신 흐름, 고객의 요구를 분석하여 깊이 있고 차별화된 설계를 제안합니다.",
      },
      {
        prefix: "엔지니어",
        role: "시공 부서장",
        description:
          "풍부한 현장 관리 경험을 바탕으로 일정, 품질 및 안전을 관리합니다.",
      },
    ],
    expertise: {
      eyebrow: "전문 분야",
      title: "팀의 여섯 가지 전문 분야",
      cards: [
        {
          title: "건축 설계",
          description:
            "개성과 지속성을 갖추고 주변 환경에 어울리는 건축을 만듭니다.",
        },
        {
          title: "인테리어 설계",
          description: "고유한 경험과 감성을 담은 세련된 공간을 제안합니다.",
        },
        {
          title: "기술 문서 작성",
          description:
            "효율적이고 명확한 시공을 위한 정확한 상세 도면을 작성합니다.",
        },
        {
          title: "시공 감독",
          description: "도면부터 현장까지 품질, 일정 및 일관성을 확인합니다.",
        },
        {
          title: "기능 최적화",
          description: "요구와 생활 습관에 맞게 공간을 구성합니다.",
        },
        {
          title: "자재 솔루션",
          description: "예산에 맞는 내구성 있고 아름다운 자재를 제안합니다.",
        },
      ],
    },
    process: {
      eyebrow: "협업 과정",
      title: "아이디어부터 인도까지 함께",
      cards: [
        {
          title: "요구 사항 확인",
          description: "고객의 요구와 선호하는 스타일을 듣고 논의합니다.",
        },
        {
          title: "현장 조사 및 구상",
          description: "기존 공간을 확인하고 아이디어와 계획을 제안합니다.",
        },
        {
          title: "상세 설계",
          description: "2D/3D 도면, 이미지 및 필요한 문서를 개발합니다.",
        },
        {
          title: "기술 조율",
          description: "각 전문 분야가 일관된 시공 도면을 작성합니다.",
        },
        {
          title: "시공 감독",
          description: "현장 품질, 일정 및 안전을 감독합니다.",
        },
        {
          title: "인도 및 사후 관리",
          description: "사용 안내와 보증 지원을 포함하여 인도합니다.",
        },
      ],
    },
    benefits: {
      eyebrow: "모든 설계의 차별점",
      title: "고객이 얻는 가치",
      cards: [
        {
          title: "설계와 시공의 일관성",
          description:
            "긴밀한 협업으로 정확한 결과, 합의한 일정 및 명확한 비용을 추구합니다.",
        },
        {
          title: "개성 있는 건축",
          description: "프로젝트마다 고객의 스타일과 생활 방식을 반영합니다.",
        },
        {
          title: "세련된 인테리어",
          description: "자재, 조명부터 작은 디테일까지 살핍니다.",
        },
        {
          title: "예산 최적화",
          description: "미관을 유지하며 비용을 절감할 방법을 제안합니다.",
        },
        {
          title: "보증 약속",
          description: "인도 후에도 빠른 지원을 제공합니다.",
        },
      ],
    },
    metrics: ["년의 경험", "완공 프로젝트", "고객 만족도", "명확한 일정 관리"],
    cta: {
      title: "당신의 집과 함께할 팀을 만나세요",
      description:
        "원하는 공간을 이야기해 주세요. 적합한 방향을 상담해 드립니다.",
    },
  },
  sv: {
    heroParts: ["Vårt team av", "arkitekter"],
    intro:
      "Erfarna arkitekter och ingenjörer följer dig från idé till färdigt hem.",
    contact: "Få rådgivning",
    meet: "Möt teamet",
    book: "Boka rådgivning",
    badge: {
      title: "Arkitekter, ingenjörer och specialister",
      description: "Samarbete i varje projekt",
    },
    overview: {
      eyebrow: "Så arbetar vi",
      title: "Kreativa idéer, praktiska lösningar och engagerat stöd",
      paragraphs: [
        "Varje projekt har sin egen berättelse. Vi lyssnar på dina behov och anpassar lösningen efter platsen, budgeten och ditt liv.",
        "Vi förenar design, teknik och byggnation för vackra, hållbara och lättanvända rum.",
      ],
    },
    leadership: {
      eyebrow: "Vårt kärnteam",
      title: "De som leder varje projekt",
    },
    members: [
      {
        prefix: "Masterexamen, Arkitekt",
        role: "Designdirektör",
        description:
          "Över 15 års erfarenhet av arkitektur och inredning med balans mellan estetik, funktion och långvarig komfort.",
      },
      {
        prefix: "Ingenjör",
        role: "Teknikchef",
        description:
          "Specialist på tekniska handlingar, konstruktion och byggdetaljer som ger korrekta och genomförbara ritningar.",
      },
      {
        prefix: "Masterexamen, Arkitekt",
        role: "Designchef",
        description:
          "Kreativitet, trender och förståelse för kunden skapar genomtänkta och personliga lösningar.",
      },
      {
        prefix: "Ingenjör",
        role: "Byggchef",
        description:
          "Stor erfarenhet av byggledning med ansvar för tid, kvalitet och säkerhet.",
      },
    ],
    expertise: {
      eyebrow: "Vår expertis",
      title: "Teamets sex kompetensområden",
      cards: [
        {
          title: "Arkitektur",
          description:
            "Personlig och hållbar arkitektur som passar sin omgivning.",
        },
        {
          title: "Inredningsdesign",
          description: "Genomtänkta rum med egen karaktär och känsla.",
        },
        {
          title: "Tekniska handlingar",
          description:
            "Detaljerade och samordnade ritningar för ett tydligt byggarbete.",
        },
        {
          title: "Byggtillsyn",
          description:
            "Följer kvalitet, tid och helhet från ritning till byggplats.",
        },
        {
          title: "Funktionsplanering",
          description: "Organiserar rummen efter dina behov och vardagsvanor.",
        },
        {
          title: "Materiallösningar",
          description:
            "Rekommenderar vackra och hållbara material inom budgeten.",
        },
      ],
    },
    process: {
      eyebrow: "Vårt samarbete",
      title: "Tillsammans från idé till överlämning",
      cards: [
        {
          title: "Förstå behoven",
          description: "Lyssna på dina önskemål och din stil.",
        },
        {
          title: "Platsbesök och idéer",
          description: "Undersöka platsen och föreslå en plan.",
        },
        {
          title: "Detaljerad design",
          description: "Ta fram 2D/3D-planer och nödvändiga handlingar.",
        },
        {
          title: "Teknisk samordning",
          description:
            "Förbereda detaljerade byggritningar för alla discipliner.",
        },
        {
          title: "Byggtillsyn",
          description: "Följa kvalitet, framsteg och säkerhet på plats.",
        },
        {
          title: "Överlämning och eftervård",
          description: "Överlämna med användarinformation och garantistöd.",
        },
      ],
    },
    benefits: {
      eyebrow: "Omsorg i varje design",
      title: "Det våra kunder får",
      cards: [
        {
          title: "Samordnad design och byggnation",
          description:
            "Nära samarbete ger korrekta resultat, överenskomna tider och tydliga kostnader.",
        },
        {
          title: "Personlig arkitektur",
          description: "Varje projekt speglar ägarens stil och liv.",
        },
        {
          title: "Genomtänkt inredning",
          description: "Omsorg om material, ljus och varje detalj.",
        },
        {
          title: "Optimerad budget",
          description:
            "Detaljerade kalkyler och besparingar som bevarar estetiken.",
        },
        {
          title: "Garantiåtagande",
          description: "Fortsatt stöd och snabb hjälp efter överlämning.",
        },
      ],
    },
    metrics: [
      "Års erfarenhet",
      "Slutförda projekt",
      "Nöjda kunder",
      "Tydlig tidsuppföljning",
    ],
    cta: {
      title: "Möt teamet bakom ditt framtida hem",
      description:
        "Berätta om dina önskemål så hittar vi rätt riktning för ditt hem.",
    },
  },
  fr: {
    heroParts: ["Notre équipe", "d’architectes"],
    intro:
      "Des architectes et ingénieurs expérimentés à vos côtés, de l’idée au logement terminé.",
    contact: "Demander conseil",
    meet: "Rencontrer l’équipe",
    book: "Prendre rendez-vous",
    badge: {
      title: "Architectes, ingénieurs et spécialistes",
      description: "Ensemble sur chaque projet",
    },
    overview: {
      eyebrow: "Notre approche",
      title: "Créativité, solutions concrètes et accompagnement attentif",
      paragraphs: [
        "Chaque projet raconte une histoire. Nous écoutons vos besoins pour adapter la solution aux lieux, au budget et à votre mode de vie.",
        "Nous relions conception, technique et travaux pour créer des espaces beaux, durables et faciles à vivre.",
      ],
    },
    leadership: {
      eyebrow: "Notre équipe clé",
      title: "Les personnes qui pilotent chaque projet",
    },
    members: [
      {
        prefix: "Master, Architecte",
        role: "Directeur de la conception",
        description:
          "Plus de 15 ans d’expérience en architecture et intérieur, conciliant esthétique, fonctionnalité et confort durable.",
      },
      {
        prefix: "Ingénieur",
        role: "Responsable technique",
        description:
          "Spécialiste des documents techniques, structures et détails de chantier, pour des plans précis, cohérents et réalisables.",
      },
      {
        prefix: "Master, Architecte",
        role: "Responsable de la conception",
        description:
          "Créativité, tendances et analyse des besoins nourrissent des solutions de conception abouties et singulières.",
      },
      {
        prefix: "Ingénieur",
        role: "Responsable des travaux",
        description:
          "Une grande expérience du terrain pour gérer les délais, la qualité et la sécurité du chantier.",
      },
    ],
    expertise: {
      eyebrow: "Nos expertises",
      title: "Les six spécialités de notre équipe",
      cards: [
        {
          title: "Architecture",
          description:
            "Une architecture singulière, durable et adaptée à son environnement.",
        },
        {
          title: "Conception intérieure",
          description:
            "Des espaces raffinés, riches en caractère et en sensations.",
        },
        {
          title: "Documents techniques",
          description:
            "Des plans précis et coordonnés pour des travaux efficaces et clairs.",
        },
        {
          title: "Suivi de chantier",
          description:
            "Suivi de la qualité, du calendrier et de la cohérence sur place.",
        },
        {
          title: "Optimisation fonctionnelle",
          description:
            "Organiser l’espace autour de vos besoins et de vos habitudes.",
        },
        {
          title: "Solutions de matériaux",
          description:
            "Des matériaux durables et esthétiques adaptés à votre budget.",
        },
      ],
    },
    process: {
      eyebrow: "Notre collaboration",
      title: "Ensemble de l’idée à la livraison",
      cards: [
        {
          title: "Recueil des besoins",
          description: "Écouter vos attentes et votre style.",
        },
        {
          title: "Visite et idées",
          description: "Étudier les lieux et proposer une orientation.",
        },
        {
          title: "Conception détaillée",
          description:
            "Développer les plans 2D/3D et les documents nécessaires.",
        },
        {
          title: "Coordination technique",
          description: "Préparer les plans d’exécution des différents métiers.",
        },
        {
          title: "Suivi de chantier",
          description: "Contrôler la qualité, les délais et la sécurité.",
        },
        {
          title: "Livraison et suivi",
          description: "Livrer avec conseils d’utilisation et garantie.",
        },
      ],
    },
    benefits: {
      eyebrow: "Le soin dans chaque projet",
      title: "Ce que nos clients reçoivent",
      cards: [
        {
          title: "Conception et travaux coordonnés",
          description:
            "La collaboration assure des résultats précis, un calendrier convenu et des coûts transparents.",
        },
        {
          title: "Architecture de caractère",
          description:
            "Chaque projet reflète le style et la vie de son propriétaire.",
        },
        {
          title: "Intérieurs raffinés",
          description:
            "Une attention aux matériaux, à la lumière et aux détails.",
        },
        {
          title: "Budget optimisé",
          description:
            "Des estimations précises et des économies qui préservent l’esthétique.",
        },
        {
          title: "Engagement de garantie",
          description:
            "Un accompagnement durable et une aide rapide après livraison.",
        },
      ],
    },
    metrics: [
      "Années d’expérience",
      "Projets terminés",
      "Clients satisfaits",
      "Suivi transparent",
    ],
    cta: {
      title: "Rencontrez l’équipe qui accompagne votre futur chez-vous",
      description:
        "Partagez vos envies pour trouver la bonne direction pour votre espace.",
    },
  },
  ru: {
    heroParts: ["Наша команда", "архитекторов"],
    intro:
      "Опытные архитекторы и инженеры рядом с вами от идеи до готового дома.",
    contact: "Получить консультацию",
    meet: "Познакомиться с командой",
    book: "Записаться на консультацию",
    badge: {
      title: "Архитекторы, инженеры и специалисты",
      description: "Вместе в каждом проекте",
    },
    overview: {
      eyebrow: "Наш подход",
      title: "Творческое мышление, практичные решения и внимательная поддержка",
      paragraphs: [
        "У каждого проекта своя история. Мы слушаем ваши пожелания и учитываем объект, бюджет и образ жизни.",
        "Объединяем дизайн, технику и строительство, создавая красивые, долговечные и удобные пространства.",
      ],
    },
    leadership: {
      eyebrow: "Основная команда",
      title: "Люди, которые ведут каждый проект",
    },
    members: [
      {
        prefix: "Магистр, Архитектор",
        role: "Директор по дизайну",
        description:
          "Более 15 лет опыта в архитектуре и интерьерах, сочетание эстетики, функций и длительного комфорта.",
      },
      {
        prefix: "Инженер",
        role: "Руководитель технического отдела",
        description:
          "Специалист по документации, конструкциям и строительным деталям для точных и реализуемых чертежей.",
      },
      {
        prefix: "Магистр, Архитектор",
        role: "Руководитель отдела дизайна",
        description:
          "Творческий подход, актуальные тенденции и понимание клиента создают продуманные индивидуальные решения.",
      },
      {
        prefix: "Инженер",
        role: "Руководитель строительства",
        description:
          "Большой опыт управления на объекте с контролем сроков, качества и безопасности.",
      },
    ],
    expertise: {
      eyebrow: "Наш опыт",
      title: "Шесть специализаций команды",
      cards: [
        {
          title: "Архитектура",
          description:
            "Выразительная и долговечная архитектура в гармонии с окружением.",
        },
        {
          title: "Дизайн интерьера",
          description: "Утончённые пространства с индивидуальным характером.",
        },
        {
          title: "Техническая документация",
          description:
            "Точные и согласованные чертежи для понятного строительства.",
        },
        {
          title: "Строительный надзор",
          description: "Контроль качества, сроков и соответствия чертежам.",
        },
        {
          title: "Функциональная планировка",
          description:
            "Организация пространства под ваши потребности и привычки.",
        },
        {
          title: "Материалы",
          description: "Долговечные и красивые материалы в рамках бюджета.",
        },
      ],
    },
    process: {
      eyebrow: "Наше сотрудничество",
      title: "Вместе от идеи до передачи",
      cards: [
        {
          title: "Понимание потребностей",
          description: "Обсуждаем требования и предпочтения.",
        },
        {
          title: "Обследование и идеи",
          description: "Изучаем объект и предлагаем план.",
        },
        {
          title: "Детальный дизайн",
          description: "Разрабатываем 2D/3D-планы и документацию.",
        },
        {
          title: "Техническая координация",
          description: "Готовим согласованные рабочие чертежи.",
        },
        {
          title: "Строительный надзор",
          description: "Следим за качеством, сроками и безопасностью.",
        },
        {
          title: "Передача и поддержка",
          description: "Передаём объект с рекомендациями и гарантией.",
        },
      ],
    },
    benefits: {
      eyebrow: "Внимание в каждом проекте",
      title: "Что получают наши клиенты",
      cards: [
        {
          title: "Единство дизайна и строительства",
          description:
            "Тесная координация помогает обеспечить точность, согласованные сроки и прозрачные затраты.",
        },
        {
          title: "Архитектура с характером",
          description: "Каждый проект отражает стиль и образ жизни владельца.",
        },
        {
          title: "Утончённый интерьер",
          description: "Внимание к материалам, свету и каждой детали.",
        },
        {
          title: "Оптимизация бюджета",
          description:
            "Подробная смета и экономные решения без потери эстетики.",
        },
        {
          title: "Гарантийные обязательства",
          description:
            "Долговременная поддержка и быстрая помощь после передачи.",
        },
      ],
    },
    metrics: [
      "Лет опыта",
      "Завершённых проектов",
      "Довольных клиентов",
      "Прозрачный график",
    ],
    cta: {
      title: "Познакомьтесь с командой вашего будущего дома",
      description:
        "Расскажите о пожеланиях, и мы поможем выбрать подходящее направление.",
    },
  },
  es: {
    heroParts: ["Nuestro equipo de", "arquitectos"],
    intro:
      "Arquitectos e ingenieros con experiencia le acompañan desde la idea hasta su hogar terminado.",
    contact: "Pedir asesoramiento",
    meet: "Conocer al equipo",
    book: "Reservar una consulta",
    badge: {
      title: "Arquitectos, ingenieros y especialistas",
      description: "Juntos en cada proyecto",
    },
    overview: {
      eyebrow: "Nuestro enfoque",
      title: "Creatividad, soluciones prácticas y apoyo atento",
      paragraphs: [
        "Cada proyecto tiene su historia. Escuchamos sus necesidades y adaptamos las soluciones al espacio, presupuesto y estilo de vida.",
        "Conectamos diseño, ingeniería y construcción para crear espacios bellos, duraderos y fáciles de usar.",
      ],
    },
    leadership: {
      eyebrow: "Nuestro equipo clave",
      title: "Las personas que lideran cada proyecto",
    },
    members: [
      {
        prefix: "Máster, Arquitecto",
        role: "Director de Diseño",
        description:
          "Más de 15 años de experiencia en arquitectura e interiores, equilibrando estética, funcionalidad y comodidad duradera.",
      },
      {
        prefix: "Ingeniero",
        role: "Responsable Técnico",
        description:
          "Especialista en documentación técnica, estructuras y detalles para planos precisos, coordinados y realizables.",
      },
      {
        prefix: "Máster, Arquitecto",
        role: "Responsable de Diseño",
        description:
          "Creatividad, tendencias y análisis del cliente para soluciones de diseño cuidadas y diferentes.",
      },
      {
        prefix: "Ingeniero",
        role: "Responsable de Construcción",
        description:
          "Amplia experiencia en obra para gestionar plazos, calidad y seguridad.",
      },
    ],
    expertise: {
      eyebrow: "Nuestras especialidades",
      title: "Las seis especialidades del equipo",
      cards: [
        {
          title: "Diseño arquitectónico",
          description:
            "Arquitectura con carácter, duradera y adecuada al entorno.",
        },
        {
          title: "Diseño interior",
          description:
            "Espacios refinados con experiencias y emociones propias.",
        },
        {
          title: "Documentación técnica",
          description:
            "Planos detallados y coordinados para obras eficientes y claras.",
        },
        {
          title: "Supervisión de obra",
          description:
            "Control de calidad, plazos y coherencia con los planos.",
        },
        {
          title: "Planificación funcional",
          description: "Organizar el espacio según sus necesidades y rutinas.",
        },
        {
          title: "Soluciones de materiales",
          description:
            "Materiales bellos y duraderos adaptados al presupuesto.",
        },
      ],
    },
    process: {
      eyebrow: "Nuestra colaboración",
      title: "Juntos desde la idea hasta la entrega",
      cards: [
        {
          title: "Comprender las necesidades",
          description: "Escuchar sus requisitos y estilo preferido.",
        },
        {
          title: "Visita e ideas",
          description: "Evaluar el lugar y proponer un plan.",
        },
        {
          title: "Diseño detallado",
          description: "Desarrollar planos 2D/3D y documentación necesaria.",
        },
        {
          title: "Coordinación técnica",
          description: "Preparar planos de obra entre especialidades.",
        },
        {
          title: "Supervisión de obra",
          description: "Controlar calidad, plazos y seguridad.",
        },
        {
          title: "Entrega y posventa",
          description: "Entregar con instrucciones de uso y garantía.",
        },
      ],
    },
    benefits: {
      eyebrow: "Cuidado en cada diseño",
      title: "Lo que reciben nuestros clientes",
      cards: [
        {
          title: "Diseño y construcción coordinados",
          description:
            "La colaboración permite resultados precisos, plazos acordados y costes transparentes.",
        },
        {
          title: "Arquitectura con carácter",
          description:
            "Cada proyecto refleja el estilo y la vida de su propietario.",
        },
        {
          title: "Interiores refinados",
          description:
            "Atención a los materiales, la iluminación y cada detalle.",
        },
        {
          title: "Optimización del presupuesto",
          description: "Estimaciones detalladas y ahorro sin perder estética.",
        },
        {
          title: "Compromiso de garantía",
          description: "Apoyo continuo y asistencia rápida tras la entrega.",
        },
      ],
    },
    metrics: [
      "Años de experiencia",
      "Proyectos terminados",
      "Clientes satisfechos",
      "Progreso transparente",
    ],
    cta: {
      title: "Conozca al equipo que acompaña su futuro hogar",
      description:
        "Comparta sus deseos para encontrar la dirección adecuada para su espacio.",
    },
  },
  zh: {
    heroParts: ["我们的", "建筑师团队"],
    intro: "经验丰富的建筑师和工程师，从创意到家的完工始终与您同行。",
    contact: "联系咨询",
    meet: "认识团队",
    book: "立即预约咨询",
    badge: {
      title: "建筑师、工程师与专家",
      description: "每个项目紧密协作",
    },
    overview: {
      eyebrow: "我们的工作方式",
      title: "创意构思、实用方案与用心陪伴",
      paragraphs: [
        "每个项目都有自己的故事。我们倾听客户需求，根据现场、预算和生活习惯制定合适方案。",
        "我们以统一流程连接设计、技术与施工，打造美观、耐久且使用便利的空间。",
      ],
    },
    leadership: {
      eyebrow: "核心团队",
      title: "引领每个项目的专业人员",
    },
    members: [
      {
        prefix: "硕士、建筑师",
        role: "设计总监",
        description:
          "拥有15年以上建筑与室内设计经验，平衡美观、功能与长期使用体验。",
      },
      {
        prefix: "工程师",
        role: "技术部门负责人",
        description:
          "专长于技术文件、结构和施工细节，确保图纸准确、协调并可实际实施。",
      },
      {
        prefix: "硕士、建筑师",
        role: "设计部门负责人",
        description:
          "结合创意思维、趋势与客户需求，提出有深度且独特的设计方案。",
      },
      {
        prefix: "工程师",
        role: "施工部门负责人",
        description: "拥有丰富现场与施工管理经验，全程管理进度、质量和安全。",
      },
    ],
    expertise: {
      eyebrow: "突出专长",
      title: "团队的六大专业领域",
      cards: [
        {
          title: "建筑设计",
          description: "创造有个性、持久且适应周边环境的建筑空间。",
        },
        {
          title: "室内设计",
          description: "打造精致空间，呈现独特体验与情感。",
        },
        {
          title: "技术文件编制",
          description: "详细、准确且协调的图纸，支持高效透明施工。",
        },
        {
          title: "施工监督",
          description: "从图纸到现场跟踪质量、进度与一致性。",
        },
        {
          title: "功能优化",
          description: "依据需求与生活节奏组织空间。",
        },
        {
          title: "材料方案",
          description: "推荐适合预算、美观耐久且友好的材料。",
        },
      ],
    },
    process: {
      eyebrow: "协作流程",
      title: "从创意到交付一起推进",
      cards: [
        {
          title: "了解需求",
          description: "倾听并讨论客户需求与风格偏好。",
        },
        {
          title: "勘察与构思",
          description: "评估现场，发展创意并提出方案。",
        },
        {
          title: "详细设计",
          description: "制定2D/3D方案、效果图及必要文件。",
        },
        {
          title: "技术协调",
          description: "编制各专业协调一致的施工图。",
        },
        {
          title: "施工监督",
          description: "监督现场质量、进度和安全。",
        },
        {
          title: "交付与售后",
          description: "交付项目，提供使用说明及保修支持。",
        },
      ],
    },
    benefits: {
      eyebrow: "每个设计中的用心",
      title: "客户获得的价值",
      cards: [
        {
          title: "设计与施工同步",
          description: "各专业紧密协作，确保准确成果、约定进度与透明成本。",
        },
        {
          title: "个性建筑",
          description: "每个项目体现业主的风格与生活方式。",
        },
        {
          title: "精致室内空间",
          description: "从材料、灯光到细节精心打造。",
        },
        {
          title: "预算优化",
          description: "详细估算，提供兼顾美观的节约方案。",
        },
        {
          title: "保修承诺",
          description: "交付后继续陪伴并及时提供支持。",
        },
      ],
    },
    metrics: ["年经验", "已完工项目", "客户满意度", "透明进度"],
    cta: {
      title: "认识陪伴您打造家的团队",
      description: "分享您的期望，我们将为未来空间建议合适的方向。",
    },
  },
};
