"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang } = useLanguage();

  const brands = [
    {
      name: "NETFLIX",
      logo: (
        <svg className="h-5 w-auto fill-current text-white" viewBox="0 0 111 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M105.06 14.28L111 30c-1.75-.25-4.5-.56-6.38-.85l-3.32-9.04-3.35 8.44c-1.7-.2-3.8-.4-5.32-.52l6.23-15.02L93.08 0h6.14l2.9 8.27L105.15 0h6.05l-6.14 14.28zM83.4 8.78v19.4c-1.8-.1-3.66-.23-5.5-.33V.01h5.5v8.77zM73.47 4.96v23.01c-1.9-.1-3.7-.17-5.53-.25V4.96h-6.2V.01h17.9v4.95h-6.17zM54.08 27.6c-1.8-.07-3.64-.13-5.5-.18V.01h5.5V27.6zM38.8 19.34v8.03c-1.85-.04-3.67-.06-5.5-.07V.01h16.2v4.8h-10.7v7.35h9.45v4.63h-9.45v2.55zm-16.73 7.8c-1.82 0-3.65.02-5.5.06l-.03-27.2h5.5l.03 27.14zM5.5 0H0v30c1.8-.06 3.65-.13 5.5-.23V0z"/>
        </svg>
      ),
    },
    {
      name: "COCA-COLA",
      logo: (
        <span className="font-serif italic font-bold tracking-tight text-lg text-white whitespace-nowrap">
          Coca-Cola
        </span>
      ),
    },
    {
      name: "DISNEY",
      logo: (
        <span className="font-serif font-black tracking-normal text-lg text-white whitespace-nowrap">
          Disney
        </span>
      ),
    },
    {
      name: "SANTANDER",
      logo: (
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-4h2v4zm0-6h-2V7h2v4zm-4-2h-2V7h2v2z"/>
          </svg>
          <span className="font-sans font-bold tracking-tight text-sm text-white uppercase">
            Santander
          </span>
        </div>
      ),
    },
    {
      name: "MRBEAST",
      logo: (
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="font-sans font-black tracking-wider text-sm text-white uppercase">
            MRBEAST
          </span>
        </div>
      ),
    },
    {
      name: "TIKTOK AWARDS",
      logo: (
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.07 1.1 1.95 2.15 2.22 1.14.33 2.45.06 3.32-.77.7-.62 1.07-1.55 1.09-2.48.04-4.87.02-9.74.02-14.61z"/>
          </svg>
          <span className="font-sans font-bold tracking-tight text-xs text-white uppercase">
            AWARDS
          </span>
        </div>
      ),
    },
    {
      name: "HYUNDAI",
      logo: (
        <div className="w-8 h-5 rounded-[50%] border border-white flex items-center justify-center">
          <span className="font-sans italic font-black text-xs text-white">H</span>
        </div>
      ),
    },
    {
      name: "XIAOMI",
      logo: (
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="font-mono font-black text-xs text-white px-1.5 py-0.5 rounded border border-white">mi</span>
          <span className="font-sans font-medium text-xs tracking-wider text-white">Xiaomi</span>
        </div>
      ),
    },
    {
      name: "DELL",
      logo: (
        <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
          <span className="font-sans font-black text-[10px] text-white">DELL</span>
        </div>
      ),
    },
    {
      name: "AUDIBLE",
      logo: (
        <span className="font-sans font-bold tracking-tight text-base text-white lowercase whitespace-nowrap">
          audible
        </span>
      ),
    },
  ];

  return (
    <section className="w-full py-16 border-y border-neutral-900/80 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            {lang === "pt" ? "EXPERIÊNCIA COM MARCAS GLOBAIS & ESTÚDIOS" : "TRUSTED BY GLOBAL BRANDS & CREATORS"}
          </span>
        </div>

        {/* Brand logos & names grid (10 brands) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-6 items-center justify-items-center">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center text-center gap-2 p-2 rounded-xl transition-all duration-300 hover:bg-neutral-900/40 w-full"
            >
              {/* Logo container with fixed height and no wrap */}
              <div className="h-7 flex items-center justify-center opacity-45 group-hover:opacity-100 transition-opacity duration-300">
                {b.logo}
              </div>
              {/* Brand Name Below */}
              <span className="font-mono text-[9px] tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase font-medium whitespace-nowrap">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
