import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';
import type { CaseStudy } from '../data/projects';
import { CaseModal } from './CaseModal';
import { Cpu, Layers, Globe, MapPin, Truck, ChevronRight, ExternalLink } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderIconCases, RadderIconTableTennis } from './RadderNavIcons';
import { CornerReticles, CalibrationScale } from './RadderStudioDetails';

interface CaseStudiesProps {
  onOpenContact: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = ['Alle', ...Array.from(new Set(CASE_STUDIES.map((c) => c.category)))];

  const filteredCases = selectedCategory === 'Alle'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'B2B & Configuratoren':
        return <Cpu className="w-4 h-4 text-neutral-900" />;
      case 'HealthTech & Psychologie':
        return <Layers className="w-4 h-4 text-neutral-900" />;
      case 'Local SEO & Performance':
        return <MapPin className="w-4 h-4 text-neutral-900" />;
      case 'Omnichannel & Retail':
        return <Globe className="w-4 h-4 text-neutral-900" />;
      case 'AI Hardware & Travel':
        return <Truck className="w-4 h-4 text-neutral-900" />;
      case 'Sport & Vitaliteit':
        return <RadderIconTableTennis size={16} strokeWidth={2} color="#0a0a0a" />;
      default:
        return <Layers className="w-4 h-4 text-neutral-700" />;
    }
  };

  return (
    <section className="pt-40 sm:pt-48 lg:pt-56 pb-20 bg-[#f8f7f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Page Header Zone */}
        <div className="relative mb-12">
          {/* Cases Main Content: all left, exact same size */}
          <div className="relative z-10 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm mb-4">
              <RadderIconCases size={14} strokeWidth={2} color="#ff451a" />
              <span>PORTFOLIO // PRODUCTIE CASES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Geselecteerde Projecten & <br />
              <span className="text-neutral-400">Architectuur Cases</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Geen oppervlakkige bureau-demo's, maar live productieplatforms gebouwd op robuuste domeinlogica, zero-lag architectuur en directe executie.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all duration-300 group relative"
            >
              <CornerReticles color="rgba(0,0,0,0.18)" />

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
                  <div className="flex items-center gap-2">
                    <CalibrationScale label="SPEC // PROD" ticks={6} className="hidden sm:inline-flex" />
                    <span className="text-xs font-mono text-neutral-500">{study.year}</span>
                  </div>
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
              <div className="px-6 sm:px-8 py-4 bg-neutral-50/80 border-t border-neutral-200/80 rounded-b-2xl flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-neutral-600 truncate max-w-full sm:max-w-[260px]">
                  Klant: <strong className="text-neutral-950">{study.client}</strong>
                </span>

                <div className="flex items-center gap-3">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 hover:text-[#ff451a] transition-colors"
                      title={`Bezoek ${study.title}`}
                    >
                      <span>Live site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalCase(study)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-950 hover:text-[#ff451a] transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Diepte-analyse</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
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
