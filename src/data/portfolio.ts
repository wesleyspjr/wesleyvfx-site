export interface Project {
  id: string;
  title: string;
  client: string;
  category: "VFX Compositing" | "Motion Design" | "Commercial" | "3D & Cleanup";
  year: string;
  tools: string[];
  description: string;
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  aspectRatio?: "16/9" | "9/16" | "4/5";
  featured?: boolean;
}

export interface BreakdownPair {
  id: string;
  title: string;
  project: string;
  tools: string[];
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
}

export const PROFILE = {
  name: "Wesley Junior",
  tagline: "VFX Compositor & Motion Designer",
  location: "Jundiaí, SP — Brasil",
  available: true,
  statusText: "Disponível para projetos selecionados",
  bio: "Com mais de 5 anos de atuação entre o mercado publicitário internacional e produções cinematográficas de alto calibre, entrego soluções de composição e animação que unem precisão técnica milimétrica e sensibilidade visual. Especialista em Nuke e After Effects para integração fotorrealista, cleanup complexo, 3D tracking e motion design de alto impacto.",
  brands: [
    { name: "Netflix", label: "Streaming & Filmes" },
    { name: "Santander", label: "Comercial & Campanhas" },
    { name: "Coca-Cola", label: "Publicidade Global" },
    { name: "Disney", label: "Gaming & Promo" },
    { name: "Hyundai", label: "Automotivo & VFX" },
    { name: "Xiaomi", label: "Tech & Motion" },
    { name: "Dell", label: "Hardware & B2B" },
    { name: "Audible", label: "Campanha & Motion" },
    { name: "LOUD / Vini Jr.", label: "E-Sports & Branding" },
  ],
  contacts: {
    br: {
      email: "contato@wesleyvfx.com.br",
      phone: "+55 11 94249-2876",
      whatsappUrl: "https://wa.me/5511942492876?text=Ol%C3%A1%20Wesley,%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      label: "Brasil & Projetos Nacionais",
      desc: "Orçamentos para agências, produtoras e marcas brasileiras.",
    },
    intl: {
      email: "home@wesleyvfx.com.br",
      label: "International & Global Direct",
      desc: "For global agencies, studios and remote feature/commercial contracts (USD/EUR).",
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
      youtubeId: "V9G5eT3HVMc",
      duration: "01:24",
      highlight: "Nuke Multi-pass · CGI Integration · Cleanups · 3D Tracking",
    },
    motion: {
      id: "motion",
      title: "Motion Design Reel",
      year: "2025/2026",
      youtubeId: "Yy6fByUmPuE",
      duration: "01:10",
      highlight: "After Effects · Kinetic Typography · Commercial Styleframes",
    },
  },
};

export const PROJECTS: Project[] = [
  {
    id: "santander",
    title: "Campanha Institucional",
    client: "Santander",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "After Effects", "Mocha Pro"],
    description: "Screen replacement realista, tracking de câmera complexo em múltiplos planos de movimento e cleanup de cenário.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "V9G5eT3HVMc",
    featured: true,
  },
  {
    id: "coca-cola",
    title: "Holidays Are Coming",
    client: "Coca-Cola",
    category: "Commercial",
    year: "2024",
    tools: ["After Effects", "Color Grading", "Particle FX"],
    description: "Composição de elementos atmosféricos natalinos, integração de iluminação e finalização cinematográfica.",
    thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "Yy6fByUmPuE",
    featured: true,
  },
  {
    id: "hyundai-breakdown",
    title: "Automotive VFX Breakdown",
    client: "Hyundai",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "3D Camera Projection", "CGI Multi-pass"],
    description: "Integração fotográfica de modelo 3D automotivo em plate real em alta velocidade, reflexos físicos e passes de oclusão.",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "disney-solitaire",
    title: "Play. Tap. Escape.",
    client: "Disney Solitaire",
    category: "Motion Design",
    year: "2024",
    tools: ["After Effects", "Cinema 4D", "Sound Design Sync"],
    description: "Motion design dinâmico para campanha promocional de game, transições rítmicas e animação de interface interativa.",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "loud-vinijr",
    title: "Special Drop Announcement",
    client: "LOUD / Vini Jr.",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Kinetic Typography", "Glitch & Halftone"],
    description: "Estética agressiva de e-sports, kinetic typography de alto impacto e sincronia com beat musical para anúncio global.",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "actionvfx-contest",
    title: "Cinematic Action Shot",
    client: "Action VFX Contest",
    category: "VFX Compositing",
    year: "2023",
    tools: ["Nuke", "Deep Compositing", "CG Explosions & Debris"],
    description: "Composição de cena de ação cinematográfica com múltiplos elementos pirotécnicos práticos e CG, fumaça volumétrica e color match de iluminação pontual.",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
];

export const BREAKDOWN_ITEMS: BreakdownPair[] = [
  {
    id: "sci-fi-comp",
    title: "CGI Environment & Matte Painting Integration",
    project: "Hollywood Feature Sequence",
    tools: ["Nuke", "3D Projection", "Atmospheric Haze", "Edge Blending"],
    beforeImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    beforeLabel: "RAW PLATE / GREEN SCREEN",
    afterLabel: "FINAL COMPOSITE (NUKE)",
    description: "Extração de key fina de cabelo, reconstrução de iluminação de borda (light wrap), projeção de câmera 3D de matte painting e gradação de cores atmosféricas.",
  },
];

export const WORKFLOW_SPECS = [
  {
    code: "01",
    title: "Multi-pass CG Compositing",
    engine: "The Foundry Nuke",
    desc: "Reconstrução física de beleza (Beauty Pass) a partir de Diffuse, Specular, Transmission, Z-Depth e passes de iluminação criptografados (Cryptomatte).",
  },
  {
    code: "02",
    title: "3D Camera Tracking & Matchmove",
    engine: "Nuke CameraTracker / Mocha Pro",
    desc: "Solução precisa de câmera focal, correção de distorção de lente (Lens Distortion/Undistort) e mapeamento de terreno 3D para posicionamento de elementos.",
  },
  {
    code: "03",
    title: "Advanced Clean-up & Rig Removal",
    engine: "Mocha & Nuke Paint / AE",
    desc: "Remoção invisível de cabos, equipamentos, marcas de tracking e reconstrução procedural de texturas e grãos orgânicos de película.",
  },
  {
    code: "04",
    title: "Kinetic Motion & Design Systems",
    engine: "Adobe After Effects",
    desc: "Design em movimento com curvas de velocidade rigorosamente ajustadas, tipografia expressiva e pós-processamento para campanhas comerciais.",
  },
];
