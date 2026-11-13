"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolio";
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
    <section id="works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-neutral-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
              {t("works.tag")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            {t("works.title")}
          </h2>
        </div>
      </div>

      {/* 3x3 CLEAN DENSE GRID (Identical to user's original site screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
            className="group relative w-full aspect-[16/10] overflow-hidden bg-neutral-950 rounded-xl cursor-pointer shadow-lg border border-neutral-900/80 hover:border-neutral-700 transition-all duration-300"
          >
            {/* Autoplay Clean Media Loop (Using original animated GIF) */}
            <img
              src={project.gifUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover Dark Gradient Overlay - Only visible on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {project.client}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.title}
              </h3>
            </div>

            {/* Play Badge Icon on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
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
