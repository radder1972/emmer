import React from 'react';

export interface RadderIconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

/**
 * 01. MANIFEST ICON
 * Symmetrical manifesto folio / architectural decree.
 * Direct visual echo of the dual RaddeR arches meeting at a central spine.
 */
export const RadderIconManifest: React.FC<RadderIconProps> = ({
  className = '',
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Manifest Icon"
  >
    {/* Architectural central spine */}
    <line x1="12" y1="3" x2="12" y2="21" />
    
    {/* Left manifesto curve (mirrors the left lobe of RaddeR) */}
    <path d="M 12 5.5 C 8.5 3, 3.5 4.2, 3.5 8.5 C 3.5 12.8, 8 13.8, 12 14.8" />
    
    {/* Right manifesto curve (mirrors the right lobe of RaddeR) */}
    <path d="M 12 5.5 C 15.5 3, 20.5 4.2, 20.5 8.5 C 20.5 12.8, 16 13.8, 12 14.8" />
    
    {/* Minimalist horizontal manifesto decree lines */}
    <line x1="6.5" y1="9" x2="9.5" y2="9" />
    <line x1="14.5" y1="9" x2="17.5" y2="9" />
    
    {/* Foundational base plate */}
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

/**
 * 02. CASES ICON
 * Precision structural portfolio case.
 * Features the signature RaddeR top tubular arch handle and modular divisions.
 */
export const RadderIconCases: React.FC<RadderIconProps> = ({
  className = '',
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Cases Icon"
  >
    {/* RaddeR signature tubular arched handle */}
    <path d="M 8.5 6 C 8.5 3.3, 10 2.5, 12 2.5 C 14 2.5, 15.5 3.3, 15.5 6" />
    
    {/* Outer structural chassis with rounded corners */}
    <rect x="3" y="6" width="18" height="15" rx="2.5" />
    
    {/* Central dividing seam with RaddeR central latch notch */}
    <path d="M 3 12.5 L 9 12.5 C 9.5 14, 10.5 14.8, 12 14.8 C 13.5 14.8, 14.5 14, 15 12.5 L 21 12.5" />
    
    {/* Twin vertical structural reinforcement struts */}
    <line x1="7.5" y1="15.5" x2="7.5" y2="18.5" />
    <line x1="16.5" y1="15.5" x2="16.5" y2="18.5" />
  </svg>
);

/**
 * 03. OVER ONS ICON
 * The Maker & Interdisciplinary Triad (Architect, Strateeg, Maker).
 * Bilateral symmetrical shoulders with central spine and flanking focal nodes.
 */
export const RadderIconAbout: React.FC<RadderIconProps> = ({
  className = '',
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Over Ons Icon"
  >
    {/* Central architect / maker head */}
    <circle cx="12" cy="7" r="3.5" />
    
    {/* Bilateral flared shoulders curving like the RaddeR crest */}
    <path d="M 4 20.5 C 4 15.5, 7.5 13.5, 12 13.5 C 16.5 13.5, 20 15.5, 20 20.5" />
    
    {/* Center architectural spine */}
    <line x1="12" y1="13.5" x2="12" y2="20.5" />
    
    {/* Left and right discipline balance nodes */}
    <circle cx="7.5" cy="18" r="0.75" fill={color} />
    <circle cx="16.5" cy="18" r="0.75" fill={color} />
  </svg>
);

/**
 * 04. SPARREN ICON
 * Symmetrical strategic sparring: two mirrored dialogue lobes (Я and R)
 * engaging across a central sparring spark.
 */
export const RadderIconSparren: React.FC<RadderIconProps> = ({
  className = '',
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Sparren Icon"
  >
    {/* Left dialogue lobe mirroring Я */}
    <path d="M 10 4.5 C 6 4.5, 3.5 7, 3.5 10.5 C 3.5 12.8, 5 14.6, 7 15.5 L 6 18.5 L 9.8 17 C 10.5 17.1, 11 17.2, 11.5 17.2" />
    
    {/* Right dialogue lobe mirroring R (perfect bilateral symmetry) */}
    <path d="M 14 4.5 C 18 4.5, 20.5 7, 20.5 10.5 C 20.5 12.8, 19 14.6, 17 15.5 L 18 18.5 L 14.2 17 C 13.5 17.1, 13 17.2, 12.5 17.2" />
    
    {/* Central sparring spark / exchange cross */}
    <line x1="12" y1="8" x2="12" y2="13" />
    <line x1="9.5" y1="10.5" x2="14.5" y2="10.5" />
  </svg>
);

/**
 * 05. STRATEEG ICON (Header & Pillar)
 * Strategic vision, direction and analytical trajectory in pure RaddeR geometry.
 * Bilateral apex lens with central focal spark and horizon baseline.
 */
export const RadderIconStrateeg: React.FC<RadderIconProps> = ({
  className = '',
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="De Strateeg Icon"
  >
    {/* Symmetrical upward strategic trajectory chevron */}
    <path d="M 4 14.5 L 12 4.5 L 20 14.5" />
    {/* Inner curved horizon arc matching RaddeR upper lobe */}
    <path d="M 7.5 11.5 C 9.5 9.5, 14.5 9.5, 16.5 11.5" />
    {/* Central focus spark node */}
    <circle cx="12" cy="11.5" r="1.2" fill={color} />
    {/* Foundational strategic baseline */}
    <line x1="4" y1="20" x2="20" y2="20" />
    {/* Vertical alignment strut */}
    <line x1="12" y1="15.5" x2="12" y2="20" />
  </svg>
);

/**
 * 06. ARCHITECT ICON (Header & Pillar)
 * Structural systems architecture & core engine blueprint.
 * Direct architectural translation of the RaddeR symmetrical dual-arched hallmark.
 */
export const RadderIconArchitect: React.FC<RadderIconProps> = ({
  className = '',
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="De Architect Icon"
  >
    {/* Top structural lintel plate */}
    <line x1="4" y1="4" x2="20" y2="4" />
    {/* Central architectural spine */}
    <line x1="12" y1="4" x2="12" y2="20" />
    {/* Left structural arch (mirrors RaddeR left lobe) */}
    <path d="M 5 20 C 5 12, 12 11, 12 11" />
    {/* Right structural arch (mirrors RaddeR right lobe) */}
    <path d="M 19 20 C 19 12, 12 11, 12 11" />
    {/* Horizontal tie beam */}
    <line x1="7" y1="12.5" x2="17" y2="12.5" />
    {/* Solid foundational plinth */}
    <line x1="4" y1="20" x2="20" y2="20" />
  </svg>
);

/**
 * 07. MAKER ICON (Header & Pillar)
 * Precision craft, direct execution and drafting caliper.
 * Bilateral curved arms with central calibration axis and gauge node.
 */
export const RadderIconMaker: React.FC<RadderIconProps> = ({
  className = '',
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="De Maker Icon"
  >
    {/* Top pivot head (maker node) */}
    <circle cx="12" cy="4.5" r="2.2" />
    {/* Left caliper arm with signature RaddeR curve */}
    <path d="M 10 6 C 6.5 8.5, 4.5 13, 5.5 19.5" />
    {/* Right caliper arm with signature RaddeR curve */}
    <path d="M 14 6 C 17.5 8.5, 19.5 13, 18.5 19.5" />
    {/* Precision measurement gauge crossbeam */}
    <line x1="7.5" y1="13.5" x2="16.5" y2="13.5" />
    {/* Center calibration gauge node */}
    <circle cx="12" cy="13.5" r="1.2" fill={color} />
    {/* Center vertical indicator ray */}
    <line x1="12" y1="6.8" x2="12" y2="10.5" />
  </svg>
);

/**
 * 08. TERMINAL / PROMPT BADGE ICON
 * Symmetrical CLI terminal bracket in RaddeR monoline aesthetic.
 */
export const RadderIconTerminal: React.FC<RadderIconProps> = ({
  className = '',
  size = 14,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Terminal Badge Icon"
  >
    {/* Prompt bracket */}
    <path d="M 6 7 L 11.5 12 L 6 17" />
    {/* Cursor underscore bar */}
    <line x1="13.5" y1="17" x2="18.5" y2="17" />
  </svg>
);

/**
 * 09. SPARKLES / MOTOR IGNITION ICON
 * Precise geometric ignition spark in RaddeR style.
 */
export const RadderIconSparkles: React.FC<RadderIconProps> = ({
  className = '',
  size = 14,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Sparkles Icon"
  >
    {/* Central primary diamond spark */}
    <path d="M 12 3 L 13.5 9.5 L 20 11 L 13.5 12.5 L 12 19 L 10.5 12.5 L 4 11 L 10.5 9.5 Z" />
    {/* Secondary micro satellite spark */}
    <circle cx="18" cy="5" r="1" fill={color} />
  </svg>
);

/**
 * 10. ZAP / POWER ENGINE ICON
 * Monoline angular lightning pulse in RaddeR style.
 */
export const RadderIconZap: React.FC<RadderIconProps> = ({
  className = '',
  size = 14,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Zap Icon"
  >
    <path d="M 13 2.5 L 5 13.5 L 12 13.5 L 11 21.5 L 19 10.5 L 12 10.5 Z" />
  </svg>
);

/**
 * 07. TABLE TENNIS ICON
 * Precision table tennis paddle & bouncing pingpong ball.
 * Architectural linework matching the RaddeR vector hallmark family.
 */
export const RadderIconTableTennis: React.FC<RadderIconProps> = ({
  className = '',
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 align-middle ${className}`}
    aria-label="Tafeltennis Icon"
  >
    {/* Paddle blade */}
    <circle cx="10" cy="10" r="6.5" />
    
    {/* Rubber sweet-spot arc */}
    <path d="M 6 13 C 8 15 12 15 14 13" />
    
    {/* Paddle ergonomic handle */}
    <path d="M 14.5 14.5 L 18.5 18.5 C 19.3 19.3 19.3 20.5 18.5 21.3 C 17.7 22.1 16.5 22.1 15.7 21.3 L 11.7 17.3" />
    
    {/* Dynamic pingpong ball */}
    <circle cx="18.5" cy="5.5" r="2" fill={color} />
    
    {/* Trajectory / speed arc */}
    <path d="M 3.5 9 C 3.5 5.5 7 3.5 10.5 3.5" />
  </svg>
);

/**
 * Dispatcher component to render icon by PageId
 */
export const RadderNavIcon: React.FC<{
  id: 'manifest' | 'cases' | 'over-ons' | 'sparren';
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}> = ({ id, ...props }) => {
  switch (id) {
    case 'manifest':
      return <RadderIconManifest {...props} />;
    case 'cases':
      return <RadderIconCases {...props} />;
    case 'over-ons':
      return <RadderIconAbout {...props} />;
    case 'sparren':
      return <RadderIconSparren {...props} />;
    default:
      return null;
  }
};

/**
 * Dispatcher component to render triad icon by role
 */
export const RadderPillarIcon: React.FC<{
  role: 'strateeg' | 'architect' | 'maker' | string;
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}> = ({ role, ...props }) => {
  const normalized = role.toLowerCase();
  if (normalized.includes('strateeg') || normalized === 'terminal') {
    return <RadderIconStrateeg {...props} />;
  }
  if (normalized.includes('architect') || normalized === 'cpu') {
    return <RadderIconArchitect {...props} />;
  }
  if (normalized.includes('maker') || normalized === 'compass') {
    return <RadderIconMaker {...props} />;
  }
  return <RadderIconStrateeg {...props} />;
};
