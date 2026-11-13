"use client";

import React from "react";

export function Starfield() {
  // A curated list of subtle twinkling star positions and animation delays
  const stars = [
    { top: "8%", left: "12%", size: "w-1 h-1", delay: "0s", duration: "3s" },
    { top: "15%", left: "84%", size: "w-1.5 h-1.5", delay: "1.2s", duration: "4s" },
    { top: "22%", left: "45%", size: "w-1 h-1", delay: "0.5s", duration: "2.5s" },
    { top: "35%", left: "20%", size: "w-1.5 h-1.5", delay: "2s", duration: "3.5s" },
    { top: "42%", left: "75%", size: "w-1 h-1", delay: "1.5s", duration: "4.5s" },
    { top: "50%", left: "10%", size: "w-1 h-1", delay: "0.8s", duration: "3s" },
    { top: "58%", left: "90%", size: "w-1.5 h-1.5", delay: "2.2s", duration: "4s" },
    { top: "65%", left: "33%", size: "w-1 h-1", delay: "1.1s", duration: "3.2s" },
    { top: "72%", left: "82%", size: "w-1 h-1", delay: "0.3s", duration: "2.8s" },
    { top: "80%", left: "18%", size: "w-1.5 h-1.5", delay: "1.8s", duration: "3.8s" },
    { top: "88%", left: "62%", size: "w-1 h-1", delay: "2.5s", duration: "4.2s" },
    { top: "94%", left: "40%", size: "w-1 h-1", delay: "0.9s", duration: "3.1s" },
    { top: "12%", left: "68%", size: "w-1 h-1", delay: "1.4s", duration: "3.4s" },
    { top: "28%", left: "92%", size: "w-1 h-1", delay: "0.2s", duration: "2.7s" },
    { top: "48%", left: "55%", size: "w-1.5 h-1.5", delay: "1.7s", duration: "4.1s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full bg-white ${s.size} shadow-[0_0_6px_rgba(255,255,255,0.8)]`}
          style={{
            top: s.top,
            left: s.left,
            animation: `twinkle ${s.duration} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
