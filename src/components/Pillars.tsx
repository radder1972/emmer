import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/projects';
import { Cpu, Layers, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const Pillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-purple-400" />;
      default:
        return <Cpu className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="driehoek" className="py-24 bg-[#0a0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono mb-4">
            <span>DE INTERDISCIPLINAIRE DRIEHOEK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Drie werelden. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-purple-400">
              Eén coherente executie.
            </span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            In een traditioneel project raakt 60% van de visie verloren in de vertaalslag tussen business analist, UI-designer en extern softwarebureau. Matthias combineert alle drie de disciplines in één naadloze feedbackloop.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl bg-[#11131a] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-neutral-700 group-hover:text-neutral-500 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  {pillar.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {pillar.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Takeaway */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#14161f] via-[#10121a] to-[#14161f] border border-white/10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-2">
            <h4 className="text-lg font-bold text-white">Geen overdrachtsruis, geen vertragingsfactoren</h4>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Door de architectuurkennis van een softwareontwikkelaar direct te koppelen aan commerciële strategie en ontwerpsnelheid, leveren we in weken wat corporate teams in kwartalen overleggen.
            </p>
          </div>
          <a
            href="#cases"
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 border border-white/15 shrink-0 transition-colors"
          >
            <span>Bekijk de bewijsvoering in Cases</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
