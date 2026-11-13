"use client";

import React from "react";
import { STUDIO_INFRASTRUCTURE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ShieldCheck, HardDrive, Wifi, Zap, Cpu, Award } from "lucide-react";

export function StudioSpecs() {
  const { lang, t } = useLanguage();

  const getIcon = (code: string) => {
    switch (code) {
      case "01": return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "02": return <Wifi className="w-5 h-5 text-emerald-400" />;
      case "03": return <HardDrive className="w-5 h-5 text-emerald-400" />;
      case "04": return <Award className="w-5 h-5 text-emerald-400" />;
      case "05": return <Zap className="w-5 h-5 text-emerald-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="breakdown" className="py-28 border-t border-neutral-900 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
                {lang === "pt" ? "RIGOR TÉCNICO & FOTORREALISMO" : "TECHNICAL RIGOR & PHOTOREALISM"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              {lang === "pt" ? "VFX BREAKDOWN." : "VFX BREAKDOWN."}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
            {lang === "pt"
              ? "Comparações interativas de extração em tela verde e remoção complexa de cabos e marcadores."
              : "Interactive comparisons of green screen extraction and seamless rig/marker cleanup."}
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="mb-24">
          <BeforeAfterSlider />
        </div>

        {/* Studio Infrastructure & Zero Downtime (Why Hire Me) */}
        <div id="pipeline" className="pt-10">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-850 pb-5">
            <div>
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {lang === "pt" ? "POR QUE ME CONTRATAR" : "WHY HIRE ME"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {lang === "pt" ? "INFRAESTRUTURA & ZERO DOWNTIME" : "STUDIO INFRASTRUCTURE & ZERO DOWNTIME"}
              </h3>
            </div>
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
              {lang === "pt" ? "ENTREGAS SEM DESCULPAS" : "PRODUCTION-READY PIPELINE"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDIO_INFRASTRUCTURE.map((item) => (
              <div
                key={item.code}
                className="group p-7 rounded-2xl bg-neutral-950/70 border border-neutral-850 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-5">
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-emerald-700/60 transition-colors">
                      {getIcon(item.code)}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-2 py-0.5 rounded font-bold">
                      {item.highlight}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                    {item.title[lang]}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
