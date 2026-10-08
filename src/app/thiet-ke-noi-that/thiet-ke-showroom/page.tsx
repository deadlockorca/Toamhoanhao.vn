import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarClock, Check, Handshake, Lightbulb, Palette, PiggyBank, Trophy, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../thiet-ke-khach-san/hotel.module.css";
import local from "./showroom.module.css";

export const metadata: Metadata = {
  title: "Thiết kế showroom | Tổ Ấm Hoàn Hảo",
  description: "Thiết kế showroom ấn tượng, chi phí hiệu quả cho khởi đầu hoàn hảo. Màu sắc, ánh sáng và phong cách chuẩn thương hiệu, giúp showroom hút khách.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const factors: Feature[] = [
  { icon: Palette, title: "Màu sắc", content: "Phong cách trang trí nên đi đôi với màu sắc thương hiệu, bổ sung giấy dán tường hoa văn để kích thích người dùng tìm đến showroom." },
  { icon: Lightbulb, title: "Ánh sáng", content: "Ánh sáng tạo nên bầu không khí và thiết lập tâm trạng cho showroom, đồng thời là cách nhanh chóng khắc phục khuyết điểm của không gian." },
];

const reasons: Feature[] = [
  { icon: Trophy, title: "Kinh nghiệm lâu năm", content: "Bề dày kinh nghiệm thiết kế thi công nội thất, hàng trăm khách hàng đã sử dụng dịch vụ và hoàn toàn hài lòng." },
  { icon: Wallet, title: "Kế hoạch tài chính rõ ràng", content: "Kế hoạch tài chính đầu tư rõ ràng, hạn chế rủi ro và phát sinh ngoài ý muốn." },
  { icon: CalendarClock, title: "Thời gian thi công nhanh", content: "Công trình thi công hoàn thiện đúng tiến độ, đúng cam kết với khách hàng." },
  { icon: PiggyBank, title: "Mức giá cạnh tranh", content: "Báo giá thiết kế showroom hợp lý, cạnh tranh nhưng vẫn đảm bảo chất lượng công trình." },
  { icon: Handshake, title: "Thanh toán linh hoạt", content: "Hình thức thanh toán phù hợp, giúp bạn chủ động theo từng giai đoạn." },
];

const benefits = [
  "Sở hữu showroom hoàn hảo và chuyên nghiệp tới từng chi tiết",
  "Không gian nổi bật, phong cách trưng bày khoa học",
  "Tăng tỉ lệ tương tác giữa khách hàng và sản phẩm thực tế",
  "Tạo dấu ấn thương hiệu qua thiết kế",
  "Đánh bật mọi đối thủ cạnh tranh",
];

const commitments = [
  "Giá cả tốt nhất so với thị trường",
  "Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu",
  "Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần",
  "Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp",
];

