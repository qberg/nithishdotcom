import { ReactNode } from "react";

interface CenteredContianerProps {
  children: ReactNode;
}

export function Main({ children }: CenteredContianerProps) {
  return (
    <>
      <main className="flex justify-center px-6 pb-24 pt-8 sm:pb-28 sm:pt-32">
        <article className="w-full max-w-[600px] grow">{children}</article>
      </main>
    </>
  );
}
