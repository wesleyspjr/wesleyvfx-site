export interface Project {
  id: string;
  title: string;
  client: string;
  category: "VFX Compositing" | "Motion Design" | "Commercial" | "3D & Cleanup";
  year: string;
  tools: string[];
  description: {
    en: string;
    pt: string;
  };
  thumbnail: string;
  videoPreview: string; // Video loop for autoplay
  youtubeId?: string;
  vimeoId?: string;
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
  description: {
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
      whatsappUrl: "https://wa.me/5511942492876?text=Hi%20Wesley,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
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

// 9 projects for the curated 3x3 grid with autoplay video loops
export const PROJECTS: Project[] = [
  {
    id: "santander",
    title: "Institutional Brand Film",
    client: "Santander",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "After Effects", "Mocha Pro"],
    description: {
      en: "Realistic screen replacement, multi-planar tracking across complex camera movements, and seamless background environment cleanup.",
      pt: "Substituição realista de telas, tracking multi-planar em movimentos complexos de câmera e limpeza invisível de cenário.",
    },
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-working-in-a-lab-43405-large.mp4",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "coca-cola",
    title: "Holidays Are Coming",
    client: "Coca-Cola",
    category: "Commercial",
    year: "2024",
    tools: ["After Effects", "Color Grading", "Particle FX"],
    description: {
      en: "Atmospheric particle compositing, cinematic snow pass integration, and photometric lighting matching.",
      pt: "Composição de partículas atmosféricas, integração de camadas de neve e correspondência fotométrica de luz.",
    },
    thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-sparkler-particles-bursting-in-the-dark-41712-large.mp4",
    vimeoId: "963383257",
  },
  {
    id: "hyundai-breakdown",
    title: "Automotive VFX Breakdown",
    client: "Hyundai",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "3D Camera Projection", "CGI Multi-pass"],
    description: {
      en: "Photorealistic 3D vehicle integration on high-speed live action plates, physical ground reflection matching, and ambient occlusion passes.",
      pt: "Integração 3D de veículo em plate em alta velocidade, reflexos físicos e passes de oclusão.",
    },
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-car-headlights-illuminating-a-dark-tunnel-42021-large.mp4",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "disney-solitaire",
    title: "Play. Tap. Escape.",
    client: "Disney",
    category: "Motion Design",
    year: "2024",
    tools: ["After Effects", "Cinema 4D", "Sound Design Sync"],
    description: {
      en: "Dynamic promotional motion design for gaming launch, rhythmic cutting, and high-energy UI element animation.",
      pt: "Motion design promocional para lançamento de game, cortes rítmicos e animação de interface interativa.",
    },
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-colorful-neon-lights-in-motion-42517-large.mp4",
    vimeoId: "963383257",
  },
  {
    id: "loud-vinijr",
    title: "Special Drop Campaign",
    client: "LOUD / Vini Jr.",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Kinetic Typography", "Glitch & Halftone"],
    description: {
      en: "Edgy esports aesthetic, fast-paced kinetic typography, and audio-reactive glitch treatments for worldwide product drop.",
      pt: "Estética de e-sports, kinetic typography de alto impacto e sincronia com beat musical para anúncio global.",
    },
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31911-large.mp4",
    vimeoId: "963383257",
  },
  {
    id: "actionvfx-contest",
    title: "Cinematic Action Shot",
    client: "Action VFX Contest",
    category: "VFX Compositing",
    year: "2023",
    tools: ["Nuke", "Deep Compositing", "CG Explosions & Debris"],
    description: {
      en: "Complex action sequence featuring practical pyrotechnics blended with CG volumetric smoke, shrapnel, and lighting interaction.",
      pt: "Composição de cena de ação com múltiplos elementos pirotécnicos práticos, CG e fumaça volumétrica.",
    },
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-burst-of-orange-sparks-in-the-dark-41711-large.mp4",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "netflix-feature",
    title: "Feature Film Cleanup & Set Extension",
    client: "Netflix",
    category: "VFX Compositing",
    year: "2023",
    tools: ["Nuke", "3D Projection", "Clean Plate Paint"],
    description: {
      en: "Seamless digital set extension and marker cleanup on 6K RED RAW plates for international streaming production.",
      pt: "Extensão digital de cenário e limpeza invisível de marcadores em plates 6K RED RAW para streaming internacional.",
    },
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-night-view-of-a-metropolis-with-traffic-42045-large.mp4",
    youtubeId: "YTH5TMSUSeM",
  },
  {
    id: "xiaomi-launch",
    title: "Product Kinetic Launch Film",
    client: "Xiaomi",
    category: "Commercial",
    year: "2024",
    tools: ["After Effects", "Cinema 4D", "Octane Render"],
    description: {
      en: "Photorealistic hardware styling, macro lens depth-of-field animation, and typographic kinetic transitions.",
      pt: "Animação de hardware fotorrealista com profundidade de campo macro e transições tipográficas cinéticas.",
    },
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-motherboard-with-flowing-electronic-data-42774-large.mp4",
    vimeoId: "963383257",
  },
  {
    id: "audible-pumpingpetals",
    title: "Pumping Petals Promo Campaign",
    client: "Audible",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Cell Animation Sync", "Color Grade"],
    description: {
      en: "Multi-layered dynamic broadcast graphics, character art integration, and vibrant palette mastery.",
      pt: "Gráficos de transmissão dinâmicos em camadas, integração com animação tradicional e paleta vibrante.",
    },
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-fluid-colors-mixing-together-slowly-42525-large.mp4",
    vimeoId: "963383257",
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
    description: {
      en: "Fine hair key extraction, realistic edge light wrap reconstruction, 3D camera projection of digital matte painting, and atmospheric volumetric depth grading.",
      pt: "Extração de key fina de cabelo, reconstrução física de iluminação de borda (light wrap), projeção de câmera 3D de matte painting e gradação atmosférica volumétrica.",
    },
  },
];
