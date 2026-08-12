import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex min-w-[178px] items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#b98938]"
        >
          <Image
            src="/logo-to-am-hoan-hao-old.png"
            alt="Logo Tổ Ấm Hoàn Hảo"
            width={54}
            height={54}
            priority
            className="h-[46px] w-[46px] shrink-0 object-contain"
          />
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.1em] text-[#28231c]">
              Tổ Ấm Hoàn Hảo
            </span>
            <span className="mt-1 block whitespace-nowrap text-[10px] text-[#8b7e69]">
              Thiết kế - Thi công - Sản xuất nội thất
            </span>
          </span>
        </Link>

        <nav
          aria-label="Menu chính"
          className="hidden flex-1 items-center justify-end gap-6 pl-10 xl:flex"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.02em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
