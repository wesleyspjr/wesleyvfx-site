"use client";

import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clapperboard } from "lucide-react";

export function FilmCreditsCarousel() {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

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

  // Quadruple for smooth continuous infinite loop
  const marqueeItems = [...realCredits, ...realCredits, ...realCredits, ...realCredits];

  // Auto-scroll loop + Mouse control handling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.5; // Smooth cinematic continuous speed

    const step = () => {
      if (!isDragging) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += half;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  // Mouse Drag Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    containerRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch Drag Events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    containerRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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

      {/* Interactive Draggable & Auto-scrolling Track - Centered, ~5 posters in view with smooth edge fade */}
      <div className="relative max-w-7xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_180px,_black_calc(100%-180px),transparent_100%)]">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex items-center gap-7 overflow-x-hidden py-3 no-scrollbar select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-56 sm:w-64 aspect-[2/3] rounded-2xl overflow-hidden bg-neutral-950 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 flex-shrink-0 shadow-2xl cursor-pointer hover:scale-105"
            >
              {/* Blurred Ambient Fill behind to prevent harsh letterboxing while preserving full poster without crop */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-md opacity-30 scale-110 pointer-events-none"
                style={{ backgroundImage: `url('${item.poster}')` }}
              />

              {/* Poster Image - Contained and properly scaled without cutting headers or titles */}
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
