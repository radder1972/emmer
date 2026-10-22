import React from 'react';
import { ArrowRight, Cpu, Layers, Terminal, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCases }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-purple-500/10 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical HUD Topline */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-neutral-500 border-b border-white/5 pb-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-neutral-400">MR_ENGINE_CORE // V4.2</span>
            <span className="text-neutral-600">|</span>
            <span>SYSTEMS & INTERDISCIPLINARY ARCHITECTURE</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-neutral-400">
            <span>LOC: NETHERLANDS & GLOBAL</span>
            <span className="text-neutral-600">|</span>
            <span>SPEC: LOCAL-FIRST // EBPF // SPATIAL DATA // TOTAL EXECUTION</span>
          </div>
        </div>

        {/* Main Grid: Headline & Interactive Emblem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-8 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/90 border border-white/10 text-neutral-300 text-xs font-mono shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Niet het oppervlakkige sausje. <strong className="text-white font-semibold">De motor.</strong></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Waar een standaard bureau stopt bij de buitenkant,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-emerald-400">
                bouw jij de motor.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl font-normal leading-relaxed">
              Jouw allergrootste onderscheidend vermogen zit in het vermogen om{' '}
              <span className="text-white font-medium">complexe, domeinspecifieke logica direct te vertalen naar werkende, schaalbare bedrijfsmodellen</span>. 
              Van local-first diagnostiek voor psychologen en ruimtelijke kadaster-matching, tot enterprise cloudvoorstellen en fysieke storefronts in Azië.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCases}
                className="px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold font-mono text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>Bekijk Case Studies & Architectuur</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#vergelijker"
                className="px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-white/10 font-mono text-sm tracking-wide transition-all flex items-center gap-2 hover:border-white/20 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Buitenkant vs. De Motor (Vergelijker)</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-3.5 rounded-lg text-neutral-400 hover:text-white font-mono text-sm transition-colors cursor-pointer"
              >
                Direct Sparren →
              </button>
            </div>

            {/* 3 Core Competence Micro-Stamps */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>01. DE ARCHITECT</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Local-first webapps, eBPF telemetry, Red Hat OpenShift & GIS-registers.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>02. DE STRATEEG</span>
                </div>
                <p className="text-xs text-neutral-400">
                  GGZ-diagnostiek, ruimtelijke kavelmatching & B2B ketenlogica.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>03. DE MAKER</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Van vector identity & apps tot fysieke storefronts & bestelbussen.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Isometric MR Hexagon Card & Live Terminal */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#161822] to-[#0d0e14] border border-white/15 p-6 shadow-2xl relative group hover:border-emerald-500/40 transition-all duration-500">
              {/* Corner brackets for architectural look */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-400/40"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-400/40"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400/40"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-400/40"></div>

              {/* Hexagonal Logo Showcase */}
              <div className="relative mx-auto w-44 h-44 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 flex items-center justify-center p-3 mb-6">
                <img
                  src="/logo-mr.png"
                  alt="Matthias Radder Hexagonal MR Emblem"
                  className="w-full h-full object-contain filter contrast-125 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-1 text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  MONOGRAM // MR
                </div>
              </div>

              {/* Status breakdown */}
              <div className="space-y-3 font-mono text-left">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-neutral-500">IDENTITEIT:</span>
                  <span className="text-white font-semibold">Matthias Radder (MR)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-neutral-500">STUDIO FOCUS:</span>
                  <span className="text-emerald-400">Deep Domain + Code</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-neutral-500">AI / AGENTIC:</span>
                  <span className="text-cyan-400">Antigravity IDE & Rapid Vercel</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-neutral-500">INFRASTRUKTUUR:</span>
                  <span className="text-neutral-300">OpenShift / eBPF / Local-First</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5">
                  <span className="text-neutral-500">FYSIEKE DOORVERTALING:</span>
                  <span className="text-amber-400">Storefronts & Fleets</span>
                </div>
              </div>

              {/* Mini Terminal Output */}
              <div className="mt-4 p-3 rounded-lg bg-black/80 border border-white/10 font-mono text-[11px] text-emerald-400/90 text-left space-y-1">
                <div className="text-neutral-500">$ mr_engine --evaluate-brief</div>
                <div>&gt; standard_agency: [rejected: surface_only]</div>
                <div className="text-white">&gt; mr_studio: [domain_engine_built]</div>
                <div className="text-neutral-400">&gt; status: 100% operational</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
