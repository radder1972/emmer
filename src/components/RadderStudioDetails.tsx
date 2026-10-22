import React from 'react';
import { RADDER_WORDMARK_PATH } from './RadderWordmark';
import { RADDER_LOGO_PATH } from './RadderLogo';

/**
 * 01. CORNER RETICLES (+)
 * Precision drafting crosses on card corners.
 * Evokes Swiss graphic design and hardware blueprints.
 */
export const CornerReticles: React.FC<{
  className?: string;
  color?: string;
  size?: number;
  offset?: number; // pixel offset from edge, negative extends beyond corner
}> = ({ className = '', color = 'rgba(0,0,0,0.22)', size = 9, offset = -4 }) => {
  const half = (size - 1) / 2;
  const posStyle = (top: boolean, left: boolean) => ({
    top: top ? `${offset}px` : undefined,
    bottom: !top ? `${offset}px` : undefined,
    left: left ? `${offset}px` : undefined,
    right: !left ? `${offset}px` : undefined,
  });

  return (
    <>
      {/* Top Left */}
      <div
        className={`absolute pointer-events-none select-none z-10 ${className}`}
        style={posStyle(true, true)}
        aria-hidden="true"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <line x1={half} y1="0" x2={half} y2={size} stroke={color} strokeWidth="1" />
          <line x1="0" y1={half} x2={size} y2={half} stroke={color} strokeWidth="1" />
        </svg>
      </div>

      {/* Top Right */}
      <div
        className={`absolute pointer-events-none select-none z-10 ${className}`}
        style={posStyle(true, false)}
        aria-hidden="true"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <line x1={half} y1="0" x2={half} y2={size} stroke={color} strokeWidth="1" />
          <line x1="0" y1={half} x2={size} y2={half} stroke={color} strokeWidth="1" />
        </svg>
      </div>

      {/* Bottom Left */}
      <div
        className={`absolute pointer-events-none select-none z-10 ${className}`}
        style={posStyle(false, true)}
        aria-hidden="true"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <line x1={half} y1="0" x2={half} y2={size} stroke={color} strokeWidth="1" />
          <line x1="0" y1={half} x2={size} y2={half} stroke={color} strokeWidth="1" />
        </svg>
      </div>

      {/* Bottom Right */}
      <div
        className={`absolute pointer-events-none select-none z-10 ${className}`}
        style={posStyle(false, false)}
        aria-hidden="true"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <line x1={half} y1="0" x2={half} y2={size} stroke={color} strokeWidth="1" />
          <line x1="0" y1={half} x2={size} y2={half} stroke={color} strokeWidth="1" />
        </svg>
      </div>
    </>
  );
};

/**
 * 02. CALIBRATION SCALE
 * Miniature tactile millimeter / pitch calibration scale.
 * Evokes audio studio hardware, drafting rulers & precision machinery.
 */
export const CalibrationScale: React.FC<{
  className?: string;
  label?: string;
  ticks?: number;
}> = ({ className = '', label = 'SPEC // 1:1', ticks = 12 }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[10px] font-mono text-neutral-400 select-none ${className}`}
      aria-hidden="true"
    >
      {label && <span className="uppercase tracking-wider text-[9px] font-semibold text-neutral-400">{label}</span>}
      <div className="flex items-end gap-[3px] h-3">
        {Array.from({ length: ticks }).map((_, i) => (
          <div
            key={i}
            className={`w-[1px] ${
              i % 4 === 0
                ? 'h-3 bg-neutral-400'
                : i % 2 === 0
                ? 'h-2 bg-neutral-300'
                : 'h-1.5 bg-neutral-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * 03. TUBULAR CONDUIT LINE
 * Continuous vector path with the characteristic curved fillet radius
 * matching the RaddeR 'R' letterform. Weaves between sections.
 */
export const TubularConduit: React.FC<{
  className?: string;
  direction?: 'down-right' | 'down-left' | 'horizontal-loop';
}> = ({ className = '', direction = 'down-right' }) => {
  if (direction === 'down-right') {
    return (
      <div className={`pointer-events-none select-none overflow-visible ${className}`} aria-hidden="true">
        <svg width="240" height="140" viewBox="0 0 240 140" fill="none" className="overflow-visible">
          {/* Main tubular curved path with RaddeR radius */}
          <path
            d="M 10 0 L 10 50 C 10 85, 45 100, 90 100 L 220 100"
            stroke="#ff451a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          {/* Solid anchor node */}
          <circle cx="10" cy="12" r="3.5" fill="#ff451a" className="opacity-80" />
          <circle cx="10" cy="12" r="1.5" fill="#ffffff" />
          <circle cx="220" cy="100" r="3" fill="#0a0a0a" className="opacity-40" />
        </svg>
      </div>
    );
  }

  if (direction === 'down-left') {
    return (
      <div className={`pointer-events-none select-none overflow-visible ${className}`} aria-hidden="true">
        <svg width="240" height="140" viewBox="0 0 240 140" fill="none" className="overflow-visible">
          <path
            d="M 230 0 L 230 50 C 230 85, 195 100, 150 100 L 20 100"
            stroke="#ff451a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <circle cx="230" cy="12" r="3.5" fill="#ff451a" className="opacity-80" />
          <circle cx="230" cy="12" r="1.5" fill="#ffffff" />
          <circle cx="20" cy="100" r="3" fill="#0a0a0a" className="opacity-40" />
        </svg>
      </div>
    );
  }

  // Horizontal loop (reminiscent of the dual RR lobes)
  return (
    <div className={`pointer-events-none select-none overflow-visible ${className}`} aria-hidden="true">
      <svg width="320" height="60" viewBox="0 0 320 60" fill="none" className="overflow-visible">
        <path
          d="M 0 30 L 80 30 C 110 30, 125 10, 145 10 C 165 10, 180 30, 210 30 L 320 30"
          stroke="rgba(10,10,10,0.12)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="145" cy="10" r="3" fill="#ff451a" className="opacity-60" />
      </svg>
    </div>
  );
};

/**
 * 04. WORDMARK EMBOSSING BACKDROP
 * Architectural hairline wireframe of the RaddeR wordmark,
 * subtly pressed into the background like an archival blinddruck.
 */
export const WordmarkEmboss: React.FC<{
  className?: string;
  opacity?: number;
  width?: number | string;
}> = ({ className = '', opacity = 0.045, width = 720 }) => {
  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="110 196 837 197"
        width={width}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-auto text-neutral-950"
      >
        <path d={RADDER_WORDMARK_PATH} />
      </svg>
    </div>
  );
};

/**
 * 05. EMBOSSED DUAL-R MONOGRAM
 * Hairline wireframe of the iconic dual-R emblem.
 */
export const LogoWireframe: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}> = ({ className = '', size = 360, color = 'currentColor', opacity = 0.05 }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="190 130 644 500"
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        className="text-neutral-950"
      >
        <path d={RADDER_LOGO_PATH} />
      </svg>
    </div>
  );
};
