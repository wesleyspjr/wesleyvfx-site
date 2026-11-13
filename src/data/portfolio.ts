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

// Studio Reliability & Infrastructure Specs
export const STUDIO_INFRASTRUCTURE: StudioFeature[] = [
  {
    code: "01",
    title: {
      en: "Dual Workstation Redundancy",
      pt: "Redundância de Estações de Trabalho",
    },
    highlight: "ZERO HARDWARE DOWNTIME",
    desc: {
      en: "Two mirror-configured high-performance workstations with real-time project sync. If a hardware failure ever occurs, work resumes instantly on the secondary machine with zero delay.",
      pt: "Duas máquinas de alta performance espelhadas com sincronização em tempo real. Se um computador apresentar qualquer falha, o projeto continua na máquina de backup sem atrasos.",
    },
  },
  {
    code: "02",
    title: {
      en: "1 Gbps Symmetric Fiber + 5G Fallback",
      pt: "Internet 1 Gbps Simétrica + Contingência 5G",
    },
    highlight: "1000 MBPS UP/DOWN",
    desc: {
      en: "Dedicated 1 Gbps fiber for instant transfers of heavy 4K/6K EXR, DPX, and RED RAW frame sequences. Automated 5G cellular failover guarantees you never hear 'the internet went down'.",
      pt: "Fibra dedicada de 1 Gbps para transferências ultra-rápidas de sequências pesadas de EXR, DPX e RAW. Roteador com failover 5G automático: conexão garantida 24/7.",
    },
  },
  {
    code: "03",
    title: {
      en: "High-Speed Local 10GbE NAS Storage",
      pt: "Armazenamento NAS 10GbE com Redundância RAID",
    },
    highlight: "MULTI-TERABYTE NVMe/RAID",
    desc: {
      en: "High-capacity network-attached storage on 10GbE local network. Full multi-disk redundancy ensures large project caches, assets, and delivery versions are safe from drive loss.",
      pt: "Servidor NAS local em rede 10GbE com arranjo RAID redundante. Armazenamento massivo e seguro para caches pesados de simulação e versões finais de entrega.",
    },
  },
  {
    code: "04",
    title: {
      en: "Commercial The Foundry NukeX License",
      pt: "Licença Comercial The Foundry NukeX",
    },
    highlight: "LEGAL & STUDIO COMPLIANT",
    desc: {
      en: "Official, fully legitimate commercial NukeX and production tool licenses. Full technical support, official updates, and complete compliance for strict studio security audits.",
      pt: "Licenciamento comercial oficial e legítimo do NukeX e ferramentas de produção. Conformidade total para auditorias de segurança de estúdios internacionais e produtoras.",
    },
  },
  {
    code: "05",
    title: {
      en: "UPS / No-Break Power Protection",
      pt: "Proteção Elétrica com Nobreak (UPS)",
    },
    highlight: "CONTINUOUS POWER BACKUP",
    desc: {
      en: "Enterprise battery backup system protecting machines and storage. Renders and live scripts never corrupt or halt from grid fluctuations or blackouts.",
      pt: "Sistema de nobreak senoidal protegendo máquinas e armazenamento. Renders e comp scripts nunca são interrompidos ou corrompidos por oscilações na rede elétrica.",
    },
  },
];
