"use client";

import { ArrowRight, ChevronDown, Globe2, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ConsultationButton } from "@/components/consultation-popup";
import { getNavigation } from "@/data/navigation-english";
import type { NavigationItem } from "@/data/site";
import type { SiteLocale } from "@/lib/locale";
import styles from "./site-header.module.css";

function MenuChildren({
  items,
  onNavigate,
  uppercase = false,
}: {
  items: NonNullable<NavigationItem["children"]>;
  onNavigate: () => void;
  uppercase?: boolean;
}) {
  return (
    <div className={`${styles.menuChildren} ${uppercase ? styles.menuChildrenUppercase : ""}`}>
      {items.map((item) => (
        <div key={item.label} className={styles.menuChild}>
          {item.href ? (
            <Link href={item.href} onClick={onNavigate}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {item.children && (
            <div className={styles.menuGrandchildren}>
              {item.children.map((child) => child.href ? (
                <Link key={child.label} href={child.href} onClick={onNavigate}>{child.label}</Link>
              ) : (
                <span key={child.label}>{child.label}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function SiteHeader({ locale = "vi" }: { locale?: SiteLocale }) {
  const navigation = getNavigation(locale);
  const homeHref = locale === "ja" ? "/ja" : locale === "en" ? "/en" : "/";
  const brandLabel = locale === "ja" ? "Tổ Ấm Hoàn Hảo - ホーム" : locale === "en" ? "To Am Hoan Hao - Home" : "Tổ Ấm Hoàn Hảo - Trang chủ";
  const navLabel = locale === "ja" ? "メインメニュー" : locale === "en" ? "Main navigation" : "Menu chính";
  const languageLabel = locale === "ja" ? "言語" : locale === "en" ? "Language" : "Ngôn ngữ";
  const consultationLabel = locale === "ja" ? "無料相談" : locale === "en" ? "Get advice" : "Nhận tư vấn";
  const pathname = usePathname();
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDesktop(null);
        setMobileOpen(false);
        setLanguageOpen(false);
      }
    }
    function closeOnOutside(event: PointerEvent) {
      if (!languageRef.current?.contains(event.target as Node)) setLanguageOpen(false);
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDesktop(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <Link href={homeHref} className={styles.brand} aria-label={brandLabel}>
          <Image src="/logo-to-am-hoan-hao-old.png" alt="" width={64} height={64} priority />
          <span><strong>TỔ ẤM HOÀN HẢO</strong><small>{locale === "ja" ? "幸せな暮らしの空間づくり" : locale === "en" ? "CREATING HAPPY LIVING SPACES" : "KIẾN TẠO KHÔNG GIAN SỐNG HẠNH PHÚC"}</small></span>
        </Link>

        <nav className={styles.desktopNav} aria-label={navLabel}>
          {navigation.map((item) => item.children ? (
            <div
              key={item.label}
              className={`${styles.navItem} ${openDesktop === item.label ? styles.navOpen : ""}`}
              onMouseEnter={() => setOpenDesktop(item.label)}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <button
                type="button"
                aria-expanded={openDesktop === item.label}
                onClick={() => setOpenDesktop(openDesktop === item.label ? null : item.label)}
              >
                {item.label}<ChevronDown size={14} aria-hidden="true" />
              </button>
              <div className={styles.dropdown}>
                <MenuChildren items={item.children} onNavigate={() => setOpenDesktop(null)} uppercase={item.uppercaseChildren} />
              </div>
            </div>
          ) : item.href ? (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ) : (
            <span key={item.label}>{item.label}</span>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <nav ref={languageRef} className={styles.languageSwitch} aria-label={languageLabel}>
            <button
              type="button"
              className={styles.languageTrigger}
              aria-label={`${languageLabel}: ${locale === "ja" ? "日本語" : locale === "en" ? "English" : "Tiếng Việt"}`}
              aria-expanded={languageOpen}
              aria-controls="site-language-options"
              onClick={() => { setOpenDesktop(null); setLanguageOpen((open) => !open); }}
            >
              <Globe2 size={17} aria-hidden="true" />
              <span>{locale === "ja" ? "JP" : locale === "en" ? "EN" : "VI"}</span>
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            {languageOpen && <div id="site-language-options" className={styles.languageDropdown}>
              <Link href={locale === "vi" ? pathname : "/"} hrefLang="vi" aria-current={locale === "vi" ? "page" : undefined} onClick={() => setLanguageOpen(false)}><span>VI</span> Tiếng Việt</Link>
              <Link href="/en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined} onClick={() => setLanguageOpen(false)}><span>EN</span> English</Link>
              <Link href="/ja" hrefLang="ja" aria-current={locale === "ja" ? "page" : undefined} onClick={() => setLanguageOpen(false)}><span>JP</span> 日本語</Link>
            </div>}
          </nav>
          <ConsultationButton className={styles.consultation}>{consultationLabel} <ArrowRight size={18} aria-hidden="true" /></ConsultationButton>
        </div>
        <button
          className={styles.mobileToggle}
          type="button"
          aria-label={mobileOpen ? (locale === "ja" ? "メニューを閉じる" : locale === "en" ? "Close menu" : "Đóng menu") : (locale === "ja" ? "メニューを開く" : locale === "en" ? "Open menu" : "Mở menu")}
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="site-mobile-menu" className={styles.mobileNav} aria-label={locale === "ja" ? "モバイルメニュー" : locale === "en" ? "Mobile navigation" : "Menu mobile"}>
          <div className={styles.mobileInner}>
            {navigation.map((item) => item.children ? (
              <details key={item.label}>
                <summary>{item.label}<ChevronDown size={17} aria-hidden="true" /></summary>
                <MenuChildren items={item.children} onNavigate={() => setMobileOpen(false)} uppercase={item.uppercaseChildren} />
              </details>
            ) : item.href ? (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
            ) : (
              <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
