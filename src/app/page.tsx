"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Starfield } from "@/components/Starfield";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStrip } from "@/components/BrandStrip";
import { FilmCreditsCarousel } from "@/components/FilmCreditsCarousel";
import { SelectedProjects } from "@/components/SelectedProjects";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#04040a] text-neutral-100 flex flex-col selection:bg-purple-500 selection:text-white relative">
        <Starfield />
        <Navbar />
        <Hero />
        <BrandStrip />
        <FilmCreditsCarousel />
        <SelectedProjects />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
