"use client";

import React, { useState, useRef, useCallback } from "react";
import { BreakdownPair } from "@/data/portfolio";
import { SlidersHorizontal, Layers, CheckCircle2 } from "lucide-react";

interface BeforeAfterSliderProps {
  item: BreakdownPair;
}

export function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <div className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-2xl overflow-hidden p-4 sm:p-6 backdrop-blur-sm">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-neutral-800/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
              INTERACTIVE WIPE
            </span>
            <span className="text-xs font-mono text-neutral-400">{item.project}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            {item.title}
          </h3>
        </div>

        {/* Tools Badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Wipe Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-neutral-800 group shadow-2xl"
      >
        {/* Layer 2: Final Comp (Right / Underneath) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={item.afterImage}
            alt={item.afterLabel}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-neutral-700/80 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {item.afterLabel}
          </div>
        </div>

        {/* Layer 1: Raw Plate (Left / Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={item.beforeImage}
            alt={item.beforeLabel}
            className="w-full h-full object-cover filter contrast-90 brightness-95"
          />
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-neutral-700/80 px-3 py-1 rounded-full text-[11px] font-mono text-amber-400 font-medium">
            <Layers className="w-3.5 h-3.5" />
            {item.beforeLabel}
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle Pill */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-white shadow-xl flex items-center justify-center text-white">
            <SlidersHorizontal className="w-4 h-4 rotate-90" />
          </div>
        </div>

        {/* Instruction overlay on bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="bg-black/60 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-neutral-400 px-3 py-1 rounded-full uppercase tracking-widest">
            ← Arraste para comparar →
          </span>
        </div>
      </div>

      {/* Description caption */}
      <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
