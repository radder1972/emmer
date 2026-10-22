import React from 'react';
import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { EngineVsWrapper } from '../components/EngineVsWrapper';
import { ArrowRight } from 'lucide-react';

interface ManifestPageProps {
  onNavigateToCases: () => void;
  onNavigateToAbout: () => void;
  onOpenContact: () => void;
}

export const ManifestPage: React.FC<ManifestPageProps> = ({
  onNavigateToCases,
  onNavigateToAbout,
  onOpenContact,
}) => {
  return (
    <div className="animate-fade-in">
      {/* 1. Hero Statement */}
      <Hero
        onOpenContact={onOpenContact}
        onExploreCases={onNavigateToCases}
      />

      {/* 2. The Manifesto */}
      <Manifesto />

      {/* 3. Interactive Comparison: Motor vs. Sausje */}
      <EngineVsWrapper />

      {/* Bottom Page Transition Banner */}
      <section className="py-16 bg-[#f4f3ef] border-t border-neutral-300 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
              Klaar om te bouwen aan de motor?
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Bekijk onze geselecteerde productiecases of ontmoet de maker achter RaddeR.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToCases}
              className="px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Bekijk Cases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateToAbout}
              className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Over Ons
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
