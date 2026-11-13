"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { X, ExternalLink, Play, Pause, StepBack, StepForward, Clapperboard, Keyboard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import VimeoPlayer from "@vimeo/player";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  youtubeId?: string;
  vimeoId?: string;
  title: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function ReelModal({ isOpen, onClose, youtubeId, vimeoId, videoUrl, title }: ReelModalProps) {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  const containerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const vimeoPlayerRef = useRef<VimeoPlayer | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [displayTime, setDisplayTime] = useState("00:00:00:00");
  const [isReady, setIsReady] = useState(false);

  const FRAME_STEP = 1 / 24; // 24 FPS feature frame duration (0.04166s)

  const formatTimecode = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "00:00:00:00";
    const totalFrames = Math.floor(seconds * 24);
    const frames = totalFrames % 24;
    const totalSeconds = Math.floor(seconds);
    const secs = totalSeconds % 60;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  };

  // Determine platform & ID
  let activePlatform: "youtube" | "vimeo" | "none" = "none";
  let activeYtId = youtubeId || "";
  let activeVimeoId = vimeoId || "";
  let externalUrl = "";

  if (vimeoId) {
    activePlatform = "vimeo";
    externalUrl = `https://vimeo.com/${vimeoId}`;
  } else if (youtubeId) {
    activePlatform = "youtube";
    externalUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  } else if (videoUrl) {
    if (videoUrl.includes("vimeo.com")) {
      activePlatform = "vimeo";
      const match = videoUrl.match(/vimeo\.com\/(\d+)/);
      activeVimeoId = match ? match[1] : "";
      externalUrl = videoUrl;
    } else {
      activePlatform = "youtube";
      const match = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[&?]|$)/);
      activeYtId = match ? match[1] : "";
      externalUrl = videoUrl;
    }
  }

  // Initialize Players when modal opens
  useEffect(() => {
    if (!isOpen) return;
    setIsReady(false);
    setIsPlaying(false);

    let isSubscribed = true;

    if (activePlatform === "youtube" && activeYtId) {
      const loadYT = () => {
        if (!containerRef.current) return;
        
        // Clear container
        containerRef.current.innerHTML = '<div id="yt-player-element" style="width:100%;height:100%;"></div>';

        const initPlayer = () => {
          if (!window.YT || !window.YT.Player) return;
          try {
            ytPlayerRef.current = new window.YT.Player("yt-player-element", {
              videoId: activeYtId,
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                rel: 0,
                enablejsapi: 1,
                controls: 1,
              },
              events: {
                onReady: () => {
                  if (isSubscribed) {
                    setIsReady(true);
                    setIsPlaying(true);
                  }
                },
                onStateChange: (event: any) => {
                  if (event.data === window.YT.PlayerState.PLAYING) {
                    setIsPlaying(true);
                  } else if (event.data === window.YT.PlayerState.PAUSED) {
                    setIsPlaying(false);
                  }
                },
              },
            });
          } catch (err) {
            console.error("YT Player init error:", err);
          }
        };

        if (window.YT && window.YT.Player) {
          initPlayer();
        } else {
          // Load YouTube iframe API script if not present
          const existingScript = document.getElementById("yt-iframe-api");
          if (!existingScript) {
            const tag = document.createElement("script");
            tag.id = "yt-iframe-api";
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
          }
          const prevCallback = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = () => {
            if (prevCallback) prevCallback();
            initPlayer();
          };
        }
      };

      loadYT();
    } else if (activePlatform === "vimeo" && activeVimeoId) {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        try {
          const vPlayer = new VimeoPlayer(containerRef.current, {
            id: Number(activeVimeoId),
            autoplay: true,
            responsive: true,
            controls: true,
            title: false,
            byline: false,
          });

          vimeoPlayerRef.current = vPlayer;

          vPlayer.ready().then(() => {
            if (isSubscribed) {
              setIsReady(true);
              setIsPlaying(true);
            }
          });

          vPlayer.on("play", () => setIsPlaying(true));
          vPlayer.on("pause", () => setIsPlaying(false));
          vPlayer.on("timeupdate", (data) => {
            setDisplayTime(formatTimecode(data.seconds));
          });
        } catch (err) {
          console.error("Vimeo init error:", err);
        }
      }
    }

    // Interval to poll YouTube timecode smoothly
    const interval = setInterval(() => {
      if (activePlatform === "youtube" && ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function") {
        try {
          const t = ytPlayerRef.current.getCurrentTime();
          setDisplayTime(formatTimecode(t));
        } catch (_) {}
      }
    }, 100);

    return () => {
      isSubscribed = false;
      clearInterval(interval);
      if (ytPlayerRef.current && typeof ytPlayerRef.current.destroy === "function") {
        try { ytPlayerRef.current.destroy(); } catch (_) {}
        ytPlayerRef.current = null;
      }
      if (vimeoPlayerRef.current) {
        try { vimeoPlayerRef.current.destroy(); } catch (_) {}
        vimeoPlayerRef.current = null;
      }
    };
  }, [isOpen, activePlatform, activeYtId, activeVimeoId]);

  // Real Frame-by-Frame step starting FROM CURRENT TIME
  const stepFrame = useCallback((direction: "forward" | "backward") => {
    const delta = direction === "forward" ? FRAME_STEP : -FRAME_STEP;

    if (activePlatform === "youtube" && ytPlayerRef.current) {
      try {
        const curTime = ytPlayerRef.current.getCurrentTime() || 0;
        const targetTime = Math.max(0, curTime + delta);
        ytPlayerRef.current.pauseVideo();
        setIsPlaying(false);
        ytPlayerRef.current.seekTo(targetTime, true);
        setDisplayTime(formatTimecode(targetTime));
      } catch (e) {
        console.error(e);
      }
    } else if (activePlatform === "vimeo" && vimeoPlayerRef.current) {
      vimeoPlayerRef.current.pause().then(() => {
        setIsPlaying(false);
        return vimeoPlayerRef.current!.getCurrentTime();
      }).then((curTime) => {
        const targetTime = Math.max(0, curTime + delta);
        setDisplayTime(formatTimecode(targetTime));
        return vimeoPlayerRef.current!.setCurrentTime(targetTime);
      }).catch(console.error);
    }
  }, [activePlatform, FRAME_STEP]);

  const togglePlay = useCallback(() => {
    if (activePlatform === "youtube" && ytPlayerRef.current) {
      try {
        if (isPlaying) {
          ytPlayerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          ytPlayerRef.current.playVideo();
          setIsPlaying(true);
        }
      } catch (e) { console.error(e); }
    } else if (activePlatform === "vimeo" && vimeoPlayerRef.current) {
      if (isPlaying) {
        vimeoPlayerRef.current.pause().then(() => setIsPlaying(false));
      } else {
        vimeoPlayerRef.current.play().then(() => setIsPlaying(true));
      }
    }
  }, [activePlatform, isPlaying]);

  // Global keyboard shortcuts (avoiding iframe focus trap)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "," || e.key === "<" || e.key === "ArrowLeft") {
        e.preventDefault();
        stepFrame("backward");
      } else if (e.key === "." || e.key === ">" || e.key === "ArrowRight") {
        e.preventDefault();
        stepFrame("forward");
      } else if (e.key === " " || e.code === "Space" || e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, stepFrame, togglePlay]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-neutral-950 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default shadow-purple-950/20"
      >
        {/* Modal Topbar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-200 font-bold">
              {title}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5"
              >
                <span>OPEN EXTERNAL</span> <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          <div ref={containerRef} className="w-full h-full" />
        </div>

        {/* Studio VFX Transport & Frame-by-Frame Controls Deck */}
        <div className="p-4 sm:p-5 bg-neutral-900/90 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left: Step Buttons & Timecode */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => stepFrame("backward")}
              title="Step -1 Frame (, or Left Arrow)"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-mono transition-all border border-neutral-700 active:scale-95 shadow"
            >
              <StepBack className="w-3.5 h-3.5 text-cyan-400" />
              <span>-1 FRAME</span>
            </button>

            <button
              onClick={togglePlay}
              title="Play / Pause (Space)"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all shadow-md active:scale-95 font-bold"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => stepFrame("forward")}
              title="Step +1 Frame (. or Right Arrow)"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-mono transition-all border border-neutral-700 active:scale-95 shadow"
            >
              <span>+1 FRAME</span>
              <StepForward className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {/* Timecode 24fps Display */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/70 border border-neutral-800 font-mono text-xs text-purple-300">
              <Clapperboard className="w-3.5 h-3.5 text-neutral-500" />
              <span>TC: {displayTime} (24fps)</span>
            </div>
          </div>

          {/* Right: Prominent Frame-by-Frame Shortcut Guide Banner */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-300 bg-black/70 border border-purple-500/20 px-4 py-2 rounded-xl">
            <Keyboard className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>
              {isPt ? (
                <>
                  <strong className="text-white">CONTROLE FRAME A FRAME:</strong> Use as teclas <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">,</kbd> e <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">.</kbd> ou <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">←</kbd> <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">→</kbd> a partir do ponto atual do vídeo.
                </>
              ) : (
                <>
                  <strong className="text-white">FRAME-BY-FRAME:</strong> Use keys <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">,</kbd> and <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">.</kbd> or <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">←</kbd> <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700 font-bold">→</kbd> from current video position.
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
