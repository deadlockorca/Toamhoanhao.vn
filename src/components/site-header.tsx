import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/mobile-navigation";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-[#cfc2b0]/55 bg-[#fbf7f1]/92 backdrop-blur-sm">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex h-20 items-center xl:h-[76px]">
          <Link
            href="/"
            className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#b98938]"
          >
            <Image
              src="/logo-to-am-hoan-hao-old.png"
              alt="Logo Tổ Ấm Hoàn Hảo"
              width={54}
              height={54}
              priority
              className="h-[46px] w-[46px] shrink-0 object-contain xl:h-11 xl:w-11"
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

          <div className="ml-12 hidden min-w-0 border-l border-[#d8cbb9] pl-12 xl:block">
            <p className="whitespace-nowrap text-[23px] font-bold leading-tight text-[#3d3933]">
              Tổ Ấm Hoàn Hảo - Thi công xây dựng, nội thất tận tâm
            </p>
            <p className="mt-1.5 flex items-center gap-2 whitespace-nowrap text-[14px] italic leading-tight text-[#6f675d]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 bg-[#b98938]"
              />
              Cam kết chuẩn thiết kế, chuẩn thi công, chuẩn tiến độ. Tư vấn
              thiết kế hợp kinh phí, báo giá tốt nhất vào việc luôn!
            </p>
          </div>

          <MobileNavigation items={navigation} />
        </div>

        <nav
          aria-label="Menu chính"
          className="hidden h-11 items-center justify-center gap-7 border-t border-[#cfc2b0]/55 xl:flex"
        >
          {navigation.map((item) => (
            <div key={item.label} className="group relative flex h-full items-center">
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

      </div>
    </header>
  );
}
