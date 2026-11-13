"use client";

import React from "react";
import { WORKFLOW_SPECS, BREAKDOWN_ITEMS } from "@/data/portfolio";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Cpu, Terminal, Eye, Layers } from "lucide-react";

export function WorkflowSpecs() {
  return (
    <section id="breakdown" className="py-24 border-t border-neutral-900 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                PRECISÃO TÉCNICA & ARTÍSTICA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              VFX BREAKDOWN & PIPELINE
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans">
            Composição fotorrealista orientada a nós (node-based) e design de movimento para produções de alto calibre.
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="mb-20">
          <BeforeAfterSlider item={BREAKDOWN_ITEMS[0]} />
        </div>

        {/* Pipeline & Technical Capabilities */}
        <div id="workflow" className="pt-10">
          <div className="mb-8 flex items-center justify-between border-b border-neutral-850 pb-4">
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              PIPELINE & CORE CAPABILITIES
            </span>
            <span className="text-[11px] font-mono text-neutral-500 uppercase">
              NODE-BASED & MOTION SYSTEMS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKFLOW_SPECS.map((spec) => (
              <div
                key={spec.code}
                className="group p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                    <span className="text-emerald-400 font-semibold">[{spec.code}]</span>
                    <span className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-[10px] text-neutral-300">
                      {spec.engine}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {spec.desc}
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
