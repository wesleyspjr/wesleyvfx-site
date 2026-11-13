"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";
import { ArrowUpRight, Film, Sparkles, Mail } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 shadow-2xl shadow-black/80"
            : "bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/40"
        }`}
      >
        {/* Brand / Name */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-sm tracking-widest text-neutral-200 group-hover:text-white transition-colors uppercase font-medium">
            WESLEY.VFX
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500 uppercase tracking-wider pl-2 border-l border-neutral-800">
            COMPOSITOR & MOTION
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-neutral-400">
          <a href="#reels" className="hover:text-neutral-100 transition-colors flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-neutral-500" />
            REELS
          </a>
          <a href="#projects" className="hover:text-neutral-100 transition-colors">
            WORKS
          </a>
          <a href="#breakdown" className="hover:text-neutral-100 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500/80" />
            VFX BREAKDOWN
          </a>
          <a href="#workflow" className="hover:text-neutral-100 transition-colors">
            WORKFLOW
          </a>
          <a href="#contact" className="hover:text-neutral-100 transition-colors">
            CONTACT
          </a>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.contacts.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-neutral-400 hover:text-white px-3 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            RESUME (PDF)
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider text-black bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-all shadow-md active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 text-black" />
            <span>START PROJECT</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
