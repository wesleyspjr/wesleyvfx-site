"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { Mail, MessageSquare, Globe, ArrowUpRight, Copy, Check } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            DISPONIBILIDADE IMEDIATA
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4">
          LET'S BUILD SOMETHING EXTRAORDINARY
        </h2>
        <p className="max-w-xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          Atendendo produções de cinema, publicidade e estúdios globais. Escolha o canal de contato ideal para a sua região:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Brasil & Nacional Card */}
        <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                [BR] {PROFILE.contacts.br.label}
              </span>
              <span className="text-[11px] font-mono text-neutral-500">BRL / NF / CONTRATO</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Agências & Produtoras Brasil
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              {PROFILE.contacts.br.desc}
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-850">
            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs sm:text-sm text-white">
                  {PROFILE.contacts.br.email}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE.contacts.br.email)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Copiar e-mail"
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
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/40 text-xs font-mono tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              CHAMAR NO WHATSAPP ({PROFILE.contacts.br.phone})
            </a>
          </div>
        </div>

        {/* International & Global Direct Card */}
        <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                [INTL] {PROFILE.contacts.intl.label}
              </span>
              <span className="text-[11px] font-mono text-neutral-500">USD / EUR / WIRE</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Global Studios & Direct Clients
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              {PROFILE.contacts.intl.desc}
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-850">
            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs sm:text-sm text-white">
                  {PROFILE.contacts.intl.email}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE.contacts.intl.email)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Copy e-mail"
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
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-mono tracking-wider transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              SEND EMAIL DIRECTLY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
