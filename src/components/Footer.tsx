"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  const [timeSP, setTimeSP] = useState<string>("");
  const [timeUTC, setTimeUTC] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const { t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentYear(now.getFullYear());
      setTimeSP(
        now.toLocaleTimeString("en-US", {
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
    <footer className="w-full border-t border-neutral-900 bg-neutral-950 pt-20 pb-14 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14 border-b border-neutral-900">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-white font-bold">
                WESLEY JUNIOR
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-500 tracking-wider">
              {t("footer.role")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono tracking-widest">
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
              className="text-white hover:text-neutral-300 transition-colors"
            >
              {t("footer.resume")}
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <span>{t("footer.top")}</span>
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
            © {currentYear} Wesley Junior. {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
