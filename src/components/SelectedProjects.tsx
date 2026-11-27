"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";
import { ReelModal } from "./ReelModal";

function ProjectVideo({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Força muted via propriedade do DOM para evitar restrições do navegador
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      if (video.paused) {
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    };

    // Tenta dar play imediatamente
    playVideo();

    // Loop explícito à prova de falhas: se terminar ou pausar, retoma
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    const handlePause = () => {
      // Se pausar inesperadamente pelo browser, retoma
      playVideo();
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", handlePause);

    // IntersectionObserver para pausar fora de tela e dar play garantido ao entrar na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", handlePause);
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
    />
  );
}

export function SelectedProjects() {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId?: string;
    vimeoId?: string;
    videoUrl?: string;
    title: string;
  } | null>(null);

  const { t } = useLanguage();

  return (
    <section id="works" className="py-28 max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => {
              const vc = project.videoCompleto;
              const hasFullVideo = vc && vc.tipo !== "none" && vc.urlOuId;

              const targetVideo = hasFullVideo
                ? {
                    youtubeId: vc.tipo === "youtube" ? vc.urlOuId : undefined,
                    vimeoId: vc.tipo === "vimeo" ? vc.urlOuId : undefined,
                    videoUrl: vc.tipo !== "youtube" && vc.tipo !== "vimeo" ? vc.urlOuId : undefined,
                    title: `${project.client} — ${project.title}`,
                  }
                : project.previewMedia?.endsWith(".mp4")
                ? {
                    youtubeId: undefined,
                    vimeoId: undefined,
                    videoUrl: project.previewMedia,
                    title: `${project.client} — ${project.title} (Breakdown Preview)`,
                  }
                : null;

              if (targetVideo) {
                setSelectedVideo(targetVideo);
              }
            }}
            className="group relative w-full aspect-video overflow-hidden bg-neutral-950 rounded-2xl cursor-pointer shadow-2xl border border-white/10 hover:border-purple-500/60 transition-all duration-300"
          >
            {/* Autoplay Clean Media Loop (16:9 Full Frame) */}
            {project.previewMedia?.endsWith(".mp4") || project.videoUrl ? (
              <ProjectVideo src={project.videoUrl || project.previewMedia} />
            ) : (
              <img
                src={project.previewMedia || project.gifUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* FULL 16:9 HOVER OVERLAY - COVERS THE ENTIRE IMAGE AS REQUESTED */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-6 z-10">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold mb-1.5 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {project.client}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2 sm:mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.title}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 mb-4 sm:mb-5 bg-white/[0.08] border border-white/10 px-3.5 py-1 rounded-full">
                {project.category} · {project.year}
              </span>
              
              {/* Play Button Icon */}
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-6 h-6 fill-current ml-0.5" />
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
          youtubeId={selectedVideo.youtubeId}
          vimeoId={selectedVideo.vimeoId}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          showControlsDeck={false}
        />
      )}
    </section>
  );
}
