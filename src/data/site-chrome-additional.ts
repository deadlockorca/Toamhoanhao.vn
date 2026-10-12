import type { AdditionalLocale } from "@/lib/locale";

export const headerCopy: Record<AdditionalLocale, {
  tagline: string; home: string; navigation: string; language: string; consultation: string;
  openMenu: string; closeMenu: string; mobileNavigation: string;
}> = {
  ko: { tagline: "행복한 생활 공간을 만듭니다", home: "홈", navigation: "기본 메뉴", language: "언어", consultation: "무료 상담", openMenu: "메뉴 열기", closeMenu: "메뉴 닫기", mobileNavigation: "모바일 메뉴" },
  sv: { tagline: "VI SKAPAR HEM ATT TRIVAS I", home: "Startsida", navigation: "Huvudmeny", language: "Språk", consultation: "Gratis rådgivning", openMenu: "Öppna menyn", closeMenu: "Stäng menyn", mobileNavigation: "Mobilmeny" },
  fr: { tagline: "CRÉER DES ESPACES OÙ IL FAIT BON VIVRE", home: "Accueil", navigation: "Menu principal", language: "Langue", consultation: "Conseil gratuit", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", mobileNavigation: "Menu mobile" },
  ru: { tagline: "СОЗДАЁМ ПРОСТРАНСТВА ДЛЯ СЧАСТЛИВОЙ ЖИЗНИ", home: "Главная", navigation: "Главное меню", language: "Язык", consultation: "Бесплатная консультация", openMenu: "Открыть меню", closeMenu: "Закрыть меню", mobileNavigation: "Мобильное меню" },
  es: { tagline: "CREAMOS ESPACIOS PARA VIVIR FELIZ", home: "Inicio", navigation: "Menú principal", language: "Idioma", consultation: "Asesoría gratis", openMenu: "Abrir menú", closeMenu: "Cerrar menú", mobileNavigation: "Menú móvil" },
  zh: { tagline: "营造幸福生活空间", home: "首页", navigation: "主菜单", language: "语言", consultation: "免费咨询", openMenu: "打开菜单", closeMenu: "关闭菜单", mobileNavigation: "移动菜单" },
};

type FooterCopy = {
  intro: string; contact: string; address: string; hours: string; explore: string; about: string;
  projects: string; workshop: string; contactLink: string; services: string; design: string;
  construction: string; townhouse: string; pricing: string; connect: string; advice: string; bottom: string;
};

export const footerCopy: Record<AdditionalLocale, FooterCopy> = {
  ko: {
    intro: "아파트, 도심 주택, 빌라, 사무실, 레스토랑을 위한 인테리어 설계와 시공을 제공합니다.", contact: "연락처", address: "베트남 하노이 롱비엔 Nguyen Van Linh 129", hours: "월–토: 8:00–17:30",
    explore: "둘러보기", about: "회사 소개", projects: "프로젝트", workshop: "제작 공장", contactLink: "문의하기", services: "서비스", design: "인테리어 디자인", construction: "인테리어 시공", townhouse: "도심 주택 시공", pricing: "가격 안내", connect: "문의하기", advice: "무료 상담", bottom: "인테리어 설계 및 시공",
  },
  sv: {
    intro: "Vi ritar och bygger interiörer för lägenheter, radhus, villor, kontor och restauranger med hållbara lösningar.", contact: "KONTAKT", address: "129 Nguyen Van Linh, Long Bien, Hanoi", hours: "Mån–lör: 8.00–17.30",
    explore: "UTFORSKA", about: "Om oss", projects: "Projekt", workshop: "Verkstad", contactLink: "Kontakt", services: "TJÄNSTER", design: "Inredningsdesign", construction: "Inredningsarbeten", townhouse: "Radhusbyggnation", pricing: "Priser", connect: "KONTAKTA OSS", advice: "Gratis rådgivning", bottom: "Inredningsdesign och byggnation",
  },
  fr: {
    intro: "Nous concevons et réalisons des intérieurs pour appartements, maisons de ville, villas, bureaux et restaurants.", contact: "COORDONNÉES", address: "129 Nguyen Van Linh, Long Bien, Hanoï", hours: "Lun–sam : 8 h–17 h 30",
    explore: "DÉCOUVRIR", about: "À propos", projects: "Projets", workshop: "Atelier", contactLink: "Contact", services: "SERVICES", design: "Design intérieur", construction: "Travaux d'intérieur", townhouse: "Construction de maison de ville", pricing: "Tarifs", connect: "CONTACTEZ-NOUS", advice: "Conseil gratuit", bottom: "Design intérieur et réalisation",
  },
  ru: {
    intro: "Проектируем и создаём интерьеры квартир, городских домов, вилл, офисов и ресторанов.", contact: "КОНТАКТЫ", address: "129 Nguyen Van Linh, Лонгбьен, Ханой", hours: "Пн–сб: 8:00–17:30",
    explore: "РАЗДЕЛЫ", about: "О нас", projects: "Проекты", workshop: "Мастерская", contactLink: "Контакты", services: "УСЛУГИ", design: "Дизайн интерьера", construction: "Отделка интерьера", townhouse: "Строительство домов", pricing: "Цены", connect: "СВЯЖИТЕСЬ С НАМИ", advice: "Бесплатная консультация", bottom: "Дизайн интерьера и строительство",
  },
  es: {
    intro: "Diseñamos y construimos interiores para apartamentos, casas urbanas, villas, oficinas y restaurantes.", contact: "CONTACTO", address: "129 Nguyen Van Linh, Long Bien, Hanói", hours: "Lun–sáb: 8:00–17:30",
    explore: "EXPLORAR", about: "Nosotros", projects: "Proyectos", workshop: "Taller", contactLink: "Contacto", services: "SERVICIOS", design: "Diseño interior", construction: "Construcción de interiores", townhouse: "Construcción de casas urbanas", pricing: "Precios", connect: "HABLEMOS", advice: "Asesoría gratis", bottom: "Diseño interior y construcción",
  },
  zh: {
    intro: "我们为公寓、联排住宅、别墅、办公室和餐厅提供室内设计与施工服务。", contact: "联系方式", address: "越南河内市龙边郡 Nguyen Van Linh 路129号", hours: "周一至周六：8:00–17:30",
    explore: "网站导航", about: "关于我们", projects: "项目", workshop: "生产工厂", contactLink: "联系我们", services: "服务", design: "室内设计", construction: "室内施工", townhouse: "联排住宅施工", pricing: "报价", connect: "欢迎联系我们", advice: "免费咨询", bottom: "室内设计与施工",
  },
};
