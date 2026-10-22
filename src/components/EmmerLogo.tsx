import React from 'react';

interface EmmerLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'retina' | 'vector' | 'blueprint';
  glow?: boolean;
}

export const EmmerLogo: React.FC<EmmerLogoProps> = ({
  className = '',
  size = 64,
  variant = 'retina',
  glow = false,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  if (variant === 'blueprint') {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${className}`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <svg
          viewBox="0 0 340 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          {/* Hexagonal Outer Chassis */}
          <polygon
            points="170,10 332,103 332,295 170,388 8,295 8,103"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="opacity-80"
          />
          <polygon
            points="170,35 312,118 312,280 170,363 28,280 28,118"
            stroke="white"
            strokeWidth="1.5"
            className="opacity-30"
          />

          {/* Isometric Axes */}
          <line x1="170" y1="10" x2="170" y2="388" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
          <line x1="8" y1="199" x2="332" y2="199" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
          <circle cx="170" cy="199" r="4" fill="white" className="opacity-90" />

          {/* Letter M Wireframe */}
          <polygon points="45,124 82,103 82,295 45,274" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.08)" />
          <polygon points="82,165 130,225 130,285 82,230" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.03)" />
          <polygon points="82,165 110,148 155,208 130,225" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.12)" />

          {/* Letter R Wireframe */}
          <polygon points="170,52 260,103 235,118 170,80" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
          <polygon points="260,103 295,123 295,215 260,195" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
          <polygon points="170,140 205,160 205,335 170,315" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
          <polygon points="205,245 285,290 260,305 180,260" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />

          {/* Technical Angle Annotations */}
          <text x="180" y="28" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">HEX_0°</text>
          <text x="285" y="98" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">60°</text>
          <text x="285" y="310" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">120°</text>
          <text x="180" y="380" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">180°</text>
          <text x="16" y="310" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">240°</text>
          <text x="16" y="98" fill="white" fontSize="10" fontFamily="monospace" opacity="0.7">300°</text>
        </svg>
      </div>
    );
  }

  if (variant === 'vector') {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${className} ${
          glow ? 'drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]' : ''
        }`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <svg
          viewBox="0 0 340 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter contrast-125"
        >
          {/* Outer Hexagon Chassis */}
          <polygon points="170,10 332,103 332,295 170,388 8,295 8,103" fill="#101115" stroke="#252830" strokeWidth="2" />
          
          {/* Top Left Cube Facet (Dark Grey) */}
          <polygon points="170,52 82,103 82,230 170,230" fill="#3b3e46" />
          
          {/* Left Side Cube Facet (Medium Grey) */}
          <polygon points="82,103 170,52 170,140 125,166 125,230 82,230" fill="#5c626d" />
          
          {/* Letter M Left Leg (Pure White) */}
          <polygon points="45,124 82,103 82,295 45,274" fill="#ffffff" />
          
          {/* Letter M Center Shadow Cavity */}
          <polygon points="82,165 130,225 130,285 82,230" fill="#101115" />
          
          {/* Letter M Center Right Slope (Pure White) */}
          <polygon points="82,165 110,148 155,208 130,225" fill="#ffffff" />

          {/* Letter R Upper Loop Top (Pure White) */}
          <polygon points="170,52 260,103 235,118 170,80" fill="#ffffff" />
          
          {/* Letter R Upper Loop Outer Curve (Pure White) */}
          <polygon points="260,103 295,123 295,215 260,195" fill="#ffffff" />
          
          {/* Letter R Center Pillar (Pure White) */}
          <polygon points="170,140 205,160 205,335 170,315" fill="#ffffff" />
          
          {/* Letter R Inner Loop Hole (Dark Cavity) */}
          <polygon points="205,160 260,192 260,215 205,183" fill="#101115" />
          
          {/* Letter R Diagonal Leg (Pure White) */}
          <polygon points="205,245 285,290 260,305 180,260" fill="#ffffff" />
          
          {/* Letter R Diagonal Leg Side Shadow */}
          <polygon points="205,245 235,228 285,257 285,290" fill="#3b3e46" />
        </svg>
      </div>
    );
  }

  // Default: Ultra-High-Res Clean Transparent Retina Logo
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className} ${
        glow ? 'drop-shadow-[0_20px_50px_rgba(255,255,255,0.25)]' : 'drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
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
};
