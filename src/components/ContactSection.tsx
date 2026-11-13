"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MessageSquare, Copy, Check, Send } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const { lang, t } = useLanguage();

  const isPt = lang === "pt";
  const targetEmail = isPt ? PROFILE.contacts.br.email : PROFILE.contacts.intl.email;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-28 max-w-4xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Cosmic Nebula Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-950/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="relative z-10">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            {isPt ? "CONTATO DIRETO" : "DIRECT COLLABORATION"}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4">
          {isPt ? "VAMOS CRIAR ALGO EXTRAORDINÁRIO." : "LET'S BUILD SOMETHING EXCEPTIONAL."}
        </h2>
        <p className="max-w-xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          {isPt
            ? "Disponível para projetos de cinema, publicidade e estúdios. Entre em contato diretamente:"
            : "Available for feature films, commercial campaigns, and remote studio bookings worldwide. Reach out directly:"}
        </p>
      </div>

      {/* SINGLE UNIFIED CONTACT CARD (Routes according to language) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950/90 border border-neutral-800 shadow-2xl flex flex-col items-center text-center">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold mb-4 bg-emerald-950/50 border border-emerald-900/60 px-3.5 py-1 rounded-full">
          {isPt ? "[BR] PRODUÇÕES NACIONAIS & AGÊNCIAS" : "[INTL] GLOBAL STUDIOS & DIRECT BOOKINGS"}
        </span>

        {/* Email Copy Box */}
        <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 w-full max-w-md mb-6">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-400" />
            <span className="font-mono text-sm sm:text-base text-white font-medium">
              {targetEmail}
            </span>
          </div>
          <button
            onClick={() => copyToClipboard(targetEmail)}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Copiar e-mail"
          >
            {copiedEmail === targetEmail ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          {isPt ? (
            <a
              href={PROFILE.contacts.br.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono tracking-widest transition-all font-bold shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              CHAMAR NO WHATSAPP ({PROFILE.contacts.br.phone})
            </a>
          ) : (
            <a
              href={`mailto:${targetEmail}?subject=Project%20Inquiry%20-%20Wesley%20VFX`}
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-white hover:bg-neutral-200 text-black text-xs font-mono tracking-widest transition-all font-bold shadow-lg"
            >
              <Send className="w-4 h-4" />
              SEND EMAIL DIRECTLY ({targetEmail})
            </a>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
