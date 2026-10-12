import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ConsultationButton } from "@/components/consultation-popup";
import { footerCopy as additionalFooterCopy, headerCopy as additionalHeaderCopy } from "@/data/site-chrome-additional";
import { homePath, isAdditionalLocale, type SiteLocale } from "@/lib/locale";
import styles from "@/components/home/home-landing.module.css";

export function SiteFooter({ locale = "vi" }: { locale?: SiteLocale }) {
  const en = locale === "en";
  const ja = locale === "ja";
  const extra = isAdditionalLocale(locale) ? additionalFooterCopy[locale] : null;
  const tagline = isAdditionalLocale(locale) ? additionalHeaderCopy[locale].tagline : null;
  return (
    <footer className={`${styles.page} ${styles.footer}`}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link href={homePath(locale)} className={styles.brand}>
            <Image src="/logo-to-am-hoan-hao-old.png" alt="" width={47} height={47} />
            <span>
              <strong>TỔ ẤM HOÀN HẢO</strong>
              <small>{tagline ?? (ja ? "幸せな暮らしの空間づくり" : en ? "CREATING HAPPY LIVING SPACES" : "KIẾN TẠO KHÔNG GIAN SỐNG HẠNH PHÚC")}</small>
            </span>
          </Link>
          <p>{extra?.intro ?? (ja ? "マンション、都市型住宅、ヴィラ、オフィス、レストランのインテリアを設計・施工しています。現代的で長く愛せる空間をご提案します。" : en ? "Interior design and construction for apartments, townhouses, villas, offices and restaurants, with modern and lasting solutions." : "Chuyên thiết kế và thi công nội thất trọn gói cho căn hộ, nhà phố, biệt thự, văn phòng, nhà hàng với giải pháp hiện đại và bền vững.")}</p>
        </div>
        <div>
          <h3>{extra?.contact ?? (ja ? "お問い合わせ" : en ? "CONTACT INFORMATION" : "THÔNG TIN LIÊN HỆ")}</h3>
          <p><MapPin size={15} /> {extra?.address ?? (ja ? "ベトナム・ハノイ市ロンビエン区 Nguyen Van Linh通り129番地" : en ? "129 Nguyen Van Linh, Long Bien, Hanoi" : "Số 129 Nguyễn Văn Linh, Long Biên, Hà Nội")}</p>
          <p><Phone size={15} /> <a href="tel:0903897555">0903 897 555</a></p>
          <p><Mail size={15} /> <a href="mailto:info@toamhoanhao.vn">info@toamhoanhao.vn</a></p>
          <p><Clock3 size={15} /> {extra?.hours ?? (ja ? "月〜土：8:00〜17:30" : en ? "Mon–Sat: 8:00–17:30" : "Thứ 2 - Thứ 7: 8:00 - 17:30")}</p>
        </div>
        <div>
          <h3>{extra?.explore ?? (ja ? "サイト案内" : en ? "EXPLORE" : "DANH MỤC CHÍNH")}</h3>
          <Link href="/gioi-thieu">{extra?.about ?? (ja ? "会社紹介" : en ? "About us" : "Giới thiệu")}</Link>
          <Link href="/du-an">{extra?.projects ?? (ja ? "施工事例" : en ? "Projects" : "Dự án")}</Link>
          <Link href="/gioi-thieu/xuong-san-xuat-noi-that">{extra?.workshop ?? (ja ? "製作工場" : en ? "Workshop" : "Xưởng sản xuất")}</Link>
          <Link href="/lien-he">{extra?.contactLink ?? (ja ? "お問い合わせ" : en ? "Contact" : "Liên hệ")}</Link>
        </div>
        <div>
          <h3>{extra?.services ?? (ja ? "サービス" : en ? "SERVICES" : "DỊCH VỤ")}</h3>
          <Link href="/thiet-ke-noi-that/thiet-ke-chung-cu">{extra?.design ?? (ja ? "インテリアデザイン" : en ? "Interior design" : "Thiết kế nội thất")}</Link>
          <Link href="/thi-cong-noi-that/thi-cong-chung-cu">{extra?.construction ?? (ja ? "内装施工" : en ? "Interior construction" : "Thi công nội thất")}</Link>
          <Link href="/thi-cong-noi-that/thi-cong-nha-pho">{extra?.townhouse ?? (ja ? "都市型住宅の施工" : en ? "Townhouse construction" : "Thi công nhà phố")}</Link>
          <Link href="/bao-gia/thiet-ke-thi-cong-noi-that">{extra?.pricing ?? (ja ? "料金案内" : en ? "Pricing" : "Báo giá")}</Link>
        </div>
        <div>
          <h3>{extra?.connect ?? (ja ? "お気軽にご相談ください" : en ? "CONNECT WITH US" : "KẾT NỐI VỚI CHÚNG TÔI")}</h3>
          <ConsultationButton className={styles.footerCta}>{extra?.advice ?? (ja ? "無料相談" : en ? "Get advice" : "Nhận tư vấn")} <ArrowRight size={16} /></ConsultationButton>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <span>© {new Date().getFullYear()} Tổ Ấm Hoàn Hảo. All rights reserved.</span>
          <span>{extra?.bottom ?? (ja ? "インテリア設計・施工" : en ? "Interior design and construction" : "Thiết kế và thi công nội thất trọn gói")}</span>
        </div>
      </div>
    </footer>
  );
}
