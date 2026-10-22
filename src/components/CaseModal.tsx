import React from 'react';
import type { CaseStudy } from '../data/projects';
import { X, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSparring: () => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({ caseStudy, onClose, onSparring }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#fcfbf9] border border-neutral-300 rounded-2xl shadow-2xl overflow-hidden my-8 text-left">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-[#f4f3ef]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-neutral-950">
              <RadderLogo size={22} color="#0a0a0a" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
              {caseStudy.category} // {caseStudy.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-200/70 hover:bg-neutral-300 text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title Area */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              {caseStudy.title}
            </h2>
            <p className="mt-2 text-base text-neutral-700">
              {caseStudy.subtitle}
            </p>
            <div className="mt-3 text-xs font-mono text-neutral-500">
              Klant / Context: <strong className="text-neutral-950">{caseStudy.client}</strong>
            </div>
          </div>

          {/* Impact Metrics Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.impactMetrics.map((metric, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
                <div className="text-xs font-mono text-neutral-500 uppercase">{metric.label}</div>
                <div className="text-xl font-bold text-neutral-950 mt-1">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Quote callout */}
          {caseStudy.quote && (
            <div className="p-4 rounded-xl bg-neutral-100/80 border-l-4 border-neutral-950 flex items-start gap-3">
              <Quote className="w-5 h-5 text-neutral-950 shrink-0 mt-0.5" />
              <p className="text-sm italic font-medium text-neutral-800">
                "{caseStudy.quote}"
              </p>
            </div>
          )}

          {/* Comparison breakdown: Standard vs The Engine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-neutral-100 border border-neutral-200/90">
              <div className="text-xs font-mono uppercase text-neutral-600 font-bold mb-2">
                WAT EEN STANDAARD BUREAU DEED
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {caseStudy.standardAgencyApproach}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950 text-white border border-neutral-900 shadow-sm">
              <div className="text-xs font-mono uppercase text-white font-bold mb-2">
                WAT RaddeR BOUWDE
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {caseStudy.theEngineApproach}
              </p>
            </div>
          </div>

          {/* Detailed Story Sections */}
          <div className="space-y-6 pt-4 border-t border-neutral-200 text-neutral-700">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-950 mb-2 font-bold">
                01. HET PROBLEEM & DE CONTEXT
              </h4>
              <p className="text-sm leading-relaxed text-neutral-700">
                {caseStudy.detailedStory.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-950 mb-2 font-bold">
                02. DE ONDERLIGGENDE DOMEINLOGICA
              </h4>
              <p className="text-sm leading-relaxed text-neutral-700">
                {caseStudy.detailedStory.domainLogic}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-950 mb-2 font-bold">
                03. DE TECHNISCHE EN ARCHITECTURALE EXECUTIE
              </h4>
              <p className="text-sm leading-relaxed text-neutral-700">
                {caseStudy.detailedStory.technicalExecution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-950 mb-2 font-bold">
                04. HET BEDRIJFSRESULTAAT
              </h4>
              <p className="text-sm leading-relaxed text-neutral-700">
                {caseStudy.detailedStory.businessResult}
              </p>
            </div>
          </div>

          {/* Architectural highlights list */}
          <div className="p-5 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <h4 className="text-xs font-mono uppercase text-neutral-600 tracking-wider mb-3 font-bold">
              ARCHITECTUUR HOOGTEPUNTEN
            </h4>
            <div className="space-y-2">
              {caseStudy.architecturalHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-600 tracking-wider mb-3 font-bold">
              GEBRUIKTE TECHNOLOGIEËN & STANDAARDEN
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#f4f3ef] border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Sluiten
          </button>

          <button
            onClick={() => {
              onClose();
              onSparring();
            }}
            className="px-5 py-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Sparren over vergelijkbare architectuur</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
