import React from 'react';
import { Terminal, Shield, Database, Compass, Cpu } from 'lucide-react';

export const TechRadar: React.FC = () => {
  const radarSections = [
    {
      category: 'Agentic & Modern Engineering',
      icon: Terminal,
      description: 'Snelle iteratiecyclus: van concept naar productiecode in uren.',
      items: [
        { name: 'Google Antigravity IDE', detail: 'Agentic context pipelines & taak-orkestratie' },
        { name: 'React 19 & TypeScript', detail: 'Type-safe interfaces & concurrent rendering' },
        { name: 'Tailwind CSS & Tokens', detail: 'Consistente design tokens & strakke styling' },
        { name: 'Vercel Edge & Workers', detail: 'Sub-30ms global edge deployments' }
      ]
    },
    {
      category: 'Enterprise Cloud & Observability',
      icon: Shield,
      description: 'Enterprise-schaal (ASML-kaliber) met mission-critical observabiliteit.',
      items: [
        { name: 'Red Hat OpenShift', detail: 'Container orchestration & operator workflows' },
        { name: 'eBPF Telemetry (Cilium)', detail: 'Zero-overhead kernel packet inspection' },
        { name: 'Zero-Trust Architecture', detail: 'Microsegmentatie & geautomatiseerde mTLS' },
        { name: 'Kubernetes Topologies', detail: 'Multi-tenant isolation & self-healing state' }
      ]
    },
    {
      category: 'Local-First, AI & Ruimtelijke Data',
      icon: Database,
      description: 'Privacy-by-design gecombineerd met openbare nationale registraties.',
      items: [
        { name: 'Local-First & Crypto', detail: 'Zero-knowledge client storage, 100% AVG-proof' },
        { name: 'PDOK & Kadaster WFS/WMS', detail: 'Live streaming van ruimtelijke overheidsdata' },
        { name: 'AI Hypothese Engines', detail: 'Contextuele ondersteuning voor domeinexperts' },
        { name: 'GeoJSON Spatial Matching', detail: 'Real-time geometrische calculatie van kavels' }
      ]
    },
    {
      category: 'Fysiek naar Digitaal (Total Concept)',
      icon: Compass,
      description: 'Volledige synergie tussen webapplicaties en tastbare realiteit.',
      items: [
        { name: 'Storefront Architectuur', detail: 'Gevelsigning, balies & routing (Pattaya)' },
        { name: 'Fleet Livery & Wagenpark', detail: 'Vector-perfecte belettering voor transportvloten' },
        { name: 'B2B Positionering', detail: 'Commerciële autoriteit ("From Tree to Trade")' },
        { name: 'Omnichannel QR Flows', detail: 'Frictieloze overgang van straat naar webapp' }
      ]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-[#08090d] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>TECHNISCHE EN STRATEGISCHE TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            De Stack: Van Linux Kernel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              tot Fysieke Storefront.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Bewezen technologie waarmee complexe domeinlogica direct operationeel wordt.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {radarSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#11131a] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{sec.category}</h3>
                      <p className="text-xs text-zinc-400">{sec.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {sec.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors text-left"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-white font-semibold">
                          <span>{item.name}</span>
                          <span className="text-[10px] text-zinc-400 font-normal">OPERATIONAL</span>
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>LEVEL: ENTERPRISE & PRODUCTION READY</span>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
