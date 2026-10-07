import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConsultationButton } from "@/components/consultation-popup";
import styles from "@/components/home/home-landing.module.css";

export function SiteFooter() {
  return (
    <footer className={`${styles.page} ${styles.footer}`}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.brand}>
            <Image src="/logo-to-am-hoan-hao-old.png" alt="" width={47} height={47} />
            <span>
              <strong>TỔ ẤM HOÀN HẢO</strong>
              <small>KIẾN TẠO KHÔNG GIAN SỐNG HẠNH PHÚC</small>
            </span>
          </Link>
          <p>Chuyên thiết kế và thi công nội thất trọn gói cho căn hộ, nhà phố, biệt thự, văn phòng, nhà hàng với giải pháp hiện đại và bền vững.</p>
        </div>
        <div>
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <p><MapPin size={15} /> Số 129 Nguyễn Văn Linh, Long Biên, Hà Nội</p>
          <p><Phone size={15} /> <a href="tel:0903897555">0903 897 555</a></p>
          <p><Mail size={15} /> <a href="mailto:info@toamhoanhao.vn">info@toamhoanhao.vn</a></p>
          <p><Clock3 size={15} /> Thứ 2 - Thứ 7: 8:00 - 17:30</p>
        </div>
        <div>
          <h3>DANH MỤC CHÍNH</h3>
          <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/du-an">Dự án</Link>
          <Link href="/gioi-thieu/xuong-san-xuat-noi-that">Xưởng sản xuất</Link>
          <Link href="/lien-he">Liên hệ</Link>
        </div>
        <div>
          <h3>DỊCH VỤ</h3>
          <Link href="/thiet-ke-noi-that/thiet-ke-chung-cu">Thiết kế nội thất</Link>
          <Link href="/thi-cong-noi-that/thi-cong-chung-cu">Thi công nội thất</Link>
          <Link href="/thi-cong-noi-that/thi-cong-nha-pho">Thi công nhà phố</Link>
          <Link href="/bao-gia/thiet-ke-thi-cong-noi-that">Báo giá</Link>
        </div>
        <div>
          <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
          <ConsultationButton className={styles.footerCta}>Nhận tư vấn <ArrowRight size={16} /></ConsultationButton>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <span>© {new Date().getFullYear()} Tổ Ấm Hoàn Hảo. All rights reserved.</span>
          <span>Thiết kế và thi công nội thất trọn gói</span>
        </div>
      </div>
    </footer>
  );
}
