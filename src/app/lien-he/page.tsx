import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CircleHelp,
  Factory,
  Globe2,
  Headphones,
  Mail,
  Phone,
  Plus,
  ShieldCheck,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { officeAddresses } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Liên hệ | Tổ Ấm Hoàn Hảo",
  description: "Liên hệ Tổ Ấm Hoàn Hảo để được tư vấn thiết kế, thi công và sản xuất nội thất.",
};

const contactCards = [
  { icon: Phone, label: "Hotline", value: "0903.897.555", href: "tel:0903897555" },
  { icon: Mail, label: "Email", value: "hotro.toamhoanhao@gmail.com", href: "mailto:hotro.toamhoanhao@gmail.com" },
  { icon: Globe2, label: "Website", value: "toamhoanhao.vn", href: "https://toamhoanhao.vn" },
];
const reasons = [
  { icon: Headphones, title: "Phản hồi nhanh", content: "Tiếp nhận và phản hồi trong vòng 2 giờ làm việc." },
  { icon: CircleHelp, title: "Tư vấn đúng nhu cầu", content: "Đề xuất giải pháp cân bằng giữa công năng và ngân sách." },
  { icon: BadgeCheck, title: "Báo giá minh bạch", content: "Chi tiết rõ ràng, không phát sinh chi phí ẩn." },
  { icon: ShieldCheck, title: "Đồng hành trọn quy trình", content: "Từ tư vấn, thiết kế, thi công đến bảo hành." },
  { icon: Factory, title: "Hỗ trợ hậu mãi", content: "Bảo hành chu đáo, hỗ trợ nhanh chóng khi cần." },
];
const faqs = [
  { question: "Quy trình tư vấn như thế nào?", answer: "Đội ngũ sẽ tiếp nhận thông tin, trao đổi nhu cầu và hẹn khảo sát hoặc tư vấn phù hợp." },
  { question: "Chi phí thiết kế tính ra sao?", answer: "Chi phí được tư vấn theo diện tích, hạng mục và mức độ chi tiết của công trình." },
  { question: "Có nhận thi công trọn gói không?", answer: "Có. Chúng tôi hỗ trợ thiết kế, sản xuất và thi công nội thất trọn gói." },
  { question: "Có hỗ trợ khảo sát tận nơi không?", answer: "Có. Tùy khu vực và nhu cầu cụ thể, chúng tôi sẽ sắp xếp lịch khảo sát phù hợp." },
];
const stats = [
  ["15+", "Năm kinh nghiệm", "Trong lĩnh vực thiết kế và thi công nội thất"],
  ["500+", "Công trình hoàn thiện", "Triển khai tại Hà Nội và các tỉnh thành"],
  ["98%", "Khách hàng hài lòng", "Với chất lượng dịch vụ và sản phẩm"],
  ["100%", "Minh bạch tiến độ", "Cam kết đúng tiến độ đã thỏa thuận"],
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <div className={styles.headerSpacer} />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Điều hướng trang"><Link href="/">Trang chủ</Link><span>/</span><span>Liên hệ</span></nav>
            <p className={styles.eyebrow}>Liên hệ</p>
            <h1>Liên hệ với <span>chúng tôi</span></h1>
            <p className={styles.heroDescription}>Hãy để lại thông tin, đội ngũ Tổ Ấm Hoàn Hảo sẽ liên hệ và tư vấn giải pháp thiết kế, thi công, sản xuất nội thất phù hợp nhất cho bạn.</p>
            <div className={styles.heroActions}><a className={styles.primaryButton} href="#tu-van">Đặt lịch tư vấn</a><a className={styles.outlineButton} href="tel:0903897555">Gọi ngay</a></div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/gioi-thieu/banner.png" alt="Không gian nội thất Tổ Ấm Hoàn Hảo" fill priority sizes="(max-width: 700px) 100vw, 530px" />
            <a href="tel:0903897555" className={styles.heroPhone}><span className={styles.heroPhoneIcon}><Phone size={17} aria-hidden="true" /></span><span><small>Hotline</small><strong>0903.897.555</strong></span></a>
          </div>
        </div>
      </section>

      <div className={`${styles.container} ${styles.contactMain}`}>
        <section className={styles.contactCards} aria-label="Thông tin liên hệ">
          {contactCards.map((item) => { const Icon = item.icon; return <a key={item.label} href={item.href} className={styles.contactCard}><span className={styles.contactCardIcon}><Icon size={20} aria-hidden="true" /></span><span><small>{item.label}</small><strong>{item.value}</strong></span></a>; })}
        </section>
        <section id="tu-van" className={styles.formSection}>
          <ContactForm />
          <div className={styles.sidebar}>
            <section className={styles.reasonsCard}>
              <h2>Vì sao nên liên hệ <span>Tổ Ấm Hoàn Hảo?</span></h2>
              <div className={styles.reasonsList}>{reasons.map((reason) => { const Icon = reason.icon; return <div key={reason.title} className={styles.reason}><span className={styles.reasonIcon}><Icon size={16} aria-hidden="true" /></span><div><h3>{reason.title}</h3><p>{reason.content}</p></div></div>; })}</div>
            </section>
            <section className={styles.hoursCard}>
              <h2>Giờ làm việc</h2>
              <p className={styles.hoursRow}><span>Thứ 2 – Thứ 7</span><strong>8:00 – 18:00</strong></p>
              <p className={styles.hoursRow}><span>Chủ nhật</span><strong>Hỗ trợ theo lịch hẹn</strong></p>
            </section>
          </div>
        </section>
      </div>

      <section className={styles.officesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}><p className={styles.eyebrow}>Văn phòng</p><h2>Ghé thăm chúng tôi</h2></div>
          <div className={styles.officeGrid}>{officeAddresses.map((address) => {
            const divider = address.indexOf(": ");
            const city = address.slice(0, divider);
            const location = address.slice(divider + 2);
            const parts = location.split(", ");
            const leadCount = city === "Hà Nội" ? 3 : 1;
            return <article key={address} className={styles.officeCard}><span className={styles.cityBadge}>{city}</span><h3>{parts.slice(0, leadCount).join(", ")}</h3><p>{parts.slice(leadCount).join(", ")}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer">Chỉ đường <ArrowRight size={14} aria-hidden="true" /></a></article>;
          })}</div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div><p className={styles.eyebrow}>Giải đáp</p><h2>Câu hỏi thường gặp</h2></div>
            <div className={styles.faqList}>{faqs.map((faq) => <details key={faq.question} className={styles.faqItem}><summary>{faq.question}<Plus size={17} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
          </div>
          <div className={styles.stats}>{stats.map(([value, title, content]) => <article key={title} className={styles.stat}><strong>{value}</strong><h3>{title}</h3><p>{content}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <Image src="/images/gioi-thieu/banner.png" alt="" fill sizes="100vw" />
        <div className={styles.bottomShade} />
        <div className={styles.bottomContent}><h2>Sẵn sàng bắt đầu hành trình kiến tạo tổ ấm của bạn?</h2><p>Hãy để Tổ Ấm Hoàn Hảo lắng nghe và cùng bạn tìm ra giải pháp phù hợp nhất.</p><a href="#tu-van">Đặt lịch tư vấn ngay</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
