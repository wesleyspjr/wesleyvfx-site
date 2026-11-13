"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Film, Clapperboard, ExternalLink } from "lucide-react";

export function FilmCreditsCarousel() {
  const { lang } = useLanguage();

  const isPt = lang === "pt";

  // Hollywood feature films & streaming productions
  const credits = [
    {
      title: "Netflix Feature Production",
      role: "VFX Compositor",
      year: "2024",
      poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop",
      badge: "FEATURE FILM",
    },
    {
      title: "Hollywood Action Sequence",
      role: "VFX Compositor",
      year: "2024",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
      badge: "THEATRICAL",
    },
    {
      title: "Streaming Original Drama",
      role: "Digital Compositor",
      year: "2023",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
      badge: "STREAMING SERIES",
    },
    {
      title: "Commercial Cinematic Campaign",
      role: "Lead Compositor",
      year: "2024",
      poster: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop",
      badge: "GLOBAL BROADCAST",
    },
    {
      title: "Sci-Fi Anthology Sequence",
      role: "CG Integration & Roto",
      year: "2023",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
      badge: "SCI-FI ANTHOLOGY",
    },
    {
      title: "High-Speed Commercial Spot",
      role: "VFX Cleanup & Matchmove",
      year: "2024",
      poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      badge: "AUTOMOTIVE",
    },
  ];

  return (
    <section className="py-20 border-b border-neutral-900 bg-black/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clapperboard className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
              {isPt ? "CRÉDITOS DE CINEMA & STREAMING" : "FILM & TELEVISION CREDITS"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            {isPt ? "PRODUÇÕES & CRÉDITOS." : "FEATURE PRODUCTIONS & CREDITS."}
          </h2>
        </div>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          {isPt ? "CONFIRA MAIS NO IMDB" : "FULL FILMOGRAPHY ON IMDB"}
        </p>
      </div>

      {/* Smooth Horizontal Carousel Track */}
      <div className="relative w-full overflow-x-auto scrollbar-none pb-4 px-4 sm:px-6">
        <div className="flex items-center gap-5 w-max">
          {credits.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-56 sm:w-64 aspect-[2/3] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-850 hover:border-neutral-600 transition-all duration-300 flex-shrink-0 shadow-2xl cursor-pointer"
            >
              {/* Poster Image */}
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-85 group-hover:brightness-100"
              />

              {/* Bottom Info Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                  {item.badge} · {item.year}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {item.role}
                </p>
              </div>

              {/* Top IMDb tag */}
              <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-800 text-[9px] font-mono font-bold text-amber-400">
                IMDb
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
