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
}

export interface BreakdownPair {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  project: string;
  tools: string[];
  beforeImage: string;
  afterImage: string;
  beforeLabel: {
    en: string;
    pt: string;
  };
  afterLabel: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
}

export interface StudioFeature {
  code: string;
  title: {
    en: string;
    pt: string;
  };
  highlight: string;
  desc: {
    en: string;
    pt: string;
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
    resumePdf: "/docs/Wesley_Junior_Resume.pdf",
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

// 9 Selected Works in exact requested order:
// 1-MrBeast, 2-TikTok Awards, 3-Action VFX Contest, 4-TOPPS_WWE, 5-Disney, 6-Coca-Cola, 7-Hyundai, 8-Santander, 9-Bic
export const PROJECTS: Project[] = [
  {
    id: "mrbeast",
    title: "Special Production & VFX",
    client: "MrBeast",
    category: "VFX Compositing",
    year: "2026",
    tools: ["Nuke", "After Effects", "Tracking"],
    gifUrl: "/projects/mrbeast.gif",
    previewMedia: "/projects/mrbeast.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "tiktok-awards",
    title: "Creator Ceremony Graphics & Screen Visuals",
    client: "TikTok Awards",
    category: "Motion Design",
    year: "2026",
    tools: ["After Effects", "Cinema 4D", "Broadcast Motion"],
    gifUrl: "/projects/tiktok-awards.gif",
    previewMedia: "/projects/tiktok-awards.gif",
    vimeoId: "963383257",
  },
  {
    id: "actionvfx-contest",
    title: "Action VFX Sequence",
    client: "Action VFX Contest",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "Deep Compositing", "Pyrotechnics"],
    gifUrl: "/projects/actionvfx-contest.gif",
    previewMedia: "/projects/actionvfx-contest.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "topps-wwe",
    title: "TOPPS WWE Collector Motion Reveal",
    client: "TOPPS / WWE",
    category: "Motion Design",
    year: "2026",
    tools: ["After Effects", "3D Spotlight", "Color Grade"],
    gifUrl: "/projects/topps-wwe.gif",
    previewMedia: "/projects/topps-wwe.gif",
    vimeoId: "963383257",
  },
  {
    id: "disney-solitaire",
    title: "Play. Tap. Escape.",
    client: "Disney",
    category: "Motion Design",
    year: "2024",
    tools: ["After Effects", "Cinema 4D", "Sound Design"],
    gifUrl: "/projects/disney-solitaire.gif",
    previewMedia: "/projects/disney-solitaire.gif",
    vimeoId: "963383257",
  },
  {
    id: "coca-cola",
    title: "Holidays Are Coming",
    client: "Coca-Cola",
    category: "Commercial",
    year: "2024",
    tools: ["After Effects", "Color Grading", "Particle FX"],
    gifUrl: "/projects/coca-cola.gif",
    previewMedia: "/projects/coca-cola.gif",
    vimeoId: "963383257",
  },
  {
    id: "hyundai-creta",
    title: "Automotive Reveal & Breakdown",
    client: "Hyundai",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "3D Camera Projection", "CGI Multi-pass"],
    gifUrl: "/projects/hyundai-creta.gif",
    previewMedia: "/projects/hyundai-creta.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "santander",
    title: "Campanha Institucional",
    client: "Santander",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "After Effects", "Mocha Pro"],
    gifUrl: "/projects/santander.gif",
    previewMedia: "/projects/santander.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "bic",
    title: "Commercial Film & Product Motion",
    client: "BIC",
    category: "Commercial",
    year: "2023",
    tools: ["After Effects", "Compositing", "Cleanup"],
    gifUrl: "/projects/bic.gif",
    previewMedia: "/projects/bic.gif",
    youtubeId: "YTH5TMSUSeM",
  },
];

