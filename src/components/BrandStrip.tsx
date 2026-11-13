"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { t } = useLanguage();

  const brands = [
    {
      name: "NETFLIX",
      logo: (
        <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 111 30">
          <path d="M105.06 14.28L111 30c-1.75-.25-4.5-.56-6.38-.85l-3.32-9.04-3.35 8.44c-1.7-.2-3.8-.4-5.32-.52l6.23-15.02L93.08 0h6.14l2.9 8.27L105.15 0h6.05l-6.14 14.28zM83.4 8.78v19.4c-1.8-.1-3.66-.23-5.5-.33V.01h5.5v8.77zM73.47 4.96v23.01c-1.9-.1-3.7-.17-5.53-.25V4.96h-6.2V.01h17.9v4.95h-6.17zM54.08 27.6c-1.8-.07-3.64-.13-5.5-.18V.01h5.5V27.6zM38.8 19.34v8.03c-1.85-.04-3.67-.06-5.5-.07V.01h16.2v4.8h-10.7v7.35h9.45v4.63h-9.45v2.55zm-16.73 7.8c-1.82 0-3.65.02-5.5.06l-.03-27.2h5.5l.03 27.14zM5.5 0H0v30c1.8-.06 3.65-.13 5.5-.23V0z"/>
        </svg>
      ),
    },
    {
      name: "COCA-COLA",
      logo: (
        <span className="font-serif italic font-bold tracking-tight text-xl text-white">
          Coca-Cola
        </span>
      ),
    },
    {
      name: "DISNEY",
      logo: (
        <span className="font-serif font-black tracking-normal text-xl text-white">
          Disney
        </span>
      ),
    },
    {
      name: "SANTANDER",
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="font-sans font-bold tracking-tight text-sm text-white uppercase">
            Santander
          </span>
        </div>
      ),
    },
    {
      name: "HYUNDAI",
      logo: (
        <div className="w-7 h-5 rounded-[50%] border border-white flex items-center justify-center">
          <span className="font-sans italic font-black text-xs text-white">H</span>
        </div>
      ),
    },
    {
      name: "XIAOMI",
      logo: (
        <div className="flex items-center gap-1.5">
          <span className="font-mono font-black text-xs text-white px-1.5 py-0.5 rounded border border-white">mi</span>
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
        <span className="font-sans font-bold tracking-tight text-lg text-white lowercase">
          audible
        </span>
      ),
    },
  ];

  return (
    <section className="w-full py-16 border-y border-neutral-900/80 bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            {t("brands.title")}
          </span>
        </div>

        {/* Brand logos & names grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center text-center gap-2.5 p-3 rounded-xl transition-all duration-300 hover:bg-neutral-900/40 w-full"
            >
              {/* Logo */}
              <div className="h-8 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {b.logo}
              </div>
              {/* Brand Name Below */}
              <span className="font-mono text-[10px] tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase font-medium">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
