import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JobBoard } from "./job-board";
import styles from "./recruitment.module.css";

export const metadata: Metadata = {
  title: "Tuyển dụng | Tổ Ấm Hoàn Hảo",
  description: "Cơ hội nghề nghiệp tại Tổ Ấm Hoàn Hảo: kiến trúc sư, kỹ sư nội thất, nhân viên kinh doanh và nhiều vị trí khác.",
};

const values = [
  { title: "Tận tâm", content: "Đặt lợi ích khách hàng lên hàng đầu, phục vụ như người thân trong gia đình." },
  { title: "Chính trực", content: "Minh bạch trong chi phí, cam kết đúng tiến độ và chất lượng đã thống nhất." },
  { title: "Sáng tạo", content: "Không ngừng cập nhật xu hướng, đưa ra những giải pháp mới mẻ và khác biệt." },
  { title: "Phát triển", content: "Tạo môi trường để mỗi cá nhân học hỏi, thăng tiến cùng sự lớn mạnh của công ty." },
];

const benefits = [
  { icon: "◕", title: "Thu nhập cạnh tranh", content: "Lương thỏa đáng theo năng lực, thưởng theo hiệu quả công việc và dự án." },
  { icon: "♡", title: "Bảo hiểm đầy đủ", content: "Bảo hiểm xã hội, y tế và chế độ phúc lợi theo quy định của công ty." },
  { icon: "✎", title: "Đào tạo chuyên môn", content: "Cơ hội học hỏi từ đội ngũ giàu kinh nghiệm và các khóa đào tạo nội bộ." },
  { icon: "↗", title: "Lộ trình thăng tiến", content: "Đánh giá định kỳ, cơ hội thăng tiến rõ ràng theo năng lực và đóng góp." },
  { icon: "☻", title: "Môi trường trẻ trung", content: "Văn hóa cởi mở, hỗ trợ lẫn nhau giữa các phòng ban." },
  { icon: "★", title: "Hoạt động tập thể", content: "Team building, sự kiện liên hoan và các hoạt động gắn kết thường niên." },
];

const steps = [
  { title: "Nộp hồ sơ", content: "Gửi CV và hồ sơ ứng tuyển qua email hoặc liên hệ trực tiếp." },
  { title: "Phỏng vấn", content: "Trao đổi trực tiếp với phòng nhân sự và phòng ban chuyên môn." },
  { title: "Đánh giá", content: "Làm bài test năng lực hoặc thử việc tùy theo vị trí." },
  { title: "Nhận việc", content: "Thông báo kết quả và hướng dẫn nhận việc, hội nhập đội ngũ." },
];

