import React, { useState } from 'react';
import { Sliders, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

interface ProjectCalculatorProps {
  onPlanSparringWithBrief: (brief: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onPlanSparringWithBrief }) => {
  const [goal, setGoal] = useState<string>('new-product');
  const [domain, setDomain] = useState<string>('health');
  const [primaryFocus, setPrimaryFocus] = useState<string[]>(['domain-logic', 'local-first']);

  const goals = [
    { id: 'new-product', title: 'Nieuw Product Bouwen', desc: 'Van nulpunt naar werkend product' },
    { id: 'rebuild', title: 'Platform Herbouwen', desc: 'Van template naar schaalbare motor' },
    { id: 'api-architecture', title: 'Cloud & API Koppeling', desc: 'Robuuste data-architectuur' },
    { id: 'omnichannel', title: 'Fysiek + Digitaal', desc: 'App + storefront of wagenpark' }
  ];

  const domains = [
    { id: 'health', name: 'Zorg & Healthtech', hint: 'Diagnostiek, local-first' },
    { id: 'geo', name: 'Vastgoed & Ruimtelijk', hint: 'Kadaster, PDOK, kavels' },
    { id: 'b2b-trade', name: 'B2B & Logistiek', hint: 'Supply chain, fleet livery' },
    { id: 'retail-mobility', name: 'Retail & Mobiliteit', hint: 'Verhuur, storefront' }
  ];

  const focusOptions = [
    { id: 'domain-logic', label: 'Domeinlogica & Beslisbomen' },
    { id: 'local-first', label: 'Local-First Data Privacy' },
    { id: 'spatial-data', label: 'Kadaster & PDOK Koppelingen' },
    { id: 'ai-reasoning', label: 'AI Hypothese Engines' },
    { id: 'fleet-storefront', label: 'Storefront & Wagenpark' },
    { id: 'agentic-speed', label: 'Agentic IDE Snelheid' }
  ];

  const toggleFocus = (id: string) => {
    if (primaryFocus.includes(id)) {
      setPrimaryFocus(primaryFocus.filter(item => item !== id));
    } else {
      setPrimaryFocus([...primaryFocus, id]);
    }
  };

  const getEstimatedTimeline = () => {
    if (goal === 'api-architecture') return '2 tot 4 weken gerichte sprint';
    if (goal === 'new-product') return '4 tot 8 weken van nulpunt tot live motor';
    if (goal === 'rebuild') return '3 tot 6 weken refactoring & migratie';
    return '4 tot 6 weken integraal concept';
  };

  const getRecommendedStack = () => {
    const stack = ['TypeScript', 'Modern React', 'Tailwind CSS'];
    if (domain === 'health' || primaryFocus.includes('local-first')) stack.push('IndexedDB Local-First', 'WebCrypto');
    if (domain === 'geo' || primaryFocus.includes('spatial-data')) stack.push('PDOK Open Data API', 'Kadaster WFS', 'WebGIS');
    if (primaryFocus.includes('ai-reasoning')) stack.push('AI Hypothese Engine', 'Structured Reasoning');
    if (domain === 'retail-mobility' || primaryFocus.includes('fleet-storefront')) stack.push('Vector Livery CAD', 'Signage Specs');
    stack.push('API Architecture & Edge Deployments');
    return stack;
  };

  const handleSendConfig = () => {
    const goalTitle = goals.find(g => g.id === goal)?.title || goal;
    const domainName = domains.find(d => d.id === domain)?.name || domain;
    const focusNames = primaryFocus.map(f => focusOptions.find(o => o.id === f)?.label).filter(Boolean).join(', ');

    const brief = `Doel: ${goalTitle}\nDomein: ${domainName}\nFocusgebieden: ${focusNames}\nGeschatte aanpak: ${getEstimatedTimeline()}`;
    onPlanSparringWithBrief(brief);
  };

  return (
    <section className="pt-40 sm:pt-48 lg:pt-56 pb-20 bg-[#f8f7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-neutral-800 text-xs font-mono mb-4">
            <Sliders className="w-3.5 h-3.5 text-neutral-950" />
            <span>INTERACTIEVE PROJECT CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Ontwerp Jouw <br />
            <span className="text-neutral-600">Architectuur-Blauwdruk</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            Kies doel, domein en technische focus voor een direct architectuurvoorstel.
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left 7 columns */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Step 1: Goal */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
              <label className="text-xs font-mono uppercase text-neutral-950 font-bold tracking-wider block mb-3">
                01. WAT IS HET PRIMAIRE DOEL?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id)}
                    className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                      goal === g.id
                        ? 'bg-neutral-950 border-neutral-950 text-white shadow-sm'
                        : 'bg-neutral-50/70 border-neutral-200/80 text-neutral-700 hover:border-neutral-400 hover:text-neutral-950 hover:bg-neutral-100'
                    }`}
                  >
                    <div className={`text-sm font-bold ${goal === g.id ? 'text-white' : 'text-neutral-950'}`}>{g.title}</div>
                    <div className={`text-xs mt-1 ${goal === g.id ? 'text-neutral-300' : 'text-neutral-500'}`}>{g.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Domain */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
              <label className="text-xs font-mono uppercase text-neutral-950 font-bold tracking-wider block mb-3">
                02. IN WELK DOMEIN BEVINDT ZICH DE LOGICA?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domains.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDomain(d.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      domain === d.id
                        ? 'bg-neutral-950 border-neutral-950 text-white shadow-sm'
                        : 'bg-neutral-50/70 border-neutral-200/80 text-neutral-700 hover:border-neutral-400 hover:text-neutral-950 hover:bg-neutral-100'
                    }`}
                  >
                    <div className={`text-sm font-bold ${domain === d.id ? 'text-white' : 'text-neutral-950'}`}>{d.name}</div>
                    <div className={`text-[11px] mt-0.5 ${domain === d.id ? 'text-neutral-300' : 'text-neutral-500'}`}>{d.hint}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Critical Requirements */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
              <label className="text-xs font-mono uppercase text-neutral-950 font-bold tracking-wider block mb-3">
                03. KRITISCHE ARCHITECTUUR-EISEN (SELECTEER MEERDERE)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusOptions.map((opt) => {
                  const isChecked = primaryFocus.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleFocus(opt.id)}
                      className={`p-3 rounded-lg text-left text-xs font-mono flex items-center justify-between border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-neutral-950 border-neutral-950 text-white font-semibold shadow-sm'
                          : 'bg-neutral-50/70 border-neutral-200/80 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 ${
                        isChecked ? 'bg-white text-neutral-950' : 'border border-neutral-400'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Blueprint Output: Right 5 columns */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-neutral-950 text-white border border-neutral-900 p-6 sm:p-8 shadow-2xl text-left space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 flex items-center justify-center text-white">
                    <RadderLogo size={22} color="#ffffff" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                    ARCHITECTUUR BLAUWDRUK
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-300 px-2 py-0.5 rounded bg-neutral-800/80 border border-neutral-700">
                  AUTO_GENERATED
                </span>
              </div>

              {/* Blueprint details */}
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">GESCHATTE DOORLOOPTIJD</div>
                  <div className="text-lg font-bold text-white mt-0.5 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-white" />
                    <span>{getEstimatedTimeline()}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">DOMEIN & COMPATIBILITEIT</div>
                  <div className="text-sm font-semibold text-neutral-200 mt-0.5">
                    {domains.find(d => d.id === domain)?.name} — Volledige domeinspecifieke logica
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">AANBEVOLEN MOTOR STACK</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {getRecommendedStack().map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-2 text-xs text-neutral-300 font-mono">
                  <div className="text-white font-bold">&gt; MR_DIRECT_APPROACH</div>
                  <div>• Geen overbodige meetings met tussenpersonen</div>
                  <div>• Direct sparren met de architect & maker</div>
                  <div>• Eigenaarschap van alle intellectuele eigendom & code</div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSendConfig}
                className="w-full py-4 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Neem Deze Blauwdruk Mee Naar Sparringsessie</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
