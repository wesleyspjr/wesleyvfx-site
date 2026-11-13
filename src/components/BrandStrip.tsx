"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  // Processed logos with 100% transparent backgrounds & optimized white/color contrast
  const clientLogos = [
    { name: "Netflix", file: "/client-logos/processed/Netflix.png" },
    { name: "Coca-Cola", file: "/client-logos/processed/Coca.png" },
    { name: "Disney", file: "/client-logos/processed/Disney.png" },
    { name: "MrBeast", file: "/client-logos/processed/MrBeast.png" },
    { name: "Santander", file: "/client-logos/processed/Santander.png" },
    { name: "WWE / Topps", file: "/client-logos/processed/wwe.png" },
    { name: "Hyundai", file: "/client-logos/processed/Hyundai.png" },
    { name: "Globo", file: "/client-logos/processed/Globo.png" },
    { name: "Rock in Rio", file: "/client-logos/processed/Rock in rio.png" },
    { name: "Dell", file: "/client-logos/processed/Dell.png" },
    { name: "Audible", file: "/client-logos/processed/Audible.png" },
    { name: "BIC", file: "/client-logos/processed/BIC.png" },
    { name: "Loud", file: "/client-logos/processed/Loud.png" },
    { name: "Nescau", file: "/client-logos/processed/Nescau.png" },
    { name: "Reserva", file: "/client-logos/processed/Reserva.png" },
    { name: "CIF", file: "/client-logos/processed/cif.png" },
    { name: "Away", file: "/client-logos/processed/away.png" },
  ];

  // Quadruple the array to ensure 0% gap and seamless infinite loop on any resolution
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-20 border-y border-neutral-900/80 bg-[#04040a]/90 overflow-hidden relative">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-36 bg-purple-900/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-36 bg-cyan-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400">
          {isPt
            ? "MARCAS & PRODUÇÕES QUE JÁ VEICULARAM TRABALHOS COM MINHA PARTICIPAÇÃO"
            : "BRANDS & PRODUCTIONS FEATURING MY WORK"}
        </span>
      </div>

      {/* Infinite Seamless Marquee - Never stops on hover, shows original colors on hover */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
        <div className="flex items-center gap-6 w-max animate-marquee">
          {marqueeLogos.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-3 flex-shrink-0 cursor-pointer"
            >
              {/* Square Tile for Each Brand */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 aspect-square rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 flex items-center justify-center p-3.5 transition-all duration-300 shadow-lg group-hover:shadow-purple-950/30 group-hover:bg-white/[0.06]">
                <img
                  src={item.file}
                  alt={item.name}
                  className="max-h-12 max-w-[80px] w-auto h-auto object-contain filter grayscale brightness-125 opacity-70 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Brand Name Below Tile */}
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 group-hover:text-purple-300 transition-colors whitespace-nowrap font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
