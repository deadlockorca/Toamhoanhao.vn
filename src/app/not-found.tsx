import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Không tìm thấy trang | Tổ Ấm Hoàn Hảo",
  description:
    "Trang bạn tìm không tồn tại hoặc đã được di chuyển. Xem tiếp các dự án và mẫu thiết kế của Tổ Ấm Hoàn Hảo.",
};

const suggestions = [
  { href: "/du-an", label: "Dự án đã thực hiện" },
  { href: "/mau-thiet-ke", label: "Mẫu thiết kế" },
  {
    href: "/bao-gia/thiet-ke-thi-cong-noi-that",
    label: "Báo giá thiết kế & thi công",
  },
  { href: "/lien-he", label: "Liên hệ tư vấn" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f1e9]">
      <SiteHeader />

      <div className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a47b45]">
            Lỗi 404
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#211d17] sm:text-5xl">
            Không tìm thấy trang
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#62584b]">
            Đường dẫn này không tồn tại hoặc nội dung đã được di chuyển. Bạn có
            thể bắt đầu lại từ một trong các mục dưới đây.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-[#3f4a35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333d2b]"
            >
              Về trang chủ
            </Link>
            {suggestions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[#ded4c4] px-6 py-3 text-sm font-semibold text-[#211d17] transition hover:border-[#a47b45]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
