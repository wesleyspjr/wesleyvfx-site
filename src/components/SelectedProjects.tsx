"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolio";
import { Play, ArrowUpRight, Film, ExternalLink } from "lucide-react";
import { ReelModal } from "./ReelModal";

export function SelectedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  const categories = ["ALL", "VFX Compositing", "Motion Design", "Commercial"];

  const filteredProjects = activeFilter === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-neutral-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              TRABALHOS SELECIONADOS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            SELECTED WORKS
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-900/60 border border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase ${
                activeFilter === cat
                  ? "bg-neutral-800 text-white shadow-md border border-neutral-700/80 font-medium"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => {
              if (project.youtubeId) {
                setSelectedVideo({ id: project.youtubeId, title: `${project.client} — ${project.title}` });
              }
            }}
            className={`group relative flex flex-col bg-neutral-950/70 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 shadow-xl ${
              project.youtubeId ? "cursor-pointer" : ""
            }`}
          >
            {/* Visual Frame */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                  {project.category}
                </span>
              </div>

              {/* Play Icon Badge on Hover if Video */}
              {project.youtubeId && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              )}

              {/* Index Number */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-mono text-neutral-500 font-semibold">
                  [0{idx + 1}]
                </span>
              </div>
            </div>

            {/* Project Content / Details */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span className="font-semibold text-emerald-400 tracking-wider uppercase">
                    {project.client}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-neutral-100 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-850">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
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
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
