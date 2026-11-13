"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-5 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border border-neutral-800 shadow-2xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Name / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="font-mono text-sm tracking-[0.2em] text-white uppercase font-bold">
            WESLEY JUNIOR
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500 uppercase tracking-widest pl-3 border-l border-neutral-800">
            VFX & MOTION
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-neutral-400">
          <a href="#reels" className="hover:text-white transition-colors">
            REEL
          </a>
          <a href="#works" className="hover:text-white transition-colors">
            WORKS
          </a>
          <a href="#breakdown" className="hover:text-white transition-colors">
            BREAKDOWN
          </a>
          <a href="#pipeline" className="hover:text-white transition-colors">
            PIPELINE
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.contacts.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            RESUME <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-xs font-mono font-medium tracking-widest text-black bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>
    </header>
  );
}
