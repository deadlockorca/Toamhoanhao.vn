import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Crown, DoorOpen, Hotel, ShieldCheck, Sparkles, SwatchBook, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./hotel.module.css";

export const metadata: Metadata = {
  title: "Thiết kế nội thất khách sạn | Tổ Ấm Hoàn Hảo",
  description: "Thiết kế nội thất khách sạn 5 sao, 3 sao, khách sạn mini sang trọng, tiện nghi, đẳng cấp. Tư vấn thiết kế thi công trọn gói, đúng tiến độ và chi phí hợp lý.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const hotelTypes: Feature[] = [
  { icon: Crown, title: "Khách sạn 5 sao đẳng cấp", content: "Hướng đến phân khúc khách hàng hạng sang, thiết kế chú trọng sự sang trọng, tiện nghi và đẳng cấp ở từng không gian." },
  { icon: Hotel, title: "Khách sạn 3 sao ấn tượng", content: "Đảm bảo sự tiện nghi, lịch sự và tính thẩm mỹ cao với quy mô vừa phải, tối ưu không gian cho khách hàng thoải mái." },
  { icon: DoorOpen, title: "Khách sạn mini độc đáo", content: "Giải pháp tối ưu cho diện tích vừa và nhỏ, giản lược chi tiết thừa để không gian thông thoáng, dễ chịu." },
];

const hotelStyles = [
  {
    id: "khach-san-5-sao", label: "Khách sạn 5 sao", title: "Đẳng cấp, hiện đại, sang trọng",
    image: "/images/thiet-ke-noi-that/khach-san/khach-san-5-sao.webp", alt: "Thiết kế nội thất khách sạn 5 sao sang trọng",
    description: [
      "Khách sạn 5 sao phục vụ chủ yếu phân khúc khách hàng hạng sang, tầm cỡ doanh nhân lớn. Vì vậy yêu cầu về tính sang trọng, tiện nghi, đẳng cấp luôn được đặt lên hàng đầu.",
      "Từ sảnh lễ tân, phòng ngủ, phòng tập gym, bể bơi, spa đến nhà hàng đều phải được thiết kế ấn tượng, đáp ứng quy mô và tầm cỡ công trình.",
    ],
    tags: ["Sảnh lễ tân", "Phòng ngủ", "Gym", "Bể bơi", "Spa", "Nhà hàng"],
  },
  {
    id: "khach-san-3-sao", label: "Khách sạn 3 sao", title: "Tiện nghi, lịch sự, thẩm mỹ",
    image: "/images/thiet-ke-noi-that/khach-san/khach-san-3-sao.webp", alt: "Thiết kế nội thất khách sạn 3 sao",
    description: ["Không đòi hỏi cầu kỳ, hoành tráng như khách sạn 5 sao nhưng vẫn phải đảm bảo sự tiện nghi, lịch sự và tính thẩm mỹ cao, tạo cảm giác thoải mái khi sử dụng dịch vụ, đồng thời tiết kiệm không gian."],
    tags: ["Tiện nghi", "Lịch sự", "Thẩm mỹ cao", "Tiết kiệm không gian"],
  },
  {
    id: "khach-san-mini", label: "Khách sạn mini", title: "Đơn giản mà độc đáo",
    image: "/images/thiet-ke-noi-that/khach-san/khach-san-mini.webp", alt: "Thiết kế nội thất khách sạn mini",
    description: [
      "Với mảnh đất vừa hay nhỏ muốn đầu tư kinh doanh, khách sạn mini là phương án tối ưu. Các kiến trúc sư giàu kinh nghiệm sẽ giúp bạn giải quyết trọn vẹn bài toán không gian.",
      "Có thể thiết kế theo phong cách hoàng gia, tân cổ điển hoặc hiện đại, giản lược các vật dụng không cần thiết để không gian thông thoáng, dễ chịu nhất.",
    ],
    tags: ["Hoàng gia", "Tân cổ điển", "Hiện đại"],
  },
];

