"use client";

import React from "react";
import { PROFILE } from "@/data/portfolio";

export function BrandStrip() {
  return (
    <section className="w-full py-12 border-y border-neutral-900 bg-neutral-950/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300">
            EXPERIÊNCIA & CLIENTES ATENDIDOS
          </span>
        </div>

        {/* Brand logos / text grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center justify-items-center">
          {PROFILE.brands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 hover:bg-neutral-900/50 w-full"
            >
              <span className="font-mono text-sm font-semibold tracking-wider text-neutral-400 group-hover:text-white transition-colors uppercase">
                {b.name}
              </span>
              <span className="text-[9px] font-mono text-neutral-400 group-hover:text-neutral-300 transition-colors tracking-tight mt-0.5">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
