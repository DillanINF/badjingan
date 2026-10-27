import React, { memo } from 'react';

interface NoiseOverlayProps {
  grainIntensity: 'low' | 'medium' | 'high' | 'off';
  showScanlines: boolean;
}

export const NoiseOverlay: React.FC<NoiseOverlayProps> = memo(({ grainIntensity, showScanlines }) => {
  if (grainIntensity === 'off' && !showScanlines) return null;

  const opacityMap = {
    off: '0',
    low: '0.04',
    medium: '0.08',
    high: '0.14'
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none">
      {/* High-performance GPU accelerated film grain */}
      {grainIntensity !== 'off' && (
        <div 
          className="film-grain" 
          style={{ opacity: opacityMap[grainIntensity] }}
        />
      )}

      {/* CRT Scanline Bars */}
      {showScanlines && (
        <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
      )}

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      {/* Subtle photocopy border scratches */}
      <div className="absolute inset-0 border-[6px] md:border-[12px] border-black/80 pointer-events-none" />
    </div>
  );
});

NoiseOverlay.displayName = 'NoiseOverlay';
