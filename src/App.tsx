import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { sound } from './components/AudioEngine';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PosterTransition } from './components/PosterTransition';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { NoiseOverlay } from './components/NoiseOverlay';
import { CustomCursor } from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isInverted, setIsInverted] = useState(false);
  const [grainIntensity, setGrainIntensity] = useState<'low' | 'medium' | 'high' | 'off'>('medium');
  const [showScanlines, setShowScanlines] = useState(true);
  const [triggerGlitchSignal, setTriggerGlitchSignal] = useState(0);

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize smooth scroll with Lenis and sync with GSAP ScrollTrigger
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleToggleSound = () => {
    const active = sound.toggleMute();
    setIsMuted(!active);
  };

  const handleToggleInvert = () => {
    setIsInverted((prev) => !prev);
  };

  const handleCycleGrain = () => {
    const cycleMap: Record<string, 'low' | 'medium' | 'high' | 'off'> = {
      low: 'medium',
      medium: 'high',
      high: 'off',
      off: 'low'
    };
    setGrainIntensity(cycleMap[grainIntensity]);
  };

  const handleTriggerGlitch = () => {
    setTriggerGlitchSignal((prev) => prev + 1);
  };

  const handleExploreClick = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(aboutElem, { offset: -50, duration: 1.4 });
      } else {
        aboutElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className={`min-h-screen bg-[#050505] text-[#e6e6e6] transition-all duration-300 relative ${
        isInverted ? 'filter invert contrast-125 is-inverted' : ''
      }`}
    >
      {/* Underground Viewfinder Custom Cursor */}
      <CustomCursor />

      {/* Atmospheric Film Grain & CRT Scanline Layers */}
      <NoiseOverlay 
        grainIntensity={grainIntensity} 
        showScanlines={showScanlines} 
      />

      {/* Persistent Underground Navigation Bar */}
      <Navbar
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        isInverted={isInverted}
        onToggleInvert={handleToggleInvert}
        onTriggerGlitch={handleTriggerGlitch}
        grainIntensity={grainIntensity}
        onCycleGrain={handleCycleGrain}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Page 1 (Requested Opening Page): Hero Section with Image 2 (seen this Angel? + Portrait + Corner Stamps + Glitch) */}
        <HeroSection 
          onExploreClick={handleExploreClick} 
          triggerGlitchSignal={triggerGlitchSignal} 
        />

        {/* Section 2: Image 1 Giant Distressed Typography (CREATIVE DEVELOPER AFTER THE ORDINARY.) & Scroll Storytelling */}
        <PosterTransition />

        {/* Section 3: About Me Dossier, Philosophy & High Contrast Interactive Portrait */}
        <AboutSection />

        {/* Section 4: Selected Repertoire / Brutalist Editorial Projects */}
        <ProjectsSection />

        {/* Section 5: Tech Stack Arsenal & Production Diagnostics */}
        <SkillsSection />

        {/* Section 6: Contact Transmission ("LET'S BUILD SOMETHING DIFFERENT.") & Live Telemetry */}
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
