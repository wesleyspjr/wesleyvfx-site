"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { Play, Sparkles, MapPin, Film, Layers, CheckCircle } from "lucide-react";
import { ReelModal } from "./ReelModal";

export function Hero() {
  const [activeReelKey, setActiveReelKey] = useState<"compositing" | "motion">("compositing");
  const [modalOpen, setModalOpen] = useState(false);

  const activeReel = PROFILE.reels[activeReelKey];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
      {/* Background glow & subtle cinematic grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-neutral-800/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md mb-8 animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">
            {PROFILE.statusText}
          </span>
          <span className="text-neutral-700">|</span>
          <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
            <MapPin className="w-3 h-3 text-neutral-500" />
            {PROFILE.location}
          </span>
        </div>

        {/* Main Title & Tagline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase">
          WESLEY JUNIOR
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-10">
          <span className="text-neutral-200 font-medium">VFX Compositor & Motion Designer.</span> Mais de 5 anos entregando composição fotorrealista e estética visual de alto impacto para publicidade global e produções de cinema.
        </p>

        {/* Reel Tab Switcher */}
        <div id="reels" className="w-full max-w-4xl flex flex-col items-center">
          <div className="flex items-center p-1 rounded-xl bg-neutral-900/80 border border-neutral-800 mb-5">
            <button
              onClick={() => setActiveReelKey("compositing")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase ${
                activeReelKey === "compositing"
                  ? "bg-neutral-800 text-white shadow-lg border border-neutral-700/80 font-medium"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Film className="w-3.5 h-3.5 text-emerald-400" />
              01 // Compositing Reel
            </button>
            <button
              onClick={() => setActiveReelKey("motion")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase ${
                activeReelKey === "motion"
                  ? "bg-neutral-800 text-white shadow-lg border border-neutral-700/80 font-medium"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              02 // Motion Design Reel
            </button>
          </div>

          {/* Reel Display Card / Player Screen */}
          <div
            onClick={() => setModalOpen(true)}
            className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer shadow-2xl transition-all duration-300 hover:border-neutral-700 hover:shadow-emerald-950/20"
          >
            {/* Thumbnail Poster */}
            <img
              src={
                activeReelKey === "compositing"
                  ? "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop"
              }
              alt={activeReel.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-80 contrast-105"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

            {/* Top Reel Header Bar (Reference Monitor Style) */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-400 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-neutral-800">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white font-medium uppercase tracking-wider">
                  {activeReel.title}
                </span>
                <span className="text-neutral-600">/</span>
                <span>{activeReel.year}</span>
              </div>

              <div className="hidden sm:flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-neutral-800 text-[11px]">
                <span className="text-emerald-400 font-mono">4K UHD</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-300 font-mono">REC 709</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-300 font-mono">{activeReel.duration}</span>
              </div>
            </div>

            {/* Center Play Button with Pulse */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black shadow-2xl">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <span className="mt-4 text-xs font-mono uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-neutral-800">
                CLIQUE PARA ASSISTIR
              </span>
            </div>

            {/* Bottom Specs Info */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left pointer-events-none">
              <p className="text-xs font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-neutral-800">
                {activeReel.highlight}
              </p>
              <span className="text-[11px] font-mono text-neutral-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-neutral-800 self-start sm:self-auto">
                PRESS PLAY
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
        title={activeReel.title}
      />
    </section>
  );
}
