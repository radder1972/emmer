import React from 'react';

export interface GlyphDefinition {
  char: string;
  name: string;
  category: 'letter' | 'lowercase' | 'number' | 'symbol';
  path: string;
  width?: number; // relative advance width, default 100
  description: string;
}

/**
 * THE RADDER DISPLAY TYPEFACE
 * Precision, modular architectural vector font designed from the exact DNA of the RaddeR wordmark logo.
 * Features:
 * - Continuous tubular arches & fillets
 * - Signature curved kicker leg on 'R'
 * - Authentic lowercase suite derived directly from the wordmark's 'a', 'd', 'e'
 * - Monoline stroke geometry on 100x100 drafting grid
 * - Pure modernist Swiss proportion
 */
export const RADDER_GLYPHS: GlyphDefinition[] = [
  // ==========================================
  // CAPITAL LETTERS A - Z (26 GLYPHS)
  // ==========================================
  {
    char: 'A',
    name: 'A // ARCHEX',
    category: 'letter',
    path: 'M 20 84 L 44 22 C 46 16, 54 16, 56 22 L 80 84 M 30 56 L 70 56',
    description: 'Arched tubular apex with low crossbar.',
  },
  {
    char: 'B',
    name: 'B // DUAL-LOBE',
    category: 'letter',
    path: 'M 24 16 L 24 84 M 24 16 L 54 16 C 72 16, 72 50, 54 50 L 24 50 M 24 50 L 56 50 C 76 50, 76 84, 56 84 L 24 84',
    description: 'Stacked dual tubular lobes echoing the RR monogram.',
  },
  {
    char: 'C',
    name: 'C // CONDUIT',
    category: 'letter',
    path: 'M 76 30 C 68 16, 24 16, 24 50 C 24 84, 68 84, 76 70',
    description: 'Open tubular horseshoe with soft terminals.',
  },
  {
    char: 'D',
    name: 'D // MONOLITH',
    category: 'letter',
    path: 'M 24 16 L 24 84 M 24 16 L 48 16 C 80 16, 80 84, 48 84 L 24 84',
    description: 'Single continuous semi-circular RaddeR arch.',
  },
  {
    char: 'E',
    name: 'E // TRI-BAR',
    category: 'letter',
    path: 'M 76 16 L 24 16 L 24 84 L 76 84 M 24 50 L 62 50',
    description: 'Three parallel horizontal bars with recessed center.',
  },
  {
    char: 'F',
    name: 'F // CANTILEVER',
    category: 'letter',
    path: 'M 24 84 L 24 16 L 76 16 M 24 50 L 62 50',
    description: 'Structural cantilever arms with vertical backbone.',
  },
  {
    char: 'G',
    name: 'G // TERMINAL',
    category: 'letter',
    path: 'M 76 30 C 68 16, 24 16, 24 50 C 24 84, 68 84, 76 70 L 76 50 L 52 50',
    description: 'Tubular horseshoe with inward horizontal gate.',
  },
  {
    char: 'H',
    name: 'H // GANTRY',
    category: 'letter',
    path: 'M 24 16 L 24 84 M 76 16 L 76 84 M 24 50 L 76 50',
    description: 'Twin structural pillars braced by central conduit.',
  },
  {
    char: 'I',
    name: 'I // COLUMN',
    category: 'letter',
    width: 60,
    path: 'M 30 16 L 30 84 M 14 16 L 46 16 M 14 84 L 46 84',
    description: 'Slim classical architectural column with serif caps.',
  },
  {
    char: 'J',
    name: 'J // HOOK',
    category: 'letter',
    path: 'M 72 16 L 72 64 C 72 84, 28 84, 26 66',
    description: 'Vertical drop into a rounded tubular j-hook.',
  },
  {
    char: 'K',
    name: 'K // PIVOT',
    category: 'letter',
    path: 'M 24 16 L 24 84 M 76 18 L 26 50 L 76 84',
    description: 'Vertical spine with angled diagonal trusses.',
  },
  {
    char: 'L',
    name: 'L // FOUNDATION',
    category: 'letter',
    path: 'M 24 16 L 24 84 L 76 84',
    description: 'Perpendicular baseline and vertical standard.',
  },
  {
    char: 'M',
    name: 'M // SPAN',
    category: 'letter',
    path: 'M 20 84 L 20 16 L 50 56 L 80 16 L 80 84',
    description: 'Dual vertical stanchions with deep central apex.',
  },
  {
    char: 'N',
    name: 'N // VECTOR',
    category: 'letter',
    path: 'M 24 84 L 24 16 L 76 84 L 76 16',
    description: 'Continuous directional vector stroke.',
  },
  {
    char: 'O',
    name: 'O // ORBIT',
    category: 'letter',
    path: 'M 50 16 C 22 16, 22 84, 50 84 C 78 84, 78 16, 50 16 Z',
    description: 'Symmetrical racetrack stadium curve.',
  },
  {
    char: 'P',
    name: 'P // UPPER-LOOP',
    category: 'letter',
    path: 'M 24 84 L 24 16 L 54 16 C 74 16, 74 50, 54 50 L 24 50',
    description: 'Upper hemisphere loop with vertical baseline stem.',
  },
  {
    char: 'Q',
    name: 'Q // PROBE',
    category: 'letter',
    path: 'M 50 16 C 22 16, 22 84, 50 84 C 78 84, 78 16, 50 16 Z M 54 62 L 78 86',
    description: 'Orbital stadium with dynamic exit terminal.',
  },
  {
    char: 'R',
    name: 'R // SIGNATURE',
    category: 'letter',
    path: 'M 24 84 L 24 16 L 54 16 C 74 16, 74 50, 54 50 L 24 50 M 44 50 C 52 50, 56 56, 62 68 L 72 84 L 80 84',
    description: 'The iconic RaddeR signature letterform with curved kicker foot.',
  },
  {
    char: 'S',
    name: 'S // CIRCUIT',
    category: 'letter',
    path: 'M 74 28 C 68 16, 30 16, 26 32 C 22 50, 78 48, 74 68 C 70 84, 30 84, 24 70',
    description: 'Continuous dual-reversing waveform curve.',
  },
  {
    char: 'T',
    name: 'T // BEAM',
    category: 'letter',
    path: 'M 16 16 L 84 16 M 50 16 L 50 84',
    description: 'Overhead crossbeam with centered vertical column.',
  },
  {
    char: 'U',
    name: 'U // TROUGH',
    category: 'letter',
    path: 'M 24 16 L 24 62 C 24 84, 76 84, 76 62 L 76 16',
    description: 'U-channel conduit with bottom fillet radius.',
  },
  {
    char: 'V',
    name: 'V // APEX',
    category: 'letter',
    path: 'M 18 16 L 47 82 C 49 86, 51 86, 53 82 L 82 16',
    description: 'Symmetrical converging angular struts.',
  },
  {
    char: 'W',
    name: 'W // TRUSS',
    category: 'letter',
    path: 'M 16 16 L 34 84 L 50 44 L 66 84 L 84 16',
    description: 'Double chevron truss structure.',
  },
  {
    char: 'X',
    name: 'X // CROSSHAIR',
    category: 'letter',
    path: 'M 22 16 L 78 84 M 78 16 L 22 84',
    description: 'Drafting intersection diagonals.',
  },
  {
    char: 'Y',
    name: 'Y // JUNCTION',
    category: 'letter',
    path: 'M 20 16 L 50 50 L 80 16 M 50 50 L 50 84',
    description: 'Forking channel with vertical stem.',
  },
  {
    char: 'Z',
    name: 'Z // TRAVERSE',
    category: 'letter',
    path: 'M 24 16 L 76 16 L 24 84 L 76 84',
    description: 'Horizontal guides joined by sharp shear diagonal.',
  },

  // ==========================================
  // LOWERCASE LETTERS a - z (26 GLYPHS)
  // Derived directly from the RaddeR wordmark ('a', 'd', 'e')
  // ==========================================
  {
    char: 'a',
    name: 'a // LOBE',
    category: 'lowercase',
    path: 'M 74 44 L 74 84 M 74 48 C 52 44, 26 44, 26 64 C 26 84, 52 84, 74 80',
    description: 'Classic RaddeR geometric lowercase bowl with vertical grounding stem.',
  },
  {
    char: 'b',
    name: 'b // ASCENT-RIGHT',
    category: 'lowercase',
    path: 'M 26 16 L 26 84 M 26 48 C 48 44, 74 44, 74 64 C 74 84, 48 84, 26 80',
    description: 'Full-height left structural mast with forward-facing circular lobe.',
  },
  {
    char: 'c',
    name: 'c // HALF-CONDUIT',
    category: 'lowercase',
    path: 'M 74 54 C 66 44, 26 44, 26 64 C 26 84, 66 84, 74 74',
    description: 'Compact open tubular conduit with rounded horizontal lips.',
  },
  {
    char: 'd',
    name: 'd // ASCENT-LEFT',
    category: 'lowercase',
    path: 'M 74 16 L 74 84 M 74 48 C 52 44, 26 44, 26 64 C 26 84, 52 84, 74 80',
    description: 'Iconic RaddeR wordmark letterform with full-height mast and backward bowl.',
  },
  {
    char: 'e',
    name: 'e // BORE',
    category: 'lowercase',
    path: 'M 26 64 L 74 64 C 74 44, 26 44, 26 64 C 26 84, 68 84, 76 74',
    description: 'Iconic RaddeR wordmark letterform with horizontal eye aperture and sweeping bowl.',
  },
  {
    char: 'f',
    name: 'f // MAST',
    category: 'lowercase',
    width: 70,
    path: 'M 56 16 C 40 16, 32 24, 32 42 L 32 84 M 18 44 L 52 44',
    description: 'Overhead cantilever curve with mid-tier crossbar valve.',
  },
  {
    char: 'g',
    name: 'g // DESCENT-BOWL',
    category: 'lowercase',
    path: 'M 74 48 C 52 44, 26 44, 26 64 C 26 84, 52 84, 74 80 M 74 44 L 74 84 C 74 98, 34 98, 26 88',
    description: 'Standard x-height circular bowl dropping into deep tubular descender cradle.',
  },
  {
    char: 'h',
    name: 'h // BENT-PORTAL',
    category: 'lowercase',
    path: 'M 26 16 L 26 84 M 26 54 C 36 44, 74 44, 74 60 L 74 84',
    description: 'High vertical mast springing into a secondary rounded gantry standard.',
  },
  {
    char: 'i',
    name: 'i // PIN',
    category: 'lowercase',
    width: 50,
    path: 'M 25 44 L 25 84 M 25 22 L 25 26',
    description: 'Compact baseline pin with isolated calibration registration node.',
  },
  {
    char: 'j',
    name: 'j // DROP-PIN',
    category: 'lowercase',
    width: 60,
    path: 'M 36 44 L 36 86 C 36 98, 14 98, 10 88 M 36 22 L 36 26',
    description: 'Descender drop hook with upper registration node.',
  },
  {
    char: 'k',
    name: 'k // STRUT',
    category: 'lowercase',
    path: 'M 26 16 L 26 84 M 70 44 L 26 66 M 44 58 L 72 84',
    description: 'Full-height spine with lower-tier triangular diagonal struts.',
  },
  {
    char: 'l',
    name: 'l // PILLAR',
    category: 'lowercase',
    width: 50,
    path: 'M 25 16 L 25 84',
    description: 'Slim monoline vertical load-bearing architectural pillar.',
  },
  {
    char: 'm',
    name: 'm // DOUBLE-VAULT',
    category: 'lowercase',
    path: 'M 18 44 L 18 84 M 18 54 C 28 44, 50 44, 50 60 L 50 84 M 50 54 C 60 44, 82 44, 82 60 L 82 84',
    description: 'Double tubular vault arches grounded across three baseline columns.',
  },
  {
    char: 'n',
    name: 'n // VAULT',
    category: 'lowercase',
    path: 'M 26 44 L 26 84 M 26 54 C 36 44, 74 44, 74 60 L 74 84',
    description: 'Single continuous tubular conduit spanning between two piers.',
  },
  {
    char: 'o',
    name: 'o // DISK',
    category: 'lowercase',
    path: 'M 50 44 C 26 44, 26 84, 50 84 C 74 84, 74 44, 50 44 Z',
    description: 'Compact symmetrical circular stadium core.',
  },
  {
    char: 'p',
    name: 'p // PLUMB-RIGHT',
    category: 'lowercase',
    path: 'M 26 44 L 26 98 M 26 48 C 48 44, 74 44, 74 64 C 74 84, 48 84, 26 80',
    description: 'Descending left baseline plumb with forward-facing circular bowl.',
  },
  {
    char: 'q',
    name: 'q // PLUMB-LEFT',
    category: 'lowercase',
    path: 'M 74 44 L 74 98 M 74 48 C 52 44, 26 44, 26 64 C 26 84, 52 84, 74 80',
    description: 'Descending right baseline plumb with backward-facing circular bowl.',
  },
  {
    char: 'r',
    name: 'r // CANTILEVER-ARM',
    category: 'lowercase',
    path: 'M 26 44 L 26 84 M 26 56 C 36 44, 68 44, 74 50',
    description: 'Left vertical standard with springing tubular shoulder arm.',
  },
  {
    char: 's',
    name: 's // WAVE-CHANNEL',
    category: 'lowercase',
    path: 'M 72 52 C 66 44, 32 44, 28 54 C 24 66, 76 64, 72 74 C 68 84, 32 84, 26 76',
    description: 'Continuous dual-reversing waveform within standard x-height.',
  },
  {
    char: 't',
    name: 't // CRADLE-VALVE',
    category: 'lowercase',
    width: 70,
    path: 'M 35 24 L 35 76 C 35 84, 42 84, 54 84 M 18 44 L 52 44',
    description: 'Vertical conduit with curved base cradle and x-height valve crossbar.',
  },
  {
    char: 'u',
    name: 'u // TROUGH-CHANNEL',
    category: 'lowercase',
    path: 'M 26 44 L 26 70 C 26 84, 74 84, 74 70 L 74 44 M 74 68 L 74 84',
    description: 'Inverted vault conduit with right baseline grounding stem.',
  },
  {
    char: 'v',
    name: 'v // CHEVRON',
    category: 'lowercase',
    path: 'M 22 44 L 48 82 C 50 85, 52 85, 54 82 L 80 44',
    description: 'Compact converging angular chevron strut.',
  },
  {
    char: 'w',
    name: 'w // TRUSS-SPAN',
    category: 'lowercase',
    path: 'M 18 44 L 34 84 L 50 56 L 66 84 L 82 44',
    description: 'Double chevron truss span engineered for horizontal continuity.',
  },
  {
    char: 'x',
    name: 'x // CROSS-LINK',
    category: 'lowercase',
    path: 'M 24 44 L 76 84 M 76 44 L 24 84',
    description: 'Symmetrical cross-link diagonal bracing at mid-height.',
  },
  {
    char: 'y',
    name: 'y // DRAIN-VALVE',
    category: 'lowercase',
    path: 'M 26 44 L 26 66 C 26 84, 74 84, 74 44 M 74 64 L 74 86 C 74 98, 34 98, 26 88',
    description: 'Upper channel basin descending into smooth siphon curve.',
  },
  {
    char: 'z',
    name: 'z // ZIG-GUIDE',
    category: 'lowercase',
    path: 'M 26 44 L 74 44 L 26 84 L 74 84',
    description: 'Parallel horizontal runners joined by diagonal shear strut.',
  },

  // ==========================================
  // NUMBERS 0 - 9 (10 GLYPHS)
  // ==========================================
  {
    char: '0',
    name: '0 // ZERO-LAG',
    category: 'number',
    path: 'M 50 16 C 22 16, 22 84, 50 84 C 78 84, 78 16, 50 16 Z M 66 28 L 34 72',
    description: 'Slashed stadium zero indicating precision zero-latency.',
  },
  {
    char: '1',
    name: '1 // UNIT',
    category: 'number',
    width: 60,
    path: 'M 21 28 L 35 16 L 35 84 M 17 84 L 53 84',
    description: 'Single architectural unit column with angled serif.',
  },
  {
    char: '2',
    name: '2 // SWEEP',
    category: 'number',
    path: 'M 26 34 C 26 16, 74 16, 74 34 C 74 52, 28 64, 24 84 L 76 84',
    description: 'Tubular arch sweeping down to baseline platform.',
  },
  {
    char: '3',
    name: '3 // STEPPER',
    category: 'number',
    path: 'M 26 18 L 74 18 L 48 48 C 66 48, 76 56, 76 68 C 76 84, 28 84, 24 72',
    description: 'Upper angled tier with rounded bottom bowl.',
  },
  {
    char: '4',
    name: '4 // FRAME',
    category: 'number',
    path: 'M 64 16 L 64 84 M 64 16 L 22 58 L 78 58',
    description: 'Triangular gantry with upright plumb line.',
  },
  {
    char: '5',
    name: '5 // CAM',
    category: 'number',
    path: 'M 74 16 L 26 16 L 24 44 C 32 40, 48 40, 62 44 C 76 50, 76 84, 50 84 C 32 84, 24 74, 24 66',
    description: 'Top horizontal guide with deep lower counter.',
  },
  {
    char: '6',
    name: '6 // SPIRAL',
    category: 'number',
    path: 'M 70 24 C 60 16, 26 24, 24 54 C 24 84, 76 84, 76 60 C 76 44, 46 44, 26 54',
    description: 'Inward curling logarithmic arch.',
  },
  {
    char: '7',
    name: '7 // CRANE',
    category: 'number',
    path: 'M 24 16 L 76 16 L 46 84 M 36 48 L 62 48',
    description: 'Horizontal boom with angled drop cable.',
  },
  {
    char: '8',
    name: '8 // LOOP',
    category: 'number',
    path: 'M 50 48 C 32 48, 32 16, 50 16 C 68 16, 68 48, 50 48 Z M 50 48 C 30 48, 30 84, 50 84 C 70 84, 70 48, 50 48 Z',
    description: 'Stacked figure-eight dual circular bearings.',
  },
  {
    char: '9',
    name: '9 // ROTOR',
    category: 'number',
    path: 'M 30 76 C 40 84, 74 76, 76 46 C 76 16, 24 16, 24 40 C 24 56, 54 56, 74 46',
    description: 'Inverted spiral rotor with sweeping tail.',
  },

  // ==========================================
  // SYMBOLS & PUNCTUATION (12 GLYPHS)
  // ==========================================
  {
    char: '+',
    name: '+ // RETICLE',
    category: 'symbol',
    width: 70,
    path: 'M 35 20 L 35 80 M 10 50 L 60 50',
    description: 'Drafting precision corner reticle cross.',
  },
  {
    char: '-',
    name: '- // DASH',
    category: 'symbol',
    width: 70,
    path: 'M 10 50 L 60 50',
    description: 'Horizontal axis calibration mark.',
  },
  {
    char: '=',
    name: '= // PARALLEL',
    category: 'symbol',
    width: 70,
    path: 'M 10 40 L 60 40 M 10 60 L 60 60',
    description: 'Dual parallel bus tracks.',
  },
  {
    char: '/',
    name: '/ // STROKE',
    category: 'symbol',
    width: 60,
    path: 'M 45 16 L 15 84',
    description: 'Architectural dimension divider.',
  },
  {
    char: '#',
    name: '# // GRID',
    category: 'symbol',
    path: 'M 38 16 L 38 84 M 62 16 L 62 84 M 18 38 L 82 38 M 18 62 L 82 62',
    description: 'Drafting coordination mesh.',
  },
  {
    char: '&',
    name: '& // LIGATURE',
    category: 'symbol',
    path: 'M 72 78 C 58 84, 40 84, 32 74 C 22 62, 38 46, 46 38 C 54 28, 44 16, 36 24 C 28 32, 68 70, 76 82',
    description: 'Continuous ribbon ligature.',
  },
  {
    char: '?',
    name: '? // QUERY',
    category: 'symbol',
    width: 70,
    path: 'M 18 32 C 18 16, 52 16, 52 34 C 52 48, 35 52, 35 66 M 35 80 L 35 84',
    description: 'Curved sensor hook with isolated terminal node.',
  },
  {
    char: '!',
    name: '! // TRIGGER',
    category: 'symbol',
    width: 50,
    path: 'M 25 16 L 25 64 M 25 80 L 25 84',
    description: 'Vertical indicator pin with signal node.',
  },
  {
    char: '.',
    name: '. // NODE',
    category: 'symbol',
    width: 40,
    path: 'M 20 78 L 20 84',
    description: 'Baseline registration node.',
  },
  {
    char: ':',
    name: ': // PORT',
    category: 'symbol',
    width: 40,
    path: 'M 20 34 L 20 40 M 20 74 L 20 80',
    description: 'Twin bus data ports.',
  },
  {
    char: '@',
    name: '@ // CONVOLUTION',
    category: 'symbol',
    path: 'M 50 50 C 40 50, 40 34, 50 34 C 60 34, 60 50, 50 50 M 60 42 L 60 62 C 60 76, 20 76, 20 50 C 20 22, 80 22, 80 50',
    description: 'Circulating perimeter loop wrapping internal core.',
  },
  {
    char: '%',
    name: '% // RATIO',
    category: 'symbol',
    path: 'M 72 20 L 28 80 M 34 32 C 34 26, 44 26, 44 32 C 44 38, 34 38, 34 32 Z M 56 68 C 56 62, 66 62, 66 68 C 66 74, 56 74, 56 68 Z',
    description: 'Proportional division ratio with calibrated orbital nodules.',
  },
];

