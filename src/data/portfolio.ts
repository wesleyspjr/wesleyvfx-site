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
  location: "Brazil · Working Worldwide",
  available: true,
  statusText: "Available for selected projects",
  bio: "Visual Effects Compositor and Motion Designer with 5+ years crafting high-end visuals for Hollywood productions, streaming giants, and global commercial campaigns. Specialized in node-based compositing (The Foundry Nuke) and dynamic motion design (Adobe After Effects) with an obsession for physical photorealism, invisible seamless cleanup, and kinetic pacing.",
  brands: [
    { name: "Netflix", label: "Feature Film & Streaming" },
    { name: "Santander", label: "Commercial Campaigns" },
    { name: "Coca-Cola", label: "Global Advertising" },
    { name: "Disney", label: "Gaming & Franchise Promo" },
    { name: "Hyundai", label: "Automotive VFX" },
    { name: "Xiaomi", label: "Tech & Motion Identity" },
    { name: "Dell", label: "B2B & Product" },
    { name: "Audible", label: "Commercial Campaign" },
  ],
  contacts: {
    intl: {
      email: "home@wesleyvfx.com.br",
      label: "International & Remote Bookings",
      desc: "For studios, remote commercial contracts, and international feature work (USD / EUR / Wire).",
    },
    br: {
      email: "contato@wesleyvfx.com.br",
      phone: "+55 11 94249-2876",
      whatsappUrl: "https://wa.me/5511942492876?text=Hi%20Wesley,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      label: "National & Local Agencies",
      desc: "Production companies and direct brands within Brazil (BRL / Direct Invoice).",
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
    title: "Institutional Brand Film",
    client: "Santander",
    category: "VFX Compositing",
    year: "2024",
    tools: ["Nuke", "After Effects", "Mocha Pro"],
    description: "Realistic screen replacement, multi-planar tracking across complex camera movements, and seamless background environment cleanup.",
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
    description: "Atmospheric particle compositing, cinematic snow pass integration, and photometric lighting matching.",
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
    description: "Photorealistic 3D vehicle integration on high-speed live action plates, physical ground reflection matching, and ambient occlusion passes.",
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
    description: "Dynamic promotional motion design for gaming launch, rhythmic cutting, and high-energy UI element animation.",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "loud-vinijr",
    title: "Special Drop Campaign",
    client: "LOUD / Vini Jr.",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Kinetic Typography", "Glitch & Halftone"],
    description: "Edgy esports aesthetic, fast-paced kinetic typography, and audio-reactive glitch treatments for worldwide product drop.",
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
    description: "Complex action sequence featuring practical pyrotechnics blended with CG volumetric smoke, shrapnel, and lighting interaction.",
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
    description: "Fine hair key extraction, realistic edge light wrap reconstruction, 3D camera projection of digital matte painting, and atmospheric volumetric depth grading.",
  },
];

export const WORKFLOW_SPECS = [
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
];
