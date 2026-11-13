export interface Project {
  id: string;
  title: string;
  client: string;
  category: "VFX Compositing" | "Motion Design" | "Commercial" | "3D & Cleanup";
  year: string;
  tools: string[];
  gifUrl: string; // Original gif from Wix
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
    resumePdf: "https://www.wesleyvfx.com.br/_files/ugd/8b4d3c_8506cf042c9d40289d02f1d7957b2bab.pdf",
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

// Exact 9 Projects from user's current site screenshot (3x3 grid)
export const PROJECTS: Project[] = [
  {
    id: "actionvfx-contest",
    title: "Action VFX Sequence",
    client: "Action VFX Contest",
    category: "VFX Compositing",
    year: "2023",
    tools: ["Nuke", "Deep Compositing", "Pyrotechnics"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_6a7ba1e0b5c64d5b84bcf7b707e78c46~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "disney-solitaire",
    title: "Play. Tap. Escape.",
    client: "Disney Solitaire",
    category: "Motion Design",
    year: "2024",
    tools: ["After Effects", "Cinema 4D", "Sound Design"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_d11c2ccce0744136ab7e684dfc3aef2c~mv2.gif",
    vimeoId: "963383257",
  },
  {
    id: "coca-cola",
    title: "Holidays Are Coming",
    client: "Coca-Cola",
    category: "Commercial",
    year: "2024",
    tools: ["After Effects", "Color Grading", "Particle FX"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_9382a1c18b1247819ad394ccafbbcfc9~mv2.gif",
    vimeoId: "963383257",
  },
  {
    id: "hyundai-creta",
    title: "Automotive Reveal & Breakdown",
    client: "Hyundai Creta",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "3D Camera Projection", "CGI Multi-pass"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_d68b5a7c10304364b23646500771b184~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "audible-pumpingpetals",
    title: "Pumping Petals Campaign",
    client: "Audible",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Cell Animation Sync", "Color Grade"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_c5b7c3964d524cc988ef24c18f2e8661~mv2.gif",
    vimeoId: "963383257",
  },
  {
    id: "santander",
    title: "Campanha Institucional",
    client: "Santander",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "After Effects", "Mocha Pro"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_4344250d0ce246a8853fa5f3b06b9f34~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "loud-vinijr",
    title: "São Paulo 2073 Drop",
    client: "LOUD / Vini Jr.",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Kinetic Typography", "Glitch"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_9101cb6052464d8c8f6dfab947da805c~mv2.gif",
    vimeoId: "963383257",
  },
  {
    id: "nescau",
    title: "Commercial Motion Film",
    client: "Nescau",
    category: "Commercial",
    year: "2023",
    tools: ["After Effects", "Compositing", "3D Product"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_d8168368d2c24a18ad3a5ad51fe8f83d~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "antarctica",
    title: "Exploration of Science and Tech",
    client: "Antarctica",
    category: "VFX Compositing",
    year: "2023",
    tools: ["Nuke", "Matte Painting", "Atmosphere"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_aa5ab5f8657748aea12e59084f209757~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
];

// Breakdown comparisons: Green Screen & Cleanup
export const BREAKDOWN_COMPARISONS: Record<"greenscreen" | "cleanup", BreakdownPair> = {
  greenscreen: {
    id: "greenscreen",
    title: {
      en: "Green Screen Keying & Environment Integration",
      pt: "Extração de Green Screen & Integração de Cenário",
    },
    project: "Hollywood Feature Sequence",
    tools: ["Nuke", "IBK Colour / Primatte", "Light Wrap", "Depth Grade"],
    beforeImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    beforeLabel: {
      en: "RAW GREEN SCREEN PLATE",
      pt: "PLATE BRUTO GREEN SCREEN",
    },
    afterLabel: {
      en: "FINAL COMPOSITE (NUKE)",
      pt: "COMPOSIÇÃO FINAL (NUKE)",
    },
    description: {
      en: "Fine hair spill suppression, physical edge light reconstruction matching the background digital matte painting, and atmospheric volumetric depth grading.",
      pt: "Supressão fina de spill de cabelo, reconstrução física de luz de borda integrada ao matte painting 3D e gradação volumétrica de atmosfera.",
    },
  },
  cleanup: {
    id: "cleanup",
    title: {
      en: "Complex Rig, Wire & Marker Removal",
      pt: "Clean-up Complexo, Remoção de Cabos & Marcadores",
    },
    project: "Commercial High-Speed Plate",
    tools: ["Nuke Paint", "Mocha Pro Planar", "Frame-by-Frame Patch", "Film Grain Match"],
    beforeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1600&auto=format&fit=crop",
    beforeLabel: {
      en: "PLATE WITH RIGS & MARKERS",
      pt: "PLATE COM CABOS & MARCADORES",
    },
    afterLabel: {
      en: "SEAMLESS CLEAN PLATE",
      pt: "CLEAN PLATE FINAL INVISÍVEL",
    },
    description: {
      en: "Invisible rig removal, camera tracking marker replacement, motion blur reconstruction, and authentic 35mm film grain preservation across moving camera shots.",
      pt: "Remoção invisível de cabos e equipamentos, reconstituição de texturas e motion blur, e preservação procedural do grão original de película 35mm.",
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
