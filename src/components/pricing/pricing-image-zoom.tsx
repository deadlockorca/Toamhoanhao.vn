"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { PricingArticleImage } from "@/data/pricing-articles";
import styles from "./pricing-article.module.css";

export function PricingImageZoom({
  image,
  caption,
  zoomLabel,
  closeLabel,
}: {
  image: PricingArticleImage;
  caption: string;
  zoomLabel: string;
  closeLabel: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <figure className={styles.tableCard}>
      <figcaption>
        <strong>{caption}</strong>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          {zoomLabel}
        </button>
      </figcaption>
      <button
        type="button"
        className={styles.tablePreview}
        onClick={() => setOpen(true)}
        aria-label={`${zoomLabel}: ${caption}`}
        aria-haspopup="dialog"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 760px) 100vw, 790px"
        />
      </button>
      <dialog
        ref={dialogRef}
        className={styles.imageDialog}
        aria-label={caption}
        onClose={(event) => {
          // Ignore a queued close event if React has already reopened the dialog.
          if (!event.currentTarget.open) setOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className={styles.dialogToolbar}>
          <span>{caption}</span>
          <form method="dialog">
            <button type="submit" aria-label={closeLabel}>
              <X size={22} aria-hidden="true" />
            </button>
          </form>
        </div>
        <div className={styles.dialogImage}>
          {open && (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="95vw"
              unoptimized
            />
          )}
        </div>
      </dialog>
    </figure>
  );
}
