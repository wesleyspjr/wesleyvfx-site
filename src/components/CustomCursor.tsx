"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "play" | "drag">("default");
  const [cursorText, setCursorText] = useState("");
  
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100, vx: 0, vy: 0 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      setEnabled(true);
    } else {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const playEl = target.closest('[data-cursor="play"]');
      const dragEl = target.closest('[data-cursor="drag"]');
      const interactiveEl = target.closest('a, button, input, [role="button"]');

      if (playEl) {
        setCursorState("play");
        setCursorText("PLAY");
      } else if (dragEl) {
        setCursorState("drag");
        setCursorText("DRAG");
      } else if (interactiveEl) {
        setCursorState("hover");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth spring/lerp loop for trailing ring
    let animationId: number;
    const animate = () => {
      const spring = 0.18;
      const friction = 0.72;

      const dx = posRef.current.x - trailRef.current.x;
      const dy = posRef.current.y - trailRef.current.y;

      trailRef.current.vx = (trailRef.current.vx + dx * spring) * friction;
      trailRef.current.vy = (trailRef.current.vy + dy * spring) * friction;

      trailRef.current.x += trailRef.current.vx;
      trailRef.current.y += trailRef.current.vy;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
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
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Center sharp dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white transition-opacity duration-200 ${
          cursorState === "play" || cursorState === "drag" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Trailing smooth ring / pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center font-mono font-bold tracking-widest text-black transition-all duration-300 ease-out ${
          cursorState === "play"
            ? "-ml-9 -mt-9 w-20 h-20 rounded-full bg-white text-xs shadow-2xl scale-100"
            : cursorState === "drag"
            ? "-ml-8 -mt-5 w-16 h-10 rounded-full bg-white text-[10px] shadow-2xl scale-100"
            : cursorState === "hover"
            ? "-ml-5 -mt-5 w-10 h-10 rounded-full border border-white/60 bg-white/10 backdrop-blur-[1px] scale-110"
            : "-ml-3.5 -mt-3.5 w-7 h-7 rounded-full border border-white/30 scale-90"
        }`}
      >
        {cursorText}
      </div>
    </div>
  );
}
