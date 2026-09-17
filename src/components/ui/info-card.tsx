"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedLink } from "./animated-link";

interface InfoCardProps {
  duration: string;
  location: string;
  didThis: string;
  where: string;
  theirSite?: string;
  highlights?: string[];
}

export default function InfoCard({
  duration,
  location,
  didThis,
  where,
  theirSite,
  highlights,
}: InfoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasHighlights = Boolean(highlights?.length);

  return (
    <article className="group/exp mt-8 border-b border-border/50 pb-8 last:border-b-0">
      {hasHighlights ? (
        <div
          className="w-full max-w-full outline-none focus-within:ring-1 focus-within:ring-lavender/40"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div
            tabIndex={0}
            className="inline-flex max-w-full cursor-default items-center gap-1.5 font-medium text-foreground"
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          >
            {didThis}
            <ChevronDown
              aria-hidden
              className={cn(
                "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                isOpen && "rotate-180",
              )}
            />
          </div>

          <div className="mt-1.5 text-sm text-muted-foreground sm:text-base">
            {theirSite ? (
              <>
                <AnimatedLink
                  href={theirSite}
                  isExternal
                  showIcon
                  className="w-fit text-lavender"
                >
                  {where}
                </AnimatedLink>
                {" · "}
                {duration} · {location}
              </>
            ) : (
              <>
                {where} · {duration} · {location}
              </>
            )}
          </div>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-200",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-muted-foreground">
                {highlights?.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="font-medium text-foreground">{didThis}</div>
          <div className="mt-1.5 text-sm text-muted-foreground sm:text-base">
            {theirSite ? (
              <>
                <AnimatedLink
                  href={theirSite}
                  isExternal
                  showIcon
                  className="w-fit text-lavender"
                >
                  {where}
                </AnimatedLink>
                {" · "}
                {duration} · {location}
              </>
            ) : (
              <>
                {where} · {duration} · {location}
              </>
            )}
          </div>
        </>
      )}
    </article>
  );
}
