"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStrip } from "@/components/BrandStrip";
import { SelectedProjects } from "@/components/SelectedProjects";
import { StudioSpecs } from "@/components/StudioSpecs";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col selection:bg-white selection:text-black">
        <CustomCursor />
        <Navbar />
        <Hero />
        <BrandStrip />
        <SelectedProjects />
        <StudioSpecs />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
