import React from 'react';
import { Terminal } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 bg-[#f4f3ef] border-t border-neutral-300 relative overflow-hidden">
      {/* Subtle watermark in deep black ink with fine paper opacity */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] pointer-events-none select-none text-neutral-950">
        <RadderLogo size={320} glow={false} color="#0a0a0a" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono mb-8 shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-neutral-900" />
          <span>HET MANIFEST // WAAROM WIJ BESTAAN</span>
        </div>

        {/* Big quote statement */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-neutral-950 mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-950 leading-relaxed tracking-tight">
            "Waar een standaard bureau stopt bij een mooi laagje verf,{' '}
            <span className="text-neutral-950 font-bold underline decoration-neutral-400 underline-offset-8">
              bouwen wij de motor: complexe domeinlogica direct vertaald naar werkende software.
            </span>"
          </p>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-700 text-base leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-neutral-950 font-mono uppercase tracking-wide">
              De Illusie van de Buitenkant
            </h3>
            <p>
              Standaard bureaus leveren gelikte mockups, maar haken af zodra het aankomt op echte domeinlogica, privacy-by-design of live datakoppelingen. IT-consultancies verdrinken daarentegen in logge rapporten zonder commerciële executiekracht.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-neutral-950 font-mono uppercase tracking-wide">
              Waarom RaddeR de Motor Bouwt
            </h3>
            <p>
              RaddeR combineert diepe systeemarchitectuur met snelle executie. Van local-first zorgprotocollen en kadaster-koppelingen tot fysieke storefronts en complete transportvloten: wij bouwen systemen die direct renderen.
            </p>
          </div>
        </div>

        {/* 4 Truths Callout Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">01 / GEEN SAUSJES</div>
            <p className="text-xs text-neutral-600">Design dient de onderliggende logica, nooit andersom.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">02 / LOCAL-FIRST</div>
            <p className="text-xs text-neutral-600">Data en privacy blijven gegarandeerd bij de eindgebruiker.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">03 / ENTERPRISE LEVEL</div>
            <p className="text-xs text-neutral-600">OpenShift, eBPF en mission-critical kernel observabiliteit.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">04 / TASTBAAR</div>
            <p className="text-xs text-neutral-600">Van app-interface tot winkelgevel en complete vloten.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