export default function RecruitmentPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <div className={styles.headerSpacer} />

    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.openBadge}><span /> Đang tuyển 12 vị trí</span>
            <h1>Cùng kiến tạo<br />những <em>tổ ấm</em> thật sự</h1>
            <p>Tổ Ấm Hoàn Hảo luôn chào đón những con người đam mê, sáng tạo và trách nhiệm cùng chung tay kiến tạo những không gian sống lý tưởng.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#vi-tri">Xem vị trí tuyển dụng</a>
              <a className={styles.outlineButton} href="#gui-ho-so">Gửi hồ sơ</a>
            </div>
            <div className={styles.heroStats}>
              <div><strong>12</strong><span>Vị trí đang mở</span></div>
              <div><strong>3</strong><span>Phòng ban</span></div>
              <div><strong>5 ngày</strong><span>Phản hồi hồ sơ phù hợp</span></div>
            </div>
          </div>
          <div className={styles.heroCollage}>
            <div className={styles.heroFactory}><Image src="/images/gioi-thieu/xuong-san-xuat.png" alt="Xưởng sản xuất nội thất của Tổ Ấm Hoàn Hảo" fill priority sizes="(max-width: 700px) 50vw, 350px" /></div>
            <div className={styles.heroTop}><Image src="/images/gioi-thieu/banner.png" alt="Không gian nội thất do Tổ Ấm Hoàn Hảo thiết kế" fill priority sizes="(max-width: 700px) 42vw, 275px" /></div>
            <div className={styles.heroBottom}><Image src="/images/thi-cong-noi-that/khong-gian-phong-khach/bai-1-thumb.webp" alt="Phòng khách hoàn thiện" fill priority sizes="(max-width: 700px) 42vw, 275px" /></div>
            <div className={styles.heroNote}><b>↗</b><span><strong>Cùng nhau phát triển</strong><small>Học hỏi và thăng tiến theo năng lực</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>Văn hóa công ty</p><h2>Giá trị chúng tôi theo đuổi</h2></div><p>Chúng tôi tin rằng một tập thể vững mạnh được xây dựng từ những cá nhân có chung giá trị. Đó là nền tảng để Tổ Ấm Hoàn Hảo phát triển bền vững.</p></div>
        <div className={styles.valuesGrid}>{values.map((value, index) => <article key={value.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{value.title}</h3><p>{value.content}</p></article>)}</div>
      </div>
    </section>

    <section id="vi-tri" className={styles.jobsSection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Cơ hội nghề nghiệp</p>
        <h2>Các vị trí đang tuyển dụng</h2>
        <JobBoard />
      </div>
    </section>

    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Chế độ đãi ngộ</p>
        <h2>Quyền lợi khi làm việc tại Tổ Ấm Hoàn Hảo</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitPhoto}><Image src="/images/gioi-thieu/xuong-san-xuat.png" alt="Xưởng sản xuất nội thất" fill sizes="(max-width: 700px) 100vw, 340px" /><div><strong>Làm việc cùng đội ngũ thiết kế, kỹ thuật và sản xuất</strong><span>Môi trường chuyên nghiệp cho các dự án và công trình hoàn thiện.</span></div></div>
          <div className={styles.benefitCards}>{benefits.map((benefit) => <article key={benefit.title}><span className={styles.benefitIcon}>{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.content}</p></article>)}</div>
        </div>
      </div>
    </section>

    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.processHeading}><p className={styles.eyebrow}>Quy trình ứng tuyển</p><h2>Bốn bước trở thành thành viên Tổ Ấm</h2></div>
        <div className={styles.stepsGrid}>{steps.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.content}</p></article>)}</div>
        <div id="gui-ho-so" className={styles.applyPanel}>
          <div><p className={styles.eyebrow}>Gửi hồ sơ ứng tuyển</p><h2>Hãy gửi CV kèm portfolio về email của chúng tôi</h2><p>Tiêu đề email: <strong>[Tuyển dụng] – Vị trí – Họ tên</strong><br />Portfolio chỉ cần nếu bạn có.</p></div>
          <div className={styles.applyContact}><a href="mailto:hotro.toamhoanhao@gmail.com?subject=%5BTuy%E1%BB%83n%20d%E1%BB%A5ng%5D%20%E2%80%93%20V%E1%BB%8B%20tr%C3%AD%20%E2%80%93%20H%E1%BB%8D%20t%C3%AAn">hotro.toamhoanhao@gmail.com</a><span>Nhấn địa chỉ trên để mở email</span><small>Chúng tôi sẽ liên hệ với ứng viên phù hợp trong vòng 5 ngày làm việc.</small></div>
        </div>
      </div>
    </section>

    <section className={styles.bottomCta}><Image src="/images/gioi-thieu/tuyen-dung.png" alt="" fill sizes="100vw" /><div className={styles.bottomCtaShade} /><div className={styles.bottomCtaContent}><h2>Sẵn sàng gia nhập đội ngũ Tổ Ấm Hoàn Hảo?</h2><p>Liên hệ với chúng tôi để biết thêm thông tin chi tiết về các vị trí tuyển dụng.</p><div><a href="mailto:hotro.toamhoanhao@gmail.com">Gửi hồ sơ ngay</a><a href="tel:0903387555">Hotline: 0903.897.555</a></div></div></section>
    <SiteFooter />
  </main>;
}
