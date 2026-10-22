import React, { useState, useRef } from 'react';
import { EmmerLogo } from './EmmerLogo';
import { Crosshair } from 'lucide-react';

export const HeroLogoCenterpiece: React.FC = () => {
  const [mode, setMode] = useState<'retina' | 'vector' | 'blueprint'>('retina');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // 3D tilt calculation
    const rotateY = (x / (rect.width / 2)) * 18;
    const rotateX = -(y / (rect.height / 2)) * 18;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="w-full flex flex-col items-center lg:items-end justify-center">
      {/* Freestanding Massive 3D Logo Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[520px] xl:max-w-[580px] flex flex-col items-center cursor-pointer select-none"
        style={{ perspective: 1200 }}
      >
        {/* Ambient Halo behind the massive logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-white/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* The Giant 3D Isometric Emblem */}
        <div
          className="relative w-full aspect-[340/395] flex items-center justify-center transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Isometric Wireframe Grid Halo */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl"
            style={{
              backgroundImage: `
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)
              `,
              backgroundSize: '40px 70px',
            }}
          />

          {/* Logo Render: Freestanding & Colossal */}
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
            style={{ transform: 'translateZ(60px)' }}
          >
            {mode === 'blueprint' ? (
              <EmmerLogo
                size="100%"
                variant="blueprint"
                className="w-full h-full drop-shadow-[0_20px_50px_rgba(255,255,255,0.25)]"
              />
            ) : mode === 'vector' ? (
              <EmmerLogo
                size="100%"
                variant="vector"
                glow={true}
                className="w-full h-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              />
            ) : (
              <img
                src="/logo-emmer.png"
                alt="EMMER Monogram"
                className="w-full h-full object-contain filter contrast-125 brightness-105 drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
              />
            )}
          </div>

          {/* Subtle 3D Coordinate Badge floating on the corner */}
          <div
            className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 shadow-lg pointer-events-none"
            style={{ transform: 'translateZ(90px)' }}
          >
            <Crosshair className="w-3 h-3 text-white" />
            <span>3D TILT: {tilt.y.toFixed(0)}° / {tilt.x.toFixed(0)}°</span>
          </div>
        </div>

        {/* Clean Minimalist Mode Selector Underneath (Not enclosing the logo!) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex p-1 rounded-xl bg-zinc-900/90 border border-white/15 backdrop-blur-md shadow-xl">
            <button
              onClick={() => setMode('retina')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                mode === 'retina'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/15'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Retina HD
            </button>
            <button
              onClick={() => setMode('vector')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                mode === 'vector'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/15'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Vector SVG
            </button>
            <button
              onClick={() => setMode('blueprint')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                mode === 'blueprint'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/15'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Blueprint 60°
            </button>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-2 px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>EMMER // 3D MOTOR CHASSIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
