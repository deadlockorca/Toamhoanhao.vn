"use client";

import { getLocalizedPagePath, localizedPageHref } from "@/lib/localized-pages";

import { ArrowRight, ChevronDown, Globe2, Menu, Search, X } from "lucide-react";
import Form from "next/form";
import { getSearchCopy, searchPath } from "@/data/search-copy";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ConsultationButton } from "@/components/consultation-popup";
import { getNavigation } from "@/data/navigation-english";
import { headerCopy as additionalHeaderCopy } from "@/data/site-chrome-additional";
import type { NavigationItem } from "@/data/site";
import {
  homePath,
  isAdditionalLocale,
  localeOptions,
  type SiteLocale,
} from "@/lib/locale";
import styles from "./site-header.module.css";

function MenuChildren({
  items,
  onNavigate,
  layout,
  mobile = false,
  uppercase = false,
}: {
  items: NonNullable<NavigationItem["children"]>;
  onNavigate: () => void;
  layout?: NavigationItem["layout"];
  mobile?: boolean;
  uppercase?: boolean;
}) {
  return (
    <div
      className={`${styles.menuChildren} ${uppercase ? styles.menuChildrenUppercase : ""} ${layout === "portfolio" ? styles.portfolioMenu : layout === "services" ? styles.servicesMenu : ""}`}
    >
      {items.map((item) => {
        if (mobile && layout === "services" && item.children)
          return (
            <details
              key={item.label}
              name="site-mobile-services"
              className={styles.mobileServiceGroup}
            >
              <summary>
                {item.label}
                <ChevronDown size={16} aria-hidden="true" />
              </summary>
              <MenuChildren items={item.children} onNavigate={onNavigate} />
            </details>
          );
        return (
          <div
            key={item.label}
            className={`${styles.menuChild} ${layout === "portfolio" && !item.image ? styles.menuQuickLink : ""}`}
          >
            {item.href ? (
              <Link href={item.href} onClick={onNavigate}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    width={96}
                    height={72}
                    className={styles.menuThumbnail}
                    sizes="96px"
                  />
                )}
                <span>{item.label}</span>
                {layout === "portfolio" && (
                  <ArrowRight size={15} aria-hidden="true" />
                )}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {item.children && (
              <div className={styles.menuGrandchildren}>
                {item.children.map((child) =>
                  child.href ? (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onNavigate}
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <span key={child.label}>{child.label}</span>
                  ),
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function SiteHeader({
  locale = "vi",
  languageQuery,
}: {
  locale?: SiteLocale;
  languageQuery?: string;
}) {
  const navigation = getNavigation(locale);
  const extra = isAdditionalLocale(locale)
    ? additionalHeaderCopy[locale]
    : null;
  const homeHref = homePath(locale);
  const brandLabel = `Tổ Ấm Hoàn Hảo - ${extra?.home ?? (locale === "ja" ? "ホーム" : locale === "en" ? "Home" : "Trang chủ")}`;
  const navLabel =
    extra?.navigation ??
    (locale === "ja"
      ? "メインメニュー"
      : locale === "en"
        ? "Main navigation"
        : "Menu chính");
  const languageLabel =
    extra?.language ??
    (locale === "ja" ? "言語" : locale === "en" ? "Language" : "Ngôn ngữ");
  const consultationLabel =
    extra?.consultation ??
    (locale === "ja"
      ? "無料相談"
      : locale === "en"
        ? "Get advice"
        : "Nhận tư vấn");
  const selectedLanguage = localeOptions.find(
    (option) => option.code === locale,
  )!;
  const pathname = usePathname();
  const localizedPage = getLocalizedPagePath(pathname);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchCopy = getSearchCopy(locale);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchToggleRef = useRef<HTMLButtonElement>(null);
  const searchOpenRef = useRef(false);
  useEffect(() => {
    searchOpenRef.current = searchOpen;
  }, [searchOpen]);
  const headerRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        headerRef.current
          ?.querySelector<HTMLButtonElement>(
            '[data-nav-trigger][aria-expanded="true"], [data-mobile-trigger][aria-expanded="true"]',
          )
          ?.focus();
        setOpenDesktop(null);
        setMobileOpen(false);
        setLanguageOpen(false);
        setSearchOpen(false);
        if (searchOpenRef.current) searchToggleRef.current?.focus();
      }
    }
    function closeOnOutside(event: PointerEvent) {
      if (!languageRef.current?.contains(event.target as Node))
        setLanguageOpen(false);
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDesktop(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeMenus = () => {
      setOpenDesktop(null);
      setMobileOpen(false);
      setSearchOpen(false);
      setLanguageOpen(false);
    };
    desktop.addEventListener("change", closeMenus);
    return () => desktop.removeEventListener("change", closeMenus);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const wide = window.matchMedia("(min-width: 768px)");
    const close = () => {
      if (wide.matches) setMobileOpen(false);
    };
    wide.addEventListener("change", close);
    return () => {
      document.body.style.overflow = previous;
      wide.removeEventListener("change", close);
    };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <Link href={homeHref} className={styles.brand} aria-label={brandLabel}>
          <Image
            src="/logo-to-am-hoan-hao-old.png"
            alt=""
            width={64}
            height={64}
            priority
          />
          <span>
            <strong>TỔ ẤM HOÀN HẢO</strong>
            <small>
              {extra?.tagline ??
                (locale === "ja"
                  ? "幸せな暮らしの空間づくり"
                  : locale === "en"
                    ? "CREATING HAPPY LIVING SPACES"
                    : "KIẾN TẠO KHÔNG GIAN SỐNG HẠNH PHÚC")}
            </small>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label={navLabel}>
          {navigation.map((item, index) =>
            item.children ? (
              <div
                key={item.label}
                className={`${styles.navItem} ${item.layout ? styles.wideNavItem : ""} ${openDesktop === item.label ? styles.navOpen : ""}`}
                onMouseEnter={() => {
                  setOpenDesktop(item.label);
                  setLanguageOpen(false);
                }}
                onMouseLeave={() => setOpenDesktop(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget))
                    setOpenDesktop(null);
                }}
              >
                <button
                  type="button"
                  data-nav-trigger
                  aria-controls={`site-desktop-menu-${index}`}
                  aria-expanded={openDesktop === item.label}
                  onClick={(event) => {
                    setLanguageOpen(false);
                    // Pointer entry already opens the panel; a click keeps it
                    // open. Keyboard activation retains disclosure toggling.
                    setOpenDesktop((current) =>
                      event.detail === 0 && current === item.label
                        ? null
                        : item.label,
                    );
                  }}
                >
                  {item.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
                <div
                  id={`site-desktop-menu-${index}`}
                  hidden={openDesktop !== item.label}
                  className={`${styles.dropdown} ${item.layout === "portfolio" ? styles.portfolioDropdown : item.layout === "services" ? styles.servicesDropdown : ""}`}
                >
                  <MenuChildren
                    items={item.children}
                    onNavigate={() => setOpenDesktop(null)}
                    uppercase={item.uppercaseChildren}
                    layout={item.layout}
                  />
                </div>
              </div>
            ) : item.href ? (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span key={item.label}>{item.label}</span>
            ),
          )}
        </nav>

        <div className={styles.headerActions}>
          <button
            ref={searchToggleRef}
            type="button"
            className={styles.searchToggle}
            aria-label={searchOpen ? searchCopy.close : searchCopy.title}
            aria-expanded={searchOpen}
            aria-controls="header-search"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMobileOpen(false);
              setLanguageOpen(false);
              setOpenDesktop(null);
              if (!searchOpen)
                requestAnimationFrame(() => searchInputRef.current?.focus());
            }}
          >
            {searchOpen ? <X size={21} /> : <Search size={21} />}
          </button>
          <Form
            id="header-search"
            action={searchPath(locale)}
            role="search"
            aria-label={searchCopy.title}
            className={`${styles.searchForm} ${searchOpen ? styles.searchOpen : ""}`}
            onSubmit={() => {
              setSearchOpen(false);
              searchInputRef.current?.blur();
            }}
          >
            <input
              ref={searchInputRef}
              type="search"
              name="q"
              aria-label={searchCopy.title}
              placeholder={searchCopy.placeholder}
              maxLength={120}
              required
            />
            <button type="submit" aria-label={searchCopy.title}>
              <Search size={18} aria-hidden="true" />
            </button>
          </Form>
          <nav
            ref={languageRef}
            className={styles.languageSwitch}
            aria-label={languageLabel}
          >
            <button
              type="button"
              className={styles.languageTrigger}
              aria-label={`${languageLabel}: ${selectedLanguage.label}`}
              aria-expanded={languageOpen}
              aria-controls="site-language-options"
              onClick={() => {
                setOpenDesktop(null);
                setSearchOpen(false);
                setLanguageOpen((open) => !open);
              }}
            >
              <Globe2 size={17} aria-hidden="true" />
              <span>{selectedLanguage.short}</span>
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            {languageOpen && (
              <div
                id="site-language-options"
                className={styles.languageDropdown}
              >
                {localeOptions.map((option) => (
                  <Link
                    key={option.code}
                    href={
                      localizedPage
                        ? localizedPageHref(
                            localizedPage +
                              (languageQuery ? `?${languageQuery}` : ""),
                            option.code,
                          )
                        : option.code === "vi" && locale === "vi"
                          ? pathname
                          : homePath(option.code)
                    }
                    hrefLang={option.code}
                    aria-current={locale === option.code ? "page" : undefined}
                    onClick={() => setLanguageOpen(false)}
                  >
                    <span>{option.short}</span> {option.label}
                  </Link>
                ))}
              </div>
            )}
          </nav>
          <ConsultationButton className={styles.consultation}>
            {consultationLabel} <ArrowRight size={18} aria-hidden="true" />
          </ConsultationButton>
        </div>
        <button
          data-mobile-trigger
          className={styles.mobileToggle}
          type="button"
          aria-label={
            mobileOpen
              ? (extra?.closeMenu ??
                (locale === "ja"
                  ? "メニューを閉じる"
                  : locale === "en"
                    ? "Close menu"
                    : "Đóng menu"))
              : (extra?.openMenu ??
                (locale === "ja"
                  ? "メニューを開く"
                  : locale === "en"
                    ? "Open menu"
                    : "Mở menu"))
          }
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-menu"
          onClick={() => {
            setMobileOpen((open) => !open);
            setSearchOpen(false);
            setLanguageOpen(false);
          }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="site-mobile-menu"
          className={styles.mobileNav}
          aria-label={
            extra?.mobileNavigation ??
            (locale === "ja"
              ? "モバイルメニュー"
              : locale === "en"
                ? "Mobile navigation"
                : "Menu mobile")
          }
        >
          <div className={styles.mobileInner}>
            {navigation.map((item) =>
              item.children ? (
                <details key={item.label} name="site-mobile-navigation">
                  <summary>
                    {item.label}
                    <ChevronDown size={17} aria-hidden="true" />
                  </summary>
                  <MenuChildren
                    items={item.children}
                    onNavigate={() => setMobileOpen(false)}
                    uppercase={item.uppercaseChildren}
                    layout={item.layout}
                    mobile
                  />
                </details>
              ) : item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <span key={item.label}>{item.label}</span>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
