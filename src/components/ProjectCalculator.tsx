import React, { useState } from 'react';
import { Sliders, ArrowRight, CheckCircle2, Terminal, Zap } from 'lucide-react';

interface ProjectCalculatorProps {
  onPlanSparringWithBrief: (brief: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onPlanSparringWithBrief }) => {
  const [goal, setGoal] = useState<string>('new-product');
  const [domain, setDomain] = useState<string>('health');
  const [primaryFocus, setPrimaryFocus] = useState<string[]>(['domain-logic', 'local-first']);

  const goals = [
    { id: 'new-product', title: 'Nieuw Product Bouwen', desc: 'Van nulpunt naar werkende motor & marktintroductie' },
    { id: 'rebuild', title: 'Platform Herbouwen', desc: 'Weg van standaard template naar schaalbare architectuur' },
    { id: 'enterprise-sparring', title: 'Enterprise Sparring', desc: 'OpenShift, eBPF & architectuurvoorstellen op directieniveau' },
    { id: 'omnichannel', title: 'Fysiek + Digitaal', desc: 'App + storefront, signage of wagenparkbelettering' }
  ];

  const domains = [
    { id: 'health', name: 'Zorg & Healthtech', hint: 'Bijv. diagnostiek, theoriekaarten, AVG local-first' },
    { id: 'geo', name: 'Vastgoed & Ruimtelijk', hint: 'Bijv. PDOK/Kadaster geodata, kavelmatching' },
    { id: 'enterprise', name: 'High-Tech & Enterprise', hint: 'Bijv. OpenShift, eBPF, ASML-kaliber proposals' },
    { id: 'b2b-trade', name: 'B2B & Logistiek', hint: 'Bijv. "From Tree to Trade", supply chains, fleet' },
    { id: 'retail-mobility', name: 'Retail & Mobiliteit', hint: 'Bijv. PWA huursystemen, winkelpuien in Pattaya' }
  ];

  const focusOptions = [
    { id: 'domain-logic', label: 'Complexe Domeinlogica & Beslisbomen' },
    { id: 'local-first', label: 'Local-First / Zero-Leak Data Privacy' },
    { id: 'spatial-data', label: 'Live Kadaster & PDOK Koppelingen' },
    { id: 'ai-reasoning', label: 'AI Hypothese- & Analyse Engines' },
    { id: 'fleet-storefront', label: 'Fysieke Signage, Storefront of Wagenpark' },
    { id: 'agentic-speed', label: 'Razendsnelle Agentic Ontwikkeling' }
  ];

  const toggleFocus = (id: string) => {
    if (primaryFocus.includes(id)) {
      setPrimaryFocus(primaryFocus.filter(item => item !== id));
    } else {
      setPrimaryFocus([...primaryFocus, id]);
    }
  };

  const getEstimatedTimeline = () => {
    if (goal === 'enterprise-sparring') return '1 tot 3 strategische sprints';
    if (goal === 'new-product') return '4 tot 8 weken van nulpunt tot live motor';
    if (goal === 'rebuild') return '3 tot 6 weken refactoring & migratie';
    return '4 tot 6 weken integraal concept';
  };

  const getRecommendedStack = () => {
    const stack = ['TypeScript', 'Modern React', 'Tailwind CSS'];
    if (domain === 'health' || primaryFocus.includes('local-first')) stack.push('IndexedDB Local-First', 'WebCrypto');
    if (domain === 'geo' || primaryFocus.includes('spatial-data')) stack.push('PDOK Open Data API', 'Kadaster WFS', 'WebGIS');
    if (domain === 'enterprise') stack.push('Red Hat OpenShift', 'eBPF / Cilium', 'Kubernetes');
    if (primaryFocus.includes('ai-reasoning')) stack.push('AI Hypothese Engine', 'Structured Reasoning');
    if (domain === 'retail-mobility' || primaryFocus.includes('fleet-storefront')) stack.push('Vector Livery CAD', 'Signage Specs');
    stack.push('Agentic IDE Pipeline (Antigravity)');
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
    <section id="calculator" className="py-24 bg-[#0a0c10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIEVE PROJECT CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ontwerp Jouw Architectuur- <br />
            <span className="text-emerald-400">en Roadmap Blauwdruk</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Kies jouw doel, domein en technische randvoorwaarden. Wij genereren direct een architecturaal voorstel.
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left 7 columns */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Step 1: Goal */}
            <div className="p-6 rounded-2xl bg-[#11131b] border border-white/10">
              <label className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider block mb-3">
                01. WAT IS HET PRIMAIRE DOEL?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id)}
                    className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                      goal === g.id
                        ? 'bg-emerald-950/30 border-emerald-400 text-white shadow-lg shadow-emerald-950/40'
                        : 'bg-black/30 border-white/5 text-neutral-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold">{g.title}</div>
                    <div className="text-xs text-neutral-400 mt-1">{g.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Domain */}
            <div className="p-6 rounded-2xl bg-[#11131b] border border-white/10">
              <label className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider block mb-3">
                02. IN WELK DOMEIN BEVINDT ZICH DE LOGICA?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domains.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDomain(d.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      domain === d.id
                        ? 'bg-cyan-950/30 border-cyan-400 text-white shadow-lg shadow-cyan-950/40'
                        : 'bg-black/30 border-white/5 text-neutral-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold">{d.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">{d.hint}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Critical Requirements */}
            <div className="p-6 rounded-2xl bg-[#11131b] border border-white/10">
              <label className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider block mb-3">
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
                          ? 'bg-purple-950/40 border-purple-400 text-purple-200'
                          : 'bg-black/30 border-white/5 text-neutral-400 hover:border-white/15'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 ${
                        isChecked ? 'bg-purple-400 text-black' : 'border border-neutral-600'
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
            <div className="rounded-2xl bg-gradient-to-b from-[#131722] to-[#0c0e14] border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl text-left space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                    ARCHITECTUUR BLAUWDRUK
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                  AUTO_GENERATED
                </span>
              </div>

              {/* Blueprint details */}
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">GESCHATTE DOORLOOPTIJD</div>
                  <div className="text-lg font-bold text-white mt-0.5 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>{getEstimatedTimeline()}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">DOMEIN & COMPATIBILITEIT</div>
                  <div className="text-sm font-semibold text-neutral-200 mt-0.5">
                    {domains.find(d => d.id === domain)?.name} — Volledige domeinspecifieke logica
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">AANBEVOLEN MOTOR STACK</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {getRecommendedStack().map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-black/60 border border-emerald-500/20 text-xs font-mono text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2 text-xs text-neutral-300 font-mono">
                  <div className="text-neutral-500 font-bold">&gt; MR_DIRECT_APPROACH</div>
                  <div>• Geen overbodige meetings met tussenpersonen</div>
                  <div>• Direct sparren met de architect & maker</div>
                  <div>• Eigenaarschap van alle intellectuele eigendom & code</div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSendConfig}
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
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
