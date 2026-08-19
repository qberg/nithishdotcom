"use client";

import { tabItems } from "@/data/bioData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export default function TabNavigation() {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabItems.length);
    while (tabRefs.current.length < tabItems.length) {
      tabRefs.current.push(null);
    }
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = tabItems.findIndex((tab) => tab.href === pathname);
      if (
        activeIndex !== -1 &&
        tabRefs.current[activeIndex] &&
        navRef.current
      ) {
        const activeTab = tabRefs.current[activeIndex];
        const navRect = navRef.current.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();

        setDimensions({
          width: tabRect.width,
          left: tabRect.left - navRect.left,
        });
      }
    };

    requestAnimationFrame(updateIndicator);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      const activeIndex = tabItems.findIndex((tab) => tab.href === pathname);
      if (
        activeIndex !== -1 &&
        tabRefs.current[activeIndex] &&
        navRef.current
      ) {
        const activeTab = tabRefs.current[activeIndex];
        const navRect = navRef.current.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();

        setDimensions({
          width: tabRect.width,
          left: tabRect.left - navRect.left,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Site sections"
      className="relative inline-flex w-full max-w-fit items-center gap-0.5 rounded-full border border-border/70 bg-muted/40 p-1 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-sm dark:border-border/80 dark:bg-muted/25 dark:shadow-[0_1px_2px_rgba(0,0,0,0.35),0_8px_24px_rgba(0,0,0,0.2)]"
    >
      {dimensions.width > 0 && (
        <motion.div
          className="absolute top-1 bottom-1 rounded-full bg-foreground shadow-[0_2px_8px_rgba(0,0,0,0.12)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          initial={false}
          animate={{
            width: dimensions.width,
            left: dimensions.left,
          }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 32,
          }}
        />
      )}

      {tabItems.map((tab, index) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative z-10 rounded-full px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-all duration-200",
              isActive
                ? "text-background"
                : "text-muted-foreground hover:bg-background/55 hover:text-foreground hover:shadow-sm dark:hover:bg-background/10",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
