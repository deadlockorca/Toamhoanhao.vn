"use client";

import {
  ArrowLeft, ArrowRight, BadgeCheck, Box, ChevronDown,
  Heart, MapPin, Ruler, Search, ShieldCheck, Sprout, UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteHeader } from "@/components/site-header";
import type { LibraryCategory, LibraryContentType, LibraryItem } from "@/lib/content-library";
import styles from "./portfolio-overview.module.css";

type PortfolioOverviewProps = {
  mode: "projects" | "designs";
  items: LibraryItem[];
  initialCategory?: LibraryCategory;
  initialPage?: number;
};

const pageSize = 9;
const areaOptions = ["Tất cả", "Dưới 50m²", "50–100m²", "100–200m²", "Trên 200m²"];
const processSteps = [
  ["Tư vấn & khảo sát", "Lắng nghe nhu cầu, khảo sát thực tế"],
  ["Thiết kế ý tưởng", "Lên concept, mặt bằng 2D – 3D"],
  ["Báo giá & ký hợp đồng", "Rõ ràng, minh bạch, đúng tiến độ"],
  ["Thi công hoàn thiện", "Giám sát chặt chẽ, đảm bảo chất lượng"],
  ["Bàn giao & bảo hành", "Đồng hành lâu dài, chăm sóc sau dịch vụ"],
] as const;
const values = [
  { icon: Sprout, title: "Thiết kế sáng tạo", description: "Cá nhân hóa theo phong cách sống" },
  { icon: UsersRound, title: "Đội ngũ chuyên nghiệp", description: "Kinh nghiệm, tận tâm, trách nhiệm" },
  { icon: Box, title: "Vật liệu chất lượng", description: "Chọn lọc kỹ lưỡng, bền vững" },
  { icon: ShieldCheck, title: "Bảo hành dài hạn", description: "Đồng hành sau bàn giao, lâu dài" },
] as const;

function displayCategory(category: string, mode: PortfolioOverviewProps["mode"]) {
  return mode === "designs" && category === "Căn hộ" ? "Chung cư" : category;
}

function areaNumber(area?: string) {
  const match = area?.match(/(\d+(?:[,.]\d+)?)/);
  return match ? Number(match[1].replace(",", ".")) : null;
}

function matchesArea(area: string | undefined, range: string) {
  if (range === "Tất cả") return true;
  const value = areaNumber(area);
  if (value === null) return false;
  switch (range) {
    case "Dưới 50m²": return value < 50;
    case "50–100m²": return value >= 50 && value < 100;
    case "100–200m²": return value >= 100 && value < 200;
    case "Trên 200m²": return value >= 200;
    default: return true;
  }
}

