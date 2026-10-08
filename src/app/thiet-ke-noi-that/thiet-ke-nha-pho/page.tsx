import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Leaf, Lightbulb, Ruler, SwatchBook } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationButton } from "@/components/consultation-popup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./townhouse.module.css";

export const metadata: Metadata = {
  title: "Thiết kế nội thất nhà phố | Tổ Ấm Hoàn Hảo",
  description: "Bí quyết thiết kế nội thất nhà phố độc lạ: hiện đại tăng sức hút, điểm nhấn vật liệu trang trí, phân bổ diện tích đồng đều và hài hòa với thiên nhiên.",
};

type Feature = { icon: LucideIcon; title: string; content: string };

const tips: Feature[] = [
  { icon: Lightbulb, title: "Thiết kế hiện đại tăng sức hút", content: "Lựa chọn nội thất hiện đại vừa đáp ứng yếu tố đẹp, độc đáo, vừa tích hợp công năng và phù hợp với nguồn tài chính của gia đình." },
  { icon: SwatchBook, title: "Điểm nhấn từ vật liệu trang trí", content: "Ngoài gỗ, gạch ốp tường… cần phối hợp màu sắc và đồ dùng trong gia đình để tăng sức hút cho ngôi nhà." },
  { icon: Ruler, title: "Phân bổ diện tích đồng đều", content: "Diện tích nhà phố phải phù hợp với đồ nội thất, kiến trúc sắp xếp thành đường, mảng, khối tạo không gian thoáng đãng, chú trọng ánh sáng." },
  { icon: Leaf, title: "Hài hòa với thiên nhiên", content: "Yếu tố chủ chốt giúp điều hòa sinh khí, tăng cường bầu không khí trong lành và cân bằng cuộc sống trong ngôi nhà." },
];

const designIdeas = [
  {
    id: "hien-dai", label: "Phong cách hiện đại", title: "Đẹp, độc đáo và tích hợp công năng",
    image: "/images/thiet-ke-noi-that/nha-pho/hien-dai.webp", alt: "Thiết kế nội thất nhà phố hiện đại",
    description: "Bí quyết đầu tiên để một căn nhà phố trở nên bắt mắt chính là lựa chọn thiết kế nội thất hiện đại. Không chỉ đáp ứng yếu tố đẹp, độc đáo, những mẫu thiết kế này còn vừa tích hợp công năng, vừa phù hợp với nguồn tài chính của gia đình.",
    tags: ["Hiện đại", "Độc đáo", "Công năng"],
  },
  {
    id: "vat-lieu", label: "Vật liệu trang trí", title: "Điểm nhấn hoàn hảo cho không gian",
    image: "/images/thiet-ke-noi-that/nha-pho/vat-lieu.webp", alt: "Điểm nhấn từ vật liệu trang trí nhà phố",
    description: "Với thiết kế nội thất nhà phố, ngoài việc tận dụng những vật liệu chính như gỗ, gạch ốp tường, cần làm tăng sức hút cho ngôi nhà bằng cách phối hợp các màu sắc và đồ dùng trong gia đình với nhau.",
    tags: ["Gỗ", "Gạch ốp tường", "Màu sắc"],
  },
  {
    id: "khong-gian", label: "Không gian", title: "Phân bổ diện tích đồng đều",
    image: "/images/thiet-ke-noi-that/nha-pho/phan-bo-dien-tich.webp", alt: "Phân bổ diện tích đồng đều trong thiết kế nhà phố",
    description: "Diện tích nhà phố phải phù hợp với đồ nội thất, không nên sử dụng các đồ nội thất quá lớn trong khi diện tích nhà lại nhỏ. Đặc trưng của nhà phố là kiến trúc được sắp xếp thành những đường, mảng, khối tạo không gian thoáng đãng, cùng ánh sáng được chú trọng làm điểm nhấn.",
    tags: ["Diện tích", "Không gian", "Ánh sáng"],
  },
  {
    id: "thien-nhien", label: "Thiên nhiên", title: "Hài hòa với thiên nhiên",
    image: "/images/thiet-ke-noi-that/nha-pho/thien-nhien.webp", alt: "Thiết kế nhà phố hài hòa với thiên nhiên",
    description: "Đây là yếu tố chủ chốt trong thiết kế nhà phố độc lạ. Nó góp phần điều hòa sinh khí, tăng cường bầu không khí trong lành đồng thời cân bằng cuộc sống trong ngôi nhà của bạn.",
    tags: ["Sinh khí", "Không khí trong lành", "Cân bằng"],
  },
];

const reasons = [
  "Hợp lý về công năng sử dụng và thẩm mỹ",
  "Lấy nhu cầu của khách hàng làm trọng tâm của những sáng tạo",
  "Thực hiện đúng tiến độ công trình",
  "Đảm bảo chất lượng công trình theo cam kết",
  "Đảm bảo quy trình thi công và bảo hành sản phẩm",
];

const processSteps = [
  "Tiếp nhận yêu cầu của khách hàng", "Khảo sát hiện trạng công trình", "Báo giá", "Ký kết hợp đồng",
  "Sản xuất và thi công lắp đặt", "Nghiệm thu và bàn giao công trình", "Thanh lý hợp đồng và bảo hành",
];

export default function TownhouseInteriorDesignPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav aria-label="Điều hướng trang" className={styles.breadcrumb}><Link href="/">Trang chủ</Link><span>/</span><Link href="/thiet-ke-noi-that">Thiết kế nội thất</Link><span>/</span><span>Thiết kế nhà phố</span></nav>
            <p className={styles.eyebrow}>Thiết kế nội thất</p>
            <h1>Thiết kế <span>nhà phố</span></h1>
            <p className={styles.heroDescription}>Nắm được những bí quyết thiết kế nội thất nhà phố độc lạ, bạn sẽ có một không gian sống mang cá tính và màu sắc riêng biệt khiến bất cứ ai đến tham quan đều ngưỡng mộ.</p>
            <div className={styles.heroActions}><a className={styles.primaryButton} href="#bi-quyet">Khám phá bí quyết</a><ConsultationButton className={styles.outlineButton}>Nhận tư vấn</ConsultationButton></div>
            <div className={styles.heroTags} aria-label="Bí quyết thiết kế nhà phố"><a href="#hien-dai">Hiện đại</a><a href="#vat-lieu">Vật liệu</a><a href="#khong-gian">Không gian</a><a href="#thien-nhien">Thiên nhiên</a></div>
          </div>
          <div className={styles.heroVisual}><div className={styles.heroImage}><Image src="/images/thiet-ke-noi-that/nha-pho/hero.webp" alt="Thiết kế nội thất nhà phố hiện đại" fill priority sizes="(min-width: 900px) 42vw, 90vw" className={styles.coverImage} /></div><div className={styles.heroBadge}><span className={styles.badgeIcon}>✦</span><span><small>Không gian sống riêng biệt</small><strong>Thiết kế theo cá tính gia chủ</strong></span></div></div>
        </div>
      </section>

      <section id="bi-quyet" className={styles.overview}><div className={`${styles.container} ${styles.overviewGrid}`}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Bí quyết thiết kế</p><h2>Bật mí bí quyết thiết kế nhà phố độc lạ</h2><p>Không gian nhà phố được tạo nên từ lựa chọn nội thất, vật liệu, cách phân bổ diện tích và sự kết nối với thiên nhiên.</p></div>
        <div className={`${styles.typeGrid} ${styles.typeGridFour}`}>{tips.map((item, index) => { const Icon = item.icon; return <a href={`#${designIdeas[index].id}`} className={styles.typeCard} key={item.title}><span className={styles.smallIcon}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.content}</p><span className={styles.textLink}>Xem chi tiết <span aria-hidden="true">→</span></span></a>; })}</div>
      </div></section>

      <section className={styles.stylesSection}><div className={styles.container}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>Bốn yếu tố tạo nên dấu ấn</p><h2>Không gian mang cá tính riêng</h2></div>
        <div className={styles.showcaseList}>{designIdeas.map((item, index) => <article id={item.id} className={`${styles.showcase} ${index % 2 ? styles.showcaseReverse : ""}`} key={item.id}>
          <div className={styles.showcaseImage}><Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 52vw, 100vw" className={styles.coverImage} /></div>
          <div className={styles.showcaseCard}><span className={styles.showcaseNumber}>{String(index + 1).padStart(2, "0")}</span><p className={styles.eyebrow}>{item.label}</p><h3>{item.title}</h3><p className={styles.showcaseDescription}>{item.description}</p><div className={styles.tagList}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}</div>
      </div></section>

      <section className={styles.processSection}><div className={styles.container}><div className={styles.centerHeading}><p className={styles.eyebrow}>Quy trình làm việc</p><h2>7 bước từ tiếp nhận đến bảo hành</h2></div><div className={styles.processGrid}>{processSteps.map((step, index) => <article className={styles.processCard} key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></article>)}</div></div></section>

      <section className={styles.lowerSection}><div className={styles.container}>
        <div className={styles.commitmentBox}><div><p className={styles.eyebrow}>Vì sao chọn chúng tôi</p><h2>Tổ Ấm Hoàn Hảo – giải pháp cho thiết kế nội thất nhà phố</h2><p>Với mục đích giúp gia chủ tạo dựng không gian rộng rãi, tiện nghi và hiện đại, chúng tôi cam kết cung cấp dịch vụ có tính khả thi cao.</p></div><ul>{reasons.map((item) => <li key={item}><Check size={17} strokeWidth={2} aria-hidden="true" />{item}</li>)}</ul></div>
        <div className={styles.companionBox}><div><p className={styles.eyebrow}>Người bạn đồng hành</p><h2>Tổ Ấm Hoàn Hảo – người bạn đồng hành thân thiết của mọi gia đình</h2><p>Tư vấn miễn phí mọi vấn đề thiết kế – thi công – nội thất tại nhà. Đội ngũ chuyên gia luôn sẵn sàng phục vụ bạn với chất lượng tuyệt vời nhất, đáp ứng mọi yêu cầu của khách hàng khó tính nhất.</p></div><ConsultationButton className={styles.primaryButton}>Nhận tư vấn</ConsultationButton></div>
      </div></section>

      <section className={styles.finalCta}><Image src="/images/thiet-ke-noi-that/nha-pho/hero.webp" alt="Không gian nhà phố" fill sizes="100vw" className={styles.coverImage} /><div className={styles.finalOverlay} /><div className={styles.finalContent}><h2>Sẵn sàng kiến tạo không gian nhà phố của bạn?</h2><p>Tư vấn miễn phí mọi vấn đề về thiết kế – thi công nội thất nhà phố, đúng tiến độ và chi phí hợp lý.</p><div><ConsultationButton className={styles.lightButton}>Đặt lịch tư vấn ngay</ConsultationButton><a className={styles.phoneButton} href="tel:0903897555">Hotline: 0903.897.555</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
