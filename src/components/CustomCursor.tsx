"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "play" | "drag">("default");
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
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

    // Smooth lerp trailing animation
    let animationId: number;
    const animate = () => {
      // Lerp smoothing factor
      const lerp = 0.22;
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
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Trailing soft badge / ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none flex items-center justify-center font-mono font-bold tracking-widest transition-all duration-200 ease-out ${
          cursorState === "play"
            ? "-ml-9 -mt-9 w-18 h-18 rounded-full bg-white text-black text-[11px] shadow-2xl scale-100"
            : cursorState === "drag"
            ? "-ml-9 -mt-5 w-18 h-10 rounded-full bg-white text-black text-[10px] shadow-2xl scale-100"
            : cursorState === "hover"
            ? "-ml-5 -mt-5 w-10 h-10 rounded-full border border-white/60 bg-white/5 backdrop-blur-[0.5px] scale-110"
            : "-ml-3 -mt-3 w-6 h-6 rounded-full border border-white/30 scale-90"
        }`}
      >
        {cursorState === "play" && <span>PLAY</span>}
        {cursorState === "drag" && <span>DRAG</span>}
      </div>
    </div>
  );
}
