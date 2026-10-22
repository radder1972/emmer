import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderIconAbout } from './RadderNavIcons';

interface FounderSectionProps {
  onNavigateToSparren?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onNavigateToSparren }) => {
  return (
    <section className="pt-40 sm:pt-48 lg:pt-56 pb-20 bg-[#f8f7f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Page Header Zone */}
        <div className="relative mb-12">
          {/* Page Signature Icon Watermark: tilted half schuin behind heading & subhead */}
          <div
            className="absolute -top-12 sm:-top-16 left-8 sm:left-24 lg:left-36 pointer-events-none select-none text-[#ff451a] opacity-[0.06] sm:opacity-[0.08] -rotate-12 transform z-0"
            aria-hidden="true"
          >
            <RadderIconAbout size={440} strokeWidth={1.5} color="#ff451a" />
          </div>

          {/* Over Ons Main Content: all left, exact same size */}
          <div className="relative z-10 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm mb-4">
              <RadderIconAbout size={14} strokeWidth={2} color="#ff451a" />
              <span>OVER RaddeR // DE MAKER ACHTER DE MOTOR</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Complexe problemen los je op <br />
              <span className="text-neutral-400">door te bouwen aan de motor.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Ik ben Matthias Radder, de maker achter RaddeR. Geen overdrachtsmomenten of managementlagen, maar strategie, architectuur en code in één directe feedbackloop.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait photo in Swiss Editorial styling (Sticky on Desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start lg:sticky lg:top-36">
            <div className="relative group max-w-sm w-full cursor-pointer select-none">
              {/* Subtle architectural frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-white">
                {/* Image Stage Container with Cross-Fade */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                  {/* Default / Focused portrait */}
                  <img
                    src="/matthias-radder.png"
                    alt="Matthias Radder — Oprichter van RaddeR"
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                  />
                  {/* Smiling / Laughing portrait on mouseover */}
                  <img
                    src="/matthias-radder-smile.png"
                    alt="Matthias Radder — Lachend"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105 pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Subtle live indicator badge on top right */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff451a] animate-pulse"></span>
                    <span className="group-hover:hidden">FOCUS</span>
                    <span className="hidden group-hover:inline text-[#ff451a] font-bold">SPARREN</span>
                  </div>
                </div>

                {/* Monograph caption bar */}
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-neutral-200 flex items-center justify-between text-left">
                  <div>
                    <div className="text-sm font-bold text-neutral-950 font-mono tracking-tight">
                      Matthias Radder
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      Oprichter, Systeemarchitect & Maker
                    </div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-[#ff451a] group-hover:scale-110 transition-transform">
                    <RadderLogo size={22} color="#ff451a" glow={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Narrative & Philosophy */}
          <div className="lg:col-span-7 text-left space-y-7">
            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
              Mijn werk draait om één fundamentele overtuiging: complexe problemen los je niet op met overdrachtsmomenten en managementlagen, maar door te bouwen aan de motor. Ik elimineer de ruis tussen analist, designer en bouwer door strategie, architectuur en code in één directe feedbackloop te vangen. Je spreekt met degene die het systeem daadwerkelijk ontwerpt en bouwt.
            </p>

            {/* Two Core Competence Pillars */}
            <div className="space-y-6 pt-2 border-t border-neutral-300/80">
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff451a] shrink-0" />
                  <span>Van enterprise fundament tot naadloze executie</span>
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Mijn expertise ligt op het snijvlak van robuuste infrastructuur en moderne applicatieontwikkeling. Ik combineer diepgaande ervaring in enterprise IT, cloud-architectuur en open-source technologie met vlijmscherpe front-end executie. Of het nu gaat om het vertalen van complexe zorgprotocollen, het ontsluiten van open kadastrale geodata, of het inrichten van zware B2B-configuratoren: ik bouw niet wat er simpelweg gevraagd wordt, maar ontwerp het systeem dat de bedrijfslogica daadwerkelijk nodig heeft.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff451a] shrink-0" />
                  <span>Vooruitstrevende bouwkracht</span>
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  De manier waarop we software ontwikkelen is fundamenteel veranderd. Ik integreer geavanceerde AI-geassisteerde ontwikkelmethoden en agentic IDE-omgevingen in mijn dagelijkse workflow. Dit stelt me in staat om met ongekende snelheid en precisie complete platforms te realiseren—van lokale infrastructuur en datamodellen tot strak vormgegeven webapplicaties en custom interfaces. Het resultaat is snellere oplevering, 100% eigenaarschap van de code, en architectuur die staat als een huis.
                </p>
              </div>
            </div>

            {/* Three Direct Guarantees Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-950">
                  <CheckCircle2 className="w-4 h-4 text-[#ff451a] shrink-0" />
                  <span>100% Eigenaarschap</span>
                </div>
                <div className="text-[11px] font-mono text-neutral-500 mt-1.5 leading-snug">
                  Volledig eigenaarschap van alle code en intellectuele eigendom.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-950">
                  <CheckCircle2 className="w-4 h-4 text-[#ff451a] shrink-0" />
                  <span>Directe Feedbackloop</span>
                </div>
                <div className="text-[11px] font-mono text-neutral-500 mt-1.5 leading-snug">
                  Geen ruis: strategie, architectuur en code in één hand.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-950">
                  <CheckCircle2 className="w-4 h-4 text-[#ff451a] shrink-0" />
                  <span>Agentic IDE Kracht</span>
                </div>
                <div className="text-[11px] font-mono text-neutral-500 mt-1.5 leading-snug">
                  Ongekende iteratiesnelheid met AI-geassisteerde precisie.
                </div>
              </div>
            </div>

            {/* Action button */}
            {onNavigateToSparren && (
              <div className="pt-2">
                <button
                  onClick={onNavigateToSparren}
                  className="px-6 py-3.5 rounded-xl bg-neutral-950 hover:bg-[#ff451a] text-white font-bold font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Direct Sparren met Matthias</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
