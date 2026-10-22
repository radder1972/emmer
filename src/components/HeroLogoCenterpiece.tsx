import React, { useState, useRef } from 'react';
import { EmmerLogo } from './EmmerLogo';
import { Crosshair } from 'lucide-react';

export const HeroLogoCenterpiece: React.FC = () => {
  const [mode, setMode] = useState<'retina' | 'vector' | 'blueprint'>('retina');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 16;
    const rotateX = -(y / (rect.height / 2)) * 16;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Frame - Substantially larger & bolder */}
      <div
        ref={cardRef}
        onMouseMove={(e) => {
          setIsHovered(true);
          handleMouseMove(e);
        }}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#14161f] via-[#0d0f15] to-[#08090d] border border-white/20 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative transition-all duration-200 group hover:border-white/40"
        style={{ perspective: 1200 }}
      >
        {/* Architectural corner markers */}
        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-white/70"></div>
        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-white/70"></div>
        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-white/70"></div>
        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-white/70"></div>

        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-white font-bold tracking-wider">EMMER // 3D MOTOR CHASSIS</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Crosshair className="w-3.5 h-3.5 text-white" />
            <span>TILT: {tilt.y.toFixed(0)}° / {tilt.x.toFixed(0)}°</span>
          </div>
        </div>

        {/* Massive Logo Display Area */}
        <div
          className="relative my-3 w-full h-80 sm:h-96 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Hexagonal Isometric Grid Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)
              `,
              backgroundSize: '40px 70px',
            }}
          />

          {/* Radial Spotlight */}
          <div className="absolute inset-0 bg-radial from-white/15 via-transparent to-transparent pointer-events-none" />

          {/* Logo Presentation in Selected Mode (Substantially larger) */}
          <div
            className="relative transition-all duration-300 hover:scale-105"
            style={{ transform: 'translateZ(50px)' }}
          >
            <EmmerLogo
              size={300}
              variant={mode}
              glow={true}
              className="drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
            />
          </div>

          {/* Interactive Hint */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-400 bg-black/80 px-3 py-1 rounded-full border border-white/15 pointer-events-none whitespace-nowrap">
            {isHovered ? '3D PERSPECTIEF ACTIEF' : 'BEWEEG MUIS OVER LOGO VOOR 3D PERSPECTIEF'}
          </div>
        </div>

        {/* Mode Selector Buttons */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 mb-4">
          <button
            onClick={() => setMode('retina')}
            className={`py-2 px-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              mode === 'retina'
                ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Retina HD
          </button>
          <button
            onClick={() => setMode('vector')}
            className={`py-2 px-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              mode === 'vector'
                ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Vector SVG
          </button>
          <button
            onClick={() => setMode('blueprint')}
            className={`py-2 px-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              mode === 'blueprint'
                ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Blueprint 60°
          </button>
        </div>

        {/* Technical Specification Matrix */}
        <div className="space-y-1.5 font-mono text-left text-xs pt-2 border-t border-white/10">
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-zinc-500">STUDIO IDENTITEIT:</span>
            <span className="text-white font-bold tracking-wider">EMMER (M // R)</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-zinc-500">CONSTRUCTIE:</span>
            <span className="text-zinc-200">Equilateraal Hexagon (60°) & 3D Isometrisch</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-zinc-500">FILOSOFIE:</span>
            <span className="text-white font-bold">Wij bouwen de motor.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
