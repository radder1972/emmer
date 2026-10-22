import React from 'react';

interface EmmerLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'vector' | 'retina' | 'blueprint';
  glow?: boolean;
}

export const EmmerLogo: React.FC<EmmerLogoProps> = ({
  className = '',
  size = 64,
  variant = 'vector', // default to pure vector as requested
  glow = false,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  if (variant === 'retina') {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${className} ${
          glow ? 'drop-shadow-[0_15px_35px_rgba(255,255,255,0.2)]' : 'drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]'
        }`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <img
          src="/logo-emmer.png"
          alt="EMMER Logo"
          className="w-full h-full object-contain filter contrast-125"
        />
      </div>
    );
  }

  if (variant === 'blueprint') {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${className}`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <svg
          viewBox="0 0 400 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          {/* Hexagonal Outer Chassis */}
          <polygon
            points="200,20 373.2,120 373.2,320 200,420 26.8,320 26.8,120"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="opacity-80"
          />
          <polygon
            points="200,55 342,137 342,303 200,385 58,303 58,137"
            stroke="white"
            strokeWidth="1.5"
            className="opacity-30"
          />

          {/* Isometric Center Axes */}
          <line x1="200" y1="20" x2="200" y2="420" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
          <line x1="26.8" y1="220" x2="373.2" y2="220" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
          <circle cx="200" cy="220" r="4" fill="white" className="opacity-90" />

          {/* Letter M Wireframe */}
          <polygon points="62,140 102,117 102,310 62,333" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.08)" />
          <polygon points="102,190 152,255 152,320 102,260" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.03)" />
          <polygon points="102,190 126,176 172,236 152,255" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.12)" />

          {/* Letter R Wireframe */}
          <polygon points="200,60 305,120 338,140 338,225 305,245 200,185" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
          <polygon points="162,165 200,185 200,370 162,348" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
          <polygon points="200,225 305,285 280,328 175,268" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />

          {/* Technical Annotations */}
          <text x="210" y="38" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">0°</text>
          <text x="325" y="115" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">60°</text>
          <text x="325" y="335" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">120°</text>
          <text x="210" y="412" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">180°</text>
          <text x="35" y="335" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">240°</text>
          <text x="35" y="115" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">300°</text>
        </svg>
      </div>
    );
  }

  // Pure Precision Vector SVG (Default & Recommended)
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className} ${
        glow ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]' : 'drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]'
      }`}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <svg
        viewBox="0 0 400 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Hexagon Chassis (Solid Onyx Black) */}
        <polygon
          points="200,20 373.2,120 373.2,320 200,420 26.8,320 26.8,120"
          fill="#14151a"
          stroke="#262832"
          strokeWidth="2"
        />

        {/* Top-Left Isometric 3D Cube Facet (Dark Slate Grey) */}
        <polygon
          points="200,60 110,112 110,230 200,282"
          fill="#42454e"
        />

        {/* Center Slope Transition Facet (Medium Slate Grey) */}
        <polygon
          points="110,112 155,138 155,205 110,230"
          fill="#616674"
        />

        {/* Letter M: Left Vertical Pillar (Pure White) */}
        <polygon
          points="62,140 102,117 102,310 62,333"
          fill="#ffffff"
        />

        {/* Letter M: Inner Dark Shadow Cavity */}
        <polygon
          points="102,190 152,255 152,320 102,260"
          fill="#14151a"
        />

        {/* Letter M: Center V Diagonal Slope (Pure White) */}
        <polygon
          points="102,190 126,176 172,236 152,255"
          fill="#ffffff"
        />

        {/* Letter R: Upper Loop Outer Contour (Pure White) */}
        <polygon
          points="200,60 305,120 338,140 338,225 305,245 200,185"
          fill="#ffffff"
        />

        {/* Letter R: Inner Hole Cavity (Dark Onyx Cutout) */}
        <polygon
          points="200,115 285,164 285,198 200,150"
          fill="#14151a"
        />

        {/* Letter R: Center Vertical Stem (Pure White) */}
        <polygon
          points="162,165 200,185 200,370 162,348"
          fill="#ffffff"
        />

        {/* Letter R: Diagonal Kick Leg (Pure White) */}
        <polygon
          points="200,225 305,285 280,328 175,268"
          fill="#ffffff"
        />

        {/* Letter R: Diagonal Leg Isometric Shadow Facet */}
        <polygon
          points="200,225 225,210 305,256 305,285"
          fill="#32353d"
        />
      </svg>
    </div>
  );
};
