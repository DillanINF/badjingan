import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Cpu, Terminal, Zap, ShieldCheck } from 'lucide-react';
import { sound } from './AudioEngine';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allItems = SKILLS.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
  
  const displayedItems = activeCategory === "ALL" 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  const marqueeSkills = [
    "REACT 19", "TYPESCRIPT", "GSAP SCROLLTRIGGER", "TAILWIND CSS", 
    "LENIS SMOOTH SCROLL", "WEB AUDIO DSP", "FRAMER MOTION", 
    "NEXT.JS APPS", "SVG FILTERS", "RESPONSIVE BRUTALISM"
  ];

  return (
    <section 
      id="skills" 
      className="relative min-h-screen w-full bg-[#060606] text-white py-20 px-4 md:px-10 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-2">
              <span className="w-2 h-2 bg-white" />
              <span>[SECTION 05 // ARSENAL]</span>
            </div>
            <h2 className="font-impact text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-none">
              TECH STACK & SKILLS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 text-right">
            <span>AUDITED FOR PRODUCTION STABILITY</span>
            <div className="text-white font-bold">ZERO FLUFF // 100% MASTERY</div>
          </div>
        </div>

        {/* Marquee Banner */}
        <div className="relative w-full overflow-hidden border border-white/20 bg-neutral-950 py-3 mb-10 font-mono text-xs tracking-widest uppercase">
          <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite] gap-8 text-neutral-300">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8">
                {marqueeSkills.map((s, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white" />
                    <span className="hover:text-white transition-colors">{s}</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => {
              sound.playClick(650);
              setActiveCategory("ALL");
            }}
            className={`px-4 py-2 border transition-all ${
              activeCategory === "ALL"
                ? "bg-white text-black border-white font-bold"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
            }`}
          >
            [ALL DISCIPLINES]
          </button>
          {SKILLS.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                sound.playClick(700);
                setActiveCategory(cat.category);
              }}
              className={`px-4 py-2 border transition-all ${
                activeCategory === cat.category
                  ? "bg-white text-black border-white font-bold"
                  : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
              }`}
            >
              [{cat.category}]
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedItems.map((item, idx) => {
            const isHovered = hoveredSkill === item.name;

            return (
              <div
                key={item.name}
                onMouseEnter={() => {
                  setHoveredSkill(item.name);
                  sound.playClick(700 + idx * 30);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-5 bg-neutral-950 border transition-all duration-200 select-none ${
                  isHovered 
                    ? "border-white translate-x-1 -translate-y-1 bg-neutral-900 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)]" 
                    : "border-neutral-800 text-neutral-300"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-2">
                  <span>{item.category}</span>
                  <span className={`px-1.5 py-0.5 border ${
                    item.level === 'EXPERT' 
                      ? 'border-white text-white font-bold' 
                      : 'border-neutral-700 text-neutral-400'
                  }`}>
                    {item.level}
                  </span>
                </div>

                <h3 className="font-impact text-2xl tracking-wide uppercase text-white mb-2">
                  {item.name}
                </h3>

                <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={12} className={isHovered ? "text-white" : "text-neutral-500"} />
                    <span>VERIFIED MASTERY</span>
                  </span>
                  <span>ID: [SKL-{idx + 1 & 0xff}]</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brutalist Footnote */}
        <div className="mt-12 p-4 bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-white" />
            <span>ARCHITECTURE POLICY: ZERO UNNECESSARY 3RD-PARTY LIBRARIES. PURE PERFORMANCE.</span>
          </div>
          <div className="text-neutral-500">
            ENGINEERED WITH REACT 19 & GSAP
          </div>
        </div>

      </div>
    </section>
  );
};
