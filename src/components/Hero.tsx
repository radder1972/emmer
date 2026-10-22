import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import {
  RadderIconManifest,
  RadderIconStrateeg,
  RadderIconArchitect,
  RadderIconMaker,
} from './RadderNavIcons';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCases }) => {
  return (
    <section className="relative pt-40 sm:pt-48 lg:pt-56 pb-20 md:pb-24 overflow-hidden">
      {/* Subtle Warm Paper Glow & Monograph Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-black/[0.03] to-transparent blur-[140px] -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Page Header Zone */}
        <div className="relative mb-12">
          {/* Page Signature Icon Watermark: tilted half schuin behind heading & subhead */}
          <div
            className="absolute -top-12 sm:-top-16 left-8 sm:left-24 lg:left-36 pointer-events-none select-none text-[#ff451a] opacity-[0.06] sm:opacity-[0.08] -rotate-12 transform z-0"
            aria-hidden="true"
          >
            <RadderIconManifest size={440} strokeWidth={1.5} color="#ff451a" />
          </div>

          {/* Hero Main Content: all left, exact same size */}
          <div className="relative z-10 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm mb-4">
              <RadderIconManifest size={14} strokeWidth={2} color="#ff451a" />
              <span>HET MANIFEST // PLACEHOLDER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Lorem ipsum dolor sit amet, <br />
              <span className="text-neutral-600">
                consectetur adipiscing elit.
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left flex flex-col justify-start">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-3 h-5">
              <RadderIconStrateeg size={16} strokeWidth={2} color="#ff451a" />
              <span>01. DE STRATEEG</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left flex flex-col justify-start">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-3 h-5">
              <RadderIconArchitect size={16} strokeWidth={2} color="#ff451a" />
              <span>02. DE ARCHITECT</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all text-left flex flex-col justify-start">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-950 mb-3 h-5">
              <RadderIconMaker size={16} strokeWidth={2} color="#ff451a" />
              <span>03. DE MAKER</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="mt-6 p-4 rounded-xl bg-white/70 border border-neutral-200/90 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff451a] animate-pulse"></span>
            <span className="text-neutral-950 font-semibold">RaddeR STUDIO</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-neutral-500">
            <span>• LOREM IPSUM DOLOR</span>
            <span>• CONSECTETUR ADIPISCING</span>
            <span>• SED DO EIUSMOD</span>
            <span>• TEMPOR INCIDIDUNT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
