"use client";

import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

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

  // Repeat for continuous seamless wrapping
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  // Auto-scroll loop + Mouse control handling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.45; // Gentle majestic speed (slower pace as requested)

    const step = () => {
      if (!isDragging) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += half;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  // Mouse Drag Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    containerRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch Drag Events for Mobile / Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    containerRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full py-16 border-y border-neutral-900/80 bg-black/40 overflow-hidden relative select-none">
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

      {/* Interactive Draggable & Auto-scrolling Track with Smooth Edge Fade */}
      <div className="relative max-w-7xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex items-center gap-6 overflow-x-hidden py-3 no-scrollbar select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {marqueeLogos.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-2 flex-shrink-0"
            >
              {/* 2X LARGER SQUARE CARD */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 aspect-square rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/50 flex items-center justify-center p-4 transition-all duration-300 shadow-xl group-hover:bg-white/[0.08] group-hover:scale-105 pointer-events-none">
                <img
                  src={item.file}
                  alt={item.name}
                  draggable={false}
                  className={`max-h-16 max-w-[95px] w-auto h-auto object-contain transition-all duration-300 ${
                    item.isWhite
                      ? "filter brightness-200 opacity-90 group-hover:opacity-100"
                      : "filter grayscale brightness-125 opacity-70 group-hover:filter-none group-hover:opacity-100"
                  }`}
                />
              </div>

              {/* Brand Name Below */}
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-purple-300 transition-colors whitespace-nowrap font-medium pointer-events-none">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
