import React from 'react';
import { FounderSection } from '../components/FounderSection';
import { Pillars } from '../components/Pillars';
import { TechRadar } from '../components/TechRadar';
import { ArrowRight, Terminal } from 'lucide-react';

interface AboutPageProps {
  onNavigateToCases?: () => void;
  onNavigateToSparren?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToCases,
  onNavigateToSparren,
}) => {
  return (
    <div className="animate-fade-in">
      {/* 1. Wie is RaddeR: Matthias Radder */}
      <FounderSection onNavigateToSparren={onNavigateToSparren} />

      {/* 2. De Driehoek: Architect, Strateeg, Maker */}
      <Pillars onNavigateToCases={onNavigateToCases} />

      {/* 3. De Stack: Tech Toolkit Radar */}
      <TechRadar />

      {/* Bottom CTA for About */}
      <section className="py-16 bg-[#f4f3ef] border-t border-neutral-300 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-[11px] font-mono text-neutral-700 mb-2">
              <Terminal className="w-3 h-3 text-neutral-900" />
              <span>DIRECTE UITVOERING</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
              Klaar om direct met de makers te sparren?
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Geen accountmanagers. Direct inhoudelijk sparren over jullie technische motor.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToSparren}
              className="px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Naar Sparren</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateToCases}
              className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
