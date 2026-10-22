import React from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

interface FounderSectionProps {
  onNavigateToSparren?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onNavigateToSparren }) => {
  return (
    <section className="pt-24 pb-16 bg-[#f8f7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait photo in Swiss Editorial styling */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group max-w-sm w-full">
              {/* Subtle architectural frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-white">
                <img
                  src="/matthias-radder.png"
                  alt="Matthias Radder — Oprichter van RaddeR"
                  className="w-full h-auto aspect-square object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
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
                  <div className="w-6 h-6 flex items-center justify-center text-neutral-950">
                    <RadderLogo size={22} color="#0a0a0a" glow={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-neutral-800 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5 text-neutral-950" />
              <span>OVER RaddeR // DE MAKER ACHTER DE MOTOR</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.1]">
              Geen accountmanagers. <br />
              <span className="text-neutral-600">Direct sparren met de maker.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              RaddeR is opgericht door <strong>Matthias Radder</strong> vanuit één heldere overtuiging: complexe softwareproblemen los je niet op met bureau-lagen, tussenpersonen of mooie praatjes. Je lost ze op door direct te bouwen aan de motor.
            </p>

            {/* Three direct guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-neutral-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-950">Eén inhoudelijk aanspreekpunt:</strong> Strategie, architectuur en code in één directe feedbackloop.
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-950">Van abstracte logica tot realiteit:</strong> Ervaring met zorgprotocollen, kadastrale geodata én fysieke signing.
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-950">Eigenaarschap & transparantie:</strong> 100% eigenaarschap van alle code en intellectuele eigendom voor de opdrachtgever.
                </span>
              </div>
            </div>

            {/* Action button */}
            {onNavigateToSparren && (
              <div className="pt-4">
                <button
                  onClick={onNavigateToSparren}
                  className="px-6 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
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
