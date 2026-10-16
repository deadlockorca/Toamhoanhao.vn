import type { SiteLocale } from "@/lib/locale";

type ConstructionDiaryCopy = {
  heroParts: string[];
  intro: string;
  explore: string;
  label: string;
  title: string;
  description: string;
  step: string;
  durationTitle: string;
  warrantyTitle: string;
  notesTitle: string;
  ctaTitle: string;
  ctaIntro: string;
  steps: { title: string; description: string }[];
  durations: string[];
  warranties: string[];
  notes: string[];
};
export const constructionDiaryCopy: Record<SiteLocale, ConstructionDiaryCopy> =
  {
    vi: {
      heroParts: ["Nhật kí", "thi công"],
      intro:
        "Theo dõi hành trình từ ý tưởng đến bàn giao. Quy trình 8 bước giúp bạn nắm rõ từng hạng mục, tiến độ và trách nhiệm trong quá trình hoàn thiện tổ ấm.",
      explore: "Khám phá quy trình",
      label: "Quy trình thi công",
      title: "8 bước đồng hành cùng công trình của bạn",
      description:
        "Từ tiếp nhận yêu cầu đến bảo hành, mỗi giai đoạn đều có phạm vi công việc rõ ràng và sự phối hợp với gia chủ.",
      step: "Giai đoạn",
      durationTitle: "Thời gian hoàn thành theo từng loại công trình",
      warrantyTitle: "Bảo hành và bảo dưỡng công trình",
      notesTitle: "Những lưu ý trước khi triển khai",
      ctaTitle: "Cùng bạn hoàn thiện tổ ấm, từng bước một",
      ctaIntro:
        "Chia sẻ nhu cầu để được tư vấn quy trình, kế hoạch thi công và ngân sách phù hợp với công trình của bạn.",
      steps: [
        {
          title: "Tiếp nhận yêu cầu",
          description:
            "Lắng nghe phong cách mong muốn, nhu cầu sử dụng, vật liệu và hạn mức chi phí. Tư vấn gói dịch vụ phù hợp với công trình và ngân sách của gia chủ.",
        },
        {
          title: "Khảo sát hiện trạng",
          description:
            "Kiểm tra kích thước phòng, cửa sổ, cửa ra vào, cột dầm và các điều kiện thực tế. Kết quả khảo sát là cơ sở để xây dựng phương án thiết kế và kế hoạch thi công.",
        },
        {
          title: "Thiết kế và báo giá",
          description:
            "Thống nhất phương án 3D, triển khai hồ sơ kỹ thuật 2D và chi tiết nội thất. Lập dự toán theo hạng mục, khối lượng, vật liệu; cùng gia chủ điều chỉnh để phân bổ chi phí hợp lý.",
        },
        {
          title: "Ký kết hợp đồng",
          description:
            "Hai bên thống nhất dự toán, phạm vi công việc, tiến độ và các điều khoản. Hợp đồng thi công đi kèm báo giá chi tiết, làm cơ sở phối hợp trong suốt quá trình triển khai.",
        },
        {
          title: "Thi công phần thô",
          description:
            "Triển khai các hạng mục theo hồ sơ: tháo dỡ và cải tạo, xây trát, chống thấm, trần thạch cao, sơn bả và lát sàn. Phạm vi thực hiện tùy theo hiện trạng và hợp đồng của từng công trình.",
        },
        {
          title: "Sản xuất và lắp đặt nội thất",
          description:
            "Đồ gỗ được sản xuất tại xưởng hoặc mua sẵn theo phương án đã thống nhất. Tổ chức lắp đặt tại công trình; thời gian phụ thuộc khối lượng, mức độ hoàn thiện và điều kiện thi công.",
        },
        {
          title: "Nghiệm thu và bàn giao",
          description:
            "Kiểm tra các hạng mục lắp đặt và bàn giao theo kế hoạch trong hợp đồng. Những phát sinh, thay đổi tiến độ được trao đổi trực tiếp với chủ đầu tư trong quá trình thực hiện.",
        },
        {
          title: "Thanh lý và bảo hành",
          description:
            "Sau khi nghiệm thu toàn bộ hạng mục, hai bên thanh lý hợp đồng theo điều khoản đã ký. Đội ngũ tiếp tục đồng hành với dịch vụ bảo hành và bảo dưỡng công trình.",
        },
      ],
      durations: [
        "Chung cư · 25–35 ngày",
        "Biệt thự, nhà phố · 30–45 ngày",
        "Văn phòng · 15–25 ngày",
        "Showroom · 25–35 ngày",
        "Khách sạn, nhà hàng · theo hồ sơ thiết kế",
      ],
      warranties: [
        "Đồ gỗ nội thất · bảo hành 12 tháng",
        "Hạng mục hoàn thiện · bảo hành 06 tháng",
        "Thiết bị, phụ kiện · theo chính sách của hãng",
      ],
      notes: [
        "Thời gian thực tế có thể thay đổi tùy khối lượng công việc, điều kiện hiện trường và các yếu tố khách quan.",
        "Quy trình có thể thêm hoặc bớt công đoạn theo yêu cầu của khách hàng và phạm vi công việc đã thống nhất.",
      ],
    },
    en: {
      heroParts: ["Construction", "diary"],
      intro:
        "Follow the journey from the first idea to handover. Our eight-step process clarifies the work, schedule and responsibilities throughout your interior project.",
      explore: "Explore the process",
      label: "Construction process",
      title: "8 steps alongside your project",
      description:
        "From your first enquiry to warranty support, each stage has a clear scope and is coordinated with you.",
      step: "Stage",
      durationTitle: "Completion time by project type",
      warrantyTitle: "Warranty and maintenance",
      notesTitle: "Before work begins",
      ctaTitle: "Bringing your home to life, step by step",
      ctaIntro:
        "Tell us what you need for advice on the process, schedule and budget for your project.",
      steps: [
        {
          title: "Understand your needs",
          description:
            "Discuss your preferred style, practical needs, materials and budget. Recommend a service package suited to your project and spending plan.",
        },
        {
          title: "Survey the site",
          description:
            "Measure rooms, windows, doors, columns and beams, and check site conditions. The survey informs the design and construction plan.",
        },
        {
          title: "Design and quotation",
          description:
            "Agree the 3D concept, develop 2D technical drawings and interior details. Prepare an itemised estimate of quantities and materials, adjusting the scope with you to suit the budget.",
        },
        {
          title: "Sign the contract",
          description:
            "Agree the estimate, work scope, schedule and terms. The construction contract includes a detailed quotation as a basis for coordination.",
        },
        {
          title: "Base construction works",
          description:
            "Carry out agreed demolition, renovation, masonry, waterproofing, plasterboard ceilings, painting and flooring. The actual scope depends on site conditions and the contract.",
        },
        {
          title: "Furniture production and installation",
          description:
            "Furniture is made in our workshop or sourced as agreed, then installed on site. Timing depends on quantities, finish requirements and working conditions.",
        },
        {
          title: "Inspection and handover",
          description:
            "Inspect installed items and hand over according to the contractual schedule. Additional work and schedule changes are discussed directly with the owner.",
        },
        {
          title: "Closeout and warranty",
          description:
            "After acceptance of all work, close out the contract under the agreed terms. Our team continues to support the project with warranty and maintenance services.",
        },
      ],
      durations: [
        "Apartments · 25–35 days",
        "Villas and townhouses · 30–45 days",
        "Offices · 15–25 days",
        "Showrooms · 25–35 days",
        "Hotels and restaurants · based on design documents",
      ],
      warranties: [
        "Wood furniture · 12-month warranty",
        "Finishing works · 6-month warranty",
        "Equipment and accessories · manufacturer’s warranty",
      ],
      notes: [
        "Actual timing may vary with the volume of work, site conditions and external factors.",
        "Stages may be added or omitted to suit the client’s requirements and agreed scope.",
      ],
    },
    ja: {
      heroParts: ["施工", "ダイアリー"],
      intro:
        "構想から引き渡しまでの流れをご紹介。8段階の工程で、内装工事の内容・予定・役割を分かりやすくお伝えします。",
      explore: "工程を見る",
      label: "施工プロセス",
      title: "完成まで寄り添う8つのステップ",
      description:
        "ご相談から保証対応まで、各段階の業務範囲を明確にし、お客様と連携して進めます。",
      step: "工程",
      durationTitle: "建物の種類別の工期目安",
      warrantyTitle: "保証とメンテナンス",
      notesTitle: "着工前のご確認",
      ctaTitle: "一歩ずつ、理想の住まいへ",
      ctaIntro:
        "ご希望をお聞かせください。施工の流れ、スケジュール、ご予算をご提案します。",
      steps: [
        {
          title: "ご要望の確認",
          description:
            "お好みのスタイル、使い方、素材、ご予算を伺い、計画に合うサービスをご提案します。",
        },
        {
          title: "現地調査",
          description:
            "部屋・窓・出入口・柱・梁の寸法や現場条件を確認し、設計と施工計画の基礎資料を整えます。",
        },
        {
          title: "設計とお見積もり",
          description:
            "3D案を確認後、2D技術図面と内装詳細を作成。項目・数量・素材別に積算し、ご予算に合わせて内容を調整します。",
        },
        {
          title: "契約の締結",
          description:
            "見積もり、施工範囲、工程、条件を双方で確認。詳細見積書を添えた契約書を施工中の連携の基準とします。",
        },
        {
          title: "下地工事",
          description:
            "合意した解体・改修・左官・防水・石膏ボード天井・塗装・床工事を実施。範囲は現況と契約に応じて決まります。",
        },
        {
          title: "家具の製作と設置",
          description:
            "合意した計画に沿って工場製作または既製品を調達し、現場で設置します。期間は数量、仕上げ、施工条件によって異なります。",
        },
        {
          title: "検査と引き渡し",
          description:
            "設置済みの項目を検査し、契約工程に沿って引き渡します。追加工事や工程変更は施主様へ直接ご説明します。",
        },
        {
          title: "契約精算と保証",
          description:
            "全項目の検収後、合意した条件に基づき契約を精算。引き渡し後も保証とメンテナンスでサポートします。",
        },
      ],
      durations: [
        "集合住宅 · 25〜35日",
        "ヴィラ・タウンハウス · 30〜45日",
        "オフィス · 15〜25日",
        "ショールーム · 25〜35日",
        "ホテル・飲食店 · 設計図書による",
      ],
      warranties: [
        "木製家具 · 12か月保証",
        "仕上げ工事 · 6か月保証",
        "設備・金具 · メーカー保証に準ずる",
      ],
      notes: [
        "実際の期間は工事量、現場条件、その他の要因によって変動します。",
        "お客様のご要望と合意した業務範囲に応じて、工程を追加・省略する場合があります。",
      ],
    },
    ko: {
      heroParts: ["시공", "일지"],
      intro:
        "첫 구상부터 인도까지의 여정을 확인하세요. 8단계 절차로 공사 범위, 일정, 담당 업무를 명확하게 안내합니다.",
      explore: "시공 절차 보기",
      label: "시공 절차",
      title: "공사와 함께하는 8단계",
      description:
        "첫 상담부터 보증까지 각 단계의 업무 범위를 정하고 고객과 협의하여 진행합니다.",
      step: "단계",
      durationTitle: "공간 유형별 예상 공사 기간",
      warrantyTitle: "보증 및 유지 관리",
      notesTitle: "공사 전 확인 사항",
      ctaTitle: "한 단계씩 완성하는 나만의 집",
      ctaIntro:
        "요구 사항을 알려주시면 시공 절차, 일정과 예산을 상담해 드립니다.",
      steps: [
        {
          title: "요구 사항 접수",
          description:
            "원하는 스타일, 사용 목적, 자재와 예산을 듣고 프로젝트에 맞는 서비스 패키지를 제안합니다.",
        },
        {
          title: "현장 조사",
          description:
            "방, 창문, 출입문, 기둥과 보의 치수 및 현장 조건을 확인하여 설계와 시공 계획의 기초 자료를 마련합니다.",
        },
        {
          title: "설계 및 견적",
          description:
            "3D 계획을 협의하고 2D 기술 도면과 가구 상세도를 작성합니다. 항목, 수량, 자재별 견적을 산출하고 예산에 맞게 조정합니다.",
        },
        {
          title: "계약 체결",
          description:
            "견적, 업무 범위, 일정과 조건에 합의합니다. 상세 견적을 포함한 시공 계약을 바탕으로 공사를 진행합니다.",
        },
        {
          title: "기초 및 마감 공사",
          description:
            "합의한 철거, 개보수, 조적, 방수, 석고보드 천장, 도장과 바닥 공사를 진행합니다. 범위는 현장 상태와 계약에 따릅니다.",
        },
        {
          title: "가구 제작 및 설치",
          description:
            "합의한 계획에 따라 공장에서 제작하거나 기성 가구를 조달하여 현장에 설치합니다. 기간은 물량, 마감 수준과 현장 조건에 따라 달라집니다.",
        },
        {
          title: "검수 및 인도",
          description:
            "설치 항목을 점검하고 계약 일정에 따라 인도합니다. 추가 공사나 일정 변경은 건축주와 직접 협의합니다.",
        },
        {
          title: "계약 정산 및 보증",
          description:
            "전체 항목 검수 후 계약 조건에 따라 정산합니다. 이후에도 보증 및 유지 관리 서비스를 제공합니다.",
        },
      ],
      durations: [
        "아파트 · 25–35일",
        "빌라 및 타운하우스 · 30–45일",
        "사무실 · 15–25일",
        "쇼룸 · 25–35일",
        "호텔 및 식당 · 설계 도서에 따름",
      ],
      warranties: [
        "목재 가구 · 12개월 보증",
        "마감 공사 · 6개월 보증",
        "설비 및 부속품 · 제조사 보증",
      ],
      notes: [
        "실제 기간은 물량, 현장 조건 및 외부 요인에 따라 달라질 수 있습니다.",
        "고객 요구 사항과 합의한 범위에 따라 일부 단계를 추가하거나 생략할 수 있습니다.",
      ],
    },
    sv: {
      heroParts: ["Bygg", "dagbok"],
      intro:
        "Följ resan från första idé till överlämning. Åtta steg tydliggör arbeten, tidsplan och ansvar under ditt inredningsprojekt.",
      explore: "Se processen",
      label: "Byggprocess",
      title: "8 steg genom ditt projekt",
      description:
        "Från första förfrågan till garanti har varje steg en tydlig omfattning och samordnas med dig.",
      step: "Etapp",
      durationTitle: "Tidsåtgång för olika projekt",
      warrantyTitle: "Garanti och underhåll",
      notesTitle: "Innan arbetet börjar",
      ctaTitle: "Vi skapar ditt hem, steg för steg",
      ctaIntro:
        "Berätta om dina behov för rådgivning om arbetsgång, tidsplan och budget.",
      steps: [
        {
          title: "Ta emot dina önskemål",
          description:
            "Vi går igenom stil, funktion, material och budget och föreslår ett tjänstepaket som passar projektet.",
        },
        {
          title: "Undersöka platsen",
          description:
            "Vi mäter rum, fönster, dörrar, pelare och balkar och kontrollerar förutsättningarna inför design och byggplanering.",
        },
        {
          title: "Design och offert",
          description:
            "Vi enas om 3D-förslaget och tar fram tekniska 2D-ritningar och inredningsdetaljer. Offerten specificerar arbeten, mängder och material och anpassas till budgeten.",
        },
        {
          title: "Teckna avtal",
          description:
            "Vi enas om pris, omfattning, tidsplan och villkor. Byggavtalet innehåller en detaljerad offert som grund för samarbetet.",
        },
        {
          title: "Grundläggande byggarbeten",
          description:
            "Avtalad rivning, renovering, murning, tätskikt, gipstak, målning och golvläggning utförs utifrån platsens skick och avtalets omfattning.",
        },
        {
          title: "Tillverkning och montering",
          description:
            "Möbler tillverkas i verkstaden eller köps in enligt överenskommelse och monteras på plats. Tiden beror på mängd, finish och arbetsförhållanden.",
        },
        {
          title: "Besiktning och överlämning",
          description:
            "Vi kontrollerar monterade delar och överlämnar enligt avtalets plan. Tillkommande arbeten och tidsändringar diskuteras direkt med beställaren.",
        },
        {
          title: "Avslut och garanti",
          description:
            "Efter godkännande av samtliga arbeten avslutas avtalet enligt villkoren. Teamet fortsätter att hjälpa till med garanti och underhåll.",
        },
      ],
      durations: [
        "Lägenheter · 25–35 dagar",
        "Villor och radhus · 30–45 dagar",
        "Kontor · 15–25 dagar",
        "Utställningslokaler · 25–35 dagar",
        "Hotell och restauranger · enligt projekteringen",
      ],
      warranties: [
        "Trämöbler · 12 månaders garanti",
        "Ytskiktsarbeten · 6 månaders garanti",
        "Utrustning och tillbehör · tillverkarens garanti",
      ],
      notes: [
        "Den faktiska tiden kan ändras beroende på arbetsmängd, förhållanden på plats och yttre faktorer.",
        "Steg kan läggas till eller utgå utifrån kundens önskemål och avtalad omfattning.",
      ],
    },
    fr: {
      heroParts: ["Carnet de", "chantier"],
      intro:
        "Suivez le parcours de la première idée à la livraison. Huit étapes précisent les travaux, le calendrier et les responsabilités de votre projet.",
      explore: "Découvrir les étapes",
      label: "Déroulement du chantier",
      title: "8 étapes pour accompagner votre projet",
      description:
        "Du premier échange à la garantie, chaque phase a un périmètre clair, défini en concertation avec vous.",
      step: "Étape",
      durationTitle: "Délais selon le type de projet",
      warrantyTitle: "Garantie et entretien",
      notesTitle: "Avant de commencer les travaux",
      ctaTitle: "Votre intérieur prend vie, étape par étape",
      ctaIntro:
        "Présentez vos besoins pour définir le déroulement, le calendrier et le budget de votre projet.",
      steps: [
        {
          title: "Recueillir vos besoins",
          description:
            "Échange sur le style, les usages, les matériaux et le budget pour proposer une formule adaptée à votre projet.",
        },
        {
          title: "Relever l’existant",
          description:
            "Mesure des pièces, fenêtres, portes, poteaux et poutres, puis vérification des conditions du site pour préparer la conception et les travaux.",
        },
        {
          title: "Conception et devis",
          description:
            "Validation du projet 3D, réalisation des plans techniques 2D et des détails. Le devis précise les postes, quantités et matériaux, ajustés avec vous selon le budget.",
        },
        {
          title: "Signer le contrat",
          description:
            "Accord sur le devis, le périmètre, le calendrier et les conditions. Le contrat de travaux comprend un devis détaillé qui sert de référence.",
        },
        {
          title: "Travaux préparatoires",
          description:
            "Réalisation des démolitions, rénovations, maçonneries, étanchéité, plafonds en plaques de plâtre, peintures et sols prévus selon l’existant et le contrat.",
        },
        {
          title: "Fabrication et pose",
          description:
            "Le mobilier est fabriqué en atelier ou acheté selon le projet validé, puis installé sur place. Les délais dépendent du volume, des finitions et des conditions de chantier.",
        },
        {
          title: "Réception et livraison",
          description:
            "Vérification des éléments posés et livraison selon le calendrier contractuel. Les travaux supplémentaires et changements de planning sont discutés avec le maître d’ouvrage.",
        },
        {
          title: "Clôture et garantie",
          description:
            "Après réception de tous les travaux, le contrat est clôturé selon les conditions signées. L’équipe poursuit son accompagnement avec la garantie et l’entretien.",
        },
      ],
      durations: [
        "Appartements · 25–35 jours",
        "Villas et maisons de ville · 30–45 jours",
        "Bureaux · 15–25 jours",
        "Showrooms · 25–35 jours",
        "Hôtels et restaurants · selon le dossier de conception",
      ],
      warranties: [
        "Mobilier en bois · garantie de 12 mois",
        "Travaux de finition · garantie de 6 mois",
        "Équipements et accessoires · garantie du fabricant",
      ],
      notes: [
        "La durée réelle varie selon le volume de travaux, les conditions du site et les facteurs extérieurs.",
        "Des phases peuvent être ajoutées ou retirées selon les besoins du client et le périmètre convenu.",
      ],
    },
    ru: {
      heroParts: ["Дневник", "строительства"],
      intro:
        "Проследите путь от первой идеи до сдачи объекта. Восемь этапов помогают понять состав работ, сроки и ответственность участников.",
      explore: "Посмотреть этапы",
      label: "Процесс работ",
      title: "8 этапов вашего проекта",
      description:
        "От первого обращения до гарантийного обслуживания каждый этап имеет чёткий объём работ и согласуется с заказчиком.",
      step: "Этап",
      durationTitle: "Сроки по типам объектов",
      warrantyTitle: "Гарантия и обслуживание",
      notesTitle: "Перед началом работ",
      ctaTitle: "Создаём ваш дом шаг за шагом",
      ctaIntro:
        "Расскажите о своих задачах, чтобы обсудить порядок работ, сроки и бюджет проекта.",
      steps: [
        {
          title: "Приём пожеланий",
          description:
            "Обсуждаем стиль, функциональные потребности, материалы и бюджет. Предлагаем подходящий состав услуг.",
        },
        {
          title: "Обследование объекта",
          description:
            "Замеряем помещения, окна, двери, колонны и балки, проверяем условия на объекте для подготовки проекта и плана работ.",
        },
        {
          title: "Проект и смета",
          description:
            "Согласуем 3D-концепцию, готовим технические 2D-чертежи и детали интерьера. Смета учитывает виды работ, объёмы и материалы; состав уточняем с учётом бюджета.",
        },
        {
          title: "Подписание договора",
          description:
            "Согласуем смету, объём работ, сроки и условия. Подробная смета входит в договор и служит основой взаимодействия.",
        },
        {
          title: "Подготовительные работы",
          description:
            "Выполняем согласованные демонтаж, ремонт, кладку, гидроизоляцию, потолки из гипсокартона, окраску и полы. Объём зависит от состояния объекта и договора.",
        },
        {
          title: "Производство и монтаж мебели",
          description:
            "Мебель изготавливаем в мастерской или приобретаем по согласованному проекту, затем монтируем на объекте. Срок зависит от объёмов, отделки и условий работ.",
        },
        {
          title: "Приёмка и сдача",
          description:
            "Проверяем установленные элементы и передаём объект по договорному графику. Дополнительные работы и изменения сроков обсуждаем с заказчиком.",
        },
        {
          title: "Закрытие договора и гарантия",
          description:
            "После приёмки всех работ закрываем договор на согласованных условиях. Команда продолжает гарантийное и техническое обслуживание.",
        },
      ],
      durations: [
        "Квартиры · 25–35 дней",
        "Виллы и таунхаусы · 30–45 дней",
        "Офисы · 15–25 дней",
        "Шоурумы · 25–35 дней",
        "Гостиницы и рестораны · по проекту",
      ],
      warranties: [
        "Деревянная мебель · гарантия 12 месяцев",
        "Отделочные работы · гарантия 6 месяцев",
        "Оборудование и фурнитура · гарантия производителя",
      ],
      notes: [
        "Фактические сроки зависят от объёма работ, условий объекта и внешних факторов.",
        "Этапы могут добавляться или исключаться по требованиям заказчика и согласованному объёму работ.",
      ],
    },
    es: {
      heroParts: ["Diario de", "obra"],
      intro:
        "Sigue el recorrido desde la primera idea hasta la entrega. Ocho etapas aclaran los trabajos, los plazos y las responsabilidades de tu proyecto.",
      explore: "Explorar el proceso",
      label: "Proceso de obra",
      title: "8 etapas para acompañar tu proyecto",
      description:
        "Desde la primera consulta hasta la garantía, cada fase tiene un alcance claro y se coordina contigo.",
      step: "Etapa",
      durationTitle: "Plazos según el tipo de proyecto",
      warrantyTitle: "Garantía y mantenimiento",
      notesTitle: "Antes de comenzar",
      ctaTitle: "Creamos tu hogar, paso a paso",
      ctaIntro:
        "Cuéntanos tus necesidades para asesorarte sobre el proceso, los plazos y el presupuesto.",
      steps: [
        {
          title: "Recoger tus necesidades",
          description:
            "Hablamos de estilo, uso, materiales y presupuesto para proponer un paquete de servicios adecuado al proyecto.",
        },
        {
          title: "Inspeccionar el inmueble",
          description:
            "Medimos habitaciones, ventanas, puertas, pilares y vigas y comprobamos las condiciones del lugar para preparar el diseño y la planificación.",
        },
        {
          title: "Diseño y presupuesto",
          description:
            "Acordamos el diseño 3D y elaboramos planos técnicos 2D y detalles. El presupuesto desglosa partidas, cantidades y materiales y se ajusta contigo a la inversión prevista.",
        },
        {
          title: "Firmar el contrato",
          description:
            "Acordamos presupuesto, alcance, calendario y condiciones. El contrato incluye el presupuesto detallado como referencia durante los trabajos.",
        },
        {
          title: "Trabajos de base",
          description:
            "Ejecutamos las demoliciones, reformas, albañilería, impermeabilización, techos de yeso, pintura y suelos previstos según el estado del inmueble y el contrato.",
        },
        {
          title: "Fabricación e instalación",
          description:
            "Los muebles se fabrican en taller o se adquieren según lo acordado y se instalan en obra. El plazo depende del volumen, los acabados y las condiciones de trabajo.",
        },
        {
          title: "Inspección y entrega",
          description:
            "Revisamos los elementos instalados y entregamos según el calendario contractual. Los trabajos adicionales y cambios de plazo se consultan directamente con el propietario.",
        },
        {
          title: "Cierre y garantía",
          description:
            "Tras la recepción de todas las partidas, cerramos el contrato según las condiciones pactadas. Seguimos acompañándote con garantía y mantenimiento.",
        },
      ],
      durations: [
        "Apartamentos · 25–35 días",
        "Villas y casas adosadas · 30–45 días",
        "Oficinas · 15–25 días",
        "Showrooms · 25–35 días",
        "Hoteles y restaurantes · según el proyecto",
      ],
      warranties: [
        "Muebles de madera · garantía de 12 meses",
        "Trabajos de acabado · garantía de 6 meses",
        "Equipos y accesorios · garantía del fabricante",
      ],
      notes: [
        "El plazo real puede variar por el volumen de trabajo, las condiciones del inmueble y factores externos.",
        "Pueden añadirse u omitirse etapas según los requisitos del cliente y el alcance acordado.",
      ],
    },
    zh: {
      heroParts: ["施工", "日志"],
      intro:
        "了解从最初构想到交付的全过程。八个步骤让您清楚掌握室内工程的工作内容、进度及各方职责。",
      explore: "了解施工流程",
      label: "施工流程",
      title: "陪伴项目的八个步骤",
      description:
        "从初步咨询到保修服务，每个阶段都有明确的工作范围，并与业主协调推进。",
      step: "阶段",
      durationTitle: "不同项目的工期参考",
      warrantyTitle: "保修与维护",
      notesTitle: "开工前须知",
      ctaTitle: "一步一步，打造理想之家",
      ctaIntro: "告诉我们您的需求，获取适合项目的施工流程、进度及预算建议。",
      steps: [
        {
          title: "了解客户需求",
          description:
            "沟通偏好的风格、使用需求、材料与预算，推荐适合项目及资金计划的服务方案。",
        },
        {
          title: "现场勘察",
          description:
            "测量房间、窗户、门洞、柱梁尺寸，检查现场条件，为设计方案和施工计划提供依据。",
        },
        {
          title: "设计与报价",
          description:
            "确认3D方案后，编制2D技术图纸及室内细节。按项目、工程量和材料编制报价，并与业主共同调整预算分配。",
        },
        {
          title: "签订合同",
          description:
            "双方确认报价、工作范围、进度及条款。施工合同附详细报价，作为后续协调的依据。",
        },
        {
          title: "基础施工",
          description:
            "按约定实施拆除、改造、砌筑、防水、石膏板吊顶、墙面涂装及地面铺装。具体范围取决于现场情况和合同。",
        },
        {
          title: "家具生产与安装",
          description:
            "按确认的方案在工厂生产或采购成品家具，再安排现场安装。工期取决于工程量、饰面要求和施工条件。",
        },
        {
          title: "验收与交付",
          description:
            "检查安装项目，按合同计划交付。施工中的增项及进度调整会与业主直接沟通。",
        },
        {
          title: "结算与保修",
          description:
            "所有项目验收后，双方依照约定条款结算。团队继续提供工程保修与维护支持。",
        },
      ],
      durations: [
        "公寓 · 25–35天",
        "别墅与联排住宅 · 30–45天",
        "办公室 · 15–25天",
        "展厅 · 25–35天",
        "酒店与餐厅 · 依据设计文件",
      ],
      warranties: [
        "木制家具 · 保修12个月",
        "饰面工程 · 保修6个月",
        "设备与配件 · 按厂家保修政策",
      ],
      notes: [
        "实际工期可能因工程量、现场条件及其他客观因素而调整。",
        "可根据客户需求和双方确认的范围增加或减少部分步骤。",
      ],
    },
  };
