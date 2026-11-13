"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clapperboard } from "lucide-react";

export function FilmCreditsCarousel() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  // Official IMDb Credits with local poster images from public/imdb-posters/
  const realCredits = [
    {
      title: "Lear Rex",
      subtitle: "Al Pacino · Jessica Chastain",
      role: isPt ? "Artista de Efeitos Visuais" : "Visual Effects Artist",
      year: "2025/2026",
      poster: "/imdb-posters/Lear Rex.jpg",
      badge: "HOLLYWOOD FEATURE",
    },
    {
      title: "King Ivory: Vício das Ruas",
      subtitle: "Festival de Veneza 2024 · Ben Foster",
      role: isPt ? "Artista de Efeitos Visuais" : "Visual Effects Artist",
      year: "2024",
      poster: "/imdb-posters/King ivory.jpg",
      badge: "VENICE FILM FESTIVAL",
    },
    {
      title: "Passinho: O Ritmo do Sonho",
      subtitle: "Disney+ Original Series",
      role: isPt ? "Efeitos Visuais & Motion" : "Visual Effects & Motion",
      year: "2025",
      poster: "/imdb-posters/Passinho.jpg",
      badge: "DISNEY+ ORIGINAL",
    },
    {
      title: "Gracias Padre",
      subtitle: "Feature Film",
      role: isPt ? "Artista de Efeitos Visuais" : "Visual Effects Artist",
      year: "2024/2025",
      poster: "/imdb-posters/Gracias Padre.jpg",
      badge: "FEATURE PRODUCTION",
    },
    {
      title: "O Shaolin do Sertão 2",
      subtitle: "Direção: Halder Gomes",
      role: isPt ? "Efeitos Visuais" : "Visual Effects",
      year: "2026",
      poster: "/imdb-posters/Shaolin.jpg",
      badge: "THEATRICAL RELEASE",
    },
    {
      title: "O Último Rodeio",
      subtitle: "Produção Nacional",
      role: isPt ? "Efeitos Visuais" : "Visual Effects",
      year: "2025",
      poster: "/imdb-posters/The last rodeo.jpg",
      badge: "DRAMA SERIES",
    },
  ];

  // Quadruple the array to ensure completely continuous infinite marquee with ZERO gaps
  const marqueeItems = [...realCredits, ...realCredits, ...realCredits, ...realCredits];

  return (
    <section className="py-24 border-b border-neutral-900/80 bg-[#04040a]/80 overflow-hidden relative">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-48 bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-40 bg-cyan-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clapperboard className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
              {isPt ? "CRÉDITOS OFICIAIS DO IMDB" : "OFFICIAL IMDB FILMOGRAPHY"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            {isPt ? "FILMES & SÉRIES." : "FEATURE PRODUCTIONS & SERIES."}
          </h2>
        </div>
        <a
          href="https://www.imdb.com/pt/name/nm15395029/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-purple-300 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest bg-purple-950/40 border border-purple-800/60 px-4 py-2 rounded-full shadow-lg hover:border-purple-500"
        >
          <span>{isPt ? "VER NO IMDB PRO" : "VIEW ON IMDB"}</span>
        </a>
      </div>

      {/* Infinite Seamless Auto Marquee Track (Never stops on hover, zero gap) */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
        <div className="flex items-center gap-6 w-max animate-marquee-slow">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-52 sm:w-60 aspect-[2/3] rounded-2xl overflow-hidden bg-neutral-950 border border-purple-500/20 hover:border-purple-400/80 transition-all duration-300 flex-shrink-0 shadow-2xl cursor-pointer"
            >
              {/* Poster Image */}
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Bottom Info Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
                  {item.badge} · {item.year}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug mb-0.5 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] font-sans text-neutral-300 mb-1 line-clamp-1">
                  {item.subtitle}
                </p>
                <p className="text-[10px] font-mono text-neutral-400">
                  {item.role}
                </p>
              </div>

              {/* Top IMDb tag */}
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-800 text-[9px] font-mono font-bold text-amber-400 shadow-md">
                IMDb
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
