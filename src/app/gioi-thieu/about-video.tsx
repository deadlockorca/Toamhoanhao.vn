"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import styles from "./about-page.module.css";

export function AboutVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.videoFrame}>
      {playing ? (
        <iframe
          src="https://www.youtube-nocookie.com/embed/RjcKROhN-EM?autoplay=1&rel=0"
          title="Giới thiệu nhà máy sản xuất nội thất của Tổ Ấm Hoàn Hảo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className={styles.videoPoster}
          onClick={() => setPlaying(true)}
          aria-label="Phát video giới thiệu nhà máy sản xuất nội thất"
        >
          <Image
            src="/images/gioi-thieu/xuong-san-xuat.png"
            alt="Không gian xưởng sản xuất nội thất"
            fill
            sizes="(max-width: 800px) 100vw, 650px"
          />
          <span className={styles.videoShade} />
          <span className={styles.videoPlay}><Play size={30} fill="currentColor" aria-hidden="true" /></span>
          <span className={styles.videoCaption}><strong>Xem video giới thiệu</strong><small>Tổ Ấm Hoàn Hảo trong vài phút</small></span>
          <span className={styles.videoTag}>▶ Video</span>
        </button>
      )}
    </div>
  );
}
