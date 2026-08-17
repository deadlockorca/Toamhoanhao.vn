"use client";

import {
  FolderKanban,
  Home,
  LayoutDashboard,
  LogOut,
  Paintbrush,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminNav = [
  { label: "Tổng quan", href: "/admin", icon: LayoutDashboard },
  { label: "Dự án", href: "/admin/du-an", icon: FolderKanban },
  { label: "Mẫu thiết kế", href: "/admin/mau-thiet-ke", icon: Paintbrush },
  { label: "Cấu hình", href: "#", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-[#ded4c4] bg-[#fbf7f1] px-5 py-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center border border-[#d7c8b2] bg-white text-sm font-bold text-[#a36b21]">
          T
        </span>
        <span>
          <span className="block text-sm font-bold uppercase tracking-[0.08em]">
            Tổ Ấm Hoàn Hảo
          </span>
          <span className="mt-1 block text-xs text-[#817363]">Quản trị nội dung</span>
        </span>
      </Link>

      <nav className="mt-10 space-y-1">
        {adminNav.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href !== "#" &&
            (pathname === item.href || pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex h-11 items-center gap-3 px-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#6f765b] text-white"
                  : "text-[#62584b] hover:bg-[#efe7db] hover:text-[#2d281f]"
              }`}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 border-t border-[#ded4c4] pt-5">
        <Link
          href="/"
          className="flex h-10 items-center gap-3 px-3 text-sm font-medium text-[#62584b] transition hover:bg-[#efe7db] hover:text-[#2d281f]"
        >
          <Home aria-hidden="true" className="h-4 w-4" />
          Xem website
        </Link>
        <button
          type="button"
          className="mt-1 flex h-10 w-full items-center gap-3 px-3 text-left text-sm font-medium text-[#62584b]"
        >
          <LogOut aria-hidden="true" className="h-4 w-4" />
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
