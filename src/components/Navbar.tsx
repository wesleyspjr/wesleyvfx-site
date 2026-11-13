"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-5 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border border-neutral-800 shadow-2xl"
            : "bg-neutral-950/40 backdrop-blur-sm border border-neutral-900/60"
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
        <div className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest text-neutral-400">
          <a href="#reels" className="hover:text-white transition-colors">
            {t("nav.reels")}
          </a>
          <a href="#works" className="hover:text-white transition-colors">
            {t("nav.works")}
          </a>
          <a href="#breakdown" className="hover:text-white transition-colors">
            {t("nav.breakdown")}
          </a>
          <a href="#pipeline" className="hover:text-white transition-colors">
            {t("nav.pipeline")}
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            {t("nav.contact")}
          </a>
        </div>

        {/* Flags & CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Flag Switcher (US & BR) */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-900/90 border border-neutral-800">
            {/* US Flag */}
            <button
              onClick={() => setLang("en")}
              title="English (US)"
              aria-label="Switch to English"
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                lang === "en"
                  ? "bg-neutral-700/80 shadow-md ring-1 ring-white/40 opacity-100 scale-105"
                  : "opacity-45 hover:opacity-80"
              }`}
            >
              <svg className="w-4 h-4 rounded-full overflow-hidden" viewBox="0 0 640 480">
                <g fillRule="evenodd">
                  <path fill="#bd3d44" d="M0 0h640v480H0z"/>
                  <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203.1h640M0 277h640M0 350.8h640M0 424.6h640"/>
                  <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
                  <circle cx="128" cy="129" r="60" fill="#fff" opacity="0.3"/>
                </g>
              </svg>
            </button>

            {/* Brazil Flag */}
            <button
              onClick={() => setLang("pt")}
              title="Português (Brasil)"
              aria-label="Mudar para Português"
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                lang === "pt"
                  ? "bg-neutral-700/80 shadow-md ring-1 ring-white/40 opacity-100 scale-105"
                  : "opacity-45 hover:opacity-80"
              }`}
            >
              <svg className="w-4 h-4 rounded-full overflow-hidden" viewBox="0 0 640 480">
                <g fillRule="evenodd" strokeWidth="1pt">
                  <path fill="#009c3b" d="M0 0h640v480H0z"/>
                  <path fill="#ffdf00" d="M320 40l280 200-280 200L40 240z"/>
                  <circle cx="320" cy="240" r="110" fill="#002776"/>
                  <path fill="#fff" d="M220 220a115 115 0 0 0 195 40 125 125 0 0 1-195-40z"/>
                </g>
              </svg>
            </button>
          </div>

          <a
            href={PROFILE.contacts.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            {t("nav.resume")} <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center text-xs font-mono font-medium tracking-widest text-black bg-white hover:bg-neutral-200 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all"
          >
            {t("nav.getInTouch")}
          </a>
        </div>
      </nav>
    </header>
  );
}
