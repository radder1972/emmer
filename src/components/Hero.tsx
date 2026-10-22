import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import {
  RadderIconManifest,
  RadderIconStrateeg,
  RadderIconArchitect,
  RadderIconMaker,
} from './RadderNavIcons';
import {
  CornerReticles,
  CalibrationScale,
  WordmarkEmboss,
} from './RadderStudioDetails';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCases }) => {
  return (
    <section className="relative pt-40 sm:pt-48 lg:pt-56 pb-20 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Subtle Warm Paper Glow & Monograph Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-black/[0.03] to-transparent blur-[140px] -z-20 pointer-events-none" />

      {/* Oversized RaddeR Wordmark Embossing in background */}
      <div className="absolute -right-20 top-20 pointer-events-none select-none z-0 hidden lg:block opacity-[0.035] text-neutral-950">
        <WordmarkEmboss width={820} opacity={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Page Header Zone */}
        <div className="relative mb-12">
          {/* Hero Main Content: all left, exact same size */}
          <div className="relative z-10 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm mb-4">
              <RadderIconManifest size={14} strokeWidth={2} color="#ff451a" />
              <span>HET MANIFEST // ONZE REIS IN CODE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Van de eerste AI-stappen <br />
              <span className="text-neutral-400">
                tot de snelle development van whatever.
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Wat begon met nieuwsgierige prompts en vroege experimenten, is geëvolueerd tot een ongekende symbiose tussen menselijke architectuur en agentic IDE-kracht. We bouwen niet met trage overdrachtslagen, maar vangen strategie, datamodellen en code in één directe creatiestroom.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
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
                <span>Vergelijking</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-3.5 rounded-xl text-neutral-600 hover:text-black font-mono text-sm transition-colors cursor-pointer"
              >
                Direct Sparren →
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Competence Cards - Gallery Style: Strateeg -> Architect -> Maker */}
        <div className="mt-16 pt-10 border-t border-neutral-300 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          <div className="relative group p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left flex flex-col justify-start">
            <CornerReticles />
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-3 h-5">
              <RadderIconStrateeg size={16} strokeWidth={2} color="#ff451a" />
              <span>01. DE STRATEEG</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Vlijmscherpe domeinanalyse en focus. We bepalen direct wat de kernwaarde van het product is en elimineren bureaucratische ruis.
            </p>
          </div>

          <div className="relative group p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left flex flex-col justify-start">
            <CornerReticles />
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-3 h-5">
              <RadderIconArchitect size={16} strokeWidth={2} color="#ff451a" />
              <span>02. DE ARCHITECT</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Robuuste datamodellen en schaalbare enterprise infrastructuren, ontworpen voor zero-lag en 100% eigenaarschap.
            </p>
          </div>

          <div className="relative group p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left flex flex-col justify-start">
            <CornerReticles />
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-3 h-5">
              <RadderIconMaker size={16} strokeWidth={2} color="#ff451a" />
              <span>03. DE MAKER</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Agentic executiekracht. Samen met autonome AI realiseren we in uren wat voorheen hele ontwikkelteams maanden kostte.
            </p>
          </div>
        </div>

        {/* Telemetry Strip with tactile calibration */}
        <div className="mt-6 p-4 rounded-xl bg-white/70 border border-neutral-200/90 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff451a] animate-pulse"></span>
            <span className="text-neutral-950 font-semibold">RaddeR STUDIO</span>
            <span className="text-neutral-300">|</span>
            <CalibrationScale label="CORE SYNC" ticks={8} />
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-neutral-500 font-mono">
            <span>• VAN PROMPT NAAR PRODUCTIE</span>
            <span>• DIRECTE FEEDBACKLOOP</span>
            <span>• 100% CODE-EIGENAARSCHAP</span>
            <span>• DIRECT AAN DE MOTOR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
