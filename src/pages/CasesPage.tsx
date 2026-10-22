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
    <div className="pt-8 pb-0">
      {/* 5 Real Deep-Dive Case Studies */}
      <CaseStudies onOpenContact={onOpenContact} />

      {/* Bottom CTA for Cases */}
      <section className="py-16 bg-[#f4f3ef] border-t border-neutral-300 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-[11px] font-mono text-neutral-700 mb-2">
              <Terminal className="w-3 h-3 text-neutral-900" />
              <span>INTERDISCIPLINAIRE AANPAK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
              Benieuwd naar de stack en filosofie achter deze cases?
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Ontdek de driehoek van De Architect, De Strateeg en De Maker.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToAbout}
              className="px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Over Ons</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Sparren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
