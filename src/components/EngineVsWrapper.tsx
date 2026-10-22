import React, { useState } from 'react';
import { ENGINE_COMPARISONS } from '../data/projects';
import { XCircle, CheckCircle2, Eye, ShieldCheck, Zap } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

export const EngineVsWrapper: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeComparison = ENGINE_COMPARISONS[selectedIdx];

  return (
    <section id="vergelijker" className="py-24 bg-[#08090d] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/15 text-zinc-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>HET ONDERSCHEIDEND VERMOGEN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Waar stopt een standaard bureau? <br />
            <span className="text-zinc-300">En waar begint de motor?</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            De meeste bureaus verkopen een brochure in een nieuwe jas. Maar wanneer de klantervaring afhankelijk is van diagnostische protocollen, openbare kadastrale geodata of enterprise kernel-telemetrie, vallen oppervlakkige templates door de mand.
          </p>
        </div>

        {/* Domain Tab Selectors */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ENGINE_COMPARISONS.map((comp, idx) => (
            <button
              key={comp.category}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-white text-black font-bold shadow-lg shadow-white/10 border border-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {comp.category}
            </button>
          ))}
        </div>

        {/* Comparison Grid: Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Standaard Marketing Bureau */}
          <div className="rounded-2xl bg-[#0f1118] border border-red-500/25 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-950/60 border-b border-l border-red-500/25 text-red-300 font-mono text-[11px] rounded-bl-lg">
              STANDAARD AANPAK // HET SAUSJE
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Standaard Marketingbureau</h3>
                  <p className="text-xs font-mono text-zinc-500">Stopt bij de visuele buitenkant & templates</p>
                </div>
              </div>

              <div className="space-y-4">
                {activeComparison.standardBureau.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-900/60 border border-white/5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-zinc-500">
              RESULTAAT: Oppervlakkige brochure, hoge doorlopende licentiekosten, geen echte automatisering.
            </div>
          </div>

          {/* Right Column: RaddeR (De Motor) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#181b26] to-[#0d0f15] border-2 border-white/35 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-black/80">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-white/10 border-b border-l border-white/20 text-white font-mono text-[11px] rounded-bl-lg font-bold">
              RaddeR ARCHITECTUUR // DE MOTOR
            </div>

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-md">
                  <RadderLogo size={36} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    RaddeR
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-white border border-white/25">
                      Product Level
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-zinc-300">Domeinspecifieke logica + Schaalbare software</p>
                </div>
              </div>

              <div className="space-y-4">
                {activeComparison.mrEngine.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/15">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-100 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 text-xs font-mono text-zinc-300 flex items-center justify-between">
              <span>RESULTAAT: Volledig eigenaarschap, volwaardig product, 100% schaalbaar.</span>
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Quote banner from the brief */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900/60 border border-white/10 text-center relative overflow-hidden">
          <div className="text-base sm:text-lg italic text-zinc-200 font-medium max-w-4xl mx-auto">
            "Wij combineren de creatieve executiesnelheid van een modern designbureau met de architectuurkennis van een softwareontwikkelaar en de commerciële blik van een business strateeg."
          </div>
          <div className="mt-3 text-xs font-mono text-zinc-400">
            — HET INTERDISCIPLINAIRE SCHAKELEN WAARDOOR ONZE OPLOSSINGEN DIEPER GAAN
          </div>
        </div>
      </div>
    </section>
  );
};
