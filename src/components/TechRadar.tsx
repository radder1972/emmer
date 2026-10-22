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
      category: 'Moderne Cloud & API Architectuur',
      icon: Shield,
      description: 'Schaalbare backends, type-safe API\'s en veilige data-architectuur.',
      items: [
        { name: 'TypeScript & Node.js', detail: 'End-to-end type safety en robuuste data-validatie' },
        { name: 'Serverless & Edge APIs', detail: 'Snelle data-verwerking met sub-second latency' },
        { name: 'Veilige Data Encryptie', detail: 'End-to-end beveiliging & privacy-by-design' },
        { name: 'Geautomatiseerde CI/CD', detail: 'Stabiele deployments en betrouwbare release-pipelines' }
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
    <section className="py-24 bg-[#f8f7f4] border-t border-neutral-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-neutral-800 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-neutral-950" />
            <span>TECHNISCHE EN STRATEGISCHE TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight">
            De Stack: Van Diepe Code <br />
            <span className="text-neutral-600">
              tot Fysieke Storefront.
            </span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
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
                className="rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-950">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950">{sec.category}</h3>
                      <p className="text-xs text-neutral-600">{sec.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {sec.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-300 transition-colors text-left"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-950 font-semibold">
                          <span>{item.name}</span>
                          <span className="text-[10px] text-neutral-500 font-normal">OPERATIONAL</span>
                        </div>
                        <div className="text-xs text-neutral-600 mt-1">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>LEVEL: ENTERPRISE & PRODUCTION READY</span>
                  <div className="w-2 h-2 rounded-full bg-neutral-950"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
