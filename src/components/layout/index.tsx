import { ReactNode } from "react";

import { personalInfo } from "@/data/bioData";

interface CenteredContianerProps {
  children: ReactNode;
}

export function Main({ children }: CenteredContianerProps) {
  return (
    <main className="relative z-10 flex min-h-screen justify-center px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-14 lg:justify-start lg:px-[12vw] lg:pt-16">
      <article className="flex w-full max-w-3xl grow flex-col">
        <div className="grow">{children}</div>
        <footer className="mt-24 pt-8 text-sm text-muted-foreground/80">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </footer>
      </article>
    </main>
  );
}
