import React, { useState, useRef } from 'react';
import { MrLogo } from './MrLogo';
import { Crosshair } from 'lucide-react';

export const HeroLogoCenterpiece: React.FC = () => {
  const [mode, setMode] = useState<'solid' | 'blueprint' | 'exploded'>('solid');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Calculate rotation (-15 to 15 deg)
    const rotateY = (x / (rect.width / 2)) * 14;
    const rotateX = -(y / (rect.height / 2)) * 14;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Interactive Card Frame */}
      <div
        ref={cardRef}
        onMouseMove={(e) => {
          setIsHovered(true);
          handleMouseMove(e);
        }}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#14161f] via-[#0d0f15] to-[#08090d] border border-white/20 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative transition-all duration-200 group hover:border-white/40"
        style={{
          perspective: 1000,
        }}
      >
        {/* Architectural technical corner ticks */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-white/60"></div>
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-white/60"></div>
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-white/60"></div>
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-white/60"></div>

        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-zinc-200 font-semibold">MR_ISOMETRIC_CORE</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500">
            <Crosshair className="w-3.5 h-3.5 text-zinc-400" />
            <span>X:{tilt.y.toFixed(1)}° Y:{tilt.x.toFixed(1)}°</span>
          </div>
        </div>

        {/* Interactive Logo Stage with 3D Tilt */}
        <div
          className="relative my-4 w-full h-64 sm:h-72 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Isometric Background Grid inside stage */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77),
                linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77)
              `,
              backgroundSize: '40px 70px',
              backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px',
            }}
          />

          {/* Radial Spotlight */}
          <div className="absolute inset-0 bg-radial from-white/15 via-transparent to-transparent pointer-events-none" />

          {/* Render Mode: Solid, Blueprint, or Exploded */}
          {mode === 'solid' && (
            <div
              className="relative transition-all duration-500 hover:scale-105"
              style={{ transform: 'translateZ(40px)' }}
            >
              <img
                src="/logo-mr-transparent.png"
                alt="MR 3D Monolith"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter contrast-125 brightness-110 drop-shadow-[0_15px_30px_rgba(255,255,255,0.2)]"
              />
            </div>
          )}

          {mode === 'blueprint' && (
            <div
              className="relative transition-all duration-500"
              style={{ transform: 'translateZ(40px)' }}
            >
              <MrLogo size={230} variant="blueprint" />
            </div>
          )}

          {mode === 'exploded' && (
            <div
              className="relative w-48 h-56 flex items-center justify-center transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Layer 1: Hex Chassis (Back) */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
                style={{ transform: 'translateZ(-30px)' }}
              >
                <svg viewBox="0 0 340 390" className="w-44 h-44 opacity-40">
                  <polygon
                    points="170,10 330,100 330,290 170,380 10,290 10,100"
                    stroke="white"
                    strokeWidth="4"
                    fill="rgba(255,255,255,0.04)"
                  />
                </svg>
              </div>

              {/* Layer 2: Core Logo (Middle) */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
                style={{ transform: 'translateZ(20px)' }}
              >
                <img
                  src="/logo-mr-transparent.png"
                  alt="MR Exploded Core"
                  className="w-44 h-44 object-contain filter contrast-125"
                />
              </div>

              {/* Layer 3: Wireframe HUD (Front) */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500 pointer-events-none"
                style={{ transform: 'translateZ(60px)' }}
              >
                <div className="w-48 h-48 border border-white/30 rounded-lg flex flex-col justify-between p-2 font-mono text-[9px] text-white/80">
                  <div className="flex justify-between">
                    <span>M_LAYER // LEFT</span>
                    <span>R_LAYER // RIGHT</span>
                  </div>
                  <div className="text-center bg-black/70 px-2 py-0.5 rounded border border-white/20 self-center">
                    CHASSIS // 3D ISOMETRIC
                  </div>
                  <div className="flex justify-between">
                    <span>DOMEIN_ENGINE</span>
                    <span>100%_CODE</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Hint */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-400 bg-black/70 px-3 py-0.5 rounded-full border border-white/10 pointer-events-none whitespace-nowrap">
            {isHovered ? '3D BEWEGING ACTIEF' : 'BEWEEG MUIS VOOR 3D PERSPECTIEF'}
          </div>
        </div>

        {/* Mode Selector Buttons */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 mb-4">
          <button
            onClick={() => setMode('solid')}
            className={`py-2 px-2 rounded-lg text-[11px] font-mono font-medium transition-all cursor-pointer ${
              mode === 'solid'
                ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            3D Monolith
          </button>
          <button
            onClick={() => setMode('blueprint')}
            className={`py-2 px-2 rounded-lg text-[11px] font-mono font-medium transition-all cursor-pointer ${
              mode === 'blueprint'
                ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Blueprint
          </button>
          <button
            onClick={() => setMode('exploded')}
            className={`py-2 px-2 rounded-lg text-[11px] font-mono font-medium transition-all cursor-pointer ${
              mode === 'exploded'
                ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Deconstructie
          </button>
        </div>

        {/* Technical Specification Matrix */}
        <div className="space-y-2 font-mono text-left text-xs pt-2 border-t border-white/10">
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-zinc-500">GEOMETRIE:</span>
            <span className="text-white font-semibold">Equilateraal Hexagon (60°)</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-zinc-500">MONOGRAM:</span>
            <span className="text-zinc-200">M + R (Matthias Radder)</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-zinc-500">PERSPECTIEF:</span>
            <span className="text-zinc-300">3D Axonometrisch / Isometrisch</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-zinc-500">BETEKENIS:</span>
            <span className="text-white font-bold">Niet de buitenkant. De Motor.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
