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
    { id: 'goal-alpha', title: 'Doelstelling Alpha', desc: 'Lorem ipsum dolor sit amet consectetur' },
    { id: 'goal-beta', title: 'Doelstelling Beta', desc: 'Sed do eiusmod tempor incididunt ut labore' },
    { id: 'goal-gamma', title: 'Doelstelling Gamma', desc: 'Ut enim ad minim veniam quis nostrud' },
    { id: 'goal-delta', title: 'Doelstelling Delta', desc: 'Duis aute irure dolor in reprehenderit' }
  ];

  const domains = [
    { id: 'domain-alpha', name: 'Domein Alpha', hint: 'Lorem ipsum dolor' },
    { id: 'domain-beta', name: 'Domein Beta', hint: 'Consectetur adipiscing' },
    { id: 'domain-gamma', name: 'Domein Gamma', hint: 'Sed do eiusmod' },
    { id: 'domain-delta', name: 'Domein Delta', hint: 'Tempor incididunt' }
  ];

  const focusOptions = [
    { id: 'focus-01', label: 'Placeholder Focus Alpha' },
    { id: 'focus-02', label: 'Placeholder Focus Beta' },
    { id: 'focus-03', label: 'Placeholder Focus Gamma' },
    { id: 'focus-04', label: 'Placeholder Focus Delta' },
    { id: 'focus-05', label: 'Placeholder Focus Epsilon' },
    { id: 'focus-06', label: 'Placeholder Focus Zeta' }
  ];

  const toggleFocus = (id: string) => {
    if (primaryFocus.includes(id)) {
      setPrimaryFocus(primaryFocus.filter(item => item !== id));
    } else {
      setPrimaryFocus([...primaryFocus, id]);
    }
  };

  const getEstimatedTimeline = () => {
    return '2 tot 4 weken // Placeholder';
  };

  const getRecommendedStack = () => {
    return ['Stack Item 01', 'Stack Item 02', 'Stack Item 03', 'Stack Item 04', 'Stack Item 05'];
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
            <span>CONFIGURATOR // PLACEHOLDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Lorem Ipsum Dolor <br />
            <span className="text-neutral-600">Consectetur Adipiscing</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left 7 columns */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Step 1: Goal */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
              <label className="text-xs font-mono uppercase text-neutral-950 font-bold tracking-wider block mb-3">
                01. LOREM IPSUM PRIMAIR DOEL
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
                02. CONSECTETUR DOMEIN
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
                03. SED DO EIUSMOD FOCUSGEBIEDEN
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
                  <div className="text-white font-bold">&gt; LOREM_IPSUM_APPROACH</div>
                  <div>• Lorem ipsum dolor sit amet consectetur</div>
                  <div>• Sed do eiusmod tempor incididunt ut labore</div>
                  <div>• Ut enim ad minim veniam quis nostrud</div>
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
