"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { personalInfo, tabItems } from "@/data/bioData";
import { cn } from "@/lib/utils";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="mb-16 flex flex-wrap items-center justify-between gap-4">
      <nav
        aria-label="Site sections"
        className="flex flex-wrap items-center gap-x-6 gap-y-2"
      >
        <Link
          href="/"
          className={cn(
            "text-sm tracking-wide transition-colors duration-200",
            pathname === "/"
              ? "text-foreground"
              : "text-muted-foreground hover:text-lavender",
          )}
        >
          Home
        </Link>
        {tabItems.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "text-sm tracking-wide transition-colors duration-200",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-lavender",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm tracking-wide text-lavender transition-colors duration-200 hover:text-foreground"
      >
        Resume
      </a>
    </header>
  );
}
