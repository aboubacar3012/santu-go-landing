"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDarkHero = !solid;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "border-b border-black/[0.06] bg-white/85 text-santu-ink shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.08] dark:bg-zinc-950/88 dark:text-white"
          : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 sm:h-[3.75rem] sm:px-8">
        <Link
          href="/"
          className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
            solid
              ? "text-santu-ink dark:text-white"
              : "text-white drop-shadow-sm"
          }`}
        >
          Santu Go
        </Link>
        <nav
          className="flex items-center"
          aria-label="Navigation principale"
        >
          <ThemeToggle navOnDarkHero={onDarkHero} />
        </nav>
      </div>
    </header>
  );
}
