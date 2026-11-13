"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "play" | "drag">("default");
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
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

    // Smooth lerp loop for the outer ring (like aue.productions)
    let animationId: number;
    const animate = () => {
      const lerp = 0.2;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

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
      {/* Center solid dot - follows 1:1 with ZERO lag */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[2.5px] -mt-[2.5px] w-[5px] h-[5px] rounded-full bg-white pointer-events-none"
      />

      {/* Outer ring - smoothly trails with spring/lerp (exact matching user screenshot) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none flex items-center justify-center font-mono font-bold tracking-widest transition-all duration-200 ease-out ${
          cursorState === "play"
            ? "-ml-9 -mt-9 w-18 h-18 rounded-full border border-white bg-white/20 text-white text-[10px] scale-100"
            : cursorState === "drag"
            ? "-ml-9 -mt-5 w-18 h-10 rounded-full border border-white bg-white/20 text-white text-[9px] scale-100"
            : cursorState === "hover"
            ? "-ml-5 -mt-5 w-10 h-10 rounded-full border border-white/80 scale-110"
            : "-ml-[14px] -mt-[14px] w-7 h-7 rounded-full border border-white/70 scale-100"
        }`}
      >
        {cursorState === "play" && <span className="text-white">PLAY</span>}
        {cursorState === "drag" && <span className="text-white">DRAG</span>}
      </div>
    </div>
  );
}