export default function ShowroomDesignPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}><div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <nav aria-label="Điều hướng trang" className={styles.breadcrumb}><Link href="/">Trang chủ</Link><span>/</span><Link href="/thiet-ke-noi-that">Thiết kế nội thất</Link><span>/</span><span>Thiết kế showroom</span></nav>
          <p className={styles.eyebrow}>Thiết kế nội thất</p>
          <h1>Thiết kế <span>showroom</span></h1>
          <p className={styles.heroDescription}>Showroom là nơi trưng bày sản phẩm, quảng bá thương hiệu và là bộ mặt của toàn công ty. Một không gian showroom đẹp, ấn tượng và thu hút thể hiện tầm vóc, sự chuyên nghiệp của doanh nghiệp.</p>
          <div className={styles.heroActions}><a className={styles.primaryButton} href="#yeu-to">Khám phá thiết kế</a><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
          <div className={styles.heroTags} aria-label="Yếu tố thiết kế showroom"><a href="#mau-sac">Màu sắc</a><a href="#anh-sang">Ánh sáng</a><a href="#loi-ich">Lợi ích</a></div>
        </div>
        <div className={styles.heroVisual}><div className={styles.heroImage}><Image src="/images/thiet-ke-noi-that/showroom/hero.webp" alt="Thiết kế showroom ấn tượng" fill priority sizes="(min-width: 900px) 42vw, 90vw" className={styles.coverImage} /></div><div className={styles.heroBadge}><span className={styles.badgeIcon}>✦</span><span><small>Thiết kế showroom</small><strong>Màu sắc và ánh sáng thương hiệu</strong></span></div></div>
      </div></section>

      <section id="yeu-to" className={styles.overview}><div className={`${styles.container} ${styles.overviewGrid}`}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>2 yếu tố không thể bỏ qua</p><h2>Showroom hút khách nhờ màu sắc và ánh sáng</h2><p>Bằng kiến thức và am hiểu sâu sắc về kiến trúc và hội họa, đội ngũ thiết kế của Tổ Ấm Hoàn Hảo đã thành công trong việc tư vấn và thiết kế nhiều showroom chuẩn phong cách, sáng tạo, bắt mắt và được khách hàng đánh giá cao.</p></div>
        <div className={`${styles.typeGrid} ${local.factorGrid}`}>{factors.map((item, index) => { const Icon = item.icon; return <a href={index === 0 ? "#mau-sac" : "#anh-sang"} className={styles.typeCard} key={item.title}><span className={styles.smallIcon}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p><span className={styles.textLink}>Xem chi tiết <span aria-hidden="true">→</span></span></a>; })}</div>
      </div></section>

      <section className={styles.stylesSection}><div className={styles.container}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>Dấu ấn thương hiệu</p><h2>Không gian trưng bày nhất quán</h2></div>
        <article id="mau-sac" className={`${styles.showcase} ${local.featureShowcase}`}>
          <div className={styles.showcaseImage}><Image src="/images/thiet-ke-noi-that/showroom/mau-sac.webp" alt="Phong cách trang trí đi đôi với màu sắc thương hiệu" fill sizes="(min-width: 900px) 52vw, 100vw" className={styles.coverImage} /></div>
          <div className={styles.showcaseCard}><span className={styles.showcaseNumber}>01</span><p className={styles.eyebrow}>Màu sắc thương hiệu</p><h3>Đồng nhất từ phong cách đến màu sắc</h3><p className={styles.showcaseDescription}>Để tạo ra một showroom hợp lý và đồng nhất, phong cách trang trí nên đi đôi với màu sắc thương hiệu. Bổ sung các loại giấy dán tường có họa tiết hoa văn sẽ kích thích người dùng, khiến họ tự động tìm đến với showroom của bạn.</p><p id="anh-sang" className={styles.showcaseDescription}>Ánh sáng là yếu tố quan trọng quyết định showroom có hút khách hay không, tạo nên bầu không khí của địa điểm và thiết lập tâm trạng trong không gian, đặc biệt hữu ích với các nhà bán lẻ có ngân sách hạn chế.</p><div className={styles.tagList}><span>Màu sắc</span><span>Ánh sáng</span><span>Thương hiệu</span></div></div>
        </article>
      </div></section>

      <section className={local.reasonsSection}><div className={styles.container}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>Tại sao chọn chúng tôi</p><h2>Đồng hành từ ý tưởng đến hoàn thiện</h2></div>
        <div className={local.reasonGrid}>{reasons.map((item) => { const Icon = item.icon; return <article className={styles.categoryCard} key={item.title}><span className={styles.smallIcon}><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p></article>; })}</div>
      </div></section>

      <section id="loi-ich" className={local.benefitSection}><div className={styles.container}>
        <div className={styles.commitmentBox}><div><p className={styles.eyebrow}>Lợi ích dịch vụ</p><h2>Lợi ích khi sử dụng dịch vụ thiết kế showroom</h2></div><ul>{benefits.map((item) => <li key={item}><Check size={17} strokeWidth={2} aria-hidden="true" />{item}</li>)}</ul></div>
        <div className={local.commitmentCard}><div><p className={styles.eyebrow}>Cam kết của chúng tôi</p><h2>Tổ Ấm Hoàn Hảo luôn cam kết với khách hàng</h2></div><ul>{commitments.map((item) => <li key={item}><BadgeCheck size={19} strokeWidth={1.7} aria-hidden="true" />{item}</li>)}</ul></div>
      </div></section>

      <section className={styles.finalCta}><Image src="/images/thiet-ke-noi-that/showroom/hero.webp" alt="Không gian showroom" fill sizes="100vw" className={styles.coverImage} /><div className={styles.finalOverlay} /><div className={styles.finalContent}><h2>Sẵn sàng kiến tạo showroom khởi đầu cho thành công?</h2><p>Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất showroom, đúng tiến độ và chi phí hợp lý.</p><div><ConsultationButton className={styles.lightButton}>Đặt lịch tư vấn ngay</ConsultationButton><a className={styles.phoneButton} href="tel:0903897555">Hotline: 0903.897.555</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
