"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";
import { ReelModal } from "./ReelModal";

export function SelectedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedVideo, setSelectedVideo] = useState<{
    id?: string;
    vimeoId?: string;
    title: string;
  } | null>(null);

  const { lang, t } = useLanguage();

  const categories = [
    { key: "ALL", label: t("works.categories.all") },
    { key: "VFX Compositing", label: t("works.categories.vfx") },
    { key: "Motion Design", label: t("works.categories.motion") },
    { key: "Commercial", label: t("works.categories.commercial") },
  ];

  const filteredProjects = activeFilter === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-28 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
              {t("works.tag")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            {t("works.title")}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans">
            {t("works.subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-900/80 border border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase ${
                activeFilter === cat.key
                  ? "bg-neutral-800 text-white shadow-md border border-neutral-700 font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3x3 DENSE SHOWCASE GRID (9 Projects) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
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
            className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-850 hover:border-neutral-600 transition-all duration-500 shadow-xl cursor-pointer"
          >
            {/* Background Autoplay Video Loop */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={project.thumbnail}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-80 group-hover:brightness-95"
            >
              <source src={project.videoPreview} type="video/mp4" />
            </video>

            {/* Ambient Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40 group-hover:from-black/90 group-hover:via-black/40 transition-all duration-300" />

            {/* Permanent Top Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs font-mono pointer-events-none z-10">
              <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-500 font-bold bg-black/60 px-2 py-0.5 rounded">
                [0{idx + 1}]
              </span>
            </div>

            {/* Permanent Bottom Bar that expands on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end transition-all duration-300 z-10">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold mb-1">
                <span className="tracking-widest uppercase">{project.client}</span>
                <span className="text-neutral-500 font-normal">{project.year}</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              {/* Reveal info on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 transition-all duration-300 overflow-hidden pt-0 group-hover:pt-2">
                <p className="text-xs text-neutral-300 font-sans leading-relaxed line-clamp-2 mb-2">
                  {project.description[lang]}
                </p>
                <div className="flex flex-wrap items-center gap-1">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Play Icon on Hover */}
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
