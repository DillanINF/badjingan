import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, ArrowUp, Send, Terminal, Sparkles } from 'lucide-react';
import { sound } from './AudioEngine';

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const emailAddress = "angel.dev@underground.io";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' UTC' + (now.getTimezoneOffset() <= 0 ? '+' : '-') + Math.abs(now.getTimezoneOffset() / 60));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sound.playMechanicalClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    sound.playGlitchBurst();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1200);
  };

  const scrollToTop = () => {
    sound.playClick(1000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full bg-[#050505] text-white pt-20 pb-10 px-4 md:px-10 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[85vh]">
        
        {/* Main Contact Headline */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-2">
            <span className="w-2 h-2 bg-white" />
            <span>[SECTION 06 // TRANSMISSION]</span>
          </div>

          <h2 className="font-impact text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white leading-none">
            LET'S BUILD
            <br />
            <span className="text-neutral-400 hover:text-white transition-colors">
              SOMETHING DIFFERENT.
            </span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-2xl mt-6 leading-relaxed">
            Have a bold design vision, an experimental project, or want to disrupt standard web conventions? Drop a transmission. No boring pitches.
          </p>
        </div>

        {/* Transmission Grid: Direct Email & Terminal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12 items-start">
          
          {/* Left Column: Direct Communication & Magnetic Pill */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy Email Card */}
            <div className="p-6 bg-neutral-950 border border-neutral-800 relative group">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                PRIMARY TRANSMISSION CHANNEL
              </div>
              
              <div className="font-mono text-base md:text-lg text-white font-bold tracking-tight mb-4 break-all">
                {emailAddress}
              </div>

              <button
                onClick={handleCopyEmail}
                data-clickable="true"
                className="w-full py-3 px-4 bg-white text-black font-mono font-black text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-700" />
                    <span>COPIED TO CLIPBOARD // OK</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL TO CLIPBOARD</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels Network */}
            <div className="p-6 bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-3">
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                COMMUNICATION RELAYS
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick(750)}
                  className="p-3 border border-neutral-800 hover:border-white hover:text-white transition-all flex items-center gap-2 group text-neutral-300"
                >
                  <GithubIcon size={14} />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick(800)}
                  className="p-3 border border-neutral-800 hover:border-white hover:text-white transition-all flex items-center gap-2 group text-neutral-300"
                >
                  <LinkedinIcon size={14} />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick(850)}
                  className="p-3 border border-neutral-800 hover:border-white hover:text-white transition-all flex items-center gap-2 group text-neutral-300"
                >
                  <TwitterIcon size={14} />
                  <span>X / TWITTER</span>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  onClick={() => sound.playClick(900)}
                  className="p-3 border border-neutral-800 hover:border-white hover:text-white transition-all flex items-center gap-2 group text-neutral-300"
                >
                  <Mail size={14} />
                  <span>DIRECT MAIL</span>
                </a>
              </div>
            </div>

            {/* Tactical Distress Stamp */}
            <div className="p-4 border border-dashed border-neutral-800 font-mono text-[11px] text-neutral-400 flex items-center justify-between">
              <span>SECURITY LEVEL: OPEN ARCHIVE</span>
              <span className="text-white font-bold">PGP VERIFIED</span>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 bg-neutral-950 border border-white/20 relative">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-6 font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-2 text-white">
                  <Terminal size={14} />
                  <span>RELAY_INTERFACE_V2.0</span>
                </div>
                <span>STATUS: READY</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-neutral-400 mb-1.5 uppercase tracking-wider text-[11px]">
                    01 // SENDER IDENTITY [NAME]:
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe / Studio Syndicate"
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1.5 uppercase tracking-wider text-[11px]">
                    02 // RETURN TRANSMISSION [EMAIL]:
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. client@domain.xyz"
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1.5 uppercase tracking-wider text-[11px]">
                    03 // TRANSMISSION PAYLOAD [MESSAGE]:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your brief, timeline, or idea..."
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  data-clickable="true"
                  className="w-full py-4 bg-white text-black font-mono font-extrabold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 border border-white"
                >
                  {formStatus === 'sending' ? (
                    <span>ENCRYPTING & DISPATCHING TRANSMISSION...</span>
                  ) : formStatus === 'sent' ? (
                    <span className="text-emerald-800 font-black">TRANSMISSION RECEIVED // DISPATCH SUCCESSFUL ✓</span>
                  ) : (
                    <>
                      <span>TRANSMIT DISPATCH</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Global Footer & Live Telemetry */}
        <footer className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-neutral-400 gap-4 select-none">
          <div>
            <span className="text-white font-bold">ANGEL.DEV</span> // UNDERGROUND PORTFOLIO ARCHIVE © 2024
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>LOCAL SYSTEM TIME: {currentTime || 'SYNCING...'}</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            data-clickable="true"
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp size={13} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </footer>

      </div>
    </section>
  );
};
