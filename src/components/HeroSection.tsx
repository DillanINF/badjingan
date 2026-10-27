import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, CornerDownRight, ShieldAlert } from 'lucide-react';
import { sound } from './AudioEngine';

interface HeroSectionProps {
  onExploreClick: () => void;
  triggerGlitchSignal: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, triggerGlitchSignal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  // Initial load reveal and momentary glitch
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHasRevealed(true);
    }, 150);

    const timer2 = setTimeout(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 500);
    }, 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // External glitch trigger
  useEffect(() => {
    if (triggerGlitchSignal > 0) {
      setGlitchActive(true);
      const timer = setTimeout(() => setGlitchActive(false), 700);
      return () => clearTimeout(timer);
    }
  }, [triggerGlitchSignal]);

  // High-performance hardware-accelerated mouse parallax via CSS variables (0 React re-renders)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3);
    const y = ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3);
    containerRef.current.style.setProperty('--mx', x);
    containerRef.current.style.setProperty('--my', y);
  };

  return (
    <section 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between overflow-hidden pt-20 pb-8 px-4 md:px-10 border-b border-neutral-800 select-none will-change-transform"
      style={{
        '--mx': '0',
        '--my': '0',
      } as React.CSSProperties}
    >
      {/* Background Graphic Noise & Distressed Image Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-cover bg-center filter grayscale contrast-150 will-change-transform"
        style={{
          backgroundImage: "url('/images/hero-portrait.png')",
          transform: 'scale(1.05) translate3d(calc(var(--mx) * -15px), calc(var(--my) * -15px), 0)',
        }}
      />

      {/* Grid Guide Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>

      {/* ========================================================
          IMAGE 2 CORNER BRUTALIST STAMPS (Faithful to uploaded visual)
         ======================================================== */}
      
      {/* TOP LEFT: JUST A BOY WITH BIG DREAMS */}
      <div 
        className={`absolute top-20 md:top-24 left-4 md:left-10 z-20 font-mono text-[10px] md:text-xs leading-tight tracking-widest text-neutral-300 transition-all duration-700 ${
          hasRevealed ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
          <span className="w-1.5 h-1.5 bg-neutral-400 inline-block" />
          <span>EST. 2024</span>
        </div>
        <p className="font-bold uppercase tracking-wider">JUST A BOY</p>
        <p className="font-bold uppercase tracking-wider text-neutral-400">WITH BIG DREAMS</p>
        <div className="mt-2 w-12 h-[1px] bg-neutral-700" />
      </div>

      {/* TOP RIGHT: CODE CREATE IMPROVE REPEAT */}
      <div 
        className={`absolute top-20 md:top-24 right-4 md:right-10 z-20 font-mono text-[10px] md:text-xs text-right leading-tight tracking-widest text-neutral-300 transition-all duration-700 delay-100 ${
          hasRevealed ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <p className="font-bold uppercase tracking-wider">CODE</p>
        <p className="font-bold uppercase tracking-wider">CREATE</p>
        <p className="font-bold uppercase tracking-wider text-neutral-400">IMPROVE</p>
        <p className="font-bold uppercase tracking-wider text-white">REPEAT</p>
        <div className="mt-2 ml-auto w-12 h-[1px] bg-neutral-700" />
      </div>

      {/* MID LEFT: SAME SHIT DIFFERENT DAY */}
      <div 
        className={`absolute top-[44%] left-4 md:left-10 z-20 font-mono text-[10px] md:text-xs leading-tight tracking-widest text-neutral-400 hidden sm:block transition-all duration-700 delay-200 ${
          hasRevealed ? 'opacity-85 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
      >
        <div className="border-l-2 border-neutral-600 pl-2">
          <p className="font-extrabold text-neutral-200">SAME</p>
          <p className="font-extrabold text-neutral-300">SHIT</p>
          <p className="font-bold text-neutral-400">DIFFERENT</p>
          <p className="font-bold text-neutral-400">DAY.</p>
        </div>
        <div className="text-[9px] text-neutral-400 mt-2">REF: [00-UNDERGROUND]</div>
      </div>

      {/* BOTTOM LEFT: FRONTEND DEVELOPER */}
      <div 
        className={`absolute bottom-20 left-4 md:left-10 z-20 font-mono text-[10px] md:text-xs leading-tight tracking-widest text-neutral-300 transition-all duration-700 delay-300 ${
          hasRevealed ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="w-10 h-[1px] bg-neutral-600 mb-2" />
        <p className="font-extrabold text-white text-xs md:text-sm tracking-wider">FRONTEND</p>
        <p className="font-extrabold text-neutral-400 tracking-wider">DEVELOPER</p>
        <div className="text-[9px] text-neutral-400 mt-1">SPECIALIZING IN VISCERAL WEB</div>
      </div>

      {/* BOTTOM RIGHT: BUILD BETTER WEB */}
      <div 
        className={`absolute bottom-20 right-4 md:right-10 z-20 font-mono text-[10px] md:text-xs text-right leading-tight tracking-widest text-neutral-300 transition-all duration-700 delay-300 ${
          hasRevealed ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="w-10 h-[1px] bg-neutral-600 mb-2 ml-auto" />
        <p className="font-extrabold text-white text-xs md:text-sm tracking-wider">BUILD</p>
        <p className="font-extrabold text-neutral-300 tracking-wider">BETTER</p>
        <p className="font-extrabold text-neutral-400 tracking-wider">WEB</p>
        <div className="text-[9px] text-neutral-400 mt-1">LAT: -6.2088 // LON: 106.8456</div>
      </div>

      {/* ========================================================
          CENTER HERO CANVAS:
          "seen this Angel?" Distorted Gothic Typography Behind
          + Developer Monochrome Portrait in Foreground
         ======================================================== */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-auto w-full max-w-6xl mx-auto">
        
        {/* Backdrop Distorted Gothic Text: "seen this Angel?" */}
        <div 
          className={`absolute pointer-events-none select-none text-center transition-all duration-1000 will-change-transform ${
            glitchActive ? 'filter invert contrast-200' : ''
          }`}
          style={{
            transform: 'translate3d(calc(var(--mx) * 25px), calc(var(--my) * 20px), 0)',
          }}
        >
          <div className="relative">
            <h1 
              data-text="seen this Angel?"
              className={`font-grunge-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] tracking-tight font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-600 transition-all ${
                glitchActive ? 'glitch-text scale-105' : ''
              }`}
              style={{
                letterSpacing: '-0.04em',
                lineHeight: 0.85,
                textShadow: '0 0 20px rgba(255,255,255,0.25), 0 0 60px rgba(0,0,0,0.9)'
              }}
            >
              seen this Angel?
            </h1>
            
            {/* Horizontal scanline slice over Angel text */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/40 blur-[1px]" />
          </div>
        </div>

        {/* Developer High-Contrast Monochrome Portrait (Image 2 cutout/framing) */}
        <div 
          className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] aspect-[3/4] flex items-end justify-center group hero-photo-container will-change-transform"
          style={{
            transform: 'translate3d(calc(var(--mx) * -10px), calc(var(--my) * -8px), 0)',
          }}
        >
          {/* Distressed Tape / Grunge Badge Behind portrait */}
          <div className="absolute -top-3 -right-3 px-3 py-1 bg-white text-black font-mono font-black text-[10px] tracking-widest rotate-6 z-20 shadow-2xl border border-black">
            WANTED // CREATIVE ARCHITECT
          </div>

          <div className="absolute -bottom-2 -left-3 px-2 py-0.5 bg-black/90 text-neutral-300 font-mono text-[9px] tracking-widest border border-white/30 -rotate-3 z-20">
            CONFIDENTIAL // RAW_DEV
          </div>

          {/* Portrait Image with High Contrast Filter and Mask Reveal */}
          <div 
            className={`relative w-full h-full overflow-hidden transition-all duration-700 ${
              hasRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
           

            {/* Subtle distress photocopy scratch overlay over portrait */}
            <div className="absolute inset-0 bg-transparent mix-blend-screen pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_60%)]" />
          </div>
        </div>

        {/* PRD Headings & Action Overlay: "CREATIVE DEVELOPER" & "AFTER THE ORDINARY." */}
        <div className="relative z-20 text-center mt-3 md:-mt-6 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/20 mb-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white animate-pulse" />
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-neutral-300">
              ARCHITECTING RAW DIGITAL VISIONS
            </span>
          </div>

          {/* Main Headline: CREATIVE DEVELOPER */}
          <div className="overflow-hidden">
            <h2 
              className={`font-impact text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-white transition-transform duration-700 ${
                hasRevealed ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: 0.95 }}
            >
              CREATIVE DEVELOPER
            </h2>
          </div>

          {/* Supporting Headline: AFTER THE ORDINARY. */}
          <div className="overflow-hidden mt-1">
            <h3 
              className={`font-impact text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-neutral-400 transition-transform duration-700 delay-150 ${
                hasRevealed ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ letterSpacing: '0.01em', lineHeight: 0.95 }}
            >
              AFTER THE ORDINARY.
            </h3>
          </div>

          {/* Brief description: web creation & interactive digital experiences */}
          <p className="max-w-xl mx-auto mt-4 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed px-4">
            Engineered at the intersection of brutalist design and uncompromising performance. Building visceral websites, audio-reactive interfaces, and unforgettable web experiences.
          </p>

          {/* EXPLORE MY WORK CTA Button with Magnetic / Grunge Styling */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                sound.playGlitchBurst();
                onExploreClick();
              }}
              data-clickable="true"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-mono font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none"
            >
              <span>EXPLORE MY WORK</span>
              <CornerDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              
              {/* Corner brackets */}
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
            </button>

            <a
              href="#contact"
              onClick={() => sound.playClick(900)}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-mono text-xs sm:text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all"
            >
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM BAR: SCROLL STORYTELLING INDICATOR
         ======================================================== */}
      <div className="relative z-20 flex items-center justify-between font-mono text-[10px] md:text-xs text-neutral-400 border-t border-neutral-800/80 pt-4 mt-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-neutral-500" />
          <span>PHASE [01/05] // ENTRY ARCHIVE</span>
        </div>

        {/* Scroll down trigger indicator */}
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 hover:text-white transition-colors group"
        >
          <span className="tracking-widest">SCROLL TO EXPERIENCE</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform animate-bounce" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-neutral-400">
          <ShieldAlert size={12} />
          <span>BRUTALIST CODEBASE 2024</span>
        </div>
      </div>
    </section>
  );
};
