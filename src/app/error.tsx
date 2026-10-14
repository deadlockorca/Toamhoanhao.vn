"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Ghi log ra console phía client để còn đối chiếu với log server qua `digest`.
    console.error("Lỗi khi render trang:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f1e9] px-6 py-20">
      <div className="w-full max-w-xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a47b45]">
          Đã xảy ra lỗi
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[#211d17] sm:text-4xl">
          Không tải được trang này
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#62584b]">
          Hệ thống gặp sự cố khi hiển thị nội dung. Bạn thử tải lại trang, hoặc
          quay về trang chủ và tiếp tục xem các dự án khác.
        </p>

        {error.digest ? (
          <p className="mt-4 text-xs text-[#8a7f70]">
            Mã lỗi để đối chiếu: <code>{error.digest}</code>
          </p>
        ) : null}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-[#3f4a35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333d2b]"
          >
            Thử lại
          </button>
          <Link
            href="/"
            className="rounded-full border border-[#ded4c4] px-6 py-3 text-sm font-semibold text-[#211d17] transition hover:border-[#a47b45]"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
