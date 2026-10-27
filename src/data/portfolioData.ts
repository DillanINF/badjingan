export interface Project {
  id: string;
  code: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  details: string[];
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  accent: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sound-void",
    code: "PRJ-01",
    title: "VOID SYNTH // AUDIO-REACTIVE ENGINE",
    category: "CREATIVE ENGINEERING / WEB AUDIO",
    year: "2024",
    tagline: "Procedural soundscape generator and audio-frequency visualizer in browser.",
    description: "An experimental web application generating real-time algorithmic drones, binaural beat frequencies, and SVG waveform distortions without third-party audio files. Built for underground sound collectors and ambient audio producers.",
    details: [
      "Custom Web Audio API multi-oscillator DSP architecture",
      "Dynamic FFT frequency visualizer mapped to CSS displacement filters",
      "Zero-dependency procedural tape noise and white noise synthesizers",
      "Full keyboard MIDI mapping and responsive touch matrix control"
    ],
    techStack: ["React", "TypeScript", "Web Audio API", "Canvas 2D", "Tailwind CSS"],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "#ffffff",
    image: "/images/hero-portrait.png"
  },
  {
    id: "monochrome-commerce",
    code: "PRJ-02",
    title: "OBSIDIAN // BRUTALIST STOREFRONT",
    category: "HEADLESS COMMERCE / EDITORIAL",
    year: "2024",
    tagline: "Ultra-fast monochrome apparel showcase with high-impact typography.",
    description: "A counter-cultural brutalist storefront for limited-edition underground garments. Features seamless page transitions, infinite marquee lookbooks, and high-contrast film grain filters.",
    details: [
      "Headless architecture optimized for Sub-second Time to Interactive",
      "Staggered layout shifts with Lenis inertia scrolling integration",
      "Custom magnetic product cursor and dynamic inventory distress stamps",
      "Monochrome image inversion shaders on hover"
    ],
    techStack: ["Next.js", "TypeScript", "GSAP ScrollTrigger", "Tailwind CSS", "Zustand"],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "#cccccc",
    image: "/images/creative-developer-poster.jpg"
  },
  {
    id: "archive-distress",
    code: "PRJ-03",
    title: "KINETIC ARCHIVE // VISUAL SCRAPBOOK",
    category: "EDITORIAL / INTERACTION DESIGN",
    year: "2023",
    tagline: "Curated archive of subversive typography and photocopied textures.",
    description: "An interactive digital zine exploring broken printing methods, photocopy degradation, and brutalist web layouts. Includes custom scanline shaders and draggable viewport elements.",
    details: [
      "Scroll-driven scrubbing with dual-speed parallax text layers",
      "Dynamic SVG displacement maps generating live photocopy jitter",
      "Responsive editorial layout with CSS subgrid and fluid typography",
      "Accessible keyboard navigation adhering to WCAG 2.1 AA standards"
    ],
    techStack: ["React", "TypeScript", "Framer Motion", "Lenis", "Tailwind CSS"],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "#ffffff",
    image: "/images/hero-portrait.png"
  },
  {
    id: "brutal-terminal",
    code: "PRJ-04",
    title: "RAW // SYSTEM UTILITIES & SHELL",
    category: "DEVELOPER TOOLING / CLI INTERFACE",
    year: "2023",
    tagline: "Browser-based developer console and performance diagnostics tool.",
    description: "A terminal interface tailored for rapid asset inspection, CSS glitch benchmark testing, and memory leak analysis in interactive animations. Minimalist, high contrast, and keyboard-first.",
    details: [
      "Virtual shell environment with command auto-completion and history buffer",
      "Real-time FPS and layout thrash monitor with SVG charts",
      "Theme switcher supporting CRT Amber, Green Phosphor, and Raw Monochrome",
      "PWA support with offline caching and background service worker"
    ],
    techStack: ["TypeScript", "Vite", "Web Workers", "Tailwind CSS"],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    accent: "#a3a3a3",
    image: "/images/creative-developer-poster.jpg"
  }
];

export const SKILLS = [
  {
    category: "CORE DEVELOPMENT",
    items: [
      { name: "React 19 / Next.js", level: "EXPERT", desc: "Server components, reactive architectures, clean state isolation" },
      { name: "TypeScript", level: "EXPERT", desc: "Strict typing, generics, robust frontend systems" },
      { name: "Vite & Tooling", level: "ADVANCED", desc: "Modern bundlers, HMR optimization, build pipelines" },
      { name: "Tailwind CSS", level: "EXPERT", desc: "Brutalist design tokens, responsive typography, custom utilities" }
    ]
  },
  {
    category: "MOTION & INTERACTION",
    items: [
      { name: "GSAP & ScrollTrigger", level: "ADVANCED", desc: "Timeline sequencing, pinning, scrub storytelling, choreography" },
      { name: "Framer Motion / Motion", level: "EXPERT", desc: "Layout animations, spring physics, gesture tracking" },
      { name: "Lenis Smooth Scroll", level: "ADVANCED", desc: "Inertial scrolling, momentum dampening, zero layout jank" },
      { name: "SVG / Canvas & Shaders", level: "PROFICIENT", desc: "Custom glitch filters, noise generation, procedural visuals" }
    ]
  },
  {
    category: "AUDIO & SENSORY",
    items: [
      { name: "Web Audio API", level: "PROFICIENT", desc: "Synthesizers, low-pass filters, procedural noise, click feedback" },
      { name: "Micro-interactions", level: "EXPERT", desc: "Magnetic buttons, cursor followers, tactile state changes" },
      { name: "Performance & A11y", level: "ADVANCED", desc: "Reduced motion, keyboard accessibility, 60fps render budget" }
    ]
  }
];