const categories: Feature[] = [
  { icon: DoorOpen, title: "Sảnh lễ tân", content: "Thiết kế sảnh đón tiếp ấn tượng, thể hiện đẳng cấp thương hiệu ngay từ lối vào." },
  { icon: UsersRound, title: "Phòng ngủ", content: "Phòng nghỉ tiện nghi, ấm cúng và thư giãn, phù hợp từng phân khúc khách hàng." },
  { icon: Sparkles, title: "Nhà tắm – vệ sinh", content: "Không gian vệ sinh sạch sẽ, sang trọng và công năng tối ưu." },
  { icon: BadgeCheck, title: "Khu phục vụ chung", content: "Nhà hàng, bể bơi, quán cà phê, spa… cho khách sạn 4-5 sao." },
  { icon: SwatchBook, title: "Tiểu cảnh, sân vườn", content: "Thiết kế cảnh quan xanh, điểm nhấn ngoài trời nếu có." },
];

const processSteps = [
  "Tiếp nhận yêu cầu của khách hàng", "Khảo sát hiện trạng công trình", "Báo giá", "Ký kết hợp đồng",
  "Sản xuất và thi công lắp đặt", "Nghiệm thu và bàn giao công trình", "Thanh lý hợp đồng và bảo hành",
];

const commitments = [
  "Tư vấn tận tâm và hoàn toàn miễn phí từ các chuyên gia hàng đầu",
  "Được lắng nghe tâm tư, nguyện vọng một cách cởi mở nhất",
  "Được cung cấp các phương án thiết kế sát ý tưởng gia chủ nhất",
  "Được lựa chọn thực thi một phương án thiết kế tối ưu nhất",
  "Chi phí, giá thành hợp lý nhất",
];

const faqs = [
  { question: "Khách sạn quy mô nhỏ có thể thiết kế được không?", answer: "Có. Với diện tích vừa và nhỏ, thiết kế khách sạn mini tập trung tối ưu không gian và giản lược những vật dụng không cần thiết." },
  { question: "Có nhận thi công trọn gói không?", answer: "Chúng tôi cung cấp dịch vụ thiết kế và thi công nội thất khách sạn trọn gói, từ khảo sát hiện trạng đến nghiệm thu, bàn giao và bảo hành." },
  { question: "Chi phí thiết kế được tính như thế nào?", answer: "Chi phí phụ thuộc vào quy mô, hiện trạng và phương án thiết kế của công trình. Chúng tôi khảo sát và báo giá trước khi ký hợp đồng." },
  { question: "Tôi cần chuẩn bị gì trước khi liên hệ?", answer: "Bạn có thể chia sẻ nhu cầu, quy mô và hiện trạng công trình để đội ngũ tư vấn phương án phù hợp." },
];

