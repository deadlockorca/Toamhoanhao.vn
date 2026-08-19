"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { NavigationItem } from "@/data/site";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItem(null);
  };

  return (
    <div className="ml-auto xl:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        title={isOpen ? "Đóng menu" : "Mở menu"}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center text-[#332d24] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
      >
        {isOpen ? (
          <X aria-hidden="true" className="h-7 w-7" strokeWidth={1.6} />
        ) : (
          <Menu aria-hidden="true" className="h-7 w-7" strokeWidth={1.6} />
        )}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[#d8cbb9] bg-[#fbf7f1] px-5 pb-10 pt-4 shadow-[0_18px_40px_rgba(51,43,32,0.12)] sm:px-8"
        >
          <nav aria-label="Menu mobile" className="mx-auto max-w-[720px]">
            {items.map((item) => {
              const isExpanded = expandedItem === item.label;

              return (
                <div key={item.label} className="border-b border-[#ded4c4]">
                  <div className="flex min-h-14 items-center gap-3">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex min-h-14 flex-1 items-center text-sm font-bold uppercase tracking-[0.03em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedItem(isExpanded ? null : item.label)
                        }
                        className="flex min-h-14 flex-1 items-center text-left text-sm font-bold uppercase tracking-[0.03em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                      >
                        {item.label}
                      </button>
                    )}

                    {item.children ? (
                      <button
                        type="button"
                        aria-label={`${isExpanded ? "Thu gọn" : "Mở rộng"} ${item.label}`}
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedItem(isExpanded ? null : item.label)
                        }
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[#756b5d] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-5 w-5 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          strokeWidth={1.6}
                        />
                      </button>
                    ) : null}
                  </div>

                  {item.children && isExpanded ? (
                    <div className="pb-4 pl-4">
                      {item.children.map((child) => (
                        <div
                          key={child.label}
                          className="border-l border-[#d8cbb9] pl-4"
                        >
                          {child.href ? (
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="block py-2.5 text-sm font-semibold leading-5 text-[#4e463a] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <p className="py-2.5 text-sm font-semibold leading-5 text-[#4e463a]">
                              {child.label}
                            </p>
                          )}

                          {child.children ? (
                            <div className="pb-2 pl-3">
                              {child.children.map((grandChild) =>
                                grandChild.href ? (
                                  <Link
                                    key={grandChild.label}
                                    href={grandChild.href}
                                    onClick={closeMenu}
                                    className="block py-1.5 text-xs leading-5 text-[#756b5d] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                                  >
                                    {grandChild.label}
                                  </Link>
                                ) : (
                                  <p
                                    key={grandChild.label}
                                    className="py-1.5 text-xs leading-5 text-[#756b5d]"
                                  >
                                    {grandChild.label}
                                  </p>
                                ),
                              )}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
