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
      // Aliases suportados caso os arquivos sejam salvos com nomes alternativos
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
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_9101cb6052464d8c8f6dfab947da805c~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "tiktok-awards",
    title: "Creator Ceremony Graphics & Screen Visuals",
    client: "TikTok Awards",
    category: "Motion Design",
    year: "2026",
    tools: ["After Effects", "Cinema 4D", "Broadcast Motion"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_c5b7c3964d524cc988ef24c18f2e8661~mv2.gif",
    vimeoId: "963383257",
  },
  {
    id: "actionvfx-contest",
    title: "Action VFX Sequence",
    client: "Action VFX Contest",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "Deep Compositing", "Pyrotechnics"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_6a7ba1e0b5c64d5b84bcf7b707e78c46~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "topps-wwe",
    title: "TOPPS WWE Collector Motion Reveal",
    client: "TOPPS / WWE",
    category: "Motion Design",
    year: "2026",
    tools: ["After Effects", "3D Spotlight", "Color Grade"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_aa5ab5f8657748aea12e59084f209757~mv2.gif",
    vimeoId: "963383257",
  },
  {
    id: "disney-solitaire",
    title: "Play. Tap. Escape.",
    client: "Disney",
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
    client: "Hyundai",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "3D Camera Projection", "CGI Multi-pass"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_d68b5a7c10304364b23646500771b184~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
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
    id: "bic",
    title: "Commercial Film & Product Motion",
    client: "BIC",
    category: "Commercial",
    year: "2023",
    tools: ["After Effects", "Compositing", "Cleanup"],
    gifUrl: "https://static.wixstatic.com/media/8b4d3c_d8168368d2c24a18ad3a5ad51fe8f83d~mv2.gif",
    youtubeId: "YTH5TMSUSeM",
  },
];
