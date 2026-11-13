import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wesley Junior — VFX Compositor & Motion Designer",
  description:
    "Portfólio de Wesley Junior: Compositor de Efeitos Visuais (Nuke) e Motion Designer (After Effects). Atuação em publicidade global e produções de Hollywood.",
  keywords: [
    "Wesley Junior",
    "Wesley VFX",
    "VFX Compositor",
    "Motion Designer",
    "Nuke",
    "After Effects",
    "Hollywood VFX",
    "Compositing Reel",
    "Visual Effects Brazil",
  ],
  openGraph: {
    title: "Wesley Junior — VFX Compositor & Motion Designer",
    description:
      "VFX Compositor (Nuke) & Motion Designer (After Effects) com mais de 5 anos de experiência entregando para Netflix, Santander, Coca-Cola e estúdios internacionais.",
    url: "https://www.wesleyvfx.com.br",
    siteName: "Wesley VFX",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-neutral-100 min-h-screen selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
