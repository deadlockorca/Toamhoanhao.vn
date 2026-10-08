import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box, Building2, CalendarClock, Check, ClipboardCheck, Handshake, Leaf, Lightbulb, MessagesSquare, PenTool, Ruler, Sparkles, SwatchBook, UsersRound, WandSparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../thiet-ke-khach-san/hotel.module.css";
import local from "./apartment.module.css";

export const metadata: Metadata = {
  title: "Thiết kế nội thất chung cư | Tổ Ấm Hoàn Hảo",
  description: "Tư vấn thiết kế nội thất chung cư tối ưu, tiết kiệm chi phí và chuẩn đúng nhu cầu. Nhiều phong cách: Nhật Bản, Hàn Quốc, Âu Mỹ, Pháp, cổ điển, tân cổ điển, hiện đại.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type DesignStyle = Feature & { image: string; id: string };

const benefits: Feature[] = [
  { icon: UsersRound, title: "Dễ dàng thể hiện ý tưởng", content: "Với đội ngũ KTS dày dạn kinh nghiệm, bạn dễ dàng thể hiện ý tưởng cho tổ ấm của mình." },
  { icon: WandSparkles, title: "Chuẩn như thiết kế", content: "Tự tin có một không gian đúng như trong mơ, chuẩn như thiết kế, tối ưu cho tinh thần và sức khỏe." },
  { icon: PenTool, title: "Diễn họa 3D sinh động", content: "Mô tả không gian bằng 3D và thi công chuẩn như thiết kế, dễ dàng hình dung màu sắc, ánh sáng, chất liệu." },
  { icon: CalendarClock, title: "Bền đẹp nhiều năm", content: "Với kinh nghiệm tích lũy 15 năm, tổ ấm của bạn luôn mới, đẹp và đáp ứng nhu cầu trong nhiều năm." },
];

const designStyles: DesignStyle[] = [
  { id: "nhat-ban", icon: Leaf, title: "Phong cách Nhật Bản", content: "Tối giản, tinh tế, hòa hợp với thiên nhiên, màu sắc nhẹ nhàng. Giải pháp tiết kiệm chi phí mà vẫn cao cấp.", image: "/images/thiet-ke-noi-that/chung-cu/nhat-ban-1.webp" },
  { id: "han-quoc", icon: Sparkles, title: "Phong cách Hàn Quốc", content: "Hiệu ứng tương phản với gam nền trắng, vàng nhạt và tông màu điểm nhấn đỏ, nâu, hồng, phá cách và tiện nghi.", image: "/images/thiet-ke-noi-that/chung-cu/han-quoc.webp" },
  { id: "au-my", icon: Lightbulb, title: "Phong cách Âu Mỹ", content: "Ánh sáng và sự thoải mái là điểm nhấn xuyên suốt, cửa sổ lớn, phòng tràn ngập ánh sáng, nội thất bày trí tự do.", image: "/images/thiet-ke-noi-that/chung-cu/au-my.webp" },
  { id: "phap", icon: SwatchBook, title: "Phong cách Pháp", content: "Chất Gothic cổ Châu Âu với gam màu trung tính, vàng, nâu đậm, nổi bật khi dùng đồ cổ hoặc giả cổ trang trí.", image: "/images/thiet-ke-noi-that/chung-cu/phap.webp" },
  { id: "co-dien", icon: Building2, title: "Phong cách cổ điển", content: "Sang trọng, giàu có với gam màu trắng kết hợp nhiều họa tiết vàng kim, chất liệu tự nhiên và hoa văn cầu kỳ.", image: "/images/thiet-ke-noi-that/chung-cu/co-dien.webp" },
  { id: "tan-co-dien", icon: Box, title: "Phong cách tân cổ điển", content: "Sự pha trộn giữa cổ điển và hiện đại, ít hoa văn hơn, chú trọng hài hòa, đối xứng và màu sắc nhã nhặn.", image: "/images/thiet-ke-noi-that/chung-cu/tan-co-dien.webp" },
  { id: "hien-dai", icon: Ruler, title: "Phong cách hiện đại, đương đại", content: "Phổ biến nhất tại Việt Nam, tiện dụng, thông minh, tối ưu không gian sống vốn hạn chế của chung cư.", image: "/images/thiet-ke-noi-that/chung-cu/hien-dai.webp" },
];

const reasons: Feature[] = [
  { icon: Handshake, title: "Kinh nghiệm lâu năm", content: "KTS giàu kinh nghiệm luôn lắng nghe và tư vấn phương án thiết kế tối ưu, phù hợp nhu cầu trong dài hạn." },
  { icon: ClipboardCheck, title: "Quy trình chuyên nghiệp", content: "Quy trình thiết kế khoa học, bạn ngồi cùng KTS đưa ý tưởng, trao đổi và thống nhất từ bản 2D đến diễn họa 3D." },
  { icon: MessagesSquare, title: "Hiểu chính xác bạn cần gì", content: "Trải nghiệm hàng trăm công trình cùng tinh thần phục vụ chuyên nghiệp, chúng tôi hiểu sâu sắc nhu cầu của bạn." },
  { icon: WandSparkles, title: "Diễn họa 3D xuất sắc", content: "100% khách hàng hài lòng khi tận mắt nhìn thấy bản thiết kế. Không ưng ý, bạn không phải trả phí." },
];

const commitments = [
  "Giá thiết kế từ tốt đến miễn phí, chất lượng thiết kế không đổi",
  "Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu",
  "Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần là đủ",
  "Hầu như không phải bảo hành vì làm chuẩn ngay từ đầu",
];

const processSteps = [
  "Nhận yêu cầu tư vấn", "Hẹn gặp trao đổi nhu cầu", "Ký hợp đồng thiết kế", "Đo thực trạng, dựng 3D",
  "Bóc tách khối lượng", "Sản xuất tại xưởng", "Vận chuyển, lắp đặt",
];

export default function ApartmentInteriorDesignPage() {
  const featured = designStyles[0];
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}><div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <nav aria-label="Điều hướng trang" className={styles.breadcrumb}><Link href="/">Trang chủ</Link><span>/</span><Link href="/thiet-ke-noi-that">Thiết kế nội thất</Link><span>/</span><span>Thiết kế chung cư</span></nav>
          <p className={styles.eyebrow}>Thiết kế nội thất</p><h1>Thiết kế <span>chung cư</span></h1>
          <p className={styles.heroDescription}>Tư vấn thiết kế nội thất chung cư tối ưu, tiết kiệm và chuẩn đúng nhu cầu. Mọi khách hàng đều được miễn phí tư vấn và báo giá thiết kế với giá tốt nhất.</p>
          <div className={styles.heroActions}><a className={styles.primaryButton} href="#phong-cach">Khám phá phong cách</a><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
          <div className={styles.heroTags} aria-label="Phong cách thiết kế"><a href="#nhat-ban">Nhật Bản</a><a href="#han-quoc">Hàn Quốc</a><a href="#hien-dai">Hiện đại</a></div>
        </div>
        <div className={styles.heroVisual}><div className={styles.heroImage}><Image src="/images/thiet-ke-noi-that/chung-cu/hero.webp" alt="Thiết kế nội thất chung cư hiện đại" fill priority sizes="(min-width: 900px) 42vw, 90vw" className={styles.coverImage} /></div><div className={styles.heroBadge}><span className={styles.badgeIcon}>✦</span><span><small>Thiết kế chung cư</small><strong>Đúng nhu cầu, tối ưu không gian</strong></span></div></div>
      </div></section>

      <section className={styles.overview}><div className={`${styles.container} ${styles.overviewGrid}`}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Chúng tôi giải quyết mọi lo lắng của bạn</p><h2>Đồng hành cùng tổ ấm của bạn</h2><p>Bạn đang tìm kiếm một đối tác có thể hoàn thiện ý tưởng căn hộ của mình hay một đơn vị tư vấn thiết kế nội thất chung cư chuyên nghiệp. Tổ Ấm Hoàn Hảo sẵn sàng đồng hành.</p></div>
        <div className={`${styles.typeGrid} ${local.benefitGrid}`}>{benefits.map((item) => { const Icon=item.icon; return <article className={styles.typeCard} key={item.title}><span className={styles.smallIcon}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p></article>; })}</div>
      </div></section>

      <section className={local.offerSection}><div className={`${styles.container} ${local.offerGrid}`}>
        <div className={local.offerGraphic}><Image src="/images/thiet-ke-noi-that/chung-cu/uu-dai.webp" alt="Bảng ưu đãi miễn 100% phí thiết kế nội thất theo gói" width={493} height={142} sizes="(min-width: 800px) 40vw, 100vw" /></div>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Sự kiện đặc biệt</p><h2>Gói Chìa khóa trao tay tiết kiệm</h2><p>Căn hộ chung cư 100m² phải chi từ 15 – 25 triệu tiền thiết kế. Sử dụng gói Thiết kế và Thi công nội thất trọn gói – Chìa khóa trao tay, bạn sẽ được miễn phí 100% phí thiết kế và tiết kiệm một số tiền không hề nhỏ.</p><p>Sản xuất nội thất tại xưởng 15-20 ngày, lắp đặt 1-2 ngày là hoàn thiện, giám sát thi công chặt chẽ, hầu như không có sai sót.</p></div>
      </div></section>

      <section id="phong-cach" className={styles.stylesSection}><div className={styles.container}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>Xu hướng phong cách</p><h2>Những phong cách thiết kế nên cân nhắc cho chung cư</h2></div>
        <article id={featured.id} className={`${styles.showcase} ${local.featuredStyle}`}><div className={styles.showcaseImage}><Image src={featured.image} alt={featured.title} fill sizes="(min-width: 900px) 52vw, 100vw" className={styles.coverImage} /></div><div className={styles.showcaseCard}><span className={styles.showcaseNumber}>01</span><p className={styles.eyebrow}>Phong cách</p><h3>{featured.title}</h3><p className={styles.showcaseDescription}>{featured.content}</p></div></article>
        <div className={local.styleGrid}>{designStyles.slice(1).map((item,index) => <article className={local.styleCard} id={item.id} key={item.id}><div className={local.styleImage}><Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 30vw, (min-width: 600px) 46vw, 100vw" className={styles.coverImage} /></div><div className={local.styleBody}><span>{String(index+2).padStart(2,"0")} / Phong cách</span><h3>{item.title}</h3><p>{item.content}</p></div></article>)}</div>
      </div></section>

      <section className={local.reasonsSection}><div className={styles.container}><div className={styles.centerHeading}><p className={styles.eyebrow}>Lý do lựa chọn</p><h2>Đồng hành từ ý tưởng đến thi công</h2></div><div className={local.reasonsGrid}>{reasons.map((item)=>{const Icon=item.icon;return <article className={styles.categoryCard} key={item.title}><span className={styles.smallIcon}><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p></article>})}</div></div></section>

      <section className={styles.processSection}><div className={styles.container}><div className={styles.centerHeading}><p className={styles.eyebrow}>Quy trình làm việc</p><h2>7 bước hoàn thiện không gian sống</h2></div><div className={styles.processGrid}>{processSteps.map((step,index)=><article className={styles.processCard} key={step}><span>{String(index+1).padStart(2,"0")}</span><p>{step}</p></article>)}</div></div></section>

      <section className={local.commitmentSection}><div className={styles.container}><div className={styles.commitmentBox}><div><p className={styles.eyebrow}>Cam kết của chúng tôi</p><h2>Lắng nghe và thấu hiểu</h2><p>Khác với các đơn vị thiết kế – thi công nội thất khác, điều đầu tiên chúng tôi hướng tới chính là phương châm lắng nghe và thấu hiểu, giúp bạn có kế hoạch tài chính rõ ràng, hạn chế rủi ro và hoàn thiện đúng tiến độ.</p></div><ul>{commitments.map((item)=><li key={item}><Check size={17} strokeWidth={2} aria-hidden="true" />{item}</li>)}</ul></div></div></section>

      <section className={styles.finalCta}><Image src="/images/thiet-ke-noi-that/chung-cu/hero.webp" alt="Không gian chung cư" fill sizes="100vw" className={styles.coverImage} /><div className={styles.finalOverlay} /><div className={styles.finalContent}><h2>Sẵn sàng kiến tạo tổ ấm chung cư của bạn?</h2><p>Miễn phí tư vấn thiết kế và báo giá với giá tốt nhất, đúng tiến độ và chi phí hợp lý.</p><div><ConsultationButton className={styles.lightButton}>Đặt lịch tư vấn ngay</ConsultationButton><a className={styles.phoneButton} href="tel:0903897555">Hotline: 0903.897.555</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
