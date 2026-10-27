import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch screens
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest('a, button, input, textarea, [data-clickable="true"]');
        setIsHovering(isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[100] transition-transform duration-75 ease-out select-none hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: 0,
        top: 0
      }}
    >
      {/* Central Crosshair */}
      <div 
        className={`relative -left-1/2 -top-1/2 transition-all duration-150 flex items-center justify-center ${
          isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
      >
        <div className={`w-8 h-8 rounded-full border border-dashed transition-all duration-200 ${
          isHovering ? 'border-white bg-white/10 w-12 h-12' : 'border-neutral-500'
        }`} />
        
        {/* Cross lines */}
        <div className="absolute w-3 h-[1px] bg-white" />
        <div className="absolute h-3 w-[1px] bg-white" />
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full" />

        {/* Small live coordinate stamp */}
        <div className="absolute left-7 top-2 text-[9px] font-mono tracking-tighter text-neutral-400 whitespace-nowrap bg-black/80 px-1 border border-neutral-800">
          X:{Math.round(pos.x)} Y:{Math.round(pos.y)}
        </div>
      </div>
    </div>
  );
};
