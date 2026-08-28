import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ConsultationProvider } from "@/components/consultation-popup";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConsultationProvider>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
