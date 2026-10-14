"use client";

import { useEffect } from "react";

/**
 * Boundary cho lỗi xảy ra ngay trong root layout. File này phải tự render
 * <html> và <body> vì nó thay thế toàn bộ cây layout khi được kích hoạt.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Lỗi nghiêm trọng ở root layout:", error);
  }, [error]);

  return (
    <html lang="vi">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f1e9",
          color: "#211d17",
          fontFamily: "system-ui, sans-serif",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 520, textAlign: "center" }}>
          <h1 style={{ fontSize: 28, margin: 0 }}>Website đang gặp sự cố</h1>
          <p style={{ marginTop: 16, lineHeight: 1.6, color: "#62584b" }}>
            Chúng tôi không tải được giao diện. Vui lòng thử lại sau ít phút.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 28,
              padding: "12px 24px",
              borderRadius: 999,
              border: "none",
              background: "#3f4a35",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Thử lại
          </button>
        </div>
      </body>
    </html>
  );
}