export default function HotelInteriorDesignPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav aria-label="Điều hướng trang" className={styles.breadcrumb}>
              <Link href="/">Trang chủ</Link><span>/</span><Link href="/thiet-ke-noi-that">Thiết kế nội thất</Link><span>/</span><span>Thiết kế khách sạn</span>
            </nav>
            <p className={styles.eyebrow}>Thiết kế nội thất</p>
            <h1>Thiết kế <span>khách sạn</span></h1>
            <p className={styles.heroDescription}>Khách sạn không chỉ là nơi trú chân mà còn là không gian trải nghiệm. Thiết kế nội thất khách sạn sang trọng, tiện nghi sẽ để lại ấn tượng khó quên trong lòng mỗi du khách.</p>
            <div className={styles.heroActions}><a className={styles.primaryButton} href="#hinh-thuc">Khám phá thiết kế</a><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
            <div className={styles.heroTags} aria-label="Loại hình khách sạn"><a href="#khach-san-5-sao">5 sao</a><a href="#khach-san-3-sao">3 sao</a><a href="#khach-san-mini">Mini</a></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}><Image src="/images/thiet-ke-noi-that/khach-san/banner.webp" alt="Không gian nội thất khách sạn" fill priority sizes="(min-width: 900px) 42vw, 90vw" className={styles.coverImage} /></div>
            <div className={styles.heroBadge}><span className={styles.badgeIcon}>✦</span><span><small>Thiết kế cho mọi phân khúc</small><strong>Từ khách sạn mini đến 5 sao</strong></span></div>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={`${styles.container} ${styles.overviewGrid}`}>
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Tổng quan</p><h2>Đẳng cấp tạo nên danh tiếng</h2><p>Thiết kế khách sạn đẹp phải phù hợp với đối tượng khách hàng, vừa thể hiện bản sắc và đẳng cấp thương hiệu, để lại ấn tượng trong lòng mỗi du khách ghé thăm.</p></div>
          <div className={styles.typeGrid}>{hotelTypes.map((item, index) => { const Icon = item.icon; return <a href={`#${hotelStyles[index].id}`} className={styles.typeCard} key={item.title}><span className={styles.smallIcon}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p><span className={styles.textLink}>Xem phong cách <span aria-hidden="true">→</span></span></a>; })}</div>
        </div>
      </section>

      <section id="hinh-thuc" className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}><p className={styles.eyebrow}>Phong cách thiết kế</p><h2>Ba hướng thiết kế cho từng quy mô</h2></div>
          <div className={styles.showcaseList}>{hotelStyles.map((item, index) => <article id={item.id} key={item.id} className={`${styles.showcase} ${index === 1 ? styles.showcaseReverse : ""}`}>
            <div className={styles.showcaseImage}><Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 52vw, 100vw" className={styles.coverImage} /></div>
            <div className={styles.showcaseCard}><span className={styles.showcaseNumber}>{String(index + 1).padStart(2, "0")}</span><p className={styles.eyebrow}>{item.label}</p><h3>{item.title}</h3>{item.description.map((paragraph) => <p className={styles.showcaseDescription} key={paragraph}>{paragraph}</p>)}<div className={styles.tagList}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}</div>
        </div>
      </section>

      <section className={styles.categoriesSection}><div className={`${styles.container} ${styles.categoriesGrid}`}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Các hạng mục</p><h2>Trọn vẹn từng không gian khách sạn</h2><p>Với năng lực thực tế và tâm huyết nghề nghiệp, chúng tôi cung cấp dịch vụ thiết kế – thi công trọn gói, đảm bảo chất lượng tốt nhất và chi phí hợp lý nhất.</p></div>
        <div className={styles.categoryCards}>{categories.map((item) => { const Icon = item.icon; return <article className={styles.categoryCard} key={item.title}><span className={styles.smallIcon}><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p></article>; })}</div>
      </div></section>

      <section className={styles.processSection}><div className={styles.container}><div className={styles.centerHeading}><p className={styles.eyebrow}>Quy trình làm việc</p><h2>7 bước từ tiếp nhận đến bảo hành</h2></div><div className={styles.processGrid}>{processSteps.map((step, index) => <article className={styles.processCard} key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></article>)}</div></div></section>

      <section className={styles.lowerSection}><div className={styles.container}>
        <div className={styles.commitmentBox}><div><p className={styles.eyebrow}>Cam kết của chúng tôi</p><h2>Tận tâm trong từng công trình khách sạn</h2><p>Chúng tôi tự hào mang đến những không gian lý tưởng nhất. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn như phục vụ những người thân yêu trong chính gia đình mình.</p></div><ul>{commitments.map((item) => <li key={item}><ShieldCheck size={17} strokeWidth={1.7} aria-hidden="true" />{item}</li>)}</ul></div>
        <div className={styles.faqGrid}><div className={styles.sectionIntro}><p className={styles.eyebrow}>Giải đáp</p><h2>Câu hỏi thường gặp</h2></div><div className={styles.faqList}>{faqs.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div>
      </div></section>

      <section className={styles.finalCta}><Image src="/images/thiet-ke-noi-that/khach-san/banner.webp" alt="Không gian khách sạn" fill sizes="100vw" className={styles.coverImage} /><div className={styles.finalOverlay} /><div className={styles.finalContent}><h2>Bạn còn ngần ngại gì? Hãy gọi ngay cho chúng tôi!</h2><p>Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất khách sạn, đúng tiến độ và chi phí hợp lý.</p><div><ConsultationButton className={styles.lightButton}>Đặt lịch tư vấn ngay</ConsultationButton><a className={styles.phoneButton} href="tel:0903897555">Hotline: 0903.897.555</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
