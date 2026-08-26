"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { NavigationItem } from "@/data/site";

type DesktopNavigationProps = {
  items: NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openItem) {
      return;
    }

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setOpenItem(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenItem(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [openItem]);

  return (
    <nav
      ref={navigationRef}
      aria-label="Menu chính"
      className="hidden h-11 items-center justify-center gap-7 border-t border-[#cfc2b0]/55 xl:flex"
    >
      {items.map((item, itemIndex) => {
        const isOpen = openItem === item.label;
        const menuId = `desktop-menu-${itemIndex}`;

        return (
          <div
            key={item.label}
            className="relative flex h-full items-center"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse" && item.children) {
                setOpenItem(item.label);
              }
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") {
                setOpenItem(null);
              }
            }}
          >
            {item.children ? (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => setOpenItem(isOpen ? null : item.label)}
                className={`inline-flex h-8 items-center gap-1.5 whitespace-nowrap px-1 text-[12px] font-bold uppercase tracking-[0.02em] outline-none transition focus-visible:ring-2 focus-visible:ring-[#b98938] ${
                  isOpen ? "text-[#9a732f]" : "text-[#2f2a22] hover:text-[#9a732f]"
                }`}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.8}
                />
              </button>
            ) : item.href ? (
              <Link
                href={item.href}
                className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap px-1 text-[12px] font-bold uppercase tracking-[0.02em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex h-8 cursor-default items-center gap-1.5 whitespace-nowrap px-1 text-[12px] font-bold uppercase tracking-[0.02em] text-[#2f2a22]">
                {item.label}
              </span>
            )}

            {item.children ? (
              <div
                id={menuId}
                className={`absolute left-1/2 top-full -translate-x-1/2 border border-[#ded4c4] bg-[#fbf7f1]/98 p-4 text-left shadow-[0_18px_50px_rgba(51,43,32,0.14)] backdrop-blur transition duration-200 ${
                  item.label === "Mẫu thiết kế" ? "w-[420px]" : "w-[300px]"
                } ${
                  isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                <div className="grid gap-1">
                  {item.children.map((child) =>
                    child.href ? (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenItem(null)}
                        className="flex min-h-9 items-center px-3 py-2 text-sm font-semibold text-[#2f2a22] outline-none transition hover:bg-[#f0e6d8] hover:text-[#8a6536] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <span
                        key={child.label}
                        className="flex min-h-9 items-center px-3 py-2 text-sm font-semibold text-[#756b5d]"
                      >
                        {child.label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
