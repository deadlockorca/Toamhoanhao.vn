import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Binoculars, Factory, Gem, Target } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutVideo } from "./about-video";
import styles from "./about-page.module.css";

export const metadata: Metadata = {
  title: "Về Tổ Ấm Hoàn Hảo | Tổ Ấm Hoàn Hảo",
  description:
    "Tìm hiểu câu chuyện, năng lực thiết kế và thi công nội thất của Tổ Ấm Hoàn Hảo.",
};

const aboutValues = [
  {
    icon: Binoculars,
    title: "Tầm nhìn",
    content:
      "Trở thành đơn vị được khách hàng tin tưởng khi tìm kiếm một không gian sống chỉn chu, bền vững và phù hợp với nhịp sống riêng.",
  },
  {
    icon: Target,
    title: "Sứ mệnh",
    content:
      "Lắng nghe kỹ nhu cầu, biến những ý tưởng thành phương án có thể triển khai và đồng hành đến khi không gian hoàn thiện.",
  },
  {
    icon: Gem,
    title: "Giá trị cốt lõi",
    content:
      "Tận tâm trong từng chi tiết, minh bạch trong từng hạng mục và tôn trọng trải nghiệm sống dài lâu của gia chủ.",
  },
];

const operatingPrinciples = [
  { value: "15+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Công trình hoàn thiện" },
  { value: "1000+", label: "Khách hàng đồng hành" },
  { value: "98%", label: "Khách hàng hài lòng" },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerSpacer}><SiteHeader /></div>

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Điều hướng trang">
              <Link href="/">Trang chủ</Link><span aria-hidden="true">/</span><span>Giới thiệu</span>
            </nav>
            <p className={styles.eyebrow}>VỀ CHÚNG TÔI</p>
            <h1>Về Tổ Ấm Hoàn Hảo</h1>
            <p className={styles.heroDescription}>Kiến tạo không gian sống hạnh phúc, bền vững và đầy cảm hứng cho mỗi gia đình Việt.</p>
            <div className={styles.heroActions}>
              <Link href="#cau-chuyen" className={styles.primaryButton}>Câu chuyện của chúng tôi <ArrowRight size={16} /></Link>
              <ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/gioi-thieu/banner.png" alt="Không gian sống ấm áp" fill priority sizes="(max-width: 800px) 100vw, 52vw" />
          </div>
        </div>
      </section>

      <section className={styles.storySection} id="cau-chuyen">
        <div className={styles.container}>
          <div className={styles.leadershipCard}>
            <span className={styles.quoteIcon} aria-hidden="true">“</span>
            <div>
              <h2>Thông điệp của ban lãnh đạo</h2>
              <p>Trong suốt nhiều năm qua, chúng tôi đã mang đến cho khách hàng những sản phẩm nội thất, xây mới, sửa chữa cải tạo ngôi nhà của họ với đầy đủ sự tử tế. Chúng tôi sẽ cố gắng duy trì điều này trong suốt quá trình làm nghề của mình.</p>
            </div>
          </div>

          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>CÂU CHUYỆN CỦA CHÚNG TÔI</p>
              <h2>Thấu hiểu người sống trong ngôi nhà</h2>
              <p><strong>Tổ Ấm Hoàn Hảo</strong> là đơn vị thiết kế và thi công nội thất hướng đến những không gian sống có chiều sâu, phù hợp với thói quen sinh hoạt và cá tính của từng gia chủ. Chúng tôi tin một ngôi nhà đẹp cần bắt đầu từ việc thấu hiểu người sẽ sống trong đó.</p>
              <p>Mỗi công trình được triển khai bằng một quy trình rõ ràng: lắng nghe nhu cầu, khảo sát hiện trạng, phát triển phương án thiết kế, tổ chức thi công và đồng hành sau bàn giao. Sự phối hợp giữa đội ngũ thiết kế, kỹ thuật và sản xuất giúp mọi quyết định được kiểm soát nhất quán từ đầu đến cuối.</p>
              <p>Với tinh thần làm nghề chỉn chu, chúng tôi luôn tìm kiếm giải pháp cân bằng giữa thẩm mỹ, công năng, ngân sách và độ bền trong quá trình sử dụng. Mục tiêu cuối cùng vẫn là một tổ ấm khiến gia chủ muốn trở về mỗi ngày.</p>
            </div>
            <div className={styles.storyVisual}>
              <Image src="/images/gioi-thieu/thuong-hieu.png" alt="Công trình biệt thự do Tổ Ấm Hoàn Hảo triển khai" fill sizes="(max-width: 800px) 100vw, 48vw" />
              <span className={styles.experienceBadge}><strong>15+</strong><small>Năm kinh nghiệm</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={`${styles.container} ${styles.valuesGrid}`}>
          {aboutValues.map(({ icon: Icon, title, content }) => (
            <article className={styles.valueCard} key={title}>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.videoSection} aria-labelledby="about-video-title">
        <div className={`${styles.container} ${styles.videoGrid}`}>
          <div className={styles.videoCopy}>
            <span className={styles.factoryIcon}><Factory size={23} strokeWidth={1.5} aria-hidden="true" /></span>
            <h2 id="about-video-title">Xưởng sản xuất nội thất</h2>
            <p>Khu vực sản xuất, hoàn thiện và kiểm tra chất lượng giúp các hạng mục nội thất được triển khai đồng bộ với phương án thiết kế.</p>
          </div>
          <AboutVideo />
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={`${styles.container} ${styles.capabilityGrid}`}>
          <div className={styles.capabilityVisual}>
            <Image src="/images/gioi-thieu/xuong-san-xuat.png" alt="Không gian xưởng sản xuất nội thất" fill sizes="(max-width: 800px) 100vw, 48vw" />
          </div>
          <div className={styles.capabilityCopy}>
            <p className={styles.eyebrow}>NĂNG LỰC TRIỂN KHAI</p>
            <h2>Chỉn chu từ bản vẽ đến không gian hoàn thiện</h2>
            <p>Chúng tôi kết nối đội ngũ thiết kế, kỹ thuật và sản xuất trong một quy trình làm việc thống nhất để kiểm soát tiến độ, chất lượng và trải nghiệm của khách hàng.</p>
            <div className={styles.metricsGrid}>
              {operatingPrinciples.map(({ value, label }) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <div className={`${styles.container} ${styles.closingGrid}`}>
          <div className={styles.closingQuote}>
            <span aria-hidden="true">“</span>
            <p>Kiên định trên con đường đã chọn. Kiên cường vượt qua mọi khó khăn và giữ trọn niềm tin vào giá trị của một tổ ấm tử tế.</p>
          </div>
          <div className={styles.closingVisual}>
            <Image src="/images/gioi-thieu/banner.png" alt="Không gian sống ấm áp" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
