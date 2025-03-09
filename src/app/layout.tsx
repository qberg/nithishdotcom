import type { Metadata } from "next";
import "./globals.css";
import { hankenGrotesk } from "@/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import Profile from "@/components/sections/profile";
import { Main } from "@/components/layout";
import TabNaviagtion from "@/components/tab-navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nithish Sampath | CV",
  description:
    "Product Manager | Fintech & SaaS | Building Scalable Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hankenGrotesk.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Main>
            <Profile />
            <Suspense
              fallback={
                <div className="h-10 w-full bg-muted animate-pulse rounded-full" />
              }
            >
              <TabNaviagtion />
            </Suspense>
            <main className="mt-12">{children}</main>
          </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
