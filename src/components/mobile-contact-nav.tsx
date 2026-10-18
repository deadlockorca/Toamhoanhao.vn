"use client";

import { FilePenLine, MessageSquareMore, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

import { ConsultationButton } from "@/components/consultation-popup";
import styles from "./mobile-contact-nav.module.css";

const phone = "0903897555";
const messengerUrl = "https://m.me/noithattreem.toamhoanhao";

const labels = {
  vi: [
    "Liên hệ nhanh",
    "Báo giá",
    "Chat Zalo",
    "Gọi điện",
    "Messenger",
    "Nhắn tin SMS",
  ],
  en: ["Quick contact", "Get a quote", "Zalo", "Call us", "Messenger", "SMS"],
  ja: ["お問い合わせ", "お見積もり", "Zalo", "電話", "Messenger", "SMS"],
} as const;

export function MobileContactNav() {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  if (segment === "admin") return null;
  const copy = labels[segment === "en" || segment === "ja" ? segment : "vi"];

  return (
    <>
      <div className={styles.spacer} aria-hidden="true" />
      <nav className={styles.bar} aria-label={copy[0]}>
        <ConsultationButton className={styles.item}>
          <FilePenLine className={styles.icon} aria-hidden="true" />
          <span>{copy[1]}</span>
        </ConsultationButton>
        <a
          className={styles.item}
          href={`https://zalo.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`${styles.icon} ${styles.zalo}`} aria-hidden="true">
            Zalo
          </span>
          <span>{copy[2]}</span>
        </a>
        <a
          className={`${styles.item} ${styles.call}`}
          href={`tel:${phone}`}
          aria-label={`${copy[3]} 0903 897 555`}
        >
          <span className={styles.callCircle}>
            <PhoneCall aria-hidden="true" />
          </span>
          <span>{copy[3]}</span>
        </a>
        <a
          className={styles.item}
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={styles.icon}
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M18 3C9.7 3 3 9.1 3 16.7c0 4.3 2.2 8.2 5.7 10.7V33l5.2-2.9c1.3.3 2.7.5 4.1.5 8.3 0 15-6.2 15-13.9S26.3 3 18 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="m8.5 21 8-9 5 4 6-4-8 9-5-4-6 4Z" fill="currentColor" />
          </svg>
          <span>{copy[4]}</span>
        </a>
        <a className={styles.item} href={`sms:${phone}`}>
          <MessageSquareMore className={styles.icon} aria-hidden="true" />
          <span>{copy[5]}</span>
        </a>
      </nav>
    </>
  );
}
