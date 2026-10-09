import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConsultationButton } from "@/components/consultation-popup";
import type { SiteLocale } from "@/lib/locale";
import styles from "@/components/home/home-landing.module.css";

export function SiteFooter({ locale = "vi" }: { locale?: SiteLocale }) {
  const en = locale === "en";
  return (
    <footer className={`${styles.page} ${styles.footer}`}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link href={en ? "/en" : "/"} className={styles.brand}>
            <Image src="/logo-to-am-hoan-hao-old.png" alt="" width={47} height={47} />
            <span>
              <strong>TỔ ẤM HOÀN HẢO</strong>
              <small>{en ? "CREATING HAPPY LIVING SPACES" : "KIẾN TẠO KHÔNG GIAN SỐNG HẠNH PHÚC"}</small>
            </span>
          </Link>
          <p>{en ? "Interior design and construction for apartments, townhouses, villas, offices and restaurants, with modern and lasting solutions." : "Chuyên thiết kế và thi công nội thất trọn gói cho căn hộ, nhà phố, biệt thự, văn phòng, nhà hàng với giải pháp hiện đại và bền vững."}</p>
        </div>
        <div>
          <h3>{en ? "CONTACT INFORMATION" : "THÔNG TIN LIÊN HỆ"}</h3>
          <p><MapPin size={15} /> {en ? "129 Nguyen Van Linh, Long Bien, Hanoi" : "Số 129 Nguyễn Văn Linh, Long Biên, Hà Nội"}</p>
          <p><Phone size={15} /> <a href="tel:0903897555">0903 897 555</a></p>
          <p><Mail size={15} /> <a href="mailto:info@toamhoanhao.vn">info@toamhoanhao.vn</a></p>
          <p><Clock3 size={15} /> {en ? "Mon–Sat: 8:00–17:30" : "Thứ 2 - Thứ 7: 8:00 - 17:30"}</p>
        </div>
        <div>
          <h3>{en ? "EXPLORE" : "DANH MỤC CHÍNH"}</h3>
          <Link href="/gioi-thieu">{en ? "About us" : "Giới thiệu"}</Link>
          <Link href="/du-an">{en ? "Projects" : "Dự án"}</Link>
          <Link href="/gioi-thieu/xuong-san-xuat-noi-that">{en ? "Workshop" : "Xưởng sản xuất"}</Link>
          <Link href="/lien-he">{en ? "Contact" : "Liên hệ"}</Link>
        </div>
        <div>
          <h3>{en ? "SERVICES" : "DỊCH VỤ"}</h3>
          <Link href="/thiet-ke-noi-that/thiet-ke-chung-cu">{en ? "Interior design" : "Thiết kế nội thất"}</Link>
          <Link href="/thi-cong-noi-that/thi-cong-chung-cu">{en ? "Interior construction" : "Thi công nội thất"}</Link>
          <Link href="/thi-cong-noi-that/thi-cong-nha-pho">{en ? "Townhouse construction" : "Thi công nhà phố"}</Link>
          <Link href="/bao-gia/thiet-ke-thi-cong-noi-that">{en ? "Pricing" : "Báo giá"}</Link>
        </div>
        <div>
          <h3>{en ? "CONNECT WITH US" : "KẾT NỐI VỚI CHÚNG TÔI"}</h3>
          <ConsultationButton className={styles.footerCta}>{en ? "Get advice" : "Nhận tư vấn"} <ArrowRight size={16} /></ConsultationButton>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <span>© {new Date().getFullYear()} Tổ Ấm Hoàn Hảo. All rights reserved.</span>
          <span>{en ? "Interior design and construction" : "Thiết kế và thi công nội thất trọn gói"}</span>
        </div>
      </div>
    </footer>
  );
}
