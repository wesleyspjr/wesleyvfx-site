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
      breakdown: "BREAKDOWN",
      pipeline: "PIPELINE",
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
    breakdown: {
      tag: "TECHNICAL & ARTISTIC RIGOR",
      title: "VFX BREAKDOWN & PIPELINE.",
      subtitle: "Node-based photorealistic compositing and kinetic motion design engineered for feature films and commercial broadcasts.",
      dragInstruction: "← DRAG TO COMPARE →",
      rawLabel: "RAW PLATE / GREEN SCREEN",
      finalLabel: "FINAL COMPOSITE (NUKE)",
      itemTitle: "CGI Environment & Matte Painting Integration",
      itemProject: "Hollywood Feature Sequence",
      itemDesc: "Fine hair key extraction, realistic edge light wrap reconstruction, 3D camera projection of digital matte painting, and atmospheric volumetric depth grading.",
      pipelineTitle: "PRODUCTION PIPELINE & CORE SPECS",
      pipelineSub: "NODE ARCHITECTURE & 3D MATCHMOVE",
    },
    specs: [
      {
        code: "01",
        title: "Multi-pass CG Compositing",
        engine: "The Foundry Nuke",
        desc: "Physical reconstruction of beauty passes from Diffuse, Specular, Transmission, Z-Depth, and Cryptomatte isolation layers.",
      },
      {
        code: "02",
        title: "3D Camera Tracking & Matchmove",
        engine: "Nuke CameraTracker / Mocha Pro",
        desc: "Accurate focal solver, optical lens distortion/undistort pipelines, and 3D terrain reconstruction for pinpoint CG placement.",
      },
      {
        code: "03",
        title: "Advanced Clean-up & Rig Removal",
        engine: "Mocha & Nuke Paint / AE",
        desc: "Invisible wire removal, equipment cleanup, marker removal, and procedural restoration of authentic 35mm film grain structure.",
      },
      {
        code: "04",
        title: "Kinetic Motion & Design Systems",
        engine: "Adobe After Effects",
        desc: "Fine-tuned speed graphs, expressive kinetic typography, and editorial rhythm tailored for commercial broadcast and digital campaigns.",
      },
    ],
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
      breakdown: "BREAKDOWN",
      pipeline: "PIPELINE",
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
    breakdown: {
      tag: "RIGOR TÉCNICO & ARTÍSTICO",
      title: "VFX BREAKDOWN & PIPELINE.",
      subtitle: "Composição fotorrealista baseada em nós (node-based) e design de movimento projetados para cinema e publicidade de alto padrão.",
      dragInstruction: "← ARRASTE PARA COMPARAR →",
      rawLabel: "PLATE BRUTO / TELA VERDE",
      finalLabel: "COMPOSIÇÃO FINAL (NUKE)",
      itemTitle: "Integração de Cenário CGI & Matte Painting",
      itemProject: "Sequência Cinematográfica",
      itemDesc: "Extração de key fina de cabelo, reconstrução física de iluminação de borda (light wrap), projeção de câmera 3D de matte painting e gradação atmosférica volumétrica.",
      pipelineTitle: "PIPELINE DE PRODUÇÃO & ESPECIFICAÇÕES",
      pipelineSub: "ARQUITETURA DE NÓS & 3D MATCHMOVE",
    },
    specs: [
      {
        code: "01",
        title: "Composição CG Multi-pass",
        engine: "The Foundry Nuke",
        desc: "Reconstrução física da imagem de beleza a partir de passes de Diffuse, Specular, Transmission, Z-Depth e máscaras Cryptomatte.",
      },
      {
        code: "02",
        title: "Tracking 3D de Câmera & Matchmove",
        engine: "Nuke CameraTracker / Mocha Pro",
        desc: "Cálculo preciso de distância focal, fluxo de distorção óptica de lentes e reconstrução de terreno 3D para posicionamento preciso de CG.",
      },
      {
        code: "03",
        title: "Clean-up Avançado & Remoção de Rigs",
        engine: "Mocha & Nuke Paint / AE",
        desc: "Remoção invisível de cabos, equipamentos de filmagem e marcadores de tracking com restauração procedural de granulação de película 35mm.",
      },
      {
        code: "04",
        title: "Kinetic Motion & Design Systems",
        engine: "Adobe After Effects",
        desc: "Ajuste fino de gráficos de velocidade, tipografia cinética expressiva e ritmo editorial sob medida para veiculações comerciais.",
      },
    ],
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
