import React, { useState, useMemo } from 'react';
import {
  RADDER_ICONS_COLLECTION,
  RadderIconEngine,
  RadderIconCopy,
  RadderIconCheck,
  type IconDefinition,
} from '../components/RadderIconLibrary';
import { RadderIconSparren } from '../components/RadderNavIcons';
import {
  RADDER_GLYPHS,
  RadderGlyph,
  RadderText,
  type GlyphDefinition,
} from '../components/RadderFont';
import { CornerReticles, CalibrationScale } from '../components/RadderStudioDetails';
import { Search, X, Download, Code2, ArrowRight, Type, Sparkles } from 'lucide-react';

interface IconsPageProps {
  onOpenContact?: () => void;
  onNavigateToCases?: () => void;
}

export const IconsPage: React.FC<IconsPageProps> = ({
  onOpenContact,
  onNavigateToCases,
}) => {
  // Top primary navigation: Typeface vs Icons
  const [activeTab, setActiveTab] = useState<'typeface' | 'icons'>('typeface');

  // ==========================================
  // TYPEFACE STATE
  // ==========================================
  const [customText, setCustomText] = useState<string>('RADDER 2026 // PRODUCT ARCHITECTURE');
  const [fontMode, setFontMode] = useState<'stroke' | 'wireframe'>('stroke');
  const [fontSize, setFontSize] = useState<number>(44);
  const [fontStroke, setFontStroke] = useState<number>(8);
  const [fontSpacing, setFontSpacing] = useState<number>(4);
  const [glyphCategory, setGlyphCategory] = useState<'all' | 'letter' | 'number' | 'symbol'>('all');
  const [inspectGlyph, setInspectGlyph] = useState<GlyphDefinition | null>(null);

  // ==========================================
  // ICONS STATE
  // ==========================================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [activeColor, setActiveColor] = useState<string>('#ff451a');
  const [activeSize, setActiveSize] = useState<number>(28);
  const [activeStroke, setActiveStroke] = useState<number>(2);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyType, setCopyType] = useState<'jsx' | 'svg' | null>(null);
  const [inspectIcon, setInspectIcon] = useState<IconDefinition | null>(null);

  const iconCategories = [
    'Alle',
    'Merk & Navigatie',
    'De Motor & Systeem',
    'Tools & Craft',
    'Domein & Cases',
  ];

  const filteredIcons = useMemo(() => {
    return RADDER_ICONS_COLLECTION.filter((icon) => {
      const matchesCategory =
        selectedCategory === 'Alle' || icon.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        icon.name.toLowerCase().includes(q) ||
        icon.componentName.toLowerCase().includes(q) ||
        icon.description.toLowerCase().includes(q) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const filteredGlyphs = useMemo(() => {
    return RADDER_GLYPHS.filter((glyph) => {
      if (glyphCategory === 'all') return true;
      return glyph.category === glyphCategory;
    });
  }, [glyphCategory]);

  const copyToClipboard = (text: string, id: string, type: 'jsx' | 'svg') => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setCopyType(type);
    setTimeout(() => {
      setCopiedId(null);
      setCopyType(null);
    }, 2000);
  };

  const getJsxSnippet = (icon: IconDefinition) => {
    return `<${icon.componentName} size={${activeSize}} color="${activeColor}" strokeWidth={${activeStroke}} />`;
  };

  const getSvgSnippet = (icon: IconDefinition) => {
    return `<svg viewBox="0 0 24 24" width="${activeSize}" height="${activeSize}" fill="none" stroke="${activeColor}" stroke-width="${activeStroke}" stroke-linecap="round" stroke-linejoin="round" aria-label="${icon.name}">
  <!-- RaddeR Vector Icon: ${icon.componentName} -->
</svg>`;
  };

  const getGlyphJsxSnippet = (glyph: GlyphDefinition) => {
    return `<RadderGlyph char="${glyph.char}" size={${fontSize}} color="${activeColor}" strokeWidth={${fontStroke}} mode="${fontMode}" />`;
  };

  const getGlyphSvgSnippet = (glyph: GlyphDefinition) => {
    const effectiveWidth = glyph.width ?? 100;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${effectiveWidth} 100" width="${effectiveWidth}" height="100" fill="none" stroke="${activeColor}" stroke-width="${fontMode === 'wireframe' ? 2 : fontStroke}" stroke-linecap="round" stroke-linejoin="round" aria-label="RaddeR Glyph ${glyph.char}">
  <!-- RaddeR Display Typeface // ${glyph.name} -->
  <path d="${glyph.path}" />
</svg>`;
  };

  const downloadGlyphSvg = (glyph: GlyphDefinition) => {
    const content = getGlyphSvgSnippet(glyph);
    const blob = new Blob([content], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeChar =
      glyph.char === '/'
        ? 'slash'
        : glyph.char === '+'
        ? 'plus'
        : glyph.char === '#'
        ? 'hash'
        : glyph.char === '?'
        ? 'question'
        : glyph.char.toLowerCase();
    link.download = `radder-glyph-${safeChar}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadSvgFile = (icon: IconDefinition) => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="${activeColor}" stroke-width="${activeStroke}" stroke-linecap="round" stroke-linejoin="round">
  <!-- RaddeR Design System // ${icon.name} -->
  <title>${icon.name}</title>
</svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${icon.id}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-40 sm:pt-48 lg:pt-56 pb-24 bg-[#f8f7f4] relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Page Header Zone */}
        <div className="relative mb-8">
          <div className="relative z-10 max-w-4xl text-left">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm">
                <RadderIconEngine size={14} strokeWidth={2} color="#ff451a" />
                <span>DESIGN SYSTEM // VORMENTAAL & TYPEFACE</span>
              </div>
              <CalibrationScale label="GRID: 100x100" ticks={8} className="hidden sm:inline-flex" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              {activeTab === 'typeface' ? (
                <>
                  RaddeR Display Typeface. <br />
                  <span className="text-neutral-400">Gebouwd op de DNA van ons woordlogo.</span>
                </>
              ) : (
                <>
                  RaddeR Vector Iconen. <br />
                  <span className="text-neutral-400">Geometrisch, architraaf & zero-lag.</span>
                </>
              )}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl font-normal leading-relaxed">
              {activeTab === 'typeface'
                ? 'Een compleet modulair vector-font van 48 glyphs (A-Z, 0-9 en symbolen). Gekenmerkt door de karakteristieke boogstralen, tubulaire fillets en vloeiende pootconstructies uit het RaddeR woordmerk.'
                : `Een set van ${RADDER_ICONS_COLLECTION.length} op maat ontworpen vector-iconen in de architecturale stijl van RaddeR. Gekarakteriseerd door wiskundige symmetrie, dubbele bogen en modulaire 24x24 rasters.`}
            </p>
          </div>
        </div>

        {/* Primary Sub-Navigation Tab Switcher */}
        <div className="flex items-center gap-2 pb-6 mb-8 border-b border-neutral-300">
          <button
            onClick={() => setActiveTab('typeface')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'typeface'
                ? 'bg-neutral-950 text-white shadow-md border border-neutral-950'
                : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300 shadow-sm'
            }`}
          >
            <Type className="w-3.5 h-3.5 text-[#ff451a]" />
            <span>RaddeR Typeface ({RADDER_GLYPHS.length} Glyphs)</span>
          </button>

          <button
            onClick={() => setActiveTab('icons')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'icons'
                ? 'bg-neutral-950 text-white shadow-md border border-neutral-950'
                : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300 shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff451a]" />
            <span>Vector Iconen ({RADDER_ICONS_COLLECTION.length})</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: RADDER TYPEFACE WORKBENCH */}
        {/* ========================================================= */}
        {activeTab === 'typeface' && (
          <div className="space-y-10 animate-fade-in">
            {/* Live Interactive Type Tester */}
            <div className="bg-white rounded-2xl border border-neutral-300 shadow-sm p-6 sm:p-8 space-y-6 relative group">
              <CornerReticles color="rgba(0,0,0,0.18)" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff451a] font-bold">
                    INTERACTIEVE SPECIMEN TESTER
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-mono tracking-tight mt-0.5">
                    Typ & Test de RaddeR Typografie
                  </h3>
                </div>
                <CalibrationScale label="MOTOR // 1:1" ticks={10} className="hidden sm:inline-flex" />
              </div>

              {/* Text Input */}
              <div>
                <label className="text-xs font-mono text-neutral-600 block mb-2 font-semibold">
                  Voer tekst in om live te renderen met het vector-font:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Typ hier (bijv. RADDER 2026)..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-950 font-mono text-sm uppercase tracking-wider focus:outline-none focus:border-neutral-950 transition-colors"
                  />
                  {customText && (
                    <button
                      onClick={() => setCustomText('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Sample Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-neutral-500 uppercase">Presets:</span>
                {[
                  'RADDER 2026',
                  'VAN PROMPT NAAR PRODUCTIE',
                  'ZERO-LAG ARCHITECTUUR',
                  'BOUW AAN DE MOTOR',
                  '0123456789',
                  'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
                ].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setCustomText(sample)}
                    className="px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[10px] font-mono transition-colors cursor-pointer"
                  >
                    {sample.length > 20 ? sample.slice(0, 18) + '...' : sample}
                  </button>
                ))}
              </div>

              {/* Live Vector Stage */}
              <div
                className="min-h-[160px] p-8 rounded-2xl bg-[#faf9f6] border border-neutral-300/80 flex items-center justify-start overflow-x-auto relative"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(0, 0, 0, 0.07) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              >
                <div className="absolute top-2.5 right-3 text-[10px] font-mono text-neutral-400 uppercase">
                  RaddeR Vector Stage // {fontSize}px // {fontMode.toUpperCase()}
                </div>

                {customText.trim() ? (
                  <RadderText
                    text={customText}
                    size={fontSize}
                    color={activeColor}
                    strokeWidth={fontStroke}
                    letterSpacing={fontSpacing}
                    mode={fontMode}
                  />
                ) : (
                  <span className="text-neutral-400 font-mono text-sm italic">
                    Typ hierboven om het vector-font te testen...
                  </span>
                )}
              </div>

              {/* Type Controls Toolbar */}
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-700">
                {/* Mode: Solid vs Wireframe */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 uppercase font-semibold">Stijl:</span>
                  <button
                    onClick={() => setFontMode('stroke')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      fontMode === 'stroke'
                        ? 'bg-neutral-950 text-white font-bold'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    Massief (Tubulair)
                  </button>
                  <button
                    onClick={() => setFontMode('wireframe')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      fontMode === 'wireframe'
                        ? 'bg-neutral-950 text-white font-bold'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    Wireframe Outline
                  </button>
                </div>

                {/* Font Size Presets */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 uppercase font-semibold">Grootte:</span>
                  {[28, 36, 44, 56, 72].map((s) => (
                    <button
                      key={s}
                      onClick={() => setFontSize(s)}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        fontSize === s
                          ? 'bg-neutral-950 text-white font-bold'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {s}px
                    </button>
                  ))}
                </div>

                {/* Color Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 uppercase font-semibold">Kleur:</span>
                  <div className="flex items-center gap-1.5">
                    {[
                      { label: 'RaddeR Vermiljoen', color: '#ff451a' },
                      { label: 'Diep Zwart', color: '#0a0a0a' },
                      { label: 'Leisteen Grijs', color: '#4b5563' },
                      { label: 'Smaragd Groen', color: '#059669' },
                      { label: 'Oceaan Blauw', color: '#2563eb' },
                    ].map((item) => (
                      <button
                        key={item.color}
                        onClick={() => setActiveColor(item.color)}
                        title={item.label}
                        className={`w-6 h-6 rounded-md transition-all cursor-pointer border ${
                          activeColor === item.color
                            ? 'scale-110 ring-2 ring-neutral-950 ring-offset-2'
                            : 'hover:scale-105 border-neutral-300'
                        }`}
                        style={{ backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stroke Width Slider if stroke mode */}
                {fontMode === 'stroke' && (
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 uppercase font-semibold">Dikte:</span>
                    {[6, 8, 10, 12].map((sw) => (
                      <button
                        key={sw}
                        onClick={() => setFontStroke(sw)}
                        className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                          fontStroke === sw
                            ? 'bg-neutral-950 text-white font-bold'
                            : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                        }`}
                      >
                        {sw}
                      </button>
                    ))}
                  </div>
                )}

                {/* Letter Spacing */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 uppercase font-semibold">Spatiëring:</span>
                  {[2, 4, 8, 14].map((sp) => (
                    <button
                      key={sp}
                      onClick={() => setFontSpacing(sp)}
                      className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                        fontSpacing === sp
                          ? 'bg-neutral-950 text-white font-bold'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {sp}px
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Glyph Category Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {[
                  { id: 'all', label: 'Alle Glyphs', count: RADDER_GLYPHS.length },
                  {
                    id: 'letter',
                    label: 'Letters (A-Z)',
                    count: RADDER_GLYPHS.filter((g) => g.category === 'letter').length,
                  },
                  {
                    id: 'number',
                    label: 'Cijfers (0-9)',
                    count: RADDER_GLYPHS.filter((g) => g.category === 'number').length,
                  },
                  {
                    id: 'symbol',
                    label: 'Symbolen & Tekens',
                    count: RADDER_GLYPHS.filter((g) => g.category === 'symbol').length,
                  },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setGlyphCategory(cat.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      glyphCategory === cat.id
                        ? 'bg-neutral-950 text-white font-bold shadow-sm'
                        : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="ml-1.5 opacity-60">({cat.count})</span>
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-neutral-500">
                <span className="font-bold text-neutral-950">{filteredGlyphs.length}</span> glyphs
                beschikbaar
              </div>
            </div>

            {/* Glyph Specimen Matrix Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredGlyphs.map((glyph) => {
                const isCopiedJsx = copiedId === `glyph-jsx-${glyph.char}`;
                const isCopiedSvg = copiedId === `glyph-svg-${glyph.char}`;

                return (
                  <div
                    key={glyph.char}
                    className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all p-4 flex flex-col justify-between group relative"
                  >
                    <CornerReticles color="rgba(0,0,0,0.12)" />

                    <div>
                      {/* Glyph Header */}
                      <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-neutral-500">
                        <span className="uppercase font-semibold tracking-wider">
                          {glyph.category}
                        </span>
                        <span className="text-neutral-400 font-mono">
                          U+{glyph.char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}
                        </span>
                      </div>

                      {/* Visual Glyph Stage */}
                      <div
                        onClick={() => setInspectGlyph(glyph)}
                        className="h-28 rounded-xl bg-[#faf9f6] border border-neutral-200/80 flex items-center justify-center cursor-pointer group-hover:bg-neutral-50 transition-colors relative overflow-hidden"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
                          backgroundSize: '10px 10px',
                        }}
                      >
                        <div className="transform transition-transform duration-300 group-hover:scale-115">
                          <RadderGlyph
                            char={glyph.char}
                            size={56}
                            color={activeColor}
                            strokeWidth={fontStroke}
                            mode={fontMode}
                          />
                        </div>
                      </div>

                      {/* Information */}
                      <div className="mt-3">
                        <h4 className="text-xs font-bold text-neutral-950 font-mono tracking-tight flex items-center justify-between">
                          <span>{glyph.name}</span>
                          <span className="text-neutral-400 font-mono">[{glyph.char}]</span>
                        </h4>
                        <p className="mt-1 text-[11px] text-neutral-500 line-clamp-2 leading-snug">
                          {glyph.description}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between gap-1.5">
                      <button
                        onClick={() =>
                          copyToClipboard(getGlyphJsxSnippet(glyph), `glyph-jsx-${glyph.char}`, 'jsx')
                        }
                        title="Kopieer JSX component"
                        className={`flex-1 py-1 px-2 rounded-md text-[11px] font-mono font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                          isCopiedJsx
                            ? 'bg-emerald-600 text-white'
                            : 'bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-800'
                        }`}
                      >
                        {isCopiedJsx ? (
                          <>
                            <RadderIconCheck size={11} strokeWidth={2.5} color="#ffffff" />
                            <span>JSX!</span>
                          </>
                        ) : (
                          <>
                            <Code2 className="w-3 h-3" />
                            <span>JSX</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() =>
                          copyToClipboard(getGlyphSvgSnippet(glyph), `glyph-svg-${glyph.char}`, 'svg')
                        }
                        title="Kopieer SVG snippet"
                        className={`p-1 px-1.5 rounded-md text-[11px] font-mono transition-all flex items-center justify-center cursor-pointer ${
                          isCopiedSvg
                            ? 'bg-emerald-600 text-white'
                            : 'bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-700'
                        }`}
                      >
                        {isCopiedSvg ? (
                          <RadderIconCheck size={13} strokeWidth={2.5} color="#ffffff" />
                        ) : (
                          <RadderIconCopy size={13} strokeWidth={2} />
                        )}
                      </button>

                      <button
                        onClick={() => downloadGlyphSvg(glyph)}
                        title="Download SVG bestand"
                        className="p-1 px-1.5 rounded-md bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-700 text-[11px] font-mono transition-all flex items-center justify-center cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Inspector for Glyphs */}
            {inspectGlyph && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
                onClick={() => setInspectGlyph(null)}
              >
                <div
                  className="bg-white rounded-2xl border border-neutral-300 shadow-2xl max-w-xl w-full p-6 sm:p-8 text-left relative overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CornerReticles color="rgba(0,0,0,0.2)" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                        GLYPH SPECIMEN // {inspectGlyph.category.toUpperCase()}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-950 font-mono mt-1">
                        {inspectGlyph.name}
                      </h3>
                      <div className="text-xs font-mono text-[#ff451a] font-semibold">
                        Karakter: '{inspectGlyph.char}' (U+
                        {inspectGlyph.char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')})
                      </div>
                    </div>

                    <button
                      onClick={() => setInspectGlyph(null)}
                      className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-600 cursor-pointer transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Dual Stages: Light & Dark */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    {/* Light Stage */}
                    <div
                      className="h-44 rounded-xl bg-[#faf9f6] border border-neutral-300 flex flex-col items-center justify-center relative"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    >
                      <span className="absolute top-2 left-3 text-[10px] font-mono text-neutral-400 uppercase">
                        Light Blueprint
                      </span>
                      <RadderGlyph
                        char={inspectGlyph.char}
                        size={84}
                        color={activeColor}
                        strokeWidth={fontStroke}
                        mode={fontMode}
                      />
                    </div>

                    {/* Dark Stage */}
                    <div
                      className="h-44 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center relative"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    >
                      <span className="absolute top-2 left-3 text-[10px] font-mono text-neutral-500 uppercase">
                        Dark Blueprint
                      </span>
                      <RadderGlyph
                        char={inspectGlyph.char}
                        size={84}
                        color={activeColor === '#0a0a0a' ? '#ffffff' : activeColor}
                        strokeWidth={fontStroke}
                        mode={fontMode}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-700 leading-relaxed font-normal mb-6">
                    {inspectGlyph.description}
                  </p>

                  {/* Path Data */}
                  <div className="bg-neutral-950 rounded-xl p-4 text-xs font-mono text-neutral-200 overflow-x-auto space-y-2 mb-6">
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider">
                      SVG Path Data (100x100 Grid):
                    </div>
                    <div className="text-emerald-400 select-all break-all">{inspectGlyph.path}</div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => downloadGlyphSvg(inspectGlyph)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download .SVG</span>
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(
                          getGlyphJsxSnippet(inspectGlyph),
                          `inspect-${inspectGlyph.char}`,
                          'jsx'
                        )
                      }
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-neutral-950 hover:bg-[#ff451a] text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <RadderIconCopy size={14} color="#ffffff" strokeWidth={2} />
                      <span>Kopieer JSX</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: VECTOR ICONEN BIBLIOTHEEK */}
        {/* ========================================================= */}
        {activeTab === 'icons' && (
          <div className="space-y-10 animate-fade-in">
            {/* Workbench Control Center */}
            <div className="bg-white rounded-2xl border border-neutral-300/90 shadow-sm p-6 mb-10 space-y-6">
              {/* Top Row: Search & Category Filter */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                {/* Search Box */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Zoek op naam, component of tag (bijv. motor, api, code)..."
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm font-mono text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {iconCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-neutral-950 text-white font-bold shadow-sm'
                          : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200 border border-neutral-200/80'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Dynamic Visual Controls (Color, Size, Stroke Width) */}
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-700">
                {/* Color Switcher */}
                <div className="flex items-center gap-2.5">
                  <span className="text-neutral-500 uppercase font-semibold">Kleur:</span>
                  <div className="flex items-center gap-1.5">
                    {[
                      { label: 'RaddeR Vermiljoen', color: '#ff451a' },
                      { label: 'Diep Zwart', color: '#0a0a0a' },
                      { label: 'Leisteen Grijs', color: '#4b5563' },
                      { label: 'Smaragd Groen', color: '#059669' },
                      { label: 'Oceaan Blauw', color: '#2563eb' },
                    ].map((item) => (
                      <button
                        key={item.color}
                        onClick={() => setActiveColor(item.color)}
                        title={item.label}
                        className={`w-6 h-6 rounded-md transition-all cursor-pointer border ${
                          activeColor === item.color
                            ? 'scale-110 ring-2 ring-neutral-950 ring-offset-2'
                            : 'hover:scale-105 border-neutral-300'
                        }`}
                        style={{ backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Presets */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 uppercase font-semibold">Grootte:</span>
                  {[20, 24, 28, 36, 48].map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        activeSize === size
                          ? 'bg-neutral-950 text-white font-bold'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {size}px
                    </button>
                  ))}
                </div>

                {/* Stroke Width */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 uppercase font-semibold">Lijndikte:</span>
                  {[1.5, 2, 2.5].map((stroke) => (
                    <button
                      key={stroke}
                      onClick={() => setActiveStroke(stroke)}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        activeStroke === stroke
                          ? 'bg-neutral-950 text-white font-bold'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {stroke}px
                    </button>
                  ))}
                </div>

                {/* Counter */}
                <div className="text-neutral-500">
                  <span className="font-bold text-neutral-950">{filteredIcons.length}</span> van de{' '}
                  {RADDER_ICONS_COLLECTION.length} iconen getoond
                </div>
              </div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredIcons.map((icon) => {
                const IconComp = icon.Component;
                const isCopiedJsx = copiedId === icon.id && copyType === 'jsx';
                const isCopiedSvg = copiedId === icon.id && copyType === 'svg';

                return (
                  <div
                    key={icon.id}
                    className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all duration-300 p-5 flex flex-col justify-between group relative"
                  >
                    <div>
                      {/* Category Pill */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                          {icon.category}
                        </span>
                        <button
                          onClick={() => setInspectIcon(icon)}
                          title="Inspecteer icoon"
                          className="text-neutral-400 hover:text-neutral-950 transition-colors cursor-pointer text-xs font-mono"
                        >
                          Inspecteer
                        </button>
                      </div>

                      {/* Icon Visual Stage with subtle drafting grid */}
                      <div
                        onClick={() => setInspectIcon(icon)}
                        className="h-28 rounded-xl bg-[#faf9f6] border border-neutral-200/80 flex items-center justify-center cursor-pointer group-hover:bg-neutral-50 transition-colors relative overflow-hidden"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
                          backgroundSize: '12px 12px',
                        }}
                      >
                        <div className="transform transition-transform duration-300 group-hover:scale-110">
                          <IconComp
                            size={activeSize}
                            color={activeColor}
                            strokeWidth={activeStroke}
                          />
                        </div>
                      </div>

                      {/* Icon Information */}
                      <div className="mt-4">
                        <h3 className="text-base font-bold text-neutral-950 font-mono tracking-tight flex items-center justify-between">
                          <span>{icon.name}</span>
                        </h3>
                        <div className="text-[11px] font-mono text-neutral-500 mt-0.5 truncate">
                          {icon.componentName}
                        </div>
                        <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                          {icon.description}
                        </p>
                      </div>
                    </div>

                    {/* Quick Action Toolbar */}
                    <div className="mt-5 pt-3 border-t border-neutral-200/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => copyToClipboard(getJsxSnippet(icon), icon.id, 'jsx')}
                        className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isCopiedJsx
                            ? 'bg-emerald-600 text-white'
                            : 'bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-800'
                        }`}
                      >
                        {isCopiedJsx ? (
                          <>
                            <RadderIconCheck size={13} strokeWidth={2.5} color="#ffffff" />
                            <span>JSX Gekopieerd</span>
                          </>
                        ) : (
                          <>
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Kopieer JSX</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => copyToClipboard(getSvgSnippet(icon), icon.id, 'svg')}
                        title="Kopieer SVG snippet"
                        className={`p-1.5 rounded-lg text-xs font-mono transition-all flex items-center justify-center cursor-pointer ${
                          isCopiedSvg
                            ? 'bg-emerald-600 text-white'
                            : 'bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-700'
                        }`}
                      >
                        {isCopiedSvg ? (
                          <RadderIconCheck size={15} strokeWidth={2.5} color="#ffffff" />
                        ) : (
                          <RadderIconCopy size={15} strokeWidth={2} />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Inspector when clicking on an icon */}
            {inspectIcon && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
                onClick={() => setInspectIcon(null)}
              >
                <div
                  className="bg-white rounded-2xl border border-neutral-300 shadow-2xl max-w-2xl w-full p-6 sm:p-8 text-left relative overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                        {inspectIcon.category}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-950 font-mono mt-1">
                        {inspectIcon.name}
                      </h3>
                      <div className="text-xs font-mono text-[#ff451a] font-semibold">
                        &lt;{inspectIcon.componentName} /&gt;
                      </div>
                    </div>

                    <button
                      onClick={() => setInspectIcon(null)}
                      className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-600 cursor-pointer transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Dual Visual Stages: Light vs Dark */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    {/* Light Stage */}
                    <div
                      className="h-44 rounded-xl bg-[#faf9f6] border border-neutral-300 flex flex-col items-center justify-center relative"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    >
                      <span className="absolute top-2 left-3 text-[10px] font-mono text-neutral-400 uppercase">
                        Light Stage
                      </span>
                      <inspectIcon.Component
                        size={64}
                        color={activeColor}
                        strokeWidth={activeStroke}
                      />
                    </div>

                    {/* Dark Stage */}
                    <div
                      className="h-44 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center relative"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    >
                      <span className="absolute top-2 left-3 text-[10px] font-mono text-neutral-500 uppercase">
                        Dark Stage
                      </span>
                      <inspectIcon.Component
                        size={64}
                        color={activeColor === '#0a0a0a' ? '#ffffff' : activeColor}
                        strokeWidth={activeStroke}
                      />
                    </div>
                  </div>

                  {/* Description & Tags */}
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                      {inspectIcon.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {inspectIcon.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-mono text-[10px]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Snippets */}
                  <div className="bg-neutral-950 rounded-xl p-4 text-xs font-mono text-neutral-200 overflow-x-auto space-y-2 mb-6">
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider">
                      React JSX Snippet:
                    </div>
                    <div className="text-emerald-400 select-all">{getJsxSnippet(inspectIcon)}</div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => downloadSvgFile(inspectIcon)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download .SVG</span>
                    </button>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() =>
                          copyToClipboard(getJsxSnippet(inspectIcon), inspectIcon.id, 'jsx')
                        }
                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-neutral-950 hover:bg-[#ff451a] text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <RadderIconCopy size={14} color="#ffffff" strokeWidth={2} />
                        <span>Kopieer Component</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <section className="mt-16 py-14 px-8 rounded-2xl bg-neutral-950 text-white border border-neutral-900 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 text-white text-xs font-mono">
                <RadderIconSparren size={13} strokeWidth={2} color="#ff451a" />
                <span>MAATWERK TYPOGRAFIE & ICONOGRAFIE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Specifieke glyphs, iconen of branding nodig voor jouw platform?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Wij ontwerpen vector-identiteiten, display typefaces en functionele interfaces die
                naadloos aansluiten op jouw merk en technische motor.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-[#ff451a] hover:bg-[#e03a12] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Plan een sparsessie</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToCases}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/20"
              >
                Bekijk Cases
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
