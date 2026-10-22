import React, { useState } from 'react';
import { ENGINE_COMPARISONS } from '../data/projects';
import { XCircle, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderIconZap } from './RadderNavIcons';

export const EngineVsWrapper: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeComparison = ENGINE_COMPARISONS[selectedIdx];

  return (
    <section id="motor-vs-sausje" className="py-24 bg-[#f8f7f4] border-t border-neutral-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono mb-4 shadow-sm">
            <RadderIconZap size={14} strokeWidth={2} color="#ff451a" />
            <span>VERGELIJKING // HET FUNDAMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
            De Motor versus Het Sausje: <br />
            <span className="text-neutral-500">Waarom traditionele bureaus vastlopen.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Klassieke bureaus verkopen uren, meetings en een mooie visuele schil over logge standaardsoftware. RaddeR bouwt direct aan de kern: vlijmscherpe domeinlogica, schaalbare architectuur en 100% eigenaarschap.
          </p>
        </div>

        {/* Domain Tab Selectors */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ENGINE_COMPARISONS.map((comp, idx) => (
            <button
              key={comp.category}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-neutral-950 text-white font-bold shadow-md border border-neutral-950'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200/90 shadow-sm hover:border-neutral-400'
              }`}
            >
              {comp.category}
            </button>
          ))}
        </div>

        {/* Comparison Grid: Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Standaard Marketing Bureau */}
          <div className="rounded-2xl bg-white border border-neutral-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-neutral-100 border-b border-l border-neutral-300 text-neutral-600 font-mono text-[11px] rounded-bl-lg font-semibold">
              STANDAARD AANPAK // HET SAUSJE
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-950">Standaard Marketingbureau</h3>
                  <p className="text-xs font-mono text-neutral-500">Stopt bij de visuele buitenkant & templates</p>
                </div>
              </div>

              <div className="space-y-3">
                {activeComparison.standardBureau.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                    <XCircle className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
              RESULTAAT: Trage platformen, vendor lock-in en stijgende kosten zonder echte vooruitgang.
            </div>
          </div>

          {/* Right Column: RaddeR (De Motor) */}
          <div className="rounded-2xl bg-neutral-950 text-white border-2 border-neutral-900 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-white/10 border-b border-l border-white/20 text-white font-mono text-[11px] rounded-bl-lg font-bold">
              RaddeR ARCHITECTUUR // DE MOTOR
            </div>

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-md text-white">
                  <RadderLogo size={36} color="#ffffff" glow={false} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    RaddeR
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-white border border-white/25">
                      Product Level
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-neutral-300">Vlijmscherpe architectuur & directe executie</p>
                </div>
              </div>

              <div className="space-y-3">
                {activeComparison.mrEngine.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/15">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-100 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 text-xs font-mono text-neutral-300 flex items-center justify-between">
              <span>RESULTAAT: Binnen weken live, sub-second performance en 100% eigenaarschap van je code.</span>
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Quote banner from the brief */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-center relative overflow-hidden">
          <div className="text-base sm:text-lg italic text-neutral-900 font-medium max-w-4xl mx-auto">
            "Echte vooruitgang ontstaat niet in eindeloze stuurgroepen of gelikte marketingdecks, maar door direct te bouwen aan de motor. Werkende software is het enige eerlijke bewijs van succes."
          </div>
          <div className="mt-3 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            — RADDER FILOSOFIE // DE MOTOR ACHTER DE CODE
          </div>
        </div>
      </div>
    </section>
  );
};
