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
    
  title: "NASA ARTEMIS II // LUNAR EXPLORATION",
  category: "SPACE EXPLORATION / MISSION WEBSITE",
  year: "2024",
  tagline:
    "An immersive space exploration website showcasing NASA's Artemis II lunar mission.",
  description:
    "A futuristic NASA-inspired landing page dedicated to the Artemis II mission, featuring a cinematic view of Earth from space, the Orion spacecraft, the Space Launch System rocket, and the four astronauts preparing for humanity's return to the Moon. Designed with a deep-space aesthetic, modern typography, and a visually engaging layout to communicate the mission's objectives and the future of human space exploration.",
  details: [
    "Cinematic space-themed hero section featuring Earth from orbit",
    "Artemis II mission overview and lunar exploration information",
    "Visual showcase of the Orion spacecraft and Space Launch System rocket",
    "Astronaut crew presentation with a futuristic aerospace-inspired interface",
    "Responsive navigation for Home, Mission, Crew, Gallery, and Contact sections"
  ],
  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Web Design"
  ],
  demoUrl: "https://www.nasa.gov/missions/artemis/",
  githubUrl: "https://github.com",
  accent: "#0B3D91",
  image: "/images/project1.png"

  },
  {
    id: "kai-ticket-booking",
    code: "PRJ-02",
    title: "KAI // RAILWAY TICKET BOOKING",
    category: "WEB APP / TRANSPORTATION UI",
    year: "2026",
    tagline: "A train ticket booking platform with fast schedule search and a cinematic look.",
    description: "A dark-mode train reservation interface with a cinematic hero and orange accents. Users can search schedules by origin station, destination, date, and passenger count, then check the departure board and key travel information in a single page.",
    details: [
      "Schedule search form with origin/destination station selectors, a route swap button, date picker, and passenger count",
      "'Search Train Schedule' and 'Departure Board' tabs to switch between searching and real-time schedules",
      "Glassmorphism navbar with a 'My Tickets' count badge and a Login / Sign In button",
      "Travel info panel covering on-time performance, H-45 booking window, and onboard facilities",
      "Floating chatbot button for passenger support"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demoUrl: "https://kai-layanan-web.vercel.app/",
    githubUrl: "https://github.com/DillanINF/KAI",
    accent: "#F58220",
    image: "/images/project2.png"
  },
  {
    id: "tumbler-sijambi",
    code: "PRJ-03",
    title: "TUMBLER SIJAMBI // PRODUCT LANDING PAGE",
    category: "LANDING PAGE / PRODUCT SHOWCASE",
    year: "2026",
    tagline: "A bold dark-mode landing page for premium aluminium tumblers built for the outdoors.",
    description: "A high-contrast product landing page for Tumbler Sijambi, featuring a hero with three signature bottle designs in black, red, and blue, a dramatic mountain silhouette backdrop, and red accents that carry an adventurous, outdoor identity. Visitors can explore features, temperature resistance, variants, and reviews, then order directly from the page.",
    details: [
      "Cinematic hero with a bold condensed headline and the three-bottle product lineup",
      "Sticky navbar with section links (Features, Temperature Resistance, Variants, Reviews) and a cart button",
      "Primary 'Order Now' and secondary 'View Variants' calls to action",
      "Mountain silhouette background with a scroll indicator for a guided storytelling flow",
      "Mountain-themed illustrated bottle artwork reinforcing the outdoor brand identity"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demoUrl: "https://tumbler-sijambi.vercel.app/",
    githubUrl: "https://github.com/DillanINF/tumblerSIJAMBI",
    accent: "#E02030",
    image: "/images/project3.png"
  },
  {
    id: "bali-destinations",
    code: "PRJ-04",
    title: "BALI // DESTINATION EXPLORER",
    category: "TRAVEL / DESTINATION SHOWCASE",
    year: "2026",
    tagline: "An immersive Bali destination explorer with photo-driven cards and transparent pricing.",
    description: "A dark-teal travel interface that presents Bali's top destinations as a rich bento-style grid of full-bleed photo cards. Each card carries a category tag, a short description, and a starting price, so visitors can compare Ubud, Uluwatu, Canggu, and Kintamani at a glance.",
    details: [
      "Bento grid layout with mixed card sizes and full-bleed destination photography",
      "Category badges (Nature, Ocean, Surf, Mountain) with icons for quick scanning",
      "Large editorial destination titles with short descriptions and orange price highlights in Rupiah",
      "Rounded glass-style cards with dark gradient overlays to keep text readable over images",
      "Floating circular menu button for compact navigation"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demoUrl: "https://travel-bali-parallax.vercel.app/",
    githubUrl: "https://github.com/DillanINF/travel-bali-parallax",
    accent: "#FF7A00",
    image: "/images/project4.png"
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
