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
  variant = 'vector',
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

  // Pure Precision Vector SVG derived directly from the original artwork
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className} ${
        glow ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]' : 'drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]'
      }`}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <svg
        viewBox="0 0 323 382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Chassis (Black) */}
        <g fill="#1a1b1f">
          <path d="M 165.0,381.5 L 156.0,380.5 L 0.0,286.0 L 0.0,96.0 L 161.0,0.0 L 322.5,96.0 L 322.5,287.0 L 165.0,381.5 Z" />
        </g>

        {/* Grey Facets */}
        <g fill="#505358">
          <path d="M 161.0,187.5 L 125.0,165.5 L 124.0,166.5 L 115.0,159.5 L 114.0,160.5 L 105.0,155.5 L 96.0,148.5 L 95.0,149.5 L 93.0,146.5 L 92.0,147.5 L 52.0,126.5 L 51.0,124.5 L 50.0,125.5 L 40.0,120.5 L 38.5,118.0 L 161.0,43.5 L 161.0,187.5 Z" />
          <path d="M 161.0,338.5 L 96.5,300.0 L 97.0,218.5 L 129.0,276.5 L 161.5,237.0 L 161.0,338.5 Z" />
        </g>

        {/* Black Inner Shadow Cavities */}
        <g fill="#1a1b1f">
          <path d="M 164.0,381.5 L 159.0,381.5 L 150.0,376.5 L 0.0,286.0 L 0.0,97.0 L 161.0,0.0 L 322.5,96.0 L 322.5,287.0 L 164.0,381.5 Z" />
          <path d="M 162.5,339.0 L 191.5,321.0 L 191.5,270.0 L 216.0,254.5 L 218.0,254.5 L 254.0,284.5 L 286.5,266.0 L 248.5,234.0 L 271.5,211.0 L 281.5,193.0 L 286.5,174.0 L 287.5,119.0 L 161.0,43.5 L 36.5,119.0 L 36.5,265.0 L 64.0,282.5 L 66.5,282.0 L 67.0,133.5 L 89.5,146.0 L 92.5,155.0 L 129.0,227.5 L 161.5,190.0 L 161.5,236.0 L 129.0,276.5 L 100.5,223.0 L 96.5,219.0 L 96.5,300.0 L 162.5,339.0 Z" />
          <path d="M 192.0,237.5 L 191.5,204.0 L 217.0,188.5 L 223.5,182.0 L 226.5,173.0 L 225.5,152.0 L 222.0,152.5 L 161.5,187.0 L 162.0,79.5 L 248.0,130.5 L 254.5,138.0 L 256.5,144.0 L 256.5,172.0 L 253.5,184.0 L 246.5,198.0 L 232.0,213.5 L 192.0,237.5 Z" />
        </g>

        {/* White Facets (M and R) */}
        <g fill="#ffffff">
          <path d="M 162.0,338.5 L 161.5,189.0 L 129.0,226.5 L 90.5,147.0 L 161.0,187.5 L 224.0,152.5 L 225.5,176.0 L 222.5,182.0 L 216.0,188.5 L 191.5,204.0 L 191.0,237.5 L 221.0,221.5 L 243.5,203.0 L 252.5,188.0 L 257.5,169.0 L 257.5,145.0 L 254.5,137.0 L 250.0,131.5 L 161.5,79.0 L 161.5,45.0 L 163.0,44.5 L 286.5,119.0 L 286.5,171.0 L 280.5,194.0 L 274.5,205.0 L 262.5,221.0 L 247.5,234.0 L 285.5,266.0 L 255.0,284.5 L 218.0,254.5 L 205.0,260.5 L 190.5,270.0 L 190.5,321.0 L 162.0,338.5 Z" />
          <path d="M 66.0,281.5 L 36.5,264.0 L 37.0,118.5 L 65.5,134.0 L 66.0,281.5 Z" />
        </g>
      </svg>
    </div>
  );
};
