import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Armchair, BadgeCheck, BedDouble, BookOpen, ChefHat, Crown, Gem, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../thiet-ke-khach-san/hotel.module.css";
import local from "./neoclassical.module.css";

export const metadata: Metadata = {
  title: "Thiết kế nội thất tân cổ điển | Tổ Ấm Hoàn Hảo",
  description: "Thiết kế nội thất tân cổ điển cao cấp: sự kết hợp hài hòa giữa cổ điển và hiện đại, sang trọng và đầy tinh tế, thể hiện đẳng cấp và gu thẩm mỹ của gia chủ.",
};

type Feature = { icon: LucideIcon; title: string; content: string };
type Room = Feature & { image: string; id: string };

const qualities: Feature[] = [
  { icon: Crown, title: "Vương giả", content: "Thể hiện đẳng cấp và sự quý phái trong từng không gian." },
  { icon: Gem, title: "Tinh tế", content: "Kế thừa vẻ đẹp cổ điển, lược bỏ chi tiết quá cầu kỳ." },
  { icon: Palette, title: "Nghệ thuật", content: "Chi tiết trang trí làm thủ công, mang giá trị nghệ thuật cao." },
];

const rooms: Room[] = [
  { id: "phong-khach", icon: Armchair, title: "Phòng khách", content: "Những chi tiết trang trí tỉ mỉ, cầu kỳ làm thủ công, lấy cảm hứng từ hình kỷ hà, cỏ hoa tự nhiên mang tính nghệ thuật cao và đồng bộ về phong cách.", image: "/images/thiet-ke-noi-that/tan-co-dien/phong-khach.webp" },
  { id: "phong-ngu", icon: BedDouble, title: "Phòng ngủ", content: "Kế thừa vẻ đẹp cổ điển nhưng đã lược bỏ những chi tiết quá cầu kỳ, phòng ngủ tân cổ điển gợi không gian sang trọng, tráng lệ nhưng vẫn vô cùng tinh tế.", image: "/images/thiet-ke-noi-that/tan-co-dien/phong-ngu.webp" },
  { id: "phong-sach", icon: BookOpen, title: "Phòng sách", content: "Ghế sofa kết hợp hài hòa kệ sách hoàn toàn biến căn phòng đọc sách thành nơi thư giãn tuyệt vời.", image: "/images/thiet-ke-noi-that/tan-co-dien/phong-sach.webp" },
  { id: "phong-an", icon: ChefHat, title: "Phòng ăn", content: "Chỉ cần thêm đèn chùm trang trí với thảm trải sàn, phòng ăn được khoác lên một ngoại hình mới mà vẫn giữ phong cách cổ điển.", image: "/images/thiet-ke-noi-that/tan-co-dien/phong-an.webp" },
];

const benefits = [
  "Cảm nhận được sự tâm huyết và đam mê trong từng công việc",
  "Kế hoạch tài chính đầu tư rõ ràng, hạn chế rủi ro và phát sinh ngoài ý muốn",
  "Thiết kế, thi công hoàn thiện đúng tiến độ, đúng cam kết",
  "Báo giá thiết kế nội thất cạnh tranh, hợp lý với khả năng chi trả",
  "Chủ động được nguồn nhập nội thất",
];

const commitments = [
  "Giá cả tốt nhất so với thị trường",
  "Sản phẩm đạt chuẩn 95% so với ý tưởng ban đầu",
  "Thiết kế phù hợp nhu cầu dài hạn, thi công 1 lần",
  "Chế độ bảo hành, bảo trì tận tâm và chuyên nghiệp",
];

export default function NeoclassicalInteriorDesignPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}><div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <nav aria-label="Điều hướng trang" className={styles.breadcrumb}><Link href="/">Trang chủ</Link><span>/</span><Link href="/thiet-ke-noi-that">Thiết kế nội thất</Link><span>/</span><span>Thiết kế nội thất tân cổ điển</span></nav>
          <p className={styles.eyebrow}>Thiết kế nội thất</p><h1>Tân cổ <span>điển</span></h1>
          <p className={styles.heroDescription}>Kiến trúc tân cổ điển là sự kết hợp hài hòa giữa phong cách cổ điển và phong cách hiện đại, tạo nên nét kiến trúc sang trọng và đầy tinh tế, thể hiện đẳng cấp và con mắt thẩm mỹ của gia chủ.</p>
          <div className={styles.heroActions}><a className={styles.primaryButton} href="#khong-gian">Khám phá thiết kế</a><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
          <div className={styles.heroTags} aria-label="Không gian tân cổ điển"><a href="#phong-khach">Phòng khách</a><a href="#phong-ngu">Phòng ngủ</a><a href="#phong-sach">Phòng sách</a><a href="#phong-an">Phòng ăn</a></div>
        </div>
        <div className={styles.heroVisual}><div className={styles.heroImage}><Image src="/images/thiet-ke-noi-that/tan-co-dien/hero.webp" alt="Thiết kế nội thất tân cổ điển cao cấp" fill priority sizes="(min-width: 900px) 42vw, 90vw" className={styles.coverImage} /></div><div className={styles.heroBadge}><span className={styles.badgeIcon}>✦</span><span><small>Phong cách tân cổ điển</small><strong>Sang trọng và đầy tinh tế</strong></span></div></div>
      </div></section>

      <section className={styles.overview}><div className={`${styles.container} ${styles.overviewGrid}`}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Phong cách</p><h2>Sang trọng, tinh tế và vương giả</h2><p>Không gian tân cổ điển làm nổi bật sự vương giả, thể hiện đẳng cấp và con mắt thẩm mỹ của gia chủ, với những chi tiết trang trí tỉ mỉ và đồng bộ về phong cách.</p></div>
        <div className={styles.typeGrid}>{qualities.map((item)=>{const Icon=item.icon;return <article className={styles.typeCard} key={item.title}><span className={styles.smallIcon}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p></article>})}</div>
      </div></section>

      <section id="khong-gian" className={styles.stylesSection}><div className={styles.container}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>Không gian tiêu biểu</p><h2>Những thiết kế tân cổ điển đẹp hút hồn</h2></div>
        <div className={styles.showcaseList}>{rooms.map((room,index)=>{const Icon=room.icon;return <article id={room.id} className={`${styles.showcase} ${index%2?styles.showcaseReverse:""}`} key={room.id}><div className={styles.showcaseImage}><Image src={room.image} alt={room.title} fill sizes="(min-width: 900px) 52vw, 100vw" className={styles.coverImage} /></div><div className={styles.showcaseCard}><span className={styles.showcaseNumber}>{String(index+1).padStart(2,"0")}</span><p className={styles.eyebrow}><Icon size={16} strokeWidth={1.5} aria-hidden="true" /> Không gian</p><h3>{room.title}</h3><p className={styles.showcaseDescription}>{room.content}</p></div></article>})}</div>
      </div></section>

      <section className={local.benefitsSection}><div className={styles.container}>
        <div className={local.benefitsGrid}><div className={styles.sectionIntro}><p className={styles.eyebrow}>Lợi ích</p><h2>Lợi ích khi lựa chọn thiết kế nội thất tân cổ điển</h2><p>Đội ngũ kiến trúc sư và chuyên gia của Tổ Ấm Hoàn Hảo với kinh nghiệm dày dặn, chuyên môn vững vàng sẽ giúp quý khách có được một không gian hoàn mỹ nhất.</p></div><ul>{benefits.map((item)=><li key={item}><BadgeCheck size={18} strokeWidth={1.7} aria-hidden="true" />{item}</li>)}</ul></div>
        <div className={`${styles.commitmentBox} ${local.commitmentBox}`}><div><p className={styles.eyebrow}>Cam kết của chúng tôi</p><h2>Hãy để chúng tôi thực hiện ước mơ giúp bạn</h2><p>Với phương châm hoạt động luôn đặt uy tín và lợi ích khách hàng lên hàng đầu, chúng tôi cam kết mang đến chất lượng tuyệt vời nhất.</p></div><ul>{commitments.map((item)=><li key={item}><BadgeCheck size={17} strokeWidth={1.7} aria-hidden="true" />{item}</li>)}</ul></div>
      </div></section>

      <section className={styles.finalCta}><Image src="/images/thiet-ke-noi-that/tan-co-dien/hero.webp" alt="Không gian tân cổ điển" fill sizes="100vw" className={styles.coverImage} /><div className={styles.finalOverlay} /><div className={styles.finalContent}><h2>Sẵn sàng sở hữu không gian tân cổ điển đầy mê mẩn?</h2><p>Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất tân cổ điển, đúng tiến độ và chi phí hợp lý.</p><div><ConsultationButton className={styles.lightButton}>Đặt lịch tư vấn ngay</ConsultationButton><a className={styles.phoneButton} href="tel:0903897555">Hotline: 0903.897.555</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
