"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { X, ExternalLink, Play, Pause, StepBack, StepForward, Clapperboard, Keyboard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  youtubeId?: string;
  vimeoId?: string;
  title: string;
}

export function ReelModal({ isOpen, onClose, youtubeId, vimeoId, videoUrl, title }: ReelModalProps) {
  const { lang } = useLanguage();
  const isPt = lang === "pt";

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const currentTimeRef = useRef(0);
  const [displayTime, setDisplayTime] = useState("00:00:00:00");

  const FRAME_STEP = 1 / 24; // 24 FPS standard feature / comp frame duration

  // Format seconds to Timecode HH:MM:SS:FF at 24fps
  const formatTimecode = (seconds: number) => {
    const totalFrames = Math.floor(seconds * 24);
    const frames = totalFrames % 24;
    const totalSeconds = Math.floor(seconds);
    const secs = totalSeconds % 60;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  };

  // Determine iframe source & platform
  let embedSrc = "";
  let externalUrl = "";
  let platform: "youtube" | "vimeo" | "other" = "other";

  if (vimeoId) {
    platform = "vimeo";
    embedSrc = `https://player.vimeo.com/video/${vimeoId}?api=1&autoplay=1&title=0&byline=0&portrait=0`;
    externalUrl = `https://vimeo.com/${vimeoId}`;
  } else if (youtubeId) {
    platform = "youtube";
    embedSrc = `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1&hd=1`;
    externalUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  } else if (videoUrl) {
    if (videoUrl.includes("vimeo.com")) {
      platform = "vimeo";
      const match = videoUrl.match(/vimeo\.com\/(\d+)/);
      const vId = match ? match[1] : "";
      embedSrc = `https://player.vimeo.com/video/${vId}?api=1&autoplay=1&title=0&byline=0&portrait=0`;
      externalUrl = videoUrl;
    } else {
      platform = "youtube";
      const match = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[&?]|$)/);
      const ytId = match ? match[1] : "";
      embedSrc = `https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1&hd=1`;
      externalUrl = videoUrl;
    }
  }

  // Send message to YouTube or Vimeo iframe
  const postToPlayer = useCallback((command: string, args: any[] = []) => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    const win = iframeRef.current.contentWindow;

    if (platform === "youtube") {
      win.postMessage(JSON.stringify({ event: "command", func: command, args }), "*");
    } else if (platform === "vimeo") {
      if (command === "pause") {
        win.postMessage(JSON.stringify({ method: "pause" }), "*");
      } else if (command === "play") {
        win.postMessage(JSON.stringify({ method: "play" }), "*");
      } else if (command === "seekTo") {
        win.postMessage(JSON.stringify({ method: "setCurrentTime", value: args[0] }), "*");
      }
    }
  }, [platform]);

  // Step frames by delta (e.g. +1/24s or -1/24s)
  const stepFrame = useCallback((direction: "forward" | "backward") => {
    // First pause the video
    postToPlayer("pause");
    setIsPlaying(false);

    const delta = direction === "forward" ? FRAME_STEP : -FRAME_STEP;
    const newTime = Math.max(0, currentTimeRef.current + delta);
    currentTimeRef.current = newTime;
    setDisplayTime(formatTimecode(newTime));

    postToPlayer("seekTo", [newTime, true]);
  }, [postToPlayer]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      postToPlayer("pause");
      setIsPlaying(false);
    } else {
      postToPlayer("play");
      setIsPlaying(true);
    }
  }, [isPlaying, postToPlayer]);

  // Listen to messages from YouTube / Vimeo to track current time
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        // YouTube time info
        if (data && data.info && typeof data.info.currentTime === "number") {
          currentTimeRef.current = data.info.currentTime;
          setDisplayTime(formatTimecode(data.info.currentTime));
          if (data.info.playerState === 1) setIsPlaying(true);
          if (data.info.playerState === 2) setIsPlaying(false);
        }
        // Vimeo time info
        if (data && data.event === "timeupdate" && data.data && typeof data.data.seconds === "number") {
          currentTimeRef.current = data.data.seconds;
          setDisplayTime(formatTimecode(data.data.seconds));
        }
      } catch (_) {}
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Keyboard shortcut listener (Escape, Space, Comma, Period, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      
      // Prevent default browser scrolling on media control keys
      if (["Space", "ArrowLeft", "ArrowRight", ",", "."].includes(e.key) || e.code === "Space") {
        // Step backward: ',' or '<' or ArrowLeft
        if (e.key === "," || e.key === "<" || e.key === "ArrowLeft") {
          e.preventDefault();
          stepFrame("backward");
        }
        // Step forward: '.' or '>' or ArrowRight
        else if (e.key === "." || e.key === ">" || e.key === "ArrowRight") {
          e.preventDefault();
          stepFrame("forward");
        }
        // Toggle play/pause: Space or 'k'
        else if (e.key === " " || e.code === "Space" || e.key.toLowerCase() === "k") {
          e.preventDefault();
          togglePlay();
        }
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

        {/* Video Embed */}
        <div className="relative w-full aspect-video bg-black">
          {embedSrc ? (
            <iframe
              ref={iframeRef}
              src={embedSrc}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-500 font-mono text-xs">
              VIDEO SOURCE NOT AVAILABLE
            </div>
          )}
        </div>

        {/* Studio VFX Transport & Frame-by-Frame Controls Deck */}
        <div className="p-4 sm:p-5 bg-neutral-900/90 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left: Step Buttons & Timecode */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => stepFrame("backward")}
              title="Step -1 Frame (, or Left Arrow)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-mono transition-colors border border-neutral-700 active:scale-95"
            >
              <StepBack className="w-3.5 h-3.5 text-cyan-400" />
              <span>-1 FRAME</span>
            </button>

            <button
              onClick={togglePlay}
              title="Play / Pause (Space)"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => stepFrame("forward")}
              title="Step +1 Frame (. or Right Arrow)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-mono transition-colors border border-neutral-700 active:scale-95"
            >
              <span>+1 FRAME</span>
              <StepForward className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {/* Timecode 24fps Display */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-800 font-mono text-xs text-purple-300">
              <Clapperboard className="w-3.5 h-3.5 text-neutral-500" />
              <span>TC: {displayTime} (24fps)</span>
            </div>
          </div>

          {/* Right: Prominent Frame-by-Frame Shortcut Guide Banner */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-300 bg-black/60 border border-purple-500/20 px-3.5 py-1.5 rounded-xl">
            <Keyboard className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>
              {isPt ? (
                <>
                  <strong className="text-white">FRAME A FRAME:</strong> Use as teclas <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">,</kbd> e <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">.</kbd> ou <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">←</kbd> <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">→</kbd> para navegar frame a frame (24 fps).
                </>
              ) : (
                <>
                  <strong className="text-white">FRAME-BY-FRAME:</strong> Use keys <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">,</kbd> and <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">.</kbd> or <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">←</kbd> <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white border border-neutral-700">→</kbd> to step 1 frame (24 fps).
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
