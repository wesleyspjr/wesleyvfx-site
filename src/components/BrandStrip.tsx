"use client";

import React, { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStrip() {
  const { lang, t } = useLanguage();
  const isPt = lang === "pt";

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const singleWidthRef = useRef(0);

  // Client Logos (Original colors with transparent background)
  const clientLogos = [
    { name: "Netflix", file: "/client-logos/processed/Netflix.png" },
    { name: "Rock in Rio", file: "/client-logos/processed/Rock in Rio.png" },
    { name: "Loud", file: "/client-logos/processed/Loud.png" },
    { name: "Santander", file: "/client-logos/processed/Santander.png" },
    { name: "WWE / Topps", file: "/client-logos/processed/WWE.png" },
    { name: "Audible", file: "/client-logos/processed/Audible.png" },
    { name: "Coca-Cola", file: "/client-logos/processed/Coca.png" },
    { name: "Disney", file: "/client-logos/processed/Disney.png" },
    { name: "MrBeast", file: "/client-logos/processed/MrBeast.png" },
    { name: "Nescau", file: "/client-logos/processed/Nescau.png" },
    { name: "Hyundai", file: "/client-logos/processed/Hyundai.png" },
    { name: "Globo", file: "/client-logos/processed/Globo.png" },
    { name: "BIC", file: "/client-logos/processed/Bic.png" },
    { name: "Dell", file: "/client-logos/processed/Dell.png" },
    { name: "Reserva", file: "/client-logos/processed/Reserva.png" },
    { name: "CIF", file: "/client-logos/processed/Cif.png" },
    { name: "Away", file: "/client-logos/processed/Away.png" },
  ];

  // 4x duplication guarantees plenty of buffer for seamless wrap-around at any screen size
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Calculate width of one repetition (1/4 of total scrollWidth)
    singleWidthRef.current = el.scrollWidth / 4;

    let animId: number;
    let lastTime = performance.now();
    const speed = 40; // Pixels per second (gentle cinematic pace)

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isDraggingRef.current) {
        // Auto scroll at steady speed
        offsetRef.current -= speed * delta;

        // Wrap around seamlessly
        const loopWidth = singleWidthRef.current || (el.scrollWidth / 4);
        if (loopWidth > 0) {
          if (offsetRef.current <= -loopWidth) {
            offsetRef.current += loopWidth;
          } else if (offsetRef.current > 0) {
            offsetRef.current -= loopWidth;
          }
        }

        el.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX;
    startOffsetRef.current = offsetRef.current;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const deltaX = e.pageX - startXRef.current;
    let newOffset = startOffsetRef.current + deltaX;

    const loopWidth = singleWidthRef.current || (trackRef.current.scrollWidth / 4);
    if (loopWidth > 0) {
      while (newOffset <= -loopWidth) newOffset += loopWidth;
      while (newOffset > 0) newOffset -= loopWidth;
    }

    offsetRef.current = newOffset;
    trackRef.current.style.transform = `translate3d(${newOffset}px, 0, 0)`;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
    }
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX;
    startOffsetRef.current = offsetRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const deltaX = e.touches[0].pageX - startXRef.current;
    let newOffset = startOffsetRef.current + deltaX;

    const loopWidth = singleWidthRef.current || (trackRef.current.scrollWidth / 4);
    if (loopWidth > 0) {
      while (newOffset <= -loopWidth) newOffset += loopWidth;
      while (newOffset > 0) newOffset -= loopWidth;
    }

    offsetRef.current = newOffset;
    trackRef.current.style.transform = `translate3d(${newOffset}px, 0, 0)`;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="w-full py-16 border-y border-neutral-900/80 bg-black/40 overflow-hidden relative select-none">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-36 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-36 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400">
          {t("brands.title")}
        </span>
      </div>

      {/* Viewport with CSS side fade overlays */}
      <div
        className="relative w-full overflow-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Fade Gradient (Agressive vignette to frame ~6 logos) */}
        <div className="absolute top-0 left-0 w-36 sm:w-64 lg:w-[460px] xl:w-[500px] h-full bg-gradient-to-r from-[#04040a] via-[#04040a]/90 via-50% to-transparent z-10 pointer-events-none" />

        {/* Right Fade Gradient (Agressive vignette to frame ~6 logos) */}
        <div className="absolute top-0 right-0 w-36 sm:w-64 lg:w-[460px] xl:w-[500px] h-full bg-gradient-to-l from-[#04040a] via-[#04040a]/90 via-50% to-transparent z-10 pointer-events-none" />

        {/* Continuous GPU-translated Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 py-3 w-max select-none will-change-transform"
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
                  className="max-h-16 max-w-[95px] w-auto h-auto object-contain transition-all duration-500 filter grayscale opacity-60 contrast-125 brightness-110 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105"
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
