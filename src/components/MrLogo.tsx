import React from 'react';

interface MrLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'solid' | 'wireframe' | 'glow' | 'blueprint';
  interactive?: boolean;
}

export const MrLogo: React.FC<MrLogoProps> = ({
  className = '',
  size = 48,
  variant = 'solid',
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  if (variant === 'blueprint') {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${className}`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        {/* Technical Blueprint SVG Overlay */}
        <svg
          viewBox="0 0 340 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          {/* Hexagonal Outer Chassis */}
          <polygon
            points="170,10 330,100 330,290 170,380 10,290 10,100"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="opacity-70 animate-[pulse_4s_ease-in-out_infinite]"
          />
          {/* Inner Hexagon inset */}
          <polygon
            points="170,30 310,110 310,270 170,360 30,270 30,110"
            stroke="white"
            strokeWidth="1.5"
            className="opacity-30"
          />

          {/* Coordinate Guide Lines */}
          <line x1="170" y1="10" x2="170" y2="380" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-25" />
          <line x1="10" y1="195" x2="330" y2="195" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-25" />
          <circle cx="170" cy="195" r="4" fill="white" className="opacity-80" />

          {/* Isometric M (Left) Vector Wireframe */}
          <path
            d="M 60,130 L 110,130 L 110,270 L 60,270 Z"
            stroke="white"
            strokeWidth="2"
            fill="rgba(255,255,255,0.05)"
          />
          <path
            d="M 110,130 L 170,210 L 170,270 L 110,190 Z"
            stroke="white"
            strokeWidth="2"
            fill="rgba(255,255,255,0.1)"
          />

          {/* Isometric R (Right) Vector Wireframe */}
          <path
            d="M 170,100 L 250,100 L 280,140 L 280,190 L 220,190 L 170,140 Z"
            stroke="white"
            strokeWidth="2"
            fill="rgba(255,255,255,0.08)"
          />
          <path
            d="M 210,190 L 280,270 L 230,270 L 170,200 Z"
            stroke="white"
            strokeWidth="2"
            fill="rgba(255,255,255,0.12)"
          />

          {/* Technical Corner Markers */}
          <text x="180" y="25" fill="white" fontSize="10" fontFamily="monospace" opacity="0.6">HEX_T: 0°</text>
          <text x="280" y="95" fill="white" fontSize="10" fontFamily="monospace" opacity="0.6">60°</text>
          <text x="280" y="305" fill="white" fontSize="10" fontFamily="monospace" opacity="0.6">120°</text>
          <text x="180" y="375" fill="white" fontSize="10" fontFamily="monospace" opacity="0.6">180°</text>
          <text x="20" y="305" fill="white" fontSize="10" fontFamily="monospace" opacity="0.6">240°</text>
          <text x="20" y="95" fill="white" fontSize="10" fontFamily="monospace" opacity="0.6">300°</text>
        </svg>

        {/* High-res isolated transparent emblem in center */}
        <img
          src="/logo-mr-transparent.png"
          alt="MR Monogram"
          className="absolute inset-0 w-full h-full object-contain p-4 opacity-85 filter contrast-125"
        />
      </div>
    );
  }

  // Standard Solid / Isolated rendering
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <img
        src="/logo-mr-transparent.png"
        alt="MR Monogram"
        className="w-full h-full object-contain filter contrast-125 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
};
