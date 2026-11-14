"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clapperboard } from "lucide-react";

export function FilmCreditsCarousel() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const dragTranslate = useRef(0);

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

  // Duplicating gives the seamless 50% loop for CSS transform: translateX(-50%)
  const doubleCredits = [...realCredits, ...realCredits];

  // Helper to extract current translateX when mouse down initiates drag
  const getComputedTranslateX = (el: HTMLElement) => {
    const style = window.getComputedStyle(el);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.pageX;
    currentTranslate.current = getComputedTranslateX(el);
    dragTranslate.current = currentTranslate.current;
    el.style.animationPlayState = "paused";
    el.style.transform = `translate3d(${dragTranslate.current}px, 0, 0)`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const deltaX = e.pageX - startX.current;
    const nextTranslate = currentTranslate.current + deltaX;
    dragTranslate.current = nextTranslate;
    trackRef.current.style.transform = `translate3d(${nextTranslate}px, 0, 0)`;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const el = trackRef.current;
    if (!el) return;
    el.style.animationPlayState = "running";
    el.style.transform = "";
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX;
    currentTranslate.current = getComputedTranslateX(el);
    dragTranslate.current = currentTranslate.current;
    el.style.animationPlayState = "paused";
    el.style.transform = `translate3d(${dragTranslate.current}px, 0, 0)`;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.touches[0].pageX - startX.current;
    const nextTranslate = currentTranslate.current + deltaX;
    dragTranslate.current = nextTranslate;
    trackRef.current.style.transform = `translate3d(${nextTranslate}px, 0, 0)`;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const el = trackRef.current;
    if (!el) return;
    el.style.animationPlayState = "running";
    el.style.transform = "";
  };

  return (
    <section className="py-24 border-b border-neutral-900/80 bg-black/40 overflow-hidden relative select-none">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-64 bg-purple-900/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-52 bg-cyan-900/20 rounded-full blur-[110px] pointer-events-none" />

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

      {/* GPU Accelerated CSS Marquee with Smooth Edge Fade */}
      <div
        className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_180px,_black_calc(100%-180px),transparent_100%)]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className={`flex items-center gap-7 py-3 w-max select-none will-change-transform animate-marquee-slow ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {doubleCredits.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-56 sm:w-64 aspect-[2/3] rounded-2xl overflow-hidden bg-neutral-950 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 flex-shrink-0 shadow-2xl cursor-pointer hover:scale-105"
            >
              {/* Blurred Ambient Fill behind */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-md opacity-30 scale-110 pointer-events-none"
                style={{ backgroundImage: `url('${item.poster}')` }}
              />

              {/* Poster Image */}
              <img
                src={item.poster}
                alt={item.title}
                draggable={false}
                className="relative z-0 w-full h-full object-contain filter brightness-95 group-hover:brightness-105 pointer-events-none transition-transform duration-700"
              />

              {/* Bottom Info Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 z-10 pointer-events-none">
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
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-800 text-[9px] font-mono font-bold text-amber-400 shadow-md z-10 pointer-events-none">
                IMDb
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
