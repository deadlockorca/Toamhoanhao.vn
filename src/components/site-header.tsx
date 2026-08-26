import Image from "next/image";
import Link from "next/link";

import { DesktopNavigation } from "@/components/desktop-navigation";
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

        <DesktopNavigation items={navigation} />
      </div>
    </header>
  );
}
