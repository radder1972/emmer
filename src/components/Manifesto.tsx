import React from 'react';
import { RadderLogo } from './RadderLogo';
import { RadderIconTerminal } from './RadderNavIcons';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 bg-[#f4f3ef] border-t border-neutral-300 relative overflow-hidden">
      {/* Subtle watermark in deep black ink with fine paper opacity */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] pointer-events-none select-none text-neutral-950">
        <RadderLogo size={320} glow={false} color="#0a0a0a" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono mb-8 shadow-sm">
          <RadderIconTerminal size={14} strokeWidth={2} color="#ff451a" />
          <span>HET MANIFEST // DE SYMBIOSE TUSSEN ARCHITECT EN AGENT</span>
        </div>

        {/* Big quote statement */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#ff451a] mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-950 leading-relaxed tracking-tight">
            "We begonnen ooit met schuchtere prompts en vroege chatbots.{' '}
            <span className="text-neutral-950 font-bold underline decoration-[#ff451a]/40 underline-offset-8">
              Vandaag realiseren we samen complete softwareplatforms in uren in plaats van maanden. De scheidslijn tussen bedenken en bouwen is voorgoed verdwenen.
            </span>"
          </p>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-700 text-base leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-neutral-950 font-mono uppercase tracking-wide">
              De Eerste Stappen: De Omslag in Denken
            </h3>
            <p>
              Het begon met nieuwsgierigheid. De eerste experimenten met AI lieten direct zien dat traditionele softwareontwikkeling fundamenteel zou kantelen. Waar projecten voorheen vastliepen in eindeloze vergaderingen, dikke functionele ontwerpen en trage overdrachtsmomenten tussen analisten, designers en programmeurs, kon één ervaren architect met de juiste AI-symbiose ineens de complete keten overzien én direct uitvoeren.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-neutral-950 font-mono uppercase tracking-wide">
              De Realiteit Nu: Bouwen aan 'Whatever'
            </h3>
            <p>
              Vandaag is die synergie werkelijkheid. Door geavanceerde agentic IDE-omgevingen direct aan de broncode te koppelen, bouwen we 'whatever' de bedrijfslogica daadwerkelijk vraagt. Van een B2B offerte-configurator voor beukenhout tot een klinische psychodiagnostische suite met 2D tafelopstelling en Web Audio API synthesizers: als we het kunnen modelleren, kunnen we het direct bouwen. Zonder ruis, zonder wachttijd, rechtstreeks aan de motor.
            </p>
          </div>
        </div>

        {/* 4 Milestones / Truths Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">01 / DE EXPLORATIE</div>
            <p className="text-xs text-neutral-600">Van nieuwsgierige prompt naar het besef dat de afstand tussen idee en code tot nul reduceert.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">02 / DE SYMBIOSE</div>
            <p className="text-xs text-neutral-600">De versmelting van enterprise IT-ervaring met realtime autonome code-executie.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">03 / DE ACCELERATIE</div>
            <p className="text-xs text-neutral-600">Geen sprints van maanden meer: wat vandaag bedacht wordt, staat binnen uren in productie.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm">
            <div className="text-neutral-950 font-mono text-sm font-bold mb-1">04 / HET RESULTAAT</div>
            <p className="text-xs text-neutral-600">100% eigenaarschap, zero bureau-fluff, en software die staat als een geolied fundament.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
