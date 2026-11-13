"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MessageSquare, Globe, Copy, Check } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const { t } = useLanguage();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            {t("contact.tag")}
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mb-5">
          {t("contact.title")}
        </h2>
        <p className="max-w-xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* International Bookings */}
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                {t("contact.intl.badge")}
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                {t("contact.intl.currency")}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {t("contact.intl.title")}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed">
              {t("contact.intl.desc")}
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-900">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs sm:text-sm text-white">
                  {PROFILE.contacts.intl.email}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE.contacts.intl.email)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Copy email"
              >
                {copiedEmail === PROFILE.contacts.intl.email ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={`mailto:${PROFILE.contacts.intl.email}?subject=Project%20Inquiry%20-%20Wesley%20VFX`}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono tracking-widest transition-colors font-semibold"
            >
              <Mail className="w-4 h-4" />
              {t("contact.intl.cta")}
            </a>
          </div>
        </div>

        {/* National / Brazil Direct */}
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                {t("contact.br.badge")}
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                {t("contact.br.currency")}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {t("contact.br.title")}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed">
              {t("contact.br.desc")}
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-900">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs sm:text-sm text-white">
                  {PROFILE.contacts.br.email}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE.contacts.br.email)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Copy email"
              >
                {copiedEmail === PROFILE.contacts.br.email ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={PROFILE.contacts.br.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/40 text-xs font-mono tracking-widest transition-colors font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              {t("contact.br.cta")} ({PROFILE.contacts.br.phone})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
