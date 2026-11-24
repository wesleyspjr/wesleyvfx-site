import projectsConfig from "./projectsConfig.json";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "VFX Compositing" | "Motion Design" | "Commercial" | "3D & Cleanup";
  year: string;
  tools: string[];
  gifUrl?: string;
  videoUrl?: string; // Local MP4 loop
  previewMedia: string; // Active autoplay preview (GIF or MP4)
  youtubeId?: string;
  vimeoId?: string;
  videoCompleto?: {
    tipo: string;
    urlOuId: string;
  };
}

export const PROFILE = {
  name: "Wesley Junior",
  tagline: "VFX Compositor & Motion Designer",
  location: "Brazil · Working Worldwide",
  available: true,
  contacts: {
    intl: {
      email: "home@wesleyvfx.com.br",
    },
    br: {
      email: "contato@wesleyvfx.com.br",
      phone: "+55 11 94249-2876",
      whatsappUrl: "https://wa.me/5511942492876?text=Ol%C3%A1%20Wesley,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
    },
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/wesleyspjr/", handle: "wesleyspjr" },
      { name: "Instagram", url: "https://www.instagram.com/wesleyspjr/", handle: "@wesleyspjr" },
      { name: "Vimeo", url: "https://vimeo.com/user203058658", handle: "Wesley Junior" },
      { name: "YouTube", url: "https://www.youtube.com/@DarkStorm131", handle: "@DarkStorm131" },
    ],
    resumePdf: {
      en: "/docs/CV_WESLEY_JUNIOR_NUKE_COMPOSITOR_2026.pdf",
      pt: "/docs/CV_WESLEY_JUNIOR_COMPOSITOR_NUKE_2026.pdf",
      enAlt: "/docs/Wesley_Junior_Resume_EN.pdf",
      ptAlt: "/docs/Wesley_Junior_Curriculo_PT.pdf"
    },
  },
  reels: {
    compositing: {
      id: "compositing",
      title: "Compositing Reel",
      year: "2025/2026",
      youtubeId: "YTH5TMSUSeM",
      vimeoId: undefined as string | undefined,
      duration: "01:24",
      highlight: "Nuke Multi-pass · CGI Integration · Cleanups · 3D Tracking",
    },
    motion: {
      id: "motion",
      title: "Motion Design Reel",
      year: "2025/2026",
      youtubeId: undefined as string | undefined,
      vimeoId: "963383257",
      duration: "01:10",
      highlight: "After Effects · Kinetic Typography · Commercial Styleframes",
    },
  },
};

// 9 Selected Works loaded directly from projectsConfig.json:
export const PROJECTS: Project[] = projectsConfig.projetos.map((p) => ({
  id: p.id,
  title: p.titulo,
  client: p.cliente,
  category: p.categoria as any,
  year: p.ano,
  tools: [],
  previewMedia: p.autoplayMedia,
  gifUrl: p.autoplayMedia,
  videoUrl: p.autoplayMedia.endsWith(".mp4") ? p.autoplayMedia : undefined,
  youtubeId: p.videoCompleto.tipo === "youtube" ? p.videoCompleto.urlOuId : undefined,
  vimeoId: p.videoCompleto.tipo === "vimeo" ? p.videoCompleto.urlOuId : undefined,
  videoCompleto: p.videoCompleto,
}));
