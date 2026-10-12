import type { AdditionalLocale } from "@/lib/locale";

type PopupCopy = {
  dialog: string; close: string; eyebrow: string; heading: string; introduction: string;
  benefits: [string, string, string]; urgent: string; formHeading: string; requiredNote: string;
  name: string; namePlaceholder: string; phone: string; phonePlaceholder: string; emailPlaceholder: string;
  service: string; selectService: string; scale: string; scalePlaceholder: string; area: string;
  areaOptions: [string, string, string]; message: string; messagePlaceholder: string; submit: string;
  sending: string; privacy: string; successHeading: string; successMessage: string; sendError: string;
  errors: { name: string; phone: string; email: string; service: string; area: string };
};

export const additionalPopupCopy: Record<AdditionalLocale, PopupCopy> = {
  ko: {
    dialog: "무료 상담 신청", close: "닫기", eyebrow: "무료 상담 신청", heading: "전문가와 무료로 상담하세요", introduction: "연락처를 남겨주시면 Tổ Ấm Hoàn Hảo 팀이 고객님께 맞는 솔루션을 안내해 드립니다.",
    benefits: ["영업시간 내 약 2시간 안에 답변", "숨은 비용 없는 투명한 견적", "상담부터 설계·시공·보증까지 지원"], urgent: "급하신가요? 전화해 주세요", formHeading: "고객 정보", requiredNote: "* 표시된 항목은 필수입니다.",
    name: "성함", namePlaceholder: "성함을 입력하세요", phone: "전화번호", phonePlaceholder: "09xx xxx xxx", emailPlaceholder: "you@example.com", service: "서비스 유형", selectService: "서비스 선택", scale: "면적 / 규모", scalePlaceholder: "예: 78㎡, 3층 주택", area: "지역", areaOptions: ["하노이", "호찌민시", "기타"],
    message: "요청 내용", messagePlaceholder: "프로젝트에 대해 자세히 알려주세요...", submit: "요청 보내기", sending: "전송 중...", privacy: "입력하신 정보는 상담 지원에만 사용됩니다.", successHeading: "요청을 보냈습니다!", successMessage: "문의해 주셔서 감사합니다. 곧 연락드리겠습니다.", sendError: "전송하지 못했습니다. 다시 시도하거나 0903 897 555로 전화해 주세요.",
    errors: { name: "성함을 입력해 주세요.", phone: "올바른 전화번호를 입력해 주세요.", email: "올바른 이메일 주소를 입력해 주세요.", service: "서비스를 선택해 주세요.", area: "지역을 선택해 주세요." },
  },
  sv: {
    dialog: "Boka kostnadsfri rådgivning", close: "Stäng", eyebrow: "BOKA RÅDGIVNING", heading: "Kostnadsfri hjälp av våra experter", introduction: "Lämna dina uppgifter så kontaktar Tổ Ấm Hoàn Hảo dig med en lösning som passar dina behov.",
    benefits: ["Svar inom cirka två arbetstimmar", "Tydlig offert utan dolda kostnader", "Stöd från rådgivning till garanti"], urgent: "Bråttom? Ring oss", formHeading: "Dina uppgifter", requiredNote: "Fält märkta med * är obligatoriska.",
    name: "Fullständigt namn", namePlaceholder: "Ditt fullständiga namn", phone: "Telefonnummer", phonePlaceholder: "09xx xxx xxx", emailPlaceholder: "du@example.com", service: "Tjänst", selectService: "Välj tjänst", scale: "Yta / projektstorlek", scalePlaceholder: "Till exempel: 78 m², hus i tre våningar", area: "Område", areaOptions: ["Hanoi", "Ho Chi Minh-staden", "Annat"],
    message: "Beskriv ditt projekt", messagePlaceholder: "Berätta mer om vad du behöver...", submit: "Skicka förfrågan", sending: "Skickar...", privacy: "Dina uppgifter används endast för att hjälpa dig med din förfrågan.", successHeading: "Din förfrågan har skickats!", successMessage: "Tack för att du hörde av dig. Vi kontaktar dig snart.", sendError: "Det gick inte att skicka. Försök igen eller ring 0903 897 555.",
    errors: { name: "Ange ditt namn.", phone: "Ange ett giltigt telefonnummer.", email: "Ange en giltig e-postadress.", service: "Välj en tjänst.", area: "Välj ett område." },
  },
  fr: {
    dialog: "Demander un conseil gratuit", close: "Fermer", eyebrow: "CONSEIL GRATUIT", heading: "Échangez gratuitement avec nos experts", introduction: "Laissez vos coordonnées et l'équipe Tổ Ấm Hoàn Hảo vous proposera une solution adaptée à vos besoins.",
    benefits: ["Réponse sous environ deux heures ouvrées", "Devis clair, sans frais cachés", "Accompagnement du conseil à la garantie"], urgent: "Une urgence ? Appelez-nous", formHeading: "Vos coordonnées", requiredNote: "Les champs marqués * sont obligatoires.",
    name: "Nom complet", namePlaceholder: "Votre nom complet", phone: "Téléphone", phonePlaceholder: "09xx xxx xxx", emailPlaceholder: "vous@exemple.com", service: "Service", selectService: "Choisir un service", scale: "Surface / taille du projet", scalePlaceholder: "Ex. : 78 m², maison de trois étages", area: "Région", areaOptions: ["Hanoï", "Hô Chi Minh-Ville", "Autre"],
    message: "Votre projet", messagePlaceholder: "Décrivez votre projet...", submit: "Envoyer la demande", sending: "Envoi...", privacy: "Vos données servent uniquement à répondre à votre demande.", successHeading: "Votre demande est envoyée !", successMessage: "Merci pour votre confiance. Notre équipe vous contactera bientôt.", sendError: "Envoi impossible. Réessayez ou appelez le 0903 897 555.",
    errors: { name: "Saisissez votre nom.", phone: "Saisissez un numéro valide.", email: "Saisissez une adresse e-mail valide.", service: "Choisissez un service.", area: "Choisissez une région." },
  },
  ru: {
    dialog: "Записаться на консультацию", close: "Закрыть", eyebrow: "ЗАПИСЬ НА КОНСУЛЬТАЦИЮ", heading: "Бесплатная консультация специалиста", introduction: "Оставьте контакты, и команда Tổ Ấm Hoàn Hảo предложит решение для вашего проекта.",
    benefits: ["Ответ примерно за два рабочих часа", "Понятная смета без скрытых расходов", "Поддержка от консультации до гарантии"], urgent: "Срочно? Позвоните нам", formHeading: "Ваши данные", requiredNote: "Поля со знаком * обязательны.",
    name: "Имя и фамилия", namePlaceholder: "Введите ваше имя", phone: "Телефон", phonePlaceholder: "09xx xxx xxx", emailPlaceholder: "you@example.com", service: "Услуга", selectService: "Выберите услугу", scale: "Площадь / масштаб", scalePlaceholder: "Например: 78 м², трёхэтажный дом", area: "Регион", areaOptions: ["Ханой", "Хошимин", "Другой"],
    message: "Описание проекта", messagePlaceholder: "Расскажите подробнее о вашем проекте...", submit: "Отправить заявку", sending: "Отправка...", privacy: "Ваши данные используются только для ответа на запрос.", successHeading: "Заявка отправлена!", successMessage: "Спасибо за обращение. Наша команда скоро свяжется с вами.", sendError: "Не удалось отправить. Попробуйте снова или позвоните по номеру 0903 897 555.",
    errors: { name: "Введите ваше имя.", phone: "Введите действительный номер телефона.", email: "Введите действительный адрес электронной почты.", service: "Выберите услугу.", area: "Выберите регион." },
  },
  es: {
    dialog: "Solicitar asesoría gratis", close: "Cerrar", eyebrow: "ASESORÍA GRATIS", heading: "Asesoría gratuita con expertos", introduction: "Déjanos tus datos y el equipo de Tổ Ấm Hoàn Hảo te contactará para encontrar una solución adecuada.",
    benefits: ["Respuesta en unas dos horas laborables", "Presupuesto claro y sin costes ocultos", "Apoyo desde la consulta hasta la garantía"], urgent: "¿Es urgente? Llámanos", formHeading: "Tus datos", requiredNote: "Los campos marcados con * son obligatorios.",
    name: "Nombre completo", namePlaceholder: "Tu nombre completo", phone: "Teléfono", phonePlaceholder: "09xx xxx xxx", emailPlaceholder: "tu@ejemplo.com", service: "Servicio", selectService: "Elige un servicio", scale: "Superficie / tamaño", scalePlaceholder: "Por ejemplo: 78 m², casa de tres plantas", area: "Zona", areaOptions: ["Hanói", "Ciudad Ho Chi Minh", "Otra"],
    message: "Detalles del proyecto", messagePlaceholder: "Cuéntanos qué necesitas...", submit: "Enviar solicitud", sending: "Enviando...", privacy: "Tus datos solo se usarán para atender tu consulta.", successHeading: "¡Solicitud enviada!", successMessage: "Gracias por contactarnos. Nuestro equipo te responderá pronto.", sendError: "No se pudo enviar. Inténtalo de nuevo o llama al 0903 897 555.",
    errors: { name: "Introduce tu nombre.", phone: "Introduce un teléfono válido.", email: "Introduce un correo válido.", service: "Elige un servicio.", area: "Elige una zona." },
  },
  zh: {
    dialog: "预约免费咨询", close: "关闭", eyebrow: "预约免费咨询", heading: "与专家免费沟通", introduction: "请留下联系方式。Tổ Ấm Hoàn Hảo 团队将联系您，讨论适合您需求的方案。",
    benefits: ["工作时间内约两小时回复", "报价透明，无隐藏费用", "从咨询、设计、施工到保修全程支持"], urgent: "急需帮助？立即致电", formHeading: "您的信息", requiredNote: "标有 * 的项目为必填项。",
    name: "姓名", namePlaceholder: "请输入姓名", phone: "电话", phonePlaceholder: "09xx xxx xxx", emailPlaceholder: "you@example.com", service: "服务类型", selectService: "请选择服务", scale: "面积 / 项目规模", scalePlaceholder: "例如：78㎡、三层住宅", area: "地区", areaOptions: ["河内", "胡志明市", "其他"],
    message: "需求说明", messagePlaceholder: "请详细描述您的需求...", submit: "发送需求", sending: "发送中...", privacy: "您的信息仅用于回复咨询，我们会妥善保管。", successHeading: "提交成功！", successMessage: "感谢您的信任。我们会尽快与您联系。", sendError: "发送失败。请重试或拨打 0903 897 555。",
    errors: { name: "请输入姓名。", phone: "请输入有效电话号码。", email: "请输入有效邮箱。", service: "请选择服务类型。", area: "请选择地区。" },
  },
};

export const additionalServiceLabels: Record<AdditionalLocale, [string, string, string, string, string]> = {
  ko: ["인테리어 디자인", "인테리어 시공", "가구 제작", "건축 일괄 시공", "리노베이션"],
  sv: ["Inredningsdesign", "Inredningsarbeten", "Möbeltillverkning", "Nyckelfärdigt bygge", "Renovering"],
  fr: ["Design intérieur", "Travaux d'intérieur", "Fabrication de mobilier", "Construction clé en main", "Rénovation"],
  ru: ["Дизайн интерьера", "Отделка интерьера", "Производство мебели", "Строительство под ключ", "Ремонт и обновление"],
  es: ["Diseño interior", "Construcción de interiores", "Fabricación de mobiliario", "Construcción llave en mano", "Renovación"],
  zh: ["室内设计", "室内施工", "家具制作", "全包建筑", "翻新改造"],
};
