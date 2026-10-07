import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { ConsultationProvider } from "@/components/consultation-popup";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConsultationProvider>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
