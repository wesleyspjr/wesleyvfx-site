"use client";

import React from "react";
import { STUDIO_INFRASTRUCTURE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export function StudioSpecs() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  return (
    <section id="breakdown" className="py-28 border-t border-neutral-900/80 bg-black/40 relative overflow-hidden">
      {/* Cosmic Nebula Glows */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-cyan-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[350px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
                {isPt ? "RIGOR TÉCNICO & FOTORREALISMO" : "TECHNICAL RIGOR & PHOTOREALISM"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              VFX BREAKDOWN.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
            {isPt
              ? "Comparações interativas de extração em tela verde e remoção complexa de cabos e marcadores."
              : "Interactive comparisons of green screen extraction and seamless rig/marker cleanup."}
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="mb-32">
          <BeforeAfterSlider />
        </div>

        {/* WHY HIRE ME - MINIMALIST EDITORIAL (NO BOXES / CARDS) */}
        <div id="pipeline" className="pt-6">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                  {isPt ? "ESTÚDIO & CONFIABILIDADE TÉCNICA" : "STUDIO INFRASTRUCTURE & RELIABILITY"}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase">
                {isPt ? "POR QUE ME CONTRATAR." : "WHY HIRE ME."}
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-sm md:text-right">
              {isPt
                ? "Setup à prova de falhas para produções que não aceitam desculpas."
                : "Fail-safe technical pipeline engineered for zero downtime."}
            </p>
          </div>

          {/* Minimalist Editorial Rows - No Cards / No Boxes */}
          <div className="divide-y divide-neutral-900 border-y border-neutral-900">
            {STUDIO_INFRASTRUCTURE.map((item) => (
              <div
                key={item.code}
                className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-950/40 transition-colors px-2 rounded-lg"
              >
                {/* Left: Number + Title */}
                <div className="flex items-start sm:items-center gap-5 md:w-5/12">
                  <span className="font-mono text-sm sm:text-base text-neutral-600 font-bold group-hover:text-emerald-400 transition-colors">
                    [{item.code}]
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-neutral-100 transition-colors">
                      {item.title[lang]}
                    </h4>
                    <span className="text-[10px] font-mono tracking-wider text-emerald-500/80 uppercase font-medium">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Right: Concise Text */}
                <div className="md:w-7/12 flex items-center justify-between gap-4 pl-10 sm:pl-0">
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-xl">
                    {item.desc[lang]}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-neutral-700 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
