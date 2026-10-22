import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/projects';
import {
  RadderIconStrateeg,
  RadderIconArchitect,
  RadderIconMaker,
  RadderIconTerminal,
} from './RadderNavIcons';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PillarsProps {
  onNavigateToCases?: () => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onNavigateToCases }) => {
  const renderPillarIcon = (number: string) => {
    switch (number) {
      case '01':
        return <RadderIconStrateeg size={26} strokeWidth={2} color="#0a0a0a" />;
      case '02':
        return <RadderIconArchitect size={26} strokeWidth={2} color="#0a0a0a" />;
      case '03':
        return <RadderIconMaker size={26} strokeWidth={2} color="#0a0a0a" />;
      default:
        return <RadderIconStrateeg size={26} strokeWidth={2} color="#0a0a0a" />;
    }
  };

  return (
    <section className="py-24 bg-[#f4f3ef] border-t border-neutral-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-neutral-800 text-xs font-mono mb-4">
            <RadderIconTerminal size={14} strokeWidth={2} color="#ff451a" />
            <span>DE INTERDISCIPLINAIRE DRIEHOEK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Drie werelden. <br />
            <span className="text-neutral-400">
              Eén coherente executie.
            </span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Geen ruis tussen analist, designer en bouwer: RaddeR combineert strategie, architectuur en tastbare executie in één directe feedbackloop.
          </p>
        </div>

        {/* 3 Pillars Grid: Strateeg -> Architect -> Maker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-8 flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5 relative"
            >
              <div>
                {/* Fixed-height icon bar to guarantee identical vertical baseline */}
                <div className="h-12 flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200/90 group-hover:scale-105 transition-transform text-neutral-950 flex items-center justify-center">
                    {renderPillarIcon(pillar.number)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-neutral-400 group-hover:text-neutral-800 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Card Title placed first: vertically aligned across all 3 columns */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight mb-1 flex items-center gap-2">
                  <span>{pillar.title}</span>
                </h3>

                {/* Subtitle with guaranteed min-height */}
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4 font-semibold min-h-[1.25rem] flex items-center">
                  {pillar.subtitle}
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-neutral-200/90">
                {pillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#ff451a] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Takeaway */}
        <div className="mt-16 rounded-2xl bg-neutral-950 text-white border border-neutral-900 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left space-y-2">
            <h4 className="text-lg font-bold text-white">Geen overdrachtsruis, geen vertragingsfactoren</h4>
            <p className="text-sm text-neutral-300 max-w-2xl">
              Door de architectuurkennis van een softwareontwikkelaar direct te koppelen aan commerciële strategie en ontwerpsnelheid, leveren we in weken wat corporate teams in kwartalen overleggen.
            </p>
          </div>
          <a
            href="/cases"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToCases?.();
            }}
            className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border border-white/20 shrink-0 transition-all font-bold shadow-sm cursor-pointer"
          >
            <span>Bekijk de bewijsvoering in Cases</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
