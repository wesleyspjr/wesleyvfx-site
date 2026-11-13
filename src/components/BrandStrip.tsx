"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  // Logos placed by the user in public/client-logos/
  const clientLogos = [
    { name: "Netflix", file: "/client-logos/Netflix.png" },
    { name: "Coca-Cola", file: "/client-logos/Coca.jpg" },
    { name: "Disney", file: "/client-logos/Disney.jpg" },
    { name: "MrBeast", file: "/client-logos/MrBeast.png" },
    { name: "Santander", file: "/client-logos/Santander.png" },
    { name: "WWE / Topps", file: "/client-logos/wwe.png" },
    { name: "Hyundai", file: "/client-logos/Hyundai.png" },
    { name: "Globo", file: "/client-logos/Globo.png" },
    { name: "Rock in Rio", file: "/client-logos/Rock in rio.jpg" },
    { name: "Dell", file: "/client-logos/Dell.jpg" },
    { name: "Audible", file: "/client-logos/Audible.png" },
    { name: "BIC", file: "/client-logos/BIC.png" },
    { name: "Loud", file: "/client-logos/Loud.png" },
    { name: "Nescau", file: "/client-logos/Nescau.png" },
    { name: "Reserva", file: "/client-logos/Reserva.png" },
    { name: "CIF", file: "/client-logos/cif.jpg" },
    { name: "Away", file: "/client-logos/away.png" },
  ];

  // Duplicate for seamless infinite loop
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-16 border-y border-neutral-900/80 bg-neutral-950/60 overflow-hidden relative">
      {/* Subtle cosmic glow accents in the background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-32 bg-purple-900/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-32 bg-cyan-900/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
          {isPt
            ? "MARCAS & PRODUÇÕES QUE JÁ VEICULARAM TRABALHOS COM MINHA PARTICIPAÇÃO"
            : "BRANDS & PRODUCTIONS FEATURING MY WORK"}
        </span>
      </div>

      {/* Infinite Smooth Auto Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center gap-10 w-max animate-marquee">
          {marqueeLogos.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 group flex-shrink-0 cursor-pointer p-2"
            >
              <div className="h-9 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={item.file}
                  alt={item.name}
                  className="max-h-8 max-w-[110px] w-auto object-contain filter grayscale invert brightness-200 contrast-125 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 group-hover:text-purple-300 transition-colors whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