export function PortfolioOverview({ mode, items, initialCategory, initialPage = 1 }: PortfolioOverviewProps) {
  const isDesigns = mode === "designs";
  const heroItems = (isDesigns
    ? [
        ...items.filter((item) => item.category === "Căn hộ" && item.title.toLowerCase().includes("penthouse")),
        ...items.filter((item) => item.featured && item.title.length < 100),
        ...items.filter((item) => item.category === "Căn hộ" && item.title.length < 100),
        ...items,
      ]
    : items.filter((item) => item.contentType === "project")
  ).filter((item, index, all) => all.findIndex((candidate) => candidate.slug === item.slug) === index).slice(0, 3);
  const [slide, setSlide] = useState(0);
  const [draftType, setDraftType] = useState<"all" | LibraryContentType>(
    isDesigns || (initialCategory && ["Phòng khách", "Phòng ngủ", "Phòng bếp", "Tủ bếp", "Phòng trẻ em"].includes(initialCategory)) ? "designSample" : "project",
  );
  const [draftCategory, setDraftCategory] = useState(initialCategory ?? "Tất cả");
  const [draftStyle, setDraftStyle] = useState("Tất cả");
  const [draftArea, setDraftArea] = useState("Tất cả");
  const [draftBedrooms, setDraftBedrooms] = useState("Tất cả");
  const [filters, setFilters] = useState({ type: draftType, category: draftCategory, style: draftStyle, area: draftArea, bedrooms: draftBedrooms });
  const [sort, setSort] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(Math.max(1, initialPage) * pageSize);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (heroItems.length < 2) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % heroItems.length), 6000);
    return () => window.clearInterval(timer);
  }, [heroItems.length]);

  const activeHero = heroItems[slide];
  const categoryOptions = useMemo(() => [...new Set(items.map((item) => item.category))], [items]);
  const styleOptions = useMemo(() => [...new Set(items.map((item) => item.style).filter(Boolean))].sort((a, b) => a.localeCompare(b, "vi")), [items]);
  const bedroomOptions = useMemo(() => [...new Set(items.map((item) => item.bedrooms).filter((value): value is string => Boolean(value)))], [items]);

  const filteredItems = useMemo(() => {
    const result = items.filter((item) => {
      if (filters.type !== "all" && item.contentType !== filters.type) return false;
      if (filters.category !== "Tất cả" && item.category !== filters.category) return false;
      if (filters.style !== "Tất cả" && item.style !== filters.style) return false;
      if (filters.bedrooms !== "Tất cả" && item.bedrooms !== filters.bedrooms) return false;
      return matchesArea(item.area, filters.area);
    });
    if (sort === "name") return result.sort((a, b) => a.title.localeCompare(b.title, "vi"));
    if (sort === "area-desc") return result.sort((a, b) => (areaNumber(b.area) ?? 0) - (areaNumber(a.area) ?? 0));
    if (sort === "area-asc") return result.sort((a, b) => (areaNumber(a.area) ?? 0) - (areaNumber(b.area) ?? 0));
    return result;
  }, [filters, items, sort]);

  function applyFilters() {
    setFilters({ type: draftType, category: draftCategory, style: draftStyle, area: draftArea, bedrooms: draftBedrooms });
    setVisibleCount(pageSize);
  }

  function moveSlide(direction: number) {
    setSlide((current) => (current + direction + heroItems.length) % heroItems.length);
  }

  function toggleFavorite(key: string) {
    setFavorites((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  }

  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{isDesigns ? "BỘ SƯU TẬP THIẾT KẾ" : "DỰ ÁN NỔI BẬT"}</p>
          <h1>{isDesigns ? <>Mẫu thiết kế<br />của chúng tôi</> : <>Dự án<br />của chúng tôi</>}</h1>
          <p className={styles.heroDescription}>{isDesigns ? "Những ý tưởng nội thất được tuyển chọn để bạn tìm thấy phong cách phù hợp với không gian của mình." : "Những không gian sống được kiến tạo bằng tâm huyết, tỉ mỉ trong từng chi tiết và sự thấu hiểu phong cách sống."}</p>
          <a href="#portfolio-list" className={styles.pillButton}>Khám phá {isDesigns ? "mẫu thiết kế" : "dự án"} <ArrowRight size={16} /></a>
          <div className={styles.heroPagination}><span>{String(slide + 1).padStart(2, "0")}</span><span>/</span><span>{String(Math.max(1, heroItems.length)).padStart(2, "0")}</span><span className={styles.heroRule} /><button type="button" onClick={() => moveSlide(-1)} disabled={heroItems.length < 2} aria-label="Ảnh trước"><ArrowLeft size={16} /></button><button type="button" onClick={() => moveSlide(1)} disabled={heroItems.length < 2} aria-label="Ảnh tiếp theo"><ArrowRight size={16} /></button></div>
        </div>
        <div className={styles.heroVisual}>
          {activeHero ? <Image key={activeHero.thumbnail} src={activeHero.thumbnail} alt={activeHero.title} fill priority sizes="(max-width: 760px) 100vw, 60vw" /> : <Image src="/images/trang-chu/thiet-ke-thi-cong-nha-pho.jpg" alt="Không gian nội thất" fill priority sizes="(max-width: 760px) 100vw, 60vw" />}
          {activeHero && <div className={styles.heroCaption}><div><strong>{activeHero.title}</strong><span>{activeHero.area || activeHero.category} &nbsp; | &nbsp; {activeHero.style}</span></div><div className={styles.heroVisualArrows}><button type="button" onClick={() => moveSlide(-1)} disabled={heroItems.length < 2} aria-label="Dự án trước"><ArrowLeft size={17} /></button><button type="button" onClick={() => moveSlide(1)} disabled={heroItems.length < 2} aria-label="Dự án tiếp theo"><ArrowRight size={17} /></button></div></div>}
        </div>
      </section>

      <section id="portfolio-list" className={styles.listSection}>
        <div className={styles.container}>
          <div className={styles.listHeader}><div><p className={styles.eyebrow}>{isDesigns ? "DANH SÁCH MẪU THIẾT KẾ" : "DANH SÁCH DỰ ÁN"}</p><h2>Khám phá các<br />{isDesigns ? "mẫu thiết kế tiêu biểu" : "công trình tiêu biểu"}</h2></div><label className={styles.sortControl}>Sắp xếp: <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sắp xếp"><option value="newest">Mới nhất</option><option value="name">Tên A-Z</option><option value="area-desc">Diện tích lớn nhất</option><option value="area-asc">Diện tích nhỏ nhất</option></select><ChevronDown size={15} /></label></div>

          <div className={styles.listGrid}>
            <aside className={styles.sidebar}>
              <div className={styles.filterPanel}>
                {!isDesigns && <label>Loại nội dung<select value={draftType} onChange={(event) => setDraftType(event.target.value as "all" | LibraryContentType)}><option value="project">Công trình thực tế</option><option value="designSample">Mẫu thiết kế</option><option value="all">Tất cả</option></select></label>}
                <label>Loại công trình<select value={draftCategory} onChange={(event) => setDraftCategory(event.target.value as LibraryCategory | "Tất cả")}><option>Tất cả</option>{categoryOptions.map((item) => <option key={item} value={item}>{displayCategory(item, mode)}</option>)}</select></label>
                <label>Phong cách<select value={draftStyle} onChange={(event) => setDraftStyle(event.target.value)}><option>Tất cả</option>{styleOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label>Diện tích<select value={draftArea} onChange={(event) => setDraftArea(event.target.value)}>{areaOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label>Số phòng ngủ<select value={draftBedrooms} onChange={(event) => setDraftBedrooms(event.target.value)}><option>Tất cả</option>{bedroomOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
                <button type="button" onClick={applyFilters} className={styles.searchButton}><Search size={16} /> Tìm kiếm</button>
              </div>
              <div className={styles.consultCard}><Sprout size={28} /><p>Bạn muốn thiết kế theo phong cách riêng?</p><ConsultationButton>Liên hệ tư vấn <ArrowRight size={15} /></ConsultationButton></div>
            </aside>

            <div className={styles.results}>
              {filteredItems.length ? <div className={styles.cards}>{filteredItems.slice(0, visibleCount).map((item) => {
                const key = `${item.contentType}-${item.slug}`;
                const isFavorite = favorites.includes(key);
                return <article className={styles.card} key={key}><div className={styles.cardImage}><Link href={item.href} aria-label={`Xem ${item.title}`}><Image src={item.thumbnail} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 27vw" /></Link><span>{item.contentType === "project" ? "CÔNG TRÌNH" : "MẪU THIẾT KẾ"}</span><button type="button" onClick={() => toggleFavorite(key)} aria-label={isFavorite ? `Bỏ yêu thích ${item.title}` : `Yêu thích ${item.title}`} aria-pressed={isFavorite}><Heart size={20} fill={isFavorite ? "currentColor" : "none"} /></button></div><div className={styles.cardBody}><Link href={item.href}><h3>{item.title}</h3></Link><div className={styles.cardMeta}><span><MapPin size={13} /> {item.location || displayCategory(item.category, mode)}</span>{item.area && <span><Ruler size={13} /> {item.area}</span>}<span><BadgeCheck size={13} /> {item.style}</span><Link href={item.href} aria-label={`Xem chi tiết ${item.title}`}><ArrowRight size={17} /></Link></div></div></article>;
              })}</div> : <p className={styles.empty}>Chưa có nội dung phù hợp với bộ lọc này.</p>}
              {filteredItems.length > visibleCount && <button type="button" onClick={() => setVisibleCount((count) => count + pageSize)} className={styles.loadMore}>Xem thêm {isDesigns ? "mẫu thiết kế" : "dự án"} <ArrowRight size={16} /></button>}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}><div className={`${styles.container} ${styles.valuesGrid}`}><div><p className={styles.eyebrow}>VÌ SAO CHỌN TỔ ẤM HOÀN HẢO</p><h2>Chúng tôi mang đến<br />điều gì cho bạn?</h2><p>Không chỉ là thiết kế, chúng tôi tạo nên những không gian sống phù hợp với cá tính, nhu cầu và phong cách riêng của bạn.</p></div>{values.map(({ icon: Icon, title, description }) => <div className={styles.value} key={title}><span><Icon size={24} strokeWidth={1.4} /></span><h3>{title}</h3><p>{description}</p></div>)}</div></section>

      <section className={styles.processSection}><div className={styles.container}><p className={styles.eyebrow}>QUY TRÌNH LÀM VIỆC</p><h2>5 bước kiến tạo tổ ấm</h2><ol>{processSteps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong><small>{description}</small></div></li>)}</ol></div></section>

      <section className={styles.workshopSection}><div className={styles.container}><div className={styles.workshopImage}><Image src="/images/xuong-san-xuat/banner.png" alt="Xưởng sản xuất nội thất Tổ Ấm Hoàn Hảo" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className={styles.workshopCopy}><p className={styles.eyebrow}>XƯỞNG SẢN XUẤT</p><h2>Những tối ưu từ xưởng sản xuất<br />hiện đại, quy mô lớn</h2><p>Chủ động về vật liệu, chất lượng và tiến độ thi công, giúp tối ưu chi phí cho khách hàng.</p><Link href="/gioi-thieu/xuong-san-xuat-noi-that">Khám phá xưởng sản xuất <ArrowRight size={16} /></Link></div></div></section>

      <section className={styles.testimonialsSection}><div className={styles.container}><p className={styles.eyebrow}>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</p><h2>Những chia sẻ chân thực</h2><div className={styles.testimonialGrid}>{["/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_5.jpg", "/images/trang-chu/trai-nghiem-khach-hang/khachnoithat1.jpg", "/images/trang-chu/trai-nghiem-khach-hang/khach_noi_that_6.jpg"].map((src, index) => <div className={styles.testimonial} key={src}><div><Image src={src} alt={`Trải nghiệm khách hàng ${index + 1}`} fill sizes="80px" /></div><p>Không gian sống được tạo nên từ sự lắng nghe và chăm chút trong từng chi tiết.</p><small>Hình ảnh thực tế từ khách hàng</small></div>)}</div></div></section>
    </main>
  );
}
