import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto grid h-20 max-w-[1320px] grid-cols-[auto_1fr_auto] items-center px-5 sm:px-8">
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
          className="hidden translate-x-8 items-center justify-center gap-4 px-8 xl:flex"
        >
          {navigation.map((item) => (
            <div key={item.label} className="group relative py-7">
              {item.href ? (
                <Link
                  href={item.href}
                  className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap px-1 text-[12px] font-bold uppercase tracking-[0.02em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition group-hover:rotate-180"
                      strokeWidth={1.8}
                    />
                  ) : null}
                </Link>
              ) : (
                <a
                  href="#"
                  className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap px-1 text-[12px] font-bold uppercase tracking-[0.02em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition group-hover:rotate-180"
                      strokeWidth={1.8}
                    />
                  ) : null}
                </a>
              )}

              {item.children ? (
                <div
                  className={`invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 border border-[#ded4c4] bg-[#fbf7f1]/98 text-left opacity-0 shadow-[0_18px_50px_rgba(51,43,32,0.14)] backdrop-blur transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                    item.label === "Dịch vụ"
                      ? "w-[660px] p-5"
                      : item.label === "Mẫu thiết kế"
                        ? "w-[420px] p-4"
                        : "w-[300px] p-4"
                  }`}
                >
                  <div
                    className={
                      item.label === "Dịch vụ"
                        ? "grid gap-x-5 gap-y-4 md:grid-cols-3"
                        : "grid gap-1"
                    }
                  >
                    {item.children.map((child) => (
                      <div key={child.label} className="min-w-0">
                        {child.href ? (
                          <Link
                            href={child.href}
                            className={`flex items-center justify-between gap-3 outline-none transition hover:bg-[#f0e6d8] hover:text-[#8a6536] focus-visible:ring-2 focus-visible:ring-[#b98938] ${
                              item.label === "Dịch vụ"
                                ? "min-h-8 px-2 py-1.5 text-[13px] font-bold text-[#2f2a22]"
                                : "min-h-9 px-3 py-2 text-sm font-semibold text-[#2f2a22]"
                            }`}
                          >
                            <span>{child.label}</span>
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className={`flex items-center justify-between gap-3 outline-none transition hover:bg-[#f0e6d8] hover:text-[#8a6536] focus-visible:ring-2 focus-visible:ring-[#b98938] ${
                              item.label === "Dịch vụ"
                                ? "min-h-8 px-2 py-1.5 text-[13px] font-bold text-[#2f2a22]"
                                : "min-h-9 px-3 py-2 text-sm font-semibold text-[#2f2a22]"
                            }`}
                          >
                            <span>{child.label}</span>
                          </a>
                        )}

                        {child.children ? (
                          <div
                            className={`border-l border-[#ded4c4] ${
                              item.label === "Dịch vụ"
                                ? "mb-1 ml-2 pl-2"
                                : "mb-2 ml-3 pl-3"
                            }`}
                          >
                            {child.children.map((grandChild) => (
                              <a
                                key={grandChild.label}
                                href="#"
                                className={`block text-[#756b5d] outline-none transition hover:text-[#8a6536] focus-visible:ring-2 focus-visible:ring-[#b98938] ${
                                  item.label === "Dịch vụ"
                                    ? "px-2 py-1 text-[11px] leading-4"
                                    : "px-2 py-1.5 text-xs leading-5"
                                }`}
                              >
                                {grandChild.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div aria-hidden="true" className="hidden min-w-[178px] xl:block" />
      </div>
    </header>
  );
}
