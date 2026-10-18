import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { ConsultationProvider } from "@/components/consultation-popup";
import { MobileContactNav } from "@/components/mobile-contact-nav";
import { siteBaseUrl } from "@/lib/locale";
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
 * ⚠️ KHÔNG đặt `lang` động ở đây. Đã thử một lần bằng script
 * `beforeInteractive` sửa `document.documentElement.lang` trước khi hydrate,
 * nhưng cách đó gây lỗi hydration: script chạy trước React nên lúc hydrate DOM
 * đã là `lang="ja"` trong khi React render `lang="vi"` → mismatch, và React
 * KHÔNG tự vá lại thuộc tính đó.
 *
 * Cách đang dùng: `lang="vi"` cố định (đúng cho ~492/500 trang là tiếng Việt).
 * Với 8 trang chủ ngôn ngữ khác, `ConsultationProvider` tự suy locale từ
 * `usePathname()` và đồng bộ `document.documentElement.lang` trong `useEffect`
 * — chạy SAU hydration nên không gây mismatch.
 *
 * Giới hạn còn lại: HTML tĩnh ban đầu của 8 trang đó có `lang="vi"`. Crawler
 * không thực thi JavaScript sẽ thấy `lang="vi"`; muốn khắc phục triệt để cần
 * tách route group với root layout riêng cho từng ngôn ngữ.
 */

export const metadata: Metadata = {
  /**
   * `metadataBase` là bắt buộc để Next.js dựng URL tuyệt đối cho canonical,
   * OpenGraph và Twitter card. Thiếu nó thì ảnh chia sẻ sẽ trỏ sai.
   */
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Tổ Ấm Hoàn Hảo",
    template: "%s | Tổ Ấm Hoàn Hảo",
  },
  description:
    "Thiết kế, thi công và sản xuất nội thất trọn gói. Tư vấn miễn phí, báo giá minh bạch, thi công đúng tiến độ.",
  applicationName: "Tổ Ấm Hoàn Hảo",
  openGraph: {
    type: "website",
    siteName: "Tổ Ấm Hoàn Hảo",
    locale: "vi_VN",
    url: siteBaseUrl,
    title: "Tổ Ấm Hoàn Hảo | Thiết kế và thi công nội thất trọn gói",
    description:
      "Thiết kế, thi công và sản xuất nội thất trọn gói. Tư vấn miễn phí, báo giá minh bạch, thi công đúng tiến độ.",
    images: [
      {
        url: "/images/trang-chu/nha-pho-dep-1.jpg",
        width: 2048,
        height: 1152,
        alt: "Không gian nội thất do Tổ Ấm Hoàn Hảo thiết kế và thi công",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổ Ấm Hoàn Hảo | Thiết kế và thi công nội thất trọn gói",
    description:
      "Thiết kế, thi công và sản xuất nội thất trọn gói. Tư vấn miễn phí, báo giá minh bạch.",
    images: ["/images/trang-chu/nha-pho-dep-1.jpg"],
  },
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
        <ConsultationProvider>
          {children}
          <MobileContactNav />
        </ConsultationProvider>
      </body>
    </html>
  );
}
