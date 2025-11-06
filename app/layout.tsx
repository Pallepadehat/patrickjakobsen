import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patrick Jakobsen | Full Stack Developer",
  description: "Full stack developer student at Ordbogen A/S, passionate about creating modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <script src="https://29309c57.orvian-support-agent.pages.dev/embed.iife.js" data-organization-id="org_34VmGCckheqaZ0KkFip7GpXA9x1" data-auto-crawl="true" data-crawl-depth="2" async />
        {children}
      </body>
    </html>
  );
}
