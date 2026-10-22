import React from 'react';
import { ArrowRight, Cpu, Layers, Terminal, Compass, Sparkles } from 'lucide-react';
import { HeroLogoCenterpiece } from './HeroLogoCenterpiece';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCases }) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting - Stark monochrome / titanium silver glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/10 via-zinc-500/5 to-transparent blur-[150px] -z-10 pointer-events-none" />
      
      {/* Massive subtle watermark of the Hexagonal EMMER Logo in the background */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.035] -z-10 pointer-events-none select-none">
        <img
          src="/logo-emmer.png"
          alt="EMMER Watermark"
          className="w-full h-full object-contain filter contrast-200"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical HUD Topline */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-500 border-b border-white/10 pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-zinc-200 font-bold tracking-wider">EMMER // SYSTEMS & PRODUCT ARCHITECTURE</span>
            <span className="text-zinc-700">|</span>
            <span>DOMAINS: GGZ // GEO-SPATIAL // ENTERPRISE // OMNICHANNEL</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-400">
            <span>SPEC: LOCAL-FIRST // EBPF // CADASTRE MATCHING // PHYSICAL-TO-DIGITAL</span>
          </div>
        </div>

        {/* Main Grid: Headline on the Left, Colossal Freestanding Logo on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/15 text-zinc-300 text-xs font-mono shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Niet het oppervlakkige sausje. <strong className="text-white font-bold">De motor.</strong></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Waar een standaard bureau stopt bij de buitenkant,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                bouwen wij de motor.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-xl font-normal leading-relaxed">
              Ons allergrootste onderscheidend vermogen zit in het vermogen om{' '}
              <span className="text-white font-semibold">complexe, domeinspecifieke logica direct te vertalen naar werkende, schaalbare bedrijfsmodellen</span>. 
              Van local-first diagnostiek voor psychologen en ruimtelijke kadaster-matching, tot enterprise cloudvoorstellen en fysieke storefronts.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCases}
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold font-mono text-sm tracking-wide transition-all shadow-lg shadow-white/10 flex items-center gap-2 group cursor-pointer"
              >
                <span>Bekijk Cases & Architectuur</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#vergelijker"
                className="px-6 py-3.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/15 font-mono text-sm tracking-wide transition-all flex items-center gap-2 hover:border-white/30 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-white" />
                <span>Buitenkant vs. De Motor</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-3.5 rounded-lg text-zinc-400 hover:text-white font-mono text-sm transition-colors cursor-pointer"
              >
                Direct Sparren →
              </button>
            </div>

            {/* 3 Core Competence Micro-Stamps */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>01. DE ARCHITECT</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Local-first webapps, eBPF telemetry, Red Hat OpenShift & GIS-registers.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-200 mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>02. DE STRATEEG</span>
                </div>
                <p className="text-xs text-zinc-400">
                  GGZ-diagnostiek, ruimtelijke kavelmatching & B2B ketenlogica.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-300 mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>03. DE MAKER</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Van vector identity & apps tot fysieke storefronts & bestelbussen.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Monumental Freestanding Logo on the Right */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <HeroLogoCenterpiece />
          </div>
        </div>
      </div>
    </section>
  );
};
