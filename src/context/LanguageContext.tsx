"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import siteTexts from "@/data/siteTexts.json";

export type Language = "en" | "pt";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
  texts: typeof siteTexts;
}

const DICTIONARY: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      reels: siteTexts.menu.en.reels,
      works: siteTexts.menu.en.trabalhos,
      breakdown: siteTexts.menu.en.breakdown,
      pipeline: siteTexts.menu.en.pipeline,
      contact: siteTexts.menu.en.contato,
      resume: siteTexts.menu.en.curriculo,
      getInTouch: siteTexts.menu.en.entrarEmContato,
    },
    hero: {
      status: siteTexts.perfil.disponibilidade.en,
      location: siteTexts.perfil.localizacao.en,
      headline: siteTexts.hero.en.tituloPrincipal,
      bio: siteTexts.hero.en.biografia,
      compositingReelTab: siteTexts.hero.en.abaReelComposicao,
      motionReelTab: siteTexts.hero.en.abaReelMotion,
      clickToPlay: siteTexts.hero.en.cliqueParaAssistir,
      watchSound: siteTexts.hero.en.assistirComSom,
      fullscreen: siteTexts.hero.en.telaCheia,
    },
    brands: {
      title: siteTexts.marcasCarrossel.en.tituloFaixa,
    },
    imdb: {
      tag: siteTexts.imdbFilmes.en.tag,
      title: siteTexts.imdbFilmes.en.titulo,
      btn: siteTexts.imdbFilmes.en.botaoVerImdb,
    },
    works: {
      tag: siteTexts.projetosSelecionados.en.tag,
      title: siteTexts.projetosSelecionados.en.titulo,
      subtitle: siteTexts.projetosSelecionados.en.subtitulo,
      categories: {
        all: siteTexts.projetosSelecionados.en.categorias.todos,
        vfx: siteTexts.projetosSelecionados.en.categorias.vfx,
        motion: siteTexts.projetosSelecionados.en.categorias.motion,
        commercial: siteTexts.projetosSelecionados.en.categorias.comercial,
      },
      clickPrompt: siteTexts.projetosSelecionados.en.cliqueParaAssistir,
    },
    breakdown: {
      tag: siteTexts.breakdownAntesDepois.en.tag,
      title: siteTexts.breakdownAntesDepois.en.titulo,
      subtitle: siteTexts.breakdownAntesDepois.en.subtitulo,
      dragInstruction: siteTexts.breakdownAntesDepois.en.instrucaoArrastar,
      rawLabel: siteTexts.breakdownAntesDepois.en.comparacoes.greenscreen.labelAntes,
      finalLabel: siteTexts.breakdownAntesDepois.en.comparacoes.greenscreen.labelDepois,
      itemTitle: siteTexts.breakdownAntesDepois.en.comparacoes.greenscreen.titulo,
      itemProject: siteTexts.breakdownAntesDepois.en.comparacoes.greenscreen.projeto,
      itemDesc: siteTexts.breakdownAntesDepois.en.comparacoes.greenscreen.descricao,
    },
    specs: siteTexts.estudioInfraestrutura.en.itens.map(item => ({
      code: item.codigo,
      title: item.titulo,
      engine: item.destaque,
      desc: item.descricao,
    })),
    contact: {
      tag: siteTexts.contato.en.tag,
      title: siteTexts.contato.en.titulo,
      subtitle: siteTexts.contato.en.subtitulo,
      intl: {
        badge: siteTexts.contato.en.internacional.etiqueta,
        currency: siteTexts.contato.en.internacional.moeda,
        title: siteTexts.contato.en.internacional.titulo,
        desc: siteTexts.contato.en.internacional.descricao,
        cta: siteTexts.contato.en.internacional.botao,
      },
      br: {
        badge: siteTexts.contato.en.brasil.etiqueta,
        currency: siteTexts.contato.en.brasil.moeda,
        title: siteTexts.contato.en.brasil.titulo,
        desc: siteTexts.contato.en.brasil.descricao,
        cta: siteTexts.contato.en.brasil.botao,
      },
    },
    footer: {
      role: siteTexts.rodape.en.funcao,
      resume: siteTexts.rodape.en.curriculo,
      top: siteTexts.rodape.en.topo,
      rights: siteTexts.rodape.en.direitos,
    },
  },
  pt: {
    nav: {
      reels: siteTexts.menu.pt.reels,
      works: siteTexts.menu.pt.trabalhos,
      breakdown: siteTexts.menu.pt.breakdown,
      pipeline: siteTexts.menu.pt.pipeline,
      contact: siteTexts.menu.pt.contato,
      resume: siteTexts.menu.pt.curriculo,
      getInTouch: siteTexts.menu.pt.entrarEmContato,
    },
    hero: {
      status: siteTexts.perfil.disponibilidade.pt,
      location: siteTexts.perfil.localizacao.pt,
      headline: siteTexts.hero.pt.tituloPrincipal,
      bio: siteTexts.hero.pt.biografia,
      compositingReelTab: siteTexts.hero.pt.abaReelComposicao,
      motionReelTab: siteTexts.hero.pt.abaReelMotion,
      clickToPlay: siteTexts.hero.pt.cliqueParaAssistir,
      watchSound: siteTexts.hero.pt.assistirComSom,
      fullscreen: siteTexts.hero.pt.telaCheia,
    },
    brands: {
      title: siteTexts.marcasCarrossel.pt.tituloFaixa,
    },
    imdb: {
      tag: siteTexts.imdbFilmes.pt.tag,
      title: siteTexts.imdbFilmes.pt.titulo,
      btn: siteTexts.imdbFilmes.pt.botaoVerImdb,
    },
    works: {
      tag: siteTexts.projetosSelecionados.pt.tag,
      title: siteTexts.projetosSelecionados.pt.titulo,
      subtitle: siteTexts.projetosSelecionados.pt.subtitulo,
      categories: {
        all: siteTexts.projetosSelecionados.pt.categorias.todos,
        vfx: siteTexts.projetosSelecionados.pt.categorias.vfx,
        motion: siteTexts.projetosSelecionados.pt.categorias.motion,
        commercial: siteTexts.projetosSelecionados.pt.categorias.comercial,
      },
      clickPrompt: siteTexts.projetosSelecionados.pt.cliqueParaAssistir,
    },
    breakdown: {
      tag: siteTexts.breakdownAntesDepois.pt.tag,
      title: siteTexts.breakdownAntesDepois.pt.titulo,
      subtitle: siteTexts.breakdownAntesDepois.pt.subtitulo,
      dragInstruction: siteTexts.breakdownAntesDepois.pt.instrucaoArrastar,
      rawLabel: siteTexts.breakdownAntesDepois.pt.comparacoes.greenscreen.labelAntes,
      finalLabel: siteTexts.breakdownAntesDepois.pt.comparacoes.greenscreen.labelDepois,
      itemTitle: siteTexts.breakdownAntesDepois.pt.comparacoes.greenscreen.titulo,
      itemProject: siteTexts.breakdownAntesDepois.pt.comparacoes.greenscreen.projeto,
      itemDesc: siteTexts.breakdownAntesDepois.pt.comparacoes.greenscreen.descricao,
    },
    specs: siteTexts.estudioInfraestrutura.pt.itens.map(item => ({
      code: item.codigo,
      title: item.titulo,
      engine: item.destaque,
      desc: item.descricao,
    })),
    contact: {
      tag: siteTexts.contato.pt.tag,
      title: siteTexts.contato.pt.titulo,
      subtitle: siteTexts.contato.pt.subtitulo,
      intl: {
        badge: siteTexts.contato.pt.internacional.etiqueta,
        currency: siteTexts.contato.pt.internacional.moeda,
        title: siteTexts.contato.pt.internacional.titulo,
        desc: siteTexts.contato.pt.internacional.descricao,
        cta: siteTexts.contato.pt.internacional.botao,
      },
      br: {
        badge: siteTexts.contato.pt.brasil.etiqueta,
        currency: siteTexts.contato.pt.brasil.moeda,
        title: siteTexts.contato.pt.brasil.titulo,
        desc: siteTexts.contato.pt.brasil.descricao,
        cta: siteTexts.contato.pt.brasil.botao,
      },
    },
    footer: {
      role: siteTexts.rodape.pt.funcao,
      resume: siteTexts.rodape.pt.curriculo,
      top: siteTexts.rodape.pt.topo,
      rights: siteTexts.rodape.pt.direitos,
    },
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
  texts: siteTexts,
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
    <LanguageContext.Provider value={{ lang, setLang, t, texts: siteTexts }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
