import type { SiteLocale } from "@/lib/locale";
type KidsInteriorCopy = {
  heroParts: string[];
  intro: string;
  explore: string;
  designsTitle: string;
  notesTitle: string;
  commitmentsTitle: string;
  commitmentsIntro: string;
  ctaTitle: string;
  designs: { title: string; description: string }[];
  notes: string[];
};
export const kidsInteriorCopy: Record<SiteLocale, KidsInteriorCopy> = {
  vi: {
    heroParts: ["Nội thất", "phòng trẻ em"],
    intro:
      "Một thế giới nhỏ để nghỉ ngơi, học tập và vui chơi. Thiết kế theo độ tuổi, sở thích và thói quen của bé, cân bằng không gian riêng với những khoảnh khắc sẻ chia.",
    explore: "Khám phá mẫu thiết kế",
    designsTitle: "5 ý tưởng cho căn phòng lớn lên cùng bé",
    notesTitle: "Lắng nghe bé, chăm chút từng chi tiết",
    commitmentsTitle: "Cùng gia đình tạo nên không gian của con",
    commitmentsIntro:
      "Trao đổi cởi mở với phụ huynh và lắng nghe sở thích của bé. Từ khảo sát đến phương án thiết kế, chúng tôi phối hợp để căn phòng phù hợp với nhu cầu và ngân sách của gia đình.",
    ctaTitle: "Sẵn sàng tạo nên căn phòng trong mơ cho bé?",
    designs: [
      {
        title: "Phòng ngủ bé trai, góc nhỏ khám phá",
        description:
          "Gam xanh dương, góc học tập gọn gàng và trang trí theo nhân vật bé yêu thích. Bố trí chỗ ngủ, chơi và lưu trữ phù hợp với diện tích thực tế.",
      },
      {
        title: "Phòng ngủ bé gái, sắc màu đáng yêu",
        description:
          "Phối màu tươi sáng, ga gối xanh và điểm nhấn hồng nhẹ. Góc học tập và chi tiết trang trí được lựa chọn theo sở thích của bé.",
      },
      {
        title: "Giường tầng cho hai bé trai",
        description:
          "Tận dụng chiều cao để dành chỗ cho học tập, vui chơi và không gian riêng. Chọn kết cấu, lan can, thang và kích thước theo độ tuổi cùng hướng dẫn của sản phẩm.",
      },
      {
        title: "Hai chỗ ngủ cho hai bé gái",
        description:
          "Gợi ý gam hồng cùng chăn ga và trang trí hài hòa. Bố trí hai chỗ ngủ thuận tiện di chuyển, có khu vực riêng cho đồ dùng của mỗi bé.",
      },
      {
        title: "Phòng chung cho bé trai và bé gái",
        description:
          "Kết hợp gam vàng, xanh, trắng và cân nhắc phương án giường tầng theo nhu cầu. Tôn trọng sở thích, sự riêng tư và cách sử dụng chung của từng bé.",
      },
    ],
    notes: [
      "Phù hợp độ tuổi, nhu cầu và cách sử dụng của từng bé",
      "Tôn trọng sở thích về màu sắc, đồ chơi và nhân vật",
      "Bố trí công năng, lối đi và lưu trữ thuận tiện",
      "Cân nhắc vị trí tivi, màn hình và thiết bị giải trí",
      "Tạo góc riêng cho học tập, vui chơi và nghỉ ngơi",
    ],
  },
  en: {
    heroParts: ["Children’s", "interiors"],
    intro:
      "A little world for rest, learning and play. Design around your child’s age, interests and routines, balancing personal space with moments together.",
    explore: "Explore the designs",
    designsTitle: "5 ideas for a room that grows with your child",
    notesTitle: "Listen to children, consider every detail",
    commitmentsTitle: "Creating your child’s space together",
    commitmentsIntro:
      "We speak openly with parents and listen to children’s preferences. From the survey to the design proposal, we shape a room for your family’s needs and budget.",
    ctaTitle: "Ready to create your child’s dream room?",
    designs: [
      {
        title: "A boy’s room for discovery",
        description:
          "Blue tones, an organised study corner and favourite character accents. Arrange sleeping, play and storage areas for the actual room size.",
      },
      {
        title: "A girl’s room with cheerful colours",
        description:
          "Fresh colours, green bedding and soft pink accents. Study space and decorations follow the child’s own preferences.",
      },
      {
        title: "Bunk beds for two boys",
        description:
          "Use height to make room for study, play and personal space. Choose structure, guards, ladder and dimensions for age and product instructions.",
      },
      {
        title: "Two sleeping spaces for two girls",
        description:
          "Pink tones with coordinated bedding and decorations. Keep circulation clear and provide individual storage for each child.",
      },
      {
        title: "A shared room for a boy and girl",
        description:
          "Combine yellow, green and white and consider bunk beds where appropriate. Respect each child’s taste, privacy and shared routines.",
      },
    ],
    notes: [
      "Plan for each child’s age, needs and daily use",
      "Respect colour, toy and character preferences",
      "Keep functions, circulation and storage convenient",
      "Consider placement of TVs, screens and entertainment devices",
      "Provide personal areas for study, play and rest",
    ],
  },
  ja: {
    heroParts: ["子ども部屋の", "インテリア"],
    intro:
      "休み、学び、遊ぶための小さな世界。年齢、好み、習慣に合わせ、一人の時間と共有する時間を両立します。",
    explore: "デザインを見る",
    designsTitle: "成長に寄り添う5つの部屋のアイデア",
    notesTitle: "子どもの声を聞き、細部まで丁寧に",
    commitmentsTitle: "ご家族とつくる子どもの空間",
    commitmentsIntro:
      "保護者と率直に話し、子どもの好みを伺います。調査から設計案まで、暮らしと予算に合う部屋を一緒につくります。",
    ctaTitle: "夢の子ども部屋をつくりませんか",
    designs: [
      {
        title: "探検心をくすぐる男の子の部屋",
        description:
          "青系の色、整った学習コーナー、好きなキャラクター。面積に合う寝床、遊び場、収納を配置します。",
      },
      {
        title: "明るい色の女の子の部屋",
        description:
          "爽やかな色、緑の寝具、淡いピンクのアクセント。学習空間と装飾は本人の好みに合わせます。",
      },
      {
        title: "男の子2人の二段ベッド",
        description:
          "高さを活かし学習、遊び、個人の場所を確保。構造、柵、はしご、寸法は年齢と製品説明に合わせます。",
      },
      {
        title: "女の子2人の寝床",
        description:
          "ピンク系の寝具と調和した装飾。動線を確保し、それぞれの持ち物の収納を設けます。",
      },
      {
        title: "男の子と女の子の共有部屋",
        description:
          "黄・緑・白を組み合わせ、必要に応じ二段ベッドを検討。好み、プライバシー、共有の習慣を尊重します。",
      },
    ],
    notes: [
      "年齢、必要性、使い方に合わせる",
      "色、玩具、キャラクターの好みを尊重",
      "使いやすい機能、動線、収納を計画",
      "テレビや画面、娯楽機器の位置を検討",
      "学習、遊び、休息のための個人の場所を確保",
    ],
  },
  ko: {
    heroParts: ["아이 방", "인테리어"],
    intro:
      "쉬고 배우고 노는 작은 세상. 나이, 취향과 생활 습관에 맞춰 개인 공간과 함께하는 시간을 조화시킵니다.",
    explore: "디자인 살펴보기",
    designsTitle: "아이와 함께 자라는 방의 5가지 아이디어",
    notesTitle: "아이의 의견을 듣고 세심하게 설계",
    commitmentsTitle: "가족과 함께 만드는 아이의 공간",
    commitmentsIntro:
      "부모님과 편하게 소통하고 아이의 취향을 듣습니다. 현장 조사부터 설계안까지 가족의 요구와 예산에 맞는 방을 함께 만듭니다.",
    ctaTitle: "아이의 꿈을 담은 방을 만들어 볼까요?",
    designs: [
      {
        title: "탐구하는 남자아이의 방",
        description:
          "파란색, 정돈된 학습 공간과 좋아하는 캐릭터 장식. 실제 면적에 맞춰 수면, 놀이와 수납을 배치합니다.",
      },
      {
        title: "화사한 여자아이의 방",
        description:
          "밝은 색, 초록 침구와 부드러운 분홍 포인트. 학습 공간과 장식은 아이의 취향에 맞춥니다.",
      },
      {
        title: "남자아이 둘을 위한 이층 침대",
        description:
          "높이를 활용해 공부, 놀이와 개인 공간을 확보합니다. 구조, 난간, 사다리와 치수는 나이와 제품 안내에 맞춥니다.",
      },
      {
        title: "여자아이 둘의 수면 공간",
        description:
          "분홍 계열과 조화로운 침구 및 장식. 편리한 동선과 아이별 수납 공간을 마련합니다.",
      },
      {
        title: "남매가 함께 쓰는 방",
        description:
          "노랑, 초록과 흰색을 조합하고 필요에 따라 이층 침대를 검토합니다. 각자의 취향과 사생활, 함께 쓰는 방식을 존중합니다.",
      },
    ],
    notes: [
      "아이별 나이와 요구 및 사용 방식 고려",
      "색, 장난감과 캐릭터 취향 존중",
      "편리한 기능, 동선과 수납 배치",
      "TV, 화면과 놀이 기기의 위치 검토",
      "공부, 놀이와 휴식을 위한 개인 공간 마련",
    ],
  },
  sv: {
    heroParts: ["Barnrums", "inredning"],
    intro:
      "En liten värld för vila, lärande och lek. Design efter barnets ålder, intressen och vanor med plats för både avskildhet och gemenskap.",
    explore: "Utforska rummen",
    designsTitle: "5 idéer för ett rum som växer med barnet",
    notesTitle: "Lyssna på barnet, tänk på detaljerna",
    commitmentsTitle: "Vi skapar barnets rum tillsammans",
    commitmentsIntro:
      "Vi talar öppet med föräldrar och lyssnar på barnets önskemål. Från undersökning till design formar vi ett rum efter familjens behov och budget.",
    ctaTitle: "Redo att skapa barnets drömrum?",
    designs: [
      {
        title: "Ett pojkrum för upptäckter",
        description:
          "Blå toner, ordnad studieplats och favoritfigurer. Anpassa sömn, lek och förvaring till rummets yta.",
      },
      {
        title: "Ett flickrum med glada färger",
        description:
          "Ljusa färger, gröna sängkläder och mjuka rosa accenter. Studieplats och dekor följer barnets önskemål.",
      },
      {
        title: "Våningssäng för två pojkar",
        description:
          "Utnyttja höjden för studier, lek och egen plats. Välj konstruktion, skydd, stege och mått efter ålder och produktanvisningar.",
      },
      {
        title: "Två sovplatser för två flickor",
        description:
          "Rosa toner med samordnade textilier och dekor. Bevara fria gångstråk och ge varje barn egen förvaring.",
      },
      {
        title: "Delat rum för pojke och flicka",
        description:
          "Kombinera gult, grönt och vitt och överväg våningssäng efter behov. Respektera smak, avskildhet och gemensamma vanor.",
      },
    ],
    notes: [
      "Planera efter varje barns ålder, behov och vardag",
      "Respektera färg-, leksaks- och figurval",
      "Ordna funktion, gångstråk och förvaring",
      "Överväg placering av TV, skärmar och underhållning",
      "Ge egen plats för studier, lek och vila",
    ],
  },
  fr: {
    heroParts: ["Intérieur de", "chambre d’enfant"],
    intro:
      "Un petit univers pour se reposer, apprendre et jouer. L’âge, les goûts et les habitudes guident un équilibre entre intimité et partage.",
    explore: "Explorer les chambres",
    designsTitle: "5 idées pour une chambre qui grandit avec l’enfant",
    notesTitle: "Écouter l’enfant, soigner chaque détail",
    commitmentsTitle: "Créer ensemble l’espace de votre enfant",
    commitmentsIntro:
      "Nous échangeons avec les parents et écoutons les préférences de l’enfant. Du relevé au projet, nous adaptons la chambre aux besoins et au budget familial.",
    ctaTitle: "Prêt à créer la chambre de ses rêves ?",
    designs: [
      {
        title: "Une chambre de garçon pour explorer",
        description:
          "Tons bleus, coin d’étude ordonné et personnages préférés. Adaptez sommeil, jeu et rangement à la surface réelle.",
      },
      {
        title: "Une chambre de fille aux couleurs joyeuses",
        description:
          "Couleurs fraîches, linge vert et touches roses. Bureau et décoration suivent les goûts de l’enfant.",
      },
      {
        title: "Des lits superposés pour deux garçons",
        description:
          "Utilisez la hauteur pour étudier, jouer et garder un espace personnel. Structure, protections, échelle et dimensions suivent l’âge et les instructions du produit.",
      },
      {
        title: "Deux couchages pour deux filles",
        description:
          "Tons roses, linge et décor coordonnés. Préservez la circulation et le rangement individuel.",
      },
      {
        title: "Une chambre partagée entre garçon et fille",
        description:
          "Jaune, vert et blanc, avec des lits superposés si adaptés. Respectez goûts, intimité et habitudes communes.",
      },
    ],
    notes: [
      "Adapter à l’âge, aux besoins et aux usages",
      "Respecter couleurs, jouets et personnages préférés",
      "Prévoir fonctions, circulation et rangement pratiques",
      "Réfléchir à la place des téléviseurs et écrans",
      "Offrir des coins personnels pour étude, jeu et repos",
    ],
  },
  ru: {
    heroParts: ["Интерьер", "детской"],
    intro:
      "Маленький мир для отдыха, учёбы и игры. Учитываем возраст, интересы и привычки ребёнка, сочетая личное пространство с общением.",
    explore: "Посмотреть идеи",
    designsTitle: "5 идей комнаты, которая растёт вместе с ребёнком",
    notesTitle: "Слушаем ребёнка, продумываем детали",
    commitmentsTitle: "Создаём детское пространство вместе с семьёй",
    commitmentsIntro:
      "Открыто общаемся с родителями и учитываем вкусы ребёнка. От обследования до проекта создаём комнату под потребности и бюджет семьи.",
    ctaTitle: "Готовы создать детскую мечты?",
    designs: [
      {
        title: "Комната мальчика для открытий",
        description:
          "Синие тона, аккуратное рабочее место и любимые герои. Сон, игры и хранение планируются по площади комнаты.",
      },
      {
        title: "Комната девочки в радостных цветах",
        description:
          "Светлые краски, зелёное бельё и нежные розовые акценты. Рабочее место и декор подбираются по вкусу ребёнка.",
      },
      {
        title: "Двухъярусная кровать для двух мальчиков",
        description:
          "Используйте высоту для учёбы, игр и личного места. Конструкцию, ограждения, лестницу и размеры выбирайте по возрасту и инструкции изделия.",
      },
      {
        title: "Два спальных места для двух девочек",
        description:
          "Розовые тона с согласованными текстилем и декором. Сохраняйте проходы и отдельное хранение.",
      },
      {
        title: "Общая комната мальчика и девочки",
        description:
          "Сочетайте жёлтый, зелёный и белый, рассматривайте двухъярусную кровать по потребностям. Уважайте вкусы, приватность и привычки каждого.",
      },
    ],
    notes: [
      "Учитывайте возраст, потребности и привычки",
      "Уважайте предпочтения цветов, игрушек и героев",
      "Продумайте функции, проходы и хранение",
      "Обдумайте расположение телевизора, экранов и техники",
      "Предусмотрите личные зоны учёбы, игр и отдыха",
    ],
  },
  es: {
    heroParts: ["Interiores", "infantiles"],
    intro:
      "Un pequeño mundo para descansar, aprender y jugar. La edad, gustos y hábitos guían un equilibrio entre espacio propio y momentos compartidos.",
    explore: "Explorar los diseños",
    designsTitle: "5 ideas para una habitación que crece con tu hijo",
    notesTitle: "Escuchar al niño, cuidar cada detalle",
    commitmentsTitle: "Creamos su espacio junto a la familia",
    commitmentsIntro:
      "Hablamos con los padres y escuchamos las preferencias del niño. Desde el estudio hasta el diseño, adaptamos la habitación a las necesidades y presupuesto familiar.",
    ctaTitle: "¿Listo para crear su habitación soñada?",
    designs: [
      {
        title: "Una habitación de niño para descubrir",
        description:
          "Tonos azules, zona de estudio ordenada y personajes favoritos. Adapta descanso, juego y almacenamiento a la superficie real.",
      },
      {
        title: "Una habitación de niña con colores alegres",
        description:
          "Colores frescos, ropa de cama verde y toques rosas. El estudio y la decoración siguen los gustos de la niña.",
      },
      {
        title: "Literas para dos niños",
        description:
          "Aprovecha la altura para estudiar, jugar y tener espacio propio. Elige estructura, protecciones, escalera y medidas según edad e instrucciones del producto.",
      },
      {
        title: "Dos espacios de descanso para dos niñas",
        description:
          "Tonos rosas con textiles y decoración coordinados. Mantén pasos despejados y almacenamiento individual.",
      },
      {
        title: "Habitación compartida de niño y niña",
        description:
          "Combina amarillo, verde y blanco y valora literas si encajan. Respeta gustos, intimidad y hábitos compartidos.",
      },
    ],
    notes: [
      "Adaptar a edad, necesidades y uso de cada niño",
      "Respetar colores, juguetes y personajes preferidos",
      "Distribuir funciones, pasos y almacenamiento prácticos",
      "Considerar ubicación de televisores y pantallas",
      "Ofrecer zonas propias para estudiar, jugar y descansar",
    ],
  },
  zh: {
    heroParts: ["儿童房", "设计"],
    intro:
      "一处休息、学习和玩耍的小天地。根据孩子的年龄、喜好及习惯，平衡个人空间与共同相处的时刻。",
    explore: "探索设计方案",
    designsTitle: "陪伴孩子成长的五个房间灵感",
    notesTitle: "倾听孩子，用心对待每个细节",
    commitmentsTitle: "与家人一起打造孩子的空间",
    commitmentsIntro:
      "与家长坦诚沟通，倾听孩子的偏好。从勘察到设计方案，共同打造符合家庭需求与预算的房间。",
    ctaTitle: "准备好打造孩子梦想中的房间了吗？",
    designs: [
      {
        title: "男孩房，探索的小天地",
        description:
          "蓝色调、整洁学习区与喜爱的角色装饰，根据实际面积安排睡眠、玩耍与收纳。",
      },
      {
        title: "女孩房，可爱的色彩",
        description:
          "明亮配色、绿色床品与柔和粉色点缀，学习空间和装饰遵循孩子本人的喜好。",
      },
      {
        title: "两个男孩的上下床",
        description:
          "利用高度安排学习、玩耍及个人空间。结构、护栏、梯子及尺寸按年龄与产品说明选择。",
      },
      {
        title: "两个女孩的睡眠空间",
        description:
          "粉色调搭配协调的床品与装饰，保留通行动线并安排各自的收纳。",
      },
      {
        title: "男孩女孩共用房间",
        description:
          "结合黄、绿、白色，按需求考虑上下床，尊重各自喜好、私密性和共用习惯。",
      },
    ],
    notes: [
      "符合每个孩子的年龄、需求与使用习惯",
      "尊重颜色、玩具及角色偏好",
      "合理规划功能、动线与收纳",
      "考虑电视、屏幕及娱乐设备的位置",
      "为学习、玩耍及休息保留个人角落",
    ],
  },
};
