import {
  townhouseConstructionCopy,
  type TownhouseConstructionCopy,
} from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
export type RenovationConstructionCopy = TownhouseConstructionCopy & {
  processLabel: string;
  processTitle: string;
  processSteps: string[];
};
export const renovationConstructionCopy: Record<
  SiteLocale,
  RenovationConstructionCopy
> = {
  vi: {
    ...townhouseConstructionCopy.vi,
    heroParts: ["Thi công", "cải tạo"],
    intro:
      "Làm mới tổ ấm để đẹp hơn, tiện nghi hơn và phù hợp với cuộc sống hiện tại. Giải pháp cải tạo được lên kế hoạch theo hiện trạng, nhu cầu và ngân sách của gia đình.",
    explore: "Khám phá nhu cầu",
    stylesLabel: "Khi nào cần cải tạo",
    stylesTitle: "Đổi mới không gian, nâng tầm cuộc sống",
    stylesIntro:
      "Ngôi nhà không chỉ đáp ứng nhu cầu sinh hoạt mà còn là nơi thư giãn, nghỉ ngơi. Cải tạo đúng lúc giúp không gian tiếp tục đồng hành cùng gia đình.",
    styleLabel: "Nhu cầu cải tạo",
    styles: [
      {
        title: "Khi nội thất đã xuống cấp",
        description:
          "Sau nhiều năm sử dụng, bề mặt, thiết bị và đồ nội thất có thể cũ, hư hỏng hoặc kém tiện dụng. Khảo sát hiện trạng để xác định phần cần sửa chữa, thay thế và giữ lại.",
      },
      {
        title: "Khi bạn muốn đẹp hơn, tiện nghi hơn",
        description:
          "Làm mới màu sắc, vật liệu và cách bài trí để tổ ấm có diện mạo tươi mới. Những thay đổi được cân nhắc theo thói quen sinh hoạt và sở thích của gia đình.",
      },
      {
        title: "Khi bạn muốn điều chỉnh phong thủy",
        description:
          "Sắp xếp lại nội thất, ánh sáng và hướng sử dụng theo mong muốn về phong thủy của gia chủ. Kết hợp các ưu tiên cá nhân với công năng và sự hài hòa của không gian.",
      },
      {
        title: "Khi nhu cầu sử dụng thay đổi",
        description:
          "Gia đình có thêm thành viên hoặc cần thêm góc làm việc, phòng ngủ hay không gian lưu trữ? Điều chỉnh bố cục và nội thất để tận dụng diện tích, phù hợp mục đích sử dụng mới.",
      },
    ],
    tipsLabel: "Vì sao chọn chúng tôi",
    tipsTitle: "Đồng hành cùng bạn làm mới tổ ấm",
    tipsIntro:
      "Lắng nghe nhu cầu, khảo sát kỹ hiện trạng và phối hợp từng hạng mục để mang đến giải pháp cải tạo phù hợp.",
    tips: [
      "Kiến trúc sư, kỹ sư và thợ thi công giàu kinh nghiệm",
      "Tư vấn tận tâm về vật liệu và phương án cải tạo",
      "Thiết kế – thi công trọn gói, đồng bộ triển khai",
      "Nhà xưởng sản xuất nội thất theo yêu cầu",
      "Nhiều gói nội thất phù hợp với từng ngân sách",
      "Bảo hành, bảo trì tận tâm sau bàn giao",
      "Tư vấn gói Chìa khóa trao tay cho toàn bộ công trình",
    ],
    processLabel: "Quy trình thực hiện",
    processTitle: "7 bước từ tiếp nhận đến bảo hành",
    processSteps: [
      "Tiếp nhận yêu cầu",
      "Khảo sát hiện trạng",
      "Báo giá",
      "Ký kết hợp đồng",
      "Sản xuất và thi công",
      "Nghiệm thu, bàn giao",
      "Thanh lý và bảo hành",
    ],
    ideaTitle: "Làm mới không gian với gói Chìa khóa trao tay",
    ideaIntro:
      "Một đội ngũ đồng hành từ thiết kế đến thi công và bàn giao. Chúng tôi chăm chút từng chi tiết để tổ ấm phù hợp hơn với cuộc sống của bạn.",
    ctaIntro:
      "Miễn phí tư vấn cải tạo nội thất, với phương án phù hợp tiến độ và ngân sách.",
  },
  en: {
    ...townhouseConstructionCopy.en,
    heroParts: ["Interior", "renovation"],
    intro:
      "Refresh your home for a more beautiful, comfortable life today. Plan renovations around the existing property, your family’s needs and your budget.",
    explore: "Explore your needs",
    stylesLabel: "When to renovate",
    stylesTitle: "Renew your space, improve everyday living",
    stylesIntro:
      "A home is a place for daily life, rest and relaxation. A well-timed renovation helps it keep pace with your family.",
    styleLabel: "Renovation need",
    styles: [
      {
        title: "When interiors show their age",
        description:
          "Years of use can leave surfaces, equipment and furniture worn or less practical. A survey identifies what to repair, replace and retain.",
      },
      {
        title: "When you want more style and comfort",
        description:
          "Refresh colours, materials and furniture arrangements for a new feel. Each change is considered around your family’s routines and preferences.",
      },
      {
        title: "When you want to reconsider feng shui",
        description:
          "Rearrange furniture, lighting and room orientation around your feng shui preferences, balancing personal priorities with function and visual harmony.",
      },
      {
        title: "When the way you use your home changes",
        description:
          "A growing family or a new need for a workspace, bedroom or storage? Adapt the layout and furniture to make better use of the space.",
      },
    ],
    tipsLabel: "Why work with us",
    tipsTitle: "A partner in renewing your home",
    tipsIntro:
      "We listen to your needs, survey the property carefully and coordinate the work to develop a suitable renovation plan.",
    tips: [
      "Experienced architects, engineers and skilled installers",
      "Attentive advice on materials and renovation options",
      "Coordinated design and construction services",
      "Custom furniture produced in our workshops",
      "Interior packages for different budgets",
      "Attentive warranty and maintenance after handover",
      "Turnkey service advice for the whole project",
    ],
    processLabel: "Our process",
    processTitle: "7 steps from your brief to warranty support",
    processSteps: [
      "Discuss your needs",
      "Survey the property",
      "Provide a quote",
      "Sign the contract",
      "Produce and install",
      "Inspect and hand over",
      "Close out and warranty",
    ],
    ideaTitle: "Renew your home with a turnkey service",
    ideaIntro:
      "One team supports you from design through construction and handover. We care for the details so your home fits your life better.",
    ctaIntro:
      "Free advice on interior renovation, with a plan suited to your schedule and budget.",
  },
  ja: {
    ...townhouseConstructionCopy.ja,
    heroParts: ["内装", "リノベーション"],
    intro:
      "今の暮らしに合う、美しく快適な住まいへ。建物の現状、ご家族のニーズ、ご予算をもとに改修を計画します。",
    explore: "改修のきっかけを見る",
    stylesLabel: "改修を考えるとき",
    stylesTitle: "空間を整え、毎日の暮らしを豊かに",
    stylesIntro:
      "住まいは生活だけでなく、休息やくつろぎの場所。適切な時期の改修で、家族の変化に寄り添います。",
    styleLabel: "改修のきっかけ",
    styles: [
      {
        title: "内装が古くなったとき",
        description:
          "長年の使用で、表面、設備、家具が傷んだり使いにくくなったりします。現地調査で、修理・交換・再利用する部分を整理します。",
      },
      {
        title: "もっと美しく快適にしたいとき",
        description:
          "色、素材、家具配置を見直して、新しい雰囲気へ。家族の暮らし方と好みをもとに、一つひとつ検討します。",
      },
      {
        title: "風水を見直したいとき",
        description:
          "ご希望の風水をもとに家具、照明、空間の向きを検討。個人の優先事項と使いやすさ、美しさを調和させます。",
      },
      {
        title: "使い方が変わったとき",
        description:
          "家族が増えた、仕事の場所や寝室、収納が必要になった。間取りと家具を調整し、空間を活かします。",
      },
    ],
    tipsLabel: "選ばれる理由",
    tipsTitle: "住まいの新しい一歩をともに",
    tipsIntro:
      "ご希望を伺い、現状を丁寧に調査。各工事を連携させ、適した改修計画をご提案します。",
    tips: [
      "経験豊富な建築士・技術者・施工スタッフ",
      "素材と改修方法を丁寧にご案内",
      "設計と施工の一括サービス",
      "自社工房でのオーダー家具製作",
      "ご予算に合う多様なプラン",
      "お引き渡し後の保証とメンテナンス",
      "全体を任せられる一括サービスのご相談",
    ],
    processLabel: "施工の流れ",
    processTitle: "ご要望から保証までの7ステップ",
    processSteps: [
      "ご要望の確認",
      "現地調査",
      "お見積もり",
      "契約",
      "製作・施工",
      "検査・お引き渡し",
      "契約精算・保証",
    ],
    ideaTitle: "一括サービスで住まいをリニューアル",
    ideaIntro:
      "設計から施工、お引き渡しまで同じチームが支援。暮らしに合う住まいへ、細部を丁寧に整えます。",
    ctaIntro:
      "内装改修について、工期とご予算に合う計画を無料でご相談いただけます。",
  },
  ko: {
    ...townhouseConstructionCopy.ko,
    heroParts: ["인테리어", "리모델링"],
    intro:
      "지금의 생활에 맞게 더 아름답고 편안한 집으로 바꿉니다. 현장 상태, 가족의 필요, 예산에 맞춰 리모델링을 계획합니다.",
    explore: "리모델링 필요 살펴보기",
    stylesLabel: "리모델링이 필요할 때",
    stylesTitle: "공간을 새롭게, 일상을 더 편안하게",
    stylesIntro:
      "집은 생활뿐 아니라 휴식의 공간입니다. 적절한 시기의 리모델링으로 가족의 변화에 맞춰갑니다.",
    styleLabel: "리모델링 필요",
    styles: [
      {
        title: "인테리어가 낡았을 때",
        description:
          "오랜 사용으로 표면, 설비, 가구가 낡거나 불편해질 수 있습니다. 현장 조사로 수리, 교체, 보존할 부분을 확인합니다.",
      },
      {
        title: "더 아름답고 편리하게 바꾸고 싶을 때",
        description:
          "색상, 소재, 가구 배치를 새롭게 합니다. 가족의 생활 습관과 취향에 맞춰 변화를 계획합니다.",
      },
      {
        title: "풍수를 고려해 배치를 바꾸고 싶을 때",
        description:
          "원하는 풍수 방향에 맞춰 가구, 조명, 공간의 방향을 검토합니다. 개인의 우선순위와 기능, 조화를 함께 고려합니다.",
      },
      {
        title: "공간의 쓰임이 달라졌을 때",
        description:
          "가족이 늘거나 업무 공간, 침실, 수납이 더 필요한가요? 배치와 가구를 조정해 공간을 효율적으로 활용합니다.",
      },
    ],
    tipsLabel: "우리를 선택하는 이유",
    tipsTitle: "집을 새롭게 바꾸는 동반자",
    tipsIntro:
      "필요를 듣고 현장을 세심하게 조사하며 공정들을 조율해 적합한 리모델링 방안을 제안합니다.",
    tips: [
      "경험 많은 건축가, 엔지니어, 시공자",
      "자재와 리모델링 방안에 대한 세심한 상담",
      "일관된 설계·시공 통합 서비스",
      "자체 공장에서 제작하는 맞춤 가구",
      "다양한 예산에 맞는 인테리어 패키지",
      "인도 후에도 세심한 보증과 유지보수",
      "전체 프로젝트를 위한 통합 서비스 상담",
    ],
    processLabel: "진행 절차",
    processTitle: "요청 접수부터 보증까지 7단계",
    processSteps: [
      "요청 접수",
      "현장 조사",
      "견적 제안",
      "계약 체결",
      "제작 및 시공",
      "검수 및 인도",
      "계약 정산 및 보증",
    ],
    ideaTitle: "통합 서비스로 집을 새롭게",
    ideaIntro:
      "한 팀이 설계부터 시공, 인도까지 함께합니다. 집이 생활에 더 잘 맞도록 세부 사항을 세심하게 살핍니다.",
    ctaIntro:
      "일정과 예산에 맞는 인테리어 리모델링 방안을 무료로 상담해 드립니다.",
  },
  sv: {
    ...townhouseConstructionCopy.sv,
    heroParts: ["Invändig", "renovering"],
    intro:
      "Förnya ditt hem för ett vackrare och bekvämare liv i dag. Planera renoveringen efter bostadens skick, familjens behov och din budget.",
    explore: "Utforska behoven",
    stylesLabel: "När det är dags att renovera",
    stylesTitle: "Förnya rummen och förbättra vardagen",
    stylesIntro:
      "Ett hem är en plats för vardag, vila och återhämtning. En renovering vid rätt tid hjälper det att följa familjens utveckling.",
    styleLabel: "Renoveringsbehov",
    styles: [
      {
        title: "När inredningen är sliten",
        description:
          "Ytor, utrustning och möbler kan bli slitna eller mindre praktiska med åren. En besiktning visar vad som bör lagas, bytas och behållas.",
      },
      {
        title: "När du vill ha mer stil och komfort",
        description:
          "Förnya färger, material och möblering för ett nytt uttryck. Varje förändring utgår från familjens vanor och smak.",
      },
      {
        title: "När du vill se över feng shui",
        description:
          "Se över möbler, belysning och riktningar utifrån dina önskemål om feng shui. Personliga prioriteringar vägs mot funktion och visuell harmoni.",
      },
      {
        title: "När användningen av hemmet förändras",
        description:
          "En växande familj eller behov av arbetsplats, sovrum och förvaring? Anpassa planlösning och möbler så att ytan används bättre.",
      },
    ],
    tipsLabel: "Varför välja oss",
    tipsTitle: "En partner när ditt hem förnyas",
    tipsIntro:
      "Vi lyssnar, undersöker bostadens skick och samordnar arbetena för att ta fram en lämplig renoveringsplan.",
    tips: [
      "Erfarna arkitekter, ingenjörer och montörer",
      "Omsorgsfull rådgivning om material och lösningar",
      "Samordnad design och genomförande",
      "Måttanpassade möbler från egna verkstäder",
      "Inredningspaket för olika budgetar",
      "Uppmärksam garanti och underhåll efter överlämning",
      "Rådgivning om helhetslösningar för projektet",
    ],
    processLabel: "Vårt arbetssätt",
    processTitle: "7 steg från önskemål till garanti",
    processSteps: [
      "Ta emot önskemål",
      "Besiktiga bostaden",
      "Lämna offert",
      "Teckna avtal",
      "Tillverka och installera",
      "Kontroll och överlämning",
      "Avslut och garanti",
    ],
    ideaTitle: "Förnya hemmet med en helhetslösning",
    ideaIntro:
      "Ett team följer dig från design till utförande och överlämning. Vi tar hand om detaljerna så att hemmet passar ditt liv bättre.",
    ctaIntro:
      "Kostnadsfri rådgivning om renovering anpassad till din tidsplan och budget.",
  },
  fr: {
    ...townhouseConstructionCopy.fr,
    heroParts: ["Rénovation", "intérieure"],
    intro:
      "Un intérieur plus beau et plus confortable pour votre vie actuelle. Nous planifions la rénovation selon l’existant, les besoins de votre famille et votre budget.",
    explore: "Découvrir les besoins",
    stylesLabel: "Quand rénover",
    stylesTitle: "Renouveler l’espace, améliorer le quotidien",
    stylesIntro:
      "Le foyer accueille la vie quotidienne, le repos et la détente. Une rénovation au bon moment lui permet de suivre l’évolution de votre famille.",
    styleLabel: "Besoin de rénovation",
    styles: [
      {
        title: "Quand l’intérieur se dégrade",
        description:
          "Avec les années, surfaces, équipements et meubles peuvent s’user ou perdre en praticité. Un état des lieux détermine ce qu’il faut réparer, remplacer ou conserver.",
      },
      {
        title: "Pour plus de style et de confort",
        description:
          "Renouvelez couleurs, matériaux et agencement pour une nouvelle ambiance. Chaque changement tient compte des habitudes et des goûts de votre famille.",
      },
      {
        title: "Pour revoir le feng shui",
        description:
          "Repensez mobilier, éclairage et orientations selon vos préférences de feng shui, en les conciliant avec la fonctionnalité et l’harmonie visuelle.",
      },
      {
        title: "Quand les usages évoluent",
        description:
          "La famille s’agrandit ou vous avez besoin d’un bureau, d’une chambre ou de rangements ? Adaptez la disposition et le mobilier pour mieux utiliser l’espace.",
      },
    ],
    tipsLabel: "Pourquoi nous choisir",
    tipsTitle: "Un partenaire pour renouveler votre foyer",
    tipsIntro:
      "Nous écoutons vos besoins, examinons l’existant et coordonnons les travaux pour proposer une rénovation adaptée.",
    tips: [
      "Architectes, ingénieurs et artisans expérimentés",
      "Conseils attentifs sur les matériaux et les solutions",
      "Conception et réalisation coordonnées",
      "Mobilier sur mesure produit dans nos ateliers",
      "Des offres pour différents budgets",
      "Garantie et entretien attentifs après livraison",
      "Conseils sur une offre clé en main pour tout le projet",
    ],
    processLabel: "Notre démarche",
    processTitle: "7 étapes du besoin à la garantie",
    processSteps: [
      "Recueil des besoins",
      "État des lieux",
      "Devis",
      "Signature du contrat",
      "Fabrication et travaux",
      "Réception et livraison",
      "Clôture et garantie",
    ],
    ideaTitle: "Renouveler votre intérieur avec une offre clé en main",
    ideaIntro:
      "Une seule équipe vous accompagne de la conception à la réalisation et à la livraison. Nous soignons les détails pour adapter votre foyer à votre vie.",
    ctaIntro:
      "Conseils gratuits sur la rénovation intérieure, selon votre calendrier et votre budget.",
  },
  ru: {
    ...townhouseConstructionCopy.ru,
    heroParts: ["Обновление", "интерьера"],
    intro:
      "Обновите дом для более красивой и удобной жизни. План ремонта учитывает состояние жилья, потребности семьи и бюджет.",
    explore: "Когда нужен ремонт",
    stylesLabel: "Когда пора обновлять",
    stylesTitle: "Новое пространство для лучшей жизни",
    stylesIntro:
      "Дом — место повседневной жизни, отдыха и восстановления. Своевременный ремонт помогает ему меняться вместе с семьёй.",
    styleLabel: "Причина обновления",
    styles: [
      {
        title: "Когда интерьер изношен",
        description:
          "С годами поверхности, оборудование и мебель могут изнашиваться и становиться менее удобными. Обследование определит, что ремонтировать, заменить или сохранить.",
      },
      {
        title: "Когда хочется больше красоты и комфорта",
        description:
          "Обновите цвета, материалы и расстановку мебели. Каждое изменение планируется с учётом привычек и вкусов семьи.",
      },
      {
        title: "Когда хочется пересмотреть фэншуй",
        description:
          "Пересмотрите мебель, освещение и ориентацию помещений по вашим предпочтениям фэншуй, сочетая их с функциональностью и визуальной гармонией.",
      },
      {
        title: "Когда меняется назначение пространства",
        description:
          "Семья растёт или нужны рабочее место, спальня и хранение? Измените планировку и мебель, чтобы лучше использовать площадь.",
      },
    ],
    tipsLabel: "Почему выбирают нас",
    tipsTitle: "Ваш партнёр в обновлении дома",
    tipsIntro:
      "Мы выслушиваем пожелания, внимательно обследуем жильё и согласуем работы для подходящего плана ремонта.",
    tips: [
      "Опытные архитекторы, инженеры и мастера",
      "Внимательные консультации по материалам и решениям",
      "Согласованные проектирование и ремонт",
      "Мебель на заказ в собственных мастерских",
      "Пакеты для разных бюджетов",
      "Заботливая гарантийная поддержка и обслуживание",
      "Консультации по услуге под ключ для всего проекта",
    ],
    processLabel: "Наш процесс",
    processTitle: "7 шагов от пожеланий до гарантии",
    processSteps: [
      "Приём пожеланий",
      "Обследование объекта",
      "Смета",
      "Подписание договора",
      "Изготовление и монтаж",
      "Приёмка и передача",
      "Закрытие и гарантия",
    ],
    ideaTitle: "Обновите дом с услугой под ключ",
    ideaIntro:
      "Одна команда сопровождает вас от проекта до ремонта и передачи объекта. Мы заботимся о деталях, чтобы дом лучше подходил вашей жизни.",
    ctaIntro:
      "Бесплатная консультация по ремонту интерьера с учётом сроков и бюджета.",
  },
  es: {
    ...townhouseConstructionCopy.es,
    heroParts: ["Reforma de", "interiores"],
    intro:
      "Renueva tu hogar para una vida más bonita y cómoda. Planificamos la reforma según el estado de la vivienda, las necesidades familiares y tu presupuesto.",
    explore: "Explorar las necesidades",
    stylesLabel: "Cuándo reformar",
    stylesTitle: "Renueva el espacio, mejora tu día a día",
    stylesIntro:
      "El hogar es un lugar para vivir, descansar y relajarse. Una reforma a tiempo permite que evolucione con tu familia.",
    styleLabel: "Necesidad de reforma",
    styles: [
      {
        title: "Cuando el interior se deteriora",
        description:
          "Con los años, superficies, equipos y muebles pueden desgastarse o resultar menos prácticos. Una inspección identifica qué reparar, sustituir y conservar.",
      },
      {
        title: "Cuando buscas más estilo y comodidad",
        description:
          "Renueva colores, materiales y distribución para un nuevo ambiente. Cada cambio tiene en cuenta las rutinas y los gustos familiares.",
      },
      {
        title: "Cuando quieres revisar el feng shui",
        description:
          "Reorganiza muebles, iluminación y orientaciones según tus preferencias de feng shui, equilibrándolas con la funcionalidad y la armonía visual.",
      },
      {
        title: "Cuando cambian los usos del hogar",
        description:
          "¿Crece la familia o necesitas un despacho, dormitorio o almacenamiento? Adapta la distribución y el mobiliario para aprovechar mejor el espacio.",
      },
    ],
    tipsLabel: "Por qué elegirnos",
    tipsTitle: "Un compañero para renovar tu hogar",
    tipsIntro:
      "Escuchamos tus necesidades, revisamos la vivienda y coordinamos los trabajos para proponer una reforma adecuada.",
    tips: [
      "Arquitectos, ingenieros e instaladores experimentados",
      "Asesoramiento atento sobre materiales y soluciones",
      "Diseño y ejecución coordinados",
      "Muebles a medida en nuestros talleres",
      "Paquetes para diferentes presupuestos",
      "Garantía y mantenimiento atentos tras la entrega",
      "Asesoramiento sobre el servicio llave en mano",
    ],
    processLabel: "Nuestro proceso",
    processTitle: "7 pasos desde la idea hasta la garantía",
    processSteps: [
      "Recoger necesidades",
      "Inspeccionar la vivienda",
      "Presupuestar",
      "Firmar el contrato",
      "Fabricar e instalar",
      "Revisar y entregar",
      "Cierre y garantía",
    ],
    ideaTitle: "Renueva tu hogar con un servicio llave en mano",
    ideaIntro:
      "Un mismo equipo te acompaña desde el diseño hasta la obra y la entrega. Cuidamos los detalles para que tu hogar se adapte mejor a tu vida.",
    ctaIntro:
      "Asesoramiento gratuito sobre reformas interiores según tus plazos y presupuesto.",
  },
  zh: {
    ...townhouseConstructionCopy.zh,
    heroParts: ["室内", "翻新改造"],
    intro:
      "让家更美观、更舒适，更适合当下生活。根据房屋现状、家人需求与预算制定改造计划。",
    explore: "了解改造需求",
    stylesLabel: "何时需要改造",
    stylesTitle: "焕新空间，改善日常生活",
    stylesIntro:
      "家不仅满足日常起居，也是放松与休憩的地方。适时改造，让空间持续陪伴家人的生活变化。",
    styleLabel: "改造需求",
    styles: [
      {
        title: "室内设施老旧时",
        description:
          "多年使用后，饰面、设备和家具可能磨损或不再便利。通过现场勘察确定需要维修、更换和保留的部分。",
      },
      {
        title: "想要更美观、更舒适时",
        description:
          "更新配色、材料和家具布局，营造新的氛围。每项改变都考虑家人的生活习惯与喜好。",
      },
      {
        title: "想要调整风水布局时",
        description:
          "根据业主的风水偏好重新考虑家具、照明与空间朝向，同时兼顾功能与整体协调。",
      },
      {
        title: "空间用途发生变化时",
        description:
          "家人增加，或需要工作区、卧室与更多收纳？调整布局和家具，更有效地利用面积。",
      },
    ],
    tipsLabel: "为何选择我们",
    tipsTitle: "与您一起焕新家园",
    tipsIntro: "倾听需求，细致勘察现状，协调各项施工，为您制定合适的改造方案。",
    tips: [
      "经验丰富的建筑师、工程师与施工人员",
      "细致提供材料与改造方案建议",
      "设计施工一体化，统筹实施",
      "自有工厂按需定制家具",
      "提供适合不同预算的套餐",
      "交付后提供细致保修与维护",
      "为整个项目提供交钥匙服务咨询",
    ],
    processLabel: "实施流程",
    processTitle: "从需求到保修的7个步骤",
    processSteps: [
      "接收需求",
      "现场勘察",
      "提供报价",
      "签订合同",
      "生产与施工",
      "验收与交付",
      "合同结算与保修",
    ],
    ideaTitle: "交钥匙服务，让家焕然一新",
    ideaIntro:
      "同一个团队从设计到施工、交付全程相伴。细致处理每个环节，让家更适合您的生活。",
    ctaIntro: "免费咨询室内改造，提供符合工期与预算的方案。",
  },
};
