import React from 'react';
import { ArrowRight, Cpu, Layers, Terminal, Compass, Sparkles } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCases }) => {
  return (
    <section className="relative pt-40 sm:pt-48 lg:pt-56 pb-20 md:pb-24 overflow-hidden">
      {/* Subtle Warm Paper Glow & Monograph Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-black/[0.03] to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Architectural Emblem Watermark (Deep Black Ink with subtle paper trace) */}
      <div className="absolute right-4 sm:right-12 lg:right-24 top-36 sm:top-44 lg:top-52 w-[320px] sm:w-[420px] lg:w-[500px] opacity-[0.04] pointer-events-none select-none text-neutral-950 -z-10 transition-opacity">
        <RadderLogo size={500} glow={false} color="#0a0a0a" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Main Content */}
        <div className="max-w-4xl text-left space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            <span>Niet het oppervlakkige sausje. <strong className="text-neutral-950 font-bold">De motor.</strong></span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 leading-[1.05]">
            Waar een standaard bureau stopt bij de buitenkant,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600">
              bouwen wij de motor.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed">
            Wij vertalen complexe domeinlogica direct naar werkende, schaalbare software. Geen oppervlakkig sausje, maar robuuste productontwikkeling.
          </p>

          {/* Quick Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreCases}
              className="px-6 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold font-mono text-sm tracking-wide transition-all shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span>Bekijk Cases</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('motor-vs-sausje');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-mono text-sm tracking-wide transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Layers className="w-4 h-4 text-neutral-900" />
              <span>Motor vs. Sausje</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-4 py-3.5 rounded-xl text-neutral-600 hover:text-black font-mono text-sm transition-colors cursor-pointer"
            >
              Direct Sparren →
            </button>
          </div>
        </div>

        {/* 3 Core Competence Cards - Gallery Style */}
        <div className="mt-16 pt-10 border-t border-neutral-300 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-2">
              <Cpu className="w-4 h-4" />
              <span>01. DE ARCHITECT</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Local-first applicaties, robuuste data-architectuur en veilige webtechnologie.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-2">
              <Terminal className="w-4 h-4" />
              <span>02. DE STRATEEG</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Zorgdiagnostiek, kadastrale geodata en schaalbare B2B ketenmodellen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-2">
              <Compass className="w-4 h-4" />
              <span>03. DE MAKER</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Van webapplicaties en design tokens tot fysieke storefronts en vloten.
            </p>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="mt-6 p-4 rounded-xl bg-white/70 border border-neutral-200/90 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neutral-950"></span>
            <span className="text-neutral-950 font-semibold">RaddeR STUDIO ENGINE</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-neutral-500">
            <span>• 100% AVG LOCAL-FIRST</span>
            <span>• LIVE PDOK / KADASTER</span>
            <span>• VEILIGE DATA-ARCHITECTUUR</span>
            <span>• PHYSICAL STOREFRONTS & FLEETS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
