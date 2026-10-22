import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';
import type { CaseStudy } from '../data/projects';
import { CaseModal } from './CaseModal';
import { Cpu, Layers, Globe, MapPin, Truck, ChevronRight } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderIconCases } from './RadderNavIcons';

interface CaseStudiesProps {
  onOpenContact: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = ['Alle', 'Domein Alpha', 'Domein Beta', 'Domein Gamma', 'Domein Delta'];

  const filteredCases = selectedCategory === 'Alle'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Domein Alpha':
        return <Cpu className="w-4 h-4 text-neutral-900" />;
      case 'Domein Beta':
        return <MapPin className="w-4 h-4 text-neutral-800" />;
      case 'Domein Gamma':
        return <Globe className="w-4 h-4 text-neutral-800" />;
      case 'Domein Delta':
        return <Truck className="w-4 h-4 text-neutral-800" />;
      default:
        return <Layers className="w-4 h-4 text-neutral-700" />;
    }
  };

  return (
    <section className="pt-40 sm:pt-48 lg:pt-56 pb-20 bg-[#f8f7f4] relative overflow-hidden">
      {/* Page Watermark: Cases Icon in Vermilion Accent */}
      <div className="absolute right-4 sm:right-12 lg:right-24 top-28 sm:top-36 lg:top-40 pointer-events-none select-none text-[#ff451a] opacity-[0.05] sm:opacity-[0.07] z-0 transition-opacity">
        <RadderIconCases size={480} strokeWidth={1.5} color="#ff451a" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-neutral-800 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff451a]" />
              <span>PORTFOLIO // PLACEHOLDER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Geselecteerde Projecten & <br />
              <span className="text-neutral-600">Architectuur Cases</span>
            </h2>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white font-bold shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-neutral-950 border border-neutral-300 hover:border-neutral-400 shadow-sm'
                }`}
              >
                {selectedCategory === cat && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff451a]" />
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all duration-300 group relative"
            >
              {/* Subtle top right watermark */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-[0.06] pointer-events-none group-hover:opacity-20 transition-opacity">
                <RadderLogo size={48} color="#0a0a0a" />
              </div>

              {/* Card Header */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-800">
                    {getCategoryIcon(study.category)}
                    <span>{study.category}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">{study.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 group-hover:text-black transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {study.subtitle}
                </p>

                {/* Impact Metrics Row */}
                <div className="mt-6 grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  {study.impactMetrics.map((m, i) => (
                    <div key={i} className="text-left">
                      <div className="text-[10px] font-mono uppercase text-neutral-500 truncate">{m.label}</div>
                      <div className="text-sm font-bold text-neutral-950 font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* The "Motor" Difference Box */}
                <div className="mt-6 p-4 rounded-xl bg-neutral-950 text-white border border-neutral-900 text-left shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-bold mb-1">
                    DE MOTOR AANPAK:
                  </div>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    {study.theEngineApproach}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {study.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 border border-neutral-200/80 text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 border border-neutral-200/80 text-neutral-500">
                      +{study.techStack.length - 4} meer
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="px-6 sm:px-8 py-4 bg-neutral-50/80 border-t border-neutral-200/80 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-600">
                  Klant: <strong className="text-neutral-950">{study.client}</strong>
                </span>

                <button
                  onClick={() => setActiveModalCase(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-950 hover:text-black transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Diepte-analyse bekijken</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep-dive */}
        <CaseModal
          caseStudy={activeModalCase}
          onClose={() => setActiveModalCase(null)}
          onSparring={onOpenContact}
        />
      </div>
    </section>
  );
};
