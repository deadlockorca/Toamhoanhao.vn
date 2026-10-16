import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
export type TownhouseConstructionCopy = {
  heroParts: string[];
  intro: string;
  explore: string;
  stylesLabel: string;
  stylesTitle: string;
  stylesIntro: string;
  styleLabel: string;
  styles: Card[];
  tipsLabel: string;
  tipsTitle: string;
  tipsIntro: string;
  tips: string[];
  ideaTitle: string;
  ideaIntro: string;
  advice: string;
  ctaTitle: string;
  ctaIntro: string;
  booking: string;
};
export const townhouseConstructionCopy: Record<
  SiteLocale,
  TownhouseConstructionCopy
> = {
  vi: {
    heroParts: ["Thi công nhà", "phố"],
    intro:
      "Bật mí các phong cách nội thất nhà phố ấn tượng và bí quyết để biến ngôi nhà trong mơ của bạn thành hiện thực.",
    explore: "Khám phá phong cách",
    stylesLabel: "Phong cách thiết kế",
    stylesTitle: "5 phong cách nội thất nhà phố nổi đình nổi đám",
    stylesIntro:
      "Từ xưa đến nay, đối với người Việt, việc thi công nhà phố luôn là một điều hệ trọng. Ngôi nhà không chỉ là tài sản lớn mà còn là tâm huyết của gia chủ.",
    styleLabel: "Phong cách",
    styles: [
      {
        title: "Phong cách Retro hiện đại",
        description:
          "Vẫn giữ đường nét của thập niên 50–60 nhưng khoác lên họa tiết và vật liệu mới như da màu, kim loại, vải dệt, len dạ ánh nhũ. Cổ điển sang trọng nhưng tươi mới, hiện đại, thanh thoát.",
      },
      {
        title: "Phong cách Mix-Match ngẫu hứng",
        description:
          "Sự hòa quyện tinh tế giữa các phong cách nội thất, tạo nên sự hài hòa nhưng vô cùng độc đáo. Các món đồ mang nhiều phong cách Tân cổ điển, Hiện đại, Indochine kết hợp không lạc lõng mà cuốn hút.",
      },
      {
        title: "Phong cách Wabi-Sabi trầm cổ",
        description:
          "Phong cách Nhật Bản với cốt lõi là sự đơn giản, trống rỗng nhưng hòa hợp với thiên nhiên. Chất liệu gỗ tự nhiên và đá ở hình thái sơ khai nhất, không qua đẽo gọt, mang con người đến gần với thiên nhiên.",
      },
      {
        title: "Phong cách Ethnic độc lạ",
        description:
          "Dành cho tín đồ du lịch, khám phá. Rực rỡ sắc màu, hình khối, hoa văn kỳ quái, phức tạp, không tuân theo chuẩn mực nào. Tạo không gian khác biệt hoàn toàn so với các không gian khác.",
      },
      {
        title: "Zen Japanese – phong cách Nhật Bản",
        description:
          "Liên hệ mật thiết với Thiền, lấy sự tối giản trong bố cục và hài hòa, tinh tế, thư giãn trong bầu không khí làm cứu cánh. Tìm ra điểm nhấn mang hiệu ứng thẩm mỹ cao – linh hồn của không gian.",
      },
    ],
    tipsLabel: "Lưu ý quan trọng",
    tipsTitle: "Thi công nhà phố đẹp đẳng cấp, tiết kiệm",
    tipsIntro:
      "Thiết kế – thi công nhà phố là công việc tối quan trọng, quyết định đến sự thành bại trong việc tạo dựng ngôi nhà mơ ước của bạn và gia đình.",
    tips: [
      "Lựa chọn đơn vị thiết kế có địa chỉ công ty rõ ràng, tránh công ty ma",
      "Đội ngũ chuyên gia giàu kinh nghiệm, có thể xem trực tiếp công trình đã và đang thi công",
      "Dịch vụ thiết kế – thi công trọn gói, tiết kiệm chi phí và đảm bảo đồng bộ",
      "Xưởng sản xuất nội thất trực tiếp, không qua trung gian, giá cả hợp lý",
      "Ký hợp đồng điều khoản rõ ràng, trách nhiệm ràng buộc cụ thể",
      "Kế hoạch tài chính rõ ràng và dự trù kinh phí thi công",
    ],
    ideaTitle: "Bạn đã có ý tưởng gì cho thiết kế nội thất căn nhà mình?",
    ideaIntro:
      "Hãy gọi ngay cho chúng tôi để được tư vấn bởi các chuyên gia nội thất hàng đầu. Chúng tôi tự tin mang đến cho bạn dịch vụ chuyên nghiệp nhất với mức chi phí hợp lý nhất.",
    advice: "Tư vấn ngay",
    ctaTitle: "Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!",
    ctaIntro:
      "Miễn phí tư vấn thi công nội thất nhà phố, đúng tiến độ và chi phí hợp lý.",
    booking: "Đặt lịch tư vấn ngay",
  },
  en: {
    heroParts: ["Townhouse", "interiors"],
    intro:
      "Discover distinctive townhouse interior styles and practical advice for bringing your dream home to life.",
    explore: "Explore the styles",
    stylesLabel: "Design styles",
    stylesTitle: "5 distinctive interior styles for your townhouse",
    stylesIntro:
      "A home is more than a major investment. It reflects the care, aspirations and personality of the people who live there.",
    styleLabel: "Style",
    styles: [
      {
        title: "Modern Retro",
        description:
          "The lines of the 1950s and 1960s meet fresh patterns and materials such as coloured leather, metal and woven textiles. Classic elegance with a light, contemporary feel.",
      },
      {
        title: "Eclectic Mix-Match",
        description:
          "A thoughtful blend of different interior styles creates a harmonious yet individual home. Neoclassical, modern and Indochine pieces work together in a compelling composition.",
      },
      {
        title: "Quiet Wabi-Sabi",
        description:
          "Rooted in Japanese simplicity and a connection to nature. Natural wood, stone and raw textures bring a calm, unpretentious character to the space.",
      },
      {
        title: "Expressive Ethnic",
        description:
          "Inspired by travel and discovery, this style brings together rich colours, distinctive shapes and intricate patterns to create a deeply personal interior.",
      },
      {
        title: "Zen Japanese",
        description:
          "Minimal layouts, balance and carefully chosen details create a refined, restful atmosphere. A considered focal point gives the space its identity.",
      },
    ],
    tipsLabel: "Things to consider",
    tipsTitle: "Beautiful townhouse interiors, carefully planned",
    tipsIntro:
      "Thoughtful design and construction help turn your family’s vision into a comfortable home with a clear budget and consistent quality.",
    tips: [
      "Choose a design company with a verifiable business address",
      "Look for experienced specialists and visit completed or ongoing projects",
      "Use an integrated design and construction service for consistency and cost control",
      "Consider a company with its own furniture workshop and transparent pricing",
      "Agree clear contract terms and responsibilities",
      "Prepare a realistic financial plan and construction budget",
    ],
    ideaTitle: "Have an idea for the interior of your home?",
    ideaIntro:
      "Talk to our interior specialists about your plans. We will help you find a professional, coordinated solution at a suitable cost.",
    advice: "Get advice",
    ctaTitle: "Ready to take the next step? Give us a call!",
    ctaIntro:
      "Free advice on townhouse interiors, scheduling and a suitable budget.",
    booking: "Book a consultation",
  },
  ja: {
    heroParts: ["戸建て住宅の", "内装施工"],
    intro:
      "個性豊かな戸建て住宅のインテリアと、理想の住まいを実現するためのヒントをご紹介します。",
    explore: "スタイルを見る",
    stylesLabel: "デザインスタイル",
    stylesTitle: "戸建て住宅を彩る5つのインテリアスタイル",
    stylesIntro:
      "住まいは大きな資産であると同時に、家族の想いや個性をかたちにする大切な場所です。",
    styleLabel: "スタイル",
    styles: [
      {
        title: "モダンレトロ",
        description:
          "1950〜60年代のラインに、色鮮やかなレザーや金属、織物などの素材を組み合わせます。クラシックな上品さと現代の軽やかさを両立。",
      },
      {
        title: "自由なミックスマッチ",
        description:
          "異なるインテリアスタイルを丁寧に組み合わせ、調和と個性を生み出します。ネオクラシック、モダン、インドシナの家具も魅力的な一体感に。",
      },
      {
        title: "静かな侘び寂び",
        description:
          "日本の簡素さと自然との調和を大切にするスタイル。天然木や石、素朴な質感が、落ち着いた空間をつくります。",
      },
      {
        title: "個性的なエスニック",
        description:
          "旅や発見に着想を得た豊かな色、独特のかたち、緻密な模様。暮らす人の感性を映す空間に仕上げます。",
      },
      {
        title: "禅を感じる和の空間",
        description:
          "シンプルな配置と調和、選び抜いたディテールが、上品でくつろげる雰囲気を生みます。印象的な要素が空間の個性になります。",
      },
    ],
    tipsLabel: "大切なポイント",
    tipsTitle: "美しさと予算を両立する住まいづくり",
    tipsIntro:
      "丁寧な設計と施工計画で、ご家族の理想を、品質と予算に配慮した住まいへとつなげます。",
    tips: [
      "所在地が明確な設計会社を選ぶ",
      "経験豊富な専門家に相談し、完成・施工中の現場を見学する",
      "設計と施工を一括で依頼し、一貫性と費用を管理する",
      "自社工房と明確な価格体系を持つ会社を検討する",
      "契約条件と責任範囲を明確にする",
      "現実的な資金計画と施工予算を立てる",
    ],
    ideaTitle: "住まいのインテリアにアイデアはありますか？",
    ideaIntro:
      "インテリアの専門家に、ご希望をお聞かせください。ご予算に合う、一貫した住まいづくりをご提案します。",
    advice: "相談する",
    ctaTitle: "理想の住まいへの第一歩を。お電話ください！",
    ctaIntro:
      "戸建て住宅の内装、工期、ご予算について無料でご相談いただけます。",
    booking: "相談を予約する",
  },
  ko: {
    heroParts: ["단독주택", "인테리어 시공"],
    intro:
      "개성 있는 주택 인테리어 스타일과 꿈꾸던 집을 실현하는 실용적인 방법을 만나보세요.",
    explore: "스타일 살펴보기",
    stylesLabel: "디자인 스타일",
    stylesTitle: "단독주택을 위한 다섯 가지 인테리어 스타일",
    stylesIntro:
      "집은 큰 자산인 동시에 가족의 정성과 바람, 개성을 담는 소중한 공간입니다.",
    styleLabel: "스타일",
    styles: [
      {
        title: "모던 레트로",
        description:
          "1950~60년대의 선에 컬러 가죽, 금속, 직물 등 새로운 소재와 패턴을 더합니다. 고전적인 우아함과 현대적인 가벼움을 조화시킵니다.",
      },
      {
        title: "자유로운 믹스매치",
        description:
          "다양한 인테리어 스타일을 세심하게 조합해 조화롭고 개성 있는 집을 만듭니다. 네오클래식, 모던, 인도차이나 가구가 매력적으로 어우러집니다.",
      },
      {
        title: "차분한 와비사비",
        description:
          "일본의 간결함과 자연과의 조화를 담은 스타일입니다. 원목, 돌, 소박한 질감으로 편안하고 담백한 분위기를 완성합니다.",
      },
      {
        title: "개성 있는 에스닉",
        description:
          "여행과 발견에서 영감을 얻은 풍부한 색상, 독특한 형태, 정교한 패턴이 나만의 공간을 만듭니다.",
      },
      {
        title: "젠 재패니즈",
        description:
          "간결한 배치와 균형, 세심하게 고른 디테일로 차분하고 세련된 분위기를 만듭니다. 중심이 되는 요소가 공간의 정체성을 완성합니다.",
      },
    ],
    tipsLabel: "주요 고려 사항",
    tipsTitle: "아름답고 합리적인 주택 인테리어",
    tipsIntro:
      "세심한 설계와 시공 계획으로 가족의 꿈을 품질과 예산을 고려한 편안한 집으로 완성합니다.",
    tips: [
      "사업장 주소를 확인할 수 있는 설계 업체를 선택하세요",
      "경험 많은 전문가와 상담하고 완공 또는 시공 중인 현장을 방문하세요",
      "통합 설계·시공 서비스로 일관성과 비용을 관리하세요",
      "자체 가구 공장과 명확한 가격 체계를 갖춘 업체를 검토하세요",
      "계약 조건과 책임 범위를 명확히 하세요",
      "현실적인 자금 계획과 시공 예산을 세우세요",
    ],
    ideaTitle: "우리 집 인테리어에 대한 아이디어가 있나요?",
    ideaIntro:
      "인테리어 전문가에게 계획을 들려주세요. 적절한 비용으로 일관된 공간을 완성할 방법을 제안합니다.",
    advice: "지금 상담하기",
    ctaTitle: "다음 단계를 준비하셨나요? 지금 전화하세요!",
    ctaIntro: "주택 인테리어, 일정, 적절한 예산에 대해 무료로 상담해 드립니다.",
    booking: "상담 예약하기",
  },
  sv: {
    heroParts: ["Inredning för", "radhus"],
    intro:
      "Upptäck uttrycksfulla inredningsstilar för radhus och praktiska råd för att förverkliga ditt drömhem.",
    explore: "Utforska stilarna",
    stylesLabel: "Designstilar",
    stylesTitle: "5 inredningsstilar som ger ditt radhus karaktär",
    stylesIntro:
      "Ett hem är mer än en stor investering. Det speglar omsorgen, drömmarna och personligheten hos dem som bor där.",
    styleLabel: "Stil",
    styles: [
      {
        title: "Modern retro",
        description:
          "Linjer från 1950- och 60-talen möter nya mönster och material som färgat läder, metall och vävda textilier. Klassisk elegans med ett lätt, modernt uttryck.",
      },
      {
        title: "Personlig mix-match",
        description:
          "En genomtänkt blandning av stilar skapar ett harmoniskt och personligt hem. Nyklassiska, moderna och Indochine-inspirerade möbler bildar en spännande helhet.",
      },
      {
        title: "Stillsam wabi-sabi",
        description:
          "Japansk enkelhet och närhet till naturen står i centrum. Naturligt trä, sten och råa ytor ger rummet en lugn och anspråkslös karaktär.",
      },
      {
        title: "Uttrycksfull etnisk stil",
        description:
          "Resor och upptäckter inspirerar till rika färger, särpräglade former och detaljrika mönster som skapar en personlig interiör.",
      },
      {
        title: "Japansk zen",
        description:
          "Enkla planlösningar, balans och väl valda detaljer skapar en förfinad och vilsam atmosfär. En genomtänkt fokuspunkt ger rummet identitet.",
      },
    ],
    tipsLabel: "Viktigt att tänka på",
    tipsTitle: "Vacker inredning med genomtänkt budget",
    tipsIntro:
      "Omsorgsfull design och planering hjälper familjens vision att bli ett bekvämt hem med tydlig budget och jämn kvalitet.",
    tips: [
      "Välj ett designföretag med verifierbar företagsadress",
      "Sök erfarna specialister och besök färdiga eller pågående projekt",
      "Samordna design och utförande för enhetlighet och kostnadskontroll",
      "Överväg ett företag med egen möbelverkstad och tydliga priser",
      "Avtala om tydliga villkor och ansvarsområden",
      "Gör en realistisk finansieringsplan och byggbudget",
    ],
    ideaTitle: "Har du en idé för inredningen i ditt hem?",
    ideaIntro:
      "Berätta om dina planer för våra inredningsspecialister. Vi hjälper dig hitta en professionell och samordnad lösning till en passande kostnad.",
    advice: "Få rådgivning",
    ctaTitle: "Redo för nästa steg? Ring oss!",
    ctaIntro:
      "Kostnadsfri rådgivning om inredning, tidsplan och budget för ditt radhus.",
    booking: "Boka rådgivning",
  },
  fr: {
    heroParts: ["Aménagement de", "maison de ville"],
    intro:
      "Découvrez des styles d’intérieur singuliers et des conseils pratiques pour donner vie à la maison de vos rêves.",
    explore: "Découvrir les styles",
    stylesLabel: "Styles de décoration",
    stylesTitle: "5 styles d’intérieur pour une maison de ville unique",
    stylesIntro:
      "Une maison est bien plus qu’un investissement. Elle reflète le soin, les aspirations et la personnalité de ceux qui y vivent.",
    styleLabel: "Style",
    styles: [
      {
        title: "Rétro moderne",
        description:
          "Les lignes des années 1950 et 1960 rencontrent de nouveaux motifs et matériaux : cuir coloré, métal et textiles tissés. Une élégance classique à l’esprit contemporain.",
      },
      {
        title: "Mix-match éclectique",
        description:
          "Un mélange réfléchi de styles crée un intérieur harmonieux et personnel. Des pièces néoclassiques, modernes et indochinoises composent un ensemble captivant.",
      },
      {
        title: "Wabi-sabi apaisant",
        description:
          "La simplicité japonaise et le lien avec la nature sont au cœur de ce style. Bois naturel, pierre et textures brutes créent une atmosphère calme et sans artifice.",
      },
      {
        title: "Ethnique expressif",
        description:
          "Inspiré du voyage et de la découverte, ce style associe couleurs riches, formes singulières et motifs complexes pour créer un intérieur personnel.",
      },
      {
        title: "Zen japonais",
        description:
          "Des agencements épurés, un bel équilibre et des détails choisis créent une atmosphère raffinée et reposante. Un point focal donne son identité à l’espace.",
      },
    ],
    tipsLabel: "Points essentiels",
    tipsTitle: "Un intérieur élégant et un budget maîtrisé",
    tipsIntro:
      "Une conception et une réalisation soignées transforment votre projet familial en une maison confortable, avec un budget clair et une qualité cohérente.",
    tips: [
      "Choisir une entreprise dont l’adresse est vérifiable",
      "Rencontrer des spécialistes expérimentés et visiter leurs réalisations ou chantiers",
      "Privilégier une offre de conception et réalisation intégrée pour maîtriser cohérence et coûts",
      "Considérer une entreprise avec son propre atelier et des prix transparents",
      "Définir clairement les clauses du contrat et les responsabilités",
      "Préparer un plan de financement et un budget de travaux réalistes",
    ],
    ideaTitle: "Vous avez une idée pour l’intérieur de votre maison ?",
    ideaIntro:
      "Présentez votre projet à nos spécialistes. Nous vous aiderons à trouver une solution professionnelle et coordonnée à un coût adapté.",
    advice: "Nous consulter",
    ctaTitle: "Prêt à passer à l’action ? Appelez-nous !",
    ctaIntro:
      "Conseils gratuits sur l’aménagement, le calendrier et le budget de votre maison de ville.",
    booking: "Prendre rendez-vous",
  },
  ru: {
    heroParts: ["Отделка", "таунхаусов"],
    intro:
      "Откройте выразительные стили интерьера и практические советы, которые помогут воплотить дом вашей мечты.",
    explore: "Выбрать стиль",
    stylesLabel: "Стили интерьера",
    stylesTitle: "5 выразительных стилей для интерьера таунхауса",
    stylesIntro:
      "Дом — больше, чем крупное вложение. Он отражает заботу, мечты и характер людей, которые в нём живут.",
    styleLabel: "Стиль",
    styles: [
      {
        title: "Современное ретро",
        description:
          "Линии 1950–60-х сочетаются с новыми узорами и материалами: цветной кожей, металлом и ткаными фактурами. Классическая элегантность с лёгким современным настроением.",
      },
      {
        title: "Эклектичный микс",
        description:
          "Продуманное сочетание разных стилей создаёт гармоничный и индивидуальный дом. Неоклассика, современный стиль и индокитайские мотивы складываются в выразительную композицию.",
      },
      {
        title: "Спокойный ваби-саби",
        description:
          "В основе — японская простота и связь с природой. Натуральное дерево, камень и необработанные фактуры придают пространству спокойный и естественный характер.",
      },
      {
        title: "Выразительная этника",
        description:
          "Вдохновлённый путешествиями стиль объединяет насыщенные цвета, необычные формы и сложные узоры, создавая индивидуальный интерьер.",
      },
      {
        title: "Японский дзен",
        description:
          "Минималистичная планировка, баланс и тщательно выбранные детали создают утончённую атмосферу отдыха. Выразительный акцент определяет характер пространства.",
      },
    ],
    tipsLabel: "Важные рекомендации",
    tipsTitle: "Красивый интерьер с продуманным бюджетом",
    tipsIntro:
      "Грамотное проектирование и планирование работ помогают превратить семейную мечту в удобный дом с понятным бюджетом и стабильным качеством.",
    tips: [
      "Выбирайте проектную компанию с проверяемым адресом",
      "Обращайтесь к опытным специалистам и посещайте завершённые или текущие объекты",
      "Согласуйте проектирование и отделку для единства решений и контроля расходов",
      "Рассмотрите компанию с собственной мастерской и прозрачными ценами",
      "Чётко определите условия договора и ответственность сторон",
      "Подготовьте реалистичный финансовый план и бюджет работ",
    ],
    ideaTitle: "Есть идея для интерьера вашего дома?",
    ideaIntro:
      "Расскажите о своих планах нашим специалистам. Мы поможем найти профессиональное и согласованное решение с подходящим бюджетом.",
    advice: "Получить совет",
    ctaTitle: "Готовы сделать следующий шаг? Позвоните нам!",
    ctaIntro:
      "Бесплатная консультация по интерьеру таунхауса, срокам и бюджету.",
    booking: "Записаться на консультацию",
  },
  es: {
    heroParts: ["Interiores de", "casas urbanas"],
    intro:
      "Descubre estilos de interior con personalidad y consejos prácticos para hacer realidad la casa de tus sueños.",
    explore: "Explorar los estilos",
    stylesLabel: "Estilos de diseño",
    stylesTitle: "5 estilos de interior para una casa urbana con carácter",
    stylesIntro:
      "Una casa es más que una gran inversión. Refleja el cuidado, las aspiraciones y la personalidad de quienes viven en ella.",
    styleLabel: "Estilo",
    styles: [
      {
        title: "Retro moderno",
        description:
          "Las líneas de los años 50 y 60 se combinan con nuevos estampados y materiales como cuero de color, metal y tejidos. Elegancia clásica con un aire ligero y actual.",
      },
      {
        title: "Mix-match ecléctico",
        description:
          "Una mezcla cuidada de estilos crea un hogar armonioso y personal. Las piezas neoclásicas, modernas e indochinas forman una composición atractiva.",
      },
      {
        title: "Wabi-sabi sereno",
        description:
          "La sencillez japonesa y la conexión con la naturaleza son su esencia. La madera natural, la piedra y las texturas en bruto aportan calma y naturalidad.",
      },
      {
        title: "Étnico expresivo",
        description:
          "Inspirado en los viajes y el descubrimiento, combina colores intensos, formas singulares y patrones complejos para crear un interior personal.",
      },
      {
        title: "Zen japonés",
        description:
          "Las distribuciones sencillas, el equilibrio y los detalles escogidos crean un ambiente refinado y relajante. Un punto focal aporta identidad al espacio.",
      },
    ],
    tipsLabel: "Aspectos importantes",
    tipsTitle: "Interiores elegantes con un presupuesto cuidado",
    tipsIntro:
      "El diseño y la planificación de la obra ayudan a convertir la visión de tu familia en un hogar cómodo, con un presupuesto claro y calidad coherente.",
    tips: [
      "Elige una empresa de diseño con una dirección verificable",
      "Busca especialistas con experiencia y visita proyectos terminados o en ejecución",
      "Coordina diseño y ejecución para mantener la coherencia y controlar los costes",
      "Considera una empresa con taller propio y precios transparentes",
      "Acuerda condiciones contractuales y responsabilidades claras",
      "Prepara un plan financiero y un presupuesto de obra realistas",
    ],
    ideaTitle: "¿Tienes una idea para el interior de tu casa?",
    ideaIntro:
      "Comparte tus planes con nuestros especialistas. Te ayudaremos a encontrar una solución profesional y coordinada a un coste adecuado.",
    advice: "Recibir asesoramiento",
    ctaTitle: "¿Listo para dar el siguiente paso? ¡Llámanos!",
    ctaIntro:
      "Asesoramiento gratuito sobre interiores, plazos y presupuesto para tu casa urbana.",
    booking: "Reservar una consulta",
  },
  zh: {
    heroParts: ["联排住宅", "室内施工"],
    intro: "探索独具特色的住宅室内风格与实用建议，让理想之家成为现实。",
    explore: "探索设计风格",
    stylesLabel: "设计风格",
    stylesTitle: "5种独具魅力的联排住宅室内风格",
    stylesIntro: "家不仅是一项重要资产，更承载着居住者的心意、期望与个性。",
    styleLabel: "风格",
    styles: [
      {
        title: "现代复古风",
        description:
          "保留20世纪50至60年代的线条，融入彩色皮革、金属和编织面料等新材料与图案。古典优雅中透出轻盈的现代感。",
      },
      {
        title: "随性混搭风",
        description:
          "细致融合不同室内风格，打造和谐而独特的家。新古典、现代与印度支那风格家具形成富有吸引力的组合。",
      },
      {
        title: "静谧侘寂风",
        description:
          "以日本式简约和亲近自然为核心。天然木材、石材与原始肌理，为空间带来平静而质朴的气质。",
      },
      {
        title: "个性民族风",
        description:
          "从旅行与探索中汲取灵感，以丰富色彩、独特造型和复杂图案，打造富有个人特色的室内空间。",
      },
      {
        title: "日式禅意风",
        description:
          "简约布局、平衡比例与精心挑选的细节，营造雅致放松的氛围。恰当的视觉焦点赋予空间个性。",
      },
    ],
    tipsLabel: "重要建议",
    tipsTitle: "兼顾美感与预算的住宅室内施工",
    tipsIntro:
      "细致的设计与施工规划，将家人的愿景转化为舒适的居所，同时明确预算并保持施工品质。",
    tips: [
      "选择具有可核实办公地址的设计公司",
      "寻找经验丰富的专家，并参观已完工或在建项目",
      "选择设计施工一体化服务，保证整体协调并控制成本",
      "考虑拥有自有家具工厂、价格透明的公司",
      "在合同中明确条款与各方责任",
      "制定切实可行的资金计划与施工预算",
    ],
    ideaTitle: "对您家的室内设计有想法了吗？",
    ideaIntro:
      "与我们的室内专家分享您的计划。我们将协助您以合适的预算，找到专业且协调的方案。",
    advice: "立即咨询",
    ctaTitle: "准备好迈出下一步了吗？现在就联系我们！",
    ctaIntro: "免费咨询联排住宅室内施工、工期与合理预算。",
    booking: "立即预约咨询",
  },
};
