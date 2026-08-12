import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { contactInfo, footerColumns, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#f7f1e9] px-5 py-12 text-[#3a3329] sm:px-8">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.45fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo-to-am-hoan-hao-old.png"
              alt="Logo Tổ Ấm Hoàn Hảo"
              width={58}
              height={58}
              className="h-12 w-12 object-contain"
            />
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.08em]">
                Tổ Ấm
              </span>
              <span className="block text-sm font-bold uppercase tracking-[0.08em]">
                Hoàn Hảo
              </span>
            </span>
          </Link>

          <p className="mt-5 max-w-[220px] text-xs leading-6 text-[#756b5d]">
            Thiết kế · Thi công · Sản xuất nội thất trọn gói
          </p>

          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item}
                href="#"
                aria-label={`Kênh mạng xã hội ${item}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9baa1] text-xs font-bold text-[#8b6b3d] transition hover:border-[#9b7743] hover:text-[#6f522b]"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="mt-8 text-xs text-[#756b5d]">
            © 2024 Tổ Ấm Hoàn Hảo. All rights reserved.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-[#2d281f]">
              {column.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#6a6257] transition hover:text-[#9a732f]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-[#2d281f]">
            Liên hệ
          </h2>
          <ul className="mt-5 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.text} className="flex gap-3">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#9a733e]"
                  />
                  <span className="text-sm leading-6 text-[#6a6257]">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1320px] justify-end">
        <a
          href="#"
          aria-label="Lên đầu trang"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b99767] text-[#9a733e] transition hover:bg-[#efe4d5]"
        >
          <ArrowUp aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
