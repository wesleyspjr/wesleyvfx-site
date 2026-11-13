"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  // Processed logos with 100% transparent backgrounds & correct white/original colors
  const clientLogos = [
    { name: "Netflix", file: "/client-logos/processed/Netflix.png", isWhite: true },
    { name: "Rock in Rio", file: "/client-logos/processed/Rock in rio.png", isWhite: true },
    { name: "Loud", file: "/client-logos/processed/Loud.png", isWhite: true },
    { name: "Santander", file: "/client-logos/processed/Santander.png", isWhite: true },
    { name: "WWE / Topps", file: "/client-logos/processed/wwe.png", isWhite: true },
    { name: "Audible", file: "/client-logos/processed/Audible.png", isWhite: true },
    { name: "Coca-Cola", file: "/client-logos/processed/Coca.png" },
    { name: "Disney", file: "/client-logos/processed/Disney.png" },
    { name: "MrBeast", file: "/client-logos/processed/MrBeast.png" },
    { name: "Nescau", file: "/client-logos/processed/Nescau.png" },
    { name: "Hyundai", file: "/client-logos/processed/Hyundai.png" },
    { name: "Globo", file: "/client-logos/processed/Globo.png" },
    { name: "BIC", file: "/client-logos/processed/BIC.png" },
    { name: "Dell", file: "/client-logos/processed/Dell.png" },
    { name: "Reserva", file: "/client-logos/processed/Reserva.png" },
    { name: "CIF", file: "/client-logos/processed/cif.png" },
    { name: "Away", file: "/client-logos/processed/away.png" },
  ];

  // Quadruple for smooth continuous infinite loop with 0% gaps
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-16 border-y border-neutral-900/80 bg-black/40 overflow-hidden relative">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-36 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-36 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400">
          {isPt
            ? "MARCAS & PRODUÇÕES QUE JÁ VEICULARAM TRABALHOS COM MINHA PARTICIPAÇÃO"
            : "BRANDS & PRODUCTIONS FEATURING MY WORK"}
        </span>
      </div>

      {/* Infinite Seamless Marquee - Centered, 8 logos in view, with smooth edge fade and 2x larger scale */}
      <div className="relative max-w-7xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)]">
        <div className="flex items-center gap-6 w-max animate-marquee-ultraslow py-2">
          {marqueeLogos.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
            >
              {/* 2X LARGER SQUARE CARD */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 aspect-square rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/50 flex items-center justify-center p-4 transition-all duration-300 shadow-xl group-hover:bg-white/[0.08] group-hover:scale-105">
                <img
                  src={item.file}
                  alt={item.name}
                  className={`max-h-16 max-w-[95px] w-auto h-auto object-contain transition-all duration-300 ${
                    item.isWhite
                      ? "filter brightness-200 opacity-90 group-hover:opacity-100"
                      : "filter grayscale brightness-125 opacity-70 group-hover:filter-none group-hover:opacity-100"
                  }`}
                />
              </div>

              {/* Brand Name Below */}
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-purple-300 transition-colors whitespace-nowrap font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
