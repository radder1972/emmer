import React from 'react';
import type { CaseStudy } from '../data/projects';
import { X, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSparring: () => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({ caseStudy, onClose, onSparring }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0e1117] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-8 text-left">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141720]">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: caseStudy.accentColor }}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {caseStudy.category} // {caseStudy.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title Area */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {caseStudy.title}
            </h2>
            <p className="mt-2 text-base text-neutral-300">
              {caseStudy.subtitle}
            </p>
            <div className="mt-3 text-xs font-mono text-neutral-400">
              Klant / Context: <strong className="text-white">{caseStudy.client}</strong>
            </div>
          </div>

          {/* Impact Metrics Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.impactMetrics.map((metric, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-neutral-400 uppercase">{metric.label}</div>
                <div className="text-xl font-bold text-white mt-1">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Quote callout if available */}
          {caseStudy.quote && (
            <div className="p-4 rounded-xl bg-emerald-950/20 border-l-4 border-emerald-400 flex items-start gap-3">
              <Quote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm italic font-medium text-emerald-200">
                "{caseStudy.quote}"
              </p>
            </div>
          )}

          {/* Comparison breakdown: Standard vs The Engine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="text-xs font-mono uppercase text-red-400 font-bold mb-2">
                WAT EEN STANDAARD BUREAU DEED
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {caseStudy.standardAgencyApproach}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold mb-2">
                WAT MATTHIAS (MR STUDIO) BOUWDE
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {caseStudy.theEngineApproach}
              </p>
            </div>
          </div>

          {/* Detailed Story Sections */}
          <div className="space-y-6 pt-4 border-t border-white/10 text-neutral-300">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-2 font-semibold">
                01. HET PROBLEEM & DE CONTEXT
              </h4>
              <p className="text-sm leading-relaxed text-neutral-300">
                {caseStudy.detailedStory.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2 font-semibold">
                02. DE ONDERLIGGENDE DOMEINLOGICA
              </h4>
              <p className="text-sm leading-relaxed text-neutral-300">
                {caseStudy.detailedStory.domainLogic}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-purple-400 mb-2 font-semibold">
                03. DE TECHNISCHE EN ARCHITECTURALE EXECUTIE
              </h4>
              <p className="text-sm leading-relaxed text-neutral-300">
                {caseStudy.detailedStory.technicalExecution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2 font-semibold">
                04. HET BEDRIJFSRESULTAAT
              </h4>
              <p className="text-sm leading-relaxed text-neutral-300">
                {caseStudy.detailedStory.businessResult}
              </p>
            </div>
          </div>

          {/* Architectural highlights list */}
          <div className="p-5 rounded-xl bg-[#141722] border border-white/10">
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
              ARCHITECTUUR HOOGTEPUNTEN
            </h4>
            <div className="space-y-2">
              {caseStudy.architecturalHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
              GEBRUIKTE TECHNOLOGIEËN & STANDAARDEN
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#141720] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Sluiten
          </button>

          <button
            onClick={() => {
              onClose();
              onSparring();
            }}
            className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold font-mono text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <span>Sparren over vergelijkbare architectuur</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
