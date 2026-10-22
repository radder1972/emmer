import React from 'react';
import { CaseStudies } from '../components/CaseStudies';
import { ArrowRight, Terminal } from 'lucide-react';

interface CasesPageProps {
  onOpenContact: () => void;
  onNavigateToAbout: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({
  onOpenContact,
  onNavigateToAbout,
}) => {
  return (
    <div className="pt-28 pb-16 animate-fade-in">
      {/* 5 Real Deep-Dive Case Studies */}
      <CaseStudies onOpenContact={onOpenContact} />

      {/* Bottom CTA for Cases */}
      <section className="py-16 bg-[#06070a] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 mb-2">
              <Terminal className="w-3 h-3 text-white" />
              <span>INTERDISCIPLINAIRE AANPAK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Benieuwd naar de stack en filosofie achter deze cases?
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Ontdek de driehoek van De Architect, De Strateeg en De Maker.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToAbout}
              className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-white/10"
            >
              <span>Over Ons</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/15 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Sparren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
