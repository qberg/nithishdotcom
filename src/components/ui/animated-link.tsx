"use client";

import type React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  isExternal?: boolean;
}

export const AnimatedLink = ({
  href,
  children,
  className,
  showIcon = true,
  isExternal,
}: AnimatedLinkProps) => {
  const isExternalLink =
    isExternal ?? (href.startsWith("http") || href.startsWith("mailto:"));
  const content = (
    <>
      <span className="relative inline-block">
        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-foreground/70 transition-all duration-300 ease-out group-hover:w-full"></span>

        {/* Text content */}
        <span className="relative">{children}</span>
      </span>

      {/* Icon with animation */}
      {showIcon && (
        <span className="ml-1 inline-flex transform transition-all duration-300 ease-out group-hover:translate-x-1">
          {isExternalLink ? (
            <ExternalLink
              size={14}
              className="transition-all duration-300 opacity-70 group-hover:opacity-100"
            />
          ) : (
            <ArrowRight
              size={14}
              className="transition-all duration-300 opacity-70 group-hover:opacity-100"
            />
          )}
        </span>
      )}
    </>
  );

  return isExternalLink ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center text-foreground no-underline transition-colors duration-300 hover:text-foreground/90",
        className,
      )}
    >
      {content}
    </a>
  ) : (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-foreground no-underline transition-colors duration-300 hover:text-foreground/90",
        className,
      )}
    >
      {content}
    </Link>
  );
};
