"use client";

import React, { useState, useRef, useCallback } from "react";
import { BREAKDOWN_COMPARISONS } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { SlidersHorizontal, Layers, CheckCircle2, Sparkles, Wand2 } from "lucide-react";

export function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<"greenscreen" | "cleanup">("greenscreen");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const item = BREAKDOWN_COMPARISONS[activeTab];

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
    <div className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-2xl overflow-hidden p-5 sm:p-8 backdrop-blur-sm shadow-2xl">
      {/* Header Info & Switcher Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-neutral-850">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded">
              INTERACTIVE WIPE
            </span>
            <span className="text-xs font-mono text-neutral-400">{item.project}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {item.title[lang]}
          </h3>
        </div>

        {/* Buttons replacing tags: Green Screen vs Cleanup */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-neutral-900 border border-neutral-800 self-start sm:self-auto">
          <button
            onClick={() => {
              setActiveTab("greenscreen");
              setSliderPosition(50);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all uppercase ${
              activeTab === "greenscreen"
                ? "bg-emerald-950/70 text-emerald-300 border border-emerald-700/80 font-bold shadow-lg"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>GREEN SCREEN</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("cleanup");
              setSliderPosition(50);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all uppercase ${
              activeTab === "cleanup"
                ? "bg-amber-950/70 text-amber-300 border border-amber-700/80 font-bold shadow-lg"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Wand2 className="w-3.5 h-3.5 text-amber-400" />
            <span>CLEANUP</span>
          </button>
        </div>
      </div>

      {/* Interactive Wipe Canvas (With data-cursor="drag") */}
      <div
        data-cursor="drag"
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden select-none border border-neutral-800 group shadow-2xl cursor-ew-resize"
      >
        {/* Layer 2: Final Comp (Right / Underneath) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={item.afterImage}
            alt={item.afterLabel[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-neutral-700/80 px-3 py-1.5 rounded-full text-[11px] font-mono text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {item.afterLabel[lang]}
          </div>
        </div>

        {/* Layer 1: Raw Plate (Left / Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={item.beforeImage}
            alt={item.beforeLabel[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-neutral-700/80 px-3 py-1.5 rounded-full text-[11px] font-mono text-amber-400 font-medium">
            <Layers className="w-3.5 h-3.5" />
            {item.beforeLabel[lang]}
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle Pill */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-white shadow-2xl flex items-center justify-center text-white">
            <SlidersHorizontal className="w-4 h-4 rotate-90" />
          </div>
        </div>

        {/* Instruction overlay on bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="bg-black/70 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-neutral-400 px-3.5 py-1 rounded-full uppercase tracking-[0.2em]">
            {t("breakdown.dragInstruction")}
          </span>
        </div>
      </div>

      {/* Description caption */}
      <p className="mt-5 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
        {item.description[lang]}
      </p>
    </div>
  );
}
