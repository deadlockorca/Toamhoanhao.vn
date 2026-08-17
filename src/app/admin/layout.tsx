import type { Metadata } from "next";

import { AdminSidebar } from "@/components/admin/admin-sidebar";

export const metadata: Metadata = {
  title: "Admin | Tổ Ấm Hoàn Hảo",
  description: "Khu vực quản trị nội dung website Tổ Ấm Hoàn Hảo.",
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#1f1b16]">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <AdminSidebar />

        <div className="min-w-0">
          <header className="sticky top-0 z-10 border-b border-[#ded4c4] bg-[#f4efe7]/92 px-5 py-4 backdrop-blur sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#a47b45]">
                  Quản trị nội dung
                </p>
                <h1 className="mt-1 text-xl font-semibold text-[#211d17]">
                  Bảng điều khiển
                </h1>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#62584b]">
                <span className="h-2 w-2 rounded-full bg-[#6f765b]" />
                Database local
              </div>
            </div>
          </header>

          <main className="px-5 py-6 sm:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
