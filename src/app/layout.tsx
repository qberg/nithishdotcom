import type { Metadata } from "next";
import "./globals.css";
import { hankenGrotesk, displaySerif } from "@/fonts";
import ConstellationBackground from "@/components/constellation-background";
import { Main } from "@/components/layout";
import SiteNav from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Nithish Sampath",
  description:
    "Product Manager | Fintech, SaaS & AI Integrations | Data-Driven Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${displaySerif.variable} antialiased`}
      >
        <ConstellationBackground />
        <Main>
          <SiteNav />
          {children}
        </Main>
      </body>
    </html>
  );
}
