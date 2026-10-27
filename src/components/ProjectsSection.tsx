import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ExternalLink, Terminal, X, ArrowUpRight, Code, Eye } from 'lucide-react';
import { sound } from './AudioEngine';

// Crisp inline SVGs for social/code brands
const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section 
      id="projects" 
      className="relative min-h-screen w-full bg-black text-white py-20 px-4 md:px-10 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-2">
              <span className="w-2 h-2 bg-white" />
              <span>[SECTION 04 // SELECTED REPERTOIRE]</span>
            </div>
            <h2 className="font-impact text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-none">
              SELECTED PROJECTS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 text-right">
            <span>INDEX: 04 VERIFIED ENTRIES</span>
            <div className="text-white font-bold">CLICK CARD FOR SYSTEM BLUEPRINT</div>
          </div>
        </div>

        {/* Brutalist Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => {
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setHoveredId(project.id);
                  sound.playClick(600 + idx * 50);
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  sound.playGlitchBurst();
                  setSelectedProject(project);
                }}
                className="group relative bg-[#0a0a0a] border border-neutral-800 hover:border-white transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer select-none"
              >
                {/* Card Top Stamp Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-800/80 bg-neutral-950 font-mono text-[11px] text-neutral-400">
                  <span className="font-bold text-white group-hover:text-white transition-colors">
                    [{project.code}]
                  </span>
                  <span className="tracking-wider">{project.category}</span>
                  <span className="text-neutral-500">[{project.year}]</span>
                </div>

                {/* Preview Image Box with Distortion and Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className={`preserve-photo w-full h-full object-cover filter grayscale contrast-150 transition-all duration-500 ease-out group-hover:scale-105 group-hover:contrast-200 ${
                      isHovered ? 'brightness-110' : 'brightness-90'
                    }`}
                  />

                  {/* Scanlines Overlay on Image */}
                  <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

                  {/* Top-Right Blueprint Indicator on Hover */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-black/90 border border-white/40 font-mono text-[10px] text-white tracking-widest uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>INSPECT</span>
                    <ArrowUpRight size={12} />
                  </div>

                  {/* Distress Stamp Corner */}
                  <div className="absolute bottom-3 left-3 z-10 px-2 py-0.5 bg-white text-black font-mono font-black text-[9px] tracking-widest uppercase">
                    VERIFIED ARTIFACT
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-impact text-2xl sm:text-3xl tracking-tight text-white group-hover:text-neutral-200 transition-colors uppercase leading-none mb-2">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:border-neutral-700 group-hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Quick Action Footer */}
                    <div className="pt-3 border-t border-neutral-900 flex items-center justify-between font-mono text-xs text-neutral-400 group-hover:text-white transition-colors">
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <span>OPEN BLUEPRINT</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                      <span className="text-[10px] text-neutral-500">[STATUS: DEPLOYED]</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Inspector Blueprint Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-[#090909] border-2 border-white text-white p-6 md:p-8 font-mono select-none max-h-[90vh] overflow-y-auto">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <Terminal size={14} className="text-white" />
                  <span className="text-white font-bold">SYSTEM BLUEPRINT // {selectedProject.code}</span>
                </div>
                <button
                  onClick={() => {
                    sound.playMechanicalClick();
                    setSelectedProject(null);
                  }}
                  className="p-1.5 border border-white/40 hover:bg-white hover:text-black transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Title & Category */}
              <div className="mb-4">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  CATEGORY: {selectedProject.category} // {selectedProject.year}
                </div>
                <h3 className="font-impact text-3xl sm:text-4xl uppercase text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-2">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Architectural Breakdown */}
              <div className="p-4 bg-neutral-950 border border-neutral-800 mb-6">
                <div className="text-[11px] text-neutral-400 uppercase font-bold mb-2 flex items-center gap-2">
                  <Code size={13} />
                  <span>TECHNICAL ARCHITECTURE & SPECIFICATIONS:</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white font-bold">&gt;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack List */}
              <div className="mb-6">
                <div className="text-[11px] text-neutral-400 uppercase font-bold mb-2">
                  COMPILATION ENVIRONMENT:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-white/10 border border-white/30 text-white text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick(900)}
                    className="px-5 py-2.5 bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
                  >
                    <Eye size={13} />
                    <span>LAUNCH REPOSITORY / DEMO</span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick(850)}
                    className="px-4 py-2.5 border border-white/40 text-white text-xs tracking-wider uppercase hover:border-white hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                  >
                    <GithubIcon size={13} />
                    <span>SOURCE CODE</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    sound.playClick(700);
                    setSelectedProject(null);
                  }}
                  className="text-xs text-neutral-400 hover:text-white underline"
                >
                  [CLOSE WINDOW]
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
