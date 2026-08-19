"use client";

import { ChevronDown } from "lucide-react";

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
  const hasHighlights = Boolean(highlights?.length);

  return (
    <article className="mt-6 flex flex-col">
      {hasHighlights ? (
        <div className="group/exp w-full max-w-full rounded-sm outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div
            tabIndex={0}
            className="inline-flex max-w-full cursor-default items-center gap-1.5 font-semibold"
          >
            {didThis}
            <ChevronDown
              aria-hidden
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover/exp:rotate-180 group-focus-within/exp:rotate-180"
            />
          </div>

          <div className="mt-1 text-muted-foreground">
            {theirSite ? (
              <>
                <AnimatedLink
                  href={theirSite}
                  isExternal
                  showIcon
                  className="w-fit"
                >
                  {where}
                </AnimatedLink>
                {" | "}
                {duration} | {location}
              </>
            ) : (
              <>
                {where} | {duration} | {location}
              </>
            )}
          </div>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 group-hover/exp:grid-rows-[1fr] group-focus-within/exp:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-muted-foreground">
                {highlights?.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="font-semibold">{didThis}</div>
          <div className="text-muted-foreground">
            {theirSite ? (
              <>
                <AnimatedLink
                  href={theirSite}
                  isExternal
                  showIcon
                  className="w-fit"
                >
                  {where}
                </AnimatedLink>
                {" | "}
                {duration} | {location}
              </>
            ) : (
              <>
                {where} | {duration} | {location}
              </>
            )}
          </div>
        </>
      )}
    </article>
  );
}
