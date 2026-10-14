import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import { ConsultationProvider } from "@/components/consultation-popup";
import { siteLocales } from "@/lib/locale";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * Root layout phải là component tĩnh thì Next.js mới prerender được toàn site.
 *
 * Trước đây layout đọc locale qua `headers()` (do proxy set `x-site-locale`),
 * và vì `headers()` là dynamic API nên nó kéo TOÀN BỘ cây route sang chế độ
 * render theo yêu cầu: 60/60 route dynamic, 0 trang được prerender — kể cả
 * ~460 trang bài viết/dự án vốn là nội dung tĩnh.
 *
 * Nay `lang` được đặt đúng ngay trước lần vẽ đầu tiên bằng script đồng bộ.
 * Danh sách locale lấy trực tiếp từ `siteLocales` nên không lệch khi thêm
 * ngôn ngữ mới. `ConsultationProvider` cũng đã tự suy locale từ `usePathname()`.
 *
 * Giới hạn còn lại: HTML tĩnh ban đầu luôn có `lang="vi"`. Với 8 trang chủ
 * ngôn ngữ khác, `lang` đúng ngay khi script chạy (trước khi vẽ). Crawler không
 * thực thi JavaScript sẽ thấy `lang="vi"`; muốn khắc phục triệt để cần tách
 * route group với root layout riêng cho từng ngôn ngữ.
 */
const localeAlternation = siteLocales
  .filter((locale) => locale !== "vi")
  .join("|");

const localeSyncScript = `(function(){try{var s=location.pathname.split("/")[1]||"";if(/${localeAlternation}/.test(s)){document.documentElement.lang=s}}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Tổ Ấm Hoàn Hảo",
  description: "Thiết kế, thi công và sản xuất nội thất trọn gói.",
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "108x108",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "108x108",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Script id="locale-lang-sync" strategy="beforeInteractive">
          {localeSyncScript}
        </Script>
        <ConsultationProvider>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
