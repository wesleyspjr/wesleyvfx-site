"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const dragTranslate = useRef(0);

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

  // Duplicating exactly once gives the seamless 50% loop for CSS transform: translateX(-50%)
  const doubleLogos = [...clientLogos, ...clientLogos];

  // Helper to extract current translateX when mouse down initiates drag
  const getComputedTranslateX = (el: HTMLElement) => {
    const style = window.getComputedStyle(el);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.pageX;
    currentTranslate.current = getComputedTranslateX(el);
    dragTranslate.current = currentTranslate.current;
    el.style.animationPlayState = "paused";
    el.style.transform = `translate3d(${dragTranslate.current}px, 0, 0)`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const deltaX = e.pageX - startX.current;
    const nextTranslate = currentTranslate.current + deltaX;
    dragTranslate.current = nextTranslate;
    trackRef.current.style.transform = `translate3d(${nextTranslate}px, 0, 0)`;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const el = trackRef.current;
    if (!el) return;
    el.style.animationPlayState = "running";
    el.style.transform = "";
  };

  // Touch Handlers for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX;
    currentTranslate.current = getComputedTranslateX(el);
    dragTranslate.current = currentTranslate.current;
    el.style.animationPlayState = "paused";
    el.style.transform = `translate3d(${dragTranslate.current}px, 0, 0)`;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.touches[0].pageX - startX.current;
    const nextTranslate = currentTranslate.current + deltaX;
    dragTranslate.current = nextTranslate;
    trackRef.current.style.transform = `translate3d(${nextTranslate}px, 0, 0)`;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const el = trackRef.current;
    if (!el) return;
    el.style.animationPlayState = "running";
    el.style.transform = "";
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

      {/* GPU Accelerated CSS Marquee with Smooth Edge Fade */}
      <div
        className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_160px,_black_calc(100%-160px),transparent_100%)]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className={`flex items-center gap-6 py-3 w-max select-none will-change-transform animate-marquee-ultraslow ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {doubleLogos.map((item, idx) => (
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