// Fast lookup map for quick rendering (exact char first, then fallback)
const GLYPH_MAP = new Map<string, GlyphDefinition>();
RADDER_GLYPHS.forEach((g) => {
  GLYPH_MAP.set(g.char, g);
});

/**
 * Single Vector Glyph Component
 */
export const RadderGlyph: React.FC<{
  char: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  mode?: 'stroke' | 'wireframe';
}> = ({
  char,
  size = 48,
  color = '#ff451a',
  strokeWidth = 9,
  className = '',
  mode = 'stroke',
}) => {
  // Exact match first, then case fallback
  const glyph =
    GLYPH_MAP.get(char) ||
    GLYPH_MAP.get(char.toUpperCase()) ||
    GLYPH_MAP.get(char.toLowerCase());

  if (!glyph) {
    // Fallback space or unknown
    return <div style={{ width: size * 0.5, height: size }} className="inline-block" />;
  }

  const effectiveWidth = glyph.width ?? 100;

  return (
    <svg
      viewBox={`0 0 ${effectiveWidth} 100`}
      width={size * (effectiveWidth / 100)}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={mode === 'wireframe' ? 2 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block overflow-visible ${className}`}
      aria-label={`RaddeR Glyph ${glyph.char}`}
    >
      <path d={glyph.path} />
    </svg>
  );
};

/**
 * Text String Renderer using the RaddeR Vector Font
 */
export const RadderText: React.FC<{
  text: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  letterSpacing?: number;
  className?: string;
  mode?: 'stroke' | 'wireframe';
}> = ({
  text,
  size = 36,
  color = '#0a0a0a',
  strokeWidth = 9,
  letterSpacing = 4,
  className = '',
  mode = 'stroke',
}) => {
  return (
    <div
      className={`inline-flex flex-wrap items-center select-none ${className}`}
      style={{ gap: `${letterSpacing}px` }}
    >
      {Array.from(text).map((char, index) => {
        if (char === ' ') {
          return (
            <span
              key={index}
              style={{ width: `${size * 0.45}px`, height: `${size}px` }}
              className="inline-block"
            />
          );
        }
        return (
          <RadderGlyph
            key={index}
            char={char}
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            mode={mode}
          />
        );
      })}
    </div>
  );
};
