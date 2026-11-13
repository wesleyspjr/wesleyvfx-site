"use client";

import React, { useEffect, useState } from "react";

export function Starfield() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 24 tiny micro-stars (1px to 1.5px) with subtle twinkle animation
  const stars = [
    { top: "6%", left: "10%", size: "w-[1px] h-[1px]", delay: "0s", duration: "3.2s" },
    { top: "12%", left: "82%", size: "w-[1.5px] h-[1.5px]", delay: "1.2s", duration: "4.1s" },
    { top: "18%", left: "42%", size: "w-[1px] h-[1px]", delay: "0.5s", duration: "2.5s" },
    { top: "25%", left: "22%", size: "w-[1px] h-[1px]", delay: "2s", duration: "3.7s" },
    { top: "32%", left: "70%", size: "w-[1.5px] h-[1.5px]", delay: "1.5s", duration: "4.5s" },
    { top: "38%", left: "15%", size: "w-[1px] h-[1px]", delay: "0.8s", duration: "3.1s" },
    { top: "45%", left: "88%", size: "w-[1px] h-[1px]", delay: "2.2s", duration: "4.2s" },
    { top: "52%", left: "35%", size: "w-[1.5px] h-[1.5px]", delay: "1.1s", duration: "3.5s" },
    { top: "60%", left: "80%", size: "w-[1px] h-[1px]", delay: "0.3s", duration: "2.8s" },
    { top: "68%", left: "18%", size: "w-[1px] h-[1px]", delay: "1.8s", duration: "3.9s" },
    { top: "75%", left: "65%", size: "w-[1.5px] h-[1.5px]", delay: "2.5s", duration: "4.4s" },
    { top: "82%", left: "40%", size: "w-[1px] h-[1px]", delay: "0.9s", duration: "3.3s" },
    { top: "90%", left: "12%", size: "w-[1px] h-[1px]", delay: "1.6s", duration: "3.6s" },
    { top: "96%", left: "85%", size: "w-[1.5px] h-[1.5px]", delay: "2.1s", duration: "4.0s" },
    { top: "14%", left: "62%", size: "w-[1px] h-[1px]", delay: "1.4s", duration: "3.4s" },
    { top: "28%", left: "94%", size: "w-[1px] h-[1px]", delay: "0.2s", duration: "2.7s" },
    { top: "48%", left: "52%", size: "w-[1.5px] h-[1.5px]", delay: "1.7s", duration: "4.1s" },
    { top: "64%", left: "8%", size: "w-[1px] h-[1px]", delay: "0.6s", duration: "3.0s" },
    { top: "78%", left: "92%", size: "w-[1px] h-[1px]", delay: "1.9s", duration: "3.8s" },
    { top: "86%", left: "30%", size: "w-[1.5px] h-[1.5px]", delay: "2.4s", duration: "4.3s" },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        transform: `translate3d(0, ${-scrollY * 0.18}px, 0)`,
        willChange: "transform",
      }}
    >
      {stars.map((s, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full bg-white ${s.size} shadow-[0_0_2px_rgba(255,255,255,0.9)]`}
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