// Breakdown comparisons using user's actual local files in public/breakdowns/
export const BREAKDOWN_COMPARISONS: Record<"greenscreen" | "cleanup", BreakdownPair> = {
  greenscreen: {
    id: "greenscreen",
    title: {
      en: "Green Screen Keying & Environment Integration",
      pt: "Extração de Green Screen & Integração de Cenário",
    },
    project: "Production Feature Sequence",
    tools: ["Nuke", "IBK Colour", "Light Wrap", "Depth Grade"],
    beforeImage: "/breakdowns/Green_Before.png",
    afterImage: "/breakdowns/Green_After.png",
    beforeLabel: {
      en: "RAW GREEN SCREEN PLATE",
      pt: "PLATE BRUTO GREEN SCREEN",
    },
    afterLabel: {
      en: "FINAL COMPOSITE (NUKE)",
      pt: "COMPOSIÇÃO FINAL (NUKE)",
    },
    description: {
      en: "Sub-pixel hair key extraction, realistic edge illumination reconstruction matching background plate, and photometric color grading.",
      pt: "Extração sub-pixel de fios de cabelo, reconstrução de luz de borda integrada e gradação fotométrica de cor.",
    },
  },
  cleanup: {
    id: "cleanup",
    title: {
      en: "Complex Rig, Wire & Marker Removal",
      pt: "Clean-up Complexo, Remoção de Cabos & Marcadores",
    },
    project: "Commercial Live Plate",
    tools: ["Nuke Paint", "Mocha Pro", "Clean Patch", "Grain Match"],
    beforeImage: "/breakdowns/Clean_Before.png",
    afterImage: "/breakdowns/Clean_After.png",
    beforeLabel: {
      en: "PLATE WITH RIGS & MARKERS",
      pt: "PLATE COM CABOS & MARCADORES",
    },
    afterLabel: {
      en: "SEAMLESS CLEAN PLATE",
      pt: "CLEAN PLATE FINAL INVISÍVEL",
    },
    description: {
      en: "Invisible rig removal, tracking marker reconstruction, optical motion blur matching, and authentic film grain synthesis.",
      pt: "Remoção invisível de equipamentos e cabos, reconstrução de texturas, motion blur e síntese procedural de granulação.",
    },
  },
};

// Studio Reliability & Infrastructure Specs (6 items for a balanced 3x2 grid)
export const STUDIO_INFRASTRUCTURE: StudioFeature[] = [
  {
    code: "01",
    title: {
      en: "Dual Workstations",
      pt: "Duas Máquinas Espelhadas",
    },
    highlight: "ZERO HARDWARE DOWNTIME",
    desc: {
      en: "If a computer ever fails, the secondary backup workstation takes over in seconds. Zero delays.",
      pt: "Caiu o computador? A máquina de backup assume no segundo seguinte. Zero atraso na entrega.",
    },
  },
  {
    code: "02",
    title: {
      en: "1 Gbps Fiber + 5G Fallback",
      pt: "Internet 1 Gbps + Backup 5G",
    },
    highlight: "ALWAYS CONNECTED",
    desc: {
      en: "Instant 4K/6K EXR transfers. Automatic 5G failover means you never hear 'the internet dropped'.",
      pt: "Zero desculpas de 'caiu a internet'. 1000 Mb/s dedicados com contingência móvel automática.",
    },
  },
  {
    code: "03",
    title: {
      en: "Local 10GbE NAS RAID",
      pt: "Storage NAS 10GbE em RAID",
    },
    highlight: "FAST & REDUNDANT",
    desc: {
      en: "Multi-terabyte high-speed network storage. Heavy caches and master files protected against disk loss.",
      pt: "Armazenamento massivo em rede de alta velocidade com redundância total para seus arquivos e renders.",
    },
  },
  {
    code: "04",
    title: {
      en: "Official NukeX Commercial License",
      pt: "Licença Comercial NukeX",
    },
    highlight: "100% LEGAL & COMPLIANT",
    desc: {
      en: "Fully compliant commercial The Foundry license. Approved for strict studio and security audits.",
      pt: "Software 100% legalizado pela The Foundry. Total conformidade com auditorias de grandes estúdios.",
    },
  },
  {
    code: "05",
    title: {
      en: "UPS Battery Protection",
      pt: "Nobreak Senoidal (UPS)",
    },
    highlight: "CONTINUOUS POWER",
    desc: {
      en: "Power outages won't stop the pipeline. Renders and comp scripts remain safe and running.",
      pt: "Caiu a energia do bairro? O nobreak mantém máquinas e renders rodando sem corromper arquivos.",
    },
  },
  {
    code: "06",
    title: {
      en: "Color Management (ACES / OCIO)",
      pt: "Pipeline de Cor (ACES / OCIO)",
    },
    highlight: "CINEMATIC FIDELITY",
    desc: {
      en: "Industry-standard color pipelines ensuring pinpoint consistency from camera RAW to final delivery.",
      pt: "Fidelidade absoluta de cor em padrão de cinema, garantindo consistência do RAW ao master final.",
    },
  },
];
