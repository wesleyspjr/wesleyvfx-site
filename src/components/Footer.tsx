"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";
import { ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  const [timeSP, setTimeSP] = useState<string>("");
  const [timeUTC, setTimeUTC] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentYear(now.getFullYear());
      setTimeSP(
        now.toLocaleTimeString("pt-BR", {
          timeZone: "America/Sao_Paulo",
          hour12: false,
        })
      );
      setTimeUTC(
        now.toLocaleTimeString("en-GB", {
          timeZone: "UTC",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-neutral-900 bg-neutral-950 pt-16 pb-12 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-sm uppercase tracking-widest text-white font-semibold">
                WESLEY JUNIOR
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-500">
              VFX COMPOSITOR & MOTION DESIGNER · JUNDIAÍ, SP
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono tracking-wider">
            {PROFILE.contacts.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
            <span className="text-neutral-700">/</span>
            <a
              href={PROFILE.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              RESUME (PDF)
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors p-2 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Timecodes & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-neutral-600" />
              SP (UTC-3): <span className="text-neutral-300">{timeSP || "--:--:--"}</span>
            </span>
            <span>·</span>
            <span>
              UTC: <span className="text-neutral-300">{timeUTC || "--:--:--"}</span>
            </span>
          </div>

          <div>
            © {currentYear} Wesley Junior. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
