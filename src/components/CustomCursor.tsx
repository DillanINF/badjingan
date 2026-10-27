import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch screens
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const render = () => {
      // Smooth lerp for buttery motion without React state re-rendering
      currentX += (targetX - currentX) * 0.45;
      currentY += (targetY - currentY) * 0.45;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      if (coordRef.current) {
        coordRef.current.textContent = `X:${Math.round(currentX)} Y:${Math.round(currentY)}`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    let lastCheck = 0;
    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Throttle clickable element check to every 80ms
      const now = performance.now();
      if (now - lastCheck > 80) {
        lastCheck = now;
        const target = e.target as HTMLElement | null;
        if (target) {
          const clickable = !!target.closest('a, button, input, textarea, [data-clickable="true"]');
          setIsHovering((prev) => (prev !== clickable ? clickable : prev));
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed pointer-events-none z-[100] select-none hidden md:block will-change-transform"
      style={{
        left: 0,
        top: 0
      }}
    >
      {/* Central Crosshair */}
      <div 
        className={`relative -left-1/2 -top-1/2 transition-transform duration-100 ease-out flex items-center justify-center ${
          isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
      >
        <div className={`w-8 h-8 rounded-full border border-dashed transition-all duration-150 ${
          isHovering ? 'border-white bg-white/10 w-12 h-12' : 'border-neutral-500'
        }`} />
        
        {/* Cross lines */}
        <div className="absolute w-3 h-[1px] bg-white" />
        <div className="absolute h-3 w-[1px] bg-white" />
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full" />

        {/* Small live coordinate stamp */}
        <div 
          ref={coordRef}
          className="absolute left-7 top-2 text-[9px] font-mono tracking-tighter text-neutral-400 whitespace-nowrap bg-black/80 px-1 border border-neutral-800"
        >
          X:0 Y:0
        </div>
      </div>
    </div>
  );
};
