import React from 'react';
import { Volume2, VolumeX, Eye, Sparkles, Terminal } from 'lucide-react';
import { sound } from './AudioEngine';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  isInverted: boolean;
  onToggleInvert: () => void;
  onTriggerGlitch: () => void;
  grainIntensity: 'low' | 'medium' | 'high' | 'off';
  onCycleGrain: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMuted,
  onToggleSound,
  isInverted,
  onToggleInvert,
  onTriggerGlitch,
  grainIntensity,
  onCycleGrain
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-4 md:px-8 py-3.5 border-b border-white/20 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] md:text-xs tracking-wider uppercase">
        {/* Brand / Identifier */}
        <div className="flex items-center gap-3">
          <a 
            href="#hero" 
            onClick={() => sound.playClick(600)}
            className="flex items-center gap-2 group font-bold tracking-tight text-white hover:text-neutral-400 transition-colors"
          >
            <span className="inline-block w-2.5 h-2.5 bg-white group-hover:scale-125 transition-transform animate-pulse" />
            <span className="font-impact text-lg md:text-xl tracking-normal text-white">ANGEL.DEV</span>
            <span className="text-[10px] text-neutral-400 hidden sm:inline">[PORTFOLIO // 2026]</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 border border-white/20 bg-black/40 text-[10px] text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#about" 
            onClick={() => sound.playClick(750)}
            className="hover:text-white text-neutral-300 transition-colors underline-offset-4 hover:underline"
          >
            01. ABOUT
          </a>
          <a 
            href="#projects" 
            onClick={() => sound.playClick(800)}
            className="hover:text-white text-neutral-300 transition-colors underline-offset-4 hover:underline"
          >
            02. WORK
          </a>
          <a 
            href="#skills" 
            onClick={() => sound.playClick(850)}
            className="hover:text-white text-neutral-300 transition-colors underline-offset-4 hover:underline"
          >
            03. STACK
          </a>
          <a 
            href="#contact" 
            onClick={() => sound.playClick(900)}
            className="hover:text-white text-neutral-300 transition-colors underline-offset-4 hover:underline"
          >
            04. CONTACT
          </a>
        </nav>

        {/* Tactical Controls Dock */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              sound.playMechanicalClick();
            }}
            title={isMuted ? "Enable tape ambient sound & audio feedback" : "Mute audio"}
            className={`flex items-center gap-1.5 px-2.5 py-1 border transition-all ${
              !isMuted 
                ? 'bg-white text-black border-white' 
                : 'border-white/30 text-white hover:border-white'
            }`}
          >
            {!isMuted ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span className="text-[10px] hidden sm:inline">{!isMuted ? 'AUDIO: ON' : 'AUDIO: MUTED'}</span>
          </button>

          {/* Grain Cycle */}
          <button
            onClick={() => {
              sound.playClick(950);
              onCycleGrain();
            }}
            title="Cycle film grain density"
            className="hidden sm:flex items-center gap-1 px-2 py-1 border border-white/30 text-neutral-300 hover:border-white hover:text-white transition-all text-[10px]"
          >
            <Sparkles size={12} />
            <span>GRAIN: {grainIntensity.toUpperCase()}</span>
          </button>

          {/* Glitch Shockwave Trigger */}
          <button
            onClick={() => {
              sound.playGlitchBurst();
              onTriggerGlitch();
            }}
            title="Trigger visual glitch shockwave"
            className="flex items-center gap-1 px-2.5 py-1 border border-white/40 text-white hover:bg-white hover:text-black transition-all text-[10px]"
          >
            <Terminal size={12} />
            <span>[GLITCH]</span>
          </button>

          {/* Invert / Photocopy mode */}
          <button
            onClick={() => {
              sound.playClick(1100);
              onToggleInvert();
            }}
            title="Toggle Photocopy Negative mode"
            className={`p-1.5 border transition-all ${
              isInverted 
                ? 'bg-white text-black border-white' 
                : 'border-white/30 text-white hover:border-white'
            }`}
          >
            <Eye size={13} />
          </button>
        </div>
      </div>
    </header>
  );
};
