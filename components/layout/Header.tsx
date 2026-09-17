"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Route } from "next";

const NAV: { href: Route; label: string }[] = [
  { href: "/candles", label: "Candles" },
  { href: "/collections", label: "Collections" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on navigation — otherwise it stays open over the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-sand/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-(--spacing-gutter) py-5">
        <Link
          href="/"
          aria-label="AURVI home"
          className="font-display text-xl font-normal tracking-[0.35em]"
        >
          AURVI
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-rule text-eyebrow ${
                  active ? "text-terracotta" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-eyebrow md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line px-(--spacing-gutter) pb-8 pt-6 md:hidden"
      >
        <nav className="flex flex-col gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-2xl font-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
