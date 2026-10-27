import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from './AudioEngine';

gsap.registerPlugin(ScrollTrigger);

export const PosterTransition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textLine1Ref = useRef<HTMLDivElement>(null);
  const textLine2Ref = useRef<HTMLDivElement>(null);
  const textLine3Ref = useRef<HTMLDivElement>(null);
  const textLine4Ref = useRef<HTMLDivElement>(null);
  const imagePosterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrub horizontal displacement on text lines
      if (textLine1Ref.current && textLine2Ref.current && textLine3Ref.current && textLine4Ref.current) {
        gsap.to(textLine1Ref.current, {
          xPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });

        gsap.to(textLine2Ref.current, {
          xPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });

        gsap.to(textLine3Ref.current, {
          xPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });

        gsap.to(textLine4Ref.current, {
          xPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });
      }

      // Parallax scale on the distressed poster image
      if (imagePosterRef.current) {
        gsap.fromTo(
          imagePosterRef.current,
          { scale: 1.15, filter: "brightness(0.6) contrast(150%)" },
          {
            scale: 1,
            filter: "brightness(0.9) contrast(200%)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1.5
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-black text-white py-16 md:py-24 overflow-hidden border-y border-neutral-800"
    >
      {/* Background Graphic Distressed Poster Image Layer */}
      <div 
        ref={imagePosterRef}
        className="absolute inset-0 pointer-events-none opacity-30 bg-cover bg-center mix-blend-screen filter grayscale"
        style={{
          backgroundImage: "url('/images/creative-developer-poster.jpg')",
        }}
      />

      {/* Infinite Grunge Marquee Ribbon Top */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/20 bg-neutral-950 py-2.5 font-mono text-xs tracking-widest uppercase">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] gap-8 text-neutral-300">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span className="text-white font-black">★ RAW CODE</span>
              <span>BRUTALIST VISUALS</span>
              <span className="text-white font-black">★ 0% TEMPLATES</span>
              <span>AFTER THE ORDINARY</span>
              <span className="text-neutral-400">GSAP + REACT 19</span>
            </span>
          ))}
        </div>
      </div>

      {/* Center Stage: The Iconic Image 1 Giant Distressed Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 select-none">
        
        {/* Technical Subheading */}
        <div className="flex flex-wrap items-center justify-between font-mono text-[11px] md:text-xs text-neutral-400 mb-6 border-b border-neutral-800 pb-2">
          <span>[MANIFESTO // SECTION 02]</span>
          <span>THE UNAPOLOGETIC PURSUIT OF RAW DIGITAL ART</span>
          <span>DISPLACEMENT: ACTIVE</span>
        </div>

        {/* Giant Screen-Filling Typography (Image 1 Style) */}
        <div className="flex flex-col items-center justify-center font-impact tracking-tighter leading-[0.82] text-center uppercase">
          
          <div 
            ref={textLine1Ref} 
            className="w-full text-[14vw] sm:text-[13vw] md:text-[11.5vw] text-white hover:text-neutral-300 transition-colors drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            CREATIVE
          </div>

          <div 
            ref={textLine2Ref} 
            className="w-full text-[14vw] sm:text-[13vw] md:text-[11.5vw] text-neutral-200 hover:text-white transition-colors"
          >
            DEVELOPER
          </div>

          <div 
            ref={textLine3Ref} 
            className="w-full text-[14vw] sm:text-[13vw] md:text-[11.5vw] text-neutral-300 hover:text-white transition-colors"
          >
            AFTER THE
          </div>

          <div 
            ref={textLine4Ref} 
            className="w-full text-[14vw] sm:text-[13vw] md:text-[11.5vw] text-white hover:text-neutral-400 transition-colors"
          >
            ORDINARY.
          </div>
        </div>

        {/* Editorial Subtext Callout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-neutral-300 border-t border-neutral-800 pt-6">
          <div className="border-l border-neutral-700 pl-3">
            <span className="text-[10px] text-neutral-400 block mb-1">01 / PHILOSOPHY</span>
            <p>Reject the bland cleanliness of generic corporate dashboards. Code is expressive art.</p>
          </div>
          <div className="border-l border-neutral-700 pl-3">
            <span className="text-[10px] text-neutral-400 block mb-1">02 / CRAFTSMANSHIP</span>
            <p>Monochrome high-contrast aesthetics married to buttery 60fps interaction and Web Audio feedback.</p>
          </div>
          <div className="border-l border-neutral-700 pl-3">
            <span className="text-[10px] text-neutral-400 block mb-1">03 / VELOCITY</span>
            <p>Zero bloat. Optimized bundle weights, fluid typography, and responsive brutalism.</p>
          </div>
        </div>
      </div>

      {/* Infinite Grunge Marquee Ribbon Bottom (Reverse) */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/20 bg-neutral-950 py-2.5 font-mono text-xs tracking-widest uppercase">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite_reverse] gap-8 text-neutral-300">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span className="text-white font-black">SAME SHIT DIFFERENT DAY?</span>
              <span>NO. WE BUILD SOMETHING DIFFERENT.</span>
              <span className="text-white font-black">★ EXPERIMENTAL WEB</span>
              <span>UNDERGROUND SOUND & VISUALS</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
