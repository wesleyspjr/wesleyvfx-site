"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Play, Film, Sparkles, Volume2 } from "lucide-react";
import { ReelModal } from "./ReelModal";

export function Hero() {
  const [activeReelKey, setActiveReelKey] = useState<"compositing" | "motion">("compositing");
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  const activeReel = PROFILE.reels[activeReelKey];

  return (
    <section id="hero" className="relative min-h-[96vh] pt-32 pb-24 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden isolate">
      {/* Background High-Definition Original Action VFX Video (No blue halo, no banding) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.70] contrast-110 saturate-90 scale-100"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Soft linear fade on top/bottom to blend seamlessly with navbar and content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04040a]/70 via-black/20 to-[#04040a]" />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-purple-500/30 backdrop-blur-md mb-8 animate-in fade-in duration-500 shadow-lg shadow-purple-950/20">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-200">
            {t("hero.status")}
          </span>
          <span className="text-neutral-700">·</span>
          <span className="text-[11px] font-mono tracking-wider text-purple-300">
            {t("hero.location")}
          </span>
        </div>

        {/* Big Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase mb-6 max-w-4xl drop-shadow-lg">
          {t("hero.headline")}
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-12 drop-shadow">
          {t("hero.bio")}
        </p>

        {/* Reel Tab Switcher */}
        <div id="reels" className="w-full max-w-4xl flex flex-col items-center">
          <div className="flex items-center p-1 rounded-xl bg-neutral-900/90 border border-neutral-800/90 backdrop-blur-md mb-6">
            <button
              onClick={() => setActiveReelKey("compositing")}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg text-xs font-mono tracking-widest transition-all uppercase ${
                activeReelKey === "compositing"
                  ? "bg-purple-950/70 text-purple-200 shadow-xl border border-purple-600/70 font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Film className="w-3.5 h-3.5 text-cyan-400" />
              {t("hero.compositingReelTab")}
            </button>
            <button
              onClick={() => setActiveReelKey("motion")}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg text-xs font-mono tracking-widest transition-all uppercase ${
                activeReelKey === "motion"
                  ? "bg-purple-950/70 text-purple-200 shadow-xl border border-purple-600/70 font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              {t("hero.motionReelTab")}
            </button>
          </div>

          {/* Reel Display Card */}
          <div
            data-cursor="play"
            onClick={() => setModalOpen(true)}
            className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-purple-500/20 bg-neutral-950 cursor-pointer shadow-2xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-950/30"
          >
            {/* Thumbnail Poster */}
            <img
              src={
                activeReelKey === "compositing"
                  ? "https://img.youtube.com/vi/YTH5TMSUSeM/maxresdefault.jpg"
                  : "https://i.vimeocdn.com/video/1876140406-8a566583eb2c60e1c7a84e5b63aaa9168e645b641194414537dcccc83c1e1b85-d_1280x720"
              }
              alt={activeReel.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-105"
            />

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />

            {/* Top Bar */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-400 pointer-events-none">
              <div className="flex items-center gap-2.5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-neutral-800">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white font-semibold uppercase tracking-wider">
                  {activeReel.title}
                </span>
                <span className="text-neutral-600">/</span>
                <span>{activeReel.year}</span>
              </div>

              <div className="hidden sm:flex items-center gap-3 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-neutral-800 text-[11px]">
                <span className="text-cyan-400 font-mono">
                  {activeReelKey === "compositing" ? "YOUTUBE 4K" : "VIMEO HD"}
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-300 font-mono">{activeReel.duration}</span>
              </div>
            </div>

            {/* Center Play Indicator */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black shadow-2xl">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <span className="mt-4 text-xs font-mono uppercase tracking-[0.25em] text-neutral-300 group-hover:text-white transition-colors bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-neutral-800 flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
                {t("hero.clickToPlay")}
              </span>
            </div>

            {/* Bottom Specs Info */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left pointer-events-none">
              <p className="text-xs font-mono text-neutral-300 bg-black/75 backdrop-blur-md px-4 py-2 rounded-md border border-neutral-800">
                {activeReel.highlight}
              </p>
              <span className="text-[11px] font-mono text-neutral-400 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-md border border-neutral-800 self-start sm:self-auto">
                {t("hero.fullscreen")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reel Modal */}
      <ReelModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        youtubeId={activeReel.youtubeId}
        vimeoId={activeReel.vimeoId}
        title={activeReel.title}
      />
    </section>
  );
}
