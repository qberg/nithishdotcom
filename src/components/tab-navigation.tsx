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

  // Initialize tabRefs array with the correct length
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabItems.length);
    while (tabRefs.current.length < tabItems.length) {
      tabRefs.current.push(null);
    }
  }, []);

  // Update the indicator dimensions when pathname changes
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

    // Small delay to ensure DOM is fully rendered
    requestAnimationFrame(updateIndicator);
  }, [pathname]);

  // Re-calculate on window resize
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
    <div
      ref={navRef}
      className="relative flex items-center justify-between max-w-[60%]"
    >
      {/* Active tab indicator */}
      {dimensions.width > 0 && (
        <motion.div
          className="absolute px-4 py-4 bg-secondary rounded-full"
          initial={false}
          animate={{
            width: dimensions.width,
            left: dimensions.left,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}

      {tabItems.map((tab, index) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={index}
            href={tab.href}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={cn(
              "px-4 py-2 rounded-full text-[16px] transition-colors duration-300 relative",
              isActive ? "bg-secondary text-primary" : "hover:bg-secondary/50",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
