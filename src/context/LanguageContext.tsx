"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "pt";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const DICTIONARY: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      reels: "REEL",
      works: "WORKS",
      contact: "CONTACT",
      resume: "RESUME",
      getInTouch: "GET IN TOUCH",
    },
    hero: {
      status: "Available for selected projects",
      location: "Brazil · Working Worldwide",
      headline: "VISUAL EFFECTS COMPOSITOR & MOTION DESIGNER.",
      bio: "Over 5 years crafting photorealistic compositions and dynamic motion systems for Hollywood productions, global brands, and creative studios.",
      compositingReelTab: "01 // COMPOSITING REEL",
      motionReelTab: "02 // MOTION REEL (VIMEO)",
      clickToPlay: "CLICK TO PLAY",
      watchSound: "WATCH WITH SOUND",
      fullscreen: "FULLSCREEN AVAILABLE",
    },
    brands: {
      title: "TRUSTED BY GLOBAL BRANDS & STUDIOS",
    },
    works: {
      tag: "CURATED ARCHIVE",
      title: "SELECTED WORKS.",
      subtitle: "Grid of recent visual effects, commercial spots, and motion design pieces.",
      categories: {
        all: "ALL",
        vfx: "VFX COMPOSITING",
        motion: "MOTION DESIGN",
        commercial: "COMMERCIAL",
      },
      clickPrompt: "Click to watch breakdown",
    },
    contact: {
      tag: "DIRECT COLLABORATION",
      title: "LET'S BUILD SOMETHING EXCEPTIONAL.",
      subtitle: "Open for feature film compositing, high-end commercial campaigns, and remote studio bookings worldwide.",
      intl: {
        badge: "[INTL] International & Remote Bookings",
        currency: "USD / EUR / REMOTE WIRE",
        title: "Global Studios & Direct Clients",
        desc: "For studios, remote commercial contracts, and international feature work (USD / EUR / Wire).",
        cta: "SEND EMAIL DIRECTLY",
      },
      br: {
        badge: "[BR] National & Local Agencies",
        currency: "BRL / LOCAL CONTRACT",
        title: "National Production & Agencies",
        desc: "Production companies and direct brands within Brazil (BRL / Direct Invoice).",
        cta: "WHATSAPP DIRECT",
      },
    },
    footer: {
      role: "VISUAL EFFECTS COMPOSITOR & MOTION DESIGNER · BRAZIL / WORLDWIDE",
      resume: "RESUME (PDF)",
      top: "TOP",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      reels: "REEL",
      works: "TRABALHOS",
      contact: "CONTATO",
      resume: "CURRÍCULO",
      getInTouch: "ENTRAR EM CONTATO",
    },
    hero: {
      status: "Disponível para projetos selecionados",
      location: "Brasil · Atuação Internacional",
      headline: "COMPOSITOR DE EFEITOS VISUAIS & MOTION DESIGNER.",
      bio: "Mais de 5 anos entregando composição fotorrealista e design de movimento para produções cinematográficas de Hollywood, grandes marcas e estúdios criativos.",
      compositingReelTab: "01 // REEL DE COMPOSIÇÃO",
      motionReelTab: "02 // REEL DE MOTION (VIMEO)",
      clickToPlay: "CLIQUE PARA ASSISTIR",
      watchSound: "ASSISTIR COM SOM",
      fullscreen: "TELA CHEIA DISPONÍVEL",
    },
    brands: {
      title: "EXPERIÊNCIA COM MARCAS GLOBAIS E ESTÚDIOS",
    },
    works: {
      tag: "ARQUIVO SELECIONADO",
      title: "TRABALHOS EM DESTAQUE.",
      subtitle: "Grade de efeitos visuais recentes, comerciais e projetos de motion design.",
      categories: {
        all: "TODOS",
        vfx: "COMPOSIÇÃO VFX",
        motion: "MOTION DESIGN",
        commercial: "PUBLICIDADE",
      },
      clickPrompt: "Clique para assistir ao breakdown",
    },
    contact: {
      tag: "COLABORAÇÃO DIRETA",
      title: "VAMOS CRIAR ALGO EXTRAORDINÁRIO.",
      subtitle: "Disponível para composição em longa-metragens, campanhas comerciais de alto nível e contratações remotas para estúdios no mundo todo.",
      intl: {
        badge: "[INTL] Contratos Internacionais & Remotos",
        currency: "USD / EUR / WIRE",
        title: "Estúdios Globais & Clientes Diretos",
        desc: "Para estúdios e produtoras no exterior com faturamento em moeda estrangeira (USD / EUR / Wire).",
        cta: "ENVIAR E-MAIL DIRETO",
      },
      br: {
        badge: "[BR] Agências & Produtoras Brasil",
        currency: "BRL / NF / CONTRATO",
        title: "Produções Nacionais & Agências",
        desc: "Produtoras e marcas diretas no Brasil com emissão de nota fiscal e pagamento em reais.",
        cta: "CHAMAR NO WHATSAPP",
      },
    },
    footer: {
      role: "COMPOSITOR DE EFEITOS VISUAIS & MOTION DESIGNER · BRASIL / MUNDO",
      resume: "CURRÍCULO (PDF)",
      top: "TOPO",
      rights: "Todos os direitos reservados.",
    },
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (path: string) => {
    const keys = path.split(".");
    let current: any = DICTIONARY[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
