"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";
import { ReelModal } from "./ReelModal";

export function SelectedProjects() {
  const [selectedVideo, setSelectedVideo] = useState<{
    id?: string;
    vimeoId?: string;
    title: string;
  } | null>(null);

  const { t } = useLanguage();

  return (
    <section id="works" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Cosmic Nebula Glows behind Selected Works */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[350px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[350px] bg-pink-900/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
              {t("works.tag")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            {t("works.title")}
          </h2>
        </div>
      </div>

      {/* 3x3 CLEAN DENSE GRID IN EXACT 16:9 PROPORTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            data-cursor="play"
            onClick={() => {
              setSelectedVideo({
                id: project.youtubeId,
                vimeoId: project.vimeoId,
                title: `${project.client} — ${project.title}`,
              });
            }}
            className="group relative w-full aspect-video overflow-hidden bg-neutral-950 rounded-2xl cursor-pointer shadow-2xl border border-white/10 hover:border-purple-500/60 transition-all duration-300"
          >
            {/* Autoplay Clean Media Loop (16:9 Full Frame) */}
            <img
              src={project.gifUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* FULL 16:9 HOVER OVERLAY - COVERS THE ENTIRE IMAGE AS REQUESTED */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-6 z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-1 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {project.client}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.title}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-full">
                {project.category} · {project.year}
              </span>
              
              {/* Play Button Icon */}
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal if clicked */}
      {selectedVideo && (
        <ReelModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          youtubeId={selectedVideo.id}
          vimeoId={selectedVideo.vimeoId}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
