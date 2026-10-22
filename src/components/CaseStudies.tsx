import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';
import type { CaseStudy } from '../data/projects';
import { CaseModal } from './CaseModal';
import { Cpu, Layers, Shield, Globe, MapPin, Truck, ChevronRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenContact: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = ['Alle', 'Zorg & Healthtech', 'Proptech & Geodata', 'Enterprise Cloud', 'Fysiek & Digitaal', 'B2B & E-commerce'];

  const filteredCases = selectedCategory === 'Alle'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Zorg & Healthtech':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Proptech & Geodata':
        return <MapPin className="w-4 h-4 text-blue-400" />;
      case 'Enterprise Cloud':
        return <Shield className="w-4 h-4 text-purple-400" />;
      case 'Fysiek & Digitaal':
        return <Globe className="w-4 h-4 text-amber-400" />;
      case 'B2B & E-commerce':
        return <Truck className="w-4 h-4 text-cyan-400" />;
      default:
        return <Layers className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <section id="cases" className="py-24 bg-[#0a0c11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono mb-4">
              <span>VOLWAARDIGE PRODUCTONTWIKKELING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Geselecteerde Projecten & <br />
              <span className="text-emerald-400">Domein-Architecturen</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Geen oppervlakkige mockups, maar live werkende systemen met diepe logica, privacy-first dataopslag en fysieke verankering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-black font-semibold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-[#11141c] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 group"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                    {getCategoryIcon(study.category)}
                    <span>{study.category}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">{study.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {study.subtitle}
                </p>

                {/* Impact Metrics Row */}
                <div className="mt-6 grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/40 border border-white/5">
                  {study.impactMetrics.map((m, i) => (
                    <div key={i} className="text-left">
                      <div className="text-[10px] font-mono uppercase text-neutral-500 truncate">{m.label}</div>
                      <div className="text-sm font-bold text-white font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* The "Motor" Difference Box */}
                <div className="mt-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-left">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
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
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-500">
                      +{study.techStack.length - 4} meer
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="px-6 sm:px-8 py-4 bg-[#141822] border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Klant: <strong className="text-neutral-200">{study.client}</strong>
                </span>

                <button
                  onClick={() => setActiveModalCase(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
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
