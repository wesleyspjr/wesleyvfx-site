"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "play" | "drag">("default");

  const mousePos = useRef({ x: -100, y: -100 });
  
  // Trail positions for the subtle elegant mouse trail
  const trail1 = useRef({ x: -100, y: -100 });
  const trail2 = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement>(null);
  const trail1Ref = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      return;
    }
    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // 1:1 Instant follow for the sharp center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="play"]')) {
        setCursorState("play");
      } else if (target.closest('[data-cursor="drag"]')) {
        setCursorState("drag");
      } else if (target.closest('a, button, input, [role="button"]')) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth animation loop for trail and outer ring
    let animationId: number;
    const animate = () => {
      // Trail 1 (close behind)
      trail1.current.x += (mousePos.current.x - trail1.current.x) * 0.45;
      trail1.current.y += (mousePos.current.y - trail1.current.y) * 0.45;
      if (trail1Ref.current) {
        trail1Ref.current.style.transform = `translate3d(${trail1.current.x}px, ${trail1.current.y}px, 0)`;
      }

      // Trail 2 (soft tail)
      trail2.current.x += (trail1.current.x - trail2.current.x) * 0.35;
      trail2.current.y += (trail1.current.y - trail2.current.y) * 0.35;
      if (trail2Ref.current) {
        trail2Ref.current.style.transform = `translate3d(${trail2.current.x}px, ${trail2.current.y}px, 0)`;
      }

      // Outer ring (smooth spring/lerp, strictly centered)
      const ringLerp = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none mix-blend-difference">
      {/* Trail 2 - soft tail */}
      <div
        ref={trail2Ref}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white opacity-25 pointer-events-none transition-opacity"
      />

      {/* Trail 1 - inner trail */}
      <div
        ref={trail1Ref}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white opacity-50 pointer-events-none transition-opacity"
      />

      {/* Center sharp dot - follows 1:1 with ZERO lag */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white pointer-events-none shadow-sm"
      />

      {/* Outer ring - perfectly centered using translate(-50%, -50%) so it NEVER loses position */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center font-mono font-bold tracking-widest transition-all duration-200 ease-out"
        style={{
          width: cursorState === "play" ? "72px" : cursorState === "drag" ? "68px" : cursorState === "hover" ? "42px" : "28px",
          height: cursorState === "play" ? "72px" : cursorState === "drag" ? "38px" : cursorState === "hover" ? "42px" : "28px",
          borderRadius: cursorState === "drag" ? "20px" : "9999px",
          border: "1px solid rgba(255, 255, 255, 0.85)",
          backgroundColor: cursorState === "play" || cursorState === "drag" ? "rgba(255, 255, 255, 0.15)" : "transparent",
        }}
      >
        {cursorState === "play" && <span className="text-white text-[10px]">PLAY</span>}
        {cursorState === "drag" && <span className="text-white text-[9px]">DRAG</span>}
      </div>
    </div>
  );
}
