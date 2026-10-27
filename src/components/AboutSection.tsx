import React, { useRef, useState } from 'react';
import { Terminal, Crosshair, Cpu, Layers, Disc3, Download, ExternalLink } from 'lucide-react';
import { sound } from './AudioEngine';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'approach' | 'specs'>('bio');
  const [photoInvert, setPhotoInvert] = useState(false);

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full bg-[#070707] text-white py-20 px-4 md:px-10 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-2">
              <span className="w-2 h-2 bg-white" />
              <span>[SECTION 03 // DOSSIER]</span>
            </div>
            <h2 className="font-impact text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-none">
              ABOUT THE MAKER
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 text-right">
            <span>DISCIPLINE: CREATIVE FRONTEND ARCHITECT</span>
            <div className="text-white font-bold">STATUS: AVAILABLE FOR WORLDWIDE COMMISSIONS</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Monochrome Portrait (Image 2 closeup styling) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div 
              className="relative aspect-[4/5] bg-neutral-900 border-2 border-white/20 p-2 overflow-hidden group cursor-crosshair"
              onClick={() => {
                sound.playGlitchBurst();
                setPhotoInvert(!photoInvert);
              }}
              title="Click to toggle high-contrast photocopy invert"
            >
              {/* Corner Stamp */}
              <div className="absolute top-4 left-4 z-20 px-2 py-0.5 bg-black/90 border border-white/40 font-mono text-[9px] text-white tracking-widest uppercase">
                IDENTITY // ANGEL.DEV
              </div>

              <div className="absolute bottom-4 right-4 z-20 px-2 py-0.5 bg-white text-black font-mono font-bold text-[9px] tracking-widest uppercase">
                CLICK TO INVERT
              </div>

              {/* Portrait Image */}
              <img 
                src="/images/hero-portrait.png" 
                alt="Angel Developer Monochrome Portrait" 
                className={`w-full h-full object-cover transition-all duration-300 filter ${
                  photoInvert ? 'invert contrast-200' : 'contrast-125 grayscale group-hover:scale-105'
                }`}
              />

              {/* Grid coordinates and scanlines */}
              <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 font-mono text-center">
              <div className="p-3 border border-neutral-800 bg-neutral-950">
                <div className="text-[10px] text-neutral-400 uppercase">EXPERIENCE</div>
                <div className="font-impact text-2xl text-white">3+ YRS</div>
              </div>
              <div className="p-3 border border-neutral-800 bg-neutral-950">
                <div className="text-[10px] text-neutral-400 uppercase">FPS TARGET</div>
                <div className="font-impact text-2xl text-white">60 FPS</div>
              </div>
              <div className="p-3 border border-neutral-800 bg-neutral-950">
                <div className="text-[10px] text-neutral-400 uppercase">CODE STYLE</div>
                <div className="font-impact text-2xl text-white">RAW/PURE</div>
              </div>
            </div>
          </div>

          {/* Right Column: Dossier Details, Philosophy & Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            
            {/* Nav Tabs */}
            <div className="flex border-b border-neutral-800 font-mono text-xs">
              <button
                onClick={() => {
                  sound.playClick(700);
                  setActiveTab('bio');
                }}
                className={`px-4 py-2.5 font-bold transition-all border-b-2 ${
                  activeTab === 'bio'
                    ? 'border-white text-white bg-white/5'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                [01. BACKGROUND]
              </button>
              <button
                onClick={() => {
                  sound.playClick(750);
                  setActiveTab('approach');
                }}
                className={`px-4 py-2.5 font-bold transition-all border-b-2 ${
                  activeTab === 'approach'
                    ? 'border-white text-white bg-white/5'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                [02. APPROACH]
              </button>
              <button
                onClick={() => {
                  sound.playClick(800);
                  setActiveTab('specs');
                }}
                className={`px-4 py-2.5 font-bold transition-all border-b-2 ${
                  activeTab === 'specs'
                    ? 'border-white text-white bg-white/5'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                [03. CORE STATS]
              </button>
            </div>

            {/* Tab 1: Bio */}
            {activeTab === 'bio' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 bg-neutral-950 border border-neutral-800 font-mono text-xs leading-relaxed text-neutral-300">
                  <div className="flex items-center gap-2 text-neutral-400 mb-2 border-b border-neutral-800/60 pb-1">
                    <Terminal size={14} />
                    <span>system/dossier/bio.txt</span>
                  </div>
                  <p className="text-sm md:text-base font-sans text-neutral-100 font-medium leading-relaxed">
                    "I am a frontend developer driven by underground counterculture, brutalist graphic design, and the raw mechanics of web interactivity."
                  </p>
                  <p className="mt-3">
                    While the modern web drowns in repetitive pastel templates and sterilised corporate UI, I engineer digital artifacts with texture, spine, and unmistakable character. Every project is conceived as an interactive canvas—responsive, accessible, and uncompromisingly bold.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs text-neutral-400">
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold">&gt;</span>
                    <div>
                      <span className="text-white font-bold">FOCUS:</span> Highly-kinetic web applications, interactive audio synthesis, scroll-driven storytelling, and editorial brutalism.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold">&gt;</span>
                    <div>
                      <span className="text-white font-bold">ETHOS:</span> "Just a boy with big dreams, refusing the ordinary day in and day out."
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Approach */}
            {activeTab === 'approach' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 border border-neutral-800 bg-neutral-950">
                  <div className="flex items-center gap-2 font-mono text-xs text-white font-bold mb-1">
                    <Cpu size={14} />
                    <span>01 // ARCHITECTURAL PRECISION</span>
                  </div>
                  <p className="font-mono text-xs text-neutral-300">
                    Built with clean React 19, modular TypeScript, and strict state boundaries. Every component is engineered to avoid memory leaks and maintain smooth 60fps frame rates.
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 bg-neutral-950">
                  <div className="flex items-center gap-2 font-mono text-xs text-white font-bold mb-1">
                    <Layers size={14} />
                    <span>02 // VISCERAL TEXTURE & MOTION</span>
                  </div>
                  <p className="font-mono text-xs text-neutral-300">
                    Scroll-driven GSAP choreography, SVG noise shaders, and real-time Web Audio API feedback. No superficial fluff—every interaction rewards visitor curiosity.
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 bg-neutral-950">
                  <div className="flex items-center gap-2 font-mono text-xs text-white font-bold mb-1">
                    <Disc3 size={14} />
                    <span>03 // ACCESSIBILITY & SPEED</span>
                  </div>
                  <p className="font-mono text-xs text-neutral-300">
                    Respects <code className="text-neutral-100 bg-neutral-800 px-1">prefers-reduced-motion</code>, supports keyboard-first navigation, and delivers instant sub-second rendering.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-4 animate-fadeIn font-mono text-xs">
                <div className="p-4 border border-white/20 bg-neutral-950 space-y-2">
                  <div className="flex justify-between border-b border-neutral-800 py-1">
                    <span className="text-neutral-400">OPERATING ENVIRONMENT</span>
                    <span className="text-white font-bold">LINUX // MACOS // WIN</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 py-1">
                    <span className="text-neutral-400">PRIMARY STACK</span>
                    <span className="text-white font-bold">REACT · TS · TAILWIND · GSAP</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 py-1">
                    <span className="text-neutral-400">AUDIO SUB-SYSTEM</span>
                    <span className="text-white font-bold">WEB AUDIO API PROCEDURAL DSP</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 py-1">
                    <span className="text-neutral-400">SCROLL CONTROLLER</span>
                    <span className="text-white font-bold">LENIS INERTIA + SCROLLTRIGGER</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">PRODUCTION BUNDLE RATING</span>
                    <span className="text-emerald-400 font-bold">100 / 100 LIGHTHOUSE</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={() => sound.playClick(850)}
                className="px-6 py-3 bg-white text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <span>VIEW VERIFIED PROJECTS</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                onClick={() => sound.playClick(900)}
                className="px-6 py-3 border border-white/30 text-white font-mono text-xs tracking-wider uppercase hover:border-white hover:bg-white/5 transition-all inline-flex items-center gap-2"
              >
                <span>CONTACT DIRECTLY</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
