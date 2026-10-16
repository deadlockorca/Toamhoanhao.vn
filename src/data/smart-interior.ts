import type { SiteLocale } from "@/lib/locale";
type SmartInteriorCopy = {
  heroParts: string[];
  intro: string;
  explore: string;
  benefitsTitle: string;
  servicesTitle: string;
  workshopTitle: string;
  workshopIntro: string;
  benefits: { title: string; description: string }[];
  services: string[];
  commitments: string[];
};
export const smartInteriorCopy: Record<SiteLocale, SmartInteriorCopy> = {
  vi: {
    heroParts: ["Nội thất", "thông minh"],
    intro:
      "Nhiều công năng trong một thiết kế gọn gàng. Nội thất linh hoạt giúp tận dụng diện tích, tăng khả năng lưu trữ và thích ứng với nhịp sống của gia đình.",
    explore: "Khám phá lợi ích",
    benefitsTitle: "5 lợi ích cho không gian sống linh hoạt",
    servicesTitle: "Giải pháp từ ý tưởng đến sản phẩm",
    workshopTitle: "Chủ động sản xuất, đồng bộ từng chi tiết",
    workshopIntro:
      "Hệ thống xưởng sản xuất giúp phối hợp thiết kế, vật liệu và gia công theo yêu cầu. Làm việc trực tiếp để kiểm soát chất lượng, chi phí và tiến độ đã thống nhất.",
    benefits: [
      {
        title: "Một sản phẩm, nhiều chức năng",
        description:
          "Kết hợp chỗ ngồi, giường ngủ, bàn làm việc hoặc lưu trữ trong cùng một sản phẩm. Cơ cấu gấp, kéo và mở rộng được lựa chọn theo nhu cầu thực tế.",
      },
      {
        title: "Tận dụng diện tích",
        description:
          "Giảm số lượng vật dụng riêng lẻ, tạo khoảng trống khi cần. Bố trí kích thước và khoảng mở phù hợp để căn phòng luôn thuận tiện di chuyển.",
      },
      {
        title: "Thao tác thuận tiện",
        description:
          "Ưu tiên cơ cấu dễ sử dụng, phụ kiện phù hợp và hướng dẫn rõ ràng. Kiểm tra tải trọng, khoảng chuyển động và cách vận hành trước khi sử dụng.",
      },
      {
        title: "Dấu ấn thẩm mỹ riêng",
        description:
          "Kết hợp hình khối, màu sắc và vật liệu đồng bộ với căn phòng. Nội thất đa năng vừa đáp ứng công năng vừa thể hiện cá tính gia chủ.",
      },
      {
        title: "Phân bổ ngân sách hợp lý",
        description:
          "So sánh chi phí theo vật liệu, phụ kiện và nhu cầu sử dụng. Chọn tính năng cần thiết để cân đối khoản đầu tư ban đầu với giá trị sử dụng lâu dài.",
      },
    ],
    services: [
      "Tư vấn lựa chọn, thiết kế và bố trí nội thất",
      "Cung cấp sản phẩm nội thất đa năng phù hợp",
      "Gia công theo kiểu dáng và kích thước yêu cầu",
    ],
    commitments: [
      "Tư vấn tận tâm, trao đổi ban đầu miễn phí",
      "Lắng nghe nhu cầu và thói quen sinh hoạt",
      "Phương án thiết kế bám sát ý tưởng gia chủ",
      "Cùng lựa chọn giải pháp phù hợp không gian",
      "Chi phí theo vật liệu, phụ kiện và phạm vi",
      "Kế hoạch đầu tư rõ ràng từ đầu",
      "Ưu đãi được tư vấn theo chương trình hiện có",
    ],
  },
  en: {
    heroParts: ["Smart", "furniture"],
    intro:
      "More functions in a considered design. Flexible furniture makes the most of space, adds storage and adapts to your family’s daily life.",
    explore: "Explore the benefits",
    benefitsTitle: "5 benefits for a flexible home",
    servicesTitle: "From ideas to finished furniture",
    workshopTitle: "Direct production, coordinated details",
    workshopIntro:
      "Our workshops coordinate design, materials and custom fabrication. Work directly with us to manage quality, costs and the agreed schedule.",
    benefits: [
      {
        title: "One piece, multiple functions",
        description:
          "Combine seating, sleeping, a desk or storage in one piece. Folding, sliding and extending mechanisms are chosen for your needs.",
      },
      {
        title: "Make room for living",
        description:
          "Reduce separate items and free space when needed. Plan dimensions and opening clearances for easy movement.",
      },
      {
        title: "Convenient operation",
        description:
          "Choose usable mechanisms, suitable hardware and clear instructions. Check load limits, movement clearance and operation before use.",
      },
      {
        title: "Your own visual identity",
        description:
          "Coordinate shapes, colours and materials with the room. Multifunctional furniture combines practical use with personal style.",
      },
      {
        title: "A considered budget",
        description:
          "Compare materials, hardware and actual needs. Select useful features to balance initial cost with long-term value.",
      },
    ],
    services: [
      "Furniture selection, design and layout advice",
      "Supply of suitable multifunctional furniture",
      "Custom fabrication to your style and dimensions",
    ],
    commitments: [
      "Attentive advice and a free initial discussion",
      "Listen to your needs and daily routines",
      "Design proposals guided by your ideas",
      "Choose a solution that fits your space together",
      "Costs based on materials, hardware and scope",
      "A clear investment plan from the start",
      "Offers explained under the available programme",
    ],
  },
  ja: {
    heroParts: ["多機能", "インテリア"],
    intro:
      "すっきりしたデザインに複数の機能を。限られた面積を活かし、収納を増やし、ご家族の暮らしに柔軟に対応します。",
    explore: "メリットを見る",
    benefitsTitle: "柔軟な住まいのための5つのメリット",
    servicesTitle: "アイデアから家具の完成まで",
    workshopTitle: "自社製作で細部まで連携",
    workshopIntro:
      "工場で設計、素材、オーダー製作を連携。直接のやり取りで品質、費用、合意した工程を管理します。",
    benefits: [
      {
        title: "一台で複数の役割",
        description:
          "椅子、ベッド、デスク、収納などを一体に。折り畳み、引き出し、伸長機構を用途に合わせて選びます。",
      },
      {
        title: "面積を有効活用",
        description:
          "単独の家具を減らし、必要な時に空間を確保。寸法と開閉範囲を計画し動線を保ちます。",
      },
      {
        title: "使いやすい操作",
        description:
          "扱いやすい機構、適切な金具、明確な説明を重視。使用前に耐荷重、可動範囲、操作を確認します。",
      },
      {
        title: "自分らしいデザイン",
        description: "形、色、素材を部屋と調和させ、実用性と個性を両立します。",
      },
      {
        title: "計画的な予算",
        description:
          "素材、金具、用途別に費用を比較。必要な機能を選び、初期費用と長期の価値を考えます。",
      },
    ],
    services: [
      "家具選び・設計・配置のご相談",
      "用途に合う多機能家具の提供",
      "形や寸法に合わせたオーダー製作",
    ],
    commitments: [
      "丁寧な相談、初回のご相談は無料",
      "ご要望と暮らしの習慣を伺います",
      "ご希望に沿った設計案をご提案",
      "空間に合う解決策を一緒に選択",
      "素材・金具・範囲に応じた費用",
      "最初から明確な予算計画",
      "実施中の特典をご案内",
    ],
  },
  ko: {
    heroParts: ["스마트", "가구"],
    intro:
      "간결한 디자인에 다양한 기능을 담습니다. 유연한 가구로 면적과 수납을 활용하고 가족의 일상에 맞춥니다.",
    explore: "장점 살펴보기",
    benefitsTitle: "유연한 생활 공간을 위한 5가지 장점",
    servicesTitle: "아이디어에서 완성된 가구까지",
    workshopTitle: "직접 생산으로 세부 사항까지 조율",
    workshopIntro:
      "공장에서 설계, 자재와 맞춤 제작을 조율합니다. 직접 협의하여 품질, 비용과 합의된 일정을 관리합니다.",
    benefits: [
      {
        title: "하나의 제품, 다양한 기능",
        description:
          "좌석, 침대, 책상이나 수납을 결합합니다. 접이식, 슬라이딩과 확장 구조를 필요에 맞게 선택합니다.",
      },
      {
        title: "면적 활용",
        description:
          "별도 가구를 줄여 필요할 때 공간을 확보합니다. 치수와 개방 범위를 계획해 동선을 확보합니다.",
      },
      {
        title: "편리한 조작",
        description:
          "사용하기 쉬운 구조와 적절한 부속품, 명확한 안내를 우선합니다. 사용 전 하중과 가동 범위를 확인합니다.",
      },
      {
        title: "나만의 디자인",
        description:
          "형태, 색과 자재를 방에 맞춰 실용성과 개성을 함께 담습니다.",
      },
      {
        title: "합리적인 예산",
        description:
          "자재, 부속품과 사용 목적에 따라 비용을 비교합니다. 필요한 기능을 선택해 초기 비용과 장기 가치를 조율합니다.",
      },
    ],
    services: [
      "가구 선택, 설계 및 배치 상담",
      "적합한 다기능 가구 공급",
      "형태와 치수에 맞춘 맞춤 제작",
    ],
    commitments: [
      "세심한 상담과 무료 초기 협의",
      "요구와 생활 습관 경청",
      "고객의 아이디어에 맞춘 설계안",
      "공간에 적합한 솔루션 공동 선택",
      "자재, 부속품과 범위에 따른 비용",
      "처음부터 명확한 투자 계획",
      "현재 프로그램에 따른 혜택 안내",
    ],
  },
  sv: {
    heroParts: ["Smarta", "möbler"],
    intro:
      "Fler funktioner i en genomtänkt design. Flexibla möbler utnyttjar ytan, ger förvaring och anpassas till familjens vardag.",
    explore: "Utforska fördelarna",
    benefitsTitle: "5 fördelar för ett flexibelt hem",
    servicesTitle: "Från idé till färdig möbel",
    workshopTitle: "Egen produktion, samordnade detaljer",
    workshopIntro:
      "Våra verkstäder samordnar design, material och anpassad tillverkning. Direkt samarbete ger kontroll över kvalitet, kostnader och avtalad tidsplan.",
    benefits: [
      {
        title: "En möbel, flera funktioner",
        description:
          "Kombinera sittplats, säng, skrivbord eller förvaring. Vik-, skjut- och utdragsmekanismer väljs efter behov.",
      },
      {
        title: "Utnyttja ytan",
        description:
          "Färre separata möbler frigör plats. Planera mått och öppningsutrymme för fria gångstråk.",
      },
      {
        title: "Enkel användning",
        description:
          "Välj hanterbara mekanismer, lämpliga beslag och tydliga instruktioner. Kontrollera belastning, rörelseutrymme och användning.",
      },
      {
        title: "Ett personligt uttryck",
        description:
          "Samordna former, färger och material med rummet för funktion och egen stil.",
      },
      {
        title: "En genomtänkt budget",
        description:
          "Jämför material, beslag och behov. Välj användbara funktioner och väg inköpskostnad mot långsiktigt värde.",
      },
    ],
    services: [
      "Råd om möbelval, design och placering",
      "Leverans av lämpliga multifunktionsmöbler",
      "Anpassad tillverkning efter form och mått",
    ],
    commitments: [
      "Omsorgsfull rådgivning och gratis inledande samtal",
      "Vi lyssnar på behov och vardagsvanor",
      "Designförslag utifrån dina idéer",
      "Vi väljer en lösning för rummet tillsammans",
      "Kostnader efter material, beslag och omfattning",
      "Tydlig investeringsplan från början",
      "Information om tillgängliga erbjudanden",
    ],
  },
  fr: {
    heroParts: ["Mobilier", "intelligent"],
    intro:
      "Plus de fonctions dans un design soigné. Un mobilier flexible optimise l’espace, ajoute du rangement et s’adapte à votre quotidien.",
    explore: "Explorer les avantages",
    benefitsTitle: "5 avantages pour un intérieur flexible",
    servicesTitle: "De l’idée au mobilier fini",
    workshopTitle: "Production directe, détails coordonnés",
    workshopIntro:
      "Nos ateliers coordonnent conception, matériaux et fabrication sur mesure. Un échange direct permet de suivre qualité, coûts et calendrier convenu.",
    benefits: [
      {
        title: "Un meuble, plusieurs fonctions",
        description:
          "Associez assise, couchage, bureau ou rangement. Les mécanismes pliants, coulissants et extensibles suivent vos besoins.",
      },
      {
        title: "Optimiser la surface",
        description:
          "Réduisez les meubles séparés pour libérer de la place. Prévoyez dimensions et dégagements pour circuler.",
      },
      {
        title: "Une utilisation pratique",
        description:
          "Choisissez des mécanismes maniables, des accessoires adaptés et des consignes claires. Vérifiez charges et débattements avant usage.",
      },
      {
        title: "Une identité personnelle",
        description:
          "Coordonnez formes, couleurs et matériaux avec la pièce pour allier usage et personnalité.",
      },
      {
        title: "Un budget réfléchi",
        description:
          "Comparez matériaux, accessoires et besoins. Choisissez les fonctions utiles pour équilibrer coût initial et valeur durable.",
      },
    ],
    services: [
      "Conseils de choix, conception et agencement",
      "Fourniture de mobilier multifonction adapté",
      "Fabrication sur mesure selon forme et dimensions",
    ],
    commitments: [
      "Conseils attentifs et premier échange gratuit",
      "Écoute des besoins et habitudes",
      "Propositions guidées par vos idées",
      "Choix commun d’une solution adaptée",
      "Coûts selon matériaux, accessoires et périmètre",
      "Plan d’investissement clair dès le départ",
      "Offres selon le programme disponible",
    ],
  },
  ru: {
    heroParts: ["Умная", "мебель"],
    intro:
      "Больше функций в продуманном дизайне. Гибкая мебель экономит место, добавляет хранение и подстраивается под жизнь семьи.",
    explore: "Посмотреть преимущества",
    benefitsTitle: "5 преимуществ гибкого пространства",
    servicesTitle: "От идеи до готовой мебели",
    workshopTitle: "Собственное производство, единые детали",
    workshopIntro:
      "Мастерские объединяют проектирование, материалы и изготовление на заказ. Прямое взаимодействие помогает контролировать качество, расходы и согласованные сроки.",
    benefits: [
      {
        title: "Один предмет, несколько функций",
        description:
          "Совмещайте сиденье, кровать, стол или хранение. Складные, выдвижные и раздвижные механизмы выбираются по потребностям.",
      },
      {
        title: "Используйте площадь",
        description:
          "Меньше отдельных предметов — больше свободного места. Учитывайте размеры и зоны открывания для удобных проходов.",
      },
      {
        title: "Удобное использование",
        description:
          "Выбирайте понятные механизмы, подходящую фурнитуру и инструкции. До использования проверьте нагрузки и зоны движения.",
      },
      {
        title: "Свой визуальный характер",
        description:
          "Согласуйте формы, цвета и материалы с комнатой, объединяя удобство и индивидуальность.",
      },
      {
        title: "Продуманный бюджет",
        description:
          "Сравнивайте материалы, фурнитуру и реальные задачи. Нужные функции помогают соотнести цену с долгосрочной пользой.",
      },
    ],
    services: [
      "Консультации по выбору, дизайну и размещению",
      "Поставка подходящей многофункциональной мебели",
      "Изготовление под нужные формы и размеры",
    ],
    commitments: [
      "Внимательная помощь и бесплатное первое обсуждение",
      "Учитываем ваши потребности и привычки",
      "Проектные предложения на основе ваших идей",
      "Вместе выбираем решение под пространство",
      "Цена по материалам, фурнитуре и объёму",
      "Понятный план вложений с самого начала",
      "Предложения по действующей программе",
    ],
  },
  es: {
    heroParts: ["Muebles", "inteligentes"],
    intro:
      "Más funciones en un diseño cuidado. Los muebles flexibles aprovechan el espacio, añaden almacenamiento y se adaptan a la vida familiar.",
    explore: "Explorar ventajas",
    benefitsTitle: "5 ventajas para un hogar flexible",
    servicesTitle: "De la idea al mueble terminado",
    workshopTitle: "Producción directa, detalles coordinados",
    workshopIntro:
      "Nuestros talleres coordinan diseño, materiales y fabricación a medida. El trato directo permite controlar calidad, costes y plazos acordados.",
    benefits: [
      {
        title: "Una pieza, varias funciones",
        description:
          "Combina asiento, cama, escritorio o almacenamiento. Elige mecanismos plegables, deslizantes y extensibles según tus necesidades.",
      },
      {
        title: "Aprovechar la superficie",
        description:
          "Reduce muebles separados y libera espacio. Planifica dimensiones y aperturas para facilitar el paso.",
      },
      {
        title: "Uso cómodo",
        description:
          "Elige mecanismos manejables, herrajes adecuados e instrucciones claras. Comprueba cargas y zonas de movimiento antes de usar.",
      },
      {
        title: "Una identidad propia",
        description:
          "Coordina formas, colores y materiales con la habitación para unir función y personalidad.",
      },
      {
        title: "Un presupuesto pensado",
        description:
          "Compara materiales, herrajes y necesidades reales. Selecciona funciones útiles y equilibra coste inicial y valor duradero.",
      },
    ],
    services: [
      "Asesoría en elección, diseño y distribución",
      "Suministro de muebles multifuncionales adecuados",
      "Fabricación a medida según forma y dimensiones",
    ],
    commitments: [
      "Atención cercana y primera consulta gratuita",
      "Escuchamos necesidades y hábitos",
      "Propuestas guiadas por tus ideas",
      "Elegimos juntos la solución adecuada",
      "Costes según materiales, herrajes y alcance",
      "Plan de inversión claro desde el inicio",
      "Ofertas según el programa disponible",
    ],
  },
  zh: {
    heroParts: ["智能", "家具"],
    intro:
      "在简洁设计中融合多种功能。灵活家具充分利用面积、增加收纳，并适应家庭日常生活。",
    explore: "探索优势",
    benefitsTitle: "灵活家居的五项优势",
    servicesTitle: "从构想到家具成品",
    workshopTitle: "直接生产，细节协调",
    workshopIntro:
      "工厂协调设计、材料与定制加工，通过直接沟通控制质量、成本及约定进度。",
    benefits: [
      {
        title: "一件家具，多种功能",
        description:
          "将座椅、睡床、书桌或收纳融为一体，按实际需求选择折叠、推拉及伸展结构。",
      },
      {
        title: "充分利用面积",
        description:
          "减少单独家具，需要时释放空间。合理规划尺寸与开启范围，保持通行便利。",
      },
      {
        title: "便捷操作",
        description:
          "优先选择易操作结构、适合的五金与明确说明。使用前检查承重、活动空间及操作方式。",
      },
      {
        title: "个性化美感",
        description:
          "将形体、颜色及材料与房间协调，让多功能家具兼具实用与个人风格。",
      },
      {
        title: "合理分配预算",
        description:
          "按材料、五金及实际需求比较费用，选择必要功能，平衡初期投入与长期使用价值。",
      },
    ],
    services: [
      "家具选择、设计及布局咨询",
      "提供适用的多功能家具",
      "按款式及尺寸要求定制加工",
    ],
    commitments: [
      "用心咨询，初步沟通免费",
      "倾听需求与生活习惯",
      "设计方案贴合业主构想",
      "共同选择适合空间的方案",
      "按材料、五金及范围确定费用",
      "从一开始明确投资计划",
      "按现有活动说明优惠",
    ],
  },
};
