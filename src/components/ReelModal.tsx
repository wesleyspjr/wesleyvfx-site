"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  youtubeId?: string;
  vimeoId?: string;
  title: string;
}

export function ReelModal({ isOpen, onClose, youtubeId, vimeoId, videoUrl, title }: ReelModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Determine iframe source
  let embedSrc = "";
  let externalUrl = "";

  if (vimeoId) {
    embedSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
    externalUrl = `https://vimeo.com/${vimeoId}`;
  } else if (youtubeId) {
    embedSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&hd=1`;
    externalUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  } else if (videoUrl) {
    if (videoUrl.includes("vimeo.com")) {
      const match = videoUrl.match(/vimeo\.com\/(\d+)/);
      const vId = match ? match[1] : "";
      embedSrc = `https://player.vimeo.com/video/${vId}?autoplay=1&title=0&byline=0&portrait=0`;
      externalUrl = videoUrl;
    } else {
      const match = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[&?]|$)/);
      const ytId = match ? match[1] : "";
      embedSrc = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&hd=1`;
      externalUrl = videoUrl;
    }
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
      >
        {/* Modal Topbar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-bold">
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
      </div>
    </div>
  );
}
