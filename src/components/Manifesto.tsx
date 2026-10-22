import React from 'react';
import { Terminal } from 'lucide-react';
import { MrLogo } from './MrLogo';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifest" className="py-24 bg-[#090b10] border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle watermark */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 opacity-5 pointer-events-none select-none">
        <MrLogo size={320} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-8">
          <Terminal className="w-3.5 h-3.5 text-white" />
          <span>HET MANIFEST // WAAROM WIJ BESTAAN</span>
        </div>

        {/* Big quote statement */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-white mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-relaxed tracking-tight">
            "Jouw allergrootste onderscheidend vermogen zit niet in het visuele sausje, maar in het vermogen om{' '}
            <span className="text-white font-bold underline decoration-white/40 underline-offset-8">
              complexe, domeinspecifieke logica direct te vertalen naar werkende, schaalbare bedrijfsmodellen.
            </span>"
          </p>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300 text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide">
              De Illusie van de Buitenkant
            </h3>
            <p>
              In de wereld van digitale bureaus is er een gigantische kloof ontstaan. Aan de ene kant staan de design- en marketingbureaus: zij maken verbluffende praatplaatjes, hippe mockups en WordPress-sites die er leuk uitzien, totdat je vraagt naar de echte motor. Zodra er specifieke vakkennis, privacy-by-design, realtime datakoppelingen of enterprise security bij komt kijken, haken ze af.
            </p>
            <p>
              Aan de andere kant staan de logge IT-consultancies: zij schrijven rapporten van honderden pagina's, rekenen torenhoge uurtarieven, maar hebben nog nooit een koper verliefd laten worden op een product of een winkelpui ontworpen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide">
              Waarom Wij de Motor Bouwen
            </h3>
            <p>
              Matthias Radder opereert precies op het snijvlak waar die werelden elkaar raken. Wij stoppen niet bij het laagje verf. Of het nu gaat om een Schematherapie Suite met AI-gedreven diagnostiek voor psychologen, een perceelkiezer gekoppeld aan openbare PDOK/Kadaster data, of high-scale enterprise cloudvoorstellen rondom Red Hat OpenShift en eBPF.
            </p>
            <p>
              En we trekken het door naar de echte wereld: van een mobiele boekings-app tot een fysieke storefront in Pattaya, of een vector design system doorgetrokken tot de bestelbussen van een internationale B2B houthandel.
            </p>
          </div>
        </div>

        {/* 4 Truths Callout Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-white font-mono text-sm font-bold mb-1">01 / GEEN SAUSJES</div>
            <p className="text-xs text-zinc-400">Design dient de logica, niet andersom. Geen oppervlakkige verf over rotte fundamenten.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-zinc-300 font-mono text-sm font-bold mb-1">02 / LOCAL-FIRST & PRIVACY</div>
            <p className="text-xs text-zinc-400">Zorg en bedrijfsgeheimen horen bij de gebruiker, niet in ondoorzichtige dataverzamelaars.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-zinc-300 font-mono text-sm font-bold mb-1">03 / ENTERPRISE LEVEL</div>
            <p className="text-xs text-zinc-400">Kennis van microsecond kernel telemetrie, OpenShift en ASML-kaliber infrastructuren.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-zinc-300 font-mono text-sm font-bold mb-1">04 / TASTBARE REALITEIT</div>
            <p className="text-xs text-zinc-400">Van 16px app icons tot 6 meter bestelbus-livery en fysieke winkelgevels in Thailand.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
