import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { headers } from "next/headers";
import { ConsultationProvider } from "@/components/consultation-popup";
import { isSiteLocale } from "@/lib/locale";
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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const requestedLocale = (await headers()).get("x-site-locale");
  const locale = requestedLocale && isSiteLocale(requestedLocale) ? requestedLocale : "vi";
  return (
    <html
      lang={locale}
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConsultationProvider locale={locale}>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
