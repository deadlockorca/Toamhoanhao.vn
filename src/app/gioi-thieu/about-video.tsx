"use client";
import { introTranslator } from "@/data/introduction";
import { type SiteLocale } from "@/lib/locale";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import styles from "@/app/gioi-thieu/about-page.module.css";

export function AboutVideo({ locale = "vi" }: { locale?: SiteLocale }) {
  const t = introTranslator(locale);
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.videoFrame}>
      {playing ? (
        <iframe
          src="https://www.youtube-nocookie.com/embed/RjcKROhN-EM?autoplay=1&rel=0"
          title={t("videoTitle")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className={styles.videoPoster}
          onClick={() => setPlaying(true)}
          aria-label={t("videoPlay")}
        >
          <Image
            src="/images/gioi-thieu/xuong-san-xuat.png"
            alt={t("workshopAlt")}
            fill
            sizes="(max-width: 800px) 100vw, 650px"
          />
          <span className={styles.videoShade} />
          <span className={styles.videoPlay}>
            <Play size={30} fill="currentColor" aria-hidden="true" />
          </span>
          <span className={styles.videoCaption}>
            <strong>{t("videoWatch")}</strong>
            <small>{t("videoIntro")}</small>
          </span>
          <span className={styles.videoTag}>▶ {t("videoTag")}</span>
        </button>
      )}
    </div>
  );
}
